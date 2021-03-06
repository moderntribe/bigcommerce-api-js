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
* The WidgetTemplatePut model module.
* @module model/WidgetTemplatePut
* @version 3.0
*/
export default class WidgetTemplatePut {
    /**
    * Constructs a new <code>WidgetTemplatePut</code>.
    * @alias module:model/WidgetTemplatePut
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>WidgetTemplatePut</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WidgetTemplatePut} obj Optional instance to populate.
    * @return {module:model/WidgetTemplatePut} The populated <code>WidgetTemplatePut</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WidgetTemplatePut();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], [Object]);
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], 'String');
            }
        }
        return obj;
    }

    /**
    * The user-friendly name.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The schema for the widget's merchant-facing UI. For more information, see [Page Builder Overview](https://developer.bigcommerce.com/stencil-docs/page-builder/page-builder-overview) 
    * @member {Array.<Object>} schema
    */
    'schema' = undefined;
    /**
    * The widget template HTML. Supports Handlebars and Paper helpers.
    * @member {String} template
    */
    'template' = undefined;




}
