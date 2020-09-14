'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Scripts
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints)  The BigCommerce Scripts API can be used to add a script to a store's page. Some use cases: * Insert tracking codes * Storefront single click applications * Live chat, support plugins * Theme extension or connector apps  To learn more about Scripts, see [here](/api-docs/scripts/scripts-overview).   ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Checkout Content<sup>1</sup>                             | modify     | `store_content_checkout`                      | | Checkout Content<sup>1</sup>                             | read-only  | `store_content_checkout_read_only`            | | Content                                       | modify     | `store_v2_content`                            | | Content                                       | read-only  | `store_v2_content_read_only`                  |  1. `Checkout Content` scopes are required to create or read scripts on the checkout page.  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Scripts                                 | Add client-side code to a store                                         |
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

var _CollectionMeta = require('./CollectionMeta');

var _CollectionMeta2 = _interopRequireDefault(_CollectionMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ScriptResponseCollection model module.
* @module model/ScriptResponseCollection
* @version 3.0
*/
var ScriptResponseCollection = function () {
    /**
    * Constructs a new <code>ScriptResponseCollection</code>.
    * For a list of all locations visit [Scripts Visibility](https://developer.bigcommerce.com/api-docs/storefront/scripts-overview#scripts_scripts-visibility).
    * @alias module:model/ScriptResponseCollection
    * @class
    */

    function ScriptResponseCollection() {
        _classCallCheck(this, ScriptResponseCollection);

        this['data'] = undefined;
        this['meta'] = undefined;
    }

    /**
    * Constructs a <code>ScriptResponseCollection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ScriptResponseCollection} obj Optional instance to populate.
    * @return {module:model/ScriptResponseCollection} The populated <code>ScriptResponseCollection</code> instance.
    */


    _createClass(ScriptResponseCollection, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ScriptResponseCollection();

                if (data.hasOwnProperty('data')) {
                    obj['data'] = _ApiClient2.default.convertToType(data['data'], [AllOfscriptResponseCollectionDataItems]);
                }
                if (data.hasOwnProperty('meta')) {
                    obj['meta'] = _CollectionMeta2.default.constructFromObject(data['meta']);
                }
            }
            return obj;
        }

        /**
        * @member {Array.<Object>} data
        */

        /**
        * @member {module:model/CollectionMeta} meta
        */

    }]);

    return ScriptResponseCollection;
}();

exports.default = ScriptResponseCollection;