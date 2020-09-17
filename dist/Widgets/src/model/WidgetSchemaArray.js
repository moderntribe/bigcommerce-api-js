'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Widgets
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Widgets API allows developers to programatically inject content into a BigCommerce theme. To learn how to use Widgets, see our [Widgets Overview](/api-docs/storefront/widgets/widgets-overview).
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
* The WidgetSchemaArray model module.
* @module model/WidgetSchemaArray
* @version 3.0
*/
var WidgetSchemaArray = function () {
    /**
    * Constructs a new <code>WidgetSchemaArray</code>.
    * **Array**
    * @alias module:model/WidgetSchemaArray
    * @class
    */

    function WidgetSchemaArray() {
        _classCallCheck(this, WidgetSchemaArray);

        this['type'] = undefined;
        this['label'] = undefined;
        this['id'] = undefined;
        this['defaultCount'] = undefined;
        this['entryLabel'] = undefined;
        this['thumbnail'] = undefined;
        this['schema'] = undefined;
    }

    /**
    * Constructs a <code>WidgetSchemaArray</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WidgetSchemaArray} obj Optional instance to populate.
    * @return {module:model/WidgetSchemaArray} The populated <code>WidgetSchemaArray</code> instance.
    */


    _createClass(WidgetSchemaArray, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WidgetSchemaArray();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('label')) {
                    obj['label'] = _ApiClient2.default.convertToType(data['label'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('defaultCount')) {
                    obj['defaultCount'] = _ApiClient2.default.convertToType(data['defaultCount'], 'String');
                }
                if (data.hasOwnProperty('entryLabel')) {
                    obj['entryLabel'] = _ApiClient2.default.convertToType(data['entryLabel'], 'String');
                }
                if (data.hasOwnProperty('thumbnail')) {
                    obj['thumbnail'] = _ApiClient2.default.convertToType(data['thumbnail'], 'String');
                }
                if (data.hasOwnProperty('schema')) {
                    obj['schema'] = _ApiClient2.default.convertToType(data['schema'], [Object]);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/WidgetSchemaArray.TypeEnum} type
        */

        /**
        * @member {String} label
        */

        /**
        * @member {String} id
        */

        /**
        * number of elements in the list to display by default.
        * @member {String} defaultCount
        */

        /**
        * name for each element in the list
        * @member {String} entryLabel
        */

        /**
        * used to display an image stored at the specified attribute name
        * @member {String} thumbnail
        */

        /**
        * The schema used for each element in the array.
        * @member {Array.<Object>} schema
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return WidgetSchemaArray;
}();

WidgetSchemaArray.TypeEnum = {
    /**
     * value: "array"
     * @const
     */
    "array": "array" };
exports.default = WidgetSchemaArray;