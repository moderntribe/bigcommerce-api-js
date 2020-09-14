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
* The BulkPricingRuleFull model module.
* @module model/BulkPricingRuleFull
* @version 3.0
*/
export default class BulkPricingRuleFull {
    /**
    * Constructs a new <code>BulkPricingRuleFull</code>.
    * Common Bulk Pricing Rule properties
    * @alias module:model/BulkPricingRuleFull
    * @class
    * @param quantityMin {Number} The minimum inclusive quantity of a product to satisfy this rule. Must be greater than or equal to zero. Required in /POST. 
    * @param quantityMax {Number} The maximum inclusive quantity of a product to satisfy this rule. Must be greater than the `quantity_min` value – unless this field has a value of 0 (zero), in which case there will be no maximum bound for this rule. Required in /POST.
    * @param type {module:model/BulkPricingRuleFull.TypeEnum} The type of adjustment that is made. Values: `price` - the adjustment amount per product; `percent` - the adjustment as a percentage of the original price; `fixed` - the adjusted absolute price of the product. Required in /POST.
    * @param amount {Number} The discount can be a fixed dollar amount or a percentage. For a fixed dollar amount enter it as an integer and the response will return as an integer. For percentage enter the amount as the percentage divided by 100 using string format. For example 10% percent would be “.10”. The response will return as an integer.  Required in /POST.
    */

    constructor(quantityMin, quantityMax, type, amount) {
        
        
        this['quantity_min'] = quantityMin;
        this['quantity_max'] = quantityMax;
        this['type'] = type;
        this['amount'] = amount;
        
    }

    /**
    * Constructs a <code>BulkPricingRuleFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BulkPricingRuleFull} obj Optional instance to populate.
    * @return {module:model/BulkPricingRuleFull} The populated <code>BulkPricingRuleFull</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkPricingRuleFull();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('quantity_min')) {
                obj['quantity_min'] = ApiClient.convertToType(data['quantity_min'], 'Number');
            }
            if (data.hasOwnProperty('quantity_max')) {
                obj['quantity_max'] = ApiClient.convertToType(data['quantity_max'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Unique ID of the *Bulk Pricing Rule*. Read-Only.
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * The minimum inclusive quantity of a product to satisfy this rule. Must be greater than or equal to zero. Required in /POST. 
    * @member {Number} quantity_min
    */
    'quantity_min' = undefined;
    /**
    * The maximum inclusive quantity of a product to satisfy this rule. Must be greater than the `quantity_min` value – unless this field has a value of 0 (zero), in which case there will be no maximum bound for this rule. Required in /POST.
    * @member {Number} quantity_max
    */
    'quantity_max' = undefined;
    /**
    * The type of adjustment that is made. Values: `price` - the adjustment amount per product; `percent` - the adjustment as a percentage of the original price; `fixed` - the adjusted absolute price of the product. Required in /POST.
    * @member {module:model/BulkPricingRuleFull.TypeEnum} type
    */
    'type' = undefined;
    /**
    * The discount can be a fixed dollar amount or a percentage. For a fixed dollar amount enter it as an integer and the response will return as an integer. For percentage enter the amount as the percentage divided by 100 using string format. For example 10% percent would be “.10”. The response will return as an integer.  Required in /POST.
    * @member {Number} amount
    */
    'amount' = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "price"
         * @const
         */
        "price": "price",
        /**
         * value: "percent"
         * @const
         */
        "percent": "percent",
        /**
         * value: "fixed"
         * @const
         */
        "fixed": "fixed"    };

}
