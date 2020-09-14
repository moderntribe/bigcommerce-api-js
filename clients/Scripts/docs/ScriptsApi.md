# Scripts.ScriptsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createScript**](ScriptsApi.md#createScript) | **POST** /content/scripts | Create a Script
[**deleteScript**](ScriptsApi.md#deleteScript) | **DELETE** /content/scripts/{uuid} | Delete a Script
[**getScript**](ScriptsApi.md#getScript) | **GET** /content/scripts/{uuid} | Get a Script
[**getScripts**](ScriptsApi.md#getScripts) | **GET** /content/scripts | Get All Scripts
[**updateScript**](ScriptsApi.md#updateScript) | **PUT** /content/scripts/{uuid} | Update a Script

<a name="createScript"></a>
# **createScript**
> ScriptResponse1 createScript(bodyacceptcontentType)

Create a Script

Creates a *Script*.  **Required Fields** * name  **Read Only Fields** * uuid  **Notes** * If kind is &#x60;src&#x60; –- Only the &#x60;src&#x60; property is needed, and you can optionally supply a &#x60;load_method&#x60;. The &#x60;html&#x60; field should not be specified. * If kind is script_tag -- Only the &#x60;script_tag&#x60; is needed. The &#x60;src&#x60; field should not be specified. * Each app can have 10 scripts installed. * Multiple scripts can be created [per call](https://developer.bigcommerce.com/api-docs/storefront/scripts-overview#scripts_scripts-notes). 

### Example
```javascript
import Scripts from 'scripts';
let defaultClient = Scripts.ApiClient.instance;

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

let apiInstance = new Scripts.ScriptsApi();
let body = new Scripts.ScriptPost1(); // ScriptPost1 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.createScript(bodyacceptcontentType, (error, data, response) => {
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
 **body** | [**ScriptPost1**](ScriptPost1.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**ScriptResponse1**](ScriptResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteScript"></a>
# **deleteScript**
> NoContent deleteScript(uuid, accept, contentType)

Delete a Script

Deletes a *Script*.

### Example
```javascript
import Scripts from 'scripts';
let defaultClient = Scripts.ApiClient.instance;

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

let apiInstance = new Scripts.ScriptsApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific script.
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteScript(uuid, accept, contentType, (error, data, response) => {
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
 **uuid** | [**String**](.md)| The identifier for a specific script. | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**NoContent**](NoContent.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getScript"></a>
# **getScript**
> ScriptResponse1 getScript(uuid, accept, contentType)

Get a Script

Returns a single *Script*.

### Example
```javascript
import Scripts from 'scripts';
let defaultClient = Scripts.ApiClient.instance;

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

let apiInstance = new Scripts.ScriptsApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific script.
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getScript(uuid, accept, contentType, (error, data, response) => {
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
 **uuid** | [**String**](.md)| The identifier for a specific script. | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**ScriptResponse1**](ScriptResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getScripts"></a>
# **getScripts**
> ScriptsResponse getScripts(accept, contentType, opts)

Get All Scripts

Returns a list of *Scripts*. Optional parameters can be passed in.  This will only return scripts that have been created by the api key and password that created the script originally. 

### Example
```javascript
import Scripts from 'scripts';
let defaultClient = Scripts.ApiClient.instance;

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

let apiInstance = new Scripts.ScriptsApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products.
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products.
  'sort': "sort_example", // String | Scripts field name to sort by. 
  'direction': "direction_example" // String | Sort direction. Acceptable values are: `asc`, `desc`. 
};
apiInstance.getScripts(accept, contentType, opts, (error, data, response) => {
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
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **page** | **Number**| Specifies the page number in a limited (paginated) list of products. | [optional] 
 **limit** | **Number**| Controls the number of items per page in a limited (paginated) list of products. | [optional] 
 **sort** | **String**| Scripts field name to sort by.  | [optional] 
 **direction** | **String**| Sort direction. Acceptable values are: &#x60;asc&#x60;, &#x60;desc&#x60;.  | [optional] 

### Return type

[**ScriptsResponse**](ScriptsResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateScript"></a>
# **updateScript**
> ScriptResponse1 updateScript(bodycontentTypeacceptuuid)

Update a Script

Updates a *Script*.

### Example
```javascript
import Scripts from 'scripts';
let defaultClient = Scripts.ApiClient.instance;

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

let apiInstance = new Scripts.ScriptsApi();
let body = new Scripts.Body(); // Body | 
let contentType = "application/json"; // String | 
let accept = "application/json"; // String | 
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The identifier for a specific script.

apiInstance.updateScript(bodycontentTypeacceptuuid, (error, data, response) => {
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
 **body** | [**Body**](Body.md)|  | 
 **contentType** | **String**|  | [default to application/json]
 **accept** | **String**|  | [default to application/json]
 **uuid** | [**String**](.md)| The identifier for a specific script. | 

### Return type

[**ScriptResponse1**](ScriptResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

