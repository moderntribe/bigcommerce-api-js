'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateReturnStatusesRequest = exports.UpdateReturnStatusesInner = undefined;
exports.UpdateReturnStatuses = exports.TransactionStoreCredit = exports.TransactionPost = exports.Transaction = exports.TaxExemptItem = exports.StoreCredit = exports.StatusUpdateFull1 = exports.StatusUpdateFull = exports.StatusFull = exports.ReviewedItemsPutInner = exports.ReviewedItemsPut = exports.ReviewedItemsBaseInner = exports.ReviewedItemsBase = exports.ReturnItem = exports.ReturnFull = exports.RefundRequestPost2 = exports.RefundRequestPost1 = exports.RefundRequestPost = exports.RefundQuotePost1 = exports.RefundQuotePost = exports.RefundQuoteFull1 = exports.RefundQuoteFull = exports.RefundPayment = exports.RefundMethod = exports.RefundItem = exports.Refund1 = exports.Refund = exports.ReceivedItemsPutInner = exports.ReceivedItemsPut = exports.ReceivedItemsBaseInner = exports.ReceivedItemsBase = exports.Reason = exports.QuantityBoundItem = exports.Problem = exports.PreferredOutcome = exports.PostRefundsRequest = exports.PostRefundQuotesRequest = exports.PaymentRequest = exports.PaymentOption = exports.PaginationLinks = exports.PaginationFull1 = exports.PaginationFull = exports.Pagination1 = exports.Pagination = exports.Offline1 = exports.Offline = exports.NotFound = exports.NoContent = exports.MetaRefund = exports.MetaEmptyFull = exports.MetaCollectionFull1 = exports.MetaCollectionFull = exports.Meta1 = exports.Meta = exports.LinksFull1 = exports.LinksFull = exports.ItemsRefund = exports.ItemReferenceId = exports.InlineResponse503 = exports.InlineResponse2011 = exports.InlineResponse201 = exports.InlineResponse2001 = exports.InlineResponse200 = exports.GiftCertificate = exports.GetReturnsSettingsReasons = exports.GetReturnsSettingsPreferredOutcomes = exports.GetReturnsSettings = exports.GetReturnableItemsInner = exports.GetReturnableItems = exports.FailedQuoteError1 = exports.FailedQuoteError = exports.ErrorResponse1 = exports.ErrorResponse = exports.ErrorDetailedFull = exports.ErrorBase = exports.DetailedErrors = exports.Custom1 = exports.Custom = exports.CreditCard = exports.CreateReturnReviewState = exports.CreateReturnRequestReferenceId = exports.CreateReturnRequestItems = exports.CreateReturnRequestItem = exports.CreateReturnRequest = exports.CreateReturnReceivedState = exports.CreateReturnReason = exports.CreateReturnPreferredOutcome = exports.CreateReturnItems = exports.CreateReturnCustomer = exports.CreateReturn = exports.CollectionMeta = exports.CVVResult = exports.BatchOperationMeta = exports.AmountBoundItem = exports.Amount = exports.AllOfinlineResponse200DataItems = exports.AVSResults = exports.AVSResult = exports.TransactionsApi = exports.OrderRefundsApi = undefined;

var _OrderRefundsApi = require('./api/OrderRefundsApi');

var _OrderRefundsApi2 = _interopRequireDefault(_OrderRefundsApi);

var _TransactionsApi = require('./api/TransactionsApi');

var _TransactionsApi2 = _interopRequireDefault(_TransactionsApi);

var _AVSResult = require('./model/AVSResult');

var _AVSResult2 = _interopRequireDefault(_AVSResult);

var _AVSResults = require('./model/AVSResults');

var _AVSResults2 = _interopRequireDefault(_AVSResults);

var _AllOfinlineResponse200DataItems = require('./model/AllOfinlineResponse200DataItems');

var _AllOfinlineResponse200DataItems2 = _interopRequireDefault(_AllOfinlineResponse200DataItems);

var _Amount = require('./model/Amount');

var _Amount2 = _interopRequireDefault(_Amount);

var _AmountBoundItem = require('./model/AmountBoundItem');

