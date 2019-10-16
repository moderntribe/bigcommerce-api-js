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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BigCommerceApi) {
      root.BigCommerceApi = {};
    }
    root.BigCommerceApi.ScriptPost = factory(root.BigCommerceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ScriptPost model module.
   * @module Model/ScriptPost
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>ScriptPost</code>.
   * @alias module:Model/ScriptPost
   * @class
   * @param name {String} The user-friendly name.
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;








  };

  /**
   * Constructs a <code>ScriptPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/ScriptPost} obj Optional instance to populate.
   * @return {module:Model/ScriptPost} The populated <code>ScriptPost</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], 'String');
      }
      if (data.hasOwnProperty('src')) {
        obj['src'] = ApiClient.convertToType(data['src'], 'String');
      }
      if (data.hasOwnProperty('auto_uninstall')) {
        obj['auto_uninstall'] = ApiClient.convertToType(data['auto_uninstall'], 'Boolean');
      }
      if (data.hasOwnProperty('load_method')) {
        obj['load_method'] = ApiClient.convertToType(data['load_method'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
    }
    return obj;
  }

  /**
   * The user-friendly name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The user-friendly description.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * An html string containing exactly one `script` tag. Required if `kind` is `script_tag`.
   * @member {String} html
   */
  exports.prototype['html'] = undefined;
  /**
   * The `src` attribute of the script to load. Required if `kind` is `src`. Must be in `https` format.
   * @member {String} src
   */
  exports.prototype['src'] = undefined;
  /**
   * Whether to uninstall this script when the app associated with it is removed.
   * @member {Boolean} auto_uninstall
   * @default true
   */
  exports.prototype['auto_uninstall'] = true;
  /**
   * The load method to use for the script. Acceptable values are `default`, `async`, or `defer`.
   * @member {String} load_method
   * @default 'defer'
   */
  exports.prototype['load_method'] = 'defer';
  /**
   * Where on the page to place the script. Acceptable values are `head` or `footer`.
   * @member {String} location
   * @default 'footer'
   */
  exports.prototype['location'] = 'footer';
  /**
   * Which set of pages the script should load on. The values allowed for this parameter are `storefront`, `all_pages`, `checkout` and `order_confirmation`. Please note that you need to have `Checkout content` scope to use `all_pages` and `checkout`.
   * @member {String} visibility
   * @default 'storefront'
   */
  exports.prototype['visibility'] = 'storefront';
  /**
   * What type of script this is. Acceptable values are `src` - a `script` tag will be generated with its `src` attribute set to the value of `src`; `script_tag` - The value of `html` (which must contain a single `script` tag) will be injected directly onto the page.
   * @member {String} kind
   * @default 'src'
   */
  exports.prototype['kind'] = 'src';



  return exports;
}));


