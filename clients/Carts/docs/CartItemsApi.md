# Carts.CartItemsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCartLineItem**](CartItemsApi.md#addCartLineItem) | **POST** /carts/{cartId}/items | Add Cart Line Items
[**deleteCartLineItem**](CartItemsApi.md#deleteCartLineItem) | **DELETE** /carts/{cartId}/items/{itemId} | Delete Cart Line Item
[**updateCartLineItem**](CartItemsApi.md#updateCartLineItem) | **PUT** /carts/{cartId}/items/{itemId} | Update Cart Line Item

<a name="addCartLineItem"></a>
# **addCartLineItem**
> CartFull1 addCartLineItem(bodyacceptcontentTypecartId, opts)

Add Cart Line Items

Adds line items to the *Cart*.  **Usage Notes**  To add a custom item use &#x60;custom_items&#x60;.   If a product has modifiers, omit the &#x60;variant_id&#x60; and instead use the &#x60;option_selections&#x60; array to describe both the **variant** and the **modifier** selections.

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

let apiInstance = new Carts.CartItemsApi();
let body = new Carts.CartLineItemUpdatePost1(); // CartLineItemUpdatePost1 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let cartId = "cartId_example"; // String | 
let opts = { 
  'include': "include_example" // String | * `redirect_urls`: Create a direct link to a Cart. This can be used during the /POST request for Carts. * `line_items.physical_items.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return. * `line_items.digital_items.options`: The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
};
apiInstance.addCartLineItem(bodyacceptcontentTypecartId, opts, (error, data, response) => {
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
 **body** | [**CartLineItemUpdatePost1**](CartLineItemUpdatePost1.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **cartId** | **String**|  | 
 **include** | **String**| * &#x60;redirect_urls&#x60;: Create a direct link to a Cart. This can be used during the /POST request for Carts. * &#x60;line_items.physical_items.options&#x60;: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return. * &#x60;line_items.digital_items.options&#x60;: The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return. | [optional] 

### Return type

[**CartFull1**](CartFull1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCartLineItem"></a>
# **deleteCartLineItem**
> CartFull1 deleteCartLineItem(cartId, itemId, accept, contentType, opts)

Delete Cart Line Item

Deletes a *Cart* line item.   **Notes**  Removing the last &#x60;line_item&#x60; in the *Cart* deletes the *Cart*.

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

let apiInstance = new Carts.CartItemsApi();
let cartId = "cartId_example"; // String | 
let itemId = itemId_example; // Number | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'include': "include_example" // String | * `redirect_urls`: Create a direct link to a Cart. This can be used during the /POST request for Carts. * `line_items.physical_items.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return. * `line_items.digital_items.options`: The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
};
apiInstance.deleteCartLineItem(cartId, itemId, accept, contentType, opts, (error, data, response) => {
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
 **itemId** | **Number**|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **include** | **String**| * &#x60;redirect_urls&#x60;: Create a direct link to a Cart. This can be used during the /POST request for Carts. * &#x60;line_items.physical_items.options&#x60;: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return. * &#x60;line_items.digital_items.options&#x60;: The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return. | [optional] 

### Return type

[**CartFull1**](CartFull1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCartLineItem"></a>
# **updateCartLineItem**
> CartFull1 updateCartLineItem(bodyacceptcontentTypecartIditemId, opts)

Update Cart Line Item

Updates a *Cart* line item. Updates an existing, single line item in the cart.   **Notes**  Currently, only updating &#x60;list_price&#x60; and &#x60;quantity&#x60; are supported.   Updating a product&#x27;s &#x60;list_price&#x60; will make that item ineligible for V3 product level promotions.   If the product has modifiers, omit the &#x60;variant_id&#x60; and instead use the &#x60;option_selections&#x60; array to describe both the **variant** and the **modifier** selections.  If a variant needs to be changed or updated, the product will need to be removed and re-added to the cart with the correct variants using the Add Cart Line Items endpoint.

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

let apiInstance = new Carts.CartItemsApi();
let body = new Carts.CartLineItemUpdatePost2(); // CartLineItemUpdatePost2 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let cartId = "cartId_example"; // String | 
let itemId = itemId_example; // Number | 
let opts = { 
  'include': "include_example" // String | * `redirect_urls`: Create a direct link to a Cart. This can be used during the /POST request for Carts. * `line_items.physical_items.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return. * `line_items.digital_items.options`: The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
};
apiInstance.updateCartLineItem(bodyacceptcontentTypecartIditemId, opts, (error, data, response) => {
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
 **body** | [**CartLineItemUpdatePost2**](CartLineItemUpdatePost2.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **cartId** | **String**|  | 
 **itemId** | **Number**|  | 
 **include** | **String**| * &#x60;redirect_urls&#x60;: Create a direct link to a Cart. This can be used during the /POST request for Carts. * &#x60;line_items.physical_items.options&#x60;: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return. * &#x60;line_items.digital_items.options&#x60;: The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return. | [optional] 

### Return type

[**CartFull1**](CartFull1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

