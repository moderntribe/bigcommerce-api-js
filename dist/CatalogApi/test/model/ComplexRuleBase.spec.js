'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Catalog);
  }
})(undefined, function (expect, Catalog) {
  'use strict';

  var instance;

  describe('(package)', function () {
    describe('ComplexRuleBase', function () {
      beforeEach(function () {
        instance = new Catalog.ComplexRuleBase();
      });

      it('should create an instance of ComplexRuleBase', function () {
        expect(instance).to.be.a(Catalog.ComplexRuleBase);
      });

      it('should have the property id (base name: "id")', function () {
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property product_id (base name: "product_id")', function () {
        expect(instance).to.have.property('product_id');
        // expect(instance.product_id).to.be(expectedValueLiteral);
      });

      it('should have the property sort_order (base name: "sort_order")', function () {
        expect(instance).to.have.property('sort_order');
        // expect(instance.sort_order).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function () {
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property stop (base name: "stop")', function () {
        expect(instance).to.have.property('stop');
        // expect(instance.stop).to.be(expectedValueLiteral);
      });

      it('should have the property purchasing_disabled (base name: "purchasing_disabled")', function () {
        expect(instance).to.have.property('purchasing_disabled');
        // expect(instance.purchasing_disabled).to.be(expectedValueLiteral);
      });

      it('should have the property purchasing_disabled_message (base name: "purchasing_disabled_message")', function () {
        expect(instance).to.have.property('purchasing_disabled_message');
        // expect(instance.purchasing_disabled_message).to.be(expectedValueLiteral);
      });

      it('should have the property purchasing_hidden (base name: "purchasing_hidden")', function () {
        expect(instance).to.have.property('purchasing_hidden');
        // expect(instance.purchasing_hidden).to.be(expectedValueLiteral);
      });

      it('should have the property image_url (base name: "image_url")', function () {
        expect(instance).to.have.property('image_url');
        // expect(instance.image_url).to.be(expectedValueLiteral);
      });

      it('should have the property price_adjuster (base name: "price_adjuster")', function () {
        expect(instance).to.have.property('price_adjuster');
        // expect(instance.price_adjuster).to.be(expectedValueLiteral);
      });

      it('should have the property weight_adjuster (base name: "weight_adjuster")', function () {
        expect(instance).to.have.property('weight_adjuster');
        // expect(instance.weight_adjuster).to.be(expectedValueLiteral);
      });

      it('should have the property conditions (base name: "conditions")', function () {
        expect(instance).to.have.property('conditions');
        // expect(instance.conditions).to.be(expectedValueLiteral);
      });
    });
  });
});