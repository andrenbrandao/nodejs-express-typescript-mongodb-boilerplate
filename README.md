# Node.js Express TypeScript MongoDB Boilerplate

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Simple boilerplate to quickstart a project with Node.js, Express, TypeScript and MongoDB.

It contains multiple features and the test suite is already prepared for e2e and integration testing with in-memory MongoDB.

## Features

- Pre-commit hooks with [Husky](https://typicode.github.io/husky/)
- Linting with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
- [Lint-staged](https://github.com/lint-staged/lint-staged) to run linting before commits
- Testing with [Jest](https://jestjs.io/)
- API Testing with [Supertest](https://github.com/ladjs/supertest)
- In-Memory MongoDB for Integration Testing with [mongodb-memory-server](https://github.com/nodkz/mongodb-memory-server)

## Installation

Install [Node.js](https://nodejs.org), clone the repo and run `npm install`.

## Usage

To start the development server, run `npm run start:dev`. The app will start running on port 3000.

### Most Used Commands

- `npm run start:dev` - starts the development server
- `npm run start` - builds and starts the server
- `npm run test` - runs the testing suite
- `npm run test:watch` - keeps running tests on changed files

## License

[MIT](LICENSE) © André Brandão
