# Catalog.CategoryMetafieldsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategoryMetafield**](CategoryMetafieldsApi.md#createCategoryMetafield) | **POST** /catalog/categories/{category_id}/metafields | Create a Category Metafield
[**deleteCategoryMetafieldById**](CategoryMetafieldsApi.md#deleteCategoryMetafieldById) | **DELETE** /catalog/categories/{category_id}/metafields/{metafield_id} | Delete a Category Metafield
[**getCategoryMetafieldByCategoryId**](CategoryMetafieldsApi.md#getCategoryMetafieldByCategoryId) | **GET** /catalog/categories/{category_id}/metafields/{metafield_id} | Get a Category Metafield
[**getCategoryMetafieldsByCategoryId**](CategoryMetafieldsApi.md#getCategoryMetafieldsByCategoryId) | **GET** /catalog/categories/{category_id}/metafields | Get All Category Metafields
[**updateCategoryMetafield**](CategoryMetafieldsApi.md#updateCategoryMetafield) | **PUT** /catalog/categories/{category_id}/metafields/{metafield_id} | Update a Category Metafield

<a name="createCategoryMetafield"></a>
# **createCategoryMetafield**
> MetafieldResponse createCategoryMetafield(bodyacceptcontentTypecategoryId)

Create a Category Metafield

Creates a *Cateory Metafield*.  **Required Fields:** - permission_set - namespace - key - value  **Read-Only Fields** - id  **Note:** The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.

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

let apiInstance = new Catalog.CategoryMetafieldsApi();
let body = new Catalog.MetafieldPost2(); // MetafieldPost2 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let categoryId = 56; // Number | The ID of the `Category` to which the resource belongs. 

apiInstance.createCategoryMetafield(bodyacceptcontentTypecategoryId, (error, data, response) => {
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
 **body** | [**MetafieldPost2**](MetafieldPost2.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **categoryId** | **Number**| The ID of the &#x60;Category&#x60; to which the resource belongs.  | 

### Return type

[**MetafieldResponse**](MetafieldResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCategoryMetafieldById"></a>
# **deleteCategoryMetafieldById**
> deleteCategoryMetafieldById(metafieldId, categoryId, accept, contentType)

Delete a Category Metafield

Deletes a *Category Metafield*.

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

let apiInstance = new Catalog.CategoryMetafieldsApi();
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let categoryId = 56; // Number | The ID of the `Category` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteCategoryMetafieldById(metafieldId, categoryId, accept, contentType, (error, data, response) => {
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
 **metafieldId** | **Number**| The ID of the &#x60;Metafield&#x60;.  | 
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

<a name="getCategoryMetafieldByCategoryId"></a>
# **getCategoryMetafieldByCategoryId**
> MetafieldResponse2 getCategoryMetafieldByCategoryId(metafieldId, categoryId, accept, contentType, opts)

Get a Category Metafield

Returns a single *Category Metafield*. Optional parameters can be passed in.

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

let apiInstance = new Catalog.CategoryMetafieldsApi();
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let categoryId = 56; // Number | The ID of the `Category` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getCategoryMetafieldByCategoryId(metafieldId, categoryId, accept, contentType, opts, (error, data, response) => {
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
 **metafieldId** | **Number**| The ID of the &#x60;Metafield&#x60;.  | 
 **categoryId** | **Number**| The ID of the &#x60;Category&#x60; to which the resource belongs.  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 

### Return type

[**MetafieldResponse2**](MetafieldResponse2.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCategoryMetafieldsByCategoryId"></a>
# **getCategoryMetafieldsByCategoryId**
> MetaFieldCollectionResponse1 getCategoryMetafieldsByCategoryId(categoryId, accept, contentType, opts)

Get All Category Metafields

Returns a list of *Metafields* on a *Category*. Optional filter parameters can be passed in.

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

let apiInstance = new Catalog.CategoryMetafieldsApi();
let categoryId = 56; // Number | The ID of the `Category` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products.
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products.
  'key': "key_example", // String | Filter based on a metafield's key. 
  'namespace': "namespace_example", // String | Filter based on a metafield's namespace.
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getCategoryMetafieldsByCategoryId(categoryId, accept, contentType, opts, (error, data, response) => {
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
 **categoryId** | **Number**| The ID of the &#x60;Category&#x60; to which the resource belongs.  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **page** | **Number**| Specifies the page number in a limited (paginated) list of products. | [optional] 
 **limit** | **Number**| Controls the number of items per page in a limited (paginated) list of products. | [optional] 
 **key** | **String**| Filter based on a metafield&#x27;s key.  | [optional] 
 **namespace** | **String**| Filter based on a metafield&#x27;s namespace. | [optional] 
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 

### Return type

[**MetaFieldCollectionResponse1**](MetaFieldCollectionResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCategoryMetafield"></a>
# **updateCategoryMetafield**
> MetafieldResponse1 updateCategoryMetafield(bodyacceptcontentTypemetafieldIdcategoryId)

Update a Category Metafield

Updates a *Category Metafield*.  **Required Fields** * none  **Read-Only Fields** * id * These fields can only be modified by the app (API credentials) that created the metafield:  * namespace  * key  * permission_set  **Usage Notes** * Attempting to modify &#x60;namespace&#x60;, &#x60;key&#x60;, and &#x60;permission_set&#x60; fields using a client ID different from the one used to create those metafields will result in a 403 error message. 

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

let apiInstance = new Catalog.CategoryMetafieldsApi();
let body = new Catalog.MetafieldPut3(); // MetafieldPut3 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let categoryId = 56; // Number | The ID of the `Category` to which the resource belongs. 

apiInstance.updateCategoryMetafield(bodyacceptcontentTypemetafieldIdcategoryId, (error, data, response) => {
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
 **body** | [**MetafieldPut3**](MetafieldPut3.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **metafieldId** | **Number**| The ID of the &#x60;Metafield&#x60;.  | 
 **categoryId** | **Number**| The ID of the &#x60;Category&#x60; to which the resource belongs.  | 

### Return type

[**MetafieldResponse1**](MetafieldResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

