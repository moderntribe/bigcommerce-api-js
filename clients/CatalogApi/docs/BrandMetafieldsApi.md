# Catalog.BrandMetafieldsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBrandMetafield**](BrandMetafieldsApi.md#createBrandMetafield) | **POST** /catalog/brands/{brand_id}/metafields | Create a Brand Metafield
[**deleteBrandMetafieldById**](BrandMetafieldsApi.md#deleteBrandMetafieldById) | **DELETE** /catalog/brands/{brand_id}/metafields/{metafield_id} | Delete a Brand Metafield
[**getBrandMetafieldByBrandId**](BrandMetafieldsApi.md#getBrandMetafieldByBrandId) | **GET** /catalog/brands/{brand_id}/metafields/{metafield_id} | Get a Brand Metafields
[**getBrandMetafieldsByBrandId**](BrandMetafieldsApi.md#getBrandMetafieldsByBrandId) | **GET** /catalog/brands/{brand_id}/metafields | Get All Brand Metafields
[**updateBrandMetafield**](BrandMetafieldsApi.md#updateBrandMetafield) | **PUT** /catalog/brands/{brand_id}/metafields/{metafield_id} | Update a Brand Metafield

<a name="createBrandMetafield"></a>
# **createBrandMetafield**
> MetafieldResponse3 createBrandMetafield(bodycontentTypeacceptbrandId)

Create a Brand Metafield

Creates a *Brand Metafield*.  **Required Fields** - permission_set - namespace - key - value  **Read-Only Fields** - id  **Note:** The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.

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

let apiInstance = new Catalog.BrandMetafieldsApi();
let body = new Catalog.MetafieldPost3(); // MetafieldPost3 | 
let contentType = "application/json"; // String | 
let accept = "application/json"; // String | 
let brandId = 56; // Number | The ID of the `Brand` to which the resource belongs. 

apiInstance.createBrandMetafield(bodycontentTypeacceptbrandId, (error, data, response) => {
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
 **body** | [**MetafieldPost3**](MetafieldPost3.md)|  | 
 **contentType** | **String**|  | [default to application/json]
 **accept** | **String**|  | [default to application/json]
 **brandId** | **Number**| The ID of the &#x60;Brand&#x60; to which the resource belongs.  | 

### Return type

[**MetafieldResponse3**](MetafieldResponse3.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBrandMetafieldById"></a>
# **deleteBrandMetafieldById**
> deleteBrandMetafieldById(metafieldId, brandId, accept, contentType)

Delete a Brand Metafield

Deletes a *Brand Metafield*.

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

let apiInstance = new Catalog.BrandMetafieldsApi();
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let brandId = 56; // Number | The ID of the `Brand` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteBrandMetafieldById(metafieldId, brandId, accept, contentType, (error, data, response) => {
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
 **brandId** | **Number**| The ID of the &#x60;Brand&#x60; to which the resource belongs.  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBrandMetafieldByBrandId"></a>
# **getBrandMetafieldByBrandId**
> MetafieldResponse1 getBrandMetafieldByBrandId(metafieldId, brandId, accept, contentType, opts)

Get a Brand Metafields

Returns a *Brand Metafield*. Optional filter parameters can be passed in.

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

let apiInstance = new Catalog.BrandMetafieldsApi();
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let brandId = 56; // Number | The ID of the `Brand` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getBrandMetafieldByBrandId(metafieldId, brandId, accept, contentType, opts, (error, data, response) => {
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
 **brandId** | **Number**| The ID of the &#x60;Brand&#x60; to which the resource belongs.  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 

### Return type

[**MetafieldResponse1**](MetafieldResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBrandMetafieldsByBrandId"></a>
# **getBrandMetafieldsByBrandId**
> MetaFieldCollectionResponse1 getBrandMetafieldsByBrandId(brandId, contentType, accept, opts)

Get All Brand Metafields

Returns a list of *Brand Metafields*. Optional filter parameters can be passed in. 

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

let apiInstance = new Catalog.BrandMetafieldsApi();
let brandId = 56; // Number | The ID of the `Brand` to which the resource belongs. 
let contentType = "application/json"; // String | 
let accept = "application/json"; // String | 
let opts = { 
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products.
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products.
  'key': "key_example", // String | Filter based on a metafield's key. 
  'namespace': "namespace_example", // String | Filter based on a metafield's namespace.
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getBrandMetafieldsByBrandId(brandId, contentType, accept, opts, (error, data, response) => {
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
 **brandId** | **Number**| The ID of the &#x60;Brand&#x60; to which the resource belongs.  | 
 **contentType** | **String**|  | [default to application/json]
 **accept** | **String**|  | [default to application/json]
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

<a name="updateBrandMetafield"></a>
# **updateBrandMetafield**
> MetafieldResponse1 updateBrandMetafield(bodyacceptcontentTypemetafieldIdbrandId)

Update a Brand Metafield

Updates a *Brand Metafield*.  **Required Fields**   * none  **Read-Only Fields** * id * These fields can only be modified by the app (API credentials) that created the metafield:  * namespace  * key  * permission_set  **Usage Notes** * Attempting to modify &#x60;namespace&#x60;, &#x60;key&#x60;, and &#x60;permission_set&#x60; fields using a client ID different from the one used to create those metafields will result in a 403 error message. * The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.

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

let apiInstance = new Catalog.BrandMetafieldsApi();
let body = new Catalog.MetafieldPut4(); // MetafieldPut4 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let brandId = 56; // Number | The ID of the `Brand` to which the resource belongs. 

apiInstance.updateBrandMetafield(bodyacceptcontentTypemetafieldIdbrandId, (error, data, response) => {
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
 **body** | [**MetafieldPut4**](MetafieldPut4.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **metafieldId** | **Number**| The ID of the &#x60;Metafield&#x60;.  | 
 **brandId** | **Number**| The ID of the &#x60;Brand&#x60; to which the resource belongs.  | 

### Return type

[**MetafieldResponse1**](MetafieldResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

