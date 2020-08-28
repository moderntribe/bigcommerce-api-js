# PriceLists.PriceRecordBatchItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **Number** | The list price for the variant mapped in a Price List. Overrides any existing or Catalog list price for the variant/product.  | [optional] 
**salePrice** | **Number** | The sale price for the variant mapped in a Price List. Overrides any existing or Catalog sale price for the variant/product. If empty, the sale price will be treated as not being set on this variant.  | [optional] 
**retailPrice** | **Number** | The retail price for the variant mapped in a Price List. Overrides any existing or Catalog retail price for the variant/product.  If empty, the retail price will be treated as not being set on this variant.  | [optional] 
**mapPrice** | **Number** | The MAP (Manufacturer&#x27;s Advertised Price) for the variant mapped in a Price List. Overrides any existing or Catalog MAP price for the variant/product. If empty, the MAP price will be treated as not being set on this variant.  | [optional] 
**bulkPricingTiers** | [**[BulkPricingTier]**](BulkPricingTier.md) |  | [optional] 
**sku** | **String** | The SKU code associated with this &#x60;Price Record&#x60; if requested and it exists.  | [optional] 
