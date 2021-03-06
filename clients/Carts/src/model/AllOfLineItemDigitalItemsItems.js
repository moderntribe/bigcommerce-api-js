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
* The AllOfLineItemDigitalItemsItems model module.
* @module model/AllOfLineItemDigitalItemsItems
* @version 3.0
*/
export default class AllOfLineItemDigitalItemsItems {
    /**
    * Constructs a new <code>AllOfLineItemDigitalItemsItems</code>.
    * @alias module:model/AllOfLineItemDigitalItemsItems
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AllOfLineItemDigitalItemsItems</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfLineItemDigitalItemsItems} obj Optional instance to populate.
    * @return {module:model/AllOfLineItemDigitalItemsItems} The populated <code>AllOfLineItemDigitalItemsItems</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfLineItemDigitalItemsItems();
                        
            
            if (data.hasOwnProperty('download_file_urls')) {
                obj['download_file_urls'] = ApiClient.convertToType(data['download_file_urls'], ['String']);
            }
            if (data.hasOwnProperty('download_page_url')) {
                obj['download_page_url'] = ApiClient.convertToType(data['download_page_url'], 'String');
            }
            if (data.hasOwnProperty('download_size')) {
                obj['download_size'] = ApiClient.convertToType(data['download_size'], 'String');
            }
        }
        return obj;
    }

    /**
    * URLs to download all product files.
    * @member {Array.<String>} download_file_urls
    */
    'download_file_urls' = undefined;
    /**
    * The URL for the combined downloads page.
    * @member {String} download_page_url
    */
    'download_page_url' = undefined;
    /**
    * Combined download size, in human-readable style. E.g.: `30MB`.
    * @member {String} download_size
    */
    'download_size' = undefined;




}
