/**
 * Catalog
 * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Differentiating Variants & Modifiers](#variants-and-modifiers) - [Available Endpoints](#available-endpoints) - [Resources](#resources)  The Catalog API manages products, brands and categories for a store. To learn more about the Catalog resources see [Catalog Products](https://developer.bigcommerce.com/api-docs/catalog/products-overview) and [Categories](https://developer.bigcommerce.com/api-docs/catalog/products-overview#products-overview_categories).  ## OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | modify     | `store_v2_products`           | | Products | read-only  | `store_v2_products_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Differentiating Variants and Modifiers [Variants](https://support.bigcommerce.com/s/article/Product-Options-v3#variations) represent a physical product made up of [Product Option](https://support.bigcommerce.com/s/article/Product-Options-v3) choices, i.e. a large blue t-shirt. Each variant can have a unique SKU.  Modifiers represent a choice a customer makes about a product that doesn't represent a physical item, i.e. text to be printed on a t-shirt. Assigning a SKU to a modifier will turn it into a variant.  See [Variant Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#variant-options) and [Modifier Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#modifier-options) for more information.  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Brand Images                            | Create and manage brand images                                          | | Brand Metafields                        | Create and manage brand metafields                                      | | Brands                                  | Create and manage brands                                                | | Catalog                                 | Create and manage store categories, products, and brands                | | Categories                              | Create and manage categorties                                           | | Category Images                         | Create and manage category images                                       | | Category Metafields                     | Create and manage category metafields                                   | | Product Bulk Pricing Rules              | Create and manage product bulk pricing rules                            | | Product Complex Rules                   | Create and manage product complex rules                                 | | Product Custom Fields                   | Create and manage product custom fields                                 | | Product Images                          | Create and manage product images                                        | | Product Metafields                      | Create and manage product meta fields                                   | | Product Modifier Images                 | Create and manage product modifer images                                | | Product Modifier Values                 | Create and manage product modifier values                               | | Product Modifiers                       | Create and manage product midifiers                                     | | Product Reviews                         | Create and manage product reviews                                       | | Product Variant Option Values           | Create and manage product variant option values                         | | Product Variant Options                 | Create and manage product variant options                               | | Product Variants                        | Create and manage product variants                                      | | Product Videos                          | Create and manage product videos                                        | | Products                                | Create and manage products                                              | | ProductVariant Metafields               | Create and manage product meta flields                                  | | Variants                                | Get and update all variants                                             |  ## Resources  ### Webhooks * [Products](/api-docs/getting-started/webhooks/webhook-events#webhook-events_products) * [Categories](/api-docs/getting-started/webhooks/webhook-events#webhook-events_category) * [SKU](/api-docs/getting-started/webhooks/webhook-events#webhook-events_sku)  ### Related Endpoints * [Catalog API](/api-reference/catalog/catalog-api)
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
import OptionValueCollectionResponse from '../model/OptionValueCollectionResponse';
import OptionValuePost from '../model/OptionValuePost';
import OptionValuePut from '../model/OptionValuePut';
import OptionValueResponse from '../model/OptionValueResponse';

/**
* ProductOptionValues service.
* @module api/ProductOptionValuesApi
* @version 3.0
*/
export default class ProductOptionValuesApi {

    /**
    * Constructs a new ProductOptionValuesApi. 
    * @alias module:api/ProductOptionValuesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createOptionValue operation.
     * @callback module:api/ProductOptionValuesApi~createOptionValueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OptionValueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Product Option Values
     * Creates a *Variant Option Value*.  **Required Fields** * label * sort_order  **Read-Only Fields** * id
     * @param {module:api/ProductOptionValuesApi~createOptionValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OptionValueResponse}
     */
    createOptionValue(body, productId, optionId, accept, contentType, callback) {
      let postBody = body;

      let pathParams = {
        'product_id': productId,
        'option_id': optionId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OptionValueResponse;

      return this.apiClient.callApi(
        '/catalog/products/{product_id}/options/{option_id}/values', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteOptionValueById operation.
     * @callback module:api/ProductOptionValuesApi~deleteOptionValueByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Product Option Value
     * Deletea a *Variant Option Value*.
     * @param {module:api/ProductOptionValuesApi~deleteOptionValueByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteOptionValueById(productId, optionId, valueId, accept, contentType, callback) {
      let postBody = null;

      let pathParams = {
        'product_id': productId,
        'option_id': optionId,
        'value_id': valueId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/catalog/products/{product_id}/options/{option_id}/values/{value_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOptionValueById operation.
     * @callback module:api/ProductOptionValuesApi~getOptionValueByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OptionValueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Product Option Value
     * Returns a single *Variant Option Value*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductOptionValuesApi~getOptionValueByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OptionValueResponse}
     */
    getOptionValueById(productId, optionId, valueId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'product_id': productId,
        'option_id': optionId,
        'value_id': valueId
      };
      let queryParams = {
        'include_fields': opts['includeFields'],
        'exclude_fields': opts['excludeFields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OptionValueResponse;

      return this.apiClient.callApi(
        '/catalog/products/{product_id}/options/{option_id}/values/{value_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOptionValues operation.
     * @callback module:api/ProductOptionValuesApi~getOptionValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OptionValueCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all Product Option Values
     * Returns a list of all *Variant Option Values*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductOptionValuesApi~getOptionValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OptionValueCollectionResponse}
     */
    getOptionValues(productId, optionId, accept, contentType, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'product_id': productId,
        'option_id': optionId
      };
      let queryParams = {
        'include_fields': opts['includeFields'],
        'exclude_fields': opts['excludeFields']
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OptionValueCollectionResponse;

      return this.apiClient.callApi(
        '/catalog/products/{product_id}/options/{option_id}/values', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOptionValue operation.
     * @callback module:api/ProductOptionValuesApi~updateOptionValueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OptionValueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Product Option Value
     * Updates a *Variant Option Value*.  **Read-Only Fields** * id
     * @param {module:api/ProductOptionValuesApi~updateOptionValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OptionValueResponse}
     */
    updateOptionValue(body, productId, optionId, valueId, accept, contentType, callback) {
      let postBody = body;

      let pathParams = {
        'product_id': productId,
        'option_id': optionId,
        'value_id': valueId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OptionValueResponse;

      return this.apiClient.callApi(
        '/catalog/products/{product_id}/options/{option_id}/values/{value_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
