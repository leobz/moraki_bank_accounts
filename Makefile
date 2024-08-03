## docker compose backward compatibility
## More info: https://docs.docker.com/compose/#compose-v2-and-the-new-docker-compose-command
define DOCKER_COMPOSE
	@if which docker-compose  >/dev/null ; then docker-compose  $1; \
	else docker compose $1; fi;
endef

.PHONY: dev
dev: ## Execute application in development mode
	$(call DOCKER_COMPOSE,  -f docker-compose-test.yml up -d)
	bin/dev
	make stop

.PHONY: dc-down
dc-down: ## Stops containers and removes containers, networks, volumes, and images of this project
	$(call DOCKER_COMPOSE, -f docker-compose-test.yml down)
	$(call DOCKER_COMPOSE, down)

.PHONY: test
test: ## Execute automated tests. Require postgres (execute `make run-test-db` into another terminal)
	RAILS_ENV=test bundle exec rake db:create
	RAILS_ENV=test bundle exec rake db:schema:load
	rspec spec

.PHONY: setup-db
setup-db: ## Setup database for development mode
	$(call DOCKER_COMPOSE, -f docker-compose.yml up -d)
	rails db:migrate
	rails db:seed

.PHONY: run-test-db
run-test-db: ## Execute postgres DB to run automated tests
	$(call DOCKER_COMPOSE, -f docker-compose-test.yml up)

.PHONY: run-dev-db
run-dev-db: ## Execute postgres DB to run development mode
	$(call DOCKER_COMPOSE, -f docker-compose.yml up -d)