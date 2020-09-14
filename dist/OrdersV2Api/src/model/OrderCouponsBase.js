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
* The OrderCouponsBase model module.
* @module model/OrderCouponsBase
* @version 2.0
*/
var OrderCouponsBase = function () {
    /**
    * Constructs a new <code>OrderCouponsBase</code>.
    * @alias module:model/OrderCouponsBase
    * @class
    */

    function OrderCouponsBase() {
        _classCallCheck(this, OrderCouponsBase);

        this['id'] = undefined;
        this['coupon_id'] = undefined;
        this['order_id'] = undefined;
        this['code'] = undefined;
        this['amount'] = undefined;
        this['type'] = undefined;
        this['discount'] = undefined;
    }

    /**
    * Constructs a <code>OrderCouponsBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderCouponsBase} obj Optional instance to populate.
    * @return {module:model/OrderCouponsBase} The populated <code>OrderCouponsBase</code> instance.
    */


    _createClass(OrderCouponsBase, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OrderCouponsBase();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('coupon_id')) {
                    obj['coupon_id'] = _ApiClient2.default.convertToType(data['coupon_id'], 'Number');
                }
                if (data.hasOwnProperty('order_id')) {
                    obj['order_id'] = _ApiClient2.default.convertToType(data['order_id'], 'Number');
                }
                if (data.hasOwnProperty('code')) {
                    obj['code'] = _ApiClient2.default.convertToType(data['code'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'Number');
                }
                if (data.hasOwnProperty('discount')) {
                    obj['discount'] = _ApiClient2.default.convertToType(data['discount'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Numeric ID of the coupon code.
        * @member {Number} id
        */

        /**
        * Numeric ID of the associated coupon.
        * @member {Number} coupon_id
        */

        /**
        * Numeric ID of the associated order.
        * @member {Number} order_id
        */

        /**
        * Coupon code, as a string.
        * @member {String} code
        */

        /**
        * Amount of the discount. This information is returned as in integer. Dollar and percentage discounts will return the same. For example, $3 returns as '3' while 5% will return as 5. Check the discount type to see what type of discount is available. (Float, Float-As-String, Integer)
        * @member {String} amount
        */

        /**
        * type 0: per_item_discount type 1: percentage_discount type 2: per_total_discount type 3: shipping_discount type 4: free_shipping type 5: promotions
        * @member {Number} type
        */

        /**
        * The amount off the order the discount is worth. For example, if an order subtotal is $90 and the discount is $3 then it will return as 3.000. If the discount is 3% then will return as 2.7000 or the amount of the order.  (Float, Float-As-String, Integer)
        * @member {Number} discount
        */

    }]);

    return OrderCouponsBase;
}();

exports.default = OrderCouponsBase;