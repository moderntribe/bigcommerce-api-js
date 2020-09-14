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

var _DateFormat = require('./DateFormat');

var _DateFormat2 = _interopRequireDefault(_DateFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Timezone model module.
* @module model/Timezone
* @version 2.0
*/
var Timezone = function () {
    /**
    * Constructs a new <code>Timezone</code>.
    * @alias module:model/Timezone
    * @class
    */

    function Timezone() {
        _classCallCheck(this, Timezone);

        this['name'] = undefined;
        this['raw_offset'] = undefined;
        this['dst_offset'] = undefined;
        this['dst_correction'] = undefined;
        this['date_format'] = undefined;
    }

    /**
    * Constructs a <code>Timezone</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Timezone} obj Optional instance to populate.
    * @return {module:model/Timezone} The populated <code>Timezone</code> instance.
    */


    _createClass(Timezone, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Timezone();

                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('raw_offset')) {
                    obj['raw_offset'] = _ApiClient2.default.convertToType(data['raw_offset'], 'Number');
                }
                if (data.hasOwnProperty('dst_offset')) {
                    obj['dst_offset'] = _ApiClient2.default.convertToType(data['dst_offset'], 'Number');
                }
                if (data.hasOwnProperty('dst_correction')) {
                    obj['dst_correction'] = _ApiClient2.default.convertToType(data['dst_correction'], 'Boolean');
                }
                if (data.hasOwnProperty('date_format')) {
                    obj['date_format'] = _DateFormat2.default.constructFromObject(data['date_format']);
                }
            }
            return obj;
        }

        /**
        * a string identifying the time zone, in the format: <Continent-name>/<City-name>.
        * @member {String} name
        */

        /**
        * a negative or positive number, identifying the offset from UTC/GMT, in seconds, during winter/standard time.
        * @member {Number} raw_offset
        */

        /**
        * \"-/+\" offset from UTC/GMT, in seconds, during summer/daylight saving time.
        * @member {Number} dst_offset
        */

        /**
        * a boolean indicating whether this time zone observes daylight saving time.
        * @member {Boolean} dst_correction
        */

        /**
        * @member {module:model/DateFormat} date_format
        */

    }]);

    return Timezone;
}();

exports.default = Timezone;