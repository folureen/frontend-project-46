install: deps-install
	npx simple-git-hooks

run:
	node gendiff.js

run-help:
	node gendiff.js -h

deps-install:
	npm ci

deps-update:
	npx ncu -u

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix