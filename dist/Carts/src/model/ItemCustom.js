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
* The ItemCustom model module.
* @module model/ItemCustom
* @version 3.0
*/
var ItemCustom = function () {
    /**
    * Constructs a new <code>ItemCustom</code>.
    * Add a custom item to the shoppers cart.  * Custom items are not added to the catalog. * The price should be set to match the store settings for taxes.
    * @alias module:model/ItemCustom
    * @class
    */

    function ItemCustom() {
        _classCallCheck(this, ItemCustom);

        this['id'] = undefined;
        this['sku'] = undefined;
        this['name'] = undefined;
        this['quantity'] = undefined;
        this['list_price'] = undefined;
        this['extended_list_price'] = undefined;
    }

    /**
    * Constructs a <code>ItemCustom</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ItemCustom} obj Optional instance to populate.
    * @return {module:model/ItemCustom} The populated <code>ItemCustom</code> instance.
    */


    _createClass(ItemCustom, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ItemCustom();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('sku')) {
                    obj['sku'] = _ApiClient2.default.convertToType(data['sku'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('quantity')) {
                    obj['quantity'] = _ApiClient2.default.convertToType(data['quantity'], 'Number');
                }
                if (data.hasOwnProperty('list_price')) {
                    obj['list_price'] = _ApiClient2.default.convertToType(data['list_price'], 'Number');
                }
                if (data.hasOwnProperty('extended_list_price')) {
                    obj['extended_list_price'] = _ApiClient2.default.convertToType(data['extended_list_price'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Custom item id.
        * @member {String} id
        */

        /**
        * Custom item sku.
        * @member {String} sku
        */

        /**
        * Item's product name.
        * @member {String} name
        */

        /**
        * Quantity of this item in the cart.
        * @member {Number} quantity
        */

        /**
        * Price of the item. With or without tax depending on the store's set up.
        * @member {Number} list_price
        */

        /**
        * Item's list price multiplied by quantity.
        * @member {Number} extended_list_price
        */

    }]);

    return ItemCustom;
}();

exports.default = ItemCustom;