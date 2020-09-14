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
* The AppliedDiscount model module.
* @module model/AppliedDiscount
* @version 3.0
*/
var AppliedDiscount = function () {
    /**
    * Constructs a new <code>AppliedDiscount</code>.
    * Example as part of a Cart response:  &#x60;&#x60;&#x60; \&quot;discounts\&quot;: [   {     \&quot;id\&quot;: 2,     \&quot;discounted_amount\&quot;: 2   },   {     \&quot;id\&quot;: \&quot;coupon\&quot;,     \&quot;discounted_amount\&quot;: 0.42   } ] &#x60;&#x60;&#x60;
    * @alias module:model/AppliedDiscount
    * @class
    */

    function AppliedDiscount() {
        _classCallCheck(this, AppliedDiscount);

        this['id'] = undefined;
        this['discounted_amount'] = undefined;
    }

    /**
    * Constructs a <code>AppliedDiscount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AppliedDiscount} obj Optional instance to populate.
    * @return {module:model/AppliedDiscount} The populated <code>AppliedDiscount</code> instance.
    */


    _createClass(AppliedDiscount, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AppliedDiscount();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('discounted_amount')) {
                    obj['discounted_amount'] = _ApiClient2.default.convertToType(data['discounted_amount'], 'Number');
                }
            }
            return obj;
        }

        /**
        * ID of the applied discount. 
        * @member {Number} id
        */

        /**
        * The discounted amount.
        * @member {Number} discounted_amount
        */

    }]);

    return AppliedDiscount;
}();

exports.default = AppliedDiscount;