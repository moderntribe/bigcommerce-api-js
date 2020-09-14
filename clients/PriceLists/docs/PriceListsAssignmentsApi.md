# PriceLists.PriceListsAssignmentsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPriceListAssignments**](PriceListsAssignmentsApi.md#createPriceListAssignments) | **POST** /pricelists/assignments | Create Price List Assignments
[**deletePriceListAssignmentsByFilter**](PriceListsAssignmentsApi.md#deletePriceListAssignmentsByFilter) | **DELETE** /pricelists/assignments | Delete Price List Assignments
[**getListOfPriceListAssignments**](PriceListsAssignmentsApi.md#getListOfPriceListAssignments) | **GET** /pricelists/assignments | Get Price List Assignments

<a name="createPriceListAssignments"></a>
# **createPriceListAssignments**
> Object createPriceListAssignments(body)

Create Price List Assignments

Creates a batch of &#x60;Price List Assignments&#x60;.

### Example
```javascript
import PriceLists from 'price_lists';
let defaultClient = PriceLists.ApiClient.instance;

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

let apiInstance = new PriceLists.PriceListsAssignmentsApi();
let body = [new PriceLists.Body()]; // [Body] | A BigCommerce `Price List Assignments` request.

apiInstance.createPriceListAssignments(body, (error, data, response) => {
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
 **body** | [**[Body]**](Body.md)| A BigCommerce &#x60;Price List Assignments&#x60; request. | 

### Return type

**Object**

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePriceListAssignmentsByFilter"></a>
# **deletePriceListAssignmentsByFilter**
> InlineResponse204 deletePriceListAssignmentsByFilter(opts)

Delete Price List Assignments

Deletes one or more &#x60;Price List Assignments&#x60; objects from BigCommerce using a filter.

### Example
```javascript
import PriceLists from 'price_lists';
let defaultClient = PriceLists.ApiClient.instance;

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

let apiInstance = new PriceLists.PriceListsAssignmentsApi();
let opts = { 
  'id': 56, // Number | The ID of the `Price List Assignment`.
  'priceListId': 56, // Number | The ID of the `Price List`.
  'customerGroupId': 56, // Number | The ID of the `Customer Group`.
  'channelId': 56 // Number | The ID of the `Channel`.
};
apiInstance.deletePriceListAssignmentsByFilter(opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the &#x60;Price List Assignment&#x60;. | [optional] 
 **priceListId** | **Number**| The ID of the &#x60;Price List&#x60;. | [optional] 
 **customerGroupId** | **Number**| The ID of the &#x60;Customer Group&#x60;. | [optional] 
 **channelId** | **Number**| The ID of the &#x60;Channel&#x60;. | [optional] 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getListOfPriceListAssignments"></a>
# **getListOfPriceListAssignments**
> InlineResponse200 getListOfPriceListAssignments(opts)

Get Price List Assignments

Fetches an array of &#x60;Price List Assignments&#x60; matching a particular Customer Group and Price List and Channel.

### Example
```javascript
import PriceLists from 'price_lists';
let defaultClient = PriceLists.ApiClient.instance;

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

let apiInstance = new PriceLists.PriceListsAssignmentsApi();
let opts = { 
  'id': 56, // Number | The ID of the `Price List Assignment`.
  'priceListId': 56, // Number | The ID of the `Price List`.
  'customerGroupId': 56, // Number | The ID of the `Customer Group`.
  'channelId': 56 // Number | The ID of the `Channel`.
};
apiInstance.getListOfPriceListAssignments(opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the &#x60;Price List Assignment&#x60;. | [optional] 
 **priceListId** | **Number**| The ID of the &#x60;Price List&#x60;. | [optional] 
 **customerGroupId** | **Number**| The ID of the &#x60;Customer Group&#x60;. | [optional] 
 **channelId** | **Number**| The ID of the &#x60;Channel&#x60;. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

