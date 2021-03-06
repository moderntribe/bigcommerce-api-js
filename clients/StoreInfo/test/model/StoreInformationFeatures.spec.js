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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StoreInformation);
  }
}(this, function(expect, StoreInformation) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('StoreInformationFeatures', function() {
      beforeEach(function() {
        instance = new StoreInformation.StoreInformationFeatures();
      });

      it('should create an instance of StoreInformationFeatures', function() {
        expect(instance).to.be.a(StoreInformation.StoreInformationFeatures);
      });

      it('should have the property stencil_enabled (base name: "stencil_enabled")', function() {
        expect(instance).to.have.property('stencil_enabled');
        // expect(instance.stencil_enabled).to.be(expectedValueLiteral);
      });

      it('should have the property sitewidehttps_enabled (base name: "sitewidehttps_enabled")', function() {
        expect(instance).to.have.property('sitewidehttps_enabled');
        // expect(instance.sitewidehttps_enabled).to.be(expectedValueLiteral);
      });

      it('should have the property facebook_catalog_id (base name: "facebook_catalog_id")', function() {
        expect(instance).to.have.property('facebook_catalog_id');
        // expect(instance.facebook_catalog_id).to.be(expectedValueLiteral);
      });

      it('should have the property checkout_type (base name: "checkout_type")', function() {
        expect(instance).to.have.property('checkout_type');
        // expect(instance.checkout_type).to.be(expectedValueLiteral);
      });

    });
  });

}));
