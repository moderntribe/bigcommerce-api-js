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

var _ShippingQuotesBase = require('../model/ShippingQuotesBase1');

var _ShippingQuotesBase2 = _interopRequireDefault(_ShippingQuotesBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* OrderShippingAddressesQuotes service.
* @module api/OrderShippingAddressesQuotesApi
* @version 2.0
*/
var OrderShippingAddressesQuotesApi = function () {

  /**
  * Constructs a new OrderShippingAddressesQuotesApi. 
  * @alias module:api/OrderShippingAddressesQuotesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OrderShippingAddressesQuotesApi(apiClient) {
    _classCallCheck(this, OrderShippingAddressesQuotesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the getShippingQuotes operation.
   * @callback module:api/OrderShippingAddressesQuotesApi~getShippingQuotesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ShippingQuotesBase1} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get All Shipping Quotes
   * Gets all shipping quotes associated to an order.  This is a read only endpoint and the output can vary based on the shipping quote. A shipping quote can only be generated using the storefront at this time. Orders that are created in the control panel or via the API return a 204 for this endpoint since a shipping quote is not generated during that process.
   * @param {module:api/OrderShippingAddressesQuotesApi~getShippingQuotesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ShippingQuotesBase1}
   */


  _createClass(OrderShippingAddressesQuotesApi, [{
    key: 'getShippingQuotes',
    value: function getShippingQuotes(orderId, shippingAddressId, accept, contentType, callback) {
      var postBody = null;

      var pathParams = {
        'order_id': orderId,
        'shipping_address_id': shippingAddressId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      var formParams = {};

      var authNames = ['X-Auth-Client', 'X-Auth-Token'];
      var contentTypes = [];
      var accepts = ['application/json', 'Fixed Shipping', 'UPS Example'];
      var returnType = _ShippingQuotesBase2.default;

      return this.apiClient.callApi('/orders/{order_id}/shipping_addresses/{shipping_address_id}/shipping_quotes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return OrderShippingAddressesQuotesApi;
}();

exports.default = OrderShippingAddressesQuotesApi;