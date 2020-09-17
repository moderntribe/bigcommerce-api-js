/**
 * Store Information
 * ### Store Information Reference The Store Information object, and Get Store Information endpoint, manage store profile settings. A Store Information object represents an individual store’s profile and metadata.  ### System Reference The Get a Timestamp endpoint generates a timestamp ping to check the system status.
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import StoreInformation from '../model/StoreInformation';

/**
* StoreInformation service.
* @module api/StoreInformationApi
* @version 2.0
*/
export default class StoreInformationApi {

    /**
    * Constructs a new StoreInformationApi. 
    * @alias module:api/StoreInformationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the storeGet operation.
     * @callback module:api/StoreInformationApi~storeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StoreInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Store Information
     * Returns metadata about a store.
     * @param {module:api/StoreInformationApi~storeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StoreInformation}
     */
    storeGet(accept, contentType, callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['Time', 'application/json', 'Response Schema'];
      let returnType = StoreInformation;

      return this.apiClient.callApi(
        '/store', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}