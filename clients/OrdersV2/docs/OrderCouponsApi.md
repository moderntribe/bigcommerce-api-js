# OrdersV2.OrderCouponsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllOrderCoupons**](OrderCouponsApi.md#getAllOrderCoupons) | **GET** /orders/{order_id}/coupons | List Order Coupons

<a name="getAllOrderCoupons"></a>
# **getAllOrderCoupons**
> [OrderCouponsBase1] getAllOrderCoupons(orderId, accept, contentType, opts)

List Order Coupons

Lists all order coupons. Optional parameters can be passed in.  |Type &#x60;int&#x60;|Type Name| |-|-| |&#x60;0&#x60;|&#x60;per_item_discount&#x60;| |&#x60;1&#x60;|&#x60;percentage_discount&#x60;| |&#x60;2&#x60;|&#x60;per_total_discount&#x60;| |&#x60;3&#x60;|&#x60;shipping_discount&#x60;| |&#x60;4&#x60;|&#x60;free_shipping&#x60;| |&#x60;5&#x60;|&#x60;promotion&#x60;|

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

let apiInstance = new OrdersV2.OrderCouponsApi();
let orderId = 56; // Number | ID of the order
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'page': 1.2, // Number | The page to return in the response.
  'limit': 1.2 // Number | Number of results to return.
};
apiInstance.getAllOrderCoupons(orderId, accept, contentType, opts, (error, data, response) => {
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

[**[OrderCouponsBase1]**](OrderCouponsBase1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

