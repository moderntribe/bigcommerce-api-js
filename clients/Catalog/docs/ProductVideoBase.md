# Catalog.ProductVideoBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The title for the video. If left blank, this will be filled in according to data on a host site.  | [optional] 
**description** | **String** | The description for the video. If left blank, this will be filled in according to data on a host site.  | [optional] 
**sortOrder** | **Number** | The order in which the video will be displayed on the product page. Higher integers give the video a lower priority. When updating, if the video is given a lower priority, all videos with a &#x60;sort_order&#x60; the same as or greater than the video&#x27;s new &#x60;sort_order&#x60; value will have their &#x60;sort_order&#x60;s reordered.  | [optional] 
**type** | **String** | The video type (a short name of a host site).  | [optional] 
**videoId** | **String** | The ID of the video on a host site. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `youtube` (value: `"youtube"`)

