'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Sites
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints) - [Usage Notes](#usage-notes) - [Resources](#resources)  Create and manage sites and routes for headless storefronts.  ## OAuth Scopes | UI Name        | Permission | Parameter               | |----------------|------------|-------------------------| | Sites & Routes | modify     | `store_sites`           | | Sites & Routess| read-only  | `store_sites_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                              | |-----------------------------------------|--------------------------------------------------------------------------| | Channels                                | Create and manage catalog listings and channels                          | | Channel Site                            | Manage sites and routing for headless storefronts                        | | Channel Listings                        | Manage catalog differences among different storefronts or marketplaces   |  ## Usage Notes  **Sites and Site Routes:** * Sites and routes control the paths that make up a headless storefront * Site refers to the domain associated with a channel * Routes point to the URLs for key pages on the headless storefront. They define where the homepage is, where the cart page is, etc. * Sites and routes ensure links point where they’re supposed to and sales are attributed correctly. For example, a shopper’s order confirmation email should link back to Storefront A, where they placed their order, not Storefront B, which they’ve never visited.  ## Resources  ### Related Endpoints * [Channels](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api)
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

var _InlineResponse = require('../model/InlineResponse200');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _PutSite = require('../model/PutSite1');

var _PutSite2 = _interopRequireDefault(_PutSite);

var _PutSite3 = require('../model/PutSite2');

var _PutSite4 = _interopRequireDefault(_PutSite3);

var _Site = require('../model/Site1');

var _Site2 = _interopRequireDefault(_Site);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Sites service.
* @module api/SitesApi
* @version 3.0
*/
var SitesApi = function () {

  /**
  * Constructs a new SitesApi. 
  * @alias module:api/SitesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SitesApi(apiClient) {
    _classCallCheck(this, SitesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the deleteSite operation.
   * @callback module:api/SitesApi~deleteSiteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a Site
   * @param {module:api/SitesApi~deleteSiteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(SitesApi, [{
    key: 'deleteSite',
    value: function deleteSite(siteId, callback) {
      var postBody = null;

      var pathParams = {
        'site_id': siteId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi('/sites/{site_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getSite operation.
     * @callback module:api/SitesApi~getSiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Site
     * Returns site data for given channel.
     * @param {module:api/SitesApi~getSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: 'getSite',
    value: function getSite(siteId, callback) {
      var postBody = null;

      var pathParams = {
        'site_id': siteId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;

      return this.apiClient.callApi('/sites/{site_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the postSite operation.
     * @callback module:api/SitesApi~postSiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Site1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Site
     * Creates a site for provided channel.
     * @param {module:api/SitesApi~postSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Site1}
     */

  }, {
    key: 'postSite',
    value: function postSite(body, callback) {
      var postBody = body;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Site2.default;

      return this.apiClient.callApi('/sites', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the putSite operation.
     * @callback module:api/SitesApi~putSiteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Site
     * Updates a site for provided channel.
     * @param {module:api/SitesApi~putSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'putSite',
    value: function putSite(body, siteId, callback) {
      var postBody = body;

      var pathParams = {
        'site_id': siteId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi('/sites/{site_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the sitesGet operation.
     * @callback module:api/SitesApi~sitesGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all Sites
     * Get all sites for a store.  **Note**: You must specify a value for both page and limit that are &gt;&#x3D; 1 to get data.
     * @param {Object} opts Optional parameters
     * @param {module:api/SitesApi~sitesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'sitesGet',
    value: function sitesGet(page, limit, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {};
      var queryParams = {
        'page': page,
        'limit': limit
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi('/sites', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return SitesApi;
}();

exports.default = SitesApi;