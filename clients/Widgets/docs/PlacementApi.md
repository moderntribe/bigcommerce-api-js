# Widgets.PlacementApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPlacement**](PlacementApi.md#createPlacement) | **POST** /content/placements | Create a Placement
[**deletePlacement**](PlacementApi.md#deletePlacement) | **DELETE** /content/placements/{uuid} | Delete a Placement
[**getPlacement**](PlacementApi.md#getPlacement) | **GET** /content/placements/{uuid} | Get a Placement
[**getPlacements**](PlacementApi.md#getPlacements) | **GET** /content/placements | Get All Placements
[**updatePlacement**](PlacementApi.md#updatePlacement) | **PUT** /content/placements/{uuid} | Update a Placement

<a name="createPlacement"></a>
# **createPlacement**
> InlineResponse2004 createPlacement(body, opts)

Create a Placement

Creates a **Placement**.

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

let apiInstance = new Widgets.PlacementApi();
let body = new Widgets.PlacementPost1(); // PlacementPost1 | 
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.createPlacement(body, opts, (error, data, response) => {
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
 **body** | [**PlacementPost1**](PlacementPost1.md)|  | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePlacement"></a>
# **deletePlacement**
> deletePlacement(uuid, opts)

Delete a Placement

Deletes a **Placement**.

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

let apiInstance = new Widgets.PlacementApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific placement.
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.deletePlacement(uuid, opts, (error, data, response) => {
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
 **uuid** | [**String**](.md)| The identifier for a specific placement. | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlacement"></a>
# **getPlacement**
> InlineResponse2004 getPlacement(uuid, opts)

Get a Placement

Returns a single **Placement**.

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

let apiInstance = new Widgets.PlacementApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific placement.
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.getPlacement(uuid, opts, (error, data, response) => {
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
 **uuid** | [**String**](.md)| The identifier for a specific placement. | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlacements"></a>
# **getPlacements**
> InlineResponse2003 getPlacements(opts)

Get All Placements

Returns a list of **Placements**. Optional parameters can be passed in.

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

let apiInstance = new Widgets.PlacementApi();
let opts = { 
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products. 
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products. 
  'widgetTemplateKind': "widgetTemplateKind_example", // String | The kind of widget template.
  'templateFile': "templateFile_example", // String | The template file, for example: `pages/home`.
  'widgetUuid': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | The identifier for a specific widget.
  'widgetTemplateUuid': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | The identifier for a specific widget template.
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.getPlacements(opts, (error, data, response) => {
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
 **templateFile** | **String**| The template file, for example: &#x60;pages/home&#x60;. | [optional] 
 **widgetUuid** | [**String**](.md)| The identifier for a specific widget. | [optional] 
 **widgetTemplateUuid** | [**String**](.md)| The identifier for a specific widget template. | [optional] 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePlacement"></a>
# **updatePlacement**
> InlineResponse2004 updatePlacement(bodyuuid, opts)

Update a Placement

Updates a **Placement**.

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

let apiInstance = new Widgets.PlacementApi();
let body = new Widgets.PlacementPut1(); // PlacementPut1 | 
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific placement.
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.updatePlacement(bodyuuid, opts, (error, data, response) => {
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
 **body** | [**PlacementPut1**](PlacementPut1.md)|  | 
 **uuid** | [**String**](.md)| The identifier for a specific placement. | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

