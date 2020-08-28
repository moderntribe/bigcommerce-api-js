# OrdersV2.OrderShippingAddressesApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAShippingAddress**](OrderShippingAddressesApi.md#getAShippingAddress) | **GET** /orders/{order_id}/shipping_addresses/{id} | Get a Shipping Address
[**getAllShippingAddresses**](OrderShippingAddressesApi.md#getAllShippingAddresses) | **GET** /orders/{order_id}/shipping_addresses | Get a List of Order Shipping Addresses

<a name="getAShippingAddress"></a>
# **getAShippingAddress**
> OrderShippingAddress1 getAShippingAddress(orderId, id, accept, contentType)

Get a Shipping Address

Gets a shipping address associated with an order.  Returned in the response is shipping_quotes object. Please use the Get Shipping Quotes Endpoint. Using the response will return a 204 for the shipping quote.

### Example
```javascript
import OrdersV2 from 'orders_v2';
let defaultClient = OrdersV2.ApiClient.instance;

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

let apiInstance = new OrdersV2.OrderShippingAddressesApi();
let orderId = "orderId_example"; // String | 
let id = "id_example"; // String | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getAShippingAddress(orderId, id, accept, contentType, (error, data, response) => {
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
 **orderId** | **String**|  | 
 **id** | **String**|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**OrderShippingAddress1**](OrderShippingAddress1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllShippingAddresses"></a>
# **getAllShippingAddresses**
> [Object] getAllShippingAddresses(orderId, accept, contentType, opts)

Get a List of Order Shipping Addresses

Get all shipping addresses on an order using the &#x60;order_id&#x60;.  Returned in the response is shipping_quotes object. Please use the Get Shipping Quotes Endpoint. Using the response will return a 204 for the shipping quote.

### Example
```javascript
import OrdersV2 from 'orders_v2';
let defaultClient = OrdersV2.ApiClient.instance;

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

let apiInstance = new OrdersV2.OrderShippingAddressesApi();
let orderId = 56; // Number | ID of the order
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'page': 1.2, // Number | The page to return in the response.
  'limit': 1.2 // Number | Number of results to return.
};
apiInstance.getAllShippingAddresses(orderId, accept, contentType, opts, (error, data, response) => {
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
 **orderId** | **Number**| ID of the order | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **page** | **Number**| The page to return in the response. | [optional] 
 **limit** | **Number**| Number of results to return. | [optional] 

### Return type

**[Object]**

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

