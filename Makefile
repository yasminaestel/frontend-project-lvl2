test:
	npm run test
lint:
	npx eslint .
install:
	npm ci
gendiff:
	node bin/genDiff.js
publish:
	npm publish gendiff --dry-run