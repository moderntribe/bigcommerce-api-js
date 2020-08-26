# Widgets.WidgetApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWidget**](WidgetApi.md#createWidget) | **POST** /content/widgets | Create a Widget
[**deleteWidget**](WidgetApi.md#deleteWidget) | **DELETE** /content/widgets/{uuid} | Delete a Widget
[**getWidget**](WidgetApi.md#getWidget) | **GET** /content/widgets/{uuid} | Get a Widget
[**getWidgets**](WidgetApi.md#getWidgets) | **GET** /content/widgets | Get All Widgets
[**updateWidget**](WidgetApi.md#updateWidget) | **PUT** /content/widgets/{uuid} | Update a Widget

<a name="createWidget"></a>
# **createWidget**
> InlineResponse2002 createWidget(body, opts)

Create a Widget

Creates a **Widget**.  ***Note:*** *There is a limit of 1000 widgets per store.*  **Required Fields** * name * widget_template_uuid

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

let apiInstance = new Widgets.WidgetApi();
let body = new Widgets.WidgetPost1(); // WidgetPost1 | 
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.createWidget(body, opts, (error, data, response) => {
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
 **body** | [**WidgetPost1**](WidgetPost1.md)|  | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWidget"></a>
# **deleteWidget**
> deleteWidget(uuid, opts)

Delete a Widget

Deletes a **Widget**.

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

let apiInstance = new Widgets.WidgetApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific widget.
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.deleteWidget(uuid, opts, (error, data, response) => {
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
 **uuid** | [**String**](.md)| The identifier for a specific widget. | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWidget"></a>
# **getWidget**
> InlineResponse2002 getWidget(uuid, opts)

Get a Widget

Returns a single **Widget**.

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

let apiInstance = new Widgets.WidgetApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific widget.
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.getWidget(uuid, opts, (error, data, response) => {
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
 **uuid** | [**String**](.md)| The identifier for a specific widget. | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWidgets"></a>
# **getWidgets**
> InlineResponse2001 getWidgets(opts)

Get All Widgets

Returns a list of **Widgets**. Optional parameters can be passed in.

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

let apiInstance = new Widgets.WidgetApi();
let opts = { 
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products. 
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products. 
  'widgetTemplateKind': "widgetTemplateKind_example", // String | The kind of widget template.
  'widgetTemplateUuid': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | The identifier for a specific widget template.
  'accept': "application/json", // String | 
  'contentType': "application/json", // String | 
  'name': "name_example" // String | The URL encoded name of the widget. Use `name:in` to pass in comma-separated list of widget names. **Ex**: `/widgets?name:in=test-widget-name,header%20images`
};
apiInstance.getWidgets(opts, (error, data, response) => {
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
 **widgetTemplateUuid** | [**String**](.md)| The identifier for a specific widget template. | [optional] 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]
 **name** | **String**| The URL encoded name of the widget. Use &#x60;name:in&#x60; to pass in comma-separated list of widget names. **Ex**: &#x60;/widgets?name:in&#x3D;test-widget-name,header%20images&#x60; | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateWidget"></a>
# **updateWidget**
> InlineResponse2002 updateWidget(bodyuuid, opts)

Update a Widget

Updates a **Widget**.

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

let apiInstance = new Widgets.WidgetApi();
let body = new Widgets.WidgetPut1(); // WidgetPut1 | 
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific widget.
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.updateWidget(bodyuuid, opts, (error, data, response) => {
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
 **body** | [**WidgetPut1**](WidgetPut1.md)|  | 
 **uuid** | [**String**](.md)| The identifier for a specific widget. | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

