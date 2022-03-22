---
layout: posts
title: "github and multiple oauth provider"
date: 2013-03-20 08:01
comments: true
categories: [github, omniauth, provider]
author: Ken Lu
author_profile: true
---

Allowing users to login with multiple authentication providers brings great benefits but also results in some annoying edge cases. For example, what happens when they login with one provider, logout and then login with another? What happens when they try to login with one having already logged in with another?

Typically authentication systems have a User model which handles most of the authentication logic but having multiple logins forces you to correctly separate the concepts of an Identity and a User. An Identity is a particular authentication method which a user has used to identify themselves with your site whilst a User manages data which is directly related to your site itself.

So to start you will want to create both User and Identity models. We will also add some convenience methods for creating identities and users when the OmniAuth callback is invoked:
```ruby
# app/models/user.rb
class User < ActiveRecord::Base
  has_many :identities

  def self.create_with_omniauth(info)
    create(name: info['name'])
  end
end
   
# app/models/identity.rb
class Identity < ActiveRecord::Base
  belongs_to :user

  def self.find_with_omniauth(auth)
    find_by_provider_and_uid(auth['provider'], auth['uid'])
  end

  def self.create_with_omniauth(auth)
    create(uid: auth['uid'], provider: auth['provider'])
  end
end
```
So a user can have multiple identities and each identity belongs to a single user.

Next we need to handle logging in and logging out. This is managing session data since a logged in user is simply a person who has some session data confirming that they have been logged in. The OmniAuth callback which a provider will redirect to upon authenticating a user is /auth/:provider/callback so lets setup a route and a controller to handle this. We should also setup some helper methods on our Application Controller for handling the current user:
```ruby
# config/routes.rb
YourAppName::Application.routes.draw do
  match '/auth/:provider/callback', to: 'sessions#create'
  match '/logout', to: 'sessions#destroy'
end

#app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  def create
    # Login the User here
  end

  def destroy
    # Logout the User here
  end
end

#app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  protect_from_forgery

  protected

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def signed_in?
    !!current_user
  end
  helper_method :current_user, :signed_in?

  def current_user=(user)
    @current_user = user
    session[:user_id] = user.nil? ? user : user.id
  end
end
```
Now to login, all a user needs to do is go to /auth/provider and they will get redirected to Sessions Controller create method after authenticating. So there are a number of possibilities when they hit this action:

A user has never used your site before. They have no User model and no Identities either.
A user is logged out but they have logged into your site with a provider previously. They are now signing in with the same one again.
Just as above but they are now signing in with a different provider.
A user is logged in with a provider but they try to login with the same provider again.
A user is logged in but they try to login with a different provider.
The first two cases are just like a normal sign in process. The final 3 cases occur because we are allowing multiple providers and they can be tricky to handle.

Firstly, we need to grab authentication data given to us by the provider which is stored in request.env[omniauth.auth]. Then we need to check whether we have an identity which matches this data or create a new one.

How we proceed for here depends on whether the user is already logged in. If they aren't logged in then either they are a brand new user (so we treat their request like a registration) or they already have an account (so we treat this like a login request).

If they are logged in then we treat their request like they are trying to link an identity with their account. Either they are trying to link an identity which they have already linked (in which case we should display an error message telling them that) or it is a brand new identity so we go ahead and link it.

So at this point our skeleton create method looks like this:
```ruby
def create
  auth = request.env['omniauth.auth']
  # Find an identity here
  @identity = Identity.find_with_omniauth(auth)

  if @identity.nil?
    # If no identity was found, create a brand new one here
    @identity = Identity.create_with_omniauth(auth)
  end

  if signed_in?
    if @identity.user == current_user
      # User is signed in so they are trying to link an identity with their
      # account. But we found the identity and the user associated with it 
      # is the current user. So the identity is already associated with 
      # this user. So let's display an error message.
      redirect_to root_url, notice: "Already linked that account!"
    else
      # The identity is not associated with the current_user so lets 
      # associate the identity
      @identity.user = current_user
      @identity.save()
      redirect_to root_url, notice: "Successfully linked that account!"
    end
  else
    if @identity.user.present?
      # The identity we found had a user associated with it so let's 
      # just log them in here
      self.current_user = @identity.user
      redirect_to root_url, notice: "Signed in!"
    else
      # No user associated with the identity so we need to create a new one
      redirect_to new_user_url, notice: "Please finish registering"
    end
  end
end
```
So at this point, there are a couple of further considerations. Firstly on the signed in/identity not associated with user branch, there are two reasons why an identity might not be associated with a user. It could be that the identity is brand new, having never been used to sign in before. However, it could be that it has been used and so is already associated with a different user, although not necessarily a different person. Given that this user knew the login credentials for that identity, I think it is probably sufficiently prudent to assume that they are, in fact, the same person who also created the previous user. However, by simply reassigning the user to which the identity is associated with to the current one, you not only leave a user model potentially dangling with no identities to sign in with but also prevent the user from merging their data from their previous account in with this one. Resolving this will be dependent entirely on how much data, and the nature of that data, you have stored for each user but for sufficiently simple applications, you could at this point check to see if the old user has any identities left and, if not, delete that user. If the person using your site is likely to lose any data from this process then you would either need to make this sufficiently clear to them before proceeding or provide them with a way to migrate that data over (or handle it automatically, if possible).

Secondly, on the not signed in/no user model branch, you may need more registration data from your user than can be provided by your authentication providers. At this point, as I have assumed above, you can redirect them to a new user form and redirect them to this point if they try to access any other part of the app without completing it. Then create the user and log them in again when they have. Otherwise, if no further data is necessary or mandatory, you can go ahead and create a blank user model in the create method and log them straight in.

Finally, a few lose ends. Here is the destroy method for logging users out:
```ruby
def destroy
  self.current_user = nil
  redirect_to root_url, notice: "Signed out!"
end
```
You'll also find that the OmniAuth callback url does not correctly verify the rails authenticity token and so will destroy any session data upon returning, thereby logging your current user out. This will prevent them from associating a new identity with their current account. You can get around this by adding skip_before_filter :verify_authenticity_token, only: :create to your sessions controller but I am unsure of the security implications of this.

You'll also need some migrations:
```ruby
class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users
  end
end

class CreateIdentities < ActiveRecord::Migration
  def change
    create_table :identities do |t|
      t.string :uid
      t.string :provider
      t.references :user
    end

    add_index :identities, :user_id
  end
end
```
