/**
 * Data Model for BigCommerce's v3 Server-to-Server Cart API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0.0.1
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
    if (!root.DataModelForBigCommercesV3ServerToServerCartApi) {
      root.DataModelForBigCommercesV3ServerToServerCartApi = {};
    }
    root.DataModelForBigCommercesV3ServerToServerCartApi.AppliedDiscount = factory(root.DataModelForBigCommercesV3ServerToServerCartApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AppliedDiscount model module.
   * @module Model/AppliedDiscount
   * @version v0.0.1
   */

  /**
   * Constructs a new <code>AppliedDiscount</code>.
   * @alias module:Model/AppliedDiscount
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AppliedDiscount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/AppliedDiscount} obj Optional instance to populate.
   * @return {module:Model/AppliedDiscount} The populated <code>AppliedDiscount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('discounted_amount')) {
        obj['discounted_amount'] = ApiClient.convertToType(data['discounted_amount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * ID of the applied discount.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The discounted amount applied within a given context.
   * @member {Number} discounted_amount
   */
  exports.prototype['discounted_amount'] = undefined;



  return exports;
}));


