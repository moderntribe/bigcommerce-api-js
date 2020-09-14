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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ScriptPut model module.
* @module model/ScriptPut
* @version 3.0
*/
var ScriptPut = function () {
    /**
    * Constructs a new <code>ScriptPut</code>.
    * @alias module:model/ScriptPut
    * @class
    */

    function ScriptPut() {
        _classCallCheck(this, ScriptPut);

        this['description'] = undefined;
        this['html'] = undefined;
        this['src'] = undefined;
        this['auto_uninstall'] = undefined;
        this['load_method'] = undefined;
        this['location'] = undefined;
        this['visibility'] = undefined;
        this['kind'] = undefined;
        this['api_client_id'] = undefined;
        this['consent_category'] = undefined;
        this['enabled'] = undefined;
    }

    /**
    * Constructs a <code>ScriptPut</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ScriptPut} obj Optional instance to populate.
    * @return {module:model/ScriptPut} The populated <code>ScriptPut</code> instance.
    */


    _createClass(ScriptPut, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ScriptPut();

                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('html')) {
                    obj['html'] = _ApiClient2.default.convertToType(data['html'], 'String');
                }
                if (data.hasOwnProperty('src')) {
                    obj['src'] = _ApiClient2.default.convertToType(data['src'], 'String');
                }
                if (data.hasOwnProperty('auto_uninstall')) {
                    obj['auto_uninstall'] = _ApiClient2.default.convertToType(data['auto_uninstall'], 'Boolean');
                }
                if (data.hasOwnProperty('load_method')) {
                    obj['load_method'] = _ApiClient2.default.convertToType(data['load_method'], 'String');
                }
                if (data.hasOwnProperty('location')) {
                    obj['location'] = _ApiClient2.default.convertToType(data['location'], 'String');
                }
                if (data.hasOwnProperty('visibility')) {
                    obj['visibility'] = _ApiClient2.default.convertToType(data['visibility'], 'String');
                }
                if (data.hasOwnProperty('kind')) {
                    obj['kind'] = _ApiClient2.default.convertToType(data['kind'], 'String');
                }
                if (data.hasOwnProperty('api_client_id')) {
                    obj['api_client_id'] = _ApiClient2.default.convertToType(data['api_client_id'], 'String');
                }
                if (data.hasOwnProperty('consent_category')) {
                    obj['consent_category'] = _ApiClient2.default.convertToType(data['consent_category'], 'String');
                }
                if (data.hasOwnProperty('enabled')) {
                    obj['enabled'] = _ApiClient2.default.convertToType(data['enabled'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * The user-friendly description.
        * @member {String} description
        */

        /**
        * An html string containing exactly one `script` tag. Only present if `kind` is `script_tag`
        * @member {String} html
        */

        /**
        * The `src` attribute of the script to load. Only present if `kind` is `src`.
        * @member {String} src
        */

        /**
        * It will enable automatic cleanup of the script when the single click app is uninstalled or OAuth token is revoked.
        * @member {Boolean} auto_uninstall
        */

        /**
        * The load method to use for the script. Values are `default`, `async`, or `defer`. It determines how the script should be loaded into the page.
        * @member {module:model/ScriptPut.LoadMethodEnum} load_method
        */

        /**
        * Where on the page to place the script. Values are `head` or `footer`.
        * @member {module:model/ScriptPut.LocationEnum} location
        */

        /**
        * Which set of pages the script should load on.   Please note that you need to have `Checkout content` scope to use `all_pages` and `checkout`.  - The current visibility options are `storefront`, `checkout`, `all_pages` and `order_confirmation`.       `storefront`: All pages that are not `checkout` or `order_confirmation`.     For a list of all locations visit [Scripts Visibility](https://developer.bigcommerce.com/api-docs/storefront/scripts-overview#scripts_scripts-visibility).
        * @member {module:model/ScriptPut.VisibilityEnum} visibility
        */

        /**
        * What type of script this is.  `src` - a `script` tag will be generated with its `src` attribute set to the value of `src`; For scripts that use the src url. By providing a path to the script, we can optimize and serve the script tag automatically for you.  `script_tag` - The value of `html` will be injected directly onto the page. For scripts which include a raw HTML script_tag to be inserted into the page. The load_method must be default.
        * @member {module:model/ScriptPut.KindEnum} kind
        */

        /**
        * The client id of the API user that created this script, or blank if created by other means.
        * @member {String} api_client_id
        */

        /**
        * What category of script this is for the purposes of GDPR/CCPA compliance.
        * @member {module:model/ScriptPut.ConsentCategoryEnum} consent_category
        */

        /**
        * Indicates whether a script is enabled.
        * @member {Boolean} enabled
        */


        /**
        * Allowed values for the <code>load_method</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>location</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>visibility</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>kind</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>consent_category</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ScriptPut;
}();

ScriptPut.LoadMethodEnum = {
    /**
     * value: "default"
     * @const
     */
    "default": "default",
    /**
     * value: "async"
     * @const
     */
    "async": "async",
    /**
     * value: "defer"
     * @const
     */
    "defer": "defer" };
ScriptPut.LocationEnum = {
    /**
     * value: "head"
     * @const
     */
    "head": "head",
    /**
     * value: "footer"
     * @const
     */
    "footer": "footer" };
ScriptPut.VisibilityEnum = {
    /**
     * value: "storefront"
     * @const
     */
    "storefront": "storefront",
    /**
     * value: "all_pages"
     * @const
     */
    "all_pages": "all_pages",
    /**
     * value: "checkout"
     * @const
     */
    "checkout": "checkout",
    /**
     * value: "order_confirmation"
     * @const
     */
    "order_confirmation": "order_confirmation" };
ScriptPut.KindEnum = {
    /**
     * value: "src"
     * @const
     */
    "src": "src",
    /**
     * value: "script_tag"
     * @const
     */
    "script_tag": "script_tag" };
ScriptPut.ConsentCategoryEnum = {
    /**
     * value: "essential"
     * @const
     */
    "essential": "essential",
    /**
     * value: "functional"
     * @const
     */
    "functional": "functional",
    /**
     * value: "analytics"
     * @const
     */
    "analytics": "analytics",
    /**
     * value: "targeting"
     * @const
     */
    "targeting": "targeting" };
exports.default = ScriptPut;