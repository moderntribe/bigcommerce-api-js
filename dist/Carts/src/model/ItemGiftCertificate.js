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

var _ContactEntity = require('./ContactEntity');

var _ContactEntity2 = _interopRequireDefault(_ContactEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ItemGiftCertificate model module.
* @module model/ItemGiftCertificate
* @version 3.0
*/
var ItemGiftCertificate = function () {
    /**
    * Constructs a new <code>ItemGiftCertificate</code>.
    * @alias module:model/ItemGiftCertificate
    * @class
    * @param theme {String} Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
    * @param amount {Number} Value must be between 1.00 and 1,000.00 in the store's default currency.
    * @param sender {module:model/ContactEntity} 
    * @param recipient {module:model/ContactEntity} 
    */

    function ItemGiftCertificate(theme, amount, sender, recipient) {
        _classCallCheck(this, ItemGiftCertificate);

        this['id'] = undefined;
        this['name'] = undefined;
        this['theme'] = undefined;
        this['amount'] = undefined;
        this['is_taxable'] = undefined;
        this['sender'] = undefined;
        this['recipient'] = undefined;
        this['message'] = undefined;


        this['theme'] = theme;
        this['amount'] = amount;
        this['sender'] = sender;
        this['recipient'] = recipient;
    }

    /**
    * Constructs a <code>ItemGiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ItemGiftCertificate} obj Optional instance to populate.
    * @return {module:model/ItemGiftCertificate} The populated <code>ItemGiftCertificate</code> instance.
    */


    _createClass(ItemGiftCertificate, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ItemGiftCertificate();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('theme')) {
                    obj['theme'] = _ApiClient2.default.convertToType(data['theme'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('is_taxable')) {
                    obj['is_taxable'] = _ApiClient2.default.convertToType(data['is_taxable'], 'Boolean');
                }
                if (data.hasOwnProperty('sender')) {
                    obj['sender'] = _ContactEntity2.default.constructFromObject(data['sender']);
                }
                if (data.hasOwnProperty('recipient')) {
                    obj['recipient'] = _ContactEntity2.default.constructFromObject(data['recipient']);
                }
                if (data.hasOwnProperty('message')) {
                    obj['message'] = _ApiClient2.default.convertToType(data['message'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} id
        */

        /**
        * GiftCertificate-provided name that will appear in the control panel.
        * @member {String} name
        */

        /**
        * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
        * @member {String} theme
        */

        /**
        * Value must be between 1.00 and 1,000.00 in the store's default currency.
        * @member {Number} amount
        */

        /**
        * @member {Boolean} is_taxable
        */

        /**
        * @member {module:model/ContactEntity} sender
        */

        /**
        * @member {module:model/ContactEntity} recipient
        */

        /**
        * Limited to 200 characters.
        * @member {String} message
        */

    }]);

    return ItemGiftCertificate;
}();

exports.default = ItemGiftCertificate;