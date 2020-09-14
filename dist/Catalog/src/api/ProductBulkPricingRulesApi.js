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

var _BulkPricingRuleFull = require('../model/BulkPricingRuleFull2');

var _BulkPricingRuleFull2 = _interopRequireDefault(_BulkPricingRuleFull);

var _BulkPricingRuleFull3 = require('../model/BulkPricingRuleFull3');

var _BulkPricingRuleFull4 = _interopRequireDefault(_BulkPricingRuleFull3);

var _ErrorResponse = require('../model/ErrorResponse');

var _ErrorResponse2 = _interopRequireDefault(_ErrorResponse);

var _InlineResponse = require('../model/InlineResponse2005');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('../model/InlineResponse2006');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('../model/InlineResponse2007');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

var _NotFound = require('../model/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* ProductBulkPricingRules service.
* @module api/ProductBulkPricingRulesApi
* @version 3.0
*/
var ProductBulkPricingRulesApi = function () {

  /**
  * Constructs a new ProductBulkPricingRulesApi. 
  * @alias module:api/ProductBulkPricingRulesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProductBulkPricingRulesApi(apiClient) {
    _classCallCheck(this, ProductBulkPricingRulesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createBulkPricingRule operation.
   * @callback module:api/ProductBulkPricingRulesApi~createBulkPricingRuleCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2006} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a Bulk Pricing Rule
   * Creates a *Bulk Pricing Rule*.  **Required Fields** - quantity_min - quantity_max - type - amount  **Read-Only Fields** - id
   * @param {Object} opts Optional parameters
   * @param {module:api/ProductBulkPricingRulesApi~createBulkPricingRuleCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2006}
   */


  _createClass(ProductBulkPricingRulesApi, [{
    key: 'createBulkPricingRule',
    value: function createBulkPricingRule(body, productId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = body;

      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/bulk-pricing-rules', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteBulkPricingRuleById operation.
     * @callback module:api/ProductBulkPricingRulesApi~deleteBulkPricingRuleByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Bulk Pricing Rule
     * Deletes a *Bulk Pricing Rule*.
     * @param {module:api/ProductBulkPricingRulesApi~deleteBulkPricingRuleByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteBulkPricingRuleById',
    value: function deleteBulkPricingRuleById(productId, bulkPricingRuleId, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'product_id': productId,
        'bulk_pricing_rule_id': bulkPricingRuleId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi('/catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getBulkPricingRuleById operation.
     * @callback module:api/ProductBulkPricingRulesApi~getBulkPricingRuleByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Bulk Pricing Rule
     * Returns a single *Bulk Pricing Rule*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductBulkPricingRulesApi~getBulkPricingRuleByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */

  }, {
    key: 'getBulkPricingRuleById',
    value: function getBulkPricingRuleById(productId, bulkPricingRuleId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'product_id': productId,
        'bulk_pricing_rule_id': bulkPricingRuleId
      };
      var queryParams = {
        'include_fields': opts['includeFields'],
        'exclude_fields': opts['excludeFields']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getBulkPricingRules operation.
     * @callback module:api/ProductBulkPricingRulesApi~getBulkPricingRulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Bulk Pricing Rules
     * Returns a list of *Bulk Pricing Rules*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductBulkPricingRulesApi~getBulkPricingRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */

  }, {
    key: 'getBulkPricingRules',
    value: function getBulkPricingRules(productId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'include_fields': opts['includeFields'],
        'exclude_fields': opts['excludeFields'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/bulk-pricing-rules', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateBulkPricingRule operation.
     * @callback module:api/ProductBulkPricingRulesApi~updateBulkPricingRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Bulk Pricing Rule
     * Updates a *Bulk Pricing Rule*.  **Required Fields** * none  **Read-Only Fields** - id
     * @param {module:api/ProductBulkPricingRulesApi~updateBulkPricingRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */

  }, {
    key: 'updateBulkPricingRule',
    value: function updateBulkPricingRule(body, productId, bulkPricingRuleId, accept, contentType, callback) {
      var postBody = body;

      var pathParams = {
        'product_id': productId,
        'bulk_pricing_rule_id': bulkPricingRuleId
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
      var returnType = _InlineResponse6.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ProductBulkPricingRulesApi;
}();

exports.default = ProductBulkPricingRulesApi;