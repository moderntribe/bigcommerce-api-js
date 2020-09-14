'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariantsBatchErrorResponse = exports.VariantResponse = exports.VariantPut = exports.VariantPost = exports.VariantCollectionResponse1 = exports.VariantCollectionResponse = exports.VariantCollectionPut = exports.VariantBase = exports.RespVariantBatchError = exports.RespProductionOption = exports.RespProductOptionValue = exports.RespProductImage = exports.ResourceImageFull = exports.ResourceImage2 = exports.ResourceImage1 = exports.ResourceImage = exports.ProductVideoResponse1 = exports.ProductVideoResponse = exports.ProductVideoPut = exports.ProductVideoPost = exports.ProductVideoFull = exports.ProductVideoCollectionResponse = exports.ProductVideoBase = exports.ProductVariantPutProduct1 = exports.ProductVariantPutProduct = exports.ProductVariantPostProduct = exports.ProductVariantPost1 = exports.ProductVariantPost = exports.ProductVariantOptionValuePost = exports.ProductVariantOptionValueFull = exports.ProductVariantOptionValueBase1 = exports.ProductVariantOptionValueBase = exports.ProductVariantFull = exports.ProductVariantBase = exports.ProductReviewResponse = exports.ProductReviewPut = exports.ProductReviewPost = exports.ProductReviewFull = exports.ProductReviewCollectionResponse = exports.ProductReviewBase = exports.ProductResponse = exports.ProductPutCollection = exports.ProductPut1 = exports.ProductPut = exports.ProductPost = exports.ProductOptionValuePut = exports.ProductOptionValuePostProduct = exports.ProductOptionValuePost = exports.ProductOptionPut = exports.ProductOptionPost = exports.ProductOptionOptionValueFull = exports.ProductOptionOptionValueBase = exports.ProductOptionFull = exports.ProductOptionConfigFull = exports.ProductOptionBase1 = exports.ProductOptionBase = exports.ProductModifierPut = exports.ProductModifierPost = exports.ProductModifierOptionValuePut = exports.ProductModifierOptionValuePost = undefined;
exports.ProductModifierOptionValueFull = exports.ProductModifierOptionValueBase = exports.ProductModifierFull = exports.ProductModifierBase = exports.ProductImageResponse1 = exports.ProductImageResponse = exports.ProductImagePut = exports.ProductImagePost1 = exports.ProductImagePost = exports.ProductImageFull = exports.ProductImageCollectionResponse = exports.ProductImageBase = exports.ProductFull = exports.ProductCustomFieldPut = exports.ProductCustomFieldPost = exports.ProductCustomFieldBase = exports.ProductBase = exports.PaginationFull1Links = exports.PaginationFull1 = exports.PaginationFull = exports.OptionValueVariantPost = exports.OptionValueResponse = exports.OptionValuePut = exports.OptionValuePost = exports.OptionValueCollectionResponse = exports.OptionResponse2 = exports.OptionResponse1 = exports.OptionResponse = exports.OptionPut = exports.OptionPost = exports.OptionConfig = exports.OptionCollectionResponse = exports.NotFound = exports.ModifierValueResponse1 = exports.ModifierValueResponse = exports.ModifierValuePut = exports.ModifierValuePost = exports.ModifierValueCollectionResponse = exports.ModifierResponse1 = exports.ModifierResponse = exports.ModifierPut = exports.ModifierPost = exports.ModifierCollectionResponse = exports.MetafieldResponse3 = exports.MetafieldResponse2 = exports.MetafieldResponse1 = exports.MetafieldResponse = exports.MetafieldPut4 = exports.MetafieldPut3 = exports.MetafieldPut2 = exports.MetafieldPut1 = exports.MetafieldPut = exports.MetafieldPost3 = exports.MetafieldPost2 = exports.MetafieldPost1 = exports.MetafieldPost = exports.MetafieldFull = exports.MetafieldBase1 = exports.MetafieldBase = exports.Metafield = exports.MetaFieldCollectionResponse1 = exports.MetaFieldCollectionResponse = exports.MetaEmptyFull = exports.MetaCollectionFull1 = exports.MetaCollectionFull = exports.Meta = exports.InlineResponse2008Data = exports.InlineResponse2008 = exports.InlineResponse2007 = exports.InlineResponse2006 = exports.InlineResponse2005 = exports.InlineResponse2004 = exports.InlineResponse2003 = exports.InlineResponse2002 = exports.InlineResponse2001 = exports.InlineResponse200 = exports.ImageResponse = exports.GiftCertificateFull = exports.FormDataImageFileParam = exports.ErrorResponseFull = exports.ErrorResponse = exports.ErrorNotFound = exports.ErrorNoContent = exports.ErrorBase = exports.DetailedErrors1 = exports.DetailedErrors = exports.CustomUrlFull1 = exports.CustomUrlFull = exports.CustomUrlBrand = exports.CustomField2 = exports.CustomField1 = exports.CustomField = exports.ConfigFull = exports.ComplexRuleConditionBase = exports.ComplexRuleCondition = exports.ComplexRuleCollectionResponse = exports.ComplexRuleBase1 = exports.ComplexRuleBase = exports.ComplexRule1 = exports.ComplexRule = undefined;
exports.CategoryResponse1 = exports.CategoryResponse = exports.CategoryFull1 = exports.CategoryFull = exports.CategoryBase = exports.Category1 = exports.Category = exports.CategoriesTreeResp2 = exports.CategoriesTreeResp1 = exports.CategoriesTreeResp = exports.CategoriesTreeNodeFull2 = exports.CategoriesTreeNodeFull1 = exports.CategoriesTreeNodeFull = exports.CatalogSummaryResponse = exports.CatalogSummaryFull = exports.CatalogSummary = exports.BulkPricingRuleFull3 = exports.BulkPricingRuleFull2 = exports.BulkPricingRuleFull1 = exports.BulkPricingRuleFull = exports.BulkPricingRule = exports.BrandResponse1 = exports.BrandResponse = exports.BrandFull1 = exports.BrandFull = exports.BrandCollectionResponse = exports.Brand2 = exports.Brand1 = exports.Brand = exports.Body3 = exports.Body2 = exports.Body1 = exports.Body = exports.AllOfrespVariantBatchErrorBatchErrorsItems = exports.AllOfrespProductionOptionData = exports.AllOfrespProductOptionValueData = exports.AllOfrespProductImageData = exports.AllOfproductOptionBaseOptionValues = exports.AllOfproductOptionBase1OptionValues = exports.AllOfproductBaseVideosItems = exports.AllOfproductBasePrimaryImage = exports.AllOfproductBaseImagesItems = exports.AllOfproductBaseCustomFieldsItems = exports.AllOfinlineResponse200DataItems = exports.AllOfVariantsBatchErrorResponseBatchErrorsItems = exports.AllOfVariantResponseData = exports.AllOfVariantCollectionResponseDataItems = exports.AllOfVariantCollectionResponse1DataItems = exports.AllOfProductVideoResponseData = exports.AllOfProductVideoResponse1Data = exports.AllOfProductVideoCollectionResponseDataItems = exports.AllOfProductReviewResponseData = exports.AllOfProductReviewCollectionResponseDataItems = exports.AllOfProductResponseData = exports.AllOfProductImageResponseData = exports.AllOfProductImageResponse1Data = exports.AllOfProductImageCollectionResponseDataItems = exports.AllOfOptionValueResponseData = exports.AllOfOptionValueCollectionResponseDataItems = exports.AllOfOptionResponseData = exports.AllOfOptionResponse2Data = exports.AllOfOptionResponse1Data = exports.AllOfOptionCollectionResponseDataItems = exports.AllOfModifierValueResponseData = exports.AllOfModifierValueResponse1Data = exports.AllOfModifierValueCollectionResponseDataItems = exports.AllOfModifierResponseData = exports.AllOfModifierResponse1Data = exports.AllOfModifierCollectionResponseDataItems = exports.AllOfMetafieldResponse1Data = exports.AllOfMetaFieldCollectionResponse1DataItems = exports.AdjustersFull1PurchasingDisabled = exports.AdjustersFull1 = exports.AdjustersFull = exports.AdjusterFull = exports.Adjuster = exports.VariantsApi = exports.SummaryApi = exports.ProductsApi = exports.ProductVideosApi = exports.ProductVariantsMetafieldsApi = exports.ProductVariantsApi = exports.ProductReviewsApi = exports.ProductOptionsApi = exports.ProductOptionValuesApi = exports.ProductModifiersApi = exports.ProductModifierValuesApi = exports.ProductModifierImagesApi = exports.ProductMetafieldsApi = exports.ProductImagesApi = exports.ProductCustomFieldsApi = exports.ProductComplexRulesApi = exports.ProductBulkPricingRulesApi = exports.CategoryMetafieldsApi = exports.CategoryImagesApi = exports.CategoryApi = exports.CatalogApi = exports.BrandsApi = exports.BrandMetafieldsApi = exports.BrandImagesApi = undefined;

