# Catalog.Metafield

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID of the *Metafield*. Read-Only. | [optional] 
**permissionSet** | **String** | Determines whether the field is completely private to the app that owns the field (&#x60;app_only&#x60;), or visible to other API consumers (&#x60;read&#x60;), or completely open for reading and writing to other apps (&#x60;write&#x60;). Required for POST.  | 
**namespace** | **String** | Namespace for the metafield, for organizational purposes. This is set set by the developer. Required for POST.  | 
**key** | **String** | The name of the field, for example: &#x60;location_id&#x60;, &#x60;color&#x60;. Required for POST.  | 
**value** | **String** | The value of the field, for example: &#x60;1&#x60;, &#x60;blue&#x60;. Required for POST.  | 
**description** | **String** | Description for the metafields.  | [optional] 
**resourceType** | **String** | The type of resource with which the metafield is associated.  | [optional] 
**resourceId** | **Number** | The ID for the resource with which the metafield is associated.  | [optional] 
**createdAt** | **Date** | Date and time of the metafield&#x27;s creation. Read-Only.  | [optional] 
**updatedAt** | **Date** | Date and time when the metafield was last updated. Read-Only.  | [optional] 

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

