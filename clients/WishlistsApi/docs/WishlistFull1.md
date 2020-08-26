# Wishlist.WishlistFull1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Wishlist ID, provided after creating a wishlist with a POST. | [optional] 
**customerId** | **Number** | The ID the customer to which the wishlist belongs. | [optional] 
**name** | **String** | The Wishlist&#x27;s name. | [optional] 
**isPublic** | **Boolean** | Whether the Wishlist is available to the public. | [optional] 
**token** | **String** | The token of the Wishlist. This is created internally within BigCommerce. The Wishlist ID is to be used for external apps. Read-Only | [optional] 
**items** | [**[WishlistItem]**](WishlistItem.md) | Array of Wishlist items | [optional] 
