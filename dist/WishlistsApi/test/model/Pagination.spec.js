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
    describe('Pagination', function () {
      beforeEach(function () {
        instance = new Wishlist.Pagination();
      });

      it('should create an instance of Pagination', function () {
        expect(instance).to.be.a(Wishlist.Pagination);
      });

      it('should have the property total (base name: "total")', function () {
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property count (base name: "count")', function () {
        expect(instance).to.have.property('count');
        // expect(instance.count).to.be(expectedValueLiteral);
      });

      it('should have the property per_page (base name: "per_page")', function () {
        expect(instance).to.have.property('per_page');
        // expect(instance.per_page).to.be(expectedValueLiteral);
      });

      it('should have the property current_page (base name: "current_page")', function () {
        expect(instance).to.have.property('current_page');
        // expect(instance.current_page).to.be(expectedValueLiteral);
      });

      it('should have the property total_pages (base name: "total_pages")', function () {
        expect(instance).to.have.property('total_pages');
        // expect(instance.total_pages).to.be(expectedValueLiteral);
      });
    });
  });
});