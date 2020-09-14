'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShippingQuotesResource1 = exports.ShippingQuotesResource = exports.ShippingQuotesBase1 = exports.ShippingQuotesBase = exports.ShippingAddressesResource = exports.ShippingAddressesPost = exports.ShippingAddressResource = exports.ShippingAddressBase2 = exports.ShippingAddressBase1 = exports.ShippingAddressBase = exports.ProductsResource1 = exports.ProductsResource = exports.OrdersorderIdshipmentsItems = exports.OrdersShippingAddresses = exports.OrdersCountFull1 = exports.OrdersCountFull = exports.OrderTaxesBase1 = exports.OrderTaxesBase = exports.OrderStatusOrderStatuses = exports.OrderStatusCount = exports.OrderStatusBase1 = exports.OrderStatusBase = exports.OrderShippingAddress1 = exports.OrderShippingAddress = exports.OrderShipmentPost2 = exports.OrderShipmentPost1 = exports.OrderShipmentPost = exports.OrderShipment2 = exports.OrderShipment1 = exports.OrderShipment = exports.OrderPut1 = exports.OrderPut = exports.OrderProducts2 = exports.OrderProducts1 = exports.OrderProducts = exports.OrderProductProductOptions = exports.OrderProductOptions1 = exports.OrderProductOptions = exports.OrderProductAppliedDiscounts1 = exports.OrderProductAppliedDiscounts = exports.OrderProduct = exports.OrderPost1 = exports.OrderPost = exports.OrderMessages = exports.OrderFull2 = exports.OrderFull1 = exports.OrderFull = exports.OrderCustomProduct = exports.OrderCouponsBase1 = exports.OrderCouponsBase = exports.OrderCount1 = exports.OrderCount = exports.OrderBase = exports.InlineResponse400 = exports.InlineResponse200 = exports.FormFields1 = exports.FormFields = exports.Error = exports.CouponsResource1 = exports.CouponsResource = exports.BillingAddressFull = exports.BillingAddressBase1 = exports.BillingAddressBase = exports.AllOfordersCountFullStatuses = exports.AllOfordersCountFull1Statuses = exports.AllOforderFullBillingAddress = exports.AllOforderFull2BillingAddress = exports.AllOforderFull1BillingAddress = exports.AllOforderBaseBillingAddress = exports.OrdersApi = exports.OrderTaxesApi = exports.OrderStatusApi = exports.OrderShippingAddressesQuotesApi = exports.OrderShippingAddressesApi = exports.OrderShipmentsApi = exports.OrderProductsApi = exports.OrderMessagesApi = exports.OrderCouponsApi = undefined;

var _OrderCouponsApi = require('./api/OrderCouponsApi');

var _OrderCouponsApi2 = _interopRequireDefault(_OrderCouponsApi);

var _OrderMessagesApi = require('./api/OrderMessagesApi');

var _OrderMessagesApi2 = _interopRequireDefault(_OrderMessagesApi);

var _OrderProductsApi = require('./api/OrderProductsApi');

var _OrderProductsApi2 = _interopRequireDefault(_OrderProductsApi);

var _OrderShipmentsApi = require('./api/OrderShipmentsApi');

var _OrderShipmentsApi2 = _interopRequireDefault(_OrderShipmentsApi);

var _OrderShippingAddressesApi = require('./api/OrderShippingAddressesApi');

var _OrderShippingAddressesApi2 = _interopRequireDefault(_OrderShippingAddressesApi);

var _OrderShippingAddressesQuotesApi = require('./api/OrderShippingAddressesQuotesApi');

var _OrderShippingAddressesQuotesApi2 = _interopRequireDefault(_OrderShippingAddressesQuotesApi);

var _OrderStatusApi = require('./api/OrderStatusApi');

var _OrderStatusApi2 = _interopRequireDefault(_OrderStatusApi);

var _OrderTaxesApi = require('./api/OrderTaxesApi');

var _OrderTaxesApi2 = _interopRequireDefault(_OrderTaxesApi);

var _OrdersApi = require('./api/OrdersApi');

