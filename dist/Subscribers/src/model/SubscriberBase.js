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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SubscriberBase model module.
* @module model/SubscriberBase
* @version 3.0
*/
var SubscriberBase = function () {
    /**
    * Constructs a new <code>SubscriberBase</code>.
    * Common Subscriber properties.
    * @alias module:model/SubscriberBase
    * @class
    */

    function SubscriberBase() {
        _classCallCheck(this, SubscriberBase);

        this['email'] = undefined;
        this['first_name'] = undefined;
        this['last_name'] = undefined;
        this['source'] = undefined;
        this['order_id'] = undefined;
        this['channel_id'] = undefined;
    }

    /**
    * Constructs a <code>SubscriberBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SubscriberBase} obj Optional instance to populate.
    * @return {module:model/SubscriberBase} The populated <code>SubscriberBase</code> instance.
    */


    _createClass(SubscriberBase, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SubscriberBase();

                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
                if (data.hasOwnProperty('first_name')) {
                    obj['first_name'] = _ApiClient2.default.convertToType(data['first_name'], 'String');
                }
                if (data.hasOwnProperty('last_name')) {
                    obj['last_name'] = _ApiClient2.default.convertToType(data['last_name'], 'String');
                }
                if (data.hasOwnProperty('source')) {
                    obj['source'] = _ApiClient2.default.convertToType(data['source'], 'String');
                }
                if (data.hasOwnProperty('order_id')) {
                    obj['order_id'] = _ApiClient2.default.convertToType(data['order_id'], 'Number');
                }
                if (data.hasOwnProperty('channel_id')) {
                    obj['channel_id'] = _ApiClient2.default.convertToType(data['channel_id'], 'Number');
                }
            }
            return obj;
        }

        /**
        * The email of the subscriber. Must be unique. 
        * @member {String} email
        */

        /**
        * The first name of the subscriber. 
        * @member {String} first_name
        */

        /**
        * The last name of the subscriber. 
        * @member {String} last_name
        */

        /**
        * The source of the subscriber. Values are: `storefront`, `order`, or `custom`. 
        * @member {String} source
        */

        /**
        * The ID of the source order, if source was an order. 
        * @member {Number} order_id
        */

        /**
        * The channel ID where the subscriber was created.
        * @member {Number} channel_id
        */

    }]);

    return SubscriberBase;
}();

exports.default = SubscriberBase;