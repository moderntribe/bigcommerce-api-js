/**
 * Widgets
 * Widgets API allows developers to programatically inject content into a BigCommerce theme. To learn how to use Widgets, see our [Widgets Overview](/api-docs/storefront/widgets/widgets-overview).
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
* The AllOfinlineResponse200DataItems model module.
* @module model/AllOfinlineResponse200DataItems
* @version 3.0
*/
export default class AllOfinlineResponse200DataItems {
    /**
    * Constructs a new <code>AllOfinlineResponse200DataItems</code>.
    * @alias module:model/AllOfinlineResponse200DataItems
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AllOfinlineResponse200DataItems</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfinlineResponse200DataItems} obj Optional instance to populate.
    * @return {module:model/AllOfinlineResponse200DataItems} The populated <code>AllOfinlineResponse200DataItems</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfinlineResponse200DataItems();
                        
            
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('date_created')) {
                obj['date_created'] = ApiClient.convertToType(data['date_created'], 'String');
            }
            if (data.hasOwnProperty('date_modified')) {
                obj['date_modified'] = ApiClient.convertToType(data['date_modified'], 'String');
            }
        }
        return obj;
    }

    /**
    * The primary identifier.
    * @member {String} uuid
    */
    'uuid' = undefined;
    /**
    * The kind of widget template.
    * @member {String} kind
    */
    'kind' = undefined;
    /**
    * The date on which this object was initially created.
    * @member {String} date_created
    */
    'date_created' = undefined;
    /**
    * The date on which this object was last updated.
    * @member {String} date_modified
    */
    'date_modified' = undefined;




}
