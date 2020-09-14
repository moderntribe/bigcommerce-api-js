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

var _Custom = require('./Custom1');

var _Custom2 = _interopRequireDefault(_Custom);

var _Offline = require('./Offline1');

var _Offline2 = _interopRequireDefault(_Offline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The TransactionPost model module.
* @module model/TransactionPost
* @version 3.0
*/
var TransactionPost = function () {
  /**
  * Constructs a new <code>TransactionPost</code>.
  * @alias module:model/TransactionPost
  * @class
  * @param event {module:model/TransactionPost.EventEnum} Store event that created the transaction. 
  * @param method {module:model/TransactionPost.MethodEnum} The payment method: `credit_card` - a credit-card transaction; `electronic_wallet` - an online wallet; `store_credit` - a transaction using store credit; `gift_certificate` - a transaction using a gift certificate; `custom` - manual payment methods; `token` - payment token; `nonce` - temporary payment token; `offsite` - online payment off the site (e.g., PayPal); `offline` - payment method that takes place offline. 
  * @param amount {Number} Amount of money in the transaction. 
  * @param currency {String} Currency used for the transaction. 
  * @param gateway {module:model/TransactionPost.GatewayEnum} The payment gateway, where applicable. 
  */

  function TransactionPost(event, method, amount, currency, gateway) {
    _classCallCheck(this, TransactionPost);

    this['event'] = undefined;
    this['method'] = undefined;
    this['amount'] = undefined;
    this['currency'] = undefined;
    this['gateway'] = undefined;
    this['gateway_transaction_id'] = undefined;
    this['date_created'] = undefined;
    this['test'] = undefined;
    this['status'] = undefined;
    this['fraud_review'] = undefined;
    this['reference_transaction_id'] = undefined;
    this['offline'] = undefined;
    this['custom'] = undefined;
    this[''] = undefined;


    this['event'] = event;
    this['method'] = method;
    this['amount'] = amount;
    this['currency'] = currency;
    this['gateway'] = gateway;
  }

  /**
  * Constructs a <code>TransactionPost</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TransactionPost} obj Optional instance to populate.
  * @return {module:model/TransactionPost} The populated <code>TransactionPost</code> instance.
  */


  _createClass(TransactionPost, null, [{
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionPost();

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient2.default.convertToType(data['event'], 'String');
        }
        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient2.default.convertToType(data['method'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
        }
        if (data.hasOwnProperty('gateway')) {
          obj['gateway'] = _ApiClient2.default.convertToType(data['gateway'], 'String');
        }
        if (data.hasOwnProperty('gateway_transaction_id')) {
          obj['gateway_transaction_id'] = _ApiClient2.default.convertToType(data['gateway_transaction_id'], 'String');
        }
        if (data.hasOwnProperty('date_created')) {
          obj['date_created'] = _ApiClient2.default.convertToType(data['date_created'], 'Date');
        }
        if (data.hasOwnProperty('test')) {
          obj['test'] = _ApiClient2.default.convertToType(data['test'], 'Boolean');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('fraud_review')) {
          obj['fraud_review'] = _ApiClient2.default.convertToType(data['fraud_review'], 'Boolean');
        }
        if (data.hasOwnProperty('reference_transaction_id')) {
          obj['reference_transaction_id'] = _ApiClient2.default.convertToType(data['reference_transaction_id'], 'Number');
        }
        if (data.hasOwnProperty('offline')) {
          obj['offline'] = _Offline2.default.constructFromObject(data['offline']);
        }
        if (data.hasOwnProperty('custom')) {
          obj['custom'] = _Custom2.default.constructFromObject(data['custom']);
        }
        if (data.hasOwnProperty('')) {
          obj[''] = _ApiClient2.default.convertToType(data[''], 'String');
        }
      }
      return obj;
    }

    /**
    * Store event that created the transaction. 
    * @member {module:model/TransactionPost.EventEnum} event
    */

    /**
    * The payment method: `credit_card` - a credit-card transaction; `electronic_wallet` - an online wallet; `store_credit` - a transaction using store credit; `gift_certificate` - a transaction using a gift certificate; `custom` - manual payment methods; `token` - payment token; `nonce` - temporary payment token; `offsite` - online payment off the site (e.g., PayPal); `offline` - payment method that takes place offline. 
    * @member {module:model/TransactionPost.MethodEnum} method
    */

    /**
    * Amount of money in the transaction. 
    * @member {Number} amount
    */

    /**
    * Currency used for the transaction. 
    * @member {String} currency
    */

    /**
    * The payment gateway, where applicable. 
    * @member {module:model/TransactionPost.GatewayEnum} gateway
    */

    /**
    * The transaction ID returned by the payment gateway for this transaction item. 
    * @member {String} gateway_transaction_id
    */

    /**
    * The datetime of the transaction. 
    * @member {Date} date_created
    */

    /**
    * True if the transaction performed was a test, or if the gateway is in test mode. 
    * @member {Boolean} test
    */

    /**
    * Status of the transaction. 
    * @member {module:model/TransactionPost.StatusEnum} status
    */

    /**
    * Result of gateway fraud review, if any. Default is `false`. 
    * @member {Boolean} fraud_review
    */

    /**
    * Identifier for an existing transaction upon which this transaction acts. 
    * @member {Number} reference_transaction_id
    */

    /**
    * @member {module:model/Offline1} offline
    */

    /**
    * @member {module:model/Custom1} custom
    */

    /**
    * @member {String} 
    */


    /**
    * Allowed values for the <code>event</code> property.
    * @enum {String}
    * @readonly
    */

    /**
    * Allowed values for the <code>method</code> property.
    * @enum {String}
    * @readonly
    */

    /**
    * Allowed values for the <code>gateway</code> property.
    * @enum {String}
    * @readonly
    */

    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */

  }]);

  return TransactionPost;
}();

