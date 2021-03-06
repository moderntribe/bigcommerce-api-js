'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ErrorResponse = require('../model/ErrorResponse');

var _ErrorResponse2 = _interopRequireDefault(_ErrorResponse);

var _NotFound = require('../model/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _OptionCollectionResponse = require('../model/OptionCollectionResponse');

var _OptionCollectionResponse2 = _interopRequireDefault(_OptionCollectionResponse);

var _OptionPost = require('../model/OptionPost');

var _OptionPost2 = _interopRequireDefault(_OptionPost);

var _OptionPut = require('../model/OptionPut');

var _OptionPut2 = _interopRequireDefault(_OptionPut);

var _OptionResponse = require('../model/OptionResponse');

var _OptionResponse2 = _interopRequireDefault(_OptionResponse);

var _OptionResponse3 = require('../model/OptionResponse1');

var _OptionResponse4 = _interopRequireDefault(_OptionResponse3);

var _OptionResponse5 = require('../model/OptionResponse2');

var _OptionResponse6 = _interopRequireDefault(_OptionResponse5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* ProductOptions service.
* @module api/ProductOptionsApi
* @version 3.0
*/
var ProductOptionsApi = function () {

  /**
  * Constructs a new ProductOptionsApi. 
  * @alias module:api/ProductOptionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProductOptionsApi(apiClient) {
    _classCallCheck(this, ProductOptionsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createOption operation.
   * @callback module:api/ProductOptionsApi~createOptionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/OptionResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a Product Option
   * Creates a *Variant Option*.  **Required Fields** * display_name * type * option_values  **Read-Only Fields** * id  **Notes**  * Only one variant option at a time can be created; individual variant options will contain an array of multiple values.  * There are several examples listed below that create options, but the SKU’s are not updated and they are not a variant on the product. Variant SKUs must be created with a separate request. * Variant options will show on the storefront as an option that can be selected by the customer. A request like this could be used to add new choices to a variant that has already been created. * If more than one variant needs to be created use the [Create a Product](/api-reference/catalog/catalog-api/products/createproduct) endpoint.
   * @param {module:api/ProductOptionsApi~createOptionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/OptionResponse}
   */


  _createClass(ProductOptionsApi, [{
    key: 'createOption',
    value: function createOption(body, productId, accept, contentType, callback) {
      var postBody = body;

      var pathParams = {
        'product_id': productId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OptionResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/options', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteOptionById operation.
     * @callback module:api/ProductOptionsApi~deleteOptionByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Product Option
     * Deletes a *Variant Option*.
     * @param {module:api/ProductOptionsApi~deleteOptionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteOptionById',
    value: function deleteOptionById(productId, optionId, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'product_id': productId,
        'option_id': optionId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi('/catalog/products/{product_id}/options/{option_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getOptionById operation.
     * @callback module:api/ProductOptionsApi~getOptionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OptionResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Product Option
     * Returns a single *Variant Option*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductOptionsApi~getOptionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OptionResponse1}
     */

  }, {
    key: 'getOptionById',
    value: function getOptionById(productId, optionId, contentType, accept, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'product_id': productId,
        'option_id': optionId
      };
      var queryParams = {
        'include_fields': opts['includeFields'],
        'exclude_fields': opts['excludeFields']
      };
      var headerParams = {
        'Content-Type': contentType,
        'Accept': accept
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OptionResponse4.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/options/{option_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getOptions operation.
     * @callback module:api/ProductOptionsApi~getOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OptionCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all Product Options
     * Returns a list of product *Variant Options*. Optional parameters can be passed in. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductOptionsApi~getOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OptionCollectionResponse}
     */

  }, {
    key: 'getOptions',
    value: function getOptions(productId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'include_fields': opts['includeFields'],
        'exclude_fields': opts['excludeFields']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OptionCollectionResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/options', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateOption operation.
     * @callback module:api/ProductOptionsApi~updateOptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OptionResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Product Option
     * Updates a *Variant Option*.  **Read-Only Fields** * id
     * @param {module:api/ProductOptionsApi~updateOptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OptionResponse2}
     */

  }, {
    key: 'updateOption',
    value: function updateOption(body, productId, optionId, accept, contentType, callback) {
      var postBody = body;

      var pathParams = {
        'product_id': productId,
        'option_id': optionId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OptionResponse6.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/options/{option_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ProductOptionsApi;
}();

exports.default = ProductOptionsApi;