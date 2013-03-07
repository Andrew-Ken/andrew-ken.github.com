---
layout: post
title: "Use view helper at controller"
date: 2013-03-07 08:42
comments: true
categories: [helper view]
---

[guide](http://guides.rubyonrails.org/form_helpers.html)

[api](http://api.rubyonrails.org/classes/AbstractController/Helpers/ClassMethods.html#method-i-helper)

```ruby
helper :foo             # => requires 'foo_helper' and includes FooHelper
helper 'resources/foo'  # => requires 'resources/foo_helper' and includes Resources::FooHelper

# One line
helper { def hello() "Hello, world!" end }

# Multi-line
helper do
  def foo(bar)
    "#{bar} is the very best"
  end
end

class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by_id(session[:user])
  end

   def logged_in?
     current_user != nil
   end
end

```
The answer depends on the Rails version.
Rails >= 3.1

Change the include_all_helpers config to false in any environment where you want to apply the configuration. If you want the config to apply to all environments, change it in application.rb. 

```ruby
config.action_controller.include_all_helpers = false
```
When false, it will skip the inclusion.
Rails < 3.1

Delete the following line from ApplicationController
```ruby
helper :all
```
In this way each controller will load its own helpers. 

