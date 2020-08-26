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
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Catalog);
  }
}(this, function(expect, Catalog) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CategoryFull1', function() {
      beforeEach(function() {
        instance = new Catalog.CategoryFull1();
      });

      it('should create an instance of CategoryFull1', function() {
        expect(instance).to.be.a(Catalog.CategoryFull1);
      });

      it('should have the property id (base name: "id")', function() {
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property parent_id (base name: "parent_id")', function() {
        expect(instance).to.have.property('parent_id');
        // expect(instance.parent_id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property views (base name: "views")', function() {
        expect(instance).to.have.property('views');
        // expect(instance.views).to.be(expectedValueLiteral);
      });

      it('should have the property sort_order (base name: "sort_order")', function() {
        expect(instance).to.have.property('sort_order');
        // expect(instance.sort_order).to.be(expectedValueLiteral);
      });

      it('should have the property page_title (base name: "page_title")', function() {
        expect(instance).to.have.property('page_title');
        // expect(instance.page_title).to.be(expectedValueLiteral);
      });

      it('should have the property search_keywords (base name: "search_keywords")', function() {
        expect(instance).to.have.property('search_keywords');
        // expect(instance.search_keywords).to.be(expectedValueLiteral);
      });

      it('should have the property meta_keywords (base name: "meta_keywords")', function() {
        expect(instance).to.have.property('meta_keywords');
        // expect(instance.meta_keywords).to.be(expectedValueLiteral);
      });

      it('should have the property meta_description (base name: "meta_description")', function() {
        expect(instance).to.have.property('meta_description');
        // expect(instance.meta_description).to.be(expectedValueLiteral);
      });

      it('should have the property layout_file (base name: "layout_file")', function() {
        expect(instance).to.have.property('layout_file');
        // expect(instance.layout_file).to.be(expectedValueLiteral);
      });

      it('should have the property is_visible (base name: "is_visible")', function() {
        expect(instance).to.have.property('is_visible');
        // expect(instance.is_visible).to.be(expectedValueLiteral);
      });

      it('should have the property default_product_sort (base name: "default_product_sort")', function() {
        expect(instance).to.have.property('default_product_sort');
        // expect(instance.default_product_sort).to.be(expectedValueLiteral);
      });

      it('should have the property image_url (base name: "image_url")', function() {
        expect(instance).to.have.property('image_url');
        // expect(instance.image_url).to.be(expectedValueLiteral);
      });

      it('should have the property custom_url (base name: "custom_url")', function() {
        expect(instance).to.have.property('custom_url');
        // expect(instance.custom_url).to.be(expectedValueLiteral);
      });

    });
  });

}));