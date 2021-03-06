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

var _ThemeVariations = require('./ThemeVariations');

var _ThemeVariations2 = _interopRequireDefault(_ThemeVariations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ThemesCollectionResponseData model module.
* @module model/ThemesCollectionResponseData
* @version 3.0
*/
var ThemesCollectionResponseData = function () {
    /**
    * Constructs a new <code>ThemesCollectionResponseData</code>.
    * A theme.
    * @alias module:model/ThemesCollectionResponseData
    * @class
    */

    function ThemesCollectionResponseData() {
        _classCallCheck(this, ThemesCollectionResponseData);

        this['variations'] = undefined;
        this['uuid'] = undefined;
        this['name'] = undefined;
        this['is_private'] = undefined;
    }

    /**
    * Constructs a <code>ThemesCollectionResponseData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ThemesCollectionResponseData} obj Optional instance to populate.
    * @return {module:model/ThemesCollectionResponseData} The populated <code>ThemesCollectionResponseData</code> instance.
    */


    _createClass(ThemesCollectionResponseData, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ThemesCollectionResponseData();

                if (data.hasOwnProperty('variations')) {
                    obj['variations'] = _ApiClient2.default.convertToType(data['variations'], [_ThemeVariations2.default]);
                }
                if (data.hasOwnProperty('uuid')) {
                    obj['uuid'] = _ApiClient2.default.convertToType(data['uuid'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('is_private')) {
                    obj['is_private'] = _ApiClient2.default.convertToType(data['is_private'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * The variations.
        * @member {Array.<module:model/ThemeVariations>} variations
        */

        /**
        * The identifier.
        * @member {String} uuid
        */

        /**
        * The theme name identifier.
        * @member {String} name
        */

        /**
        * Flag to identify private themes.
        * @member {Boolean} is_private
        */

    }]);

    return ThemesCollectionResponseData;
}();

exports.default = ThemesCollectionResponseData;