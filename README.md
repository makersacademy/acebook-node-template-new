# Acebook

This is a Node.js template for the Acebook engineering project.

It uses:
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    ```
    
2. Open a new terminal
3. Install the latest long term support (LTS) version of [Node.js](https://nodejs.org/en/).
    ```
    nvm install --lts
    ```

### Set up your project

1. Fork this repository into the sub-group for your cohort (it should be a sub-group of `makers-students` and be named something like `your-cohort-name-students`).
2. Rename your fork to `acebook-<team name>`
3. Clone your fork to your local machine
4. Install Node.js dependencies
    ```
    npm install
    ```
    <details>
        <summary><b>Gyp error on npm install?</b></summary>
        If you're getting the following error: <br>
            <code>AttributeError: module 'collections' has no attribute 'MutableSet' <br>
            Error: `gyp` failed with exit code: 1</code> <br>
        try installing this package separately before running `npm install`: <br>
            <code>npm --build-from-source install node-pre-gyp<code>
    </details><br>
5. Install an ESLint plugin for your editor. For example: [VSCode ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for Atom.
6. Start a MongoDB database using Docker
    ```shell
    ; docker run -p 27017:27017 mongo
    
    # Or in the background
    ; docker run -d -p 27017:27017 mongo

    # And if you want to connect to it via the CLI
    ; brew install mongosh
    ; mongosh
    ```

### Start

1. Start the server
    ```shell
    ; npm start
    ```
1. Browse to [http://localhost:3000](http://localhost:3000)

### Test

* Run all tests
    ```shell
    ; npm run start:test

    # And then, in another terminal...
    ; npm test
    ```
* Run a check
    ```bash
    npm run lint              # linter only
    npm run test:unit         # unit tests only
    npm run test:integration  # integration tests only
    ```

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.

```shell
; npm run start:test
```

This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.

## Final note

If you're new to using Node, you may be wondering where all of these commands above are defined.
Have a look at the `scripts` section of the `package.json` file in this repo.
It'll help with your understanding of what is going on in the `.gitlab-ci.yml` file.

## Additional resources

- [The package.json guide](https://nodejs.dev/learn/the-package-json-guide)
