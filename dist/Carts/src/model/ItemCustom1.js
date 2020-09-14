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
* The ItemCustom1 model module.
* @module model/ItemCustom1
* @version 3.0
*/
var ItemCustom1 = function () {
    /**
    * Constructs a new <code>ItemCustom1</code>.
    * Add a custom item to the shoppers cart.  * Custom items are not added to the catalog. * The price should be set to match the store settings for taxes.
    * @alias module:model/ItemCustom1
    * @class
    */

    function ItemCustom1() {
        _classCallCheck(this, ItemCustom1);

        this['id'] = undefined;
        this['sku'] = undefined;
        this['name'] = undefined;
        this['quantity'] = undefined;
        this['list_price'] = undefined;
    }

    /**
    * Constructs a <code>ItemCustom1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ItemCustom1} obj Optional instance to populate.
    * @return {module:model/ItemCustom1} The populated <code>ItemCustom1</code> instance.
    */


    _createClass(ItemCustom1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ItemCustom1();

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
                    obj['quantity'] = _ApiClient2.default.convertToType(data['quantity'], 'String');
                }
                if (data.hasOwnProperty('list_price')) {
                    obj['list_price'] = _ApiClient2.default.convertToType(data['list_price'], 'String');
                }
            }
            return obj;
        }

        /**
        * Id of the custom item
        * @member {String} id
        */

        /**
        * Custom item sku
        * @member {String} sku
        */

        /**
        * Item name
        * @member {String} name
        */

        /**
        * @member {String} quantity
        */

        /**
        * Price of the item. With or without tax depending on your stores set up. Optional price override.
        * @member {String} list_price
        */

    }]);

    return ItemCustom1;
}();

exports.default = ItemCustom1;