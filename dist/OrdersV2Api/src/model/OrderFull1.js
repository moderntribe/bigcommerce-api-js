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

var _CouponsResource = require('./CouponsResource1');

var _CouponsResource2 = _interopRequireDefault(_CouponsResource);

var _ProductsResource = require('./ProductsResource1');

var _ProductsResource2 = _interopRequireDefault(_ProductsResource);

var _ShippingAddressResource = require('./ShippingAddressResource');

var _ShippingAddressResource2 = _interopRequireDefault(_ShippingAddressResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The OrderFull1 model module.
* @module model/OrderFull1
* @version 2.0
*/
var OrderFull1 = function () {
    /**
    * Constructs a new <code>OrderFull1</code>.
    * @alias module:model/OrderFull1
    * @class
    */

    function OrderFull1() {
        _classCallCheck(this, OrderFull1);

        this['id'] = undefined;
        this['customer_id'] = undefined;
        this['date_created'] = undefined;
        this['date_modified'] = undefined;
        this['date_shipped'] = undefined;
        this['status_id'] = undefined;
        this['cart_id'] = undefined;
        this['status'] = undefined;
        this['custom_status'] = undefined;
        this['subtotal_ex_tax'] = undefined;
        this['subtotal_inc_tax'] = undefined;
        this['subtotal_tax'] = undefined;
        this['base_shipping_cost'] = undefined;
        this['shipping_cost_ex_tax'] = undefined;
        this['shipping_cost_inc_tax'] = undefined;
        this['shipping_cost_tax'] = undefined;
        this['shipping_cost_tax_class_id'] = undefined;
        this['base_handling_cost'] = undefined;
        this['handling_cost_ex_tax'] = undefined;
        this['handling_cost_inc_tax'] = undefined;
        this['handling_cost_tax'] = undefined;
        this['handling_cost_tax_class_id'] = undefined;
        this['base_wrapping_cost'] = undefined;
        this['wrapping_cost_ex_tax'] = undefined;
        this['wrapping_cost_inc_tax'] = undefined;
        this['wrapping_cost_tax'] = undefined;
        this['wrapping_cost_tax_class_id'] = undefined;
        this['total_ex_tax'] = undefined;
        this['total_inc_tax'] = undefined;
        this['total_tax'] = undefined;
        this['items_total'] = undefined;
        this['items_shipped'] = undefined;
        this['payment_method'] = undefined;
        this['payment_provider_id'] = undefined;
        this['payment_status'] = undefined;
        this['refunded_amount'] = undefined;
        this['order_is_digital'] = undefined;
        this['store_credit_amount'] = undefined;
        this['gift_certificate_amount'] = undefined;
        this['ip_address'] = undefined;
        this['geoip_country'] = undefined;
        this['geoip_country_iso2'] = undefined;
        this['currency_id'] = undefined;
        this['currency_code'] = undefined;
        this['currency_exchange_rate'] = undefined;
        this['default_currency_id'] = undefined;
        this['default_currency_code'] = undefined;
        this['staff_notes'] = undefined;
        this['customer_message'] = undefined;
        this['discount_amount'] = undefined;
        this['coupon_discount'] = undefined;
        this['shipping_address_count'] = undefined;
        this['is_deleted'] = undefined;
        this['is_email_opt_in'] = undefined;
        this['credit_card_type'] = undefined;
        this['ebay_order_id'] = undefined;
        this['billing_address'] = undefined;
        this['order_source'] = undefined;
        this['external_source'] = undefined;
        this['products'] = undefined;
        this['shipping_addresses'] = undefined;
        this['coupons'] = undefined;
        this['external_id'] = undefined;
        this['external_merchant_id'] = undefined;
        this['channel_id'] = undefined;
        this['tax_provider_id'] = undefined;
    }

    /**
    * Constructs a <code>OrderFull1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderFull1} obj Optional instance to populate.
    * @return {module:model/OrderFull1} The populated <code>OrderFull1</code> instance.
    */


    _createClass(OrderFull1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OrderFull1();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('customer_id')) {
                    obj['customer_id'] = _ApiClient2.default.convertToType(data['customer_id'], 'Number');
                }
                if (data.hasOwnProperty('date_created')) {
                    obj['date_created'] = _ApiClient2.default.convertToType(data['date_created'], 'String');
                }
                if (data.hasOwnProperty('date_modified')) {
                    obj['date_modified'] = _ApiClient2.default.convertToType(data['date_modified'], 'String');
                }
                if (data.hasOwnProperty('date_shipped')) {
                    obj['date_shipped'] = _ApiClient2.default.convertToType(data['date_shipped'], 'String');
                }
                if (data.hasOwnProperty('status_id')) {
                    obj['status_id'] = _ApiClient2.default.convertToType(data['status_id'], 'Number');
                }
                if (data.hasOwnProperty('cart_id')) {
                    obj['cart_id'] = _ApiClient2.default.convertToType(data['cart_id'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('custom_status')) {
                    obj['custom_status'] = _ApiClient2.default.convertToType(data['custom_status'], 'String');
                }
                if (data.hasOwnProperty('subtotal_ex_tax')) {
                    obj['subtotal_ex_tax'] = _ApiClient2.default.convertToType(data['subtotal_ex_tax'], 'String');
                }
                if (data.hasOwnProperty('subtotal_inc_tax')) {
                    obj['subtotal_inc_tax'] = _ApiClient2.default.convertToType(data['subtotal_inc_tax'], 'String');
                }
                if (data.hasOwnProperty('subtotal_tax')) {
                    obj['subtotal_tax'] = _ApiClient2.default.convertToType(data['subtotal_tax'], 'String');
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
                if (data.hasOwnProperty('shipping_cost_tax')) {
                    obj['shipping_cost_tax'] = _ApiClient2.default.convertToType(data['shipping_cost_tax'], 'String');
                }
                if (data.hasOwnProperty('shipping_cost_tax_class_id')) {
                    obj['shipping_cost_tax_class_id'] = _ApiClient2.default.convertToType(data['shipping_cost_tax_class_id'], 'Number');
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
                if (data.hasOwnProperty('handling_cost_tax')) {
                    obj['handling_cost_tax'] = _ApiClient2.default.convertToType(data['handling_cost_tax'], 'String');
                }
                if (data.hasOwnProperty('handling_cost_tax_class_id')) {
                    obj['handling_cost_tax_class_id'] = _ApiClient2.default.convertToType(data['handling_cost_tax_class_id'], 'Number');
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
                if (data.hasOwnProperty('wrapping_cost_tax')) {
                    obj['wrapping_cost_tax'] = _ApiClient2.default.convertToType(data['wrapping_cost_tax'], 'String');
                }
                if (data.hasOwnProperty('wrapping_cost_tax_class_id')) {
                    obj['wrapping_cost_tax_class_id'] = _ApiClient2.default.convertToType(data['wrapping_cost_tax_class_id'], 'Number');
                }
                if (data.hasOwnProperty('total_ex_tax')) {
                    obj['total_ex_tax'] = _ApiClient2.default.convertToType(data['total_ex_tax'], 'String');
                }
                if (data.hasOwnProperty('total_inc_tax')) {
                    obj['total_inc_tax'] = _ApiClient2.default.convertToType(data['total_inc_tax'], 'String');
                }
                if (data.hasOwnProperty('total_tax')) {
                    obj['total_tax'] = _ApiClient2.default.convertToType(data['total_tax'], 'String');
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
                if (data.hasOwnProperty('payment_status')) {
                    obj['payment_status'] = _ApiClient2.default.convertToType(data['payment_status'], 'String');
                }
                if (data.hasOwnProperty('refunded_amount')) {
                    obj['refunded_amount'] = _ApiClient2.default.convertToType(data['refunded_amount'], 'String');
                }
                if (data.hasOwnProperty('order_is_digital')) {
                    obj['order_is_digital'] = _ApiClient2.default.convertToType(data['order_is_digital'], 'Boolean');
                }
                if (data.hasOwnProperty('store_credit_amount')) {
                    obj['store_credit_amount'] = _ApiClient2.default.convertToType(data['store_credit_amount'], 'String');
                }
                if (data.hasOwnProperty('gift_certificate_amount')) {
                    obj['gift_certificate_amount'] = _ApiClient2.default.convertToType(data['gift_certificate_amount'], 'String');
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
                if (data.hasOwnProperty('currency_id')) {
                    obj['currency_id'] = _ApiClient2.default.convertToType(data['currency_id'], 'Number');
                }
                if (data.hasOwnProperty('currency_code')) {
                    obj['currency_code'] = _ApiClient2.default.convertToType(data['currency_code'], 'String');
                }
                if (data.hasOwnProperty('currency_exchange_rate')) {
                    obj['currency_exchange_rate'] = _ApiClient2.default.convertToType(data['currency_exchange_rate'], 'String');
                }
                if (data.hasOwnProperty('default_currency_id')) {
                    obj['default_currency_id'] = _ApiClient2.default.convertToType(data['default_currency_id'], 'Number');
                }
                if (data.hasOwnProperty('default_currency_code')) {
                    obj['default_currency_code'] = _ApiClient2.default.convertToType(data['default_currency_code'], 'String');
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
                if (data.hasOwnProperty('coupon_discount')) {
                    obj['coupon_discount'] = _ApiClient2.default.convertToType(data['coupon_discount'], 'String');
                }
                if (data.hasOwnProperty('shipping_address_count')) {
                    obj['shipping_address_count'] = _ApiClient2.default.convertToType(data['shipping_address_count'], 'Number');
                }
                if (data.hasOwnProperty('is_deleted')) {
                    obj['is_deleted'] = _ApiClient2.default.convertToType(data['is_deleted'], 'Boolean');
                }
                if (data.hasOwnProperty('is_email_opt_in')) {
                    obj['is_email_opt_in'] = _ApiClient2.default.convertToType(data['is_email_opt_in'], 'Boolean');
                }
                if (data.hasOwnProperty('credit_card_type')) {
                    obj['credit_card_type'] = _ApiClient2.default.convertToType(data['credit_card_type'], 'Number');
                }
                if (data.hasOwnProperty('ebay_order_id')) {
                    obj['ebay_order_id'] = _ApiClient2.default.convertToType(data['ebay_order_id'], 'String');
                }
                if (data.hasOwnProperty('billing_address')) {
                    obj['billing_address'] = _ApiClient2.default.convertToType(data['billing_address'], Object);
                }
                if (data.hasOwnProperty('order_source')) {
                    obj['order_source'] = _ApiClient2.default.convertToType(data['order_source'], 'String');
                }
                if (data.hasOwnProperty('external_source')) {
                    obj['external_source'] = _ApiClient2.default.convertToType(data['external_source'], 'String');
                }
                if (data.hasOwnProperty('products')) {
                    obj['products'] = _ProductsResource2.default.constructFromObject(data['products']);
                }
                if (data.hasOwnProperty('shipping_addresses')) {
                    obj['shipping_addresses'] = _ShippingAddressResource2.default.constructFromObject(data['shipping_addresses']);
                }
                if (data.hasOwnProperty('coupons')) {
                    obj['coupons'] = _CouponsResource2.default.constructFromObject(data['coupons']);
                }
                if (data.hasOwnProperty('external_id')) {
                    obj['external_id'] = _ApiClient2.default.convertToType(data['external_id'], 'String');
                }
                if (data.hasOwnProperty('external_merchant_id')) {
                    obj['external_merchant_id'] = _ApiClient2.default.convertToType(data['external_merchant_id'], 'String');
                }
                if (data.hasOwnProperty('channel_id')) {
                    obj['channel_id'] = _ApiClient2.default.convertToType(data['channel_id'], 'Number');
                }
                if (data.hasOwnProperty('tax_provider_id')) {
                    obj['tax_provider_id'] = _ApiClient2.default.convertToType(data['tax_provider_id'], 'String');
                }
            }
            return obj;
        }

        /**
        * The ID of the order, a read-only value. Do not pass in PUT or POST.
        * @member {Number} id
        */

        /**
        * The ID of the customer placing the order; or 0 if it was a guest order.
        * @member {Number} customer_id
        */

        /**
        * The date this order was created. If not specified, will default to the current time. The date should be in RFC 2822 format.
        * @member {String} date_created
        */

        /**
        * A read-only value representing the last modification of the order. Do not attempt to modify or set this value in a POST or PUT operation. RFC-2822
        * @member {String} date_modified
        */

        /**
        * A read-only value representing the date of shipment. Do not attempt to modify or set this value in a POST or PUT operation. RFC-2822
        * @member {String} date_shipped
        */

        /**
        * The status ID of the order.
        * @member {Number} status_id
        */

        /**
        * The cart ID from which this order originated, if applicable. Correlates with the Cart API. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
        * @member {String} cart_id
        */

        /**
        * The status will include one of the (string, optiona) - values defined under Order Statuses. This value is read-only. Do not attempt to modify or set this value in a POST or PUT operation.
        * @member {String} status
        */

        /**
        * Contains the same (string, optiona) - value as the Order Statuses object's `custom_label` property.
        * @member {String} custom_status
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
        * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (Float, Float-As-String, Integer)
        * @member {String} subtotal_tax
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
        * A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer)
        * @member {String} shipping_cost_tax
        */

        /**
        * Shipping-cost tax class. A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)
        * @member {Number} shipping_cost_tax_class_id
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
        * A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer)
        * @member {String} handling_cost_tax
        */

        /**
        * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)
        * @member {Number} handling_cost_tax_class_id
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
        * A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer)
        * @member {String} wrapping_cost_tax
        */

        /**
        * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)
        * @member {Number} wrapping_cost_tax_class_id
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
        * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (Float, Float-As-String, Integer)
        * @member {String} total_tax
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
        * The payment method for this order. Can be one of the following: `Manual`, `Credit Card`, `cash`, `Test Payment Gateway`, etc.
        * @member {String} payment_method
        */

        /**
        * The external Transaction ID/Payment ID within this order's payment provider (if a payment provider was used).
        * @member {String} payment_provider_id
        */

        /**
        * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation.
        * @member {String} payment_status
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
        * Represents the store credit that the shopper has redeemed on this individual order. This is a read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)
        * @member {String} store_credit_amount
        */

        /**
        * A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)
        * @member {String} gift_certificate_amount
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
        * The ID of the currency being used in this transaction. A read-only value. Do not pass in a POST or PUT.
        * @member {Number} currency_id
        */

        /**
        * The currency code of the currency being used in this transaction. A read-only value. Do not pass in a POST or PUT.
        * @member {String} currency_code
        */

        /**
        * A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)
        * @member {String} currency_exchange_rate
        */

        /**
        * A read-only value. Do not pass in a POST or PUT.
        * @member {Number} default_currency_id
        */

        /**
        * The currency code of the default currency for this type of transaction. A read-only value. Do not pass in a POST or PUT.
        * @member {String} default_currency_code
        */

        /**
        * Any additional notes for staff.
        * @member {String} staff_notes
        */

        /**
        * Message that the customer entered (number, optiona) -o the `Order Comments` box during checkout.
        * @member {String} customer_message
        */

        /**
        * Amount of discount for this transaction. (Float, Float-As-String, Integer)
        * @member {String} discount_amount
        */

        /**
        * A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)
        * @member {String} coupon_discount
        */

        /**
        * The number of shipping addresses associated with this transaction. A read-only value. Do not pass in a POST or PUT.
        * @member {Number} shipping_address_count
        */

        /**
        * Indicates whether the order was deleted (archived). Set to to true, to archive an order.
        * @member {Boolean} is_deleted
        */

        /**
        * Indicates whether the shopper has selected an opt-in check box (on the checkout page) to receive emails. A read-only value. Do not pass in a POST or PUT.
        * @member {Boolean} is_email_opt_in
        */

        /**
        * Credit card type
        * @member {Number} credit_card_type
        */

        /**
        * If the order was placed through eBay, the eBay order number will be included. Otherwise, the value will be `0`.
        * @member {String} ebay_order_id
        */

        /**
        * Required to create an order.
        * @member {Object} billing_address
        */

        /**
        * Orders submitted via the store's website will include a `www` value. Orders submitted via the API will be set to `external`. A read-only value. Do not pass in a POST or PUT.
        * @member {String} order_source
        */

        /**
        * For orders submitted or modified via the API, using a PUT or POST operation, you can optionally pass in a value identifying the system used to generate the order. For example: `POS`. Otherwise, the value will be null.
        * @member {String} external_source
        */

        /**
        * @member {module:model/ProductsResource1} products
        */

        /**
        * @member {module:model/ShippingAddressResource} shipping_addresses
        */

        /**
        * @member {module:model/CouponsResource1} coupons
        */

        /**
        * ID of the order in another system. For example, the Amazon Order ID if this is an Amazon order.This field can be updated in a /POST, but using a /PUT to update the order will return a 400 error. The field 'external_id' cannot be written to. Please remove it from your request before trying again. It can not be overwritten once set.
        * @member {String} external_id
        */

        /**
        * ID of the merchant
        * @member {String} external_merchant_id
        */

        /**
        * Shows where the order originated. The channel_id will default to 1.
        * @member {Number} channel_id
        */

        /**
        * BasicTaxProvider - Tax is set to manual.  AvaTaxProvider - This is for when the tax provider has been set to automatic and the order was NOT created by the API. Used for Avalara.  \"\" (blank) - When the tax provider is unknown. This includes legacy orders and orders previously created via API. This can be set when creating an order using a POST.  
        * @member {module:model/OrderFull1.TaxProviderIdEnum} tax_provider_id
        */


        /**
        * Allowed values for the <code>tax_provider_id</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return OrderFull1;
}();

OrderFull1.TaxProviderIdEnum = {
    /**
     * value: "BasicTaxProvider"
     * @const
     */
    "BasicTaxProvider": "BasicTaxProvider",
    /**
     * value: "AvaTaxProvider"
     * @const
     */
    "AvaTaxProvider": "AvaTaxProvider",
    /**
     * value: ""
     * @const
     */
    "empty": "" };
exports.default = OrderFull1;