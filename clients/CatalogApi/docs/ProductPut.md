# Catalog.ProductPut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The product name.  | [optional] 
**type** | **String** | The product type. One of: &#x60;physical&#x60; - a physical stock unit, &#x60;digital&#x60; - a digital download.  | [optional] 
**sku** | **String** | User defined product code/stock keeping unit (SKU).  | [optional] 
**description** | **String** | The product description, which can include HTML formatting.  | [optional] 
**weight** | **Number** | Weight of the product, which can be used when calculating shipping costs. This is based on the unit set on the store  | [optional] 
**width** | **Number** | Width of the product, which can be used when calculating shipping costs.  | [optional] 
**depth** | **Number** | Depth of the product, which can be used when calculating shipping costs.  | [optional] 
**height** | **Number** | Height of the product, which can be used when calculating shipping costs.  | [optional] 
**price** | **Number** | The price of the product. The price should include or exclude tax, based on the store settings.  | [optional] 
**costPrice** | **Number** | The cost price of the product. Stored for reference only; it is not used or displayed anywhere on the store.  | [optional] 
**retailPrice** | **Number** | The retail cost of the product. If entered, the retail cost price will be shown on the product page.  | [optional] 
**salePrice** | **Number** | If entered, the sale price will be used instead of value in the price field when calculating the product&#x27;s cost.  | [optional] 
**taxClassId** | **Number** | The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.)  | [optional] 
**productTaxCode** | **String** | Accepts AvaTax System Tax Codes, which identify products and services that fall into special sales-tax categories. By using these codes, merchants who subscribe to BigCommerce&#x27;s Avalara Premium integration can calculate sales taxes more accurately. Stores without Avalara Premium will ignore the code when calculating sales tax. Do not pass more than one code. The codes are case-sensitive. For details, please see Avalara&#x27;s documentation.  | [optional] 
**categories** | **[Number]** | An array of IDs for the categories to which this product belongs. When updating a product, if an array of categories is supplied, all product categories will be overwritten. Does not accept more than 1,000 ID values.  | [optional] 
**brandId** | **Number** | A product can be added to an existing brand during a product /PUT or /POST.  | [optional] 
**inventoryLevel** | **Number** | Current inventory level of the product. Simple inventory tracking must be enabled (See the &#x60;inventory_tracking&#x60; field) for this to take any effect.  | [optional] 
**inventoryWarningLevel** | **Number** | Inventory warning level for the product. When the product&#x27;s inventory level drops below the warning level, the store owner will be informed. Simple inventory tracking must be enabled (see the &#x60;inventory_tracking&#x60; field) for this to take any effect.  | [optional] 
**inventoryTracking** | **String** | The type of inventory tracking for the product. Values are: &#x60;none&#x60; - inventory levels will not be tracked; &#x60;product&#x60; - inventory levels will be tracked using the &#x60;inventory_level&#x60; and &#x60;inventory_warning_level&#x60; fields; &#x60;variant&#x60; - inventory levels will be tracked based on variants, which maintain their own warning levels and inventory levels.  | [optional] 
**fixedCostShippingPrice** | **Number** | A fixed shipping cost for the product. If defined, this value will be used during checkout instead of normal shipping-cost calculation.  | [optional] 
**isFreeShipping** | **Boolean** | Flag used to indicate whether the product has free shipping. If &#x60;true&#x60;, the shipping cost for the product will be zero.  | [optional] 
**isVisible** | **Boolean** | Flag to determine whether the product should be displayed to customers browsing the store. If &#x60;true&#x60;, the product will be displayed. If &#x60;false&#x60;, the product will be hidden from view.  | [optional] 
**isFeatured** | **Boolean** | Flag to determine whether the product should be included in the &#x60;featured products&#x60; panel when viewing the store.  | [optional] 
**relatedProducts** | **[Number]** | An array of IDs for the related products.  | [optional] 
**warranty** | **String** | Warranty information displayed on the product page. Can include HTML formatting.  | [optional] 
**binPickingNumber** | **String** | The BIN picking number for the product.  | [optional] 
**layoutFile** | **String** | The layout template file used to render this product category. This field is writable only for stores with a Blueprint theme applied.  | [optional] 
**upc** | **String** | The product UPC code, which is used in feeds for shopping comparison sites and external channel integrations.  | [optional] 
**searchKeywords** | **String** | A comma-separated list of keywords that can be used to locate the product when searching the store.  | [optional] 
**availability** | **String** | Availability of the product. Availability options are: &#x60;available&#x60; - the product can be purchased on the storefront; &#x60;disabled&#x60; - the product is listed in the storefront, but cannot be purchased; &#x60;preorder&#x60; - the product is listed for pre-orders.  | [optional] 
**availabilityDescription** | **String** | Availability text displayed on the checkout page, under the product title. Tells the customer how long it will normally take to ship this product, such as: &#x27;Usually ships in 24 hours.&#x27;  | [optional] 
**giftWrappingOptionsType** | **String** | Type of gift-wrapping options. Values: &#x60;any&#x60; - allow any gift-wrapping options in the store; &#x60;none&#x60; - disallow gift-wrapping on the product; &#x60;list&#x60; – provide a list of IDs in the &#x60;gift_wrapping_options_list&#x60; field.  | [optional] 
**giftWrappingOptionsList** | **[Number]** | A list of gift-wrapping option IDs.  | [optional] 
**sortOrder** | **Number** | Priority to give this product when included in product lists on category pages and in search results. Lower integers will place the product closer to the top of the results.  | [optional] 
**condition** | **String** | The product condition. Will be shown on the product page if the &#x60;is_condition_shown&#x60; field&#x27;s value is &#x60;true&#x60;. Possible values: &#x60;New&#x60;, &#x60;Used&#x60;, &#x60;Refurbished&#x60;.  | [optional] 
**isConditionShown** | **Boolean** | Flag used to determine whether the product condition is shown to the customer on the product page.  | [optional] 
**orderQuantityMinimum** | **Number** | The minimum quantity an order must contain, to be eligible to purchase this product.  | [optional] 
**orderQuantityMaximum** | **Number** | The maximum quantity an order can contain when purchasing the product.  | [optional] 
**pageTitle** | **String** | Custom title for the product page. If not defined, the product name will be used as the meta title.  | [optional] 
**metaKeywords** | **[String]** | Custom meta keywords for the product page. If not defined, the store&#x27;s default keywords will be used.  | [optional] 
**metaDescription** | **String** | Custom meta description for the product page. If not defined, the store&#x27;s default meta description will be used.  | [optional] 
**viewCount** | **Number** | The number of times the product has been viewed.  | [optional] 
**preorderReleaseDate** | **Date** | Pre-order release date. See the &#x60;availability&#x60; field for details on setting a product&#x27;s availability to accept pre-orders.  | [optional] 
**preorderMessage** | **String** | Custom expected-date message to display on the product page. If undefined, the message defaults to the storewide setting. Can contain the &#x60;%%DATE%%&#x60; placeholder, which will be substituted for the release date.  | [optional] 
**isPreorderOnly** | **Boolean** | If set to true then on the preorder release date the preorder status will automatically be removed.   If set to false, then on the release date the preorder status **will not** be removed. It will need to be changed manually either in the control panel or using the API. Using the API set &#x60;availability&#x60; to &#x60;available&#x60;.  | [optional] 
**isPriceHidden** | **Boolean** | False by default, indicating that this product&#x27;s price should be shown on the product page. If set to &#x60;true&#x60;, the price is hidden. (NOTE: To successfully set &#x60;is_price_hidden&#x60; to &#x60;true&#x60;, the &#x60;availability&#x60; value must be &#x60;disabled&#x60;.)  | [optional] 
**priceHiddenLabel** | **String** | By default, an empty string. If &#x60;is_price_hidden&#x60; is &#x60;true&#x60;, the value of &#x60;price_hidden_label&#x60; is displayed instead of the price. (NOTE: To successfully set a non-empty string value with &#x60;is_price_hidden&#x60; set to &#x60;true&#x60;, the &#x60;availability&#x60; value must be &#x60;disabled&#x60;.)  | [optional] 
**customUrl** | [**CustomUrlFull1**](CustomUrlFull1.md) |  | [optional] 
**openGraphType** | **String** | Type of product, defaults to &#x60;product&#x60;.  | [optional] 
**openGraphTitle** | **String** | Title of the product, if not specified the product name will be used instead.  | [optional] 
**openGraphDescription** | **String** | Description to use for the product, if not specified then the meta_description will be used instead.  | [optional] 
**openGraphUseMetaDescription** | **Boolean** | Flag to determine if product description or open graph description is used.  | [optional] 
**openGraphUseProductName** | **Boolean** | Flag to determine if product name or open graph name is used.  | [optional] 
**openGraphUseImage** | **Boolean** | Flag to determine if product image or open graph image is used.  | [optional] 
**brandNameOrBrandId** | **String** | The brand can be created during a product PUT or POST request. If the brand already exists then the product will be added. If not the brand will be created and the product added. If using &#x60;brand_name&#x60; it performs a fuzzy match and adds the brand. eg. \&quot;Common Good\&quot; and \&quot;Common good\&quot; are the same. Brand name does not return as part of a product response. Only the &#x60;brand_id&#x60;. | [optional] 
**gtin** | **String** | Global Trade Item Number | [optional] 
**mpn** | **String** | Manufacturer Part Number | [optional] 
**reviewsRatingSum** | **Number** | The total rating for the product.  | [optional] 
**reviewsCount** | **Number** | The number of times the product has been rated.  | [optional] 
**totalSold** | **Number** | The total quantity of this product sold.  | [optional] 
**customFields** | **[Object]** |  | [optional] 
**bulkPricingRules** | [**[BulkPricingRuleFull1]**](BulkPricingRuleFull1.md) |  | [optional] 
**images** | **[Object]** |  | [optional] 
**primaryImage** | **Object** | Common ProductImage properties. | [optional] 
**videos** | **[Object]** |  | [optional] 
**variants** | [**ProductVariantPutProduct1**](ProductVariantPutProduct1.md) |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `physical` (value: `"physical"`)
* `digital` (value: `"digital"`)


<a name="InventoryTrackingEnum"></a>
## Enum: InventoryTrackingEnum

* `none` (value: `"none"`)
* `product` (value: `"product"`)
* `variant` (value: `"variant"`)


<a name="AvailabilityEnum"></a>
## Enum: AvailabilityEnum

* `available` (value: `"available"`)
* `disabled` (value: `"disabled"`)
* `preorder` (value: `"preorder"`)


<a name="GiftWrappingOptionsTypeEnum"></a>
## Enum: GiftWrappingOptionsTypeEnum

* `any` (value: `"any"`)
* `none` (value: `"none"`)
* `list` (value: `"list"`)


<a name="ConditionEnum"></a>
## Enum: ConditionEnum

* `New` (value: `"New"`)
* `Used` (value: `"Used"`)
* `Refurbished` (value: `"Refurbished"`)


<a name="OpenGraphTypeEnum"></a>
## Enum: OpenGraphTypeEnum

* `product` (value: `"product"`)
* `album` (value: `"album"`)
* `book` (value: `"book"`)
* `drink` (value: `"drink"`)
* `food` (value: `"food"`)
* `game` (value: `"game"`)
* `movie` (value: `"movie"`)
* `song` (value: `"song"`)
* `tv_show` (value: `"tv_show"`)

