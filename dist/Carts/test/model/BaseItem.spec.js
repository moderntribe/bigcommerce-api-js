'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * Carts
 * ### Cart Allows for a cart to be created using BigCommerce cart logic. The existing BigCommerce front end cart can be bypassed.  Notes: - A **cart** `id` is the same as a **checkout** `id`. - A cart can be created by adding an existing **catalog item** or a **custom item**. - Carts are valid for 30 days from the last modification. This can include creating the cart or editing the cart. - Redirect URLs can be generated only from carts created using the Server to Server Cart API. To restore a cart that was created on the storefront, either by a shopper or the Storefront Cart API, first recreate the cart using the Server to Server Cart API.
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
    factory(root.expect, root.Carts);
  }
})(undefined, function (expect, Carts) {
  'use strict';

  var instance;

  describe('(package)', function () {
    describe('BaseItem', function () {
      beforeEach(function () {
        instance = new Carts.BaseItem();
      });

      it('should create an instance of BaseItem', function () {
        expect(instance).to.be.a(Carts.BaseItem);
      });

      it('should have the property id (base name: "id")', function () {
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property variant_id (base name: "variant_id")', function () {
        expect(instance).to.have.property('variant_id');
        // expect(instance.variant_id).to.be(expectedValueLiteral);
      });

      it('should have the property product_id (base name: "product_id")', function () {
        expect(instance).to.have.property('product_id');
        // expect(instance.product_id).to.be(expectedValueLiteral);
      });

      it('should have the property sku (base name: "sku")', function () {
        expect(instance).to.have.property('sku');
        // expect(instance.sku).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function () {
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function () {
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function () {
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property is_taxable (base name: "is_taxable")', function () {
        expect(instance).to.have.property('is_taxable');
        // expect(instance.is_taxable).to.be(expectedValueLiteral);
      });

      it('should have the property image_url (base name: "image_url")', function () {
        expect(instance).to.have.property('image_url');
        // expect(instance.image_url).to.be(expectedValueLiteral);
      });

      it('should have the property discounts (base name: "discounts")', function () {
        expect(instance).to.have.property('discounts');
        // expect(instance.discounts).to.be(expectedValueLiteral);
      });

      it('should have the property coupons (base name: "coupons")', function () {
        expect(instance).to.have.property('coupons');
        // expect(instance.coupons).to.be(expectedValueLiteral);
      });

      it('should have the property discount_amount (base name: "discount_amount")', function () {
        expect(instance).to.have.property('discount_amount');
        // expect(instance.discount_amount).to.be(expectedValueLiteral);
      });

      it('should have the property coupon_amount (base name: "coupon_amount")', function () {
        expect(instance).to.have.property('coupon_amount');
        // expect(instance.coupon_amount).to.be(expectedValueLiteral);
      });

      it('should have the property list_price (base name: "list_price")', function () {
        expect(instance).to.have.property('list_price');
        // expect(instance.list_price).to.be(expectedValueLiteral);
      });

      it('should have the property sale_price (base name: "sale_price")', function () {
        expect(instance).to.have.property('sale_price');
        // expect(instance.sale_price).to.be(expectedValueLiteral);
      });

      it('should have the property extended_list_price (base name: "extended_list_price")', function () {
        expect(instance).to.have.property('extended_list_price');
        // expect(instance.extended_list_price).to.be(expectedValueLiteral);
      });

      it('should have the property extended_sale_price (base name: "extended_sale_price")', function () {
        expect(instance).to.have.property('extended_sale_price');
        // expect(instance.extended_sale_price).to.be(expectedValueLiteral);
      });

      it('should have the property options (base name: "options")', function () {
        expect(instance).to.have.property('options');
        // expect(instance.options).to.be(expectedValueLiteral);
      });
    });
  });
});