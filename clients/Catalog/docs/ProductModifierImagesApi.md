# Catalog.ProductModifierImagesApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModifierImage**](ProductModifierImagesApi.md#createModifierImage) | **POST** /catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image | Create Modifier Image
[**deleteModifierImage**](ProductModifierImagesApi.md#deleteModifierImage) | **DELETE** /catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image | Delete Modifier Image

<a name="createModifierImage"></a>
# **createModifierImage**
> ImageResponse createModifierImage(acceptcontentTypeproductIdmodifierIdvalueId, opts)

Create Modifier Image

Creates a *Modifier Image*.  The image will show on the storefront when the value is selected.   **Required Fields** - image_file: Form posts are the only accepted upload option.

### Example
```javascript
import Catalog from 'catalog';
let defaultClient = Catalog.ApiClient.instance;

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

let apiInstance = new Catalog.ProductModifierImagesApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let modifierId = 56; // Number | The ID of the `Modifier`. 
let valueId = 56; // Number | The ID of the `Modifier`. 
let opts = { 
  'imageFile': "imageFile_example" // File | 
};
apiInstance.createModifierImage(acceptcontentTypeproductIdmodifierIdvalueId, opts, (error, data, response) => {
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
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 
 **modifierId** | **Number**| The ID of the &#x60;Modifier&#x60;.  | 
 **valueId** | **Number**| The ID of the &#x60;Modifier&#x60;.  | 
 **imageFile** | **File**|  | [optional] 

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="deleteModifierImage"></a>
# **deleteModifierImage**
> deleteModifierImage(productId, modifierId, valueId, accept, contentType)

Delete Modifier Image

Deletes a *Modifier Image*.  Deletes the image that was set to show when the modifier value is selected.

### Example
```javascript
import Catalog from 'catalog';
let defaultClient = Catalog.ApiClient.instance;

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

let apiInstance = new Catalog.ProductModifierImagesApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let modifierId = 56; // Number | The ID of the `Modifier`. 
let valueId = 56; // Number | The ID of the `Modifier`. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteModifierImage(productId, modifierId, valueId, accept, contentType, (error, data, response) => {
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
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 
 **modifierId** | **Number**| The ID of the &#x60;Modifier&#x60;.  | 
 **valueId** | **Number**| The ID of the &#x60;Modifier&#x60;.  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