var _BrandImagesApi = require('./api/BrandImagesApi');

var _BrandImagesApi2 = _interopRequireDefault(_BrandImagesApi);

var _BrandMetafieldsApi = require('./api/BrandMetafieldsApi');

var _BrandMetafieldsApi2 = _interopRequireDefault(_BrandMetafieldsApi);

var _BrandsApi = require('./api/BrandsApi');

var _BrandsApi2 = _interopRequireDefault(_BrandsApi);

var _CatalogApi = require('./api/CatalogApi');

var _CatalogApi2 = _interopRequireDefault(_CatalogApi);

var _CategoryApi = require('./api/CategoryApi');

var _CategoryApi2 = _interopRequireDefault(_CategoryApi);

var _CategoryImagesApi = require('./api/CategoryImagesApi');

var _CategoryImagesApi2 = _interopRequireDefault(_CategoryImagesApi);

var _CategoryMetafieldsApi = require('./api/CategoryMetafieldsApi');

var _CategoryMetafieldsApi2 = _interopRequireDefault(_CategoryMetafieldsApi);

var _ProductBulkPricingRulesApi = require('./api/ProductBulkPricingRulesApi');

var _ProductBulkPricingRulesApi2 = _interopRequireDefault(_ProductBulkPricingRulesApi);

var _ProductComplexRulesApi = require('./api/ProductComplexRulesApi');

var _ProductComplexRulesApi2 = _interopRequireDefault(_ProductComplexRulesApi);

var _ProductCustomFieldsApi = require('./api/ProductCustomFieldsApi');

var _ProductCustomFieldsApi2 = _interopRequireDefault(_ProductCustomFieldsApi);

var _ProductImagesApi = require('./api/ProductImagesApi');

var _ProductImagesApi2 = _interopRequireDefault(_ProductImagesApi);

var _ProductMetafieldsApi = require('./api/ProductMetafieldsApi');

var _ProductMetafieldsApi2 = _interopRequireDefault(_ProductMetafieldsApi);

var _ProductModifierImagesApi = require('./api/ProductModifierImagesApi');

var _ProductModifierImagesApi2 = _interopRequireDefault(_ProductModifierImagesApi);

var _ProductModifierValuesApi = require('./api/ProductModifierValuesApi');

var _ProductModifierValuesApi2 = _interopRequireDefault(_ProductModifierValuesApi);

var _ProductModifiersApi = require('./api/ProductModifiersApi');

var _ProductModifiersApi2 = _interopRequireDefault(_ProductModifiersApi);

var _ProductOptionValuesApi = require('./api/ProductOptionValuesApi');

var _ProductOptionValuesApi2 = _interopRequireDefault(_ProductOptionValuesApi);

var _ProductOptionsApi = require('./api/ProductOptionsApi');

var _ProductOptionsApi2 = _interopRequireDefault(_ProductOptionsApi);

var _ProductReviewsApi = require('./api/ProductReviewsApi');

var _ProductReviewsApi2 = _interopRequireDefault(_ProductReviewsApi);

var _ProductVariantsApi = require('./api/ProductVariantsApi');

var _ProductVariantsApi2 = _interopRequireDefault(_ProductVariantsApi);

var _ProductVariantsMetafieldsApi = require('./api/ProductVariantsMetafieldsApi');

var _ProductVariantsMetafieldsApi2 = _interopRequireDefault(_ProductVariantsMetafieldsApi);

var _ProductVideosApi = require('./api/ProductVideosApi');

var _ProductVideosApi2 = _interopRequireDefault(_ProductVideosApi);

var _ProductsApi = require('./api/ProductsApi');

var _ProductsApi2 = _interopRequireDefault(_ProductsApi);

var _SummaryApi = require('./api/SummaryApi');

var _SummaryApi2 = _interopRequireDefault(_SummaryApi);

var _VariantsApi = require('./api/VariantsApi');

var _VariantsApi2 = _interopRequireDefault(_VariantsApi);

var _Adjuster = require('./model/Adjuster');

var _Adjuster2 = _interopRequireDefault(_Adjuster);

var _AdjusterFull = require('./model/AdjusterFull');

var _AdjusterFull2 = _interopRequireDefault(_AdjusterFull);

var _AdjustersFull = require('./model/AdjustersFull');

var _AdjustersFull2 = _interopRequireDefault(_AdjustersFull);

var _AdjustersFull3 = require('./model/AdjustersFull1');

var _AdjustersFull4 = _interopRequireDefault(_AdjustersFull3);

var _AdjustersFull1PurchasingDisabled = require('./model/AdjustersFull1PurchasingDisabled');

var _AdjustersFull1PurchasingDisabled2 = _interopRequireDefault(_AdjustersFull1PurchasingDisabled);

var _AllOfMetaFieldCollectionResponse1DataItems = require('./model/AllOfMetaFieldCollectionResponse1DataItems');

var _AllOfMetaFieldCollectionResponse1DataItems2 = _interopRequireDefault(_AllOfMetaFieldCollectionResponse1DataItems);

var _AllOfMetafieldResponse1Data = require('./model/AllOfMetafieldResponse1Data');

var _AllOfMetafieldResponse1Data2 = _interopRequireDefault(_AllOfMetafieldResponse1Data);

var _AllOfModifierCollectionResponseDataItems = require('./model/AllOfModifierCollectionResponseDataItems');

var _AllOfModifierCollectionResponseDataItems2 = _interopRequireDefault(_AllOfModifierCollectionResponseDataItems);

var _AllOfModifierResponse1Data = require('./model/AllOfModifierResponse1Data');

var _AllOfModifierResponse1Data2 = _interopRequireDefault(_AllOfModifierResponse1Data);

var _AllOfModifierResponseData = require('./model/AllOfModifierResponseData');

var _AllOfModifierResponseData2 = _interopRequireDefault(_AllOfModifierResponseData);

var _AllOfModifierValueCollectionResponseDataItems = require('./model/AllOfModifierValueCollectionResponseDataItems');

var _AllOfModifierValueCollectionResponseDataItems2 = _interopRequireDefault(_AllOfModifierValueCollectionResponseDataItems);

var _AllOfModifierValueResponse1Data = require('./model/AllOfModifierValueResponse1Data');

var _AllOfModifierValueResponse1Data2 = _interopRequireDefault(_AllOfModifierValueResponse1Data);

var _AllOfModifierValueResponseData = require('./model/AllOfModifierValueResponseData');

var _AllOfModifierValueResponseData2 = _interopRequireDefault(_AllOfModifierValueResponseData);

var _AllOfOptionCollectionResponseDataItems = require('./model/AllOfOptionCollectionResponseDataItems');

var _AllOfOptionCollectionResponseDataItems2 = _interopRequireDefault(_AllOfOptionCollectionResponseDataItems);

var _AllOfOptionResponse1Data = require('./model/AllOfOptionResponse1Data');

var _AllOfOptionResponse1Data2 = _interopRequireDefault(_AllOfOptionResponse1Data);

var _AllOfOptionResponse2Data = require('./model/AllOfOptionResponse2Data');

var _AllOfOptionResponse2Data2 = _interopRequireDefault(_AllOfOptionResponse2Data);

var _AllOfOptionResponseData = require('./model/AllOfOptionResponseData');

var _AllOfOptionResponseData2 = _interopRequireDefault(_AllOfOptionResponseData);

var _AllOfOptionValueCollectionResponseDataItems = require('./model/AllOfOptionValueCollectionResponseDataItems');

var _AllOfOptionValueCollectionResponseDataItems2 = _interopRequireDefault(_AllOfOptionValueCollectionResponseDataItems);

var _AllOfOptionValueResponseData = require('./model/AllOfOptionValueResponseData');

var _AllOfOptionValueResponseData2 = _interopRequireDefault(_AllOfOptionValueResponseData);

var _AllOfProductImageCollectionResponseDataItems = require('./model/AllOfProductImageCollectionResponseDataItems');

var _AllOfProductImageCollectionResponseDataItems2 = _interopRequireDefault(_AllOfProductImageCollectionResponseDataItems);

var _AllOfProductImageResponse1Data = require('./model/AllOfProductImageResponse1Data');

var _AllOfProductImageResponse1Data2 = _interopRequireDefault(_AllOfProductImageResponse1Data);

var _AllOfProductImageResponseData = require('./model/AllOfProductImageResponseData');

var _AllOfProductImageResponseData2 = _interopRequireDefault(_AllOfProductImageResponseData);

var _AllOfProductResponseData = require('./model/AllOfProductResponseData');

