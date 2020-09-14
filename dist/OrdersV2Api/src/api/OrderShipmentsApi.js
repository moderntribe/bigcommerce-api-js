'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Orders V2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * `/orders`endpoints integrate with point-of-sale, shipping, distribution, and inventory-management systems.  ## Order The Order object contains a record of the purchase agreement between a shopper and a merchant. To learn more about creating orders, see [Orders API Guide](/api-docs/orders/orders-api-overview).  ### Currency Fields  * `currency_code` - the display currency used to present prices to the shopper on the storefront. * `currency_exchange_rate`: the exchange rate between the store's default currency and the display currency; when the order is created by means of the V2 endpoints, this value is always 1 (only in the storefront this value can be different to 1).  The following additional fields are returned on orders when Multi-Currency is enabled on the store:  * `store_default_currency_code` - the store's default currency * `store_default_to_transactional_exchange_rate` - the exchange rate between the store's default currency and the transactional currency used in the order.  **Example:**  ```json {   //...   \"currency_id\": 4,   \"currency_code\": \"EUR\",   \"currency_exchange_rate\": 1,   \"default_currency_id\": 4,   \"default_currency_code\": \"EUR\",   \"store_default_currency_code: \"USD\",   \"store_default_to_transactional_exchange_rate\": \"100.0000000000\"   //... }  ```  ## Order Coupons Coupon code applied to an order.  ## Order Messages Messages associated with an order.  ## Order Products Product line items belonging to an order.  ## Order Shipping Addresses Customer shipping address belonging to an order.  ## Order Statuses Each order status represents a state in the order-fulfillment workflow.  ## Order Taxes Each tax applied to an order. This information can be useful for reporting purposes. All values are read-only.  ## Order Shipments Tracks a package consignment from an order that is shipped from the seller to the buyer.  ## Order Shipping Addresses Quotes Read Only. Gets all shipping quotes from an order.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _OrderCount = require('../model/OrderCount1');

var _OrderCount2 = _interopRequireDefault(_OrderCount);

var _OrderShipment = require('../model/OrderShipment1');

var _OrderShipment2 = _interopRequireDefault(_OrderShipment);

var _OrderShipment3 = require('../model/OrderShipment2');

var _OrderShipment4 = _interopRequireDefault(_OrderShipment3);

var _OrderShipmentPost = require('../model/OrderShipmentPost1');

var _OrderShipmentPost2 = _interopRequireDefault(_OrderShipmentPost);

var _OrderShipmentPost3 = require('../model/OrderShipmentPost2');

