/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Customers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClient } from "../billingManagementClient";
import {
  Customer,
  CustomersListByBillingProfileNextOptionalParams,
  CustomersListByBillingProfileOptionalParams,
  CustomersListByBillingAccountNextOptionalParams,
  CustomersListByBillingAccountOptionalParams,
  CustomersListByBillingProfileResponse,
  CustomersListByBillingAccountResponse,
  CustomersGetOptionalParams,
  CustomersGetResponse,
  CustomersListByBillingProfileNextResponse,
  CustomersListByBillingAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Customers operations. */
export class CustomersImpl implements Customers {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class Customers class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the customers that are billed to a billing profile. The operation is supported only for
   * billing accounts with agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  public listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: CustomersListByBillingProfileOptionalParams
  ): PagedAsyncIterableIterator<Customer> {
    const iter = this.listByBillingProfilePagingAll(
      billingAccountName,
      billingProfileName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByBillingProfilePagingPage(
          billingAccountName,
          billingProfileName,
          options
        );
      }
    };
  }

  private async *listByBillingProfilePagingPage(
    billingAccountName: string,
    billingProfileName: string,
    options?: CustomersListByBillingProfileOptionalParams
  ): AsyncIterableIterator<Customer[]> {
    let result = await this._listByBillingProfile(
      billingAccountName,
      billingProfileName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByBillingProfileNext(
        billingAccountName,
        billingProfileName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByBillingProfilePagingAll(
    billingAccountName: string,
    billingProfileName: string,
    options?: CustomersListByBillingProfileOptionalParams
  ): AsyncIterableIterator<Customer> {
    for await (const page of this.listByBillingProfilePagingPage(
      billingAccountName,
      billingProfileName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the customers that are billed to a billing account. The operation is supported only for
   * billing accounts with agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  public listByBillingAccount(
    billingAccountName: string,
    options?: CustomersListByBillingAccountOptionalParams
  ): PagedAsyncIterableIterator<Customer> {
    const iter = this.listByBillingAccountPagingAll(
      billingAccountName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByBillingAccountPagingPage(billingAccountName, options);
      }
    };
  }

  private async *listByBillingAccountPagingPage(
    billingAccountName: string,
    options?: CustomersListByBillingAccountOptionalParams
  ): AsyncIterableIterator<Customer[]> {
    let result = await this._listByBillingAccount(billingAccountName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByBillingAccountNext(
        billingAccountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByBillingAccountPagingAll(
    billingAccountName: string,
    options?: CustomersListByBillingAccountOptionalParams
  ): AsyncIterableIterator<Customer> {
    for await (const page of this.listByBillingAccountPagingPage(
      billingAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the customers that are billed to a billing profile. The operation is supported only for
   * billing accounts with agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  private _listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: CustomersListByBillingProfileOptionalParams
  ): Promise<CustomersListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, options },
      listByBillingProfileOperationSpec
    );
  }

  /**
   * Lists the customers that are billed to a billing account. The operation is supported only for
   * billing accounts with agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  private _listByBillingAccount(
    billingAccountName: string,
    options?: CustomersListByBillingAccountOptionalParams
  ): Promise<CustomersListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      listByBillingAccountOperationSpec
    );
  }

  /**
   * Gets a customer by its ID. The operation is supported only for billing accounts with agreement type
   * Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    customerName: string,
    options?: CustomersGetOptionalParams
  ): Promise<CustomersGetResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, customerName, options },
      getOperationSpec
    );
  }

  /**
   * ListByBillingProfileNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingProfile method.
   * @param options The options parameters.
   */
  private _listByBillingProfileNext(
    billingAccountName: string,
    billingProfileName: string,
    nextLink: string,
    options?: CustomersListByBillingProfileNextOptionalParams
  ): Promise<CustomersListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, nextLink, options },
      listByBillingProfileNextOperationSpec
    );
  }

  /**
   * ListByBillingAccountNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingAccount method.
   * @param options The options parameters.
   */
  private _listByBillingAccountNext(
    billingAccountName: string,
    nextLink: string,
    options?: CustomersListByBillingAccountNextOptionalParams
  ): Promise<CustomersListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, nextLink, options },
      listByBillingAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByBillingProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.search,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.search,
    Parameters.filter
  ],
  urlParameters: [Parameters.$host, Parameters.billingAccountName],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Customer
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.customerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.search,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.billingProfileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.search,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
