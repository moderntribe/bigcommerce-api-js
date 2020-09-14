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

var _OrderProductProductOptions = require('./OrderProductProductOptions');

var _OrderProductProductOptions2 = _interopRequireDefault(_OrderProductProductOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The OrderProduct model module.
* @module model/OrderProduct
* @version 2.0
*/
var OrderProduct = function () {
    /**
    * Constructs a new <code>OrderProduct</code>.
    * &#x60;product_options&#x60; are required if adding a product with variants.
    * @alias module:model/OrderProduct
    * @class
    * @param productId {Number} 
    * @param productOptions {Array.<module:model/OrderProductProductOptions>} 
    * @param quantity {Number} 
    */

    function OrderProduct(productId, productOptions, quantity) {
        _classCallCheck(this, OrderProduct);

        this['product_id'] = undefined;
        this['product_options'] = undefined;
        this['quantity'] = undefined;
        this['price_inc_tax'] = undefined;
        this['price_ex_tax'] = undefined;
        this['upc'] = undefined;
        this['variant_id'] = undefined;
        this['wrapping_name'] = undefined;
        this['wrapping_message'] = undefined;
        this['wrapping_cost_ex_tax'] = undefined;
        this['wrapping_cost_inc_tax'] = undefined;


        this['product_id'] = productId;
        this['product_options'] = productOptions;
        this['quantity'] = quantity;
    }

    /**
    * Constructs a <code>OrderProduct</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderProduct} obj Optional instance to populate.
    * @return {module:model/OrderProduct} The populated <code>OrderProduct</code> instance.
    */


    _createClass(OrderProduct, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OrderProduct();

                if (data.hasOwnProperty('product_id')) {
                    obj['product_id'] = _ApiClient2.default.convertToType(data['product_id'], 'Number');
                }
                if (data.hasOwnProperty('product_options')) {
                    obj['product_options'] = _ApiClient2.default.convertToType(data['product_options'], [_OrderProductProductOptions2.default]);
                }
                if (data.hasOwnProperty('quantity')) {
                    obj['quantity'] = _ApiClient2.default.convertToType(data['quantity'], 'Number');
                }
                if (data.hasOwnProperty('price_inc_tax')) {
                    obj['price_inc_tax'] = _ApiClient2.default.convertToType(data['price_inc_tax'], 'Number');
                }
                if (data.hasOwnProperty('price_ex_tax')) {
                    obj['price_ex_tax'] = _ApiClient2.default.convertToType(data['price_ex_tax'], 'Number');
                }
                if (data.hasOwnProperty('upc')) {
                    obj['upc'] = _ApiClient2.default.convertToType(data['upc'], 'String');
                }
                if (data.hasOwnProperty('variant_id')) {
                    obj['variant_id'] = _ApiClient2.default.convertToType(data['variant_id'], 'Number');
                }
                if (data.hasOwnProperty('wrapping_name')) {
                    obj['wrapping_name'] = _ApiClient2.default.convertToType(data['wrapping_name'], 'String');
                }
                if (data.hasOwnProperty('wrapping_message')) {
                    obj['wrapping_message'] = _ApiClient2.default.convertToType(data['wrapping_message'], 'String');
                }
                if (data.hasOwnProperty('wrapping_cost_ex_tax')) {
                    obj['wrapping_cost_ex_tax'] = _ApiClient2.default.convertToType(data['wrapping_cost_ex_tax'], 'Number');
                }
                if (data.hasOwnProperty('wrapping_cost_inc_tax')) {
                    obj['wrapping_cost_inc_tax'] = _ApiClient2.default.convertToType(data['wrapping_cost_inc_tax'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {Number} product_id
        */

        /**
        * @member {Array.<module:model/OrderProductProductOptions>} product_options
        */

        /**
        * @member {Number} quantity
        */

        /**
        * @member {Number} price_inc_tax
        */

        /**
        * @member {Number} price_ex_tax
        */

        /**
        * @member {String} upc
        */

        /**
        * Products `variant_id`. PUT or POST. This field is not available for custom products.
        * @member {Number} variant_id
        */

        /**
        * @member {String} wrapping_name
        */

        /**
        * @member {String} wrapping_message
        */

        /**
        * @member {Number} wrapping_cost_ex_tax
        */

        /**
        * @member {Number} wrapping_cost_inc_tax
        */

    }]);

    return OrderProduct;
}();

exports.default = OrderProduct;