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

var _OrderFull = require('../model/OrderFull1');

var _OrderFull2 = _interopRequireDefault(_OrderFull);

var _OrderFull3 = require('../model/OrderFull2');

var _OrderFull4 = _interopRequireDefault(_OrderFull3);

var _OrderPost = require('../model/OrderPost1');

var _OrderPost2 = _interopRequireDefault(_OrderPost);

var _OrderPut = require('../model/OrderPut1');

var _OrderPut2 = _interopRequireDefault(_OrderPut);

var _OrdersCountFull = require('../model/OrdersCountFull1');

var _OrdersCountFull2 = _interopRequireDefault(_OrdersCountFull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Orders service.
* @module api/OrdersApi
* @version 2.0
*/
var OrdersApi = function () {

  /**
  * Constructs a new OrdersApi. 
  * @alias module:api/OrdersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OrdersApi(apiClient) {
    _classCallCheck(this, OrdersApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the createAnOrder operation.
   * @callback module:api/OrdersApi~createAnOrderCallback
   * @param {String} error Error message, if any.
   * @param {module:model/OrderFull1} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create an Order
   * Creates an *Order*. To learn more about creating or updating orders, see [Orders Overview](/api-docs/orders/orders-api-overview).  An order can be created with an existing catalog product or a custom product.  **Required Fields**  *   products *   billing_address
   * @param {module:api/OrdersApi~createAnOrderCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/OrderFull1}
   */


  _createClass(OrdersApi, [{
    key: 'createAnOrder',
    value: function createAnOrder(body, accept, contentType, callback) {
      var postBody = body;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*', 'application/json', 'Multiple Items'];
      var returnType = _OrderFull2.default;

      return this.apiClient.callApi('/orders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteAllOrders operation.
     * @callback module:api/OrdersApi~deleteAllOrdersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete All Orders
     * Archives all orders.
     * @param {module:api/OrdersApi~deleteAllOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteAllOrders',
    value: function deleteAllOrders(accept, contentType, callback) {
      var postBody = null;

      var pathParams = {};
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

      return this.apiClient.callApi('/orders', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteAnOrder operation.
     * @callback module:api/OrdersApi~deleteAnOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Archive an Order
     * Archives an order.  Any attempt to archive an order on a store with automatic tax enabled will fail, and will return &#x60;405 Method not allowed.&#x60;
     * @param {Object} opts Optional parameters
     * @param {module:api/OrdersApi~deleteAnOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: 'deleteAnOrder',
    value: function deleteAnOrder(orderId, accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi('/orders/{order_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getAllOrders operation.
     * @callback module:api/OrdersApi~getAllOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderFull2>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Orders
     * Gets a list of orders using the filter query.   **Notes**  The default sort is by order id, from lowest to highest.
     * @param {Object} opts Optional parameters
     * @param {module:api/OrdersApi~getAllOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderFull2>}
     */

  }, {
    key: 'getAllOrders',
    value: function getAllOrders(accept, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'min_id': opts['minId'],
        'max_id': opts['maxId'],
        'min_total': opts['minTotal'],
        'max_total': opts['maxTotal'],
        'customer_id': opts['customerId'],
        'email': opts['email'],
        'status_id': opts['statusId'],
        'cart_id': opts['cartId'],
        'payment_method': opts['paymentMethod'],
        'min_date_created': opts['minDateCreated'],
        'max_date_created': opts['maxDateCreated'],
        'min_date_modified': opts['minDateModified'],
        'max_date_modified': opts['maxDateModified'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'is_deleted': opts['isDeleted'],
        'channel_id': opts['channelId']
      };
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_OrderFull4.default];

      return this.apiClient.callApi('/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getAnOrder operation.
     * @callback module:api/OrdersApi~getAnOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderFull1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an Order
     * Gets an *Order*. To learn more about creating or updating orders, see [Orders Overview](/api-docs/orders/orders-api-overview).
     * @param {Object} opts Optional parameters
     * @param {module:api/OrdersApi~getAnOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderFull1}
     */

  }, {
    key: 'getAnOrder',
    value: function getAnOrder(accept, contentType, orderId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

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
      var accepts = ['*/*', 'application/json', 'Multiple Items'];
      var returnType = _OrderFull2.default;

      return this.apiClient.callApi('/orders/{order_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getCountOrder operation.
     * @callback module:api/OrdersApi~getCountOrderCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrdersCountFull1>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Count of Orders
     * Gets an array of orders in the store organized by order status.
     * @param {module:api/OrdersApi~getCountOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrdersCountFull1>}
     */

  }, {
    key: 'getCountOrder',
    value: function getCountOrder(accept, contentType, callback) {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_OrdersCountFull2.default];

      return this.apiClient.callApi('/orders/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateAnOrder operation.
     * @callback module:api/OrdersApi~updateAnOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderFull1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Order
     * Updates an *Order*. To learn more about creating or updating orders, see [Orders Overview](/api-docs/orders/orders-api-overview).
     * @param {module:api/OrdersApi~updateAnOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderFull1}
     */

  }, {
    key: 'updateAnOrder',
    value: function updateAnOrder(body, accept, contentType, orderId, callback) {
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
      var accepts = ['*/*', 'application/json', 'Multiple Items'];
      var returnType = _OrderFull2.default;

      return this.apiClient.callApi('/orders/{order_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return OrdersApi;
}();

exports.default = OrdersApi;