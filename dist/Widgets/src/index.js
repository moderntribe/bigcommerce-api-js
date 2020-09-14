'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetTemplatePut = exports.WidgetTemplatePost1 = exports.WidgetTemplatePost = exports.WidgetTemplateFull = exports.WidgetTemplateBase1 = exports.WidgetTemplateBase = exports.WidgetSchemaTabSectionsSettings = exports.WidgetSchemaTabSections1 = exports.WidgetSchemaTabSections = exports.WidgetSchemaTab = exports.WidgetSchemaSettingBase1 = exports.WidgetSchemaSettingBase = exports.WidgetSchemaHidden = exports.WidgetSchemaArray = exports.WidgetSchema = exports.WidgetPut1 = exports.WidgetPut = exports.WidgetPost1 = exports.WidgetPost = exports.WidgetFull = exports.WidgetBase = exports.ThemeRegion1 = exports.ThemeRegion = exports.PlacementPut1 = exports.PlacementPut = exports.PlacementPost1 = exports.PlacementPost = exports.PlacementFull = exports.PlacementBase = exports.Pagination1Links = exports.Pagination1 = exports.Pagination = exports.NewmodelInner = exports.NewModel = exports.MetaCollection1 = exports.MetaCollection = exports.Meta = exports.InlineResponse2005 = exports.InlineResponse2004 = exports.InlineResponse2003 = exports.InlineResponse2002 = exports.InlineResponse2001 = exports.InlineResponse200 = exports.ErrorBase1 = exports.ErrorBase = exports.AllOfinlineResponse200DataItems = exports.AllOfinlineResponse2004Data = exports.AllOfinlineResponse2003DataItems = exports.AllOfinlineResponse2002Data = exports.AllOfinlineResponse2001DataItems = exports.WidgetTemplateApi = exports.WidgetApi = exports.RegionsApi = exports.PlacementApi = undefined;

var _PlacementApi = require('./api/PlacementApi');

var _PlacementApi2 = _interopRequireDefault(_PlacementApi);

var _RegionsApi = require('./api/RegionsApi');

var _RegionsApi2 = _interopRequireDefault(_RegionsApi);

var _WidgetApi = require('./api/WidgetApi');

var _WidgetApi2 = _interopRequireDefault(_WidgetApi);

var _WidgetTemplateApi = require('./api/WidgetTemplateApi');

var _WidgetTemplateApi2 = _interopRequireDefault(_WidgetTemplateApi);

var _AllOfinlineResponse2001DataItems = require('./model/AllOfinlineResponse2001DataItems');

var _AllOfinlineResponse2001DataItems2 = _interopRequireDefault(_AllOfinlineResponse2001DataItems);

var _AllOfinlineResponse2002Data = require('./model/AllOfinlineResponse2002Data');

var _AllOfinlineResponse2002Data2 = _interopRequireDefault(_AllOfinlineResponse2002Data);

var _AllOfinlineResponse2003DataItems = require('./model/AllOfinlineResponse2003DataItems');

var _AllOfinlineResponse2003DataItems2 = _interopRequireDefault(_AllOfinlineResponse2003DataItems);

var _AllOfinlineResponse2004Data = require('./model/AllOfinlineResponse2004Data');

var _AllOfinlineResponse2004Data2 = _interopRequireDefault(_AllOfinlineResponse2004Data);

var _AllOfinlineResponse200DataItems = require('./model/AllOfinlineResponse200DataItems');

var _AllOfinlineResponse200DataItems2 = _interopRequireDefault(_AllOfinlineResponse200DataItems);

var _ErrorBase = require('./model/ErrorBase');

var _ErrorBase2 = _interopRequireDefault(_ErrorBase);

var _ErrorBase3 = require('./model/ErrorBase1');

var _ErrorBase4 = _interopRequireDefault(_ErrorBase3);

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

var _Meta = require('./model/Meta');

var _Meta2 = _interopRequireDefault(_Meta);

var _MetaCollection = require('./model/MetaCollection');

var _MetaCollection2 = _interopRequireDefault(_MetaCollection);

var _MetaCollection3 = require('./model/MetaCollection1');

var _MetaCollection4 = _interopRequireDefault(_MetaCollection3);

var _NewModel = require('./model/NewModel');

var _NewModel2 = _interopRequireDefault(_NewModel);

var _NewmodelInner = require('./model/NewmodelInner');

var _NewmodelInner2 = _interopRequireDefault(_NewmodelInner);

