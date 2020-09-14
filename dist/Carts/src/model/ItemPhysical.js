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

var _GiftWrapping = require('./GiftWrapping');

var _GiftWrapping2 = _interopRequireDefault(_GiftWrapping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ItemPhysical model module.
* @module model/ItemPhysical
* @version 3.0
*/
var ItemPhysical = function () {
    /**
    * Constructs a new <code>ItemPhysical</code>.
    * @alias module:model/ItemPhysical
    * @class
    */

    function ItemPhysical() {
        _classCallCheck(this, ItemPhysical);

        this['is_require_shipping'] = undefined;
        this['gift_wrapping'] = undefined;
    }

    /**
    * Constructs a <code>ItemPhysical</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ItemPhysical} obj Optional instance to populate.
    * @return {module:model/ItemPhysical} The populated <code>ItemPhysical</code> instance.
    */


    _createClass(ItemPhysical, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ItemPhysical();

                if (data.hasOwnProperty('is_require_shipping')) {
                    obj['is_require_shipping'] = _ApiClient2.default.convertToType(data['is_require_shipping'], 'Boolean');
                }
                if (data.hasOwnProperty('gift_wrapping')) {
                    obj['gift_wrapping'] = _GiftWrapping2.default.constructFromObject(data['gift_wrapping']);
                }
            }
            return obj;
        }

        /**
        * @member {Boolean} is_require_shipping
        */

        /**
        * @member {module:model/GiftWrapping} gift_wrapping
        */

    }]);

    return ItemPhysical;
}();

exports.default = ItemPhysical;