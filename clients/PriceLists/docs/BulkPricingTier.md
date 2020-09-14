# PriceLists.BulkPricingTier

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantityMin** | **Number** | The minimum quantity of associated variant in the cart needed to qualify for this tiers pricing.  | [optional] 
**quantityMax** | **Number** | The maximum allowed quantity of associated variant in the cart to qualify for this tiers pricing.  | [optional] 
**type** | **String** | The type of adjustment that is made. Acceptable values: price – the adjustment amount per product; percent – the adjustment as a percentage of the original price; fixed – the adjusted absolute price of the product.  | [optional] 
**amount** | **Number** | The price adjustment amount. This value along with the type will decide the price per variant for the pricing tier.  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `fixed` (value: `"fixed"`)
* `price` (value: `"price"`)
* `percent` (value: `"percent"`)

