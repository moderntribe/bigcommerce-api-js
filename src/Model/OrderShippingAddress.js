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
    define(['ApiClient', 'Model/OrderFormField', 'Model/ShippingQuotesResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderFormField'), require('./ShippingQuotesResource'));
  } else {
    // Browser globals (root is window)
    if (!root.OrdersApIs) {
      root.OrdersApIs = {};
    }
    root.OrdersApIs.OrderShippingAddress = factory(root.OrdersApIs.ApiClient, root.OrdersApIs.OrderFormField, root.OrdersApIs.ShippingQuotesResource);
  }
}(this, function(ApiClient, OrderFormField, ShippingQuotesResource) {
  'use strict';




  /**
   * The OrderShippingAddress model module.
   * @module Model/OrderShippingAddress
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderShippingAddress</code>.
   * @alias module:Model/OrderShippingAddress
   * @class
   */
  var exports = function() {
    var _this = this;
































  };

  /**
   * Constructs a <code>OrderShippingAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/OrderShippingAddress} obj Optional instance to populate.
   * @return {module:Model/OrderShippingAddress} The populated <code>OrderShippingAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('order_id')) {
        obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
      }
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
      if (data.hasOwnProperty('zip')) {
        obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('country_iso2')) {
        obj['country_iso2'] = ApiClient.convertToType(data['country_iso2'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('items_total')) {
        obj['items_total'] = ApiClient.convertToType(data['items_total'], 'Number');
      }
      if (data.hasOwnProperty('items_shipped')) {
        obj['items_shipped'] = ApiClient.convertToType(data['items_shipped'], 'Number');
      }
      if (data.hasOwnProperty('shipping_method')) {
        obj['shipping_method'] = ApiClient.convertToType(data['shipping_method'], 'String');
      }
      if (data.hasOwnProperty('base_cost')) {
        obj['base_cost'] = ApiClient.convertToType(data['base_cost'], 'String');
      }
      if (data.hasOwnProperty('cost_ex_tax')) {
        obj['cost_ex_tax'] = ApiClient.convertToType(data['cost_ex_tax'], 'String');
      }
      if (data.hasOwnProperty('cost_inc_tax')) {
        obj['cost_inc_tax'] = ApiClient.convertToType(data['cost_inc_tax'], 'String');
      }
      if (data.hasOwnProperty('cost_tax')) {
        obj['cost_tax'] = ApiClient.convertToType(data['cost_tax'], 'String');
      }
      if (data.hasOwnProperty('cost_tax_class_id')) {
        obj['cost_tax_class_id'] = ApiClient.convertToType(data['cost_tax_class_id'], 'Number');
      }
      if (data.hasOwnProperty('base_handling_cost')) {
        obj['base_handling_cost'] = ApiClient.convertToType(data['base_handling_cost'], 'String');
      }
      if (data.hasOwnProperty('handling_cost_ex_tax')) {
        obj['handling_cost_ex_tax'] = ApiClient.convertToType(data['handling_cost_ex_tax'], 'String');
      }
      if (data.hasOwnProperty('handling_cost_inc_tax')) {
        obj['handling_cost_inc_tax'] = ApiClient.convertToType(data['handling_cost_inc_tax'], 'String');
      }
      if (data.hasOwnProperty('handling_cost_tax')) {
        obj['handling_cost_tax'] = ApiClient.convertToType(data['handling_cost_tax'], 'String');
      }
      if (data.hasOwnProperty('handling_cost_tax_class_id')) {
        obj['handling_cost_tax_class_id'] = ApiClient.convertToType(data['handling_cost_tax_class_id'], 'Number');
      }
      if (data.hasOwnProperty('shipping_zone_id')) {
        obj['shipping_zone_id'] = ApiClient.convertToType(data['shipping_zone_id'], 'Number');
      }
      if (data.hasOwnProperty('shipping_zone_name')) {
        obj['shipping_zone_name'] = ApiClient.convertToType(data['shipping_zone_name'], 'String');
      }
      if (data.hasOwnProperty('form_fields')) {
        obj['form_fields'] = ApiClient.convertToType(data['form_fields'], [OrderFormField]);
      }
      if (data.hasOwnProperty('shipping_quotes')) {
        obj['shipping_quotes'] = ShippingQuotesResource.constructFromObject(data['shipping_quotes']);
      }
    }
    return obj;
  }

  /**
   * ID of this shipping address.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * ID of the order.
   * @member {Number} order_id
   */
  exports.prototype['order_id'] = undefined;
  /**
   * Addressee first name.
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * Addressee last name.
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * Addressee company.
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * Street address (first line).
   * @member {String} street_1
   */
  exports.prototype['street_1'] = undefined;
  /**
   * Street address (second line).
   * @member {String} street_2
   */
  exports.prototype['street_2'] = undefined;
  /**
   * Addressee city.
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * ZIP or postal code, as a string.
   * @member {String} zip
   */
  exports.prototype['zip'] = undefined;
  /**
   * Addressee’s country.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * 2-letter ISO Alpha-2 code for the country. (Looking Up Country Codes)
   * @member {String} country_iso2
   */
  exports.prototype['country_iso2'] = undefined;
  /**
   * The name of the state or province. Should be spelled out in full, e.g.: California.
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Recipient’s email address.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Recipient’s telephone number
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * The total number of items in the order.
   * @member {Number} items_total
   */
  exports.prototype['items_total'] = undefined;
  /**
   * The number of items that have been shipped.
   * @member {Number} items_shipped
   */
  exports.prototype['items_shipped'] = undefined;
  /**
   * Text code identifying the BigCommerce shipping module selected by the customer.
   * @member {String} shipping_method
   */
  exports.prototype['shipping_method'] = undefined;
  /**
   * The base value of the order’s items. (Float, Float-As-String, Integer)
   * @member {String} base_cost
   */
  exports.prototype['base_cost'] = undefined;
  /**
   * The value of the order’s items, excluding tax. (Float, Float-As-String, Integer)
   * @member {String} cost_ex_tax
   */
  exports.prototype['cost_ex_tax'] = undefined;
  /**
   * The value of the order’s items, including tax. (Float, Float-As-String, Integer)
   * @member {String} cost_inc_tax
   */
  exports.prototype['cost_inc_tax'] = undefined;
  /**
   * The tax amount on the order. (Float, Float-As-String, Integer)
   * @member {String} cost_tax
   */
  exports.prototype['cost_tax'] = undefined;
  /**
   * The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.)
   * @member {Number} cost_tax_class_id
   */
  exports.prototype['cost_tax_class_id'] = undefined;
  /**
   * The base handling charge. (Float, Float-As-String, Integer)
   * @member {String} base_handling_cost
   */
  exports.prototype['base_handling_cost'] = undefined;
  /**
   * The handling charge, excluding tax. (Float, Float-As-String, Integer)
   * @member {String} handling_cost_ex_tax
   */
  exports.prototype['handling_cost_ex_tax'] = undefined;
  /**
   * The handling charge, including tax. (Float, Float-As-String, Integer)
   * @member {String} handling_cost_inc_tax
   */
  exports.prototype['handling_cost_inc_tax'] = undefined;
  /**
   * 
   * @member {String} handling_cost_tax
   */
  exports.prototype['handling_cost_tax'] = undefined;
  /**
   * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)
   * @member {Number} handling_cost_tax_class_id
   */
  exports.prototype['handling_cost_tax_class_id'] = undefined;
  /**
   * Numeric ID of the shipping zone.
   * @member {Number} shipping_zone_id
   */
  exports.prototype['shipping_zone_id'] = undefined;
  /**
   * Name of the shipping zone.
   * @member {String} shipping_zone_name
   */
  exports.prototype['shipping_zone_name'] = undefined;
  /**
   * @member {Array.<module:Model/OrderFormField>} form_fields
   */
  exports.prototype['form_fields'] = undefined;
  /**
   * @member {module:Model/ShippingQuotesResource} shipping_quotes
   */
  exports.prototype['shipping_quotes'] = undefined;



  return exports;
}));