var _OrdersApi2 = _interopRequireDefault(_OrdersApi);

var _AllOforderBaseBillingAddress = require('./model/AllOforderBaseBillingAddress');

var _AllOforderBaseBillingAddress2 = _interopRequireDefault(_AllOforderBaseBillingAddress);

var _AllOforderFull1BillingAddress = require('./model/AllOforderFull1BillingAddress');

var _AllOforderFull1BillingAddress2 = _interopRequireDefault(_AllOforderFull1BillingAddress);

var _AllOforderFull2BillingAddress = require('./model/AllOforderFull2BillingAddress');

var _AllOforderFull2BillingAddress2 = _interopRequireDefault(_AllOforderFull2BillingAddress);

var _AllOforderFullBillingAddress = require('./model/AllOforderFullBillingAddress');

var _AllOforderFullBillingAddress2 = _interopRequireDefault(_AllOforderFullBillingAddress);

var _AllOfordersCountFull1Statuses = require('./model/AllOfordersCountFull1Statuses');

var _AllOfordersCountFull1Statuses2 = _interopRequireDefault(_AllOfordersCountFull1Statuses);

var _AllOfordersCountFullStatuses = require('./model/AllOfordersCountFullStatuses');

var _AllOfordersCountFullStatuses2 = _interopRequireDefault(_AllOfordersCountFullStatuses);

var _BillingAddressBase = require('./model/BillingAddressBase');

var _BillingAddressBase2 = _interopRequireDefault(_BillingAddressBase);

var _BillingAddressBase3 = require('./model/BillingAddressBase1');

var _BillingAddressBase4 = _interopRequireDefault(_BillingAddressBase3);

var _BillingAddressFull = require('./model/BillingAddressFull');

var _BillingAddressFull2 = _interopRequireDefault(_BillingAddressFull);

var _CouponsResource = require('./model/CouponsResource');

var _CouponsResource2 = _interopRequireDefault(_CouponsResource);

var _CouponsResource3 = require('./model/CouponsResource1');

var _CouponsResource4 = _interopRequireDefault(_CouponsResource3);

var _Error = require('./model/Error');

var _Error2 = _interopRequireDefault(_Error);

var _FormFields = require('./model/FormFields');

var _FormFields2 = _interopRequireDefault(_FormFields);

var _FormFields3 = require('./model/FormFields1');

var _FormFields4 = _interopRequireDefault(_FormFields3);

var _InlineResponse = require('./model/InlineResponse200');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('./model/InlineResponse400');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _OrderBase = require('./model/OrderBase');

var _OrderBase2 = _interopRequireDefault(_OrderBase);

var _OrderCount = require('./model/OrderCount');

var _OrderCount2 = _interopRequireDefault(_OrderCount);

var _OrderCount3 = require('./model/OrderCount1');

var _OrderCount4 = _interopRequireDefault(_OrderCount3);

var _OrderCouponsBase = require('./model/OrderCouponsBase');

var _OrderCouponsBase2 = _interopRequireDefault(_OrderCouponsBase);

var _OrderCouponsBase3 = require('./model/OrderCouponsBase1');

var _OrderCouponsBase4 = _interopRequireDefault(_OrderCouponsBase3);

var _OrderCustomProduct = require('./model/OrderCustomProduct');

var _OrderCustomProduct2 = _interopRequireDefault(_OrderCustomProduct);

var _OrderFull = require('./model/OrderFull');

var _OrderFull2 = _interopRequireDefault(_OrderFull);

var _OrderFull3 = require('./model/OrderFull1');

var _OrderFull4 = _interopRequireDefault(_OrderFull3);

var _OrderFull5 = require('./model/OrderFull2');

var _OrderFull6 = _interopRequireDefault(_OrderFull5);

var _OrderMessages = require('./model/OrderMessages');

var _OrderMessages2 = _interopRequireDefault(_OrderMessages);

var _OrderPost = require('./model/OrderPost');

var _OrderPost2 = _interopRequireDefault(_OrderPost);

var _OrderPost3 = require('./model/OrderPost1');

var _OrderPost4 = _interopRequireDefault(_OrderPost3);

