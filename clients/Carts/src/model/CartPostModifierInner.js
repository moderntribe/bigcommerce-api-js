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
* The CartPostModifierInner model module.
* @module model/CartPostModifierInner
* @version 3.0
*/
export default class CartPostModifierInner {
    /**
    * Constructs a new <code>CartPostModifierInner</code>.
    * @alias module:model/CartPostModifierInner
    * @class
    * @param quantity {Number} 
    * @param productId {Number} 
    */

    constructor(quantity, productId) {
        
        
        this['quantity'] = quantity;
        this['product_id'] = productId;
        
    }

    /**
    * Constructs a <code>CartPostModifierInner</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CartPostModifierInner} obj Optional instance to populate.
    * @return {module:model/CartPostModifierInner} The populated <code>CartPostModifierInner</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartPostModifierInner();
                        
            
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('list_price')) {
                obj['list_price'] = ApiClient.convertToType(data['list_price'], 'Number');
            }
            if (data.hasOwnProperty('option_selections')) {
                obj['option_selections'] = ApiClient.convertToType(data['option_selections'], [Object]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} quantity
    */
    'quantity' = undefined;
    /**
    * @member {Number} product_id
    */
    'product_id' = undefined;
    /**
    * Optional price override
    * @member {Number} list_price
    */
    'list_price' = undefined;
    /**
    * Needed for Catalog V2
    * @member {Array.<Object>} option_selections
    */
    'option_selections' = undefined;




}
