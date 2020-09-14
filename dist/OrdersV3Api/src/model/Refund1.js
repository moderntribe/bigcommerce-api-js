'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Orders V3
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints) - [Order Transactions](#order-transactions) - [Resources](#resources)  The V3 REST API's Orders resource surfaces endpoints related to payment processing. The `/orders/{id}/transactions` endpoint returns transaction details for the specified order. To programmatically create, update, and delete orders themselves, see [Orders v2](https://developer.bigcommerce.com/api-reference/store-management/orders). To process payments, see [Payment Processing](https://developer.bigcommerce.com/api-reference/payments/payments-process-payments).  ## OAuth Scopes | UI Name| Permission |Parameter|                                      |----------------------------------------------|------------|-----------------------------------------------| | Order Transactions|modify|`store_v2_transactions`| | Order Transactions|read-only  |`store_v2_transactions_read_only`| | Orders| modify|`store_v2_orders`| | Orders| read-only|`store_v2_orders_read_only`|  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Endpoint|Description|Reference |---|---|---| | `/orders/{id}/transactions`             | Get list of transaction data for an order|[Get Transactions](https://developer.bigcommerce.com/api-reference/store-management/order-transactions/transactions/gettransactions) |`/orders/{id}/payment_actions/refund_quotes`|` POST` - Create refund quote for order ID `{id}`.|[Create a Refund Quote](https://developer.bigcommerce.com/api-reference/store-management/order-transactions/order-refunds/postrefundquote) |`/orders/{id}/payment_actions/refunds`|`POST` Create a refund for order ID `{id}`.|[Create a Refund](https://developer.bigcommerce.com/api-reference/store-management/order-transactions/order-refunds/postrefund) |`/orders/{id}/payment_actions/refunds`|` GET` - Returns the refunds for order ID `{id}`.|[Get Refunds For Order](https://developer.bigcommerce.com/api-reference/store-management/order-transactions/order-refunds/getorderrefunds) |`/orders/payment_actions/refunds`|`GET` - Returns a list of refunds ordered by refund ID.|[Get All Refunds](https://developer.bigcommerce.com/api-reference/store-management/order-transactions/order-refunds/getrefunds)  ## Order Transactions The `/orders/{id}/transactions` endpoint returns details about the payment instruments used to pay for an order. Depending on the payment method used, different details will be available. Not all credit card payment gateways return full card or fraud details. Transactions endpoints are primarily used to get detailed gateway response information for credit card transactions; however they will also return any available information about digital wallet and offline payments.   **Note**: transactions are not created for the following payment methods: * Test Payment Gateway * PayPal Express * Amazon Pay  ## Order Refunds The Order API refund endpoints allow developers to process refunds against orders with settled payments. Refund endpoints are useful when building order management or payment integrations. They make embedding refund functionality directly into the application possible without requiring merchants to return to their BigCommerce Control Panel.  ## Resources * [Orders Overview](https://developer.bigcommerce.com/api-docs/orders/orders-overview) * [Orders V2](https://developer.bigcommerce.com/api-reference/store-management/orders)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _RefundItem = require('./RefundItem');

var _RefundItem2 = _interopRequireDefault(_RefundItem);

var _RefundPayment = require('./RefundPayment');

var _RefundPayment2 = _interopRequireDefault(_RefundPayment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Refund1 model module.
* @module model/Refund1
* @version 3.0
*/
var Refund1 = function () {
    /**
    * Constructs a new <code>Refund1</code>.
    * @alias module:model/Refund1
    * @class
    */

    function Refund1() {
        _classCallCheck(this, Refund1);

        this['id'] = undefined;
        this['order_id'] = undefined;
        this['user_id'] = undefined;
        this['created'] = undefined;
        this['reason'] = undefined;
        this['total_amount'] = undefined;
        this['total_tax'] = undefined;
        this['items'] = undefined;
        this['payments'] = undefined;
    }

    /**
    * Constructs a <code>Refund1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Refund1} obj Optional instance to populate.
    * @return {module:model/Refund1} The populated <code>Refund1</code> instance.
    */


    _createClass(Refund1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Refund1();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('order_id')) {
                    obj['order_id'] = _ApiClient2.default.convertToType(data['order_id'], 'Number');
                }
                if (data.hasOwnProperty('user_id')) {
                    obj['user_id'] = _ApiClient2.default.convertToType(data['user_id'], 'Number');
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'Date');
                }
                if (data.hasOwnProperty('reason')) {
                    obj['reason'] = _ApiClient2.default.convertToType(data['reason'], 'String');
                }
                if (data.hasOwnProperty('total_amount')) {
                    obj['total_amount'] = _ApiClient2.default.convertToType(data['total_amount'], 'Number');
                }
                if (data.hasOwnProperty('total_tax')) {
                    obj['total_tax'] = _ApiClient2.default.convertToType(data['total_tax'], 'Number');
                }
                if (data.hasOwnProperty('items')) {
                    obj['items'] = _ApiClient2.default.convertToType(data['items'], [_RefundItem2.default]);
                }
                if (data.hasOwnProperty('payments')) {
                    obj['payments'] = _ApiClient2.default.convertToType(data['payments'], [_RefundPayment2.default]);
                }
            }
            return obj;
        }

        /**
        * Refund resource ID
        * @member {Number} id
        */

        /**
        * Reference to order id
        * @member {Number} order_id
        */

        /**
        * Reference to the user's id who create this refund. This is automatically populated by BigCommerce.
        * @member {Number} user_id
        */

        /**
        * Timestamp of when this refund was created
        * @member {Date} created
        */

        /**
        * Reason for refund
        * @member {String} reason
        */

        /**
        * A non-negative 2 decimal place rounded value that represents that amount that can be charged/refunded via payment providers
        * @member {Number} total_amount
        */

        /**
        * Total tax amount refunded back to shopper. Note: order_level_amount does not affect tax liability. This can be negative amount indicating we have collected tax by virtue of refunding less to the customer
        * @member {Number} total_tax
        */

        /**
        * Array of items refunded
        * @member {Array.<module:model/RefundItem>} items
        */

        /**
        * An array of refund payments made to payment providers
        * @member {Array.<module:model/RefundPayment>} payments
        */

    }]);

    return Refund1;
}();

exports.default = Refund1;