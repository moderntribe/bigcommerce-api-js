'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Wishlist
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ## Wishlist API    The Wishlist API allows a developer to create and manage customer [Wishlists](https://support.bigcommerce.com/s/article/Wishlists). A Wishlist allows you to see what your customers are interested in and saving on the store. With this information you’ll be able to create targeted campaigns to help merchants grow their business. Customer API OAuth scopes give you access to Wishlists API. See [OAuth Scopes](https://developer.bigcommerce.com/api-docs/getting-started/authentication#authentication_oauth-scopes).
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

var _WishlistItem = require('./WishlistItem');

var _WishlistItem2 = _interopRequireDefault(_WishlistItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The WishlistFull model module.
* @module model/WishlistFull
* @version 3.0
*/
var WishlistFull = function () {
    /**
    * Constructs a new <code>WishlistFull</code>.
    * @alias module:model/WishlistFull
    * @class
    */

    function WishlistFull() {
        _classCallCheck(this, WishlistFull);

        this['id'] = undefined;
        this['customer_id'] = undefined;
        this['name'] = undefined;
        this['is_public'] = undefined;
        this['token'] = undefined;
        this['items'] = undefined;
    }

    /**
    * Constructs a <code>WishlistFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WishlistFull} obj Optional instance to populate.
    * @return {module:model/WishlistFull} The populated <code>WishlistFull</code> instance.
    */


    _createClass(WishlistFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WishlistFull();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('customer_id')) {
                    obj['customer_id'] = _ApiClient2.default.convertToType(data['customer_id'], 'Number');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('is_public')) {
                    obj['is_public'] = _ApiClient2.default.convertToType(data['is_public'], 'Boolean');
                }
                if (data.hasOwnProperty('token')) {
                    obj['token'] = _ApiClient2.default.convertToType(data['token'], 'String');
                }
                if (data.hasOwnProperty('items')) {
                    obj['items'] = _ApiClient2.default.convertToType(data['items'], [_WishlistItem2.default]);
                }
            }
            return obj;
        }

        /**
        * Wishlist ID, provided after creating a wishlist with a POST.
        * @member {Number} id
        */

        /**
        * The ID the customer to which the wishlist belongs.
        * @member {Number} customer_id
        */

        /**
        * The Wishlist's name.
        * @member {String} name
        */

        /**
        * Whether the Wishlist is available to the public.
        * @member {Boolean} is_public
        */

        /**
        * The token of the Wishlist. This is created internally within BigCommerce. The Wishlist ID is to be used for external apps. Read-Only
        * @member {String} token
        */

        /**
        * Array of Wishlist items
        * @member {Array.<module:model/WishlistItem>} items
        */

    }]);

    return WishlistFull;
}();

exports.default = WishlistFull;