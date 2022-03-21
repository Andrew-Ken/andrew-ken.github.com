---
layout: single
title: "Rails integrate with Google analytics Api"
date: 2013-02-10 08:54
comments: true
categories: [rails, google, analytics, api]
---

Here is serveral usefull source:

[gattica](https://github.com/chrisle/gattica)

[rugalytics](https://github.com/robmckinnon/rugalytics)

[ruby toolbox](https://www.ruby-toolbox.com/categories/Web_Analytics)

[Google api Doc](https://developers.google.com/analytics/devguides/reporting/core/v3/)

```ruby
# Include the gem
require 'gattica'

# Login
ga = Gattica.new({ 
    :email => 'email@gmail.com', 
    :password => 'password'
})

# Get a list of accounts
accounts = ga.accounts

# Choose the first account
ga.profile_id = accounts.first.profile_id

# Get the data
data = ga.get({ 
    :start_date   => '2011-01-01',
    :end_date     => '2011-04-01',
    :dimensions   => ['month', 'year'],
    :metrics      => ['visits', 'bounces'],
})

# Show the data
puts data.inspect


# Sorting by number of visits in descending order (most visits at the top)
data = ga.get({ 
    :start_date   => '2011-01-01',
    :end_date     => '2011-04-01',
    :dimensions   => ['month', 'year'],
    :metrics      => ['visits'],
    :sort         => ['-visits']
})


# Return visits and bounces for mobile traffic 
# (Google's default user segment gaid::-11)

mobile_traffic = ga.get({ 
  :start_date   => '2011-01-01', 
  :end_date     => '2011-02-01', 
  :dimensions   => ['month', 'year'],
  :metrics      => ['visits', 'bounces'],
  :segment      => 'gaid::-11'
})


# Filter by Firefox users
firefox_users = ga.get({
  :start_date   => '2010-01-01', 
  :end_date     => '2011-01-01',
  :dimensions   => ['month', 'year'],
  :metrics      => ['visits', 'bounces'],
  :filters      => ['browser == Firefox']
})

# Filter where visits is >= 10000
lots_of_visits = ga.get({
  :start_date   => '2010-01-01', 
  :end_date     => '2011-02-01',
  :dimensions   => ['month', 'year'],
  :metrics      => ['visits', 'bounces'],
  :filters      => ['visits >= 10000']
})


# Get the top 25 keywords that drove traffic
data = ga.get({ 
  :start_date => '2011-01-01',
  :end_date => '2011-04-01',
  :dimensions => ['keyword'],
  :metrics => ['visits'],
  :sort => ['-visits'],
  :max_results => 25 
})

# Output our results
data.points.each do |data_point|
  kw = data_point.dimensions.detect { |dim| dim.key == :keyword }.value
  visits = data_point.metrics.detect { |metric| metric.key == :visits }.value
  puts "#{visits} visits => '#{kw}'"
end

# =>
#   19667 visits => '(not set)'
#   1677 visits => 'keyword 1'
#   178 visits => 'keyword 2'
#   165 visits => 'keyword 3'
#   161 visits => 'keyword 4'
#   112 visits => 'keyword 5'
#   105 visits => 'seo company reviews'
#   ...

```
