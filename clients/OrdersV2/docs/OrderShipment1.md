# OrdersV2.OrderShipment1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Shipment ID. | [optional] 
**orderId** | **Number** | ID of the order associated with this shipment. | [optional] 
**customerId** | **Number** | ID of this order’s customer. | [optional] 
**orderAddressId** | **Number** | ID of the desired &#x60;shipping_address&#x60; associated with the shipment. | [optional] 
**dateCreated** | **String** | Creation date for the shipment. | [optional] 
**trackingNumber** | **String** | Tracking number of the shipment. | [optional] 
**shippingMethod** | **String** | Additional information to describe the method of shipment (ex. Standard, Ship by Weight, Custom Shipment). Can be used for live quotes from certain shipping providers. If different from &#x60;shipping_provider&#x60;, &#x60;shipping_method&#x60; should correspond to &#x60;tracking_carrier&#x60;. | [optional] 
**shippingProvider** | **String** | Enum of the BigCommerce shipping-carrier integration/module.  | [optional] 
**trackingCarrier** | **String** | Tracking carrier for the shipment. Acceptable values include an empty string (&#x60;\&quot;\&quot;&#x60;) or one of the valid tracking-carrier values viewable [here](https://docs.google.com/spreadsheets/d/1w9c_aECSCGyf-oOrvGeUniDl-ARGKemfZl0qSsav8D4/pubhtml?gid&#x3D;0&amp;single&#x3D;true) and downloadable as a .CSV file [here](https://docs.google.com/spreadsheets/d/1mTueEynfcEmwsU2y2Jd2MX-8GKwNZrmlRMBcIElg9aY/pub?gid&#x3D;0&amp;single&#x3D;true&amp;output&#x3D;csv). | [optional] 
**comments** | **String** | Comments the shipper wishes to add. | [optional] 
**billingAddress** | [**BillingAddressBase1**](BillingAddressBase1.md) |  | [optional] 
**shippingAddress** | [**ShippingAddressBase1**](ShippingAddressBase1.md) |  | [optional] 
**items** | [**[OrdersorderIdshipmentsItems]**](OrdersorderIdshipmentsItems.md) | The items in the shipment. This object has the following members, all integer: order_product_id (required), quantity (required), product_id (read-only). A sample items value might be: [ {\&quot;order_product_id\&quot;:16,\&quot;product_id\&quot;: 0,\&quot;quantity\&quot;:2} ] | [optional] 

<a name="ShippingProviderEnum"></a>
## Enum: ShippingProviderEnum

* `auspost` (value: `"auspost"`)
* `canadapost` (value: `"canadapost"`)
* `endicia` (value: `"endicia"`)
* `usps` (value: `"usps"`)
* `fedex` (value: `"fedex"`)
* `ups` (value: `"ups"`)
* `upsready` (value: `"upsready"`)
* `upsonline` (value: `"upsonline"`)
* `shipperhq` (value: `"shipperhq"`)
* ` ` (value: `" "`)

