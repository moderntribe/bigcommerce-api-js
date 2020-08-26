# Wishlist.WishlistsItemsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wishlistsItemsByIdDelete**](WishlistsItemsApi.md#wishlistsItemsByIdDelete) | **DELETE** /wishlists/{wishlist_id}/items/{item_id} | Delete Wishlist Item
[**wishlistsItemsByIdPost**](WishlistsItemsApi.md#wishlistsItemsByIdPost) | **POST** /wishlists/{wishlist_id}/items | Add Wishlist Item

<a name="wishlistsItemsByIdDelete"></a>
# **wishlistsItemsByIdDelete**
> InlineResponse201 wishlistsItemsByIdDelete(wishlistId, itemId, opts)

Delete Wishlist Item

Deletes a Wishlist Item.

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

let apiInstance = new Wishlist.WishlistsItemsApi();
let wishlistId = 56; // Number | ID of the Wishlist
let itemId = 56; // Number | 
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.wishlistsItemsByIdDelete(wishlistId, itemId, opts, (error, data, response) => {
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
 **itemId** | **Number**|  | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="wishlistsItemsByIdPost"></a>
# **wishlistsItemsByIdPost**
> InlineResponse201 wishlistsItemsByIdPost(wishlistId, opts)

Add Wishlist Item

Adds a Wishlist Item. More than one item can be added at a time.

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

let apiInstance = new Wishlist.WishlistsItemsApi();
let wishlistId = 56; // Number | ID of the Wishlist
let opts = { 
  'body': new Wishlist.WishlistItemPost1() // WishlistItemPost1 | 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.wishlistsItemsByIdPost(wishlistId, opts, (error, data, response) => {
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
 **body** | [**WishlistItemPost1**](WishlistItemPost1.md)|  | [optional] 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

