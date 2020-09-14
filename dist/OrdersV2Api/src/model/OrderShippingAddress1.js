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

var _FormFields = require('./FormFields1');

var _FormFields2 = _interopRequireDefault(_FormFields);

var _ShippingQuotesResource = require('./ShippingQuotesResource1');

var _ShippingQuotesResource2 = _interopRequireDefault(_ShippingQuotesResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The OrderShippingAddress1 model module.
* @module model/OrderShippingAddress1
* @version 2.0
*/
var OrderShippingAddress1 = function () {
    /**
    * Constructs a new <code>OrderShippingAddress1</code>.
    * @alias module:model/OrderShippingAddress1
    * @class
    */

    function OrderShippingAddress1() {
        _classCallCheck(this, OrderShippingAddress1);

        this['base_cost'] = undefined;
        this['base_handling_cost'] = undefined;
        this['city'] = undefined;
        this['company'] = undefined;
        this['cost_ex_tax'] = undefined;
        this['cost_inc_tax'] = undefined;
        this['cost_tax'] = undefined;
        this['cost_tax_class_id'] = undefined;
        this['country'] = undefined;
        this['country_iso2'] = undefined;
        this['email'] = undefined;
        this['first_name'] = undefined;
        this['form_fields'] = undefined;
        this['handling_cost_ex_tax'] = undefined;
        this['handling_cost_inc_tax'] = undefined;
        this['handling_cost_tax'] = undefined;
        this['handling_cost_tax_class_id'] = undefined;
        this['id'] = undefined;
        this['items_shipped'] = undefined;
        this['items_total'] = undefined;
        this['last_name'] = undefined;
        this['order_id'] = undefined;
        this['phone'] = undefined;
        this['shipping_method'] = undefined;
        this['shipping_quotes'] = undefined;
        this['shipping_zone_id'] = undefined;
        this['shipping_zone_name'] = undefined;
        this['state'] = undefined;
        this['street_1'] = undefined;
        this['street_2'] = undefined;
        this['zip'] = undefined;
    }

    /**
    * Constructs a <code>OrderShippingAddress1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderShippingAddress1} obj Optional instance to populate.
    * @return {module:model/OrderShippingAddress1} The populated <code>OrderShippingAddress1</code> instance.
    */


    _createClass(OrderShippingAddress1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OrderShippingAddress1();

                if (data.hasOwnProperty('base_cost')) {
                    obj['base_cost'] = _ApiClient2.default.convertToType(data['base_cost'], 'String');
                }
                if (data.hasOwnProperty('base_handling_cost')) {
                    obj['base_handling_cost'] = _ApiClient2.default.convertToType(data['base_handling_cost'], 'String');
                }
                if (data.hasOwnProperty('city')) {
                    obj['city'] = _ApiClient2.default.convertToType(data['city'], 'String');
                }
                if (data.hasOwnProperty('company')) {
                    obj['company'] = _ApiClient2.default.convertToType(data['company'], 'String');
                }
                if (data.hasOwnProperty('cost_ex_tax')) {
                    obj['cost_ex_tax'] = _ApiClient2.default.convertToType(data['cost_ex_tax'], 'String');
                }
                if (data.hasOwnProperty('cost_inc_tax')) {
                    obj['cost_inc_tax'] = _ApiClient2.default.convertToType(data['cost_inc_tax'], 'String');
                }
                if (data.hasOwnProperty('cost_tax')) {
                    obj['cost_tax'] = _ApiClient2.default.convertToType(data['cost_tax'], 'String');
                }
                if (data.hasOwnProperty('cost_tax_class_id')) {
                    obj['cost_tax_class_id'] = _ApiClient2.default.convertToType(data['cost_tax_class_id'], 'Number');
                }
                if (data.hasOwnProperty('country')) {
                    obj['country'] = _ApiClient2.default.convertToType(data['country'], 'String');
                }
                if (data.hasOwnProperty('country_iso2')) {
                    obj['country_iso2'] = _ApiClient2.default.convertToType(data['country_iso2'], 'String');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
                if (data.hasOwnProperty('first_name')) {
                    obj['first_name'] = _ApiClient2.default.convertToType(data['first_name'], 'String');
                }
                if (data.hasOwnProperty('form_fields')) {
                    obj['form_fields'] = _ApiClient2.default.convertToType(data['form_fields'], [_FormFields2.default]);
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
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('items_shipped')) {
                    obj['items_shipped'] = _ApiClient2.default.convertToType(data['items_shipped'], 'Number');
                }
                if (data.hasOwnProperty('items_total')) {
                    obj['items_total'] = _ApiClient2.default.convertToType(data['items_total'], 'Number');
                }
                if (data.hasOwnProperty('last_name')) {
                    obj['last_name'] = _ApiClient2.default.convertToType(data['last_name'], 'String');
                }
                if (data.hasOwnProperty('order_id')) {
                    obj['order_id'] = _ApiClient2.default.convertToType(data['order_id'], 'Number');
                }
                if (data.hasOwnProperty('phone')) {
                    obj['phone'] = _ApiClient2.default.convertToType(data['phone'], 'String');
                }
                if (data.hasOwnProperty('shipping_method')) {
                    obj['shipping_method'] = _ApiClient2.default.convertToType(data['shipping_method'], 'String');
                }
                if (data.hasOwnProperty('shipping_quotes')) {
                    obj['shipping_quotes'] = _ShippingQuotesResource2.default.constructFromObject(data['shipping_quotes']);
                }
                if (data.hasOwnProperty('shipping_zone_id')) {
                    obj['shipping_zone_id'] = _ApiClient2.default.convertToType(data['shipping_zone_id'], 'Number');
                }
                if (data.hasOwnProperty('shipping_zone_name')) {
                    obj['shipping_zone_name'] = _ApiClient2.default.convertToType(data['shipping_zone_name'], 'String');
                }
                if (data.hasOwnProperty('state')) {
                    obj['state'] = _ApiClient2.default.convertToType(data['state'], 'String');
                }
                if (data.hasOwnProperty('street_1')) {
                    obj['street_1'] = _ApiClient2.default.convertToType(data['street_1'], 'String');
                }
                if (data.hasOwnProperty('street_2')) {
                    obj['street_2'] = _ApiClient2.default.convertToType(data['street_2'], 'String');
                }
                if (data.hasOwnProperty('zip')) {
                    obj['zip'] = _ApiClient2.default.convertToType(data['zip'], 'String');
                }
            }
            return obj;
        }

        /**
        * The base value of the order’s items. (Float, Float-As-String, Integer)
        * @member {String} base_cost
        */

        /**
        * The base handling charge. (Float, Float-As-String, Integer)
        * @member {String} base_handling_cost
        */

        /**
        * @member {String} city
        */

        /**
        * @member {String} company
        */

        /**
        * The value of the order’s items, excluding tax. (Float, Float-As-String, Integer)
        * @member {String} cost_ex_tax
        */

        /**
        * The value of the order’s items, including tax. (Float, Float-As-String, Integer)
        * @member {String} cost_inc_tax
        */

        /**
        * The tax amount on the order. (Float, Float-As-String, Integer)
        * @member {String} cost_tax
        */

        /**
        * The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.)
        * @member {Number} cost_tax_class_id
        */

        /**
        * @member {String} country
        */

        /**
        * 2-letter ISO Alpha-2 code for the country.
        * @member {String} country_iso2
        */

        /**
        * Recipient's email address. 
        * @member {String} email
        */

        /**
        * @member {String} first_name
        */

        /**
        * @member {Array.<module:model/FormFields1>} form_fields
        */

        /**
        * The handling charge, excluding tax. (Float, Float-As-String, Integer)
        * @member {String} handling_cost_ex_tax
        */

        /**
        * The handling charge, including tax. (Float, Float-As-String, Integer)
        * @member {String} handling_cost_inc_tax
        */

        /**
        * @member {String} handling_cost_tax
        */

        /**
        * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)
        * @member {Number} handling_cost_tax_class_id
        */

        /**
        * ID of this shipping address.
        * @member {Number} id
        */

        /**
        * The number of items that have been shipped.
        * @member {Number} items_shipped
        */

        /**
        * The total number of items in the order.
        * @member {Number} items_total
        */

        /**
        * @member {String} last_name
        */

        /**
        * ID of the order.
        * @member {Number} order_id
        */

        /**
        * Recipient's telephone number.
        * @member {String} phone
        */

        /**
        * Text code identifying the BigCommerce shipping module selected by the customer.
        * @member {String} shipping_method
        */

        /**
        * @member {module:model/ShippingQuotesResource1} shipping_quotes
        */

        /**
        * Numeric ID of the shipping zone.
        * @member {Number} shipping_zone_id
        */

        /**
        * Name of the shipping zone.
        * @member {String} shipping_zone_name
        */

        /**
        * @member {String} state
        */

        /**
        * Street address (first line).
        * @member {String} street_1
        */

        /**
        * Street address (second line).
        * @member {String} street_2
        */

        /**
        * Zip or postal code, as a string.
        * @member {String} zip
        */

    }]);

    return OrderShippingAddress1;
}();

exports.default = OrderShippingAddress1;