var _OrderProduct = require('./model/OrderProduct');

var _OrderProduct2 = _interopRequireDefault(_OrderProduct);

var _OrderProductAppliedDiscounts = require('./model/OrderProductAppliedDiscounts');

var _OrderProductAppliedDiscounts2 = _interopRequireDefault(_OrderProductAppliedDiscounts);

var _OrderProductAppliedDiscounts3 = require('./model/OrderProductAppliedDiscounts1');

var _OrderProductAppliedDiscounts4 = _interopRequireDefault(_OrderProductAppliedDiscounts3);

var _OrderProductOptions = require('./model/OrderProductOptions');

var _OrderProductOptions2 = _interopRequireDefault(_OrderProductOptions);

var _OrderProductOptions3 = require('./model/OrderProductOptions1');

var _OrderProductOptions4 = _interopRequireDefault(_OrderProductOptions3);

var _OrderProductProductOptions = require('./model/OrderProductProductOptions');

var _OrderProductProductOptions2 = _interopRequireDefault(_OrderProductProductOptions);

var _OrderProducts = require('./model/OrderProducts');

var _OrderProducts2 = _interopRequireDefault(_OrderProducts);

var _OrderProducts3 = require('./model/OrderProducts1');

var _OrderProducts4 = _interopRequireDefault(_OrderProducts3);

var _OrderProducts5 = require('./model/OrderProducts2');

var _OrderProducts6 = _interopRequireDefault(_OrderProducts5);

var _OrderPut = require('./model/OrderPut');

var _OrderPut2 = _interopRequireDefault(_OrderPut);

var _OrderPut3 = require('./model/OrderPut1');

var _OrderPut4 = _interopRequireDefault(_OrderPut3);

var _OrderShipment = require('./model/OrderShipment');

var _OrderShipment2 = _interopRequireDefault(_OrderShipment);

var _OrderShipment3 = require('./model/OrderShipment1');

var _OrderShipment4 = _interopRequireDefault(_OrderShipment3);

var _OrderShipment5 = require('./model/OrderShipment2');

var _OrderShipment6 = _interopRequireDefault(_OrderShipment5);

var _OrderShipmentPost = require('./model/OrderShipmentPost');

var _OrderShipmentPost2 = _interopRequireDefault(_OrderShipmentPost);

var _OrderShipmentPost3 = require('./model/OrderShipmentPost1');

var _OrderShipmentPost4 = _interopRequireDefault(_OrderShipmentPost3);

var _OrderShipmentPost5 = require('./model/OrderShipmentPost2');

var _OrderShipmentPost6 = _interopRequireDefault(_OrderShipmentPost5);

var _OrderShippingAddress = require('./model/OrderShippingAddress');

var _OrderShippingAddress2 = _interopRequireDefault(_OrderShippingAddress);

var _OrderShippingAddress3 = require('./model/OrderShippingAddress1');

var _OrderShippingAddress4 = _interopRequireDefault(_OrderShippingAddress3);

var _OrderStatusBase = require('./model/OrderStatusBase');

var _OrderStatusBase2 = _interopRequireDefault(_OrderStatusBase);

var _OrderStatusBase3 = require('./model/OrderStatusBase1');

var _OrderStatusBase4 = _interopRequireDefault(_OrderStatusBase3);

var _OrderStatusCount = require('./model/OrderStatusCount');

var _OrderStatusCount2 = _interopRequireDefault(_OrderStatusCount);

var _OrderStatusOrderStatuses = require('./model/OrderStatusOrderStatuses');

var _OrderStatusOrderStatuses2 = _interopRequireDefault(_OrderStatusOrderStatuses);

var _OrderTaxesBase = require('./model/OrderTaxesBase');

var _OrderTaxesBase2 = _interopRequireDefault(_OrderTaxesBase);

var _OrderTaxesBase3 = require('./model/OrderTaxesBase1');

var _OrderTaxesBase4 = _interopRequireDefault(_OrderTaxesBase3);

var _OrdersCountFull = require('./model/OrdersCountFull');

var _OrdersCountFull2 = _interopRequireDefault(_OrdersCountFull);

