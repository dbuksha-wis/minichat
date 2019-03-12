source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.2'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 3.11'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker'

# Use Redis adapter to run Action Cable in production
gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Authorization
gem 'jwt'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

# serializer
gem 'fast_jsonapi'

# Standartized serivce
gem 'simple_command', github: 'dbuksha-wis/simple_command'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Annotate classes with schema
  gem 'annotate'
  # Pretty print Ruby objects with style
  gem 'awesome_print'
  # A runtime dev console and IRB alternative with powerful introspection capabilities
  gem 'pry-rails'
  # A library for setting up Ruby objects as test data
  gem 'factory_bot_rails'
  # A library for generating fake data such as names, addresses, and phone numbers.
  gem 'faker'
  gem 'action-cable-testing'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'

end

group :test do
  # Testing framework for Rails 3.x, 4.x and 5.x.
  gem 'rspec-rails'
  # Simple one-liner tests for common Rails functionality
  gem 'shoulda-matchers', '4.0.0.rc1'
  gem 'rails-controller-testing'
  # Strategies for cleaning databases in Ruby
  gem 'database_cleaner'
  # Code coverage with a powerful configuration library and automatic merging of coverage across test suites
  gem 'simplecov', require: false
  # RSpec progress bar formatter
  gem 'fuubar'
end


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
