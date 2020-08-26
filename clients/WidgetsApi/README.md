# widgets

Widgets - JavaScript client for widgets
Widgets API allows developers to programatically inject content into a BigCommerce theme. To learn how to use Widgets, see our [Widgets Overview](/api-docs/storefront/widgets/widgets-overview).
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
npm install widgets --save
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
var Widgets = require('widgets');
var defaultClient = Widgets.ApiClient.instance;

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

var api = new Widgets.PlacementApi()
var body = new Widgets.PlacementPost1(); // {PlacementPost1} 
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
api.createPlacement(body, opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Widgets.PlacementApi* | [**createPlacement**](docs/PlacementApi.md#createPlacement) | **POST** /content/placements | Create a Placement
*Widgets.PlacementApi* | [**deletePlacement**](docs/PlacementApi.md#deletePlacement) | **DELETE** /content/placements/{uuid} | Delete a Placement
*Widgets.PlacementApi* | [**getPlacement**](docs/PlacementApi.md#getPlacement) | **GET** /content/placements/{uuid} | Get a Placement
*Widgets.PlacementApi* | [**getPlacements**](docs/PlacementApi.md#getPlacements) | **GET** /content/placements | Get All Placements
*Widgets.PlacementApi* | [**updatePlacement**](docs/PlacementApi.md#updatePlacement) | **PUT** /content/placements/{uuid} | Update a Placement
*Widgets.RegionsApi* | [**getContentRegions**](docs/RegionsApi.md#getContentRegions) | **GET** /content/regions | Get Theme Regions
*Widgets.WidgetApi* | [**createWidget**](docs/WidgetApi.md#createWidget) | **POST** /content/widgets | Create a Widget
*Widgets.WidgetApi* | [**deleteWidget**](docs/WidgetApi.md#deleteWidget) | **DELETE** /content/widgets/{uuid} | Delete a Widget
*Widgets.WidgetApi* | [**getWidget**](docs/WidgetApi.md#getWidget) | **GET** /content/widgets/{uuid} | Get a Widget
*Widgets.WidgetApi* | [**getWidgets**](docs/WidgetApi.md#getWidgets) | **GET** /content/widgets | Get All Widgets
*Widgets.WidgetApi* | [**updateWidget**](docs/WidgetApi.md#updateWidget) | **PUT** /content/widgets/{uuid} | Update a Widget
*Widgets.WidgetTemplateApi* | [**createWidgetTemplate**](docs/WidgetTemplateApi.md#createWidgetTemplate) | **POST** /content/widget-templates | Create a Widget Template
*Widgets.WidgetTemplateApi* | [**deleteWidgetTemplate**](docs/WidgetTemplateApi.md#deleteWidgetTemplate) | **DELETE** /content/widget-templates/{uuid} | Delete A Widget Template
*Widgets.WidgetTemplateApi* | [**getWidgetTemplate**](docs/WidgetTemplateApi.md#getWidgetTemplate) | **GET** /content/widget-templates/{uuid} | Get a Widget Template
*Widgets.WidgetTemplateApi* | [**getWidgetTemplates**](docs/WidgetTemplateApi.md#getWidgetTemplates) | **GET** /content/widget-templates | Get All Widget Templates
*Widgets.WidgetTemplateApi* | [**updateWidgetTemplate**](docs/WidgetTemplateApi.md#updateWidgetTemplate) | **PUT** /content/widget-templates/{uuid} | Update a Widget Template

## Documentation for Models

 - [Widgets.AllOfinlineResponse2001DataItems](docs/AllOfinlineResponse2001DataItems.md)
 - [Widgets.AllOfinlineResponse2002Data](docs/AllOfinlineResponse2002Data.md)
 - [Widgets.AllOfinlineResponse2003DataItems](docs/AllOfinlineResponse2003DataItems.md)
 - [Widgets.AllOfinlineResponse2004Data](docs/AllOfinlineResponse2004Data.md)
 - [Widgets.AllOfinlineResponse200DataItems](docs/AllOfinlineResponse200DataItems.md)
 - [Widgets.ErrorBase](docs/ErrorBase.md)
 - [Widgets.ErrorBase1](docs/ErrorBase1.md)
 - [Widgets.InlineResponse200](docs/InlineResponse200.md)
 - [Widgets.InlineResponse2001](docs/InlineResponse2001.md)
 - [Widgets.InlineResponse2002](docs/InlineResponse2002.md)
 - [Widgets.InlineResponse2003](docs/InlineResponse2003.md)
 - [Widgets.InlineResponse2004](docs/InlineResponse2004.md)
 - [Widgets.InlineResponse2005](docs/InlineResponse2005.md)
 - [Widgets.Meta](docs/Meta.md)
 - [Widgets.MetaCollection](docs/MetaCollection.md)
 - [Widgets.MetaCollection1](docs/MetaCollection1.md)
 - [Widgets.NewModel](docs/NewModel.md)
 - [Widgets.NewmodelInner](docs/NewmodelInner.md)
 - [Widgets.Pagination](docs/Pagination.md)
 - [Widgets.Pagination1](docs/Pagination1.md)
 - [Widgets.Pagination1Links](docs/Pagination1Links.md)
 - [Widgets.PlacementBase](docs/PlacementBase.md)
 - [Widgets.PlacementFull](docs/PlacementFull.md)
 - [Widgets.PlacementPost](docs/PlacementPost.md)
 - [Widgets.PlacementPost1](docs/PlacementPost1.md)
 - [Widgets.PlacementPut](docs/PlacementPut.md)
 - [Widgets.PlacementPut1](docs/PlacementPut1.md)
 - [Widgets.ThemeRegion](docs/ThemeRegion.md)
 - [Widgets.ThemeRegion1](docs/ThemeRegion1.md)
 - [Widgets.WidgetBase](docs/WidgetBase.md)
 - [Widgets.WidgetFull](docs/WidgetFull.md)
 - [Widgets.WidgetPost](docs/WidgetPost.md)
 - [Widgets.WidgetPost1](docs/WidgetPost1.md)
 - [Widgets.WidgetPut](docs/WidgetPut.md)
 - [Widgets.WidgetPut1](docs/WidgetPut1.md)
 - [Widgets.WidgetSchema](docs/WidgetSchema.md)
 - [Widgets.WidgetSchemaArray](docs/WidgetSchemaArray.md)
 - [Widgets.WidgetSchemaHidden](docs/WidgetSchemaHidden.md)
 - [Widgets.WidgetSchemaSettingBase](docs/WidgetSchemaSettingBase.md)
 - [Widgets.WidgetSchemaSettingBase1](docs/WidgetSchemaSettingBase1.md)
 - [Widgets.WidgetSchemaTab](docs/WidgetSchemaTab.md)
 - [Widgets.WidgetSchemaTabSections](docs/WidgetSchemaTabSections.md)
 - [Widgets.WidgetSchemaTabSections1](docs/WidgetSchemaTabSections1.md)
 - [Widgets.WidgetSchemaTabSectionsSettings](docs/WidgetSchemaTabSectionsSettings.md)
 - [Widgets.WidgetTemplateBase](docs/WidgetTemplateBase.md)
 - [Widgets.WidgetTemplateBase1](docs/WidgetTemplateBase1.md)
 - [Widgets.WidgetTemplateFull](docs/WidgetTemplateFull.md)
 - [Widgets.WidgetTemplatePost](docs/WidgetTemplatePost.md)
 - [Widgets.WidgetTemplatePost1](docs/WidgetTemplatePost1.md)
 - [Widgets.WidgetTemplatePut](docs/WidgetTemplatePut.md)

## Documentation for Authorization


### X-Auth-Client

- **Type**: API key
- **API key parameter name**: X-Auth-Client
- **Location**: HTTP header

### X-Auth-Token

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header
