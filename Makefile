test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

install-deps:
	npm ci

gendiff:
	node bin/genDiff.js

publish:
	npm publish --dry-run