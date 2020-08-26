# Subscribers.SubscriberBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique numeric ID of the subscriber; increments sequentially.  | [optional] 
**email** | **String** | The email of the subscriber. Must be unique.  | [optional] 
**firstName** | **String** | The first name of the subscriber.  | [optional] 
**lastName** | **String** | The last name of the subscriber.  | [optional] 
**source** | **String** | The source of the subscriber. Values are: &#x60;storefront&#x60;, &#x60;order&#x60;, or &#x60;custom&#x60;.  | [optional] 
**orderId** | **Number** | The ID of the source order, if source was an order.  | [optional] 
**dateModified** | **Date** | The date on which the subscriber was modified.  | [optional] 
**dateCreated** | **Date** | The date of which the subscriber was created.  | [optional] 
