# Catalog.CategoryApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](CategoryApi.md#createCategory) | **POST** /catalog/categories | Create a Category
[**deleteCategories**](CategoryApi.md#deleteCategories) | **DELETE** /catalog/categories | Delete Categories
[**deleteCategoryById**](CategoryApi.md#deleteCategoryById) | **DELETE** /catalog/categories/{category_id} | Delete a Category
[**getCategories**](CategoryApi.md#getCategories) | **GET** /catalog/categories | Get All Categories
[**getCategoryById**](CategoryApi.md#getCategoryById) | **GET** /catalog/categories/{category_id} | Get a Category
[**getCategoryTree**](CategoryApi.md#getCategoryTree) | **GET** /catalog/categories/tree | Get Category Tree
[**updateCategory**](CategoryApi.md#updateCategory) | **PUT** /catalog/categories/{category_id} | Update a Category

<a name="createCategory"></a>
# **createCategory**
> CategoryResponse createCategory(bodyacceptcontentType)

Create a Category

Creates a *Category*.  **Required Fields**: - parent_id:   - To create a child category, set the parent_id to the parent category.  - To create a top level category, set the parent_id to 0. - name  **Read-Only Fields**: - id

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

let apiInstance = new Catalog.CategoryApi();
let body = new Catalog.Category(); // Category | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.createCategory(bodyacceptcontentType, (error, data, response) => {
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
 **body** | [**Category**](Category.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCategories"></a>
# **deleteCategories**
> deleteCategories(accept, contentType, opts)

Delete Categories

By default, it deletes all *Category* objects. A filter should be added to avoid deleting all *Category* objects in a store.  Sending a &#x60;DELETE&#x60; to this endpoint will result in a &#x60;422&#x60; error. Move products to a new category by sending a &#x60;PUT&#x60; to the &#x60;/catalog/products/{product_id}&#x60; endpoint before deleting a category.

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

let apiInstance = new Catalog.CategoryApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'name': "name_example", // String | Filter items by name. 
  'parentId': 56, // Number | Filter items by parent_id. If the category is a child or sub category it can be filtered with the parent_id. 
  'pageTitle': "pageTitle_example", // String | Filter items by page_title. 
  'keyword': "keyword_example", // String | Filter items by keywords. eg. new, towel, bath
  'isVisible': true // Boolean | Filter items by if visible on the storefront. 
};
apiInstance.deleteCategories(accept, contentType, opts, (error, data, response) => {
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
 **parentId** | **Number**| Filter items by parent_id. If the category is a child or sub category it can be filtered with the parent_id.  | [optional] 
 **pageTitle** | **String**| Filter items by page_title.  | [optional] 
 **keyword** | **String**| Filter items by keywords. eg. new, towel, bath | [optional] 
 **isVisible** | **Boolean**| Filter items by if visible on the storefront.  | [optional] 

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCategoryById"></a>
# **deleteCategoryById**
> deleteCategoryById(categoryId, accept, contentType)

Delete a Category

Deletes a *Category*.

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

let apiInstance = new Catalog.CategoryApi();
let categoryId = 56; // Number | The ID of the `Category` to which the resource belongs. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteCategoryById(categoryId, accept, contentType, (error, data, response) => {
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

<a name="getCategories"></a>
# **getCategories**
> CategoryBase getCategories(accept, contentType, opts)

Get All Categories

Returns a list of *Categories*. Optional filter parameters can be passed in.

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

let apiInstance = new Catalog.CategoryApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'id': "id_example", // String | Filter results by a comma-seperated list of category IDs. Syntax: `?id:in=1,2,3`
  'name': "name_example", // String | Filter items by name. 
  'parentId': 56, // Number | Filter items by parent_id. If the category is a child or sub category it can be filtered with the parent_id. 
  'pageTitle': "pageTitle_example", // String | Filter items by page_title. 
  'keyword': "keyword_example", // String | Filter items by keywords. eg. new, towel, bath
  'isVisible': true, // Boolean | Filter items by if visible on the storefront. 
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products.
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products.
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getCategories(accept, contentType, opts, (error, data, response) => {
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
 **id** | **String**| Filter results by a comma-seperated list of category IDs. Syntax: &#x60;?id:in&#x3D;1,2,3&#x60; | [optional] 
 **name** | **String**| Filter items by name.  | [optional] 
 **parentId** | **Number**| Filter items by parent_id. If the category is a child or sub category it can be filtered with the parent_id.  | [optional] 
 **pageTitle** | **String**| Filter items by page_title.  | [optional] 
 **keyword** | **String**| Filter items by keywords. eg. new, towel, bath | [optional] 
 **isVisible** | **Boolean**| Filter items by if visible on the storefront.  | [optional] 
 **page** | **Number**| Specifies the page number in a limited (paginated) list of products. | [optional] 
 **limit** | **Number**| Controls the number of items per page in a limited (paginated) list of products. | [optional] 
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 

### Return type

[**CategoryBase**](CategoryBase.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCategoryById"></a>
# **getCategoryById**
> CategoryResponse getCategoryById(categoryId, opts)

Get a Category

Returns a single *Category*. Optional parameters can be passed in.

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

let apiInstance = new Catalog.CategoryApi();
let categoryId = 56; // Number | The ID of the `Category` to which the resource belongs. 
let opts = { 
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getCategoryById(categoryId, opts, (error, data, response) => {
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
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCategoryTree"></a>
# **getCategoryTree**
> CategoriesTreeResp1 getCategoryTree(accept, contentType)

Get Category Tree

Returns the categories tree, a nested lineage of the categories with parent-&gt;child relationship. The Category objects returned are simplified versions of the category objects returned in the rest of this API.

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

let apiInstance = new Catalog.CategoryApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getCategoryTree(accept, contentType, (error, data, response) => {
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

### Return type

[**CategoriesTreeResp1**](CategoriesTreeResp1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCategory"></a>
# **updateCategory**
> CategoryResponse1 updateCategory(bodyacceptcontentTypecategoryId)

Update a Category

Updates a *Category*.  **Required Fields** * none  **Read-Only Fields** - id

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

let apiInstance = new Catalog.CategoryApi();
let body = new Catalog.Category1(); // Category1 | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let categoryId = 56; // Number | The ID of the `Category` to which the resource belongs. 

apiInstance.updateCategory(bodyacceptcontentTypecategoryId, (error, data, response) => {
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
 **body** | [**Category1**](Category1.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **categoryId** | **Number**| The ID of the &#x60;Category&#x60; to which the resource belongs.  | 

### Return type

[**CategoryResponse1**](CategoryResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

