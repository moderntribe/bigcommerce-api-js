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
* The ShippingQuotesResource model module.
* @module model/ShippingQuotesResource
* @version 2.0
*/
export default class ShippingQuotesResource {
    /**
    * Constructs a new <code>ShippingQuotesResource</code>.
    * @alias module:model/ShippingQuotesResource
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ShippingQuotesResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShippingQuotesResource} obj Optional instance to populate.
    * @return {module:model/ShippingQuotesResource} The populated <code>ShippingQuotesResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingQuotesResource();
                        
            
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
        }
        return obj;
    }

    /**
    * This URL will return a 204 for shipping quotes. To return shipping quotes: `/shipping_addresses/shipping_address_id/shipping_quotes`
    * @member {String} url
    */
    'url' = undefined;
    /**
    * This URL will return a 204 for shipping quotes. To return shipping quotes: `/shipping_addresses/shipping_address_id/shipping_quotes`
    * @member {String} resource
    */
    'resource' = undefined;




}
