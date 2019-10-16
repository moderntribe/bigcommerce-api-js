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
    define(['ApiClient', 'Model/CategoryBase', 'Model/CustomUrlCategory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CategoryBase'), require('./CustomUrlCategory'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.Category = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.CategoryBase, root.BigCommerceApi.CustomUrlCategory);
  }
}(this, function(ApiClient, CategoryBase, CustomUrlCategory) {
  'use strict';




  /**
   * The Category model module.
   * @module Model/Category
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>Category</code>.
   * A BigCommerce category object. 
   * @alias module:Model/Category
   * @class
   * @implements module:Model/CategoryBase
   */
  var exports = function() {
    var _this = this;

    CategoryBase.call(_this);

  };

  /**
   * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/Category} obj Optional instance to populate.
   * @return {module:Model/Category} The populated <code>Category</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CategoryBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The unique numeric ID of the category; increments sequentially. 
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;

  // Implement CategoryBase interface:
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


