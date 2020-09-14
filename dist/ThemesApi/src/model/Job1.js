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

var _JobErrors = require('./JobErrors');

var _JobErrors2 = _interopRequireDefault(_JobErrors);

var _JobWarnings = require('./JobWarnings');

var _JobWarnings2 = _interopRequireDefault(_JobWarnings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Job1 model module.
* @module model/Job1
* @version 3.0
*/
var Job1 = function () {
    /**
    * Constructs a new <code>Job1</code>.
    * The job for theme upload or download
    * @alias module:model/Job1
    * @class
    */

    function Job1() {
        _classCallCheck(this, Job1);

        this['errors'] = undefined;
        this['id'] = undefined;
        this['percent_complete'] = undefined;
        this['result'] = undefined;
        this['status'] = undefined;
        this['time'] = undefined;
        this['warnings'] = undefined;
    }

    /**
    * Constructs a <code>Job1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Job1} obj Optional instance to populate.
    * @return {module:model/Job1} The populated <code>Job1</code> instance.
    */


    _createClass(Job1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Job1();

                if (data.hasOwnProperty('errors')) {
                    obj['errors'] = _ApiClient2.default.convertToType(data['errors'], [_JobErrors2.default]);
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('percent_complete')) {
                    obj['percent_complete'] = _ApiClient2.default.convertToType(data['percent_complete'], 'Number');
                }
                if (data.hasOwnProperty('result')) {
                    obj['result'] = _ApiClient2.default.convertToType(data['result'], { 'String': 'String' });
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('time')) {
                    obj['time'] = _ApiClient2.default.convertToType(data['time'], 'Date');
                }
                if (data.hasOwnProperty('warnings')) {
                    obj['warnings'] = _ApiClient2.default.convertToType(data['warnings'], [_JobWarnings2.default]);
                }
            }
            return obj;
        }

        /**
        * The errors.
        * @member {Array.<module:model/JobErrors>} errors
        */

        /**
        * The identifier.
        * @member {String} id
        */

        /**
        * The percent complete.
        * @member {Number} percent_complete
        */

        /**
        * The result.
        * @member {Object.<String, String>} result
        */

        /**
        * The status.
        * @member {module:model/Job1.StatusEnum} status
        */

        /**
        * The time.
        * @member {Date} time
        */

        /**
        * The warnings.
        * @member {Array.<module:model/JobWarnings>} warnings
        */


        /**
        * Allowed values for the <code>status</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return Job1;
}();

Job1.StatusEnum = {
    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",
    /**
     * value: "QUEUED"
     * @const
     */
    "QUEUED": "QUEUED",
    /**
     * value: "WORKING"
     * @const
     */
    "WORKING": "WORKING",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED" };
exports.default = Job1;