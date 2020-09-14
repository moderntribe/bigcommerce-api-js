"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient2 = require("./ApiClient");

var _ApiClient3 = _interopRequireDefault(_ApiClient2);

var _superagent = require("superagent");

var _superagent2 = _interopRequireDefault(_superagent);

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BCApiClient = function (_ApiClient) {
  _inherits(BCApiClient, _ApiClient);

  function BCApiClient(opts) {
    _classCallCheck(this, BCApiClient);

    var _this = _possibleConstructorReturn(this, (BCApiClient.__proto__ || Object.getPrototypeOf(BCApiClient)).call(this));

    var defaultConfig = {
      clientId: '',
      accessToken: '',
      storeId: '',
      version: 'v3'
    };
    var config = _extends({}, defaultConfig, opts);
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default https://api.bigcommerce.com/stores/{storeId}/v3
     */
    _this.basePath = "https://api.bigcommerce.com/stores/" + config.storeId + "/" + config.version;
    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    _this.defaultHeaders = {
      'X-Auth-Client': config.clientId,
      'X-Auth-Token': config.accessToken
    };
    return _this;
  }

  _createClass(BCApiClient, [{
    key: "callApi",
    value: function callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, callback) {
      var _this2 = this;

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
      // changed: JW July 2020
      if (callback) {
        request.end(function (error, response) {
          var data = null;
          if (!error) {
            try {
              data = _this2.deserialize(response, returnType);
              if (_this2.enableCookies && typeof window === 'undefined') {
                _this2.agent.saveCookies(response);
              }
            } catch (err) {
              error = err;
            }
          }
          callback(error, data, response);
        });
      }
      // end change
      return request;
    }
  }]);

  return BCApiClient;
}(_ApiClient3.default);

exports.default = BCApiClient;


module.exports = BCApiClient;