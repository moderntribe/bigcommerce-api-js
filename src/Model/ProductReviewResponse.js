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
    define(['ApiClient', 'Model/Meta', 'Model/ProductReview'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./ProductReview'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.ProductReviewResponse = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.Meta, root.BigCommerceApi.ProductReview);
  }
}(this, function(ApiClient, Meta, ProductReview) {
  'use strict';




  /**
   * The ProductReviewResponse model module.
   * @module Model/ProductReviewResponse
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>ProductReviewResponse</code>.
   * Response payload for the BigCommerce API. 
   * @alias module:Model/ProductReviewResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ProductReviewResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/ProductReviewResponse} obj Optional instance to populate.
   * @return {module:Model/ProductReviewResponse} The populated <code>ProductReviewResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ProductReview.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = Meta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * @member {module:Model/ProductReview} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:Model/Meta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


