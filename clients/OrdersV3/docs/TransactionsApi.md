# OrdersV3.TransactionsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactions**](TransactionsApi.md#getTransactions) | **GET** /orders/{order_id}/transactions | Get Transactions

<a name="getTransactions"></a>
# **getTransactions**
> InlineResponse200 getTransactions(orderId, opts)

Get Transactions

Returns an **order&#x27;s** transactions.   **Usage Notes** * Depending on the payment method, different information will be available (not all payment gateways return full card or fraud detail).

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

let apiInstance = new OrdersV3.TransactionsApi();
let orderId = 56; // Number | The ID of the `Order` to which the transactions belong.
let opts = {
  'accept': "application/json", // String |
  'contentType': "application/json" // String |
};
apiInstance.getTransactions(orderId, opts, (error, data, response) => {
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
 **orderId** | **Number**| The ID of the &#x60;Order&#x60; to which the transactions belong.  |
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

