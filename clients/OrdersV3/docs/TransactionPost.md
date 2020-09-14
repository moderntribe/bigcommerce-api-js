# OrdersV3.TransactionPost

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **String** | Store event that created the transaction.  | 
**method** | **String** | The payment method: &#x60;credit_card&#x60; - a credit-card transaction; &#x60;electronic_wallet&#x60; - an online wallet; &#x60;store_credit&#x60; - a transaction using store credit; &#x60;gift_certificate&#x60; - a transaction using a gift certificate; &#x60;custom&#x60; - manual payment methods; &#x60;token&#x60; - payment token; &#x60;nonce&#x60; - temporary payment token; &#x60;offsite&#x60; - online payment off the site (e.g., PayPal); &#x60;offline&#x60; - payment method that takes place offline.  | 
**amount** | **Number** | Amount of money in the transaction.  | 
**currency** | **String** | Currency used for the transaction.  | 
**gateway** | **String** | The payment gateway, where applicable.  | 
**gatewayTransactionId** | **String** | The transaction ID returned by the payment gateway for this transaction item.  | [optional] 
**dateCreated** | **Date** | The datetime of the transaction.  | [optional] 
**test** | **Boolean** | True if the transaction performed was a test, or if the gateway is in test mode.  | [optional] 
**status** | **String** | Status of the transaction.  | [optional] 
**fraudReview** | **Boolean** | Result of gateway fraud review, if any. Default is &#x60;false&#x60;.  | [optional] 
**referenceTransactionId** | **Number** | Identifier for an existing transaction upon which this transaction acts.  | [optional] 
**offline** | [**Offline1**](Offline1.md) |  | [optional] 
**custom** | [**Custom1**](Custom1.md) |  | [optional] 
**** | **String** |  | [optional] 

<a name="EventEnum"></a>
## Enum: EventEnum

* `purchase` (value: `"purchase"`)
* `authorization` (value: `"authorization"`)
* `capture` (value: `"capture"`)
* `refund` (value: `"refund"`)
* `void` (value: `"void"`)
* `pending` (value: `"pending"`)
* `settled` (value: `"settled"`)


<a name="MethodEnum"></a>
## Enum: MethodEnum

* `credit_card` (value: `"credit_card"`)
* `electronic_wallet` (value: `"electronic_wallet"`)
* `gift_certificate` (value: `"gift_certificate"`)
* `store_credit` (value: `"store_credit"`)
* `apple_pay_card` (value: `"apple_pay_card"`)
* `apple_pay_token` (value: `"apple_pay_token"`)
* `token` (value: `"token"`)
* `custom` (value: `"custom"`)
* `offsite` (value: `"offsite"`)
* `offline` (value: `"offline"`)
* `nonce` (value: `"nonce"`)


<a name="GatewayEnum"></a>
## Enum: GatewayEnum

* `2checkout` (value: `"2checkout"`)
* `adyen` (value: `"adyen"`)
* `amazon` (value: `"amazon"`)
* `authorizenet` (value: `"authorizenet"`)
* `bankdeposit` (value: `"bankdeposit"`)
* `braintree` (value: `"braintree"`)
* `cheque` (value: `"cheque"`)
* `cod` (value: `"cod"`)
* `custom` (value: `"custom"`)
* `firstdatagge4` (value: `"firstdatagge4"`)
* `giftcertificate` (value: `"giftcertificate"`)
* `hps` (value: `"hps"`)
* `instore` (value: `"instore"`)
* `klarna` (value: `"klarna"`)
* `migs` (value: `"migs"`)
* `moneyorder` (value: `"moneyorder"`)
* `nmi` (value: `"nmi"`)
* `paypalexpress` (value: `"paypalexpress"`)
* `paypalpaymentsprous` (value: `"paypalpaymentsprous"`)
* `paypalpaymentsprouk` (value: `"paypalpaymentsprouk"`)
* `plugnpay` (value: `"plugnpay"`)
* `qbmsv2` (value: `"qbmsv2"`)
* `securenet` (value: `"securenet"`)
* `square` (value: `"square"`)
* `storecredit` (value: `"storecredit"`)
* `stripe` (value: `"stripe"`)
* `testgateway` (value: `"testgateway"`)
* `usaepay` (value: `"usaepay"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `ok` (value: `"ok"`)
* `error` (value: `"error"`)

