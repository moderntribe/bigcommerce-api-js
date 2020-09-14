'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Carts
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ### Cart Allows for a cart to be created using BigCommerce cart logic. The existing BigCommerce front end cart can be bypassed.  Notes: - A **cart** `id` is the same as a **checkout** `id`. - A cart can be created by adding an existing **catalog item** or a **custom item**. - Carts are valid for 30 days from the last modification. This can include creating the cart or editing the cart. - Redirect URLs can be generated only from carts created using the Server to Server Cart API. To restore a cart that was created on the storefront, either by a shopper or the Storefront Cart API, first recreate the cart using the Server to Server Cart API.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AppliedCoupon = require('./AppliedCoupon1');

var _AppliedCoupon2 = _interopRequireDefault(_AppliedCoupon);

var _AppliedDiscount = require('./AppliedDiscount1');

var _AppliedDiscount2 = _interopRequireDefault(_AppliedDiscount);

var _ProductOption = require('./ProductOption');

var _ProductOption2 = _interopRequireDefault(_ProductOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The BaseItem model module.
* @module model/BaseItem
* @version 3.0
*/
var BaseItem = function () {
    /**
    * Constructs a new <code>BaseItem</code>.
    * @alias module:model/BaseItem
    * @class
    * @param variantId {Number} The id of the variant. Required in the /PUT or /POST if the product has variants.
    * @param productId {Number} The id of the product. Required in a /POST
    * @param quantity {Number} Quantity of this item in the cart.
    */

    function BaseItem(variantId, productId, quantity) {
        _classCallCheck(this, BaseItem);

        this['id'] = undefined;
        this['variant_id'] = undefined;
        this['product_id'] = undefined;
        this['sku'] = undefined;
        this['name'] = undefined;
        this['url'] = undefined;
        this['quantity'] = undefined;
        this['is_taxable'] = undefined;
        this['image_url'] = undefined;
        this['discounts'] = undefined;
        this['coupons'] = undefined;
        this['discount_amount'] = undefined;
        this['coupon_amount'] = undefined;
        this['list_price'] = undefined;
        this['sale_price'] = undefined;
        this['extended_list_price'] = undefined;
        this['extended_sale_price'] = undefined;
        this['options'] = undefined;


        this['variant_id'] = variantId;
        this['product_id'] = productId;
        this['quantity'] = quantity;
    }

    /**
    * Constructs a <code>BaseItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BaseItem} obj Optional instance to populate.
    * @return {module:model/BaseItem} The populated <code>BaseItem</code> instance.
    */


    _createClass(BaseItem, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new BaseItem();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('variant_id')) {
                    obj['variant_id'] = _ApiClient2.default.convertToType(data['variant_id'], 'Number');
                }
                if (data.hasOwnProperty('product_id')) {
                    obj['product_id'] = _ApiClient2.default.convertToType(data['product_id'], 'Number');
                }
                if (data.hasOwnProperty('sku')) {
                    obj['sku'] = _ApiClient2.default.convertToType(data['sku'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
                if (data.hasOwnProperty('quantity')) {
                    obj['quantity'] = _ApiClient2.default.convertToType(data['quantity'], 'Number');
                }
                if (data.hasOwnProperty('is_taxable')) {
                    obj['is_taxable'] = _ApiClient2.default.convertToType(data['is_taxable'], 'Boolean');
                }
                if (data.hasOwnProperty('image_url')) {
                    obj['image_url'] = _ApiClient2.default.convertToType(data['image_url'], 'String');
                }
                if (data.hasOwnProperty('discounts')) {
                    obj['discounts'] = _ApiClient2.default.convertToType(data['discounts'], [_AppliedDiscount2.default]);
                }
                if (data.hasOwnProperty('coupons')) {
                    obj['coupons'] = _ApiClient2.default.convertToType(data['coupons'], [_AppliedCoupon2.default]);
                }
                if (data.hasOwnProperty('discount_amount')) {
                    obj['discount_amount'] = _ApiClient2.default.convertToType(data['discount_amount'], 'Number');
                }
                if (data.hasOwnProperty('coupon_amount')) {
                    obj['coupon_amount'] = _ApiClient2.default.convertToType(data['coupon_amount'], 'Number');
                }
                if (data.hasOwnProperty('list_price')) {
                    obj['list_price'] = _ApiClient2.default.convertToType(data['list_price'], 'Number');
                }
                if (data.hasOwnProperty('sale_price')) {
                    obj['sale_price'] = _ApiClient2.default.convertToType(data['sale_price'], 'Number');
                }
                if (data.hasOwnProperty('extended_list_price')) {
                    obj['extended_list_price'] = _ApiClient2.default.convertToType(data['extended_list_price'], 'Number');
                }
                if (data.hasOwnProperty('extended_sale_price')) {
                    obj['extended_sale_price'] = _ApiClient2.default.convertToType(data['extended_sale_price'], 'Number');
                }
                if (data.hasOwnProperty('options')) {
                    obj['options'] = _ApiClient2.default.convertToType(data['options'], [_ProductOption2.default]);
                }
            }
            return obj;
        }

        /**
        * The line-item ID.
        * @member {String} id
        */

        /**
        * The id of the variant. Required in the /PUT or /POST if the product has variants.
        * @member {Number} variant_id
        */

        /**
        * The id of the product. Required in a /POST
        * @member {Number} product_id
        */

        /**
        * SKU of the variant.
        * @member {String} sku
        */

        /**
        * The item's product name.
        * @member {String} name
        */

        /**
        * The product URL.
        * @member {String} url
        */

        /**
        * Quantity of this item in the cart.
        * @member {Number} quantity
        */

        /**
        * Whether the item is taxable.
        * @member {Boolean} is_taxable
        */

        /**
        * Image of the product or variant.
        * @member {String} image_url
        */

        /**
        * @member {Array.<module:model/AppliedDiscount1>} discounts
        */

        /**
        * @member {Array.<module:model/AppliedCoupon1>} coupons
        */

        /**
        * The total value of all discounts applied to this item. This includes coupons and cart level discounts
        * @member {Number} discount_amount
        */

        /**
        * The total value of all coupons applied to this item.
        * @member {Number} coupon_amount
        */

        /**
        * Item's list price, as quoted by the manufacturer/distributor.
        * @member {Number} list_price
        */

        /**
        * Item's price after all discounts are applied. (The final price before tax calculation.)
        * @member {Number} sale_price
        */

        /**
        * Item's list price multiplied by the quantity.
        * @member {Number} extended_list_price
        */

        /**
        * Item's sale price multiplied by the quantity.
        * @member {Number} extended_sale_price
        */

        /**
        * The list of selected options for this product.
        * @member {Array.<module:model/ProductOption>} options
        */

    }]);

    return BaseItem;
}();

exports.default = BaseItem;