var _OrdersCountFull3 = require('./model/OrdersCountFull1');

var _OrdersCountFull4 = _interopRequireDefault(_OrdersCountFull3);

var _OrdersShippingAddresses = require('./model/OrdersShippingAddresses');

var _OrdersShippingAddresses2 = _interopRequireDefault(_OrdersShippingAddresses);

var _OrdersorderIdshipmentsItems = require('./model/OrdersorderIdshipmentsItems');

var _OrdersorderIdshipmentsItems2 = _interopRequireDefault(_OrdersorderIdshipmentsItems);

var _ProductsResource = require('./model/ProductsResource');

var _ProductsResource2 = _interopRequireDefault(_ProductsResource);

var _ProductsResource3 = require('./model/ProductsResource1');

var _ProductsResource4 = _interopRequireDefault(_ProductsResource3);

var _ShippingAddressBase = require('./model/ShippingAddressBase');

var _ShippingAddressBase2 = _interopRequireDefault(_ShippingAddressBase);

var _ShippingAddressBase3 = require('./model/ShippingAddressBase1');

var _ShippingAddressBase4 = _interopRequireDefault(_ShippingAddressBase3);

var _ShippingAddressBase5 = require('./model/ShippingAddressBase2');

var _ShippingAddressBase6 = _interopRequireDefault(_ShippingAddressBase5);

var _ShippingAddressResource = require('./model/ShippingAddressResource');

var _ShippingAddressResource2 = _interopRequireDefault(_ShippingAddressResource);

var _ShippingAddressesPost = require('./model/ShippingAddressesPost');

var _ShippingAddressesPost2 = _interopRequireDefault(_ShippingAddressesPost);

var _ShippingAddressesResource = require('./model/ShippingAddressesResource');

var _ShippingAddressesResource2 = _interopRequireDefault(_ShippingAddressesResource);

var _ShippingQuotesBase = require('./model/ShippingQuotesBase');

var _ShippingQuotesBase2 = _interopRequireDefault(_ShippingQuotesBase);

var _ShippingQuotesBase3 = require('./model/ShippingQuotesBase1');

var _ShippingQuotesBase4 = _interopRequireDefault(_ShippingQuotesBase3);

var _ShippingQuotesResource = require('./model/ShippingQuotesResource');

var _ShippingQuotesResource2 = _interopRequireDefault(_ShippingQuotesResource);

var _ShippingQuotesResource3 = require('./model/ShippingQuotesResource1');

