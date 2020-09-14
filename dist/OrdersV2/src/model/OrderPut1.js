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

var _ShippingAddressBase = require('./ShippingAddressBase1');

var _ShippingAddressBase2 = _interopRequireDefault(_ShippingAddressBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The OrderPut1 model module.
* @module model/OrderPut1
* @version 2.0
*/
var OrderPut1 = function () {
    /**
    * Constructs a new <code>OrderPut1</code>.
    * @alias module:model/OrderPut1
    * @class
    */

    function OrderPut1() {
        _classCallCheck(this, OrderPut1);

        this['shipping_addresses'] = undefined;
        this['subtotal_ex_tax'] = undefined;
        this['subtotal_inc_tax'] = undefined;
        this['base_shipping_cost'] = undefined;
        this['shipping_cost_ex_tax'] = undefined;
        this['shipping_cost_inc_tax'] = undefined;
        this['base_handling_cost'] = undefined;
        this['handling_cost_ex_tax'] = undefined;
        this['handling_cost_inc_tax'] = undefined;
        this['base_wrapping_cost'] = undefined;
        this['wrapping_cost_ex_tax'] = undefined;
        this['wrapping_cost_inc_tax'] = undefined;
        this['total_ex_tax'] = undefined;
        this['total_inc_tax'] = undefined;
        this['items_total'] = undefined;
        this['items_shipped'] = undefined;
        this['payment_method'] = undefined;
        this['payment_provider_id'] = undefined;
        this['refunded_amount'] = undefined;
        this['order_is_digital'] = undefined;
        this['ip_address'] = undefined;
        this['geoip_country'] = undefined;
        this['geoip_country_iso2'] = undefined;
        this['staff_notes'] = undefined;
        this['customer_message'] = undefined;
        this['discount_amount'] = undefined;
        this['is_deleted'] = undefined;
        this['ebay_order_id'] = undefined;
        this['external_source'] = undefined;
        this['channel_id'] = undefined;
        this['tax_provider_id'] = undefined;
        this['date_created'] = undefined;
    }

    /**
    * Constructs a <code>OrderPut1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderPut1} obj Optional instance to populate.
    * @return {module:model/OrderPut1} The populated <code>OrderPut1</code> instance.
    */


    _createClass(OrderPut1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OrderPut1();

                if (data.hasOwnProperty('shipping_addresses')) {
                    obj['shipping_addresses'] = _ShippingAddressBase2.default.constructFromObject(data['shipping_addresses']);
                }
                if (data.hasOwnProperty('subtotal_ex_tax')) {
                    obj['subtotal_ex_tax'] = _ApiClient2.default.convertToType(data['subtotal_ex_tax'], 'String');
                }
                if (data.hasOwnProperty('subtotal_inc_tax')) {
                    obj['subtotal_inc_tax'] = _ApiClient2.default.convertToType(data['subtotal_inc_tax'], 'String');
                }
                if (data.hasOwnProperty('base_shipping_cost')) {
                    obj['base_shipping_cost'] = _ApiClient2.default.convertToType(data['base_shipping_cost'], 'String');
                }
                if (data.hasOwnProperty('shipping_cost_ex_tax')) {
                    obj['shipping_cost_ex_tax'] = _ApiClient2.default.convertToType(data['shipping_cost_ex_tax'], 'String');
                }
                if (data.hasOwnProperty('shipping_cost_inc_tax')) {
                    obj['shipping_cost_inc_tax'] = _ApiClient2.default.convertToType(data['shipping_cost_inc_tax'], 'String');
                }
                if (data.hasOwnProperty('base_handling_cost')) {
                    obj['base_handling_cost'] = _ApiClient2.default.convertToType(data['base_handling_cost'], 'String');
                }
                if (data.hasOwnProperty('handling_cost_ex_tax')) {
                    obj['handling_cost_ex_tax'] = _ApiClient2.default.convertToType(data['handling_cost_ex_tax'], 'String');
                }
                if (data.hasOwnProperty('handling_cost_inc_tax')) {
                    obj['handling_cost_inc_tax'] = _ApiClient2.default.convertToType(data['handling_cost_inc_tax'], 'String');
                }
                if (data.hasOwnProperty('base_wrapping_cost')) {
                    obj['base_wrapping_cost'] = _ApiClient2.default.convertToType(data['base_wrapping_cost'], 'String');
                }
                if (data.hasOwnProperty('wrapping_cost_ex_tax')) {
                    obj['wrapping_cost_ex_tax'] = _ApiClient2.default.convertToType(data['wrapping_cost_ex_tax'], 'String');
                }
                if (data.hasOwnProperty('wrapping_cost_inc_tax')) {
                    obj['wrapping_cost_inc_tax'] = _ApiClient2.default.convertToType(data['wrapping_cost_inc_tax'], 'String');
                }
                if (data.hasOwnProperty('total_ex_tax')) {
                    obj['total_ex_tax'] = _ApiClient2.default.convertToType(data['total_ex_tax'], 'String');
                }
                if (data.hasOwnProperty('total_inc_tax')) {
                    obj['total_inc_tax'] = _ApiClient2.default.convertToType(data['total_inc_tax'], 'String');
                }
                if (data.hasOwnProperty('items_total')) {
                    obj['items_total'] = _ApiClient2.default.convertToType(data['items_total'], 'Number');
                }
                if (data.hasOwnProperty('items_shipped')) {
                    obj['items_shipped'] = _ApiClient2.default.convertToType(data['items_shipped'], 'Number');
                }
                if (data.hasOwnProperty('payment_method')) {
                    obj['payment_method'] = _ApiClient2.default.convertToType(data['payment_method'], 'String');
                }
                if (data.hasOwnProperty('payment_provider_id')) {
                    obj['payment_provider_id'] = _ApiClient2.default.convertToType(data['payment_provider_id'], 'String');
                }
                if (data.hasOwnProperty('refunded_amount')) {
                    obj['refunded_amount'] = _ApiClient2.default.convertToType(data['refunded_amount'], 'String');
                }
                if (data.hasOwnProperty('order_is_digital')) {
                    obj['order_is_digital'] = _ApiClient2.default.convertToType(data['order_is_digital'], 'Boolean');
                }
                if (data.hasOwnProperty('ip_address')) {
                    obj['ip_address'] = _ApiClient2.default.convertToType(data['ip_address'], 'String');
                }
                if (data.hasOwnProperty('geoip_country')) {
                    obj['geoip_country'] = _ApiClient2.default.convertToType(data['geoip_country'], 'String');
                }
                if (data.hasOwnProperty('geoip_country_iso2')) {
                    obj['geoip_country_iso2'] = _ApiClient2.default.convertToType(data['geoip_country_iso2'], 'String');
                }
                if (data.hasOwnProperty('staff_notes')) {
                    obj['staff_notes'] = _ApiClient2.default.convertToType(data['staff_notes'], 'String');
                }
                if (data.hasOwnProperty('customer_message')) {
                    obj['customer_message'] = _ApiClient2.default.convertToType(data['customer_message'], 'String');
                }
                if (data.hasOwnProperty('discount_amount')) {
                    obj['discount_amount'] = _ApiClient2.default.convertToType(data['discount_amount'], 'String');
                }
                if (data.hasOwnProperty('is_deleted')) {
                    obj['is_deleted'] = _ApiClient2.default.convertToType(data['is_deleted'], 'Boolean');
                }
                if (data.hasOwnProperty('ebay_order_id')) {
                    obj['ebay_order_id'] = _ApiClient2.default.convertToType(data['ebay_order_id'], 'String');
                }
                if (data.hasOwnProperty('external_source')) {
                    obj['external_source'] = _ApiClient2.default.convertToType(data['external_source'], 'String');
                }
                if (data.hasOwnProperty('channel_id')) {
                    obj['channel_id'] = _ApiClient2.default.convertToType(data['channel_id'], 'Number');
                }
                if (data.hasOwnProperty('tax_provider_id')) {
                    obj['tax_provider_id'] = _ApiClient2.default.convertToType(data['tax_provider_id'], 'String');
                }
                if (data.hasOwnProperty('date_created')) {
                    obj['date_created'] = _ApiClient2.default.convertToType(data['date_created'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {module:model/ShippingAddressBase1} shipping_addresses
        */

        /**
        * Override value for subtotal excluding tax. If specified, the field `subtotal_inc_tax` is also required. (Float, Float-As-String, Integer)
        * @member {String} subtotal_ex_tax
        */

        /**
        * Override value for subtotal including tax. If specified, the field `subtotal_ex_tax` is also required. (Float, Float-As-String, Integer)
        * @member {String} subtotal_inc_tax
        */

        /**
        * The value of the base shipping cost. (Float, Float-As-String, Integer)
        * @member {String} base_shipping_cost
        */

        /**
        * The value of shipping cost, excluding tax. (Float, Float-As-String, Integer)
        * @member {String} shipping_cost_ex_tax
        */

        /**
        * The value of shipping cost, including tax. (Float, Float-As-String, Integer)
        * @member {String} shipping_cost_inc_tax
        */

        /**
        * The value of the base handling cost. (Float, Float-As-String, Integer)
        * @member {String} base_handling_cost
        */

        /**
        * The value of the handling cost, excluding tax. (Float, Float-As-String, Integer)
        * @member {String} handling_cost_ex_tax
        */

        /**
        * The value of the handling cost, including tax. (Float, Float-As-String, Integer)
        * @member {String} handling_cost_inc_tax
        */

        /**
        * The value of the base wrapping cost. (Float, Float-As-String, Integer)
        * @member {String} base_wrapping_cost
        */

        /**
        * The value of the wrapping cost, excluding tax. (Float, Float-As-String, Integer)
        * @member {String} wrapping_cost_ex_tax
        */

        /**
        * The value of the wrapping cost, including tax. (Float, Float-As-String, Integer)
        * @member {String} wrapping_cost_inc_tax
        */

        /**
        * Override value for the total, excluding tax. If specified, the field `total_inc_tax` is also required. (Float, Float-As-String, Integer)
        * @member {String} total_ex_tax
        */

        /**
        * Override value for the total, including tax. If specified, the field `total_ex_tax` is also required. (Float, Float-As-String, Integer)
        * @member {String} total_inc_tax
        */

        /**
        * The total number of items in the order.
        * @member {Number} items_total
        */

        /**
        * The number of items that have been shipped.
        * @member {Number} items_shipped
        */

        /**
        * The payment method for this order. Can be one of the following: `Manual`, `Credit Card`, `Cash`,`Test Payment Gateway`, etc.
        * @member {module:model/OrderPut1.PaymentMethodEnum} payment_method
        */

        /**
        * The external Transaction ID/Payment ID within this order's payment provider (if a payment provider was used).
        * @member {String} payment_provider_id
        */

        /**
        * The amount refunded from this transaction. (Float, Float-As-String, Integer)
        * @member {String} refunded_amount
        */

        /**
        * Whether this is an order for digital products.
        * @member {Boolean} order_is_digital
        */

        /**
        * IP Address of the customer, if known.
        * @member {String} ip_address
        */

        /**
        * The full name of the country where the customer made the purchase, based on the IP.
        * @member {String} geoip_country
        */

        /**
        * The country where the customer made the purchase, in ISO2 format, based on the IP.
        * @member {String} geoip_country_iso2
        */

        /**
        * Any additional notes for staff.
        * @member {String} staff_notes
        */

        /**
        * Message that the customer entered (number, optional) -o the `Order Comments` box during checkout.
        * @member {String} customer_message
        */

        /**
        * Amount of discount for this transaction. (Float, Float-As-String, Integer)
        * @member {String} discount_amount
        */

        /**
        * Indicates whether the order was deleted (archived). Set to to true, to archive an order.
        * @member {Boolean} is_deleted
        */

        /**
        * If the order was placed through eBay, the eBay order number will be included. Otherwise, the value will be `0`.
        * @member {String} ebay_order_id
        */

        /**
        * For orders submitted or modified via the API, using a PUT or POST operation, you can optionally pass in a value identifying the system used to generate the order. For example: `POS`. Otherwise, the value will be null.
        * @member {String} external_source
        */

        /**
        * Shows where the order originated. The channel_id will default to 1.
        * @member {Number} channel_id
        */

        /**
        * BasicTaxProvider - Tax is set to manual.  AvaTaxProvider - This is for when the tax provider has been set to automatic and the order was NOT created by the API. Used for Avalara.  \"\" (blank) - When the tax provider is unknown. This includes legacy orders and orders previously created via API. This can be set when creating an order using a POST.
        * @member {module:model/OrderPut1.TaxProviderIdEnum} tax_provider_id
        */

        /**
        * The date this order was created. If not specified, will default to the current time. The date should be in RFC 2822 format.
        * @member {String} date_created
        */


        /**
        * Allowed values for the <code>payment_method</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>tax_provider_id</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return OrderPut1;
}();

OrderPut1.PaymentMethodEnum = {
    /**
     * value: "Credit Card"
     * @const
     */
    "Credit Card": "Credit Card",
    /**
     * value: "Cash"
     * @const
     */
    "Cash": "Cash",
    /**
     * value: "Manual"
     * @const
     */
    "Manual": "Manual",
    /**
     * value: "Test Payment Gateway"
     * @const
     */
    "Test Payment Gateway": "Test Payment Gateway" };
OrderPut1.TaxProviderIdEnum = {
    /**
     * value: "BasicTaxProvider"
     * @const
     */
    "BasicTaxProvider": "BasicTaxProvider",
    /**
     * value: "AvaTaxProvider"
     * @const
     */
    "AvaTaxProvider": "AvaTaxProvider" };
exports.default = OrderPut1;