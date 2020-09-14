'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Store Information
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ### Store Information Reference The Store Information object, and Get Store Information endpoint, manage store profile settings. A Store Information object represents an individual store’s profile and metadata.  ### System Reference The Get a Timestamp endpoint generates a timestamp ping to check the system status.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 2.0
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
* The DateFormat model module.
* @module model/DateFormat
* @version 2.0
*/
var DateFormat = function () {
    /**
    * Constructs a new <code>DateFormat</code>.
    * @alias module:model/DateFormat
    * @class
    */

    function DateFormat() {
        _classCallCheck(this, DateFormat);

        this['display'] = undefined;
        this['export'] = undefined;
        this['extended_display'] = undefined;
    }

    /**
    * Constructs a <code>DateFormat</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DateFormat} obj Optional instance to populate.
    * @return {module:model/DateFormat} The populated <code>DateFormat</code> instance.
    */


    _createClass(DateFormat, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new DateFormat();

                if (data.hasOwnProperty('display')) {
                    obj['display'] = _ApiClient2.default.convertToType(data['display'], 'String');
                }
                if (data.hasOwnProperty('export')) {
                    obj['export'] = _ApiClient2.default.convertToType(data['export'], 'String');
                }
                if (data.hasOwnProperty('extended_display')) {
                    obj['extended_display'] = _ApiClient2.default.convertToType(data['extended_display'], 'String');
                }
            }
            return obj;
        }

        /**
        * string that defines dates’ display format, in the pattern: M jS Y
        * @member {String} display
        */

        /**
        * string that defines the CSV export format for orders, customers, and products, in the pattern: M jS Y
        * @member {String} export
        */

        /**
        * string that defines dates’ extended-display format, in the pattern: M jS Y @ g:i A.
        * @member {String} extended_display
        */

    }]);

    return DateFormat;
}();

exports.default = DateFormat;