'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * Wishlist
 * ## Wishlist API    The Wishlist API allows a developer to create and manage customer [Wishlists](https://support.bigcommerce.com/s/article/Wishlists). A Wishlist allows you to see what your customers are interested in and saving on the store. With this information you’ll be able to create targeted campaigns to help merchants grow their business. Customer API OAuth scopes give you access to Wishlists API. See [OAuth Scopes](https://developer.bigcommerce.com/api-docs/getting-started/authentication#authentication_oauth-scopes).
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
    factory(root.expect, root.Wishlist);
  }
})(undefined, function (expect, Wishlist) {
  'use strict';

  var instance;

  describe('(package)', function () {
    describe('WishlistFull', function () {
      beforeEach(function () {
        instance = new Wishlist.WishlistFull();
      });

      it('should create an instance of WishlistFull', function () {
        expect(instance).to.be.a(Wishlist.WishlistFull);
      });

      it('should have the property id (base name: "id")', function () {
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property customer_id (base name: "customer_id")', function () {
        expect(instance).to.have.property('customer_id');
        // expect(instance.customer_id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function () {
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property is_public (base name: "is_public")', function () {
        expect(instance).to.have.property('is_public');
        // expect(instance.is_public).to.be(expectedValueLiteral);
      });

      it('should have the property token (base name: "token")', function () {
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property items (base name: "items")', function () {
        expect(instance).to.have.property('items');
        // expect(instance.items).to.be(expectedValueLiteral);
      });
    });
  });
});