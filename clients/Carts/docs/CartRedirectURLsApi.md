# Carts.CartRedirectURLsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCartRedirectURL**](CartRedirectURLsApi.md#createCartRedirectURL) | **POST** /carts/{cartId}/redirect_urls | Create Cart Redirect URL

<a name="createCartRedirectURL"></a>
# **createCartRedirectURL**
> InlineResponse201 createCartRedirectURL(cartId, accept, contentType)

Create Cart Redirect URL

Creates a **Cart** redirect URL for redirecting a shopper to an already created cart using the &#x60;cartId&#x60;.  **Usage Notes**  * Redirect URLs can also be created via **Create a Cart** requests by appending &#x60;include&#x3D;redirect_urls&#x60;. * A **Carts** redirect URLs may only be used once.  * Once a redirect URL has been visited, it will be invalidated and cannot be used again.  * If your application requires URLs to be visited more than once, consider generating a fresh one each time you need to restore a cart, and redirecting to the URL from your own application. * Redirect URLs can be generated only from carts created using the Server to Server Cart API.  * To restore a cart that was created on the storefront, either by a shopper or the Storefront Cart API, first recreate the cart using the Server to Server Cart API.

### Example
```javascript
import Carts from 'carts';
let defaultClient = Carts.ApiClient.instance;

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

let apiInstance = new Carts.CartRedirectURLsApi();
let cartId = "cartId_example"; // String | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.createCartRedirectURL(cartId, accept, contentType, (error, data, response) => {
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
 **cartId** | **String**|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

