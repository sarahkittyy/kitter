# kitter

A test at making a social-media site in react~<3

## Dependencies

* docker-compose / docker (for MongoDB)

## Setting up

```bash
git clone https://github.com/sarahkittyy/kitter.git
cd kitter
yarn install
echo "SECRET=your-secret-here" > .env
```

## Building

`yarn build` runs both the frontend and backend build systems.

```bash
yarn build
```

## Running

You must start the database and express server, and then open the html file.

```bash
yarn build
yarn start-db
node . % # start the express server in the background
```

Now you can open public/index.html in your favorite internet browser.

## Development

This site works with two concurrent auto-code-reload tools, `tsc-watch` and `webpack-dev-server`.

To start both concurrently:

```bash
yarn dev
```