var _AmountBoundItem2 = _interopRequireDefault(_AmountBoundItem);

var _BatchOperationMeta = require('./model/BatchOperationMeta');

var _BatchOperationMeta2 = _interopRequireDefault(_BatchOperationMeta);

var _CVVResult = require('./model/CVVResult');

var _CVVResult2 = _interopRequireDefault(_CVVResult);

var _CollectionMeta = require('./model/CollectionMeta');

var _CollectionMeta2 = _interopRequireDefault(_CollectionMeta);

var _CreateReturn = require('./model/CreateReturn');

var _CreateReturn2 = _interopRequireDefault(_CreateReturn);

var _CreateReturnCustomer = require('./model/CreateReturnCustomer');

var _CreateReturnCustomer2 = _interopRequireDefault(_CreateReturnCustomer);

var _CreateReturnItems = require('./model/CreateReturnItems');

var _CreateReturnItems2 = _interopRequireDefault(_CreateReturnItems);

var _CreateReturnPreferredOutcome = require('./model/CreateReturnPreferredOutcome');

var _CreateReturnPreferredOutcome2 = _interopRequireDefault(_CreateReturnPreferredOutcome);

var _CreateReturnReason = require('./model/CreateReturnReason');

var _CreateReturnReason2 = _interopRequireDefault(_CreateReturnReason);

var _CreateReturnReceivedState = require('./model/CreateReturnReceivedState');

var _CreateReturnReceivedState2 = _interopRequireDefault(_CreateReturnReceivedState);

var _CreateReturnRequest = require('./model/CreateReturnRequest');

var _CreateReturnRequest2 = _interopRequireDefault(_CreateReturnRequest);

var _CreateReturnRequestItem = require('./model/CreateReturnRequestItem');

var _CreateReturnRequestItem2 = _interopRequireDefault(_CreateReturnRequestItem);

var _CreateReturnRequestItems = require('./model/CreateReturnRequestItems');

var _CreateReturnRequestItems2 = _interopRequireDefault(_CreateReturnRequestItems);

var _CreateReturnRequestReferenceId = require('./model/CreateReturnRequestReferenceId');

var _CreateReturnRequestReferenceId2 = _interopRequireDefault(_CreateReturnRequestReferenceId);

var _CreateReturnReviewState = require('./model/CreateReturnReviewState');

var _CreateReturnReviewState2 = _interopRequireDefault(_CreateReturnReviewState);

var _CreditCard = require('./model/CreditCard');

var _CreditCard2 = _interopRequireDefault(_CreditCard);

var _Custom = require('./model/Custom');

var _Custom2 = _interopRequireDefault(_Custom);

var _Custom3 = require('./model/Custom1');

var _Custom4 = _interopRequireDefault(_Custom3);

var _DetailedErrors = require('./model/DetailedErrors');

var _DetailedErrors2 = _interopRequireDefault(_DetailedErrors);

var _ErrorBase = require('./model/ErrorBase');

var _ErrorBase2 = _interopRequireDefault(_ErrorBase);

var _ErrorDetailedFull = require('./model/ErrorDetailedFull');

var _ErrorDetailedFull2 = _interopRequireDefault(_ErrorDetailedFull);

var _ErrorResponse = require('./model/ErrorResponse');

var _ErrorResponse2 = _interopRequireDefault(_ErrorResponse);

var _ErrorResponse3 = require('./model/ErrorResponse1');

var _ErrorResponse4 = _interopRequireDefault(_ErrorResponse3);

var _FailedQuoteError = require('./model/FailedQuoteError');

var _FailedQuoteError2 = _interopRequireDefault(_FailedQuoteError);

var _FailedQuoteError3 = require('./model/FailedQuoteError1');

var _FailedQuoteError4 = _interopRequireDefault(_FailedQuoteError3);

var _GetReturnableItems = require('./model/GetReturnableItems');

var _GetReturnableItems2 = _interopRequireDefault(_GetReturnableItems);

var _GetReturnableItemsInner = require('./model/GetReturnableItemsInner');

var _GetReturnableItemsInner2 = _interopRequireDefault(_GetReturnableItemsInner);

var _GetReturnsSettings = require('./model/GetReturnsSettings');

