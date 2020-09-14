'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Subscribers
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Customers | modify | `store_v2_customers` | |  Customers | read-only | `store_v2_customers_read_only` |  ### Headers  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### Example  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Content-Type: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  * For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication). 
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
* The Pagination1 model module.
* @module model/Pagination1
* @version 3.0
*/
var Pagination1 = function () {
    /**
    * Constructs a new <code>Pagination1</code>.
    * Data about the response, including pagination and collection totals.
    * @alias module:model/Pagination1
    * @class
    */

    function Pagination1() {
        _classCallCheck(this, Pagination1);

        this['total'] = undefined;
        this['count'] = undefined;
        this['per_page'] = undefined;
        this['current_page'] = undefined;
        this['total_pages'] = undefined;
        this['links'] = undefined;
    }

    /**
    * Constructs a <code>Pagination1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Pagination1} obj Optional instance to populate.
    * @return {module:model/Pagination1} The populated <code>Pagination1</code> instance.
    */


    _createClass(Pagination1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Pagination1();

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

    return Pagination1;
}();

exports.default = Pagination1;