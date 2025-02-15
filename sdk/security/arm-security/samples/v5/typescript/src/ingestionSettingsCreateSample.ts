/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IngestionSetting, SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create setting for ingesting security data and logs to correlate with resources associated with the subscription.
 *
 * @summary Create setting for ingesting security data and logs to correlate with resources associated with the subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2021-01-15-preview/examples/IngestionSettings/CreateIngestionSetting_example.json
 */
async function createAnIngestionSettingForSubscription() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const ingestionSettingName = "default";
  const ingestionSetting: IngestionSetting = {};
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.ingestionSettings.create(
    ingestionSettingName,
    ingestionSetting
  );
  console.log(result);
}

createAnIngestionSettingForSubscription().catch(console.error);
