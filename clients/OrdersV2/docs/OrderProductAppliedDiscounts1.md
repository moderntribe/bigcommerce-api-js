# OrdersV2.OrderProductAppliedDiscounts1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Name of the coupon applied to order. | [optional] 
**amount** | **String** | Amount of the discount.(Float, Float-As-String, Integer)  | [optional] 
**name** | **String** | Name of the coupon. &#x60;Manual Discount&#x60; when creating a manual discount. | [optional] 
**code** | **String** | Coupon Code. There is no code when creating a manual discount. | [optional] 
**target** | **String** | Determines if the discount if discount was applied at the Order or Product level. Read Only. | [optional] 

<a name="TargetEnum"></a>
## Enum: TargetEnum

* `order` (value: `"order"`)
* `product` (value: `"product"`)

