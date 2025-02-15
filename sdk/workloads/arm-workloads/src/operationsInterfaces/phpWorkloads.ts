/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  PhpWorkloadResource,
  PhpWorkloadsListBySubscriptionOptionalParams,
  PhpWorkloadsListByResourceGroupOptionalParams,
  PhpWorkloadsGetOptionalParams,
  PhpWorkloadsGetResponse,
  PhpWorkloadsCreateOrUpdateOptionalParams,
  PhpWorkloadsCreateOrUpdateResponse,
  PatchResourceRequestBody,
  PhpWorkloadsUpdateOptionalParams,
  PhpWorkloadsUpdateResponse,
  PhpWorkloadsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PhpWorkloads. */
export interface PhpWorkloads {
  /**
   * Lists PHP workload resources for a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: PhpWorkloadsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<PhpWorkloadResource>;
  /**
   * Lists PHP workload resources in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: PhpWorkloadsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<PhpWorkloadResource>;
  /**
   * Gets the PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    phpWorkloadName: string,
    options?: PhpWorkloadsGetOptionalParams
  ): Promise<PhpWorkloadsGetResponse>;
  /**
   * Create or updated PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param phpWorkloadResource Resource create or update request payload
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    phpWorkloadName: string,
    phpWorkloadResource: PhpWorkloadResource,
    options?: PhpWorkloadsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PhpWorkloadsCreateOrUpdateResponse>,
      PhpWorkloadsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or updated PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param phpWorkloadResource Resource create or update request payload
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    phpWorkloadName: string,
    phpWorkloadResource: PhpWorkloadResource,
    options?: PhpWorkloadsCreateOrUpdateOptionalParams
  ): Promise<PhpWorkloadsCreateOrUpdateResponse>;
  /**
   * Update PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param resourcePatchRequestBody Workload resource update data
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    phpWorkloadName: string,
    resourcePatchRequestBody: PatchResourceRequestBody,
    options?: PhpWorkloadsUpdateOptionalParams
  ): Promise<PhpWorkloadsUpdateResponse>;
  /**
   * Delete PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    phpWorkloadName: string,
    options?: PhpWorkloadsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    phpWorkloadName: string,
    options?: PhpWorkloadsDeleteOptionalParams
  ): Promise<void>;
}
