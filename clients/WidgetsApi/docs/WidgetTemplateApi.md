# Widgets.WidgetTemplateApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWidgetTemplate**](WidgetTemplateApi.md#createWidgetTemplate) | **POST** /content/widget-templates | Create a Widget Template
[**deleteWidgetTemplate**](WidgetTemplateApi.md#deleteWidgetTemplate) | **DELETE** /content/widget-templates/{uuid} | Delete A Widget Template
[**getWidgetTemplate**](WidgetTemplateApi.md#getWidgetTemplate) | **GET** /content/widget-templates/{uuid} | Get a Widget Template
[**getWidgetTemplates**](WidgetTemplateApi.md#getWidgetTemplates) | **GET** /content/widget-templates | Get All Widget Templates
[**updateWidgetTemplate**](WidgetTemplateApi.md#updateWidgetTemplate) | **PUT** /content/widget-templates/{uuid} | Update a Widget Template

<a name="createWidgetTemplate"></a>
# **createWidgetTemplate**
> Object createWidgetTemplate(body, opts)

Create a Widget Template

Creates a **Widget Template**.  ***Note:*** *There is a limit of 100 custom widget templates per store.*  **Required Fields** * name * template

### Example
```javascript
import Widgets from 'widgets';
let defaultClient = Widgets.ApiClient.instance;

// Configure API key authorization: X-Auth-Client
let X-Auth-Client = defaultClient.authentications['X-Auth-Client'];
X-Auth-Client.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Client.apiKeyPrefix = 'Token';

// Configure API key authorization: X-Auth-Token
let X-Auth-Token = defaultClient.authentications['X-Auth-Token'];
X-Auth-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Token.apiKeyPrefix = 'Token';

let apiInstance = new Widgets.WidgetTemplateApi();
let body = new Widgets.WidgetTemplatePost1(); // WidgetTemplatePost1 | 
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.createWidgetTemplate(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WidgetTemplatePost1**](WidgetTemplatePost1.md)|  | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

**Object**

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWidgetTemplate"></a>
# **deleteWidgetTemplate**
> deleteWidgetTemplate(uuid, opts)

Delete A Widget Template

Delete a **Widget Template**.

### Example
```javascript
import Widgets from 'widgets';
let defaultClient = Widgets.ApiClient.instance;

// Configure API key authorization: X-Auth-Client
let X-Auth-Client = defaultClient.authentications['X-Auth-Client'];
X-Auth-Client.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Client.apiKeyPrefix = 'Token';

// Configure API key authorization: X-Auth-Token
let X-Auth-Token = defaultClient.authentications['X-Auth-Token'];
X-Auth-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Token.apiKeyPrefix = 'Token';

let apiInstance = new Widgets.WidgetTemplateApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific template.
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.deleteWidgetTemplate(uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| The identifier for a specific template. | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWidgetTemplate"></a>
# **getWidgetTemplate**
> Object getWidgetTemplate(uuid, opts)

Get a Widget Template

Return a single **Widget Template**.

### Example
```javascript
import Widgets from 'widgets';
let defaultClient = Widgets.ApiClient.instance;

// Configure API key authorization: X-Auth-Client
let X-Auth-Client = defaultClient.authentications['X-Auth-Client'];
X-Auth-Client.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Client.apiKeyPrefix = 'Token';

// Configure API key authorization: X-Auth-Token
let X-Auth-Token = defaultClient.authentications['X-Auth-Token'];
X-Auth-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Token.apiKeyPrefix = 'Token';

let apiInstance = new Widgets.WidgetTemplateApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific template.
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.getWidgetTemplate(uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| The identifier for a specific template. | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

**Object**

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWidgetTemplates"></a>
# **getWidgetTemplates**
> InlineResponse200 getWidgetTemplates(opts)

Get All Widget Templates

Returns a list of **Widget Templates**.

### Example
```javascript
import Widgets from 'widgets';
let defaultClient = Widgets.ApiClient.instance;

// Configure API key authorization: X-Auth-Client
let X-Auth-Client = defaultClient.authentications['X-Auth-Client'];
X-Auth-Client.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Client.apiKeyPrefix = 'Token';

// Configure API key authorization: X-Auth-Token
let X-Auth-Token = defaultClient.authentications['X-Auth-Token'];
X-Auth-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Token.apiKeyPrefix = 'Token';

let apiInstance = new Widgets.WidgetTemplateApi();
let opts = { 
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products. 
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products. 
  'widgetTemplateKind': "widgetTemplateKind_example", // String | The kind of widget template.
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.getWidgetTemplates(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Specifies the page number in a limited (paginated) list of products.  | [optional] 
 **limit** | **Number**| Controls the number of items per page in a limited (paginated) list of products.  | [optional] 
 **widgetTemplateKind** | **String**| The kind of widget template. | [optional] 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateWidgetTemplate"></a>
# **updateWidgetTemplate**
> Object updateWidgetTemplate(bodyuuid, opts)

Update a Widget Template

Update a **Widget Template**.

### Example
```javascript
import Widgets from 'widgets';
let defaultClient = Widgets.ApiClient.instance;

// Configure API key authorization: X-Auth-Client
let X-Auth-Client = defaultClient.authentications['X-Auth-Client'];
X-Auth-Client.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Client.apiKeyPrefix = 'Token';

// Configure API key authorization: X-Auth-Token
let X-Auth-Token = defaultClient.authentications['X-Auth-Token'];
X-Auth-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Token.apiKeyPrefix = 'Token';

let apiInstance = new Widgets.WidgetTemplateApi();
let body = new Widgets.WidgetTemplateBase1(); // WidgetTemplateBase1 | 
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific template.
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.updateWidgetTemplate(bodyuuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WidgetTemplateBase1**](WidgetTemplateBase1.md)|  | 
 **uuid** | [**String**](.md)| The identifier for a specific template. | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

**Object**

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

