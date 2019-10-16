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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceWidgetsApi) {
      root.BigCommerceWidgetsApi = {};
    }
    root.BigCommerceWidgetsApi.Layout = factory(root.BigCommerceWidgetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Layout model module.
   * @module Model/Layout
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Layout</code>.
   * @alias module:Model/Layout
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Layout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/Layout} obj Optional instance to populate.
   * @return {module:Model/Layout} The populated <code>Layout</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('entity_id')) {
        obj['entity_id'] = ApiClient.convertToType(data['entity_id'], 'String');
      }
      if (data.hasOwnProperty('template_file')) {
        obj['template_file'] = ApiClient.convertToType(data['template_file'], 'String');
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = ApiClient.convertToType(data['region'], 'String');
      }
      if (data.hasOwnProperty('markup')) {
        obj['markup'] = ApiClient.convertToType(data['markup'], 'String');
      }
      if (data.hasOwnProperty('date_created')) {
        obj['date_created'] = ApiClient.convertToType(data['date_created'], 'String');
      }
      if (data.hasOwnProperty('date_modified')) {
        obj['date_modified'] = ApiClient.convertToType(data['date_modified'], 'String');
      }
    }
    return obj;
  }

  /**
   * The primary identifier.
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * The specific instance of a page
   * @member {String} entity_id
   */
  exports.prototype['entity_id'] = undefined;
  /**
   * The page template name.
   * @member {String} template_file
   */
  exports.prototype['template_file'] = undefined;
  /**
   * The name of the region defined in the stencil theme file.
   * @member {String} region
   */
  exports.prototype['region'] = undefined;
  /**
   * The HTML layout which defines complex poisitoning for placements.
   * @member {String} markup
   */
  exports.prototype['markup'] = undefined;
  /**
   * The date on which this object was initially created.
   * @member {String} date_created
   */
  exports.prototype['date_created'] = undefined;
  /**
   * The date on which this object was last updated.
   * @member {String} date_modified
   */
  exports.prototype['date_modified'] = undefined;



  return exports;
}));


