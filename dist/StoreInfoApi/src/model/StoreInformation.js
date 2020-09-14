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

var _StoreInformationFeatures = require('./StoreInformationFeatures');

var _StoreInformationFeatures2 = _interopRequireDefault(_StoreInformationFeatures);

var _StoreInformationLogo = require('./StoreInformationLogo');

var _StoreInformationLogo2 = _interopRequireDefault(_StoreInformationLogo);

var _TimeZone = require('./TimeZone');

var _TimeZone2 = _interopRequireDefault(_TimeZone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The StoreInformation model module.
* @module model/StoreInformation
* @version 2.0
*/
var StoreInformation = function () {
    /**
    * Constructs a new <code>StoreInformation</code>.
    * @alias module:model/StoreInformation
    * @class
    */

    function StoreInformation() {
        _classCallCheck(this, StoreInformation);

        this['id'] = undefined;
        this['domain'] = undefined;
        this['secure_URL'] = undefined;
        this['control_panel_base_url'] = undefined;
        this['name'] = undefined;
        this['first_name'] = undefined;
        this['last_name'] = undefined;
        this['address'] = undefined;
        this['country'] = undefined;
        this['phone'] = undefined;
        this['admin_email'] = undefined;
        this['order_email'] = undefined;
        this['timezone'] = undefined;
        this['language'] = undefined;
        this['currency'] = undefined;
        this['currency_symbol'] = undefined;
        this['decimal_separator'] = undefined;
        this['thousands_separator'] = undefined;
        this['decimal_places'] = undefined;
        this['currency_symbol_location'] = undefined;
        this['weight_units'] = undefined;
        this['dimension_units'] = undefined;
        this['dimension_decimal_places'] = undefined;
        this['dimension_decimal_token'] = undefined;
        this['dimension_thousands_token:'] = undefined;
        this['plan_name'] = undefined;
        this['plan_level'] = undefined;
        this['industry'] = undefined;
        this['logo'] = undefined;
        this['is_price_entered_with_tax'] = undefined;
        this['active_comparison_modules'] = undefined;
        this['features'] = undefined;
    }

    /**
    * Constructs a <code>StoreInformation</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StoreInformation} obj Optional instance to populate.
    * @return {module:model/StoreInformation} The populated <code>StoreInformation</code> instance.
    */


    _createClass(StoreInformation, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new StoreInformation();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('domain')) {
                    obj['domain'] = _ApiClient2.default.convertToType(data['domain'], 'String');
                }
                if (data.hasOwnProperty('secure_URL')) {
                    obj['secure_URL'] = _ApiClient2.default.convertToType(data['secure_URL'], 'String');
                }
                if (data.hasOwnProperty('control_panel_base_url')) {
                    obj['control_panel_base_url'] = _ApiClient2.default.convertToType(data['control_panel_base_url'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('first_name')) {
                    obj['first_name'] = _ApiClient2.default.convertToType(data['first_name'], 'String');
                }
                if (data.hasOwnProperty('last_name')) {
                    obj['last_name'] = _ApiClient2.default.convertToType(data['last_name'], 'String');
                }
                if (data.hasOwnProperty('address')) {
                    obj['address'] = _ApiClient2.default.convertToType(data['address'], 'String');
                }
                if (data.hasOwnProperty('country')) {
                    obj['country'] = _ApiClient2.default.convertToType(data['country'], 'String');
                }
                if (data.hasOwnProperty('phone')) {
                    obj['phone'] = _ApiClient2.default.convertToType(data['phone'], 'String');
                }
                if (data.hasOwnProperty('admin_email')) {
                    obj['admin_email'] = _ApiClient2.default.convertToType(data['admin_email'], 'String');
                }
                if (data.hasOwnProperty('order_email')) {
                    obj['order_email'] = _ApiClient2.default.convertToType(data['order_email'], 'String');
                }
                if (data.hasOwnProperty('timezone')) {
                    obj['timezone'] = _TimeZone2.default.constructFromObject(data['timezone']);
                }
                if (data.hasOwnProperty('language')) {
                    obj['language'] = _ApiClient2.default.convertToType(data['language'], 'String');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('currency_symbol')) {
                    obj['currency_symbol'] = _ApiClient2.default.convertToType(data['currency_symbol'], 'String');
                }
                if (data.hasOwnProperty('decimal_separator')) {
                    obj['decimal_separator'] = _ApiClient2.default.convertToType(data['decimal_separator'], 'String');
                }
                if (data.hasOwnProperty('thousands_separator')) {
                    obj['thousands_separator'] = _ApiClient2.default.convertToType(data['thousands_separator'], 'String');
                }
                if (data.hasOwnProperty('decimal_places')) {
                    obj['decimal_places'] = _ApiClient2.default.convertToType(data['decimal_places'], 'Number');
                }
                if (data.hasOwnProperty('currency_symbol_location')) {
                    obj['currency_symbol_location'] = _ApiClient2.default.convertToType(data['currency_symbol_location'], 'String');
                }
                if (data.hasOwnProperty('weight_units')) {
                    obj['weight_units'] = _ApiClient2.default.convertToType(data['weight_units'], 'String');
                }
                if (data.hasOwnProperty('dimension_units')) {
                    obj['dimension_units'] = _ApiClient2.default.convertToType(data['dimension_units'], 'String');
                }
                if (data.hasOwnProperty('dimension_decimal_places')) {
                    obj['dimension_decimal_places'] = _ApiClient2.default.convertToType(data['dimension_decimal_places'], 'Number');
                }
                if (data.hasOwnProperty('dimension_decimal_token')) {
                    obj['dimension_decimal_token'] = _ApiClient2.default.convertToType(data['dimension_decimal_token'], 'String');
                }
                if (data.hasOwnProperty('dimension_thousands_token:')) {
                    obj['dimension_thousands_token:'] = _ApiClient2.default.convertToType(data['dimension_thousands_token:'], 'String');
                }
                if (data.hasOwnProperty('plan_name')) {
                    obj['plan_name'] = _ApiClient2.default.convertToType(data['plan_name'], 'String');
                }
                if (data.hasOwnProperty('plan_level')) {
                    obj['plan_level'] = _ApiClient2.default.convertToType(data['plan_level'], 'String');
                }
                if (data.hasOwnProperty('industry')) {
                    obj['industry'] = _ApiClient2.default.convertToType(data['industry'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _StoreInformationLogo2.default.constructFromObject(data['logo']);
                }
                if (data.hasOwnProperty('is_price_entered_with_tax')) {
                    obj['is_price_entered_with_tax'] = _ApiClient2.default.convertToType(data['is_price_entered_with_tax'], 'Boolean');
                }
                if (data.hasOwnProperty('active_comparison_modules')) {
                    obj['active_comparison_modules'] = _ApiClient2.default.convertToType(data['active_comparison_modules'], [Object]);
                }
                if (data.hasOwnProperty('features')) {
                    obj['features'] = _StoreInformationFeatures2.default.constructFromObject(data['features']);
                }
            }
            return obj;
        }

        /**
        * Unique store identifier.
        * @member {String} id
        */

        /**
        * Primary domain name.
        * @member {String} domain
        */

        /**
        * Store’s current HTTPS URL.
        * @member {String} secure_URL
        */

        /**
        * The secure hostname of the control panel.
        * @member {String} control_panel_base_url
        */

        /**
        * Store's name.
        * @member {String} name
        */

        /**
        * Primary contact’s first name (as defined during the store sign-up process).
        * @member {String} first_name
        */

        /**
        * Primary contact’s last name (as defined during the store sign-up process).
        * @member {String} last_name
        */

        /**
        * Display address.
        * @member {String} address
        */

        /**
        * Country where the store is located (as defined during the store sign-up process).
        * @member {String} country
        */

        /**
        * Display phone number.
        * @member {String} phone
        */

        /**
        * Email address of the store administrator/owner.
        * @member {String} admin_email
        */

        /**
        * Email address for orders and fulfillment.
        * @member {String} order_email
        */

        /**
        * @member {module:model/TimeZone} timezone
        */

        /**
        * Default language code.
        * @member {String} language
        */

        /**
        * Default currency code
        * @member {String} currency
        */

        /**
        * Default symbol for values in the currency.
        * @member {String} currency_symbol
        */

        /**
        * Default decimal separator for values in the currency.
        * @member {String} decimal_separator
        */

        /**
        * Default thousands separator for values in the currency.
        * @member {String} thousands_separator
        */

        /**
        * Default decimal places for values in the currency.
        * @member {Number} decimal_places
        */

        /**
        * Default position of the currency symbol (left or right).
        * @member {String} currency_symbol_location
        */

        /**
        * Default weight units (metric or imperial).
        * @member {String} weight_units
        */

        /**
        * Default dimension units (metric or imperial).
        * @member {String} dimension_units
        */

        /**
        * The number of decimal places.
        * @member {Number} dimension_decimal_places
        */

        /**
        * The symbol that separates the whole numbers from the decimal points.
        * @member {String} dimension_decimal_token
        */

        /**
        * The symbol used to denote thousands.
        * @member {String} dimension_thousands_token:
        */

        /**
        * Name of the BigCommerce plan to which this store is subscribed.
        * @member {String} plan_name
        */

        /**
        * Level of the BigCommerce plan to which this store is subscribed.
        * @member {String} plan_level
        */

        /**
        * Industry, or vertical category, in which the business operates. (As selected from drop-down list during the store sign-up process.)
        * @member {String} industry
        */

        /**
        * @member {module:model/StoreInformationLogo} logo
        */

        /**
        * A Boolean value that indicates whether or not prices are entered with tax.
        * @member {Boolean} is_price_entered_with_tax
        */

        /**
        * @member {Array.<Object>} active_comparison_modules
        */

        /**
        * @member {module:model/StoreInformationFeatures} features
        */

    }]);

    return StoreInformation;
}();

exports.default = StoreInformation;