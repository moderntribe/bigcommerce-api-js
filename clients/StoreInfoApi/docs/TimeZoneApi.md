# StoreInformation.TimeZoneApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timeGet**](TimeZoneApi.md#timeGet) | **GET** /time | Get System Timestamp

<a name="timeGet"></a>
# **timeGet**
> TimeStampFull1 timeGet(accept, contentType)

Get System Timestamp

Returns the system timestamp at the time of the request. The time resource is useful for validating API authentication details and testing client connections.

### Example
```javascript
import StoreInformation from 'store_information';
let defaultClient = StoreInformation.ApiClient.instance;

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

let apiInstance = new StoreInformation.TimeZoneApi();
let accept = "accept_example"; // String | 
let contentType = "contentType_example"; // String | 

apiInstance.timeGet(accept, contentType, (error, data, response) => {
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
 **accept** | **String**|  | 
 **contentType** | **String**|  | 

### Return type

[**TimeStampFull1**](TimeStampFull1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

