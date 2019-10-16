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
    define(['ApiClient', 'Model/BulkPricingRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkPricingRule'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.BulkPricingRulePut = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.BulkPricingRule);
  }
}(this, function(ApiClient, BulkPricingRule) {
  'use strict';




  /**
   * The BulkPricingRulePut model module.
   * @module Model/BulkPricingRulePut
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>BulkPricingRulePut</code>.
   * The model for a PUT to update bulk pricing rules on a product. 
   * @alias module:Model/BulkPricingRulePut
   * @class
   * @implements module:Model/BulkPricingRule
   */
  var exports = function() {
    var _this = this;

    BulkPricingRule.call(_this);
  };

  /**
   * Constructs a <code>BulkPricingRulePut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/BulkPricingRulePut} obj Optional instance to populate.
   * @return {module:Model/BulkPricingRulePut} The populated <code>BulkPricingRulePut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      BulkPricingRule.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement BulkPricingRule interface:
  /**
   * The minimum inclusive quantity of a product to satisfy this rule. Must be greater than or equal to zero. 
   * @member {Number} quantity_min
   */
exports.prototype['quantity_min'] = undefined;

  /**
   * The maximum inclusive quantity of a product to satisfy this rule. Must be greater than the `quantity_min` value – unless this field has a value of 0 (zero), in which case there will be no maximum bound for this rule. 
   * @member {Number} quantity_max
   */
exports.prototype['quantity_max'] = undefined;

  /**
   * The type of adjustment that is made. Values: `price` - the adjustment amount per product; `percent` - the adjustment as a percentage of the original price; `fixed` - the adjusted absolute price of the product. 
   * @member {String} type
   */
exports.prototype['type'] = undefined;

  /**
   * The value of the adjustment by the bulk pricing rule. 
   * @member {Number} amount
   */
exports.prototype['amount'] = undefined;

  /**
   * The ID of the bulk pricing rule. 
   * @member {Number} id
   */
exports.prototype['id'] = undefined;



  return exports;
}));


