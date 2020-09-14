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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Route2 model module.
* @module model/Route2
* @version 3.0
*/
var Route2 = function () {
  /**
  * Constructs a new <code>Route2</code>.
  * @alias module:model/Route2
  * @class
  */

  function Route2() {
    _classCallCheck(this, Route2);

    this['id'] = undefined;
    this['type'] = undefined;
    this['matching'] = undefined;
    this['route'] = undefined;
  }

  /**
  * Constructs a <code>Route2</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/Route2} obj Optional instance to populate.
  * @return {module:model/Route2} The populated <code>Route2</code> instance.
  */


  _createClass(Route2, null, [{
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Route2();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('matching')) {
          obj['matching'] = _ApiClient2.default.convertToType(data['matching'], 'String');
        }
        if (data.hasOwnProperty('route')) {
          obj['route'] = _ApiClient2.default.convertToType(data['route'], 'String');
        }
      }
      return obj;
    }

    /**
    * Unique ID for this route. Required when updating an existing route
    * @member {Number} id
    */

    /**
    * What type of resource are we routing to?
    * @member {module:model/Route2.TypeEnum} type
    */

    /**
    * (entity_id?) For a given type, which resources should match this route? e.g For a route with the type: \"product\" and matching: \"5\" this route would be used for the product with the ID of 5.  Depending on the type of resource, this may be an ID (matching a specific item), or a \"*\" wildcard matching all items of that type.
    * @member {String} matching
    */

    /**
    * The route template that will be used to generate the URL for the requested resource.  Supports several tokens: - `{id}` The **ID** of the requested item - `{slug}` The **slug** for the requested item (if available). Note: the `slug` value may contain `/` slash - `{language}` The **language** string that the client is using
    * @member {String} route
    */


    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */

  }]);

  return Route2;
}();

Route2.TypeEnum = {
  /**
   * value: "product"
   * @const
   */
  "product": "product",
  /**
   * value: "brand"
   * @const
   */
  "brand": "brand",
  /**
   * value: "category"
   * @const
   */
  "category": "category",
  /**
   * value: "page"
   * @const
   */
  "page": "page",
  /**
   * value: "blog"
   * @const
   */
  "blog": "blog",
  /**
   * value: "home"
   * @const
   */
  "home": "home",
  /**
   * value: "cart"
   * @const
   */
  "cart": "cart",
  /**
   * value: "checkout"
   * @const
   */
  "checkout": "checkout",
  /**
   * value: "search"
   * @const
   */
  "search": "search",
  /**
   * value: "account"
   * @const
   */
  "account": "account",
  /**
   * value: "login"
   * @const
   */
  "login": "login",
  /**
   * value: "returns"
   * @const
   */
  "returns": "returns",
  /**
   * value: "static"
   * @const
   */
  "static": "static" };
exports.default = Route2;