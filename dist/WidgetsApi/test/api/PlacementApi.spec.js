'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
    factory(require('expect.js'), require('../../src/index'), require('../../src/BCApiClient'), require('../config'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Widgets);
  }
})(undefined, function (expect, Widgets, BCApiClient, config) {
  'use strict';

  var instance;

  beforeEach(function () {
    instance = new Widgets.PlacementApi(new BCApiClient(config));
  });

  describe('(package)', function () {
    describe('PlacementApi', function () {
      describe('createPlacement', function () {
        it('should call createPlacement successfully', _asyncToGenerator(function* () {
          // const createPlacementResponse = await instance.createPlacement();
          // expect(createPlacementResponse.ok).to.be(true);
          // expect(createPlacementResponse.body.data).to.be.an('array');
        }));
      });
      describe('deletePlacement', function () {
        it('should call deletePlacement successfully', _asyncToGenerator(function* () {
          // const deletePlacementResponse = await instance.deletePlacement();
          // expect(deletePlacementResponse.ok).to.be(true);
          // expect(deletePlacementResponse.body.data).to.be.an('array');
        }));
      });
      describe('getPlacement', function () {
        it('should call getPlacement successfully', _asyncToGenerator(function* () {
          // const getPlacementResponse = await instance.getPlacement();
          // expect(getPlacementResponse.ok).to.be(true);
          // expect(getPlacementResponse.body.data).to.be.an('array');
        }));
      });
      describe('getPlacements', function () {
        it('should call getPlacements successfully', _asyncToGenerator(function* () {
          var response = yield instance.getPlacements();
          expect(response.ok).to.be(true);
          expect(response.body.data).to.be.an('array');
        }));
      });
      describe('updatePlacement', function () {
        it('should call updatePlacement successfully', _asyncToGenerator(function* () {
          // const updatePlacementResponse = await instance.updatePlacement();
          // expect(updatePlacementResponse.ok).to.be(true);
          // expect(updatePlacementResponse.body.data).to.be.an('array');
        }));
      });
    });
  });
});