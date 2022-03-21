---
layout: single
title: "how to revert git commit remote"
date: 2010-05-22 09:45
comments: true
categories: [git, revert]
---
First, There are serveral revert situation:
Local:
```ruby
# this will detach your HEAD, i.e. leave you with no branch checked out.
git checkout 0d1d7fc32
git checkout -b old-state 0d1d7fc32
```

```ruby
# Don't do it if you have uncommitted work you want to keep
git reset --hard 0d1d7fc32

# Alternatively, if there's work to keep:
git stash
git reset --hard 0d1d7fc32
git stash pop
# This saves the modifications, then reapplies that patch after resetting.
# You could get merge conflicts, if you've modified things which were
# changed since the commit you reset to
```

```ruby
git add . && git checkout master -f
git add . && git reset --hard HEAD
```

Remote

```ruby
git push mathnet +dd61ab32^:master
git reset HEAD^ --hard
git push mathnet -f
```

[.](http://christoph.ruegg.name/blog/2010/5/5/git-howto-revert-a-commit-already-pushed-to-a-remote-reposit.html)
