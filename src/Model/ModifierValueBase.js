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
    define(['ApiClient', 'Model/ModifierValueBaseAdjusters', 'Model/OptionValueBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModifierValueBaseAdjusters'), require('./OptionValueBase'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.ModifierValueBase = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.ModifierValueBaseAdjusters, root.BigCommerceApi.OptionValueBase);
  }
}(this, function(ApiClient, ModifierValueBaseAdjusters, OptionValueBase) {
  'use strict';




  /**
   * The ModifierValueBase model module.
   * @module Model/ModifierValueBase
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>ModifierValueBase</code>.
   * @alias module:Model/ModifierValueBase
   * @class
   * @implements module:Model/OptionValueBase
   */
  var exports = function() {
    var _this = this;

    OptionValueBase.call(_this);

  };

  /**
   * Constructs a <code>ModifierValueBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/ModifierValueBase} obj Optional instance to populate.
   * @return {module:Model/ModifierValueBase} The populated <code>ModifierValueBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      OptionValueBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('adjusters')) {
        obj['adjusters'] = ModifierValueBaseAdjusters.constructFromObject(data['adjusters']);
      }
    }
    return obj;
  }

  /**
   * @member {module:Model/ModifierValueBaseAdjusters} adjusters
   */
  exports.prototype['adjusters'] = undefined;

  // Implement OptionValueBase interface:
  /**
   * The flag for preselecting a value as the default on the storefront. This field is not supported for swatch options/modifiers. 
   * @member {Boolean} is_default
   */
exports.prototype['is_default'] = undefined;

  /**
   * The text display identifying the value on the storefront. 
   * @member {String} label
   */
exports.prototype['label'] = undefined;

  /**
   * The order in which the value will be displayed on the product page. 
   * @member {Number} sort_order
   */
exports.prototype['sort_order'] = undefined;

  /**
   * Extra data describing the value, based on the type of option or modifier with which the value is associated. The `swatch` type option can accept an array of `colors`, with up to three hexidecimal color keys; or an `image_url`, which is a full image URL path including protocol. The `product list` type option requires a `product_id`. The `checkbox` type option requires a boolean flag, called `checked_value`, to determine which value is considered to be the checked state. 
   * @member {Object} value_data
   */
exports.prototype['value_data'] = undefined;



  return exports;
}));


