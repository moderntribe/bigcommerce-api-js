# Catalog.ProductImageBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imageFile** | **String** | The local path to the original image file uploaded to BigCommerce.  | [optional] 
**isThumbnail** | **Boolean** | Flag for identifying whether the image is used as the product&#x27;s thumbnail.  | [optional] 
**sortOrder** | **Number** | The order in which the image will be displayed on the product page. Higher integers give the image a lower priority. When updating, if the image is given a lower priority, all images with a &#x60;sort_order&#x60; the same as or greater than the image&#x27;s new &#x60;sort_order&#x60; value will have their &#x60;sort_order&#x60;s reordered.  | [optional] 
**description** | **String** | The description for the image.  | [optional] 
**imageUrl** | **String** | Must be a fully qualified URL path, including protocol. Limit of 8MB per file. | [optional] 
