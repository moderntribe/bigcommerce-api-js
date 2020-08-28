# OrdersV3.RefundPayment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Reference to refund payment id | [optional] 
**providerId** | **String** | Reference to payment provider | [optional] 
**amount** | **Number** | A non-negative 2 decimal place rounded value that represents that amount that can be charged/refunded via payment providers | [optional] 
**offline** | **Boolean** | Indicate whether payment was offline | [optional] 
**isDeclined** | **Boolean** | Indicate if this payment has been declined by payment provider | [optional] 
**declinedMessage** | **String** | Message indicate why payment was declined | [optional] 
