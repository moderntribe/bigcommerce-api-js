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
import ProductOptionBase1 from './ProductOptionBase1';

/**
* The ProductFull model module.
* @module model/ProductFull
* @version 3.0
*/
export default class ProductFull {
    /**
    * Constructs a new <code>ProductFull</code>.
    * @alias module:model/ProductFull
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ProductFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductFull} obj Optional instance to populate.
    * @return {module:model/ProductFull} The populated <code>ProductFull</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductFull();
                        
            
            if (data.hasOwnProperty('date_created')) {
                obj['date_created'] = ApiClient.convertToType(data['date_created'], 'Date');
            }
            if (data.hasOwnProperty('date_modified')) {
                obj['date_modified'] = ApiClient.convertToType(data['date_modified'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('base_variant_id')) {
                obj['base_variant_id'] = ApiClient.convertToType(data['base_variant_id'], 'Number');
            }
            if (data.hasOwnProperty('calculated_price')) {
                obj['calculated_price'] = ApiClient.convertToType(data['calculated_price'], 'Number');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [ProductOptionBase1]);
            }
            if (data.hasOwnProperty('modifiers')) {
                obj['modifiers'] = ApiClient.convertToType(data['modifiers'], [Object]);
            }
            if (data.hasOwnProperty('map_price')) {
                obj['map_price'] = ApiClient.convertToType(data['map_price'], 'Number');
            }
            if (data.hasOwnProperty('option_set_id')) {
                obj['option_set_id'] = ApiClient.convertToType(data['option_set_id'], 'Number');
            }
            if (data.hasOwnProperty('option_set_display')) {
                obj['option_set_display'] = ApiClient.convertToType(data['option_set_display'], 'String');
            }
            if (data.hasOwnProperty('variants')) {
                obj['variants'] = ApiClient.convertToType(data['variants'], Object);
            }
        }
        return obj;
    }

    /**
    * The date on which the product was created. 
    * @member {Date} date_created
    */
    'date_created' = undefined;
    /**
    * The date on which the product was modified. 
    * @member {Date} date_modified
    */
    'date_modified' = undefined;
    /**
    * ID of the product. Read Only.
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * The unique identifier of the base variant associated with a simple product. This value is `null` for complex products.
    * @member {Number} base_variant_id
    */
    'base_variant_id' = undefined;
    /**
    * The price of the product as seen on the storefront. It will be equal to the `sale_price`, if set, and the `price` if there is not a `sale_price`.
    * @member {Number} calculated_price
    */
    'calculated_price' = undefined;
    /**
    * @member {Array.<module:model/ProductOptionBase1>} options
    */
    'options' = undefined;
    /**
    * @member {Array.<Object>} modifiers
    */
    'modifiers' = undefined;
    /**
    * Minimum Advertised Price.
    * @member {Number} map_price
    */
    'map_price' = undefined;
    /**
    * Indicates that the product is in an Option Set (legacy V2 concept).
    * @member {Number} option_set_id
    */
    'option_set_id' = undefined;
    /**
    * Legacy template setting which controls if the option set shows up to the side of or below the product image and description.
    * @member {String} option_set_display
    */
    'option_set_display' = undefined;
    /**
    * @member {Object} variants
    */
    'variants' = undefined;




}
