# Themes.ThemesApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteStoreTheme**](ThemesApi.md#deleteStoreTheme) | **DELETE** /themes/{uuid} | Delete a Theme
[**getStoreTheme**](ThemesApi.md#getStoreTheme) | **GET** /themes/{uuid} | Get a Theme
[**getStoreThemes**](ThemesApi.md#getStoreThemes) | **GET** /themes | Get all Themes
[**uploadTheme**](ThemesApi.md#uploadTheme) | **POST** /themes | Upload a Theme

<a name="deleteStoreTheme"></a>
# **deleteStoreTheme**
> deleteStoreTheme(uuid, accept, contentType)

Delete a Theme

Deletes a store *Theme*. Theme variations can not be deleted using this endpoint. This will delete the theme and all variations.

### Example
```javascript
import Themes from 'themes';
let defaultClient = Themes.ApiClient.instance;

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

let apiInstance = new Themes.ThemesApi();
let uuid = "uuid_example"; // String | The theme identifier.
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteStoreTheme(uuid, accept, contentType, (error, data, response) => {
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
 **uuid** | **String**| The theme identifier. | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStoreTheme"></a>
# **getStoreTheme**
> ThemeResponse getStoreTheme(uuid, accept, contentType)

Get a Theme

Returns a store *Theme*. The theme variation is not available at this endpoint.

### Example
```javascript
import Themes from 'themes';
let defaultClient = Themes.ApiClient.instance;

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

let apiInstance = new Themes.ThemesApi();
let uuid = "uuid_example"; // String | The theme identifier.
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getStoreTheme(uuid, accept, contentType, (error, data, response) => {
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
 **uuid** | **String**| The theme identifier. | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**ThemeResponse**](ThemeResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStoreThemes"></a>
# **getStoreThemes**
> ThemesCollectionResponse getStoreThemes(accept, contentType)

Get all Themes

Returns a list of store *Themes*.

### Example
```javascript
import Themes from 'themes';
let defaultClient = Themes.ApiClient.instance;

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

let apiInstance = new Themes.ThemesApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getStoreThemes(accept, contentType, (error, data, response) => {
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

### Return type

[**ThemesCollectionResponse**](ThemesCollectionResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="uploadTheme"></a>
# **uploadTheme**
> JobId uploadTheme(fileacceptcontentType)

Upload a Theme

Uploads a new *Theme* to your BigCommerce store.  **Required Fields** * file

### Example
```javascript
import Themes from 'themes';
let defaultClient = Themes.ApiClient.instance;

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

let apiInstance = new Themes.ThemesApi();
let file = "file_example"; // File | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.uploadTheme(fileacceptcontentType, (error, data, response) => {
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
 **file** | **File**|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**JobId**](JobId.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

