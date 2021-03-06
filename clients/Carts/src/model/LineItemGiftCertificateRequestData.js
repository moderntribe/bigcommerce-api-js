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
import ContactEntity from './ContactEntity';

/**
* The LineItemGiftCertificateRequestData model module.
* @module model/LineItemGiftCertificateRequestData
* @version 3.0
*/
export default class LineItemGiftCertificateRequestData {
    /**
    * Constructs a new <code>LineItemGiftCertificateRequestData</code>.
    * @alias module:model/LineItemGiftCertificateRequestData
    * @class
    * @param name {String} Given name for gift certificate line item.
    * @param theme {String} Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
    * @param amount {Number} 
    * @param quantity {Number} 
    * @param sender {module:model/ContactEntity} 
    * @param recipient {module:model/ContactEntity} 
    */

    constructor(name, theme, amount, quantity, sender, recipient) {
        
        
        this['name'] = name;
        this['theme'] = theme;
        this['amount'] = amount;
        this['quantity'] = quantity;
        this['sender'] = sender;
        this['recipient'] = recipient;
        
    }

    /**
    * Constructs a <code>LineItemGiftCertificateRequestData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LineItemGiftCertificateRequestData} obj Optional instance to populate.
    * @return {module:model/LineItemGiftCertificateRequestData} The populated <code>LineItemGiftCertificateRequestData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LineItemGiftCertificateRequestData();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('theme')) {
                obj['theme'] = ApiClient.convertToType(data['theme'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ContactEntity.constructFromObject(data['sender']);
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ContactEntity.constructFromObject(data['recipient']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
    * Given name for gift certificate line item.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
    * @member {String} theme
    */
    'theme' = undefined;
    /**
    * @member {Number} amount
    */
    'amount' = undefined;
    /**
    * @member {Number} quantity
    */
    'quantity' = undefined;
    /**
    * @member {module:model/ContactEntity} sender
    */
    'sender' = undefined;
    /**
    * @member {module:model/ContactEntity} recipient
    */
    'recipient' = undefined;
    /**
    * Message shown to recipient, as provided by sender.
    * @member {String} message
    */
    'message' = undefined;




}