var _AllOfProductResponseData2 = _interopRequireDefault(_AllOfProductResponseData);

var _AllOfProductReviewCollectionResponseDataItems = require('./model/AllOfProductReviewCollectionResponseDataItems');

var _AllOfProductReviewCollectionResponseDataItems2 = _interopRequireDefault(_AllOfProductReviewCollectionResponseDataItems);

var _AllOfProductReviewResponseData = require('./model/AllOfProductReviewResponseData');

var _AllOfProductReviewResponseData2 = _interopRequireDefault(_AllOfProductReviewResponseData);

var _AllOfProductVideoCollectionResponseDataItems = require('./model/AllOfProductVideoCollectionResponseDataItems');

var _AllOfProductVideoCollectionResponseDataItems2 = _interopRequireDefault(_AllOfProductVideoCollectionResponseDataItems);

var _AllOfProductVideoResponse1Data = require('./model/AllOfProductVideoResponse1Data');

var _AllOfProductVideoResponse1Data2 = _interopRequireDefault(_AllOfProductVideoResponse1Data);

var _AllOfProductVideoResponseData = require('./model/AllOfProductVideoResponseData');

var _AllOfProductVideoResponseData2 = _interopRequireDefault(_AllOfProductVideoResponseData);

var _AllOfVariantCollectionResponse1DataItems = require('./model/AllOfVariantCollectionResponse1DataItems');

var _AllOfVariantCollectionResponse1DataItems2 = _interopRequireDefault(_AllOfVariantCollectionResponse1DataItems);

var _AllOfVariantCollectionResponseDataItems = require('./model/AllOfVariantCollectionResponseDataItems');

var _AllOfVariantCollectionResponseDataItems2 = _interopRequireDefault(_AllOfVariantCollectionResponseDataItems);

var _AllOfVariantResponseData = require('./model/AllOfVariantResponseData');

var _AllOfVariantResponseData2 = _interopRequireDefault(_AllOfVariantResponseData);

var _AllOfVariantsBatchErrorResponseBatchErrorsItems = require('./model/AllOfVariantsBatchErrorResponseBatchErrorsItems');

var _AllOfVariantsBatchErrorResponseBatchErrorsItems2 = _interopRequireDefault(_AllOfVariantsBatchErrorResponseBatchErrorsItems);

var _AllOfinlineResponse200DataItems = require('./model/AllOfinlineResponse200DataItems');

var _AllOfinlineResponse200DataItems2 = _interopRequireDefault(_AllOfinlineResponse200DataItems);

var _AllOfproductBaseCustomFieldsItems = require('./model/AllOfproductBaseCustomFieldsItems');

var _AllOfproductBaseCustomFieldsItems2 = _interopRequireDefault(_AllOfproductBaseCustomFieldsItems);

var _AllOfproductBaseImagesItems = require('./model/AllOfproductBaseImagesItems');

var _AllOfproductBaseImagesItems2 = _interopRequireDefault(_AllOfproductBaseImagesItems);

var _AllOfproductBasePrimaryImage = require('./model/AllOfproductBasePrimaryImage');

var _AllOfproductBasePrimaryImage2 = _interopRequireDefault(_AllOfproductBasePrimaryImage);

var _AllOfproductBaseVideosItems = require('./model/AllOfproductBaseVideosItems');

var _AllOfproductBaseVideosItems2 = _interopRequireDefault(_AllOfproductBaseVideosItems);

var _AllOfproductOptionBase1OptionValues = require('./model/AllOfproductOptionBase1OptionValues');

var _AllOfproductOptionBase1OptionValues2 = _interopRequireDefault(_AllOfproductOptionBase1OptionValues);

var _AllOfproductOptionBaseOptionValues = require('./model/AllOfproductOptionBaseOptionValues');

var _AllOfproductOptionBaseOptionValues2 = _interopRequireDefault(_AllOfproductOptionBaseOptionValues);

var _AllOfrespProductImageData = require('./model/AllOfrespProductImageData');

var _AllOfrespProductImageData2 = _interopRequireDefault(_AllOfrespProductImageData);

var _AllOfrespProductOptionValueData = require('./model/AllOfrespProductOptionValueData');

var _AllOfrespProductOptionValueData2 = _interopRequireDefault(_AllOfrespProductOptionValueData);

var _AllOfrespProductionOptionData = require('./model/AllOfrespProductionOptionData');

var _AllOfrespProductionOptionData2 = _interopRequireDefault(_AllOfrespProductionOptionData);

var _AllOfrespVariantBatchErrorBatchErrorsItems = require('./model/AllOfrespVariantBatchErrorBatchErrorsItems');

var _AllOfrespVariantBatchErrorBatchErrorsItems2 = _interopRequireDefault(_AllOfrespVariantBatchErrorBatchErrorsItems);

var _Body = require('./model/Body');

var _Body2 = _interopRequireDefault(_Body);

var _Body3 = require('./model/Body1');

var _Body4 = _interopRequireDefault(_Body3);

var _Body5 = require('./model/Body2');

var _Body6 = _interopRequireDefault(_Body5);

var _Body7 = require('./model/Body3');

var _Body8 = _interopRequireDefault(_Body7);

var _Brand = require('./model/Brand');

var _Brand2 = _interopRequireDefault(_Brand);

var _Brand3 = require('./model/Brand1');

var _Brand4 = _interopRequireDefault(_Brand3);

var _Brand5 = require('./model/Brand2');

var _Brand6 = _interopRequireDefault(_Brand5);

var _BrandCollectionResponse = require('./model/BrandCollectionResponse');

var _BrandCollectionResponse2 = _interopRequireDefault(_BrandCollectionResponse);

var _BrandFull = require('./model/BrandFull');

var _BrandFull2 = _interopRequireDefault(_BrandFull);

var _BrandFull3 = require('./model/BrandFull1');

var _BrandFull4 = _interopRequireDefault(_BrandFull3);

var _BrandResponse = require('./model/BrandResponse');

var _BrandResponse2 = _interopRequireDefault(_BrandResponse);

var _BrandResponse3 = require('./model/BrandResponse1');

var _BrandResponse4 = _interopRequireDefault(_BrandResponse3);

var _BulkPricingRule = require('./model/BulkPricingRule');

var _BulkPricingRule2 = _interopRequireDefault(_BulkPricingRule);

var _BulkPricingRuleFull = require('./model/BulkPricingRuleFull');

var _BulkPricingRuleFull2 = _interopRequireDefault(_BulkPricingRuleFull);

var _BulkPricingRuleFull3 = require('./model/BulkPricingRuleFull1');

var _BulkPricingRuleFull4 = _interopRequireDefault(_BulkPricingRuleFull3);

var _BulkPricingRuleFull5 = require('./model/BulkPricingRuleFull2');

var _BulkPricingRuleFull6 = _interopRequireDefault(_BulkPricingRuleFull5);

var _BulkPricingRuleFull7 = require('./model/BulkPricingRuleFull3');

var _BulkPricingRuleFull8 = _interopRequireDefault(_BulkPricingRuleFull7);

var _CatalogSummary = require('./model/CatalogSummary');

var _CatalogSummary2 = _interopRequireDefault(_CatalogSummary);

var _CatalogSummaryFull = require('./model/CatalogSummaryFull');

var _CatalogSummaryFull2 = _interopRequireDefault(_CatalogSummaryFull);

var _CatalogSummaryResponse = require('./model/CatalogSummaryResponse');

var _CatalogSummaryResponse2 = _interopRequireDefault(_CatalogSummaryResponse);

var _CategoriesTreeNodeFull = require('./model/CategoriesTreeNodeFull');

var _CategoriesTreeNodeFull2 = _interopRequireDefault(_CategoriesTreeNodeFull);

var _CategoriesTreeNodeFull3 = require('./model/CategoriesTreeNodeFull1');

var _CategoriesTreeNodeFull4 = _interopRequireDefault(_CategoriesTreeNodeFull3);

var _CategoriesTreeNodeFull5 = require('./model/CategoriesTreeNodeFull2');

var _CategoriesTreeNodeFull6 = _interopRequireDefault(_CategoriesTreeNodeFull5);

var _CategoriesTreeResp = require('./model/CategoriesTreeResp');

var _CategoriesTreeResp2 = _interopRequireDefault(_CategoriesTreeResp);

var _CategoriesTreeResp3 = require('./model/CategoriesTreeResp1');

var _CategoriesTreeResp4 = _interopRequireDefault(_CategoriesTreeResp3);

var _CategoriesTreeResp5 = require('./model/CategoriesTreeResp2');

var _CategoriesTreeResp6 = _interopRequireDefault(_CategoriesTreeResp5);

var _Category = require('./model/Category');

var _Category2 = _interopRequireDefault(_Category);

var _Category3 = require('./model/Category1');

