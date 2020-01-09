(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Api/AbandonedCartApi','Api/CartApi','Api/CatalogApi','Api/ChannelsApi','Api/OrdersApi','Api/OrderTransactionsApi','Api/PriceListsApi','Api/PricingApi','Api/ScriptApi','Api/SitesApi','Api/StoreInfoApi','Api/SubscribersApi','Api/ThemesApi','Api/WidgetApi','Api/WishlistsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./Api/AbandonedCartApi'),require('./Api/CartApi'),require('./Api/CatalogApi'),require('./Api/ChannelsApi'),require('./Api/OrdersApi'),require('./Api/OrderTransactionsApi'),require('./Api/PriceListsApi'),require('./Api/PricingApi'),require('./Api/ScriptApi'),require('./Api/SitesApi'),require('./Api/StoreInfoApi'),require('./Api/SubscribersApi'),require('./Api/ThemesApi'),require('./Api/WidgetApi'),require('./Api/WishlistsApi'));
  }
}(function(AbandonedCartApi,CartApi,CatalogApi,ChannelsApi,OrdersApi,OrderTransactionsApi,PriceListsApi,PricingApi,ScriptApi,SitesApi,StoreInfoApi,SubscribersApi,ThemesApi,WidgetApi,WishlistsApi) {
	'use strict';

	var exports = {AbandonedCartApi,CartApi,CatalogApi,ChannelsApi,OrdersApi,OrderTransactionsApi,PriceListsApi,PricingApi,ScriptApi,SitesApi,StoreInfoApi,SubscribersApi,ThemesApi,WidgetApi,WishlistsApi};
	return exports;
}));
