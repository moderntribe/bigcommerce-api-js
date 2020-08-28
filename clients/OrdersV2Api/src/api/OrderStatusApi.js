/**
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

import ApiClient from "../ApiClient";
import OrderStatusBase1 from '../model/OrderStatusBase1';

/**
* OrderStatus service.
* @module api/OrderStatusApi
* @version 2.0
*/
export default class OrderStatusApi {

    /**
    * Constructs a new OrderStatusApi. 
    * @alias module:api/OrderStatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getAOrderStatus operation.
     * @callback module:api/OrderStatusApi~getAOrderStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderStatusBase1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Single Order Status by Id
     * Returns a single order status.  **Order Status Descriptions:** |Status ID | Name  | Description | |--|--|--| | 0 | Incomplete  | An incomplete order happens when a shopper reached the payment page, but did not complete the transaction. | | 1 | Pending |Customer started the checkout process, but did not complete it. | | 2 | Shipped | Order has been shipped, but receipt has not been confirmed; seller has used the Ship Items action. | | 3 | Partially Shipped | Only some items in the order have been shipped, due to some products being pre-order only or other reasons. | | 4 | Refunded | Seller has used the Refund action. | | 5 | Cancelled | Seller has cancelled an order, due to a stock inconsistency or other reasons. | | 6 |Declined | Seller has marked the order as declined for lack of manual payment, or other reasons. | | 7 | Awaiting Payment | Customer has completed checkout process, but payment has yet to be confirmed. | | 8 | Awaiting Pickup | Order has been pulled, and is awaiting customer pickup from a seller-specified location. | | 9 | Awaiting Shipment | Order has been pulled and packaged, and is awaiting collection from a shipping provider. | | 10 | Completed | Client has paid for their digital product and their file(s) are available for download. | | 11 | Awaiting Fulfillment | Customer has completed the checkout process and payment has been confirmed. | | 12 | Manual Verification Required | Order on hold while some aspect needs to be manually confirmed. | | 13 | Disputed | Customer has initiated a dispute resolution process for the PayPal transaction that paid for the order. | | 14 | Partially Refunded | Seller has partially refunded the order. |
     * @param {module:api/OrderStatusApi~getAOrderStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderStatusBase1}
     */
    getAOrderStatus(statusId, accept, contentType, callback) {
      let postBody = null;

      let pathParams = {
        'status_id': statusId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['*/*', 'application/json'];
      let returnType = OrderStatusBase1;

      return this.apiClient.callApi(
        '/order_statuses/{status_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrderStatus operation.
     * @callback module:api/OrderStatusApi~getOrderStatusCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderStatusBase1>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Order Statuses
     * Returns a Collection of All Order Statuses.  **Order Status Descriptions:** |Status ID | Name  | Description | |--|--|--| | 0 | Incomplete  | An incomplete order happens when a shopper reached the payment page, but did not complete the transaction. | | 1 | Pending |Customer started the checkout process, but did not complete it. | | 2 | Shipped | Order has been shipped, but receipt has not been confirmed; seller has used the Ship Items action. | | 3 | Partially Shipped | Only some items in the order have been shipped, due to some products being pre-order only or other reasons. | | 4 | Refunded | Seller has used the Refund action. | | 5 | Cancelled | Seller has cancelled an order, due to a stock inconsistency or other reasons. | | 6 |Declined | Seller has marked the order as declined for lack of manual payment, or other reasons. | | 7 | Awaiting Payment | Customer has completed checkout process, but payment has yet to be confirmed. | | 8 | Awaiting Pickup | Order has been pulled, and is awaiting customer pickup from a seller-specified location. | | 9 | Awaiting Shipment | Order has been pulled and packaged, and is awaiting collection from a shipping provider. | | 10 | Completed | Client has paid for their digital product and their file(s) are available for download. | | 11 | Awaiting Fulfillment | Customer has completed the checkout process and payment has been confirmed. | | 12 | Manual Verification Required | Order on hold while some aspect needs to be manually confirmed. | | 13 | Disputed | Customer has initiated a dispute resolution process for the PayPal transaction that paid for the order. | | 14 | Partially Refunded | Seller has partially refunded the order. |
     * @param {module:api/OrderStatusApi~getOrderStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderStatusBase1>}
     */
    getOrderStatus(accept, contentType, callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['*/*', 'application/json'];
      let returnType = [OrderStatusBase1];

      return this.apiClient.callApi(
        '/order_statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
