# Catalog.CatalogApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteBrands**](CatalogApi.md#deleteBrands) | **DELETE** /catalog/brands | Delete Brands
[**deleteProducts**](CatalogApi.md#deleteProducts) | **DELETE** /catalog/products | Delete Products
[**updateVariantsBatch**](CatalogApi.md#updateVariantsBatch) | **PUT** /catalog/variants | Update Variants (Batch)

<a name="deleteBrands"></a>
# **deleteBrands**
> deleteBrands(accept, contentType, opts)

Delete Brands

By default, it deletes all *Brand* objects. A filter should be added to avoid deleting all *Brand* objects in a store.

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

let apiInstance = new Catalog.CatalogApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'name': "name_example", // String | Filter items by name. 
  'pageTitle': "pageTitle_example" // String | Filter items by page_title. 
};
apiInstance.deleteBrands(accept, contentType, opts, (error, data, response) => {
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
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **name** | **String**| Filter items by name.  | [optional] 
 **pageTitle** | **String**| Filter items by page_title.  | [optional] 

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteProducts"></a>
# **deleteProducts**
> deleteProducts(accept, contentType, opts)

Delete Products

To delete *Product* objects, you must include a filter. This prevents inadvertently deleting all *Product* objects in a store.  **Example**: To delete products with the id&#x27;s of 1,2 and 3, use &#x60;DELETE /v3/catalog/products?id:in&#x3D;1,2,3&#x60;.

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

let apiInstance = new Catalog.CatalogApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'name': "name_example", // String | Filter items by name. 
  'sku': "sku_example", // String | Filter items by sku. 
  'price': 1.2, // Number | Filter items by price. 
  'weight': 1.2, // Number | Filter items by weight. 
  'condition': "condition_example", // String | Filter items by condition. 
  'brandId': 56, // Number | Filter items by brand_id. 
  'dateModified': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_modified. For example `v3/catalog/products?date_modified:min=2018-06-15`
  'dateLastImported': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_last_imported. For example `v3/catalog/products?date_last_imported:min=2018-06-15`
  'isVisible': true, // Boolean | Filter items by if visible on the storefront. 
  'isFeatured': 56, // Number | Filter items by is_featured. 
  'inventoryLevel': 56, // Number | Filter items by inventory_level. 
  'totalSold': 56, // Number | Filter items by total_sold. 
  'type': "type_example", // String | Filter items by type: `physical` or `digital`.
  'categories': 56, // Number | Filter items by categories.  If a product is in more than one category, using this query will not return the product. Instead use `categories:in=12`.
  'keyword': "keyword_example" // String | Filter items by keywords found in the `name`, `description`, or `sku` fields, or in the brand name. 
};
apiInstance.deleteProducts(accept, contentType, opts, (error, data, response) => {
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
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **name** | **String**| Filter items by name.  | [optional] 
 **sku** | **String**| Filter items by sku.  | [optional] 
 **price** | **Number**| Filter items by price.  | [optional] 
 **weight** | **Number**| Filter items by weight.  | [optional] 
 **condition** | **String**| Filter items by condition.  | [optional] 
 **brandId** | **Number**| Filter items by brand_id.  | [optional] 
 **dateModified** | **Date**| Filter items by date_modified. For example &#x60;v3/catalog/products?date_modified:min&#x3D;2018-06-15&#x60; | [optional] 
 **dateLastImported** | **Date**| Filter items by date_last_imported. For example &#x60;v3/catalog/products?date_last_imported:min&#x3D;2018-06-15&#x60; | [optional] 
 **isVisible** | **Boolean**| Filter items by if visible on the storefront.  | [optional] 
 **isFeatured** | **Number**| Filter items by is_featured.  | [optional] 
 **inventoryLevel** | **Number**| Filter items by inventory_level.  | [optional] 
 **totalSold** | **Number**| Filter items by total_sold.  | [optional] 
 **type** | **String**| Filter items by type: &#x60;physical&#x60; or &#x60;digital&#x60;. | [optional] 
 **categories** | **Number**| Filter items by categories.  If a product is in more than one category, using this query will not return the product. Instead use &#x60;categories:in&#x3D;12&#x60;. | [optional] 
 **keyword** | **String**| Filter items by keywords found in the &#x60;name&#x60;, &#x60;description&#x60;, or &#x60;sku&#x60; fields, or in the brand name.  | [optional] 

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateVariantsBatch"></a>
# **updateVariantsBatch**
> VariantCollectionResponse1 updateVariantsBatch(bodyacceptcontentType)

Update Variants (Batch)

Creates or updates a batch of &#x60;Variant&#x60; objects. At the time of writing, the current limit is &#x60;50&#x60; variants. This limit is subject to change.

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

let apiInstance = new Catalog.CatalogApi();
let body = null; // [Object] | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.updateVariantsBatch(bodyacceptcontentType, (error, data, response) => {
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
 **body** | [**[Object]**](Object.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**VariantCollectionResponse1**](VariantCollectionResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

