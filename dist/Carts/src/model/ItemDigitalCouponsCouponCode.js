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
* The ItemDigitalCouponsCouponCode model module.
* @module model/ItemDigitalCouponsCouponCode
* @version 3.0
*/
var ItemDigitalCouponsCouponCode = function () {
    /**
    * Constructs a new <code>ItemDigitalCouponsCouponCode</code>.
    * The coupon code
    * @alias module:model/ItemDigitalCouponsCouponCode
    * @class
    */

    function ItemDigitalCouponsCouponCode() {
        _classCallCheck(this, ItemDigitalCouponsCouponCode);

        this['id'] = undefined;
        this['code'] = undefined;
        this['name'] = undefined;
        this['discountType'] = undefined;
        this['discountAmount'] = undefined;
        this['expiresDate'] = undefined;
        this['totalDiscount'] = undefined;
    }

    /**
    * Constructs a <code>ItemDigitalCouponsCouponCode</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ItemDigitalCouponsCouponCode} obj Optional instance to populate.
    * @return {module:model/ItemDigitalCouponsCouponCode} The populated <code>ItemDigitalCouponsCouponCode</code> instance.
    */


    _createClass(ItemDigitalCouponsCouponCode, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ItemDigitalCouponsCouponCode();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('code')) {
                    obj['code'] = _ApiClient2.default.convertToType(data['code'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('discountType')) {
                    obj['discountType'] = _ApiClient2.default.convertToType(data['discountType'], 'Number');
                }
                if (data.hasOwnProperty('discountAmount')) {
                    obj['discountAmount'] = _ApiClient2.default.convertToType(data['discountAmount'], 'Number');
                }
                if (data.hasOwnProperty('expiresDate')) {
                    obj['expiresDate'] = _ApiClient2.default.convertToType(data['expiresDate'], 'Number');
                }
                if (data.hasOwnProperty('totalDiscount')) {
                    obj['totalDiscount'] = _ApiClient2.default.convertToType(data['totalDiscount'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Coupon Id
        * @member {Number} id
        */

        /**
        * The coupon code. Required in a /POST request.
        * @member {String} code
        */

        /**
        * Name given to the coupon in the Control Panel
        * @member {String} name
        */

        /**
        * The discount type.  - type 0: per_item_discount - type 1: percentage_discount - type 2: per_total_discount - type 3: shipping_discount - type 4: free_shipping
        * @member {Number} discountType
        */

        /**
        * The amount of the discount based on the coupoon. For example 3 percent off will show a 3.
        * @member {Number} discountAmount
        */

        /**
        * Returns 0 if a expiration date is not set
        * @member {Number} expiresDate
        */

        /**
        * Total discount amount off cart
        * @member {Number} totalDiscount
        */

    }]);

    return ItemDigitalCouponsCouponCode;
}();

exports.default = ItemDigitalCouponsCouponCode;