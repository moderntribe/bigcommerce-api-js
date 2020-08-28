# Carts.ItemDigitalCouponsCouponCode

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Coupon Id | [optional] 
**code** | **String** | The coupon code. Required in a /POST request. | [optional] 
**name** | **String** | Name given to the coupon in the Control Panel | [optional] 
**discountType** | **Number** | The discount type.  - type 0: per_item_discount - type 1: percentage_discount - type 2: per_total_discount - type 3: shipping_discount - type 4: free_shipping | [optional] 
**discountAmount** | **Number** | The amount of the discount based on the coupoon. For example 3 percent off will show a 3. | [optional] 
**expiresDate** | **Number** | Returns 0 if a expiration date is not set | [optional] 
**totalDiscount** | **Number** | Total discount amount off cart | [optional] 
