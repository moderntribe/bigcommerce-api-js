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
    define(['ApiClient', 'Model/ProductVideoBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductVideoBase'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.ProductVideoPut = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.ProductVideoBase);
  }
}(this, function(ApiClient, ProductVideoBase) {
  'use strict';




  /**
   * The ProductVideoPut model module.
   * @module Model/ProductVideoPut
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>ProductVideoPut</code>.
   * The model for a PUT to update a video on a product. 
   * @alias module:Model/ProductVideoPut
   * @class
   * @implements module:Model/ProductVideoBase
   */
  var exports = function() {
    var _this = this;

    ProductVideoBase.call(_this);

  };

  /**
   * Constructs a <code>ProductVideoPut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/ProductVideoPut} obj Optional instance to populate.
   * @return {module:Model/ProductVideoPut} The populated <code>ProductVideoPut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ProductVideoBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The unique numeric ID of the product video; increments sequentially. 
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;

  // Implement ProductVideoBase interface:
  /**
   * The title for the video. If left blank, this will be filled in according to data on a host site. 
   * @member {String} title
   */
exports.prototype['title'] = undefined;

  /**
   * The description for the video. If left blank, this will be filled in according to data on a host site. 
   * @member {String} description
   */
exports.prototype['description'] = undefined;

  /**
   * The order in which the video will be displayed on the product page. Higher integers give the video a lower priority. When updating, if the video is given a lower priority, all videos with a `sort_order` the same as or greater than the video's new `sort_order` value will have their `sort_order`s reordered. 
   * @member {Number} sort_order
   */
exports.prototype['sort_order'] = undefined;

  /**
   * The video type (a short name of a host site). 
   * @member {String} type
   */
exports.prototype['type'] = undefined;



  return exports;
}));


