---
layout: post
title: "Javascript Vs Ruby methods"
date: 2013-01-04 12:23
comments: true
categories: 
---
[source](http://agentcooper.github.com/js-ruby-comparison/)

<table width=100% border="1px" valign='top'>
<tr><th colspan='2'>ARRAYS</th></tr>
<tr><th>Ruby</th><th>Javascript</th></tr>
<tr>
<td valign='top'>

```ruby
a = ["1", "2"]

a.push("3")
```

```ruby
a.map!(&:to_i) # [1, 2, 3]
```

```ruby
a.delete_at(1)
a # [1, 3]
```

```ruby
a.reverse # [3, 1]
```

```ruby
a.unshift(777) 




# [777, 3, 1]
```
</td>
<td valign='top'>

```javascript
var a = ["1", "2"];

a.push("3");
```

```javascript
a = a.map(function(n) { return parseInt(n, 10); });
```

```javascript
a.splice(1, 1 /* how much */);
a; // [1, 3]
```

```javascript
a.reverse() // [3, 1]
```

```javascript
a.unshift(777); // 777
a; // [777, 3, 1]

/* or in place: */ 
var b = [3, 1];
[777].concat(b); // [777, 3, 1]
```
</td>

</tr>
<tr>
<td valign='top'>
```ruby
a = [1, 2, 3]

a.index(2) # 1 
```

```ruby
a.all?{|n| n > 4} # false
```

```ruby
a.any?{|n| n > 2} # true
```

```ruby
a.keep_if{|n| n > 1} # [2, 3]
```

</td>
<td valign='top'>
```javascript
var a = [1, 2, 3];

a.indexOf(2); // 1
```

```javascript
a.every(function(n) { return n > 4; }); // false
```

```javascript
a.some(function(n) { return n > 2; });  // true
```

```javascript
a.filter(function(n) { return n > 1;}); // [2, 3]
```
</td>
</tr>
<tr>
<td valign='top'>
```ruby
a = ["aaa  ", "  bbb", "  ccc  "]

a.map(&:strip) 
# ["aaa", "bbb", "ccc"]
```
</td>
<td valign='top'>
```javascript
var a = ["aaa  ", "  bbb", "  ccc  "]

a.map(function(x) { return x.trim(); });               // ['aaa', 'bbb', 'ccc']
a.map(Function.prototype.call, String.prototype.trim); // ['aaa', 'bbb', 'ccc']
```
</td>
</tr>

<tr>
<td valign='top'>

```ruby
a = [1, 2, 3, 4, 5]

a.slice(1..-2)  # [2, 3, 4]
a[1..-2]        # [2, 3, 4]
```

</td>
<td valign='top'>

```javascript
var a = [1, 2, 3, 4, 5];


a.slice(1, -1); // [2, 3, 4]
```

</td>
</tr>

<tr>
<td valign='top'>

```ruby
a = [1, 2, 3]

a.each {|n| puts n}

a.each do |n|
    puts n
end
```

```ruby
for i in 0..(a.length - 1) do
  puts a[i]
end
```

</td>
<td valign='top'>

```javascript
var a = [1, 2, 3];





a.forEach(function(n) { console.log(n); })
```

```javascript
for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}
```

</td>
</tr>

<tr><td colspan=2 style="border-left: 0px;border-right: 0px; background: #EEE"><br><br></td></tr>

<tr><th colspan='2'>STRINGS</th></tr>
<tr><th>Ruby</th><th>Javascript</th></tr>

<tr>
<td valign='top'>

```ruby
'hello'.index('e')    # 1
```

```ruby
'hello'.rindex('l')   # 3
```

```ruby
if 'hello'.include? 'lo' then puts 'found' end
```

```ruby
'hello' * 3           # 'hellohellohello'
```

```ruby
'a/b/c'.split('/')    # ['a', 'b', 'c']
```

</td>
<td valign='top'>

```javascript
'hello'.indexOf('e')             // 1
```

```javascript
'hello'.lastIndexOf('l')         // 3
```

```javascript
if (~'hello'.indexOf('lo')) { console.log('found'); }
```

```javascript
(new Array(3 + 1)).join('hello') // 'hellohellohello'
```

```javascript
'a/b/c'.split('/')               // ['a', 'b', 'c']
```

</td>
</tr>

<tr><td colspan=2 style="border-left: 0px;border-right: 0px; background: #EEE"><br><br></td></tr>

<tr><th colspan='2'>HASH</th></tr>
<tr><th>Ruby</th><th>Javascript</th></tr>

<tr>
<td valign='top'>

```ruby
h = {}
h['a'] = 1
h['b'] = 2

h.each {|key, value| puts "#{key} #{value}" }
```

```ruby
h.keys # ['a', 'b']
```

```ruby
h.has_key?('c') # false
```

```ruby
h.length # 2
```

```ruby
h.delete("b")
```

</td>
<td valign='top'>

```javascript
var h = {};
h['a'] = 1;
h['b'] = 2;

for (key in h) { console.log(key, h[key]); }
```

```javascript
Object.keys(h); // ['a', 'b']
```

```javascript
h.hasOwnProperty('c') // false
```

```javascript
Object.keys(h).length // 2
```

```javascript
delete h.b
```

</td>
</tr>

<tr><td colspan=2 style="border-left: 0px;border-right: 0px; background: #EEE"><br><br></td></tr>

<tr><th colspan='2'>FUNCTIONS</th></tr>
<tr><th>Ruby</th><th>Javascript</th></tr>

<tr>
<td valign='top'>

```ruby
def plus_5(num = 0) num + 5 end

plus_5     # 5
plus_5(10) # 15

[5, 10, 15].map { |k| plus_5(k) } # [10, 15, 20]
```

```ruby
def f(*args)

  puts args
end
```
</td>
<td valign='top'>

```javascript
function plus_5(num) { return (num || 0) + 5; }

plus_5();   // 5
plus_5(10); // 15

[5, 10, 15].map(plus_5); // [10, 15, 20]
```

```javascript
function f() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
}
```
</td>
</tr>


<tr><td colspan=2 style="border-left: 0px;border-right: 0px; background: #EEE"><br><br></td></tr>

<tr><th colspan='2'>CLASSES</th></tr>
<tr><th>Ruby</th><th>Javascript</th></tr>

<tr>
<td valign='top'>

```ruby
class Person
  attr_accessor :firstName, :lastName

  def initialize(firstName, lastName)
    @firstName = firstName
    @lastName = lastName
  end
  
  def fullName
    @firstName + " " + @lastName
  end
end

john = Person.new("John", "Malkovic")
john.fullName # "John Malkovic"
```

</td>
<td valign='top'>

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}




Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


