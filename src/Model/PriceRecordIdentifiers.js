/**
 * BigCommerce API
 * A Swagger Document for the BigCommmerce v3 Price Lists API.
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
    root.BigCommerceApi.PriceRecordIdentifiers = factory(root.BigCommerceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PriceRecordIdentifiers model module.
   * @module Model/PriceRecordIdentifiers
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>PriceRecordIdentifiers</code>.
   * `Price Record` object used in batch create or update. 
   * @alias module:Model/PriceRecordIdentifiers
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PriceRecordIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/PriceRecordIdentifiers} obj Optional instance to populate.
   * @return {module:Model/PriceRecordIdentifiers} The populated <code>PriceRecordIdentifiers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('price_list_id')) {
        obj['price_list_id'] = ApiClient.convertToType(data['price_list_id'], 'Number');
      }
      if (data.hasOwnProperty('variant_id')) {
        obj['variant_id'] = ApiClient.convertToType(data['variant_id'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Price List with which this price set is associated. 
   * @member {Number} price_list_id
   */
  exports.prototype['price_list_id'] = undefined;
  /**
   * The variant with which this price set is associated. Either variant_id or sku is required. 
   * @member {Number} variant_id
   */
  exports.prototype['variant_id'] = undefined;
  /**
   * The variant with which this price set is associated. Either sku or variant_id is required. 
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * The 3-letter currency code with which this price set is associated. 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;



  return exports;
}));


