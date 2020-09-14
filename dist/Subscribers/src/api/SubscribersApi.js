'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Subscribers
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Customers | modify | `store_v2_customers` | |  Customers | read-only | `store_v2_customers_read_only` |  ### Headers  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### Example  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Content-Type: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  * For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication). 
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

var _NotFound = require('../model/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _SubscriberCollectionResponse = require('../model/SubscriberCollectionResponse');

var _SubscriberCollectionResponse2 = _interopRequireDefault(_SubscriberCollectionResponse);

var _SubscriberPost = require('../model/SubscriberPost1');

var _SubscriberPost2 = _interopRequireDefault(_SubscriberPost);

var _SubscriberPut = require('../model/SubscriberPut1');

var _SubscriberPut2 = _interopRequireDefault(_SubscriberPut);

var _SubscriberResponse = require('../model/SubscriberResponse');

var _SubscriberResponse2 = _interopRequireDefault(_SubscriberResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Subscribers service.
* @module api/SubscribersApi
* @version 3.0
*/
var SubscribersApi = function () {

  /**
  * Constructs a new SubscribersApi. 
  * @alias module:api/SubscribersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SubscribersApi(apiClient) {
    _classCallCheck(this, SubscribersApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createSubscriber operation.
   * @callback module:api/SubscribersApi~createSubscriberCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SubscriberResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a Subscriber
   * Creates a *Subscriber*.  **Required Fields** * email  **Read Only Fields** * id
   * @param {Object} opts Optional parameters
   * @param {module:api/SubscribersApi~createSubscriberCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SubscriberResponse}
   */


  _createClass(SubscribersApi, [{
    key: 'createSubscriber',
    value: function createSubscriber(body, opts, callback) {
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
      var returnType = _SubscriberResponse2.default;

      return this.apiClient.callApi('/customers/subscribers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteSubscriberById operation.
     * @callback module:api/SubscribersApi~deleteSubscriberByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Subscriber
     * Deletes a *Subscriber*.
     * @param {Object} opts Optional parameters
     * @param {module:api/SubscribersApi~deleteSubscriberByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteSubscriberById',
    value: function deleteSubscriberById(subscriberId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'subscriber_id': subscriberId
      };
      var queryParams = {};
      var headerParams = {
        'Content-Type': opts['contentType'],
        'Accept': opts['accept']
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi('/customers/subscribers/{subscriber_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteSubscribers operation.
     * @callback module:api/SubscribersApi~deleteSubscribersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Subscribers
     * By default, it deletes all *Subscribers*. A filter should be added to avoid deleting all subscribers in a store.
     * @param {Object} opts Optional parameters
     * @param {module:api/SubscribersApi~deleteSubscribersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteSubscribers',
    value: function deleteSubscribers(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'email': opts['email'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
        'source': opts['source'],
        'order_id': opts['orderId'],
        'date_created': opts['dateCreated'],
        'date_modified': opts['dateModified']
      };
      var headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi('/customers/subscribers', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getSubscriberById operation.
     * @callback module:api/SubscribersApi~getSubscriberByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Subscriber
     * Returns a *Subscriber*.
     * @param {Object} opts Optional parameters
     * @param {module:api/SubscribersApi~getSubscriberByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriberResponse}
     */

  }, {
    key: 'getSubscriberById',
    value: function getSubscriberById(subscriberId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'subscriber_id': subscriberId
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
      var returnType = _SubscriberResponse2.default;

      return this.apiClient.callApi('/customers/subscribers/{subscriber_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getSubscribers operation.
     * @callback module:api/SubscribersApi~getSubscribersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriberCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Subscribers
     * Returns a list of *Subscribers*. Optional filter parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/SubscribersApi~getSubscribersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriberCollectionResponse}
     */

  }, {
    key: 'getSubscribers',
    value: function getSubscribers(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'email': opts['email'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
        'source': opts['source'],
        'order_id': opts['orderId'],
        'date_created': opts['dateCreated'],
        'date_modified': opts['dateModified'],
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
      var returnType = _SubscriberCollectionResponse2.default;

      return this.apiClient.callApi('/customers/subscribers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateSubscriber operation.
     * @callback module:api/SubscribersApi~updateSubscriberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Subscriber
     * Updates a *Subscriber*.  **Read Only Fields** * id
     * @param {Object} opts Optional parameters
     * @param {module:api/SubscribersApi~updateSubscriberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriberResponse}
     */

  }, {
    key: 'updateSubscriber',
    value: function updateSubscriber(body, subscriberId, opts, callback) {
      opts = opts || {};
      var postBody = body;

      var pathParams = {
        'subscriber_id': subscriberId
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
      var returnType = _SubscriberResponse2.default;

      return this.apiClient.callApi('/customers/subscribers/{subscriber_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return SubscribersApi;
}();

exports.default = SubscribersApi;