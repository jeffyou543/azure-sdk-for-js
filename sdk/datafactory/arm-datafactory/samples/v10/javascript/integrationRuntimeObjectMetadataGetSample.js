/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DataFactoryManagementClient } = require("@azure/arm-datafactory");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a SSIS integration runtime object metadata by specified path. The return is pageable metadata list.
 *
 * @summary Get a SSIS integration runtime object metadata by specified path. The return is pageable metadata list.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/IntegrationRuntimeObjectMetadata_Get.json
 */
async function integrationRuntimeObjectMetadataGet() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const integrationRuntimeName = "testactivityv2";
  const getMetadataRequest = {
    metadataPath: "ssisFolders",
  };
  const options = {
    getMetadataRequest,
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.integrationRuntimeObjectMetadata.get(
    resourceGroupName,
    factoryName,
    integrationRuntimeName,
    options
  );
  console.log(result);
}

integrationRuntimeObjectMetadataGet().catch(console.error);
