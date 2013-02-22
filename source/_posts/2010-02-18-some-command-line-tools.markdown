---
layout: post
title: "some command line tools"
date: 2010-02-18 08:45
comments: true
categories: [linux, cmd, shell]
---
Some frequently use:

```ruby
du -sh `ls .` 

for i in G M K; do du -ah | grep [0-9]$i | sort -nr -k 1; done | head -n 11 
dir | gvim - 
```


How to find - Size of a directory & Free disk space 

```ruby
du -sh `ls .`
du -h | tail -n 1
du -h | grep -v '/' | awk '{print $1}'
ls | wc -l
ls -l | grep ^- | wc -l
ls -l | grep ^d | wc -l
ls -l | grep ^l | wc -l
for t in files links directories; do echo `find . -type ${t:0:1} | wc -l` $t; done 2> /dev/null

du -a | cut -d/ -f2 | sort | uniq -c | sort -nr
find . -type f | wc -l
ind . -type d | wc -l
find . -maxdepth 1 -type d | wc -l
```

```ruby

#output to vim 
#the - option tells vim to open stdin
dir | gvim -
#inside vim
:r !<cmd>
:r !dir

```

