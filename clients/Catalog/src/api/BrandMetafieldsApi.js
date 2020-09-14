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
import ErrorResponse from '../model/ErrorResponse';
import MetaFieldCollectionResponse1 from '../model/MetaFieldCollectionResponse1';
import MetafieldPost3 from '../model/MetafieldPost3';
import MetafieldPut4 from '../model/MetafieldPut4';
import MetafieldResponse1 from '../model/MetafieldResponse1';
import MetafieldResponse3 from '../model/MetafieldResponse3';
import NotFound from '../model/NotFound';

/**
* BrandMetafields service.
* @module api/BrandMetafieldsApi
* @version 3.0
*/
export default class BrandMetafieldsApi {

    /**
    * Constructs a new BrandMetafieldsApi. 
    * @alias module:api/BrandMetafieldsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createBrandMetafield operation.
     * @callback module:api/BrandMetafieldsApi~createBrandMetafieldCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetafieldResponse3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Brand Metafield
     * Creates a *Brand Metafield*.  **Required Fields** - permission_set - namespace - key - value  **Read-Only Fields** - id  **Note:** The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     * @param {module:api/BrandMetafieldsApi~createBrandMetafieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetafieldResponse3}
     */
    createBrandMetafield(body, brandId, contentType, accept, callback) {
      let postBody = body;

      let pathParams = {
        'brand_id': brandId
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': contentType,
        'Accept': accept
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MetafieldResponse3;

      return this.apiClient.callApi(
        '/catalog/brands/{brand_id}/metafields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteBrandMetafieldById operation.
     * @callback module:api/BrandMetafieldsApi~deleteBrandMetafieldByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Brand Metafield
     * Deletes a *Brand Metafield*.
     * @param {module:api/BrandMetafieldsApi~deleteBrandMetafieldByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteBrandMetafieldById(metafieldId, brandId, accept, contentType, callback) {
      let postBody = null;

      let pathParams = {
        'metafield_id': metafieldId,
        'brand_id': brandId
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
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/catalog/brands/{brand_id}/metafields/{metafield_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBrandMetafieldByBrandId operation.
     * @callback module:api/BrandMetafieldsApi~getBrandMetafieldByBrandIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetafieldResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Brand Metafields
     * Returns a *Brand Metafield*. Optional filter parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/BrandMetafieldsApi~getBrandMetafieldByBrandIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetafieldResponse1}
     */
    getBrandMetafieldByBrandId(metafieldId, brandId, accept, contentType, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'metafield_id': metafieldId,
        'brand_id': brandId
      };
      let queryParams = {
        'include_fields': opts['includeFields'],
        'exclude_fields': opts['excludeFields']
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetafieldResponse1;

      return this.apiClient.callApi(
        '/catalog/brands/{brand_id}/metafields/{metafield_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBrandMetafieldsByBrandId operation.
     * @callback module:api/BrandMetafieldsApi~getBrandMetafieldsByBrandIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaFieldCollectionResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Brand Metafields
     * Returns a list of *Brand Metafields*. Optional filter parameters can be passed in. 
     * @param {Object} opts Optional parameters
     * @param {module:api/BrandMetafieldsApi~getBrandMetafieldsByBrandIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaFieldCollectionResponse1}
     */
    getBrandMetafieldsByBrandId(brandId, contentType, accept, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'brand_id': brandId
      };
      let queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'key': opts['key'],
        'namespace': opts['namespace'],
        'include_fields': opts['includeFields'],
        'exclude_fields': opts['excludeFields']
      };
      let headerParams = {
        'Content-Type': contentType,
        'Accept': accept
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetaFieldCollectionResponse1;

      return this.apiClient.callApi(
        '/catalog/brands/{brand_id}/metafields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateBrandMetafield operation.
     * @callback module:api/BrandMetafieldsApi~updateBrandMetafieldCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetafieldResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Brand Metafield
     * Updates a *Brand Metafield*.  **Required Fields**   * none  **Read-Only Fields** * id * These fields can only be modified by the app (API credentials) that created the metafield:  * namespace  * key  * permission_set  **Usage Notes** * Attempting to modify &#x60;namespace&#x60;, &#x60;key&#x60;, and &#x60;permission_set&#x60; fields using a client ID different from the one used to create those metafields will result in a 403 error message. * The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     * @param {module:api/BrandMetafieldsApi~updateBrandMetafieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetafieldResponse1}
     */
    updateBrandMetafield(body, metafieldId, brandId, accept, contentType, callback) {
      let postBody = body;

      let pathParams = {
        'metafield_id': metafieldId,
        'brand_id': brandId
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
      let returnType = MetafieldResponse1;

      return this.apiClient.callApi(
        '/catalog/brands/{brand_id}/metafields/{metafield_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
