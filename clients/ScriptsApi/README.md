# scripts

Scripts - JavaScript client for scripts
 - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints)  The BigCommerce Scripts API can be used to add a script to a store's page. Some use cases: * Insert tracking codes * Storefront single click applications * Live chat, support plugins * Theme extension or connector apps  To learn more about Scripts, see [here](/api-docs/scripts/scripts-overview).   ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Checkout Content<sup>1</sup>                             | modify     | `store_content_checkout`                      | | Checkout Content<sup>1</sup>                             | read-only  | `store_content_checkout_read_only`            | | Content                                       | modify     | `store_v2_content`                            | | Content                                       | read-only  | `store_v2_content_read_only`                  |  1. `Checkout Content` scopes are required to create or read scripts on the checkout page.  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Scripts                                 | Add client-side code to a store                                         |
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
npm install scripts --save
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
var Scripts = require('scripts');
var defaultClient = Scripts.ApiClient.instance;

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

var api = new Scripts.ScriptsApi()
var body = new Scripts.ScriptPost1(); // {ScriptPost1} 
var accept = "application/json"; // {String} 
var contentType = "application/json"; // {String} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createScript(body, accept, contentType, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Scripts.ScriptsApi* | [**createScript**](docs/ScriptsApi.md#createScript) | **POST** /content/scripts | Create a Script
*Scripts.ScriptsApi* | [**deleteScript**](docs/ScriptsApi.md#deleteScript) | **DELETE** /content/scripts/{uuid} | Delete a Script
*Scripts.ScriptsApi* | [**getScript**](docs/ScriptsApi.md#getScript) | **GET** /content/scripts/{uuid} | Get a Script
*Scripts.ScriptsApi* | [**getScripts**](docs/ScriptsApi.md#getScripts) | **GET** /content/scripts | Get All Scripts
*Scripts.ScriptsApi* | [**updateScript**](docs/ScriptsApi.md#updateScript) | **PUT** /content/scripts/{uuid} | Update a Script

## Documentation for Models

 - [Scripts.AllOfScriptsResponseDataItems](docs/AllOfScriptsResponseDataItems.md)
 - [Scripts.AllOfscriptResponse1Data](docs/AllOfscriptResponse1Data.md)
 - [Scripts.AllOfscriptResponseCollectionDataItems](docs/AllOfscriptResponseCollectionDataItems.md)
 - [Scripts.AllOfscriptResponseData](docs/AllOfscriptResponseData.md)
 - [Scripts.BaseError](docs/BaseError.md)
 - [Scripts.Body](docs/Body.md)
 - [Scripts.CollectionMeta](docs/CollectionMeta.md)
 - [Scripts.DetailedErrors](docs/DetailedErrors.md)
 - [Scripts.ErrorResponse](docs/ErrorResponse.md)
 - [Scripts.Meta](docs/Meta.md)
 - [Scripts.NoContent](docs/NoContent.md)
 - [Scripts.NotFound](docs/NotFound.md)
 - [Scripts.Pagination](docs/Pagination.md)
 - [Scripts.Pagination1](docs/Pagination1.md)
 - [Scripts.Pagination1Links](docs/Pagination1Links.md)
 - [Scripts.ScriptBase](docs/ScriptBase.md)
 - [Scripts.ScriptFull](docs/ScriptFull.md)
 - [Scripts.ScriptPost](docs/ScriptPost.md)
 - [Scripts.ScriptPost1](docs/ScriptPost1.md)
 - [Scripts.ScriptPut](docs/ScriptPut.md)
 - [Scripts.ScriptResponse](docs/ScriptResponse.md)
 - [Scripts.ScriptResponse1](docs/ScriptResponse1.md)
 - [Scripts.ScriptResponseCollection](docs/ScriptResponseCollection.md)
 - [Scripts.ScriptsResponse](docs/ScriptsResponse.md)

## Documentation for Authorization


### X-Auth-Client

- **Type**: API key
- **API key parameter name**: X-Auth-Client
- **Location**: HTTP header

### X-Auth-Token

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header
