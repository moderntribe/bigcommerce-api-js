# subscribers

Subscribers - JavaScript client for subscribers
### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Customers | modify | `store_v2_customers` | |  Customers | read-only | `store_v2_customers_read_only` |  ### Headers  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### Example  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Content-Type: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  * For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication). 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.0
- Package version: 3.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install subscribers --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Subscribers = require('subscribers');
var defaultClient = Subscribers.ApiClient.instance;

// Configure API key authorization: X-Auth-Client
var X-Auth-Client = defaultClient.authentications['X-Auth-Client'];
X-Auth-Client.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Client.apiKeyPrefix['X-Auth-Client'] = "Token"

// Configure API key authorization: X-Auth-Token
var X-Auth-Token = defaultClient.authentications['X-Auth-Token'];
X-Auth-Token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Token.apiKeyPrefix['X-Auth-Token'] = "Token"

var api = new Subscribers.SubscribersApi()
var body = new Subscribers.SubscriberPost1(); // {SubscriberPost1} 
var opts = { 
  'accept': "application/json", // {String} 
  'contentType': "application/json" // {String} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createSubscriber(body, opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Subscribers.SubscribersApi* | [**createSubscriber**](docs/SubscribersApi.md#createSubscriber) | **POST** /customers/subscribers | Create a Subscriber
*Subscribers.SubscribersApi* | [**deleteSubscriberById**](docs/SubscribersApi.md#deleteSubscriberById) | **DELETE** /customers/subscribers/{subscriber_id} | Delete a Subscriber
*Subscribers.SubscribersApi* | [**deleteSubscribers**](docs/SubscribersApi.md#deleteSubscribers) | **DELETE** /customers/subscribers | Delete Subscribers
*Subscribers.SubscribersApi* | [**getSubscriberById**](docs/SubscribersApi.md#getSubscriberById) | **GET** /customers/subscribers/{subscriber_id} | Get a Subscriber
*Subscribers.SubscribersApi* | [**getSubscribers**](docs/SubscribersApi.md#getSubscribers) | **GET** /customers/subscribers | Get Subscribers
*Subscribers.SubscribersApi* | [**updateSubscriber**](docs/SubscribersApi.md#updateSubscriber) | **PUT** /customers/subscribers/{subscriber_id} | Update a Subscriber

## Documentation for Models

 - [Subscribers.AllOfSubscriberCollectionResponseDataItems](docs/AllOfSubscriberCollectionResponseDataItems.md)
 - [Subscribers.AllOfSubscriberResponseData](docs/AllOfSubscriberResponseData.md)
 - [Subscribers.BaseError](docs/BaseError.md)
 - [Subscribers.CollectionMeta](docs/CollectionMeta.md)
 - [Subscribers.DetailedErrors](docs/DetailedErrors.md)
 - [Subscribers.ErrorResponse](docs/ErrorResponse.md)
 - [Subscribers.Meta](docs/Meta.md)
 - [Subscribers.NotFound](docs/NotFound.md)
 - [Subscribers.Pagination](docs/Pagination.md)
 - [Subscribers.Pagination1](docs/Pagination1.md)
 - [Subscribers.Pagination1Links](docs/Pagination1Links.md)
 - [Subscribers.Subscriber](docs/Subscriber.md)
 - [Subscribers.SubscriberBase](docs/SubscriberBase.md)
 - [Subscribers.SubscriberCollectionResponse](docs/SubscriberCollectionResponse.md)
 - [Subscribers.SubscriberFull](docs/SubscriberFull.md)
 - [Subscribers.SubscriberPost](docs/SubscriberPost.md)
 - [Subscribers.SubscriberPost1](docs/SubscriberPost1.md)
 - [Subscribers.SubscriberPut](docs/SubscriberPut.md)
 - [Subscribers.SubscriberPut1](docs/SubscriberPut1.md)
 - [Subscribers.SubscriberResponse](docs/SubscriberResponse.md)

## Documentation for Authorization


### X-Auth-Client

- **Type**: API key
- **API key parameter name**: X-Auth-Client
- **Location**: HTTP header

### X-Auth-Token

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header

