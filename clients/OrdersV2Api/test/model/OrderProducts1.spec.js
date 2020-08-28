/*
 * Orders V2
 * `/orders`endpoints integrate with point-of-sale, shipping, distribution, and inventory-management systems.  ## Order The Order object contains a record of the purchase agreement between a shopper and a merchant. To learn more about creating orders, see [Orders API Guide](/api-docs/orders/orders-api-overview).  ### Currency Fields  * `currency_code` - the display currency used to present prices to the shopper on the storefront. * `currency_exchange_rate`: the exchange rate between the store's default currency and the display currency; when the order is created by means of the V2 endpoints, this value is always 1 (only in the storefront this value can be different to 1).  The following additional fields are returned on orders when Multi-Currency is enabled on the store:  * `store_default_currency_code` - the store's default currency * `store_default_to_transactional_exchange_rate` - the exchange rate between the store's default currency and the transactional currency used in the order.  **Example:**  ```json {   //...   \"currency_id\": 4,   \"currency_code\": \"EUR\",   \"currency_exchange_rate\": 1,   \"default_currency_id\": 4,   \"default_currency_code\": \"EUR\",   \"store_default_currency_code: \"USD\",   \"store_default_to_transactional_exchange_rate\": \"100.0000000000\"   //... }  ```  ## Order Coupons Coupon code applied to an order.  ## Order Messages Messages associated with an order.  ## Order Products Product line items belonging to an order.  ## Order Shipping Addresses Customer shipping address belonging to an order.  ## Order Statuses Each order status represents a state in the order-fulfillment workflow.  ## Order Taxes Each tax applied to an order. This information can be useful for reporting purposes. All values are read-only.  ## Order Shipments Tracks a package consignment from an order that is shipped from the seller to the buyer.  ## Order Shipping Addresses Quotes Read Only. Gets all shipping quotes from an order.
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.21
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OrdersV2);
  }
}(this, function(expect, OrdersV2) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('OrderProducts1', function() {
      beforeEach(function() {
        instance = new OrdersV2.OrderProducts1();
      });

      it('should create an instance of OrderProducts1', function() {
        expect(instance).to.be.a(OrdersV2.OrderProducts1);
      });

      it('should have the property id (base name: "id")', function() {
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property order_id (base name: "order_id")', function() {
        expect(instance).to.have.property('order_id');
        // expect(instance.order_id).to.be(expectedValueLiteral);
      });

      it('should have the property product_id (base name: "product_id")', function() {
        expect(instance).to.have.property('product_id');
        // expect(instance.product_id).to.be(expectedValueLiteral);
      });

      it('should have the property order_address_id (base name: "order_address_id")', function() {
        expect(instance).to.have.property('order_address_id');
        // expect(instance.order_address_id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property sku (base name: "sku")', function() {
        expect(instance).to.have.property('sku');
        // expect(instance.sku).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property base_price (base name: "base_price")', function() {
        expect(instance).to.have.property('base_price');
        // expect(instance.base_price).to.be(expectedValueLiteral);
      });

      it('should have the property price_ex_tax (base name: "price_ex_tax")', function() {
        expect(instance).to.have.property('price_ex_tax');
        // expect(instance.price_ex_tax).to.be(expectedValueLiteral);
      });

      it('should have the property price_inc_tax (base name: "price_inc_tax")', function() {
        expect(instance).to.have.property('price_inc_tax');
        // expect(instance.price_inc_tax).to.be(expectedValueLiteral);
      });

      it('should have the property price_tax (base name: "price_tax")', function() {
        expect(instance).to.have.property('price_tax');
        // expect(instance.price_tax).to.be(expectedValueLiteral);
      });

      it('should have the property base_total (base name: "base_total")', function() {
        expect(instance).to.have.property('base_total');
        // expect(instance.base_total).to.be(expectedValueLiteral);
      });

      it('should have the property total_ex_tax (base name: "total_ex_tax")', function() {
        expect(instance).to.have.property('total_ex_tax');
        // expect(instance.total_ex_tax).to.be(expectedValueLiteral);
      });

      it('should have the property total_inc_tax (base name: "total_inc_tax")', function() {
        expect(instance).to.have.property('total_inc_tax');
        // expect(instance.total_inc_tax).to.be(expectedValueLiteral);
      });

      it('should have the property total_tax (base name: "total_tax")', function() {
        expect(instance).to.have.property('total_tax');
        // expect(instance.total_tax).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property base_cost_price (base name: "base_cost_price")', function() {
        expect(instance).to.have.property('base_cost_price');
        // expect(instance.base_cost_price).to.be(expectedValueLiteral);
      });

      it('should have the property cost_price_inc_tax (base name: "cost_price_inc_tax")', function() {
        expect(instance).to.have.property('cost_price_inc_tax');
        // expect(instance.cost_price_inc_tax).to.be(expectedValueLiteral);
      });

      it('should have the property cost_price_ex_tax (base name: "cost_price_ex_tax")', function() {
        expect(instance).to.have.property('cost_price_ex_tax');
        // expect(instance.cost_price_ex_tax).to.be(expectedValueLiteral);
      });

      it('should have the property weight (base name: "weight")', function() {
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

      it('should have the property cost_price_tax (base name: "cost_price_tax")', function() {
        expect(instance).to.have.property('cost_price_tax');
        // expect(instance.cost_price_tax).to.be(expectedValueLiteral);
      });

      it('should have the property is_refunded (base name: "is_refunded")', function() {
        expect(instance).to.have.property('is_refunded');
        // expect(instance.is_refunded).to.be(expectedValueLiteral);
      });

      it('should have the property refunded_amount (base name: "refunded_amount")', function() {
        expect(instance).to.have.property('refunded_amount');
        // expect(instance.refunded_amount).to.be(expectedValueLiteral);
      });

      it('should have the property return_id (base name: "return_id")', function() {
        expect(instance).to.have.property('return_id');
        // expect(instance.return_id).to.be(expectedValueLiteral);
      });

      it('should have the property wrapping_name (base name: "wrapping_name")', function() {
        expect(instance).to.have.property('wrapping_name');
        // expect(instance.wrapping_name).to.be(expectedValueLiteral);
      });

      it('should have the property base_wrapping_cost (base name: "base_wrapping_cost")', function() {
        expect(instance).to.have.property('base_wrapping_cost');
        // expect(instance.base_wrapping_cost).to.be(expectedValueLiteral);
      });

      it('should have the property wrapping_cost_ex_tax (base name: "wrapping_cost_ex_tax")', function() {
        expect(instance).to.have.property('wrapping_cost_ex_tax');
        // expect(instance.wrapping_cost_ex_tax).to.be(expectedValueLiteral);
      });

      it('should have the property wrapping_cost_inc_tax (base name: "wrapping_cost_inc_tax")', function() {
        expect(instance).to.have.property('wrapping_cost_inc_tax');
        // expect(instance.wrapping_cost_inc_tax).to.be(expectedValueLiteral);
      });

      it('should have the property wrapping_cost_tax (base name: "wrapping_cost_tax")', function() {
        expect(instance).to.have.property('wrapping_cost_tax');
        // expect(instance.wrapping_cost_tax).to.be(expectedValueLiteral);
      });

      it('should have the property wrapping_message (base name: "wrapping_message")', function() {
        expect(instance).to.have.property('wrapping_message');
        // expect(instance.wrapping_message).to.be(expectedValueLiteral);
      });

      it('should have the property quantity_shipped (base name: "quantity_shipped")', function() {
        expect(instance).to.have.property('quantity_shipped');
        // expect(instance.quantity_shipped).to.be(expectedValueLiteral);
      });

      it('should have the property event_name (base name: "event_name")', function() {
        expect(instance).to.have.property('event_name');
        // expect(instance.event_name).to.be(expectedValueLiteral);
      });

      it('should have the property event_date (base name: "event_date")', function() {
        expect(instance).to.have.property('event_date');
        // expect(instance.event_date).to.be(expectedValueLiteral);
      });

      it('should have the property fixed_shipping_cost (base name: "fixed_shipping_cost")', function() {
        expect(instance).to.have.property('fixed_shipping_cost');
        // expect(instance.fixed_shipping_cost).to.be(expectedValueLiteral);
      });

      it('should have the property ebay_item_id (base name: "ebay_item_id")', function() {
        expect(instance).to.have.property('ebay_item_id');
        // expect(instance.ebay_item_id).to.be(expectedValueLiteral);
      });

      it('should have the property ebay_transaction_id (base name: "ebay_transaction_id")', function() {
        expect(instance).to.have.property('ebay_transaction_id');
        // expect(instance.ebay_transaction_id).to.be(expectedValueLiteral);
      });

      it('should have the property option_set_id (base name: "option_set_id")', function() {
        expect(instance).to.have.property('option_set_id');
        // expect(instance.option_set_id).to.be(expectedValueLiteral);
      });

      it('should have the property parent_order_product_id (base name: "parent_order_product_id")', function() {
        expect(instance).to.have.property('parent_order_product_id');
        // expect(instance.parent_order_product_id).to.be(expectedValueLiteral);
      });

      it('should have the property is_bundled_product (base name: "is_bundled_product")', function() {
        expect(instance).to.have.property('is_bundled_product');
        // expect(instance.is_bundled_product).to.be(expectedValueLiteral);
      });

      it('should have the property bin_picking_number (base name: "bin_picking_number")', function() {
        expect(instance).to.have.property('bin_picking_number');
        // expect(instance.bin_picking_number).to.be(expectedValueLiteral);
      });

      it('should have the property applied_discounts (base name: "applied_discounts")', function() {
        expect(instance).to.have.property('applied_discounts');
        // expect(instance.applied_discounts).to.be(expectedValueLiteral);
      });

      it('should have the property product_options (base name: "product_options")', function() {
        expect(instance).to.have.property('product_options');
        // expect(instance.product_options).to.be(expectedValueLiteral);
      });

      it('should have the property external_id (base name: "external_id")', function() {
        expect(instance).to.have.property('external_id');
        // expect(instance.external_id).to.be(expectedValueLiteral);
      });

      it('should have the property upc (base name: "upc")', function() {
        expect(instance).to.have.property('upc');
        // expect(instance.upc).to.be(expectedValueLiteral);
      });

      it('should have the property variant_id (base name: "variant_id")', function() {
        expect(instance).to.have.property('variant_id');
        // expect(instance.variant_id).to.be(expectedValueLiteral);
      });

    });
  });

}));
