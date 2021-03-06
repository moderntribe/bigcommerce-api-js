/*
 * Catalog
 * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Differentiating Variants & Modifiers](#variants-and-modifiers) - [Available Endpoints](#available-endpoints) - [Resources](#resources)  The Catalog API manages products, brands and categories for a store. To learn more about the Catalog resources see [Catalog Products](https://developer.bigcommerce.com/api-docs/catalog/products-overview) and [Categories](https://developer.bigcommerce.com/api-docs/catalog/products-overview#products-overview_categories).  ## OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | modify     | `store_v2_products`           | | Products | read-only  | `store_v2_products_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Differentiating Variants and Modifiers [Variants](https://support.bigcommerce.com/s/article/Product-Options-v3#variations) represent a physical product made up of [Product Option](https://support.bigcommerce.com/s/article/Product-Options-v3) choices, i.e. a large blue t-shirt. Each variant can have a unique SKU.  Modifiers represent a choice a customer makes about a product that doesn't represent a physical item, i.e. text to be printed on a t-shirt. Assigning a SKU to a modifier will turn it into a variant.  See [Variant Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#variant-options) and [Modifier Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#modifier-options) for more information.  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Brand Images                            | Create and manage brand images                                          | | Brand Metafields                        | Create and manage brand metafields                                      | | Brands                                  | Create and manage brands                                                | | Catalog                                 | Create and manage store categories, products, and brands                | | Categories                              | Create and manage categorties                                           | | Category Images                         | Create and manage category images                                       | | Category Metafields                     | Create and manage category metafields                                   | | Product Bulk Pricing Rules              | Create and manage product bulk pricing rules                            | | Product Complex Rules                   | Create and manage product complex rules                                 | | Product Custom Fields                   | Create and manage product custom fields                                 | | Product Images                          | Create and manage product images                                        | | Product Metafields                      | Create and manage product meta fields                                   | | Product Modifier Images                 | Create and manage product modifer images                                | | Product Modifier Values                 | Create and manage product modifier values                               | | Product Modifiers                       | Create and manage product midifiers                                     | | Product Reviews                         | Create and manage product reviews                                       | | Product Variant Option Values           | Create and manage product variant option values                         | | Product Variant Options                 | Create and manage product variant options                               | | Product Variants                        | Create and manage product variants                                      | | Product Videos                          | Create and manage product videos                                        | | Products                                | Create and manage products                                              | | ProductVariant Metafields               | Create and manage product meta flields                                  | | Variants                                | Get and update all variants                                             |  ## Resources  ### Webhooks * [Products](/api-docs/getting-started/webhooks/webhook-events#webhook-events_products) * [Categories](/api-docs/getting-started/webhooks/webhook-events#webhook-events_category) * [SKU](/api-docs/getting-started/webhooks/webhook-events#webhook-events_sku)  ### Related Endpoints * [Catalog API](/api-reference/catalog/catalog-api)
 *
 * OpenAPI spec version: 3.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.21
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'), require('../../src/BCApiClient'), require('../config'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Catalog);
  }
}(this, function(expect, Catalog, BCApiClient, config) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Catalog.ProductsApi(new BCApiClient(config));
  });

  describe('(package)', function() {
    describe('ProductsApi', function() {
      describe('createProduct', function() {
        it('should call createProduct successfully', async function() {
          // const createProductResponse = await instance.createProduct();
          // expect(createProductResponse.ok).to.be(true);
          // expect(createProductResponse.body.data).to.be.an('array');
        });
      });
      describe('deleteProductById', function() {
        it('should call deleteProductById successfully', async function() {
          // const deleteProductByIdResponse = await instance.deleteProductById();
          // expect(deleteProductByIdResponse.ok).to.be(true);
          // expect(deleteProductByIdResponse.body.data).to.be.an('array');
        });
      });
      describe('deleteProducts', function() {
        it('should call deleteProducts successfully', async function() {
          // const deleteProductsResponse = await instance.deleteProducts();
          // expect(deleteProductsResponse.ok).to.be(true);
          // expect(deleteProductsResponse.body.data).to.be.an('array');
        });
      });
      describe('getProductById', function() {
        it('should call getProductById successfully', async function() {
          // const getProductByIdResponse = await instance.getProductById();
          // expect(getProductByIdResponse.ok).to.be(true);
          // expect(getProductByIdResponse.body.data).to.be.an('array');
        });
      });
      describe('getProducts', function() {
        it('should call getProducts successfully', async function() {
          // const getProductsResponse = await instance.getProducts();
          // expect(getProductsResponse.ok).to.be(true);
          // expect(getProductsResponse.body.data).to.be.an('array');
        });
      });
      describe('updateProduct', function() {
        it('should call updateProduct successfully', async function() {
          // const updateProductResponse = await instance.updateProduct();
          // expect(updateProductResponse.ok).to.be(true);
          // expect(updateProductResponse.body.data).to.be.an('array');
        });
      });
      describe('updateProducts', function() {
        it('should call updateProducts successfully', async function() {
          // const updateProductsResponse = await instance.updateProducts();
          // expect(updateProductsResponse.ok).to.be(true);
          // expect(updateProductsResponse.body.data).to.be.an('array');
        });
      });
    });
  });

}));
