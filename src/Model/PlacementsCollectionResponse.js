/**
 * BigCommerce Widgets API
 * Widgets API allows developers to inject content into a BigCommerce theme.
 *
 * OpenAPI spec version: 
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
    define(['ApiClient', 'Model/CollectionMeta', 'Model/Placement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CollectionMeta'), require('./Placement'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceWidgetsApi) {
      root.BigCommerceWidgetsApi = {};
    }
    root.BigCommerceWidgetsApi.PlacementsCollectionResponse = factory(root.BigCommerceWidgetsApi.ApiClient, root.BigCommerceWidgetsApi.CollectionMeta, root.BigCommerceWidgetsApi.Placement);
  }
}(this, function(ApiClient, CollectionMeta, Placement) {
  'use strict';




  /**
   * The PlacementsCollectionResponse model module.
   * @module Model/PlacementsCollectionResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PlacementsCollectionResponse</code>.
   * 
   * @alias module:Model/PlacementsCollectionResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PlacementsCollectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/PlacementsCollectionResponse} obj Optional instance to populate.
   * @return {module:Model/PlacementsCollectionResponse} The populated <code>PlacementsCollectionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Placement]);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = CollectionMeta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:Model/Placement>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:Model/CollectionMeta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


