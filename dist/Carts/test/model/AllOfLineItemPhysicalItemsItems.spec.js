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
    describe('AllOfLineItemPhysicalItemsItems', function () {
      beforeEach(function () {
        instance = new Carts.AllOfLineItemPhysicalItemsItems();
      });

      it('should create an instance of AllOfLineItemPhysicalItemsItems', function () {
        expect(instance).to.be.a(Carts.AllOfLineItemPhysicalItemsItems);
      });

      it('should have the property is_require_shipping (base name: "is_require_shipping")', function () {
        expect(instance).to.have.property('is_require_shipping');
        // expect(instance.is_require_shipping).to.be(expectedValueLiteral);
      });

      it('should have the property gift_wrapping (base name: "gift_wrapping")', function () {
        expect(instance).to.have.property('gift_wrapping');
        // expect(instance.gift_wrapping).to.be(expectedValueLiteral);
      });
    });
  });
});