---
layout: single
title: "4 ways to call a ruby method"
date: 2012-12-21 11:43
comments: true
categories: [ruby, metaprogramming, dynamic, method]
---
There is 4 ways to excute ruby method. Two of them can excute private method out of self class.

I’m pretty sure that you have heard lots about ruby, specially as being a dynamic language, you can create methods on the fly, add instance variables, define constants and invoke existing methods dynamically , and that’s what this post is all about :

As you know in ruby you can call a public instance method directly ,ex :
```ruby
s= "hi man"
p s.length #=> 6
p s.include? "hi" #=> true
```

One way to invoke a method dynamically in ruby is to send a message to the object :

```ruby
p s.send(:length) #=> 6
p s.send(:include?,"hi") #=> true
```
A second way is instantiate a method object and then call it:
```ruby
method_object = s.method(:length) 
p method_object.call #=> 6
method_object = s.method(:include?)
p method_object.call('hi')  #=> true
```
And the third way is to use the eval method:
```ruby
eval "s.length" #=> 6
eval "s.include? 'hi'" #=>true
```
Well, when to use what?

look at this script, it will be used to benchmark the 3 ways of calling :
```ruby
require "benchmark" 
test = "hi man" 
m = test.method(:length) 
n = 100000 
Benchmark.bmbm {|x| 
  x.report("call") { n.times { m.call } } 
  x.report("send") { n.times { test.send(:length) } } 
  x.report("eval") { n.times { eval "test.length" } } 
} 
#######################################
#####   The results
#######################################
#Rehearsal ----------------------------------------
#call   0.050000   0.020000   0.070000 (  0.077915)
#send   0.080000   0.000000   0.080000 (  0.086071)
#eval   0.360000   0.040000   0.400000 (  0.405647)
#------------------------------- total: 0.550000sec
 
#          user     system      total        real
#call   0.050000   0.020000   0.070000 (  0.072041)
#send   0.070000   0.000000   0.070000 (  0.077674)
#eval   0.370000   0.020000   0.390000 (  0.399442)
```
Well as you can see, instantiating a method object is the fastest dynamic way in calling a method, also notice how slow using eval is.

Also when sending a message to an object , or when instantiating a method object , u can call private methods of that object [:](http://khelll.com/blog/ruby/ruby-dynamic-method-calling/)
```ruby
class Foo
  private  
  def hi 
    puts "hi man" 
  end 
end
 
# Normal method calling
f = Foo.new  #=> <Foo:0x10a0d51>
f.hi  #=>NoMethodError: private method `hi' called for #<Foo:0x10a0d51> 
 
# Sending a message
f.send :hi #  hi man
 
# Instantiating a method object
f.method(:hi).call  # hi man
 
# Using eval
eval "f.hi"  #=>NoMethodError: private method `hi' called for #<Foo:0x10a0d51> 
 
# Using instance_eval
f.instance_eval {hi}  # hi man
```