var _Category4 = _interopRequireDefault(_Category3);

var _CategoryBase = require('./model/CategoryBase');

var _CategoryBase2 = _interopRequireDefault(_CategoryBase);

var _CategoryFull = require('./model/CategoryFull');

var _CategoryFull2 = _interopRequireDefault(_CategoryFull);

var _CategoryFull3 = require('./model/CategoryFull1');

var _CategoryFull4 = _interopRequireDefault(_CategoryFull3);

var _CategoryResponse = require('./model/CategoryResponse');

var _CategoryResponse2 = _interopRequireDefault(_CategoryResponse);

var _CategoryResponse3 = require('./model/CategoryResponse1');

var _CategoryResponse4 = _interopRequireDefault(_CategoryResponse3);

var _ComplexRule = require('./model/ComplexRule');

var _ComplexRule2 = _interopRequireDefault(_ComplexRule);

var _ComplexRule3 = require('./model/ComplexRule1');

var _ComplexRule4 = _interopRequireDefault(_ComplexRule3);

var _ComplexRuleBase = require('./model/ComplexRuleBase');

var _ComplexRuleBase2 = _interopRequireDefault(_ComplexRuleBase);

var _ComplexRuleBase3 = require('./model/ComplexRuleBase1');

var _ComplexRuleBase4 = _interopRequireDefault(_ComplexRuleBase3);

var _ComplexRuleCollectionResponse = require('./model/ComplexRuleCollectionResponse');

var _ComplexRuleCollectionResponse2 = _interopRequireDefault(_ComplexRuleCollectionResponse);

var _ComplexRuleCondition = require('./model/ComplexRuleCondition');

var _ComplexRuleCondition2 = _interopRequireDefault(_ComplexRuleCondition);

var _ComplexRuleConditionBase = require('./model/ComplexRuleConditionBase');

var _ComplexRuleConditionBase2 = _interopRequireDefault(_ComplexRuleConditionBase);

var _ConfigFull = require('./model/ConfigFull');

var _ConfigFull2 = _interopRequireDefault(_ConfigFull);

var _CustomField = require('./model/CustomField');

var _CustomField2 = _interopRequireDefault(_CustomField);

var _CustomField3 = require('./model/CustomField1');

var _CustomField4 = _interopRequireDefault(_CustomField3);

var _CustomField5 = require('./model/CustomField2');

var _CustomField6 = _interopRequireDefault(_CustomField5);

var _CustomUrlBrand = require('./model/CustomUrlBrand');

var _CustomUrlBrand2 = _interopRequireDefault(_CustomUrlBrand);

var _CustomUrlFull = require('./model/CustomUrlFull');

var _CustomUrlFull2 = _interopRequireDefault(_CustomUrlFull);

var _CustomUrlFull3 = require('./model/CustomUrlFull1');

var _CustomUrlFull4 = _interopRequireDefault(_CustomUrlFull3);

var _DetailedErrors = require('./model/DetailedErrors');

var _DetailedErrors2 = _interopRequireDefault(_DetailedErrors);

var _DetailedErrors3 = require('./model/DetailedErrors1');

var _DetailedErrors4 = _interopRequireDefault(_DetailedErrors3);

var _ErrorBase = require('./model/ErrorBase');

var _ErrorBase2 = _interopRequireDefault(_ErrorBase);

var _ErrorNoContent = require('./model/ErrorNoContent');

var _ErrorNoContent2 = _interopRequireDefault(_ErrorNoContent);

var _ErrorNotFound = require('./model/ErrorNotFound');

var _ErrorNotFound2 = _interopRequireDefault(_ErrorNotFound);

var _ErrorResponse = require('./model/ErrorResponse');

var _ErrorResponse2 = _interopRequireDefault(_ErrorResponse);

var _ErrorResponseFull = require('./model/ErrorResponseFull');

var _ErrorResponseFull2 = _interopRequireDefault(_ErrorResponseFull);

var _FormDataImageFileParam = require('./model/FormDataImageFileParam');

var _FormDataImageFileParam2 = _interopRequireDefault(_FormDataImageFileParam);

var _GiftCertificateFull = require('./model/GiftCertificateFull');

var _GiftCertificateFull2 = _interopRequireDefault(_GiftCertificateFull);

var _ImageResponse = require('./model/ImageResponse');

var _ImageResponse2 = _interopRequireDefault(_ImageResponse);

var _InlineResponse = require('./model/InlineResponse200');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('./model/InlineResponse2001');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('./model/InlineResponse2002');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

var _InlineResponse7 = require('./model/InlineResponse2003');

var _InlineResponse8 = _interopRequireDefault(_InlineResponse7);

var _InlineResponse9 = require('./model/InlineResponse2004');

var _InlineResponse10 = _interopRequireDefault(_InlineResponse9);

var _InlineResponse11 = require('./model/InlineResponse2005');

var _InlineResponse12 = _interopRequireDefault(_InlineResponse11);

var _InlineResponse13 = require('./model/InlineResponse2006');

var _InlineResponse14 = _interopRequireDefault(_InlineResponse13);

var _InlineResponse15 = require('./model/InlineResponse2007');

var _InlineResponse16 = _interopRequireDefault(_InlineResponse15);

var _InlineResponse17 = require('./model/InlineResponse2008');

var _InlineResponse18 = _interopRequireDefault(_InlineResponse17);

var _InlineResponse2008Data = require('./model/InlineResponse2008Data');

var _InlineResponse2008Data2 = _interopRequireDefault(_InlineResponse2008Data);

var _Meta = require('./model/Meta');

var _Meta2 = _interopRequireDefault(_Meta);

var _MetaCollectionFull = require('./model/MetaCollectionFull');

var _MetaCollectionFull2 = _interopRequireDefault(_MetaCollectionFull);

var _MetaCollectionFull3 = require('./model/MetaCollectionFull1');

var _MetaCollectionFull4 = _interopRequireDefault(_MetaCollectionFull3);

var _MetaEmptyFull = require('./model/MetaEmptyFull');

var _MetaEmptyFull2 = _interopRequireDefault(_MetaEmptyFull);

var _MetaFieldCollectionResponse = require('./model/MetaFieldCollectionResponse');

var _MetaFieldCollectionResponse2 = _interopRequireDefault(_MetaFieldCollectionResponse);

var _MetaFieldCollectionResponse3 = require('./model/MetaFieldCollectionResponse1');

var _MetaFieldCollectionResponse4 = _interopRequireDefault(_MetaFieldCollectionResponse3);

var _Metafield = require('./model/Metafield');

var _Metafield2 = _interopRequireDefault(_Metafield);

var _MetafieldBase = require('./model/MetafieldBase');

var _MetafieldBase2 = _interopRequireDefault(_MetafieldBase);

var _MetafieldBase3 = require('./model/MetafieldBase1');

var _MetafieldBase4 = _interopRequireDefault(_MetafieldBase3);

var _MetafieldFull = require('./model/MetafieldFull');

var _MetafieldFull2 = _interopRequireDefault(_MetafieldFull);

var _MetafieldPost = require('./model/MetafieldPost');

var _MetafieldPost2 = _interopRequireDefault(_MetafieldPost);

var _MetafieldPost3 = require('./model/MetafieldPost1');

var _MetafieldPost4 = _interopRequireDefault(_MetafieldPost3);

var _MetafieldPost5 = require('./model/MetafieldPost2');

var _MetafieldPost6 = _interopRequireDefault(_MetafieldPost5);

var _MetafieldPost7 = require('./model/MetafieldPost3');

var _MetafieldPost8 = _interopRequireDefault(_MetafieldPost7);

var _MetafieldPut = require('./model/MetafieldPut');

var _MetafieldPut2 = _interopRequireDefault(_MetafieldPut);

var _MetafieldPut3 = require('./model/MetafieldPut1');

var _MetafieldPut4 = _interopRequireDefault(_MetafieldPut3);

var _MetafieldPut5 = require('./model/MetafieldPut2');

var _MetafieldPut6 = _interopRequireDefault(_MetafieldPut5);

var _MetafieldPut7 = require('./model/MetafieldPut3');

var _MetafieldPut8 = _interopRequireDefault(_MetafieldPut7);

var _MetafieldPut9 = require('./model/MetafieldPut4');

var _MetafieldPut10 = _interopRequireDefault(_MetafieldPut9);

var _MetafieldResponse = require('./model/MetafieldResponse');

var _MetafieldResponse2 = _interopRequireDefault(_MetafieldResponse);

var _MetafieldResponse3 = require('./model/MetafieldResponse1');

var _MetafieldResponse4 = _interopRequireDefault(_MetafieldResponse3);

var _MetafieldResponse5 = require('./model/MetafieldResponse2');

var _MetafieldResponse6 = _interopRequireDefault(_MetafieldResponse5);

