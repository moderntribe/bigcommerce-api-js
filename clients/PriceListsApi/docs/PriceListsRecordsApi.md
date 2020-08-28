# PriceLists.PriceListsRecordsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePriceListRecord**](PriceListsRecordsApi.md#deletePriceListRecord) | **DELETE** /pricelists/{price_list_id}/records/{variant_id}/{currency_code} | Delete a Price Record by Currency Code
[**deletePriceListRecordsByFilter**](PriceListsRecordsApi.md#deletePriceListRecordsByFilter) | **DELETE** /pricelists/{price_list_id}/records | Delete a Price List Record
[**getPriceListRecord**](PriceListsRecordsApi.md#getPriceListRecord) | **GET** /pricelists/{price_list_id}/records/{variant_id}/{currency_code} | Get a Price Record by Currency Code
[**getPriceListRecordCollection**](PriceListsRecordsApi.md#getPriceListRecordCollection) | **GET** /pricelists/{price_list_id}/records | Get All Price List Records
[**getPriceListRecordsByVariantId**](PriceListsRecordsApi.md#getPriceListRecordsByVariantId) | **GET** /pricelists/{price_list_id}/records/{variant_id} | Get Price Records by Variant
[**setPriceListRecord**](PriceListsRecordsApi.md#setPriceListRecord) | **PUT** /pricelists/{price_list_id}/records/{variant_id}/{currency_code} | Set Price List Record by Currency Code
[**setPriceListRecordCollection**](PriceListsRecordsApi.md#setPriceListRecordCollection) | **PUT** /pricelists/{price_list_id}/records | Upsert Price List Records

<a name="deletePriceListRecord"></a>
# **deletePriceListRecord**
> deletePriceListRecord(priceListId, variantId, currencyCode, opts)

Delete a Price Record by Currency Code

Deletes a *Price List Record* using the currency code. 

### Example
```javascript
import PriceLists from 'price_lists';
let defaultClient = PriceLists.ApiClient.instance;

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

let apiInstance = new PriceLists.PriceListsRecordsApi();
let priceListId = 56; // Number | The ID of the `Price List` requested. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 
let currencyCode = "currencyCode_example"; // String | The currency code associated with the price record being acted upon. 
let opts = { 
  'contentType': "application/json", // String | 
  'accept': "application/json" // String | 
};
apiInstance.deletePriceListRecord(priceListId, variantId, currencyCode, opts, (error, data, response) => {
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
 **priceListId** | **Number**| The ID of the &#x60;Price List&#x60; requested.  | 
 **variantId** | **Number**| ID of the variant on a product, or on an associated Price List Record.  | 
 **currencyCode** | **String**| The currency code associated with the price record being acted upon.  | 
 **contentType** | **String**|  | [optional] [default to application/json]
 **accept** | **String**|  | [optional] [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deletePriceListRecordsByFilter"></a>
# **deletePriceListRecordsByFilter**
> NoContent deletePriceListRecordsByFilter(priceListId, opts)

Delete a Price List Record

Deletes a *Price List Record*. Deleting the records does not delete the Price List. Optional parameters can be passed in.

### Example
```javascript
import PriceLists from 'price_lists';
let defaultClient = PriceLists.ApiClient.instance;

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

let apiInstance = new PriceLists.PriceListsRecordsApi();
let priceListId = 56; // Number | The ID of the `Price List` requested. 
let opts = { 
  'variantIdin': 56, // Number | The ID of the `Variant` whose prices were requested.
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.deletePriceListRecordsByFilter(priceListId, opts, (error, data, response) => {
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
 **priceListId** | **Number**| The ID of the &#x60;Price List&#x60; requested.  | 
 **variantIdin** | **Number**| The ID of the &#x60;Variant&#x60; whose prices were requested. | [optional] 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**NoContent**](NoContent.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPriceListRecord"></a>
# **getPriceListRecord**
> PriceRecordResponse getPriceListRecord(priceListId, variantId, currencyCode, opts)

Get a Price Record by Currency Code

Returns a *Price List Record* using the currency code. Optional parameters can be used.

### Example
```javascript
import PriceLists from 'price_lists';
let defaultClient = PriceLists.ApiClient.instance;

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

let apiInstance = new PriceLists.PriceListsRecordsApi();
let priceListId = 56; // Number | The ID of the `Price List` requested. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 
let currencyCode = "currencyCode_example"; // String | The currency code associated with the price record being acted upon. 
let opts = { 
  'include': "include_example", // String | Sub-resources to include on a price record, in a comma-separated list. Valid expansions currently include `bulk_pricing_tiers` and `sku`.  Other valies will be ignored. 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.getPriceListRecord(priceListId, variantId, currencyCode, opts, (error, data, response) => {
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
 **priceListId** | **Number**| The ID of the &#x60;Price List&#x60; requested.  | 
 **variantId** | **Number**| ID of the variant on a product, or on an associated Price List Record.  | 
 **currencyCode** | **String**| The currency code associated with the price record being acted upon.  | 
 **include** | **String**| Sub-resources to include on a price record, in a comma-separated list. Valid expansions currently include &#x60;bulk_pricing_tiers&#x60; and &#x60;sku&#x60;.  Other valies will be ignored.  | [optional] 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**PriceRecordResponse**](PriceRecordResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPriceListRecordCollection"></a>
# **getPriceListRecordCollection**
> PriceRecordCollectionResponse getPriceListRecordCollection(priceListId, opts)

Get All Price List Records

Returns a list of *Price List Records* associated with a *Price List*.

### Example
```javascript
import PriceLists from 'price_lists';
let defaultClient = PriceLists.ApiClient.instance;

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

let apiInstance = new PriceLists.PriceListsRecordsApi();
let priceListId = 56; // Number | The ID of the `Price List` requested. 
let opts = { 
  'variantIdin': 56, // Number | The ID of the `Variant` whose prices were requested.
  'productIdin': "productIdin_example", // String | A comma-separated list of ids of `Product`s whose prices were requested. 
  'currency': "currency_example", // String | Filter items by currency. 
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products.
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products.
  'include': "include_example", // String | Sub-resources to include on a price record, in a comma-separated list. Valid expansions currently include `bulk_pricing_tiers` and `sku`.  Other valies will be ignored. 
  'price': 1.2, // Number | Filter items by price. 
  'salePrice': 1.2, // Number | Filter items by sale_price. 
  'retailPrice': 1.2, // Number | Filter items by retail_price. 
  'mapPrice': 1.2, // Number | Filter items by map_price. 
  'calculatedPrice': 1.2, // Number | Filter items by calculated_price. 
  'dateCreated': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_created. 
  'dateModified': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15`
  'sku': "sku_example", // String | Filter items by sku. 
  'contentType': "application/json", // String | 
  'accept': "application/json" // String | 
};
apiInstance.getPriceListRecordCollection(priceListId, opts, (error, data, response) => {
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
 **priceListId** | **Number**| The ID of the &#x60;Price List&#x60; requested.  | 
 **variantIdin** | **Number**| The ID of the &#x60;Variant&#x60; whose prices were requested. | [optional] 
 **productIdin** | **String**| A comma-separated list of ids of &#x60;Product&#x60;s whose prices were requested.  | [optional] 
 **currency** | **String**| Filter items by currency.  | [optional] 
 **page** | **Number**| Specifies the page number in a limited (paginated) list of products. | [optional] 
 **limit** | **Number**| Controls the number of items per page in a limited (paginated) list of products. | [optional] 
 **include** | **String**| Sub-resources to include on a price record, in a comma-separated list. Valid expansions currently include &#x60;bulk_pricing_tiers&#x60; and &#x60;sku&#x60;.  Other valies will be ignored.  | [optional] 
 **price** | **Number**| Filter items by price.  | [optional] 
 **salePrice** | **Number**| Filter items by sale_price.  | [optional] 
 **retailPrice** | **Number**| Filter items by retail_price.  | [optional] 
 **mapPrice** | **Number**| Filter items by map_price.  | [optional] 
 **calculatedPrice** | **Number**| Filter items by calculated_price.  | [optional] 
 **dateCreated** | **Date**| Filter items by date_created.  | [optional] 
 **dateModified** | **Date**| Filter items by date_modified. For example &#x60;v3/catalog/products?date_last_imported:min&#x3D;2018-06-15&#x60; | [optional] 
 **sku** | **String**| Filter items by sku.  | [optional] 
 **contentType** | **String**|  | [optional] [default to application/json]
 **accept** | **String**|  | [optional] [default to application/json]

### Return type

[**PriceRecordCollectionResponse**](PriceRecordCollectionResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPriceListRecordsByVariantId"></a>
# **getPriceListRecordsByVariantId**
> PriceRecordCollectionResponse getPriceListRecordsByVariantId(priceListId, variantId, opts)

Get Price Records by Variant

Returns *Price List Records* using the variant ID. Will also contain currency records.

### Example
```javascript
import PriceLists from 'price_lists';
let defaultClient = PriceLists.ApiClient.instance;

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

let apiInstance = new PriceLists.PriceListsRecordsApi();
let priceListId = 56; // Number | The ID of the `Price List` requested. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.getPriceListRecordsByVariantId(priceListId, variantId, opts, (error, data, response) => {
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
 **priceListId** | **Number**| The ID of the &#x60;Price List&#x60; requested.  | 
 **variantId** | **Number**| ID of the variant on a product, or on an associated Price List Record.  | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**PriceRecordCollectionResponse**](PriceRecordCollectionResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setPriceListRecord"></a>
# **setPriceListRecord**
> PriceRecordResponse setPriceListRecord(bodypriceListIdvariantIdcurrencyCode, opts)

Set Price List Record by Currency Code

Creates or updates a*Price List Record* using the currency code.

### Example
```javascript
import PriceLists from 'price_lists';
let defaultClient = PriceLists.ApiClient.instance;

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

let apiInstance = new PriceLists.PriceListsRecordsApi();
let body = new PriceLists.PriceRecordPut(); // PriceRecordPut | 
let priceListId = 56; // Number | The ID of the `Price List` requested. 
let variantId = 56; // Number | ID of the variant on a product, or on an associated Price List Record. 
let currencyCode = "currencyCode_example"; // String | The currency code associated with the price record being acted upon. 
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.setPriceListRecord(bodypriceListIdvariantIdcurrencyCode, opts, (error, data, response) => {
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
 **body** | [**PriceRecordPut**](PriceRecordPut.md)|  | 
 **priceListId** | **Number**| The ID of the &#x60;Price List&#x60; requested.  | 
 **variantId** | **Number**| ID of the variant on a product, or on an associated Price List Record.  | 
 **currencyCode** | **String**| The currency code associated with the price record being acted upon.  | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**PriceRecordResponse**](PriceRecordResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setPriceListRecordCollection"></a>
# **setPriceListRecordCollection**
> Object setPriceListRecordCollection(bodypriceListId, opts)

Upsert Price List Records

Creates or updates *Price List Records*.   **Required Fields** * currency  **Notes**  * Bulk Updates is supported by this endpoint.  * Bulk requests are limited to 100 items per request. * Only one bulk upsert can done at a time. Running more than one in parallel on the **same store** will cause a 429 error and the request will fail. 

### Example
```javascript
import PriceLists from 'price_lists';
let defaultClient = PriceLists.ApiClient.instance;

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

let apiInstance = new PriceLists.PriceListsRecordsApi();
let body = null; // [Object] | 
let priceListId = 56; // Number | The ID of the `Price List` requested. 
let opts = { 
  'xStrictMode': 0 // Number | Header that determines whether the Batch API operates in strict mode or not.  Strict mode will reject the entire request if any item in the batch has an error. 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.setPriceListRecordCollection(bodypriceListId, opts, (error, data, response) => {
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
 **priceListId** | **Number**| The ID of the &#x60;Price List&#x60; requested.  | 
 **xStrictMode** | **Number**| Header that determines whether the Batch API operates in strict mode or not.  Strict mode will reject the entire request if any item in the batch has an error.  | [optional] [default to 0]
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

**Object**

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

