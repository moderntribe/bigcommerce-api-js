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

var _MetaFieldCollectionResponse = require('../model/MetaFieldCollectionResponse');

var _MetaFieldCollectionResponse2 = _interopRequireDefault(_MetaFieldCollectionResponse);

var _MetafieldPost = require('../model/MetafieldPost');

var _MetafieldPost2 = _interopRequireDefault(_MetafieldPost);

var _MetafieldPut = require('../model/MetafieldPut1');

var _MetafieldPut2 = _interopRequireDefault(_MetafieldPut);

var _MetafieldResponse = require('../model/MetafieldResponse');

var _MetafieldResponse2 = _interopRequireDefault(_MetafieldResponse);

var _MetafieldResponse3 = require('../model/MetafieldResponse1');

var _MetafieldResponse4 = _interopRequireDefault(_MetafieldResponse3);

var _NotFound = require('../model/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* ProductVariantsMetafields service.
* @module api/ProductVariantsMetafieldsApi
* @version 3.0
*/
var ProductVariantsMetafieldsApi = function () {

  /**
  * Constructs a new ProductVariantsMetafieldsApi. 
  * @alias module:api/ProductVariantsMetafieldsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProductVariantsMetafieldsApi(apiClient) {
    _classCallCheck(this, ProductVariantsMetafieldsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createVariantMetafield operation.
   * @callback module:api/ProductVariantsMetafieldsApi~createVariantMetafieldCallback
   * @param {String} error Error message, if any.
   * @param {module:model/MetafieldResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a Product Variant Metafield
   * Creates a product variant *Metafield*.  **Required Fields:** * permission_set * namespace * key * value  **Read-Only Fields** * id  **Note:** The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
   * @param {module:api/ProductVariantsMetafieldsApi~createVariantMetafieldCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/MetafieldResponse}
   */


  _createClass(ProductVariantsMetafieldsApi, [{
    key: 'createVariantMetafield',
    value: function createVariantMetafield(body, productId, variantId, accept, contentType, callback) {
      var postBody = body;

      var pathParams = {
        'product_id': productId,
        'variant_id': variantId
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
      var returnType = _MetafieldResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/variants/{variant_id}/metafields', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteVariantMetafieldById operation.
     * @callback module:api/ProductVariantsMetafieldsApi~deleteVariantMetafieldByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Variant Metafield
     * Deletes a product variant *Metafield*.
     * @param {module:api/ProductVariantsMetafieldsApi~deleteVariantMetafieldByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteVariantMetafieldById',
    value: function deleteVariantMetafieldById(metafieldId, productId, variantId, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'metafield_id': metafieldId,
        'product_id': productId,
        'variant_id': variantId
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

      return this.apiClient.callApi('/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getVariantMetafieldByProductIdAndVariantId operation.
     * @callback module:api/ProductVariantsMetafieldsApi~getVariantMetafieldByProductIdAndVariantIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetafieldResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Product Variant Metafields
     * Returns a single product variant *Metafield*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductVariantsMetafieldsApi~getVariantMetafieldByProductIdAndVariantIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetafieldResponse1}
     */

  }, {
    key: 'getVariantMetafieldByProductIdAndVariantId',
    value: function getVariantMetafieldByProductIdAndVariantId(metafieldId, productId, variantId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'metafield_id': metafieldId,
        'product_id': productId,
        'variant_id': variantId
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
      var returnType = _MetafieldResponse4.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getVariantMetafieldsByProductIdAndVariantId operation.
     * @callback module:api/ProductVariantsMetafieldsApi~getVariantMetafieldsByProductIdAndVariantIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaFieldCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Product Variant Metafields
     * Returns a list of product variant *Metafields*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductVariantsMetafieldsApi~getVariantMetafieldsByProductIdAndVariantIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaFieldCollectionResponse}
     */

  }, {
    key: 'getVariantMetafieldsByProductIdAndVariantId',
    value: function getVariantMetafieldsByProductIdAndVariantId(productId, variantId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'product_id': productId,
        'variant_id': variantId
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'key': opts['key'],
        'namespace': opts['namespace'],
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
      var returnType = _MetaFieldCollectionResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/variants/{variant_id}/metafields', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateVariantMetafield operation.
     * @callback module:api/ProductVariantsMetafieldsApi~updateVariantMetafieldCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetafieldResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Product Variant Metafields
     * Updates a product variant *Metafield*.  **Required Fields:** * none  **Read-Only Fields** * id * These fields can only be modified by the app (API credentials) that created the metafield:  * namespace  * key  * permission_set  **Usage Notes** * Attempting to modify &#x60;namespace&#x60;, &#x60;key&#x60;, and &#x60;permission_set&#x60; fields using a client ID different from the one used to create those metafields will result in a 403 error message. 
     * @param {module:api/ProductVariantsMetafieldsApi~updateVariantMetafieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetafieldResponse1}
     */

  }, {
    key: 'updateVariantMetafield',
    value: function updateVariantMetafield(body, metafieldId, productId, variantId, accept, contentType, callback) {
      var postBody = body;

      var pathParams = {
        'metafield_id': metafieldId,
        'product_id': productId,
        'variant_id': variantId
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
      var returnType = _MetafieldResponse4.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ProductVariantsMetafieldsApi;
}();

exports.default = ProductVariantsMetafieldsApi;