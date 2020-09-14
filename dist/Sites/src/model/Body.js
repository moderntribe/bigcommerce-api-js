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

var _SitesMeta = require('./SitesMeta');

var _SitesMeta2 = _interopRequireDefault(_SitesMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Body model module.
* @module model/Body
* @version 3.0
*/
var Body = function () {
    /**
    * Constructs a new <code>Body</code>.
    * @alias module:model/Body
    * @class
    */

    function Body() {
        _classCallCheck(this, Body);

        this['meta'] = undefined;
    }

    /**
    * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body} obj Optional instance to populate.
    * @return {module:model/Body} The populated <code>Body</code> instance.
    */


    _createClass(Body, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Body();

                if (data.hasOwnProperty('meta')) {
                    obj['meta'] = _SitesMeta2.default.constructFromObject(data['meta']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/SitesMeta} meta
        */

    }]);

    return Body;
}();

exports.default = Body;