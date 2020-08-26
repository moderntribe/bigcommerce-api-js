# Catalog.BulkPricingRuleFull2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID of the *Bulk Pricing Rule*. Read-Only. | [optional] 
**quantityMin** | **Number** | The minimum inclusive quantity of a product to satisfy this rule. Must be greater than or equal to zero. Required in /POST.  | 
**quantityMax** | **Number** | The maximum inclusive quantity of a product to satisfy this rule. Must be greater than the &#x60;quantity_min&#x60; value – unless this field has a value of 0 (zero), in which case there will be no maximum bound for this rule. Required in /POST. | 
**type** | **String** | The type of adjustment that is made. Values: &#x60;price&#x60; - the adjustment amount per product; &#x60;percent&#x60; - the adjustment as a percentage of the original price; &#x60;fixed&#x60; - the adjusted absolute price of the product. Required in /POST. | 
**amount** | **Number** | The discount can be a fixed dollar amount or a percentage. For a fixed dollar amount enter it as an integer and the response will return as an integer. For percentage enter the amount as the percentage divided by 100 using string format. For example 10% percent would be “.10”. The response will return as an integer.  Required in /POST. | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `price` (value: `"price"`)
* `percent` (value: `"percent"`)
* `fixed` (value: `"fixed"`)

