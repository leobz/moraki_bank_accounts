.PHONY: dev
dev: ## Execute application in development mode
	bin/dev
	docker compose stop

.PHONY: test
test: ## Execute automated tests. Require postgres (execute `make run-test-db` into another terminal)
	rspec spec

.PHONY: run-test-db
run-test-db: ## Execute postgres DB to run automated tests
	docker-compose -f docker-compose-test.yml up
