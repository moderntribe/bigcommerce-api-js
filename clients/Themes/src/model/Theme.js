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
import ThemeVariations from './ThemeVariations';

/**
* The Theme model module.
* @module model/Theme
* @version 3.0
*/
export default class Theme {
    /**
    * Constructs a new <code>Theme</code>.
    * A theme.
    * @alias module:model/Theme
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Theme</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Theme} obj Optional instance to populate.
    * @return {module:model/Theme} The populated <code>Theme</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Theme();
                        
            
            if (data.hasOwnProperty('variations')) {
                obj['variations'] = ApiClient.convertToType(data['variations'], [ThemeVariations]);
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('is_private')) {
                obj['is_private'] = ApiClient.convertToType(data['is_private'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The variations.
    * @member {Array.<module:model/ThemeVariations>} variations
    */
    'variations' = undefined;
    /**
    * The identifier.
    * @member {String} uuid
    */
    'uuid' = undefined;
    /**
    * The theme name identifier.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * Flag to identify private themes.
    * @member {Boolean} is_private
    */
    'is_private' = undefined;




}