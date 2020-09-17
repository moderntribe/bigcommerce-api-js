/**
 * Themes
 * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication)  With BigCommerce's V3 REST API Theme endpoints, developers can: * backup themes * restore themes * download themes * activate themes * get status of theme jobs * read theme configurations  ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Themes                                       | modify     | `store_themes_manage`                         |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).
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
* The RequestHeaders model module.
* @module model/RequestHeaders
* @version 3.0
*/
export default class RequestHeaders {
    /**
    * Constructs a new <code>RequestHeaders</code>.
    * These are the minium request headers needed for BigCommerce. 
    * @alias module:model/RequestHeaders
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RequestHeaders</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RequestHeaders} obj Optional instance to populate.
    * @return {module:model/RequestHeaders} The populated <code>RequestHeaders</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestHeaders();
                        
            
            if (data.hasOwnProperty('X-Auth-Client')) {
                obj['X-Auth-Client'] = ApiClient.convertToType(data['X-Auth-Client'], 'String');
            }
            if (data.hasOwnProperty('Accepts')) {
                obj['Accepts'] = ApiClient.convertToType(data['Accepts'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} X-Auth-Client
    */
    'X-Auth-Client' = undefined;
    /**
    * @member {String} Accepts
    * @default 'application/json'
    */
    'Accepts' = 'application/json';




}