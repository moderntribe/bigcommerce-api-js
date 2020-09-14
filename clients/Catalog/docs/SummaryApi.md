# Catalog.SummaryApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCatalogSummary**](SummaryApi.md#getCatalogSummary) | **GET** /catalog/summary | Get a Catalog Summary

<a name="getCatalogSummary"></a>
# **getCatalogSummary**
> CatalogSummaryResponse getCatalogSummary(accept, contentType)

Get a Catalog Summary

Returns a lightweight inventory summary from the BigCommerce Catalog.  The inventory summary includes: * \&quot;inventory_count\&quot; * \&quot;variant_count\&quot; * \&quot;inventory_value\&quot; * \&quot;highest_variant_price\&quot; * \&quot;average_variant_price\&quot; * \&quot;lowest_variant_price\&quot; * \&quot;oldest_variant_date\&quot; * \&quot;newest_variant_date\&quot; * \&quot;primary_category_id\&quot; * \&quot;primary_category_name\&quot;

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

let apiInstance = new Catalog.SummaryApi();
let accept = "application/json"; // String | 
let contentType = "application/json"; // String | 

apiInstance.getCatalogSummary(accept, contentType, (error, data, response) => {
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

[**CatalogSummaryResponse**](CatalogSummaryResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

