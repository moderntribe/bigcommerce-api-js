# Catalog.ProductVariantsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVariant**](ProductVariantsApi.md#createVariant) | **POST** /catalog/products/{product_id}/variants | Create a Product Variant
[**createVariantImage**](ProductVariantsApi.md#createVariantImage) | **POST** /catalog/products/{product_id}/variants/{variant_id}/image | Create a Variant Image
[**deleteVariantById**](ProductVariantsApi.md#deleteVariantById) | **DELETE** /catalog/products/{product_id}/variants/{variant_id} | Delete a Product Variant
[**getVariantById**](ProductVariantsApi.md#getVariantById) | **GET** /catalog/products/{product_id}/variants/{variant_id} | Get a Product Variant
[**getVariantsByProductId**](ProductVariantsApi.md#getVariantsByProductId) | **GET** /catalog/products/{product_id}/variants | Get All Product Variants
[**updateVariant**](ProductVariantsApi.md#updateVariant) | **PUT** /catalog/products/{product_id}/variants/{variant_id} | Update a Product Variant

<a name="createVariant"></a>
# **createVariant**
> VariantResponse createVariant(bodyproductId)

Create a Product Variant

Creates a *Product Variant*.   **Required Fields** * sku * option_values  **Read-Only Fields** * id  Variants need to be created one at a time using this endpoint. To use a variant array and create products and variants in the same call use the [Create Products](/api-reference/catalog/catalog-api/products/createproduct) during the initial product creation.

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

let apiInstance = new Catalog.ProductVariantsApi();
let body = new Catalog.VariantPost(); // VariantPost | 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 

apiInstance.createVariant(bodyproductId, (error, data, response) => {
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
 **body** | [**VariantPost**](VariantPost.md)|  | 
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 

### Return type

[**VariantResponse**](VariantResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createVariantImage"></a>
# **createVariantImage**
> ImageResponse createVariantImage(productIdvariantId, opts)

Create a Variant Image

Creates a *Variant Image*.  The image will show on the storefront when the value is selected.   **Required Fields** - image_file: Form posts. Files larger than 1 MB are not accepted - image_url: Any publicly available URL

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

let apiInstance = new Catalog.ProductVariantsApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 
let opts = { 
  'body': new Catalog.ResourceImage() // ResourceImage | 
  'imageUrl': "imageUrl_example" // String | 
};
apiInstance.createVariantImage(productIdvariantId, opts, (error, data, response) => {
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
 **body** | [**ResourceImage**](ResourceImage.md)|  | [optional] 
 **imageUrl** | **String**|  | [optional] 

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="deleteVariantById"></a>
# **deleteVariantById**
> deleteVariantById(productId, variantId, accept, contentType)

Delete a Product Variant

Deletes a product *Variant*.

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

let apiInstance = new Catalog.ProductVariantsApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteVariantById(productId, variantId, accept, contentType, (error, data, response) => {
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

<a name="getVariantById"></a>
# **getVariantById**
> VariantResponse getVariantById(productId, variantId, accept, contentType, opts)

Get a Product Variant

Returns a single product *Variant*. Optional parameters can be passed in.

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

let apiInstance = new Catalog.ProductVariantsApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getVariantById(productId, variantId, accept, contentType, opts, (error, data, response) => {
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
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 

### Return type

[**VariantResponse**](VariantResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVariantsByProductId"></a>
# **getVariantsByProductId**
> VariantCollectionResponse getVariantsByProductId(productId, accept, contentType, opts)

Get All Product Variants

Returns a list of product *Variants*. Optional parameters can be passed in.

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

let apiInstance = new Catalog.ProductVariantsApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products.
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products.
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getVariantsByProductId(productId, accept, contentType, opts, (error, data, response) => {
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
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 

### Return type

[**VariantCollectionResponse**](VariantCollectionResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVariant"></a>
# **updateVariant**
> VariantResponse updateVariant(bodyacceptcontentTypeproductIdvariantId)

Update a Product Variant

Updates a product *Variant*.

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

let apiInstance = new Catalog.ProductVariantsApi();
let body = new Catalog.ProductVariantPut1(); // ProductVariantPut1 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 

apiInstance.updateVariant(bodyacceptcontentTypeproductIdvariantId, (error, data, response) => {
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
 **body** | [**ProductVariantPut1**](ProductVariantPut1.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 
 **variantId** | **Number**| ID of the variant on a product, or on an associated Price List Record.  | 

### Return type

[**VariantResponse**](VariantResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

