# OrdersV2.OrderProductsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllOrderProducts**](OrderProductsApi.md#getAllOrderProducts) | **GET** /orders/{order_id}/products | List Order Products
[**getAnOrderProduct**](OrderProductsApi.md#getAnOrderProduct) | **GET** /orders/{order_id}/products/{product_id} | Get an Order Product

<a name="getAllOrderProducts"></a>
# **getAllOrderProducts**
> [OrderProducts1] getAllOrderProducts(orderId, accept, contentType, opts)

List Order Products

Lists all order products on an order using &#x60;order_id&#x60;. By default, items sort from lowest to highest according to a newly created ID, separate from the &#x60;order_id&#x60; and the &#x60;product_id&#x60;.

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

let apiInstance = new OrdersV2.OrderProductsApi();
let orderId = 56; // Number | ID of the order
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'page': 1.2, // Number | The page to return in the response.
  'limit': 1.2 // Number | Number of results to return.
};
apiInstance.getAllOrderProducts(orderId, accept, contentType, opts, (error, data, response) => {
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

[**[OrderProducts1]**](OrderProducts1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json, Multiple Products

<a name="getAnOrderProduct"></a>
# **getAnOrderProduct**
> OrderProducts2 getAnOrderProduct(orderId, productId, accept, contentType)

Get an Order Product

Gets a product line item associated with the order.

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

let apiInstance = new OrdersV2.OrderProductsApi();
let orderId = 56; // Number | ID of the order
let productId = 56; // Number | ID of the product
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getAnOrderProduct(orderId, productId, accept, contentType, (error, data, response) => {
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
 **productId** | **Number**| ID of the product | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**OrderProducts2**](OrderProducts2.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, Custom Product, Product with Variants

