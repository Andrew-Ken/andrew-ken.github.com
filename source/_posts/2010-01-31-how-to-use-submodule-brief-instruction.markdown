---
layout: post
title: "how to use submodule brief instruction"
date: 2010-01-31 08:50
comments: true
categories: [git, submodule]
---

```ruby
# get the submodule initially
git submodule add ssh://bla submodule_dir
git submodule init

# time passes, submodule upstream is updated
# and you now want to update

# change to the submodule directory
cd submodule_dir

# checkout desired branch
git checkout master

# update
git pull

# get back to your project root
cd ..

# now the submodules are in the state you want, so
git commit -am "Pulled down update to submodule_dir"


git submodules update --init

git submodule foreach git pull origin master

```
[refer git wiki]( https://git.wiki.kernel.org/index.php/GitSubmoduleTutorial )
[git-scm]( http://git-scm.com/book/en/Git-Tools-Submodules)
