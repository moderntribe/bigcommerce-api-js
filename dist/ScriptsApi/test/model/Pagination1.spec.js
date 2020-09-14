'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * Scripts
 *  - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints)  The BigCommerce Scripts API can be used to add a script to a store's page. Some use cases: * Insert tracking codes * Storefront single click applications * Live chat, support plugins * Theme extension or connector apps  To learn more about Scripts, see [here](/api-docs/scripts/scripts-overview).   ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Checkout Content<sup>1</sup>                             | modify     | `store_content_checkout`                      | | Checkout Content<sup>1</sup>                             | read-only  | `store_content_checkout_read_only`            | | Content                                       | modify     | `store_v2_content`                            | | Content                                       | read-only  | `store_v2_content_read_only`                  |  1. `Checkout Content` scopes are required to create or read scripts on the checkout page.  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Scripts                                 | Add client-side code to a store                                         |
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
    factory(root.expect, root.Scripts);
  }
})(undefined, function (expect, Scripts) {
  'use strict';

  var instance;

  describe('(package)', function () {
    describe('Pagination1', function () {
      beforeEach(function () {
        instance = new Scripts.Pagination1();
      });

      it('should create an instance of Pagination1', function () {
        expect(instance).to.be.a(Scripts.Pagination1);
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

      it('should have the property links (base name: "links")', function () {
        expect(instance).to.have.property('links');
        // expect(instance.links).to.be(expectedValueLiteral);
      });
    });
  });
});