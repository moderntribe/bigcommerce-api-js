# Catalog.ProductOptionBase1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique numerical ID of the option, increments sequentially.  | [optional] 
**productId** | **Number** | The unique numerical ID of the product to which the option belongs.  | [optional] 
**displayName** | **String** | The name of the option shown on the storefront.  | [optional] 
**type** | **String** | The type of option, which determines how it will display on the storefront. Acceptable values: &#x60;radio_buttons&#x60;, &#x60;rectangles&#x60;, &#x60;dropdown&#x60;, &#x60;product_list&#x60;, &#x60;product_list_with_images&#x60;, &#x60;swatch&#x60;. For reference, the former v2 API values are: RB &#x3D; radio_buttons, RT &#x3D; rectangles, S &#x3D; dropdown, P &#x3D; product_list, PI &#x3D; product_list_with_images, CS &#x3D; swatch.  | [optional] 
**config** | [**OptionConfig**](OptionConfig.md) |  | [optional] 
**sortOrder** | **Number** | Order in which the option is displayed on the storefront.  | [optional] 
**optionValues** | **AllOfproductOptionBase1OptionValues** | Product Option &#x60;option_value&#x60;. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `radio_buttons` (value: `"radio_buttons"`)
* `rectangles` (value: `"rectangles"`)
* `dropdown` (value: `"dropdown"`)
* `product_list` (value: `"product_list"`)
* `product_list_with_images` (value: `"product_list_with_images"`)
* `swatch` (value: `"swatch"`)

