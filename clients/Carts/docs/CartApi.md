# Carts.CartApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createACart**](CartApi.md#createACart) | **POST** /carts | Create a Cart
[**deleteACart**](CartApi.md#deleteACart) | **DELETE** /carts/{cartId} | Delete a Cart
[**getACart**](CartApi.md#getACart) | **GET** /carts/{cartId} | Get a Cart
[**updateACart**](CartApi.md#updateACart) | **PUT** /carts/{cartId} | Update Customer ID

<a name="createACart"></a>
# **createACart**
> CartFull1 createACart(bodyacceptcontentType, opts)

Create a Cart

Creates a **Cart**.   **Required Fields** |Field|Details| |-|-| |&#x60;line_items&#x60;||  |&#x60;custom_items&#x60;|Only required if adding a custom item to the cart.| |&#x60;gift_certificates&#x60;|Only required if adding a gift certificate to the cart.|  **Usage Notes**  * A **cart** &#x60;id&#x60; (UUID) is returned in the response. * A **cart** &#x60;id&#x60; is the same as a **checkout** &#x60;id&#x60;. * A cart can be created by adding an existing **catalog item** or a **custom item**. * Carts are valid for **30 days** from the **last modification** (this includes creating the cart or editing the cart). * If a product has modifiers, omit the &#x60;variant_id&#x60; and instead use the &#x60;option_selections&#x60; array to describe both the **variant** and the **modifier** selections. * Redirect URLs can only be generated from carts created using the **Server-to-Server Carts API**.  * To get cart &#x60;redirect_urls&#x60; in the response, append the following query parameter to the request URL: &#x60;include&#x3D;redirect_urls&#x60;. * To restore a cart that was created by a shopper or via the Storefront Cart API, first recreate the cart using the Server to Server Cart API.

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

let apiInstance = new Carts.CartApi();
let body = new Carts.CartCreatePostData(); // CartCreatePostData | **Examples:**

1. Creating a cart by adding a simple product (a product without option selections).
2. Creating a cart with a variant. This works when a product can be specified purely by a variant, without any other required options.
3. Creating a cart with a variant, a checkbox, and a picklist modifier added.
4. Creating a cart using a custom item.
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'include': "include_example" // String | * `redirect_urls`: Create a direct link to a Cart. This can be used during the /POST request for Carts. * `line_items.physical_items.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return. * `line_items.digital_items.options`: The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
};
apiInstance.createACart(bodyacceptcontentType, opts, (error, data, response) => {
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
 **body** | [**CartCreatePostData**](CartCreatePostData.md)| **Examples:**

1. Creating a cart by adding a simple product (a product without option selections).
2. Creating a cart with a variant. This works when a product can be specified purely by a variant, without any other required options.
3. Creating a cart with a variant, a checkbox, and a picklist modifier added.
4. Creating a cart using a custom item. | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **include** | **String**| * &#x60;redirect_urls&#x60;: Create a direct link to a Cart. This can be used during the /POST request for Carts. * &#x60;line_items.physical_items.options&#x60;: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return. * &#x60;line_items.digital_items.options&#x60;: The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return. | [optional] 

### Return type

[**CartFull1**](CartFull1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteACart"></a>
# **deleteACart**
> deleteACart(cartId, accept, contentType)

Delete a Cart

Deletes a *Cart*. Once a *Cart* has been deleted it can not be recovered.

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

let apiInstance = new Carts.CartApi();
let cartId = "cartId_example"; // String | This cart's unique ID.
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteACart(cartId, accept, contentType, (error, data, response) => {
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
 **cartId** | **String**| This cart&#x27;s unique ID. | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getACart"></a>
# **getACart**
> CartFull1 getACart(cartId, accept, contentType, opts)

Get a Cart

Returns a stores *Cart*.

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

let apiInstance = new Carts.CartApi();
let cartId = "cartId_example"; // String | The identifier of a specific cart.
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'include': "include_example" // String | * `redirect_urls`: Create a direct link to a Cart. This can be used during the /POST request for Carts. * `line_items.physical_items.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return. * `line_items.digital_items.options`: The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
};
apiInstance.getACart(cartId, accept, contentType, opts, (error, data, response) => {
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
 **cartId** | **String**| The identifier of a specific cart. | 
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

<a name="updateACart"></a>
# **updateACart**
> CartFull1 updateACart(bodyacceptcontentTypecartId, opts)

Update Customer ID

Updates a *Carts* &#x60;customer_id&#x60;.  **Notes**  Changing the *Cart* &#x60;customer_id&#x60; will remove any promotions or shipping on the *Cart*. These are tied to the customer depending on cart conditions and any customer groups. 

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

let apiInstance = new Carts.CartApi();
let body = new Carts.CartUpdatePutRequestData(); // CartUpdatePutRequestData | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let cartId = "cartId_example"; // String | 
let opts = { 
  'include': "include_example" // String | * `redirect_urls`: Create a direct link to a Cart. This can be used during the /POST request for Carts. * `line_items.physical_items.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return. * `line_items.digital_items.options`: The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
};
apiInstance.updateACart(bodyacceptcontentTypecartId, opts, (error, data, response) => {
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
 **body** | [**CartUpdatePutRequestData**](CartUpdatePutRequestData.md)|  | 
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

