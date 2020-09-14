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

var _BulkPricingRuleFull = require('./BulkPricingRuleFull1');

var _BulkPricingRuleFull2 = _interopRequireDefault(_BulkPricingRuleFull);

var _CustomUrlFull = require('./CustomUrlFull1');

var _CustomUrlFull2 = _interopRequireDefault(_CustomUrlFull);

var _ProductVariantPutProduct = require('./ProductVariantPutProduct1');

var _ProductVariantPutProduct2 = _interopRequireDefault(_ProductVariantPutProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ProductPut1 model module.
* @module model/ProductPut1
* @version 3.0
*/
var ProductPut1 = function () {
    /**
    * Constructs a new <code>ProductPut1</code>.
    * The model for a PUT to update a product.
    * @alias module:model/ProductPut1
    * @class
    */

    function ProductPut1() {
        _classCallCheck(this, ProductPut1);

        this['name'] = undefined;
        this['type'] = undefined;
        this['sku'] = undefined;
        this['description'] = undefined;
        this['weight'] = undefined;
        this['width'] = undefined;
        this['depth'] = undefined;
        this['height'] = undefined;
        this['price'] = undefined;
        this['cost_price'] = undefined;
        this['retail_price'] = undefined;
        this['sale_price'] = undefined;
        this['tax_class_id'] = undefined;
        this['product_tax_code'] = undefined;
        this['categories'] = undefined;
        this['brand_id'] = undefined;
        this['inventory_level'] = undefined;
        this['inventory_warning_level'] = undefined;
        this['inventory_tracking'] = undefined;
        this['fixed_cost_shipping_price'] = undefined;
        this['is_free_shipping'] = undefined;
        this['is_visible'] = undefined;
        this['is_featured'] = undefined;
        this['related_products'] = undefined;
        this['warranty'] = undefined;
        this['bin_picking_number'] = undefined;
        this['layout_file'] = undefined;
        this['upc'] = undefined;
        this['search_keywords'] = undefined;
        this['availability'] = undefined;
        this['availability_description'] = undefined;
        this['gift_wrapping_options_type'] = undefined;
        this['gift_wrapping_options_list'] = undefined;
        this['sort_order'] = undefined;
        this['condition'] = undefined;
        this['is_condition_shown'] = undefined;
        this['order_quantity_minimum'] = undefined;
        this['order_quantity_maximum'] = undefined;
        this['page_title'] = undefined;
        this['meta_keywords'] = undefined;
        this['meta_description'] = undefined;
        this['view_count'] = undefined;
        this['preorder_release_date'] = undefined;
        this['preorder_message'] = undefined;
        this['is_preorder_only'] = undefined;
        this['is_price_hidden'] = undefined;
        this['price_hidden_label'] = undefined;
        this['custom_url'] = undefined;
        this['open_graph_type'] = undefined;
        this['open_graph_title'] = undefined;
        this['open_graph_description'] = undefined;
        this['open_graph_use_meta_description'] = undefined;
        this['open_graph_use_product_name'] = undefined;
        this['open_graph_use_image'] = undefined;
        this['brand_name or brand_id'] = undefined;
        this['gtin'] = undefined;
        this['mpn'] = undefined;
        this['reviews_rating_sum'] = undefined;
        this['reviews_count'] = undefined;
        this['total_sold'] = undefined;
        this['custom_fields'] = undefined;
        this['bulk_pricing_rules'] = undefined;
        this['images'] = undefined;
        this['primary_image'] = undefined;
        this['videos'] = undefined;
        this['variants'] = undefined;
    }

    /**
    * Constructs a <code>ProductPut1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductPut1} obj Optional instance to populate.
    * @return {module:model/ProductPut1} The populated <code>ProductPut1</code> instance.
    */


    _createClass(ProductPut1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProductPut1();

                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('sku')) {
                    obj['sku'] = _ApiClient2.default.convertToType(data['sku'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('weight')) {
                    obj['weight'] = _ApiClient2.default.convertToType(data['weight'], 'Number');
                }
                if (data.hasOwnProperty('width')) {
                    obj['width'] = _ApiClient2.default.convertToType(data['width'], 'Number');
                }
                if (data.hasOwnProperty('depth')) {
                    obj['depth'] = _ApiClient2.default.convertToType(data['depth'], 'Number');
                }
                if (data.hasOwnProperty('height')) {
                    obj['height'] = _ApiClient2.default.convertToType(data['height'], 'Number');
                }
                if (data.hasOwnProperty('price')) {
                    obj['price'] = _ApiClient2.default.convertToType(data['price'], 'Number');
                }
                if (data.hasOwnProperty('cost_price')) {
                    obj['cost_price'] = _ApiClient2.default.convertToType(data['cost_price'], 'Number');
                }
                if (data.hasOwnProperty('retail_price')) {
                    obj['retail_price'] = _ApiClient2.default.convertToType(data['retail_price'], 'Number');
                }
                if (data.hasOwnProperty('sale_price')) {
                    obj['sale_price'] = _ApiClient2.default.convertToType(data['sale_price'], 'Number');
                }
                if (data.hasOwnProperty('tax_class_id')) {
                    obj['tax_class_id'] = _ApiClient2.default.convertToType(data['tax_class_id'], 'Number');
                }
                if (data.hasOwnProperty('product_tax_code')) {
                    obj['product_tax_code'] = _ApiClient2.default.convertToType(data['product_tax_code'], 'String');
                }
                if (data.hasOwnProperty('categories')) {
                    obj['categories'] = _ApiClient2.default.convertToType(data['categories'], ['Number']);
                }
                if (data.hasOwnProperty('brand_id')) {
                    obj['brand_id'] = _ApiClient2.default.convertToType(data['brand_id'], 'Number');
                }
                if (data.hasOwnProperty('inventory_level')) {
                    obj['inventory_level'] = _ApiClient2.default.convertToType(data['inventory_level'], 'Number');
                }
                if (data.hasOwnProperty('inventory_warning_level')) {
                    obj['inventory_warning_level'] = _ApiClient2.default.convertToType(data['inventory_warning_level'], 'Number');
                }
                if (data.hasOwnProperty('inventory_tracking')) {
                    obj['inventory_tracking'] = _ApiClient2.default.convertToType(data['inventory_tracking'], 'String');
                }
                if (data.hasOwnProperty('fixed_cost_shipping_price')) {
                    obj['fixed_cost_shipping_price'] = _ApiClient2.default.convertToType(data['fixed_cost_shipping_price'], 'Number');
                }
                if (data.hasOwnProperty('is_free_shipping')) {
                    obj['is_free_shipping'] = _ApiClient2.default.convertToType(data['is_free_shipping'], 'Boolean');
                }
                if (data.hasOwnProperty('is_visible')) {
                    obj['is_visible'] = _ApiClient2.default.convertToType(data['is_visible'], 'Boolean');
                }
                if (data.hasOwnProperty('is_featured')) {
                    obj['is_featured'] = _ApiClient2.default.convertToType(data['is_featured'], 'Boolean');
                }
                if (data.hasOwnProperty('related_products')) {
                    obj['related_products'] = _ApiClient2.default.convertToType(data['related_products'], ['Number']);
                }
                if (data.hasOwnProperty('warranty')) {
                    obj['warranty'] = _ApiClient2.default.convertToType(data['warranty'], 'String');
                }
                if (data.hasOwnProperty('bin_picking_number')) {
                    obj['bin_picking_number'] = _ApiClient2.default.convertToType(data['bin_picking_number'], 'String');
                }
                if (data.hasOwnProperty('layout_file')) {
                    obj['layout_file'] = _ApiClient2.default.convertToType(data['layout_file'], 'String');
                }
                if (data.hasOwnProperty('upc')) {
                    obj['upc'] = _ApiClient2.default.convertToType(data['upc'], 'String');
                }
                if (data.hasOwnProperty('search_keywords')) {
                    obj['search_keywords'] = _ApiClient2.default.convertToType(data['search_keywords'], 'String');
                }
                if (data.hasOwnProperty('availability')) {
                    obj['availability'] = _ApiClient2.default.convertToType(data['availability'], 'String');
                }
                if (data.hasOwnProperty('availability_description')) {
                    obj['availability_description'] = _ApiClient2.default.convertToType(data['availability_description'], 'String');
                }
                if (data.hasOwnProperty('gift_wrapping_options_type')) {
                    obj['gift_wrapping_options_type'] = _ApiClient2.default.convertToType(data['gift_wrapping_options_type'], 'String');
                }
                if (data.hasOwnProperty('gift_wrapping_options_list')) {
                    obj['gift_wrapping_options_list'] = _ApiClient2.default.convertToType(data['gift_wrapping_options_list'], ['Number']);
                }
                if (data.hasOwnProperty('sort_order')) {
                    obj['sort_order'] = _ApiClient2.default.convertToType(data['sort_order'], 'Number');
                }
                if (data.hasOwnProperty('condition')) {
                    obj['condition'] = _ApiClient2.default.convertToType(data['condition'], 'String');
                }
                if (data.hasOwnProperty('is_condition_shown')) {
                    obj['is_condition_shown'] = _ApiClient2.default.convertToType(data['is_condition_shown'], 'Boolean');
                }
                if (data.hasOwnProperty('order_quantity_minimum')) {
                    obj['order_quantity_minimum'] = _ApiClient2.default.convertToType(data['order_quantity_minimum'], 'Number');
                }
                if (data.hasOwnProperty('order_quantity_maximum')) {
                    obj['order_quantity_maximum'] = _ApiClient2.default.convertToType(data['order_quantity_maximum'], 'Number');
                }
                if (data.hasOwnProperty('page_title')) {
                    obj['page_title'] = _ApiClient2.default.convertToType(data['page_title'], 'String');
                }
                if (data.hasOwnProperty('meta_keywords')) {
                    obj['meta_keywords'] = _ApiClient2.default.convertToType(data['meta_keywords'], ['String']);
                }
                if (data.hasOwnProperty('meta_description')) {
                    obj['meta_description'] = _ApiClient2.default.convertToType(data['meta_description'], 'String');
                }
                if (data.hasOwnProperty('view_count')) {
                    obj['view_count'] = _ApiClient2.default.convertToType(data['view_count'], 'Number');
                }
                if (data.hasOwnProperty('preorder_release_date')) {
                    obj['preorder_release_date'] = _ApiClient2.default.convertToType(data['preorder_release_date'], 'Date');
                }
                if (data.hasOwnProperty('preorder_message')) {
                    obj['preorder_message'] = _ApiClient2.default.convertToType(data['preorder_message'], 'String');
                }
                if (data.hasOwnProperty('is_preorder_only')) {
                    obj['is_preorder_only'] = _ApiClient2.default.convertToType(data['is_preorder_only'], 'Boolean');
                }
                if (data.hasOwnProperty('is_price_hidden')) {
                    obj['is_price_hidden'] = _ApiClient2.default.convertToType(data['is_price_hidden'], 'Boolean');
                }
                if (data.hasOwnProperty('price_hidden_label')) {
                    obj['price_hidden_label'] = _ApiClient2.default.convertToType(data['price_hidden_label'], 'String');
                }
                if (data.hasOwnProperty('custom_url')) {
                    obj['custom_url'] = _CustomUrlFull2.default.constructFromObject(data['custom_url']);
                }
                if (data.hasOwnProperty('open_graph_type')) {
                    obj['open_graph_type'] = _ApiClient2.default.convertToType(data['open_graph_type'], 'String');
                }
                if (data.hasOwnProperty('open_graph_title')) {
                    obj['open_graph_title'] = _ApiClient2.default.convertToType(data['open_graph_title'], 'String');
                }
                if (data.hasOwnProperty('open_graph_description')) {
                    obj['open_graph_description'] = _ApiClient2.default.convertToType(data['open_graph_description'], 'String');
                }
                if (data.hasOwnProperty('open_graph_use_meta_description')) {
                    obj['open_graph_use_meta_description'] = _ApiClient2.default.convertToType(data['open_graph_use_meta_description'], 'Boolean');
                }
                if (data.hasOwnProperty('open_graph_use_product_name')) {
                    obj['open_graph_use_product_name'] = _ApiClient2.default.convertToType(data['open_graph_use_product_name'], 'Boolean');
                }
                if (data.hasOwnProperty('open_graph_use_image')) {
                    obj['open_graph_use_image'] = _ApiClient2.default.convertToType(data['open_graph_use_image'], 'Boolean');
                }
                if (data.hasOwnProperty('brand_name or brand_id')) {
                    obj['brand_name or brand_id'] = _ApiClient2.default.convertToType(data['brand_name or brand_id'], 'String');
                }
                if (data.hasOwnProperty('gtin')) {
                    obj['gtin'] = _ApiClient2.default.convertToType(data['gtin'], 'String');
                }
                if (data.hasOwnProperty('mpn')) {
                    obj['mpn'] = _ApiClient2.default.convertToType(data['mpn'], 'String');
                }
                if (data.hasOwnProperty('reviews_rating_sum')) {
                    obj['reviews_rating_sum'] = _ApiClient2.default.convertToType(data['reviews_rating_sum'], 'Number');
                }
                if (data.hasOwnProperty('reviews_count')) {
                    obj['reviews_count'] = _ApiClient2.default.convertToType(data['reviews_count'], 'Number');
                }
                if (data.hasOwnProperty('total_sold')) {
                    obj['total_sold'] = _ApiClient2.default.convertToType(data['total_sold'], 'Number');
                }
                if (data.hasOwnProperty('custom_fields')) {
                    obj['custom_fields'] = _ApiClient2.default.convertToType(data['custom_fields'], [Object]);
                }
                if (data.hasOwnProperty('bulk_pricing_rules')) {
                    obj['bulk_pricing_rules'] = _ApiClient2.default.convertToType(data['bulk_pricing_rules'], [_BulkPricingRuleFull2.default]);
                }
                if (data.hasOwnProperty('images')) {
                    obj['images'] = _ApiClient2.default.convertToType(data['images'], [Object]);
                }
                if (data.hasOwnProperty('primary_image')) {
                    obj['primary_image'] = _ApiClient2.default.convertToType(data['primary_image'], Object);
                }
                if (data.hasOwnProperty('videos')) {
                    obj['videos'] = _ApiClient2.default.convertToType(data['videos'], [Object]);
                }
                if (data.hasOwnProperty('variants')) {
                    obj['variants'] = _ProductVariantPutProduct2.default.constructFromObject(data['variants']);
                }
            }
            return obj;
        }

        /**
        * The product name. 
        * @member {String} name
        */

        /**
        * The product type. One of: `physical` - a physical stock unit, `digital` - a digital download. 
        * @member {module:model/ProductPut1.TypeEnum} type
        */

        /**
        * User defined product code/stock keeping unit (SKU). 
        * @member {String} sku
        */

        /**
        * The product description, which can include HTML formatting. 
        * @member {String} description
        */

        /**
        * Weight of the product, which can be used when calculating shipping costs. This is based on the unit set on the store 
        * @member {Number} weight
        */

        /**
        * Width of the product, which can be used when calculating shipping costs. 
        * @member {Number} width
        */

        /**
        * Depth of the product, which can be used when calculating shipping costs. 
        * @member {Number} depth
        */

        /**
        * Height of the product, which can be used when calculating shipping costs. 
        * @member {Number} height
        */

        /**
        * The price of the product. The price should include or exclude tax, based on the store settings. 
        * @member {Number} price
        */

        /**
        * The cost price of the product. Stored for reference only; it is not used or displayed anywhere on the store. 
        * @member {Number} cost_price
        */

        /**
        * The retail cost of the product. If entered, the retail cost price will be shown on the product page. 
        * @member {Number} retail_price
        */

        /**
        * If entered, the sale price will be used instead of value in the price field when calculating the product's cost. 
        * @member {Number} sale_price
        */

        /**
        * The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.) 
        * @member {Number} tax_class_id
        */

        /**
        * Accepts AvaTax System Tax Codes, which identify products and services that fall into special sales-tax categories. By using these codes, merchants who subscribe to BigCommerce's Avalara Premium integration can calculate sales taxes more accurately. Stores without Avalara Premium will ignore the code when calculating sales tax. Do not pass more than one code. The codes are case-sensitive. For details, please see Avalara's documentation. 
        * @member {String} product_tax_code
        */

        /**
        * An array of IDs for the categories to which this product belongs. When updating a product, if an array of categories is supplied, all product categories will be overwritten. Does not accept more than 1,000 ID values. 
        * @member {Array.<Number>} categories
        */

        /**
        * A product can be added to an existing brand during a product /PUT or /POST. 
        * @member {Number} brand_id
        */

        /**
        * Current inventory level of the product. Simple inventory tracking must be enabled (See the `inventory_tracking` field) for this to take any effect. 
        * @member {Number} inventory_level
        */

        /**
        * Inventory warning level for the product. When the product's inventory level drops below the warning level, the store owner will be informed. Simple inventory tracking must be enabled (see the `inventory_tracking` field) for this to take any effect. 
        * @member {Number} inventory_warning_level
        */

        /**
        * The type of inventory tracking for the product. Values are: `none` - inventory levels will not be tracked; `product` - inventory levels will be tracked using the `inventory_level` and `inventory_warning_level` fields; `variant` - inventory levels will be tracked based on variants, which maintain their own warning levels and inventory levels. 
        * @member {module:model/ProductPut1.InventoryTrackingEnum} inventory_tracking
        */

        /**
        * A fixed shipping cost for the product. If defined, this value will be used during checkout instead of normal shipping-cost calculation. 
        * @member {Number} fixed_cost_shipping_price
        */

        /**
        * Flag used to indicate whether the product has free shipping. If `true`, the shipping cost for the product will be zero. 
        * @member {Boolean} is_free_shipping
        */

        /**
        * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the product will be displayed. If `false`, the product will be hidden from view. 
        * @member {Boolean} is_visible
        */

        /**
        * Flag to determine whether the product should be included in the `featured products` panel when viewing the store. 
        * @member {Boolean} is_featured
        */

        /**
        * An array of IDs for the related products. 
        * @member {Array.<Number>} related_products
        */

        /**
        * Warranty information displayed on the product page. Can include HTML formatting. 
        * @member {String} warranty
        */

        /**
        * The BIN picking number for the product. 
        * @member {String} bin_picking_number
        */

        /**
        * The layout template file used to render this product category. This field is writable only for stores with a Blueprint theme applied. 
        * @member {String} layout_file
        */

        /**
        * The product UPC code, which is used in feeds for shopping comparison sites and external channel integrations. 
        * @member {String} upc
        */

        /**
        * A comma-separated list of keywords that can be used to locate the product when searching the store. 
        * @member {String} search_keywords
        */

        /**
        * Availability of the product. Availability options are: `available` - the product can be purchased on the storefront; `disabled` - the product is listed in the storefront, but cannot be purchased; `preorder` - the product is listed for pre-orders. 
        * @member {module:model/ProductPut1.AvailabilityEnum} availability
        */

        /**
        * Availability text displayed on the checkout page, under the product title. Tells the customer how long it will normally take to ship this product, such as: 'Usually ships in 24 hours.' 
        * @member {String} availability_description
        */

        /**
        * Type of gift-wrapping options. Values: `any` - allow any gift-wrapping options in the store; `none` - disallow gift-wrapping on the product; `list` – provide a list of IDs in the `gift_wrapping_options_list` field. 
        * @member {module:model/ProductPut1.GiftWrappingOptionsTypeEnum} gift_wrapping_options_type
        */

        /**
        * A list of gift-wrapping option IDs. 
        * @member {Array.<Number>} gift_wrapping_options_list
        */

        /**
        * Priority to give this product when included in product lists on category pages and in search results. Lower integers will place the product closer to the top of the results. 
        * @member {Number} sort_order
        */

        /**
        * The product condition. Will be shown on the product page if the `is_condition_shown` field's value is `true`. Possible values: `New`, `Used`, `Refurbished`. 
        * @member {module:model/ProductPut1.ConditionEnum} condition
        */

        /**
        * Flag used to determine whether the product condition is shown to the customer on the product page. 
        * @member {Boolean} is_condition_shown
        */

        /**
        * The minimum quantity an order must contain, to be eligible to purchase this product. 
        * @member {Number} order_quantity_minimum
        */

        /**
        * The maximum quantity an order can contain when purchasing the product. 
        * @member {Number} order_quantity_maximum
        */

        /**
        * Custom title for the product page. If not defined, the product name will be used as the meta title. 
        * @member {String} page_title
        */

        /**
        * Custom meta keywords for the product page. If not defined, the store's default keywords will be used. 
        * @member {Array.<String>} meta_keywords
        */

        /**
        * Custom meta description for the product page. If not defined, the store's default meta description will be used. 
        * @member {String} meta_description
        */

        /**
        * The number of times the product has been viewed. 
        * @member {Number} view_count
        */

        /**
        * Pre-order release date. See the `availability` field for details on setting a product's availability to accept pre-orders. 
        * @member {Date} preorder_release_date
        */

        /**
        * Custom expected-date message to display on the product page. If undefined, the message defaults to the storewide setting. Can contain the `%%DATE%%` placeholder, which will be substituted for the release date. 
        * @member {String} preorder_message
        */

        /**
        * If set to true then on the preorder release date the preorder status will automatically be removed.   If set to false, then on the release date the preorder status **will not** be removed. It will need to be changed manually either in the control panel or using the API. Using the API set `availability` to `available`. 
        * @member {Boolean} is_preorder_only
        */

        /**
        * False by default, indicating that this product's price should be shown on the product page. If set to `true`, the price is hidden. (NOTE: To successfully set `is_price_hidden` to `true`, the `availability` value must be `disabled`.) 
        * @member {Boolean} is_price_hidden
        */

        /**
        * By default, an empty string. If `is_price_hidden` is `true`, the value of `price_hidden_label` is displayed instead of the price. (NOTE: To successfully set a non-empty string value with `is_price_hidden` set to `true`, the `availability` value must be `disabled`.) 
        * @member {String} price_hidden_label
        */

        /**
        * @member {module:model/CustomUrlFull1} custom_url
        */

        /**
        * Type of product, defaults to `product`. 
        * @member {module:model/ProductPut1.OpenGraphTypeEnum} open_graph_type
        */

        /**
        * Title of the product, if not specified the product name will be used instead. 
        * @member {String} open_graph_title
        */

        /**
        * Description to use for the product, if not specified then the meta_description will be used instead. 
        * @member {String} open_graph_description
        */

        /**
        * Flag to determine if product description or open graph description is used. 
        * @member {Boolean} open_graph_use_meta_description
        */

        /**
        * Flag to determine if product name or open graph name is used. 
        * @member {Boolean} open_graph_use_product_name
        */

        /**
        * Flag to determine if product image or open graph image is used. 
        * @member {Boolean} open_graph_use_image
        */

        /**
        * The brand can be created during a product PUT or POST request. If the brand already exists then the product will be added. If not the brand will be created and the product added. If using `brand_name` it performs a fuzzy match and adds the brand. eg. \"Common Good\" and \"Common good\" are the same. Brand name does not return as part of a product response. Only the `brand_id`.
        * @member {String} brand_name or brand_id
        */

        /**
        * Global Trade Item Number
        * @member {String} gtin
        */

        /**
        * Manufacturer Part Number
        * @member {String} mpn
        */

        /**
        * The total rating for the product. 
        * @member {Number} reviews_rating_sum
        */

        /**
        * The number of times the product has been rated. 
        * @member {Number} reviews_count
        */

        /**
        * The total quantity of this product sold. 
        * @member {Number} total_sold
        */

        /**
        * @member {Array.<Object>} custom_fields
        */

        /**
        * @member {Array.<module:model/BulkPricingRuleFull1>} bulk_pricing_rules
        */

        /**
        * @member {Array.<Object>} images
        */

        /**
        * Common ProductImage properties.
        * @member {Object} primary_image
        */

        /**
        * @member {Array.<Object>} videos
        */

        /**
        * @member {module:model/ProductVariantPutProduct1} variants
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>inventory_tracking</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>availability</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>gift_wrapping_options_type</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>condition</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>open_graph_type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ProductPut1;
}();

ProductPut1.TypeEnum = {
    /**
     * value: "physical"
     * @const
     */
    "physical": "physical",
    /**
     * value: "digital"
     * @const
     */
    "digital": "digital" };
ProductPut1.InventoryTrackingEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
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
ProductPut1.AvailabilityEnum = {
    /**
     * value: "available"
     * @const
     */
    "available": "available",
    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled",
    /**
     * value: "preorder"
     * @const
     */
    "preorder": "preorder" };
ProductPut1.GiftWrappingOptionsTypeEnum = {
    /**
     * value: "any"
     * @const
     */
    "any": "any",
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "list"
     * @const
     */
    "list": "list" };
ProductPut1.ConditionEnum = {
    /**
     * value: "New"
     * @const
     */
    "New": "New",
    /**
     * value: "Used"
     * @const
     */
    "Used": "Used",
    /**
     * value: "Refurbished"
     * @const
     */
    "Refurbished": "Refurbished" };
ProductPut1.OpenGraphTypeEnum = {
    /**
     * value: "product"
     * @const
     */
    "product": "product",
    /**
     * value: "album"
     * @const
     */
    "album": "album",
    /**
     * value: "book"
     * @const
     */
    "book": "book",
    /**
     * value: "drink"
     * @const
     */
    "drink": "drink",
    /**
     * value: "food"
     * @const
     */
    "food": "food",
    /**
     * value: "game"
     * @const
     */
    "game": "game",
    /**
     * value: "movie"
     * @const
     */
    "movie": "movie",
    /**
     * value: "song"
     * @const
     */
    "song": "song",
    /**
     * value: "tv_show"
     * @const
     */
    "tv_show": "tv_show" };
exports.default = ProductPut1;