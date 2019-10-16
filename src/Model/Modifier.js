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
    define(['ApiClient', 'Model/ModifierBase', 'Model/ModifierValue', 'Model/OptionConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModifierBase'), require('./ModifierValue'), require('./OptionConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.Modifier = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.ModifierBase, root.BigCommerceApi.ModifierValue, root.BigCommerceApi.OptionConfig);
  }
}(this, function(ApiClient, ModifierBase, ModifierValue, OptionConfig) {
  'use strict';




  /**
   * The Modifier model module.
   * @module Model/Modifier
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>Modifier</code>.
   * @alias module:Model/Modifier
   * @class
   * @implements module:Model/ModifierBase
   */
  var exports = function() {
    var _this = this;

    ModifierBase.call(_this);




  };

  /**
   * Constructs a <code>Modifier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/Modifier} obj Optional instance to populate.
   * @return {module:Model/Modifier} The populated <code>Modifier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ModifierBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique numeric ID of the modifier; increments sequentially. 
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The unique numeric ID of the product to which the option belongs. 
   * @member {Number} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * The unique option name. Auto-generated from the display name, a timestamp, and the product ID. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The name of the option shown on the storefront. 
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;

  // Implement ModifierBase interface:
  /**
   * BigCommerce API, which determines how it will display on the storefront. Acceptable values: `date`, `checkbox`, `file`, `text`, `multi_line_text`, `numbers_only_text`, `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. For reference, the former v2 API values are: D = date, C = checkbox, F = file, T = text, MT = multi_line_text, N = numbers_only_text, RB = radio_buttons, RT = rectangles, S = dropdown, P = product_list, PI = product_list_with_images, CS = swatch. 
   * @member {String} type
   */
exports.prototype['type'] = undefined;

  /**
   * Whether or not this modifer is required or not at checkout. 
   * @member {Boolean} required
   */
exports.prototype['required'] = undefined;

  /**
   * The order the modifiers display on the product detail page.
   * @member {Number} sort_order
   */
exports.prototype['sort_order'] = undefined;

  /**
   * @member {module:Model/OptionConfig} config
   */
exports.prototype['config'] = undefined;

  /**
   * @member {Array.<module:Model/ModifierValue>} option_values
   */
exports.prototype['option_values'] = undefined;



  return exports;
}));


