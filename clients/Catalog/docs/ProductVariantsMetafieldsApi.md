# Catalog.ProductVariantsMetafieldsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVariantMetafield**](ProductVariantsMetafieldsApi.md#createVariantMetafield) | **POST** /catalog/products/{product_id}/variants/{variant_id}/metafields | Create a Product Variant Metafield
[**deleteVariantMetafieldById**](ProductVariantsMetafieldsApi.md#deleteVariantMetafieldById) | **DELETE** /catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} | Delete a Variant Metafield
[**getVariantMetafieldByProductIdAndVariantId**](ProductVariantsMetafieldsApi.md#getVariantMetafieldByProductIdAndVariantId) | **GET** /catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} | Get Product Variant Metafields
[**getVariantMetafieldsByProductIdAndVariantId**](ProductVariantsMetafieldsApi.md#getVariantMetafieldsByProductIdAndVariantId) | **GET** /catalog/products/{product_id}/variants/{variant_id}/metafields | Get Product Variant Metafields
[**updateVariantMetafield**](ProductVariantsMetafieldsApi.md#updateVariantMetafield) | **PUT** /catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} | Update Product Variant Metafields

<a name="createVariantMetafield"></a>
# **createVariantMetafield**
> MetafieldResponse createVariantMetafield(bodyacceptcontentTypeproductIdvariantId)

Create a Product Variant Metafield

Creates a product variant *Metafield*.  **Required Fields:** * permission_set * namespace * key * value  **Read-Only Fields** * id  **Note:** The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.

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

let apiInstance = new Catalog.ProductVariantsMetafieldsApi();
let body = new Catalog.MetafieldPost(); // MetafieldPost | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 

apiInstance.createVariantMetafield(bodyacceptcontentTypeproductIdvariantId, (error, data, response) => {
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
 **body** | [**MetafieldPost**](MetafieldPost.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 
 **variantId** | **Number**| ID of the variant on a product, or on an associated Price List Record.  | 

### Return type

[**MetafieldResponse**](MetafieldResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteVariantMetafieldById"></a>
# **deleteVariantMetafieldById**
> deleteVariantMetafieldById(metafieldId, productId, variantId, accept, contentType)

Delete a Variant Metafield

Deletes a product variant *Metafield*.

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

let apiInstance = new Catalog.ProductVariantsMetafieldsApi();
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteVariantMetafieldById(metafieldId, productId, variantId, accept, contentType, (error, data, response) => {
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
 **variantId** | **Number**| ID of the variant on a product, or on an associated Price List Record.  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVariantMetafieldByProductIdAndVariantId"></a>
# **getVariantMetafieldByProductIdAndVariantId**
> MetafieldResponse1 getVariantMetafieldByProductIdAndVariantId(metafieldId, productId, variantId, accept, contentType, opts)

Get Product Variant Metafields

Returns a single product variant *Metafield*. Optional parameters can be passed in.

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

let apiInstance = new Catalog.ProductVariantsMetafieldsApi();
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getVariantMetafieldByProductIdAndVariantId(metafieldId, productId, variantId, accept, contentType, opts, (error, data, response) => {
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
 **variantId** | **Number**| ID of the variant on a product, or on an associated Price List Record.  | 
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

<a name="getVariantMetafieldsByProductIdAndVariantId"></a>
# **getVariantMetafieldsByProductIdAndVariantId**
> MetaFieldCollectionResponse getVariantMetafieldsByProductIdAndVariantId(productId, variantId, accept, contentType, opts)

Get Product Variant Metafields

Returns a list of product variant *Metafields*. Optional parameters can be passed in.

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

let apiInstance = new Catalog.ProductVariantsMetafieldsApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 
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
apiInstance.getVariantMetafieldsByProductIdAndVariantId(productId, variantId, accept, contentType, opts, (error, data, response) => {
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
 **variantId** | **Number**| ID of the variant on a product, or on an associated Price List Record.  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **page** | **Number**| Specifies the page number in a limited (paginated) list of products. | [optional] 
 **limit** | **Number**| Controls the number of items per page in a limited (paginated) list of products. | [optional] 
 **key** | **String**| Filter based on a metafield&#x27;s key.  | [optional] 
 **namespace** | **String**| Filter based on a metafield&#x27;s namespace. | [optional] 
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 

### Return type

[**MetaFieldCollectionResponse**](MetaFieldCollectionResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVariantMetafield"></a>
# **updateVariantMetafield**
> MetafieldResponse1 updateVariantMetafield(bodyacceptcontentTypemetafieldIdproductIdvariantId)

Update Product Variant Metafields

Updates a product variant *Metafield*.  **Required Fields:** * none  **Read-Only Fields** * id * These fields can only be modified by the app (API credentials) that created the metafield:  * namespace  * key  * permission_set  **Usage Notes** * Attempting to modify &#x60;namespace&#x60;, &#x60;key&#x60;, and &#x60;permission_set&#x60; fields using a client ID different from the one used to create those metafields will result in a 403 error message. 

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

let apiInstance = new Catalog.ProductVariantsMetafieldsApi();
let body = new Catalog.MetafieldPut1(); // MetafieldPut1 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let metafieldId = 56; // Number | The ID of the `Metafield`. 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 

apiInstance.updateVariantMetafield(bodyacceptcontentTypemetafieldIdproductIdvariantId, (error, data, response) => {
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
 **body** | [**MetafieldPut1**](MetafieldPut1.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **metafieldId** | **Number**| The ID of the &#x60;Metafield&#x60;.  | 
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 
 **variantId** | **Number**| ID of the variant on a product, or on an associated Price List Record.  | 

### Return type

[**MetafieldResponse1**](MetafieldResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

