# OrdersV3.AllOfinlineResponse200DataItems

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier for the transaction.  | [optional] 
**orderId** | **String** | Identifier for the BigCommerce Order with which this transaction is associated.  | [optional] 
**dateCreated** | **Date** | The datetime of the transaction.  | [optional] 
**paymentInstrumentToken** | **String** | This field contains internal BigPay token for stored card that is then mapped to the actual third-party token. We currently do not offer a way to get third party tokens.These tokens are read-only and do not return any information about the payment. | [optional] 
**avsResult** | **Object** | Address Verification Service (AVS) result from the payment gateway. | [optional] 
**cvvResult** | **Object** | Card Verification Value result from the payment gateway. | [optional] 
**creditCard** | **Object** | A credit-card model. | [optional] 
**giftCertificate** | **Object** | A gift-certificate model. | [optional] 
**storeCredit** | **Object** | A store credit model.  | [optional] 
