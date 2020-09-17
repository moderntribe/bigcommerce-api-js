# OrdersV2.OrderFull

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the order, a read-only value. Do not pass in PUT or POST. | [optional] 
**customerId** | **Number** | The ID of the customer placing the order; or 0 if it was a guest order. | [optional] 
**dateCreated** | **String** | The date this order was created. If not specified, will default to the current time. The date should be in RFC 2822 format. | [optional] 
**dateModified** | **String** | A read-only value representing the last modification of the order. Do not attempt to modify or set this value in a POST or PUT operation. RFC-2822 | [optional] 
**dateShipped** | **String** | A read-only value representing the date of shipment. Do not attempt to modify or set this value in a POST or PUT operation. RFC-2822 | [optional] 
**statusId** | **Number** | The status ID of the order. | [optional] 
**cartId** | **String** | The cart ID from which this order originated, if applicable. Correlates with the Cart API. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request. | [optional] 
**status** | **String** | The status will include one of the (string, optiona) - values defined under Order Statuses. This value is read-only. Do not attempt to modify or set this value in a POST or PUT operation. | [optional] 
**customStatus** | **String** | Contains the same (string, optiona) - value as the Order Statuses object&#x27;s &#x60;custom_label&#x60; property. | [optional] 
**subtotalExTax** | **String** | Override value for subtotal excluding tax. If specified, the field &#x60;subtotal_inc_tax&#x60; is also required. (Float, Float-As-String, Integer) | [optional] 
**subtotalIncTax** | **String** | Override value for subtotal including tax. If specified, the field &#x60;subtotal_ex_tax&#x60; is also required. (Float, Float-As-String, Integer) | [optional] 
**subtotalTax** | **String** | A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (Float, Float-As-String, Integer) | [optional] 
**baseShippingCost** | **String** | The value of the base shipping cost. (Float, Float-As-String, Integer) | [optional] 
**shippingCostExTax** | **String** | The value of shipping cost, excluding tax. (Float, Float-As-String, Integer) | [optional] 
**shippingCostIncTax** | **String** | The value of shipping cost, including tax. (Float, Float-As-String, Integer) | [optional] 
**shippingCostTax** | **String** | A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer) | [optional] 
**shippingCostTaxClassId** | **Number** | Shipping-cost tax class. A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.) | [optional] 
**baseHandlingCost** | **String** | The value of the base handling cost. (Float, Float-As-String, Integer) | [optional] 
**handlingCostExTax** | **String** | The value of the handling cost, excluding tax. (Float, Float-As-String, Integer) | [optional] 
**handlingCostIncTax** | **String** | The value of the handling cost, including tax. (Float, Float-As-String, Integer) | [optional] 
**handlingCostTax** | **String** | A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer) | [optional] 
**handlingCostTaxClassId** | **Number** | A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.) | [optional] 
**baseWrappingCost** | **String** | The value of the base wrapping cost. (Float, Float-As-String, Integer) | [optional] 
**wrappingCostExTax** | **String** | The value of the wrapping cost, excluding tax. (Float, Float-As-String, Integer) | [optional] 
**wrappingCostIncTax** | **String** | The value of the wrapping cost, including tax. (Float, Float-As-String, Integer) | [optional] 
**wrappingCostTax** | **String** | A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer) | [optional] 
**wrappingCostTaxClassId** | **Number** | A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.) | [optional] 
**totalExTax** | **String** | Override value for the total, excluding tax. If specified, the field &#x60;total_inc_tax&#x60; is also required. (Float, Float-As-String, Integer) | [optional] 
**totalIncTax** | **String** | Override value for the total, including tax. If specified, the field &#x60;total_ex_tax&#x60; is also required. (Float, Float-As-String, Integer) | [optional] 
**totalTax** | **String** | A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (Float, Float-As-String, Integer) | [optional] 
**itemsTotal** | **Number** | The total number of items in the order. | [optional] 
**itemsShipped** | **Number** | The number of items that have been shipped. | [optional] 
**paymentMethod** | **String** | The payment method for this order. Can be one of the following: &#x60;Manual&#x60;, &#x60;Credit Card&#x60;, &#x60;cash&#x60;, &#x60;Test Payment Gateway&#x60;, etc. | [optional] 
**paymentProviderId** | **String** | The external Transaction ID/Payment ID within this order&#x27;s payment provider (if a payment provider was used). | [optional] 
**paymentStatus** | **String** | A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. | [optional] 
**refundedAmount** | **String** | The amount refunded from this transaction. (Float, Float-As-String, Integer) | [optional] 
**orderIsDigital** | **Boolean** | Whether this is an order for digital products. | [optional] 
**storeCreditAmount** | **String** | Represents the store credit that the shopper has redeemed on this individual order. This is a read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer) | [optional] 
**giftCertificateAmount** | **String** | A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer) | [optional] 
**ipAddress** | **String** | IP Address of the customer, if known. | [optional] 
**geoipCountry** | **String** | The full name of the country where the customer made the purchase, based on the IP. | [optional] 
**geoipCountryIso2** | **String** | The country where the customer made the purchase, in ISO2 format, based on the IP. | [optional] 
**currencyId** | **Number** | The ID of the currency being used in this transaction. A read-only value. Do not pass in a POST or PUT. | [optional] 
**currencyCode** | **String** | The currency code of the currency being used in this transaction. A read-only value. Do not pass in a POST or PUT. | [optional] 
**currencyExchangeRate** | **String** | A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer) | [optional] 
**defaultCurrencyId** | **Number** | A read-only value. Do not pass in a POST or PUT. | [optional] 
**defaultCurrencyCode** | **String** | The currency code of the default currency for this type of transaction. A read-only value. Do not pass in a POST or PUT. | [optional] 
**staffNotes** | **String** | Any additional notes for staff. | [optional] 
**customerMessage** | **String** | Message that the customer entered (number, optiona) -o the &#x60;Order Comments&#x60; box during checkout. | [optional] 
**discountAmount** | **String** | Amount of discount for this transaction. (Float, Float-As-String, Integer) | [optional] 
**couponDiscount** | **String** | A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer) | [optional] 
**shippingAddressCount** | **Number** | The number of shipping addresses associated with this transaction. A read-only value. Do not pass in a POST or PUT. | [optional] 
**isDeleted** | **Boolean** | Indicates whether the order was deleted (archived). Set to to true, to archive an order. | [optional] 
**isEmailOptIn** | **Boolean** | Indicates whether the shopper has selected an opt-in check box (on the checkout page) to receive emails. A read-only value. Do not pass in a POST or PUT. | [optional] 
**creditCardType** | **Number** | Credit card type | [optional] 
**ebayOrderId** | **String** | If the order was placed through eBay, the eBay order number will be included. Otherwise, the value will be &#x60;0&#x60;. | [optional] 
**billingAddress** | **AllOforderFullBillingAddress** | Required to create an order. | [optional] 
**orderSource** | **String** | Orders submitted via the store&#x27;s website will include a &#x60;www&#x60; value. Orders submitted via the API will be set to &#x60;external&#x60;. A read-only value. Do not pass in a POST or PUT. | [optional] 
**externalSource** | **String** | For orders submitted or modified via the API, using a PUT or POST operation, you can optionally pass in a value identifying the system used to generate the order. For example: &#x60;POS&#x60;. Otherwise, the value will be null. | [optional] 
**products** | [**ProductsResource1**](ProductsResource1.md) |  | [optional] 
**shippingAddresses** | [**ShippingAddressResource**](ShippingAddressResource.md) |  | [optional] 
**coupons** | [**CouponsResource1**](CouponsResource1.md) |  | [optional] 
**externalId** | **String** | ID of the order in another system. For example, the Amazon Order ID if this is an Amazon order.This field can be updated in a /POST, but using a /PUT to update the order will return a 400 error. The field &#x27;external_id&#x27; cannot be written to. Please remove it from your request before trying again. It can not be overwritten once set. | [optional] 
**externalMerchantId** | **String** | ID of the merchant | [optional] 
**channelId** | **Number** | Shows where the order originated. The channel_id will default to 1. | [optional] 
**taxProviderId** | **String** | BasicTaxProvider - Tax is set to manual.  AvaTaxProvider - This is for when the tax provider has been set to automatic and the order was NOT created by the API. Used for Avalara.  \&quot;\&quot; (blank) - When the tax provider is unknown. This includes legacy orders and orders previously created via API. This can be set when creating an order using a POST.   | [optional] 

<a name="TaxProviderIdEnum"></a>
## Enum: TaxProviderIdEnum

* `BasicTaxProvider` (value: `"BasicTaxProvider"`)
* `AvaTaxProvider` (value: `"AvaTaxProvider"`)
* `empty` (value: `""`)
