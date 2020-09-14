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
    describe('AllOfProductResponseData', function() {
      beforeEach(function() {
        instance = new Catalog.AllOfProductResponseData();
      });

      it('should create an instance of AllOfProductResponseData', function() {
        expect(instance).to.be.a(Catalog.AllOfProductResponseData);
      });

      it('should have the property date_created (base name: "date_created")', function() {
        expect(instance).to.have.property('date_created');
        // expect(instance.date_created).to.be(expectedValueLiteral);
      });

      it('should have the property date_modified (base name: "date_modified")', function() {
        expect(instance).to.have.property('date_modified');
        // expect(instance.date_modified).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property base_variant_id (base name: "base_variant_id")', function() {
        expect(instance).to.have.property('base_variant_id');
        // expect(instance.base_variant_id).to.be(expectedValueLiteral);
      });

      it('should have the property calculated_price (base name: "calculated_price")', function() {
        expect(instance).to.have.property('calculated_price');
        // expect(instance.calculated_price).to.be(expectedValueLiteral);
      });

      it('should have the property options (base name: "options")', function() {
        expect(instance).to.have.property('options');
        // expect(instance.options).to.be(expectedValueLiteral);
      });

      it('should have the property modifiers (base name: "modifiers")', function() {
        expect(instance).to.have.property('modifiers');
        // expect(instance.modifiers).to.be(expectedValueLiteral);
      });

      it('should have the property map_price (base name: "map_price")', function() {
        expect(instance).to.have.property('map_price');
        // expect(instance.map_price).to.be(expectedValueLiteral);
      });

      it('should have the property option_set_id (base name: "option_set_id")', function() {
        expect(instance).to.have.property('option_set_id');
        // expect(instance.option_set_id).to.be(expectedValueLiteral);
      });

      it('should have the property option_set_display (base name: "option_set_display")', function() {
        expect(instance).to.have.property('option_set_display');
        // expect(instance.option_set_display).to.be(expectedValueLiteral);
      });

      it('should have the property variants (base name: "variants")', function() {
        expect(instance).to.have.property('variants');
        // expect(instance.variants).to.be(expectedValueLiteral);
      });

    });
  });

}));
