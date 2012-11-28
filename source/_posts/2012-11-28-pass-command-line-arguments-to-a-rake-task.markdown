---
layout: post
title: "pass command line arguments to a rake task"
date: 2012-11-28 08:02
comments: true
categories: [ruby, rake, 'command line'] 
---
Sometime, We got a rake task that We are making that needs to insert a value into multiple databases.

We'd like to be able to pass this value into the rake task from the command line, or from another rake task, how can We do this?

[reference](rake.rubyforge.org/files/doc/rakefile_rdoc.html)

```ruby
require 'rake'

task :my_task, :arg1, :arg2 do |t, args|
  puts "Args were: #{args}"
end

task :invoke_my_task do
  Rake.application.invoke_task("my_task[1, 2]")
end

# or if you prefer this syntax...
task :invoke_my_task_2 do
  Rake::Task[:my_task].invoke(3, 4)
end

# a task with prerequisites passes its 
# arguments to it prerequisites
task :with_prerequisite, :arg1, :arg2, :needs => :my_task

# equivalently...
task :with_prerequisite_2, [:arg1, :arg2] => :my_task

# to specify default values, 
# we take advantage of args being a Rake::TaskArguments object
task :with_defaults, :arg1, :arg2 do |t, args|
  args.with_defaults(:arg1 => :default_1, :arg2 => :default_2)
  puts "Args with defaults were: #{args}"
end
```
Use it like below:
    > rake my_task[1,2]
    Args were: {:arg1=>"1", :arg2=>"2"}

    > rake "my_task[1, 2]"
    Args were: {:arg1=>"1", :arg2=>"2"}

    > rake invoke_my_task
    Args were: {:arg1=>"1", :arg2=>"2"}

    > rake invoke_my_task_2
    Args were: {:arg1=>3, :arg2=>4}

    > rake with_prerequisite[5,6]
    Args were: {:arg1=>"5", :arg2=>"6"}

    > rake with_prerequisite_2[7,8]
    Args were: {:arg1=>"7", :arg2=>"8"}

    > rake with_defaults
    Args with defaults were: {:arg1=>:default_1, :arg2=>:default_2}

    > rake with_defaults['x','y']
    Args with defaults were: {:arg1=>"x", :arg2=>"y"}
