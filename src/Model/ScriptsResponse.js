/**
 * BigCommerce API
 * A Swagger Document for the BigCommmerce v3 Scripts API.
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
    define(['ApiClient', 'Model/CollectionMeta', 'Model/Script'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CollectionMeta'), require('./Script'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.ScriptsResponse = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.CollectionMeta, root.BigCommerceApi.Script);
  }
}(this, function(ApiClient, CollectionMeta, Script) {
  'use strict';




  /**
   * The ScriptsResponse model module.
   * @module Model/ScriptsResponse
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>ScriptsResponse</code>.
   * @alias module:Model/ScriptsResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ScriptsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/ScriptsResponse} obj Optional instance to populate.
   * @return {module:Model/ScriptsResponse} The populated <code>ScriptsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Script]);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = CollectionMeta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:Model/Script>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:Model/CollectionMeta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


