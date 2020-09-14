'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Carts
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ### Cart Allows for a cart to be created using BigCommerce cart logic. The existing BigCommerce front end cart can be bypassed.  Notes: - A **cart** `id` is the same as a **checkout** `id`. - A cart can be created by adding an existing **catalog item** or a **custom item**. - Carts are valid for 30 days from the last modification. This can include creating the cart or editing the cart. - Redirect URLs can be generated only from carts created using the Server to Server Cart API. To restore a cart that was created on the storefront, either by a shopper or the Storefront Cart API, first recreate the cart using the Server to Server Cart API.
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

var _CartCreatePostData = require('../model/CartCreatePostData');

var _CartCreatePostData2 = _interopRequireDefault(_CartCreatePostData);

var _CartFull = require('../model/CartFull1');

var _CartFull2 = _interopRequireDefault(_CartFull);

var _CartUpdatePutRequestData = require('../model/CartUpdatePutRequestData');

var _CartUpdatePutRequestData2 = _interopRequireDefault(_CartUpdatePutRequestData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Cart service.
* @module api/CartApi
* @version 3.0
*/
var CartApi = function () {

  /**
  * Constructs a new CartApi. 
  * @alias module:api/CartApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CartApi(apiClient) {
    _classCallCheck(this, CartApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createACart operation.
   * @callback module:api/CartApi~createACartCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CartFull1} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a Cart
   * Creates a **Cart**.   **Required Fields** |Field|Details| |-|-| |&#x60;line_items&#x60;||  |&#x60;custom_items&#x60;|Only required if adding a custom item to the cart.| |&#x60;gift_certificates&#x60;|Only required if adding a gift certificate to the cart.|  **Usage Notes**  * A **cart** &#x60;id&#x60; (UUID) is returned in the response. * A **cart** &#x60;id&#x60; is the same as a **checkout** &#x60;id&#x60;. * A cart can be created by adding an existing **catalog item** or a **custom item**. * Carts are valid for **30 days** from the **last modification** (this includes creating the cart or editing the cart). * If a product has modifiers, omit the &#x60;variant_id&#x60; and instead use the &#x60;option_selections&#x60; array to describe both the **variant** and the **modifier** selections. * Redirect URLs can only be generated from carts created using the **Server-to-Server Carts API**.  * To get cart &#x60;redirect_urls&#x60; in the response, append the following query parameter to the request URL: &#x60;include&#x3D;redirect_urls&#x60;. * To restore a cart that was created by a shopper or via the Storefront Cart API, first recreate the cart using the Server to Server Cart API.
   * @param {Object} opts Optional parameters
   * @param {module:api/CartApi~createACartCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CartFull1}
   */


  _createClass(CartApi, [{
    key: 'createACart',
    value: function createACart(body, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = body;

      var pathParams = {};
      var queryParams = {
        'include': opts['include']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CartFull2.default;

      return this.apiClient.callApi('/carts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteACart operation.
     * @callback module:api/CartApi~deleteACartCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Cart
     * Deletes a *Cart*. Once a *Cart* has been deleted it can not be recovered.
     * @param {module:api/CartApi~deleteACartCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteACart',
    value: function deleteACart(cartId, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'cartId': cartId
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

      return this.apiClient.callApi('/carts/{cartId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getACart operation.
     * @callback module:api/CartApi~getACartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartFull1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Cart
     * Returns a stores *Cart*.
     * @param {Object} opts Optional parameters
     * @param {module:api/CartApi~getACartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CartFull1}
     */

  }, {
    key: 'getACart',
    value: function getACart(cartId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'cartId': cartId
      };
      var queryParams = {
        'include': opts['include']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CartFull2.default;

      return this.apiClient.callApi('/carts/{cartId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateACart operation.
     * @callback module:api/CartApi~updateACartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartFull1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Customer ID
     * Updates a *Carts* &#x60;customer_id&#x60;.  **Notes**  Changing the *Cart* &#x60;customer_id&#x60; will remove any promotions or shipping on the *Cart*. These are tied to the customer depending on cart conditions and any customer groups. 
     * @param {Object} opts Optional parameters
     * @param {module:api/CartApi~updateACartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CartFull1}
     */

  }, {
    key: 'updateACart',
    value: function updateACart(body, cartId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = body;

      var pathParams = {
        'cartId': cartId
      };
      var queryParams = {
        'include': opts['include']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CartFull2.default;

      return this.apiClient.callApi('/carts/{cartId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return CartApi;
}();

exports.default = CartApi;