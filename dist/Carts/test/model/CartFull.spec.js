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
    describe('CartFull', function () {
      beforeEach(function () {
        instance = new Carts.CartFull();
      });

      it('should create an instance of CartFull', function () {
        expect(instance).to.be.a(Carts.CartFull);
      });

      it('should have the property id (base name: "id")', function () {
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property parent_id (base name: "parent_id")', function () {
        expect(instance).to.have.property('parent_id');
        // expect(instance.parent_id).to.be(expectedValueLiteral);
      });

      it('should have the property customer_id (base name: "customer_id")', function () {
        expect(instance).to.have.property('customer_id');
        // expect(instance.customer_id).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function () {
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function () {
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property tax_included (base name: "tax_included")', function () {
        expect(instance).to.have.property('tax_included');
        // expect(instance.tax_included).to.be(expectedValueLiteral);
      });

      it('should have the property base_amount (base name: "base_amount")', function () {
        expect(instance).to.have.property('base_amount');
        // expect(instance.base_amount).to.be(expectedValueLiteral);
      });

      it('should have the property discount_amount (base name: "discount_amount")', function () {
        expect(instance).to.have.property('discount_amount');
        // expect(instance.discount_amount).to.be(expectedValueLiteral);
      });

      it('should have the property cart_amount (base name: "cart_amount")', function () {
        expect(instance).to.have.property('cart_amount');
        // expect(instance.cart_amount).to.be(expectedValueLiteral);
      });

      it('should have the property coupons (base name: "coupons")', function () {
        expect(instance).to.have.property('coupons');
        // expect(instance.coupons).to.be(expectedValueLiteral);
      });

      it('should have the property discounts (base name: "discounts")', function () {
        expect(instance).to.have.property('discounts');
        // expect(instance.discounts).to.be(expectedValueLiteral);
      });

      it('should have the property line_items (base name: "line_items")', function () {
        expect(instance).to.have.property('line_items');
        // expect(instance.line_items).to.be(expectedValueLiteral);
      });

      it('should have the property created_time (base name: "created_time")', function () {
        expect(instance).to.have.property('created_time');
        // expect(instance.created_time).to.be(expectedValueLiteral);
      });

      it('should have the property updated_time (base name: "updated_time")', function () {
        expect(instance).to.have.property('updated_time');
        // expect(instance.updated_time).to.be(expectedValueLiteral);
      });

      it('should have the property channel_id (base name: "channel_id")', function () {
        expect(instance).to.have.property('channel_id');
        // expect(instance.channel_id).to.be(expectedValueLiteral);
      });
    });
  });
});