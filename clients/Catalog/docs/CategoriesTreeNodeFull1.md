# Catalog.CategoriesTreeNodeFull1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique numeric ID of the category; increments sequentially.  | [optional] 
**parentId** | **Number** | The unique numeric ID of the category&#x27;s parent. This field controls where the category sits in the tree of categories that organize the catalog.  | [optional] 
**name** | **String** | The name displayed for the category. Name is unique with respect to the category&#x27;s siblings.  | [optional] 
**isVisible** | **Boolean** | Flag to determine whether the product should be displayed to customers browsing the store. If &#x60;true&#x60;, the category will be displayed. If &#x60;false&#x60;, the category will be hidden from view.  | [optional] 
**url** | **String** | The custom URL for the category on the storefront.  | [optional] 
**children** | [**[CategoriesTreeNodeFull]**](CategoriesTreeNodeFull.md) | The list of children of the category.  | [optional] 
