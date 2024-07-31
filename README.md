# Moraki Bank Accounts


Ruby Version: 3.3.4

Setup:

1. Install Docker + Docker Compose: https://www.docker.com/
2. Install NodeJs: https://nodejs.org/en


## Development

Setup development:

```bash
bundle install
npm install
rails db:drop db:create: db:migrate db:seed
```

Run in Development mode:
```bash


# Execute application in development mode with a dockerized postgres database
make dev
```


## Tests

Setup tests:

```bash
bundle exec rake db:drop RAILS_ENV=test
bundle exec rake db:create RAILS_ENV=test
bundle exec rake db:schema:load RAILS_ENV=test
```

Run tests:

```bash
# Execute postgres DB to run automated tests
make run-test-db

# Execute automated tests. Require postgres (execute `make run-test-db` into another terminal)
make test
```