var _GetReturnsSettings2 = _interopRequireDefault(_GetReturnsSettings);

var _GetReturnsSettingsPreferredOutcomes = require('./model/GetReturnsSettingsPreferredOutcomes');

var _GetReturnsSettingsPreferredOutcomes2 = _interopRequireDefault(_GetReturnsSettingsPreferredOutcomes);

var _GetReturnsSettingsReasons = require('./model/GetReturnsSettingsReasons');

var _GetReturnsSettingsReasons2 = _interopRequireDefault(_GetReturnsSettingsReasons);

var _GiftCertificate = require('./model/GiftCertificate');

var _GiftCertificate2 = _interopRequireDefault(_GiftCertificate);

var _InlineResponse = require('./model/InlineResponse200');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('./model/InlineResponse2001');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('./model/InlineResponse201');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

var _InlineResponse7 = require('./model/InlineResponse2011');

var _InlineResponse8 = _interopRequireDefault(_InlineResponse7);

var _InlineResponse9 = require('./model/InlineResponse503');

var _InlineResponse10 = _interopRequireDefault(_InlineResponse9);

var _ItemReferenceId = require('./model/ItemReferenceId');

var _ItemReferenceId2 = _interopRequireDefault(_ItemReferenceId);

var _ItemsRefund = require('./model/ItemsRefund');

var _ItemsRefund2 = _interopRequireDefault(_ItemsRefund);

var _LinksFull = require('./model/LinksFull');

var _LinksFull2 = _interopRequireDefault(_LinksFull);

var _LinksFull3 = require('./model/LinksFull1');

var _LinksFull4 = _interopRequireDefault(_LinksFull3);

var _Meta = require('./model/Meta');

var _Meta2 = _interopRequireDefault(_Meta);

var _Meta3 = require('./model/Meta1');

var _Meta4 = _interopRequireDefault(_Meta3);

var _MetaCollectionFull = require('./model/MetaCollectionFull');

var _MetaCollectionFull2 = _interopRequireDefault(_MetaCollectionFull);

var _MetaCollectionFull3 = require('./model/MetaCollectionFull1');

var _MetaCollectionFull4 = _interopRequireDefault(_MetaCollectionFull3);

var _MetaEmptyFull = require('./model/MetaEmptyFull');

var _MetaEmptyFull2 = _interopRequireDefault(_MetaEmptyFull);

var _MetaRefund = require('./model/MetaRefund');

var _MetaRefund2 = _interopRequireDefault(_MetaRefund);

var _NoContent = require('./model/NoContent');

var _NoContent2 = _interopRequireDefault(_NoContent);

