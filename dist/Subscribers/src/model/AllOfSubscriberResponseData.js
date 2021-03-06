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
* The AllOfSubscriberResponseData model module.
* @module model/AllOfSubscriberResponseData
* @version 3.0
*/
var AllOfSubscriberResponseData = function () {
    /**
    * Constructs a new <code>AllOfSubscriberResponseData</code>.
    * Full subscriber object returned in responses.
    * @alias module:model/AllOfSubscriberResponseData
    * @class
    */

    function AllOfSubscriberResponseData() {
        _classCallCheck(this, AllOfSubscriberResponseData);

        this['id'] = undefined;
        this['date_modified'] = undefined;
        this['date_created'] = undefined;
    }

    /**
    * Constructs a <code>AllOfSubscriberResponseData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfSubscriberResponseData} obj Optional instance to populate.
    * @return {module:model/AllOfSubscriberResponseData} The populated <code>AllOfSubscriberResponseData</code> instance.
    */


    _createClass(AllOfSubscriberResponseData, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AllOfSubscriberResponseData();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('date_modified')) {
                    obj['date_modified'] = _ApiClient2.default.convertToType(data['date_modified'], 'Date');
                }
                if (data.hasOwnProperty('date_created')) {
                    obj['date_created'] = _ApiClient2.default.convertToType(data['date_created'], 'Date');
                }
            }
            return obj;
        }

        /**
        * The unique numeric ID of the subscriber; increments sequentially.
        * @member {Number} id
        */

        /**
        * The date on which the subscriber was modified. 
        * @member {Date} date_modified
        */

        /**
        * The date of which the subscriber was created. 
        * @member {Date} date_created
        */

    }]);

    return AllOfSubscriberResponseData;
}();

exports.default = AllOfSubscriberResponseData;