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
* The OrderProductOptions1 model module.
* @module model/OrderProductOptions1
* @version 2.0
*/
var OrderProductOptions1 = function () {
    /**
    * Constructs a new <code>OrderProductOptions1</code>.
    * @alias module:model/OrderProductOptions1
    * @class
    */

    function OrderProductOptions1() {
        _classCallCheck(this, OrderProductOptions1);

        this['id'] = undefined;
        this['option_id'] = undefined;
        this['order_product_id'] = undefined;
        this['product_option_id'] = undefined;
        this['display_name'] = undefined;
        this['display_value'] = undefined;
        this['value'] = undefined;
        this['type'] = undefined;
        this['name'] = undefined;
        this['display_style'] = undefined;
    }

    /**
    * Constructs a <code>OrderProductOptions1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderProductOptions1} obj Optional instance to populate.
    * @return {module:model/OrderProductOptions1} The populated <code>OrderProductOptions1</code> instance.
    */


    _createClass(OrderProductOptions1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OrderProductOptions1();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('option_id')) {
                    obj['option_id'] = _ApiClient2.default.convertToType(data['option_id'], 'Number');
                }
                if (data.hasOwnProperty('order_product_id')) {
                    obj['order_product_id'] = _ApiClient2.default.convertToType(data['order_product_id'], 'Number');
                }
                if (data.hasOwnProperty('product_option_id')) {
                    obj['product_option_id'] = _ApiClient2.default.convertToType(data['product_option_id'], 'Number');
                }
                if (data.hasOwnProperty('display_name')) {
                    obj['display_name'] = _ApiClient2.default.convertToType(data['display_name'], 'String');
                }
                if (data.hasOwnProperty('display_value')) {
                    obj['display_value'] = _ApiClient2.default.convertToType(data['display_value'], 'String');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('display_style')) {
                    obj['display_style'] = _ApiClient2.default.convertToType(data['display_style'], 'String');
                }
            }
            return obj;
        }

        /**
        * The unique numerical ID of the option; increments sequentially.
        * @member {Number} id
        */

        /**
        * Numeric ID of the associated option.
        * @member {Number} option_id
        */

        /**
        * @member {Number} order_product_id
        */

        /**
        * @member {Number} product_option_id
        */

        /**
        * The name of the option, as shown on the storefront.
        * @member {String} display_name
        */

        /**
        * The name of the value, as shown on the storefront.
        * @member {String} display_value
        */

        /**
        * This value is used to access the Customer File Upload.
        * @member {String} value
        */

        /**
        * Option Type
        * @member {module:model/OrderProductOptions1.TypeEnum} type
        */

        /**
        * The option’s name, as used internally. Must be unique.
        * @member {String} name
        */

        /**
        * How it is displayed on the storefront. Examples include Drop-down, radio buttons, or rectangles.
        * @member {String} display_style
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return OrderProductOptions1;
}();

OrderProductOptions1.TypeEnum = {
    /**
     * value: "Checkbox"
     * @const
     */
    "Checkbox": "Checkbox",
    /**
     * value: "Date field"
     * @const
     */
    "Date field": "Date field",
    /**
     * value: "File Upload"
     * @const
     */
    "File Upload": "File Upload",
    /**
     * value: "Multi-line text field"
     * @const
     */
    "Multi-line text field": "Multi-line text field",
    /**
     * value: "Multiple choice"
     * @const
     */
    "Multiple choice": "Multiple choice",
    /**
     * value: "Product Pick List"
     * @const
     */
    "Product Pick List": "Product Pick List",
    /**
     * value: "Swatch"
     * @const
     */
    "Swatch": "Swatch",
    /**
     * value: "Text field"
     * @const
     */
    "Text field": "Text field" };
exports.default = OrderProductOptions1;