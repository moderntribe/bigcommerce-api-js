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
import FormFields1 from './FormFields1';
import ShippingQuotesResource1 from './ShippingQuotesResource1';

/**
* The OrderShippingAddress1 model module.
* @module model/OrderShippingAddress1
* @version 2.0
*/
export default class OrderShippingAddress1 {
    /**
    * Constructs a new <code>OrderShippingAddress1</code>.
    * @alias module:model/OrderShippingAddress1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OrderShippingAddress1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderShippingAddress1} obj Optional instance to populate.
    * @return {module:model/OrderShippingAddress1} The populated <code>OrderShippingAddress1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderShippingAddress1();
                        
            
            if (data.hasOwnProperty('base_cost')) {
                obj['base_cost'] = ApiClient.convertToType(data['base_cost'], 'String');
            }
            if (data.hasOwnProperty('base_handling_cost')) {
                obj['base_handling_cost'] = ApiClient.convertToType(data['base_handling_cost'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('cost_ex_tax')) {
                obj['cost_ex_tax'] = ApiClient.convertToType(data['cost_ex_tax'], 'String');
            }
            if (data.hasOwnProperty('cost_inc_tax')) {
                obj['cost_inc_tax'] = ApiClient.convertToType(data['cost_inc_tax'], 'String');
            }
            if (data.hasOwnProperty('cost_tax')) {
                obj['cost_tax'] = ApiClient.convertToType(data['cost_tax'], 'String');
            }
            if (data.hasOwnProperty('cost_tax_class_id')) {
                obj['cost_tax_class_id'] = ApiClient.convertToType(data['cost_tax_class_id'], 'Number');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('country_iso2')) {
                obj['country_iso2'] = ApiClient.convertToType(data['country_iso2'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('form_fields')) {
                obj['form_fields'] = ApiClient.convertToType(data['form_fields'], [FormFields1]);
            }
            if (data.hasOwnProperty('handling_cost_ex_tax')) {
                obj['handling_cost_ex_tax'] = ApiClient.convertToType(data['handling_cost_ex_tax'], 'String');
            }
            if (data.hasOwnProperty('handling_cost_inc_tax')) {
                obj['handling_cost_inc_tax'] = ApiClient.convertToType(data['handling_cost_inc_tax'], 'String');
            }
            if (data.hasOwnProperty('handling_cost_tax')) {
                obj['handling_cost_tax'] = ApiClient.convertToType(data['handling_cost_tax'], 'String');
            }
            if (data.hasOwnProperty('handling_cost_tax_class_id')) {
                obj['handling_cost_tax_class_id'] = ApiClient.convertToType(data['handling_cost_tax_class_id'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('items_shipped')) {
                obj['items_shipped'] = ApiClient.convertToType(data['items_shipped'], 'Number');
            }
            if (data.hasOwnProperty('items_total')) {
                obj['items_total'] = ApiClient.convertToType(data['items_total'], 'Number');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('shipping_method')) {
                obj['shipping_method'] = ApiClient.convertToType(data['shipping_method'], 'String');
            }
            if (data.hasOwnProperty('shipping_quotes')) {
                obj['shipping_quotes'] = ShippingQuotesResource1.constructFromObject(data['shipping_quotes']);
            }
            if (data.hasOwnProperty('shipping_zone_id')) {
                obj['shipping_zone_id'] = ApiClient.convertToType(data['shipping_zone_id'], 'Number');
            }
            if (data.hasOwnProperty('shipping_zone_name')) {
                obj['shipping_zone_name'] = ApiClient.convertToType(data['shipping_zone_name'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('street_1')) {
                obj['street_1'] = ApiClient.convertToType(data['street_1'], 'String');
            }
            if (data.hasOwnProperty('street_2')) {
                obj['street_2'] = ApiClient.convertToType(data['street_2'], 'String');
            }
            if (data.hasOwnProperty('zip')) {
                obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
            }
        }
        return obj;
    }

    /**
    * The base value of the order’s items. (Float, Float-As-String, Integer)
    * @member {String} base_cost
    */
    'base_cost' = undefined;
    /**
    * The base handling charge. (Float, Float-As-String, Integer)
    * @member {String} base_handling_cost
    */
    'base_handling_cost' = undefined;
    /**
    * @member {String} city
    */
    'city' = undefined;
    /**
    * @member {String} company
    */
    'company' = undefined;
    /**
    * The value of the order’s items, excluding tax. (Float, Float-As-String, Integer)
    * @member {String} cost_ex_tax
    */
    'cost_ex_tax' = undefined;
    /**
    * The value of the order’s items, including tax. (Float, Float-As-String, Integer)
    * @member {String} cost_inc_tax
    */
    'cost_inc_tax' = undefined;
    /**
    * The tax amount on the order. (Float, Float-As-String, Integer)
    * @member {String} cost_tax
    */
    'cost_tax' = undefined;
    /**
    * The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.)
    * @member {Number} cost_tax_class_id
    */
    'cost_tax_class_id' = undefined;
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
    * Recipient's email address. 
    * @member {String} email
    */
    'email' = undefined;
    /**
    * @member {String} first_name
    */
    'first_name' = undefined;
    /**
    * @member {Array.<module:model/FormFields1>} form_fields
    */
    'form_fields' = undefined;
    /**
    * The handling charge, excluding tax. (Float, Float-As-String, Integer)
    * @member {String} handling_cost_ex_tax
    */
    'handling_cost_ex_tax' = undefined;
    /**
    * The handling charge, including tax. (Float, Float-As-String, Integer)
    * @member {String} handling_cost_inc_tax
    */
    'handling_cost_inc_tax' = undefined;
    /**
    * @member {String} handling_cost_tax
    */
    'handling_cost_tax' = undefined;
    /**
    * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)
    * @member {Number} handling_cost_tax_class_id
    */
    'handling_cost_tax_class_id' = undefined;
    /**
    * ID of this shipping address.
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * The number of items that have been shipped.
    * @member {Number} items_shipped
    */
    'items_shipped' = undefined;
    /**
    * The total number of items in the order.
    * @member {Number} items_total
    */
    'items_total' = undefined;
    /**
    * @member {String} last_name
    */
    'last_name' = undefined;
    /**
    * ID of the order.
    * @member {Number} order_id
    */
    'order_id' = undefined;
    /**
    * Recipient's telephone number.
    * @member {String} phone
    */
    'phone' = undefined;
    /**
    * Text code identifying the BigCommerce shipping module selected by the customer.
    * @member {String} shipping_method
    */
    'shipping_method' = undefined;
    /**
    * @member {module:model/ShippingQuotesResource1} shipping_quotes
    */
    'shipping_quotes' = undefined;
    /**
    * Numeric ID of the shipping zone.
    * @member {Number} shipping_zone_id
    */
    'shipping_zone_id' = undefined;
    /**
    * Name of the shipping zone.
    * @member {String} shipping_zone_name
    */
    'shipping_zone_name' = undefined;
    /**
    * @member {String} state
    */
    'state' = undefined;
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
    * Zip or postal code, as a string.
    * @member {String} zip
    */
    'zip' = undefined;




}
