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

var _CartsCustomItems = require('./CartsCustomItems');

var _CartsCustomItems2 = _interopRequireDefault(_CartsCustomItems);

var _LineItemGiftCertificateRequestData = require('./LineItemGiftCertificateRequestData');

var _LineItemGiftCertificateRequestData2 = _interopRequireDefault(_LineItemGiftCertificateRequestData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The CartLineItemUpdatePost1 model module.
* @module model/CartLineItemUpdatePost1
* @version 3.0
*/
var CartLineItemUpdatePost1 = function () {
    /**
    * Constructs a new <code>CartLineItemUpdatePost1</code>.
    * @alias module:model/CartLineItemUpdatePost1
    * @class
    */

    function CartLineItemUpdatePost1() {
        _classCallCheck(this, CartLineItemUpdatePost1);

        this['line_items'] = undefined;
        this['gift_certificates'] = undefined;
        this['custom_items'] = undefined;
    }

    /**
    * Constructs a <code>CartLineItemUpdatePost1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CartLineItemUpdatePost1} obj Optional instance to populate.
    * @return {module:model/CartLineItemUpdatePost1} The populated <code>CartLineItemUpdatePost1</code> instance.
    */


    _createClass(CartLineItemUpdatePost1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CartLineItemUpdatePost1();

                if (data.hasOwnProperty('line_items')) {
                    obj['line_items'] = _ApiClient2.default.convertToType(data['line_items'], Object);
                }
                if (data.hasOwnProperty('gift_certificates')) {
                    obj['gift_certificates'] = _ApiClient2.default.convertToType(data['gift_certificates'], [_LineItemGiftCertificateRequestData2.default]);
                }
                if (data.hasOwnProperty('custom_items')) {
                    obj['custom_items'] = _ApiClient2.default.convertToType(data['custom_items'], [_CartsCustomItems2.default]);
                }
            }
            return obj;
        }

        /**
        * @member {Object} line_items
        */

        /**
        * @member {Array.<module:model/LineItemGiftCertificateRequestData>} gift_certificates
        */

        /**
        * @member {Array.<module:model/CartsCustomItems>} custom_items
        */

    }]);

    return CartLineItemUpdatePost1;
}();

exports.default = CartLineItemUpdatePost1;