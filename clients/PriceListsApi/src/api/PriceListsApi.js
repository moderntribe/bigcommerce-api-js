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
import NotFound from '../model/NotFound';
import PriceListCollectionResponse from '../model/PriceListCollectionResponse';
import PriceListPost from '../model/PriceListPost';
import PriceListPut from '../model/PriceListPut';
import PriceListResponse from '../model/PriceListResponse';
import PriceListResponse1 from '../model/PriceListResponse1';

/**
* PriceLists service.
* @module api/PriceListsApi
* @version 3.0
*/
export default class PriceListsApi {

    /**
    * Constructs a new PriceListsApi. 
    * @alias module:api/PriceListsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createPriceList operation.
     * @callback module:api/PriceListsApi~createPriceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Price List
     * Creates a *Price List*.  **Required Fields** * name
     * @param {Object} opts Optional parameters
     * @param {module:api/PriceListsApi~createPriceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceListResponse}
     */
    createPriceList(body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
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
      let returnType = PriceListResponse;

      return this.apiClient.callApi(
        '/pricelists', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deletePriceList operation.
     * @callback module:api/PriceListsApi~deletePriceListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Price List
     * Deletes a *Price List*. All associated price records are also removed.
     * @param {module:api/PriceListsApi~deletePriceListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePriceList(priceListId, callback) {
      let postBody = null;

      let pathParams = {
        'price_list_id': priceListId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/pricelists/{price_list_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deletePriceListsByFilter operation.
     * @callback module:api/PriceListsApi~deletePriceListsByFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete All Price Lists
     * Deletes a *Price List*. All associated price records are also removed. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/PriceListsApi~deletePriceListsByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePriceListsByFilter(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id'],
        'name': opts['name']
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/pricelists', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPriceList operation.
     * @callback module:api/PriceListsApi~getPriceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceListResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Price List
     *  Returns a single *Price List*.
     * @param {Object} opts Optional parameters
     * @param {module:api/PriceListsApi~getPriceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceListResponse1}
     */
    getPriceList(priceListId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'price_list_id': priceListId
      };
      let queryParams = {
        'id': opts['id'],
        'name': opts['name'],
        'date_created': opts['dateCreated'],
        'date_modified': opts['dateModified'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PriceListResponse1;

      return this.apiClient.callApi(
        '/pricelists/{price_list_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPriceListCollection operation.
     * @callback module:api/PriceListsApi~getPriceListCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceListCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Price Lists
     * Returns a list of *Price Lists*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/PriceListsApi~getPriceListCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceListCollectionResponse}
     */
    getPriceListCollection(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id'],
        'name': opts['name'],
        'date_created': opts['dateCreated'],
        'date_modified': opts['dateModified'],
        'page': opts['page'],
        'limit': opts['limit']
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
      let returnType = PriceListCollectionResponse;

      return this.apiClient.callApi(
        '/pricelists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updatePriceList operation.
     * @callback module:api/PriceListsApi~updatePriceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Price List
     * Updates a *Price List*.
     * @param {module:api/PriceListsApi~updatePriceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceListResponse}
     */
    updatePriceList(body, priceListId, callback) {
      let postBody = body;

      let pathParams = {
        'price_list_id': priceListId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PriceListResponse;

      return this.apiClient.callApi(
        '/pricelists/{price_list_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
