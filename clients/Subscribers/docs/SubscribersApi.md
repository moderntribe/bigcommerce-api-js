# Subscribers.SubscribersApi

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriber**](SubscribersApi.md#createSubscriber) | **POST** /customers/subscribers | Create a Subscriber
[**deleteSubscriberById**](SubscribersApi.md#deleteSubscriberById) | **DELETE** /customers/subscribers/{subscriber_id} | Delete a Subscriber
[**deleteSubscribers**](SubscribersApi.md#deleteSubscribers) | **DELETE** /customers/subscribers | Delete Subscribers
[**getSubscriberById**](SubscribersApi.md#getSubscriberById) | **GET** /customers/subscribers/{subscriber_id} | Get a Subscriber
[**getSubscribers**](SubscribersApi.md#getSubscribers) | **GET** /customers/subscribers | Get Subscribers
[**updateSubscriber**](SubscribersApi.md#updateSubscriber) | **PUT** /customers/subscribers/{subscriber_id} | Update a Subscriber

<a name="createSubscriber"></a>
# **createSubscriber**
> SubscriberResponse createSubscriber(body, opts)

Create a Subscriber

Creates a *Subscriber*.  **Required Fields** * email  **Read Only Fields** * id

### Example
```javascript
import Subscribers from 'subscribers';
let defaultClient = Subscribers.ApiClient.instance;

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

let apiInstance = new Subscribers.SubscribersApi();
let body = new Subscribers.SubscriberPost1(); // SubscriberPost1 | 
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.createSubscriber(body, opts, (error, data, response) => {
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
 **body** | [**SubscriberPost1**](SubscriberPost1.md)|  | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**SubscriberResponse**](SubscriberResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSubscriberById"></a>
# **deleteSubscriberById**
> deleteSubscriberById(subscriberId, opts)

Delete a Subscriber

Deletes a *Subscriber*.

### Example
```javascript
import Subscribers from 'subscribers';
let defaultClient = Subscribers.ApiClient.instance;

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

let apiInstance = new Subscribers.SubscribersApi();
let subscriberId = 56; // Number | The ID of the `Subscriber` requested. 
let opts = { 
  'contentType': "application/json", // String | 
  'accept': "application/json" // String | 
};
apiInstance.deleteSubscriberById(subscriberId, opts, (error, data, response) => {
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
 **subscriberId** | **Number**| The ID of the &#x60;Subscriber&#x60; requested.  | 
 **contentType** | **String**|  | [optional] [default to application/json]
 **accept** | **String**|  | [optional] [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSubscribers"></a>
# **deleteSubscribers**
> deleteSubscribers(opts)

Delete Subscribers

By default, it deletes all *Subscribers*. A filter should be added to avoid deleting all subscribers in a store.

### Example
```javascript
import Subscribers from 'subscribers';
let defaultClient = Subscribers.ApiClient.instance;

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

let apiInstance = new Subscribers.SubscribersApi();
let opts = { 
  'email': "email_example", // String | Filter items by email. 
  'firstName': "firstName_example", // String | Filter items by first_name. 
  'lastName': "lastName_example", // String | Filter items by last_name. 
  'source': "source_example", // String | Filter items by source. 
  'orderId': 56, // Number | Filter items by order_id. 
  'dateCreated': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_created. 
  'dateModified': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15`
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.deleteSubscribers(opts, (error, data, response) => {
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
 **email** | **String**| Filter items by email.  | [optional] 
 **firstName** | **String**| Filter items by first_name.  | [optional] 
 **lastName** | **String**| Filter items by last_name.  | [optional] 
 **source** | **String**| Filter items by source.  | [optional] 
 **orderId** | **Number**| Filter items by order_id.  | [optional] 
 **dateCreated** | **Date**| Filter items by date_created.  | [optional] 
 **dateModified** | **Date**| Filter items by date_modified. For example &#x60;v3/catalog/products?date_last_imported:min&#x3D;2018-06-15&#x60; | [optional] 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

null (empty response body)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSubscriberById"></a>
# **getSubscriberById**
> SubscriberResponse getSubscriberById(subscriberId, opts)

Get a Subscriber

Returns a *Subscriber*.

### Example
```javascript
import Subscribers from 'subscribers';
let defaultClient = Subscribers.ApiClient.instance;

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

let apiInstance = new Subscribers.SubscribersApi();
let subscriberId = 56; // Number | The ID of the `Subscriber` requested. 
let opts = { 
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.getSubscriberById(subscriberId, opts, (error, data, response) => {
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
 **subscriberId** | **Number**| The ID of the &#x60;Subscriber&#x60; requested.  | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**SubscriberResponse**](SubscriberResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSubscribers"></a>
# **getSubscribers**
> SubscriberCollectionResponse getSubscribers(opts)

Get Subscribers

Returns a list of *Subscribers*. Optional filter parameters can be passed in.

### Example
```javascript
import Subscribers from 'subscribers';
let defaultClient = Subscribers.ApiClient.instance;

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

let apiInstance = new Subscribers.SubscribersApi();
let opts = { 
  'email': "email_example", // String | Filter items by email. 
  'firstName': "firstName_example", // String | Filter items by first_name. 
  'lastName': "lastName_example", // String | Filter items by last_name. 
  'source': "source_example", // String | Filter items by source. 
  'orderId': 56, // Number | Filter items by order_id. 
  'dateCreated': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_created. 
  'dateModified': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15`
  'page': 56, // Number | Specifies the page number in a limited (paginated) list of products.
  'limit': 56, // Number | Controls the number of items per page in a limited (paginated) list of products.
  'accept': "application/json", // String | 
  'contentType': "application/json" // String | 
};
apiInstance.getSubscribers(opts, (error, data, response) => {
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
 **email** | **String**| Filter items by email.  | [optional] 
 **firstName** | **String**| Filter items by first_name.  | [optional] 
 **lastName** | **String**| Filter items by last_name.  | [optional] 
 **source** | **String**| Filter items by source.  | [optional] 
 **orderId** | **Number**| Filter items by order_id.  | [optional] 
 **dateCreated** | **Date**| Filter items by date_created.  | [optional] 
 **dateModified** | **Date**| Filter items by date_modified. For example &#x60;v3/catalog/products?date_last_imported:min&#x3D;2018-06-15&#x60; | [optional] 
 **page** | **Number**| Specifies the page number in a limited (paginated) list of products. | [optional] 
 **limit** | **Number**| Controls the number of items per page in a limited (paginated) list of products. | [optional] 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**SubscriberCollectionResponse**](SubscriberCollectionResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSubscriber"></a>
# **updateSubscriber**
> SubscriberResponse updateSubscriber(bodysubscriberId, opts)

Update a Subscriber

Updates a *Subscriber*.  **Read Only Fields** * id

### Example
```javascript
import Subscribers from 'subscribers';
let defaultClient = Subscribers.ApiClient.instance;

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

let apiInstance = new Subscribers.SubscribersApi();
let body = new Subscribers.SubscriberPut1(); // SubscriberPut1 | 
let subscriberId = 56; // Number | The ID of the `Subscriber` requested. 
let opts = { 
  'accept': "application/json" // String | 
  'contentType': "application/json" // String | 
};
apiInstance.updateSubscriber(bodysubscriberId, opts, (error, data, response) => {
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
 **body** | [**SubscriberPut1**](SubscriberPut1.md)|  | 
 **subscriberId** | **Number**| The ID of the &#x60;Subscriber&#x60; requested.  | 
 **accept** | **String**|  | [optional] [default to application/json]
 **contentType** | **String**|  | [optional] [default to application/json]

### Return type

[**SubscriberResponse**](SubscriberResponse.md)

### Authorization

[X-Auth-Client](../README.md#X-Auth-Client), [X-Auth-Token](../README.md#X-Auth-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

