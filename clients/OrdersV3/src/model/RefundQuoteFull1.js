/**
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

import ApiClient from '../ApiClient';

/**
* The RefundQuoteFull1 model module.
* @module model/RefundQuoteFull1
* @version 3.0
*/
export default class RefundQuoteFull1 {
    /**
    * Constructs a new <code>RefundQuoteFull1</code>.
    * @alias module:model/RefundQuoteFull1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RefundQuoteFull1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RefundQuoteFull1} obj Optional instance to populate.
    * @return {module:model/RefundQuoteFull1} The populated <code>RefundQuoteFull1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RefundQuoteFull1();
                        
            
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
            }
            if (data.hasOwnProperty('total_refund_amount')) {
                obj['total_refund_amount'] = ApiClient.convertToType(data['total_refund_amount'], 'Number');
            }
            if (data.hasOwnProperty('total_refund_tax_amount')) {
                obj['total_refund_tax_amount'] = ApiClient.convertToType(data['total_refund_tax_amount'], 'Number');
            }
            if (data.hasOwnProperty('rounding')) {
                obj['rounding'] = ApiClient.convertToType(data['rounding'], 'Number');
            }
            if (data.hasOwnProperty('adjustment')) {
                obj['adjustment'] = ApiClient.convertToType(data['adjustment'], 'Number');
            }
            if (data.hasOwnProperty('tax_inclusive')) {
                obj['tax_inclusive'] = ApiClient.convertToType(data['tax_inclusive'], 'Boolean');
            }
            if (data.hasOwnProperty('refund_methods')) {
                obj['refund_methods'] = ApiClient.convertToType(data['refund_methods'], [[Object]]);
            }
        }
        return obj;
    }

    /**
    * ID of the order to be refunded
    * @member {Number} order_id
    */
    'order_id' = undefined;
    /**
    * A non-negative 2 decimal place rounded value that represents that amount that can be charged/refunded via payment providers
    * @member {Number} total_refund_amount
    */
    'total_refund_amount' = undefined;
    /**
    * @member {Number} total_refund_tax_amount
    */
    'total_refund_tax_amount' = undefined;
    /**
    * Indicates rounding value to bring refund_total to an amount refundable via payment providers (in this case to 2 decimal places)
    * @member {Number} rounding
    */
    'rounding' = undefined;
    /**
    * A non-negative 2 decimal place rounded value that represents that amount that can be charged/refunded via payment providers
    * @member {Number} adjustment
    */
    'adjustment' = undefined;
    /**
    * Indicate if total_refund_amount includes tax amount
    * @member {Boolean} tax_inclusive
    */
    'tax_inclusive' = undefined;
    /**
    * An array of available refund methods.  Note that `refund_methods` is an array of refund methods, with each refund method being an array of payment options.   For example, if the order was placed by a combination of store credit and bank deposit the  refund methods would be: ```json {   \"refund_methods\": [     [       {         \"provider_id\": \"storecredit\",         \"provider_description\": \"Store Credit\",         \"amount\": 119.35,         \"offline\": false,         \"offline_provider\": false,         \"offline_reason\": \"\"       }     ],     [       {         \"provider_id\": \"custom\",         \"provider_description\": \"Custom\",         \"amount\": 119.35,         \"offline\": true,         \"offline_provider\": true,         \"offline_reason\": \"This is an offline payment provider.\"       }     ],     [       {         \"provider_id\": \"bankdeposit\",         \"provider_description\": \"Bank Deposit\",         \"amount\": 80.35,         \"offline\": true,         \"offline_provider\": true,         \"offline_reason\": \"This is an offline payment provider.\"       },        {         \"provider_id\": \"storecredit\",         \"provider_description\": \"Store Credit\",         \"amount\": 39,         \"offline\": false,         \"offline_provider\": false,         \"offline_reason\": \"\"       }     ]   ] } ```  In this case there are three refund methods available to the merchant: 1. Refund up to the entire order amount to store credit. 2. Mark an amount up to the full order amount as refunded externally, through a provider or means not represented directly in BC (\"custom\"). 3. Refund the amount paid by store credit to store credit, and the amount paid by bank deposit via a manual refund, which will be recorded as being refunded against the bank deposit.    >      
    * @member {Array.<Array.<Object>>} refund_methods
    */
    'refund_methods' = undefined;




}