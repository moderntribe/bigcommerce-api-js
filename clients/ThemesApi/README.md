# themes

Themes - JavaScript client for themes
- [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication)  With BigCommerce's V3 REST API Theme endpoints, developers can: * backup themes * restore themes * download themes * activate themes * get status of theme jobs * read theme configurations  ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Themes                                       | modify     | `store_themes_manage`                         |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).
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
npm install themes --save
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
var Themes = require('themes');
var defaultClient = Themes.ApiClient.instance;

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

var api = new Themes.ThemeActionsApi()
var body = new Themes.Activate1(); // {Activate1} Request parameters.
var accept = "application/json"; // {String} 
var contentType = "application/json"; // {String} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.activateStoreTheme(body, accept, contentType, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Themes.ThemeActionsApi* | [**activateStoreTheme**](docs/ThemeActionsApi.md#activateStoreTheme) | **POST** /themes/actions/activate | Activate a Theme
*Themes.ThemeActionsApi* | [**downloadTheme**](docs/ThemeActionsApi.md#downloadTheme) | **POST** /themes/{uuid}/actions/download | Download a Theme
*Themes.ThemeJobsApi* | [**getJob**](docs/ThemeJobsApi.md#getJob) | **GET** /themes/jobs/{job_id} | Get a Theme Job
*Themes.ThemesApi* | [**deleteStoreTheme**](docs/ThemesApi.md#deleteStoreTheme) | **DELETE** /themes/{uuid} | Delete a Theme
*Themes.ThemesApi* | [**getStoreTheme**](docs/ThemesApi.md#getStoreTheme) | **GET** /themes/{uuid} | Get a Theme
*Themes.ThemesApi* | [**getStoreThemes**](docs/ThemesApi.md#getStoreThemes) | **GET** /themes | Get all Themes
*Themes.ThemesApi* | [**uploadTheme**](docs/ThemesApi.md#uploadTheme) | **POST** /themes | Upload a Theme

## Documentation for Models

 - [Themes.Activate](docs/Activate.md)
 - [Themes.Activate1](docs/Activate1.md)
 - [Themes.BaseError](docs/BaseError.md)
 - [Themes.Body](docs/Body.md)
 - [Themes.CollectionMeta](docs/CollectionMeta.md)
 - [Themes.DetailedErrors](docs/DetailedErrors.md)
 - [Themes.ErrorResponse](docs/ErrorResponse.md)
 - [Themes.Job](docs/Job.md)
 - [Themes.Job1](docs/Job1.md)
 - [Themes.JobErrors](docs/JobErrors.md)
 - [Themes.JobId](docs/JobId.md)
 - [Themes.JobResponse](docs/JobResponse.md)
 - [Themes.JobWarnings](docs/JobWarnings.md)
 - [Themes.Meta](docs/Meta.md)
 - [Themes.NoContent](docs/NoContent.md)
 - [Themes.NotFound](docs/NotFound.md)
 - [Themes.Pagination](docs/Pagination.md)
 - [Themes.Pagination1](docs/Pagination1.md)
 - [Themes.Pagination1Links](docs/Pagination1Links.md)
 - [Themes.RequestHeaders](docs/RequestHeaders.md)
 - [Themes.Theme](docs/Theme.md)
 - [Themes.ThemeConfigurationFull](docs/ThemeConfigurationFull.md)
 - [Themes.ThemeConfigurationWrite](docs/ThemeConfigurationWrite.md)
 - [Themes.ThemeResponse](docs/ThemeResponse.md)
 - [Themes.ThemeVariations](docs/ThemeVariations.md)
 - [Themes.ThemesCollectionResponse](docs/ThemesCollectionResponse.md)
 - [Themes.ThemesCollectionResponseData](docs/ThemesCollectionResponseData.md)
 - [Themes.Variation](docs/Variation.md)
 - [Themes.WhichThemeToDownload](docs/WhichThemeToDownload.md)

## Documentation for Authorization


### X-Auth-Client

- **Type**: API key
- **API key parameter name**: X-Auth-Client
- **Location**: HTTP header

### X-Auth-Token

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header
