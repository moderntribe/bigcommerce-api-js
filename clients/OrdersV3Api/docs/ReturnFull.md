# OrdersV3.ReturnFull

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[CreateReturnItems]**](CreateReturnItems.md) |  | [optional] 
**total** | **String** | The total price of the items being returned | [optional] 
**currency** | **String** | The transactional currency of the return and the associated order | [optional] 
**customer** | [**CreateReturnCustomer**](CreateReturnCustomer.md) |  | [optional] 
**comment** | **String** | A comment provided to the merchant for review | [optional] 
**status** | **String** | The status of the return. | [optional] 
**dateModified** | **Date** |  | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `CLOSED` (value: `"CLOSED"`)
* `OPEN` (value: `"OPEN"`)
* `REMOVED` (value: `"REMOVED"`)

