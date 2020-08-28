# OrdersV2.OrderPut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shippingAddresses** | [**ShippingAddressBase1**](ShippingAddressBase1.md) |  | [optional] 
**subtotalExTax** | **String** | Override value for subtotal excluding tax. If specified, the field &#x60;subtotal_inc_tax&#x60; is also required. (Float, Float-As-String, Integer) | [optional] 
**subtotalIncTax** | **String** | Override value for subtotal including tax. If specified, the field &#x60;subtotal_ex_tax&#x60; is also required. (Float, Float-As-String, Integer) | [optional] 
**baseShippingCost** | **String** | The value of the base shipping cost. (Float, Float-As-String, Integer) | [optional] 
**shippingCostExTax** | **String** | The value of shipping cost, excluding tax. (Float, Float-As-String, Integer) | [optional] 
**shippingCostIncTax** | **String** | The value of shipping cost, including tax. (Float, Float-As-String, Integer) | [optional] 
**baseHandlingCost** | **String** | The value of the base handling cost. (Float, Float-As-String, Integer) | [optional] 
**handlingCostExTax** | **String** | The value of the handling cost, excluding tax. (Float, Float-As-String, Integer) | [optional] 
**handlingCostIncTax** | **String** | The value of the handling cost, including tax. (Float, Float-As-String, Integer) | [optional] 
**baseWrappingCost** | **String** | The value of the base wrapping cost. (Float, Float-As-String, Integer) | [optional] 
**wrappingCostExTax** | **String** | The value of the wrapping cost, excluding tax. (Float, Float-As-String, Integer) | [optional] 
**wrappingCostIncTax** | **String** | The value of the wrapping cost, including tax. (Float, Float-As-String, Integer) | [optional] 
**totalExTax** | **String** | Override value for the total, excluding tax. If specified, the field &#x60;total_inc_tax&#x60; is also required. (Float, Float-As-String, Integer) | [optional] 
**totalIncTax** | **String** | Override value for the total, including tax. If specified, the field &#x60;total_ex_tax&#x60; is also required. (Float, Float-As-String, Integer) | [optional] 
**itemsTotal** | **Number** | The total number of items in the order. | [optional] 
**itemsShipped** | **Number** | The number of items that have been shipped. | [optional] 
**paymentMethod** | **String** | The payment method for this order. Can be one of the following: &#x60;Manual&#x60;, &#x60;Credit Card&#x60;, &#x60;Cash&#x60;,&#x60;Test Payment Gateway&#x60;, etc. | [optional] 
**paymentProviderId** | **String** | The external Transaction ID/Payment ID within this order&#x27;s payment provider (if a payment provider was used). | [optional] 
**refundedAmount** | **String** | The amount refunded from this transaction. (Float, Float-As-String, Integer) | [optional] 
**orderIsDigital** | **Boolean** | Whether this is an order for digital products. | [optional] 
**ipAddress** | **String** | IP Address of the customer, if known. | [optional] 
**geoipCountry** | **String** | The full name of the country where the customer made the purchase, based on the IP. | [optional] 
**geoipCountryIso2** | **String** | The country where the customer made the purchase, in ISO2 format, based on the IP. | [optional] 
**staffNotes** | **String** | Any additional notes for staff. | [optional] 
**customerMessage** | **String** | Message that the customer entered (number, optional) -o the &#x60;Order Comments&#x60; box during checkout. | [optional] 
**discountAmount** | **String** | Amount of discount for this transaction. (Float, Float-As-String, Integer) | [optional] 
**isDeleted** | **Boolean** | Indicates whether the order was deleted (archived). Set to to true, to archive an order. | [optional] 
**ebayOrderId** | **String** | If the order was placed through eBay, the eBay order number will be included. Otherwise, the value will be &#x60;0&#x60;. | [optional] 
**externalSource** | **String** | For orders submitted or modified via the API, using a PUT or POST operation, you can optionally pass in a value identifying the system used to generate the order. For example: &#x60;POS&#x60;. Otherwise, the value will be null. | [optional] 
**channelId** | **Number** | Shows where the order originated. The channel_id will default to 1. | [optional] 
**taxProviderId** | **String** | BasicTaxProvider - Tax is set to manual.  AvaTaxProvider - This is for when the tax provider has been set to automatic and the order was NOT created by the API. Used for Avalara.  \&quot;\&quot; (blank) - When the tax provider is unknown. This includes legacy orders and orders previously created via API. This can be set when creating an order using a POST. | [optional] 
**dateCreated** | **String** | The date this order was created. If not specified, will default to the current time. The date should be in RFC 2822 format. | [optional] 

<a name="PaymentMethodEnum"></a>
## Enum: PaymentMethodEnum

* `Credit Card` (value: `"Credit Card"`)
* `Cash` (value: `"Cash"`)
* `Manual` (value: `"Manual"`)
* `Test Payment Gateway` (value: `"Test Payment Gateway"`)


<a name="TaxProviderIdEnum"></a>
## Enum: TaxProviderIdEnum

* `BasicTaxProvider` (value: `"BasicTaxProvider"`)
* `AvaTaxProvider` (value: `"AvaTaxProvider"`)

