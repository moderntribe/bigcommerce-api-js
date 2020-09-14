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

var _ProductOptionSelection = require('./ProductOptionSelection');

var _ProductOptionSelection2 = _interopRequireDefault(_ProductOptionSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The LineItemRequestData model module.
* @module model/LineItemRequestData
* @version 3.0
*/
var LineItemRequestData = function () {
    /**
    * Constructs a new <code>LineItemRequestData</code>.
    * @alias module:model/LineItemRequestData
    * @class
    * @param quantity {Number} 
    * @param productId {Number} 
    * @param variantId {Number} Required if the product has variants
    */

    function LineItemRequestData(quantity, productId, variantId) {
        _classCallCheck(this, LineItemRequestData);

        this['quantity'] = undefined;
        this['product_id'] = undefined;
        this['variant_id'] = undefined;
        this['list_price'] = undefined;
        this['option_selections'] = undefined;


        this['quantity'] = quantity;
        this['product_id'] = productId;
        this['variant_id'] = variantId;
    }

    /**
    * Constructs a <code>LineItemRequestData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LineItemRequestData} obj Optional instance to populate.
    * @return {module:model/LineItemRequestData} The populated <code>LineItemRequestData</code> instance.
    */


    _createClass(LineItemRequestData, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LineItemRequestData();

                if (data.hasOwnProperty('quantity')) {
                    obj['quantity'] = _ApiClient2.default.convertToType(data['quantity'], 'Number');
                }
                if (data.hasOwnProperty('product_id')) {
                    obj['product_id'] = _ApiClient2.default.convertToType(data['product_id'], 'Number');
                }
                if (data.hasOwnProperty('variant_id')) {
                    obj['variant_id'] = _ApiClient2.default.convertToType(data['variant_id'], 'Number');
                }
                if (data.hasOwnProperty('list_price')) {
                    obj['list_price'] = _ApiClient2.default.convertToType(data['list_price'], 'Number');
                }
                if (data.hasOwnProperty('option_selections')) {
                    obj['option_selections'] = _ApiClient2.default.convertToType(data['option_selections'], [_ProductOptionSelection2.default]);
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
        * Required if the product has variants
        * @member {Number} variant_id
        */

        /**
        * @member {Number} list_price
        */

        /**
        * @member {Array.<module:model/ProductOptionSelection>} option_selections
        */

    }]);

    return LineItemRequestData;
}();

exports.default = LineItemRequestData;