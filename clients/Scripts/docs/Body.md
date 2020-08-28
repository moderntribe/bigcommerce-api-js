# Scripts.Body

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The user-friendly description. | [optional] 
**html** | **String** | An html string containing exactly one &#x60;script&#x60; tag. Only present if &#x60;kind&#x60; is &#x60;script_tag&#x60; | [optional] 
**src** | **String** | The &#x60;src&#x60; attribute of the script to load. Only present if &#x60;kind&#x60; is &#x60;src&#x60;. | [optional] 
**autoUninstall** | **Boolean** | It will enable automatic cleanup of the script when the single click app is uninstalled or OAuth token is revoked. | [optional] 
**loadMethod** | **String** | The load method to use for the script. Values are &#x60;default&#x60;, &#x60;async&#x60;, or &#x60;defer&#x60;. It determines how the script should be loaded into the page. | [optional] 
**location** | **String** | Where on the page to place the script. Values are &#x60;head&#x60; or &#x60;footer&#x60;. | [optional] 
**visibility** | **String** | Which set of pages the script should load on.   Please note that you need to have &#x60;Checkout content&#x60; scope to use &#x60;all_pages&#x60; and &#x60;checkout&#x60;.  - The current visibility options are &#x60;storefront&#x60;, &#x60;checkout&#x60;, &#x60;all_pages&#x60; and &#x60;order_confirmation&#x60;.       &#x60;storefront&#x60;: All pages that are not &#x60;checkout&#x60; or &#x60;order_confirmation&#x60;.     For a list of all locations visit [Scripts Visibility](https://developer.bigcommerce.com/api-docs/storefront/scripts-overview#scripts_scripts-visibility). | [optional] 
**kind** | **String** | What type of script this is.  &#x60;src&#x60; - a &#x60;script&#x60; tag will be generated with its &#x60;src&#x60; attribute set to the value of &#x60;src&#x60;; For scripts that use the src url. By providing a path to the script, we can optimize and serve the script tag automatically for you.  &#x60;script_tag&#x60; - The value of &#x60;html&#x60; will be injected directly onto the page. For scripts which include a raw HTML script_tag to be inserted into the page. The load_method must be default. | [optional] 
**apiClientId** | **String** | The client id of the API user that created this script, or blank if created by other means. | [optional] 
**consentCategory** | **String** | What category of script this is for the purposes of GDPR/CCPA compliance. | [optional] 
**enabled** | **Boolean** | Indicates whether a script is enabled. | [optional] 

<a name="LoadMethodEnum"></a>
## Enum: LoadMethodEnum

* `default` (value: `"default"`)
* `async` (value: `"async"`)
* `defer` (value: `"defer"`)


<a name="LocationEnum"></a>
## Enum: LocationEnum

* `head` (value: `"head"`)
* `footer` (value: `"footer"`)


<a name="VisibilityEnum"></a>
## Enum: VisibilityEnum

* `storefront` (value: `"storefront"`)
* `all_pages` (value: `"all_pages"`)
* `checkout` (value: `"checkout"`)
* `order_confirmation` (value: `"order_confirmation"`)


<a name="KindEnum"></a>
## Enum: KindEnum

* `src` (value: `"src"`)
* `script_tag` (value: `"script_tag"`)


<a name="ConsentCategoryEnum"></a>
## Enum: ConsentCategoryEnum

* `essential` (value: `"essential"`)
* `functional` (value: `"functional"`)
* `analytics` (value: `"analytics"`)
* `targeting` (value: `"targeting"`)

