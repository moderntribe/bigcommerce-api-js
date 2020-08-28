# Carts.BaseItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The line-item ID. | [optional] 
**variantId** | **Number** | The id of the variant. Required in the /PUT or /POST if the product has variants. | 
**productId** | **Number** | The id of the product. Required in a /POST | 
**sku** | **String** | SKU of the variant. | [optional] 
**name** | **String** | The item&#x27;s product name. | [optional] 
**url** | **String** | The product URL. | [optional] 
**quantity** | **Number** | Quantity of this item in the cart. | 
**isTaxable** | **Boolean** | Whether the item is taxable. | [optional] 
**imageUrl** | **String** | Image of the product or variant. | [optional] 
**discounts** | [**[AppliedDiscount1]**](AppliedDiscount1.md) |  | [optional] 
**coupons** | [**[AppliedCoupon1]**](AppliedCoupon1.md) |  | [optional] 
**discountAmount** | **Number** | The total value of all discounts applied to this item. This includes coupons and cart level discounts | [optional] 
**couponAmount** | **Number** | The total value of all coupons applied to this item. | [optional] 
**listPrice** | **Number** | Item&#x27;s list price, as quoted by the manufacturer/distributor. | [optional] 
**salePrice** | **Number** | Item&#x27;s price after all discounts are applied. (The final price before tax calculation.) | [optional] 
**extendedListPrice** | **Number** | Item&#x27;s list price multiplied by the quantity. | [optional] 
**extendedSalePrice** | **Number** | Item&#x27;s sale price multiplied by the quantity. | [optional] 
**options** | [**[ProductOption]**](ProductOption.md) | The list of selected options for this product. | [optional] 
