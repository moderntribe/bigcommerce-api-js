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
import OptionConfig from './OptionConfig';

/**
* The ProductModifierBase model module.
* @module model/ProductModifierBase
* @version 3.0
*/
export default class ProductModifierBase {
    /**
    * Constructs a new <code>ProductModifierBase</code>.
    * Common Modifier properties.
    * @alias module:model/ProductModifierBase
    * @class
    * @param type {module:model/ProductModifierBase.TypeEnum} BigCommerce API, which determines how it will display on the storefront. Acceptable values: `date`, `checkbox`, `file`, `text`, `multi_line_text`, `numbers_only_text`, `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. Required in a /POST. 
    * @param required {Boolean} Whether or not this modifer is required or not at checkout. Required in a /POST. 
    */

    constructor(type, required) {
        
        
        this['type'] = type;
        this['required'] = required;
        
    }

    /**
    * Constructs a <code>ProductModifierBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductModifierBase} obj Optional instance to populate.
    * @return {module:model/ProductModifierBase} The populated <code>ProductModifierBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductModifierBase();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('sort_order')) {
                obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'Number');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = OptionConfig.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
        }
        return obj;
    }

    /**
    * BigCommerce API, which determines how it will display on the storefront. Acceptable values: `date`, `checkbox`, `file`, `text`, `multi_line_text`, `numbers_only_text`, `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. Required in a /POST. 
    * @member {module:model/ProductModifierBase.TypeEnum} type
    */
    'type' = undefined;
    /**
    * Whether or not this modifer is required or not at checkout. Required in a /POST. 
    * @member {Boolean} required
    */
    'required' = undefined;
    /**
    * The order the modifiers display on the product detail page.
    * @member {Number} sort_order
    */
    'sort_order' = undefined;
    /**
    * @member {module:model/OptionConfig} config
    */
    'config' = undefined;
    /**
    * The name of the option shown on the storefront.
    * @member {String} display_name
    */
    'display_name' = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "date"
         * @const
         */
        "date": "date",
        /**
         * value: "checkbox"
         * @const
         */
        "checkbox": "checkbox",
        /**
         * value: "file"
         * @const
         */
        "file": "file",
        /**
         * value: "text"
         * @const
         */
        "text": "text",
        /**
         * value: "multi_line_text"
         * @const
         */
        "multi_line_text": "multi_line_text",
        /**
         * value: "numbers_only_text"
         * @const
         */
        "numbers_only_text": "numbers_only_text",
        /**
         * value: "radio_buttons"
         * @const
         */
        "radio_buttons": "radio_buttons",
        /**
         * value: "rectangles"
         * @const
         */
        "rectangles": "rectangles",
        /**
         * value: "dropdown"
         * @const
         */
        "dropdown": "dropdown",
        /**
         * value: "product_list"
         * @const
         */
        "product_list": "product_list",
        /**
         * value: "product_list_with_images"
         * @const
         */
        "product_list_with_images": "product_list_with_images",
        /**
         * value: "swatch"
         * @const
         */
        "swatch": "swatch"    };

}
