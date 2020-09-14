'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Widgets
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Widgets API allows developers to programatically inject content into a BigCommerce theme. To learn how to use Widgets, see our [Widgets Overview](/api-docs/storefront/widgets/widgets-overview).
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

var _ErrorBase = require('../model/ErrorBase1');

var _ErrorBase2 = _interopRequireDefault(_ErrorBase);

var _InlineResponse = require('../model/InlineResponse2003');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('../model/InlineResponse2004');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _PlacementPost = require('../model/PlacementPost1');

var _PlacementPost2 = _interopRequireDefault(_PlacementPost);

var _PlacementPut = require('../model/PlacementPut1');

var _PlacementPut2 = _interopRequireDefault(_PlacementPut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Placement service.
* @module api/PlacementApi
* @version 3.0
*/
var PlacementApi = function () {

  /**
  * Constructs a new PlacementApi. 
  * @alias module:api/PlacementApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PlacementApi(apiClient) {
    _classCallCheck(this, PlacementApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createPlacement operation.
   * @callback module:api/PlacementApi~createPlacementCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2004} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a Placement
   * Creates a **Placement**.
   * @param {Object} opts Optional parameters
   * @param {module:api/PlacementApi~createPlacementCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2004}
   */


  _createClass(PlacementApi, [{
    key: 'createPlacement',
    value: function createPlacement(body, opts, callback) {
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

      return this.apiClient.callApi('/content/placements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deletePlacement operation.
     * @callback module:api/PlacementApi~deletePlacementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Placement
     * Deletes a **Placement**.
     * @param {Object} opts Optional parameters
     * @param {module:api/PlacementApi~deletePlacementCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deletePlacement',
    value: function deletePlacement(uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'uuid': uuid
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

      return this.apiClient.callApi('/content/placements/{uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getPlacement operation.
     * @callback module:api/PlacementApi~getPlacementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Placement
     * Returns a single **Placement**.
     * @param {Object} opts Optional parameters
     * @param {module:api/PlacementApi~getPlacementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */

  }, {
    key: 'getPlacement',
    value: function getPlacement(uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'uuid': uuid
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

      return this.apiClient.callApi('/content/placements/{uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getPlacements operation.
     * @callback module:api/PlacementApi~getPlacementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Placements
     * Returns a list of **Placements**. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/PlacementApi~getPlacementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */

  }, {
    key: 'getPlacements',
    value: function getPlacements(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'widget_template_kind': opts['widgetTemplateKind'],
        'template_file': opts['templateFile'],
        'widget_uuid': opts['widgetUuid'],
        'widget_template_uuid': opts['widgetTemplateUuid']
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

      return this.apiClient.callApi('/content/placements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updatePlacement operation.
     * @callback module:api/PlacementApi~updatePlacementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Placement
     * Updates a **Placement**.
     * @param {Object} opts Optional parameters
     * @param {module:api/PlacementApi~updatePlacementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */

  }, {
    key: 'updatePlacement',
    value: function updatePlacement(body, uuid, opts, callback) {
      opts = opts || {};
      var postBody = body;

      var pathParams = {
        'uuid': uuid
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

      return this.apiClient.callApi('/content/placements/{uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return PlacementApi;
}();

exports.default = PlacementApi;