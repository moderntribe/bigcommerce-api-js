"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Orders V3
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints) - [Order Transactions](#order-transactions) - [Resources](#resources)  The V3 REST API's Orders resource surfaces endpoints related to payment processing. The `/orders/{id}/transactions` endpoint returns transaction details for the specified order. To programmatically create, update, and delete orders themselves, see [Orders v2](https://developer.bigcommerce.com/api-reference/store-management/orders). To process payments, see [Payment Processing](https://developer.bigcommerce.com/api-reference/payments/payments-process-payments).  ## OAuth Scopes | UI Name| Permission |Parameter|                                      |----------------------------------------------|------------|-----------------------------------------------| | Order Transactions|modify|`store_v2_transactions`| | Order Transactions|read-only  |`store_v2_transactions_read_only`| | Orders| modify|`store_v2_orders`| | Orders| read-only|`store_v2_orders_read_only`|  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Endpoint|Description|Reference |---|---|---| | `/orders/{id}/transactions`             | Get list of transaction data for an order|[Get Transactions](https://developer.bigcommerce.com/api-reference/store-management/order-transactions/transactions/gettransactions) |`/orders/{id}/payment_actions/refund_quotes`|` POST` - Create refund quote for order ID `{id}`.|[Create a Refund Quote](https://developer.bigcommerce.com/api-reference/store-management/order-transactions/order-refunds/postrefundquote) |`/orders/{id}/payment_actions/refunds`|`POST` Create a refund for order ID `{id}`.|[Create a Refund](https://developer.bigcommerce.com/api-reference/store-management/order-transactions/order-refunds/postrefund) |`/orders/{id}/payment_actions/refunds`|` GET` - Returns the refunds for order ID `{id}`.|[Get Refunds For Order](https://developer.bigcommerce.com/api-reference/store-management/order-transactions/order-refunds/getorderrefunds) |`/orders/payment_actions/refunds`|`GET` - Returns a list of refunds ordered by refund ID.|[Get All Refunds](https://developer.bigcommerce.com/api-reference/store-management/order-transactions/order-refunds/getrefunds)  ## Order Transactions The `/orders/{id}/transactions` endpoint returns details about the payment instruments used to pay for an order. Depending on the payment method used, different details will be available. Not all credit card payment gateways return full card or fraud details. Transactions endpoints are primarily used to get detailed gateway response information for credit card transactions; however they will also return any available information about digital wallet and offline payments.   **Note**: transactions are not created for the following payment methods: * Test Payment Gateway * PayPal Express * Amazon Pay  ## Order Refunds The Order API refund endpoints allow developers to process refunds against orders with settled payments. Refund endpoints are useful when building order management or payment integrations. They make embedding refund functionality directly into the application possible without requiring merchants to return to their BigCommerce Control Panel.  ## Resources * [Orders Overview](https://developer.bigcommerce.com/api-docs/orders/orders-overview) * [Orders V2](https://developer.bigcommerce.com/api-reference/store-management/orders)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _superagent = require("superagent");

var _superagent2 = _interopRequireDefault(_superagent);

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* @module ApiClient
* @version 3.0
*/

/**
* Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
* application to use this class directly - the *Api and model classes provide the public API for the service. The
* contents of this file should be regarded as internal but are documented for completeness.
* @alias module:ApiClient
* @class
*/
var ApiClient = function () {
    function ApiClient() {
        _classCallCheck(this, ApiClient);

        /**
         * The base URL against which to resolve every API call's (relative) path.
         * @type {String}
         * @default https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3
         */
        this.basePath = 'https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3'.replace(/\/+$/, '');

        /**
         * The authentication methods to be included for all API calls.
         * @type {Array.<String>}
         */
        this.authentications = {
            'X-Auth-Client': { type: 'apiKey', 'in': 'header', name: 'X-Auth-Client' },
            'X-Auth-Token': { type: 'apiKey', 'in': 'header', name: 'X-Auth-Token' }

            /**
             * The default HTTP headers to be included for all API calls.
             * @type {Array.<String>}
             * @default {}
             */
        };this.defaultHeaders = {};

        /**
         * The default HTTP timeout for all API calls.
         * @type {Number}
         * @default 60000
         */
        this.timeout = 60000;

        /**
         * If set to false an additional timestamp parameter is added to all API GET calls to
         * prevent browser caching
         * @type {Boolean}
         * @default true
         */
        this.cache = true;

        /**
         * If set to true, the client will save the cookies from each server
         * response, and return them in the next request.
         * @default false
         */
        this.enableCookies = false;

        /*
         * Used to save and return cookies in a node.js (non-browser) setting,
         * if this.enableCookies is set to true.
         */
        if (typeof window === 'undefined') {
            this.agent = new _superagent2.default.agent();
        }

        /*
         * Allow user to override superagent agent
         */
        this.requestAgent = null;
    }

    /**
    * Returns a string representation for an actual parameter.
    * @param param The actual parameter.
    * @returns {String} The string representation of <code>param</code>.
    */


    _createClass(ApiClient, [{
        key: "paramToString",
        value: function paramToString(param) {
            if (param == undefined || param == null) {
                return '';
            }
            if (param instanceof Date) {
                return param.toJSON();
            }

            return param.toString();
        }

        /**
        * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
        * NOTE: query parameters are not handled here.
        * @param {String} path The path to append to the base URL.
        * @param {Object} pathParams The parameter values to append.
        * @returns {String} The encoded path with parameter values substituted.
        */

    }, {
        key: "buildUrl",
        value: function buildUrl(path, pathParams) {
            var _this = this;

            if (!path.match(/^\//)) {
                path = '/' + path;
            }

            var url = this.basePath + path;
            url = url.replace(/\{([\w-]+)\}/g, function (fullMatch, key) {
                var value;
                if (pathParams.hasOwnProperty(key)) {
                    value = _this.paramToString(pathParams[key]);
                } else {
                    value = fullMatch;
                }

                return encodeURIComponent(value);
            });

            return url;
        }

        /**
        * Checks whether the given content type represents JSON.<br>
        * JSON content type examples:<br>
        * <ul>
        * <li>application/json</li>
        * <li>application/json; charset=UTF8</li>
        * <li>APPLICATION/JSON</li>
        * </ul>
        * @param {String} contentType The MIME content type to check.
        * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
        */

    }, {
        key: "isJsonMime",
        value: function isJsonMime(contentType) {
            return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
        }

        /**
        * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
        * @param {Array.<String>} contentTypes
        * @returns {String} The chosen content type, preferring JSON.
        */

    }, {
        key: "jsonPreferredMime",
        value: function jsonPreferredMime(contentTypes) {
            for (var i = 0; i < contentTypes.length; i++) {
                if (this.isJsonMime(contentTypes[i])) {
                    return contentTypes[i];
                }
            }

            return contentTypes[0];
        }

        /**
        * Checks whether the given parameter value represents file-like content.
        * @param param The parameter to check.
        * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
        */

    }, {
        key: "isFileParam",
        value: function isFileParam(param) {
            // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
            if (typeof require === 'function') {
                var fs = void 0;
                try {
                    fs = require('fs');
                } catch (err) {}
                if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
                    return true;
                }
            }

            // Buffer in Node.js
            if (typeof Buffer === 'function' && param instanceof Buffer) {
                return true;
            }

            // Blob in browser
            if (typeof Blob === 'function' && param instanceof Blob) {
                return true;
            }

            // File in browser (it seems File object is also instance of Blob, but keep this for safe)
            if (typeof File === 'function' && param instanceof File) {
                return true;
            }

            return false;
        }

        /**
        * Normalizes parameter values:
        * <ul>
        * <li>remove nils</li>
        * <li>keep files and arrays</li>
        * <li>format to string with `paramToString` for other cases</li>
        * </ul>
        * @param {Object.<String, Object>} params The parameters as object properties.
        * @returns {Object.<String, Object>} normalized parameters.
        */

    }, {
        key: "normalizeParams",
        value: function normalizeParams(params) {
            var newParams = {};
            for (var key in params) {
                if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
                    var value = params[key];
                    if (this.isFileParam(value) || Array.isArray(value)) {
                        newParams[key] = value;
                    } else {
                        newParams[key] = this.paramToString(value);
                    }
                }
            }

            return newParams;
        }

        /**
        * Enumeration of collection format separator strategies.
        * @enum {String}
        * @readonly
        */

    }, {
        key: "buildCollectionParam",


        /**
        * Builds a string representation of an array-type actual parameter, according to the given collection format.
        * @param {Array} param An array parameter.
        * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
        * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
        * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
        */
        value: function buildCollectionParam(param, collectionFormat) {
            if (param == null) {
                return null;
            }
            switch (collectionFormat) {
                case 'csv':
                    return param.map(this.paramToString).join(',');
                case 'ssv':
                    return param.map(this.paramToString).join(' ');
                case 'tsv':
                    return param.map(this.paramToString).join('\t');
                case 'pipes':
                    return param.map(this.paramToString).join('|');
                case 'multi':
                    //return the array directly as SuperAgent will handle it as expected
                    return param.map(this.paramToString);
                default:
                    throw new Error('Unknown collection format: ' + collectionFormat);
            }
        }

        /**
        * Applies authentication headers to the request.
        * @param {Object} request The request object created by a <code>superagent()</code> call.
        * @param {Array.<String>} authNames An array of authentication method names.
        */

    }, {
        key: "applyAuthToRequest",
        value: function applyAuthToRequest(request, authNames) {
            var _this2 = this;

            authNames.forEach(function (authName) {
                var auth = _this2.authentications[authName];
                switch (auth.type) {
                    case 'basic':
                        if (auth.username || auth.password) {
                            request.auth(auth.username || '', auth.password || '');
                        }

                        break;
                    case 'apiKey':
                        if (auth.apiKey) {
                            var data = {};
                            if (auth.apiKeyPrefix) {
                                data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
                            } else {
                                data[auth.name] = auth.apiKey;
                            }

                            if (auth['in'] === 'header') {
                                request.set(data);
                            } else {
                                request.query(data);
                            }
                        }

                        break;
                    case 'oauth2':
                        if (auth.accessToken) {
                            request.set({ 'Authorization': 'Bearer ' + auth.accessToken });
                        }

                        break;
                    default:
                        throw new Error('Unknown authentication type: ' + auth.type);
                }
            });
        }

        /**
        * Deserializes an HTTP response body into a value of the specified type.
        * @param {Object} response A SuperAgent response object.
        * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
        * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
        * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
        * all properties on <code>data<code> will be converted to this type.
        * @returns A value of the specified type.
        */

    }, {
        key: "deserialize",
        value: function deserialize(response, returnType) {
            if (response == null || returnType == null || response.status == 204) {
                return null;
            }

            // Rely on SuperAgent for parsing response body.
            // See http://visionmedia.github.io/superagent/#parsing-response-bodies
            var data = response.body;
            if (data == null || (typeof data === "undefined" ? "undefined" : _typeof(data)) === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length) {
                // SuperAgent does not always produce a body; use the unparsed response as a fallback
                data = response.text;
            }

            return ApiClient.convertToType(data, returnType);
        }

        /**
        * Callback function to receive the result of the operation.
        * @callback module:ApiClient~callApiCallback
        * @param {String} error Error message, if any.
        * @param data The data returned by the service call.
        * @param {String} response The complete HTTP response.
        */

        /**
        * Invokes the REST service using the supplied settings and parameters.
        * @param {String} path The base URL to invoke.
        * @param {String} httpMethod The HTTP method to use.
        * @param {Object.<String, String>} pathParams A map of path parameters and their values.
        * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
        * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
        * @param {Object.<String, Object>} formParams A map of form parameters and their values.
        * @param {Object} bodyParam The value to pass as the request body.
        * @param {Array.<String>} authNames An array of authentication type names.
        * @param {Array.<String>} contentTypes An array of request MIME types.
        * @param {Array.<String>} accepts An array of acceptable response MIME types.
        * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
        * constructor for a complex type.
        * @param {module:ApiClient~callApiCallback} callback The callback function.
        * @returns {Object} The SuperAgent request object.
        */

    }, {
        key: "callApi",
        value: function callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, callback) {
            var _this3 = this;

            var url = this.buildUrl(path, pathParams);
            var request = (0, _superagent2.default)(httpMethod, url);

            // apply authentications
            this.applyAuthToRequest(request, authNames);

            // set query parameters
            if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
                queryParams['_'] = new Date().getTime();
            }

            request.query(this.normalizeParams(queryParams));

            // set header parameters
            request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

            // set requestAgent if it is set by user
            if (this.requestAgent) {
                request.agent(this.requestAgent);
            }

            // set request timeout
            request.timeout(this.timeout);

            var contentType = this.jsonPreferredMime(contentTypes);
            if (contentType) {
                // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
                if (contentType != 'multipart/form-data') {
                    request.type(contentType);
                }
            } else if (!request.header['Content-Type']) {
                request.type('application/json');
            }

            if (contentType === 'application/x-www-form-urlencoded') {
                request.send(_querystring2.default.stringify(this.normalizeParams(formParams)));
            } else if (contentType == 'multipart/form-data') {
                var _formParams = this.normalizeParams(formParams);
                for (var key in _formParams) {
                    if (_formParams.hasOwnProperty(key)) {
                        if (this.isFileParam(_formParams[key])) {
                            // file field
                            request.attach(key, _formParams[key]);
                        } else {
                            request.field(key, _formParams[key]);
                        }
                    }
                }
            } else if (bodyParam) {
                request.send(bodyParam);
            }

            var accept = this.jsonPreferredMime(accepts);
            if (accept) {
                request.accept(accept);
            }

            if (returnType === 'Blob') {
                request.responseType('blob');
            } else if (returnType === 'String') {
                request.responseType('string');
            }

            // Attach previously saved cookies, if enabled
            if (this.enableCookies) {
                if (typeof window === 'undefined') {
                    this.agent.attachCookies(request);
                } else {
                    request.withCredentials();
                }
            }

            request.end(function (error, response) {
                if (callback) {
                    var data = null;
                    if (!error) {
                        try {
                            data = _this3.deserialize(response, returnType);
                            if (_this3.enableCookies && typeof window === 'undefined') {
                                _this3.agent.saveCookies(response);
                            }
                        } catch (err) {
                            error = err;
                        }
                    }

                    callback(error, data, response);
                }
            });

            return request;
        }

        /**
        * Parses an ISO-8601 string representation of a date value.
        * @param {String} str The date value as a string.
        * @returns {Date} The parsed date object.
        */

    }], [{
        key: "parseDate",
        value: function parseDate(str) {
            return new Date(str);
        }

        /**
        * Converts a value to the specified type.
        * @param {(String|Object)} data The data to convert, as a string or object.
        * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
        * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
        * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
        * all properties on <code>data<code> will be converted to this type.
        * @returns An instance of the specified type or null or undefined if data is null or undefined.
        */

    }, {
        key: "convertToType",
        value: function convertToType(data, type) {
            if (data === null || data === undefined) return data;

            switch (type) {
                case 'Boolean':
                    return Boolean(data);
                case 'Integer':
                    return parseInt(data, 10);
                case 'Number':
                    return parseFloat(data);
                case 'String':
                    return String(data);
                case 'Date':
                    return ApiClient.parseDate(String(data));
                case 'Blob':
                    return data;
                default:
                    if (type === Object) {
                        // generic object, return directly
                        return data;
                    } else if (typeof type === 'function') {
                        // for model type like: User
                        return type.constructFromObject(data);
                    } else if (Array.isArray(type)) {
                        // for array type like: ['String']
                        var itemType = type[0];

                        return data.map(function (item) {
                            return ApiClient.convertToType(item, itemType);
                        });
                    } else if ((typeof type === "undefined" ? "undefined" : _typeof(type)) === 'object') {
                        // for plain object type like: {'String': 'Integer'}
                        var keyType, valueType;
                        for (var k in type) {
                            if (type.hasOwnProperty(k)) {
                                keyType = k;
                                valueType = type[k];
                                break;
                            }
                        }

                        var result = {};
                        for (var k in data) {
                            if (data.hasOwnProperty(k)) {
                                var key = ApiClient.convertToType(k, keyType);
                                var value = ApiClient.convertToType(data[k], valueType);
                                result[key] = value;
                            }
                        }

                        return result;
                    } else {
                        // for unknown type, return the data directly
                        return data;
                    }
            }
        }

        /**
        * Constructs a new map or array model from REST data.
        * @param data {Object|Array} The REST data.
        * @param obj {Object|Array} The target object or array.
        */

    }, {
        key: "constructFromObject",
        value: function constructFromObject(data, obj, itemType) {
            if (Array.isArray(data)) {
                for (var i = 0; i < data.length; i++) {
                    if (data.hasOwnProperty(i)) obj[i] = ApiClient.convertToType(data[i], itemType);
                }
            } else {
                for (var k in data) {
                    if (data.hasOwnProperty(k)) obj[k] = ApiClient.convertToType(data[k], itemType);
                }
            }
        }
    }]);

    return ApiClient;
}();

/**
* The default API client implementation.
* @type {module:ApiClient}
*/


ApiClient.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',

    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',

    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',

    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',

    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
};
exports.default = ApiClient;
ApiClient.instance = new ApiClient();