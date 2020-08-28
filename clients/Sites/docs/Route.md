# Sites.Route

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this route. Required when updating an existing route | [optional] 
**type** | **String** | What type of resource are we routing to? | [optional] 
**matching** | **String** | (entity_id?) For a given type, which resources should match this route? e.g For a route with the type: \&quot;product\&quot; and matching: \&quot;5\&quot; this route would be used for the product with the ID of 5.  Depending on the type of resource, this may be an ID (matching a specific item), or a \&quot;*\&quot; wildcard matching all items of that type. | [optional] 
**route** | **String** | The route template that will be used to generate the URL for the requested resource.  Supports several tokens: - &#x60;{id}&#x60; The **ID** of the requested item - &#x60;{slug}&#x60; The **slug** for the requested item (if available). Note: the &#x60;slug&#x60; value may contain &#x60;/&#x60; slash - &#x60;{language}&#x60; The **language** string that the client is using | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `product` (value: `"product"`)
* `brand` (value: `"brand"`)
* `category` (value: `"category"`)
* `page` (value: `"page"`)
* `blog` (value: `"blog"`)
* `home` (value: `"home"`)
* `cart` (value: `"cart"`)
* `checkout` (value: `"checkout"`)
* `search` (value: `"search"`)
* `account` (value: `"account"`)
* `login` (value: `"login"`)
* `returns` (value: `"returns"`)
* `static` (value: `"static"`)

