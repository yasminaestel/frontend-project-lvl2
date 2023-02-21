test:
	npm run test
lint:
	npx eslint .
install:
	npm ci
gendiff:
	node bin/genDiff.js
public:
	npm install gendiff --dry-run