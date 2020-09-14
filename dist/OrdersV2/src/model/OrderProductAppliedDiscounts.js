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
* The OrderProductAppliedDiscounts model module.
* @module model/OrderProductAppliedDiscounts
* @version 2.0
*/
var OrderProductAppliedDiscounts = function () {
    /**
    * Constructs a new <code>OrderProductAppliedDiscounts</code>.
    * When applying a manual discount to an order (not a product level discount), the discount is distributed across products in proportion to the products price. &#x60;(total_manual_discount*price_ex_tax)/subtotal_ex_tax&#x60;
    * @alias module:model/OrderProductAppliedDiscounts
    * @class
    */

    function OrderProductAppliedDiscounts() {
        _classCallCheck(this, OrderProductAppliedDiscounts);

        this['id'] = undefined;
        this['amount'] = undefined;
        this['name'] = undefined;
        this['code'] = undefined;
        this['target'] = undefined;
    }

    /**
    * Constructs a <code>OrderProductAppliedDiscounts</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderProductAppliedDiscounts} obj Optional instance to populate.
    * @return {module:model/OrderProductAppliedDiscounts} The populated <code>OrderProductAppliedDiscounts</code> instance.
    */


    _createClass(OrderProductAppliedDiscounts, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OrderProductAppliedDiscounts();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('code')) {
                    obj['code'] = _ApiClient2.default.convertToType(data['code'], 'String');
                }
                if (data.hasOwnProperty('target')) {
                    obj['target'] = _ApiClient2.default.convertToType(data['target'], 'String');
                }
            }
            return obj;
        }

        /**
        * Name of the coupon applied to order.
        * @member {String} id
        */

        /**
        * Amount of the discount.(Float, Float-As-String, Integer) 
        * @member {String} amount
        */

        /**
        * Name of the coupon. `Manual Discount` when creating a manual discount.
        * @member {String} name
        */

        /**
        * Coupon Code. There is no code when creating a manual discount.
        * @member {String} code
        */

        /**
        * Determines if the discount if discount was applied at the Order or Product level. Read Only.
        * @member {module:model/OrderProductAppliedDiscounts.TargetEnum} target
        */


        /**
        * Allowed values for the <code>target</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return OrderProductAppliedDiscounts;
}();

OrderProductAppliedDiscounts.TargetEnum = {
    /**
     * value: "order"
     * @const
     */
    "order": "order",
    /**
     * value: "product"
     * @const
     */
    "product": "product" };
exports.default = OrderProductAppliedDiscounts;