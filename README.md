### BigCommerce JS API

This is a collection of clients, designed to connect to the Big Commerce APIs. There is one
client per API.

https://developer.bigcommerce.com/api-reference/

## Getting started

The clients are already built and tested, though this project is designed to easily rebuild and update
clients as changes are made to the published BC apis. To get started though, that is not required.

* Clone this repo
* Set your store up as described under Authentication
* Use yarn/npm to install dependencies
* Run the test suites

To run the full suite of tests: 

```
cd clients
yarn install
yarn test
```

Or to test one api, for instance:

```
cd clients/ThemesAPI
yarn install
yarn test
```

Or one method:

```
cd clients/WishlistsApi
yarn install
yarn test --grep wishlistsGet
```

## Authentication

* Create your BigCommerce Store and App if you haven't already
* Obtain your store hash, client id and access token
  * [BigCommerce Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#obtaining-store-api-credentials#obtaining-store-api-credentials)
* Rename gulpfile.config.sample.json to gulpfile.config.json and fill in the values

## Including a client in your project

* todo

## Updating the client libraries

You can either update a single library, or all of them. The spec files are grabbed from bigcommerce servers, and processed on the fly, so
there is no need to download or maintain them. The swagger codegen tool will also be downloaded automatically if needed.

```
npm install
gulp buildAll
```

or

```
gulp buildOne --name StoreInfoApi
```