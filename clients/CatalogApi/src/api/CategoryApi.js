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
import CategoriesTreeResp1 from '../model/CategoriesTreeResp1';
import Category from '../model/Category';
import Category1 from '../model/Category1';
import CategoryBase from '../model/CategoryBase';
import CategoryResponse from '../model/CategoryResponse';
import CategoryResponse1 from '../model/CategoryResponse1';
import ErrorResponse from '../model/ErrorResponse';
import NotFound from '../model/NotFound';

/**
* Category service.
* @module api/CategoryApi
* @version 3.0
*/
export default class CategoryApi {

    /**
    * Constructs a new CategoryApi. 
    * @alias module:api/CategoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createCategory operation.
     * @callback module:api/CategoryApi~createCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Category
     * Creates a *Category*.  **Required Fields**: - parent_id:   - To create a child category, set the parent_id to the parent category.  - To create a top level category, set the parent_id to 0. - name  **Read-Only Fields**: - id
     * @param {module:api/CategoryApi~createCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryResponse}
     */
    createCategory(body, accept, contentType, callback) {
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
      let returnType = CategoryResponse;

      return this.apiClient.callApi(
        '/catalog/categories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteCategories operation.
     * @callback module:api/CategoryApi~deleteCategoriesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Categories
     * By default, it deletes all *Category* objects. A filter should be added to avoid deleting all *Category* objects in a store.  Sending a &#x60;DELETE&#x60; to this endpoint will result in a &#x60;422&#x60; error. Move products to a new category by sending a &#x60;PUT&#x60; to the &#x60;/catalog/products/{product_id}&#x60; endpoint before deleting a category.
     * @param {Object} opts Optional parameters
     * @param {module:api/CategoryApi~deleteCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCategories(accept, contentType, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'parent_id': opts['parentId'],
        'page_title': opts['pageTitle'],
        'keyword': opts['keyword'],
        'is_visible': opts['isVisible']
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
        '/catalog/categories', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteCategoryById operation.
     * @callback module:api/CategoryApi~deleteCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Category
     * Deletes a *Category*.
     * @param {module:api/CategoryApi~deleteCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCategoryById(categoryId, accept, contentType, callback) {
      let postBody = null;

      let pathParams = {
        'category_id': categoryId
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
        '/catalog/categories/{category_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCategories operation.
     * @callback module:api/CategoryApi~getCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryBase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Categories
     * Returns a list of *Categories*. Optional filter parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/CategoryApi~getCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryBase}
     */
    getCategories(accept, contentType, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id'],
        'name': opts['name'],
        'parent_id': opts['parentId'],
        'page_title': opts['pageTitle'],
        'keyword': opts['keyword'],
        'is_visible': opts['isVisible'],
        'page': opts['page'],
        'limit': opts['limit'],
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
      let returnType = CategoryBase;

      return this.apiClient.callApi(
        '/catalog/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCategoryById operation.
     * @callback module:api/CategoryApi~getCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Category
     * Returns a single *Category*. Optional parameters can be passed in.
     * @param {Object} opts Optional parameters
     * @param {module:api/CategoryApi~getCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryResponse}
     */
    getCategoryById(categoryId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'category_id': categoryId
      };
      let queryParams = {
        'include_fields': opts['includeFields'],
        'exclude_fields': opts['excludeFields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoryResponse;

      return this.apiClient.callApi(
        '/catalog/categories/{category_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCategoryTree operation.
     * @callback module:api/CategoryApi~getCategoryTreeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoriesTreeResp1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Category Tree
     * Returns the categories tree, a nested lineage of the categories with parent-&gt;child relationship. The Category objects returned are simplified versions of the category objects returned in the rest of this API.
     * @param {module:api/CategoryApi~getCategoryTreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoriesTreeResp1}
     */
    getCategoryTree(accept, contentType, callback) {
      let postBody = null;

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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoriesTreeResp1;

      return this.apiClient.callApi(
        '/catalog/categories/tree', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateCategory operation.
     * @callback module:api/CategoryApi~updateCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryResponse1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Category
     * Updates a *Category*.  **Required Fields** * none  **Read-Only Fields** - id
     * @param {module:api/CategoryApi~updateCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryResponse1}
     */
    updateCategory(body, categoryId, accept, contentType, callback) {
      let postBody = body;

      let pathParams = {
        'category_id': categoryId
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
      let returnType = CategoryResponse1;

      return this.apiClient.callApi(
        '/catalog/categories/{category_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
