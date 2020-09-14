# Catalog.ProductMetafieldsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductMetafield**](ProductMetafieldsApi.md#createProductMetafield) | **POST** /catalog/products/{product_id}/metafields | Create a Product Metafield
[**deleteProductMetafieldById**](ProductMetafieldsApi.md#deleteProductMetafieldById) | **DELETE** /catalog/products/{product_id}/metafields/{metafield_id} | Delete a Product Metafield
[**getProductMetafieldByProductId**](ProductMetafieldsApi.md#getProductMetafieldByProductId) | **GET** /catalog/products/{product_id}/metafields/{metafield_id} | Get a Product Metafield
[**getProductMetafieldsByProductId**](ProductMetafieldsApi.md#getProductMetafieldsByProductId) | **GET** /catalog/products/{product_id}/metafields | Get All Product Metafields
[**updateProductMetafield**](ProductMetafieldsApi.md#updateProductMetafield) | **PUT** /catalog/products/{product_id}/metafields/{metafield_id} | Update a Product Metafield

<a name="createProductMetafield"></a>
# **createProductMetafield**
> MetafieldResponse1 createProductMetafield(bodyacceptcontentTypeproductId)

Create a Product Metafield

Creates a *Product Metafield*.  **Required Fields:** * permission_set * namespace * key * value  **Read-Only Fields** * id  **Note:** The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.

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

let apiInstance = new Catalog.ProductMetafieldsApi();
let body = new Catalog.MetafieldPost1(); // MetafieldPost1 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 

apiInstance.createProductMetafield(bodyacceptcontentTypeproductId, (error, data, response) => {
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
 **body** | [**MetafieldPost1**](MetafieldPost1.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 

### Return type

[**MetafieldResponse1**](MetafieldResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProductMetafieldById"></a>
# **deleteProductMetafieldById**
> deleteProductMetafieldById(metafieldId, productId, accept, contentType)

Delete a Product Metafield

Deletes a *Product Metafield*.

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

let apiInstance = new Catalog.ProductMetafieldsApi();
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteProductMetafieldById(metafieldId, productId, accept, contentType, (error, data, response) => {
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
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductMetafieldByProductId"></a>
# **getProductMetafieldByProductId**
> MetafieldResponse1 getProductMetafieldByProductId(metafieldId, productId, accept, contentType, opts)

Get a Product Metafield

Returns a single *Product Metafield*. Optional parameters can be passed in.

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

let apiInstance = new Catalog.ProductMetafieldsApi();
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getProductMetafieldByProductId(metafieldId, productId, accept, contentType, opts, (error, data, response) => {
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
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 
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

<a name="getProductMetafieldsByProductId"></a>
# **getProductMetafieldsByProductId**
> MetaFieldCollectionResponse1 getProductMetafieldsByProductId(productId, accept, contentType, opts)

Get All Product Metafields

Returns a list of *Product Metafields*. Optional parameters can be passed in.

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

let apiInstance = new Catalog.ProductMetafieldsApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
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
apiInstance.getProductMetafieldsByProductId(productId, accept, contentType, opts, (error, data, response) => {
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
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 
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

<a name="updateProductMetafield"></a>
# **updateProductMetafield**
> MetafieldResponse updateProductMetafield(bodyacceptcontentTypemetafieldIdproductId)

Update a Product Metafield

Updates a *Product Metafield*.  **Required Fields** * none  **Read-Only Fields** * id * These fields can only be modified by the app (API credentials) that created the metafield:  * namespace  * key  * permission_set  **Usage Notes** * Attempting to modify &#x60;namespace&#x60;, &#x60;key&#x60;, and &#x60;permission_set&#x60; fields using a client ID different from the one used to create those metafields will result in a 403 error message. 

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

let apiInstance = new Catalog.ProductMetafieldsApi();
let body = new Catalog.MetafieldPut2(); // MetafieldPut2 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 

apiInstance.updateProductMetafield(bodyacceptcontentTypemetafieldIdproductId, (error, data, response) => {
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
 **body** | [**MetafieldPut2**](MetafieldPut2.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **metafieldId** | **Number**| The ID of the &#x60;Metafield&#x60;.  | 
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 

### Return type

[**MetafieldResponse**](MetafieldResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

