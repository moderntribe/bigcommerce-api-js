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

var _AddItemToWishlist = require('./AddItemToWishlist');

var _AddItemToWishlist2 = _interopRequireDefault(_AddItemToWishlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The WishlistPost model module.
* @module model/WishlistPost
* @version 3.0
*/
var WishlistPost = function () {
    /**
    * Constructs a new <code>WishlistPost</code>.
    * @alias module:model/WishlistPost
    * @class
    * @param customerId {Number} The customer id.
    */

    function WishlistPost(customerId) {
        _classCallCheck(this, WishlistPost);

        this['customer_id'] = undefined;
        this['is_public'] = undefined;
        this['name'] = undefined;
        this['items'] = undefined;


        this['customer_id'] = customerId;
    }

    /**
    * Constructs a <code>WishlistPost</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WishlistPost} obj Optional instance to populate.
    * @return {module:model/WishlistPost} The populated <code>WishlistPost</code> instance.
    */


    _createClass(WishlistPost, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WishlistPost();

                if (data.hasOwnProperty('customer_id')) {
                    obj['customer_id'] = _ApiClient2.default.convertToType(data['customer_id'], 'Number');
                }
                if (data.hasOwnProperty('is_public')) {
                    obj['is_public'] = _ApiClient2.default.convertToType(data['is_public'], 'Boolean');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('items')) {
                    obj['items'] = _ApiClient2.default.convertToType(data['items'], [_AddItemToWishlist2.default]);
                }
            }
            return obj;
        }

        /**
        * The customer id.
        * @member {Number} customer_id
        */

        /**
        * Whether the wishlist is available to the public.
        * @member {Boolean} is_public
        */

        /**
        * The title of the wishlist.
        * @member {String} name
        */

        /**
        * Array of Wishlist items.
        * @member {Array.<module:model/AddItemToWishlist>} items
        */

    }]);

    return WishlistPost;
}();

exports.default = WishlistPost;