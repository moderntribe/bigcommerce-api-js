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

var _Pagination1Links = require('./Pagination1Links');

var _Pagination1Links2 = _interopRequireDefault(_Pagination1Links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Pagination model module.
* @module model/Pagination
* @version 3.0
*/
var Pagination = function () {
    /**
    * Constructs a new <code>Pagination</code>.
    * Data about the response, including pagination and collection totals. 
    * @alias module:model/Pagination
    * @class
    */

    function Pagination() {
        _classCallCheck(this, Pagination);

        this['total'] = undefined;
        this['count'] = undefined;
        this['per_page'] = undefined;
        this['current_page'] = undefined;
        this['total_pages'] = undefined;
        this['links'] = undefined;
    }

    /**
    * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Pagination} obj Optional instance to populate.
    * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
    */


    _createClass(Pagination, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Pagination();

                if (data.hasOwnProperty('total')) {
                    obj['total'] = _ApiClient2.default.convertToType(data['total'], 'Number');
                }
                if (data.hasOwnProperty('count')) {
                    obj['count'] = _ApiClient2.default.convertToType(data['count'], 'Number');
                }
                if (data.hasOwnProperty('per_page')) {
                    obj['per_page'] = _ApiClient2.default.convertToType(data['per_page'], 'Number');
                }
                if (data.hasOwnProperty('current_page')) {
                    obj['current_page'] = _ApiClient2.default.convertToType(data['current_page'], 'Number');
                }
                if (data.hasOwnProperty('total_pages')) {
                    obj['total_pages'] = _ApiClient2.default.convertToType(data['total_pages'], 'Number');
                }
                if (data.hasOwnProperty('links')) {
                    obj['links'] = _Pagination1Links2.default.constructFromObject(data['links']);
                }
            }
            return obj;
        }

        /**
        * Total number of items in the result set. 
        * @member {Number} total
        */

        /**
        * Total number of items in the collection response. 
        * @member {Number} count
        */

        /**
        * The amount of items returned in the collection per page, controlled by the limit parameter. 
        * @member {Number} per_page
        */

        /**
        * The page you are currently on within the collection. 
        * @member {Number} current_page
        */

        /**
        * The total number of pages in the collection. 
        * @member {Number} total_pages
        */

        /**
        * @member {module:model/Pagination1Links} links
        */

    }]);

    return Pagination;
}();

exports.default = Pagination;