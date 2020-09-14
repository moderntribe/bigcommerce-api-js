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

var _AppliedCoupon = require('./AppliedCoupon');

var _AppliedCoupon2 = _interopRequireDefault(_AppliedCoupon);

var _AppliedDiscount = require('./AppliedDiscount');

var _AppliedDiscount2 = _interopRequireDefault(_AppliedDiscount);

var _Currency = require('./Currency1');

var _Currency2 = _interopRequireDefault(_Currency);

var _LineItem = require('./LineItem');

var _LineItem2 = _interopRequireDefault(_LineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The CartFull model module.
* @module model/CartFull
* @version 3.0
*/
var CartFull = function () {
    /**
    * Constructs a new <code>CartFull</code>.
    * A cart contains a collection of items, prices, discounts, etc.. It does not contain customer-related data.
    * @alias module:model/CartFull
    * @class
    */

    function CartFull() {
        _classCallCheck(this, CartFull);

        this['id'] = undefined;
        this['parent_id'] = undefined;
        this['customer_id'] = undefined;
        this['email'] = undefined;
        this['currency'] = undefined;
        this['tax_included'] = undefined;
        this['base_amount'] = undefined;
        this['discount_amount'] = undefined;
        this['cart_amount'] = undefined;
        this['coupons'] = undefined;
        this['discounts'] = undefined;
        this['line_items'] = undefined;
        this['created_time'] = undefined;
        this['updated_time'] = undefined;
        this['channel_id'] = undefined;
    }

    /**
    * Constructs a <code>CartFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CartFull} obj Optional instance to populate.
    * @return {module:model/CartFull} The populated <code>CartFull</code> instance.
    */


    _createClass(CartFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CartFull();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('parent_id')) {
                    obj['parent_id'] = _ApiClient2.default.convertToType(data['parent_id'], 'String');
                }
                if (data.hasOwnProperty('customer_id')) {
                    obj['customer_id'] = _ApiClient2.default.convertToType(data['customer_id'], 'Number');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _Currency2.default.constructFromObject(data['currency']);
                }
                if (data.hasOwnProperty('tax_included')) {
                    obj['tax_included'] = _ApiClient2.default.convertToType(data['tax_included'], 'Boolean');
                }
                if (data.hasOwnProperty('base_amount')) {
                    obj['base_amount'] = _ApiClient2.default.convertToType(data['base_amount'], 'Number');
                }
                if (data.hasOwnProperty('discount_amount')) {
                    obj['discount_amount'] = _ApiClient2.default.convertToType(data['discount_amount'], 'Number');
                }
                if (data.hasOwnProperty('cart_amount')) {
                    obj['cart_amount'] = _ApiClient2.default.convertToType(data['cart_amount'], 'Number');
                }
                if (data.hasOwnProperty('coupons')) {
                    obj['coupons'] = _ApiClient2.default.convertToType(data['coupons'], [_AppliedCoupon2.default]);
                }
                if (data.hasOwnProperty('discounts')) {
                    obj['discounts'] = _ApiClient2.default.convertToType(data['discounts'], [_AppliedDiscount2.default]);
                }
                if (data.hasOwnProperty('line_items')) {
                    obj['line_items'] = _ApiClient2.default.convertToType(data['line_items'], [_LineItem2.default]);
                }
                if (data.hasOwnProperty('created_time')) {
                    obj['created_time'] = _ApiClient2.default.convertToType(data['created_time'], 'String');
                }
                if (data.hasOwnProperty('updated_time')) {
                    obj['updated_time'] = _ApiClient2.default.convertToType(data['updated_time'], 'String');
                }
                if (data.hasOwnProperty('channel_id')) {
                    obj['channel_id'] = _ApiClient2.default.convertToType(data['channel_id'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Cart ID, provided after creating a cart with a POST.
        * @member {String} id
        */

        /**
        * Bundled items will have their parent's item Id.
        * @member {String} parent_id
        */

        /**
        * ID of the customer to which the cart belongs.
        * @member {Number} customer_id
        */

        /**
        * The cart's email. This is the same email that is used in the billing address
        * @member {String} email
        */

        /**
        * @member {module:model/Currency1} currency
        */

        /**
        * @member {Boolean} tax_included
        */

        /**
        * Cost of cart's contents, before applying discounts.
        * @member {Number} base_amount
        */

        /**
        * Discounted amount.
        * @member {Number} discount_amount
        */

        /**
        * Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes (where applicable).
        * @member {Number} cart_amount
        */

        /**
        * @member {Array.<module:model/AppliedCoupon>} coupons
        */

        /**
        * @member {Array.<module:model/AppliedDiscount>} discounts
        */

        /**
        * @member {Array.<module:model/LineItem>} line_items
        */

        /**
        * Time when the cart was created.
        * @member {String} created_time
        */

        /**
        * Time when the cart was last updated.
        * @member {String} updated_time
        */

        /**
        * If no channel is specified, defaults to 1. 
        * @member {Number} channel_id
        */

    }]);

    return CartFull;
}();

exports.default = CartFull;