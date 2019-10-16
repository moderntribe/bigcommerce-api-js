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
    define(['ApiClient', 'Model/OptionConfig', 'Model/OptionValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OptionConfig'), require('./OptionValue'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.OptionBase = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.OptionConfig, root.BigCommerceApi.OptionValue);
  }
}(this, function(ApiClient, OptionConfig, OptionValue) {
  'use strict';




  /**
   * The OptionBase model module.
   * @module Model/OptionBase
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>OptionBase</code>.
   * Common Option properties.
   * @alias module:Model/OptionBase
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>OptionBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/OptionBase} obj Optional instance to populate.
   * @return {module:Model/OptionBase} The populated <code>OptionBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = OptionConfig.constructFromObject(data['config']);
      }
      if (data.hasOwnProperty('option_values')) {
        obj['option_values'] = ApiClient.convertToType(data['option_values'], [OptionValue]);
      }
    }
    return obj;
  }

  /**
   * The unique numerical ID of the option, increments sequentially. 
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The unique numerical ID of the product to which the option belongs. 
   * @member {Number} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * The name of the option shown on the storefront. 
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * The type of option, which determines how it will display on the storefront. Acceptable values: `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. For reference, the former v2 API values are: RB = radio_buttons, RT = rectangles, S = dropdown, P = product_list, PI = product_list_with_images, CS = swatch. 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:Model/OptionConfig} config
   */
  exports.prototype['config'] = undefined;
  /**
   * @member {Array.<module:Model/OptionValue>} option_values
   */
  exports.prototype['option_values'] = undefined;



  return exports;
}));


