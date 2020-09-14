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

var _InlineResponse = require('../model/InlineResponse200');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('../model/InlineResponse201');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _WishlistPost = require('../model/WishlistPost1');

var _WishlistPost2 = _interopRequireDefault(_WishlistPost);

var _WishlistPut = require('../model/WishlistPut1');

var _WishlistPut2 = _interopRequireDefault(_WishlistPut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Wishlists service.
* @module api/WishlistsApi
* @version 3.0
*/
var WishlistsApi = function () {

  /**
  * Constructs a new WishlistsApi. 
  * @alias module:api/WishlistsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WishlistsApi(apiClient) {
    _classCallCheck(this, WishlistsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the wishlistsByIdDelete operation.
   * @callback module:api/WishlistsApi~wishlistsByIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a Wishlist
   * Deletes a Wishlist.
   * @param {Object} opts Optional parameters
   * @param {module:api/WishlistsApi~wishlistsByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(WishlistsApi, [{
    key: 'wishlistsByIdDelete',
    value: function wishlistsByIdDelete(wishlistId, opts, callback) {
      opts = opts || {};
      var postBody = null;

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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi('/wishlists/{wishlist_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the wishlistsByIdGet operation.
     * @callback module:api/WishlistsApi~wishlistsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Wishlist
     * Returns a single Wishlist.
     * @param {Object} opts Optional parameters
     * @param {module:api/WishlistsApi~wishlistsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: 'wishlistsByIdGet',
    value: function wishlistsByIdGet(wishlistId, opts, callback) {
      opts = opts || {};
      var postBody = null;

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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4.default;

      return this.apiClient.callApi('/wishlists/{wishlist_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the wishlistsByIdPut operation.
     * @callback module:api/WishlistsApi~wishlistsByIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Wishlist
     * Updates a Wishlist.  Use this endpoint to update an existing wishlist items, change the wishlist name, customer ID or if the wishlist is available publicly.  **Required Fields** * customer_id
     * @param {Object} opts Optional parameters
     * @param {module:api/WishlistsApi~wishlistsByIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: 'wishlistsByIdPut',
    value: function wishlistsByIdPut(body, wishlistId, opts, callback) {
      opts = opts || {};
      var postBody = body;

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
      var returnType = _InlineResponse4.default;

      return this.apiClient.callApi('/wishlists/{wishlist_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the wishlistsGet operation.
     * @callback module:api/WishlistsApi~wishlistsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Wishlists
     * Returns a list of Wishlists. Optional filter parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/WishlistsApi~wishlistsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: 'wishlistsGet',
    value: function wishlistsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'customer_id': opts['customerId'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;

      return this.apiClient.callApi('/wishlists', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the wishlistsPost operation.
     * @callback module:api/WishlistsApi~wishlistsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Wishlist
     * Creates a Wishlist and Wishlist Item. More than one item can be added in the POST.  **Required Fields** * name * customer_id
     * @param {Object} opts Optional parameters
     * @param {module:api/WishlistsApi~wishlistsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: 'wishlistsPost',
    value: function wishlistsPost(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4.default;

      return this.apiClient.callApi('/wishlists', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return WishlistsApi;
}();

exports.default = WishlistsApi;