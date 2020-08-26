# Catalog.ComplexRuleBase1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique numeric ID of the rule; increments sequentially. Read-Only | [optional] 
**productId** | **Number** | The unique numeric ID of the product with which the rule is associated; increments sequentially.  | [optional] 
**sortOrder** | **Number** | The priority to give this rule when making adjustments to the product properties.  | [optional] 
**enabled** | **Boolean** | Flag for determining whether the rule is to be used when adjusting a product&#x27;s price, weight, image, or availabilty.  | [optional] 
**stop** | **Boolean** | Flag for determining whether other rules should not be applied after this rule has been applied.  | [optional] 
**purchasingDisabled** | **Boolean** | Flag for determining whether the rule should disable purchasing of a product when the conditions are applied.  | [optional] 
**purchasingDisabledMessage** | **String** | Message displayed on the storefront when a rule disables the purchasing of a product.  | [optional] 
**purchasingHidden** | **Boolean** | Flag for determining whether the rule should hide purchasing of a product when the conditions are applied.  | [optional] 
**imageUrl** | **String** | The URL for an image displayed on the storefront when the conditions are applied. Limit of 8MB per file.   | [optional] 
**priceAdjuster** | [**Adjuster**](Adjuster.md) |  | [optional] 
**weightAdjuster** | [**Adjuster**](Adjuster.md) |  | [optional] 
**conditions** | [**[ComplexRuleCondition]**](ComplexRuleCondition.md) |  | [optional] 
