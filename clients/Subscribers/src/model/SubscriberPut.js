/**
 * Subscribers
 * ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Customers | modify | `store_v2_customers` | |  Customers | read-only | `store_v2_customers_read_only` |  ### Headers  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### Example  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Content-Type: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  * For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication). 
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
* The SubscriberPut model module.
* @module model/SubscriberPut
* @version 3.0
*/
export default class SubscriberPut {
    /**
    * Constructs a new <code>SubscriberPut</code>.
    * The model for a PUT to update a subscriber. 
    * @alias module:model/SubscriberPut
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SubscriberPut</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SubscriberPut} obj Optional instance to populate.
    * @return {module:model/SubscriberPut} The populated <code>SubscriberPut</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriberPut();
                        
            
        }
        return obj;
    }





}
