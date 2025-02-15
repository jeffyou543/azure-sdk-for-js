// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/* eslint-disable valid-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable sort-imports */

import { SchemaInfo } from "./internal";
export interface PrimitiveSchemaInfo extends SchemaInfo {
  entityKind:
    | "boolean"
    | "date"
    | "datetime"
    | "double"
    | "duration"
    | "float"
    | "integer"
    | "long"
    | "string"
    | "time";
}
