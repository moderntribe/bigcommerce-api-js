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
    describe('ProductOptionConfigFull', function () {
      beforeEach(function () {
        instance = new Catalog.ProductOptionConfigFull();
      });

      it('should create an instance of ProductOptionConfigFull', function () {
        expect(instance).to.be.a(Catalog.ProductOptionConfigFull);
      });

      it('should have the property default_value (base name: "default_value")', function () {
        expect(instance).to.have.property('default_value');
        // expect(instance.default_value).to.be(expectedValueLiteral);
      });

      it('should have the property checked_by_default (base name: "checked_by_default")', function () {
        expect(instance).to.have.property('checked_by_default');
        // expect(instance.checked_by_default).to.be(expectedValueLiteral);
      });

      it('should have the property checkbox_label (base name: "checkbox_label")', function () {
        expect(instance).to.have.property('checkbox_label');
        // expect(instance.checkbox_label).to.be(expectedValueLiteral);
      });

      it('should have the property date_limited (base name: "date_limited")', function () {
        expect(instance).to.have.property('date_limited');
        // expect(instance.date_limited).to.be(expectedValueLiteral);
      });

      it('should have the property date_limit_mode (base name: "date_limit_mode")', function () {
        expect(instance).to.have.property('date_limit_mode');
        // expect(instance.date_limit_mode).to.be(expectedValueLiteral);
      });

      it('should have the property date_earliest_value (base name: "date_earliest_value")', function () {
        expect(instance).to.have.property('date_earliest_value');
        // expect(instance.date_earliest_value).to.be(expectedValueLiteral);
      });

      it('should have the property date_latest_value (base name: "date_latest_value")', function () {
        expect(instance).to.have.property('date_latest_value');
        // expect(instance.date_latest_value).to.be(expectedValueLiteral);
      });

      it('should have the property file_types_mode (base name: "file_types_mode")', function () {
        expect(instance).to.have.property('file_types_mode');
        // expect(instance.file_types_mode).to.be(expectedValueLiteral);
      });

      it('should have the property file_types_supported (base name: "file_types_supported")', function () {
        expect(instance).to.have.property('file_types_supported');
        // expect(instance.file_types_supported).to.be(expectedValueLiteral);
      });

      it('should have the property file_types_other (base name: "file_types_other")', function () {
        expect(instance).to.have.property('file_types_other');
        // expect(instance.file_types_other).to.be(expectedValueLiteral);
      });

      it('should have the property file_max_size (base name: "file_max_size")', function () {
        expect(instance).to.have.property('file_max_size');
        // expect(instance.file_max_size).to.be(expectedValueLiteral);
      });

      it('should have the property text_characters_limited (base name: "text_characters_limited")', function () {
        expect(instance).to.have.property('text_characters_limited');
        // expect(instance.text_characters_limited).to.be(expectedValueLiteral);
      });

      it('should have the property text_min_length (base name: "text_min_length")', function () {
        expect(instance).to.have.property('text_min_length');
        // expect(instance.text_min_length).to.be(expectedValueLiteral);
      });

      it('should have the property text_max_length (base name: "text_max_length")', function () {
        expect(instance).to.have.property('text_max_length');
        // expect(instance.text_max_length).to.be(expectedValueLiteral);
      });

      it('should have the property text_lines_limited (base name: "text_lines_limited")', function () {
        expect(instance).to.have.property('text_lines_limited');
        // expect(instance.text_lines_limited).to.be(expectedValueLiteral);
      });

      it('should have the property text_max_lines (base name: "text_max_lines")', function () {
        expect(instance).to.have.property('text_max_lines');
        // expect(instance.text_max_lines).to.be(expectedValueLiteral);
      });

      it('should have the property number_limited (base name: "number_limited")', function () {
        expect(instance).to.have.property('number_limited');
        // expect(instance.number_limited).to.be(expectedValueLiteral);
      });

      it('should have the property number_limit_mode (base name: "number_limit_mode")', function () {
        expect(instance).to.have.property('number_limit_mode');
        // expect(instance.number_limit_mode).to.be(expectedValueLiteral);
      });

      it('should have the property number_lowest_value (base name: "number_lowest_value")', function () {
        expect(instance).to.have.property('number_lowest_value');
        // expect(instance.number_lowest_value).to.be(expectedValueLiteral);
      });

      it('should have the property number_highest_value (base name: "number_highest_value")', function () {
        expect(instance).to.have.property('number_highest_value');
        // expect(instance.number_highest_value).to.be(expectedValueLiteral);
      });

      it('should have the property number_integers_only (base name: "number_integers_only")', function () {
        expect(instance).to.have.property('number_integers_only');
        // expect(instance.number_integers_only).to.be(expectedValueLiteral);
      });

      it('should have the property product_list_adjusts_inventory (base name: "product_list_adjusts_inventory")', function () {
        expect(instance).to.have.property('product_list_adjusts_inventory');
        // expect(instance.product_list_adjusts_inventory).to.be(expectedValueLiteral);
      });

      it('should have the property product_list_adjusts_pricing (base name: "product_list_adjusts_pricing")', function () {
        expect(instance).to.have.property('product_list_adjusts_pricing');
        // expect(instance.product_list_adjusts_pricing).to.be(expectedValueLiteral);
      });

      it('should have the property product_list_shipping_calc (base name: "product_list_shipping_calc")', function () {
        expect(instance).to.have.property('product_list_shipping_calc');
        // expect(instance.product_list_shipping_calc).to.be(expectedValueLiteral);
      });
    });
  });
});