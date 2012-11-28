---
layout: post
title: "install rvm at mac with gcc problem"
date: 2012-11-28 08:45
comments: true
categories: [rvm, gcc, lion, mac, xcode] 
---

While installing RVM at mac, we may get problem due to missing Xcode. We willget error below:

    rvm install 1.9.3
    Installing Ruby from source to: /Users/jamie/.rvm/rubies/ruby-1.9.3-p0, this may take a while depending on your cpu(s)...

    ruby-1.9.3-p0 - #fetching 
    ruby-1.9.3-p0 - #extracted to /Users/jamie/.rvm/src/ruby-1.9.3-p0 (already extracted)
    Fetching yaml-0.1.4.tar.gz to /Users/jamie/.rvm/archives
    Extracting yaml-0.1.4.tar.gz to /Users/jamie/.rvm/src
    Configuring yaml in /Users/jamie/.rvm/src/yaml-0.1.4.
    Compiling yaml in /Users/jamie/.rvm/src/yaml-0.1.4.
    Installing yaml to /Users/jamie/.rvm/usr
    ruby-1.9.3-p0 - #configuring 
    ERROR: Error running ' ./configure --prefix=/Users/jamie/.rvm/rubies/ruby-1.9.3-p0 --enable-shared --disable-install-doc --with-libyaml-dir=/Users/jamie/.rvm/usr ', please read /Users/jamie/.rvm/log/ruby-1.9.3-p0/configure.log
    ERROR: There has been an error while running configure. Halting the installation.

GCC information:

    gcc -v
    Using built-in specs.
    Target: i686-apple-darwin11
    Configured with: /private/var/tmp/llvmgcc42/llvmgcc42-2336.1~1/src/configure --disable-checking --enable-werror --prefix=/Developer/usr/llvm-gcc-4.2 --mandir=/share/man --enable-languages=c,objc,c++,obj-c++ --program-prefix=llvm- --program-transform-name=/^[cg][^.-]*$/s/$/-4.2/ --with-slibdir=/usr/lib --build=i686-apple-darwin11 --enable-llvm=/private/var/tmp/llvmgcc42/llvmgcc42-2336.1~1/dst-llvmCore/Developer/usr/local --program-prefix=i686-apple-darwin11- --host=x86_64-apple-darwin11 --target=i686-apple-darwin11 --with-gxx-include-dir=/usr/include/c++/4.2.1
    Thread model: posix
    gcc version 4.2.1 (Based on Apple Inc. build 5658) (LLVM build 2336.1.00)

    ls /usr/bin | grep gcc         
    gcc
    i686-apple-darwin11-llvm-gcc-4.2
    llvm-gcc
    llvm-gcc-4.2


Error message also:


    rvm install 1.9.3                       
    ERROR: The autodetected CC(/usr/bin/gcc-4.2) is LLVM based, it is not yet fully supported by ruby and gems, please read `rvm requirements`, and set CC=/path/to/gcc .


Here is the main solution:

* 1.clang

```
rvm install 1.9.3 --with-gcc=clang
```
* 2.osx-gcc
[LLVM GCC](https://github.com/kennethreitz/osx-gcc-installer/downloads )
Be carefull about this, sometimes conflict with Brew

* 3.command line tools for xcode
[source](https://developer.apple.com/downloads/index.action)

* 4.readline problem
```
rvm pkg install readline 
rvm install 1.9.3 --with-gcc=clang --with-readline-dir=$rvm_path/usr
```
* 5.xcode 4.5
install RVM on Mac OSX 10.8 (Mountain Lion) with Xcode 4.5 without installing Command Line Tools
[gist](https://gist.github.com/3789921)

[.](http://stackoverflow.com/questions/8032824/cant-install-ruby-under-lion-with-rvm-gcc-issues)


