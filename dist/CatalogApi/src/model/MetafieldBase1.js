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
* The MetafieldBase1 model module.
* @module model/MetafieldBase1
* @version 3.0
*/
var MetafieldBase1 = function () {
    /**
    * Constructs a new <code>MetafieldBase1</code>.
    * Metafield for products, categories, variants, and brands. The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
    * @alias module:model/MetafieldBase1
    * @class
    * @param permissionSet {module:model/MetafieldBase1.PermissionSetEnum} Determines the visibility and writeability of the field by other API consumers.  |Value|Description |-|-| |`app_only`|Private to the app that owns the field| |`read`|Visible to other API consumers| |`write`|Open for reading and writing by other API consumers| |`read_and_sf_access`|Visible to other API consumers, including on storefront| |`write_and_sf_access`|Open for reading and writing by other API consumers, including on storefront|
    * @param namespace {String} Namespace for the metafield, for organizational purposes. This is set set by the developer. Required for POST. 
    * @param key {String} The name of the field, for example: `location_id`, `color`. Required for POST. 
    * @param value {String} The value of the field, for example: `1`, `blue`. Required for POST. 
    */

    function MetafieldBase1(permissionSet, namespace, key, value) {
        _classCallCheck(this, MetafieldBase1);

        this['id'] = undefined;
        this['permission_set'] = undefined;
        this['namespace'] = undefined;
        this['key'] = undefined;
        this['value'] = undefined;
        this['description'] = undefined;
        this['resource_type'] = undefined;
        this['resource_id'] = undefined;
        this['date_created'] = undefined;
        this['date_modified'] = undefined;


        this['permission_set'] = permissionSet;
        this['namespace'] = namespace;
        this['key'] = key;
        this['value'] = value;
    }

    /**
    * Constructs a <code>MetafieldBase1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MetafieldBase1} obj Optional instance to populate.
    * @return {module:model/MetafieldBase1} The populated <code>MetafieldBase1</code> instance.
    */


    _createClass(MetafieldBase1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new MetafieldBase1();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('permission_set')) {
                    obj['permission_set'] = _ApiClient2.default.convertToType(data['permission_set'], 'String');
                }
                if (data.hasOwnProperty('namespace')) {
                    obj['namespace'] = _ApiClient2.default.convertToType(data['namespace'], 'String');
                }
                if (data.hasOwnProperty('key')) {
                    obj['key'] = _ApiClient2.default.convertToType(data['key'], 'String');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('resource_type')) {
                    obj['resource_type'] = _ApiClient2.default.convertToType(data['resource_type'], 'String');
                }
                if (data.hasOwnProperty('resource_id')) {
                    obj['resource_id'] = _ApiClient2.default.convertToType(data['resource_id'], 'Number');
                }
                if (data.hasOwnProperty('date_created')) {
                    obj['date_created'] = _ApiClient2.default.convertToType(data['date_created'], 'Date');
                }
                if (data.hasOwnProperty('date_modified')) {
                    obj['date_modified'] = _ApiClient2.default.convertToType(data['date_modified'], 'Date');
                }
            }
            return obj;
        }

        /**
        * Unique ID of the *Metafield*. Read-Only.
        * @member {Number} id
        */

        /**
        * Determines the visibility and writeability of the field by other API consumers.  |Value|Description |-|-| |`app_only`|Private to the app that owns the field| |`read`|Visible to other API consumers| |`write`|Open for reading and writing by other API consumers| |`read_and_sf_access`|Visible to other API consumers, including on storefront| |`write_and_sf_access`|Open for reading and writing by other API consumers, including on storefront|
        * @member {module:model/MetafieldBase1.PermissionSetEnum} permission_set
        */

        /**
        * Namespace for the metafield, for organizational purposes. This is set set by the developer. Required for POST. 
        * @member {String} namespace
        */

        /**
        * The name of the field, for example: `location_id`, `color`. Required for POST. 
        * @member {String} key
        */

        /**
        * The value of the field, for example: `1`, `blue`. Required for POST. 
        * @member {String} value
        */

        /**
        * Description for the metafields. 
        * @member {String} description
        */

        /**
        * The type of resource with which the metafield is associated. 
        * @member {module:model/MetafieldBase1.ResourceTypeEnum} resource_type
        */

        /**
        * The ID for the resource with which the metafield is associated. 
        * @member {Number} resource_id
        */

        /**
        * Date and time of the metafield's creation. Read-Only. 
        * @member {Date} date_created
        */

        /**
        * Date and time when the metafield was last updated. Read-Only. 
        * @member {Date} date_modified
        */


        /**
        * Allowed values for the <code>permission_set</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>resource_type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return MetafieldBase1;
}();

MetafieldBase1.PermissionSetEnum = {
    /**
     * value: "app_only"
     * @const
     */
    "app_only": "app_only",
    /**
     * value: "read"
     * @const
     */
    "read": "read",
    /**
     * value: "write"
     * @const
     */
    "write": "write",
    /**
     * value: "read_and_sf_access"
     * @const
     */
    "read_and_sf_access": "read_and_sf_access",
    /**
     * value: "write_and_sf_access"
     * @const
     */
    "write_and_sf_access": "write_and_sf_access" };
MetafieldBase1.ResourceTypeEnum = {
    /**
     * value: "category"
     * @const
     */
    "category": "category",
    /**
     * value: "brand"
     * @const
     */
    "brand": "brand",
    /**
     * value: "product"
     * @const
     */
    "product": "product",
    /**
     * value: "variant"
     * @const
     */
    "variant": "variant" };
exports.default = MetafieldBase1;