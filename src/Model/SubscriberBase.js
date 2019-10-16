/**
 * BigCommerce API
 * A Swagger Document for the BigCommmerce v3 Subscribers API.
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.SubscriberBase = factory(root.BigCommerceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SubscriberBase model module.
   * @module Model/SubscriberBase
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>SubscriberBase</code>.
   * Common Subscriber properties.
   * @alias module:Model/SubscriberBase
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>SubscriberBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/SubscriberBase} obj Optional instance to populate.
   * @return {module:Model/SubscriberBase} The populated <code>SubscriberBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('order_id')) {
        obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The unique numeric ID of the subscriber; increments sequentially. 
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The email of the subscriber. Must be unique. 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The first name of the subscriber. 
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * The last name of the subscriber. 
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * The source of the subscriber. Values are: `storefront`, `order`, or `custom`. 
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * The ID of the source order, if source was an order. 
   * @member {Number} order_id
   */
  exports.prototype['order_id'] = undefined;



  return exports;
}));