var _MetafieldResponse7 = require('./model/MetafieldResponse3');

var _MetafieldResponse8 = _interopRequireDefault(_MetafieldResponse7);

var _ModifierCollectionResponse = require('./model/ModifierCollectionResponse');

var _ModifierCollectionResponse2 = _interopRequireDefault(_ModifierCollectionResponse);

var _ModifierPost = require('./model/ModifierPost');

var _ModifierPost2 = _interopRequireDefault(_ModifierPost);

var _ModifierPut = require('./model/ModifierPut');

var _ModifierPut2 = _interopRequireDefault(_ModifierPut);

var _ModifierResponse = require('./model/ModifierResponse');

var _ModifierResponse2 = _interopRequireDefault(_ModifierResponse);

var _ModifierResponse3 = require('./model/ModifierResponse1');

var _ModifierResponse4 = _interopRequireDefault(_ModifierResponse3);

var _ModifierValueCollectionResponse = require('./model/ModifierValueCollectionResponse');

var _ModifierValueCollectionResponse2 = _interopRequireDefault(_ModifierValueCollectionResponse);

var _ModifierValuePost = require('./model/ModifierValuePost');

var _ModifierValuePost2 = _interopRequireDefault(_ModifierValuePost);

var _ModifierValuePut = require('./model/ModifierValuePut');

var _ModifierValuePut2 = _interopRequireDefault(_ModifierValuePut);

var _ModifierValueResponse = require('./model/ModifierValueResponse');

var _ModifierValueResponse2 = _interopRequireDefault(_ModifierValueResponse);

var _ModifierValueResponse3 = require('./model/ModifierValueResponse1');

var _ModifierValueResponse4 = _interopRequireDefault(_ModifierValueResponse3);

