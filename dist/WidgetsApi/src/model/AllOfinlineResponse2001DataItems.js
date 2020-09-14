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
* The AllOfinlineResponse2001DataItems model module.
* @module model/AllOfinlineResponse2001DataItems
* @version 3.0
*/
var AllOfinlineResponse2001DataItems = function () {
    /**
    * Constructs a new <code>AllOfinlineResponse2001DataItems</code>.
    * @alias module:model/AllOfinlineResponse2001DataItems
    * @class
    */

    function AllOfinlineResponse2001DataItems() {
        _classCallCheck(this, AllOfinlineResponse2001DataItems);

        this['uuid'] = undefined;
        this['widget_template'] = undefined;
        this['date_created'] = undefined;
        this['date_modified'] = undefined;
    }

    /**
    * Constructs a <code>AllOfinlineResponse2001DataItems</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfinlineResponse2001DataItems} obj Optional instance to populate.
    * @return {module:model/AllOfinlineResponse2001DataItems} The populated <code>AllOfinlineResponse2001DataItems</code> instance.
    */


    _createClass(AllOfinlineResponse2001DataItems, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AllOfinlineResponse2001DataItems();

                if (data.hasOwnProperty('uuid')) {
                    obj['uuid'] = _ApiClient2.default.convertToType(data['uuid'], 'String');
                }
                if (data.hasOwnProperty('widget_template')) {
                    obj['widget_template'] = _ApiClient2.default.convertToType(data['widget_template'], Object);
                }
                if (data.hasOwnProperty('date_created')) {
                    obj['date_created'] = _ApiClient2.default.convertToType(data['date_created'], 'String');
                }
                if (data.hasOwnProperty('date_modified')) {
                    obj['date_modified'] = _ApiClient2.default.convertToType(data['date_modified'], 'String');
                }
            }
            return obj;
        }

        /**
        * The primary identifier.
        * @member {String} uuid
        */

        /**
        * @member {Object} widget_template
        */

        /**
        * The date on which this object was initially created.
        * @member {String} date_created
        */

        /**
        * The date on which this object was last updated.
        * @member {String} date_modified
        */

    }]);

    return AllOfinlineResponse2001DataItems;
}();

exports.default = AllOfinlineResponse2001DataItems;