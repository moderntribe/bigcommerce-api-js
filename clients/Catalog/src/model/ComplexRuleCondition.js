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
* The ComplexRuleCondition model module.
* @module model/ComplexRuleCondition
* @version 3.0
*/
export default class ComplexRuleCondition {
    /**
    * Constructs a new <code>ComplexRuleCondition</code>.
    * Complex rules may return with conditions that apply to one or more variants, or with a single modifier value (if the rules were created using the v2 API or the control panel). Complex rules created or updated in the v3 API must have conditions that either reference multiple &#x60;modifier_value_id&#x60;&#x27;s, or else reference a &#x60;modifier_value_id&#x60; and a &#x60;variant_id&#x60;.
    * @alias module:model/ComplexRuleCondition
    * @class
    * @param modifierId {Number} The unique numeric ID of the modifier with which the rule condition is associated. Required in /POST.
    * @param modifierValueId {Number} The unique numeric ID of the modifier value with which the rule condition is associated. Required in /POST.
    * @param variantId {Number} The unique numeric ID of the variant with which the rule condition is associated. Required in /POST.
    */

    constructor(modifierId, modifierValueId, variantId) {
        
        
        this['modifier_id'] = modifierId;
        this['modifier_value_id'] = modifierValueId;
        this['variant_id'] = variantId;
        
    }

    /**
    * Constructs a <code>ComplexRuleCondition</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ComplexRuleCondition} obj Optional instance to populate.
    * @return {module:model/ComplexRuleCondition} The populated <code>ComplexRuleCondition</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComplexRuleCondition();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('rule_id')) {
                obj['rule_id'] = ApiClient.convertToType(data['rule_id'], 'Number');
            }
            if (data.hasOwnProperty('modifier_id')) {
                obj['modifier_id'] = ApiClient.convertToType(data['modifier_id'], 'Number');
            }
            if (data.hasOwnProperty('modifier_value_id')) {
                obj['modifier_value_id'] = ApiClient.convertToType(data['modifier_value_id'], 'Number');
            }
            if (data.hasOwnProperty('variant_id')) {
                obj['variant_id'] = ApiClient.convertToType(data['variant_id'], 'Number');
            }
            if (data.hasOwnProperty('combination_id')) {
                obj['combination_id'] = ApiClient.convertToType(data['combination_id'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The unique numeric ID of the rule condition; increments sequentially. Read-Only 
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * The unique numeric ID of the rule with which the condition is associated. Read-Only
    * @member {Number} rule_id
    */
    'rule_id' = undefined;
    /**
    * The unique numeric ID of the modifier with which the rule condition is associated. Required in /POST.
    * @member {Number} modifier_id
    */
    'modifier_id' = undefined;
    /**
    * The unique numeric ID of the modifier value with which the rule condition is associated. Required in /POST.
    * @member {Number} modifier_value_id
    */
    'modifier_value_id' = undefined;
    /**
    * The unique numeric ID of the variant with which the rule condition is associated. Required in /POST.
    * @member {Number} variant_id
    */
    'variant_id' = undefined;
    /**
    * (READ-ONLY:) The unique numeric ID of the SKU (v2 API), or Combination, with which the rule condition is associated. This is to maintain cross-compatibility between v2 and v3. 
    * @member {Number} combination_id
    */
    'combination_id' = undefined;




}
