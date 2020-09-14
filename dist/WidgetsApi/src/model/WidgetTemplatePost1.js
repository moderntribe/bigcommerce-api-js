'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The WidgetTemplatePost1 model module.
* @module model/WidgetTemplatePost1
* @version 3.0
*/
var WidgetTemplatePost1 = function () {
    /**
    * Constructs a new <code>WidgetTemplatePost1</code>.
    * @alias module:model/WidgetTemplatePost1
    * @class
    * @param name {String} User friendly name.
    * @param template {String} Handlebars HTML content. Also has access to Stencil Paper helpers.
    */

    function WidgetTemplatePost1(name, template) {
        _classCallCheck(this, WidgetTemplatePost1);

        this['name'] = undefined;
        this['schema'] = undefined;
        this['template'] = undefined;


        this['name'] = name;
        this['template'] = template;
    }

    /**
    * Constructs a <code>WidgetTemplatePost1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WidgetTemplatePost1} obj Optional instance to populate.
    * @return {module:model/WidgetTemplatePost1} The populated <code>WidgetTemplatePost1</code> instance.
    */


    _createClass(WidgetTemplatePost1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WidgetTemplatePost1();

                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('schema')) {
                    obj['schema'] = _ApiClient2.default.convertToType(data['schema'], [Object]);
                }
                if (data.hasOwnProperty('template')) {
                    obj['template'] = _ApiClient2.default.convertToType(data['template'], 'String');
                }
            }
            return obj;
        }

        /**
        * User friendly name.
        * @member {String} name
        */

        /**
        * The schema for the widget's merchant-facing UI. For more information, see [Page Builder Overview](https://developer.bigcommerce.com/stencil-docs/page-builder/page-builder-overview) 
        * @member {Array.<Object>} schema
        */

        /**
        * Handlebars HTML content. Also has access to Stencil Paper helpers.
        * @member {String} template
        */

    }]);

    return WidgetTemplatePost1;
}();

exports.default = WidgetTemplatePost1;