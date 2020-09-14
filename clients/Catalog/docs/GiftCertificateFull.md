# Catalog.GiftCertificateFull

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | The gift-certificate code.  | [optional] 
**originalBalance** | **Number** | The balance on a gift certificate when it was purchased.  | [optional] 
**startingBalance** | **Number** | The balance on a gift certificate at the time of this purchase.  | [optional] 
**remainingBalance** | **Number** | The remaining balance on a gift certificate.  | [optional] 
**status** | **String** | The status of a gift certificate: &#x60;active&#x60; - gift certificate is active; &#x60;pending&#x60; - gift certificate purchase is pending; &#x60;disabled&#x60; - gift certificate is disabled; &#x60;expired&#x60; - gift certificate is expired.  | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `active` (value: `"active"`)
* `pending` (value: `"pending"`)
* `disabled` (value: `"disabled"`)
* `expired` (value: `"expired"`)

