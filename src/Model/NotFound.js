/**
 * BigCommerce API
 * A Swagger Document for the BigCommmerce v3 Catalog API.
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
    root.BigCommerceApi.NotFound = factory(root.BigCommerceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NotFound model module.
   * @module Model/NotFound
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>NotFound</code>.
   * Error payload for the BigCommerce API. 
   * @alias module:Model/NotFound
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>NotFound</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/NotFound} obj Optional instance to populate.
   * @return {module:Model/NotFound} The populated <code>NotFound</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('instance')) {
        obj['instance'] = ApiClient.convertToType(data['instance'], 'String');
      }
    }
    return obj;
  }

  /**
   * 404 HTTP status code. 
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The error title describing the particular error.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} instance
   */
  exports.prototype['instance'] = undefined;



  return exports;
}));


