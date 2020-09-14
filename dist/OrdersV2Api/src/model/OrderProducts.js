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

var _OrderProductAppliedDiscounts = require('./OrderProductAppliedDiscounts1');

var _OrderProductAppliedDiscounts2 = _interopRequireDefault(_OrderProductAppliedDiscounts);

var _OrderProductOptions = require('./OrderProductOptions1');

var _OrderProductOptions2 = _interopRequireDefault(_OrderProductOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The OrderProducts model module.
* @module model/OrderProducts
* @version 2.0
*/
var OrderProducts = function () {
    /**
    * Constructs a new <code>OrderProducts</code>.
    * @alias module:model/OrderProducts
    * @class
    */

    function OrderProducts() {
        _classCallCheck(this, OrderProducts);

        this['id'] = undefined;
        this['order_id'] = undefined;
        this['product_id'] = undefined;
        this['order_address_id'] = undefined;
        this['name'] = undefined;
        this['sku'] = undefined;
        this['type'] = undefined;
        this['base_price'] = undefined;
        this['price_ex_tax'] = undefined;
        this['price_inc_tax'] = undefined;
        this['price_tax'] = undefined;
        this['base_total'] = undefined;
        this['total_ex_tax'] = undefined;
        this['total_inc_tax'] = undefined;
        this['total_tax'] = undefined;
        this['quantity'] = undefined;
        this['base_cost_price'] = undefined;
        this['cost_price_inc_tax'] = undefined;
        this['cost_price_ex_tax'] = undefined;
        this['weight'] = undefined;
        this['cost_price_tax'] = undefined;
        this['is_refunded'] = undefined;
        this['refunded_amount'] = undefined;
        this['return_id'] = undefined;
        this['wrapping_name'] = undefined;
        this['base_wrapping_cost'] = undefined;
        this['wrapping_cost_ex_tax'] = undefined;
        this['wrapping_cost_inc_tax'] = undefined;
        this['wrapping_cost_tax'] = undefined;
        this['wrapping_message'] = undefined;
        this['quantity_shipped'] = undefined;
        this['event_name'] = undefined;
        this['event_date'] = undefined;
        this['fixed_shipping_cost'] = undefined;
        this['ebay_item_id'] = undefined;
        this['ebay_transaction_id'] = undefined;
        this['option_set_id'] = undefined;
        this['parent_order_product_id'] = undefined;
        this['is_bundled_product'] = undefined;
        this['bin_picking_number'] = undefined;
        this['applied_discounts'] = undefined;
        this['product_options'] = undefined;
        this['external_id'] = undefined;
        this['upc'] = undefined;
        this['variant_id'] = undefined;
    }

    /**
    * Constructs a <code>OrderProducts</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderProducts} obj Optional instance to populate.
    * @return {module:model/OrderProducts} The populated <code>OrderProducts</code> instance.
    */


    _createClass(OrderProducts, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OrderProducts();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('order_id')) {
                    obj['order_id'] = _ApiClient2.default.convertToType(data['order_id'], 'Number');
                }
                if (data.hasOwnProperty('product_id')) {
                    obj['product_id'] = _ApiClient2.default.convertToType(data['product_id'], 'Number');
                }
                if (data.hasOwnProperty('order_address_id')) {
                    obj['order_address_id'] = _ApiClient2.default.convertToType(data['order_address_id'], 'Number');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('sku')) {
                    obj['sku'] = _ApiClient2.default.convertToType(data['sku'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('base_price')) {
                    obj['base_price'] = _ApiClient2.default.convertToType(data['base_price'], 'String');
                }
                if (data.hasOwnProperty('price_ex_tax')) {
                    obj['price_ex_tax'] = _ApiClient2.default.convertToType(data['price_ex_tax'], 'String');
                }
                if (data.hasOwnProperty('price_inc_tax')) {
                    obj['price_inc_tax'] = _ApiClient2.default.convertToType(data['price_inc_tax'], 'String');
                }
                if (data.hasOwnProperty('price_tax')) {
                    obj['price_tax'] = _ApiClient2.default.convertToType(data['price_tax'], 'String');
                }
                if (data.hasOwnProperty('base_total')) {
                    obj['base_total'] = _ApiClient2.default.convertToType(data['base_total'], 'String');
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
                if (data.hasOwnProperty('quantity')) {
                    obj['quantity'] = _ApiClient2.default.convertToType(data['quantity'], 'Number');
                }
                if (data.hasOwnProperty('base_cost_price')) {
                    obj['base_cost_price'] = _ApiClient2.default.convertToType(data['base_cost_price'], 'String');
                }
                if (data.hasOwnProperty('cost_price_inc_tax')) {
                    obj['cost_price_inc_tax'] = _ApiClient2.default.convertToType(data['cost_price_inc_tax'], 'String');
                }
                if (data.hasOwnProperty('cost_price_ex_tax')) {
                    obj['cost_price_ex_tax'] = _ApiClient2.default.convertToType(data['cost_price_ex_tax'], 'String');
                }
                if (data.hasOwnProperty('weight')) {
                    obj['weight'] = _ApiClient2.default.convertToType(data['weight'], 'Number');
                }
                if (data.hasOwnProperty('cost_price_tax')) {
                    obj['cost_price_tax'] = _ApiClient2.default.convertToType(data['cost_price_tax'], 'String');
                }
                if (data.hasOwnProperty('is_refunded')) {
                    obj['is_refunded'] = _ApiClient2.default.convertToType(data['is_refunded'], 'Boolean');
                }
                if (data.hasOwnProperty('refunded_amount')) {
                    obj['refunded_amount'] = _ApiClient2.default.convertToType(data['refunded_amount'], 'String');
                }
                if (data.hasOwnProperty('return_id')) {
                    obj['return_id'] = _ApiClient2.default.convertToType(data['return_id'], 'Number');
                }
                if (data.hasOwnProperty('wrapping_name')) {
                    obj['wrapping_name'] = _ApiClient2.default.convertToType(data['wrapping_name'], 'String');
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
                if (data.hasOwnProperty('wrapping_message')) {
                    obj['wrapping_message'] = _ApiClient2.default.convertToType(data['wrapping_message'], 'String');
                }
                if (data.hasOwnProperty('quantity_shipped')) {
                    obj['quantity_shipped'] = _ApiClient2.default.convertToType(data['quantity_shipped'], 'Number');
                }
                if (data.hasOwnProperty('event_name')) {
                    obj['event_name'] = _ApiClient2.default.convertToType(data['event_name'], 'String');
                }
                if (data.hasOwnProperty('event_date')) {
                    obj['event_date'] = _ApiClient2.default.convertToType(data['event_date'], 'Date');
                }
                if (data.hasOwnProperty('fixed_shipping_cost')) {
                    obj['fixed_shipping_cost'] = _ApiClient2.default.convertToType(data['fixed_shipping_cost'], 'String');
                }
                if (data.hasOwnProperty('ebay_item_id')) {
                    obj['ebay_item_id'] = _ApiClient2.default.convertToType(data['ebay_item_id'], 'String');
                }
                if (data.hasOwnProperty('ebay_transaction_id')) {
                    obj['ebay_transaction_id'] = _ApiClient2.default.convertToType(data['ebay_transaction_id'], 'String');
                }
                if (data.hasOwnProperty('option_set_id')) {
                    obj['option_set_id'] = _ApiClient2.default.convertToType(data['option_set_id'], 'Number');
                }
                if (data.hasOwnProperty('parent_order_product_id')) {
                    obj['parent_order_product_id'] = _ApiClient2.default.convertToType(data['parent_order_product_id'], 'Number');
                }
                if (data.hasOwnProperty('is_bundled_product')) {
                    obj['is_bundled_product'] = _ApiClient2.default.convertToType(data['is_bundled_product'], 'Boolean');
                }
                if (data.hasOwnProperty('bin_picking_number')) {
                    obj['bin_picking_number'] = _ApiClient2.default.convertToType(data['bin_picking_number'], 'String');
                }
                if (data.hasOwnProperty('applied_discounts')) {
                    obj['applied_discounts'] = _ApiClient2.default.convertToType(data['applied_discounts'], [_OrderProductAppliedDiscounts2.default]);
                }
                if (data.hasOwnProperty('product_options')) {
                    obj['product_options'] = _ApiClient2.default.convertToType(data['product_options'], [_OrderProductOptions2.default]);
                }
                if (data.hasOwnProperty('external_id')) {
                    obj['external_id'] = _ApiClient2.default.convertToType(data['external_id'], 'Number');
                }
                if (data.hasOwnProperty('upc')) {
                    obj['upc'] = _ApiClient2.default.convertToType(data['upc'], 'String');
                }
                if (data.hasOwnProperty('variant_id')) {
                    obj['variant_id'] = _ApiClient2.default.convertToType(data['variant_id'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Numeric ID of this product within this order.
        * @member {Number} id
        */

        /**
        * Numeric ID of the associated order.
        * @member {Number} order_id
        */

        /**
        * Numeric ID of the product.
        * @member {Number} product_id
        */

        /**
        * Numeric ID of the associated order address.
        * @member {Number} order_address_id
        */

        /**
        * The product name.
        * @member {String} name
        */

        /**
        * User-defined product code/stock keeping unit (SKU).
        * @member {String} sku
        */

        /**
        * Type of product
        * @member {module:model/OrderProducts.TypeEnum} type
        */

        /**
        * The product's base price. (Float, Float-As-String, Integer)
        * @member {String} base_price
        */

        /**
        * The product’s price excluding tax. (Float, Float-As-String, Integer)
        * @member {String} price_ex_tax
        */

        /**
        * The product’s price including tax. (Float, Float-As-String, Integer)
        * @member {String} price_inc_tax
        */

        /**
        * Amount of tax applied to a single product.  Price tax is calculated as: `price_tax = price_inc_tax - price_ex_tax`  (Float, Float-As-String, Integer)
        * @member {String} price_tax
        */

        /**
        * Total base price. (Float, Float-As-String, Integer)
        * @member {String} base_total
        */

        /**
        * Total base price excluding tax. (Float, Float-As-String, Integer)
        * @member {String} total_ex_tax
        */

        /**
        * Total base price including tax. (Float, Float-As-String, Integer)
        * @member {String} total_inc_tax
        */

        /**
        * Total tax applied to products. For example, if quantity if 2, base price is 5 and tax rate is 10%. price_tax will be $.50 and total_tax will be $1.00.  If there is a manual discount applied total_tax is calcuted as the following: `(price_ex_tax - discount)*tax_rate=total_tax`. (Float, Float-As-String, Integer)
        * @member {String} total_tax
        */

        /**
        * Quantity of the product ordered.
        * @member {Number} quantity
        */

        /**
        * The product's cost price.  This can be set using the Catalog API. (Float, Float-As-String, Integer) Read Only
        * @member {String} base_cost_price
        */

        /**
        * The product's cost price including tax. (Float, Float-As-String, Integer) The cost of your products to you; this is never shown to customers, but can be used for accounting purposes. Read Only
        * @member {String} cost_price_inc_tax
        */

        /**
        * The products cost price excluding tax. (Float, Float-As-String, Integer) The cost of your products to you; this is never shown to customers, but can be used for accounting purposes. Read Only
        * @member {String} cost_price_ex_tax
        */

        /**
        * Weight of the product. (Float, Float-As-String, Integer)
        * @member {Number} weight
        */

        /**
        * Tax applied to the product’s cost price. (Float, Float-As-String, Integer) The cost of your products to you; this is never shown to customers, but can be used for accounting purposes. Read Only
        * @member {String} cost_price_tax
        */

        /**
        * Whether the product has been refunded.
        * @member {Boolean} is_refunded
        */

        /**
        * The amount refunded from this transaction. (Float, Float-As-String, Integer)
        * @member {String} refunded_amount
        */

        /**
        * Numeric ID for the refund.
        * @member {Number} return_id
        */

        /**
        * Name of gift-wrapping option
        * @member {String} wrapping_name
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
        * Tax applied to gift-wrapping option. (Float, Float-As-String, Integer)
        * @member {String} wrapping_cost_tax
        */

        /**
        * Message to accompany gift-wrapping option.
        * @member {String} wrapping_message
        */

        /**
        * Quantity of this item shipped.
        * @member {Number} quantity_shipped
        */

        /**
        * Name of promotional event/delivery date.
        * @member {String} event_name
        */

        /**
        * Date of the promotional event/scheduled delivery.
        * @member {Date} event_date
        */

        /**
        * Fixed shipping cost for this product. (Float, Float-As-String, Integer)
        * @member {String} fixed_shipping_cost
        */

        /**
        * Item ID for this product on eBay.
        * @member {String} ebay_item_id
        */

        /**
        * Transaction ID for this product on eBay.
        * @member {String} ebay_transaction_id
        */

        /**
        * Numeric ID of the option set applied to the product.
        * @member {Number} option_set_id
        */

        /**
        * ID of a parent product.
        * @member {Number} parent_order_product_id
        */

        /**
        * Whether this product is bundled with other products.
        * @member {Boolean} is_bundled_product
        */

        /**
        * Bin picking number for the physical product.
        * @member {String} bin_picking_number
        */

        /**
        * Array of objects containing discounts applied to the product.
        * @member {Array.<module:model/OrderProductAppliedDiscounts1>} applied_discounts
        */

        /**
        * Array of product option objects.
        * @member {Array.<module:model/OrderProductOptions1>} product_options
        */

        /**
        * ID of the order in another system. For example, the Amazon Order ID if this is an Amazon order.This field can be updated in a /POST, but using a /PUT to update the order will return a 400 error. The field 'external_id' cannot be written to. Please remove it from your request before trying again. It can not be overwritten once set.
        * @member {Number} external_id
        */

        /**
        * Universal Product Code. Can be written to for custom products and catalog products.
        * @member {String} upc
        */

        /**
        * Products `variant_id`. PUT or POST. This field is not available for custom products.
        * @member {Number} variant_id
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return OrderProducts;
}();

OrderProducts.TypeEnum = {
    /**
     * value: "physical"
     * @const
     */
    "physical": "physical",
    /**
     * value: "digital"
     * @const
     */
    "digital": "digital" };
exports.default = OrderProducts;