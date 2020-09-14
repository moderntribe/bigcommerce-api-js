# OrdersV2.OrderTaxesBase1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique numeric identifier of the taxes object. | [optional] 
**orderId** | **Number** | The unique numeric identifier of the order to which the tax was applied. NOTE: Not included if the store was using the automatic tax feature. | [optional] 
**orderAddressId** | **Number** | The unique numeric identifier of the order address object associated with the order. NOTE: Not included if the store was using the automatic tax feature. | [optional] 
**taxRateId** | **Number** | The unique numeric identifier of the tax rate. | [optional] 
**taxClassId** | **Number** | The unique numeric identifier of the tax class object. NOTE: Will be 0 if automatic tax was enabled, or if the default tax class was used. | [optional] 
**name** | **String** | The name of the tax class object. | [optional] 
**_class** | **String** | The name of the type of tax that was applied. NOTE: will be “Automatic Tax” if automatic tax was enabled. | [optional] 
**rate** | **String** | The tax rate.  The priority order in which the tax is applied (Float, Float-As-String, Integer) | [optional] 
**priority** | **Number** | The order in which the tax is applied | [optional] 
**priorityAmount** | **String** | The amount of tax calculated on the order.   (Float, Float-As-String, Integer) | [optional] 
**lineAmount** | **String** | (Float, Float-As-String, Integer) | [optional] 
**orderProductId** | **String** | If the &#x60;line_item_type&#x60; is &#x60;item&#x60; or &#x60;handling&#x60; then this field will be the order product id. Otherwise the field will return as null. | [optional] 
**lineItemType** | **String** | Type of tax on item | [optional] 

<a name="LineItemTypeEnum"></a>
## Enum: LineItemTypeEnum

* `item` (value: `"item"`)
* `shipping` (value: `"shipping"`)
* `handling` (value: `"handling"`)
* `gift-wrapping` (value: `"gift-wrapping"`)

