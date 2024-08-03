# Moraki Bank Accounts


Ruby Version: 3.3.4

NodeJs Version: 20.16.0

Setup:

1. Install Docker + Docker Compose: https://www.docker.com/
2. Install Ruby: https://www.ruby-lang.org/en/
3. Install NodeJs: https://nodejs.org/en


## Development

### Setup

1. Install dependencies

```bash
bundle install
npm install
```

2. Setup ActiveRecord Encryption to protect sensitive data:

Generate and copy the encryption credentials
```bash
rails db:encryption:init
```

Open the credentials file, and add the encryption creadentials
```bash
rails credentials:edit
```

3. Setup database

```bash
# Clean old containers
make dc-down

# Run create database, run migrations and seeds
make setup-db
```

## Run

Execute application in development mode with a dockerized postgres database

```bash
make dev
```

Application runs in `http://localhost:3100/`


## Run Tests

1. Up postgres with test database

```bash
make run-test-db
```

2. Open other terminal

3. Execute automated tests
```
# Require postgres (execute `make run-test-db` into another terminal)
make test
```

