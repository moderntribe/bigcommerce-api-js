/**
 * Themes
 * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication)  With BigCommerce's V3 REST API Theme endpoints, developers can: * backup themes * restore themes * download themes * activate themes * get status of theme jobs * read theme configurations  ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Themes                                       | modify     | `store_themes_manage`                         |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import Activate1 from '../model/Activate1';
import ErrorResponse from '../model/ErrorResponse';
import JobId from '../model/JobId';
import NoContent from '../model/NoContent';
import WhichThemeToDownload from '../model/WhichThemeToDownload';

/**
* ThemeActions service.
* @module api/ThemeActionsApi
* @version 3.0
*/
export default class ThemeActionsApi {

    /**
    * Constructs a new ThemeActionsApi. 
    * @alias module:api/ThemeActionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the activateStoreTheme operation.
     * @callback module:api/ThemeActionsApi~activateStoreThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NoContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate a Theme
     * Actives a store *Theme*.   This returns a 204 response upon success.
     * @param {module:api/ThemeActionsApi~activateStoreThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NoContent}
     */
    activateStoreTheme(body, accept, contentType, callback) {
      let postBody = body;

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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = NoContent;

      return this.apiClient.callApi(
        '/themes/actions/activate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the downloadTheme operation.
     * @callback module:api/ThemeActionsApi~downloadThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a Theme
     * Downloads a stores *Theme*.
     * @param {module:api/ThemeActionsApi~downloadThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobId}
     */
    downloadTheme(body, uuid, accept, contentType, callback) {
      let postBody = body;

      let pathParams = {
        'uuid': uuid
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = JobId;

      return this.apiClient.callApi(
        '/themes/{uuid}/actions/download', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}