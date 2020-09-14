# Catalog.MetafieldPut1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID of the *Metafield*. Read-Only. | [optional] 
**permissionSet** | **String** | Determines the visibility and writeability of the field by other API consumers.  |Value|Description |-|-| |&#x60;app_only&#x60;|Private to the app that owns the field| |&#x60;read&#x60;|Visible to other API consumers| |&#x60;write&#x60;|Open for reading and writing by other API consumers| |&#x60;read_and_sf_access&#x60;|Visible to other API consumers, including on storefront| |&#x60;write_and_sf_access&#x60;|Open for reading and writing by other API consumers, including on storefront| | 
**namespace** | **String** | Namespace for the metafield, for organizational purposes. This is set set by the developer. Required for POST.  | 
**key** | **String** | The name of the field, for example: &#x60;location_id&#x60;, &#x60;color&#x60;. Required for POST.  | 
**value** | **String** | The value of the field, for example: &#x60;1&#x60;, &#x60;blue&#x60;. Required for POST.  | 
**description** | **String** | Description for the metafields.  | [optional] 
**resourceType** | **String** | The type of resource with which the metafield is associated.  | [optional] 
**resourceId** | **Number** | The ID for the resource with which the metafield is associated.  | [optional] 
**dateCreated** | **Date** | Date and time of the metafield&#x27;s creation. Read-Only.  | [optional] 
**dateModified** | **Date** | Date and time when the metafield was last updated. Read-Only.  | [optional] 

<a name="PermissionSetEnum"></a>
## Enum: PermissionSetEnum

* `app_only` (value: `"app_only"`)
* `read` (value: `"read"`)
* `write` (value: `"write"`)
* `read_and_sf_access` (value: `"read_and_sf_access"`)
* `write_and_sf_access` (value: `"write_and_sf_access"`)


<a name="ResourceTypeEnum"></a>
## Enum: ResourceTypeEnum

* `category` (value: `"category"`)
* `brand` (value: `"brand"`)
* `product` (value: `"product"`)
* `variant` (value: `"variant"`)