var _Pagination = require('./model/Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Pagination3 = require('./model/Pagination1');

var _Pagination4 = _interopRequireDefault(_Pagination3);

var _Pagination1Links = require('./model/Pagination1Links');

var _Pagination1Links2 = _interopRequireDefault(_Pagination1Links);

var _PlacementBase = require('./model/PlacementBase');

var _PlacementBase2 = _interopRequireDefault(_PlacementBase);

var _PlacementFull = require('./model/PlacementFull');

var _PlacementFull2 = _interopRequireDefault(_PlacementFull);

var _PlacementPost = require('./model/PlacementPost');

var _PlacementPost2 = _interopRequireDefault(_PlacementPost);

var _PlacementPost3 = require('./model/PlacementPost1');

var _PlacementPost4 = _interopRequireDefault(_PlacementPost3);

var _PlacementPut = require('./model/PlacementPut');

var _PlacementPut2 = _interopRequireDefault(_PlacementPut);

var _PlacementPut3 = require('./model/PlacementPut1');

var _PlacementPut4 = _interopRequireDefault(_PlacementPut3);

var _ThemeRegion = require('./model/ThemeRegion');

var _ThemeRegion2 = _interopRequireDefault(_ThemeRegion);

var _ThemeRegion3 = require('./model/ThemeRegion1');

var _ThemeRegion4 = _interopRequireDefault(_ThemeRegion3);

var _WidgetBase = require('./model/WidgetBase');

var _WidgetBase2 = _interopRequireDefault(_WidgetBase);

var _WidgetFull = require('./model/WidgetFull');

var _WidgetFull2 = _interopRequireDefault(_WidgetFull);

var _WidgetPost = require('./model/WidgetPost');

var _WidgetPost2 = _interopRequireDefault(_WidgetPost);

var _WidgetPost3 = require('./model/WidgetPost1');

var _WidgetPost4 = _interopRequireDefault(_WidgetPost3);

var _WidgetPut = require('./model/WidgetPut');

var _WidgetPut2 = _interopRequireDefault(_WidgetPut);

var _WidgetPut3 = require('./model/WidgetPut1');

var _WidgetPut4 = _interopRequireDefault(_WidgetPut3);

var _WidgetSchema = require('./model/WidgetSchema');

var _WidgetSchema2 = _interopRequireDefault(_WidgetSchema);

var _WidgetSchemaArray = require('./model/WidgetSchemaArray');

var _WidgetSchemaArray2 = _interopRequireDefault(_WidgetSchemaArray);

var _WidgetSchemaHidden = require('./model/WidgetSchemaHidden');

var _WidgetSchemaHidden2 = _interopRequireDefault(_WidgetSchemaHidden);

var _WidgetSchemaSettingBase = require('./model/WidgetSchemaSettingBase');

var _WidgetSchemaSettingBase2 = _interopRequireDefault(_WidgetSchemaSettingBase);

var _WidgetSchemaSettingBase3 = require('./model/WidgetSchemaSettingBase1');

var _WidgetSchemaSettingBase4 = _interopRequireDefault(_WidgetSchemaSettingBase3);

var _WidgetSchemaTab = require('./model/WidgetSchemaTab');

var _WidgetSchemaTab2 = _interopRequireDefault(_WidgetSchemaTab);

var _WidgetSchemaTabSections = require('./model/WidgetSchemaTabSections');

var _WidgetSchemaTabSections2 = _interopRequireDefault(_WidgetSchemaTabSections);

var _WidgetSchemaTabSections3 = require('./model/WidgetSchemaTabSections1');

var _WidgetSchemaTabSections4 = _interopRequireDefault(_WidgetSchemaTabSections3);

var _WidgetSchemaTabSectionsSettings = require('./model/WidgetSchemaTabSectionsSettings');

var _WidgetSchemaTabSectionsSettings2 = _interopRequireDefault(_WidgetSchemaTabSectionsSettings);

var _WidgetTemplateBase = require('./model/WidgetTemplateBase');

var _WidgetTemplateBase2 = _interopRequireDefault(_WidgetTemplateBase);

var _WidgetTemplateBase3 = require('./model/WidgetTemplateBase1');

var _WidgetTemplateBase4 = _interopRequireDefault(_WidgetTemplateBase3);

var _WidgetTemplateFull = require('./model/WidgetTemplateFull');

var _WidgetTemplateFull2 = _interopRequireDefault(_WidgetTemplateFull);

var _WidgetTemplatePost = require('./model/WidgetTemplatePost');

var _WidgetTemplatePost2 = _interopRequireDefault(_WidgetTemplatePost);

var _WidgetTemplatePost3 = require('./model/WidgetTemplatePost1');

var _WidgetTemplatePost4 = _interopRequireDefault(_WidgetTemplatePost3);

var _WidgetTemplatePut = require('./model/WidgetTemplatePut');

var _WidgetTemplatePut2 = _interopRequireDefault(_WidgetTemplatePut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Do not modify!
 *
 * This class is autogenerated by gulp, during the client generation process.
 *
 * Gather up all the exports from the swagger-codegen process for easy inclusion.
 * Supports multiple APIs and Models.
 */
exports.PlacementApi = _PlacementApi2.default;
exports.RegionsApi = _RegionsApi2.default;
exports.WidgetApi = _WidgetApi2.default;
exports.WidgetTemplateApi = _WidgetTemplateApi2.default;
exports.AllOfinlineResponse2001DataItems = _AllOfinlineResponse2001DataItems2.default;
exports.AllOfinlineResponse2002Data = _AllOfinlineResponse2002Data2.default;
exports.AllOfinlineResponse2003DataItems = _AllOfinlineResponse2003DataItems2.default;
exports.AllOfinlineResponse2004Data = _AllOfinlineResponse2004Data2.default;
exports.AllOfinlineResponse200DataItems = _AllOfinlineResponse200DataItems2.default;
exports.ErrorBase = _ErrorBase2.default;
exports.ErrorBase1 = _ErrorBase4.default;
exports.InlineResponse200 = _InlineResponse2.default;
exports.InlineResponse2001 = _InlineResponse4.default;
exports.InlineResponse2002 = _InlineResponse6.default;
exports.InlineResponse2003 = _InlineResponse8.default;
exports.InlineResponse2004 = _InlineResponse10.default;
exports.InlineResponse2005 = _InlineResponse12.default;
exports.Meta = _Meta2.default;
exports.MetaCollection = _MetaCollection2.default;
exports.MetaCollection1 = _MetaCollection4.default;
exports.NewModel = _NewModel2.default;
exports.NewmodelInner = _NewmodelInner2.default;
exports.Pagination = _Pagination2.default;
exports.Pagination1 = _Pagination4.default;
exports.Pagination1Links = _Pagination1Links2.default;
exports.PlacementBase = _PlacementBase2.default;
exports.PlacementFull = _PlacementFull2.default;
exports.PlacementPost = _PlacementPost2.default;
exports.PlacementPost1 = _PlacementPost4.default;
exports.PlacementPut = _PlacementPut2.default;
exports.PlacementPut1 = _PlacementPut4.default;
exports.ThemeRegion = _ThemeRegion2.default;
exports.ThemeRegion1 = _ThemeRegion4.default;
exports.WidgetBase = _WidgetBase2.default;
exports.WidgetFull = _WidgetFull2.default;
exports.WidgetPost = _WidgetPost2.default;
exports.WidgetPost1 = _WidgetPost4.default;
exports.WidgetPut = _WidgetPut2.default;
exports.WidgetPut1 = _WidgetPut4.default;
exports.WidgetSchema = _WidgetSchema2.default;
exports.WidgetSchemaArray = _WidgetSchemaArray2.default;
exports.WidgetSchemaHidden = _WidgetSchemaHidden2.default;
exports.WidgetSchemaSettingBase = _WidgetSchemaSettingBase2.default;
exports.WidgetSchemaSettingBase1 = _WidgetSchemaSettingBase4.default;
exports.WidgetSchemaTab = _WidgetSchemaTab2.default;
exports.WidgetSchemaTabSections = _WidgetSchemaTabSections2.default;
exports.WidgetSchemaTabSections1 = _WidgetSchemaTabSections4.default;
exports.WidgetSchemaTabSectionsSettings = _WidgetSchemaTabSectionsSettings2.default;
exports.WidgetTemplateBase = _WidgetTemplateBase2.default;
exports.WidgetTemplateBase1 = _WidgetTemplateBase4.default;
exports.WidgetTemplateFull = _WidgetTemplateFull2.default;
exports.WidgetTemplatePost = _WidgetTemplatePost2.default;
exports.WidgetTemplatePost1 = _WidgetTemplatePost4.default;
exports.WidgetTemplatePut = _WidgetTemplatePut2.default;