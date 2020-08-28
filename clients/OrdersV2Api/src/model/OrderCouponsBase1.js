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
* The OrderCouponsBase1 model module.
* @module model/OrderCouponsBase1
* @version 2.0
*/
export default class OrderCouponsBase1 {
    /**
    * Constructs a new <code>OrderCouponsBase1</code>.
    * @alias module:model/OrderCouponsBase1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OrderCouponsBase1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderCouponsBase1} obj Optional instance to populate.
    * @return {module:model/OrderCouponsBase1} The populated <code>OrderCouponsBase1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCouponsBase1();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('coupon_id')) {
                obj['coupon_id'] = ApiClient.convertToType(data['coupon_id'], 'Number');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Numeric ID of the coupon code.
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * Numeric ID of the associated coupon.
    * @member {Number} coupon_id
    */
    'coupon_id' = undefined;
    /**
    * Numeric ID of the associated order.
    * @member {Number} order_id
    */
    'order_id' = undefined;
    /**
    * Coupon code, as a string.
    * @member {String} code
    */
    'code' = undefined;
    /**
    * Amount of the discount. This information is returned as in integer. Dollar and percentage discounts will return the same. For example, $3 returns as '3' while 5% will return as 5. Check the discount type to see what type of discount is available. (Float, Float-As-String, Integer)
    * @member {String} amount
    */
    'amount' = undefined;
    /**
    * type 0: per_item_discount type 1: percentage_discount type 2: per_total_discount type 3: shipping_discount type 4: free_shipping type 5: promotions
    * @member {Number} type
    */
    'type' = undefined;
    /**
    * The amount off the order the discount is worth. For example, if an order subtotal is $90 and the discount is $3 then it will return as 3.000. If the discount is 3% then will return as 2.7000 or the amount of the order.  (Float, Float-As-String, Integer)
    * @member {Number} discount
    */
    'discount' = undefined;




}
