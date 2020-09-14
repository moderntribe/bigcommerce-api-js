# OrdersV3.Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier for the transaction.  | [optional] 
**orderId** | **String** | Identifier for the BigCommerce Order with which this transaction is associated.  | [optional] 
**dateCreated** | **Date** | The datetime of the transaction.  | [optional] 
**paymentInstrumentToken** | **String** | This field contains internal BigPay token for stored card that is then mapped to the actual third-party token. We currently do not offer a way to get third party tokens.These tokens are read-only and do not return any information about the payment. | [optional] 
**avsResult** | [**AVSResults**](AVSResults.md) |  | [optional] 
**cvvResult** | [**CVVResult**](CVVResult.md) |  | [optional] 
**creditCard** | [**CreditCard**](CreditCard.md) |  | [optional] 
**giftCertificate** | [**GiftCertificate**](GiftCertificate.md) |  | [optional] 
**storeCredit** | [**TransactionStoreCredit**](TransactionStoreCredit.md) |  | [optional] 
