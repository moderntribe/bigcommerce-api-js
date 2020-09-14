'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuccessBatchResponse = exports.PriceRecordResponse = exports.PriceRecordPut = exports.PriceRecordIdentifiers = exports.PriceRecordCollectionResponse = exports.PriceRecordCollectionPut = exports.PriceRecordBatchItem = exports.PriceRecordBatchErrorSet = exports.PriceRecordBatchErrorResponse = exports.PriceRecordBase = exports.PriceRecord = exports.PriceListResponse1 = exports.PriceListResponse = exports.PriceListPut = exports.PriceListPost = exports.PriceListCollectionResponse = exports.PriceListBase = exports.PriceListAssignmentsIdentifiers = exports.PriceListAssignmentsBatchErrorSet = exports.PriceListAssignmentsBatchErrorResponseBatchErrors = exports.PriceListAssignmentsBatchErrorResponse = exports.PriceList = exports.Pagination1Links = exports.Pagination1 = exports.Pagination = exports.NotFound = exports.NoContent = exports.Meta = exports.InlineResponse422 = exports.InlineResponse204 = exports.InlineResponse200 = exports.ErrorResponse = exports.DetailedErrors = exports.CreateBatchPriceListAssignmentsRequest = exports.CollectionMeta = exports.BulkPricingTier = exports.Body = exports.BaseError = exports.AssignmentsForRequest = exports.AssignmentsForGetResponseData = exports.AssignmentsForGetResponse = exports.AssignmentForGetResponse = exports.AllOfPriceRecordResponseData = exports.AllOfPriceRecordCollectionResponseDataItems = exports.AllOfPriceRecordBatchErrorSetData = exports.AllOfPriceListResponseData = exports.AllOfPriceListCollectionResponseDataItems = exports.AllOfPriceListAssignmentsBatchErrorSetData = exports.AllOfPriceListAssignmentsBatchErrorResponseBatchErrorsData = exports.PriceListsRecordsApi = exports.PriceListsAssignmentsApi = exports.PriceListsApi = undefined;

var _PriceListsApi = require('./api/PriceListsApi');

var _PriceListsApi2 = _interopRequireDefault(_PriceListsApi);

var _PriceListsAssignmentsApi = require('./api/PriceListsAssignmentsApi');

var _PriceListsAssignmentsApi2 = _interopRequireDefault(_PriceListsAssignmentsApi);

var _PriceListsRecordsApi = require('./api/PriceListsRecordsApi');

var _PriceListsRecordsApi2 = _interopRequireDefault(_PriceListsRecordsApi);

var _AllOfPriceListAssignmentsBatchErrorResponseBatchErrorsData = require('./model/AllOfPriceListAssignmentsBatchErrorResponseBatchErrorsData');

var _AllOfPriceListAssignmentsBatchErrorResponseBatchErrorsData2 = _interopRequireDefault(_AllOfPriceListAssignmentsBatchErrorResponseBatchErrorsData);

var _AllOfPriceListAssignmentsBatchErrorSetData = require('./model/AllOfPriceListAssignmentsBatchErrorSetData');

var _AllOfPriceListAssignmentsBatchErrorSetData2 = _interopRequireDefault(_AllOfPriceListAssignmentsBatchErrorSetData);

var _AllOfPriceListCollectionResponseDataItems = require('./model/AllOfPriceListCollectionResponseDataItems');

var _AllOfPriceListCollectionResponseDataItems2 = _interopRequireDefault(_AllOfPriceListCollectionResponseDataItems);

var _AllOfPriceListResponseData = require('./model/AllOfPriceListResponseData');

var _AllOfPriceListResponseData2 = _interopRequireDefault(_AllOfPriceListResponseData);

var _AllOfPriceRecordBatchErrorSetData = require('./model/AllOfPriceRecordBatchErrorSetData');

var _AllOfPriceRecordBatchErrorSetData2 = _interopRequireDefault(_AllOfPriceRecordBatchErrorSetData);

var _AllOfPriceRecordCollectionResponseDataItems = require('./model/AllOfPriceRecordCollectionResponseDataItems');

var _AllOfPriceRecordCollectionResponseDataItems2 = _interopRequireDefault(_AllOfPriceRecordCollectionResponseDataItems);

var _AllOfPriceRecordResponseData = require('./model/AllOfPriceRecordResponseData');

var _AllOfPriceRecordResponseData2 = _interopRequireDefault(_AllOfPriceRecordResponseData);

var _AssignmentForGetResponse = require('./model/AssignmentForGetResponse');

var _AssignmentForGetResponse2 = _interopRequireDefault(_AssignmentForGetResponse);

var _AssignmentsForGetResponse = require('./model/AssignmentsForGetResponse');

var _AssignmentsForGetResponse2 = _interopRequireDefault(_AssignmentsForGetResponse);

var _AssignmentsForGetResponseData = require('./model/AssignmentsForGetResponseData');

var _AssignmentsForGetResponseData2 = _interopRequireDefault(_AssignmentsForGetResponseData);

var _AssignmentsForRequest = require('./model/AssignmentsForRequest');

