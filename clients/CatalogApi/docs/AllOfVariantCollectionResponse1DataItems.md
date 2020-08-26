# Catalog.AllOfVariantCollectionResponse1DataItems

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**productId** | **Number** |  | [optional] 
**sku** | **String** |  | [optional] 
**skuId** | **Number** | Read-only reference to v2 API&#x27;s SKU ID. Null if it is a base variant. | [optional] 
**optionValues** | **[Object]** | Array of option and option values IDs that make up this variant. Will be empty if the variant is the product&#x27;s base variant. | [optional] 
**calculatedPrice** | **Number** | The price of the variant as seen on the storefront. This price takes into account &#x60;sale_price&#x60; and any price adjustment rules that are applicable to this variant.  | [optional] 
