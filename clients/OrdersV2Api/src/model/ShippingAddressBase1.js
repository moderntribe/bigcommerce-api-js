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
* The ShippingAddressBase1 model module.
* @module model/ShippingAddressBase1
* @version 2.0
*/
export default class ShippingAddressBase1 {
    /**
    * Constructs a new <code>ShippingAddressBase1</code>.
    * @alias module:model/ShippingAddressBase1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ShippingAddressBase1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShippingAddressBase1} obj Optional instance to populate.
    * @return {module:model/ShippingAddressBase1} The populated <code>ShippingAddressBase1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingAddressBase1();
                        
            
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('street_1')) {
                obj['street_1'] = ApiClient.convertToType(data['street_1'], 'String');
            }
            if (data.hasOwnProperty('street_2')) {
                obj['street_2'] = ApiClient.convertToType(data['street_2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('zip')) {
                obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('country_iso2')) {
                obj['country_iso2'] = ApiClient.convertToType(data['country_iso2'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} first_name
    */
    'first_name' = undefined;
    /**
    * @member {String} last_name
    */
    'last_name' = undefined;
    /**
    * @member {String} company
    */
    'company' = undefined;
    /**
    * Street address (first line).
    * @member {String} street_1
    */
    'street_1' = undefined;
    /**
    * Street address (second line).
    * @member {String} street_2
    */
    'street_2' = undefined;
    /**
    * @member {String} city
    */
    'city' = undefined;
    /**
    * @member {String} state
    */
    'state' = undefined;
    /**
    * Zip or postal code, as a string.
    * @member {String} zip
    */
    'zip' = undefined;
    /**
    * @member {String} country
    */
    'country' = undefined;
    /**
    * 2-letter ISO Alpha-2 code for the country.
    * @member {String} country_iso2
    */
    'country_iso2' = undefined;
    /**
    * Recipient's telephone number.
    * @member {String} phone
    */
    'phone' = undefined;
    /**
    * Recipient's email address. 
    * @member {String} email
    */
    'email' = undefined;




}
