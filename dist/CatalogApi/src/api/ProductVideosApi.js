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

var _NotFound = require('../model/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ProductVideoCollectionResponse = require('../model/ProductVideoCollectionResponse');

var _ProductVideoCollectionResponse2 = _interopRequireDefault(_ProductVideoCollectionResponse);

var _ProductVideoPost = require('../model/ProductVideoPost');

var _ProductVideoPost2 = _interopRequireDefault(_ProductVideoPost);

var _ProductVideoPut = require('../model/ProductVideoPut');

var _ProductVideoPut2 = _interopRequireDefault(_ProductVideoPut);

var _ProductVideoResponse = require('../model/ProductVideoResponse');

var _ProductVideoResponse2 = _interopRequireDefault(_ProductVideoResponse);

var _ProductVideoResponse3 = require('../model/ProductVideoResponse1');

var _ProductVideoResponse4 = _interopRequireDefault(_ProductVideoResponse3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* ProductVideos service.
* @module api/ProductVideosApi
* @version 3.0
*/
var ProductVideosApi = function () {

  /**
  * Constructs a new ProductVideosApi. 
  * @alias module:api/ProductVideosApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProductVideosApi(apiClient) {
    _classCallCheck(this, ProductVideosApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createProductVideo operation.
   * @callback module:api/ProductVideosApi~createProductVideoCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ProductVideoResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a Product Video
   * Creates a *Product Video*.  **Required Fields** * video_id - Example: https://www.youtube.com/watch?v&#x3D;&#x60;R12345677&#x60;  **Read-Only Fields** * id  Publicly accessible URLs are valid parameters. Videos must be loaded through YouTube at this time. 
   * @param {module:api/ProductVideosApi~createProductVideoCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ProductVideoResponse}
   */


  _createClass(ProductVideosApi, [{
    key: 'createProductVideo',
    value: function createProductVideo(body, productId, accept, contentType, callback) {
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
      var returnType = _ProductVideoResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/videos', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteProductVideo operation.
     * @callback module:api/ProductVideosApi~deleteProductVideoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Product Video
     * Deletes a *Product Video*.
     * @param {module:api/ProductVideosApi~deleteProductVideoCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteProductVideo',
    value: function deleteProductVideo(productId, id, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'product_id': productId,
        'id': id
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

      return this.apiClient.callApi('/catalog/products/{product_id}/videos/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getProductVideoById operation.
     * @callback module:api/ProductVideosApi~getProductVideoByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductVideoResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Product Video
     * Returns a single *Product Video*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductVideosApi~getProductVideoByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductVideoResponse1}
     */

  }, {
    key: 'getProductVideoById',
    value: function getProductVideoById(productId, id, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'product_id': productId,
        'id': id
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
      var returnType = _ProductVideoResponse4.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/videos/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getProductVideos operation.
     * @callback module:api/ProductVideosApi~getProductVideosCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductVideoCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Product Videos
     * Returns a list of *Product Videos*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductVideosApi~getProductVideosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductVideoCollectionResponse}
     */

  }, {
    key: 'getProductVideos',
    value: function getProductVideos(productId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'product_id': productId
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
      var returnType = _ProductVideoCollectionResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/videos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateProductVideo operation.
     * @callback module:api/ProductVideosApi~updateProductVideoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductVideoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Product Video
     * Updates a *Product Video.  **Required Fields** * none  **Read-Only Fields** * id
     * @param {module:api/ProductVideosApi~updateProductVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductVideoResponse}
     */

  }, {
    key: 'updateProductVideo',
    value: function updateProductVideo(body, productId, id, accept, contentType, callback) {
      var postBody = body;

      var pathParams = {
        'product_id': productId,
        'id': id
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
      var returnType = _ProductVideoResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}/videos/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ProductVideosApi;
}();

exports.default = ProductVideosApi;