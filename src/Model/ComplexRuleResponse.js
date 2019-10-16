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
    define(['ApiClient', 'Model/ComplexRule', 'Model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ComplexRule'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.ComplexRuleResponse = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.ComplexRule, root.BigCommerceApi.Meta);
  }
}(this, function(ApiClient, ComplexRule, Meta) {
  'use strict';




  /**
   * The ComplexRuleResponse model module.
   * @module Model/ComplexRuleResponse
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>ComplexRuleResponse</code>.
   * Response payload for the BigCommerce API. 
   * @alias module:Model/ComplexRuleResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ComplexRuleResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/ComplexRuleResponse} obj Optional instance to populate.
   * @return {module:Model/ComplexRuleResponse} The populated <code>ComplexRuleResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ComplexRule.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = Meta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * @member {module:Model/ComplexRule} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:Model/Meta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


