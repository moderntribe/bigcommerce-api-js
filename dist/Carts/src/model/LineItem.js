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

var _ItemCustom = require('./ItemCustom');

var _ItemCustom2 = _interopRequireDefault(_ItemCustom);

var _ItemGiftCertificate = require('./ItemGiftCertificate');

var _ItemGiftCertificate2 = _interopRequireDefault(_ItemGiftCertificate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The LineItem model module.
* @module model/LineItem
* @version 3.0
*/
var LineItem = function () {
    /**
    * Constructs a new <code>LineItem</code>.
    * @alias module:model/LineItem
    * @class
    * @param physicalItems {Array.<Object>} 
    * @param digitalItems {Array.<Object>} 
    */

    function LineItem(physicalItems, digitalItems) {
        _classCallCheck(this, LineItem);

        this['physical_items'] = undefined;
        this['digital_items'] = undefined;
        this['gift_certificates'] = undefined;
        this['custom_items'] = undefined;


        this['physical_items'] = physicalItems;
        this['digital_items'] = digitalItems;
    }

    /**
    * Constructs a <code>LineItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LineItem} obj Optional instance to populate.
    * @return {module:model/LineItem} The populated <code>LineItem</code> instance.
    */


    _createClass(LineItem, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LineItem();

                if (data.hasOwnProperty('physical_items')) {
                    obj['physical_items'] = _ApiClient2.default.convertToType(data['physical_items'], [AllOfLineItemPhysicalItemsItems]);
                }
                if (data.hasOwnProperty('digital_items')) {
                    obj['digital_items'] = _ApiClient2.default.convertToType(data['digital_items'], [AllOfLineItemDigitalItemsItems]);
                }
                if (data.hasOwnProperty('gift_certificates')) {
                    obj['gift_certificates'] = _ApiClient2.default.convertToType(data['gift_certificates'], [_ItemGiftCertificate2.default]);
                }
                if (data.hasOwnProperty('custom_items')) {
                    obj['custom_items'] = _ApiClient2.default.convertToType(data['custom_items'], [_ItemCustom2.default]);
                }
            }
            return obj;
        }

        /**
        * @member {Array.<Object>} physical_items
        */

        /**
        * @member {Array.<Object>} digital_items
        */

        /**
        * @member {Array.<module:model/ItemGiftCertificate>} gift_certificates
        */

        /**
        * @member {Array.<module:model/ItemCustom>} custom_items
        */

    }]);

    return LineItem;
}();

exports.default = LineItem;