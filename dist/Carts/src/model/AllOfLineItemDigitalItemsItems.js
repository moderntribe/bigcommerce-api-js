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
* The AllOfLineItemDigitalItemsItems model module.
* @module model/AllOfLineItemDigitalItemsItems
* @version 3.0
*/
var AllOfLineItemDigitalItemsItems = function () {
    /**
    * Constructs a new <code>AllOfLineItemDigitalItemsItems</code>.
    * @alias module:model/AllOfLineItemDigitalItemsItems
    * @class
    */

    function AllOfLineItemDigitalItemsItems() {
        _classCallCheck(this, AllOfLineItemDigitalItemsItems);

        this['download_file_urls'] = undefined;
        this['download_page_url'] = undefined;
        this['download_size'] = undefined;
    }

    /**
    * Constructs a <code>AllOfLineItemDigitalItemsItems</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfLineItemDigitalItemsItems} obj Optional instance to populate.
    * @return {module:model/AllOfLineItemDigitalItemsItems} The populated <code>AllOfLineItemDigitalItemsItems</code> instance.
    */


    _createClass(AllOfLineItemDigitalItemsItems, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AllOfLineItemDigitalItemsItems();

                if (data.hasOwnProperty('download_file_urls')) {
                    obj['download_file_urls'] = _ApiClient2.default.convertToType(data['download_file_urls'], ['String']);
                }
                if (data.hasOwnProperty('download_page_url')) {
                    obj['download_page_url'] = _ApiClient2.default.convertToType(data['download_page_url'], 'String');
                }
                if (data.hasOwnProperty('download_size')) {
                    obj['download_size'] = _ApiClient2.default.convertToType(data['download_size'], 'String');
                }
            }
            return obj;
        }

        /**
        * URLs to download all product files.
        * @member {Array.<String>} download_file_urls
        */

        /**
        * The URL for the combined downloads page.
        * @member {String} download_page_url
        */

        /**
        * Combined download size, in human-readable style. E.g.: `30MB`.
        * @member {String} download_size
        */

    }]);

    return AllOfLineItemDigitalItemsItems;
}();

exports.default = AllOfLineItemDigitalItemsItems;