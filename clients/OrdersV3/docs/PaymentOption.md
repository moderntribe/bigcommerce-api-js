# OrdersV3.PaymentOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerId** | **String** | Name of the payment method | [optional] 
**providerDescription** | **String** | Description for payment provider | [optional] 
**amount** | **Number** | amount to be refunded via this payment provider | [optional] 
**offline** | **Boolean** | Indicates the payment must be done offline due to constraints of the payment provider, such as partial refunds not being supported, or it being offline only such as cash on delivery of bank deposit. | [optional] 
**offlineProvider** | **Boolean** | Indicates if the payment provider is a strictly offline provider, such as cash on delivery or bank deposit. | [optional] 
**offlineReason** | **String** | Reason the payment option is offline only, if applicable. | [optional] 
