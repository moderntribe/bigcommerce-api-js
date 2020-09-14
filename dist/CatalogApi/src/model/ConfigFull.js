'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Catalog
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Differentiating Variants & Modifiers](#variants-and-modifiers) - [Available Endpoints](#available-endpoints) - [Resources](#resources)  The Catalog API manages products, brands and categories for a store. To learn more about the Catalog resources see [Catalog Products](https://developer.bigcommerce.com/api-docs/catalog/products-overview) and [Categories](https://developer.bigcommerce.com/api-docs/catalog/products-overview#products-overview_categories).  ## OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | modify     | `store_v2_products`           | | Products | read-only  | `store_v2_products_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Differentiating Variants and Modifiers [Variants](https://support.bigcommerce.com/s/article/Product-Options-v3#variations) represent a physical product made up of [Product Option](https://support.bigcommerce.com/s/article/Product-Options-v3) choices, i.e. a large blue t-shirt. Each variant can have a unique SKU.  Modifiers represent a choice a customer makes about a product that doesn't represent a physical item, i.e. text to be printed on a t-shirt. Assigning a SKU to a modifier will turn it into a variant.  See [Variant Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#variant-options) and [Modifier Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#modifier-options) for more information.  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Brand Images                            | Create and manage brand images                                          | | Brand Metafields                        | Create and manage brand metafields                                      | | Brands                                  | Create and manage brands                                                | | Catalog                                 | Create and manage store categories, products, and brands                | | Categories                              | Create and manage categorties                                           | | Category Images                         | Create and manage category images                                       | | Category Metafields                     | Create and manage category metafields                                   | | Product Bulk Pricing Rules              | Create and manage product bulk pricing rules                            | | Product Complex Rules                   | Create and manage product complex rules                                 | | Product Custom Fields                   | Create and manage product custom fields                                 | | Product Images                          | Create and manage product images                                        | | Product Metafields                      | Create and manage product meta fields                                   | | Product Modifier Images                 | Create and manage product modifer images                                | | Product Modifier Values                 | Create and manage product modifier values                               | | Product Modifiers                       | Create and manage product midifiers                                     | | Product Reviews                         | Create and manage product reviews                                       | | Product Variant Option Values           | Create and manage product variant option values                         | | Product Variant Options                 | Create and manage product variant options                               | | Product Variants                        | Create and manage product variants                                      | | Product Videos                          | Create and manage product videos                                        | | Products                                | Create and manage products                                              | | ProductVariant Metafields               | Create and manage product meta flields                                  | | Variants                                | Get and update all variants                                             |  ## Resources  ### Webhooks * [Products](/api-docs/getting-started/webhooks/webhook-events#webhook-events_products) * [Categories](/api-docs/getting-started/webhooks/webhook-events#webhook-events_category) * [SKU](/api-docs/getting-started/webhooks/webhook-events#webhook-events_sku)  ### Related Endpoints * [Catalog API](/api-reference/catalog/catalog-api)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ConfigFull model module.
* @module model/ConfigFull
* @version 3.0
*/
var ConfigFull = function () {
    /**
    * Constructs a new <code>ConfigFull</code>.
    * The values for option config can vary based on the Modifier created.
    * @alias module:model/ConfigFull
    * @class
    */

    function ConfigFull() {
        _classCallCheck(this, ConfigFull);

        this['default_value'] = undefined;
        this['checked_by_default'] = undefined;
        this['checkbox_label'] = undefined;
        this['date_limited'] = undefined;
        this['date_limit_mode'] = undefined;
        this['date_earliest_value'] = undefined;
        this['date_latest_value'] = undefined;
        this['file_types_mode'] = undefined;
        this['file_types_supported'] = undefined;
        this['file_types_other'] = undefined;
        this['file_max_size'] = undefined;
        this['text_characters_limited'] = undefined;
        this['text_min_length'] = undefined;
        this['text_max_length'] = undefined;
        this['text_lines_limited'] = undefined;
        this['text_max_lines'] = undefined;
        this['number_limited'] = undefined;
        this['number_limit_mode'] = undefined;
        this['number_lowest_value'] = undefined;
        this['number_highest_value'] = undefined;
        this['number_integers_only'] = undefined;
        this['product_list_adjusts_inventory'] = undefined;
        this['product_list_adjusts_pricing'] = undefined;
        this['product_list_shipping_calc'] = undefined;
    }

    /**
    * Constructs a <code>ConfigFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ConfigFull} obj Optional instance to populate.
    * @return {module:model/ConfigFull} The populated <code>ConfigFull</code> instance.
    */


    _createClass(ConfigFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ConfigFull();

                if (data.hasOwnProperty('default_value')) {
                    obj['default_value'] = _ApiClient2.default.convertToType(data['default_value'], 'String');
                }
                if (data.hasOwnProperty('checked_by_default')) {
                    obj['checked_by_default'] = _ApiClient2.default.convertToType(data['checked_by_default'], 'Boolean');
                }
                if (data.hasOwnProperty('checkbox_label')) {
                    obj['checkbox_label'] = _ApiClient2.default.convertToType(data['checkbox_label'], 'String');
                }
                if (data.hasOwnProperty('date_limited')) {
                    obj['date_limited'] = _ApiClient2.default.convertToType(data['date_limited'], 'Boolean');
                }
                if (data.hasOwnProperty('date_limit_mode')) {
                    obj['date_limit_mode'] = _ApiClient2.default.convertToType(data['date_limit_mode'], 'String');
                }
                if (data.hasOwnProperty('date_earliest_value')) {
                    obj['date_earliest_value'] = _ApiClient2.default.convertToType(data['date_earliest_value'], 'Date');
                }
                if (data.hasOwnProperty('date_latest_value')) {
                    obj['date_latest_value'] = _ApiClient2.default.convertToType(data['date_latest_value'], 'Date');
                }
                if (data.hasOwnProperty('file_types_mode')) {
                    obj['file_types_mode'] = _ApiClient2.default.convertToType(data['file_types_mode'], 'String');
                }
                if (data.hasOwnProperty('file_types_supported')) {
                    obj['file_types_supported'] = _ApiClient2.default.convertToType(data['file_types_supported'], ['String']);
                }
                if (data.hasOwnProperty('file_types_other')) {
                    obj['file_types_other'] = _ApiClient2.default.convertToType(data['file_types_other'], ['String']);
                }
                if (data.hasOwnProperty('file_max_size')) {
                    obj['file_max_size'] = _ApiClient2.default.convertToType(data['file_max_size'], 'Number');
                }
                if (data.hasOwnProperty('text_characters_limited')) {
                    obj['text_characters_limited'] = _ApiClient2.default.convertToType(data['text_characters_limited'], 'Boolean');
                }
                if (data.hasOwnProperty('text_min_length')) {
                    obj['text_min_length'] = _ApiClient2.default.convertToType(data['text_min_length'], 'Number');
                }
                if (data.hasOwnProperty('text_max_length')) {
                    obj['text_max_length'] = _ApiClient2.default.convertToType(data['text_max_length'], 'Number');
                }
                if (data.hasOwnProperty('text_lines_limited')) {
                    obj['text_lines_limited'] = _ApiClient2.default.convertToType(data['text_lines_limited'], 'Boolean');
                }
                if (data.hasOwnProperty('text_max_lines')) {
                    obj['text_max_lines'] = _ApiClient2.default.convertToType(data['text_max_lines'], 'Number');
                }
                if (data.hasOwnProperty('number_limited')) {
                    obj['number_limited'] = _ApiClient2.default.convertToType(data['number_limited'], 'Boolean');
                }
                if (data.hasOwnProperty('number_limit_mode')) {
                    obj['number_limit_mode'] = _ApiClient2.default.convertToType(data['number_limit_mode'], 'String');
                }
                if (data.hasOwnProperty('number_lowest_value')) {
                    obj['number_lowest_value'] = _ApiClient2.default.convertToType(data['number_lowest_value'], 'Number');
                }
                if (data.hasOwnProperty('number_highest_value')) {
                    obj['number_highest_value'] = _ApiClient2.default.convertToType(data['number_highest_value'], 'Number');
                }
                if (data.hasOwnProperty('number_integers_only')) {
                    obj['number_integers_only'] = _ApiClient2.default.convertToType(data['number_integers_only'], 'Boolean');
                }
                if (data.hasOwnProperty('product_list_adjusts_inventory')) {
                    obj['product_list_adjusts_inventory'] = _ApiClient2.default.convertToType(data['product_list_adjusts_inventory'], 'Boolean');
                }
                if (data.hasOwnProperty('product_list_adjusts_pricing')) {
                    obj['product_list_adjusts_pricing'] = _ApiClient2.default.convertToType(data['product_list_adjusts_pricing'], 'Boolean');
                }
                if (data.hasOwnProperty('product_list_shipping_calc')) {
                    obj['product_list_shipping_calc'] = _ApiClient2.default.convertToType(data['product_list_shipping_calc'], 'String');
                }
            }
            return obj;
        }

        /**
        * (date, text, multi_line_text, numbers_only_text) The default value. Shown on a date option as an ISO-8601–formatted string, or on a text option as a string. 
        * @member {String} default_value
        */

        /**
        * (checkbox) Flag for setting the checkbox to be checked by default. 
        * @member {Boolean} checked_by_default
        */

        /**
        * (checkbox) Label displayed for the checkbox option. 
        * @member {String} checkbox_label
        */

        /**
        * (date) Flag to limit the dates allowed to be entered on a date option. 
        * @member {Boolean} date_limited
        */

        /**
        * (date) The type of limit that is allowed to be entered on a date option. 
        * @member {module:model/ConfigFull.DateLimitModeEnum} date_limit_mode
        */

        /**
        * (date) The earliest date allowed to be entered on the date option, as an ISO-8601 formatted string. 
        * @member {Date} date_earliest_value
        */

        /**
        * (date) The latest date allowed to be entered on the date option, as an ISO-8601 formatted string. 
        * @member {Date} date_latest_value
        */

        /**
        * (file) The kind of restriction on the file types that can be uploaded with a file upload option. Values: `specific` - restricts uploads to particular file types; `all` - allows all file types. 
        * @member {module:model/ConfigFull.FileTypesModeEnum} file_types_mode
        */

        /**
        * (file) The type of files allowed to be uploaded if the `file_type_option` is set to `specific`. Values:   `images` - Allows upload of image MIME types (`bmp`, `gif`, `jpg`, `jpeg`, `jpe`, `jif`, `jfif`, `jfi`, `png`, `wbmp`, `xbm`, `tiff`). `documents` - Allows upload of document MIME types (`txt`, `pdf`, `rtf`, `doc`, `docx`, `xls`, `xlsx`, `accdb`, `mdb`, `one`, `pps`, `ppsx`, `ppt`, `pptx`, `pub`, `odt`, `ods`, `odp`, `odg`, `odf`).   `other` - Allows file types defined in the `file_types_other` array. 
        * @member {Array.<String>} file_types_supported
        */

        /**
        * (file) A list of other file types allowed with the file upload option. 
        * @member {Array.<String>} file_types_other
        */

        /**
        * (file) The maximum size for a file that can be used with the file upload option. This will still be limited by the server. 
        * @member {Number} file_max_size
        */

        /**
        * (text, multi_line_text) Flag to validate the length of a text or multi-line text input. 
        * @member {Boolean} text_characters_limited
        */

        /**
        * (text, multi_line_text) The minimum length allowed for a text or multi-line text option. 
        * @member {Number} text_min_length
        */

        /**
        * (text, multi_line_text) The maximum length allowed for a text or multi line text option. 
        * @member {Number} text_max_length
        */

        /**
        * (multi_line_text) Flag to validate the maximum number of lines allowed on a multi-line text input. 
        * @member {Boolean} text_lines_limited
        */

        /**
        * (multi_line_text) The maximum number of lines allowed on a multi-line text input. 
        * @member {Number} text_max_lines
        */

        /**
        * (numbers_only_text) Flag to limit the value of a number option. 
        * @member {Boolean} number_limited
        */

        /**
        * (numbers_only_text) The type of limit on values entered for a number option. 
        * @member {module:model/ConfigFull.NumberLimitModeEnum} number_limit_mode
        */

        /**
        * (numbers_only_text) The lowest allowed value for a number option if `number_limited` is true. 
        * @member {Number} number_lowest_value
        */

        /**
        * (numbers_only_text) The highest allowed value for a number option if `number_limited` is true. 
        * @member {Number} number_highest_value
        */

        /**
        * (numbers_only_text) Flag to limit the input on a number option to whole numbers only. 
        * @member {Boolean} number_integers_only
        */

        /**
        * (product_list, product_list_with_images) Flag for automatically adjusting inventory on a product included in the list. 
        * @member {Boolean} product_list_adjusts_inventory
        */

        /**
        * (product_list, product_list_with_images) Flag to add the optional product's price to the main product's price. 
        * @member {Boolean} product_list_adjusts_pricing
        */

        /**
        * (product_list, product_list_with_images) How to factor the optional product's weight and package dimensions into the shipping quote. Values: `none` - don't adjust; `weight` - use shipping weight only; `package` - use weight and dimensions. 
        * @member {module:model/ConfigFull.ProductListShippingCalcEnum} product_list_shipping_calc
        */


        /**
        * Allowed values for the <code>date_limit_mode</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>file_types_mode</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>number_limit_mode</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>product_list_shipping_calc</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ConfigFull;
}();

ConfigFull.DateLimitModeEnum = {
    /**
     * value: "earliest"
     * @const
     */
    "earliest": "earliest",
    /**
     * value: "range"
     * @const
     */
    "range": "range",
    /**
     * value: "latest"
     * @const
     */
    "latest": "latest" };
ConfigFull.FileTypesModeEnum = {
    /**
     * value: "specific"
     * @const
     */
    "specific": "specific",
    /**
     * value: "all"
     * @const
     */
    "all": "all" };
ConfigFull.NumberLimitModeEnum = {
    /**
     * value: "lowest"
     * @const
     */
    "lowest": "lowest",
    /**
     * value: "highest"
     * @const
     */
    "highest": "highest",
    /**
     * value: "range"
     * @const
     */
    "range": "range" };
ConfigFull.ProductListShippingCalcEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "weight"
     * @const
     */
    "weight": "weight",
    /**
     * value: "package"
     * @const
     */
    "package": "package" };
exports.default = ConfigFull;