/**
 * Price Lists
 * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints) - [Price List Assignment Order of Operations](#price-list-assignment-order-of-operations) - [Usage Notes](#usage-notes)  A Price List allows you to populate different versions of catalog pricing and assign them to different [Customer Groups](/api-reference/customer-subscribers/customers-api). The prices are specified exclusively at the variant level.   The association of a Price List to a Customer Group can be done either via the Control Panel or using the [Customer Groups API.](/api-reference/customer-subscribers/customers-api)  Additionally, [Price List Assignments](https://developer.bigcommerce.com/api-reference/store-management/price-lists/price-lists-records/) can be created to assign Price Lists to a specific [Channel](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api). Price lists assigned to a channel apply to all shoppers on that channel, unless there is a more specific assignment.  If an active Price List does not contain prices for a variant then the Catalog pricing will be used. The association of a Price List to a Customer Group can be done either via the Control Panel or using the [Customer Groups API.](/api-reference/customer-subscribers/customers-api)  Price Lists will provide overridden price values to the Stencil storefront. Final price display can be further customized within the Stencil template. See the [Price Object](https://stencil.bigcommerce.com/docs/price-object-properties) in Stencil for further documentation.  To learn more about Price Lists, see [here](/api-docs/price-lists/price-list-overview).   ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Products                                     | modify     | `store_v2_products`                           | | Products                                     | read-only  | `store_v2_products_read_only`                 |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Price List Records                      | Create and manage price list records                                    | | Price Lists                             | Create and manage catalog pricing variations                            | | Price List Assignments                  | Assign price lists to Channels  ## Price List Assignment Order of Operations  The `Price List Assignment` Pricing Order of Operations is as follows:  **IF** `Price list` assigned to current `Customer Group` **AND** `Price List` assigned to current `Channel`: * Use this Price List -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF**: `Price List` assigned to current `Channel`: * Use this price list -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** `Price List` assigned to current `Customer Group`: * Use this price list -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** `Customer Group Discounts`: * Use them -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** `channel` has a `default price list`: * Use this price list -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE**: * Fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **Note:** Price Lists cannot be assigned to a customer group that has custom group discounts -- the customer group discounts must be deleted first.  ## Usage Notes - Price Lists cannot be assigned to a customer group that has custom group discounts -- the customer group discounts must be deleted first. - Bulk Pricing Tiers may additionally be associated with a Price Record to indicate different pricing as the quantity in cart increases. - If a variant has a `Price Record` any existing product-level bulk pricing will not apply in the cart. For variants without `Price Records`, any existing product bulk pricing will apply. - Price Lists Records accepts bulk upsert. Only one [Bulk upsert](https://developer.bigcommerce.com/api-reference/catalog/pricelists-api/price-lists-records/setpricelistrecordcollection) can done at a time. Running more than one in parallel on the **same store** will cause a 429 error and the request will fail.   ### Related Endpoints * [Get Price List Collection](/api-reference/catalog/pricelists-api/price-lists/getpricelistcollection)  ### Webhooks Available There are no direct webhooks available for Price Lists. Since Price Lists directly relate to products, webhooks related to products will fire for corresponding changes such as pricing.   * [Products](/api-docs/getting-started/webhooks/webhook-events#webhook-events_products) * [SKU](/api-docs/getting-started/webhooks/webhook-events#webhook-events_sku)
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import NoContent from '../model/NoContent';
import NotFound from '../model/NotFound';
import PriceRecordBatchErrorResponse from '../model/PriceRecordBatchErrorResponse';
import PriceRecordCollectionResponse from '../model/PriceRecordCollectionResponse';
import PriceRecordPut from '../model/PriceRecordPut';
import PriceRecordResponse from '../model/PriceRecordResponse';

/**
* PriceListsRecords service.
* @module api/PriceListsRecordsApi
* @version 3.0
*/
export default class PriceListsRecordsApi {

