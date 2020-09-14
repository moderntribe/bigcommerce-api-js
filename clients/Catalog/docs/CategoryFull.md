# Catalog.CategoryFull

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID of the *Category*. Increments sequentially. Read-Only.  | [optional] 
**parentId** | **Number** | The unique numeric ID of the category&#x27;s parent. This field controls where the category sits in the tree of categories that organize the catalog. Required in a POST if creating a child category. | 
**name** | **String** | The name displayed for the category. Name is unique with respect to the category&#x27;s siblings. Required in a POST. | 
**description** | **String** | The product description, which can include HTML formatting.  | [optional] 
**views** | **Number** | Number of views the category has on the storefront.  | [optional] 
**sortOrder** | **Number** | Priority this category will be given when included in the menu and category pages. The lower the number, the closer to the top of the results the category will be.  | [optional] 
**pageTitle** | **String** | Custom title for the category page. If not defined, the category name will be used as the meta title.  | [optional] 
**searchKeywords** | **String** | A comma-separated list of keywords that can be used to locate the category when searching the store.  | [optional] 
**metaKeywords** | **[String]** | Custom meta keywords for the category page. If not defined, the store&#x27;s default keywords will be used. Must post as an array like: [\&quot;awesome\&quot;,\&quot;sauce\&quot;].  | [optional] 
**metaDescription** | **String** | Custom meta description for the category page. If not defined, the store&#x27;s default meta description will be used.  | [optional] 
**layoutFile** | **String** | A valid layout file. (Please refer to [this article](https://support.bigcommerce.com/articles/Public/Creating-Custom-Template-Files/) on creating category files.) This field is writable only for stores with a Blueprint theme applied.  | [optional] 
**isVisible** | **Boolean** | Flag to determine whether the product should be displayed to customers browsing the store. If &#x60;true&#x60;, the category will be displayed. If &#x60;false&#x60;, the category will be hidden from view.  | [optional] 
**defaultProductSort** | **String** | Determines how the products are sorted on category page load.  | [optional] 
**imageUrl** | **String** | Image URL used for this category on the storefront. Images can be uploaded via form file post to &#x60;/categories/{categoryId}/image&#x60;, or by providing a publicly accessible URL in this field.  | [optional] 
**customUrl** | [**CustomUrlFull1**](CustomUrlFull1.md) |  | [optional] 

<a name="DefaultProductSortEnum"></a>
## Enum: DefaultProductSortEnum

* `use_store_settings` (value: `"use_store_settings"`)
* `featured` (value: `"featured"`)
* `newest` (value: `"newest"`)
* `best_selling` (value: `"best_selling"`)
* `alpha_asc` (value: `"alpha_asc"`)
* `alpha_desc` (value: `"alpha_desc"`)
* `avg_customer_review` (value: `"avg_customer_review"`)
* `price_asc` (value: `"price_asc"`)
* `price_desc` (value: `"price_desc"`)

