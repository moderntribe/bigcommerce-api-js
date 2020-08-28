# OrdersV2.OrderProductOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique numerical ID of the option; increments sequentially. | [optional] 
**optionId** | **Number** | Numeric ID of the associated option. | [optional] 
**orderProductId** | **Number** |  | [optional] 
**productOptionId** | **Number** |  | [optional] 
**displayName** | **String** | The name of the option, as shown on the storefront. | [optional] 
**displayValue** | **String** | The name of the value, as shown on the storefront. | [optional] 
**value** | **String** | This value is used to access the Customer File Upload. | [optional] 
**type** | **String** | Option Type | [optional] 
**name** | **String** | The option’s name, as used internally. Must be unique. | [optional] 
**displayStyle** | **String** | How it is displayed on the storefront. Examples include Drop-down, radio buttons, or rectangles. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `Checkbox` (value: `"Checkbox"`)
* `Date field` (value: `"Date field"`)
* `File Upload` (value: `"File Upload"`)
* `Multi-line text field` (value: `"Multi-line text field"`)
* `Multiple choice` (value: `"Multiple choice"`)
* `Product Pick List` (value: `"Product Pick List"`)
* `Swatch` (value: `"Swatch"`)
* `Text field` (value: `"Text field"`)

