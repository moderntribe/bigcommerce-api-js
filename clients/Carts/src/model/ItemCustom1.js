/**
 * Carts
 * ### Cart Allows for a cart to be created using BigCommerce cart logic. The existing BigCommerce front end cart can be bypassed.  Notes: - A **cart** `id` is the same as a **checkout** `id`. - A cart can be created by adding an existing **catalog item** or a **custom item**. - Carts are valid for 30 days from the last modification. This can include creating the cart or editing the cart. - Redirect URLs can be generated only from carts created using the Server to Server Cart API. To restore a cart that was created on the storefront, either by a shopper or the Storefront Cart API, first recreate the cart using the Server to Server Cart API.
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
* The ItemCustom1 model module.
* @module model/ItemCustom1
* @version 3.0
*/
export default class ItemCustom1 {
    /**
    * Constructs a new <code>ItemCustom1</code>.
    * Add a custom item to the shoppers cart.  * Custom items are not added to the catalog. * The price should be set to match the store settings for taxes.
    * @alias module:model/ItemCustom1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ItemCustom1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ItemCustom1} obj Optional instance to populate.
    * @return {module:model/ItemCustom1} The populated <code>ItemCustom1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemCustom1();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
            }
            if (data.hasOwnProperty('list_price')) {
                obj['list_price'] = ApiClient.convertToType(data['list_price'], 'String');
            }
        }
        return obj;
    }

    /**
    * Id of the custom item
    * @member {String} id
    */
    'id' = undefined;
    /**
    * Custom item sku
    * @member {String} sku
    */
    'sku' = undefined;
    /**
    * Item name
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} quantity
    */
    'quantity' = undefined;
    /**
    * Price of the item. With or without tax depending on your stores set up. Optional price override.
    * @member {String} list_price
    */
    'list_price' = undefined;




}
