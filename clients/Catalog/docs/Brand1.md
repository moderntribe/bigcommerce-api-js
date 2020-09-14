# Catalog.Brand1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID of the *Brand*. Read-Only. | [optional] 
**name** | **String** | The name of the brand. Must be unique. Required in POST. | 
**pageTitle** | **String** | The title shown in the browser while viewing the brand.  | [optional] 
**metaKeywords** | **[String]** | Comma-separated list of meta keywords to include in the HTML.  | [optional] 
**metaDescription** | **String** | A meta description to include.  | [optional] 
**searchKeywords** | **String** | A comma-separated list of keywords that can be used to locate this brand.  | [optional] 
**imageUrl** | **String** | Image URL used for this category on the storefront. Images can be uploaded via form file post to &#x60;/brands/{brandId}/image&#x60;, or by providing a publicly accessible URL in this field.  | [optional] 
**customUrl** | [**CustomUrlBrand**](CustomUrlBrand.md) |  | [optional] 
