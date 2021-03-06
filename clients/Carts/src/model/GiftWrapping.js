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
* The GiftWrapping model module.
* @module model/GiftWrapping
* @version 3.0
*/
export default class GiftWrapping {
    /**
    * Constructs a new <code>GiftWrapping</code>.
    * @alias module:model/GiftWrapping
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GiftWrapping</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GiftWrapping} obj Optional instance to populate.
    * @return {module:model/GiftWrapping} The populated <code>GiftWrapping</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GiftWrapping();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} message
    */
    'message' = undefined;
    /**
    * @member {Number} amount
    */
    'amount' = undefined;




}
