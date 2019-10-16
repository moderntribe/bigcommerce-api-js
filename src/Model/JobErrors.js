/**
 * BigCommerce API
 * A Swagger Document for the BigCommmerce v3 Themes API.
 *
 * OpenAPI spec version: 3.0.0b
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.JobErrors = factory(root.BigCommerceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JobErrors model module.
   * @module Model/JobErrors
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>JobErrors</code>.
   * @alias module:Model/JobErrors
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>JobErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/JobErrors} obj Optional instance to populate.
   * @return {module:Model/JobErrors} The populated <code>JobErrors</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * The error.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * The message.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