var _NotFound = require('./model/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _OptionCollectionResponse = require('./model/OptionCollectionResponse');

var _OptionCollectionResponse2 = _interopRequireDefault(_OptionCollectionResponse);

var _OptionConfig = require('./model/OptionConfig');

var _OptionConfig2 = _interopRequireDefault(_OptionConfig);

var _OptionPost = require('./model/OptionPost');

var _OptionPost2 = _interopRequireDefault(_OptionPost);

var _OptionPut = require('./model/OptionPut');

var _OptionPut2 = _interopRequireDefault(_OptionPut);

var _OptionResponse = require('./model/OptionResponse');

var _OptionResponse2 = _interopRequireDefault(_OptionResponse);

var _OptionResponse3 = require('./model/OptionResponse1');

var _OptionResponse4 = _interopRequireDefault(_OptionResponse3);

var _OptionResponse5 = require('./model/OptionResponse2');

var _OptionResponse6 = _interopRequireDefault(_OptionResponse5);

var _OptionValueCollectionResponse = require('./model/OptionValueCollectionResponse');

var _OptionValueCollectionResponse2 = _interopRequireDefault(_OptionValueCollectionResponse);

var _OptionValuePost = require('./model/OptionValuePost');

var _OptionValuePost2 = _interopRequireDefault(_OptionValuePost);

var _OptionValuePut = require('./model/OptionValuePut');

var _OptionValuePut2 = _interopRequireDefault(_OptionValuePut);

var _OptionValueResponse = require('./model/OptionValueResponse');

var _OptionValueResponse2 = _interopRequireDefault(_OptionValueResponse);

var _OptionValueVariantPost = require('./model/OptionValueVariantPost');

var _OptionValueVariantPost2 = _interopRequireDefault(_OptionValueVariantPost);

var _PaginationFull = require('./model/PaginationFull');

var _PaginationFull2 = _interopRequireDefault(_PaginationFull);

var _PaginationFull3 = require('./model/PaginationFull1');

var _PaginationFull4 = _interopRequireDefault(_PaginationFull3);

var _PaginationFull1Links = require('./model/PaginationFull1Links');

var _PaginationFull1Links2 = _interopRequireDefault(_PaginationFull1Links);

var _ProductBase = require('./model/ProductBase');

var _ProductBase2 = _interopRequireDefault(_ProductBase);

var _ProductCustomFieldBase = require('./model/ProductCustomFieldBase');

var _ProductCustomFieldBase2 = _interopRequireDefault(_ProductCustomFieldBase);

var _ProductCustomFieldPost = require('./model/ProductCustomFieldPost');

var _ProductCustomFieldPost2 = _interopRequireDefault(_ProductCustomFieldPost);

var _ProductCustomFieldPut = require('./model/ProductCustomFieldPut');

var _ProductCustomFieldPut2 = _interopRequireDefault(_ProductCustomFieldPut);

var _ProductFull = require('./model/ProductFull');

var _ProductFull2 = _interopRequireDefault(_ProductFull);

var _ProductImageBase = require('./model/ProductImageBase');

var _ProductImageBase2 = _interopRequireDefault(_ProductImageBase);

var _ProductImageCollectionResponse = require('./model/ProductImageCollectionResponse');

var _ProductImageCollectionResponse2 = _interopRequireDefault(_ProductImageCollectionResponse);

var _ProductImageFull = require('./model/ProductImageFull');

var _ProductImageFull2 = _interopRequireDefault(_ProductImageFull);

var _ProductImagePost = require('./model/ProductImagePost');

var _ProductImagePost2 = _interopRequireDefault(_ProductImagePost);

var _ProductImagePost3 = require('./model/ProductImagePost1');

var _ProductImagePost4 = _interopRequireDefault(_ProductImagePost3);

var _ProductImagePut = require('./model/ProductImagePut');

var _ProductImagePut2 = _interopRequireDefault(_ProductImagePut);

var _ProductImageResponse = require('./model/ProductImageResponse');

var _ProductImageResponse2 = _interopRequireDefault(_ProductImageResponse);

var _ProductImageResponse3 = require('./model/ProductImageResponse1');

var _ProductImageResponse4 = _interopRequireDefault(_ProductImageResponse3);

var _ProductModifierBase = require('./model/ProductModifierBase');

var _ProductModifierBase2 = _interopRequireDefault(_ProductModifierBase);

var _ProductModifierFull = require('./model/ProductModifierFull');

var _ProductModifierFull2 = _interopRequireDefault(_ProductModifierFull);

var _ProductModifierOptionValueBase = require('./model/ProductModifierOptionValueBase');

var _ProductModifierOptionValueBase2 = _interopRequireDefault(_ProductModifierOptionValueBase);

var _ProductModifierOptionValueFull = require('./model/ProductModifierOptionValueFull');

var _ProductModifierOptionValueFull2 = _interopRequireDefault(_ProductModifierOptionValueFull);

var _ProductModifierOptionValuePost = require('./model/ProductModifierOptionValuePost');

var _ProductModifierOptionValuePost2 = _interopRequireDefault(_ProductModifierOptionValuePost);

var _ProductModifierOptionValuePut = require('./model/ProductModifierOptionValuePut');

var _ProductModifierOptionValuePut2 = _interopRequireDefault(_ProductModifierOptionValuePut);

var _ProductModifierPost = require('./model/ProductModifierPost');

var _ProductModifierPost2 = _interopRequireDefault(_ProductModifierPost);

var _ProductModifierPut = require('./model/ProductModifierPut');

var _ProductModifierPut2 = _interopRequireDefault(_ProductModifierPut);

var _ProductOptionBase = require('./model/ProductOptionBase');

var _ProductOptionBase2 = _interopRequireDefault(_ProductOptionBase);

var _ProductOptionBase3 = require('./model/ProductOptionBase1');

var _ProductOptionBase4 = _interopRequireDefault(_ProductOptionBase3);

var _ProductOptionConfigFull = require('./model/ProductOptionConfigFull');

var _ProductOptionConfigFull2 = _interopRequireDefault(_ProductOptionConfigFull);

var _ProductOptionFull = require('./model/ProductOptionFull');

var _ProductOptionFull2 = _interopRequireDefault(_ProductOptionFull);

var _ProductOptionOptionValueBase = require('./model/ProductOptionOptionValueBase');

var _ProductOptionOptionValueBase2 = _interopRequireDefault(_ProductOptionOptionValueBase);

var _ProductOptionOptionValueFull = require('./model/ProductOptionOptionValueFull');

var _ProductOptionOptionValueFull2 = _interopRequireDefault(_ProductOptionOptionValueFull);

var _ProductOptionPost = require('./model/ProductOptionPost');

var _ProductOptionPost2 = _interopRequireDefault(_ProductOptionPost);

var _ProductOptionPut = require('./model/ProductOptionPut');

var _ProductOptionPut2 = _interopRequireDefault(_ProductOptionPut);

var _ProductOptionValuePost = require('./model/ProductOptionValuePost');

var _ProductOptionValuePost2 = _interopRequireDefault(_ProductOptionValuePost);

var _ProductOptionValuePostProduct = require('./model/ProductOptionValuePostProduct');

var _ProductOptionValuePostProduct2 = _interopRequireDefault(_ProductOptionValuePostProduct);

var _ProductOptionValuePut = require('./model/ProductOptionValuePut');

var _ProductOptionValuePut2 = _interopRequireDefault(_ProductOptionValuePut);

var _ProductPost = require('./model/ProductPost');

var _ProductPost2 = _interopRequireDefault(_ProductPost);

var _ProductPut = require('./model/ProductPut');

var _ProductPut2 = _interopRequireDefault(_ProductPut);

var _ProductPut3 = require('./model/ProductPut1');

var _ProductPut4 = _interopRequireDefault(_ProductPut3);

var _ProductPutCollection = require('./model/ProductPutCollection');

var _ProductPutCollection2 = _interopRequireDefault(_ProductPutCollection);

var _ProductResponse = require('./model/ProductResponse');

var _ProductResponse2 = _interopRequireDefault(_ProductResponse);

var _ProductReviewBase = require('./model/ProductReviewBase');

var _ProductReviewBase2 = _interopRequireDefault(_ProductReviewBase);

var _ProductReviewCollectionResponse = require('./model/ProductReviewCollectionResponse');

var _ProductReviewCollectionResponse2 = _interopRequireDefault(_ProductReviewCollectionResponse);

var _ProductReviewFull = require('./model/ProductReviewFull');

var _ProductReviewFull2 = _interopRequireDefault(_ProductReviewFull);

var _ProductReviewPost = require('./model/ProductReviewPost');

var _ProductReviewPost2 = _interopRequireDefault(_ProductReviewPost);

var _ProductReviewPut = require('./model/ProductReviewPut');

var _ProductReviewPut2 = _interopRequireDefault(_ProductReviewPut);

var _ProductReviewResponse = require('./model/ProductReviewResponse');

var _ProductReviewResponse2 = _interopRequireDefault(_ProductReviewResponse);

var _ProductVariantBase = require('./model/ProductVariantBase');

var _ProductVariantBase2 = _interopRequireDefault(_ProductVariantBase);

var _ProductVariantFull = require('./model/ProductVariantFull');

var _ProductVariantFull2 = _interopRequireDefault(_ProductVariantFull);

var _ProductVariantOptionValueBase = require('./model/ProductVariantOptionValueBase');

var _ProductVariantOptionValueBase2 = _interopRequireDefault(_ProductVariantOptionValueBase);

var _ProductVariantOptionValueBase3 = require('./model/ProductVariantOptionValueBase1');

var _ProductVariantOptionValueBase4 = _interopRequireDefault(_ProductVariantOptionValueBase3);

var _ProductVariantOptionValueFull = require('./model/ProductVariantOptionValueFull');

var _ProductVariantOptionValueFull2 = _interopRequireDefault(_ProductVariantOptionValueFull);

var _ProductVariantOptionValuePost = require('./model/ProductVariantOptionValuePost');

var _ProductVariantOptionValuePost2 = _interopRequireDefault(_ProductVariantOptionValuePost);

var _ProductVariantPost = require('./model/ProductVariantPost');

var _ProductVariantPost2 = _interopRequireDefault(_ProductVariantPost);

var _ProductVariantPost3 = require('./model/ProductVariantPost1');

var _ProductVariantPost4 = _interopRequireDefault(_ProductVariantPost3);

var _ProductVariantPostProduct = require('./model/ProductVariantPostProduct');

var _ProductVariantPostProduct2 = _interopRequireDefault(_ProductVariantPostProduct);

var _ProductVariantPutProduct = require('./model/ProductVariantPutProduct');

var _ProductVariantPutProduct2 = _interopRequireDefault(_ProductVariantPutProduct);

var _ProductVariantPutProduct3 = require('./model/ProductVariantPutProduct1');

var _ProductVariantPutProduct4 = _interopRequireDefault(_ProductVariantPutProduct3);

var _ProductVideoBase = require('./model/ProductVideoBase');

var _ProductVideoBase2 = _interopRequireDefault(_ProductVideoBase);

var _ProductVideoCollectionResponse = require('./model/ProductVideoCollectionResponse');

var _ProductVideoCollectionResponse2 = _interopRequireDefault(_ProductVideoCollectionResponse);

var _ProductVideoFull = require('./model/ProductVideoFull');

var _ProductVideoFull2 = _interopRequireDefault(_ProductVideoFull);

var _ProductVideoPost = require('./model/ProductVideoPost');

var _ProductVideoPost2 = _interopRequireDefault(_ProductVideoPost);

var _ProductVideoPut = require('./model/ProductVideoPut');

var _ProductVideoPut2 = _interopRequireDefault(_ProductVideoPut);

var _ProductVideoResponse = require('./model/ProductVideoResponse');

var _ProductVideoResponse2 = _interopRequireDefault(_ProductVideoResponse);

var _ProductVideoResponse3 = require('./model/ProductVideoResponse1');

var _ProductVideoResponse4 = _interopRequireDefault(_ProductVideoResponse3);

var _ResourceImage = require('./model/ResourceImage');

var _ResourceImage2 = _interopRequireDefault(_ResourceImage);

var _ResourceImage3 = require('./model/ResourceImage1');

var _ResourceImage4 = _interopRequireDefault(_ResourceImage3);

var _ResourceImage5 = require('./model/ResourceImage2');

var _ResourceImage6 = _interopRequireDefault(_ResourceImage5);

var _ResourceImageFull = require('./model/ResourceImageFull');

var _ResourceImageFull2 = _interopRequireDefault(_ResourceImageFull);

var _RespProductImage = require('./model/RespProductImage');

var _RespProductImage2 = _interopRequireDefault(_RespProductImage);

var _RespProductOptionValue = require('./model/RespProductOptionValue');

var _RespProductOptionValue2 = _interopRequireDefault(_RespProductOptionValue);

var _RespProductionOption = require('./model/RespProductionOption');

var _RespProductionOption2 = _interopRequireDefault(_RespProductionOption);

var _RespVariantBatchError = require('./model/RespVariantBatchError');

var _RespVariantBatchError2 = _interopRequireDefault(_RespVariantBatchError);

var _VariantBase = require('./model/VariantBase');

var _VariantBase2 = _interopRequireDefault(_VariantBase);

var _VariantCollectionPut = require('./model/VariantCollectionPut');

var _VariantCollectionPut2 = _interopRequireDefault(_VariantCollectionPut);

var _VariantCollectionResponse = require('./model/VariantCollectionResponse');

var _VariantCollectionResponse2 = _interopRequireDefault(_VariantCollectionResponse);

var _VariantCollectionResponse3 = require('./model/VariantCollectionResponse1');

var _VariantCollectionResponse4 = _interopRequireDefault(_VariantCollectionResponse3);

var _VariantPost = require('./model/VariantPost');

var _VariantPost2 = _interopRequireDefault(_VariantPost);

var _VariantPut = require('./model/VariantPut');

var _VariantPut2 = _interopRequireDefault(_VariantPut);

var _VariantResponse = require('./model/VariantResponse');

var _VariantResponse2 = _interopRequireDefault(_VariantResponse);

var _VariantsBatchErrorResponse = require('./model/VariantsBatchErrorResponse');

var _VariantsBatchErrorResponse2 = _interopRequireDefault(_VariantsBatchErrorResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Do not modify!
 *
 * This class is autogenerated by gulp, during the client generation process.
 *
 * Gather up all the exports from the swagger-codegen process for easy inclusion.
 * Supports multiple APIs and Models.
 */
exports.BrandImagesApi = _BrandImagesApi2.default;
exports.BrandMetafieldsApi = _BrandMetafieldsApi2.default;
exports.BrandsApi = _BrandsApi2.default;
exports.CatalogApi = _CatalogApi2.default;
exports.CategoryApi = _CategoryApi2.default;
exports.CategoryImagesApi = _CategoryImagesApi2.default;
exports.CategoryMetafieldsApi = _CategoryMetafieldsApi2.default;
exports.ProductBulkPricingRulesApi = _ProductBulkPricingRulesApi2.default;
exports.ProductComplexRulesApi = _ProductComplexRulesApi2.default;
exports.ProductCustomFieldsApi = _ProductCustomFieldsApi2.default;
exports.ProductImagesApi = _ProductImagesApi2.default;
exports.ProductMetafieldsApi = _ProductMetafieldsApi2.default;
exports.ProductModifierImagesApi = _ProductModifierImagesApi2.default;
exports.ProductModifierValuesApi = _ProductModifierValuesApi2.default;
exports.ProductModifiersApi = _ProductModifiersApi2.default;
exports.ProductOptionValuesApi = _ProductOptionValuesApi2.default;
exports.ProductOptionsApi = _ProductOptionsApi2.default;
exports.ProductReviewsApi = _ProductReviewsApi2.default;
exports.ProductVariantsApi = _ProductVariantsApi2.default;
exports.ProductVariantsMetafieldsApi = _ProductVariantsMetafieldsApi2.default;
exports.ProductVideosApi = _ProductVideosApi2.default;
exports.ProductsApi = _ProductsApi2.default;
exports.SummaryApi = _SummaryApi2.default;
exports.VariantsApi = _VariantsApi2.default;
exports.Adjuster = _Adjuster2.default;
exports.AdjusterFull = _AdjusterFull2.default;
exports.AdjustersFull = _AdjustersFull2.default;
exports.AdjustersFull1 = _AdjustersFull4.default;
exports.AdjustersFull1PurchasingDisabled = _AdjustersFull1PurchasingDisabled2.default;
exports.AllOfMetaFieldCollectionResponse1DataItems = _AllOfMetaFieldCollectionResponse1DataItems2.default;
exports.AllOfMetafieldResponse1Data = _AllOfMetafieldResponse1Data2.default;
exports.AllOfModifierCollectionResponseDataItems = _AllOfModifierCollectionResponseDataItems2.default;
exports.AllOfModifierResponse1Data = _AllOfModifierResponse1Data2.default;
exports.AllOfModifierResponseData = _AllOfModifierResponseData2.default;
exports.AllOfModifierValueCollectionResponseDataItems = _AllOfModifierValueCollectionResponseDataItems2.default;
exports.AllOfModifierValueResponse1Data = _AllOfModifierValueResponse1Data2.default;
exports.AllOfModifierValueResponseData = _AllOfModifierValueResponseData2.default;
exports.AllOfOptionCollectionResponseDataItems = _AllOfOptionCollectionResponseDataItems2.default;
exports.AllOfOptionResponse1Data = _AllOfOptionResponse1Data2.default;
exports.AllOfOptionResponse2Data = _AllOfOptionResponse2Data2.default;
exports.AllOfOptionResponseData = _AllOfOptionResponseData2.default;
exports.AllOfOptionValueCollectionResponseDataItems = _AllOfOptionValueCollectionResponseDataItems2.default;
exports.AllOfOptionValueResponseData = _AllOfOptionValueResponseData2.default;
exports.AllOfProductImageCollectionResponseDataItems = _AllOfProductImageCollectionResponseDataItems2.default;
exports.AllOfProductImageResponse1Data = _AllOfProductImageResponse1Data2.default;
exports.AllOfProductImageResponseData = _AllOfProductImageResponseData2.default;
exports.AllOfProductResponseData = _AllOfProductResponseData2.default;
exports.AllOfProductReviewCollectionResponseDataItems = _AllOfProductReviewCollectionResponseDataItems2.default;
exports.AllOfProductReviewResponseData = _AllOfProductReviewResponseData2.default;
exports.AllOfProductVideoCollectionResponseDataItems = _AllOfProductVideoCollectionResponseDataItems2.default;
exports.AllOfProductVideoResponse1Data = _AllOfProductVideoResponse1Data2.default;
exports.AllOfProductVideoResponseData = _AllOfProductVideoResponseData2.default;
exports.AllOfVariantCollectionResponse1DataItems = _AllOfVariantCollectionResponse1DataItems2.default;
exports.AllOfVariantCollectionResponseDataItems = _AllOfVariantCollectionResponseDataItems2.default;
exports.AllOfVariantResponseData = _AllOfVariantResponseData2.default;
exports.AllOfVariantsBatchErrorResponseBatchErrorsItems = _AllOfVariantsBatchErrorResponseBatchErrorsItems2.default;
exports.AllOfinlineResponse200DataItems = _AllOfinlineResponse200DataItems2.default;
exports.AllOfproductBaseCustomFieldsItems = _AllOfproductBaseCustomFieldsItems2.default;
exports.AllOfproductBaseImagesItems = _AllOfproductBaseImagesItems2.default;
exports.AllOfproductBasePrimaryImage = _AllOfproductBasePrimaryImage2.default;
exports.AllOfproductBaseVideosItems = _AllOfproductBaseVideosItems2.default;
exports.AllOfproductOptionBase1OptionValues = _AllOfproductOptionBase1OptionValues2.default;
exports.AllOfproductOptionBaseOptionValues = _AllOfproductOptionBaseOptionValues2.default;
exports.AllOfrespProductImageData = _AllOfrespProductImageData2.default;
exports.AllOfrespProductOptionValueData = _AllOfrespProductOptionValueData2.default;
exports.AllOfrespProductionOptionData = _AllOfrespProductionOptionData2.default;
exports.AllOfrespVariantBatchErrorBatchErrorsItems = _AllOfrespVariantBatchErrorBatchErrorsItems2.default;
exports.Body = _Body2.default;
exports.Body1 = _Body4.default;
exports.Body2 = _Body6.default;
exports.Body3 = _Body8.default;
exports.Brand = _Brand2.default;
exports.Brand1 = _Brand4.default;
exports.Brand2 = _Brand6.default;
exports.BrandCollectionResponse = _BrandCollectionResponse2.default;
exports.BrandFull = _BrandFull2.default;
exports.BrandFull1 = _BrandFull4.default;
exports.BrandResponse = _BrandResponse2.default;
exports.BrandResponse1 = _BrandResponse4.default;
exports.BulkPricingRule = _BulkPricingRule2.default;
exports.BulkPricingRuleFull = _BulkPricingRuleFull2.default;
exports.BulkPricingRuleFull1 = _BulkPricingRuleFull4.default;
exports.BulkPricingRuleFull2 = _BulkPricingRuleFull6.default;
exports.BulkPricingRuleFull3 = _BulkPricingRuleFull8.default;
exports.CatalogSummary = _CatalogSummary2.default;
exports.CatalogSummaryFull = _CatalogSummaryFull2.default;
exports.CatalogSummaryResponse = _CatalogSummaryResponse2.default;
exports.CategoriesTreeNodeFull = _CategoriesTreeNodeFull2.default;
exports.CategoriesTreeNodeFull1 = _CategoriesTreeNodeFull4.default;
exports.CategoriesTreeNodeFull2 = _CategoriesTreeNodeFull6.default;
exports.CategoriesTreeResp = _CategoriesTreeResp2.default;
exports.CategoriesTreeResp1 = _CategoriesTreeResp4.default;
exports.CategoriesTreeResp2 = _CategoriesTreeResp6.default;
exports.Category = _Category2.default;
exports.Category1 = _Category4.default;
exports.CategoryBase = _CategoryBase2.default;
exports.CategoryFull = _CategoryFull2.default;
exports.CategoryFull1 = _CategoryFull4.default;
exports.CategoryResponse = _CategoryResponse2.default;
exports.CategoryResponse1 = _CategoryResponse4.default;
exports.ComplexRule = _ComplexRule2.default;
exports.ComplexRule1 = _ComplexRule4.default;
exports.ComplexRuleBase = _ComplexRuleBase2.default;
exports.ComplexRuleBase1 = _ComplexRuleBase4.default;
exports.ComplexRuleCollectionResponse = _ComplexRuleCollectionResponse2.default;
exports.ComplexRuleCondition = _ComplexRuleCondition2.default;
exports.ComplexRuleConditionBase = _ComplexRuleConditionBase2.default;
exports.ConfigFull = _ConfigFull2.default;
exports.CustomField = _CustomField2.default;
exports.CustomField1 = _CustomField4.default;
exports.CustomField2 = _CustomField6.default;
exports.CustomUrlBrand = _CustomUrlBrand2.default;
exports.CustomUrlFull = _CustomUrlFull2.default;
exports.CustomUrlFull1 = _CustomUrlFull4.default;
exports.DetailedErrors = _DetailedErrors2.default;
exports.DetailedErrors1 = _DetailedErrors4.default;
exports.ErrorBase = _ErrorBase2.default;
exports.ErrorNoContent = _ErrorNoContent2.default;
exports.ErrorNotFound = _ErrorNotFound2.default;
exports.ErrorResponse = _ErrorResponse2.default;
exports.ErrorResponseFull = _ErrorResponseFull2.default;
exports.FormDataImageFileParam = _FormDataImageFileParam2.default;
exports.GiftCertificateFull = _GiftCertificateFull2.default;
exports.ImageResponse = _ImageResponse2.default;
exports.InlineResponse200 = _InlineResponse2.default;
exports.InlineResponse2001 = _InlineResponse4.default;
exports.InlineResponse2002 = _InlineResponse6.default;
exports.InlineResponse2003 = _InlineResponse8.default;
exports.InlineResponse2004 = _InlineResponse10.default;
exports.InlineResponse2005 = _InlineResponse12.default;
exports.InlineResponse2006 = _InlineResponse14.default;
exports.InlineResponse2007 = _InlineResponse16.default;
exports.InlineResponse2008 = _InlineResponse18.default;
exports.InlineResponse2008Data = _InlineResponse2008Data2.default;
exports.Meta = _Meta2.default;
exports.MetaCollectionFull = _MetaCollectionFull2.default;
exports.MetaCollectionFull1 = _MetaCollectionFull4.default;
exports.MetaEmptyFull = _MetaEmptyFull2.default;
exports.MetaFieldCollectionResponse = _MetaFieldCollectionResponse2.default;
exports.MetaFieldCollectionResponse1 = _MetaFieldCollectionResponse4.default;
exports.Metafield = _Metafield2.default;
exports.MetafieldBase = _MetafieldBase2.default;
exports.MetafieldBase1 = _MetafieldBase4.default;
exports.MetafieldFull = _MetafieldFull2.default;
exports.MetafieldPost = _MetafieldPost2.default;
exports.MetafieldPost1 = _MetafieldPost4.default;
exports.MetafieldPost2 = _MetafieldPost6.default;
exports.MetafieldPost3 = _MetafieldPost8.default;
exports.MetafieldPut = _MetafieldPut2.default;
exports.MetafieldPut1 = _MetafieldPut4.default;
exports.MetafieldPut2 = _MetafieldPut6.default;
exports.MetafieldPut3 = _MetafieldPut8.default;
exports.MetafieldPut4 = _MetafieldPut10.default;
exports.MetafieldResponse = _MetafieldResponse2.default;
exports.MetafieldResponse1 = _MetafieldResponse4.default;
exports.MetafieldResponse2 = _MetafieldResponse6.default;
exports.MetafieldResponse3 = _MetafieldResponse8.default;
exports.ModifierCollectionResponse = _ModifierCollectionResponse2.default;
exports.ModifierPost = _ModifierPost2.default;
exports.ModifierPut = _ModifierPut2.default;
exports.ModifierResponse = _ModifierResponse2.default;
exports.ModifierResponse1 = _ModifierResponse4.default;
exports.ModifierValueCollectionResponse = _ModifierValueCollectionResponse2.default;
exports.ModifierValuePost = _ModifierValuePost2.default;
exports.ModifierValuePut = _ModifierValuePut2.default;
exports.ModifierValueResponse = _ModifierValueResponse2.default;
exports.ModifierValueResponse1 = _ModifierValueResponse4.default;
exports.NotFound = _NotFound2.default;
exports.OptionCollectionResponse = _OptionCollectionResponse2.default;
exports.OptionConfig = _OptionConfig2.default;
exports.OptionPost = _OptionPost2.default;
exports.OptionPut = _OptionPut2.default;
exports.OptionResponse = _OptionResponse2.default;
exports.OptionResponse1 = _OptionResponse4.default;
exports.OptionResponse2 = _OptionResponse6.default;
exports.OptionValueCollectionResponse = _OptionValueCollectionResponse2.default;
exports.OptionValuePost = _OptionValuePost2.default;
exports.OptionValuePut = _OptionValuePut2.default;
exports.OptionValueResponse = _OptionValueResponse2.default;
exports.OptionValueVariantPost = _OptionValueVariantPost2.default;
exports.PaginationFull = _PaginationFull2.default;
exports.PaginationFull1 = _PaginationFull4.default;
exports.PaginationFull1Links = _PaginationFull1Links2.default;
exports.ProductBase = _ProductBase2.default;
exports.ProductCustomFieldBase = _ProductCustomFieldBase2.default;
exports.ProductCustomFieldPost = _ProductCustomFieldPost2.default;
exports.ProductCustomFieldPut = _ProductCustomFieldPut2.default;
exports.ProductFull = _ProductFull2.default;
exports.ProductImageBase = _ProductImageBase2.default;
exports.ProductImageCollectionResponse = _ProductImageCollectionResponse2.default;
exports.ProductImageFull = _ProductImageFull2.default;
exports.ProductImagePost = _ProductImagePost2.default;
exports.ProductImagePost1 = _ProductImagePost4.default;
exports.ProductImagePut = _ProductImagePut2.default;
exports.ProductImageResponse = _ProductImageResponse2.default;
exports.ProductImageResponse1 = _ProductImageResponse4.default;
exports.ProductModifierBase = _ProductModifierBase2.default;
exports.ProductModifierFull = _ProductModifierFull2.default;
exports.ProductModifierOptionValueBase = _ProductModifierOptionValueBase2.default;
exports.ProductModifierOptionValueFull = _ProductModifierOptionValueFull2.default;
exports.ProductModifierOptionValuePost = _ProductModifierOptionValuePost2.default;
exports.ProductModifierOptionValuePut = _ProductModifierOptionValuePut2.default;
exports.ProductModifierPost = _ProductModifierPost2.default;
exports.ProductModifierPut = _ProductModifierPut2.default;
exports.ProductOptionBase = _ProductOptionBase2.default;
exports.ProductOptionBase1 = _ProductOptionBase4.default;
exports.ProductOptionConfigFull = _ProductOptionConfigFull2.default;
exports.ProductOptionFull = _ProductOptionFull2.default;
exports.ProductOptionOptionValueBase = _ProductOptionOptionValueBase2.default;
exports.ProductOptionOptionValueFull = _ProductOptionOptionValueFull2.default;
exports.ProductOptionPost = _ProductOptionPost2.default;
exports.ProductOptionPut = _ProductOptionPut2.default;
exports.ProductOptionValuePost = _ProductOptionValuePost2.default;
exports.ProductOptionValuePostProduct = _ProductOptionValuePostProduct2.default;
exports.ProductOptionValuePut = _ProductOptionValuePut2.default;
exports.ProductPost = _ProductPost2.default;
exports.ProductPut = _ProductPut2.default;
exports.ProductPut1 = _ProductPut4.default;
exports.ProductPutCollection = _ProductPutCollection2.default;
exports.ProductResponse = _ProductResponse2.default;
exports.ProductReviewBase = _ProductReviewBase2.default;
exports.ProductReviewCollectionResponse = _ProductReviewCollectionResponse2.default;
exports.ProductReviewFull = _ProductReviewFull2.default;
exports.ProductReviewPost = _ProductReviewPost2.default;
exports.ProductReviewPut = _ProductReviewPut2.default;
exports.ProductReviewResponse = _ProductReviewResponse2.default;
exports.ProductVariantBase = _ProductVariantBase2.default;
exports.ProductVariantFull = _ProductVariantFull2.default;
exports.ProductVariantOptionValueBase = _ProductVariantOptionValueBase2.default;
exports.ProductVariantOptionValueBase1 = _ProductVariantOptionValueBase4.default;
exports.ProductVariantOptionValueFull = _ProductVariantOptionValueFull2.default;
exports.ProductVariantOptionValuePost = _ProductVariantOptionValuePost2.default;
exports.ProductVariantPost = _ProductVariantPost2.default;
exports.ProductVariantPost1 = _ProductVariantPost4.default;
exports.ProductVariantPostProduct = _ProductVariantPostProduct2.default;
exports.ProductVariantPutProduct = _ProductVariantPutProduct2.default;
exports.ProductVariantPutProduct1 = _ProductVariantPutProduct4.default;
exports.ProductVideoBase = _ProductVideoBase2.default;
exports.ProductVideoCollectionResponse = _ProductVideoCollectionResponse2.default;
exports.ProductVideoFull = _ProductVideoFull2.default;
exports.ProductVideoPost = _ProductVideoPost2.default;
exports.ProductVideoPut = _ProductVideoPut2.default;
exports.ProductVideoResponse = _ProductVideoResponse2.default;
exports.ProductVideoResponse1 = _ProductVideoResponse4.default;
exports.ResourceImage = _ResourceImage2.default;
exports.ResourceImage1 = _ResourceImage4.default;
exports.ResourceImage2 = _ResourceImage6.default;
exports.ResourceImageFull = _ResourceImageFull2.default;
exports.RespProductImage = _RespProductImage2.default;
exports.RespProductOptionValue = _RespProductOptionValue2.default;
exports.RespProductionOption = _RespProductionOption2.default;
exports.RespVariantBatchError = _RespVariantBatchError2.default;
exports.VariantBase = _VariantBase2.default;
exports.VariantCollectionPut = _VariantCollectionPut2.default;
exports.VariantCollectionResponse = _VariantCollectionResponse2.default;
exports.VariantCollectionResponse1 = _VariantCollectionResponse4.default;
exports.VariantPost = _VariantPost2.default;
exports.VariantPut = _VariantPut2.default;
exports.VariantResponse = _VariantResponse2.default;
exports.VariantsBatchErrorResponse = _VariantsBatchErrorResponse2.default;