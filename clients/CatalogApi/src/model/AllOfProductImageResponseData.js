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
* The AllOfProductImageResponseData model module.
* @module model/AllOfProductImageResponseData
* @version 3.0
*/
export default class AllOfProductImageResponseData {
    /**
    * Constructs a new <code>AllOfProductImageResponseData</code>.
    * @alias module:model/AllOfProductImageResponseData
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AllOfProductImageResponseData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfProductImageResponseData} obj Optional instance to populate.
    * @return {module:model/AllOfProductImageResponseData} The populated <code>AllOfProductImageResponseData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfProductImageResponseData();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('image_file')) {
                obj['image_file'] = ApiClient.convertToType(data['image_file'], 'String');
            }
            if (data.hasOwnProperty('url_zoom')) {
                obj['url_zoom'] = ApiClient.convertToType(data['url_zoom'], 'String');
            }
            if (data.hasOwnProperty('url_standard')) {
                obj['url_standard'] = ApiClient.convertToType(data['url_standard'], 'String');
            }
            if (data.hasOwnProperty('url_thumbnail')) {
                obj['url_thumbnail'] = ApiClient.convertToType(data['url_thumbnail'], 'String');
            }
            if (data.hasOwnProperty('url_tiny')) {
                obj['url_tiny'] = ApiClient.convertToType(data['url_tiny'], 'String');
            }
            if (data.hasOwnProperty('date_modified')) {
                obj['date_modified'] = ApiClient.convertToType(data['date_modified'], 'Date');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
        }
        return obj;
    }

    /**
    * The unique numeric ID of the image; increments sequentially. 
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * The unique numeric identifier for the product with which the image is associated. 
    * @member {Number} product_id
    */
    'product_id' = undefined;
    /**
    * The local path to the original image file uploaded to BigCommerce. Use image_url when creating a product. 
    * @member {String} image_file
    */
    'image_file' = undefined;
    /**
    * The zoom URL for this image. By default, this is used as the zoom image on product pages when zoom images are enabled. 
    * @member {String} url_zoom
    */
    'url_zoom' = undefined;
    /**
    * The standard URL for this image. By default, this is used for product-page images. 
    * @member {String} url_standard
    */
    'url_standard' = undefined;
    /**
    * The thumbnail URL for this image. By default, this is the image size used on the category page and in side panels. 
    * @member {String} url_thumbnail
    */
    'url_thumbnail' = undefined;
    /**
    * The tiny URL for this image. By default, this is the image size used for thumbnails beneath the product image on a product page. 
    * @member {String} url_tiny
    */
    'url_tiny' = undefined;
    /**
    * The date on which the product image was modified. 
    * @member {Date} date_modified
    */
    'date_modified' = undefined;
    /**
    * Publically available URL.  Use the image_url when creating a product. 
    * @member {String} image_url
    */
    'image_url' = undefined;




}
