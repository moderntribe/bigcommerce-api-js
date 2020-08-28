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

import ApiClient from '../ApiClient';

/**
* The ShippingQuotesBase1 model module.
* @module model/ShippingQuotesBase1
* @version 2.0
*/
export default class ShippingQuotesBase1 {
    /**
    * Constructs a new <code>ShippingQuotesBase1</code>.
    * @alias module:model/ShippingQuotesBase1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ShippingQuotesBase1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShippingQuotesBase1} obj Optional instance to populate.
    * @return {module:model/ShippingQuotesBase1} The populated <code>ShippingQuotesBase1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingQuotesBase1();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('shipping_provider_id')) {
                obj['shipping_provider_id'] = ApiClient.convertToType(data['shipping_provider_id'], 'String');
            }
            if (data.hasOwnProperty('shipping_provider_quote')) {
                obj['shipping_provider_quote'] = ApiClient.convertToType(data['shipping_provider_quote'], Array);
            }
            if (data.hasOwnProperty('provider_code')) {
                obj['provider_code'] = ApiClient.convertToType(data['provider_code'], 'String');
            }
            if (data.hasOwnProperty('carrier_code')) {
                obj['carrier_code'] = ApiClient.convertToType(data['carrier_code'], 'String');
            }
            if (data.hasOwnProperty('rate_code')) {
                obj['rate_code'] = ApiClient.convertToType(data['rate_code'], 'String');
            }
            if (data.hasOwnProperty('rate_id')) {
                obj['rate_id'] = ApiClient.convertToType(data['rate_id'], 'String');
            }
            if (data.hasOwnProperty('method_id')) {
                obj['method_id'] = ApiClient.convertToType(data['method_id'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Id of the shipping quote
    * @member {String} id
    */
    'id' = undefined;
    /**
    * uuid of the shipping quote
    * @member {String} uuid
    */
    'uuid' = undefined;
    /**
    * Time the order was created in RFC 2822 format.
    * @member {Date} timestamp
    */
    'timestamp' = undefined;
    /**
    * Id of the shipping provider
    * @member {String} shipping_provider_id
    */
    'shipping_provider_id' = undefined;
    /**
    * This can vary based on the shipping provider. Manual shipping methods such as fixed will return an empty array. Shipping providers such as UPS will return an object with the shipping information. Since the shipping quote is tied to a shipping address only one quote will return in the response.
    * @member {Array} shipping_provider_quote
    */
    'shipping_provider_quote' = undefined;
    /**
    * Code of the shipping provider
    * @member {String} provider_code
    */
    'provider_code' = undefined;
    /**
    * Code of the shipping carrier
    * @member {String} carrier_code
    */
    'carrier_code' = undefined;
    /**
    * Type of delivery. This can vary based on shipping quote.
    * @member {String} rate_code
    */
    'rate_code' = undefined;
    /**
    * This can vary based on shipping quote
    * @member {String} rate_id
    */
    'rate_id' = undefined;
    /**
    * Shipping method ID
    * @member {Number} method_id
    */
    'method_id' = undefined;




}
