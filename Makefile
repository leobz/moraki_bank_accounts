.PHONY: dev
dev: ## Execute application in development mode
	docker-compose -f docker-compose-test.yml up -d
	bin/dev
	make stop

.PHONY: stop
stop: ## Stop development's containers
	docker-compose stop

.PHONY: test
test: ## Execute automated tests. Require postgres (execute `make run-test-db` into another terminal)
	RAILS_ENV=test bundle exec rake db:create
	RAILS_ENV=test bundle exec rake db:schema:load
	rspec spec

.PHONY: run-test-db
run-test-db: ## Execute postgres DB to run automated tests
	docker-compose -f docker-compose-test.yml up

.PHONY: run-dev-db
run-dev-db: ## Execute postgres DB to run development mode
	docker-compose -f docker-compose.yml up -d