var _ShippingQuotesResource4 = _interopRequireDefault(_ShippingQuotesResource3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Do not modify!
 *
 * This class is autogenerated by gulp, during the client generation process.
 *
 * Gather up all the exports from the swagger-codegen process for easy inclusion.
 * Supports multiple APIs and Models.
 */
exports.OrderCouponsApi = _OrderCouponsApi2.default;
exports.OrderMessagesApi = _OrderMessagesApi2.default;
exports.OrderProductsApi = _OrderProductsApi2.default;
exports.OrderShipmentsApi = _OrderShipmentsApi2.default;
exports.OrderShippingAddressesApi = _OrderShippingAddressesApi2.default;
exports.OrderShippingAddressesQuotesApi = _OrderShippingAddressesQuotesApi2.default;
exports.OrderStatusApi = _OrderStatusApi2.default;
exports.OrderTaxesApi = _OrderTaxesApi2.default;
exports.OrdersApi = _OrdersApi2.default;
exports.AllOforderBaseBillingAddress = _AllOforderBaseBillingAddress2.default;
exports.AllOforderFull1BillingAddress = _AllOforderFull1BillingAddress2.default;
exports.AllOforderFull2BillingAddress = _AllOforderFull2BillingAddress2.default;
exports.AllOforderFullBillingAddress = _AllOforderFullBillingAddress2.default;
exports.AllOfordersCountFull1Statuses = _AllOfordersCountFull1Statuses2.default;
exports.AllOfordersCountFullStatuses = _AllOfordersCountFullStatuses2.default;
exports.BillingAddressBase = _BillingAddressBase2.default;
exports.BillingAddressBase1 = _BillingAddressBase4.default;
exports.BillingAddressFull = _BillingAddressFull2.default;
exports.CouponsResource = _CouponsResource2.default;
exports.CouponsResource1 = _CouponsResource4.default;
exports.Error = _Error2.default;
exports.FormFields = _FormFields2.default;
exports.FormFields1 = _FormFields4.default;
exports.InlineResponse200 = _InlineResponse2.default;
exports.InlineResponse400 = _InlineResponse4.default;
exports.OrderBase = _OrderBase2.default;
exports.OrderCount = _OrderCount2.default;
exports.OrderCount1 = _OrderCount4.default;
exports.OrderCouponsBase = _OrderCouponsBase2.default;
exports.OrderCouponsBase1 = _OrderCouponsBase4.default;
exports.OrderCustomProduct = _OrderCustomProduct2.default;
exports.OrderFull = _OrderFull2.default;
exports.OrderFull1 = _OrderFull4.default;
exports.OrderFull2 = _OrderFull6.default;
exports.OrderMessages = _OrderMessages2.default;
exports.OrderPost = _OrderPost2.default;
exports.OrderPost1 = _OrderPost4.default;
exports.OrderProduct = _OrderProduct2.default;
exports.OrderProductAppliedDiscounts = _OrderProductAppliedDiscounts2.default;
exports.OrderProductAppliedDiscounts1 = _OrderProductAppliedDiscounts4.default;
exports.OrderProductOptions = _OrderProductOptions2.default;
exports.OrderProductOptions1 = _OrderProductOptions4.default;
exports.OrderProductProductOptions = _OrderProductProductOptions2.default;
exports.OrderProducts = _OrderProducts2.default;
exports.OrderProducts1 = _OrderProducts4.default;
exports.OrderProducts2 = _OrderProducts6.default;
exports.OrderPut = _OrderPut2.default;
exports.OrderPut1 = _OrderPut4.default;
exports.OrderShipment = _OrderShipment2.default;
exports.OrderShipment1 = _OrderShipment4.default;
exports.OrderShipment2 = _OrderShipment6.default;
exports.OrderShipmentPost = _OrderShipmentPost2.default;
exports.OrderShipmentPost1 = _OrderShipmentPost4.default;
exports.OrderShipmentPost2 = _OrderShipmentPost6.default;
exports.OrderShippingAddress = _OrderShippingAddress2.default;
exports.OrderShippingAddress1 = _OrderShippingAddress4.default;
exports.OrderStatusBase = _OrderStatusBase2.default;
exports.OrderStatusBase1 = _OrderStatusBase4.default;
exports.OrderStatusCount = _OrderStatusCount2.default;
exports.OrderStatusOrderStatuses = _OrderStatusOrderStatuses2.default;
exports.OrderTaxesBase = _OrderTaxesBase2.default;
exports.OrderTaxesBase1 = _OrderTaxesBase4.default;
exports.OrdersCountFull = _OrdersCountFull2.default;
exports.OrdersCountFull1 = _OrdersCountFull4.default;
exports.OrdersShippingAddresses = _OrdersShippingAddresses2.default;
exports.OrdersorderIdshipmentsItems = _OrdersorderIdshipmentsItems2.default;
exports.ProductsResource = _ProductsResource2.default;
exports.ProductsResource1 = _ProductsResource4.default;
exports.ShippingAddressBase = _ShippingAddressBase2.default;
exports.ShippingAddressBase1 = _ShippingAddressBase4.default;
exports.ShippingAddressBase2 = _ShippingAddressBase6.default;
exports.ShippingAddressResource = _ShippingAddressResource2.default;
exports.ShippingAddressesPost = _ShippingAddressesPost2.default;
exports.ShippingAddressesResource = _ShippingAddressesResource2.default;
exports.ShippingQuotesBase = _ShippingQuotesBase2.default;
exports.ShippingQuotesBase1 = _ShippingQuotesBase4.default;
exports.ShippingQuotesResource = _ShippingQuotesResource2.default;
exports.ShippingQuotesResource1 = _ShippingQuotesResource4.default;