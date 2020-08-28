# PriceLists.PriceListsApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPriceList**](PriceListsApi.md#createPriceList) | **POST** /pricelists | Create a Price List
[**deletePriceList**](PriceListsApi.md#deletePriceList) | **DELETE** /pricelists/{price_list_id} | Delete a Price List
[**deletePriceListsByFilter**](PriceListsApi.md#deletePriceListsByFilter) | **DELETE** /pricelists | Delete All Price Lists
[**getPriceList**](PriceListsApi.md#getPriceList) | **GET** /pricelists/{price_list_id} | Get a Price List
[**getPriceListCollection**](PriceListsApi.md#getPriceListCollection) | **GET** /pricelists | Get All Price Lists
[**updatePriceList**](PriceListsApi.md#updatePriceList) | **PUT** /pricelists/{price_list_id} | Update a Price List

<a name="createPriceList"></a>
# **createPriceList**
> PriceListResponse createPriceList(body, opts)

Create a Price List

Creates a *Price List*.  **Required Fields** * name

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

let apiInstance = new PriceLists.PriceListsApi();
let body = new PriceLists.PriceListPost(); // PriceListPost | 
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.createPriceList(body, opts, (error, data, response) => {
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
 **body** | [**PriceListPost**](PriceListPost.md)|  | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**PriceListResponse**](PriceListResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePriceList"></a>
# **deletePriceList**
> deletePriceList(priceListId)

Delete a Price List

Deletes a *Price List*. All associated price records are also removed.

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

let apiInstance = new PriceLists.PriceListsApi();
let priceListId = 56; // Number | The ID of the `Price List` requested. 

apiInstance.deletePriceList(priceListId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deletePriceListsByFilter"></a>
# **deletePriceListsByFilter**
> deletePriceListsByFilter(opts)

Delete All Price Lists

Deletes a *Price List*. All associated price records are also removed. Optional parameters can be passed in.

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

let apiInstance = new PriceLists.PriceListsApi();
let opts = { 
  'id': 56, // Number | Filter items by id. 
  'name': "name_example", // String | Filter items by name. 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.deletePriceListsByFilter(opts, (error, data, response) => {
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
 **id** | **Number**| Filter items by id.  | [optional] 
 **name** | **String**| Filter items by name.  | [optional] 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPriceList"></a>
# **getPriceList**
> PriceListResponse1 getPriceList(priceListId, opts)

Get a Price List

 Returns a single *Price List*.

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

let apiInstance = new PriceLists.PriceListsApi();
let priceListId = 56; // Number | The ID of the `Price List` requested. 
let opts = { 
  'id': 56, // Number | Filter items by id.
  'name': "name_example", // String | Filter items by name.
  'dateCreated': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_created.
  'dateModified': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15`
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products.
  'limit': 56 // Number | Controls the number of items per page in a limited (paginated) list of products.
};
apiInstance.getPriceList(priceListId, opts, (error, data, response) => {
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
 **id** | **Number**| Filter items by id. | [optional] 
 **name** | **String**| Filter items by name. | [optional] 
 **dateCreated** | **Date**| Filter items by date_created. | [optional] 
 **dateModified** | **Date**| Filter items by date_modified. For example &#x60;v3/catalog/products?date_last_imported:min&#x3D;2018-06-15&#x60; | [optional] 
 **page** | **Number**| Specifies the page number in a limited (paginated) list of products. | [optional] 
 **limit** | **Number**| Controls the number of items per page in a limited (paginated) list of products. | [optional] 

### Return type

[**PriceListResponse1**](PriceListResponse1.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPriceListCollection"></a>
# **getPriceListCollection**
> PriceListCollectionResponse getPriceListCollection(opts)

Get All Price Lists

Returns a list of *Price Lists*. Optional parameters can be passed in.

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

let apiInstance = new PriceLists.PriceListsApi();
let opts = { 
  'id': 56, // Number | Filter items by id. 
  'name': "name_example", // String | Filter items by name. 
  'dateCreated': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_created. 
  'dateModified': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15`
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products.
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products.
  'contentType': "application/json", // String | 
  'accept': "application/json" // String | 
};
apiInstance.getPriceListCollection(opts, (error, data, response) => {
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
 **dateCreated** | **Date**| Filter items by date_created.  | [optional] 
 **dateModified** | **Date**| Filter items by date_modified. For example &#x60;v3/catalog/products?date_last_imported:min&#x3D;2018-06-15&#x60; | [optional] 
 **page** | **Number**| Specifies the page number in a limited (paginated) list of products. | [optional] 
 **limit** | **Number**| Controls the number of items per page in a limited (paginated) list of products. | [optional] 
 **contentType** | **String**|  | [optional] [default to application/json]
 **accept** | **String**|  | [optional] [default to application/json]

### Return type

[**PriceListCollectionResponse**](PriceListCollectionResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePriceList"></a>
# **updatePriceList**
> PriceListResponse updatePriceList(bodypriceListId)

Update a Price List

Updates a *Price List*.

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

let apiInstance = new PriceLists.PriceListsApi();
let body = new PriceLists.PriceListPut(); // PriceListPut | 
let priceListId = 56; // Number | The ID of the `Price List` requested. 

apiInstance.updatePriceList(bodypriceListId, (error, data, response) => {
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
 **body** | [**PriceListPut**](PriceListPut.md)|  | 
 **priceListId** | **Number**| The ID of the &#x60;Price List&#x60; requested.  | 

### Return type

[**PriceListResponse**](PriceListResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

