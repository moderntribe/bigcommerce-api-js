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
* The WidgetPost model module.
* @module model/WidgetPost
* @version 3.0
*/
var WidgetPost = function () {
    /**
    * Constructs a new <code>WidgetPost</code>.
    * @alias module:model/WidgetPost
    * @class
    * @param name {String} User friendly name.
    * @param widgetTemplateUuid {String} The widget template UUID.
    */

    function WidgetPost(name, widgetTemplateUuid) {
        _classCallCheck(this, WidgetPost);

        this['name'] = undefined;
        this['description'] = undefined;
        this['widget_configuration'] = undefined;
        this['widget_template_uuid'] = undefined;


        this['name'] = name;
        this['widget_template_uuid'] = widgetTemplateUuid;
    }

    /**
    * Constructs a <code>WidgetPost</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WidgetPost} obj Optional instance to populate.
    * @return {module:model/WidgetPost} The populated <code>WidgetPost</code> instance.
    */


    _createClass(WidgetPost, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WidgetPost();

                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('widget_configuration')) {
                    obj['widget_configuration'] = _ApiClient2.default.convertToType(data['widget_configuration'], Object);
                }
                if (data.hasOwnProperty('widget_template_uuid')) {
                    obj['widget_template_uuid'] = _ApiClient2.default.convertToType(data['widget_template_uuid'], 'String');
                }
            }
            return obj;
        }

        /**
        * User friendly name.
        * @member {String} name
        */

        /**
        * The user-friendly description.
        * @member {String} description
        */

        /**
        * The JSON data that populates the template.
        * @member {Object} widget_configuration
        */

        /**
        * The widget template UUID.
        * @member {String} widget_template_uuid
        */

    }]);

    return WidgetPost;
}();

exports.default = WidgetPost;