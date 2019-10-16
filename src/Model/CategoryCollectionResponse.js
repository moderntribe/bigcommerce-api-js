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
    define(['ApiClient', 'Model/Category', 'Model/CollectionMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Category'), require('./CollectionMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.CategoryCollectionResponse = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.Category, root.BigCommerceApi.CollectionMeta);
  }
}(this, function(ApiClient, Category, CollectionMeta) {
  'use strict';




  /**
   * The CategoryCollectionResponse model module.
   * @module Model/CategoryCollectionResponse
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>CategoryCollectionResponse</code>.
   * Response payload for the BigCommerce API. 
   * @alias module:Model/CategoryCollectionResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CategoryCollectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/CategoryCollectionResponse} obj Optional instance to populate.
   * @return {module:Model/CategoryCollectionResponse} The populated <code>CategoryCollectionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Category]);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = CollectionMeta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:Model/Category>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:Model/CollectionMeta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


