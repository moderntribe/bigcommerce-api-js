# OrdersV2.ShippingQuotesBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Id of the shipping quote | [optional] 
**uuid** | **String** | uuid of the shipping quote | [optional] 
**timestamp** | **Date** | Time the order was created in RFC 2822 format. | [optional] 
**shippingProviderId** | **String** | Id of the shipping provider | [optional] 
**shippingProviderQuote** | **Array** | This can vary based on the shipping provider. Manual shipping methods such as fixed will return an empty array. Shipping providers such as UPS will return an object with the shipping information. Since the shipping quote is tied to a shipping address only one quote will return in the response. | [optional] 
**providerCode** | **String** | Code of the shipping provider | [optional] 
**carrierCode** | **String** | Code of the shipping carrier | [optional] 
**rateCode** | **String** | Type of delivery. This can vary based on shipping quote. | [optional] 
**rateId** | **String** | This can vary based on shipping quote | [optional] 
**methodId** | **Number** | Shipping method ID | [optional] 
