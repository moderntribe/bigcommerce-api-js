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
* The ProductOption model module.
* @module model/ProductOption
* @version 3.0
*/
var ProductOption = function () {
    /**
    * Constructs a new <code>ProductOption</code>.
    * @alias module:model/ProductOption
    * @class
    */

    function ProductOption() {
        _classCallCheck(this, ProductOption);

        this['name'] = undefined;
        this['name_id'] = undefined;
        this['value'] = undefined;
        this['value_id'] = undefined;
    }

    /**
    * Constructs a <code>ProductOption</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductOption} obj Optional instance to populate.
    * @return {module:model/ProductOption} The populated <code>ProductOption</code> instance.
    */


    _createClass(ProductOption, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProductOption();

                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('name_id')) {
                    obj['name_id'] = _ApiClient2.default.convertToType(data['name_id'], 'Number');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'String');
                }
                if (data.hasOwnProperty('value_id')) {
                    obj['value_id'] = _ApiClient2.default.convertToType(data['value_id'], 'Number');
                }
            }
            return obj;
        }

        /**
        * The product option name. For example, Color or Size
        * @member {String} name
        */

        /**
        * The product option identifier.
        * @member {Number} name_id
        */

        /**
        * The product option value. For example, Red or Medium
        * @member {String} value
        */

        /**
        * The product option value identifier.
        * @member {Number} value_id
        */

    }]);

    return ProductOption;
}();

exports.default = ProductOption;