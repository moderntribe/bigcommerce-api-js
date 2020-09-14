'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Price Lists
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints) - [Price List Assignment Order of Operations](#price-list-assignment-order-of-operations) - [Usage Notes](#usage-notes)  A Price List allows you to populate different versions of catalog pricing and assign them to different [Customer Groups](/api-reference/customer-subscribers/customers-api). The prices are specified exclusively at the variant level.   The association of a Price List to a Customer Group can be done either via the Control Panel or using the [Customer Groups API.](/api-reference/customer-subscribers/customers-api)  Additionally, [Price List Assignments](https://developer.bigcommerce.com/api-reference/store-management/price-lists/price-lists-records/) can be created to assign Price Lists to a specific [Channel](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api). Price lists assigned to a channel apply to all shoppers on that channel, unless there is a more specific assignment.  If an active Price List does not contain prices for a variant then the Catalog pricing will be used. The association of a Price List to a Customer Group can be done either via the Control Panel or using the [Customer Groups API.](/api-reference/customer-subscribers/customers-api)  Price Lists will provide overridden price values to the Stencil storefront. Final price display can be further customized within the Stencil template. See the [Price Object](https://stencil.bigcommerce.com/docs/price-object-properties) in Stencil for further documentation.  To learn more about Price Lists, see [here](/api-docs/price-lists/price-list-overview).   ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Products                                     | modify     | `store_v2_products`                           | | Products                                     | read-only  | `store_v2_products_read_only`                 |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Price List Records                      | Create and manage price list records                                    | | Price Lists                             | Create and manage catalog pricing variations                            | | Price List Assignments                  | Assign price lists to Channels  ## Price List Assignment Order of Operations  The `Price List Assignment` Pricing Order of Operations is as follows:  **IF** `Price list` assigned to current `Customer Group` **AND** `Price List` assigned to current `Channel`: * Use this Price List -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF**: `Price List` assigned to current `Channel`: * Use this price list -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** `Price List` assigned to current `Customer Group`: * Use this price list -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** `Customer Group Discounts`: * Use them -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** `channel` has a `default price list`: * Use this price list -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE**: * Fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **Note:** Price Lists cannot be assigned to a customer group that has custom group discounts -- the customer group discounts must be deleted first.  ## Usage Notes - Price Lists cannot be assigned to a customer group that has custom group discounts -- the customer group discounts must be deleted first. - Bulk Pricing Tiers may additionally be associated with a Price Record to indicate different pricing as the quantity in cart increases. - If a variant has a `Price Record` any existing product-level bulk pricing will not apply in the cart. For variants without `Price Records`, any existing product bulk pricing will apply. - Price Lists Records accepts bulk upsert. Only one [Bulk upsert](https://developer.bigcommerce.com/api-reference/catalog/pricelists-api/price-lists-records/setpricelistrecordcollection) can done at a time. Running more than one in parallel on the **same store** will cause a 429 error and the request will fail.   ### Related Endpoints * [Get Price List Collection](/api-reference/catalog/pricelists-api/price-lists/getpricelistcollection)  ### Webhooks Available There are no direct webhooks available for Price Lists. Since Price Lists directly relate to products, webhooks related to products will fire for corresponding changes such as pricing.   * [Products](/api-docs/getting-started/webhooks/webhook-events#webhook-events_products) * [SKU](/api-docs/getting-started/webhooks/webhook-events#webhook-events_sku)
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

var _Pagination1Links = require('./Pagination1Links');

var _Pagination1Links2 = _interopRequireDefault(_Pagination1Links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Pagination1 model module.
* @module model/Pagination1
* @version 3.0
*/
var Pagination1 = function () {
    /**
    * Constructs a new <code>Pagination1</code>.
    * Data about the response, including pagination and collection totals.
    * @alias module:model/Pagination1
    * @class
    */

    function Pagination1() {
        _classCallCheck(this, Pagination1);

        this['total'] = undefined;
        this['count'] = undefined;
        this['per_page'] = undefined;
        this['current_page'] = undefined;
        this['total_pages'] = undefined;
        this['links'] = undefined;
    }

    /**
    * Constructs a <code>Pagination1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Pagination1} obj Optional instance to populate.
    * @return {module:model/Pagination1} The populated <code>Pagination1</code> instance.
    */


    _createClass(Pagination1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Pagination1();

                if (data.hasOwnProperty('total')) {
                    obj['total'] = _ApiClient2.default.convertToType(data['total'], 'Number');
                }
                if (data.hasOwnProperty('count')) {
                    obj['count'] = _ApiClient2.default.convertToType(data['count'], 'Number');
                }
                if (data.hasOwnProperty('per_page')) {
                    obj['per_page'] = _ApiClient2.default.convertToType(data['per_page'], 'Number');
                }
                if (data.hasOwnProperty('current_page')) {
                    obj['current_page'] = _ApiClient2.default.convertToType(data['current_page'], 'Number');
                }
                if (data.hasOwnProperty('total_pages')) {
                    obj['total_pages'] = _ApiClient2.default.convertToType(data['total_pages'], 'Number');
                }
                if (data.hasOwnProperty('links')) {
                    obj['links'] = _Pagination1Links2.default.constructFromObject(data['links']);
                }
            }
            return obj;
        }

        /**
        * Total number of items in the result set. 
        * @member {Number} total
        */

        /**
        * Total number of items in the collection response. 
        * @member {Number} count
        */

        /**
        * The amount of items returned in the collection per page, controlled by the limit parameter. 
        * @member {Number} per_page
        */

        /**
        * The page you are currently on within the collection. 
        * @member {Number} current_page
        */

        /**
        * The total number of pages in the collection. 
        * @member {Number} total_pages
        */

        /**
        * @member {module:model/Pagination1Links} links
        */

    }]);

    return Pagination1;
}();

exports.default = Pagination1;