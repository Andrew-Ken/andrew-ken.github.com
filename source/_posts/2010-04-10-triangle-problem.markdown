---
layout: post
title: "triangle problem"
date: 2010-04-10 10:31
comments: true
categories: [algorithm, ruby]
---

tarting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

   3
  7 4
 2 4 6
8 5 9 3
That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below: ...--

```ruby
class Triangle

  def initialize (file)
    @file = file
  end

  def get_array
    File.open(@file, 'r') do |f|
      f.each_line.collect do |line|
        line.split(' ').collect { |num| num.to_i }
      end
    end
  end

  def calculate
    result = get_array.reverse.inject do |sum_line, line|
      line.collect.with_index do |num, i|
        num + [sum_line[i], sum_line[i + 1]].max
      end
    end
    result[0]
  end
end

puts Triangle.new('triangle.txt').calculate
```


