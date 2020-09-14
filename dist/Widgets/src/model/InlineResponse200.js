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

var _Pagination = require('./Pagination1');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The InlineResponse200 model module.
* @module model/InlineResponse200
* @version 3.0
*/
var InlineResponse200 = function () {
    /**
    * Constructs a new <code>InlineResponse200</code>.
    * @alias module:model/InlineResponse200
    * @class
    */

    function InlineResponse200() {
        _classCallCheck(this, InlineResponse200);

        this['data'] = undefined;
        this['meta'] = undefined;
    }

    /**
    * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse200} obj Optional instance to populate.
    * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
    */


    _createClass(InlineResponse200, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new InlineResponse200();

                if (data.hasOwnProperty('data')) {
                    obj['data'] = _ApiClient2.default.convertToType(data['data'], [AllOfinlineResponse200DataItems]);
                }
                if (data.hasOwnProperty('meta')) {
                    obj['meta'] = _Pagination2.default.constructFromObject(data['meta']);
                }
            }
            return obj;
        }

        /**
        * @member {Array.<Object>} data
        */

        /**
        * @member {module:model/Pagination1} meta
        */

    }]);

    return InlineResponse200;
}();

exports.default = InlineResponse200;