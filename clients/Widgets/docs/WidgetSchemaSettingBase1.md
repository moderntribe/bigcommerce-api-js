# Widgets.WidgetSchemaSettingBase1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of setting component to display. You can view the list of elements below to discover which are available to use.  For examples of each type of setting, see [Page Builder &gt; Schema Settings](https://developer.bigcommerce.com/stencil-docs/page-builder/schema-settings/alignment) in Theme Docs. | [optional] 
**label** | **String** | The user friendly message to inform the user how this setting will be used. | [optional] 
**id** | **String** | The variable name where the setting value will be available in the widget template. | [optional] 
**_default** | **String** | The default value to use when rendering the widget for the first time. Make sure to set sensible defaults to make your widget easier to use. | [optional] 
**typeMeta** | **String** | Additional information needed based on the selected setting type. | [optional] 
**conditional** | **String** |  Can be added on each setting to control whether it should be displayed to the user while editing in store design. This does not clear the value in the setting, just controls the display of the setting. Take a look at the regexInput for an example on using conditional.  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `alignment` (value: `"alignment"`)
* `boolean` (value: `"boolean"`)
* `boxModel` (value: `"boxModel"`)
* `code` (value: `"code"`)
* `color` (value: `"color"`)
* `imageManager` (value: `"imageManager"`)
* `input` (value: `"input"`)
* `number` (value: `"number"`)
* `productId` (value: `"productId"`)
* `productImage` (value: `"productImage"`)
* `range` (value: `"range"`)
* `regexInput` (value: `"regexInput"`)
* `select` (value: `"select"`)
* `text` (value: `"text"`)
* `toggle` (value: `"toggle"`)

