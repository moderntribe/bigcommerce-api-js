# Wishlist.WishlistsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wishlistsByIdDelete**](WishlistsApi.md#wishlistsByIdDelete) | **DELETE** /wishlists/{wishlist_id} | Delete a Wishlist
[**wishlistsByIdGet**](WishlistsApi.md#wishlistsByIdGet) | **GET** /wishlists/{wishlist_id} | Get a Wishlist
[**wishlistsByIdPut**](WishlistsApi.md#wishlistsByIdPut) | **PUT** /wishlists/{wishlist_id} | Update a Wishlist
[**wishlistsGet**](WishlistsApi.md#wishlistsGet) | **GET** /wishlists | Get All Wishlists
[**wishlistsPost**](WishlistsApi.md#wishlistsPost) | **POST** /wishlists | Create a Wishlist

<a name="wishlistsByIdDelete"></a>
# **wishlistsByIdDelete**
> wishlistsByIdDelete(wishlistId, opts)

Delete a Wishlist

Deletes a Wishlist.

### Example
```javascript
import Wishlist from 'wishlist';
let defaultClient = Wishlist.ApiClient.instance;

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

let apiInstance = new Wishlist.WishlistsApi();
let wishlistId = 56; // Number | ID of the Wishlist
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.wishlistsByIdDelete(wishlistId, opts, (error, data, response) => {
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
 **wishlistId** | **Number**| ID of the Wishlist | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="wishlistsByIdGet"></a>
# **wishlistsByIdGet**
> InlineResponse201 wishlistsByIdGet(wishlistId, opts)

Get a Wishlist

Returns a single Wishlist.

### Example
```javascript
import Wishlist from 'wishlist';
let defaultClient = Wishlist.ApiClient.instance;

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

let apiInstance = new Wishlist.WishlistsApi();
let wishlistId = 56; // Number | ID of the Wishlist
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.wishlistsByIdGet(wishlistId, opts, (error, data, response) => {
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
 **wishlistId** | **Number**| ID of the Wishlist | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="wishlistsByIdPut"></a>
# **wishlistsByIdPut**
> InlineResponse201 wishlistsByIdPut(bodywishlistId, opts)

Update a Wishlist

Updates a Wishlist.  Use this endpoint to update an existing wishlist items, change the wishlist name, customer ID or if the wishlist is available publicly.  **Required Fields** * customer_id

### Example
```javascript
import Wishlist from 'wishlist';
let defaultClient = Wishlist.ApiClient.instance;

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

let apiInstance = new Wishlist.WishlistsApi();
let body = new Wishlist.WishlistPut1(); // WishlistPut1 | 
let wishlistId = 56; // Number | ID of the Wishlist
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.wishlistsByIdPut(bodywishlistId, opts, (error, data, response) => {
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
 **body** | [**WishlistPut1**](WishlistPut1.md)|  | 
 **wishlistId** | **Number**| ID of the Wishlist | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="wishlistsGet"></a>
# **wishlistsGet**
> InlineResponse200 wishlistsGet(opts)

Get All Wishlists

Returns a list of Wishlists. Optional filter parameters can be passed in.

### Example
```javascript
import Wishlist from 'wishlist';
let defaultClient = Wishlist.ApiClient.instance;

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

let apiInstance = new Wishlist.WishlistsApi();
let opts = { 
  'customerId': 56, // Number | All wishlists relating to the customer.
  'page': 56, // Number | The page number of results per page. 1 is the default and starts from record 0.
  'limit': 56, // Number | The numbers of items to return per page. Default is 50 and maximum is 250.
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.wishlistsGet(opts, (error, data, response) => {
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
 **customerId** | **Number**| All wishlists relating to the customer. | [optional] 
 **page** | **Number**| The page number of results per page. 1 is the default and starts from record 0. | [optional] 
 **limit** | **Number**| The numbers of items to return per page. Default is 50 and maximum is 250. | [optional] 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="wishlistsPost"></a>
# **wishlistsPost**
> InlineResponse201 wishlistsPost(body, opts)

Create a Wishlist

Creates a Wishlist and Wishlist Item. More than one item can be added in the POST.  **Required Fields** * name * customer_id

### Example
```javascript
import Wishlist from 'wishlist';
let defaultClient = Wishlist.ApiClient.instance;

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

let apiInstance = new Wishlist.WishlistsApi();
let body = new Wishlist.WishlistPost1(); // WishlistPost1 | 
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.wishlistsPost(body, opts, (error, data, response) => {
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
 **body** | [**WishlistPost1**](WishlistPost1.md)|  | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

