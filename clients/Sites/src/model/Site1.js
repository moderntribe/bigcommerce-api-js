/**
 * Sites
 * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints) - [Usage Notes](#usage-notes) - [Resources](#resources)  Create and manage sites and routes for headless storefronts.  ## OAuth Scopes | UI Name        | Permission | Parameter               | |----------------|------------|-------------------------| | Sites & Routes | modify     | `store_sites`           | | Sites & Routess| read-only  | `store_sites_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                              | |-----------------------------------------|--------------------------------------------------------------------------| | Channels                                | Create and manage catalog listings and channels                          | | Channel Site                            | Manage sites and routing for headless storefronts                        | | Channel Listings                        | Manage catalog differences among different storefronts or marketplaces   |  ## Usage Notes  **Sites and Site Routes:** * Sites and routes control the paths that make up a headless storefront * Site refers to the domain associated with a channel * Routes point to the URLs for key pages on the headless storefront. They define where the homepage is, where the cart page is, etc. * Sites and routes ensure links point where they’re supposed to and sales are attributed correctly. For example, a shopper’s order confirmation email should link back to Storefront A, where they placed their order, not Storefront B, which they’ve never visited.  ## Resources  ### Related Endpoints * [Channels](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api)
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
import Route4 from './Route4';

/**
* The Site1 model module.
* @module model/Site1
* @version 3.0
*/
export default class Site1 {
    /**
    * Constructs a new <code>Site1</code>.
    * @alias module:model/Site1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Site1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Site1} obj Optional instance to populate.
    * @return {module:model/Site1} The populated <code>Site1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Site1();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('channel_id')) {
                obj['channel_id'] = ApiClient.convertToType(data['channel_id'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('routes')) {
                obj['routes'] = ApiClient.convertToType(data['routes'], [Route4]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * The Fully Qualified URL (including host and scheme) where this site is hosted. All URLs generated for this site will be appended to this.
    * @member {String} url
    */
    'url' = undefined;
    /**
    * The channel this site is attached to. Each site belongs to a single channel, and each channel can have either zero or one sites.
    * @member {Number} channel_id
    */
    'channel_id' = undefined;
    /**
    * When was this site created? RFC 3339
    * @member {String} created_at
    */
    'created_at' = undefined;
    /**
    * When was this site defintion last updated? RFC 3339
    * @member {String} updated_at
    */
    'updated_at' = undefined;
    /**
    * (optional - if included) collection of routes defined for this site. Limited to 200 routes side loaded (query routes direction via `/routes` for bulk)
    * @member {Array.<module:model/Route4>} routes
    */
    'routes' = undefined;




}
