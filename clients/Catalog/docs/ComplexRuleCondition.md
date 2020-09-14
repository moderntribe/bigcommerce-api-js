# Catalog.ComplexRuleCondition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique numeric ID of the rule condition; increments sequentially. Read-Only  | [optional] 
**ruleId** | **Number** | The unique numeric ID of the rule with which the condition is associated. Read-Only | [optional] 
**modifierId** | **Number** | The unique numeric ID of the modifier with which the rule condition is associated. Required in /POST. | 
**modifierValueId** | **Number** | The unique numeric ID of the modifier value with which the rule condition is associated. Required in /POST. | 
**variantId** | **Number** | The unique numeric ID of the variant with which the rule condition is associated. Required in /POST. | 
**combinationId** | **Number** | (READ-ONLY:) The unique numeric ID of the SKU (v2 API), or Combination, with which the rule condition is associated. This is to maintain cross-compatibility between v2 and v3.  | [optional] 
