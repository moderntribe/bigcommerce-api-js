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
* The WidgetSchema model module.
* @module model/WidgetSchema
* @version 3.0
*/
export default class WidgetSchema extends Array {
    /**
    * Constructs a new <code>WidgetSchema</code>.
    * The schema for the widget&#x27;s merchant-facing UI. For more information, see [Page Builder Overview](https://developer.bigcommerce.com/stencil-docs/page-builder/page-builder-overview) 
    * @alias module:model/WidgetSchema
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>WidgetSchema</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WidgetSchema} obj Optional instance to populate.
    * @return {module:model/WidgetSchema} The populated <code>WidgetSchema</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WidgetSchema();
            ApiClient.constructFromObject(data, obj, 'Object');
            
            
        }
        return obj;
    }





}
