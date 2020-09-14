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
* The CatalogSummary model module.
* @module model/CatalogSummary
* @version 3.0
*/
var CatalogSummary = function () {
    /**
    * Constructs a new <code>CatalogSummary</code>.
    * Catalog Summary object describes a lightweight summary of the catalog.
    * @alias module:model/CatalogSummary
    * @class
    */

    function CatalogSummary() {
        _classCallCheck(this, CatalogSummary);

        this['inventory_count'] = undefined;
        this['inventory_value'] = undefined;
        this['primary_category_id'] = undefined;
        this['primary_category_name'] = undefined;
        this['variant_count'] = undefined;
        this['highest_variant_price'] = undefined;
        this['average_variant_price'] = undefined;
        this['lowest_variant_price'] = undefined;
        this['oldest_variant_date'] = undefined;
        this['newest_variant_date'] = undefined;
    }

    /**
    * Constructs a <code>CatalogSummary</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CatalogSummary} obj Optional instance to populate.
    * @return {module:model/CatalogSummary} The populated <code>CatalogSummary</code> instance.
    */


    _createClass(CatalogSummary, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CatalogSummary();

                if (data.hasOwnProperty('inventory_count')) {
                    obj['inventory_count'] = _ApiClient2.default.convertToType(data['inventory_count'], 'Number');
                }
                if (data.hasOwnProperty('inventory_value')) {
                    obj['inventory_value'] = _ApiClient2.default.convertToType(data['inventory_value'], 'Number');
                }
                if (data.hasOwnProperty('primary_category_id')) {
                    obj['primary_category_id'] = _ApiClient2.default.convertToType(data['primary_category_id'], 'Number');
                }
                if (data.hasOwnProperty('primary_category_name')) {
                    obj['primary_category_name'] = _ApiClient2.default.convertToType(data['primary_category_name'], 'String');
                }
                if (data.hasOwnProperty('variant_count')) {
                    obj['variant_count'] = _ApiClient2.default.convertToType(data['variant_count'], 'Number');
                }
                if (data.hasOwnProperty('highest_variant_price')) {
                    obj['highest_variant_price'] = _ApiClient2.default.convertToType(data['highest_variant_price'], 'Number');
                }
                if (data.hasOwnProperty('average_variant_price')) {
                    obj['average_variant_price'] = _ApiClient2.default.convertToType(data['average_variant_price'], 'Number');
                }
                if (data.hasOwnProperty('lowest_variant_price')) {
                    obj['lowest_variant_price'] = _ApiClient2.default.convertToType(data['lowest_variant_price'], 'String');
                }
                if (data.hasOwnProperty('oldest_variant_date')) {
                    obj['oldest_variant_date'] = _ApiClient2.default.convertToType(data['oldest_variant_date'], 'String');
                }
                if (data.hasOwnProperty('newest_variant_date')) {
                    obj['newest_variant_date'] = _ApiClient2.default.convertToType(data['newest_variant_date'], 'String');
                }
            }
            return obj;
        }

        /**
        * A count of all inventory items in the catalog. 
        * @member {Number} inventory_count
        */

        /**
        * Total value of store's inventory. 
        * @member {Number} inventory_value
        */

        /**
        * ID of the category containing the most products. 
        * @member {Number} primary_category_id
        */

        /**
        * Name of the category containing the most products. 
        * @member {String} primary_category_name
        */

        /**
        * Total number of variants
        * @member {Number} variant_count
        */

        /**
        * Highest priced variant
        * @member {Number} highest_variant_price
        */

        /**
        * Average price of all variants
        * @member {Number} average_variant_price
        */

        /**
        * Lowest priced variant in the store
        * @member {String} lowest_variant_price
        */

        /**
        * @member {String} oldest_variant_date
        */

        /**
        * @member {String} newest_variant_date
        */

    }]);

    return CatalogSummary;
}();

exports.default = CatalogSummary;