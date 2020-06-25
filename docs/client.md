# BigCommerce API JS Client Library

## Installation

You can either clone this repository and include the src files with your project,
or include them as a dependency using npm.

### NPM

In your `package.json`:

```json
...
"dependencies": {
  "bigcommerce-api-js": "moderntribe/bigcommerce-api-js#v1.0",
}
....

```

## Usage
The package needs to be configured with your account's client id, client
secret, store id, and access token which is available in your Bigcommerce Account:

```js
const bc = require('./src');
// or const bc = require('bigcommerce-api-js');

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

## Supported APIs

- AbandonedCartApi (v3)
- CartApi (v3)
- CatalogApi (v3)
- ChannelsApi (v3)
- OrdersApi (v2)
- OrderTransactionsApi (v3)
- PriceListsApi (v3)
- PricingApi (v3)
- ScriptApi (v3)
- SitesApi (v3)
- StoreInfoApi (v2)
- SubscribersApi (v3)
- ThemesApi (v3)
- WidgetApi (v3)
- WishlistsApi (v3)

