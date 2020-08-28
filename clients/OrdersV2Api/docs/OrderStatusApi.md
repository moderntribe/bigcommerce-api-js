# OrdersV2.OrderStatusApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAOrderStatus**](OrderStatusApi.md#getAOrderStatus) | **GET** /order_statuses/{status_id} | Get a Single Order Status by Id
[**getOrderStatus**](OrderStatusApi.md#getOrderStatus) | **GET** /order_statuses | Get All Order Statuses

<a name="getAOrderStatus"></a>
# **getAOrderStatus**
> OrderStatusBase1 getAOrderStatus(statusId, accept, contentType)

Get a Single Order Status by Id

Returns a single order status.  **Order Status Descriptions:** |Status ID | Name  | Description | |--|--|--| | 0 | Incomplete  | An incomplete order happens when a shopper reached the payment page, but did not complete the transaction. | | 1 | Pending |Customer started the checkout process, but did not complete it. | | 2 | Shipped | Order has been shipped, but receipt has not been confirmed; seller has used the Ship Items action. | | 3 | Partially Shipped | Only some items in the order have been shipped, due to some products being pre-order only or other reasons. | | 4 | Refunded | Seller has used the Refund action. | | 5 | Cancelled | Seller has cancelled an order, due to a stock inconsistency or other reasons. | | 6 |Declined | Seller has marked the order as declined for lack of manual payment, or other reasons. | | 7 | Awaiting Payment | Customer has completed checkout process, but payment has yet to be confirmed. | | 8 | Awaiting Pickup | Order has been pulled, and is awaiting customer pickup from a seller-specified location. | | 9 | Awaiting Shipment | Order has been pulled and packaged, and is awaiting collection from a shipping provider. | | 10 | Completed | Client has paid for their digital product and their file(s) are available for download. | | 11 | Awaiting Fulfillment | Customer has completed the checkout process and payment has been confirmed. | | 12 | Manual Verification Required | Order on hold while some aspect needs to be manually confirmed. | | 13 | Disputed | Customer has initiated a dispute resolution process for the PayPal transaction that paid for the order. | | 14 | Partially Refunded | Seller has partially refunded the order. |

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

let apiInstance = new OrdersV2.OrderStatusApi();
let statusId = 56; // Number | The staus ID of the order. You can get the status id from the `/orders` endpoints.
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getAOrderStatus(statusId, accept, contentType, (error, data, response) => {
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
 **statusId** | **Number**| The staus ID of the order. You can get the status id from the &#x60;/orders&#x60; endpoints. | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**OrderStatusBase1**](OrderStatusBase1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="getOrderStatus"></a>
# **getOrderStatus**
> [OrderStatusBase1] getOrderStatus(accept, contentType)

Get All Order Statuses

Returns a Collection of All Order Statuses.  **Order Status Descriptions:** |Status ID | Name  | Description | |--|--|--| | 0 | Incomplete  | An incomplete order happens when a shopper reached the payment page, but did not complete the transaction. | | 1 | Pending |Customer started the checkout process, but did not complete it. | | 2 | Shipped | Order has been shipped, but receipt has not been confirmed; seller has used the Ship Items action. | | 3 | Partially Shipped | Only some items in the order have been shipped, due to some products being pre-order only or other reasons. | | 4 | Refunded | Seller has used the Refund action. | | 5 | Cancelled | Seller has cancelled an order, due to a stock inconsistency or other reasons. | | 6 |Declined | Seller has marked the order as declined for lack of manual payment, or other reasons. | | 7 | Awaiting Payment | Customer has completed checkout process, but payment has yet to be confirmed. | | 8 | Awaiting Pickup | Order has been pulled, and is awaiting customer pickup from a seller-specified location. | | 9 | Awaiting Shipment | Order has been pulled and packaged, and is awaiting collection from a shipping provider. | | 10 | Completed | Client has paid for their digital product and their file(s) are available for download. | | 11 | Awaiting Fulfillment | Customer has completed the checkout process and payment has been confirmed. | | 12 | Manual Verification Required | Order on hold while some aspect needs to be manually confirmed. | | 13 | Disputed | Customer has initiated a dispute resolution process for the PayPal transaction that paid for the order. | | 14 | Partially Refunded | Seller has partially refunded the order. |

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

let apiInstance = new OrdersV2.OrderStatusApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getOrderStatus(accept, contentType, (error, data, response) => {
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
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**[OrderStatusBase1]**](OrderStatusBase1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

