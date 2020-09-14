'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Orders V2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * `/orders`endpoints integrate with point-of-sale, shipping, distribution, and inventory-management systems.  ## Order The Order object contains a record of the purchase agreement between a shopper and a merchant. To learn more about creating orders, see [Orders API Guide](/api-docs/orders/orders-api-overview).  ### Currency Fields  * `currency_code` - the display currency used to present prices to the shopper on the storefront. * `currency_exchange_rate`: the exchange rate between the store's default currency and the display currency; when the order is created by means of the V2 endpoints, this value is always 1 (only in the storefront this value can be different to 1).  The following additional fields are returned on orders when Multi-Currency is enabled on the store:  * `store_default_currency_code` - the store's default currency * `store_default_to_transactional_exchange_rate` - the exchange rate between the store's default currency and the transactional currency used in the order.  **Example:**  ```json {   //...   \"currency_id\": 4,   \"currency_code\": \"EUR\",   \"currency_exchange_rate\": 1,   \"default_currency_id\": 4,   \"default_currency_code\": \"EUR\",   \"store_default_currency_code: \"USD\",   \"store_default_to_transactional_exchange_rate\": \"100.0000000000\"   //... }  ```  ## Order Coupons Coupon code applied to an order.  ## Order Messages Messages associated with an order.  ## Order Products Product line items belonging to an order.  ## Order Shipping Addresses Customer shipping address belonging to an order.  ## Order Statuses Each order status represents a state in the order-fulfillment workflow.  ## Order Taxes Each tax applied to an order. This information can be useful for reporting purposes. All values are read-only.  ## Order Shipments Tracks a package consignment from an order that is shipped from the seller to the buyer.  ## Order Shipping Addresses Quotes Read Only. Gets all shipping quotes from an order.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _OrdersorderIdshipmentsItems = require('./OrdersorderIdshipmentsItems');

var _OrdersorderIdshipmentsItems2 = _interopRequireDefault(_OrdersorderIdshipmentsItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The OrderShipmentPost model module.
* @module model/OrderShipmentPost
* @version 2.0
*/
var OrderShipmentPost = function () {
    /**
    * Constructs a new <code>OrderShipmentPost</code>.
    * @alias module:model/OrderShipmentPost
    * @class
    */

    function OrderShipmentPost() {
        _classCallCheck(this, OrderShipmentPost);

        this['order_address_id'] = undefined;
        this['tracking_number'] = undefined;
        this['shipping_method'] = undefined;
        this['shipping_provider'] = undefined;
        this['tracking_carrier'] = undefined;
        this['comments'] = undefined;
        this['items'] = undefined;
    }

    /**
    * Constructs a <code>OrderShipmentPost</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderShipmentPost} obj Optional instance to populate.
    * @return {module:model/OrderShipmentPost} The populated <code>OrderShipmentPost</code> instance.
    */


    _createClass(OrderShipmentPost, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OrderShipmentPost();

                if (data.hasOwnProperty('order_address_id')) {
                    obj['order_address_id'] = _ApiClient2.default.convertToType(data['order_address_id'], 'Number');
                }
                if (data.hasOwnProperty('tracking_number')) {
                    obj['tracking_number'] = _ApiClient2.default.convertToType(data['tracking_number'], 'String');
                }
                if (data.hasOwnProperty('shipping_method')) {
                    obj['shipping_method'] = _ApiClient2.default.convertToType(data['shipping_method'], 'String');
                }
                if (data.hasOwnProperty('shipping_provider')) {
                    obj['shipping_provider'] = _ApiClient2.default.convertToType(data['shipping_provider'], 'String');
                }
                if (data.hasOwnProperty('tracking_carrier')) {
                    obj['tracking_carrier'] = _ApiClient2.default.convertToType(data['tracking_carrier'], 'String');
                }
                if (data.hasOwnProperty('comments')) {
                    obj['comments'] = _ApiClient2.default.convertToType(data['comments'], 'String');
                }
                if (data.hasOwnProperty('items')) {
                    obj['items'] = _ApiClient2.default.convertToType(data['items'], [_OrdersorderIdshipmentsItems2.default]);
                }
            }
            return obj;
        }

        /**
        * ID of the desired `shipping_address` associated with the shipment.
        * @member {Number} order_address_id
        */

        /**
        * Tracking number of the shipment.
        * @member {String} tracking_number
        */

        /**
        * Additional information to describe the method of shipment (ex. Standard, Ship by Weight, Custom Shipment). Can be used for live quotes from certain shipping providers. If different from `shipping_provider`, `shipping_method` should correspond to `tracking_carrier`. 
        * @member {String} shipping_method
        */

        /**
        * Enum of the BigCommerce shipping-carrier integration/module.
        * @member {module:model/OrderShipmentPost.ShippingProviderEnum} shipping_provider
        */

        /**
        * Tracking carrier for the shipment. Acceptable values include an empty string (`\"\"`) or one of the valid tracking-carrier values viewable [here](https://docs.google.com/spreadsheets/d/1w9c_aECSCGyf-oOrvGeUniDl-ARGKemfZl0qSsav8D4/pubhtml?gid=0&single=true) and downloadable as a .CSV file [here](https://docs.google.com/spreadsheets/d/1mTueEynfcEmwsU2y2Jd2MX-8GKwNZrmlRMBcIElg9aY/pub?gid=0&single=true&output=csv).
        * @member {String} tracking_carrier
        */

        /**
        * Comments the shipper wishes to add.
        * @member {String} comments
        */

        /**
        * The items in the shipment. This object has the following members, all integer: order_product_id (required), quantity (required), product_id (read-only). A sample items value might be: [ {\"order_product_id\":16,\"product_id\": 0,\"quantity\":2} ]
        * @member {Array.<module:model/OrdersorderIdshipmentsItems>} items
        */


        /**
        * Allowed values for the <code>shipping_provider</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return OrderShipmentPost;
}();

OrderShipmentPost.ShippingProviderEnum = {
    /**
     * value: "auspost"
     * @const
     */
    "auspost": "auspost",
    /**
     * value: "canadapost"
     * @const
     */
    "canadapost": "canadapost",
    /**
     * value: "endicia"
     * @const
     */
    "endicia": "endicia",
    /**
     * value: "usps"
     * @const
     */
    "usps": "usps",
    /**
     * value: "fedex"
     * @const
     */
    "fedex": "fedex",
    /**
     * value: "ups"
     * @const
     */
    "ups": "ups",
    /**
     * value: "upsready"
     * @const
     */
    "upsready": "upsready",
    /**
     * value: "upsonline"
     * @const
     */
    "upsonline": "upsonline",
    /**
     * value: "shipperhq"
     * @const
     */
    "shipperhq": "shipperhq" };
exports.default = OrderShipmentPost;