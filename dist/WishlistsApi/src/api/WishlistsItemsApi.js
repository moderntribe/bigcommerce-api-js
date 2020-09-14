'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Wishlist
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ## Wishlist API    The Wishlist API allows a developer to create and manage customer [Wishlists](https://support.bigcommerce.com/s/article/Wishlists). A Wishlist allows you to see what your customers are interested in and saving on the store. With this information you’ll be able to create targeted campaigns to help merchants grow their business. Customer API OAuth scopes give you access to Wishlists API. See [OAuth Scopes](https://developer.bigcommerce.com/api-docs/getting-started/authentication#authentication_oauth-scopes).
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

var _Error = require('../model/Error');

var _Error2 = _interopRequireDefault(_Error);

var _InlineResponse = require('../model/InlineResponse201');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _WishlistItemPost = require('../model/WishlistItemPost1');

var _WishlistItemPost2 = _interopRequireDefault(_WishlistItemPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* WishlistsItems service.
* @module api/WishlistsItemsApi
* @version 3.0
*/
var WishlistsItemsApi = function () {

  /**
  * Constructs a new WishlistsItemsApi. 
  * @alias module:api/WishlistsItemsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WishlistsItemsApi(apiClient) {
    _classCallCheck(this, WishlistsItemsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the wishlistsItemsByIdDelete operation.
   * @callback module:api/WishlistsItemsApi~wishlistsItemsByIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse201} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete Wishlist Item
   * Deletes a Wishlist Item.
   * @param {Object} opts Optional parameters
   * @param {module:api/WishlistsItemsApi~wishlistsItemsByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse201}
   */


  _createClass(WishlistsItemsApi, [{
    key: 'wishlistsItemsByIdDelete',
    value: function wishlistsItemsByIdDelete(wishlistId, itemId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'wishlist_id': wishlistId,
        'item_id': itemId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;

      return this.apiClient.callApi('/wishlists/{wishlist_id}/items/{item_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the wishlistsItemsByIdPost operation.
     * @callback module:api/WishlistsItemsApi~wishlistsItemsByIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Wishlist Item
     * Adds a Wishlist Item. More than one item can be added at a time.
     * @param {Object} opts Optional parameters
     * @param {module:api/WishlistsItemsApi~wishlistsItemsByIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: 'wishlistsItemsByIdPost',
    value: function wishlistsItemsByIdPost(wishlistId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {
        'wishlist_id': wishlistId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;

      return this.apiClient.callApi('/wishlists/{wishlist_id}/items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return WishlistsItemsApi;
}();

exports.default = WishlistsItemsApi;