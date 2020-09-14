# OrdersV2.OrderShippingAddressesQuotesApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getShippingQuotes**](OrderShippingAddressesQuotesApi.md#getShippingQuotes) | **GET** /orders/{order_id}/shipping_addresses/{shipping_address_id}/shipping_quotes | Get Order Shipping Quotes

<a name="getShippingQuotes"></a>
# **getShippingQuotes**
> ShippingQuotesBase1 getShippingQuotes(orderId, shippingAddressId, accept, contentType)

Get Order Shipping Quotes

Gets all shipping quotes associated to an order.  This is a read only endpoint and the output can vary based on the shipping quote. A shipping quote can only be generated using the storefront at this time. Orders that are created in the control panel or via the API return a 204 for this endpoint since a shipping quote is not generated during that process.

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

let apiInstance = new OrdersV2.OrderShippingAddressesQuotesApi();
let orderId = 56; // Number | ID of the order
let shippingAddressId = 56; // Number | Shipping address ID
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getShippingQuotes(orderId, shippingAddressId, accept, contentType, (error, data, response) => {
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
 **shippingAddressId** | **Number**| Shipping address ID | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**ShippingQuotesBase1**](ShippingQuotesBase1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, Fixed Shipping, UPS Example

