'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Orders V2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * `/orders`endpoints integrate with point-of-sale, shipping, distribution, and inventory-management systems.  ## Order The Order object contains a record of the purchase agreement between a shopper and a merchant. To learn more about creating orders, see [Orders API Guide](/api-docs/orders/orders-api-overview).  ### Currency Fields  * `currency_code` - the display currency used to present prices to the shopper on the storefront. * `currency_exchange_rate`: the exchange rate between the store's default currency and the display currency; when the order is created by means of the V2 endpoints, this value is always 1 (only in the storefront this value can be different to 1).  The following additional fields are returned on orders when Multi-Currency is enabled on the store:  * `store_default_currency_code` - the store's default currency * `store_default_to_transactional_exchange_rate` - the exchange rate between the store's default currency and the transactional currency used in the order.  **Example:**  ```json {   //...   \"currency_id\": 4,   \"currency_code\": \"EUR\",   \"currency_exchange_rate\": 1,   \"default_currency_id\": 4,   \"default_currency_code\": \"EUR\",   \"store_default_currency_code: \"USD\",   \"store_default_to_transactional_exchange_rate\": \"100.0000000000\"   //... }  ```  ## Order Coupons Coupon code applied to an order.  ## Order Messages Messages associated with an order.  ## Order Products Product line items belonging to an order.  ## Order Shipping Addresses Customer shipping address belonging to an order.  ## Order Statuses Each order status represents a state in the order-fulfillment workflow.  ## Order Taxes Each tax applied to an order. This information can be useful for reporting purposes. All values are read-only.  ## Order Shipments Tracks a package consignment from an order that is shipped from the seller to the buyer.  ## Order Shipping Addresses Quotes Read Only. Gets all shipping quotes from an order.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 2.0
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
* The InlineResponse200 model module.
* @module model/InlineResponse200
* @version 2.0
*/
var InlineResponse200 = function () {
    /**
    * Constructs a new <code>InlineResponse200</code>.
    * @alias module:model/InlineResponse200
    * @class
    */

    function InlineResponse200() {
        _classCallCheck(this, InlineResponse200);

        this['id'] = undefined;
        this['order_id'] = undefined;
        this['staff_id'] = undefined;
        this['customer_id'] = undefined;
        this['type'] = undefined;
        this['subject'] = undefined;
        this['message'] = undefined;
        this['status'] = undefined;
        this['is_flagged'] = undefined;
        this['date_created'] = undefined;
        this['customer'] = undefined;
    }

    /**
    * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse200} obj Optional instance to populate.
    * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
    */


    _createClass(InlineResponse200, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new InlineResponse200();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('order_id')) {
                    obj['order_id'] = _ApiClient2.default.convertToType(data['order_id'], 'Number');
                }
                if (data.hasOwnProperty('staff_id')) {
                    obj['staff_id'] = _ApiClient2.default.convertToType(data['staff_id'], 'Number');
                }
                if (data.hasOwnProperty('customer_id')) {
                    obj['customer_id'] = _ApiClient2.default.convertToType(data['customer_id'], 'Number');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('subject')) {
                    obj['subject'] = _ApiClient2.default.convertToType(data['subject'], 'String');
                }
                if (data.hasOwnProperty('message')) {
                    obj['message'] = _ApiClient2.default.convertToType(data['message'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('is_flagged')) {
                    obj['is_flagged'] = _ApiClient2.default.convertToType(data['is_flagged'], 'Boolean');
                }
                if (data.hasOwnProperty('date_created')) {
                    obj['date_created'] = _ApiClient2.default.convertToType(data['date_created'], 'String');
                }
                if (data.hasOwnProperty('customer')) {
                    obj['customer'] = _ApiClient2.default.convertToType(data['customer'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {Number} id
        */

        /**
        * @member {Number} order_id
        */

        /**
        * @member {Number} staff_id
        */

        /**
        * @member {Number} customer_id
        */

        /**
        * @member {String} type
        */

        /**
        * @member {String} subject
        */

        /**
        * @member {String} message
        */

        /**
        * @member {String} status
        */

        /**
        * @member {Boolean} is_flagged
        */

        /**
        * @member {String} date_created
        */

        /**
        * @member {String} customer
        */

    }]);

    return InlineResponse200;
}();

exports.default = InlineResponse200;