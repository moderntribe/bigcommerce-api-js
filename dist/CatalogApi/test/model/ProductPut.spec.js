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
    describe('ProductPut', function () {
      beforeEach(function () {
        instance = new Catalog.ProductPut();
      });

      it('should create an instance of ProductPut', function () {
        expect(instance).to.be.a(Catalog.ProductPut);
      });

      it('should have the property name (base name: "name")', function () {
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function () {
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property sku (base name: "sku")', function () {
        expect(instance).to.have.property('sku');
        // expect(instance.sku).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function () {
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property weight (base name: "weight")', function () {
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

      it('should have the property width (base name: "width")', function () {
        expect(instance).to.have.property('width');
        // expect(instance.width).to.be(expectedValueLiteral);
      });

      it('should have the property depth (base name: "depth")', function () {
        expect(instance).to.have.property('depth');
        // expect(instance.depth).to.be(expectedValueLiteral);
      });

      it('should have the property height (base name: "height")', function () {
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function () {
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property cost_price (base name: "cost_price")', function () {
        expect(instance).to.have.property('cost_price');
        // expect(instance.cost_price).to.be(expectedValueLiteral);
      });

      it('should have the property retail_price (base name: "retail_price")', function () {
        expect(instance).to.have.property('retail_price');
        // expect(instance.retail_price).to.be(expectedValueLiteral);
      });

      it('should have the property sale_price (base name: "sale_price")', function () {
        expect(instance).to.have.property('sale_price');
        // expect(instance.sale_price).to.be(expectedValueLiteral);
      });

      it('should have the property tax_class_id (base name: "tax_class_id")', function () {
        expect(instance).to.have.property('tax_class_id');
        // expect(instance.tax_class_id).to.be(expectedValueLiteral);
      });

      it('should have the property product_tax_code (base name: "product_tax_code")', function () {
        expect(instance).to.have.property('product_tax_code');
        // expect(instance.product_tax_code).to.be(expectedValueLiteral);
      });

      it('should have the property categories (base name: "categories")', function () {
        expect(instance).to.have.property('categories');
        // expect(instance.categories).to.be(expectedValueLiteral);
      });

      it('should have the property brand_id (base name: "brand_id")', function () {
        expect(instance).to.have.property('brand_id');
        // expect(instance.brand_id).to.be(expectedValueLiteral);
      });

      it('should have the property inventory_level (base name: "inventory_level")', function () {
        expect(instance).to.have.property('inventory_level');
        // expect(instance.inventory_level).to.be(expectedValueLiteral);
      });

      it('should have the property inventory_warning_level (base name: "inventory_warning_level")', function () {
        expect(instance).to.have.property('inventory_warning_level');
        // expect(instance.inventory_warning_level).to.be(expectedValueLiteral);
      });

      it('should have the property inventory_tracking (base name: "inventory_tracking")', function () {
        expect(instance).to.have.property('inventory_tracking');
        // expect(instance.inventory_tracking).to.be(expectedValueLiteral);
      });

      it('should have the property fixed_cost_shipping_price (base name: "fixed_cost_shipping_price")', function () {
        expect(instance).to.have.property('fixed_cost_shipping_price');
        // expect(instance.fixed_cost_shipping_price).to.be(expectedValueLiteral);
      });

      it('should have the property is_free_shipping (base name: "is_free_shipping")', function () {
        expect(instance).to.have.property('is_free_shipping');
        // expect(instance.is_free_shipping).to.be(expectedValueLiteral);
      });

      it('should have the property is_visible (base name: "is_visible")', function () {
        expect(instance).to.have.property('is_visible');
        // expect(instance.is_visible).to.be(expectedValueLiteral);
      });

      it('should have the property is_featured (base name: "is_featured")', function () {
        expect(instance).to.have.property('is_featured');
        // expect(instance.is_featured).to.be(expectedValueLiteral);
      });

      it('should have the property related_products (base name: "related_products")', function () {
        expect(instance).to.have.property('related_products');
        // expect(instance.related_products).to.be(expectedValueLiteral);
      });

      it('should have the property warranty (base name: "warranty")', function () {
        expect(instance).to.have.property('warranty');
        // expect(instance.warranty).to.be(expectedValueLiteral);
      });

      it('should have the property bin_picking_number (base name: "bin_picking_number")', function () {
        expect(instance).to.have.property('bin_picking_number');
        // expect(instance.bin_picking_number).to.be(expectedValueLiteral);
      });

      it('should have the property layout_file (base name: "layout_file")', function () {
        expect(instance).to.have.property('layout_file');
        // expect(instance.layout_file).to.be(expectedValueLiteral);
      });

      it('should have the property upc (base name: "upc")', function () {
        expect(instance).to.have.property('upc');
        // expect(instance.upc).to.be(expectedValueLiteral);
      });

      it('should have the property search_keywords (base name: "search_keywords")', function () {
        expect(instance).to.have.property('search_keywords');
        // expect(instance.search_keywords).to.be(expectedValueLiteral);
      });

      it('should have the property availability (base name: "availability")', function () {
        expect(instance).to.have.property('availability');
        // expect(instance.availability).to.be(expectedValueLiteral);
      });

      it('should have the property availability_description (base name: "availability_description")', function () {
        expect(instance).to.have.property('availability_description');
        // expect(instance.availability_description).to.be(expectedValueLiteral);
      });

      it('should have the property gift_wrapping_options_type (base name: "gift_wrapping_options_type")', function () {
        expect(instance).to.have.property('gift_wrapping_options_type');
        // expect(instance.gift_wrapping_options_type).to.be(expectedValueLiteral);
      });

      it('should have the property gift_wrapping_options_list (base name: "gift_wrapping_options_list")', function () {
        expect(instance).to.have.property('gift_wrapping_options_list');
        // expect(instance.gift_wrapping_options_list).to.be(expectedValueLiteral);
      });

      it('should have the property sort_order (base name: "sort_order")', function () {
        expect(instance).to.have.property('sort_order');
        // expect(instance.sort_order).to.be(expectedValueLiteral);
      });

      it('should have the property condition (base name: "condition")', function () {
        expect(instance).to.have.property('condition');
        // expect(instance.condition).to.be(expectedValueLiteral);
      });

      it('should have the property is_condition_shown (base name: "is_condition_shown")', function () {
        expect(instance).to.have.property('is_condition_shown');
        // expect(instance.is_condition_shown).to.be(expectedValueLiteral);
      });

      it('should have the property order_quantity_minimum (base name: "order_quantity_minimum")', function () {
        expect(instance).to.have.property('order_quantity_minimum');
        // expect(instance.order_quantity_minimum).to.be(expectedValueLiteral);
      });

      it('should have the property order_quantity_maximum (base name: "order_quantity_maximum")', function () {
        expect(instance).to.have.property('order_quantity_maximum');
        // expect(instance.order_quantity_maximum).to.be(expectedValueLiteral);
      });

      it('should have the property page_title (base name: "page_title")', function () {
        expect(instance).to.have.property('page_title');
        // expect(instance.page_title).to.be(expectedValueLiteral);
      });

      it('should have the property meta_keywords (base name: "meta_keywords")', function () {
        expect(instance).to.have.property('meta_keywords');
        // expect(instance.meta_keywords).to.be(expectedValueLiteral);
      });

      it('should have the property meta_description (base name: "meta_description")', function () {
        expect(instance).to.have.property('meta_description');
        // expect(instance.meta_description).to.be(expectedValueLiteral);
      });

      it('should have the property view_count (base name: "view_count")', function () {
        expect(instance).to.have.property('view_count');
        // expect(instance.view_count).to.be(expectedValueLiteral);
      });

      it('should have the property preorder_release_date (base name: "preorder_release_date")', function () {
        expect(instance).to.have.property('preorder_release_date');
        // expect(instance.preorder_release_date).to.be(expectedValueLiteral);
      });

      it('should have the property preorder_message (base name: "preorder_message")', function () {
        expect(instance).to.have.property('preorder_message');
        // expect(instance.preorder_message).to.be(expectedValueLiteral);
      });

      it('should have the property is_preorder_only (base name: "is_preorder_only")', function () {
        expect(instance).to.have.property('is_preorder_only');
        // expect(instance.is_preorder_only).to.be(expectedValueLiteral);
      });

      it('should have the property is_price_hidden (base name: "is_price_hidden")', function () {
        expect(instance).to.have.property('is_price_hidden');
        // expect(instance.is_price_hidden).to.be(expectedValueLiteral);
      });

      it('should have the property price_hidden_label (base name: "price_hidden_label")', function () {
        expect(instance).to.have.property('price_hidden_label');
        // expect(instance.price_hidden_label).to.be(expectedValueLiteral);
      });

      it('should have the property custom_url (base name: "custom_url")', function () {
        expect(instance).to.have.property('custom_url');
        // expect(instance.custom_url).to.be(expectedValueLiteral);
      });

      it('should have the property open_graph_type (base name: "open_graph_type")', function () {
        expect(instance).to.have.property('open_graph_type');
        // expect(instance.open_graph_type).to.be(expectedValueLiteral);
      });

      it('should have the property open_graph_title (base name: "open_graph_title")', function () {
        expect(instance).to.have.property('open_graph_title');
        // expect(instance.open_graph_title).to.be(expectedValueLiteral);
      });

      it('should have the property open_graph_description (base name: "open_graph_description")', function () {
        expect(instance).to.have.property('open_graph_description');
        // expect(instance.open_graph_description).to.be(expectedValueLiteral);
      });

      it('should have the property open_graph_use_meta_description (base name: "open_graph_use_meta_description")', function () {
        expect(instance).to.have.property('open_graph_use_meta_description');
        // expect(instance.open_graph_use_meta_description).to.be(expectedValueLiteral);
      });

      it('should have the property open_graph_use_product_name (base name: "open_graph_use_product_name")', function () {
        expect(instance).to.have.property('open_graph_use_product_name');
        // expect(instance.open_graph_use_product_name).to.be(expectedValueLiteral);
      });

      it('should have the property open_graph_use_image (base name: "open_graph_use_image")', function () {
        expect(instance).to.have.property('open_graph_use_image');
        // expect(instance.open_graph_use_image).to.be(expectedValueLiteral);
      });

      it('should have the property brand_name or brand_id (base name: "brand_name or brand_id")', function () {
        expect(instance).to.have.property('brand_name or brand_id');
        // expect(instance.brand_name or brand_id).to.be(expectedValueLiteral);
      });

      it('should have the property gtin (base name: "gtin")', function () {
        expect(instance).to.have.property('gtin');
        // expect(instance.gtin).to.be(expectedValueLiteral);
      });

      it('should have the property mpn (base name: "mpn")', function () {
        expect(instance).to.have.property('mpn');
        // expect(instance.mpn).to.be(expectedValueLiteral);
      });

      it('should have the property reviews_rating_sum (base name: "reviews_rating_sum")', function () {
        expect(instance).to.have.property('reviews_rating_sum');
        // expect(instance.reviews_rating_sum).to.be(expectedValueLiteral);
      });

      it('should have the property reviews_count (base name: "reviews_count")', function () {
        expect(instance).to.have.property('reviews_count');
        // expect(instance.reviews_count).to.be(expectedValueLiteral);
      });

      it('should have the property total_sold (base name: "total_sold")', function () {
        expect(instance).to.have.property('total_sold');
        // expect(instance.total_sold).to.be(expectedValueLiteral);
      });

      it('should have the property custom_fields (base name: "custom_fields")', function () {
        expect(instance).to.have.property('custom_fields');
        // expect(instance.custom_fields).to.be(expectedValueLiteral);
      });

      it('should have the property bulk_pricing_rules (base name: "bulk_pricing_rules")', function () {
        expect(instance).to.have.property('bulk_pricing_rules');
        // expect(instance.bulk_pricing_rules).to.be(expectedValueLiteral);
      });

      it('should have the property images (base name: "images")', function () {
        expect(instance).to.have.property('images');
        // expect(instance.images).to.be(expectedValueLiteral);
      });

      it('should have the property primary_image (base name: "primary_image")', function () {
        expect(instance).to.have.property('primary_image');
        // expect(instance.primary_image).to.be(expectedValueLiteral);
      });

      it('should have the property videos (base name: "videos")', function () {
        expect(instance).to.have.property('videos');
        // expect(instance.videos).to.be(expectedValueLiteral);
      });

      it('should have the property variants (base name: "variants")', function () {
        expect(instance).to.have.property('variants');
        // expect(instance.variants).to.be(expectedValueLiteral);
      });
    });
  });
});