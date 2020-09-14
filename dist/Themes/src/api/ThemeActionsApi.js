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

var _Activate = require('../model/Activate1');

var _Activate2 = _interopRequireDefault(_Activate);

var _ErrorResponse = require('../model/ErrorResponse');

var _ErrorResponse2 = _interopRequireDefault(_ErrorResponse);

var _JobId = require('../model/JobId');

var _JobId2 = _interopRequireDefault(_JobId);

var _NoContent = require('../model/NoContent');

var _NoContent2 = _interopRequireDefault(_NoContent);

var _WhichThemeToDownload = require('../model/WhichThemeToDownload');

var _WhichThemeToDownload2 = _interopRequireDefault(_WhichThemeToDownload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* ThemeActions service.
* @module api/ThemeActionsApi
* @version 3.0
*/
var ThemeActionsApi = function () {

  /**
  * Constructs a new ThemeActionsApi. 
  * @alias module:api/ThemeActionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ThemeActionsApi(apiClient) {
    _classCallCheck(this, ThemeActionsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the activateStoreTheme operation.
   * @callback module:api/ThemeActionsApi~activateStoreThemeCallback
   * @param {String} error Error message, if any.
   * @param {module:model/NoContent} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Activate a Theme
   * Actives a store *Theme*.   This returns a 204 response upon success.
   * @param {module:api/ThemeActionsApi~activateStoreThemeCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/NoContent}
   */


  _createClass(ThemeActionsApi, [{
    key: 'activateStoreTheme',
    value: function activateStoreTheme(body, accept, contentType, callback) {
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
      var returnType = _NoContent2.default;

      return this.apiClient.callApi('/themes/actions/activate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the downloadTheme operation.
     * @callback module:api/ThemeActionsApi~downloadThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a Theme
     * Downloads a stores *Theme*.
     * @param {module:api/ThemeActionsApi~downloadThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobId}
     */

  }, {
    key: 'downloadTheme',
    value: function downloadTheme(body, uuid, accept, contentType, callback) {
      var postBody = body;

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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _JobId2.default;

      return this.apiClient.callApi('/themes/{uuid}/actions/download', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ThemeActionsApi;
}();

exports.default = ThemeActionsApi;