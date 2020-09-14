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
* The StoreInformationFeatures model module.
* @module model/StoreInformationFeatures
* @version 2.0
*/
var StoreInformationFeatures = function () {
    /**
    * Constructs a new <code>StoreInformationFeatures</code>.
    * + &#x60;stencil_enabled&#x60;: &#x60;true&#x60; (boolean)     + &#x60;sitewidehttps_enabled&#x60;: &#x60;false&#x60; (boolean)     + &#x60;facebook_catalog_id&#x60; (string)
    * @alias module:model/StoreInformationFeatures
    * @class
    */

    function StoreInformationFeatures() {
        _classCallCheck(this, StoreInformationFeatures);

        this['stencil_enabled'] = undefined;
        this['sitewidehttps_enabled'] = undefined;
        this['facebook_catalog_id'] = undefined;
        this['checkout_type'] = undefined;
    }

    /**
    * Constructs a <code>StoreInformationFeatures</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StoreInformationFeatures} obj Optional instance to populate.
    * @return {module:model/StoreInformationFeatures} The populated <code>StoreInformationFeatures</code> instance.
    */


    _createClass(StoreInformationFeatures, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new StoreInformationFeatures();

                if (data.hasOwnProperty('stencil_enabled')) {
                    obj['stencil_enabled'] = _ApiClient2.default.convertToType(data['stencil_enabled'], 'Boolean');
                }
                if (data.hasOwnProperty('sitewidehttps_enabled')) {
                    obj['sitewidehttps_enabled'] = _ApiClient2.default.convertToType(data['sitewidehttps_enabled'], 'String');
                }
                if (data.hasOwnProperty('facebook_catalog_id')) {
                    obj['facebook_catalog_id'] = _ApiClient2.default.convertToType(data['facebook_catalog_id'], 'String');
                }
                if (data.hasOwnProperty('checkout_type')) {
                    obj['checkout_type'] = _ApiClient2.default.convertToType(data['checkout_type'], 'String');
                }
            }
            return obj;
        }

        /**
        * Indicates whether a store is using a Stencil theme.
        * @member {Boolean} stencil_enabled
        */

        /**
        * Indicates if there is sitewide https.
        * @member {String} sitewidehttps_enabled
        */

        /**
        * Id of the facebook catalog. If there is none, it returns an empty string. 
        * @member {String} facebook_catalog_id
        */

        /**
        * What type of checkout is enabled on the store. Possible values returned are optimized, single (one page), single_customizable (one page for developers), klarna.
        * @member {String} checkout_type
        */

    }]);

    return StoreInformationFeatures;
}();

exports.default = StoreInformationFeatures;