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
    root.BigCommerceApi.DetailedErrors = factory(root.BigCommerceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DetailedErrors model module.
   * @module Model/DetailedErrors
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>DetailedErrors</code>.
   * @alias module:Model/DetailedErrors
   * @class
   * @extends Object
   */
  var exports = function() {
    var _this = this;

    return _this;
  };

  /**
   * Constructs a <code>DetailedErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/DetailedErrors} obj Optional instance to populate.
   * @return {module:Model/DetailedErrors} The populated <code>DetailedErrors</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, String);

    }
    return obj;
  }




  return exports;
}));


