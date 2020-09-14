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
* The OrderTaxesBase1 model module.
* @module model/OrderTaxesBase1
* @version 2.0
*/
var OrderTaxesBase1 = function () {
    /**
    * Constructs a new <code>OrderTaxesBase1</code>.
    * @alias module:model/OrderTaxesBase1
    * @class
    */

    function OrderTaxesBase1() {
        _classCallCheck(this, OrderTaxesBase1);

        this['id'] = undefined;
        this['order_id'] = undefined;
        this['order_address_id'] = undefined;
        this['tax_rate_id'] = undefined;
        this['tax_class_id'] = undefined;
        this['name'] = undefined;
        this['class'] = undefined;
        this['rate'] = undefined;
        this['priority'] = undefined;
        this['priority_amount'] = undefined;
        this['line_amount'] = undefined;
        this['order_product_id'] = undefined;
        this['line_item_type'] = undefined;
    }

    /**
    * Constructs a <code>OrderTaxesBase1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderTaxesBase1} obj Optional instance to populate.
    * @return {module:model/OrderTaxesBase1} The populated <code>OrderTaxesBase1</code> instance.
    */


    _createClass(OrderTaxesBase1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OrderTaxesBase1();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('order_id')) {
                    obj['order_id'] = _ApiClient2.default.convertToType(data['order_id'], 'Number');
                }
                if (data.hasOwnProperty('order_address_id')) {
                    obj['order_address_id'] = _ApiClient2.default.convertToType(data['order_address_id'], 'Number');
                }
                if (data.hasOwnProperty('tax_rate_id')) {
                    obj['tax_rate_id'] = _ApiClient2.default.convertToType(data['tax_rate_id'], 'Number');
                }
                if (data.hasOwnProperty('tax_class_id')) {
                    obj['tax_class_id'] = _ApiClient2.default.convertToType(data['tax_class_id'], 'Number');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('class')) {
                    obj['class'] = _ApiClient2.default.convertToType(data['class'], 'String');
                }
                if (data.hasOwnProperty('rate')) {
                    obj['rate'] = _ApiClient2.default.convertToType(data['rate'], 'String');
                }
                if (data.hasOwnProperty('priority')) {
                    obj['priority'] = _ApiClient2.default.convertToType(data['priority'], 'Number');
                }
                if (data.hasOwnProperty('priority_amount')) {
                    obj['priority_amount'] = _ApiClient2.default.convertToType(data['priority_amount'], 'String');
                }
                if (data.hasOwnProperty('line_amount')) {
                    obj['line_amount'] = _ApiClient2.default.convertToType(data['line_amount'], 'String');
                }
                if (data.hasOwnProperty('order_product_id')) {
                    obj['order_product_id'] = _ApiClient2.default.convertToType(data['order_product_id'], 'String');
                }
                if (data.hasOwnProperty('line_item_type')) {
                    obj['line_item_type'] = _ApiClient2.default.convertToType(data['line_item_type'], 'String');
                }
            }
            return obj;
        }

        /**
        * The unique numeric identifier of the taxes object.
        * @member {Number} id
        */

        /**
        * The unique numeric identifier of the order to which the tax was applied. NOTE: Not included if the store was using the automatic tax feature.
        * @member {Number} order_id
        */

        /**
        * The unique numeric identifier of the order address object associated with the order. NOTE: Not included if the store was using the automatic tax feature.
        * @member {Number} order_address_id
        */

        /**
        * The unique numeric identifier of the tax rate.
        * @member {Number} tax_rate_id
        */

        /**
        * The unique numeric identifier of the tax class object. NOTE: Will be 0 if automatic tax was enabled, or if the default tax class was used.
        * @member {Number} tax_class_id
        */

        /**
        * The name of the tax class object.
        * @member {String} name
        */

        /**
        * The name of the type of tax that was applied. NOTE: will be “Automatic Tax” if automatic tax was enabled.
        * @member {String} class
        */

        /**
        * The tax rate.  The priority order in which the tax is applied (Float, Float-As-String, Integer)
        * @member {String} rate
        */

        /**
        * The order in which the tax is applied
        * @member {Number} priority
        */

        /**
        * The amount of tax calculated on the order.   (Float, Float-As-String, Integer)
        * @member {String} priority_amount
        */

        /**
        * (Float, Float-As-String, Integer)
        * @member {String} line_amount
        */

        /**
        * If the `line_item_type` is `item` or `handling` then this field will be the order product id. Otherwise the field will return as null.
        * @member {String} order_product_id
        */

        /**
        * Type of tax on item
        * @member {module:model/OrderTaxesBase1.LineItemTypeEnum} line_item_type
        */


        /**
        * Allowed values for the <code>line_item_type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return OrderTaxesBase1;
}();

OrderTaxesBase1.LineItemTypeEnum = {
    /**
     * value: "item"
     * @const
     */
    "item": "item",
    /**
     * value: "shipping"
     * @const
     */
    "shipping": "shipping",
    /**
     * value: "handling"
     * @const
     */
    "handling": "handling",
    /**
     * value: "gift-wrapping"
     * @const
     */
    "gift-wrapping": "gift-wrapping" };
exports.default = OrderTaxesBase1;