    /**
    * Constructs a new PriceListsRecordsApi. 
    * @alias module:api/PriceListsRecordsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deletePriceListRecord operation.
     * @callback module:api/PriceListsRecordsApi~deletePriceListRecordCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Price Record by Currency Code
     * Deletes a *Price List Record* using the currency code. 
     * @param {Object} opts Optional parameters
     * @param {module:api/PriceListsRecordsApi~deletePriceListRecordCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePriceListRecord(priceListId, variantId, currencyCode, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'price_list_id': priceListId,
        'variant_id': variantId,
        'currency_code': currencyCode
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': opts['contentType'],
        'Accept': opts['accept']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/pricelists/{price_list_id}/records/{variant_id}/{currency_code}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deletePriceListRecordsByFilter operation.
     * @callback module:api/PriceListsRecordsApi~deletePriceListRecordsByFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NoContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Price List Record
     * Deletes a *Price List Record*. Deleting the records does not delete the Price List. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/PriceListsRecordsApi~deletePriceListRecordsByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NoContent}
     */
    deletePriceListRecordsByFilter(priceListId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'price_list_id': priceListId
      };
      let queryParams = {
        'variant_id:in': opts['variantIdin']
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NoContent;

      return this.apiClient.callApi(
        '/pricelists/{price_list_id}/records', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPriceListRecord operation.
     * @callback module:api/PriceListsRecordsApi~getPriceListRecordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceRecordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Price Record by Currency Code
     * Returns a *Price List Record* using the currency code. Optional parameters can be used.
     * @param {Object} opts Optional parameters
     * @param {module:api/PriceListsRecordsApi~getPriceListRecordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceRecordResponse}
     */
    getPriceListRecord(priceListId, variantId, currencyCode, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'price_list_id': priceListId,
        'variant_id': variantId,
        'currency_code': currencyCode
      };
      let queryParams = {
        'include': opts['include']
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PriceRecordResponse;

      return this.apiClient.callApi(
        '/pricelists/{price_list_id}/records/{variant_id}/{currency_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPriceListRecordCollection operation.
     * @callback module:api/PriceListsRecordsApi~getPriceListRecordCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceRecordCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Price List Records
     * Returns a list of *Price List Records* associated with a *Price List*.
     * @param {Object} opts Optional parameters
     * @param {module:api/PriceListsRecordsApi~getPriceListRecordCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceRecordCollectionResponse}
     */
    getPriceListRecordCollection(priceListId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'price_list_id': priceListId
      };
      let queryParams = {
        'variant_id:in': opts['variantIdin'],
        'product_id:in': opts['productIdin'],
        'currency': opts['currency'],
        'page': opts['page'],
        'limit': opts['limit'],
        'include': opts['include'],
        'price': opts['price'],
        'sale_price': opts['salePrice'],
        'retail_price': opts['retailPrice'],
        'map_price': opts['mapPrice'],
        'calculated_price': opts['calculatedPrice'],
        'date_created': opts['dateCreated'],
        'date_modified': opts['dateModified'],
        'sku': opts['sku']
      };
      let headerParams = {
        'Content-Type': opts['contentType'],
        'Accept': opts['accept']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PriceRecordCollectionResponse;

      return this.apiClient.callApi(
        '/pricelists/{price_list_id}/records', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPriceListRecordsByVariantId operation.
     * @callback module:api/PriceListsRecordsApi~getPriceListRecordsByVariantIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceRecordCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Price Records by Variant
     * Returns *Price List Records* using the variant ID. Will also contain currency records.
     * @param {Object} opts Optional parameters
     * @param {module:api/PriceListsRecordsApi~getPriceListRecordsByVariantIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceRecordCollectionResponse}
     */
    getPriceListRecordsByVariantId(priceListId, variantId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'price_list_id': priceListId,
        'variant_id': variantId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PriceRecordCollectionResponse;

      return this.apiClient.callApi(
        '/pricelists/{price_list_id}/records/{variant_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the setPriceListRecord operation.
     * @callback module:api/PriceListsRecordsApi~setPriceListRecordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceRecordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set Price List Record by Currency Code
     * Creates or updates a*Price List Record* using the currency code.
     * @param {Object} opts Optional parameters
     * @param {module:api/PriceListsRecordsApi~setPriceListRecordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceRecordResponse}
     */
    setPriceListRecord(body, priceListId, variantId, currencyCode, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'price_list_id': priceListId,
        'variant_id': variantId,
        'currency_code': currencyCode
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PriceRecordResponse;

      return this.apiClient.callApi(
        '/pricelists/{price_list_id}/records/{variant_id}/{currency_code}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the setPriceListRecordCollection operation.
     * @callback module:api/PriceListsRecordsApi~setPriceListRecordCollectionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upsert Price List Records
     * Creates or updates *Price List Records*.   **Required Fields** * currency  **Notes**  * Bulk Updates is supported by this endpoint.  * Bulk requests are limited to 100 items per request. * Only one bulk upsert can done at a time. Running more than one in parallel on the **same store** will cause a 429 error and the request will fail. 
     * @param {Object} opts Optional parameters
     * @param {module:api/PriceListsRecordsApi~setPriceListRecordCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    setPriceListRecordCollection(body, priceListId, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'price_list_id': priceListId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Strict-Mode': opts['xStrictMode'],
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/pricelists/{price_list_id}/records', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
