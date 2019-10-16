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
    define(['ApiClient', 'Model/OrderBillingAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderBillingAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.OrdersApIs) {
      root.OrdersApIs = {};
    }
    root.OrdersApIs.OrderBase = factory(root.OrdersApIs.ApiClient, root.OrdersApIs.OrderBillingAddress);
  }
}(this, function(ApiClient, OrderBillingAddress) {
  'use strict';




  /**
   * The OrderBase model module.
   * @module Model/OrderBase
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderBase</code>.
   * @alias module:Model/OrderBase
   * @class
   */
  var exports = function() {
    var _this = this;








































  };

  /**
   * Constructs a <code>OrderBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/OrderBase} obj Optional instance to populate.
   * @return {module:Model/OrderBase} The populated <code>OrderBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billing_address')) {
        obj['billing_address'] = OrderBillingAddress.constructFromObject(data['billing_address']);
      }
      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'Number');
      }
      if (data.hasOwnProperty('status_id')) {
        obj['status_id'] = ApiClient.convertToType(data['status_id'], 'Number');
      }
      if (data.hasOwnProperty('subtotal_ex_tax')) {
        obj['subtotal_ex_tax'] = ApiClient.convertToType(data['subtotal_ex_tax'], 'String');
      }
      if (data.hasOwnProperty('subtotal_inc_tax')) {
        obj['subtotal_inc_tax'] = ApiClient.convertToType(data['subtotal_inc_tax'], 'String');
      }
      if (data.hasOwnProperty('base_shipping_cost')) {
        obj['base_shipping_cost'] = ApiClient.convertToType(data['base_shipping_cost'], 'String');
      }
      if (data.hasOwnProperty('shipping_cost_ex_tax')) {
        obj['shipping_cost_ex_tax'] = ApiClient.convertToType(data['shipping_cost_ex_tax'], 'String');
      }
      if (data.hasOwnProperty('shipping_cost_inc_tax')) {
        obj['shipping_cost_inc_tax'] = ApiClient.convertToType(data['shipping_cost_inc_tax'], 'String');
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
      if (data.hasOwnProperty('base_wrapping_cost')) {
        obj['base_wrapping_cost'] = ApiClient.convertToType(data['base_wrapping_cost'], 'String');
      }
      if (data.hasOwnProperty('wrapping_cost_ex_tax')) {
        obj['wrapping_cost_ex_tax'] = ApiClient.convertToType(data['wrapping_cost_ex_tax'], 'String');
      }
      if (data.hasOwnProperty('wrapping_cost_inc_tax')) {
        obj['wrapping_cost_inc_tax'] = ApiClient.convertToType(data['wrapping_cost_inc_tax'], 'String');
      }
      if (data.hasOwnProperty('total_ex_tax')) {
        obj['total_ex_tax'] = ApiClient.convertToType(data['total_ex_tax'], 'String');
      }
      if (data.hasOwnProperty('total_inc_tax')) {
        obj['total_inc_tax'] = ApiClient.convertToType(data['total_inc_tax'], 'String');
      }
      if (data.hasOwnProperty('items_total')) {
        obj['items_total'] = ApiClient.convertToType(data['items_total'], 'Number');
      }
      if (data.hasOwnProperty('items_shipped')) {
        obj['items_shipped'] = ApiClient.convertToType(data['items_shipped'], 'Number');
      }
      if (data.hasOwnProperty('payment_method')) {
        obj['payment_method'] = ApiClient.convertToType(data['payment_method'], 'String');
      }
      if (data.hasOwnProperty('payment_provider_id')) {
        obj['payment_provider_id'] = ApiClient.convertToType(data['payment_provider_id'], 'Number');
      }
      if (data.hasOwnProperty('refunded_amount')) {
        obj['refunded_amount'] = ApiClient.convertToType(data['refunded_amount'], 'String');
      }
      if (data.hasOwnProperty('order_is_digital')) {
        obj['order_is_digital'] = ApiClient.convertToType(data['order_is_digital'], 'Boolean');
      }
      if (data.hasOwnProperty('gift_certificate_amount')) {
        obj['gift_certificate_amount'] = ApiClient.convertToType(data['gift_certificate_amount'], 'String');
      }
      if (data.hasOwnProperty('ip_address')) {
        obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
      }
      if (data.hasOwnProperty('geoip_country')) {
        obj['geoip_country'] = ApiClient.convertToType(data['geoip_country'], 'String');
      }
      if (data.hasOwnProperty('geoip_country_iso2')) {
        obj['geoip_country_iso2'] = ApiClient.convertToType(data['geoip_country_iso2'], 'String');
      }
      if (data.hasOwnProperty('staff_notes')) {
        obj['staff_notes'] = ApiClient.convertToType(data['staff_notes'], 'String');
      }
      if (data.hasOwnProperty('customer_message')) {
        obj['customer_message'] = ApiClient.convertToType(data['customer_message'], 'String');
      }
      if (data.hasOwnProperty('discount_amount')) {
        obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'String');
      }
      if (data.hasOwnProperty('is_deleted')) {
        obj['is_deleted'] = ApiClient.convertToType(data['is_deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('is_email_opt_in')) {
        obj['is_email_opt_in'] = ApiClient.convertToType(data['is_email_opt_in'], 'Boolean');
      }
      if (data.hasOwnProperty('credit_card_type')) {
        obj['credit_card_type'] = ApiClient.convertToType(data['credit_card_type'], 'Number');
      }
      if (data.hasOwnProperty('ebay_order_id')) {
        obj['ebay_order_id'] = ApiClient.convertToType(data['ebay_order_id'], 'String');
      }
      if (data.hasOwnProperty('external_source')) {
        obj['external_source'] = ApiClient.convertToType(data['external_source'], 'String');
      }
      if (data.hasOwnProperty('external_id')) {
        obj['external_id'] = ApiClient.convertToType(data['external_id'], 'Number');
      }
      if (data.hasOwnProperty('external_merchant_id')) {
        obj['external_merchant_id'] = ApiClient.convertToType(data['external_merchant_id'], 'String');
      }
      if (data.hasOwnProperty('channel_id')) {
        obj['channel_id'] = ApiClient.convertToType(data['channel_id'], 'Number');
      }
      if (data.hasOwnProperty('tax_provider_id')) {
        obj['tax_provider_id'] = ApiClient.convertToType(data['tax_provider_id'], 'String');
      }
      if (data.hasOwnProperty('date_created')) {
        obj['date_created'] = ApiClient.convertToType(data['date_created'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:Model/OrderBillingAddress} billing_address
   */
  exports.prototype['billing_address'] = undefined;
  /**
   * The ID of the customer placing the order; or 0 if it was a guest order.
   * @member {Number} customer_id
   */
  exports.prototype['customer_id'] = undefined;
  /**
   * The status ID of the order.
   * @member {Number} status_id
   */
  exports.prototype['status_id'] = undefined;
  /**
   * Override value for subtotal excluding tax. If specified, the field `subtotal_inc_tax` is also required. (Float, Float-As-String, Integer)
   * @member {String} subtotal_ex_tax
   */
  exports.prototype['subtotal_ex_tax'] = undefined;
  /**
   * Override value for subtotal including tax. If specified, the field `subtotal_ex_tax` is also required. (Float, Float-As-String, Integer)
   * @member {String} subtotal_inc_tax
   */
  exports.prototype['subtotal_inc_tax'] = undefined;
  /**
   * The value of the base shipping cost. (Float, Float-As-String, Integer)
   * @member {String} base_shipping_cost
   */
  exports.prototype['base_shipping_cost'] = undefined;
  /**
   * The value of shipping cost, excluding tax. (Float, Float-As-String, Integer)
   * @member {String} shipping_cost_ex_tax
   */
  exports.prototype['shipping_cost_ex_tax'] = undefined;
  /**
   * The value of shipping cost, including tax. (Float, Float-As-String, Integer)
   * @member {String} shipping_cost_inc_tax
   */
  exports.prototype['shipping_cost_inc_tax'] = undefined;
  /**
   * The value of the base handling cost. (Float, Float-As-String, Integer)
   * @member {String} base_handling_cost
   */
  exports.prototype['base_handling_cost'] = undefined;
  /**
   * The value of the handling cost, excluding tax. (Float, Float-As-String, Integer)
   * @member {String} handling_cost_ex_tax
   */
  exports.prototype['handling_cost_ex_tax'] = undefined;
  /**
   * The value of the handling cost, including tax. (Float, Float-As-String, Integer)
   * @member {String} handling_cost_inc_tax
   */
  exports.prototype['handling_cost_inc_tax'] = undefined;
  /**
   * The value of the base wrapping cost. (Float, Float-As-String, Integer)
   * @member {String} base_wrapping_cost
   */
  exports.prototype['base_wrapping_cost'] = undefined;
  /**
   * The value of the wrapping cost, excluding tax. (Float, Float-As-String, Integer)
   * @member {String} wrapping_cost_ex_tax
   */
  exports.prototype['wrapping_cost_ex_tax'] = undefined;
  /**
   * The value of the wrapping cost, including tax. (Float, Float-As-String, Integer)
   * @member {String} wrapping_cost_inc_tax
   */
  exports.prototype['wrapping_cost_inc_tax'] = undefined;
  /**
   * Override value for the total, excluding tax. If specified, the field `total_inc_tax` is also required. (Float, Float-As-String, Integer)
   * @member {String} total_ex_tax
   */
  exports.prototype['total_ex_tax'] = undefined;
  /**
   * Override value for the total, including tax. If specified, the field `total_ex_tax` is also required. (Float, Float-As-String, Integer) 
   * @member {String} total_inc_tax
   */
  exports.prototype['total_inc_tax'] = undefined;
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
   * The payment method for this order. Can be one of the following: `Manual`, `Credit Card`, `cash`, `Test Payment Gateway`, etc.
   * @member {String} payment_method
   */
  exports.prototype['payment_method'] = undefined;
  /**
   * The external Transaction ID/Payment ID within this order's payment provider (if a payment provider was used).
   * @member {Number} payment_provider_id
   */
  exports.prototype['payment_provider_id'] = undefined;
  /**
   * The amount refunded from this transaction. (Float, Float-As-String, Integer)
   * @member {String} refunded_amount
   */
  exports.prototype['refunded_amount'] = undefined;
  /**
   * Whether this is an order for digital products.
   * @member {Boolean} order_is_digital
   */
  exports.prototype['order_is_digital'] = undefined;
  /**
   * A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)
   * @member {String} gift_certificate_amount
   */
  exports.prototype['gift_certificate_amount'] = undefined;
  /**
   * IP Address of the customer, if known.
   * @member {String} ip_address
   */
  exports.prototype['ip_address'] = undefined;
  /**
   * The full name of the country where the customer made the purchase, based on the IP.
   * @member {String} geoip_country
   */
  exports.prototype['geoip_country'] = undefined;
  /**
   * The country where the customer made the purchase, in ISO2 format, based on the IP.
   * @member {String} geoip_country_iso2
   */
  exports.prototype['geoip_country_iso2'] = undefined;
  /**
   * Any additional notes for staff.
   * @member {String} staff_notes
   */
  exports.prototype['staff_notes'] = undefined;
  /**
   * Message that the customer entered (number, optiona) -o the `Order Comments` box during checkout.
   * @member {String} customer_message
   */
  exports.prototype['customer_message'] = undefined;
  /**
   * Amount of discount for this transaction. (Float, Float-As-String, Integer)
   * @member {String} discount_amount
   */
  exports.prototype['discount_amount'] = undefined;
  /**
   * Indicates whether the order was deleted (archived). Set to to true, to archive an order.
   * @member {Boolean} is_deleted
   */
  exports.prototype['is_deleted'] = undefined;
  /**
   * Indicates whether the shopper has selected an opt-in check box (on the checkout page) to receive emails. A read-only value. Do not pass in a POST or PUT.
   * @member {Boolean} is_email_opt_in
   */
  exports.prototype['is_email_opt_in'] = undefined;
  /**
   * @member {Number} credit_card_type
   */
  exports.prototype['credit_card_type'] = undefined;
  /**
   * If the order was placed through eBay, the eBay order number will be included. Otherwise, the value will be `0`.
   * @member {String} ebay_order_id
   */
  exports.prototype['ebay_order_id'] = undefined;
  /**
   * For orders submitted or modified via the API, using a PUT or POST operation, you can optionally pass in a value identifying the system used to generate the order. For example: `POS`. Otherwise, the value will be null.
   * @member {String} external_source
   */
  exports.prototype['external_source'] = undefined;
  /**
   * ID of the order in another system. For example, the Amazon Order ID if this is an Amazon order.This field can be updated in a /POST, but using a /PUT to update the order will return a 400 error. The field 'external_id' cannot be written to. Please remove it from your request before trying again. It can not be overwritten once set.
   * @member {Number} external_id
   */
  exports.prototype['external_id'] = undefined;
  /**
   * Id of the external merchant.
   * @member {String} external_merchant_id
   */
  exports.prototype['external_merchant_id'] = undefined;
  /**
   * Shows where the order originated. The channel_id will default to 1. Read-Only. 
   * @member {Number} channel_id
   */
  exports.prototype['channel_id'] = undefined;
  /**
   * BasicTaxProvider - Tax is set to manual.   AvaTaxProvider - This is for when the tax provider has been set to automatic and the order was NOT created by the API. Used for Avalara.   \"\" (blank) - When the tax provider is unknown. This includes legacy orders and orders previously created via API. This can be set when creating an order using a POST.   
   * @member {String} tax_provider_id
   */
  exports.prototype['tax_provider_id'] = undefined;
  /**
   * The date this order was created. If not specified, will default to the current time. The date should be in RFC 2822 format.
   * @member {String} date_created
   */
  exports.prototype['date_created'] = undefined;



  return exports;
}));


