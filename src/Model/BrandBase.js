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
    define(['ApiClient', 'Model/CustomUrlBrand'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomUrlBrand'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.BrandBase = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.CustomUrlBrand);
  }
}(this, function(ApiClient, CustomUrlBrand) {
  'use strict';




  /**
   * The BrandBase model module.
   * @module Model/BrandBase
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>BrandBase</code>.
   * Common Brand properties. 
   * @alias module:Model/BrandBase
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>BrandBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/BrandBase} obj Optional instance to populate.
   * @return {module:Model/BrandBase} The populated <code>BrandBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('page_title')) {
        obj['page_title'] = ApiClient.convertToType(data['page_title'], 'String');
      }
      if (data.hasOwnProperty('meta_keywords')) {
        obj['meta_keywords'] = ApiClient.convertToType(data['meta_keywords'], ['String']);
      }
      if (data.hasOwnProperty('meta_description')) {
        obj['meta_description'] = ApiClient.convertToType(data['meta_description'], 'String');
      }
      if (data.hasOwnProperty('search_keywords')) {
        obj['search_keywords'] = ApiClient.convertToType(data['search_keywords'], 'String');
      }
      if (data.hasOwnProperty('image_url')) {
        obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
      }
      if (data.hasOwnProperty('custom_url')) {
        obj['custom_url'] = CustomUrlBrand.constructFromObject(data['custom_url']);
      }
    }
    return obj;
  }

  /**
   * The name of the brand. Must be unique. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The title shown in the browser while viewing the brand. 
   * @member {String} page_title
   */
  exports.prototype['page_title'] = undefined;
  /**
   * Comma-separated list of meta keywords to include in the HTML. 
   * @member {Array.<String>} meta_keywords
   */
  exports.prototype['meta_keywords'] = undefined;
  /**
   * A meta description to include. 
   * @member {String} meta_description
   */
  exports.prototype['meta_description'] = undefined;
  /**
   * A comma-separated list of keywords that can be used to locate this brand. 
   * @member {String} search_keywords
   */
  exports.prototype['search_keywords'] = undefined;
  /**
   * Image URL used for this category on the storefront. Images can be uploaded via form file post to `/brands/{brandId}/image`, or by providing a publicly accessible URL in this field. 
   * @member {String} image_url
   */
  exports.prototype['image_url'] = undefined;
  /**
   * @member {module:Model/CustomUrlBrand} custom_url
   */
  exports.prototype['custom_url'] = undefined;



  return exports;
}));


