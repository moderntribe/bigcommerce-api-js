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
* The CartPostModifierInner model module.
* @module model/CartPostModifierInner
* @version 3.0
*/
var CartPostModifierInner = function () {
    /**
    * Constructs a new <code>CartPostModifierInner</code>.
    * @alias module:model/CartPostModifierInner
    * @class
    * @param quantity {Number} 
    * @param productId {Number} 
    */

    function CartPostModifierInner(quantity, productId) {
        _classCallCheck(this, CartPostModifierInner);

        this['quantity'] = undefined;
        this['product_id'] = undefined;
        this['list_price'] = undefined;
        this['option_selections'] = undefined;


        this['quantity'] = quantity;
        this['product_id'] = productId;
    }

    /**
    * Constructs a <code>CartPostModifierInner</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CartPostModifierInner} obj Optional instance to populate.
    * @return {module:model/CartPostModifierInner} The populated <code>CartPostModifierInner</code> instance.
    */


    _createClass(CartPostModifierInner, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CartPostModifierInner();

                if (data.hasOwnProperty('quantity')) {
                    obj['quantity'] = _ApiClient2.default.convertToType(data['quantity'], 'Number');
                }
                if (data.hasOwnProperty('product_id')) {
                    obj['product_id'] = _ApiClient2.default.convertToType(data['product_id'], 'Number');
                }
                if (data.hasOwnProperty('list_price')) {
                    obj['list_price'] = _ApiClient2.default.convertToType(data['list_price'], 'Number');
                }
                if (data.hasOwnProperty('option_selections')) {
                    obj['option_selections'] = _ApiClient2.default.convertToType(data['option_selections'], [Object]);
                }
            }
            return obj;
        }

        /**
        * @member {Number} quantity
        */

        /**
        * @member {Number} product_id
        */

        /**
        * Optional price override
        * @member {Number} list_price
        */

        /**
        * Needed for Catalog V2
        * @member {Array.<Object>} option_selections
        */

    }]);

    return CartPostModifierInner;
}();

exports.default = CartPostModifierInner;