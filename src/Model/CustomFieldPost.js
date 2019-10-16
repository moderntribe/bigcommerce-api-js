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
    define(['ApiClient', 'Model/CustomFieldBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomFieldBase'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.CustomFieldPost = factory(root.BigCommerceApi.ApiClient, root.BigCommerceApi.CustomFieldBase);
  }
}(this, function(ApiClient, CustomFieldBase) {
  'use strict';




  /**
   * The CustomFieldPost model module.
   * @module Model/CustomFieldPost
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>CustomFieldPost</code>.
   * The model for a POST to create a custom field on a product. 
   * @alias module:Model/CustomFieldPost
   * @class
   * @implements module:Model/CustomFieldBase
   */
  var exports = function() {
    var _this = this;

    CustomFieldBase.call(_this);
  };

  /**
   * Constructs a <code>CustomFieldPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/CustomFieldPost} obj Optional instance to populate.
   * @return {module:Model/CustomFieldPost} The populated <code>CustomFieldPost</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CustomFieldBase.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement CustomFieldBase interface:
  /**
   * The name of the field, shown on the storefront, orders, etc. 
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * The name of the field, shown on the storefront, orders, etc. 
   * @member {String} value
   */
exports.prototype['value'] = undefined;



  return exports;
}));


