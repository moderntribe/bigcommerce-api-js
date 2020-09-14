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

var _LineItemGiftCertificateRequestData = require('./LineItemGiftCertificateRequestData');

var _LineItemGiftCertificateRequestData2 = _interopRequireDefault(_LineItemGiftCertificateRequestData);

var _LineItemRequestData = require('./LineItemRequestData');

var _LineItemRequestData2 = _interopRequireDefault(_LineItemRequestData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The CartUpdateRequest model module.
* @module model/CartUpdateRequest
* @version 3.0
*/
var CartUpdateRequest = function () {
    /**
    * Constructs a new <code>CartUpdateRequest</code>.
    * @alias module:model/CartUpdateRequest
    * @class
    */

    function CartUpdateRequest() {
        _classCallCheck(this, CartUpdateRequest);

        this['line_item'] = undefined;
        this['gift_certificate'] = undefined;
    }

    /**
    * Constructs a <code>CartUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CartUpdateRequest} obj Optional instance to populate.
    * @return {module:model/CartUpdateRequest} The populated <code>CartUpdateRequest</code> instance.
    */


    _createClass(CartUpdateRequest, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CartUpdateRequest();

                if (data.hasOwnProperty('line_item')) {
                    obj['line_item'] = _LineItemRequestData2.default.constructFromObject(data['line_item']);
                }
                if (data.hasOwnProperty('gift_certificate')) {
                    obj['gift_certificate'] = _LineItemGiftCertificateRequestData2.default.constructFromObject(data['gift_certificate']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/LineItemRequestData} line_item
        */

        /**
        * @member {module:model/LineItemGiftCertificateRequestData} gift_certificate
        */

    }]);

    return CartUpdateRequest;
}();

exports.default = CartUpdateRequest;