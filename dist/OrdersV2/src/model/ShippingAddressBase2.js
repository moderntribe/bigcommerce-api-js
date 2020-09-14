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
* The ShippingAddressBase2 model module.
* @module model/ShippingAddressBase2
* @version 2.0
*/
var ShippingAddressBase2 = function () {
    /**
    * Constructs a new <code>ShippingAddressBase2</code>.
    * @alias module:model/ShippingAddressBase2
    * @class
    */

    function ShippingAddressBase2() {
        _classCallCheck(this, ShippingAddressBase2);

        this['first_name'] = undefined;
        this['last_name'] = undefined;
        this['company'] = undefined;
        this['street_1'] = undefined;
        this['street_2'] = undefined;
        this['city'] = undefined;
        this['state'] = undefined;
        this['zip'] = undefined;
        this['country'] = undefined;
        this['country_iso2'] = undefined;
        this['phone'] = undefined;
        this['email'] = undefined;
    }

    /**
    * Constructs a <code>ShippingAddressBase2</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShippingAddressBase2} obj Optional instance to populate.
    * @return {module:model/ShippingAddressBase2} The populated <code>ShippingAddressBase2</code> instance.
    */


    _createClass(ShippingAddressBase2, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ShippingAddressBase2();

                if (data.hasOwnProperty('first_name')) {
                    obj['first_name'] = _ApiClient2.default.convertToType(data['first_name'], 'String');
                }
                if (data.hasOwnProperty('last_name')) {
                    obj['last_name'] = _ApiClient2.default.convertToType(data['last_name'], 'String');
                }
                if (data.hasOwnProperty('company')) {
                    obj['company'] = _ApiClient2.default.convertToType(data['company'], 'String');
                }
                if (data.hasOwnProperty('street_1')) {
                    obj['street_1'] = _ApiClient2.default.convertToType(data['street_1'], 'String');
                }
                if (data.hasOwnProperty('street_2')) {
                    obj['street_2'] = _ApiClient2.default.convertToType(data['street_2'], 'String');
                }
                if (data.hasOwnProperty('city')) {
                    obj['city'] = _ApiClient2.default.convertToType(data['city'], 'String');
                }
                if (data.hasOwnProperty('state')) {
                    obj['state'] = _ApiClient2.default.convertToType(data['state'], 'String');
                }
                if (data.hasOwnProperty('zip')) {
                    obj['zip'] = _ApiClient2.default.convertToType(data['zip'], 'String');
                }
                if (data.hasOwnProperty('country')) {
                    obj['country'] = _ApiClient2.default.convertToType(data['country'], 'String');
                }
                if (data.hasOwnProperty('country_iso2')) {
                    obj['country_iso2'] = _ApiClient2.default.convertToType(data['country_iso2'], 'String');
                }
                if (data.hasOwnProperty('phone')) {
                    obj['phone'] = _ApiClient2.default.convertToType(data['phone'], 'String');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} first_name
        */

        /**
        * @member {String} last_name
        */

        /**
        * @member {String} company
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
        * @member {String} city
        */

        /**
        * @member {String} state
        */

        /**
        * Zip or postal code, as a string.
        * @member {String} zip
        */

        /**
        * @member {String} country
        */

        /**
        * 2-letter ISO Alpha-2 code for the country.
        * @member {String} country_iso2
        */

        /**
        * Recipient's telephone number.
        * @member {String} phone
        */

        /**
        * Recipient's email address. 
        * @member {String} email
        */

    }]);

    return ShippingAddressBase2;
}();

exports.default = ShippingAddressBase2;