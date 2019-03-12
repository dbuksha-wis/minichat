## Minichat
Simple public chat using Ruby on Rails and Vue.js.

### Requirements

* Ruby v.2.6.1
* Yarn
* Foreman (optional)

### Getting started
```
  git clone git@github.com:dbuksha-wis/minichat.git && cd ./minichat
  
  bundle install
  yarn install
```

### Run tests
```
   bundle exec rspec spec
```

### Run application

You can use Foreman to start the app:
```
  foreman start
```

Or you can start by yourself:

```
  bin/rails s
  
  bin/webpack-dev-server
```

Open ` http://127.0.0.1:3000`
