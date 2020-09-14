# Catalog.ProductsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProductsApi.md#createProduct) | **POST** /catalog/products | Create a Product
[**deleteProductById**](ProductsApi.md#deleteProductById) | **DELETE** /catalog/products/{product_id} | Delete a Product
[**deleteProducts**](ProductsApi.md#deleteProducts) | **DELETE** /catalog/products | Delete Products
[**getProductById**](ProductsApi.md#getProductById) | **GET** /catalog/products/{product_id} | Get a Product
[**getProducts**](ProductsApi.md#getProducts) | **GET** /catalog/products | Get All Products
[**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /catalog/products/{product_id} | Update a Product
[**updateProducts**](ProductsApi.md#updateProducts) | **PUT** /catalog/products | Update Products (Batch)

<a name="createProduct"></a>
# **createProduct**
> ProductResponse createProduct(bodycontentTypeaccept, opts)

Create a Product

Creates a *Product*. Only one product can be created at a time.  **Required Fields:** - &#x60;name&#x60; - &#x60;type&#x60; - &#x60;weight&#x60; - &#x60;category&#x60; - &#x60;price&#x60;  **Read-Only Fields** - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;date_modified&#x60; - &#x60;calculated_price&#x60; - &#x60;base_variant_id&#x60;  **Usage Notes** * &#x60;POST&#x60; requests to &#x60;/products&#x60; accepts a single &#x60;video&#x60; object; to send an array of video objects, see: &#x60;/products/{product_id}/videos&#x60;

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

let apiInstance = new Catalog.ProductsApi();
let body = new Catalog.Body(); // Body | 
let contentType = "application/json"; // String | 
let accept = "application/json"; // String | 
let opts = { 
  'includeFields': "includeFields_example" // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
};
apiInstance.createProduct(bodycontentTypeaccept, opts, (error, data, response) => {
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
 **body** | [**Body**](Body.md)|  | 
 **contentType** | **String**|  | [default to application/json]
 **accept** | **String**|  | [default to application/json]
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProductById"></a>
# **deleteProductById**
> deleteProductById(productId, accept, contentType)

Delete a Product

Deletes a *Product*.

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

let apiInstance = new Catalog.ProductsApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteProductById(productId, accept, contentType, (error, data, response) => {
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
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

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

let apiInstance = new Catalog.ProductsApi();
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

<a name="getProductById"></a>
# **getProductById**
> ProductResponse getProductById(productId, accept, contentType, opts)

Get a Product

Returns a single *Product*. Optional parameters can be passed in.

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

let apiInstance = new Catalog.ProductsApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'include': "include_example", // String | Sub-resources to include on a product, in a comma-separated list. If `options` or `modifiers` is used, results are limited to 10 per page.
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example", // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
  'priceListId': 56 // Number | This filter returns the product pricing with the *Price List* pricing instead. To use:  `?price_list_id=1`. If there are variants use: `?price_list_id=1&include=variants`
};
apiInstance.getProductById(productId, accept, contentType, opts, (error, data, response) => {
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
 **include** | **String**| Sub-resources to include on a product, in a comma-separated list. If &#x60;options&#x60; or &#x60;modifiers&#x60; is used, results are limited to 10 per page. | [optional] 
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 
 **priceListId** | **Number**| This filter returns the product pricing with the *Price List* pricing instead. To use:  &#x60;?price_list_id&#x3D;1&#x60;. If there are variants use: &#x60;?price_list_id&#x3D;1&amp;include&#x3D;variants&#x60; | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProducts"></a>
# **getProducts**
> InlineResponse200 getProducts(opts)

Get All Products

Returns a list of **Products**. Optional filter parameters can be passed in.

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

let apiInstance = new Catalog.ProductsApi();
let opts = { 
  'id': 56, // Number | Filter items by id. 
  'name': "name_example", // String | Filter items by name. 
  'sku': "sku_example", // String | Filter items by sku. 
  'upc': "upc_example", // String | Filter items by upc. 
  'price': 1.2, // Number | Filter items by price. 
  'weight': 1.2, // Number | Filter items by weight. 
  'condition': "condition_example", // String | Filter items by condition. 
  'brandId': 56, // Number | Filter items by brand_id. 
  'dateModified': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_modified. For example `v3/catalog/products?date_modified:min=2018-06-15`
  'dateLastImported': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_last_imported. For example `v3/catalog/products?date_last_imported:min=2018-06-15`
  'isVisible': true, // Boolean | Filter items by if visible on the storefront. 
  'isFeatured': 56, // Number | Filter items by is_featured. `0` for true, `1` for false. 
  'isFreeShipping': 56, // Number | Filter items by is_free_shipping. 
  'inventoryLevel': 56, // Number | Filter items by inventory_level. 
  'inventoryLow': 56, // Number | Filter items by inventory_low. Values: 1, 0. 
  'outOfStock': 56, // Number | Filter items by out_of_stock. To enable the filter, pass `out_of_stock`=`1`. 
  'totalSold': 56, // Number | Filter items by total_sold. 
  'type': "type_example", // String | Filter items by type: `physical` or `digital`.
  'categories': 56, // Number | Filter items by categories.  If a product is in more than one category, using this query will not return the product. Instead use `categories:in=12`.
  'keyword': "keyword_example", // String | Filter items by keywords found in the `name`, `description`, or `sku` fields, or in the brand name. 
  'keywordContext': "keywordContext_example", // String | Set context for a product search.
  'status': 56, // Number | Filter items by status. 
  'include': "include_example", // String | Sub-resources to include on a product, in a comma-separated list. If `options` or `modifiers` is used, results are limited to 10 per page.
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example", // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
  'availability': "availability_example", // String | Filter items by availability. Values are: available, disabled, preorder. 
  'priceListId': 56, // Number | This filter returns the product pricing with the *Price List* pricing instead. To use:  `?price_list_id=1`. If there are variants use: `?price_list_id=1&include=variants`
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products.
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products.
  'direction': "direction_example", // String | Sort direction. Acceptable values are: `asc`, `desc`. 
  'sort': "sort_example" // String | Field name to sort by. 
};
apiInstance.getProducts(opts, (error, data, response) => {
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
 **id** | **Number**| Filter items by id.  | [optional] 
 **name** | **String**| Filter items by name.  | [optional] 
 **sku** | **String**| Filter items by sku.  | [optional] 
 **upc** | **String**| Filter items by upc.  | [optional] 
 **price** | **Number**| Filter items by price.  | [optional] 
 **weight** | **Number**| Filter items by weight.  | [optional] 
 **condition** | **String**| Filter items by condition.  | [optional] 
 **brandId** | **Number**| Filter items by brand_id.  | [optional] 
 **dateModified** | **Date**| Filter items by date_modified. For example &#x60;v3/catalog/products?date_modified:min&#x3D;2018-06-15&#x60; | [optional] 
 **dateLastImported** | **Date**| Filter items by date_last_imported. For example &#x60;v3/catalog/products?date_last_imported:min&#x3D;2018-06-15&#x60; | [optional] 
 **isVisible** | **Boolean**| Filter items by if visible on the storefront.  | [optional] 
 **isFeatured** | **Number**| Filter items by is_featured. &#x60;0&#x60; for true, &#x60;1&#x60; for false.  | [optional] 
 **isFreeShipping** | **Number**| Filter items by is_free_shipping.  | [optional] 
 **inventoryLevel** | **Number**| Filter items by inventory_level.  | [optional] 
 **inventoryLow** | **Number**| Filter items by inventory_low. Values: 1, 0.  | [optional] 
 **outOfStock** | **Number**| Filter items by out_of_stock. To enable the filter, pass &#x60;out_of_stock&#x60;&#x3D;&#x60;1&#x60;.  | [optional] 
 **totalSold** | **Number**| Filter items by total_sold.  | [optional] 
 **type** | **String**| Filter items by type: &#x60;physical&#x60; or &#x60;digital&#x60;. | [optional] 
 **categories** | **Number**| Filter items by categories.  If a product is in more than one category, using this query will not return the product. Instead use &#x60;categories:in&#x3D;12&#x60;. | [optional] 
 **keyword** | **String**| Filter items by keywords found in the &#x60;name&#x60;, &#x60;description&#x60;, or &#x60;sku&#x60; fields, or in the brand name.  | [optional] 
 **keywordContext** | **String**| Set context for a product search. | [optional] 
 **status** | **Number**| Filter items by status.  | [optional] 
 **include** | **String**| Sub-resources to include on a product, in a comma-separated list. If &#x60;options&#x60; or &#x60;modifiers&#x60; is used, results are limited to 10 per page. | [optional] 
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 
 **availability** | **String**| Filter items by availability. Values are: available, disabled, preorder.  | [optional] 
 **priceListId** | **Number**| This filter returns the product pricing with the *Price List* pricing instead. To use:  &#x60;?price_list_id&#x3D;1&#x60;. If there are variants use: &#x60;?price_list_id&#x3D;1&amp;include&#x3D;variants&#x60; | [optional] 
 **page** | **Number**| Specifies the page number in a limited (paginated) list of products. | [optional] 
 **limit** | **Number**| Controls the number of items per page in a limited (paginated) list of products. | [optional] 
 **direction** | **String**| Sort direction. Acceptable values are: &#x60;asc&#x60;, &#x60;desc&#x60;.  | [optional] 
 **sort** | **String**| Field name to sort by.  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProduct"></a>
# **updateProduct**
> ProductResponse updateProduct(bodyacceptcontentTypeproductId, opts)

Update a Product

Updates a *Product*.  **Read-Only Fields** - id - date_created - date_modified - calculated_price - base_variant_id 

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

let apiInstance = new Catalog.ProductsApi();
let body = new Catalog.ProductPut1(); // ProductPut1 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let opts = { 
  'includeFields': "includeFields_example" // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
};
apiInstance.updateProduct(bodyacceptcontentTypeproductId, opts, (error, data, response) => {
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
 **body** | [**ProductPut1**](ProductPut1.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProducts"></a>
# **updateProducts**
> InlineResponse200 updateProducts(acceptcontentType, opts)

Update Products (Batch)

Updates products in batches. At the time of writing, batches are limited to 10 products.  **Required Fields** * &#x60;id&#x60; - product &#x60;id&#x60; is required for batch updates to products.  **Read-Only Fields** - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;date_modified&#x60; - &#x60;calculated_price&#x60; - &#x60;base_variant_id&#x60;

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

let apiInstance = new Catalog.ProductsApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'body': null // [[Object]] | 
  'includeFields': "includeFields_example" // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
};
apiInstance.updateProducts(acceptcontentType, opts, (error, data, response) => {
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
 **body** | [**[[Object]]**](Array.md)|  | [optional] 
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

