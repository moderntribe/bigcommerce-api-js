/**
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

import ApiClient from '../ApiClient';

/**
* The ProductVariantBase model module.
* @module model/ProductVariantBase
* @version 3.0
*/
export default class ProductVariantBase {
    /**
    * Constructs a new <code>ProductVariantBase</code>.
    * Common Variant properties.
    * @alias module:model/ProductVariantBase
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ProductVariantBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductVariantBase} obj Optional instance to populate.
    * @return {module:model/ProductVariantBase} The populated <code>ProductVariantBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductVariantBase();
                        
            
            if (data.hasOwnProperty('cost_price')) {
                obj['cost_price'] = ApiClient.convertToType(data['cost_price'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('sale_price')) {
                obj['sale_price'] = ApiClient.convertToType(data['sale_price'], 'Number');
            }
            if (data.hasOwnProperty('retail_price')) {
                obj['retail_price'] = ApiClient.convertToType(data['retail_price'], 'Number');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('depth')) {
                obj['depth'] = ApiClient.convertToType(data['depth'], 'Number');
            }
            if (data.hasOwnProperty('is_free_shipping')) {
                obj['is_free_shipping'] = ApiClient.convertToType(data['is_free_shipping'], 'Boolean');
            }
            if (data.hasOwnProperty('fixed_cost_shipping_price')) {
                obj['fixed_cost_shipping_price'] = ApiClient.convertToType(data['fixed_cost_shipping_price'], 'Number');
            }
            if (data.hasOwnProperty('purchasing_disabled')) {
                obj['purchasing_disabled'] = ApiClient.convertToType(data['purchasing_disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('purchasing_disabled_message')) {
                obj['purchasing_disabled_message'] = ApiClient.convertToType(data['purchasing_disabled_message'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('inventory_level')) {
                obj['inventory_level'] = ApiClient.convertToType(data['inventory_level'], 'Number');
            }
            if (data.hasOwnProperty('inventory_warning_level')) {
                obj['inventory_warning_level'] = ApiClient.convertToType(data['inventory_warning_level'], 'Number');
            }
            if (data.hasOwnProperty('bin_picking_number')) {
                obj['bin_picking_number'] = ApiClient.convertToType(data['bin_picking_number'], 'String');
            }
        }
        return obj;
    }

    /**
    * The cost price of the variant. Not affected by Price List prices.
    * @member {Number} cost_price
    */
    'cost_price' = undefined;
    /**
    * This variant's base price on the storefront. If a Price List ID is used, the Price List value will be used. If a Price List ID is not used, and this value is `null`, the product's default price (set in the Product resource's `price` field) will be used as the base price.
    * @member {Number} price
    */
    'price' = undefined;
    /**
    * This variant's sale price on the storefront. If a Price List ID is used, the Price List value will be used. If a Price List ID is not used, and this value is null, the product's sale price (set in the Product resource's `price` field) will be used as the sale price.
    * @member {Number} sale_price
    */
    'sale_price' = undefined;
    /**
    * This variant's retail price on the storefront. If a Price List ID is used, the Price List value will be used. If a Price List ID is not used, and this value is null, the product's retail price (set in the Product resource's `price` field) will be used as the retail price.
    * @member {Number} retail_price
    */
    'retail_price' = undefined;
    /**
    * This variant's base weight on the storefront. If this value is null, the product's default weight (set in the Product resource's weight field) will be used as the base weight.
    * @member {Number} weight
    */
    'weight' = undefined;
    /**
    * Width of the variant, which can be used when calculating shipping costs. If this value is `null`, the product's default width (set in the Product resource's `width` field) will be used as the base width. 
    * @member {Number} width
    */
    'width' = undefined;
    /**
    * Height of the variant, which can be used when calculating shipping costs. If this value is `null`, the product's default height (set in the Product resource's `height` field) will be used as the base height. 
    * @member {Number} height
    */
    'height' = undefined;
    /**
    * Depth of the variant, which can be used when calculating shipping costs. If this value is `null`, the product's default depth (set in the Product resource's `depth` field) will be used as the base depth. 
    * @member {Number} depth
    */
    'depth' = undefined;
    /**
    * Flag used to indicate whether the variant has free shipping. If `true`, the shipping cost for the variant will be zero. 
    * @member {Boolean} is_free_shipping
    */
    'is_free_shipping' = undefined;
    /**
    * A fixed shipping cost for the variant. If defined, this value will be used during checkout instead of normal shipping-cost calculation. 
    * @member {Number} fixed_cost_shipping_price
    */
    'fixed_cost_shipping_price' = undefined;
    /**
    * If `true`, this variant will not be purchasable on the storefront.
    * @member {Boolean} purchasing_disabled
    */
    'purchasing_disabled' = undefined;
    /**
    * If `purchasing_disabled` is `true`, this message should show on the storefront when the variant is selected.
    * @member {String} purchasing_disabled_message
    */
    'purchasing_disabled_message' = undefined;
    /**
    * The UPC code used in feeds for shopping comparison sites and external channel integrations.
    * @member {String} upc
    */
    'upc' = undefined;
    /**
    * Inventory level for the variant, which is used when the product's inventory_tracking is set to `variant`.
    * @member {Number} inventory_level
    */
    'inventory_level' = undefined;
    /**
    * When the variant hits this inventory level, it is considered low stock.
    * @member {Number} inventory_warning_level
    */
    'inventory_warning_level' = undefined;
    /**
    * Identifies where in a warehouse the variant is located.
    * @member {String} bin_picking_number
    */
    'bin_picking_number' = undefined;




}