TransactionPost.EventEnum = {
  /**
   * value: "purchase"
   * @const
   */
  "purchase": "purchase",
  /**
   * value: "authorization"
   * @const
   */
  "authorization": "authorization",
  /**
   * value: "capture"
   * @const
   */
  "capture": "capture",
  /**
   * value: "refund"
   * @const
   */
  "refund": "refund",
  /**
   * value: "void"
   * @const
   */
  "void": "void",
  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",
  /**
   * value: "settled"
   * @const
   */
  "settled": "settled" };
TransactionPost.MethodEnum = {
  /**
   * value: "credit_card"
   * @const
   */
  "credit_card": "credit_card",
  /**
   * value: "electronic_wallet"
   * @const
   */
  "electronic_wallet": "electronic_wallet",
  /**
   * value: "gift_certificate"
   * @const
   */
  "gift_certificate": "gift_certificate",
  /**
   * value: "store_credit"
   * @const
   */
  "store_credit": "store_credit",
  /**
   * value: "apple_pay_card"
   * @const
   */
  "apple_pay_card": "apple_pay_card",
  /**
   * value: "apple_pay_token"
   * @const
   */
  "apple_pay_token": "apple_pay_token",
  /**
   * value: "token"
   * @const
   */
  "token": "token",
  /**
   * value: "custom"
   * @const
   */
  "custom": "custom",
  /**
   * value: "offsite"
   * @const
   */
  "offsite": "offsite",
  /**
   * value: "offline"
   * @const
   */
  "offline": "offline",
  /**
   * value: "nonce"
   * @const
   */
  "nonce": "nonce" };
TransactionPost.GatewayEnum = {
  /**
   * value: "2checkout"
   * @const
   */
  "2checkout": "2checkout",
  /**
   * value: "adyen"
   * @const
   */
  "adyen": "adyen",
  /**
   * value: "amazon"
   * @const
   */
  "amazon": "amazon",
  /**
   * value: "authorizenet"
   * @const
   */
  "authorizenet": "authorizenet",
  /**
   * value: "bankdeposit"
   * @const
   */
  "bankdeposit": "bankdeposit",
  /**
   * value: "braintree"
   * @const
   */
  "braintree": "braintree",
  /**
   * value: "cheque"
   * @const
   */
  "cheque": "cheque",
  /**
   * value: "cod"
   * @const
   */
  "cod": "cod",
  /**
   * value: "custom"
   * @const
   */
  "custom": "custom",
  /**
   * value: "firstdatagge4"
   * @const
   */
  "firstdatagge4": "firstdatagge4",
  /**
   * value: "giftcertificate"
   * @const
   */
  "giftcertificate": "giftcertificate",
  /**
   * value: "hps"
   * @const
   */
  "hps": "hps",
  /**
   * value: "instore"
   * @const
   */
  "instore": "instore",
  /**
   * value: "klarna"
   * @const
   */
  "klarna": "klarna",
  /**
   * value: "migs"
   * @const
   */
  "migs": "migs",
  /**
   * value: "moneyorder"
   * @const
   */
  "moneyorder": "moneyorder",
  /**
   * value: "nmi"
   * @const
   */
  "nmi": "nmi",
  /**
   * value: "paypalexpress"
   * @const
   */
  "paypalexpress": "paypalexpress",
  /**
   * value: "paypalpaymentsprous"
   * @const
   */
  "paypalpaymentsprous": "paypalpaymentsprous",
  /**
   * value: "paypalpaymentsprouk"
   * @const
   */
  "paypalpaymentsprouk": "paypalpaymentsprouk",
  /**
   * value: "plugnpay"
   * @const
   */
  "plugnpay": "plugnpay",
  /**
   * value: "qbmsv2"
   * @const
   */
  "qbmsv2": "qbmsv2",
  /**
   * value: "securenet"
   * @const
   */
  "securenet": "securenet",
  /**
   * value: "square"
   * @const
   */
  "square": "square",
  /**
   * value: "storecredit"
   * @const
   */
  "storecredit": "storecredit",
  /**
   * value: "stripe"
   * @const
   */
  "stripe": "stripe",
  /**
   * value: "testgateway"
   * @const
   */
  "testgateway": "testgateway",
  /**
   * value: "usaepay"
   * @const
   */
  "usaepay": "usaepay" };
TransactionPost.StatusEnum = {
  /**
   * value: "ok"
   * @const
   */
  "ok": "ok",
  /**
   * value: "error"
   * @const
   */
  "error": "error" };
exports.default = TransactionPost;