var _AssignmentsForRequest2 = _interopRequireDefault(_AssignmentsForRequest);

var _BaseError = require('./model/BaseError');

var _BaseError2 = _interopRequireDefault(_BaseError);

var _Body = require('./model/Body');

var _Body2 = _interopRequireDefault(_Body);

var _BulkPricingTier = require('./model/BulkPricingTier');

var _BulkPricingTier2 = _interopRequireDefault(_BulkPricingTier);

var _CollectionMeta = require('./model/CollectionMeta');

var _CollectionMeta2 = _interopRequireDefault(_CollectionMeta);

var _CreateBatchPriceListAssignmentsRequest = require('./model/CreateBatchPriceListAssignmentsRequest');

var _CreateBatchPriceListAssignmentsRequest2 = _interopRequireDefault(_CreateBatchPriceListAssignmentsRequest);

var _DetailedErrors = require('./model/DetailedErrors');

var _DetailedErrors2 = _interopRequireDefault(_DetailedErrors);

var _ErrorResponse = require('./model/ErrorResponse');

var _ErrorResponse2 = _interopRequireDefault(_ErrorResponse);

var _InlineResponse = require('./model/InlineResponse200');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('./model/InlineResponse204');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('./model/InlineResponse422');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

var _Meta = require('./model/Meta');

var _Meta2 = _interopRequireDefault(_Meta);

var _NoContent = require('./model/NoContent');

var _NoContent2 = _interopRequireDefault(_NoContent);

