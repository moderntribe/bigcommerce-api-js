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

var _Body = require('../model/Body');

var _Body2 = _interopRequireDefault(_Body);

var _ErrorResponse = require('../model/ErrorResponse');

var _ErrorResponse2 = _interopRequireDefault(_ErrorResponse);

var _InlineResponse = require('../model/InlineResponse200');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _NotFound = require('../model/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ProductPut = require('../model/ProductPut1');

var _ProductPut2 = _interopRequireDefault(_ProductPut);

var _ProductResponse = require('../model/ProductResponse');

var _ProductResponse2 = _interopRequireDefault(_ProductResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Products service.
* @module api/ProductsApi
* @version 3.0
*/
var ProductsApi = function () {

  /**
  * Constructs a new ProductsApi. 
  * @alias module:api/ProductsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProductsApi(apiClient) {
    _classCallCheck(this, ProductsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createProduct operation.
   * @callback module:api/ProductsApi~createProductCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ProductResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a Product
   * Creates a *Product*. Only one product can be created at a time.  **Required Fields:** - &#x60;name&#x60; - &#x60;type&#x60; - &#x60;weight&#x60; - &#x60;category&#x60; - &#x60;price&#x60;  **Read-Only Fields** - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;date_modified&#x60; - &#x60;calculated_price&#x60; - &#x60;base_variant_id&#x60;  **Usage Notes** * &#x60;POST&#x60; requests to &#x60;/products&#x60; accepts a single &#x60;video&#x60; object; to send an array of video objects, see: &#x60;/products/{product_id}/videos&#x60;
   * @param {Object} opts Optional parameters
   * @param {module:api/ProductsApi~createProductCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ProductResponse}
   */


  _createClass(ProductsApi, [{
    key: 'createProduct',
    value: function createProduct(body, contentType, accept, opts, callback) {
      opts = opts || {};
      var postBody = body;

      var pathParams = {};
      var queryParams = {
        'include_fields': opts['includeFields']
      };
      var headerParams = {
        'Content-Type': contentType,
        'Accept': accept
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProductResponse2.default;

      return this.apiClient.callApi('/catalog/products', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteProductById operation.
     * @callback module:api/ProductsApi~deleteProductByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Product
     * Deletes a *Product*.
     * @param {module:api/ProductsApi~deleteProductByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteProductById',
    value: function deleteProductById(productId, accept, contentType, callback) {
      var postBody = null;

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
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi('/catalog/products/{product_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteProducts operation.
     * @callback module:api/ProductsApi~deleteProductsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Products
     * To delete *Product* objects, you must include a filter. This prevents inadvertently deleting all *Product* objects in a store.  **Example**: To delete products with the id&#x27;s of 1,2 and 3, use &#x60;DELETE /v3/catalog/products?id:in&#x3D;1,2,3&#x60;.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductsApi~deleteProductsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteProducts',
    value: function deleteProducts(accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'name': opts['name'],
        'sku': opts['sku'],
        'price': opts['price'],
        'weight': opts['weight'],
        'condition': opts['condition'],
        'brand_id': opts['brandId'],
        'date_modified': opts['dateModified'],
        'date_last_imported': opts['dateLastImported'],
        'is_visible': opts['isVisible'],
        'is_featured': opts['isFeatured'],
        'inventory_level': opts['inventoryLevel'],
        'total_sold': opts['totalSold'],
        'type': opts['type'],
        'categories': opts['categories'],
        'keyword': opts['keyword']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi('/catalog/products', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getProductById operation.
     * @callback module:api/ProductsApi~getProductByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Product
     * Returns a single *Product*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductsApi~getProductByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductResponse}
     */

  }, {
    key: 'getProductById',
    value: function getProductById(productId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'include': opts['include'],
        'include_fields': opts['includeFields'],
        'exclude_fields': opts['excludeFields'],
        'price_list_id': opts['priceListId']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProductResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getProducts operation.
     * @callback module:api/ProductsApi~getProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Products
     * Returns a list of **Products**. Optional filter parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductsApi~getProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: 'getProducts',
    value: function getProducts(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'id': opts['id'],
        'name': opts['name'],
        'sku': opts['sku'],
        'upc': opts['upc'],
        'price': opts['price'],
        'weight': opts['weight'],
        'condition': opts['condition'],
        'brand_id': opts['brandId'],
        'date_modified': opts['dateModified'],
        'date_last_imported': opts['dateLastImported'],
        'is_visible': opts['isVisible'],
        'is_featured': opts['isFeatured'],
        'is_free_shipping': opts['isFreeShipping'],
        'inventory_level': opts['inventoryLevel'],
        'inventory_low': opts['inventoryLow'],
        'out_of_stock': opts['outOfStock'],
        'total_sold': opts['totalSold'],
        'type': opts['type'],
        'categories': opts['categories'],
        'keyword': opts['keyword'],
        'keyword_context': opts['keywordContext'],
        'status': opts['status'],
        'include': opts['include'],
        'include_fields': opts['includeFields'],
        'exclude_fields': opts['excludeFields'],
        'availability': opts['availability'],
        'price_list_id': opts['priceListId'],
        'page': opts['page'],
        'limit': opts['limit'],
        'direction': opts['direction'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;

      return this.apiClient.callApi('/catalog/products', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback module:api/ProductsApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Product
     * Updates a *Product*.  **Read-Only Fields** - id - date_created - date_modified - calculated_price - base_variant_id 
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductsApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductResponse}
     */

  }, {
    key: 'updateProduct',
    value: function updateProduct(body, productId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = body;

      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'include_fields': opts['includeFields']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProductResponse2.default;

      return this.apiClient.callApi('/catalog/products/{product_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateProducts operation.
     * @callback module:api/ProductsApi~updateProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Products (Batch)
     * Updates products in batches. At the time of writing, batches are limited to 10 products.  **Required Fields** * &#x60;id&#x60; - product &#x60;id&#x60; is required for batch updates to products.  **Read-Only Fields** - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;date_modified&#x60; - &#x60;calculated_price&#x60; - &#x60;base_variant_id&#x60;
     * @param {Object} opts Optional parameters
     * @param {module:api/ProductsApi~updateProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: 'updateProducts',
    value: function updateProducts(accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {};
      var queryParams = {
        'include_fields': opts['includeFields']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;

      return this.apiClient.callApi('/catalog/products', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ProductsApi;
}();

exports.default = ProductsApi;