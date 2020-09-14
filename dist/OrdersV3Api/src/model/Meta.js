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

var _Pagination = require('./Pagination1');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Meta model module.
* @module model/Meta
* @version 3.0
*/
var Meta = function () {
    /**
    * Constructs a new <code>Meta</code>.
    * @alias module:model/Meta
    * @class
    */

    function Meta() {
        _classCallCheck(this, Meta);

        this['meta'] = undefined;
    }

    /**
    * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Meta} obj Optional instance to populate.
    * @return {module:model/Meta} The populated <code>Meta</code> instance.
    */


    _createClass(Meta, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Meta();

                if (data.hasOwnProperty('meta')) {
                    obj['meta'] = _Pagination2.default.constructFromObject(data['meta']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/Pagination1} meta
        */

    }]);

    return Meta;
}();

exports.default = Meta;