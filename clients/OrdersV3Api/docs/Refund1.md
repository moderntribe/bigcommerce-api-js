# OrdersV3.Refund1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Refund resource ID | [optional] 
**orderId** | **Number** | Reference to order id | [optional] 
**userId** | **Number** | Reference to the user&#x27;s id who create this refund. This is automatically populated by BigCommerce. | [optional] 
**created** | **Date** | Timestamp of when this refund was created | [optional] 
**reason** | **String** | Reason for refund | [optional] 
**totalAmount** | **Number** | A non-negative 2 decimal place rounded value that represents that amount that can be charged/refunded via payment providers | [optional] 
**totalTax** | **Number** | Total tax amount refunded back to shopper. Note: order_level_amount does not affect tax liability. This can be negative amount indicating we have collected tax by virtue of refunding less to the customer | [optional] 
**items** | [**[RefundItem]**](RefundItem.md) | Array of items refunded | [optional] 
**payments** | [**[RefundPayment]**](RefundPayment.md) | An array of refund payments made to payment providers | [optional] 
