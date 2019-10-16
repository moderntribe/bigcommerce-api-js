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
    define(['ApiClient', 'Model/CustomUrlCategory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomUrlCategory'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.CategoryBase = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.CustomUrlCategory);
  }
}(this, function(ApiClient, CustomUrlCategory) {
  'use strict';




  /**
   * The CategoryBase model module.
   * @module Model/CategoryBase
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>CategoryBase</code>.
   * Common Category properties. 
   * @alias module:Model/CategoryBase
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>CategoryBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/CategoryBase} obj Optional instance to populate.
   * @return {module:Model/CategoryBase} The populated <code>CategoryBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('views')) {
        obj['views'] = ApiClient.convertToType(data['views'], 'Number');
      }
      if (data.hasOwnProperty('sort_order')) {
        obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'Number');
      }
      if (data.hasOwnProperty('page_title')) {
        obj['page_title'] = ApiClient.convertToType(data['page_title'], 'String');
      }
      if (data.hasOwnProperty('search_keywords')) {
        obj['search_keywords'] = ApiClient.convertToType(data['search_keywords'], 'String');
      }
      if (data.hasOwnProperty('meta_keywords')) {
        obj['meta_keywords'] = ApiClient.convertToType(data['meta_keywords'], ['String']);
      }
      if (data.hasOwnProperty('meta_description')) {
        obj['meta_description'] = ApiClient.convertToType(data['meta_description'], 'String');
      }
      if (data.hasOwnProperty('layout_file')) {
        obj['layout_file'] = ApiClient.convertToType(data['layout_file'], 'String');
      }
      if (data.hasOwnProperty('is_visible')) {
        obj['is_visible'] = ApiClient.convertToType(data['is_visible'], 'Boolean');
      }
      if (data.hasOwnProperty('default_product_sort')) {
        obj['default_product_sort'] = ApiClient.convertToType(data['default_product_sort'], 'String');
      }
      if (data.hasOwnProperty('image_url')) {
        obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
      }
      if (data.hasOwnProperty('custom_url')) {
        obj['custom_url'] = CustomUrlCategory.constructFromObject(data['custom_url']);
      }
    }
    return obj;
  }

  /**
   * The unique numeric ID of the category's parent. This field controls where the category sits in the tree of categories that organize the catalog. 
   * @member {Number} parent_id
   */
  exports.prototype['parent_id'] = undefined;
  /**
   * The name displayed for the category. Name is unique with respect to the category's siblings. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The product description, which can include HTML formatting. 
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Number of views the category has on the storefront. 
   * @member {Number} views
   */
  exports.prototype['views'] = undefined;
  /**
   * Priority this category will be given when included in the menu and category pages. The lower the number, the closer to the top of the results the category will be. 
   * @member {Number} sort_order
   */
  exports.prototype['sort_order'] = undefined;
  /**
   * Custom title for the category page. If not defined, the category name will be used as the meta title. 
   * @member {String} page_title
   */
  exports.prototype['page_title'] = undefined;
  /**
   * A comma-separated list of keywords that can be used to locate the category when searching the store. 
   * @member {String} search_keywords
   */
  exports.prototype['search_keywords'] = undefined;
  /**
   * Custom meta keywords for the category page. If not defined, the store's default keywords will be used. Must post as an array like: [\"awesome\",\"sauce\"]. 
   * @member {Array.<String>} meta_keywords
   */
  exports.prototype['meta_keywords'] = undefined;
  /**
   * Custom meta description for the category page. If not defined, the store's default meta description will be used. 
   * @member {String} meta_description
   */
  exports.prototype['meta_description'] = undefined;
  /**
   * The layout template file used to render this category. 
   * @member {String} layout_file
   */
  exports.prototype['layout_file'] = undefined;
  /**
   * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the category will be displayed. If `false`, the category will be hidden from view. 
   * @member {Boolean} is_visible
   */
  exports.prototype['is_visible'] = undefined;
  /**
   * Determines how the products are sorted on category page load. 
   * @member {String} default_product_sort
   */
  exports.prototype['default_product_sort'] = undefined;
  /**
   * Image URL used for this category on the storefront. Images can be uploaded via form file post to `/categories/{categoryId}/image`, or by providing a publicly accessible URL in this field. 
   * @member {String} image_url
   */
  exports.prototype['image_url'] = undefined;
  /**
   * @member {module:Model/CustomUrlCategory} custom_url
   */
  exports.prototype['custom_url'] = undefined;



  return exports;
}));


