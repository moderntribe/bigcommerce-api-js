# Catalog.BrandImagesApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBrandImage**](BrandImagesApi.md#createBrandImage) | **POST** /catalog/brands/{brand_id}/image | Create a Brand Image
[**deleteBrandImage**](BrandImagesApi.md#deleteBrandImage) | **DELETE** /catalog/brands/{brand_id}/image | Delete a Brand Image

<a name="createBrandImage"></a>
# **createBrandImage**
> InlineResponse2008 createBrandImage(acceptcontentTypebrandId, opts)

Create a Brand Image

Creates a *Brand Image*.   **Required Fields** - image_file: Form posts are the only accepted upload option.  **Read-Only Fields** - id  Only one image at a time can be created. To update a *Brand Image*, use the [PUT Brands](/api-reference/catalog/catalog-api/brands/updatebrand) and an &#x60;image_url&#x60;. 

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

let apiInstance = new Catalog.BrandImagesApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let brandId = 56; // Number | The ID of the `Brand` to which the resource belongs. 
let opts = { 
  'imageFile': "imageFile_example" // File | 
};
apiInstance.createBrandImage(acceptcontentTypebrandId, opts, (error, data, response) => {
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
 **brandId** | **Number**| The ID of the &#x60;Brand&#x60; to which the resource belongs.  | 
 **imageFile** | **File**|  | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="deleteBrandImage"></a>
# **deleteBrandImage**
> deleteBrandImage(brandId, contentType, accept)

Delete a Brand Image

Deletes a *Brand Image*.

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

let apiInstance = new Catalog.BrandImagesApi();
let brandId = 56; // Number | The ID of the `Brand` to which the resource belongs. 
let contentType = "application/json"; // String | 
let accept = "application/json"; // String | 

apiInstance.deleteBrandImage(brandId, contentType, accept, (error, data, response) => {
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
 **brandId** | **Number**| The ID of the &#x60;Brand&#x60; to which the resource belongs.  | 
 **contentType** | **String**|  | [default to application/json]
 **accept** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

