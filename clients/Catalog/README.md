# catalog

Catalog - JavaScript client for catalog
- [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Differentiating Variants & Modifiers](#variants-and-modifiers) - [Available Endpoints](#available-endpoints) - [Resources](#resources)  The Catalog API manages products, brands and categories for a store. To learn more about the Catalog resources see [Catalog Products](https://developer.bigcommerce.com/api-docs/catalog/products-overview) and [Categories](https://developer.bigcommerce.com/api-docs/catalog/products-overview#products-overview_categories).  ## OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | modify     | `store_v2_products`           | | Products | read-only  | `store_v2_products_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Differentiating Variants and Modifiers [Variants](https://support.bigcommerce.com/s/article/Product-Options-v3#variations) represent a physical product made up of [Product Option](https://support.bigcommerce.com/s/article/Product-Options-v3) choices, i.e. a large blue t-shirt. Each variant can have a unique SKU.  Modifiers represent a choice a customer makes about a product that doesn't represent a physical item, i.e. text to be printed on a t-shirt. Assigning a SKU to a modifier will turn it into a variant.  See [Variant Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#variant-options) and [Modifier Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#modifier-options) for more information.  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Brand Images                            | Create and manage brand images                                          | | Brand Metafields                        | Create and manage brand metafields                                      | | Brands                                  | Create and manage brands                                                | | Catalog                                 | Create and manage store categories, products, and brands                | | Categories                              | Create and manage categorties                                           | | Category Images                         | Create and manage category images                                       | | Category Metafields                     | Create and manage category metafields                                   | | Product Bulk Pricing Rules              | Create and manage product bulk pricing rules                            | | Product Complex Rules                   | Create and manage product complex rules                                 | | Product Custom Fields                   | Create and manage product custom fields                                 | | Product Images                          | Create and manage product images                                        | | Product Metafields                      | Create and manage product meta fields                                   | | Product Modifier Images                 | Create and manage product modifer images                                | | Product Modifier Values                 | Create and manage product modifier values                               | | Product Modifiers                       | Create and manage product midifiers                                     | | Product Reviews                         | Create and manage product reviews                                       | | Product Variant Option Values           | Create and manage product variant option values                         | | Product Variant Options                 | Create and manage product variant options                               | | Product Variants                        | Create and manage product variants                                      | | Product Videos                          | Create and manage product videos                                        | | Products                                | Create and manage products                                              | | ProductVariant Metafields               | Create and manage product meta flields                                  | | Variants                                | Get and update all variants                                             |  ## Resources  ### Webhooks * [Products](/api-docs/getting-started/webhooks/webhook-events#webhook-events_products) * [Categories](/api-docs/getting-started/webhooks/webhook-events#webhook-events_category) * [SKU](/api-docs/getting-started/webhooks/webhook-events#webhook-events_sku)  ### Related Endpoints * [Catalog API](/api-reference/catalog/catalog-api)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.0
- Package version: 3.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen
For more information, please visit [https://developer.bigcommerce.com/](https://developer.bigcommerce.com/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install catalog --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Catalog = require('catalog');
var defaultClient = Catalog.ApiClient.instance;

// Configure API key authorization: X-Auth-Client
var X-Auth-Client = defaultClient.authentications['X-Auth-Client'];
X-Auth-Client.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Client.apiKeyPrefix['X-Auth-Client'] = "Token"

// Configure API key authorization: X-Auth-Token
var X-Auth-Token = defaultClient.authentications['X-Auth-Token'];
X-Auth-Token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Auth-Token.apiKeyPrefix['X-Auth-Token'] = "Token"

var api = new Catalog.BrandImagesApi()
var brandId = 56; // {Number} The ID of the `Brand` to which the resource belongs. 
var accept = "application/json"; // {String} 
var contentType = "application/json"; // {String} 
var opts = { 
  'imageFile': "imageFile_example" // {File} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createBrandImage(brandId, accept, contentType, opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.bigcommerce.com/stores/{$$.env.store_hash}/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Catalog.BrandImagesApi* | [**createBrandImage**](docs/BrandImagesApi.md#createBrandImage) | **POST** /catalog/brands/{brand_id}/image | Create a Brand Image
*Catalog.BrandImagesApi* | [**deleteBrandImage**](docs/BrandImagesApi.md#deleteBrandImage) | **DELETE** /catalog/brands/{brand_id}/image | Delete a Brand Image
*Catalog.BrandMetafieldsApi* | [**createBrandMetafield**](docs/BrandMetafieldsApi.md#createBrandMetafield) | **POST** /catalog/brands/{brand_id}/metafields | Create a Brand Metafield
*Catalog.BrandMetafieldsApi* | [**deleteBrandMetafieldById**](docs/BrandMetafieldsApi.md#deleteBrandMetafieldById) | **DELETE** /catalog/brands/{brand_id}/metafields/{metafield_id} | Delete a Brand Metafield
*Catalog.BrandMetafieldsApi* | [**getBrandMetafieldByBrandId**](docs/BrandMetafieldsApi.md#getBrandMetafieldByBrandId) | **GET** /catalog/brands/{brand_id}/metafields/{metafield_id} | Get a Brand Metafields
*Catalog.BrandMetafieldsApi* | [**getBrandMetafieldsByBrandId**](docs/BrandMetafieldsApi.md#getBrandMetafieldsByBrandId) | **GET** /catalog/brands/{brand_id}/metafields | Get All Brand Metafields
*Catalog.BrandMetafieldsApi* | [**updateBrandMetafield**](docs/BrandMetafieldsApi.md#updateBrandMetafield) | **PUT** /catalog/brands/{brand_id}/metafields/{metafield_id} | Update a Brand Metafield
*Catalog.BrandsApi* | [**createBrand**](docs/BrandsApi.md#createBrand) | **POST** /catalog/brands | Create a Brand
*Catalog.BrandsApi* | [**deleteBrandById**](docs/BrandsApi.md#deleteBrandById) | **DELETE** /catalog/brands/{brand_id} | Delete a Brand
*Catalog.BrandsApi* | [**deleteBrands**](docs/BrandsApi.md#deleteBrands) | **DELETE** /catalog/brands | Delete Brands
*Catalog.BrandsApi* | [**getBrandById**](docs/BrandsApi.md#getBrandById) | **GET** /catalog/brands/{brand_id} | Get a Brand
*Catalog.BrandsApi* | [**getBrands**](docs/BrandsApi.md#getBrands) | **GET** /catalog/brands | Get All Brands
*Catalog.BrandsApi* | [**updateBrand**](docs/BrandsApi.md#updateBrand) | **PUT** /catalog/brands/{brand_id} | Update a Brand
*Catalog.CatalogApi* | [**deleteBrands**](docs/CatalogApi.md#deleteBrands) | **DELETE** /catalog/brands | Delete Brands
*Catalog.CatalogApi* | [**deleteProducts**](docs/CatalogApi.md#deleteProducts) | **DELETE** /catalog/products | Delete Products
*Catalog.CatalogApi* | [**updateVariantsBatch**](docs/CatalogApi.md#updateVariantsBatch) | **PUT** /catalog/variants | Update Variants (Batch)
*Catalog.CategoryApi* | [**createCategory**](docs/CategoryApi.md#createCategory) | **POST** /catalog/categories | Create a Category
*Catalog.CategoryApi* | [**deleteCategories**](docs/CategoryApi.md#deleteCategories) | **DELETE** /catalog/categories | Delete Categories
*Catalog.CategoryApi* | [**deleteCategoryById**](docs/CategoryApi.md#deleteCategoryById) | **DELETE** /catalog/categories/{category_id} | Delete a Category
*Catalog.CategoryApi* | [**getCategories**](docs/CategoryApi.md#getCategories) | **GET** /catalog/categories | Get All Categories
*Catalog.CategoryApi* | [**getCategoryById**](docs/CategoryApi.md#getCategoryById) | **GET** /catalog/categories/{category_id} | Get a Category
*Catalog.CategoryApi* | [**getCategoryTree**](docs/CategoryApi.md#getCategoryTree) | **GET** /catalog/categories/tree | Get Category Tree
*Catalog.CategoryApi* | [**updateCategory**](docs/CategoryApi.md#updateCategory) | **PUT** /catalog/categories/{category_id} | Update a Category
*Catalog.CategoryImagesApi* | [**createCategoryImage**](docs/CategoryImagesApi.md#createCategoryImage) | **POST** /catalog/categories/{category_id}/image | Create a Category Image
*Catalog.CategoryImagesApi* | [**deleteCategoryImage**](docs/CategoryImagesApi.md#deleteCategoryImage) | **DELETE** /catalog/categories/{category_id}/image | Delete a Category Image
*Catalog.CategoryMetafieldsApi* | [**createCategoryMetafield**](docs/CategoryMetafieldsApi.md#createCategoryMetafield) | **POST** /catalog/categories/{category_id}/metafields | Create a Category Metafield
*Catalog.CategoryMetafieldsApi* | [**deleteCategoryMetafieldById**](docs/CategoryMetafieldsApi.md#deleteCategoryMetafieldById) | **DELETE** /catalog/categories/{category_id}/metafields/{metafield_id} | Delete a Category Metafield
*Catalog.CategoryMetafieldsApi* | [**getCategoryMetafieldByCategoryId**](docs/CategoryMetafieldsApi.md#getCategoryMetafieldByCategoryId) | **GET** /catalog/categories/{category_id}/metafields/{metafield_id} | Get a Category Metafield
*Catalog.CategoryMetafieldsApi* | [**getCategoryMetafieldsByCategoryId**](docs/CategoryMetafieldsApi.md#getCategoryMetafieldsByCategoryId) | **GET** /catalog/categories/{category_id}/metafields | Get All Category Metafields
*Catalog.CategoryMetafieldsApi* | [**updateCategoryMetafield**](docs/CategoryMetafieldsApi.md#updateCategoryMetafield) | **PUT** /catalog/categories/{category_id}/metafields/{metafield_id} | Update a Category Metafield
*Catalog.ProductBulkPricingRulesApi* | [**createBulkPricingRule**](docs/ProductBulkPricingRulesApi.md#createBulkPricingRule) | **POST** /catalog/products/{product_id}/bulk-pricing-rules | Creates a Bulk Pricing Rule
*Catalog.ProductBulkPricingRulesApi* | [**deleteBulkPricingRuleById**](docs/ProductBulkPricingRulesApi.md#deleteBulkPricingRuleById) | **DELETE** /catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id} | Delete a Bulk Pricing Rule
*Catalog.ProductBulkPricingRulesApi* | [**getBulkPricingRuleById**](docs/ProductBulkPricingRulesApi.md#getBulkPricingRuleById) | **GET** /catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id} | Get a Bulk Pricing Rule
*Catalog.ProductBulkPricingRulesApi* | [**getBulkPricingRules**](docs/ProductBulkPricingRulesApi.md#getBulkPricingRules) | **GET** /catalog/products/{product_id}/bulk-pricing-rules | Get All Bulk Pricing Rules
*Catalog.ProductBulkPricingRulesApi* | [**updateBulkPricingRule**](docs/ProductBulkPricingRulesApi.md#updateBulkPricingRule) | **PUT** /catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id} | Update a Bulk Pricing Rule
*Catalog.ProductComplexRulesApi* | [**createComplexRule**](docs/ProductComplexRulesApi.md#createComplexRule) | **POST** /catalog/products/{product_id}/complex-rules | Create a Complex Rule
*Catalog.ProductComplexRulesApi* | [**deleteComplexRuleById**](docs/ProductComplexRulesApi.md#deleteComplexRuleById) | **DELETE** /catalog/products/{product_id}/complex-rules/{complex_rule_id} | Delete a Complex Rule
*Catalog.ProductComplexRulesApi* | [**getComplexRuleById**](docs/ProductComplexRulesApi.md#getComplexRuleById) | **GET** /catalog/products/{product_id}/complex-rules/{complex_rule_id} | Get a Complex Rule
*Catalog.ProductComplexRulesApi* | [**getComplexRules**](docs/ProductComplexRulesApi.md#getComplexRules) | **GET** /catalog/products/{product_id}/complex-rules | Get Complex Rules
*Catalog.ProductComplexRulesApi* | [**updateComplexRule**](docs/ProductComplexRulesApi.md#updateComplexRule) | **PUT** /catalog/products/{product_id}/complex-rules/{complex_rule_id} | Update a Complex Rule
*Catalog.ProductCustomFieldsApi* | [**createCustomField**](docs/ProductCustomFieldsApi.md#createCustomField) | **POST** /catalog/products/{product_id}/custom-fields | Create a Custom Fields
*Catalog.ProductCustomFieldsApi* | [**deleteCustomFieldById**](docs/ProductCustomFieldsApi.md#deleteCustomFieldById) | **DELETE** /catalog/products/{product_id}/custom-fields/{custom_field_id} | Delete a Custom Field
*Catalog.ProductCustomFieldsApi* | [**getCustomFieldById**](docs/ProductCustomFieldsApi.md#getCustomFieldById) | **GET** /catalog/products/{product_id}/custom-fields/{custom_field_id} | Get a Custom Field
*Catalog.ProductCustomFieldsApi* | [**getCustomFields**](docs/ProductCustomFieldsApi.md#getCustomFields) | **GET** /catalog/products/{product_id}/custom-fields | Get Custom Fields
*Catalog.ProductCustomFieldsApi* | [**updateCustomField**](docs/ProductCustomFieldsApi.md#updateCustomField) | **PUT** /catalog/products/{product_id}/custom-fields/{custom_field_id} | Update a Custom Field
*Catalog.ProductImagesApi* | [**createProductImage**](docs/ProductImagesApi.md#createProductImage) | **POST** /catalog/products/{product_id}/images | Create a Product Image
*Catalog.ProductImagesApi* | [**deleteProductImage**](docs/ProductImagesApi.md#deleteProductImage) | **DELETE** /catalog/products/{product_id}/images/{image_id} | Delete a Product Image
*Catalog.ProductImagesApi* | [**getProductImageById**](docs/ProductImagesApi.md#getProductImageById) | **GET** /catalog/products/{product_id}/images/{image_id} | Get a Product Image
*Catalog.ProductImagesApi* | [**getProductImages**](docs/ProductImagesApi.md#getProductImages) | **GET** /catalog/products/{product_id}/images | Get All Product Images
*Catalog.ProductImagesApi* | [**updateProductImage**](docs/ProductImagesApi.md#updateProductImage) | **PUT** /catalog/products/{product_id}/images/{image_id} | Update a Product Image
*Catalog.ProductMetafieldsApi* | [**createProductMetafield**](docs/ProductMetafieldsApi.md#createProductMetafield) | **POST** /catalog/products/{product_id}/metafields | Create a Product Metafield
*Catalog.ProductMetafieldsApi* | [**deleteProductMetafieldById**](docs/ProductMetafieldsApi.md#deleteProductMetafieldById) | **DELETE** /catalog/products/{product_id}/metafields/{metafield_id} | Delete a Product Metafield
*Catalog.ProductMetafieldsApi* | [**getProductMetafieldByProductId**](docs/ProductMetafieldsApi.md#getProductMetafieldByProductId) | **GET** /catalog/products/{product_id}/metafields/{metafield_id} | Get a Product Metafield
*Catalog.ProductMetafieldsApi* | [**getProductMetafieldsByProductId**](docs/ProductMetafieldsApi.md#getProductMetafieldsByProductId) | **GET** /catalog/products/{product_id}/metafields | Get All Product Metafields
*Catalog.ProductMetafieldsApi* | [**updateProductMetafield**](docs/ProductMetafieldsApi.md#updateProductMetafield) | **PUT** /catalog/products/{product_id}/metafields/{metafield_id} | Update a Product Metafield
*Catalog.ProductModifierImagesApi* | [**createModifierImage**](docs/ProductModifierImagesApi.md#createModifierImage) | **POST** /catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image | Create Modifier Image
*Catalog.ProductModifierImagesApi* | [**deleteModifierImage**](docs/ProductModifierImagesApi.md#deleteModifierImage) | **DELETE** /catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image | Delete Modifier Image
*Catalog.ProductModifierValuesApi* | [**createModifierValue**](docs/ProductModifierValuesApi.md#createModifierValue) | **POST** /catalog/products/{product_id}/modifiers/{modifier_id}/values | Create Modifier Value
*Catalog.ProductModifierValuesApi* | [**deleteModifierValueById**](docs/ProductModifierValuesApi.md#deleteModifierValueById) | **DELETE** /catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id} | Delete Modifier Value
*Catalog.ProductModifierValuesApi* | [**getModifierValueById**](docs/ProductModifierValuesApi.md#getModifierValueById) | **GET** /catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id} | Get a Modifier Value
*Catalog.ProductModifierValuesApi* | [**getModifierValues**](docs/ProductModifierValuesApi.md#getModifierValues) | **GET** /catalog/products/{product_id}/modifiers/{modifier_id}/values | Get All Modifier Values
*Catalog.ProductModifierValuesApi* | [**updateModifierValue**](docs/ProductModifierValuesApi.md#updateModifierValue) | **PUT** /catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id} | Update a Modifier Value
*Catalog.ProductModifiersApi* | [**createModifier**](docs/ProductModifiersApi.md#createModifier) | **POST** /catalog/products/{product_id}/modifiers | Create a Product Modifier
*Catalog.ProductModifiersApi* | [**deleteModifierById**](docs/ProductModifiersApi.md#deleteModifierById) | **DELETE** /catalog/products/{product_id}/modifiers/{modifier_id} | Delete a Modifier
*Catalog.ProductModifiersApi* | [**getModifierById**](docs/ProductModifiersApi.md#getModifierById) | **GET** /catalog/products/{product_id}/modifiers/{modifier_id} | Get a Modifier
*Catalog.ProductModifiersApi* | [**getModifiers**](docs/ProductModifiersApi.md#getModifiers) | **GET** /catalog/products/{product_id}/modifiers | Get All Product Modifiers
*Catalog.ProductModifiersApi* | [**updateModifier**](docs/ProductModifiersApi.md#updateModifier) | **PUT** /catalog/products/{product_id}/modifiers/{modifier_id} | Update a Modifier
*Catalog.ProductOptionValuesApi* | [**createOptionValue**](docs/ProductOptionValuesApi.md#createOptionValue) | **POST** /catalog/products/{product_id}/options/{option_id}/values | Create Product Option Values
*Catalog.ProductOptionValuesApi* | [**deleteOptionValueById**](docs/ProductOptionValuesApi.md#deleteOptionValueById) | **DELETE** /catalog/products/{product_id}/options/{option_id}/values/{value_id} | Delete a Product Option Value
*Catalog.ProductOptionValuesApi* | [**getOptionValueById**](docs/ProductOptionValuesApi.md#getOptionValueById) | **GET** /catalog/products/{product_id}/options/{option_id}/values/{value_id} | Get a Product Option Value
*Catalog.ProductOptionValuesApi* | [**getOptionValues**](docs/ProductOptionValuesApi.md#getOptionValues) | **GET** /catalog/products/{product_id}/options/{option_id}/values | Get all Product Option Values
*Catalog.ProductOptionValuesApi* | [**updateOptionValue**](docs/ProductOptionValuesApi.md#updateOptionValue) | **PUT** /catalog/products/{product_id}/options/{option_id}/values/{value_id} | Update a Product Option Value
*Catalog.ProductOptionsApi* | [**createOption**](docs/ProductOptionsApi.md#createOption) | **POST** /catalog/products/{product_id}/options | Create a Product Option
*Catalog.ProductOptionsApi* | [**deleteOptionById**](docs/ProductOptionsApi.md#deleteOptionById) | **DELETE** /catalog/products/{product_id}/options/{option_id} | Delete a Product Option
*Catalog.ProductOptionsApi* | [**getOptionById**](docs/ProductOptionsApi.md#getOptionById) | **GET** /catalog/products/{product_id}/options/{option_id} | Get a Product Option
*Catalog.ProductOptionsApi* | [**getOptions**](docs/ProductOptionsApi.md#getOptions) | **GET** /catalog/products/{product_id}/options | Get all Product Options
*Catalog.ProductOptionsApi* | [**updateOption**](docs/ProductOptionsApi.md#updateOption) | **PUT** /catalog/products/{product_id}/options/{option_id} | Update a Product Option
*Catalog.ProductReviewsApi* | [**createProductReview**](docs/ProductReviewsApi.md#createProductReview) | **POST** /catalog/products/{product_id}/reviews | Create a Product Review
*Catalog.ProductReviewsApi* | [**deleteProductReview**](docs/ProductReviewsApi.md#deleteProductReview) | **DELETE** /catalog/products/{product_id}/reviews/{review_id} | Delete a Product Review
*Catalog.ProductReviewsApi* | [**getProductReviewById**](docs/ProductReviewsApi.md#getProductReviewById) | **GET** /catalog/products/{product_id}/reviews/{review_id} | Get a Product Review
*Catalog.ProductReviewsApi* | [**getProductReviews**](docs/ProductReviewsApi.md#getProductReviews) | **GET** /catalog/products/{product_id}/reviews | Get Product Reviews
*Catalog.ProductReviewsApi* | [**updateProductReview**](docs/ProductReviewsApi.md#updateProductReview) | **PUT** /catalog/products/{product_id}/reviews/{review_id} | Update a Product Review
*Catalog.ProductVariantsApi* | [**createVariant**](docs/ProductVariantsApi.md#createVariant) | **POST** /catalog/products/{product_id}/variants | Create a Product Variant
*Catalog.ProductVariantsApi* | [**createVariantImage**](docs/ProductVariantsApi.md#createVariantImage) | **POST** /catalog/products/{product_id}/variants/{variant_id}/image | Create a Variant Image
*Catalog.ProductVariantsApi* | [**deleteVariantById**](docs/ProductVariantsApi.md#deleteVariantById) | **DELETE** /catalog/products/{product_id}/variants/{variant_id} | Delete a Product Variant
*Catalog.ProductVariantsApi* | [**getVariantById**](docs/ProductVariantsApi.md#getVariantById) | **GET** /catalog/products/{product_id}/variants/{variant_id} | Get a Product Variant
*Catalog.ProductVariantsApi* | [**getVariantsByProductId**](docs/ProductVariantsApi.md#getVariantsByProductId) | **GET** /catalog/products/{product_id}/variants | Get All Product Variants
*Catalog.ProductVariantsApi* | [**updateVariant**](docs/ProductVariantsApi.md#updateVariant) | **PUT** /catalog/products/{product_id}/variants/{variant_id} | Update a Product Variant
*Catalog.ProductVariantsMetafieldsApi* | [**createVariantMetafield**](docs/ProductVariantsMetafieldsApi.md#createVariantMetafield) | **POST** /catalog/products/{product_id}/variants/{variant_id}/metafields | Create a Product Variant Metafield
*Catalog.ProductVariantsMetafieldsApi* | [**deleteVariantMetafieldById**](docs/ProductVariantsMetafieldsApi.md#deleteVariantMetafieldById) | **DELETE** /catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} | Delete a Variant Metafield
*Catalog.ProductVariantsMetafieldsApi* | [**getVariantMetafieldByProductIdAndVariantId**](docs/ProductVariantsMetafieldsApi.md#getVariantMetafieldByProductIdAndVariantId) | **GET** /catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} | Get Product Variant Metafields
*Catalog.ProductVariantsMetafieldsApi* | [**getVariantMetafieldsByProductIdAndVariantId**](docs/ProductVariantsMetafieldsApi.md#getVariantMetafieldsByProductIdAndVariantId) | **GET** /catalog/products/{product_id}/variants/{variant_id}/metafields | Get Product Variant Metafields
*Catalog.ProductVariantsMetafieldsApi* | [**updateVariantMetafield**](docs/ProductVariantsMetafieldsApi.md#updateVariantMetafield) | **PUT** /catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} | Update Product Variant Metafields
*Catalog.ProductVideosApi* | [**createProductVideo**](docs/ProductVideosApi.md#createProductVideo) | **POST** /catalog/products/{product_id}/videos | Create a Product Video
*Catalog.ProductVideosApi* | [**deleteProductVideo**](docs/ProductVideosApi.md#deleteProductVideo) | **DELETE** /catalog/products/{product_id}/videos/{id} | Delete a Product Video
*Catalog.ProductVideosApi* | [**getProductVideoById**](docs/ProductVideosApi.md#getProductVideoById) | **GET** /catalog/products/{product_id}/videos/{id} | Get a Product Video
*Catalog.ProductVideosApi* | [**getProductVideos**](docs/ProductVideosApi.md#getProductVideos) | **GET** /catalog/products/{product_id}/videos | Get All Product Videos
*Catalog.ProductVideosApi* | [**updateProductVideo**](docs/ProductVideosApi.md#updateProductVideo) | **PUT** /catalog/products/{product_id}/videos/{id} | Update a Product Video
*Catalog.ProductsApi* | [**createProduct**](docs/ProductsApi.md#createProduct) | **POST** /catalog/products | Create a Product
*Catalog.ProductsApi* | [**deleteProductById**](docs/ProductsApi.md#deleteProductById) | **DELETE** /catalog/products/{product_id} | Delete a Product
*Catalog.ProductsApi* | [**deleteProducts**](docs/ProductsApi.md#deleteProducts) | **DELETE** /catalog/products | Delete Products
*Catalog.ProductsApi* | [**getProductById**](docs/ProductsApi.md#getProductById) | **GET** /catalog/products/{product_id} | Get a Product
*Catalog.ProductsApi* | [**getProducts**](docs/ProductsApi.md#getProducts) | **GET** /catalog/products | Get All Products
*Catalog.ProductsApi* | [**updateProduct**](docs/ProductsApi.md#updateProduct) | **PUT** /catalog/products/{product_id} | Update a Product
*Catalog.ProductsApi* | [**updateProducts**](docs/ProductsApi.md#updateProducts) | **PUT** /catalog/products | Update Products (Batch)
*Catalog.SummaryApi* | [**getCatalogSummary**](docs/SummaryApi.md#getCatalogSummary) | **GET** /catalog/summary | Get a Catalog Summary
*Catalog.VariantsApi* | [**getVariants**](docs/VariantsApi.md#getVariants) | **GET** /catalog/variants | Get All Variants
*Catalog.VariantsApi* | [**updateVariantsBatch**](docs/VariantsApi.md#updateVariantsBatch) | **PUT** /catalog/variants | Update Variants (Batch)

## Documentation for Models

 - [Catalog.Adjuster](docs/Adjuster.md)
 - [Catalog.AdjusterFull](docs/AdjusterFull.md)
 - [Catalog.AdjustersFull](docs/AdjustersFull.md)
 - [Catalog.AdjustersFull1](docs/AdjustersFull1.md)
 - [Catalog.AdjustersFull1PurchasingDisabled](docs/AdjustersFull1PurchasingDisabled.md)
 - [Catalog.AllOfMetaFieldCollectionResponse1DataItems](docs/AllOfMetaFieldCollectionResponse1DataItems.md)
 - [Catalog.AllOfMetafieldResponse1Data](docs/AllOfMetafieldResponse1Data.md)
 - [Catalog.AllOfModifierCollectionResponseDataItems](docs/AllOfModifierCollectionResponseDataItems.md)
 - [Catalog.AllOfModifierResponse1Data](docs/AllOfModifierResponse1Data.md)
 - [Catalog.AllOfModifierResponseData](docs/AllOfModifierResponseData.md)
 - [Catalog.AllOfModifierValueCollectionResponseDataItems](docs/AllOfModifierValueCollectionResponseDataItems.md)
 - [Catalog.AllOfModifierValueResponse1Data](docs/AllOfModifierValueResponse1Data.md)
 - [Catalog.AllOfModifierValueResponseData](docs/AllOfModifierValueResponseData.md)
 - [Catalog.AllOfOptionCollectionResponseDataItems](docs/AllOfOptionCollectionResponseDataItems.md)
 - [Catalog.AllOfOptionResponse1Data](docs/AllOfOptionResponse1Data.md)
 - [Catalog.AllOfOptionResponse2Data](docs/AllOfOptionResponse2Data.md)
 - [Catalog.AllOfOptionResponseData](docs/AllOfOptionResponseData.md)
 - [Catalog.AllOfOptionValueCollectionResponseDataItems](docs/AllOfOptionValueCollectionResponseDataItems.md)
 - [Catalog.AllOfOptionValueResponseData](docs/AllOfOptionValueResponseData.md)
 - [Catalog.AllOfProductImageCollectionResponseDataItems](docs/AllOfProductImageCollectionResponseDataItems.md)
 - [Catalog.AllOfProductImageResponse1Data](docs/AllOfProductImageResponse1Data.md)
 - [Catalog.AllOfProductImageResponseData](docs/AllOfProductImageResponseData.md)
 - [Catalog.AllOfProductResponseData](docs/AllOfProductResponseData.md)
 - [Catalog.AllOfProductReviewCollectionResponseDataItems](docs/AllOfProductReviewCollectionResponseDataItems.md)
 - [Catalog.AllOfProductReviewResponseData](docs/AllOfProductReviewResponseData.md)
 - [Catalog.AllOfProductVideoCollectionResponseDataItems](docs/AllOfProductVideoCollectionResponseDataItems.md)
 - [Catalog.AllOfProductVideoResponse1Data](docs/AllOfProductVideoResponse1Data.md)
 - [Catalog.AllOfProductVideoResponseData](docs/AllOfProductVideoResponseData.md)
 - [Catalog.AllOfVariantCollectionResponse1DataItems](docs/AllOfVariantCollectionResponse1DataItems.md)
 - [Catalog.AllOfVariantCollectionResponseDataItems](docs/AllOfVariantCollectionResponseDataItems.md)
 - [Catalog.AllOfVariantResponseData](docs/AllOfVariantResponseData.md)
 - [Catalog.AllOfVariantsBatchErrorResponseBatchErrorsItems](docs/AllOfVariantsBatchErrorResponseBatchErrorsItems.md)
 - [Catalog.AllOfinlineResponse200DataItems](docs/AllOfinlineResponse200DataItems.md)
 - [Catalog.AllOfproductBaseCustomFieldsItems](docs/AllOfproductBaseCustomFieldsItems.md)
 - [Catalog.AllOfproductBaseImagesItems](docs/AllOfproductBaseImagesItems.md)
 - [Catalog.AllOfproductBasePrimaryImage](docs/AllOfproductBasePrimaryImage.md)
 - [Catalog.AllOfproductBaseVideosItems](docs/AllOfproductBaseVideosItems.md)
 - [Catalog.AllOfproductOptionBase1OptionValues](docs/AllOfproductOptionBase1OptionValues.md)
 - [Catalog.AllOfproductOptionBaseOptionValues](docs/AllOfproductOptionBaseOptionValues.md)
 - [Catalog.AllOfrespProductImageData](docs/AllOfrespProductImageData.md)
 - [Catalog.AllOfrespProductOptionValueData](docs/AllOfrespProductOptionValueData.md)
 - [Catalog.AllOfrespProductionOptionData](docs/AllOfrespProductionOptionData.md)
 - [Catalog.AllOfrespVariantBatchErrorBatchErrorsItems](docs/AllOfrespVariantBatchErrorBatchErrorsItems.md)
 - [Catalog.Body](docs/Body.md)
 - [Catalog.Body1](docs/Body1.md)
 - [Catalog.Body2](docs/Body2.md)
 - [Catalog.Body3](docs/Body3.md)
 - [Catalog.Brand](docs/Brand.md)
 - [Catalog.Brand1](docs/Brand1.md)
 - [Catalog.Brand2](docs/Brand2.md)
 - [Catalog.BrandCollectionResponse](docs/BrandCollectionResponse.md)
 - [Catalog.BrandFull](docs/BrandFull.md)
 - [Catalog.BrandFull1](docs/BrandFull1.md)
 - [Catalog.BrandResponse](docs/BrandResponse.md)
 - [Catalog.BrandResponse1](docs/BrandResponse1.md)
 - [Catalog.BulkPricingRule](docs/BulkPricingRule.md)
 - [Catalog.BulkPricingRuleFull](docs/BulkPricingRuleFull.md)
 - [Catalog.BulkPricingRuleFull1](docs/BulkPricingRuleFull1.md)
 - [Catalog.BulkPricingRuleFull2](docs/BulkPricingRuleFull2.md)
 - [Catalog.BulkPricingRuleFull3](docs/BulkPricingRuleFull3.md)
 - [Catalog.CatalogSummary](docs/CatalogSummary.md)
 - [Catalog.CatalogSummaryFull](docs/CatalogSummaryFull.md)
 - [Catalog.CatalogSummaryResponse](docs/CatalogSummaryResponse.md)
 - [Catalog.CategoriesTreeNodeFull](docs/CategoriesTreeNodeFull.md)
 - [Catalog.CategoriesTreeNodeFull1](docs/CategoriesTreeNodeFull1.md)
 - [Catalog.CategoriesTreeNodeFull2](docs/CategoriesTreeNodeFull2.md)
 - [Catalog.CategoriesTreeResp](docs/CategoriesTreeResp.md)
 - [Catalog.CategoriesTreeResp1](docs/CategoriesTreeResp1.md)
 - [Catalog.CategoriesTreeResp2](docs/CategoriesTreeResp2.md)
 - [Catalog.Category](docs/Category.md)
 - [Catalog.Category1](docs/Category1.md)
 - [Catalog.CategoryBase](docs/CategoryBase.md)
 - [Catalog.CategoryFull](docs/CategoryFull.md)
 - [Catalog.CategoryFull1](docs/CategoryFull1.md)
 - [Catalog.CategoryResponse](docs/CategoryResponse.md)
 - [Catalog.CategoryResponse1](docs/CategoryResponse1.md)
 - [Catalog.ComplexRule](docs/ComplexRule.md)
 - [Catalog.ComplexRule1](docs/ComplexRule1.md)
 - [Catalog.ComplexRuleBase](docs/ComplexRuleBase.md)
 - [Catalog.ComplexRuleBase1](docs/ComplexRuleBase1.md)
 - [Catalog.ComplexRuleCollectionResponse](docs/ComplexRuleCollectionResponse.md)
 - [Catalog.ComplexRuleCondition](docs/ComplexRuleCondition.md)
 - [Catalog.ComplexRuleConditionBase](docs/ComplexRuleConditionBase.md)
 - [Catalog.ConfigFull](docs/ConfigFull.md)
 - [Catalog.CustomField](docs/CustomField.md)
 - [Catalog.CustomField1](docs/CustomField1.md)
 - [Catalog.CustomField2](docs/CustomField2.md)
 - [Catalog.CustomUrlBrand](docs/CustomUrlBrand.md)
 - [Catalog.CustomUrlFull](docs/CustomUrlFull.md)
 - [Catalog.CustomUrlFull1](docs/CustomUrlFull1.md)
 - [Catalog.DetailedErrors](docs/DetailedErrors.md)
 - [Catalog.DetailedErrors1](docs/DetailedErrors1.md)
 - [Catalog.ErrorBase](docs/ErrorBase.md)
 - [Catalog.ErrorNoContent](docs/ErrorNoContent.md)
 - [Catalog.ErrorNotFound](docs/ErrorNotFound.md)
 - [Catalog.ErrorResponse](docs/ErrorResponse.md)
 - [Catalog.ErrorResponseFull](docs/ErrorResponseFull.md)
 - [Catalog.FormDataImageFileParam](docs/FormDataImageFileParam.md)
 - [Catalog.GiftCertificateFull](docs/GiftCertificateFull.md)
 - [Catalog.ImageResponse](docs/ImageResponse.md)
 - [Catalog.InlineResponse200](docs/InlineResponse200.md)
 - [Catalog.InlineResponse2001](docs/InlineResponse2001.md)
 - [Catalog.InlineResponse2002](docs/InlineResponse2002.md)
 - [Catalog.InlineResponse2003](docs/InlineResponse2003.md)
 - [Catalog.InlineResponse2004](docs/InlineResponse2004.md)
 - [Catalog.InlineResponse2005](docs/InlineResponse2005.md)
 - [Catalog.InlineResponse2006](docs/InlineResponse2006.md)
 - [Catalog.InlineResponse2007](docs/InlineResponse2007.md)
 - [Catalog.InlineResponse2008](docs/InlineResponse2008.md)
 - [Catalog.InlineResponse2008Data](docs/InlineResponse2008Data.md)
 - [Catalog.Meta](docs/Meta.md)
 - [Catalog.MetaCollectionFull](docs/MetaCollectionFull.md)
 - [Catalog.MetaCollectionFull1](docs/MetaCollectionFull1.md)
 - [Catalog.MetaEmptyFull](docs/MetaEmptyFull.md)
 - [Catalog.MetaFieldCollectionResponse](docs/MetaFieldCollectionResponse.md)
 - [Catalog.MetaFieldCollectionResponse1](docs/MetaFieldCollectionResponse1.md)
 - [Catalog.Metafield](docs/Metafield.md)
 - [Catalog.MetafieldBase](docs/MetafieldBase.md)
 - [Catalog.MetafieldBase1](docs/MetafieldBase1.md)
 - [Catalog.MetafieldFull](docs/MetafieldFull.md)
 - [Catalog.MetafieldPost](docs/MetafieldPost.md)
 - [Catalog.MetafieldPost1](docs/MetafieldPost1.md)
 - [Catalog.MetafieldPost2](docs/MetafieldPost2.md)
 - [Catalog.MetafieldPost3](docs/MetafieldPost3.md)
 - [Catalog.MetafieldPut](docs/MetafieldPut.md)
 - [Catalog.MetafieldPut1](docs/MetafieldPut1.md)
 - [Catalog.MetafieldPut2](docs/MetafieldPut2.md)
 - [Catalog.MetafieldPut3](docs/MetafieldPut3.md)
 - [Catalog.MetafieldPut4](docs/MetafieldPut4.md)
 - [Catalog.MetafieldResponse](docs/MetafieldResponse.md)
 - [Catalog.MetafieldResponse1](docs/MetafieldResponse1.md)
 - [Catalog.MetafieldResponse2](docs/MetafieldResponse2.md)
 - [Catalog.MetafieldResponse3](docs/MetafieldResponse3.md)
 - [Catalog.ModifierCollectionResponse](docs/ModifierCollectionResponse.md)
 - [Catalog.ModifierPost](docs/ModifierPost.md)
 - [Catalog.ModifierPut](docs/ModifierPut.md)
 - [Catalog.ModifierResponse](docs/ModifierResponse.md)
 - [Catalog.ModifierResponse1](docs/ModifierResponse1.md)
 - [Catalog.ModifierValueCollectionResponse](docs/ModifierValueCollectionResponse.md)
 - [Catalog.ModifierValuePost](docs/ModifierValuePost.md)
 - [Catalog.ModifierValuePut](docs/ModifierValuePut.md)
 - [Catalog.ModifierValueResponse](docs/ModifierValueResponse.md)
 - [Catalog.ModifierValueResponse1](docs/ModifierValueResponse1.md)
 - [Catalog.NotFound](docs/NotFound.md)
 - [Catalog.OptionCollectionResponse](docs/OptionCollectionResponse.md)
 - [Catalog.OptionConfig](docs/OptionConfig.md)
 - [Catalog.OptionPost](docs/OptionPost.md)
 - [Catalog.OptionPut](docs/OptionPut.md)
 - [Catalog.OptionResponse](docs/OptionResponse.md)
 - [Catalog.OptionResponse1](docs/OptionResponse1.md)
 - [Catalog.OptionResponse2](docs/OptionResponse2.md)
 - [Catalog.OptionValueCollectionResponse](docs/OptionValueCollectionResponse.md)
 - [Catalog.OptionValuePost](docs/OptionValuePost.md)
 - [Catalog.OptionValuePut](docs/OptionValuePut.md)
 - [Catalog.OptionValueResponse](docs/OptionValueResponse.md)
 - [Catalog.OptionValueVariantPost](docs/OptionValueVariantPost.md)
 - [Catalog.PaginationFull](docs/PaginationFull.md)
 - [Catalog.PaginationFull1](docs/PaginationFull1.md)
 - [Catalog.PaginationFull1Links](docs/PaginationFull1Links.md)
 - [Catalog.ProductBase](docs/ProductBase.md)
 - [Catalog.ProductCustomFieldBase](docs/ProductCustomFieldBase.md)
 - [Catalog.ProductCustomFieldPost](docs/ProductCustomFieldPost.md)
 - [Catalog.ProductCustomFieldPut](docs/ProductCustomFieldPut.md)
 - [Catalog.ProductFull](docs/ProductFull.md)
 - [Catalog.ProductImageBase](docs/ProductImageBase.md)
 - [Catalog.ProductImageCollectionResponse](docs/ProductImageCollectionResponse.md)
 - [Catalog.ProductImageFull](docs/ProductImageFull.md)
 - [Catalog.ProductImagePost](docs/ProductImagePost.md)
 - [Catalog.ProductImagePost1](docs/ProductImagePost1.md)
 - [Catalog.ProductImagePut](docs/ProductImagePut.md)
 - [Catalog.ProductImageResponse](docs/ProductImageResponse.md)
 - [Catalog.ProductImageResponse1](docs/ProductImageResponse1.md)
 - [Catalog.ProductModifierBase](docs/ProductModifierBase.md)
 - [Catalog.ProductModifierFull](docs/ProductModifierFull.md)
 - [Catalog.ProductModifierOptionValueBase](docs/ProductModifierOptionValueBase.md)
 - [Catalog.ProductModifierOptionValueFull](docs/ProductModifierOptionValueFull.md)
 - [Catalog.ProductModifierOptionValuePost](docs/ProductModifierOptionValuePost.md)
 - [Catalog.ProductModifierOptionValuePut](docs/ProductModifierOptionValuePut.md)
 - [Catalog.ProductModifierPost](docs/ProductModifierPost.md)
 - [Catalog.ProductModifierPut](docs/ProductModifierPut.md)
 - [Catalog.ProductOptionBase](docs/ProductOptionBase.md)
 - [Catalog.ProductOptionBase1](docs/ProductOptionBase1.md)
 - [Catalog.ProductOptionConfigFull](docs/ProductOptionConfigFull.md)
 - [Catalog.ProductOptionFull](docs/ProductOptionFull.md)
 - [Catalog.ProductOptionOptionValueBase](docs/ProductOptionOptionValueBase.md)
 - [Catalog.ProductOptionOptionValueFull](docs/ProductOptionOptionValueFull.md)
 - [Catalog.ProductOptionPost](docs/ProductOptionPost.md)
 - [Catalog.ProductOptionPut](docs/ProductOptionPut.md)
 - [Catalog.ProductOptionValuePost](docs/ProductOptionValuePost.md)
 - [Catalog.ProductOptionValuePostProduct](docs/ProductOptionValuePostProduct.md)
 - [Catalog.ProductOptionValuePut](docs/ProductOptionValuePut.md)
 - [Catalog.ProductPost](docs/ProductPost.md)
 - [Catalog.ProductPut](docs/ProductPut.md)
 - [Catalog.ProductPut1](docs/ProductPut1.md)
 - [Catalog.ProductPutCollection](docs/ProductPutCollection.md)
 - [Catalog.ProductResponse](docs/ProductResponse.md)
 - [Catalog.ProductReviewBase](docs/ProductReviewBase.md)
 - [Catalog.ProductReviewCollectionResponse](docs/ProductReviewCollectionResponse.md)
 - [Catalog.ProductReviewFull](docs/ProductReviewFull.md)
 - [Catalog.ProductReviewPost](docs/ProductReviewPost.md)
 - [Catalog.ProductReviewPut](docs/ProductReviewPut.md)
 - [Catalog.ProductReviewResponse](docs/ProductReviewResponse.md)
 - [Catalog.ProductVariantBase](docs/ProductVariantBase.md)
 - [Catalog.ProductVariantFull](docs/ProductVariantFull.md)
 - [Catalog.ProductVariantOptionValueBase](docs/ProductVariantOptionValueBase.md)
 - [Catalog.ProductVariantOptionValueBase1](docs/ProductVariantOptionValueBase1.md)
 - [Catalog.ProductVariantOptionValueFull](docs/ProductVariantOptionValueFull.md)
 - [Catalog.ProductVariantOptionValuePost](docs/ProductVariantOptionValuePost.md)
 - [Catalog.ProductVariantPost](docs/ProductVariantPost.md)
 - [Catalog.ProductVariantPostProduct](docs/ProductVariantPostProduct.md)
 - [Catalog.ProductVariantPut](docs/ProductVariantPut.md)
 - [Catalog.ProductVariantPut1](docs/ProductVariantPut1.md)
 - [Catalog.ProductVariantPutProduct](docs/ProductVariantPutProduct.md)
 - [Catalog.ProductVariantPutProduct1](docs/ProductVariantPutProduct1.md)
 - [Catalog.ProductVideoBase](docs/ProductVideoBase.md)
 - [Catalog.ProductVideoCollectionResponse](docs/ProductVideoCollectionResponse.md)
 - [Catalog.ProductVideoFull](docs/ProductVideoFull.md)
 - [Catalog.ProductVideoPost](docs/ProductVideoPost.md)
 - [Catalog.ProductVideoPut](docs/ProductVideoPut.md)
 - [Catalog.ProductVideoResponse](docs/ProductVideoResponse.md)
 - [Catalog.ProductVideoResponse1](docs/ProductVideoResponse1.md)
 - [Catalog.ResourceImage](docs/ResourceImage.md)
 - [Catalog.ResourceImage1](docs/ResourceImage1.md)
 - [Catalog.ResourceImage2](docs/ResourceImage2.md)
 - [Catalog.ResourceImageFull](docs/ResourceImageFull.md)
 - [Catalog.RespProductImage](docs/RespProductImage.md)
 - [Catalog.RespProductOptionValue](docs/RespProductOptionValue.md)
 - [Catalog.RespProductionOption](docs/RespProductionOption.md)
 - [Catalog.RespVariantBatchError](docs/RespVariantBatchError.md)
 - [Catalog.VariantBase](docs/VariantBase.md)
 - [Catalog.VariantCollectionPut](docs/VariantCollectionPut.md)
 - [Catalog.VariantCollectionResponse](docs/VariantCollectionResponse.md)
 - [Catalog.VariantCollectionResponse1](docs/VariantCollectionResponse1.md)
 - [Catalog.VariantPost](docs/VariantPost.md)
 - [Catalog.VariantPut](docs/VariantPut.md)
 - [Catalog.VariantResponse](docs/VariantResponse.md)
 - [Catalog.VariantsBatchErrorResponse](docs/VariantsBatchErrorResponse.md)

## Documentation for Authorization


### X-Auth-Client

- **Type**: API key
- **API key parameter name**: X-Auth-Client
- **Location**: HTTP header

### X-Auth-Token

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header

