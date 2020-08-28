# Sites.Site2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**url** | **String** | The Fully Qualified URL (including host and scheme) where this site is hosted. All URLs generated for this site will be appended to this. | [optional] 
**channelId** | **Number** | The channel this site is attached to. Each site belongs to a single channel, and each channel can have either zero or one sites. | [optional] 
**createdAt** | **String** | When was this site created? RFC 3339 | [optional] 
**updatedAt** | **String** | When was this site defintion last updated? RFC 3339 | [optional] 
**routes** | [**[Route4]**](Route4.md) | (optional - if included) collection of routes defined for this site. Limited to 200 routes side loaded (query routes direction via &#x60;/routes&#x60; for bulk) | [optional] 
