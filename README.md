# GraphQL POC

## Installation

Install Contentful CLI

Get started [here](https://www.contentful.com/developers/docs/tutorials/cli/installation/)

Authenticate to Contentful

```bash
contentful login
```

Create a new space

```bash
contentful space create --name GraphQL POC
```

List all spaces

```bash
contentful space list
```

Import Content model and some entries. We will setup some content types and entries from `contentful-export.json` located in the root of this repository.

Replace `YOUR_SPACE_ID` with your space id.

```bash
contentful space import --space-id YOUR_SPACE_ID --content-file ./contentful-export.json
```

## Setup

Create a new `.env` file in the root of this repository. Add Contentful space environments to this. `.env` found under Settings > API keys. Look at `.env.example` for example configuration.

## Install npm dependencies

```bash
yarn install
```

## Run development server

```bash
yarn start
```

## Build site ready for production

```bash
yarn build
```

## Deploy to Surge.sh

Get started [here](http://surge.sh/help/getting-started-with-surge)

```bash
yarn deploy
```

or manually

```bash
surge public/ --domain https://graphql-poc.surge.sh
```
