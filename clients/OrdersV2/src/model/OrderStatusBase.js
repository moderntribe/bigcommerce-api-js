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
* The OrderStatusBase model module.
* @module model/OrderStatusBase
* @version 2.0
*/
export default class OrderStatusBase {
    /**
    * Constructs a new <code>OrderStatusBase</code>.
    * @alias module:model/OrderStatusBase
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OrderStatusBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderStatusBase} obj Optional instance to populate.
    * @return {module:model/OrderStatusBase} The populated <code>OrderStatusBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusBase();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('system_label')) {
                obj['system_label'] = ApiClient.convertToType(data['system_label'], 'String');
            }
            if (data.hasOwnProperty('custom_label')) {
                obj['custom_label'] = ApiClient.convertToType(data['custom_label'], 'String');
            }
            if (data.hasOwnProperty('system_description')) {
                obj['system_description'] = ApiClient.convertToType(data['system_description'], 'String');
            }
        }
        return obj;
    }

    /**
    * The id of the type of order status
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * Name of the type of order status
    * @member {String} name
    */
    'name' = undefined;
    /**
    * System name of the type of order status.
    * @member {String} system_label
    */
    'system_label' = undefined;
    /**
    * Custom order status label given in the Control Panel
    * @member {String} custom_label
    */
    'custom_label' = undefined;
    /**
    * System description of the order status
    * @member {String} system_description
    */
    'system_description' = undefined;




}
