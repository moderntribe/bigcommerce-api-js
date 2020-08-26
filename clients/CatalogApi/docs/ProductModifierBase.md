# Catalog.ProductModifierBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | BigCommerce API, which determines how it will display on the storefront. Acceptable values: &#x60;date&#x60;, &#x60;checkbox&#x60;, &#x60;file&#x60;, &#x60;text&#x60;, &#x60;multi_line_text&#x60;, &#x60;numbers_only_text&#x60;, &#x60;radio_buttons&#x60;, &#x60;rectangles&#x60;, &#x60;dropdown&#x60;, &#x60;product_list&#x60;, &#x60;product_list_with_images&#x60;, &#x60;swatch&#x60;. Required in a /POST.  | 
**required** | **Boolean** | Whether or not this modifer is required or not at checkout. Required in a /POST.  | 
**sortOrder** | **Number** | The order the modifiers display on the product detail page. | [optional] 
**config** | [**OptionConfig**](OptionConfig.md) |  | [optional] 
**displayName** | **String** | The name of the option shown on the storefront. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `date` (value: `"date"`)
* `checkbox` (value: `"checkbox"`)
* `file` (value: `"file"`)
* `text` (value: `"text"`)
* `multi_line_text` (value: `"multi_line_text"`)
* `numbers_only_text` (value: `"numbers_only_text"`)
* `radio_buttons` (value: `"radio_buttons"`)
* `rectangles` (value: `"rectangles"`)
* `dropdown` (value: `"dropdown"`)
* `product_list` (value: `"product_list"`)
* `product_list_with_images` (value: `"product_list_with_images"`)
* `swatch` (value: `"swatch"`)