var _NotFound = require('./model/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Pagination = require('./model/Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Pagination3 = require('./model/Pagination1');

var _Pagination4 = _interopRequireDefault(_Pagination3);

var _Pagination1Links = require('./model/Pagination1Links');

var _Pagination1Links2 = _interopRequireDefault(_Pagination1Links);

var _PriceList = require('./model/PriceList');

var _PriceList2 = _interopRequireDefault(_PriceList);

var _PriceListAssignmentsBatchErrorResponse = require('./model/PriceListAssignmentsBatchErrorResponse');

var _PriceListAssignmentsBatchErrorResponse2 = _interopRequireDefault(_PriceListAssignmentsBatchErrorResponse);

var _PriceListAssignmentsBatchErrorResponseBatchErrors = require('./model/PriceListAssignmentsBatchErrorResponseBatchErrors');

var _PriceListAssignmentsBatchErrorResponseBatchErrors2 = _interopRequireDefault(_PriceListAssignmentsBatchErrorResponseBatchErrors);

var _PriceListAssignmentsBatchErrorSet = require('./model/PriceListAssignmentsBatchErrorSet');

var _PriceListAssignmentsBatchErrorSet2 = _interopRequireDefault(_PriceListAssignmentsBatchErrorSet);

var _PriceListAssignmentsIdentifiers = require('./model/PriceListAssignmentsIdentifiers');

var _PriceListAssignmentsIdentifiers2 = _interopRequireDefault(_PriceListAssignmentsIdentifiers);

var _PriceListBase = require('./model/PriceListBase');

var _PriceListBase2 = _interopRequireDefault(_PriceListBase);

var _PriceListCollectionResponse = require('./model/PriceListCollectionResponse');

var _PriceListCollectionResponse2 = _interopRequireDefault(_PriceListCollectionResponse);

var _PriceListPost = require('./model/PriceListPost');

var _PriceListPost2 = _interopRequireDefault(_PriceListPost);

var _PriceListPut = require('./model/PriceListPut');

var _PriceListPut2 = _interopRequireDefault(_PriceListPut);

var _PriceListResponse = require('./model/PriceListResponse');

var _PriceListResponse2 = _interopRequireDefault(_PriceListResponse);

var _PriceListResponse3 = require('./model/PriceListResponse1');

var _PriceListResponse4 = _interopRequireDefault(_PriceListResponse3);

var _PriceRecord = require('./model/PriceRecord');

var _PriceRecord2 = _interopRequireDefault(_PriceRecord);

var _PriceRecordBase = require('./model/PriceRecordBase');

var _PriceRecordBase2 = _interopRequireDefault(_PriceRecordBase);

var _PriceRecordBatchErrorResponse = require('./model/PriceRecordBatchErrorResponse');

var _PriceRecordBatchErrorResponse2 = _interopRequireDefault(_PriceRecordBatchErrorResponse);

var _PriceRecordBatchErrorSet = require('./model/PriceRecordBatchErrorSet');

var _PriceRecordBatchErrorSet2 = _interopRequireDefault(_PriceRecordBatchErrorSet);

var _PriceRecordBatchItem = require('./model/PriceRecordBatchItem');

var _PriceRecordBatchItem2 = _interopRequireDefault(_PriceRecordBatchItem);

var _PriceRecordCollectionPut = require('./model/PriceRecordCollectionPut');

var _PriceRecordCollectionPut2 = _interopRequireDefault(_PriceRecordCollectionPut);

var _PriceRecordCollectionResponse = require('./model/PriceRecordCollectionResponse');

var _PriceRecordCollectionResponse2 = _interopRequireDefault(_PriceRecordCollectionResponse);

var _PriceRecordIdentifiers = require('./model/PriceRecordIdentifiers');

var _PriceRecordIdentifiers2 = _interopRequireDefault(_PriceRecordIdentifiers);

var _PriceRecordPut = require('./model/PriceRecordPut');

var _PriceRecordPut2 = _interopRequireDefault(_PriceRecordPut);

var _PriceRecordResponse = require('./model/PriceRecordResponse');

var _PriceRecordResponse2 = _interopRequireDefault(_PriceRecordResponse);

var _SuccessBatchResponse = require('./model/SuccessBatchResponse');

var _SuccessBatchResponse2 = _interopRequireDefault(_SuccessBatchResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Do not modify!
 *
 * This class is autogenerated by gulp, during the client generation process.
 *
 * Gather up all the exports from the swagger-codegen process for easy inclusion.
 * Supports multiple APIs and Models.
 */
exports.PriceListsApi = _PriceListsApi2.default;
exports.PriceListsAssignmentsApi = _PriceListsAssignmentsApi2.default;
exports.PriceListsRecordsApi = _PriceListsRecordsApi2.default;
exports.AllOfPriceListAssignmentsBatchErrorResponseBatchErrorsData = _AllOfPriceListAssignmentsBatchErrorResponseBatchErrorsData2.default;
exports.AllOfPriceListAssignmentsBatchErrorSetData = _AllOfPriceListAssignmentsBatchErrorSetData2.default;
exports.AllOfPriceListCollectionResponseDataItems = _AllOfPriceListCollectionResponseDataItems2.default;
exports.AllOfPriceListResponseData = _AllOfPriceListResponseData2.default;
exports.AllOfPriceRecordBatchErrorSetData = _AllOfPriceRecordBatchErrorSetData2.default;
exports.AllOfPriceRecordCollectionResponseDataItems = _AllOfPriceRecordCollectionResponseDataItems2.default;
exports.AllOfPriceRecordResponseData = _AllOfPriceRecordResponseData2.default;
exports.AssignmentForGetResponse = _AssignmentForGetResponse2.default;
exports.AssignmentsForGetResponse = _AssignmentsForGetResponse2.default;
exports.AssignmentsForGetResponseData = _AssignmentsForGetResponseData2.default;
exports.AssignmentsForRequest = _AssignmentsForRequest2.default;
exports.BaseError = _BaseError2.default;
exports.Body = _Body2.default;
exports.BulkPricingTier = _BulkPricingTier2.default;
exports.CollectionMeta = _CollectionMeta2.default;
exports.CreateBatchPriceListAssignmentsRequest = _CreateBatchPriceListAssignmentsRequest2.default;
exports.DetailedErrors = _DetailedErrors2.default;
exports.ErrorResponse = _ErrorResponse2.default;
exports.InlineResponse200 = _InlineResponse2.default;
exports.InlineResponse204 = _InlineResponse4.default;
exports.InlineResponse422 = _InlineResponse6.default;
exports.Meta = _Meta2.default;
exports.NoContent = _NoContent2.default;
exports.NotFound = _NotFound2.default;
exports.Pagination = _Pagination2.default;
exports.Pagination1 = _Pagination4.default;
exports.Pagination1Links = _Pagination1Links2.default;
exports.PriceList = _PriceList2.default;
exports.PriceListAssignmentsBatchErrorResponse = _PriceListAssignmentsBatchErrorResponse2.default;
exports.PriceListAssignmentsBatchErrorResponseBatchErrors = _PriceListAssignmentsBatchErrorResponseBatchErrors2.default;
exports.PriceListAssignmentsBatchErrorSet = _PriceListAssignmentsBatchErrorSet2.default;
exports.PriceListAssignmentsIdentifiers = _PriceListAssignmentsIdentifiers2.default;
exports.PriceListBase = _PriceListBase2.default;
exports.PriceListCollectionResponse = _PriceListCollectionResponse2.default;
exports.PriceListPost = _PriceListPost2.default;
exports.PriceListPut = _PriceListPut2.default;
exports.PriceListResponse = _PriceListResponse2.default;
exports.PriceListResponse1 = _PriceListResponse4.default;
exports.PriceRecord = _PriceRecord2.default;
exports.PriceRecordBase = _PriceRecordBase2.default;
exports.PriceRecordBatchErrorResponse = _PriceRecordBatchErrorResponse2.default;
exports.PriceRecordBatchErrorSet = _PriceRecordBatchErrorSet2.default;
exports.PriceRecordBatchItem = _PriceRecordBatchItem2.default;
exports.PriceRecordCollectionPut = _PriceRecordCollectionPut2.default;
exports.PriceRecordCollectionResponse = _PriceRecordCollectionResponse2.default;
exports.PriceRecordIdentifiers = _PriceRecordIdentifiers2.default;
exports.PriceRecordPut = _PriceRecordPut2.default;
exports.PriceRecordResponse = _PriceRecordResponse2.default;
exports.SuccessBatchResponse = _SuccessBatchResponse2.default;