/**
 * Orders APIs
 * Orders APIs integrate with point-of-sale, shipping, distribution, and inventory-management systems.
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
    define(['ApiClient', 'Model/OrderFormField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderFormField'));
  } else {
    // Browser globals (root is window)
    if (!root.OrdersApIs) {
      root.OrdersApIs = {};
    }
    root.OrdersApIs.OrderBillingAddress = factory(root.OrdersApIs.ApiClient, root.OrdersApIs.OrderFormField);
  }
}(this, function(ApiClient, OrderFormField) {
  'use strict';




  /**
   * The OrderBillingAddress model module.
   * @module Model/OrderBillingAddress
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderBillingAddress</code>.
   * Required to create an order.
   * @alias module:Model/OrderBillingAddress
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>OrderBillingAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/OrderBillingAddress} obj Optional instance to populate.
   * @return {module:Model/OrderBillingAddress} The populated <code>OrderBillingAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('street_1')) {
        obj['street_1'] = ApiClient.convertToType(data['street_1'], 'String');
      }
      if (data.hasOwnProperty('street_2')) {
        obj['street_2'] = ApiClient.convertToType(data['street_2'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('zip')) {
        obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('country_iso2')) {
        obj['country_iso2'] = ApiClient.convertToType(data['country_iso2'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('form_fields')) {
        obj['form_fields'] = ApiClient.convertToType(data['form_fields'], [OrderFormField]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * 
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * 
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * 
   * @member {String} street_1
   */
  exports.prototype['street_1'] = undefined;
  /**
   * 
   * @member {String} street_2
   */
  exports.prototype['street_2'] = undefined;
  /**
   * 
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * 
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * 
   * @member {String} zip
   */
  exports.prototype['zip'] = undefined;
  /**
   * 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * 
   * @member {String} country_iso2
   */
  exports.prototype['country_iso2'] = undefined;
  /**
   * 
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Array.<module:Model/OrderFormField>} form_fields
   */
  exports.prototype['form_fields'] = undefined;



  return exports;
}));


