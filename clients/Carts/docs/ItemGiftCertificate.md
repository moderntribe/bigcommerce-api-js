# Carts.ItemGiftCertificate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** | GiftCertificate-provided name that will appear in the control panel. | [optional] 
**theme** | **String** | Currently supports &#x60;Birthday&#x60;, &#x60;Boy&#x60;, &#x60;Celebration&#x60;, &#x60;Christmas&#x60;, &#x60;General&#x60;, and &#x60;Girl&#x60;. | 
**amount** | **Number** | Value must be between 1.00 and 1,000.00 in the store&#x27;s default currency. | 
**isTaxable** | **Boolean** |  | [optional] 
**sender** | [**ContactEntity**](ContactEntity.md) |  | 
**recipient** | [**ContactEntity**](ContactEntity.md) |  | 
**message** | **String** | Limited to 200 characters. | [optional] 
