/**
 * Wishlist
 * ## Wishlist API    The Wishlist API allows a developer to create and manage customer [Wishlists](https://support.bigcommerce.com/s/article/Wishlists). A Wishlist allows you to see what your customers are interested in and saving on the store. With this information you’ll be able to create targeted campaigns to help merchants grow their business. Customer API OAuth scopes give you access to Wishlists API. See [OAuth Scopes](https://developer.bigcommerce.com/api-docs/getting-started/authentication#authentication_oauth-scopes).
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
import MetaCollection1 from './MetaCollection1';
import WishlistFull1 from './WishlistFull1';

/**
* The InlineResponse200 model module.
* @module model/InlineResponse200
* @version 3.0
*/
export default class InlineResponse200 {
    /**
    * Constructs a new <code>InlineResponse200</code>.
    * @alias module:model/InlineResponse200
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse200} obj Optional instance to populate.
    * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200();
                        
            
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [WishlistFull1]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaCollection1.constructFromObject(data['meta']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/WishlistFull1>} data
    */
    'data' = undefined;
    /**
    * @member {module:model/MetaCollection1} meta
    */
    'meta' = undefined;




}
