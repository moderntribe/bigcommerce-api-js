# OrdersV2.OrdersApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAnOrder**](OrdersApi.md#createAnOrder) | **POST** /orders | Create an Order
[**deleteAllOrders**](OrdersApi.md#deleteAllOrders) | **DELETE** /orders | Delete All Orders
[**deleteAnOrder**](OrdersApi.md#deleteAnOrder) | **DELETE** /orders/{order_id} | Archive an Order
[**getAllOrders**](OrdersApi.md#getAllOrders) | **GET** /orders | Get All Orders
[**getAnOrder**](OrdersApi.md#getAnOrder) | **GET** /orders/{order_id} | Get an Order
[**getCountOrder**](OrdersApi.md#getCountOrder) | **GET** /orders/count | Get a Count of Orders
[**updateAnOrder**](OrdersApi.md#updateAnOrder) | **PUT** /orders/{order_id} | Update an Order

<a name="createAnOrder"></a>
# **createAnOrder**
> OrderFull1 createAnOrder(bodyacceptcontentType)

Create an Order

Creates an *Order*. To learn more about creating or updating orders, see [Orders Overview](/api-docs/orders/orders-api-overview).  An order can be created with an existing catalog product or a custom product.  **Required Fields**  *   products *   billing_address

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

let apiInstance = new OrdersV2.OrdersApi();
let body = new OrdersV2.OrderPost1(); // OrderPost1 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.createAnOrder(bodyacceptcontentType, (error, data, response) => {
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
 **body** | [**OrderPost1**](OrderPost1.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**OrderFull1**](OrderFull1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, Multiple Items

<a name="deleteAllOrders"></a>
# **deleteAllOrders**
> deleteAllOrders(accept, contentType)

Delete All Orders

Archives all orders.

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

let apiInstance = new OrdersV2.OrdersApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteAllOrders(accept, contentType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteAnOrder"></a>
# **deleteAnOrder**
> deleteAnOrder(acceptcontentTypeorderId, opts)

Archive an Order

Archives an order.  Any attempt to archive an order on a store with automatic tax enabled will fail, and will return &#x60;405 Method not allowed.&#x60;

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

let apiInstance = new OrdersV2.OrdersApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let orderId = 56; // Number | ID of the order
let opts = { 
  'body': null // Object | 
};
apiInstance.deleteAnOrder(acceptcontentTypeorderId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **orderId** | **Number**| ID of the order | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getAllOrders"></a>
# **getAllOrders**
> [OrderFull2] getAllOrders(accept, contentType, opts)

Get All Orders

Gets a list of orders using the filter query.  **Notes**  The default sort is by order id, from lowest to highest.

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

let apiInstance = new OrdersV2.OrdersApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'minId': 56, // Number | The minimum order ID.
  'maxId': 56, // Number | The maximum order ID.
  'minTotal': 3.4, // Number | The minimum order total in float format. eg. 12.50
  'maxTotal': 1.2, // Number | The maximum order total in float format. eg. 12.50
  'customerId': 56, // Number | Customer ID
  'email': "email_example", // String | The email of the customer.
  'statusId': 56, // Number | The staus ID of the order. You can get the status id from the `/orders` endpoints.
  'cartId': "cartId_example", // String | The cart ID of the order.
  'paymentMethod': "paymentMethod_example", // String | The payment method used on the order.
  'minDateCreated': "minDateCreated_example", // String | Minimum date the order was created in RFC-2822 or ISO-8601.  RFC-2822: `Thu, 20 Apr 2017 11:32:00 -0400`  ISO-8601: `2017-04-20T11:32:00.000-04:00`
  'maxDateCreated': "maxDateCreated_example", // String | Maximum date the order was created in RFC-2822 or ISO-8601.  RFC-2822: `Thu, 20 Apr 2017 11:32:00 -0400`  ISO-8601: `2017-04-20T11:32:00.000-04:00`
  'minDateModified': "minDateModified_example", // String | Minimum date the order was modified in RFC-2822 or ISO-8601.  RFC-2822: `Thu, 20 Apr 2017 11:32:00 -0400`  ISO-8601: `2017-04-20T11:32:00.000-04:00`
  'maxDateModified': "maxDateModified_example", // String | Maximum date the order was modified in RFC-2822 or ISO-8601.  RFC-2822: `Thu, 20 Apr 2017 11:32:00 -0400`  ISO-8601: `2017-04-20T11:32:00.000-04:00`
  'page': 1.2, // Number | The page to return in the response.
  'limit': 1.2, // Number | Number of results to return.
  'sort': "sort_example", // String | Field and direction to sort orders. To specify the direction, add `:asc` or `:desc` to the end of the query parameter. E.g. `sort=date_created:desc`.
  'isDeleted': true, // Boolean | If the order was deleted or archived.
  'channelId': 56 // Number | The Channel ID of the Order.
};
apiInstance.getAllOrders(accept, contentType, opts, (error, data, response) => {
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
 **minId** | **Number**| The minimum order ID. | [optional] 
 **maxId** | **Number**| The maximum order ID. | [optional] 
 **minTotal** | **Number**| The minimum order total in float format. eg. 12.50 | [optional] 
 **maxTotal** | **Number**| The maximum order total in float format. eg. 12.50 | [optional] 
 **customerId** | **Number**| Customer ID | [optional] 
 **email** | **String**| The email of the customer. | [optional] 
 **statusId** | **Number**| The staus ID of the order. You can get the status id from the &#x60;/orders&#x60; endpoints. | [optional] 
 **cartId** | **String**| The cart ID of the order. | [optional] 
 **paymentMethod** | **String**| The payment method used on the order. | [optional] 
 **minDateCreated** | **String**| Minimum date the order was created in RFC-2822 or ISO-8601.  RFC-2822: &#x60;Thu, 20 Apr 2017 11:32:00 -0400&#x60;  ISO-8601: &#x60;2017-04-20T11:32:00.000-04:00&#x60; | [optional] 
 **maxDateCreated** | **String**| Maximum date the order was created in RFC-2822 or ISO-8601.  RFC-2822: &#x60;Thu, 20 Apr 2017 11:32:00 -0400&#x60;  ISO-8601: &#x60;2017-04-20T11:32:00.000-04:00&#x60; | [optional] 
 **minDateModified** | **String**| Minimum date the order was modified in RFC-2822 or ISO-8601.  RFC-2822: &#x60;Thu, 20 Apr 2017 11:32:00 -0400&#x60;  ISO-8601: &#x60;2017-04-20T11:32:00.000-04:00&#x60; | [optional] 
 **maxDateModified** | **String**| Maximum date the order was modified in RFC-2822 or ISO-8601.  RFC-2822: &#x60;Thu, 20 Apr 2017 11:32:00 -0400&#x60;  ISO-8601: &#x60;2017-04-20T11:32:00.000-04:00&#x60; | [optional] 
 **page** | **Number**| The page to return in the response. | [optional] 
 **limit** | **Number**| Number of results to return. | [optional] 
 **sort** | **String**| Field and direction to sort orders. To specify the direction, add &#x60;:asc&#x60; or &#x60;:desc&#x60; to the end of the query parameter. E.g. &#x60;sort&#x3D;date_created:desc&#x60;. | [optional] 
 **isDeleted** | **Boolean**| If the order was deleted or archived. | [optional] 
 **channelId** | **Number**| The Channel ID of the Order. | [optional] 

### Return type

[**[OrderFull2]**](OrderFull2.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAnOrder"></a>
# **getAnOrder**
> OrderFull1 getAnOrder(acceptcontentTypeorderId, opts)

Get an Order

Gets an *Order*. To learn more about creating or updating orders, see [Orders Overview](/api-docs/orders/orders-api-overview).

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

let apiInstance = new OrdersV2.OrdersApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let orderId = 56; // Number | ID of the order
let opts = { 
  'body': null // Object | 
};
apiInstance.getAnOrder(acceptcontentTypeorderId, opts, (error, data, response) => {
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
 **orderId** | **Number**| ID of the order | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

[**OrderFull1**](OrderFull1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, Multiple Items

<a name="getCountOrder"></a>
# **getCountOrder**
> [OrdersCountFull1] getCountOrder(accept, contentType)

Get a Count of Orders

Gets an array of orders in the store organized by order status.

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

let apiInstance = new OrdersV2.OrdersApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getCountOrder(accept, contentType, (error, data, response) => {
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

[**[OrdersCountFull1]**](OrdersCountFull1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAnOrder"></a>
# **updateAnOrder**
> OrderFull1 updateAnOrder(bodyacceptcontentTypeorderId)

Update an Order

Updates an *Order*. To learn more about creating or updating orders, see [Orders Overview](/api-docs/orders/orders-api-overview).

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

let apiInstance = new OrdersV2.OrdersApi();
let body = new OrdersV2.OrderPut1(); // OrderPut1 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let orderId = 56; // Number | ID of the order

apiInstance.updateAnOrder(bodyacceptcontentTypeorderId, (error, data, response) => {
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
 **body** | [**OrderPut1**](OrderPut1.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **orderId** | **Number**| ID of the order | 

### Return type

[**OrderFull1**](OrderFull1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, Multiple Items

