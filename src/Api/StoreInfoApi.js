/**
 * Store Information APIs
 * The Store Information object, and Get Store Information endpoint, manage store profile settings.
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'Model/StoreInformation', 'Model/TimeResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Model/StoreInformation'), require('../Model/TimeResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.StoreInformationApIs) {
      root.StoreInformationApIs = {};
    }
    root.StoreInformationApIs.StoreInfoApi = factory(root.StoreInformationApIs.ApiClient, root.StoreInformationApIs.StoreInformation, root.StoreInformationApIs.TimeResponse);
  }
}(this, function(ApiClient, StoreInformation, TimeResponse) {
  'use strict';

  /**
   * StoreInfo service.
   * @module Api/StoreInfoApi
   * @version 1.0.0
   */

  /**
   * Constructs a new StoreInfoApi. 
   * @alias module:Api/StoreInfoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get Store Information
     * Returns metadata about a store.
     * @param callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Model/StoreInformation}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/StoreInformation} if callback is null
     */
    this.getStore = function(opts, callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StoreInformation;

      return this.apiClient.callApi(
        '/store', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


    /**
     * Get System Timestamp
     * Returns the system timestamp at the time of the request. The time resource is useful for validating API authentication details and testing client connections.
     * @param callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Model/TimeResponse}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TimeResponse} if callback is null
     */
    this.getTime = function(opts, callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TimeResponse;

      return this.apiClient.callApi(
        '/time', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