var _NotFound = require('./model/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Offline = require('./model/Offline');

var _Offline2 = _interopRequireDefault(_Offline);

var _Offline3 = require('./model/Offline1');

var _Offline4 = _interopRequireDefault(_Offline3);

var _Pagination = require('./model/Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Pagination3 = require('./model/Pagination1');

var _Pagination4 = _interopRequireDefault(_Pagination3);

var _PaginationFull = require('./model/PaginationFull');

var _PaginationFull2 = _interopRequireDefault(_PaginationFull);

var _PaginationFull3 = require('./model/PaginationFull1');

var _PaginationFull4 = _interopRequireDefault(_PaginationFull3);

var _PaginationLinks = require('./model/PaginationLinks');

var _PaginationLinks2 = _interopRequireDefault(_PaginationLinks);

var _PaymentOption = require('./model/PaymentOption');

var _PaymentOption2 = _interopRequireDefault(_PaymentOption);

var _PaymentRequest = require('./model/PaymentRequest');

var _PaymentRequest2 = _interopRequireDefault(_PaymentRequest);

var _PostRefundQuotesRequest = require('./model/PostRefundQuotesRequest');

var _PostRefundQuotesRequest2 = _interopRequireDefault(_PostRefundQuotesRequest);

var _PostRefundsRequest = require('./model/PostRefundsRequest');

var _PostRefundsRequest2 = _interopRequireDefault(_PostRefundsRequest);

var _PreferredOutcome = require('./model/PreferredOutcome');

var _PreferredOutcome2 = _interopRequireDefault(_PreferredOutcome);

var _Problem = require('./model/Problem');

var _Problem2 = _interopRequireDefault(_Problem);

var _QuantityBoundItem = require('./model/QuantityBoundItem');

var _QuantityBoundItem2 = _interopRequireDefault(_QuantityBoundItem);

var _Reason = require('./model/Reason');

var _Reason2 = _interopRequireDefault(_Reason);

var _ReceivedItemsBase = require('./model/ReceivedItemsBase');

var _ReceivedItemsBase2 = _interopRequireDefault(_ReceivedItemsBase);

var _ReceivedItemsBaseInner = require('./model/ReceivedItemsBaseInner');

var _ReceivedItemsBaseInner2 = _interopRequireDefault(_ReceivedItemsBaseInner);

var _ReceivedItemsPut = require('./model/ReceivedItemsPut');

var _ReceivedItemsPut2 = _interopRequireDefault(_ReceivedItemsPut);

var _ReceivedItemsPutInner = require('./model/ReceivedItemsPutInner');

var _ReceivedItemsPutInner2 = _interopRequireDefault(_ReceivedItemsPutInner);

var _Refund = require('./model/Refund');

var _Refund2 = _interopRequireDefault(_Refund);

var _Refund3 = require('./model/Refund1');

var _Refund4 = _interopRequireDefault(_Refund3);

var _RefundItem = require('./model/RefundItem');

var _RefundItem2 = _interopRequireDefault(_RefundItem);

var _RefundMethod = require('./model/RefundMethod');

var _RefundMethod2 = _interopRequireDefault(_RefundMethod);

var _RefundPayment = require('./model/RefundPayment');

var _RefundPayment2 = _interopRequireDefault(_RefundPayment);

var _RefundQuoteFull = require('./model/RefundQuoteFull');

var _RefundQuoteFull2 = _interopRequireDefault(_RefundQuoteFull);

var _RefundQuoteFull3 = require('./model/RefundQuoteFull1');

var _RefundQuoteFull4 = _interopRequireDefault(_RefundQuoteFull3);

var _RefundQuotePost = require('./model/RefundQuotePost');

var _RefundQuotePost2 = _interopRequireDefault(_RefundQuotePost);

var _RefundQuotePost3 = require('./model/RefundQuotePost1');

var _RefundQuotePost4 = _interopRequireDefault(_RefundQuotePost3);

var _RefundRequestPost = require('./model/RefundRequestPost');

var _RefundRequestPost2 = _interopRequireDefault(_RefundRequestPost);

var _RefundRequestPost3 = require('./model/RefundRequestPost1');

var _RefundRequestPost4 = _interopRequireDefault(_RefundRequestPost3);

var _RefundRequestPost5 = require('./model/RefundRequestPost2');

var _RefundRequestPost6 = _interopRequireDefault(_RefundRequestPost5);

var _ReturnFull = require('./model/ReturnFull');

var _ReturnFull2 = _interopRequireDefault(_ReturnFull);

var _ReturnItem = require('./model/ReturnItem');

var _ReturnItem2 = _interopRequireDefault(_ReturnItem);

var _ReviewedItemsBase = require('./model/ReviewedItemsBase');

var _ReviewedItemsBase2 = _interopRequireDefault(_ReviewedItemsBase);

var _ReviewedItemsBaseInner = require('./model/ReviewedItemsBaseInner');

var _ReviewedItemsBaseInner2 = _interopRequireDefault(_ReviewedItemsBaseInner);

var _ReviewedItemsPut = require('./model/ReviewedItemsPut');

var _ReviewedItemsPut2 = _interopRequireDefault(_ReviewedItemsPut);

var _ReviewedItemsPutInner = require('./model/ReviewedItemsPutInner');

var _ReviewedItemsPutInner2 = _interopRequireDefault(_ReviewedItemsPutInner);

var _StatusFull = require('./model/StatusFull');

var _StatusFull2 = _interopRequireDefault(_StatusFull);

var _StatusUpdateFull = require('./model/StatusUpdateFull');

var _StatusUpdateFull2 = _interopRequireDefault(_StatusUpdateFull);

var _StatusUpdateFull3 = require('./model/StatusUpdateFull1');

var _StatusUpdateFull4 = _interopRequireDefault(_StatusUpdateFull3);

var _StoreCredit = require('./model/StoreCredit');

var _StoreCredit2 = _interopRequireDefault(_StoreCredit);

var _TaxExemptItem = require('./model/TaxExemptItem');

var _TaxExemptItem2 = _interopRequireDefault(_TaxExemptItem);

var _Transaction = require('./model/Transaction');

var _Transaction2 = _interopRequireDefault(_Transaction);

var _TransactionPost = require('./model/TransactionPost');

var _TransactionPost2 = _interopRequireDefault(_TransactionPost);

var _TransactionStoreCredit = require('./model/TransactionStoreCredit');

var _TransactionStoreCredit2 = _interopRequireDefault(_TransactionStoreCredit);

var _UpdateReturnStatuses = require('./model/UpdateReturnStatuses');

var _UpdateReturnStatuses2 = _interopRequireDefault(_UpdateReturnStatuses);

var _UpdateReturnStatusesInner = require('./model/UpdateReturnStatusesInner');

var _UpdateReturnStatusesInner2 = _interopRequireDefault(_UpdateReturnStatusesInner);

var _UpdateReturnStatusesRequest = require('./model/UpdateReturnStatusesRequest');

var _UpdateReturnStatusesRequest2 = _interopRequireDefault(_UpdateReturnStatusesRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Do not modify!
 *
 * This class is autogenerated by gulp, during the client generation process.
 *
 * Gather up all the exports from the swagger-codegen process for easy inclusion.
 * Supports multiple APIs and Models.
 */
exports.OrderRefundsApi = _OrderRefundsApi2.default;
exports.TransactionsApi = _TransactionsApi2.default;
exports.AVSResult = _AVSResult2.default;
exports.AVSResults = _AVSResults2.default;
exports.AllOfinlineResponse200DataItems = _AllOfinlineResponse200DataItems2.default;
exports.Amount = _Amount2.default;
exports.AmountBoundItem = _AmountBoundItem2.default;
exports.BatchOperationMeta = _BatchOperationMeta2.default;
exports.CVVResult = _CVVResult2.default;
exports.CollectionMeta = _CollectionMeta2.default;
exports.CreateReturn = _CreateReturn2.default;
exports.CreateReturnCustomer = _CreateReturnCustomer2.default;
exports.CreateReturnItems = _CreateReturnItems2.default;
exports.CreateReturnPreferredOutcome = _CreateReturnPreferredOutcome2.default;
exports.CreateReturnReason = _CreateReturnReason2.default;
exports.CreateReturnReceivedState = _CreateReturnReceivedState2.default;
exports.CreateReturnRequest = _CreateReturnRequest2.default;
exports.CreateReturnRequestItem = _CreateReturnRequestItem2.default;
exports.CreateReturnRequestItems = _CreateReturnRequestItems2.default;
exports.CreateReturnRequestReferenceId = _CreateReturnRequestReferenceId2.default;
exports.CreateReturnReviewState = _CreateReturnReviewState2.default;
exports.CreditCard = _CreditCard2.default;
exports.Custom = _Custom2.default;
exports.Custom1 = _Custom4.default;
exports.DetailedErrors = _DetailedErrors2.default;
exports.ErrorBase = _ErrorBase2.default;
exports.ErrorDetailedFull = _ErrorDetailedFull2.default;
exports.ErrorResponse = _ErrorResponse2.default;
exports.ErrorResponse1 = _ErrorResponse4.default;
exports.FailedQuoteError = _FailedQuoteError2.default;
exports.FailedQuoteError1 = _FailedQuoteError4.default;
exports.GetReturnableItems = _GetReturnableItems2.default;
exports.GetReturnableItemsInner = _GetReturnableItemsInner2.default;
exports.GetReturnsSettings = _GetReturnsSettings2.default;
exports.GetReturnsSettingsPreferredOutcomes = _GetReturnsSettingsPreferredOutcomes2.default;
exports.GetReturnsSettingsReasons = _GetReturnsSettingsReasons2.default;
exports.GiftCertificate = _GiftCertificate2.default;
exports.InlineResponse200 = _InlineResponse2.default;
exports.InlineResponse2001 = _InlineResponse4.default;
exports.InlineResponse201 = _InlineResponse6.default;
exports.InlineResponse2011 = _InlineResponse8.default;
exports.InlineResponse503 = _InlineResponse10.default;
exports.ItemReferenceId = _ItemReferenceId2.default;
exports.ItemsRefund = _ItemsRefund2.default;
exports.LinksFull = _LinksFull2.default;
exports.LinksFull1 = _LinksFull4.default;
exports.Meta = _Meta2.default;
exports.Meta1 = _Meta4.default;
exports.MetaCollectionFull = _MetaCollectionFull2.default;
exports.MetaCollectionFull1 = _MetaCollectionFull4.default;
exports.MetaEmptyFull = _MetaEmptyFull2.default;
exports.MetaRefund = _MetaRefund2.default;
exports.NoContent = _NoContent2.default;
exports.NotFound = _NotFound2.default;
exports.Offline = _Offline2.default;
exports.Offline1 = _Offline4.default;
exports.Pagination = _Pagination2.default;
exports.Pagination1 = _Pagination4.default;
exports.PaginationFull = _PaginationFull2.default;
exports.PaginationFull1 = _PaginationFull4.default;
exports.PaginationLinks = _PaginationLinks2.default;
exports.PaymentOption = _PaymentOption2.default;
exports.PaymentRequest = _PaymentRequest2.default;
exports.PostRefundQuotesRequest = _PostRefundQuotesRequest2.default;
exports.PostRefundsRequest = _PostRefundsRequest2.default;
exports.PreferredOutcome = _PreferredOutcome2.default;
exports.Problem = _Problem2.default;
exports.QuantityBoundItem = _QuantityBoundItem2.default;
exports.Reason = _Reason2.default;
exports.ReceivedItemsBase = _ReceivedItemsBase2.default;
exports.ReceivedItemsBaseInner = _ReceivedItemsBaseInner2.default;
exports.ReceivedItemsPut = _ReceivedItemsPut2.default;
exports.ReceivedItemsPutInner = _ReceivedItemsPutInner2.default;
exports.Refund = _Refund2.default;
exports.Refund1 = _Refund4.default;
exports.RefundItem = _RefundItem2.default;
exports.RefundMethod = _RefundMethod2.default;
exports.RefundPayment = _RefundPayment2.default;
exports.RefundQuoteFull = _RefundQuoteFull2.default;
exports.RefundQuoteFull1 = _RefundQuoteFull4.default;
exports.RefundQuotePost = _RefundQuotePost2.default;
exports.RefundQuotePost1 = _RefundQuotePost4.default;
exports.RefundRequestPost = _RefundRequestPost2.default;
exports.RefundRequestPost1 = _RefundRequestPost4.default;
exports.RefundRequestPost2 = _RefundRequestPost6.default;
exports.ReturnFull = _ReturnFull2.default;
exports.ReturnItem = _ReturnItem2.default;
exports.ReviewedItemsBase = _ReviewedItemsBase2.default;
exports.ReviewedItemsBaseInner = _ReviewedItemsBaseInner2.default;
exports.ReviewedItemsPut = _ReviewedItemsPut2.default;
exports.ReviewedItemsPutInner = _ReviewedItemsPutInner2.default;
exports.StatusFull = _StatusFull2.default;
exports.StatusUpdateFull = _StatusUpdateFull2.default;
exports.StatusUpdateFull1 = _StatusUpdateFull4.default;
exports.StoreCredit = _StoreCredit2.default;
exports.TaxExemptItem = _TaxExemptItem2.default;
exports.Transaction = _Transaction2.default;
exports.TransactionPost = _TransactionPost2.default;
exports.TransactionStoreCredit = _TransactionStoreCredit2.default;
exports.UpdateReturnStatuses = _UpdateReturnStatuses2.default;
exports.UpdateReturnStatusesInner = _UpdateReturnStatusesInner2.default;
exports.UpdateReturnStatusesRequest = _UpdateReturnStatusesRequest2.default;