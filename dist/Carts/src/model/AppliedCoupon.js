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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The AppliedCoupon model module.
* @module model/AppliedCoupon
* @version 3.0
*/
var AppliedCoupon = function () {
    /**
    * Constructs a new <code>AppliedCoupon</code>.
    * |Type &#x60;int&#x60;|Type Name| |-|-| |&#x60;0&#x60;|&#x60;per_item_discount&#x60;| |&#x60;1&#x60;|&#x60;percentage_discount&#x60;| |&#x60;2&#x60;|&#x60;per_total_discount&#x60;| |&#x60;3&#x60;|&#x60;shipping_discount&#x60;| |&#x60;4&#x60;|&#x60;free_shipping&#x60;| |&#x60;5&#x60;|&#x60;promotion&#x60;|
    * @alias module:model/AppliedCoupon
    * @class
    * @param code {String} the coupon code
    */

    function AppliedCoupon(code) {
        _classCallCheck(this, AppliedCoupon);

        this['code'] = undefined;
        this['id'] = undefined;
        this['coupon_type'] = undefined;
        this['discounted_amount'] = undefined;


        this['code'] = code;
    }

    /**
    * Constructs a <code>AppliedCoupon</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AppliedCoupon} obj Optional instance to populate.
    * @return {module:model/AppliedCoupon} The populated <code>AppliedCoupon</code> instance.
    */


    _createClass(AppliedCoupon, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AppliedCoupon();

                if (data.hasOwnProperty('code')) {
                    obj['code'] = _ApiClient2.default.convertToType(data['code'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('coupon_type')) {
                    obj['coupon_type'] = _ApiClient2.default.convertToType(data['coupon_type'], 'String');
                }
                if (data.hasOwnProperty('discounted_amount')) {
                    obj['discounted_amount'] = _ApiClient2.default.convertToType(data['discounted_amount'], 'Number');
                }
            }
            return obj;
        }

        /**
        * the coupon code
        * @member {String} code
        */

        /**
        * The coupon ID. Read Only
        * @member {String} id
        */

        /**
        * Key name to identify the type of coupon.  type 0: per_item_discount   type 1: percentage_discount   type 2: per_total_discount type 3: shipping_discount   type 4: free_shipping type 5: promotion
        * @member {String} coupon_type
        */

        /**
        * The discounted amount applied within a given context.
        * @member {Number} discounted_amount
        */

    }]);

    return AppliedCoupon;
}();

exports.default = AppliedCoupon;