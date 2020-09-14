# Catalog.ProductOptionValuesApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOptionValue**](ProductOptionValuesApi.md#createOptionValue) | **POST** /catalog/products/{product_id}/options/{option_id}/values | Create Product Option Values
[**deleteOptionValueById**](ProductOptionValuesApi.md#deleteOptionValueById) | **DELETE** /catalog/products/{product_id}/options/{option_id}/values/{value_id} | Delete a Product Option Value
[**getOptionValueById**](ProductOptionValuesApi.md#getOptionValueById) | **GET** /catalog/products/{product_id}/options/{option_id}/values/{value_id} | Get a Product Option Value
[**getOptionValues**](ProductOptionValuesApi.md#getOptionValues) | **GET** /catalog/products/{product_id}/options/{option_id}/values | Get all Product Option Values
[**updateOptionValue**](ProductOptionValuesApi.md#updateOptionValue) | **PUT** /catalog/products/{product_id}/options/{option_id}/values/{value_id} | Update a Product Option Value

<a name="createOptionValue"></a>
# **createOptionValue**
> OptionValueResponse createOptionValue(bodyacceptcontentTypeproductIdoptionId)

Create Product Option Values

Creates a *Variant Option Value*.  **Required Fields** * label * sort_order  **Read-Only Fields** * id

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

let apiInstance = new Catalog.ProductOptionValuesApi();
let body = new Catalog.OptionValuePost(); // OptionValuePost | 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let optionId = 56; // Number | The ID of the `Option`. 

apiInstance.createOptionValue(bodyacceptcontentTypeproductIdoptionId, (error, data, response) => {
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
 **body** | [**OptionValuePost**](OptionValuePost.md)|  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 
 **optionId** | **Number**| The ID of the &#x60;Option&#x60;.  | 

### Return type

[**OptionValueResponse**](OptionValueResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOptionValueById"></a>
# **deleteOptionValueById**
> deleteOptionValueById(productId, optionId, valueId, accept, contentType)

Delete a Product Option Value

Deletea a *Variant Option Value*.

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

let apiInstance = new Catalog.ProductOptionValuesApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let optionId = 56; // Number | The ID of the `Option`. 
let valueId = 56; // Number | The ID of the `Modifier/Option Value`. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.deleteOptionValueById(productId, optionId, valueId, accept, contentType, (error, data, response) => {
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
 **optionId** | **Number**| The ID of the &#x60;Option&#x60;.  | 
 **valueId** | **Number**| The ID of the &#x60;Modifier/Option Value&#x60;.  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOptionValueById"></a>
# **getOptionValueById**
> OptionValueResponse getOptionValueById(productId, optionId, valueId, opts)

Get a Product Option Value

Returns a single *Variant Option Value*. Optional parameters can be passed in.

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

let apiInstance = new Catalog.ProductOptionValuesApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let optionId = 56; // Number | The ID of the `Option`. 
let valueId = 56; // Number | The ID of the `Modifier/Option Value`. 
let opts = { 
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getOptionValueById(productId, optionId, valueId, opts, (error, data, response) => {
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
 **optionId** | **Number**| The ID of the &#x60;Option&#x60;.  | 
 **valueId** | **Number**| The ID of the &#x60;Modifier/Option Value&#x60;.  | 
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 

### Return type

[**OptionValueResponse**](OptionValueResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOptionValues"></a>
# **getOptionValues**
> OptionValueCollectionResponse getOptionValues(productId, optionId, accept, contentType, opts)

Get all Product Option Values

Returns a list of all *Variant Option Values*. Optional parameters can be passed in.

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

let apiInstance = new Catalog.ProductOptionValuesApi();
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let optionId = 56; // Number | The ID of the `Option`. 
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let opts = { 
  'includeFields': "includeFields_example", // String | Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
  'excludeFields': "excludeFields_example" // String | Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
};
apiInstance.getOptionValues(productId, optionId, accept, contentType, opts, (error, data, response) => {
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
 **optionId** | **Number**| The ID of the &#x60;Option&#x60;.  | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **includeFields** | **String**| Fields to include, in a comma-separated list. The ID and the specified fields will be returned. | [optional] 
 **excludeFields** | **String**| Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. | [optional] 

### Return type

[**OptionValueCollectionResponse**](OptionValueCollectionResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOptionValue"></a>
# **updateOptionValue**
> OptionValueResponse updateOptionValue(bodyacceptcontentTypeproductIdoptionIdvalueId)

Update a Product Option Value

Updates a *Variant Option Value*.  **Read-Only Fields** * id

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

let apiInstance = new Catalog.ProductOptionValuesApi();
let body = new Catalog.OptionValuePut(); // OptionValuePut | A BigCommerce `OptionValue` object.

let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 
let productId = 56; // Number | The ID of the `Product` to which the resource belongs. 
let optionId = 56; // Number | The ID of the `Option`. 
let valueId = 56; // Number | The ID of the `Modifier/Option Value`. 

apiInstance.updateOptionValue(bodyacceptcontentTypeproductIdoptionIdvalueId, (error, data, response) => {
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
 **body** | [**OptionValuePut**](OptionValuePut.md)| A BigCommerce &#x60;OptionValue&#x60; object.
 | 
 **accept** | **String**|  | [default to application/json]
 **contentType** | **String**|  | [default to application/json]
 **productId** | **Number**| The ID of the &#x60;Product&#x60; to which the resource belongs.  | 
 **optionId** | **Number**| The ID of the &#x60;Option&#x60;.  | 
 **valueId** | **Number**| The ID of the &#x60;Modifier/Option Value&#x60;.  | 

### Return type

[**OptionValueResponse**](OptionValueResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

