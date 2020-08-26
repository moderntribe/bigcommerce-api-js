# Catalog.ProductReviewBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The title for the product review. Required in /POST. | 
**text** | **String** | The text for the product review.  | [optional] 
**status** | **String** | The status of the product review. Must be one of &#x60;approved&#x60;, &#x60;disapproved&#x60; or &#x60;pending&#x60;.  | [optional] 
**rating** | **Number** | The rating of the product review. Must be one of 0, 1, 2, 3, 4, 5. | [optional] 
**email** | **String** | The email of the reviewer. Must be a valid email, or an empty string. | [optional] 
**name** | **String** | The name of the reviewer. | [optional] 
**dateReviewed** | **Date** | Date the product was reviewed. Required in /POST.  | 
