# Moraki Bank Accounts


Ruby Version: 3.3.4

Setup:

1. Install Docker + Docker Compose: https://www.docker.com/
2. Install NodeJs: https://nodejs.org/en


## Development

### Setup

1. Install dependencies

```bash
bundle install
npm install
```

2. Setup database

```bash
# Run postgres DB with development database
make run-dev-db

# Run migrations and seeds
rails db:migrate
rails db:seed
```


## Run

Execute application in development mode with a dockerized postgres database

```bash
make dev
```


## Run Tests

1. Execute postgres DB with test database

```bash
make run-test-db
```

2. Open other terminal

3. Execute automated tests
```
# Require postgres (execute `make run-test-db` into another terminal)
make test
```

