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

var _CustomUrlFull = require('./CustomUrlFull1');

var _CustomUrlFull2 = _interopRequireDefault(_CustomUrlFull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Category model module.
* @module model/Category
* @version 3.0
*/
var Category = function () {
    /**
    * Constructs a new <code>Category</code>.
    * Common Category object properties.
    * @alias module:model/Category
    * @class
    * @param parentId {Number} The unique numeric ID of the category's parent. This field controls where the category sits in the tree of categories that organize the catalog. Required in a POST if creating a child category.
    * @param name {String} The name displayed for the category. Name is unique with respect to the category's siblings. Required in a POST.
    */

    function Category(parentId, name) {
        _classCallCheck(this, Category);

        this['id'] = undefined;
        this['parent_id'] = undefined;
        this['name'] = undefined;
        this['description'] = undefined;
        this['views'] = undefined;
        this['sort_order'] = undefined;
        this['page_title'] = undefined;
        this['search_keywords'] = undefined;
        this['meta_keywords'] = undefined;
        this['meta_description'] = undefined;
        this['layout_file'] = undefined;
        this['is_visible'] = undefined;
        this['default_product_sort'] = undefined;
        this['image_url'] = undefined;
        this['custom_url'] = undefined;


        this['parent_id'] = parentId;
        this['name'] = name;
    }

    /**
    * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Category} obj Optional instance to populate.
    * @return {module:model/Category} The populated <code>Category</code> instance.
    */


    _createClass(Category, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Category();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('parent_id')) {
                    obj['parent_id'] = _ApiClient2.default.convertToType(data['parent_id'], 'Number');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('views')) {
                    obj['views'] = _ApiClient2.default.convertToType(data['views'], 'Number');
                }
                if (data.hasOwnProperty('sort_order')) {
                    obj['sort_order'] = _ApiClient2.default.convertToType(data['sort_order'], 'Number');
                }
                if (data.hasOwnProperty('page_title')) {
                    obj['page_title'] = _ApiClient2.default.convertToType(data['page_title'], 'String');
                }
                if (data.hasOwnProperty('search_keywords')) {
                    obj['search_keywords'] = _ApiClient2.default.convertToType(data['search_keywords'], 'String');
                }
                if (data.hasOwnProperty('meta_keywords')) {
                    obj['meta_keywords'] = _ApiClient2.default.convertToType(data['meta_keywords'], ['String']);
                }
                if (data.hasOwnProperty('meta_description')) {
                    obj['meta_description'] = _ApiClient2.default.convertToType(data['meta_description'], 'String');
                }
                if (data.hasOwnProperty('layout_file')) {
                    obj['layout_file'] = _ApiClient2.default.convertToType(data['layout_file'], 'String');
                }
                if (data.hasOwnProperty('is_visible')) {
                    obj['is_visible'] = _ApiClient2.default.convertToType(data['is_visible'], 'Boolean');
                }
                if (data.hasOwnProperty('default_product_sort')) {
                    obj['default_product_sort'] = _ApiClient2.default.convertToType(data['default_product_sort'], 'String');
                }
                if (data.hasOwnProperty('image_url')) {
                    obj['image_url'] = _ApiClient2.default.convertToType(data['image_url'], 'String');
                }
                if (data.hasOwnProperty('custom_url')) {
                    obj['custom_url'] = _CustomUrlFull2.default.constructFromObject(data['custom_url']);
                }
            }
            return obj;
        }

        /**
        * Unique ID of the *Category*. Increments sequentially. Read-Only. 
        * @member {Number} id
        */

        /**
        * The unique numeric ID of the category's parent. This field controls where the category sits in the tree of categories that organize the catalog. Required in a POST if creating a child category.
        * @member {Number} parent_id
        */

        /**
        * The name displayed for the category. Name is unique with respect to the category's siblings. Required in a POST.
        * @member {String} name
        */

        /**
        * The product description, which can include HTML formatting. 
        * @member {String} description
        */

        /**
        * Number of views the category has on the storefront. 
        * @member {Number} views
        */

        /**
        * Priority this category will be given when included in the menu and category pages. The lower the number, the closer to the top of the results the category will be. 
        * @member {Number} sort_order
        */

        /**
        * Custom title for the category page. If not defined, the category name will be used as the meta title. 
        * @member {String} page_title
        */

        /**
        * A comma-separated list of keywords that can be used to locate the category when searching the store. 
        * @member {String} search_keywords
        */

        /**
        * Custom meta keywords for the category page. If not defined, the store's default keywords will be used. Must post as an array like: [\"awesome\",\"sauce\"]. 
        * @member {Array.<String>} meta_keywords
        */

        /**
        * Custom meta description for the category page. If not defined, the store's default meta description will be used. 
        * @member {String} meta_description
        */

        /**
        * A valid layout file. (Please refer to [this article](https://support.bigcommerce.com/articles/Public/Creating-Custom-Template-Files/) on creating category files.) This field is writable only for stores with a Blueprint theme applied. 
        * @member {String} layout_file
        */

        /**
        * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the category will be displayed. If `false`, the category will be hidden from view. 
        * @member {Boolean} is_visible
        */

        /**
        * Determines how the products are sorted on category page load. 
        * @member {module:model/Category.DefaultProductSortEnum} default_product_sort
        */

        /**
        * Image URL used for this category on the storefront. Images can be uploaded via form file post to `/categories/{categoryId}/image`, or by providing a publicly accessible URL in this field. 
        * @member {String} image_url
        */

        /**
        * @member {module:model/CustomUrlFull1} custom_url
        */


        /**
        * Allowed values for the <code>default_product_sort</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return Category;
}();

Category.DefaultProductSortEnum = {
    /**
     * value: "use_store_settings"
     * @const
     */
    "use_store_settings": "use_store_settings",
    /**
     * value: "featured"
     * @const
     */
    "featured": "featured",
    /**
     * value: "newest"
     * @const
     */
    "newest": "newest",
    /**
     * value: "best_selling"
     * @const
     */
    "best_selling": "best_selling",
    /**
     * value: "alpha_asc"
     * @const
     */
    "alpha_asc": "alpha_asc",
    /**
     * value: "alpha_desc"
     * @const
     */
    "alpha_desc": "alpha_desc",
    /**
     * value: "avg_customer_review"
     * @const
     */
    "avg_customer_review": "avg_customer_review",
    /**
     * value: "price_asc"
     * @const
     */
    "price_asc": "price_asc",
    /**
     * value: "price_desc"
     * @const
     */
    "price_desc": "price_desc" };
exports.default = Category;