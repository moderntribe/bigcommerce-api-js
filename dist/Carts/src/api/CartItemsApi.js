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

var _CartFull = require('../model/CartFull1');

var _CartFull2 = _interopRequireDefault(_CartFull);

var _CartLineItemUpdatePost = require('../model/CartLineItemUpdatePost1');

var _CartLineItemUpdatePost2 = _interopRequireDefault(_CartLineItemUpdatePost);

var _CartLineItemUpdatePost3 = require('../model/CartLineItemUpdatePost2');

var _CartLineItemUpdatePost4 = _interopRequireDefault(_CartLineItemUpdatePost3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* CartItems service.
* @module api/CartItemsApi
* @version 3.0
*/
var CartItemsApi = function () {

  /**
  * Constructs a new CartItemsApi. 
  * @alias module:api/CartItemsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CartItemsApi(apiClient) {
    _classCallCheck(this, CartItemsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the addCartLineItem operation.
   * @callback module:api/CartItemsApi~addCartLineItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CartFull1} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add Cart Line Items
   * Adds line items to the *Cart*.  **Usage Notes**  To add a custom item use &#x60;custom_items&#x60;.   If a product has modifiers, omit the &#x60;variant_id&#x60; and instead use the &#x60;option_selections&#x60; array to describe both the **variant** and the **modifier** selections.
   * @param {Object} opts Optional parameters
   * @param {module:api/CartItemsApi~addCartLineItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CartFull1}
   */


  _createClass(CartItemsApi, [{
    key: 'addCartLineItem',
    value: function addCartLineItem(body, cartId, accept, contentType, opts, callback) {
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

      return this.apiClient.callApi('/carts/{cartId}/items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteCartLineItem operation.
     * @callback module:api/CartItemsApi~deleteCartLineItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartFull1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Cart Line Item
     * Deletes a *Cart* line item.   **Notes**  Removing the last &#x60;line_item&#x60; in the *Cart* deletes the *Cart*.
     * @param {Object} opts Optional parameters
     * @param {module:api/CartItemsApi~deleteCartLineItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CartFull1}
     */

  }, {
    key: 'deleteCartLineItem',
    value: function deleteCartLineItem(cartId, itemId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'cartId': cartId,
        'itemId': itemId
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

      return this.apiClient.callApi('/carts/{cartId}/items/{itemId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateCartLineItem operation.
     * @callback module:api/CartItemsApi~updateCartLineItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartFull1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Cart Line Item
     * Updates a *Cart* line item. Updates an existing, single line item in the cart.   **Notes**  Currently, only updating &#x60;list_price&#x60; and &#x60;quantity&#x60; are supported.   Updating a product&#x27;s &#x60;list_price&#x60; will make that item ineligible for V3 product level promotions.   If the product has modifiers, omit the &#x60;variant_id&#x60; and instead use the &#x60;option_selections&#x60; array to describe both the **variant** and the **modifier** selections.  If a variant needs to be changed or updated, the product will need to be removed and re-added to the cart with the correct variants using the Add Cart Line Items endpoint.
     * @param {Object} opts Optional parameters
     * @param {module:api/CartItemsApi~updateCartLineItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CartFull1}
     */

  }, {
    key: 'updateCartLineItem',
    value: function updateCartLineItem(body, cartId, itemId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = body;

      var pathParams = {
        'cartId': cartId,
        'itemId': itemId
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

      return this.apiClient.callApi('/carts/{cartId}/items/{itemId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return CartItemsApi;
}();

exports.default = CartItemsApi;