'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Catalog
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Differentiating Variants & Modifiers](#variants-and-modifiers) - [Available Endpoints](#available-endpoints) - [Resources](#resources)  The Catalog API manages products, brands and categories for a store. To learn more about the Catalog resources see [Catalog Products](https://developer.bigcommerce.com/api-docs/catalog/products-overview) and [Categories](https://developer.bigcommerce.com/api-docs/catalog/products-overview#products-overview_categories).  ## OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | modify     | `store_v2_products`           | | Products | read-only  | `store_v2_products_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Differentiating Variants and Modifiers [Variants](https://support.bigcommerce.com/s/article/Product-Options-v3#variations) represent a physical product made up of [Product Option](https://support.bigcommerce.com/s/article/Product-Options-v3) choices, i.e. a large blue t-shirt. Each variant can have a unique SKU.  Modifiers represent a choice a customer makes about a product that doesn't represent a physical item, i.e. text to be printed on a t-shirt. Assigning a SKU to a modifier will turn it into a variant.  See [Variant Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#variant-options) and [Modifier Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#modifier-options) for more information.  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Brand Images                            | Create and manage brand images                                          | | Brand Metafields                        | Create and manage brand metafields                                      | | Brands                                  | Create and manage brands                                                | | Catalog                                 | Create and manage store categories, products, and brands                | | Categories                              | Create and manage categorties                                           | | Category Images                         | Create and manage category images                                       | | Category Metafields                     | Create and manage category metafields                                   | | Product Bulk Pricing Rules              | Create and manage product bulk pricing rules                            | | Product Complex Rules                   | Create and manage product complex rules                                 | | Product Custom Fields                   | Create and manage product custom fields                                 | | Product Images                          | Create and manage product images                                        | | Product Metafields                      | Create and manage product meta fields                                   | | Product Modifier Images                 | Create and manage product modifer images                                | | Product Modifier Values                 | Create and manage product modifier values                               | | Product Modifiers                       | Create and manage product midifiers                                     | | Product Reviews                         | Create and manage product reviews                                       | | Product Variant Option Values           | Create and manage product variant option values                         | | Product Variant Options                 | Create and manage product variant options                               | | Product Variants                        | Create and manage product variants                                      | | Product Videos                          | Create and manage product videos                                        | | Products                                | Create and manage products                                              | | ProductVariant Metafields               | Create and manage product meta flields                                  | | Variants                                | Get and update all variants                                             |  ## Resources  ### Webhooks * [Products](/api-docs/getting-started/webhooks/webhook-events#webhook-events_products) * [Categories](/api-docs/getting-started/webhooks/webhook-events#webhook-events_category) * [SKU](/api-docs/getting-started/webhooks/webhook-events#webhook-events_sku)  ### Related Endpoints * [Catalog API](/api-reference/catalog/catalog-api)
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

var _Adjuster = require('./Adjuster');

var _Adjuster2 = _interopRequireDefault(_Adjuster);

var _ComplexRuleCondition = require('./ComplexRuleCondition');

var _ComplexRuleCondition2 = _interopRequireDefault(_ComplexRuleCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ComplexRule1 model module.
* @module model/ComplexRule1
* @version 3.0
*/
var ComplexRule1 = function () {
    /**
    * Constructs a new <code>ComplexRule1</code>.
    * Common ComplexRule properties.
    * @alias module:model/ComplexRule1
    * @class
    */

    function ComplexRule1() {
        _classCallCheck(this, ComplexRule1);

        this['id'] = undefined;
        this['product_id'] = undefined;
        this['sort_order'] = undefined;
        this['enabled'] = undefined;
        this['stop'] = undefined;
        this['purchasing_disabled'] = undefined;
        this['purchasing_disabled_message'] = undefined;
        this['purchasing_hidden'] = undefined;
        this['image_url'] = undefined;
        this['price_adjuster'] = undefined;
        this['weight_adjuster'] = undefined;
        this['conditions'] = undefined;
    }

    /**
    * Constructs a <code>ComplexRule1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ComplexRule1} obj Optional instance to populate.
    * @return {module:model/ComplexRule1} The populated <code>ComplexRule1</code> instance.
    */


    _createClass(ComplexRule1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ComplexRule1();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('product_id')) {
                    obj['product_id'] = _ApiClient2.default.convertToType(data['product_id'], 'Number');
                }
                if (data.hasOwnProperty('sort_order')) {
                    obj['sort_order'] = _ApiClient2.default.convertToType(data['sort_order'], 'Number');
                }
                if (data.hasOwnProperty('enabled')) {
                    obj['enabled'] = _ApiClient2.default.convertToType(data['enabled'], 'Boolean');
                }
                if (data.hasOwnProperty('stop')) {
                    obj['stop'] = _ApiClient2.default.convertToType(data['stop'], 'Boolean');
                }
                if (data.hasOwnProperty('purchasing_disabled')) {
                    obj['purchasing_disabled'] = _ApiClient2.default.convertToType(data['purchasing_disabled'], 'Boolean');
                }
                if (data.hasOwnProperty('purchasing_disabled_message')) {
                    obj['purchasing_disabled_message'] = _ApiClient2.default.convertToType(data['purchasing_disabled_message'], 'String');
                }
                if (data.hasOwnProperty('purchasing_hidden')) {
                    obj['purchasing_hidden'] = _ApiClient2.default.convertToType(data['purchasing_hidden'], 'Boolean');
                }
                if (data.hasOwnProperty('image_url')) {
                    obj['image_url'] = _ApiClient2.default.convertToType(data['image_url'], 'String');
                }
                if (data.hasOwnProperty('price_adjuster')) {
                    obj['price_adjuster'] = _Adjuster2.default.constructFromObject(data['price_adjuster']);
                }
                if (data.hasOwnProperty('weight_adjuster')) {
                    obj['weight_adjuster'] = _Adjuster2.default.constructFromObject(data['weight_adjuster']);
                }
                if (data.hasOwnProperty('conditions')) {
                    obj['conditions'] = _ApiClient2.default.convertToType(data['conditions'], [_ComplexRuleCondition2.default]);
                }
            }
            return obj;
        }

        /**
        * The unique numeric ID of the rule; increments sequentially. Read-Only
        * @member {Number} id
        */

        /**
        * The unique numeric ID of the product with which the rule is associated; increments sequentially. 
        * @member {Number} product_id
        */

        /**
        * The priority to give this rule when making adjustments to the product properties. 
        * @member {Number} sort_order
        */

        /**
        * Flag for determining whether the rule is to be used when adjusting a product's price, weight, image, or availabilty. 
        * @member {Boolean} enabled
        */

        /**
        * Flag for determining whether other rules should not be applied after this rule has been applied. 
        * @member {Boolean} stop
        */

        /**
        * Flag for determining whether the rule should disable purchasing of a product when the conditions are applied. 
        * @member {Boolean} purchasing_disabled
        */

        /**
        * Message displayed on the storefront when a rule disables the purchasing of a product. 
        * @member {String} purchasing_disabled_message
        */

        /**
        * Flag for determining whether the rule should hide purchasing of a product when the conditions are applied. 
        * @member {Boolean} purchasing_hidden
        */

        /**
        * The URL for an image displayed on the storefront when the conditions are applied. Limit of 8MB per file.  
        * @member {String} image_url
        */

        /**
        * @member {module:model/Adjuster} price_adjuster
        */

        /**
        * @member {module:model/Adjuster} weight_adjuster
        */

        /**
        * @member {Array.<module:model/ComplexRuleCondition>} conditions
        */

    }]);

    return ComplexRule1;
}();

exports.default = ComplexRule1;