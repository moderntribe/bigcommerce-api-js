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
* The StoreInformationLogo model module.
* @module model/StoreInformationLogo
* @version 2.0
*/
var StoreInformationLogo = function () {
    /**
    * Constructs a new <code>StoreInformationLogo</code>.
    * @alias module:model/StoreInformationLogo
    * @class
    */

    function StoreInformationLogo() {
        _classCallCheck(this, StoreInformationLogo);

        this['url'] = undefined;
    }

    /**
    * Constructs a <code>StoreInformationLogo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StoreInformationLogo} obj Optional instance to populate.
    * @return {module:model/StoreInformationLogo} The populated <code>StoreInformationLogo</code> instance.
    */


    _createClass(StoreInformationLogo, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new StoreInformationLogo();

                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} url
        */

    }]);

    return StoreInformationLogo;
}();

exports.default = StoreInformationLogo;