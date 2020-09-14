'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Scripts
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints)  The BigCommerce Scripts API can be used to add a script to a store's page. Some use cases: * Insert tracking codes * Storefront single click applications * Live chat, support plugins * Theme extension or connector apps  To learn more about Scripts, see [here](/api-docs/scripts/scripts-overview).   ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Checkout Content<sup>1</sup>                             | modify     | `store_content_checkout`                      | | Checkout Content<sup>1</sup>                             | read-only  | `store_content_checkout_read_only`            | | Content                                       | modify     | `store_v2_content`                            | | Content                                       | read-only  | `store_v2_content_read_only`                  |  1. `Checkout Content` scopes are required to create or read scripts on the checkout page.  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Scripts                                 | Add client-side code to a store                                         |
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

var _NoContent = require('../model/NoContent');

var _NoContent2 = _interopRequireDefault(_NoContent);

var _ScriptPost = require('../model/ScriptPost1');

var _ScriptPost2 = _interopRequireDefault(_ScriptPost);

var _ScriptResponse = require('../model/ScriptResponse1');

var _ScriptResponse2 = _interopRequireDefault(_ScriptResponse);

var _ScriptsResponse = require('../model/ScriptsResponse');

var _ScriptsResponse2 = _interopRequireDefault(_ScriptsResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Scripts service.
* @module api/ScriptsApi
* @version 3.0
*/
var ScriptsApi = function () {

  /**
  * Constructs a new ScriptsApi. 
  * @alias module:api/ScriptsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ScriptsApi(apiClient) {
    _classCallCheck(this, ScriptsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createScript operation.
   * @callback module:api/ScriptsApi~createScriptCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ScriptResponse1} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a Script
   * Creates a *Script*.  **Required Fields** * name  **Read Only Fields** * uuid  **Notes** * If kind is &#x60;src&#x60; –- Only the &#x60;src&#x60; property is needed, and you can optionally supply a &#x60;load_method&#x60;. The &#x60;html&#x60; field should not be specified. * If kind is script_tag -- Only the &#x60;script_tag&#x60; is needed. The &#x60;src&#x60; field should not be specified. * Each app can have 10 scripts installed. * Multiple scripts can be created [per call](https://developer.bigcommerce.com/api-docs/storefront/scripts-overview#scripts_scripts-notes). 
   * @param {module:api/ScriptsApi~createScriptCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ScriptResponse1}
   */


  _createClass(ScriptsApi, [{
    key: 'createScript',
    value: function createScript(body, accept, contentType, callback) {
      var postBody = body;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScriptResponse2.default;

      return this.apiClient.callApi('/content/scripts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteScript operation.
     * @callback module:api/ScriptsApi~deleteScriptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NoContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Script
     * Deletes a *Script*.
     * @param {module:api/ScriptsApi~deleteScriptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NoContent}
     */

  }, {
    key: 'deleteScript',
    value: function deleteScript(uuid, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'uuid': uuid
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
      var returnType = _NoContent2.default;

      return this.apiClient.callApi('/content/scripts/{uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getScript operation.
     * @callback module:api/ScriptsApi~getScriptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScriptResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Script
     * Returns a single *Script*.
     * @param {module:api/ScriptsApi~getScriptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScriptResponse1}
     */

  }, {
    key: 'getScript',
    value: function getScript(uuid, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'uuid': uuid
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
      var returnType = _ScriptResponse2.default;

      return this.apiClient.callApi('/content/scripts/{uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getScripts operation.
     * @callback module:api/ScriptsApi~getScriptsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScriptsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Scripts
     * Returns a list of *Scripts*. Optional parameters can be passed in.  This will only return scripts that have been created by the api key and password that created the script originally. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ScriptsApi~getScriptsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScriptsResponse}
     */

  }, {
    key: 'getScripts',
    value: function getScripts(accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'direction': opts['direction']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScriptsResponse2.default;

      return this.apiClient.callApi('/content/scripts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateScript operation.
     * @callback module:api/ScriptsApi~updateScriptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScriptResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Script
     * Updates a *Script*.
     * @param {module:api/ScriptsApi~updateScriptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScriptResponse1}
     */

  }, {
    key: 'updateScript',
    value: function updateScript(body, uuid, contentType, accept, callback) {
      var postBody = body;

      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {};
      var headerParams = {
        'Content-Type': contentType,
        'Accept': accept
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScriptResponse2.default;

      return this.apiClient.callApi('/content/scripts/{uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ScriptsApi;
}();

exports.default = ScriptsApi;