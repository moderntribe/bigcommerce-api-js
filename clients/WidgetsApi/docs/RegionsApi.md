# Widgets.RegionsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContentRegions**](RegionsApi.md#getContentRegions) | **GET** /content/regions | Get Theme Regions

<a name="getContentRegions"></a>
# **getContentRegions**
> InlineResponse2005 getContentRegions(templateFile, opts)

Get Theme Regions

Returns a list of unique **Theme Regions** in a file.  **Required Query** * &#x60;template_file&#x60;

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

let apiInstance = new Widgets.RegionsApi();
let templateFile = "templateFile_example"; // String | The template file, for example: `templateFile=pages/home`.
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.getContentRegions(templateFile, opts, (error, data, response) => {
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
 **templateFile** | **String**| The template file, for example: &#x60;templateFile&#x3D;pages/home&#x60;. | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

