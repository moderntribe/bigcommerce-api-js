'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Widgets);
  }
})(undefined, function (expect, Widgets) {
  'use strict';

  var instance;

  describe('(package)', function () {
    describe('PlacementBase', function () {
      beforeEach(function () {
        instance = new Widgets.PlacementBase();
      });

      it('should create an instance of PlacementBase', function () {
        expect(instance).to.be.a(Widgets.PlacementBase);
      });

      it('should have the property entity_id (base name: "entity_id")', function () {
        expect(instance).to.have.property('entity_id');
        // expect(instance.entity_id).to.be(expectedValueLiteral);
      });

      it('should have the property sort_order (base name: "sort_order")', function () {
        expect(instance).to.have.property('sort_order');
        // expect(instance.sort_order).to.be(expectedValueLiteral);
      });

      it('should have the property region (base name: "region")', function () {
        expect(instance).to.have.property('region');
        // expect(instance.region).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function () {
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });
    });
  });
});