var john = new Person("John", "Malkovic");
john.fullName(); // "John Malkovic"
```

</td>
</tr>

<tr><td colspan=2 style="border-left: 0px;border-right: 0px; background: #EEE"><br><br></td></tr>

<tr><th colspan='2'>MATH</th></tr>
<tr><th>Ruby</th><th>Javascript</th></tr>

<tr>
<td valign='top'>

```ruby
[-5, -1, -8].max            # -1
```

```ruby
[-5, 15, 20].reduce(0, &:+) # 30
```

</td>
<td valign='top'>

```javascript
Math.max.apply(null, [-5, -1, -8]) // -1
```

```javascript
[-5, 15, 20].reduce(function(sum, value) { return sum + value; }, 0) // 30
```

</td>
</tr>

<tr><td colspan=2 style="border-left: 0px;border-right: 0px; background: #EEE"><br><br></td></tr>

<tr><th colspan='2'>MISC..</th></tr>
<tr><th>Ruby</th><th>Javascript</th></tr>

<tr>
<td valign='top'>

```ruby
prng = Random.new()
prng.rand(5..9) # one of [5, 6, 7, 8, 9]
```

```ruby
a, b = b, a # switch a and b
```

</td>
<td valign='top'>

```javascript
function rand(a, b) { return Math.floor(Math.random() * (b - a + 1) + a); }
rand(5, 9); // one of [5, 6, 7, 8, 9]
```

```javascript
a = [b, b = a][0]
```

</td>
</tr>

</table>
