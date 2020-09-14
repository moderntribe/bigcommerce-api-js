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

var _InlineResponse = require('../model/InlineResponse201');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* CartRedirectURLs service.
* @module api/CartRedirectURLsApi
* @version 3.0
*/
var CartRedirectURLsApi = function () {

  /**
  * Constructs a new CartRedirectURLsApi. 
  * @alias module:api/CartRedirectURLsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CartRedirectURLsApi(apiClient) {
    _classCallCheck(this, CartRedirectURLsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createCartRedirectURL operation.
   * @callback module:api/CartRedirectURLsApi~createCartRedirectURLCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse201} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Cart Redirect URL
   * Creates a **Cart** redirect URL for redirecting a shopper to an already created cart using the &#x60;cartId&#x60;.  **Usage Notes**  * Redirect URLs can also be created via **Create a Cart** requests by appending &#x60;include&#x3D;redirect_urls&#x60;. * A **Carts** redirect URLs may only be used once.  * Once a redirect URL has been visited, it will be invalidated and cannot be used again.  * If your application requires URLs to be visited more than once, consider generating a fresh one each time you need to restore a cart, and redirecting to the URL from your own application. * Redirect URLs can be generated only from carts created using the Server to Server Cart API.  * To restore a cart that was created on the storefront, either by a shopper or the Storefront Cart API, first recreate the cart using the Server to Server Cart API.
   * @param {module:api/CartRedirectURLsApi~createCartRedirectURLCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse201}
   */


  _createClass(CartRedirectURLsApi, [{
    key: 'createCartRedirectURL',
    value: function createCartRedirectURL(cartId, accept, contentType, callback) {
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
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;

      return this.apiClient.callApi('/carts/{cartId}/redirect_urls', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return CartRedirectURLsApi;
}();

exports.default = CartRedirectURLsApi;