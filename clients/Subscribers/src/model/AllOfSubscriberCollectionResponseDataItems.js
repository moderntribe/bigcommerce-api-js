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
* The AllOfSubscriberCollectionResponseDataItems model module.
* @module model/AllOfSubscriberCollectionResponseDataItems
* @version 3.0
*/
export default class AllOfSubscriberCollectionResponseDataItems {
    /**
    * Constructs a new <code>AllOfSubscriberCollectionResponseDataItems</code>.
    * Full subscriber object returned in responses.
    * @alias module:model/AllOfSubscriberCollectionResponseDataItems
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AllOfSubscriberCollectionResponseDataItems</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfSubscriberCollectionResponseDataItems} obj Optional instance to populate.
    * @return {module:model/AllOfSubscriberCollectionResponseDataItems} The populated <code>AllOfSubscriberCollectionResponseDataItems</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfSubscriberCollectionResponseDataItems();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('date_modified')) {
                obj['date_modified'] = ApiClient.convertToType(data['date_modified'], 'Date');
            }
            if (data.hasOwnProperty('date_created')) {
                obj['date_created'] = ApiClient.convertToType(data['date_created'], 'Date');
            }
        }
        return obj;
    }

    /**
    * The unique numeric ID of the subscriber; increments sequentially.
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * The date on which the subscriber was modified. 
    * @member {Date} date_modified
    */
    'date_modified' = undefined;
    /**
    * The date of which the subscriber was created. 
    * @member {Date} date_created
    */
    'date_created' = undefined;




}