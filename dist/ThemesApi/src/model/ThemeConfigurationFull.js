'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Themes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication)  With BigCommerce's V3 REST API Theme endpoints, developers can: * backup themes * restore themes * download themes * activate themes * get status of theme jobs * read theme configurations  ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Themes                                       | modify     | `store_themes_manage`                         |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).
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
* The ThemeConfigurationFull model module.
* @module model/ThemeConfigurationFull
* @version 3.0
*/
var ThemeConfigurationFull = function () {
    /**
    * Constructs a new <code>ThemeConfigurationFull</code>.
    * A theme.
    * @alias module:model/ThemeConfigurationFull
    * @class
    */

    function ThemeConfigurationFull() {
        _classCallCheck(this, ThemeConfigurationFull);

        this['uuid'] = undefined;
        this['theme_uuid'] = undefined;
        this['variation_id'] = undefined;
        this['settings'] = undefined;
        this['date_created'] = undefined;
        this['site_id'] = undefined;
    }

    /**
    * Constructs a <code>ThemeConfigurationFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ThemeConfigurationFull} obj Optional instance to populate.
    * @return {module:model/ThemeConfigurationFull} The populated <code>ThemeConfigurationFull</code> instance.
    */


    _createClass(ThemeConfigurationFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ThemeConfigurationFull();

                if (data.hasOwnProperty('uuid')) {
                    obj['uuid'] = _ApiClient2.default.convertToType(data['uuid'], 'String');
                }
                if (data.hasOwnProperty('theme_uuid')) {
                    obj['theme_uuid'] = _ApiClient2.default.convertToType(data['theme_uuid'], 'String');
                }
                if (data.hasOwnProperty('variation_id')) {
                    obj['variation_id'] = _ApiClient2.default.convertToType(data['variation_id'], 'String');
                }
                if (data.hasOwnProperty('settings')) {
                    obj['settings'] = _ApiClient2.default.convertToType(data['settings'], Object);
                }
                if (data.hasOwnProperty('date_created')) {
                    obj['date_created'] = _ApiClient2.default.convertToType(data['date_created'], 'String');
                }
                if (data.hasOwnProperty('site_id')) {
                    obj['site_id'] = _ApiClient2.default.convertToType(data['site_id'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {String} uuid
        */

        /**
        * The Theme to which the Configuration belongs.
        * @member {String} theme_uuid
        */

        /**
        * The Variation to which the Configuration belongs.
        * @member {String} variation_id
        */

        /**
        * The content of the configuration, which is a JSON object which will vary in structure from theme to theme.
        * @member {Object} settings
        */

        /**
        * @member {String} date_created
        */

        /**
        * Site ID to which this configuration belongs. Will be 0 for the original configuration for a Theme.
        * @member {Number} site_id
        */

    }]);

    return ThemeConfigurationFull;
}();

exports.default = ThemeConfigurationFull;