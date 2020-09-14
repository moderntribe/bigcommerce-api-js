# Themes.ThemeActionsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateStoreTheme**](ThemeActionsApi.md#activateStoreTheme) | **POST** /themes/actions/activate | Activate a Theme
[**downloadTheme**](ThemeActionsApi.md#downloadTheme) | **POST** /themes/{uuid}/actions/download | Download a Theme

<a name="activateStoreTheme"></a>
# **activateStoreTheme**
> NoContent activateStoreTheme(bodyacceptcontentType)

Activate a Theme

Actives a store *Theme*.   This returns a 204 response upon success.

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

let apiInstance = new Themes.ThemeActionsApi();
let body = new Themes.Activate1(); // Activate1 | Request parameters.
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.activateStoreTheme(bodyacceptcontentType, (error, data, response) => {
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
 **body** | [**Activate1**](Activate1.md)| Request parameters. | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**NoContent**](NoContent.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="downloadTheme"></a>
# **downloadTheme**
> JobId downloadTheme(bodyacceptcontentTypeuuid)

Download a Theme

Downloads a stores *Theme*.

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

let apiInstance = new Themes.ThemeActionsApi();
let body = new Themes.WhichThemeToDownload(); // WhichThemeToDownload | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let uuid = "uuid_example"; // String | The theme identifier.

apiInstance.downloadTheme(bodyacceptcontentTypeuuid, (error, data, response) => {
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
 **body** | [**WhichThemeToDownload**](WhichThemeToDownload.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **uuid** | **String**| The theme identifier. | 

### Return type

[**JobId**](JobId.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

