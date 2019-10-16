/**
 * Data Model for BigCommerce's v3 Server-to-Server Cart API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0.0.1
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
    define(['ApiClient', 'Model/Cart', 'Model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cart'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.DataModelForBigCommercesV3ServerToServerCartApi) {
      root.DataModelForBigCommercesV3ServerToServerCartApi = {};
    }
    root.DataModelForBigCommercesV3ServerToServerCartApi.CartResponse = factory(root.DataModelForBigCommercesV3ServerToServerCartApi.ApiClient, root.DataModelForBigCommercesV3ServerToServerCartApi.Cart, root.DataModelForBigCommercesV3ServerToServerCartApi.Meta);
  }
}(this, function(ApiClient, Cart, Meta) {
  'use strict';




  /**
   * The CartResponse model module.
   * @module Model/CartResponse
   * @version v0.0.1
   */

  /**
   * Constructs a new <code>CartResponse</code>.
   * Response payload for the BigCommerce API. 
   * @alias module:Model/CartResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CartResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/CartResponse} obj Optional instance to populate.
   * @return {module:Model/CartResponse} The populated <code>CartResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = Cart.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = Meta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * @member {module:Model/Cart} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:Model/Meta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


