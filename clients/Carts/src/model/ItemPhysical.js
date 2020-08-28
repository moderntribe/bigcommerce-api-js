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
import GiftWrapping from './GiftWrapping';

/**
* The ItemPhysical model module.
* @module model/ItemPhysical
* @version 3.0
*/
export default class ItemPhysical {
    /**
    * Constructs a new <code>ItemPhysical</code>.
    * @alias module:model/ItemPhysical
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ItemPhysical</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ItemPhysical} obj Optional instance to populate.
    * @return {module:model/ItemPhysical} The populated <code>ItemPhysical</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemPhysical();
                        
            
            if (data.hasOwnProperty('is_require_shipping')) {
                obj['is_require_shipping'] = ApiClient.convertToType(data['is_require_shipping'], 'Boolean');
            }
            if (data.hasOwnProperty('gift_wrapping')) {
                obj['gift_wrapping'] = GiftWrapping.constructFromObject(data['gift_wrapping']);
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} is_require_shipping
    */
    'is_require_shipping' = undefined;
    /**
    * @member {module:model/GiftWrapping} gift_wrapping
    */
    'gift_wrapping' = undefined;




}
