# OrdersV3.OrderRefundsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getorderrefunds**](OrderRefundsApi.md#getorderrefunds) | **GET** /orders/{order_id}/payment_actions/refunds | Get Refunds for Order
[**postrefund**](OrderRefundsApi.md#postrefund) | **POST** /orders/{order_id}/payment_actions/refunds | Create a Refund
[**postrefundquote**](OrderRefundsApi.md#postrefundquote) | **POST** /orders/{order_id}/payment_actions/refund_quotes | Create a Refund Quote

<a name="getorderrefunds"></a>
# **getorderrefunds**
> InlineResponse2001 getorderrefunds(orderId, opts)

Get Refunds for Order

Returns a list of refunds ordered by refund ID in ascending order for the given order.

### Example
```javascript
import OrdersV3 from 'orders_v3';
let defaultClient = OrdersV3.ApiClient.instance;

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

let apiInstance = new OrdersV3.OrderRefundsApi();
let orderId = "orderId_example"; // String | 
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.getorderrefunds(orderId, opts, (error, data, response) => {
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
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postrefund"></a>
# **postrefund**
> InlineResponse2011 postrefund(bodyorderId, opts)

Create a Refund

Creates a refund.

### Example
```javascript
import OrdersV3 from 'orders_v3';
let defaultClient = OrdersV3.ApiClient.instance;

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

let apiInstance = new OrdersV3.OrderRefundsApi();
let body = new OrdersV3.RefundRequestPost1(); // RefundRequestPost1 | 
let orderId = 56; // Number | order id
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.postrefund(bodyorderId, opts, (error, data, response) => {
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
 **body** | [**RefundRequestPost1**](RefundRequestPost1.md)|  | 
 **orderId** | **Number**| order id | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postrefundquote"></a>
# **postrefundquote**
> InlineResponse201 postrefundquote(bodyorderId, opts)

Create a Refund Quote

Calculate the tax amount, total refund amount and get availble payment options for an order refund by providing items and costs or quantities to refund.

### Example
```javascript
import OrdersV3 from 'orders_v3';
let defaultClient = OrdersV3.ApiClient.instance;

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

let apiInstance = new OrdersV3.OrderRefundsApi();
let body = new OrdersV3.RefundQuotePost1(); // RefundQuotePost1 | 
let orderId = 56; // Number | Order id
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.postrefundquote(bodyorderId, opts, (error, data, response) => {
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
 **body** | [**RefundQuotePost1**](RefundQuotePost1.md)|  | 
 **orderId** | **Number**| Order id | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

