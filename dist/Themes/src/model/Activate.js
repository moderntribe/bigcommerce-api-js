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
* The Activate model module.
* @module model/Activate
* @version 3.0
*/
var Activate = function () {
    /**
    * Constructs a new <code>Activate</code>.
    * Request definition for activation endpoint.
    * @alias module:model/Activate
    * @class
    * @param variationId {String} The identifier for the variation to activate.
    * @param which {module:model/Activate.WhichEnum} Which configuration to use.
    */

    function Activate(variationId, which) {
        _classCallCheck(this, Activate);

        this['variation_id'] = undefined;
        this['which'] = undefined;


        this['variation_id'] = variationId;
        this['which'] = which;
    }

    /**
    * Constructs a <code>Activate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Activate} obj Optional instance to populate.
    * @return {module:model/Activate} The populated <code>Activate</code> instance.
    */


    _createClass(Activate, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Activate();

                if (data.hasOwnProperty('variation_id')) {
                    obj['variation_id'] = _ApiClient2.default.convertToType(data['variation_id'], 'String');
                }
                if (data.hasOwnProperty('which')) {
                    obj['which'] = _ApiClient2.default.convertToType(data['which'], 'String');
                }
            }
            return obj;
        }

        /**
        * The identifier for the variation to activate.
        * @member {String} variation_id
        */

        /**
        * Which configuration to use.
        * @member {module:model/Activate.WhichEnum} which
        */


        /**
        * Allowed values for the <code>which</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return Activate;
}();

Activate.WhichEnum = {
    /**
     * value: "original"
     * @const
     */
    "original": "original",
    /**
     * value: "last_activated"
     * @const
     */
    "last_activated": "last_activated",
    /**
     * value: "last_created"
     * @const
     */
    "last_created": "last_created" };
exports.default = Activate;