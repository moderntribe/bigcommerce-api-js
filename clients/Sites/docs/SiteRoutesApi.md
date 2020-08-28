# Sites.SiteRoutesApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRoute**](SiteRoutesApi.md#deleteRoute) | **DELETE** /sites/{site_id}/routes/{route_id} | Delete a Site Route
[**getSiteRoute**](SiteRoutesApi.md#getSiteRoute) | **GET** /sites/{site_id}/routes/{route_id} | Get a Site Route
[**indexSiteRoutes**](SiteRoutesApi.md#indexSiteRoutes) | **GET** /sites/{site_id}/routes | Get all Site Routes
[**postSiteRoute**](SiteRoutesApi.md#postSiteRoute) | **POST** /sites/{site_id}/routes | Create a Site Route
[**putSiteRoute**](SiteRoutesApi.md#putSiteRoute) | **PUT** /sites/{site_id}/routes/{route_id} | Update a Site Route
[**sitesSiteIdRoutesPut**](SiteRoutesApi.md#sitesSiteIdRoutesPut) | **PUT** /sites/{site_id}/routes | Update Site Routes

<a name="deleteRoute"></a>
# **deleteRoute**
> deleteRoute(siteId, routeId)

Delete a Site Route

### Example
```javascript
import Sites from 'sites';
let defaultClient = Sites.ApiClient.instance;

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

let apiInstance = new Sites.SiteRoutesApi();
let siteId = "siteId_example"; // String | 
let routeId = "routeId_example"; // String | 

apiInstance.deleteRoute(siteId, routeId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **routeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSiteRoute"></a>
# **getSiteRoute**
> Route2 getSiteRoute(siteId, routeId)

Get a Site Route

### Example
```javascript
import Sites from 'sites';
let defaultClient = Sites.ApiClient.instance;

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

let apiInstance = new Sites.SiteRoutesApi();
let siteId = "siteId_example"; // String | 
let routeId = "routeId_example"; // String | 

apiInstance.getSiteRoute(siteId, routeId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **routeId** | **String**|  | 

### Return type

[**Route2**](Route2.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, Example 1

<a name="indexSiteRoutes"></a>
# **indexSiteRoutes**
> InlineResponse2001 indexSiteRoutes(siteId, opts)

Get all Site Routes

### Example
```javascript
import Sites from 'sites';
let defaultClient = Sites.ApiClient.instance;

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

let apiInstance = new Sites.SiteRoutesApi();
let siteId = "siteId_example"; // String | 
let opts = { 
  'type': "type_example" // String | Filter routes by a given resource type
};
apiInstance.indexSiteRoutes(siteId, opts, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **type** | **String**| Filter routes by a given resource type | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postSiteRoute"></a>
# **postSiteRoute**
> Route2 postSiteRoute(bodysiteId)

Create a Site Route

Currently, within BigCommerce, we support the following route types (meaning we will redirect shoppers back to given routes for these):  * Type: \&quot;home\&quot; * Type: \&quot;product\&quot; * Type: \&quot;cart\&quot; * Type: \&quot;checkout\&quot; * Type: \&quot;account_order_status\&quot; (for order statuses on an account) * Type: \&quot;account_new_return\&quot; (for returns on an account) * Type: \&quot;unsubscribe\&quot; (for unsubscribe URL in emails) * Type: \&quot;recover_abandoned_cart\&quot; (for URL in emails for a shopper to recover their abandoned cart) * Type: \&quot;create_account\&quot; * Type: \&quot;forgot_password\&quot; * Type: \&quot;order_confirmation\&quot; (supported in future update to override order confirmation page)   

### Example
```javascript
import Sites from 'sites';
let defaultClient = Sites.ApiClient.instance;

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

let apiInstance = new Sites.SiteRoutesApi();
let body = new Sites.Route2(); // Route2 | 
let siteId = "siteId_example"; // String | 

apiInstance.postSiteRoute(bodysiteId, (error, data, response) => {
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
 **body** | [**Route2**](Route2.md)|  | 
 **siteId** | **String**|  | 

### Return type

[**Route2**](Route2.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSiteRoute"></a>
# **putSiteRoute**
> Route3 putSiteRoute(bodysiteIdrouteId)

Update a Site Route

### Example
```javascript
import Sites from 'sites';
let defaultClient = Sites.ApiClient.instance;

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

let apiInstance = new Sites.SiteRoutesApi();
let body = new Sites.Route3(); // Route3 | 
let siteId = "siteId_example"; // String | 
let routeId = "routeId_example"; // String | 

apiInstance.putSiteRoute(bodysiteIdrouteId, (error, data, response) => {
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
 **body** | [**Route3**](Route3.md)|  | 
 **siteId** | **String**|  | 
 **routeId** | **String**|  | 

### Return type

[**Route3**](Route3.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, Example 1

<a name="sitesSiteIdRoutesPut"></a>
# **sitesSiteIdRoutesPut**
> sitesSiteIdRoutesPut(siteId, opts)

Update Site Routes

Upsert of routes for a site.  When updating an existing route, you **must** provide the id in the route object.

### Example
```javascript
import Sites from 'sites';
let defaultClient = Sites.ApiClient.instance;

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

let apiInstance = new Sites.SiteRoutesApi();
let siteId = 56; // Number | 
let opts = { 
  'body': [new Sites.Route1()] // [Route1] | 
};
apiInstance.sitesSiteIdRoutesPut(siteId, opts, (error, data, response) => {
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
 **siteId** | **Number**|  | 
 **body** | [**[Route1]**](Route1.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

