# Catalog.AllOfProductResponseData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateCreated** | **Date** | The date on which the product was created.  | [optional] 
**dateModified** | **Date** | The date on which the product was modified.  | [optional] 
**id** | **Number** | ID of the product. Read Only. | [optional] 
**baseVariantId** | **Number** | The unique identifier of the base variant associated with a simple product. This value is &#x60;null&#x60; for complex products. | [optional] 
**calculatedPrice** | **Number** | The price of the product as seen on the storefront. It will be equal to the &#x60;sale_price&#x60;, if set, and the &#x60;price&#x60; if there is not a &#x60;sale_price&#x60;. | [optional] 
**options** | **[Object]** |  | [optional] 
**modifiers** | **[Object]** |  | [optional] 
**mapPrice** | **Number** | Minimum Advertised Price. | [optional] 
**optionSetId** | **Number** | Indicates that the product is in an Option Set (legacy V2 concept). | [optional] 
**optionSetDisplay** | **String** | Legacy template setting which controls if the option set shows up to the side of or below the product image and description. | [optional] 
**variants** | **Object** |  | [optional] 
