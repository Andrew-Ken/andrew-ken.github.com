---
layout: single
classes:
  - landing
  - dark-theme
title:  "Dockerize your own blog using jekyll"
date:   2022-03-21 10:10:30 +0000
author_profile: true
read_time: true
comments: true
share: true
related: true
author: Andrew Paliyan
categories: [jekyll]
---
- Bootstrap your own jekyll  blog with docker-compose

[Source Code](https://github.com/andrewsheelan/docker-bootstrap-jekyll)

# Requirements:
- docker
- docker-compose
- Mac (kidding.. tested on a mac, let me know if it doesnt work for you)

# Clone repo and run using command:
```bash
wget -O /tmp/z.$$ https://github.com/andrewsheelan/docker-bootstrap-jekyll/archive/refs/heads/master.zip && 
   unzip -d . /tmp/z.$$ &&
   rm /tmp/z.$$
cd docker-bootstrap-jekyll-master
./bootstrap
```
Goto [http://localhost:4000](http://localhost:4000)


| File | Description |
| --- | --- |
| docker-compose.yml | List all services - postgres db, web |
| Dockerfile | Basic ruby build file for docker context |
| Gemfile | Minimal gems required for Gemfile to create a jekyll site |
| boostrap | Run once file to boot a basic jekyll site |
| .dockerignore | Ignore tmp |


## File: docker-compose.yml
```yaml
version: "3.9"
services:
  web:
    build: .
    volumes:
      - .:/app
      - ./tmp/bundle:/bundle
    command: bash -c "bundle exec jekyll serve -b '0.0.0.0'"
    ports:
      - "3000:3000"
    environment:
      BUNDLE_PATH:  /bundle
```

## File: Dockerfile
```Dockerfile
FROM ruby:3.1.1
WORKDIR /app

RUN apt-get update -qq
COPY . .

RUN gem install bundler 
RUN bundle install

EXPOSE 4000
CMD ["bundle", "exec, "jekyll" serve", "--host", "0.0.0.0"]
```

## File: Gemfile
```Gemfile
source "https://rubygems.org"

ruby "3.1.1"

gem "jekyll"

# The theme of current site, locked to a certain version.
gem "minima"

# Plugins of this site loaded during a build with proper
# site configuration.
gem "jekyll-gist"
gem "jekyll-coffeescript"
gem "jekyll-seo-tag"

# A dependency of a custom-plugin inside `_plugins` directory.
gem "nokogiri"
```

## File: bootstrap
```bash
#!/bin/bash

# clone the repo and run:
# ./boostrap
# This is a one time only run file

# Force a build
touch Gemfile.lock && docker-compose build

# Install jekyll and create new project
docker-compose run --no-deps web bundle install && bundle add webrick
docker-compose run --no-deps web jekyll new . --force
docker-compose run --no-deps web bundle add webrick

# Exclude tmp files
echo "exclude: [tmp]" >> _config.yml
# Remove this file
rm bootstrap

# Start the application
docker-compose up
```

## File: .dockerignore
```
# Ignore tmp
/tmp/*
```
