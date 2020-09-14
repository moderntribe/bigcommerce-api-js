'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * Store Information
 * ### Store Information Reference The Store Information object, and Get Store Information endpoint, manage store profile settings. A Store Information object represents an individual store’s profile and metadata.  ### System Reference The Get a Timestamp endpoint generates a timestamp ping to check the system status.
 *
 * OpenAPI spec version: 2.0
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
    factory(root.expect, root.StoreInformation);
  }
})(undefined, function (expect, StoreInformation) {
  'use strict';

  var instance;

  describe('(package)', function () {
    describe('TimeZone', function () {
      beforeEach(function () {
        instance = new StoreInformation.TimeZone();
      });

      it('should create an instance of TimeZone', function () {
        expect(instance).to.be.a(StoreInformation.TimeZone);
      });

      it('should have the property name (base name: "name")', function () {
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property raw_offset (base name: "raw_offset")', function () {
        expect(instance).to.have.property('raw_offset');
        // expect(instance.raw_offset).to.be(expectedValueLiteral);
      });

      it('should have the property dst_offset (base name: "dst_offset")', function () {
        expect(instance).to.have.property('dst_offset');
        // expect(instance.dst_offset).to.be(expectedValueLiteral);
      });

      it('should have the property dst_correction (base name: "dst_correction")', function () {
        expect(instance).to.have.property('dst_correction');
        // expect(instance.dst_correction).to.be(expectedValueLiteral);
      });

      it('should have the property date_format (base name: "date_format")', function () {
        expect(instance).to.have.property('date_format');
        // expect(instance.date_format).to.be(expectedValueLiteral);
      });
    });
  });
});