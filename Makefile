install:
	npm ci

publish:
	npm publish --dry-run

link:
	sudo npm link

lint:
	npx eslint .

rec:
	asciinema rec

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test