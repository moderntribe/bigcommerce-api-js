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
* The ShippingQuotesBase1 model module.
* @module model/ShippingQuotesBase1
* @version 2.0
*/
var ShippingQuotesBase1 = function () {
    /**
    * Constructs a new <code>ShippingQuotesBase1</code>.
    * @alias module:model/ShippingQuotesBase1
    * @class
    */

    function ShippingQuotesBase1() {
        _classCallCheck(this, ShippingQuotesBase1);

        this['id'] = undefined;
        this['uuid'] = undefined;
        this['timestamp'] = undefined;
        this['shipping_provider_id'] = undefined;
        this['shipping_provider_quote'] = undefined;
        this['provider_code'] = undefined;
        this['carrier_code'] = undefined;
        this['rate_code'] = undefined;
        this['rate_id'] = undefined;
        this['method_id'] = undefined;
    }

    /**
    * Constructs a <code>ShippingQuotesBase1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShippingQuotesBase1} obj Optional instance to populate.
    * @return {module:model/ShippingQuotesBase1} The populated <code>ShippingQuotesBase1</code> instance.
    */


    _createClass(ShippingQuotesBase1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ShippingQuotesBase1();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('uuid')) {
                    obj['uuid'] = _ApiClient2.default.convertToType(data['uuid'], 'String');
                }
                if (data.hasOwnProperty('timestamp')) {
                    obj['timestamp'] = _ApiClient2.default.convertToType(data['timestamp'], 'Date');
                }
                if (data.hasOwnProperty('shipping_provider_id')) {
                    obj['shipping_provider_id'] = _ApiClient2.default.convertToType(data['shipping_provider_id'], 'String');
                }
                if (data.hasOwnProperty('shipping_provider_quote')) {
                    obj['shipping_provider_quote'] = _ApiClient2.default.convertToType(data['shipping_provider_quote'], Array);
                }
                if (data.hasOwnProperty('provider_code')) {
                    obj['provider_code'] = _ApiClient2.default.convertToType(data['provider_code'], 'String');
                }
                if (data.hasOwnProperty('carrier_code')) {
                    obj['carrier_code'] = _ApiClient2.default.convertToType(data['carrier_code'], 'String');
                }
                if (data.hasOwnProperty('rate_code')) {
                    obj['rate_code'] = _ApiClient2.default.convertToType(data['rate_code'], 'String');
                }
                if (data.hasOwnProperty('rate_id')) {
                    obj['rate_id'] = _ApiClient2.default.convertToType(data['rate_id'], 'String');
                }
                if (data.hasOwnProperty('method_id')) {
                    obj['method_id'] = _ApiClient2.default.convertToType(data['method_id'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Id of the shipping quote
        * @member {String} id
        */

        /**
        * uuid of the shipping quote
        * @member {String} uuid
        */

        /**
        * Time the order was created in RFC 2822 format.
        * @member {Date} timestamp
        */

        /**
        * Id of the shipping provider
        * @member {String} shipping_provider_id
        */

        /**
        * This can vary based on the shipping provider. Manual shipping methods such as fixed will return an empty array. Shipping providers such as UPS will return an object with the shipping information. Since the shipping quote is tied to a shipping address only one quote will return in the response.
        * @member {Array} shipping_provider_quote
        */

        /**
        * Code of the shipping provider
        * @member {String} provider_code
        */

        /**
        * Code of the shipping carrier
        * @member {String} carrier_code
        */

        /**
        * Type of delivery. This can vary based on shipping quote.
        * @member {String} rate_code
        */

        /**
        * This can vary based on shipping quote
        * @member {String} rate_id
        */

        /**
        * Shipping method ID
        * @member {Number} method_id
        */

    }]);

    return ShippingQuotesBase1;
}();

exports.default = ShippingQuotesBase1;