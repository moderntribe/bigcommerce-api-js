# OrdersV2.OrderShipmentsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderShipments**](OrderShipmentsApi.md#createOrderShipments) | **POST** /orders/{order_id}/shipments | Create a New Order Shipment
[**deleteAllOrderShipments**](OrderShipmentsApi.md#deleteAllOrderShipments) | **DELETE** /orders/{order_id}/shipments | Delete All Order Shipments
[**deleteOrderShipment**](OrderShipmentsApi.md#deleteOrderShipment) | **DELETE** /orders/{order_id}/shipments/{shipment_id} | Delete an Order Shipment
[**getAllOrderShipments**](OrderShipmentsApi.md#getAllOrderShipments) | **GET** /orders/{order_id}/shipments | Get a List of Order Shipments
[**getCountShipments**](OrderShipmentsApi.md#getCountShipments) | **GET** /orders/{order_id}/shipments/count | Get a Count of Shipments Per Order
[**getOrderShipment**](OrderShipmentsApi.md#getOrderShipment) | **GET** /orders/{order_id}/shipments/{shipment_id} | Get a Shipment
[**updateOrderShipment**](OrderShipmentsApi.md#updateOrderShipment) | **PUT** /orders/{order_id}/shipments/{shipment_id} | Update a Shipment

<a name="createOrderShipments"></a>
# **createOrderShipments**
> OrderShipment2 createOrderShipments(bodyacceptcontentTypeorderId)

Create a New Order Shipment

Creates an *Order Shipment*. For more details, see [Shipping an Order](/api-docs/orders/orders-api-overview#shipping-an-order).  **Required Fields** *   order_address_id *   items  **Usage Notes**  Presuming that a valid carrier code is used, a tracking link is generated if either &#x60;shipping_provider&#x60; or &#x60;tracking_carrier&#x60; is supplied alongside a tracking number. Providing only the tracking number will result in an unclickable text in the customer facing email.  Acceptable values for &#x60;shipping_provider&#x60; include an empty string (&#x60;\&quot;\&quot;&#x60;), auspost, canadapost, endicia, usps, fedex, ups, upsready, upsonline, or shipperhq.  Acceptable values for &#x60;tracking_carrier&#x60; include an empty string (&#x60;\&quot;\&quot;&#x60;) or one of the valid tracking-carrier values viewable [here](https://docs.google.com/spreadsheets/d/1w9c_aECSCGyf-oOrvGeUniDl-ARGKemfZl0qSsav8D4/pubhtml?gid&#x3D;0&amp;single&#x3D;true) and downloadable as a .CSV file [here](https://docs.google.com/spreadsheets/d/1mTueEynfcEmwsU2y2Jd2MX-8GKwNZrmlRMBcIElg9aY/pub?gid&#x3D;0&amp;single&#x3D;true&amp;output&#x3D;csv). 

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

let apiInstance = new OrdersV2.OrderShipmentsApi();
let body = new OrdersV2.OrderShipmentPost1(); // OrderShipmentPost1 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let orderId = 56; // Number | ID of the order

apiInstance.createOrderShipments(bodyacceptcontentTypeorderId, (error, data, response) => {
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
 **body** | [**OrderShipmentPost1**](OrderShipmentPost1.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **orderId** | **Number**| ID of the order | 

### Return type

[**OrderShipment2**](OrderShipment2.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAllOrderShipments"></a>
# **deleteAllOrderShipments**
> deleteAllOrderShipments(orderId, accept, contentType)

Delete All Order Shipments

Deletes all shipments associated with an order.

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

let apiInstance = new OrdersV2.OrderShipmentsApi();
let orderId = 56; // Number | ID of the order
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteAllOrderShipments(orderId, accept, contentType, (error, data, response) => {
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
 **orderId** | **Number**| ID of the order | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteOrderShipment"></a>
# **deleteOrderShipment**
> deleteOrderShipment(orderId, shipmentId, accept, contentType)

Delete an Order Shipment

Deletes a shipment associated with an order.

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

let apiInstance = new OrdersV2.OrderShipmentsApi();
let orderId = 56; // Number | ID of the order
let shipmentId = 56; // Number | Shipment ID
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteOrderShipment(orderId, shipmentId, accept, contentType, (error, data, response) => {
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
 **orderId** | **Number**| ID of the order | 
 **shipmentId** | **Number**| Shipment ID | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllOrderShipments"></a>
# **getAllOrderShipments**
> [OrderShipment1] getAllOrderShipments(orderId, accept, contentType, opts)

Get a List of Order Shipments

Gets a list of all shipments on an order.

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

let apiInstance = new OrdersV2.OrderShipmentsApi();
let orderId = 56; // Number | ID of the order
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'page': 1.2, // Number | The page to return in the response.
  'limit': 1.2 // Number | Number of results to return.
};
apiInstance.getAllOrderShipments(orderId, accept, contentType, opts, (error, data, response) => {
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

[**[OrderShipment1]**](OrderShipment1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCountShipments"></a>
# **getCountShipments**
> OrderCount1 getCountShipments(orderId, accept, contentType)

Get a Count of Shipments Per Order

Gets a count of the number of shipments that have been made for a single order.

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

let apiInstance = new OrdersV2.OrderShipmentsApi();
let orderId = 56; // Number | ID of the order
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getCountShipments(orderId, accept, contentType, (error, data, response) => {
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

### Return type

[**OrderCount1**](OrderCount1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="getOrderShipment"></a>
# **getOrderShipment**
> OrderShipment2 getOrderShipment(orderId, shipmentId, accept, contentType)

Get a Shipment

Gets an order shipment. 

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

let apiInstance = new OrdersV2.OrderShipmentsApi();
let orderId = 56; // Number | ID of the order
let shipmentId = 56; // Number | Shipment ID
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getOrderShipment(orderId, shipmentId, accept, contentType, (error, data, response) => {
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
 **shipmentId** | **Number**| Shipment ID | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**OrderShipment2**](OrderShipment2.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOrderShipment"></a>
# **updateOrderShipment**
> OrderShipment2 updateOrderShipment(bodyacceptcontentTypeorderIdshipmentId)

Update a Shipment

Updates an existing shipment associated with an order.

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

let apiInstance = new OrdersV2.OrderShipmentsApi();
let body = new OrdersV2.OrderShipmentPost2(); // OrderShipmentPost2 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let orderId = 56; // Number | ID of the order
let shipmentId = 56; // Number | Shipment ID

apiInstance.updateOrderShipment(bodyacceptcontentTypeorderIdshipmentId, (error, data, response) => {
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
 **body** | [**OrderShipmentPost2**](OrderShipmentPost2.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **orderId** | **Number**| ID of the order | 
 **shipmentId** | **Number**| Shipment ID | 

### Return type

[**OrderShipment2**](OrderShipment2.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*, application/json

