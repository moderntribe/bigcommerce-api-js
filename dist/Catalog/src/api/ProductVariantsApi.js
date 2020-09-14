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

var _ImageResponse = require('../model/ImageResponse');

var _ImageResponse2 = _interopRequireDefault(_ImageResponse);

var _NotFound = require('../model/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ProductVariantPut = require('../model/ProductVariantPut1');

var _ProductVariantPut2 = _interopRequireDefault(_ProductVariantPut);

var _ResourceImage = require('../model/ResourceImage');

var _ResourceImage2 = _interopRequireDefault(_ResourceImage);

var _VariantCollectionResponse = require('../model/VariantCollectionResponse');

var _VariantCollectionResponse2 = _interopRequireDefault(_VariantCollectionResponse);

var _VariantPost = require('../model/VariantPost');

var _VariantPost2 = _interopRequireDefault(_VariantPost);

var _VariantResponse = require('../model/VariantResponse');

var _VariantResponse2 = _interopRequireDefault(_VariantResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* ProductVariants service.
* @module api/ProductVariantsApi
* @version 3.0
*/
var ProductVariantsApi = function () {

  /**
  * Constructs a new ProductVariantsApi. 
  * @alias module:api/ProductVariantsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProductVariantsApi(apiClient) {
    _classCallCheck(this, ProductVariantsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createVariant operation.
   * @callback module:api/ProductVariantsApi~createVariantCallback
   * @param {String} error Error message, if any.
   * @param {module:model/VariantResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a Product Variant
   * Creates a *Product Variant*.   **Required Fields** * sku * option_values  **Read-Only Fields** * id  Variants need to be created one at a time using this endpoint. To use a variant array and create products and variants in the same call use the [Create Products](/api-reference/catalog/catalog-api/products/createproduct) during the initial product creation.
   * @param {module:api/ProductVariantsApi~createVariantCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/VariantResponse}
   */


  _createClass(ProductVariantsApi, [{
    key: 'createVariant',
    value: function createVariant(body, productId, callback) {
      var postBody = body;

      var pathParams = {
        'product_id': productId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _VariantResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/variants', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the createVariantImage operation.
     * @callback module:api/ProductVariantsApi~createVariantImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Variant Image
     * Creates a *Variant Image*.  The image will show on the storefront when the value is selected.   **Required Fields** - image_file: Form posts. Files larger than 1 MB are not accepted - image_url: Any publicly available URL
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductVariantsApi~createVariantImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageResponse}
     */

  }, {
    key: 'createVariantImage',
    value: function createVariantImage(productId, variantId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {
        'product_id': productId,
        'variant_id': variantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'image_url': opts['imageUrl']
      };

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _ImageResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/variants/{variant_id}/image', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteVariantById operation.
     * @callback module:api/ProductVariantsApi~deleteVariantByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Product Variant
     * Deletes a product *Variant*.
     * @param {module:api/ProductVariantsApi~deleteVariantByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteVariantById',
    value: function deleteVariantById(productId, variantId, accept, contentType, callback) {
      var postBody = null;

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
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi('/catalog/products/{product_id}/variants/{variant_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getVariantById operation.
     * @callback module:api/ProductVariantsApi~getVariantByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariantResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Product Variant
     * Returns a single product *Variant*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductVariantsApi~getVariantByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariantResponse}
     */

  }, {
    key: 'getVariantById',
    value: function getVariantById(productId, variantId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
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
      var returnType = _VariantResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/variants/{variant_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getVariantsByProductId operation.
     * @callback module:api/ProductVariantsApi~getVariantsByProductIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariantCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Product Variants
     * Returns a list of product *Variants*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductVariantsApi~getVariantsByProductIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariantCollectionResponse}
     */

  }, {
    key: 'getVariantsByProductId',
    value: function getVariantsByProductId(productId, accept, contentType, opts, callback) {
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
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _VariantCollectionResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/variants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateVariant operation.
     * @callback module:api/ProductVariantsApi~updateVariantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariantResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Product Variant
     * Updates a product *Variant*.
     * @param {module:api/ProductVariantsApi~updateVariantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariantResponse}
     */

  }, {
    key: 'updateVariant',
    value: function updateVariant(body, productId, variantId, accept, contentType, callback) {
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
      var returnType = _VariantResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/variants/{variant_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ProductVariantsApi;
}();

exports.default = ProductVariantsApi;