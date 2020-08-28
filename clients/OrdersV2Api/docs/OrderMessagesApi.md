# OrdersV2.OrderMessagesApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderMessages**](OrderMessagesApi.md#getOrderMessages) | **GET** /orders/{order_id}/messages | Get Order Messages

<a name="getOrderMessages"></a>
# **getOrderMessages**
> [InlineResponse200] getOrderMessages(orderId, accept, contentType, opts)

Get Order Messages

Gets the messages associated with an order.

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

let apiInstance = new OrdersV2.OrderMessagesApi();
let orderId = "orderId_example"; // String | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'minId': 56, // Number | The minimum order ID.
  'maxId': 56, // Number | The maximum order ID.
  'customerId': 56, // Number | Customer ID
  'minDateCreated': "minDateCreated_example", // String | Minimum date the order was created in RFC-2822 or ISO-8601.  RFC-2822: `Thu, 20 Apr 2017 11:32:00 -0400`  ISO-8601: `2017-04-20T11:32:00.000-04:00`
  'maxDateCreated': "maxDateCreated_example", // String | Maximum date the order was created in RFC-2822 or ISO-8601.  RFC-2822: `Thu, 20 Apr 2017 11:32:00 -0400`  ISO-8601: `2017-04-20T11:32:00.000-04:00`
  'isFlagged': true, // Boolean | If the message is [flagged](https://support.bigcommerce.com/s/article/Communicating-with-Customers#Messages).
  'status': "status_example", // String | Status of the order message.
  'page': 1.2, // Number | The page to return in the response.
  'limit': 1.2 // Number | Number of results to return.
};
apiInstance.getOrderMessages(orderId, accept, contentType, opts, (error, data, response) => {
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
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **minId** | **Number**| The minimum order ID. | [optional] 
 **maxId** | **Number**| The maximum order ID. | [optional] 
 **customerId** | **Number**| Customer ID | [optional] 
 **minDateCreated** | **String**| Minimum date the order was created in RFC-2822 or ISO-8601.  RFC-2822: &#x60;Thu, 20 Apr 2017 11:32:00 -0400&#x60;  ISO-8601: &#x60;2017-04-20T11:32:00.000-04:00&#x60; | [optional] 
 **maxDateCreated** | **String**| Maximum date the order was created in RFC-2822 or ISO-8601.  RFC-2822: &#x60;Thu, 20 Apr 2017 11:32:00 -0400&#x60;  ISO-8601: &#x60;2017-04-20T11:32:00.000-04:00&#x60; | [optional] 
 **isFlagged** | **Boolean**| If the message is [flagged](https://support.bigcommerce.com/s/article/Communicating-with-Customers#Messages). | [optional] 
 **status** | **String**| Status of the order message. | [optional] 
 **page** | **Number**| The page to return in the response. | [optional] 
 **limit** | **Number**| Number of results to return. | [optional] 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

