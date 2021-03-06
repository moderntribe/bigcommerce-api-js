/*
 * Widgets
 * Widgets API allows developers to programatically inject content into a BigCommerce theme. To learn how to use Widgets, see our [Widgets Overview](/api-docs/storefront/widgets/widgets-overview).
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
    factory(root.expect, root.Widgets);
  }
}(this, function(expect, Widgets) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AllOfinlineResponse200DataItems', function() {
      beforeEach(function() {
        instance = new Widgets.AllOfinlineResponse200DataItems();
      });

      it('should create an instance of AllOfinlineResponse200DataItems', function() {
        expect(instance).to.be.a(Widgets.AllOfinlineResponse200DataItems);
      });

      it('should have the property uuid (base name: "uuid")', function() {
        expect(instance).to.have.property('uuid');
        // expect(instance.uuid).to.be(expectedValueLiteral);
      });

      it('should have the property kind (base name: "kind")', function() {
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property date_created (base name: "date_created")', function() {
        expect(instance).to.have.property('date_created');
        // expect(instance.date_created).to.be(expectedValueLiteral);
      });

      it('should have the property date_modified (base name: "date_modified")', function() {
        expect(instance).to.have.property('date_modified');
        // expect(instance.date_modified).to.be(expectedValueLiteral);
      });

    });
  });

}));
