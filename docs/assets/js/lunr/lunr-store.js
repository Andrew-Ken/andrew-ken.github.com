var store = [{
        "title": "how to use submodule brief instruction",
        "excerpt":"# get the submodule initially git submodule add ssh://bla submodule_dir git submodule init # time passes, submodule upstream is updated # and you now want to update # change to the submodule directory cd submodule_dir # checkout desired branch git checkout master # update git pull # get back to...","categories": ["git","submodule"],
        "tags": [],
        "url": "/git/submodule/2010/01/31/how-to-use-submodule-brief-instruction.html",
        "teaser": null
      },{
        "title": "some command line tools",
        "excerpt":"Some frequently use: du -sh `ls .` for i in G M K; do du -ah | grep [0-9]$i | sort -nr -k 1; done | head -n 11 dir | gvim - How to find - Size of a directory &amp; Free disk space du -sh `ls .` du...","categories": ["linux","cmd","shell"],
        "tags": [],
        "url": "/linux/cmd/shell/2010/02/18/some-command-line-tools.html",
        "teaser": null
      },{
        "title": "learn by practice extend and include",
        "excerpt":"Here is some examples to help understand extend and include module M_A def test puts true end end module M_B def test puts false end end class A include M_A def meta_class class &lt;&lt; A; self; end; end end A.test A.new.test A.instance_methods.grep /test/ A.new.meta_class.singleton_methods.grep /test/ class A include M_B end...","categories": ["ruby","extend","include","metaprogram"],
        "tags": [],
        "url": "/ruby/extend/include/metaprogram/2010/03/25/learn-by-practice-extend-and-include.html",
        "teaser": null
      },{
        "title": "triangle problem",
        "excerpt":"Starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23. 3 7 4 2 4 6 8 5 9 3 That is, 3 + 7 + 4 + 9 = 23. &lt;/pre&gt; Find the...","categories": ["algorithm","ruby"],
        "tags": [],
        "url": "/algorithm/ruby/2010/04/10/triangle-problem.html",
        "teaser": null
      },{
        "title": "happy number and prime",
        "excerpt":"A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include...","categories": ["algorithm","ruby"],
        "tags": [],
        "url": "/algorithm/ruby/2010/04/11/happy-number-and-prime.html",
        "teaser": null
      },{
        "title": "how to revert git commit remote",
        "excerpt":"First, There are serveral revert situation: Local: # this will detach your HEAD, i.e. leave you with no branch checked out. git checkout 0d1d7fc32 git checkout -b old-state 0d1d7fc32 # Don't do it if you have uncommitted work you want to keep git reset --hard 0d1d7fc32 # Alternatively, if there's...","categories": ["git","revert"],
        "tags": [],
        "url": "/git/revert/2010/05/22/how-to-revert-git-commit-remote.html",
        "teaser": null
      },{
        "title": "basic metaprogramming ruby class_eval and instance_eval",
        "excerpt":"class A def create_method(name) self.class.instance_eval do define_method(name) { puts \"Nice! I'm #{name}\" } def human? true end end end def create_class_method(name) self.class.instance_eval do self.class.send( :define_method, name) { puts \"Nice! I'm #{name}\" } end end def create_instance_method(name) (class &lt;&lt; self; self; end).class_eval do #self.class.send( :define_method, name) { puts \"Nice! I'm #{name}\"...","categories": ["ruby","metaprogramming","class_eval","instance_eval"],
        "tags": [],
        "url": "/ruby/metaprogramming/class_eval/instance_eval/2010/07/20/basic-metaprogramming-ruby-class-eval-and-instance-eval.html",
        "teaser": null
      },{
        "title": "create ruby dynamic class",
        "excerpt":"dynamic_name = \"TestEval2\" Object.const_set(dynamic_name, Class.new) dummy2 = eval(\"#{dynamic_name}\") puts \"dummy2: #{dummy2}\" dynamic_name = \"ClassName\" Object.const_set(dynamic_name, Class.new { def method1() 42 end }) ClassName.new.method1 #=&gt; 42 class_name = 'foo'.capitalize klass = Object.const_set(class_name,Class.new) names = ['instance1', 'instance2'] # Array of instance vars klass.class_eval do attr_accessor *names define_method(:initialize) do |*values| names.each_with_index do |name,i|...","categories": ["ruby","class","dynamic","metaprogramming"],
        "tags": [],
        "url": "/ruby/class/dynamic/metaprogramming/2011/02/02/create-ruby-dynamic-class.html",
        "teaser": null
      },{
        "title": "ruby selenium-webdriver watir-webdriver",
        "excerpt":"There are many other Selenium gems out there, but this is the only official, maintained gem. If you’re looking for a slightly higher level API built on the same technology, you may want to check out watir-webdriver or capybara. example code require \"selenium-webdriver\" driver = Selenium::WebDriver.for :firefox driver.navigate.to \"http://google.com\" element...","categories": ["selenium-webdriver","rspec"],
        "tags": [],
        "url": "/selenium-webdriver/rspec/2011/10/26/ruby-selenium-webdriver-watir-webdriver.html",
        "teaser": null
      },{
        "title": "webkit and rspec without x server",
        "excerpt":"capybara-webkit problems running capybara-webkit with the Headless gem, Xvfb and our ci server. We use this setup for automatic integration testing and javascript testing of our Ruby on Rails 3.2 app. During the tests it complains that webkit_server: cannot connect to X server need to rspec to config as: require...","categories": ["rspec","headless","xserver","capybara-webkit","xvfb"],
        "tags": [],
        "url": "/rspec/headless/xserver/capybara-webkit/xvfb/2011/11/06/webkit-and-rspec-without-x-server.html",
        "teaser": null
      },{
        "title": "retry and retry code blocks",
        "excerpt":"simple way to rescue and retry several tries = 0 begin # some routine rescue tries += 1 retry if tries &lt;= 3 puts \"no dice!\" end #or 3.times do begin ... rescue ... end break end with_rescue class Integer def times_try n = self begin n -= 1 yield...","categories": ["block","retry","rescue"],
        "tags": [],
        "url": "/block/retry/rescue/2011/12/26/retry-and-retry-code-blocks.html",
        "teaser": null
      },{
        "title": "octopress no lexer error",
        "excerpt":"just got error     /Users/ken/.rvm/gems/ruby-1.9.3-p327/gems/rubypython-0.5.3/lib/rubypython/rubypyproxy.rb:198:in `method_missing’: ClassNotFound: no lexer for alias ‘Ruby’ found (RubyPython::PythonError)    the problem is I put Ruby as syntax, It should be just ruby  ","categories": ["octopress","syntax"],
        "tags": [],
        "url": "/octopress/syntax/2012/04/20/octopress-no-lexer-error.html",
        "teaser": null
      },{
        "title": "some ruby on rails interview questions",
        "excerpt":"what’s N+1 problem, how to solve the problem clients = Client.limit(10) clients.each do |client| puts client.address.postcode end clients = Client.includes(:address).limit(10) clients.each do |client| puts client.address.postcode end what’s the different with joins and includes explain eager loading and lazy loading how to get the top 10 average rating product name: Product:...","categories": ["ruby","rails","rails3","questions","interview"],
        "tags": [],
        "url": "/ruby/rails/rails3/questions/interview/2012/08/04/some-ruby-on-rails-interview-questions.html",
        "teaser": null
      },{
        "title": "How to proxy a domain to localhost",
        "excerpt":"STEP 1: Edit your hosts file by typing: sudo vim /etc/hosts Add the following line to the file: 127.0.0.1 google.com (or whatever other hostname you want proxied) STEP 2: Type the following into the command line to (ip foward)set up the server port to 80 in this case it is...","categories": ["mac","bash","ipfw"],
        "tags": [],
        "url": "/mac/bash/ipfw/2012/11/09/how-to-proxy-a-domain-as-local.html",
        "teaser": null
      },{
        "title": "how to use observer and call back",
        "excerpt":"Add configuration #config/application.rb config.active_record.observers = :order_observer Create a Observer Class class OrderObserver &lt; ActiveRecord::Observer def after_update(order) order.update_column('type_state', \"UPDATED\") end end or we can use the way to register #config/application.rb config.active_record.observers = :notification_observer class NotificationObserver &lt; ActiveRecord::Observer observe :account, :balance def after_update(order) order.update_column('type_state', \"UPDATED\") end end Any questions on this, please...","categories": ["rails3"],
        "tags": [],
        "url": "/rails3/2012/11/12/how-to-use-observer-and-call-back.html",
        "teaser": null
      },{
        "title": "Learning regular expressions",
        "excerpt":"Learning Regular expressions require regular practice. Here are a few ways to practice:      rails c   Rubular   Any questions on this, please feel free to ask. We’re here to help…  ","categories": ["regular expressions"],
        "tags": [],
        "url": "/regular%20expressions/2012/11/12/learning-regular-expressions.html",
        "teaser": null
      },{
        "title": "GCC command line tools",
        "excerpt":"When the bundling gems fail in Mac OS X, Download the latest GCC standalone file from the link below:   gcc standalone tools   Any questions on this, please feel free to ask. We’re here to help…  ","categories": ["mac","gcc","ruby gems"],
        "tags": [],
        "url": "/mac/gcc/ruby%20gems/2012/11/12/gcc-command-line-tools.html",
        "teaser": null
      },{
        "title": "Mountain Lion and Homebrew",
        "excerpt":"SOURCE Get Mountain Lion and Homebrew to Be Happy: 1) Install XCode 4.4 into /Applications Get it from the App Store. 2) Install Command Line Tools In XCode’s Preferences &gt; Downloads you can install command line tools. 3) Let Everyone Know Where XCode Is sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer 4) Install...","categories": ["mac","gcc","homebrew","ruby gems"],
        "tags": [],
        "url": "/mac/gcc/homebrew/ruby%20gems/2012/11/12/mountain-lion-and-homebrew.html",
        "teaser": null
      },{
        "title": "Git alias",
        "excerpt":"Following are some of the common git aliases, people use. Add them to ~/.bash_profile alias g='git' alias gst='git status' alias gs='git push' alias gc='git commit' alias gca='git commit -a' alias ga='git add' alias gco='git checkout' alias gb='git branch' alias gm='git merge' alias gd=\"git diff\" An additional syntax highlighting can be...","categories": ["git","alias"],
        "tags": [],
        "url": "/git/alias/2012/11/13/git-alias.html",
        "teaser": null
      },{
        "title": "Configuring Mac Vim for Programming",
        "excerpt":"Download and install the latest mvim from Macvim Link Clone the latest dotvim configuration from the Web. Here’s one good source: Dotvim Link Follow the steps given in the dotvim config readme to Setup .vim and .vimrc files for enabling the best settings Make sure that the git source for...","categories": ["macvim","dotvim"],
        "tags": [],
        "url": "/macvim/dotvim/2012/11/13/configuring-mac-vim-for-programming.html",
        "teaser": null
      },{
        "title": "Setting up RSpec and Cucumber",
        "excerpt":"##Including RSpec in your code:## Add the following in your Gemfile File: Gemfile group :test, :development do gem \"rspec-rails\", \"~&gt; 2.0\" end bundle Installing RSpec rails g rspec:install Configuring RSpec File: config/application.rb config.generators do |g| g.test_framework :rspec g.integration_tool :rspec end Now adding a new scaffold or resource will automatically include...","categories": ["rspec","cucumber","rails","tableish"],
        "tags": [],
        "url": "/rspec/cucumber/rails/tableish/2012/11/14/setting-up-rspec-and-cucumber.html",
        "teaser": null
      },{
        "title": "Using Deligate in ActiveRecord to avoid dots",
        "excerpt":"##Adding deligate method in the model## There are various situations where we might be using methods from the child model from its parents model. Common example is user and posts class Post belongs_to :user end class User has_many :posts end To make a call to find a post with category...","categories": ["rails","activerecord","deligate"],
        "tags": [],
        "url": "/rails/activerecord/deligate/2012/11/14/using-deligate-in-activerecord-to-avoid-dots.html",
        "teaser": null
      },{
        "title": "RVM Setup and Environments",
        "excerpt":"RVM is the Ruby environment manager. Here are some of the commonly used commands. Installing rvm in unix/mac curl -L https://get.rvm.io | bash -s stable Setting up the bash profile for enabling rvm File: .bash_profile [[ -s \"$HOME/.rvm/scripts/rvm\" ]] &amp;&amp; . \"$HOME/.rvm/scripts/rvm\" # This loads RVM Dont forget to source...","categories": ["rvm","ruby","rails"],
        "tags": [],
        "url": "/rvm/ruby/rails/2012/11/15/rvm-setup-and-environments.html",
        "teaser": null
      },{
        "title": "Setting up Heroku",
        "excerpt":"##Here are the steps to push a rails project to Heroku## Install Heroku gem install heroku 2. Create a heroku login with email and password heroku Create 3) Change the name of the app heroku apps:rename demo-app devcenter rename link 4) Push the file to heroku git push heroku master...","categories": ["deployment","rails"],
        "tags": [],
        "url": "/deployment/rails/2012/11/15/setting-up-heroku.html",
        "teaser": null
      },{
        "title": "Change Computer/Host Name Mac OsX",
        "excerpt":"One of the most common problems that we come across is when the programmer tries to setup the Mac OS X - name/hostname for the computer, since it takes up most space in the Terminal bash prompt and since the default ones are not so fancy, when accessed over the...","categories": ["mac","hostname"],
        "tags": [],
        "url": "/mac/hostname/2012/11/15/change-computer-slash-host-name-mac-osx.html",
        "teaser": null
      },{
        "title": "Debugging using pry",
        "excerpt":"Add the following gems to the Gemfile and bundle install File: Gemfile gem 'pry' gem 'pry-nav' gem 'pry-remote' The pry-nav gem allows us to use the following command for adding breakpoints into our application binding.pry Add the following shortcuts to ~/.pryrc to enable navigation while running debugging File: ~/.pryrc Pry.commands.alias_command...","categories": ["rails","console","pry"],
        "tags": [],
        "url": "/rails/console/pry/2012/11/15/debugging-using-pry.html",
        "teaser": null
      },{
        "title": "cases and switches in ruby",
        "excerpt":"One of the common questions that we get about people coming from other programing languages is with the way switch cases work in ruby. The case..switch works like a ‘===’ operator and not like a ‘==’ operator. Here are a few examples of how it work. Here are a few...","categories": ["ruby","syntax","switch case","operators"],
        "tags": [],
        "url": "/ruby/syntax/switch%20case/operators/2012/11/20/cases-and-switches-in-ruby.html",
        "teaser": null
      },{
        "title": "binding pry to rails console",
        "excerpt":"Add the following lines to make the rails console to use pry. make sure that   File: Gemfile   gem 'pry'   File: config/environments/development.rb   silence_warnings do   require 'pry'   IRB = Pry end   Any questions on this, please feel free to ask. We’re here to help…  ","categories": ["pry","rails console","irb"],
        "tags": [],
        "url": "/pry/rails%20console/irb/2012/11/20/binding-pry-to-rails-console.html",
        "teaser": null
      },{
        "title": "Understanding Ruby Object Model",
        "excerpt":"        classes store methods            objects store instance variables          Any questions on this, please feel free to ask. We’re here to help…  ","categories": ["ruby","object","metaprogramming"],
        "tags": [],
        "url": "/ruby/object/metaprogramming/2012/11/20/understand-ruby-object-model.html",
        "teaser": null
      },{
        "title": "Using nohup to prevent processes stopping on disconnect",
        "excerpt":"nohup is an unix command which prevents “hangups on logout” which also means that if you decide you need to logoff the from the session with the server, the command will continue to run as the user. Syntax: nohup run_command &amp; run_command in the above Syntax is the name of...","categories": ["unix","nohup","screen"],
        "tags": [],
        "url": "/unix/nohup/screen/2012/11/24/using-nohup-to-prevent-processes-stopping-on-disconnect.html",
        "teaser": null
      },{
        "title": "using screen to keep unix sessions active",
        "excerpt":"In Unix, what is screen, and how do I use it? The screen program allows you to use multiple windows (virtual VT100 terminals) in Unix. Note: UITS does not support screen. ###Features### If your local computer crashes, or you are connected via a modem and lose the connection, the processes...","categories": ["unix","screen","nohup"],
        "tags": [],
        "url": "/unix/screen/nohup/2012/11/24/using-screen-to-keep-unix-sessions-active.html",
        "teaser": null
      },{
        "title": "Setting up a development mailer for Rails with a gmail account",
        "excerpt":"Setting up the rails mailer for development purposes is much easier. using the action mailer to configure the gmail services, is just a few commands and configurations away… Make sure that these settings are not used in production. Firstly Sign Up for a dummy gmail account. Next add the following...","categories": ["rails","actionmailer","sendmail","gmail"],
        "tags": [],
        "url": "/rails/actionmailer/sendmail/gmail/2012/11/24/setting-up-a-development-mailer-for-rails-with-a-gmail-account.html",
        "teaser": null
      },{
        "title": "Working with Processes in Unix",
        "excerpt":"There are two commands heavily used by developers for checking their pocesses in unix. Firstly it is the search for processes ps -ef | grep search_process or ps aux | grep search_process what’s the difference, well both do the same task link Both list all processes of all users. In...","categories": ["unix","ps","aux"],
        "tags": [],
        "url": "/unix/ps/aux/2012/11/24/working-with-processes-in-unix.html",
        "teaser": null
      },{
        "title": "Ruby Comparison Operators",
        "excerpt":"There has been lots of questions on the comparison operators. So we yanked it for you.. OperatorDescriptionExample == Checks if the value of two operands are equal or not, if yes then condition becomes true. (a == b) is not true. != Checks if the value of two operands are...","categories": ["ruby","operators","triple equal","double equal"],
        "tags": [],
        "url": "/ruby/operators/triple%20equal/double%20equal/2012/11/24/ruby-comparison-operators.html",
        "teaser": null
      },{
        "title": "Extend vs Include in Ruby Module",
        "excerpt":"Extend vs. Include Modules are used for mixins, ruby’s way of handling muliple inheritance without the complications. There are two ways to mixin, either include or extend to mix in a module’s functionality into a class. Difference: include makes the module’s methods available to the instance of a class, attached...","categories": ["ruby","extend","include"],
        "tags": [],
        "url": "/ruby/extend/include/2012/11/24/extend-vs-include-in-ruby-module.html",
        "teaser": null
      },{
        "title": "Initializing Custom YML Configuration Variables for Different Environments in Rails",
        "excerpt":"Another common problem that rails developers face while developing web applications that connect to multiple external systems and api’s is configuring the the same parameters for different environments. The simplest way - Add a folder to the config folder of your application Add all the configuration in as a yml...","categories": ["rails","yml","configuration","environments"],
        "tags": [],
        "url": "/rails/yml/configuration/environments/2012/11/26/initializing-custom-yml-configuration-variables-for-environments-in-rails.html",
        "teaser": null
      },{
        "title": "Applying Common Filtering for Rails Api Based Applications",
        "excerpt":"Sometimes there are common sets of fields and id’s that we would like the api to filter before sending the details to the client. It would be great if we can place them in a common place so that they can be changed anytime. File: lib/api_config.rb # Filters out the...","categories": ["rails","api","configuration"],
        "tags": [],
        "url": "/rails/api/configuration/2012/11/26/applying-common-filtering-for-rails-api-based-applications.html",
        "teaser": null
      },{
        "title": "Working with Digests and Signatures",
        "excerpt":"###MD5 digests### MD5 is a one-way hashing algorithm for creating digest “signatures” or checksums of strings. MD5 digests are 128 bit (16 byte) signatures. MD5 is the most common method of providing checksums for files downloaded over the internet. To create a checksum of an entire file or text convert...","categories": ["ruby","md5","hmac sha1"],
        "tags": [],
        "url": "/ruby/md5/hmac%20sha1/2012/11/28/working-on-digests-and-signatures.html",
        "teaser": null
      },{
        "title": "Timestamps strftime vs strptime",
        "excerpt":"###strftime### Formats date according to the directives in the given format string. The directives begins with a percent (%) character. Any text not listed as a directive will be passed through to the output string. source link puts Time.now.strftime(\"%FT%T%:z\") # %F - The ISO 8601 date format (%Y-%m-%d) # %T...","categories": ["ruby","timestamp","strftime","strptime"],
        "tags": [],
        "url": "/ruby/timestamp/strftime/strptime/2012/11/28/timestamps-strftime-vs-strptime.html",
        "teaser": null
      },{
        "title": "Using NET to Post API Calls With or Without Secure Connections",
        "excerpt":"Using Net module is the best and the eaiest ways to post data or make api calls to urls. Here’s an example def post_using_net(url, params={}) uri = URI.parse(url) http = Net::HTTP.new(uri.host, uri.port) http.use_ssl = true http.verify_mode = OpenSSL::SSL::VERIFY_NONE response = http.post(uri.request_uri, params.to_query) response end for connections that does not use...","categories": ["ruby","net"],
        "tags": [],
        "url": "/ruby/net/2012/11/28/using-net-to-post.html",
        "teaser": null
      },{
        "title": "Passing Command Line Arguments to Rake Tasks",
        "excerpt":"Sometimes, we need to rake tasks that inserts a paticular user entered value into multiple databases. We’d like to be able to pass this value into the rake task from the command line, or from another rake task, how can We do this? require 'rake' task :my_task, :arg1, :arg2 do...","categories": ["ruby","rake","command line"],
        "tags": [],
        "url": "/ruby/rake/command%20line/2012/11/28/pass-command-line-arguments-to-a-rake-task.html",
        "teaser": null
      },{
        "title": "Installing rvm on a Mac - Issues With gcc",
        "excerpt":"While installing RVM on a mac, one of the major problems we face are due to missing Xcode. We usually get the error below: rvm install 1.9.3 Installing Ruby from source to: /Users/jamie/.rvm/rubies/ruby-1.9.3-p0, this may take a while depending on your cpu(s)... ruby-1.9.3-p0 - #fetching ruby-1.9.3-p0 - #extracted to /Users/jamie/.rvm/src/ruby-1.9.3-p0...","categories": ["rvm","gcc","lion","mac","xcode"],
        "tags": [],
        "url": "/rvm/gcc/lion/mac/xcode/2012/11/28/install-rvm-at-mac-with-gcc-problem.html",
        "teaser": null
      },{
        "title": "generate random number in ruby",
        "excerpt":"Sometimes we would also need to generate x random numbers from n to m x.times.map{n + Random.rand( m - n )} Random.new.rand(n...m) #in ruby 1.9.3 Random.rand(n...m) if you only want to select a random item form array. %(a b c d e).sample (n...m).to_a.sample Some other ways by using SecureRandom require...","categories": ["ruby","random","numbers"],
        "tags": [],
        "url": "/ruby/random/numbers/2012/11/28/generate-random-number-in-ruby.html",
        "teaser": null
      },{
        "title": "generate random string in ruby",
        "excerpt":"Sometimes we need to generate a ‘n’ character random string. Here are a few: Only upper case alphabets [A-Z] value = \"\"; 8.times{value &lt;&lt; (65 + rand(25)).chr} &gt;&gt;} #or (0...8).map{65.+(rand(26)).chr}.join (0...8).map{ ('A'..'Z').to_a[rand(26)] }.join Lower case and upper case [a-zA-Z] value = \"\"; 8.times{value &lt;&lt; ((rand(2)==1?65:97) + rand(25)).chr} &gt;&gt;} #or o...","categories": ["ruby","random","string"],
        "tags": [],
        "url": "/ruby/random/string/2012/11/28/generate-random-string-in-ruby.html",
        "teaser": null
      },{
        "title": "Sudo vs RVMSudo",
        "excerpt":"RVM is a great command-line tool which allows you to easily install, manage, and work with multiple ruby environments from interpreters to sets of gems. This is exactly what makes it special, its easy to install RVM with just a few commands.. Installing RVM: curl -L https://get.rvm.io | bash -s...","categories": ["rvm","sudo","rvmsudo"],
        "tags": [],
        "url": "/rvm/sudo/rvmsudo/2012/12/02/sudo-vs-rvmsudo.html",
        "teaser": null
      },{
        "title": "heroku deploy procedure",
        "excerpt":"Just keep record of the procedure to deploy heroku install heroku heroku gem(deprecated) or toolbelt sudo aptitude install heroku-toolbelt #or for ubuntu wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh login with credentials heroku login #Enter your Heroku credentials. #Email: adam@example.com #Password: #Could not find an existing public key. #Would you like to...","categories": ["rails3","heroku","deploy","pg","ssh","git"],
        "tags": [],
        "url": "/rails3/heroku/deploy/pg/ssh/git/2012/12/02/heroku-deploy-procedure.html",
        "teaser": null
      },{
        "title": "capybara webkit or selenium or watir to simulate browser behavior",
        "excerpt":"Sometimes we want to simulate browser behavior. The situation can be test or automation script. ##install capybara-webkit #capybara-webkit need qt #ubuntu sudo aptitude install libqt4-dev ##using capybara dsl require 'capybara' require 'capybara/dsl' Capybara.default_driver = :webkit module MyModule include Capybara::DSL def login! within(\"//form[@id='session']\") do fill_in 'Login', :with =&gt; 'user@example.com' fill_in 'Password',...","categories": ["ruby","selenium","capybara","webkit"],
        "tags": [],
        "url": "/ruby/selenium/capybara/webkit/2012/12/06/capybara-webkit-or-selenium-or-watir-to-simulate-browser-behavior.html",
        "teaser": null
      },{
        "title": "rspec test failed after changing to capybara-webkit",
        "excerpt":"problem as written some RSpec test for my rails 3.2 application and because I was annyoed by the Browser popping up ich tried to change from firefox to capybara-webkit. After this all tests still run, except one. The line that is failing is: expect { click_button \"Create\" }.to change(Answer, :count).by(count)...","categories": ["rspec","capybara-webkit"],
        "tags": [],
        "url": "/rspec/capybara-webkit/2012/12/09/rspec-test-failed-after-changing-to-capybara-webkit.html",
        "teaser": null
      },{
        "title": "ruby timeout",
        "excerpt":"standard timeout require 'timeout' begin complete_results = Timeout.timeout(1) do sleep(2) end rescue Timeout::Error puts 'Print me something please' end sometime, the code inner with begin will catch exception such as: require 'timeout' puts \"#{Time.now}: Starting\" begin Timeout.timeout(5) do begin sleep 10 rescue Exception =&gt; e puts \"#{Time.now}: Caught an exception:...","categories": ["ruby","rescue","timeout","exception"],
        "tags": [],
        "url": "/ruby/rescue/timeout/exception/2012/12/09/ruby-timeout.html",
        "teaser": null
      },{
        "title": "4 ways to call a ruby method",
        "excerpt":"There is 4 ways to excute ruby method. Two of them can excute private method out of self class. I’m pretty sure that you have heard lots about ruby, specially as being a dynamic language, you can create methods on the fly, add instance variables, define constants and invoke existing...","categories": ["ruby","metaprogramming","dynamic","method"],
        "tags": [],
        "url": "/ruby/metaprogramming/dynamic/method/2012/12/21/4-ways-to-call-a-ruby-method.html",
        "teaser": null
      },{
        "title": "Javascript Vs Ruby methods",
        "excerpt":"source &lt;table width=100% border=”1px” valign=’top’&gt; ARRAYS RubyJavascript ```ruby a = [\"1\", \"2\"] a.push(\"3\") ``` ```ruby a.map!(&amp;:to_i) # [1, 2, 3] ``` ```ruby a.delete_at(1) a # [1, 3] ``` ```ruby a.reverse # [3, 1] ``` ```ruby a.unshift(777) # [777, 3, 1] ``` ```javascript var a = [\"1\", \"2\"]; a.push(\"3\"); ``` ```javascript...","categories": [],
        "tags": [],
        "url": "/2013/01/04/javascript-vs-ruby-methods.html",
        "teaser": null
      },{
        "title": "Using nano as a editor",
        "excerpt":"Installing(if not available) nano for mac/ubuntu For Mac: Download Page ./configure make sudo make install For Ubuntu: aptitude install nano Basic commands To create or edit a file, use the following command: nano tmp.html At the bottom of the screen you should see a bunch of commands. The caret ^...","categories": [],
        "tags": [],
        "url": "/2013/01/14/using-nano-as-a-editor.html",
        "teaser": null
      },{
        "title": "Rails integrate with Google analytics Api",
        "excerpt":"Here is serveral usefull source: gattica rugalytics ruby toolbox Google api Doc # Include the gem require 'gattica' # Login ga = Gattica.new({ :email =&gt; 'email@gmail.com', :password =&gt; 'password' }) # Get a list of accounts accounts = ga.accounts # Choose the first account ga.profile_id = accounts.first.profile_id # Get the...","categories": ["rails","google","analytics","api"],
        "tags": [],
        "url": "/rails/google/analytics/api/2013/02/10/rails-integrate-with-google-analytics-api.html",
        "teaser": null
      },{
        "title": "Use view helper at controller",
        "excerpt":"guide api helper :foo # =&gt; requires 'foo_helper' and includes FooHelper helper 'resources/foo' # =&gt; requires 'resources/foo_helper' and includes Resources::FooHelper # One line helper { def hello() \"Hello, world!\" end } # Multi-line helper do def foo(bar) \"#{bar} is the very best\" end end class ApplicationController &lt; ActionController::Base helper_method :current_user,...","categories": ["helper view"],
        "tags": [],
        "url": "/helper%20view/2013/03/07/use-view-helper-at-controller.html",
        "teaser": null
      },{
        "title": "github and multiple oauth provider",
        "excerpt":"Allowing users to login with multiple authentication providers brings great benefits but also results in some annoying edge cases. For example, what happens when they login with one provider, logout and then login with another? What happens when they try to login with one having already logged in with another?...","categories": ["github","omniauth","provider"],
        "tags": [],
        "url": "/github/omniauth/provider/2013/03/20/github-and-multiple-oauth-provider.html",
        "teaser": null
      },{
        "title": "Dockerize your own blog using jekyll",
        "excerpt":"Bootstrap your own jekyll blog with docker-compose Source Code Requirements: docker docker-compose Mac (kidding.. tested on a mac, let me know if it doesnt work for you) Clone repo and run using command: wget -O /tmp/z.$$ https://github.com/andrewsheelan/docker-bootstrap-jekyll/archive/refs/heads/master.zip &amp;&amp; unzip -d . /tmp/z.$$ &amp;&amp; rm /tmp/z.$$ cd docker-bootstrap-jekyll-master ./bootstrap Goto http://localhost:4000...","categories": ["jekyll"],
        "tags": [],
        "url": "/jekyll/2022/03/21/docker-for-jekyll.html",
        "teaser": null
      },{
        "title": "Docker on Rails 7",
        "excerpt":"Simple dev bootstrap rails with docker-compose. You’ll be up and running as quickly as 1..2…3! [ Source Code ] Requirements docker docker-compose Mac (kidding.. tested on a mac, let me know if it doesnt work for you) Get started Unix/Mac wget -O /tmp/z.$$ https://github.com/andrewsheelan/docker-bootstrap-rails/archive/refs/heads/master.zip &amp;&amp; unzip -d . /tmp/z.$$ &amp;&amp;...","categories": ["rails"],
        "tags": [],
        "url": "/rails/2022/03/21/docker-on-rails7.html",
        "teaser": null
      }]
