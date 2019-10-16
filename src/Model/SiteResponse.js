/**
 * Sites & Routes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
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
    define(['ApiClient', 'Model/Meta', 'Model/Site'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./Site'));
  } else {
    // Browser globals (root is window)
    if (!root.SitesRoutes) {
      root.SitesRoutes = {};
    }
    root.SitesRoutes.SiteResponse = factory(root.SitesRoutes.ApiClient, root.SitesRoutes.Meta, root.SitesRoutes.Site);
  }
}(this, function(ApiClient, Meta, Site) {
  'use strict';




  /**
   * The SiteResponse model module.
   * @module Model/SiteResponse
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>SiteResponse</code>.
   * Response payload for the BigCommerce API. 
   * @alias module:Model/SiteResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SiteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/SiteResponse} obj Optional instance to populate.
   * @return {module:Model/SiteResponse} The populated <code>SiteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = Site.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = Meta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * @member {module:Model/Site} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:Model/Meta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


