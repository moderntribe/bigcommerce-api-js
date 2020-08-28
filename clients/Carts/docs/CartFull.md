# Carts.CartFull

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Cart ID, provided after creating a cart with a POST. | [optional] 
**parentId** | **String** | Bundled items will have their parent&#x27;s item Id. | [optional] 
**customerId** | **Number** | ID of the customer to which the cart belongs. | [optional] 
**email** | **String** | The cart&#x27;s email. This is the same email that is used in the billing address | [optional] 
**currency** | [**Currency1**](Currency1.md) |  | [optional] 
**taxIncluded** | **Boolean** |  | [optional] 
**baseAmount** | **Number** | Cost of cart&#x27;s contents, before applying discounts. | [optional] 
**discountAmount** | **Number** | Discounted amount. | [optional] 
**cartAmount** | **Number** | Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes (where applicable). | [optional] 
**coupons** | [**[AppliedCoupon]**](AppliedCoupon.md) |  | [optional] 
**discounts** | [**[AppliedDiscount]**](AppliedDiscount.md) |  | [optional] 
**lineItems** | [**[LineItem]**](LineItem.md) |  | [optional] 
**createdTime** | **String** | Time when the cart was created. | [optional] 
**updatedTime** | **String** | Time when the cart was last updated. | [optional] 
**channelId** | **Number** | If no channel is specified, defaults to 1.  | [optional] 
