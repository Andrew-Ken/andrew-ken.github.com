---
layout: single
title: "happy number and prime"
date: 2010-04-11 10:15
comments: true
categories: [algorithm, ruby]
---
A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers[1]).

More formally, given a number , define a sequence , , ... where  is the sum of the squares of the digits of . Then n is happy if and only if there exists i such that .
If a number is happy, then all members of its sequence are happy; if a number is unhappy, all members of the sequence are unhappy.
For example, 19 is happy, as the associated sequence is:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1.
The happy numbers below 500 are:
1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100, 103, 109, 129, 130, 133, 139, 167, 176, 188, 190, 192, 193, 203, 208, 219, 226, 230, 236, 239, 262, 263, 280, 291, 293, 301, 302, 310, 313, 319, 320, 326, 329, 331, 338, 356, 362, 365, 367, 368, 376, 379, 383, 386, 391, 392, 397, 404, 409, 440, 446, 464, 469, 478, 487, 490, 496 

calculation:

```ruby
@dead_list = []
@cache = []
def happy? num
  result = num.to_s.split('').inject(0){|sum,x| sum + x.to_i ** 2}
  return false if @dead_list.include? result
  if result == 1
    @cache = [] 
    return true
  end
  if @cache.include? result
    @dead_list << result
    return false 
  end
  @cache << result
  return happy?(result)
end

def prime? num
  return false if (num % 2 == 0) or (num % 3 == 0) or (num % 5 == 0)
  end_num = Math.sqrt(num).ceil.to_i
  (2..end_num).to_a.each{|x| return false if num % (x+1) == 0}
end
```
and we can also embed to String

```ruby
class Fixnum
  class << self;  attr_accessor :dead_list; end
  attr_accessor :cache
  load 'happy_prime.rb'

  def is_happy?
    @cache = []
    @dead_list ||= []
    happy? self
  end

  def is_prime?
    prime? self
    #or
    #require 'mathn'
    #self.prime?
  end
end
```
