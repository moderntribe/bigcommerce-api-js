'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Store Information
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ### Store Information Reference The Store Information object, and Get Store Information endpoint, manage store profile settings. A Store Information object represents an individual store’s profile and metadata.  ### System Reference The Get a Timestamp endpoint generates a timestamp ping to check the system status.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _StoreInformation = require('../model/StoreInformation');

var _StoreInformation2 = _interopRequireDefault(_StoreInformation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* StoreInformation service.
* @module api/StoreInformationApi
* @version 2.0
*/
var StoreInformationApi = function () {

  /**
  * Constructs a new StoreInformationApi. 
  * @alias module:api/StoreInformationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StoreInformationApi(apiClient) {
    _classCallCheck(this, StoreInformationApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the storeGet operation.
   * @callback module:api/StoreInformationApi~storeGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/StoreInformation} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Store Information
   * Returns metadata about a store.
   * @param {module:api/StoreInformationApi~storeGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/StoreInformation}
   */


  _createClass(StoreInformationApi, [{
    key: 'storeGet',
    value: function storeGet(accept, contentType, callback) {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['Time', 'application/json', 'Response Schema'];
      var returnType = _StoreInformation2.default;

      return this.apiClient.callApi('/store', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return StoreInformationApi;
}();

exports.default = StoreInformationApi;