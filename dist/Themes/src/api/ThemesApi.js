'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Themes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication)  With BigCommerce's V3 REST API Theme endpoints, developers can: * backup themes * restore themes * download themes * activate themes * get status of theme jobs * read theme configurations  ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Themes                                       | modify     | `store_themes_manage`                         |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).
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

var _JobId = require('../model/JobId');

var _JobId2 = _interopRequireDefault(_JobId);

var _ThemeResponse = require('../model/ThemeResponse');

var _ThemeResponse2 = _interopRequireDefault(_ThemeResponse);

var _ThemesCollectionResponse = require('../model/ThemesCollectionResponse');

var _ThemesCollectionResponse2 = _interopRequireDefault(_ThemesCollectionResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Themes service.
* @module api/ThemesApi
* @version 3.0
*/
var ThemesApi = function () {

  /**
  * Constructs a new ThemesApi. 
  * @alias module:api/ThemesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ThemesApi(apiClient) {
    _classCallCheck(this, ThemesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the deleteStoreTheme operation.
   * @callback module:api/ThemesApi~deleteStoreThemeCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a Theme
   * Deletes a store *Theme*. Theme variations can not be deleted using this endpoint. This will delete the theme and all variations.
   * @param {module:api/ThemesApi~deleteStoreThemeCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ThemesApi, [{
    key: 'deleteStoreTheme',
    value: function deleteStoreTheme(uuid, accept, contentType, callback) {
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
      var returnType = null;

      return this.apiClient.callApi('/themes/{uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getStoreTheme operation.
     * @callback module:api/ThemesApi~getStoreThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ThemeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Theme
     * Returns a store *Theme*. The theme variation is not available at this endpoint.
     * @param {module:api/ThemesApi~getStoreThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ThemeResponse}
     */

  }, {
    key: 'getStoreTheme',
    value: function getStoreTheme(uuid, accept, contentType, callback) {
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
      var returnType = _ThemeResponse2.default;

      return this.apiClient.callApi('/themes/{uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getStoreThemes operation.
     * @callback module:api/ThemesApi~getStoreThemesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ThemesCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all Themes
     * Returns a list of store *Themes*.
     * @param {module:api/ThemesApi~getStoreThemesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ThemesCollectionResponse}
     */

  }, {
    key: 'getStoreThemes',
    value: function getStoreThemes(accept, contentType, callback) {
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
      var accepts = ['application/json'];
      var returnType = _ThemesCollectionResponse2.default;

      return this.apiClient.callApi('/themes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the uploadTheme operation.
     * @callback module:api/ThemesApi~uploadThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a Theme
     * Uploads a new *Theme* to your BigCommerce store.  **Required Fields** * file
     * @param {module:api/ThemesApi~uploadThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobId}
     */

  }, {
    key: 'uploadTheme',
    value: function uploadTheme(file, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {
        'file': file
      };

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _JobId2.default;

      return this.apiClient.callApi('/themes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ThemesApi;
}();

exports.default = ThemesApi;