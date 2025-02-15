/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { HeatMapGetOptionalParams, HeatMapGetResponse } from "../models";

/** Interface representing a HeatMap. */
export interface HeatMap {
  /**
   * Gets latest heatmap for Traffic Manager profile.
   * @param resourceGroupName The name of the resource group containing the Traffic Manager endpoint.
   * @param profileName The name of the Traffic Manager profile.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    options?: HeatMapGetOptionalParams
  ): Promise<HeatMapGetResponse>;
}
