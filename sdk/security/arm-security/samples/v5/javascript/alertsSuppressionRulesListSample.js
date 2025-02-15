/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List of all the dismiss rules for the given subscription
 *
 * @summary List of all the dismiss rules for the given subscription
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2019-01-01-preview/examples/AlertsSuppressionRules/GetAlertsSuppressionRulesWithAlertType_example.json
 */
async function getSuppressionAlertRuleForSubscriptionFilteredByAlertType() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.alertsSuppressionRules.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getSuppressionAlertRuleForSubscriptionFilteredByAlertType().catch(console.error);

/**
 * This sample demonstrates how to List of all the dismiss rules for the given subscription
 *
 * @summary List of all the dismiss rules for the given subscription
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2019-01-01-preview/examples/AlertsSuppressionRules/GetAlertsSuppressionRules_example.json
 */
async function getSuppressionRulesForSubscription() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.alertsSuppressionRules.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getSuppressionRulesForSubscription().catch(console.error);
