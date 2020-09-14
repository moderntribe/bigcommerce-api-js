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

var _CollectionMeta = require('./CollectionMeta');

var _CollectionMeta2 = _interopRequireDefault(_CollectionMeta);

var _SubscriberBase = require('./SubscriberBase');

var _SubscriberBase2 = _interopRequireDefault(_SubscriberBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SubscriberCollectionResponse model module.
* @module model/SubscriberCollectionResponse
* @version 3.0
*/
var SubscriberCollectionResponse = function () {
    /**
    * Constructs a new <code>SubscriberCollectionResponse</code>.
    * Response payload for the BigCommerce API. 
    * @alias module:model/SubscriberCollectionResponse
    * @class
    */

    function SubscriberCollectionResponse() {
        _classCallCheck(this, SubscriberCollectionResponse);

        this['data'] = undefined;
        this['meta'] = undefined;
    }

    /**
    * Constructs a <code>SubscriberCollectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SubscriberCollectionResponse} obj Optional instance to populate.
    * @return {module:model/SubscriberCollectionResponse} The populated <code>SubscriberCollectionResponse</code> instance.
    */


    _createClass(SubscriberCollectionResponse, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SubscriberCollectionResponse();

                if (data.hasOwnProperty('data')) {
                    obj['data'] = _ApiClient2.default.convertToType(data['data'], [_SubscriberBase2.default]);
                }
                if (data.hasOwnProperty('meta')) {
                    obj['meta'] = _CollectionMeta2.default.constructFromObject(data['meta']);
                }
            }
            return obj;
        }

        /**
        * @member {Array.<module:model/SubscriberBase>} data
        */

        /**
        * @member {module:model/CollectionMeta} meta
        */

    }]);

    return SubscriberCollectionResponse;
}();

exports.default = SubscriberCollectionResponse;