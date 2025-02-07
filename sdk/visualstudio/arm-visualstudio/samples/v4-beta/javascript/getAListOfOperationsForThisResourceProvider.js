/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Gets the details of all operations possible on the Microsoft.VisualStudio resource provider.
 *
 * @summary Gets the details of all operations possible on the Microsoft.VisualStudio resource provider.
 * x-ms-original-file: specification/visualstudio/resource-manager/Microsoft.VisualStudio/preview/2014-04-01-preview/examples/GetOperations.json
 */
const { VisualStudioResourceProviderClient } = require("@azure/arm-visualstudio");
const { DefaultAzureCredential } = require("@azure/identity");

async function getAListOfOperationsForThisResourceProvider() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new VisualStudioResourceProviderClient(credential, subscriptionId);
  const result = await client.operations.list();
  console.log(result);
}

getAListOfOperationsForThisResourceProvider().catch(console.error);
