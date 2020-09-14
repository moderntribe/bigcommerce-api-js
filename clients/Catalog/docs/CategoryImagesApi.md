# Catalog.CategoryImagesApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategoryImage**](CategoryImagesApi.md#createCategoryImage) | **POST** /catalog/categories/{category_id}/image | Create a Category Image
[**deleteCategoryImage**](CategoryImagesApi.md#deleteCategoryImage) | **DELETE** /catalog/categories/{category_id}/image | Delete a Category Image

<a name="createCategoryImage"></a>
# **createCategoryImage**
> InlineResponse2008 createCategoryImage(acceptcontentTypecategoryId, opts)

Create a Category Image

Create a *Category Image*.   **Required Fields** - image_file: Form posts are the only accepted upload option.  Only one image at a time can be created.  Limit image size to 1MB.   To update a *Category Image*, use the [PUT Categories](/api-reference/catalog/catalog-api/category/updatecategory) and an &#x60;image_url&#x60;. 

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

let apiInstance = new Catalog.CategoryImagesApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let categoryId = 56; // Number | The ID of the `Category` to which the resource belongs. 
let opts = { 
  'imageFile': "imageFile_example" // File | 
};
apiInstance.createCategoryImage(acceptcontentTypecategoryId, opts, (error, data, response) => {
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
 **categoryId** | **Number**| The ID of the &#x60;Category&#x60; to which the resource belongs.  | 
 **imageFile** | **File**|  | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="deleteCategoryImage"></a>
# **deleteCategoryImage**
> deleteCategoryImage(categoryId, accept, contentType)

Delete a Category Image

Deletes a *Cateogory Image*.

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

let apiInstance = new Catalog.CategoryImagesApi();
let categoryId = 56; // Number | The ID of the `Category` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteCategoryImage(categoryId, accept, contentType, (error, data, response) => {
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
 **categoryId** | **Number**| The ID of the &#x60;Category&#x60; to which the resource belongs.  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

