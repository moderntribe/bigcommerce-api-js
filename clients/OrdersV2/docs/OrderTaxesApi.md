# OrdersV2.OrderTaxesApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderTaxes**](OrderTaxesApi.md#getOrderTaxes) | **GET** /orders/{order_id}/taxes | Get All Order Taxes

<a name="getOrderTaxes"></a>
# **getOrderTaxes**
> [OrderTaxesBase1] getOrderTaxes(orderId, accept, contentType, opts)

Get All Order Taxes

Gets all order taxes using &#x60;order_id&#x60;. Each tax applied to an order. This information can be useful for reporting purposes. Pass in the query parameter &#x60;?details&#x3D;true&#x60; to return extra details about order taxes. &#x60;order_product_id&#x60; and &#x60;line_item_type&#x60; are also returned.  All values are read-only.

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

let apiInstance = new OrdersV2.OrderTaxesApi();
let orderId = 56; // Number | ID of the order
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'page': 1.2, // Number | The page to return in the response.
  'limit': 1.2, // Number | Number of results to return.
  'details': "true" // String | To return detailed tax information, pass in the details query.
};
apiInstance.getOrderTaxes(orderId, accept, contentType, opts, (error, data, response) => {
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
 **details** | **String**| To return detailed tax information, pass in the details query. | [optional] [default to true]

### Return type

[**[OrderTaxesBase1]**](OrderTaxesBase1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

