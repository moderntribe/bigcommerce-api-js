# OrdersV3.RefundItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemType** | **String** | Type of item that was refunded | [optional] 
**itemId** | **Number** | Reference to the item | [optional] 
**reason** | **String** | Reason for refunding an item | [optional] 
**quantity** | **Number** | Quantity of item refunded. Note: this will only be populated for item_type PRODUCT | [optional] 
**requestedAmount** | **Number** | A non-negative 2 decimal place rounded value that represents that amount that can be charged/refunded via payment providers | [optional] 

<a name="ItemTypeEnum"></a>
## Enum: ItemTypeEnum

* `PRODUCT` (value: `"PRODUCT"`)
* `GIFT_WRAPPING` (value: `"GIFT_WRAPPING"`)
* `SHIPPING` (value: `"SHIPPING"`)
* `HANDLING` (value: `"HANDLING"`)
* `ORDER` (value: `"ORDER"`)

