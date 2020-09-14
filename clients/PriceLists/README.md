# price_lists

PriceLists - JavaScript client for price_lists
- [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints) - [Price List Assignment Order of Operations](#price-list-assignment-order-of-operations) - [Usage Notes](#usage-notes)  A Price List allows you to populate different versions of catalog pricing and assign them to different [Customer Groups](/api-reference/customer-subscribers/customers-api). The prices are specified exclusively at the variant level.   The association of a Price List to a Customer Group can be done either via the Control Panel or using the [Customer Groups API.](/api-reference/customer-subscribers/customers-api)  Additionally, [Price List Assignments](https://developer.bigcommerce.com/api-reference/store-management/price-lists/price-lists-records/) can be created to assign Price Lists to a specific [Channel](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api). Price lists assigned to a channel apply to all shoppers on that channel, unless there is a more specific assignment.  If an active Price List does not contain prices for a variant then the Catalog pricing will be used. The association of a Price List to a Customer Group can be done either via the Control Panel or using the [Customer Groups API.](/api-reference/customer-subscribers/customers-api)  Price Lists will provide overridden price values to the Stencil storefront. Final price display can be further customized within the Stencil template. See the [Price Object](https://stencil.bigcommerce.com/docs/price-object-properties) in Stencil for further documentation.  To learn more about Price Lists, see [here](/api-docs/price-lists/price-list-overview).   ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Products                                     | modify     | `store_v2_products`                           | | Products                                     | read-only  | `store_v2_products_read_only`                 |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Price List Records                      | Create and manage price list records                                    | | Price Lists                             | Create and manage catalog pricing variations                            | | Price List Assignments                  | Assign price lists to Channels  ## Price List Assignment Order of Operations  The `Price List Assignment` Pricing Order of Operations is as follows:  **IF** `Price list` assigned to current `Customer Group` **AND** `Price List` assigned to current `Channel`: * Use this Price List -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF**: `Price List` assigned to current `Channel`: * Use this price list -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** `Price List` assigned to current `Customer Group`: * Use this price list -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** `Customer Group Discounts`: * Use them -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** `channel` has a `default price list`: * Use this price list -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE**: * Fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **Note:** Price Lists cannot be assigned to a customer group that has custom group discounts -- the customer group discounts must be deleted first.  ## Usage Notes - Price Lists cannot be assigned to a customer group that has custom group discounts -- the customer group discounts must be deleted first. - Bulk Pricing Tiers may additionally be associated with a Price Record to indicate different pricing as the quantity in cart increases. - If a variant has a `Price Record` any existing product-level bulk pricing will not apply in the cart. For variants without `Price Records`, any existing product bulk pricing will apply. - Price Lists Records accepts bulk upsert. Only one [Bulk upsert](https://developer.bigcommerce.com/api-reference/catalog/pricelists-api/price-lists-records/setpricelistrecordcollection) can done at a time. Running more than one in parallel on the **same store** will cause a 429 error and the request will fail.   ### Related Endpoints * [Get Price List Collection](/api-reference/catalog/pricelists-api/price-lists/getpricelistcollection)  ### Webhooks Available There are no direct webhooks available for Price Lists. Since Price Lists directly relate to products, webhooks related to products will fire for corresponding changes such as pricing.   * [Products](/api-docs/getting-started/webhooks/webhook-events#webhook-events_products) * [SKU](/api-docs/getting-started/webhooks/webhook-events#webhook-events_sku)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.0
- Package version: 3.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen
For more information, please visit [https://developer.bigcommerce.com/](https://developer.bigcommerce.com/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install price_lists --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PriceLists = require('price_lists');
var defaultClient = PriceLists.ApiClient.instance;

// Configure API key authorization: X-Auth-Client
var X-Auth-Client = defaultClient.authentications['X-Auth-Client'];
X-Auth-Client.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Client.apiKeyPrefix['X-Auth-Client'] = "Token"

// Configure API key authorization: X-Auth-Token
var X-Auth-Token = defaultClient.authentications['X-Auth-Token'];
X-Auth-Token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Token.apiKeyPrefix['X-Auth-Token'] = "Token"

var api = new PriceLists.PriceListsApi()
var body = new PriceLists.PriceListPost(); // {PriceListPost} 
var opts = { 
  'accept': "application/json", // {String} 
  'contentType': "application/json" // {String} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createPriceList(body, opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PriceLists.PriceListsApi* | [**createPriceList**](docs/PriceListsApi.md#createPriceList) | **POST** /pricelists | Create a Price List
*PriceLists.PriceListsApi* | [**deletePriceList**](docs/PriceListsApi.md#deletePriceList) | **DELETE** /pricelists/{price_list_id} | Delete a Price List
*PriceLists.PriceListsApi* | [**deletePriceListsByFilter**](docs/PriceListsApi.md#deletePriceListsByFilter) | **DELETE** /pricelists | Delete All Price Lists
*PriceLists.PriceListsApi* | [**getPriceList**](docs/PriceListsApi.md#getPriceList) | **GET** /pricelists/{price_list_id} | Get a Price List
*PriceLists.PriceListsApi* | [**getPriceListCollection**](docs/PriceListsApi.md#getPriceListCollection) | **GET** /pricelists | Get All Price Lists
*PriceLists.PriceListsApi* | [**updatePriceList**](docs/PriceListsApi.md#updatePriceList) | **PUT** /pricelists/{price_list_id} | Update a Price List
*PriceLists.PriceListsAssignmentsApi* | [**createPriceListAssignments**](docs/PriceListsAssignmentsApi.md#createPriceListAssignments) | **POST** /pricelists/assignments | Create Price List Assignments
*PriceLists.PriceListsAssignmentsApi* | [**deletePriceListAssignmentsByFilter**](docs/PriceListsAssignmentsApi.md#deletePriceListAssignmentsByFilter) | **DELETE** /pricelists/assignments | Delete Price List Assignments
*PriceLists.PriceListsAssignmentsApi* | [**getListOfPriceListAssignments**](docs/PriceListsAssignmentsApi.md#getListOfPriceListAssignments) | **GET** /pricelists/assignments | Get Price List Assignments
*PriceLists.PriceListsRecordsApi* | [**deletePriceListRecord**](docs/PriceListsRecordsApi.md#deletePriceListRecord) | **DELETE** /pricelists/{price_list_id}/records/{variant_id}/{currency_code} | Delete a Price Record by Currency Code
*PriceLists.PriceListsRecordsApi* | [**deletePriceListRecordsByFilter**](docs/PriceListsRecordsApi.md#deletePriceListRecordsByFilter) | **DELETE** /pricelists/{price_list_id}/records | Delete a Price List Record
*PriceLists.PriceListsRecordsApi* | [**getPriceListRecord**](docs/PriceListsRecordsApi.md#getPriceListRecord) | **GET** /pricelists/{price_list_id}/records/{variant_id}/{currency_code} | Get a Price Record by Currency Code
*PriceLists.PriceListsRecordsApi* | [**getPriceListRecordCollection**](docs/PriceListsRecordsApi.md#getPriceListRecordCollection) | **GET** /pricelists/{price_list_id}/records | Get All Price List Records
*PriceLists.PriceListsRecordsApi* | [**getPriceListRecordsByVariantId**](docs/PriceListsRecordsApi.md#getPriceListRecordsByVariantId) | **GET** /pricelists/{price_list_id}/records/{variant_id} | Get Price Records by Variant
*PriceLists.PriceListsRecordsApi* | [**setPriceListRecord**](docs/PriceListsRecordsApi.md#setPriceListRecord) | **PUT** /pricelists/{price_list_id}/records/{variant_id}/{currency_code} | Set Price List Record by Currency Code
*PriceLists.PriceListsRecordsApi* | [**setPriceListRecordCollection**](docs/PriceListsRecordsApi.md#setPriceListRecordCollection) | **PUT** /pricelists/{price_list_id}/records | Upsert Price List Records

## Documentation for Models

 - [PriceLists.AllOfPriceListAssignmentsBatchErrorResponseBatchErrorsData](docs/AllOfPriceListAssignmentsBatchErrorResponseBatchErrorsData.md)
 - [PriceLists.AllOfPriceListAssignmentsBatchErrorSetData](docs/AllOfPriceListAssignmentsBatchErrorSetData.md)
 - [PriceLists.AllOfPriceListCollectionResponseDataItems](docs/AllOfPriceListCollectionResponseDataItems.md)
 - [PriceLists.AllOfPriceListResponseData](docs/AllOfPriceListResponseData.md)
 - [PriceLists.AllOfPriceRecordBatchErrorSetData](docs/AllOfPriceRecordBatchErrorSetData.md)
 - [PriceLists.AllOfPriceRecordCollectionResponseDataItems](docs/AllOfPriceRecordCollectionResponseDataItems.md)
 - [PriceLists.AllOfPriceRecordResponseData](docs/AllOfPriceRecordResponseData.md)
 - [PriceLists.AssignmentForGetResponse](docs/AssignmentForGetResponse.md)
 - [PriceLists.AssignmentsForGetResponse](docs/AssignmentsForGetResponse.md)
 - [PriceLists.AssignmentsForGetResponseData](docs/AssignmentsForGetResponseData.md)
 - [PriceLists.AssignmentsForRequest](docs/AssignmentsForRequest.md)
 - [PriceLists.BaseError](docs/BaseError.md)
 - [PriceLists.Body](docs/Body.md)
 - [PriceLists.BulkPricingTier](docs/BulkPricingTier.md)
 - [PriceLists.CollectionMeta](docs/CollectionMeta.md)
 - [PriceLists.CreateBatchPriceListAssignmentsRequest](docs/CreateBatchPriceListAssignmentsRequest.md)
 - [PriceLists.DetailedErrors](docs/DetailedErrors.md)
 - [PriceLists.ErrorResponse](docs/ErrorResponse.md)
 - [PriceLists.InlineResponse200](docs/InlineResponse200.md)
 - [PriceLists.InlineResponse204](docs/InlineResponse204.md)
 - [PriceLists.InlineResponse422](docs/InlineResponse422.md)
 - [PriceLists.Meta](docs/Meta.md)
 - [PriceLists.NoContent](docs/NoContent.md)
 - [PriceLists.NotFound](docs/NotFound.md)
 - [PriceLists.Pagination](docs/Pagination.md)
 - [PriceLists.Pagination1](docs/Pagination1.md)
 - [PriceLists.Pagination1Links](docs/Pagination1Links.md)
 - [PriceLists.PriceList](docs/PriceList.md)
 - [PriceLists.PriceListAssignmentsBatchErrorResponse](docs/PriceListAssignmentsBatchErrorResponse.md)
 - [PriceLists.PriceListAssignmentsBatchErrorResponseBatchErrors](docs/PriceListAssignmentsBatchErrorResponseBatchErrors.md)
 - [PriceLists.PriceListAssignmentsBatchErrorSet](docs/PriceListAssignmentsBatchErrorSet.md)
 - [PriceLists.PriceListAssignmentsIdentifiers](docs/PriceListAssignmentsIdentifiers.md)
 - [PriceLists.PriceListBase](docs/PriceListBase.md)
 - [PriceLists.PriceListCollectionResponse](docs/PriceListCollectionResponse.md)
 - [PriceLists.PriceListPost](docs/PriceListPost.md)
 - [PriceLists.PriceListPut](docs/PriceListPut.md)
 - [PriceLists.PriceListResponse](docs/PriceListResponse.md)
 - [PriceLists.PriceListResponse1](docs/PriceListResponse1.md)
 - [PriceLists.PriceRecord](docs/PriceRecord.md)
 - [PriceLists.PriceRecordBase](docs/PriceRecordBase.md)
 - [PriceLists.PriceRecordBatchErrorResponse](docs/PriceRecordBatchErrorResponse.md)
 - [PriceLists.PriceRecordBatchErrorSet](docs/PriceRecordBatchErrorSet.md)
 - [PriceLists.PriceRecordBatchItem](docs/PriceRecordBatchItem.md)
 - [PriceLists.PriceRecordCollectionPut](docs/PriceRecordCollectionPut.md)
 - [PriceLists.PriceRecordCollectionResponse](docs/PriceRecordCollectionResponse.md)
 - [PriceLists.PriceRecordIdentifiers](docs/PriceRecordIdentifiers.md)
 - [PriceLists.PriceRecordPut](docs/PriceRecordPut.md)
 - [PriceLists.PriceRecordResponse](docs/PriceRecordResponse.md)
 - [PriceLists.SuccessBatchResponse](docs/SuccessBatchResponse.md)

## Documentation for Authorization


### X-Auth-Client

- **Type**: API key
- **API key parameter name**: X-Auth-Client
- **Location**: HTTP header

### X-Auth-Token

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header