var _OrderShipmentPost4 = _interopRequireDefault(_OrderShipmentPost3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* OrderShipments service.
* @module api/OrderShipmentsApi
* @version 2.0
*/
var OrderShipmentsApi = function () {

  /**
  * Constructs a new OrderShipmentsApi. 
  * @alias module:api/OrderShipmentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OrderShipmentsApi(apiClient) {
    _classCallCheck(this, OrderShipmentsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createOrderShipments operation.
   * @callback module:api/OrderShipmentsApi~createOrderShipmentsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/OrderShipment2} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a New Order Shipment
   * Creates an *Order Shipment*. For more details, see [Shipping an Order](/api-docs/orders/orders-api-overview#shipping-an-order).  **Required Fields** *   order_address_id *   items  **Usage Notes**  Presuming that a valid carrier code is used, a tracking link is generated if either &#x60;shipping_provider&#x60; or &#x60;tracking_carrier&#x60; is supplied alongside a tracking number. Providing only the tracking number will result in an unclickable text in the customer facing email.  Acceptable values for &#x60;shipping_provider&#x60; include an empty string (&#x60;\&quot;\&quot;&#x60;), auspost, canadapost, endicia, usps, fedex, ups, upsready, upsonline, or shipperhq.  Acceptable values for &#x60;tracking_carrier&#x60; include an empty string (&#x60;\&quot;\&quot;&#x60;) or one of the valid tracking-carrier values viewable [here](https://docs.google.com/spreadsheets/d/1w9c_aECSCGyf-oOrvGeUniDl-ARGKemfZl0qSsav8D4/pubhtml?gid&#x3D;0&amp;single&#x3D;true) and downloadable as a .CSV file [here](https://docs.google.com/spreadsheets/d/1mTueEynfcEmwsU2y2Jd2MX-8GKwNZrmlRMBcIElg9aY/pub?gid&#x3D;0&amp;single&#x3D;true&amp;output&#x3D;csv). 
   * @param {module:api/OrderShipmentsApi~createOrderShipmentsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/OrderShipment2}
   */


  _createClass(OrderShipmentsApi, [{
    key: 'createOrderShipments',
    value: function createOrderShipments(body, orderId, accept, contentType, callback) {
      var postBody = body;

      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrderShipment4.default;

      return this.apiClient.callApi('/orders/{order_id}/shipments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteAllOrderShipments operation.
     * @callback module:api/OrderShipmentsApi~deleteAllOrderShipmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete All Order Shipments
     * Deletes all shipments associated with an order.
     * @param {module:api/OrderShipmentsApi~deleteAllOrderShipmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteAllOrderShipments',
    value: function deleteAllOrderShipments(orderId, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi('/orders/{order_id}/shipments', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteOrderShipment operation.
     * @callback module:api/OrderShipmentsApi~deleteOrderShipmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an Order Shipment
     * Deletes a shipment associated with an order.
     * @param {module:api/OrderShipmentsApi~deleteOrderShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteOrderShipment',
    value: function deleteOrderShipment(orderId, shipmentId, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'order_id': orderId,
        'shipment_id': shipmentId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi('/orders/{order_id}/shipments/{shipment_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getAllOrderShipments operation.
     * @callback module:api/OrderShipmentsApi~getAllOrderShipmentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderShipment1>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a List of Order Shipments
     * Gets a list of all shipments on an order.
     * @param {Object} opts Optional parameters
     * @param {module:api/OrderShipmentsApi~getAllOrderShipmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderShipment1>}
     */

  }, {
    key: 'getAllOrderShipments',
    value: function getAllOrderShipments(orderId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_OrderShipment2.default];

      return this.apiClient.callApi('/orders/{order_id}/shipments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getCountShipments operation.
     * @callback module:api/OrderShipmentsApi~getCountShipmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderCount1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Count of Shipments Per Order
     * Gets a count of the number of shipments that have been made for a single order.
     * @param {module:api/OrderShipmentsApi~getCountShipmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderCount1}
     */

  }, {
    key: 'getCountShipments',
    value: function getCountShipments(orderId, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['*/*', 'application/json'];
      var returnType = _OrderCount2.default;

      return this.apiClient.callApi('/orders/{order_id}/shipments/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getOrderShipment operation.
     * @callback module:api/OrderShipmentsApi~getOrderShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderShipment2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Shipment
     * Gets an order shipment. 
     * @param {module:api/OrderShipmentsApi~getOrderShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderShipment2}
     */

  }, {
    key: 'getOrderShipment',
    value: function getOrderShipment(orderId, shipmentId, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'order_id': orderId,
        'shipment_id': shipmentId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderShipment4.default;

      return this.apiClient.callApi('/orders/{order_id}/shipments/{shipment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateOrderShipment operation.
     * @callback module:api/OrderShipmentsApi~updateOrderShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderShipment2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Shipment
     * Updates an existing shipment associated with an order.
     * @param {module:api/OrderShipmentsApi~updateOrderShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderShipment2}
     */

  }, {
    key: 'updateOrderShipment',
    value: function updateOrderShipment(body, orderId, shipmentId, accept, contentType, callback) {
      var postBody = body;

      var pathParams = {
        'order_id': orderId,
        'shipment_id': shipmentId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*', 'application/json'];
      var returnType = _OrderShipment4.default;

      return this.apiClient.callApi('/orders/{order_id}/shipments/{shipment_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return OrderShipmentsApi;
}();

exports.default = OrderShipmentsApi;