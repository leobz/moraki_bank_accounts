source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.3.4"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.8.4", ">= 7.0.3.2"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Use postgres as the database for Active Record
gem "pg"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Javascript Builder
gem "vite_rails", "~> 3.0"

# Inertia.js for Rails
gem "inertia_rails-contrib", "~> 0.1.1"

# Manage Procfile-based applications
gem "foreman"

# Debugging tool for Ruby
gem "pry"

# Gems for Ruby 3.3.4 support
# Related info: https://github.com/thinreports/thinreports-generator/issues/133
gem "mutex_m"
gem "bigdecimal"
gem "base64"
gem "drb"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem 'rspec-rails'

  # Load environment variables from `.env`.
  gem 'dotenv'

  # Setting up Ruby objects as test data.
  gem 'factory_bot_rails'
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end