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

import ApiClient from "../ApiClient";
import VariantCollectionResponse1 from '../model/VariantCollectionResponse1';
import VariantsBatchErrorResponse from '../model/VariantsBatchErrorResponse';

/**
* Catalog service.
* @module api/CatalogApi
* @version 3.0
*/
export default class CatalogApi {

    /**
    * Constructs a new CatalogApi. 
    * @alias module:api/CatalogApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteBrands operation.
     * @callback module:api/CatalogApi~deleteBrandsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Brands
     * By default, it deletes all *Brand* objects. A filter should be added to avoid deleting all *Brand* objects in a store.
     * @param {Object} opts Optional parameters
     * @param {module:api/CatalogApi~deleteBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteBrands(accept, contentType, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'page_title': opts['pageTitle']
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/catalog/brands', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteProducts operation.
     * @callback module:api/CatalogApi~deleteProductsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Products
     * To delete *Product* objects, you must include a filter. This prevents inadvertently deleting all *Product* objects in a store.  **Example**: To delete products with the id&#x27;s of 1,2 and 3, use &#x60;DELETE /v3/catalog/products?id:in&#x3D;1,2,3&#x60;.
     * @param {Object} opts Optional parameters
     * @param {module:api/CatalogApi~deleteProductsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteProducts(accept, contentType, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'sku': opts['sku'],
        'price': opts['price'],
        'weight': opts['weight'],
        'condition': opts['condition'],
        'brand_id': opts['brandId'],
        'date_modified': opts['dateModified'],
        'date_last_imported': opts['dateLastImported'],
        'is_visible': opts['isVisible'],
        'is_featured': opts['isFeatured'],
        'inventory_level': opts['inventoryLevel'],
        'total_sold': opts['totalSold'],
        'type': opts['type'],
        'categories': opts['categories'],
        'keyword': opts['keyword']
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/catalog/products', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateVariantsBatch operation.
     * @callback module:api/CatalogApi~updateVariantsBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariantCollectionResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Variants (Batch)
     * Creates or updates a batch of &#x60;Variant&#x60; objects. At the time of writing, the current limit is &#x60;50&#x60; variants. This limit is subject to change.
     * @param {module:api/CatalogApi~updateVariantsBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VariantCollectionResponse1}
     */
    updateVariantsBatch(body, accept, contentType, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = VariantCollectionResponse1;

      return this.apiClient.callApi(
        '/catalog/variants', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
