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
    describe('WishlistItemPost', function () {
      beforeEach(function () {
        instance = new Wishlist.WishlistItemPost();
      });

      it('should create an instance of WishlistItemPost', function () {
        expect(instance).to.be.a(Wishlist.WishlistItemPost);
      });

      it('should have the property product_id (base name: "product_id")', function () {
        expect(instance).to.have.property('product_id');
        // expect(instance.product_id).to.be(expectedValueLiteral);
      });

      it('should have the property variant_id (base name: "variant_id")', function () {
        expect(instance).to.have.property('variant_id');
        // expect(instance.variant_id).to.be(expectedValueLiteral);
      });
    });
  });
});