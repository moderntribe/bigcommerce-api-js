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
    define(['ApiClient', 'Model/OptionBase', 'Model/OptionConfig', 'Model/OptionValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OptionBase'), require('./OptionConfig'), require('./OptionValue'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.Option = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.OptionBase, root.BigCommerceApi.OptionConfig, root.BigCommerceApi.OptionValue);
  }
}(this, function(ApiClient, OptionBase, OptionConfig, OptionValue) {
  'use strict';




  /**
   * The Option model module.
   * @module Model/Option
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>Option</code>.
   * @alias module:Model/Option
   * @class
   * @implements module:Model/OptionBase
   */
  var exports = function() {
    var _this = this;

    OptionBase.call(_this);

  };

  /**
   * Constructs a <code>Option</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/Option} obj Optional instance to populate.
   * @return {module:Model/Option} The populated <code>Option</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      OptionBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique option name, auto-generated from the display name, a timestamp, and the product ID. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  // Implement OptionBase interface:
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


