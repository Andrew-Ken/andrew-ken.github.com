---
layout: single
title: "Using nano as a editor"
date: 2013-01-14 10:57
comments: true
categories: 
---

**Installing(if not available) nano for mac/ubuntu**

For Mac:
-------

[Download Page](http://www.nano-editor.org/download.php)

```bash
./configure
make
sudo make install
```

For Ubuntu:
----------


```
aptitude install nano
```

**Basic commands**

To create or edit a file, use the following command:

```bash
nano tmp.html
```

At the bottom of the screen you should see a bunch of commands.
The caret ^ signifies holding down the control key and typing the letter.

All the list of commands are higlighted as we press ctrl key. 

To quit nano, which was the biggest question I had, just use ctrl + X
It prompts to save if you changed the file. press y or n and we're done.

Here's more from the [nano editor org](http://www.nano-editor.org/docs.php)
