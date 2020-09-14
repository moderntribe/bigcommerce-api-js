# Catalog.ConfigFull

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultValue** | **String** | (date, text, multi_line_text, numbers_only_text) The default value. Shown on a date option as an ISO-8601–formatted string, or on a text option as a string.  | [optional] 
**checkedByDefault** | **Boolean** | (checkbox) Flag for setting the checkbox to be checked by default.  | [optional] 
**checkboxLabel** | **String** | (checkbox) Label displayed for the checkbox option.  | [optional] 
**dateLimited** | **Boolean** | (date) Flag to limit the dates allowed to be entered on a date option.  | [optional] 
**dateLimitMode** | **String** | (date) The type of limit that is allowed to be entered on a date option.  | [optional] 
**dateEarliestValue** | **Date** | (date) The earliest date allowed to be entered on the date option, as an ISO-8601 formatted string.  | [optional] 
**dateLatestValue** | **Date** | (date) The latest date allowed to be entered on the date option, as an ISO-8601 formatted string.  | [optional] 
**fileTypesMode** | **String** | (file) The kind of restriction on the file types that can be uploaded with a file upload option. Values: &#x60;specific&#x60; - restricts uploads to particular file types; &#x60;all&#x60; - allows all file types.  | [optional] 
**fileTypesSupported** | **[String]** | (file) The type of files allowed to be uploaded if the &#x60;file_type_option&#x60; is set to &#x60;specific&#x60;. Values:   &#x60;images&#x60; - Allows upload of image MIME types (&#x60;bmp&#x60;, &#x60;gif&#x60;, &#x60;jpg&#x60;, &#x60;jpeg&#x60;, &#x60;jpe&#x60;, &#x60;jif&#x60;, &#x60;jfif&#x60;, &#x60;jfi&#x60;, &#x60;png&#x60;, &#x60;wbmp&#x60;, &#x60;xbm&#x60;, &#x60;tiff&#x60;). &#x60;documents&#x60; - Allows upload of document MIME types (&#x60;txt&#x60;, &#x60;pdf&#x60;, &#x60;rtf&#x60;, &#x60;doc&#x60;, &#x60;docx&#x60;, &#x60;xls&#x60;, &#x60;xlsx&#x60;, &#x60;accdb&#x60;, &#x60;mdb&#x60;, &#x60;one&#x60;, &#x60;pps&#x60;, &#x60;ppsx&#x60;, &#x60;ppt&#x60;, &#x60;pptx&#x60;, &#x60;pub&#x60;, &#x60;odt&#x60;, &#x60;ods&#x60;, &#x60;odp&#x60;, &#x60;odg&#x60;, &#x60;odf&#x60;).   &#x60;other&#x60; - Allows file types defined in the &#x60;file_types_other&#x60; array.  | [optional] 
**fileTypesOther** | **[String]** | (file) A list of other file types allowed with the file upload option.  | [optional] 
**fileMaxSize** | **Number** | (file) The maximum size for a file that can be used with the file upload option. This will still be limited by the server.  | [optional] 
**textCharactersLimited** | **Boolean** | (text, multi_line_text) Flag to validate the length of a text or multi-line text input.  | [optional] 
**textMinLength** | **Number** | (text, multi_line_text) The minimum length allowed for a text or multi-line text option.  | [optional] 
**textMaxLength** | **Number** | (text, multi_line_text) The maximum length allowed for a text or multi line text option.  | [optional] 
**textLinesLimited** | **Boolean** | (multi_line_text) Flag to validate the maximum number of lines allowed on a multi-line text input.  | [optional] 
**textMaxLines** | **Number** | (multi_line_text) The maximum number of lines allowed on a multi-line text input.  | [optional] 
**numberLimited** | **Boolean** | (numbers_only_text) Flag to limit the value of a number option.  | [optional] 
**numberLimitMode** | **String** | (numbers_only_text) The type of limit on values entered for a number option.  | [optional] 
**numberLowestValue** | **Number** | (numbers_only_text) The lowest allowed value for a number option if &#x60;number_limited&#x60; is true.  | [optional] 
**numberHighestValue** | **Number** | (numbers_only_text) The highest allowed value for a number option if &#x60;number_limited&#x60; is true.  | [optional] 
**numberIntegersOnly** | **Boolean** | (numbers_only_text) Flag to limit the input on a number option to whole numbers only.  | [optional] 
**productListAdjustsInventory** | **Boolean** | (product_list, product_list_with_images) Flag for automatically adjusting inventory on a product included in the list.  | [optional] 
**productListAdjustsPricing** | **Boolean** | (product_list, product_list_with_images) Flag to add the optional product&#x27;s price to the main product&#x27;s price.  | [optional] 
**productListShippingCalc** | **String** | (product_list, product_list_with_images) How to factor the optional product&#x27;s weight and package dimensions into the shipping quote. Values: &#x60;none&#x60; - don&#x27;t adjust; &#x60;weight&#x60; - use shipping weight only; &#x60;package&#x60; - use weight and dimensions.  | [optional] 

<a name="DateLimitModeEnum"></a>
## Enum: DateLimitModeEnum

* `earliest` (value: `"earliest"`)
* `range` (value: `"range"`)
* `latest` (value: `"latest"`)


<a name="FileTypesModeEnum"></a>
## Enum: FileTypesModeEnum

* `specific` (value: `"specific"`)
* `all` (value: `"all"`)


<a name="NumberLimitModeEnum"></a>
## Enum: NumberLimitModeEnum

* `lowest` (value: `"lowest"`)
* `highest` (value: `"highest"`)
* `range` (value: `"range"`)


<a name="ProductListShippingCalcEnum"></a>
## Enum: ProductListShippingCalcEnum

* `none` (value: `"none"`)
* `weight` (value: `"weight"`)
* `package` (value: `"package"`)

