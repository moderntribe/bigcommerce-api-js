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

var _InlineResponse = require('../model/InlineResponse2001');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('../model/InlineResponse422');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('../model/InlineResponse4221');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

var _Route = require('../model/Route1');

var _Route2 = _interopRequireDefault(_Route);

var _Route3 = require('../model/Route2');

var _Route4 = _interopRequireDefault(_Route3);

var _Route5 = require('../model/Route3');

var _Route6 = _interopRequireDefault(_Route5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* SiteRoutes service.
* @module api/SiteRoutesApi
* @version 3.0
*/
var SiteRoutesApi = function () {

  /**
  * Constructs a new SiteRoutesApi. 
  * @alias module:api/SiteRoutesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SiteRoutesApi(apiClient) {
    _classCallCheck(this, SiteRoutesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the deleteRoute operation.
   * @callback module:api/SiteRoutesApi~deleteRouteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a Site Route
   * @param {module:api/SiteRoutesApi~deleteRouteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(SiteRoutesApi, [{
    key: 'deleteRoute',
    value: function deleteRoute(siteId, routeId, callback) {
      var postBody = null;

      var pathParams = {
        'site_id': siteId,
        'route_id': routeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi('/sites/{site_id}/routes/{route_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getSiteRoute operation.
     * @callback module:api/SiteRoutesApi~getSiteRouteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Route2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Site Route
     * @param {module:api/SiteRoutesApi~getSiteRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Route2}
     */

  }, {
    key: 'getSiteRoute',
    value: function getSiteRoute(siteId, routeId, callback) {
      var postBody = null;

      var pathParams = {
        'site_id': siteId,
        'route_id': routeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json', 'Example 1'];
      var returnType = _Route4.default;

      return this.apiClient.callApi('/sites/{site_id}/routes/{route_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the indexSiteRoutes operation.
     * @callback module:api/SiteRoutesApi~indexSiteRoutesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all Site Routes
     * @param {Object} opts Optional parameters
     * @param {module:api/SiteRoutesApi~indexSiteRoutesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */

  }, {
    key: 'indexSiteRoutes',
    value: function indexSiteRoutes(siteId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'site_id': siteId
      };
      var queryParams = {
        'type': opts['type']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;

      return this.apiClient.callApi('/sites/{site_id}/routes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the postSiteRoute operation.
     * @callback module:api/SiteRoutesApi~postSiteRouteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Route2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Site Route
     * Currently, within BigCommerce, we support the following route types (meaning we will redirect shoppers back to given routes for these):  * Type: \&quot;home\&quot; * Type: \&quot;product\&quot; * Type: \&quot;cart\&quot; * Type: \&quot;checkout\&quot; * Type: \&quot;account_order_status\&quot; (for order statuses on an account) * Type: \&quot;account_new_return\&quot; (for returns on an account) * Type: \&quot;unsubscribe\&quot; (for unsubscribe URL in emails) * Type: \&quot;recover_abandoned_cart\&quot; (for URL in emails for a shopper to recover their abandoned cart) * Type: \&quot;create_account\&quot; * Type: \&quot;forgot_password\&quot; * Type: \&quot;order_confirmation\&quot; (supported in future update to override order confirmation page)   
     * @param {module:api/SiteRoutesApi~postSiteRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Route2}
     */

  }, {
    key: 'postSiteRoute',
    value: function postSiteRoute(body, siteId, callback) {
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
      var returnType = _Route4.default;

      return this.apiClient.callApi('/sites/{site_id}/routes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the putSiteRoute operation.
     * @callback module:api/SiteRoutesApi~putSiteRouteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Route3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Site Route
     * @param {module:api/SiteRoutesApi~putSiteRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Route3}
     */

  }, {
    key: 'putSiteRoute',
    value: function putSiteRoute(body, siteId, routeId, callback) {
      var postBody = body;

      var pathParams = {
        'site_id': siteId,
        'route_id': routeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'Example 1'];
      var returnType = _Route6.default;

      return this.apiClient.callApi('/sites/{site_id}/routes/{route_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the sitesSiteIdRoutesPut operation.
     * @callback module:api/SiteRoutesApi~sitesSiteIdRoutesPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Site Routes
     * Upsert of routes for a site.  When updating an existing route, you **must** provide the id in the route object.
     * @param {Object} opts Optional parameters
     * @param {module:api/SiteRoutesApi~sitesSiteIdRoutesPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'sitesSiteIdRoutesPut',
    value: function sitesSiteIdRoutesPut(siteId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {
        'site_id': siteId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi('/sites/{site_id}/routes', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return SiteRoutesApi;
}();

exports.default = SiteRoutesApi;