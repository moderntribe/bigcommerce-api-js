import ApiClient from './ApiClient';
import superagent from "superagent";
import querystring from "querystring";
export default class BCApiClient extends ApiClient {
  constructor(opts) {
    super();
    const defaultConfig = {
      clientId: '',
      accessToken: '',
      storeId: '',
      version: 'v3',
    };
    const config = { ...defaultConfig,
      ...opts,
    };
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default https://api.bigcommerce.com/stores/{storeId}/v3
     */
    this.basePath = `https://api.bigcommerce.com/stores/${config.storeId}/${config.version}`;
    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    this.defaultHeaders = {
      'X-Auth-Client': config.clientId,
      'X-Auth-Token': config.accessToken,
    };
  }
  
  callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, callback) {
    var url = this.buildUrl(path, pathParams);
    var request = superagent(httpMethod, url);
    // apply authentications
    this.applyAuthToRequest(request, authNames);
    // set query parameters
    if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
      queryParams['_'] = new Date()
        .getTime();
    }
    request.query(this.normalizeParams(queryParams));
    // set header parameters
    request.set(this.defaultHeaders)
      .set(this.normalizeParams(headerParams));
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
      request.send(querystring.stringify(this.normalizeParams(formParams)));
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
      request.end((error, response) => {
        var data = null;
        if (!error) {
          try {
            data = this.deserialize(response, returnType);
            if (this.enableCookies && typeof window === 'undefined') {
              this.agent.saveCookies(response);
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
}

module.exports = BCApiClient;

