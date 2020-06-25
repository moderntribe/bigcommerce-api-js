# BigCommerce API JavaScript Client Library

JavaScript client for connecting to the Bigcommerce REST APIs.

## Usage
The package needs to be configured with your account's client id, client
secret, store id, and access token which is available in your Bigcommerce Account:

```js
const bc = require('./src');

const config = {
  clientId: 'CLIENT_ID',
  clientSecret: 'CLIENT_SECRET',
  accessToken: 'ACCESS_TOKEN',
  storeId: 'STORE_ID',
};

const store = bc(config);
const getCatalog = async () => {
	var catalog = await store.CatalogApi.getCategories();
	console.log(catalog);
}

getCatalog();
```

On older versions of Node, instead of async/await, you can use promises:

```js
store.CatalogApi.getCategories()
	.then(categories => console.log(categories))
	.catch(error => console.log(error));
```

or callbacks:

```js
const callback = (error, categories, data) {
	console.log(categories);
}
store.CatalogApi.getCategories({}, callback);
```

## Quickstart

* Create your BigCommerce Store and App if you haven't already
* Obtain your store hash, client id, client secret and access token
  * [BigCommerce Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#obtaining-store-api-credentials#obtaining-store-api-credentials)
* Clone this repo
* Create samples/config.json using the sample config as a template
* Use yarn/npm to install dependencies
* Run samples/getCatalog

```
npm install
cd samples && node getCatalog.js
```
