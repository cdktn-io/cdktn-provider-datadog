/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IntegrationAwsAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Tags to apply to all metrics in the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#account_tags IntegrationAwsAccount#account_tags}
  */
  readonly accountTags?: string[];
  /**
  * Your AWS Account ID without dashes. Invalid aws_account_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#aws_account_id IntegrationAwsAccount#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * AWS Account partition. Valid values are `aws`, `aws-cn`, `aws-us-gov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#aws_partition IntegrationAwsAccount#aws_partition}
  */
  readonly awsPartition: string;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#auth_config IntegrationAwsAccount#auth_config}
  */
  readonly authConfig?: IntegrationAwsAccountAuthConfig;
  /**
  * aws_regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#aws_regions IntegrationAwsAccount#aws_regions}
  */
  readonly awsRegions?: IntegrationAwsAccountAwsRegions;
  /**
  * logs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#logs_config IntegrationAwsAccount#logs_config}
  */
  readonly logsConfig?: IntegrationAwsAccountLogsConfig;
  /**
  * metrics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#metrics_config IntegrationAwsAccount#metrics_config}
  */
  readonly metricsConfig?: IntegrationAwsAccountMetricsConfig;
  /**
  * resources_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#resources_config IntegrationAwsAccount#resources_config}
  */
  readonly resourcesConfig?: IntegrationAwsAccountResourcesConfig;
  /**
  * traces_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#traces_config IntegrationAwsAccount#traces_config}
  */
  readonly tracesConfig?: IntegrationAwsAccountTracesConfig;
}
export interface IntegrationAwsAccountAuthConfigAwsAuthConfigKeys {
  /**
  * AWS Access Key ID. Invalid access_key_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#access_key_id IntegrationAwsAccount#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * AWS Secret Access Key. This value is write-only; changes made outside of Terraform will not be drift-detected. Secret_access_key must be non-empty and not contain whitespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#secret_access_key IntegrationAwsAccount#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function integrationAwsAccountAuthConfigAwsAuthConfigKeysToTerraform(struct?: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktn.stringToTerraform(struct!.secretAccessKey),
  }
}


export function integrationAwsAccountAuthConfigAwsAuthConfigKeysToHclTerraform(struct?: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_key_id: {
      value: cdktn.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountAuthConfigAwsAuthConfigKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface IntegrationAwsAccountAuthConfigAwsAuthConfigRole {
  /**
  * AWS IAM External ID for associated role. If omitted, one will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#external_id IntegrationAwsAccount#external_id}
  */
  readonly externalId?: string;
  /**
  * AWS IAM Role name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#role_name IntegrationAwsAccount#role_name}
  */
  readonly roleName?: string;
}

export function integrationAwsAccountAuthConfigAwsAuthConfigRoleToTerraform(struct?: IntegrationAwsAccountAuthConfigAwsAuthConfigRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    external_id: cdktn.stringToTerraform(struct!.externalId),
    role_name: cdktn.stringToTerraform(struct!.roleName),
  }
}


export function integrationAwsAccountAuthConfigAwsAuthConfigRoleToHclTerraform(struct?: IntegrationAwsAccountAuthConfigAwsAuthConfigRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktn.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountAuthConfigAwsAuthConfigRole | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountAuthConfigAwsAuthConfigRole | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._roleName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._roleName = value.roleName;
    }
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}
export interface IntegrationAwsAccountAuthConfig {
  /**
  * aws_auth_config_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#aws_auth_config_keys IntegrationAwsAccount#aws_auth_config_keys}
  */
  readonly awsAuthConfigKeys?: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys;
  /**
  * aws_auth_config_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#aws_auth_config_role IntegrationAwsAccount#aws_auth_config_role}
  */
  readonly awsAuthConfigRole?: IntegrationAwsAccountAuthConfigAwsAuthConfigRole;
}

export function integrationAwsAccountAuthConfigToTerraform(struct?: IntegrationAwsAccountAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_auth_config_keys: integrationAwsAccountAuthConfigAwsAuthConfigKeysToTerraform(struct!.awsAuthConfigKeys),
    aws_auth_config_role: integrationAwsAccountAuthConfigAwsAuthConfigRoleToTerraform(struct!.awsAuthConfigRole),
  }
}


export function integrationAwsAccountAuthConfigToHclTerraform(struct?: IntegrationAwsAccountAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_auth_config_keys: {
      value: integrationAwsAccountAuthConfigAwsAuthConfigKeysToHclTerraform(struct!.awsAuthConfigKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsAccountAuthConfigAwsAuthConfigKeys",
    },
    aws_auth_config_role: {
      value: integrationAwsAccountAuthConfigAwsAuthConfigRoleToHclTerraform(struct!.awsAuthConfigRole),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsAccountAuthConfigAwsAuthConfigRole",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountAuthConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAuthConfigKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAuthConfigKeys = this._awsAuthConfigKeys?.internalValue;
    }
    if (this._awsAuthConfigRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAuthConfigRole = this._awsAuthConfigRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountAuthConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAuthConfigKeys.internalValue = undefined;
      this._awsAuthConfigRole.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAuthConfigKeys.internalValue = value.awsAuthConfigKeys;
      this._awsAuthConfigRole.internalValue = value.awsAuthConfigRole;
    }
  }

  // aws_auth_config_keys - computed: false, optional: true, required: false
  private _awsAuthConfigKeys = new IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference(this, "aws_auth_config_keys");
  public get awsAuthConfigKeys() {
    return this._awsAuthConfigKeys;
  }
  public putAwsAuthConfigKeys(value: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys) {
    this._awsAuthConfigKeys.internalValue = value;
  }
  public resetAwsAuthConfigKeys() {
    this._awsAuthConfigKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAuthConfigKeysInput() {
    return this._awsAuthConfigKeys.internalValue;
  }

  // aws_auth_config_role - computed: false, optional: true, required: false
  private _awsAuthConfigRole = new IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference(this, "aws_auth_config_role");
  public get awsAuthConfigRole() {
    return this._awsAuthConfigRole;
  }
  public putAwsAuthConfigRole(value: IntegrationAwsAccountAuthConfigAwsAuthConfigRole) {
    this._awsAuthConfigRole.internalValue = value;
  }
  public resetAwsAuthConfigRole() {
    this._awsAuthConfigRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAuthConfigRoleInput() {
    return this._awsAuthConfigRole.internalValue;
  }
}
export interface IntegrationAwsAccountAwsRegions {
  /**
  * Include all regions. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}
  */
  readonly includeAll?: boolean | cdktn.IResolvable;
  /**
  * Include only these regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}
  */
  readonly includeOnly?: string[];
}

export function integrationAwsAccountAwsRegionsToTerraform(struct?: IntegrationAwsAccountAwsRegions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_all: cdktn.booleanToTerraform(struct!.includeAll),
    include_only: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeOnly),
  }
}


export function integrationAwsAccountAwsRegionsToHclTerraform(struct?: IntegrationAwsAccountAwsRegions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_all: {
      value: cdktn.booleanToHclTerraform(struct!.includeAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_only: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeOnly),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountAwsRegionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountAwsRegions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAll = this._includeAll;
    }
    if (this._includeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOnly = this._includeOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountAwsRegions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAll = undefined;
      this._includeOnly = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAll = value.includeAll;
      this._includeOnly = value.includeOnly;
    }
  }

  // include_all - computed: true, optional: true, required: false
  private _includeAll?: boolean | cdktn.IResolvable; 
  public get includeAll() {
    return this.getBooleanAttribute('include_all');
  }
  public set includeAll(value: boolean | cdktn.IResolvable) {
    this._includeAll = value;
  }
  public resetIncludeAll() {
    this._includeAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllInput() {
    return this._includeAll;
  }

  // include_only - computed: false, optional: true, required: false
  private _includeOnly?: string[]; 
  public get includeOnly() {
    return this.getListAttribute('include_only');
  }
  public set includeOnly(value: string[]) {
    this._includeOnly = value;
  }
  public resetIncludeOnly() {
    this._includeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOnlyInput() {
    return this._includeOnly;
  }
}
export interface IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFilters {
  /**
  * The AWS service for which the tag filters defined in `tags` will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#source IntegrationAwsAccount#source}
  */
  readonly source: string;
  /**
  * The AWS resource tags to filter on for the service specified by `source`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#tags IntegrationAwsAccount#tags}
  */
  readonly tags: string[];
}

export function integrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFiltersToTerraform(struct?: IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
  }
}


export function integrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFiltersToHclTerraform(struct?: IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._tags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._tags = value.tags;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFiltersList extends cdktn.ComplexList {
  public internalValue? : IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFiltersOutputReference {
    return new IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfig {
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#tag_filters IntegrationAwsAccount#tag_filters}
  */
  readonly tagFilters?: IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFilters[] | cdktn.IResolvable;
}

export function integrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigToTerraform(struct?: IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tag_filters: cdktn.listMapper(integrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFiltersToTerraform, true)(struct!.tagFilters),
  }
}


export function integrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigToHclTerraform(struct?: IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tag_filters: {
      value: cdktn.listMapperHcl(integrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFiltersToHclTerraform, true)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagFilters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagFilters.internalValue = value.tagFilters;
    }
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigTagFilters[] | cdktn.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }
}
export interface IntegrationAwsAccountLogsConfigLambdaForwarder {
  /**
  * List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#lambdas IntegrationAwsAccount#lambdas}
  */
  readonly lambdas?: string[];
  /**
  * List of service IDs set to enable automatic log collection. Use [`datadog_integration_aws_available_logs_services` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_logs_services) or [the AWS Logs Integration API](https://docs.datadoghq.com/api/latest/aws-logs-integration/?#get-list-of-aws-log-ready-services) to get allowed values. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#sources IntegrationAwsAccount#sources}
  */
  readonly sources?: string[];
  /**
  * log_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#log_source_config IntegrationAwsAccount#log_source_config}
  */
  readonly logSourceConfig?: IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfig;
}

export function integrationAwsAccountLogsConfigLambdaForwarderToTerraform(struct?: IntegrationAwsAccountLogsConfigLambdaForwarder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambdas: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lambdas),
    sources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sources),
    log_source_config: integrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigToTerraform(struct!.logSourceConfig),
  }
}


export function integrationAwsAccountLogsConfigLambdaForwarderToHclTerraform(struct?: IntegrationAwsAccountLogsConfigLambdaForwarder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambdas: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lambdas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_source_config: {
      value: integrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigToHclTerraform(struct!.logSourceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountLogsConfigLambdaForwarder | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdas !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdas = this._lambdas;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._logSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSourceConfig = this._logSourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountLogsConfigLambdaForwarder | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdas = undefined;
      this._sources = undefined;
      this._logSourceConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdas = value.lambdas;
      this._sources = value.sources;
      this._logSourceConfig.internalValue = value.logSourceConfig;
    }
  }

  // lambdas - computed: true, optional: true, required: false
  private _lambdas?: string[]; 
  public get lambdas() {
    return this.getListAttribute('lambdas');
  }
  public set lambdas(value: string[]) {
    this._lambdas = value;
  }
  public resetLambdas() {
    this._lambdas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdasInput() {
    return this._lambdas;
  }

  // sources - computed: true, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // log_source_config - computed: false, optional: true, required: false
  private _logSourceConfig = new IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfigOutputReference(this, "log_source_config");
  public get logSourceConfig() {
    return this._logSourceConfig;
  }
  public putLogSourceConfig(value: IntegrationAwsAccountLogsConfigLambdaForwarderLogSourceConfig) {
    this._logSourceConfig.internalValue = value;
  }
  public resetLogSourceConfig() {
    this._logSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSourceConfigInput() {
    return this._logSourceConfig.internalValue;
  }
}
export interface IntegrationAwsAccountLogsConfig {
  /**
  * lambda_forwarder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#lambda_forwarder IntegrationAwsAccount#lambda_forwarder}
  */
  readonly lambdaForwarder?: IntegrationAwsAccountLogsConfigLambdaForwarder;
}

export function integrationAwsAccountLogsConfigToTerraform(struct?: IntegrationAwsAccountLogsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_forwarder: integrationAwsAccountLogsConfigLambdaForwarderToTerraform(struct!.lambdaForwarder),
  }
}


export function integrationAwsAccountLogsConfigToHclTerraform(struct?: IntegrationAwsAccountLogsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_forwarder: {
      value: integrationAwsAccountLogsConfigLambdaForwarderToHclTerraform(struct!.lambdaForwarder),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsAccountLogsConfigLambdaForwarder",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountLogsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountLogsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaForwarder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaForwarder = this._lambdaForwarder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountLogsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaForwarder.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaForwarder.internalValue = value.lambdaForwarder;
    }
  }

  // lambda_forwarder - computed: false, optional: true, required: false
  private _lambdaForwarder = new IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference(this, "lambda_forwarder");
  public get lambdaForwarder() {
    return this._lambdaForwarder;
  }
  public putLambdaForwarder(value: IntegrationAwsAccountLogsConfigLambdaForwarder) {
    this._lambdaForwarder.internalValue = value;
  }
  public resetLambdaForwarder() {
    this._lambdaForwarder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaForwarderInput() {
    return this._lambdaForwarder.internalValue;
  }
}
export interface IntegrationAwsAccountMetricsConfigMetricNameFilters {
  /**
  * Exclude metric names matching one of these patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#exclude_only IntegrationAwsAccount#exclude_only}
  */
  readonly excludeOnly?: string[];
  /**
  * Include only metric names matching one of these patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}
  */
  readonly includeOnly?: string[];
  /**
  * The AWS CloudWatch namespace to which this metric name filter applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#namespace IntegrationAwsAccount#namespace}
  */
  readonly namespace: string;
}

export function integrationAwsAccountMetricsConfigMetricNameFiltersToTerraform(struct?: IntegrationAwsAccountMetricsConfigMetricNameFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude_only: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeOnly),
    include_only: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeOnly),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function integrationAwsAccountMetricsConfigMetricNameFiltersToHclTerraform(struct?: IntegrationAwsAccountMetricsConfigMetricNameFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude_only: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeOnly),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_only: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeOnly),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountMetricsConfigMetricNameFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationAwsAccountMetricsConfigMetricNameFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeOnly = this._excludeOnly;
    }
    if (this._includeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOnly = this._includeOnly;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountMetricsConfigMetricNameFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeOnly = undefined;
      this._includeOnly = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeOnly = value.excludeOnly;
      this._includeOnly = value.includeOnly;
      this._namespace = value.namespace;
    }
  }

  // exclude_only - computed: false, optional: true, required: false
  private _excludeOnly?: string[]; 
  public get excludeOnly() {
    return this.getListAttribute('exclude_only');
  }
  public set excludeOnly(value: string[]) {
    this._excludeOnly = value;
  }
  public resetExcludeOnly() {
    this._excludeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeOnlyInput() {
    return this._excludeOnly;
  }

  // include_only - computed: false, optional: true, required: false
  private _includeOnly?: string[]; 
  public get includeOnly() {
    return this.getListAttribute('include_only');
  }
  public set includeOnly(value: string[]) {
    this._includeOnly = value;
  }
  public resetIncludeOnly() {
    this._includeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOnlyInput() {
    return this._includeOnly;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class IntegrationAwsAccountMetricsConfigMetricNameFiltersList extends cdktn.ComplexList {
  public internalValue? : IntegrationAwsAccountMetricsConfigMetricNameFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IntegrationAwsAccountMetricsConfigMetricNameFiltersOutputReference {
    return new IntegrationAwsAccountMetricsConfigMetricNameFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationAwsAccountMetricsConfigNamespaceFilters {
  /**
  * Exclude only these namespaces from metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values. Defaults to `["AWS/SQS", "AWS/ElasticMapReduce", "AWS/Usage"]`. `AWS/SQS`, `AWS/ElasticMapReduce`, and `AWS/Usage` are excluded by default to reduce your AWS CloudWatch costs from `GetMetricData` API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#exclude_only IntegrationAwsAccount#exclude_only}
  */
  readonly excludeOnly?: string[];
  /**
  * Include only these namespaces for metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}
  */
  readonly includeOnly?: string[];
}

export function integrationAwsAccountMetricsConfigNamespaceFiltersToTerraform(struct?: IntegrationAwsAccountMetricsConfigNamespaceFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude_only: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeOnly),
    include_only: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeOnly),
  }
}


export function integrationAwsAccountMetricsConfigNamespaceFiltersToHclTerraform(struct?: IntegrationAwsAccountMetricsConfigNamespaceFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude_only: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeOnly),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_only: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeOnly),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountMetricsConfigNamespaceFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeOnly = this._excludeOnly;
    }
    if (this._includeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOnly = this._includeOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountMetricsConfigNamespaceFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeOnly = undefined;
      this._includeOnly = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeOnly = value.excludeOnly;
      this._includeOnly = value.includeOnly;
    }
  }

  // exclude_only - computed: true, optional: true, required: false
  private _excludeOnly?: string[]; 
  public get excludeOnly() {
    return this.getListAttribute('exclude_only');
  }
  public set excludeOnly(value: string[]) {
    this._excludeOnly = value;
  }
  public resetExcludeOnly() {
    this._excludeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeOnlyInput() {
    return this._excludeOnly;
  }

  // include_only - computed: false, optional: true, required: false
  private _includeOnly?: string[]; 
  public get includeOnly() {
    return this.getListAttribute('include_only');
  }
  public set includeOnly(value: string[]) {
    this._includeOnly = value;
  }
  public resetIncludeOnly() {
    this._includeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOnlyInput() {
    return this._includeOnly;
  }
}
export interface IntegrationAwsAccountMetricsConfigTagFilters {
  /**
  * The AWS service for which the tag filters defined in `tags` will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#namespace IntegrationAwsAccount#namespace}
  */
  readonly namespace: string;
  /**
  * The AWS resource tags to filter on for the service specified by `namespace`. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#tags IntegrationAwsAccount#tags}
  */
  readonly tags?: string[];
}

export function integrationAwsAccountMetricsConfigTagFiltersToTerraform(struct?: IntegrationAwsAccountMetricsConfigTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    namespace: cdktn.stringToTerraform(struct!.namespace),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
  }
}


export function integrationAwsAccountMetricsConfigTagFiltersToHclTerraform(struct?: IntegrationAwsAccountMetricsConfigTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountMetricsConfigTagFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationAwsAccountMetricsConfigTagFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountMetricsConfigTagFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._tags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._tags = value.tags;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class IntegrationAwsAccountMetricsConfigTagFiltersList extends cdktn.ComplexList {
  public internalValue? : IntegrationAwsAccountMetricsConfigTagFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IntegrationAwsAccountMetricsConfigTagFiltersOutputReference {
    return new IntegrationAwsAccountMetricsConfigTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationAwsAccountMetricsConfig {
  /**
  * Enable EC2 automute for AWS metrics Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#automute_enabled IntegrationAwsAccount#automute_enabled}
  */
  readonly automuteEnabled?: boolean | cdktn.IResolvable;
  /**
  * Enable CloudWatch alarms collection Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#collect_cloudwatch_alarms IntegrationAwsAccount#collect_cloudwatch_alarms}
  */
  readonly collectCloudwatchAlarms?: boolean | cdktn.IResolvable;
  /**
  * Enable custom metrics collection Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#collect_custom_metrics IntegrationAwsAccount#collect_custom_metrics}
  */
  readonly collectCustomMetrics?: boolean | cdktn.IResolvable;
  /**
  * Enable AWS metrics collection Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#enabled IntegrationAwsAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * metric_name_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#metric_name_filters IntegrationAwsAccount#metric_name_filters}
  */
  readonly metricNameFilters?: IntegrationAwsAccountMetricsConfigMetricNameFilters[] | cdktn.IResolvable;
  /**
  * namespace_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#namespace_filters IntegrationAwsAccount#namespace_filters}
  */
  readonly namespaceFilters?: IntegrationAwsAccountMetricsConfigNamespaceFilters;
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#tag_filters IntegrationAwsAccount#tag_filters}
  */
  readonly tagFilters?: IntegrationAwsAccountMetricsConfigTagFilters[] | cdktn.IResolvable;
}

export function integrationAwsAccountMetricsConfigToTerraform(struct?: IntegrationAwsAccountMetricsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automute_enabled: cdktn.booleanToTerraform(struct!.automuteEnabled),
    collect_cloudwatch_alarms: cdktn.booleanToTerraform(struct!.collectCloudwatchAlarms),
    collect_custom_metrics: cdktn.booleanToTerraform(struct!.collectCustomMetrics),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    metric_name_filters: cdktn.listMapper(integrationAwsAccountMetricsConfigMetricNameFiltersToTerraform, true)(struct!.metricNameFilters),
    namespace_filters: integrationAwsAccountMetricsConfigNamespaceFiltersToTerraform(struct!.namespaceFilters),
    tag_filters: cdktn.listMapper(integrationAwsAccountMetricsConfigTagFiltersToTerraform, true)(struct!.tagFilters),
  }
}


export function integrationAwsAccountMetricsConfigToHclTerraform(struct?: IntegrationAwsAccountMetricsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automute_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.automuteEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    collect_cloudwatch_alarms: {
      value: cdktn.booleanToHclTerraform(struct!.collectCloudwatchAlarms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    collect_custom_metrics: {
      value: cdktn.booleanToHclTerraform(struct!.collectCustomMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name_filters: {
      value: cdktn.listMapperHcl(integrationAwsAccountMetricsConfigMetricNameFiltersToHclTerraform, true)(struct!.metricNameFilters),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationAwsAccountMetricsConfigMetricNameFiltersList",
    },
    namespace_filters: {
      value: integrationAwsAccountMetricsConfigNamespaceFiltersToHclTerraform(struct!.namespaceFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsAccountMetricsConfigNamespaceFilters",
    },
    tag_filters: {
      value: cdktn.listMapperHcl(integrationAwsAccountMetricsConfigTagFiltersToHclTerraform, true)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationAwsAccountMetricsConfigTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountMetricsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountMetricsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automuteEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.automuteEnabled = this._automuteEnabled;
    }
    if (this._collectCloudwatchAlarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectCloudwatchAlarms = this._collectCloudwatchAlarms;
    }
    if (this._collectCustomMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectCustomMetrics = this._collectCustomMetrics;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._metricNameFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNameFilters = this._metricNameFilters?.internalValue;
    }
    if (this._namespaceFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceFilters = this._namespaceFilters?.internalValue;
    }
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountMetricsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automuteEnabled = undefined;
      this._collectCloudwatchAlarms = undefined;
      this._collectCustomMetrics = undefined;
      this._enabled = undefined;
      this._metricNameFilters.internalValue = undefined;
      this._namespaceFilters.internalValue = undefined;
      this._tagFilters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automuteEnabled = value.automuteEnabled;
      this._collectCloudwatchAlarms = value.collectCloudwatchAlarms;
      this._collectCustomMetrics = value.collectCustomMetrics;
      this._enabled = value.enabled;
      this._metricNameFilters.internalValue = value.metricNameFilters;
      this._namespaceFilters.internalValue = value.namespaceFilters;
      this._tagFilters.internalValue = value.tagFilters;
    }
  }

  // automute_enabled - computed: true, optional: true, required: false
  private _automuteEnabled?: boolean | cdktn.IResolvable; 
  public get automuteEnabled() {
    return this.getBooleanAttribute('automute_enabled');
  }
  public set automuteEnabled(value: boolean | cdktn.IResolvable) {
    this._automuteEnabled = value;
  }
  public resetAutomuteEnabled() {
    this._automuteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automuteEnabledInput() {
    return this._automuteEnabled;
  }

  // collect_cloudwatch_alarms - computed: true, optional: true, required: false
  private _collectCloudwatchAlarms?: boolean | cdktn.IResolvable; 
  public get collectCloudwatchAlarms() {
    return this.getBooleanAttribute('collect_cloudwatch_alarms');
  }
  public set collectCloudwatchAlarms(value: boolean | cdktn.IResolvable) {
    this._collectCloudwatchAlarms = value;
  }
  public resetCollectCloudwatchAlarms() {
    this._collectCloudwatchAlarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectCloudwatchAlarmsInput() {
    return this._collectCloudwatchAlarms;
  }

  // collect_custom_metrics - computed: true, optional: true, required: false
  private _collectCustomMetrics?: boolean | cdktn.IResolvable; 
  public get collectCustomMetrics() {
    return this.getBooleanAttribute('collect_custom_metrics');
  }
  public set collectCustomMetrics(value: boolean | cdktn.IResolvable) {
    this._collectCustomMetrics = value;
  }
  public resetCollectCustomMetrics() {
    this._collectCustomMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectCustomMetricsInput() {
    return this._collectCustomMetrics;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // metric_name_filters - computed: false, optional: true, required: false
  private _metricNameFilters = new IntegrationAwsAccountMetricsConfigMetricNameFiltersList(this, "metric_name_filters", false);
  public get metricNameFilters() {
    return this._metricNameFilters;
  }
  public putMetricNameFilters(value: IntegrationAwsAccountMetricsConfigMetricNameFilters[] | cdktn.IResolvable) {
    this._metricNameFilters.internalValue = value;
  }
  public resetMetricNameFilters() {
    this._metricNameFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameFiltersInput() {
    return this._metricNameFilters.internalValue;
  }

  // namespace_filters - computed: false, optional: true, required: false
  private _namespaceFilters = new IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference(this, "namespace_filters");
  public get namespaceFilters() {
    return this._namespaceFilters;
  }
  public putNamespaceFilters(value: IntegrationAwsAccountMetricsConfigNamespaceFilters) {
    this._namespaceFilters.internalValue = value;
  }
  public resetNamespaceFilters() {
    this._namespaceFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceFiltersInput() {
    return this._namespaceFilters.internalValue;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new IntegrationAwsAccountMetricsConfigTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: IntegrationAwsAccountMetricsConfigTagFilters[] | cdktn.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }
}
export interface IntegrationAwsAccountResourcesConfig {
  /**
  * Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations. Requires `extended_collection` to be set to `true`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#cloud_security_posture_management_collection IntegrationAwsAccount#cloud_security_posture_management_collection}
  */
  readonly cloudSecurityPostureManagementCollection?: boolean | cdktn.IResolvable;
  /**
  * Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cloud_security_posture_management_collection`. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#extended_collection IntegrationAwsAccount#extended_collection}
  */
  readonly extendedCollection?: boolean | cdktn.IResolvable;
}

export function integrationAwsAccountResourcesConfigToTerraform(struct?: IntegrationAwsAccountResourcesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloud_security_posture_management_collection: cdktn.booleanToTerraform(struct!.cloudSecurityPostureManagementCollection),
    extended_collection: cdktn.booleanToTerraform(struct!.extendedCollection),
  }
}


export function integrationAwsAccountResourcesConfigToHclTerraform(struct?: IntegrationAwsAccountResourcesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloud_security_posture_management_collection: {
      value: cdktn.booleanToHclTerraform(struct!.cloudSecurityPostureManagementCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extended_collection: {
      value: cdktn.booleanToHclTerraform(struct!.extendedCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountResourcesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountResourcesConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudSecurityPostureManagementCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSecurityPostureManagementCollection = this._cloudSecurityPostureManagementCollection;
    }
    if (this._extendedCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCollection = this._extendedCollection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountResourcesConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudSecurityPostureManagementCollection = undefined;
      this._extendedCollection = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudSecurityPostureManagementCollection = value.cloudSecurityPostureManagementCollection;
      this._extendedCollection = value.extendedCollection;
    }
  }

  // cloud_security_posture_management_collection - computed: true, optional: true, required: false
  private _cloudSecurityPostureManagementCollection?: boolean | cdktn.IResolvable; 
  public get cloudSecurityPostureManagementCollection() {
    return this.getBooleanAttribute('cloud_security_posture_management_collection');
  }
  public set cloudSecurityPostureManagementCollection(value: boolean | cdktn.IResolvable) {
    this._cloudSecurityPostureManagementCollection = value;
  }
  public resetCloudSecurityPostureManagementCollection() {
    this._cloudSecurityPostureManagementCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSecurityPostureManagementCollectionInput() {
    return this._cloudSecurityPostureManagementCollection;
  }

  // extended_collection - computed: true, optional: true, required: false
  private _extendedCollection?: boolean | cdktn.IResolvable; 
  public get extendedCollection() {
    return this.getBooleanAttribute('extended_collection');
  }
  public set extendedCollection(value: boolean | cdktn.IResolvable) {
    this._extendedCollection = value;
  }
  public resetExtendedCollection() {
    this._extendedCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCollectionInput() {
    return this._extendedCollection;
  }
}
export interface IntegrationAwsAccountTracesConfigXrayServices {
  /**
  * Include all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}
  */
  readonly includeAll?: boolean | cdktn.IResolvable;
  /**
  * Include only these services. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}
  */
  readonly includeOnly?: string[];
}

export function integrationAwsAccountTracesConfigXrayServicesToTerraform(struct?: IntegrationAwsAccountTracesConfigXrayServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_all: cdktn.booleanToTerraform(struct!.includeAll),
    include_only: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeOnly),
  }
}


export function integrationAwsAccountTracesConfigXrayServicesToHclTerraform(struct?: IntegrationAwsAccountTracesConfigXrayServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_all: {
      value: cdktn.booleanToHclTerraform(struct!.includeAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_only: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeOnly),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountTracesConfigXrayServicesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountTracesConfigXrayServices | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAll = this._includeAll;
    }
    if (this._includeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOnly = this._includeOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountTracesConfigXrayServices | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAll = undefined;
      this._includeOnly = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAll = value.includeAll;
      this._includeOnly = value.includeOnly;
    }
  }

  // include_all - computed: false, optional: true, required: false
  private _includeAll?: boolean | cdktn.IResolvable; 
  public get includeAll() {
    return this.getBooleanAttribute('include_all');
  }
  public set includeAll(value: boolean | cdktn.IResolvable) {
    this._includeAll = value;
  }
  public resetIncludeAll() {
    this._includeAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllInput() {
    return this._includeAll;
  }

  // include_only - computed: true, optional: true, required: false
  private _includeOnly?: string[]; 
  public get includeOnly() {
    return this.getListAttribute('include_only');
  }
  public set includeOnly(value: string[]) {
    this._includeOnly = value;
  }
  public resetIncludeOnly() {
    this._includeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOnlyInput() {
    return this._includeOnly;
  }
}
export interface IntegrationAwsAccountTracesConfig {
  /**
  * xray_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#xray_services IntegrationAwsAccount#xray_services}
  */
  readonly xrayServices?: IntegrationAwsAccountTracesConfigXrayServices;
}

export function integrationAwsAccountTracesConfigToTerraform(struct?: IntegrationAwsAccountTracesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    xray_services: integrationAwsAccountTracesConfigXrayServicesToTerraform(struct!.xrayServices),
  }
}


export function integrationAwsAccountTracesConfigToHclTerraform(struct?: IntegrationAwsAccountTracesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    xray_services: {
      value: integrationAwsAccountTracesConfigXrayServicesToHclTerraform(struct!.xrayServices),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationAwsAccountTracesConfigXrayServices",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountTracesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountTracesConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xrayServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xrayServices = this._xrayServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountTracesConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._xrayServices.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._xrayServices.internalValue = value.xrayServices;
    }
  }

  // xray_services - computed: false, optional: true, required: false
  private _xrayServices = new IntegrationAwsAccountTracesConfigXrayServicesOutputReference(this, "xray_services");
  public get xrayServices() {
    return this._xrayServices;
  }
  public putXrayServices(value: IntegrationAwsAccountTracesConfigXrayServices) {
    this._xrayServices.internalValue = value;
  }
  public resetXrayServices() {
    this._xrayServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrayServicesInput() {
    return this._xrayServices.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account datadog_integration_aws_account}
*/
export class IntegrationAwsAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_aws_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IntegrationAwsAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsAccount to import
  * @param importFromId The id of the existing IntegrationAwsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_aws_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account datadog_integration_aws_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_account',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.17.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountTags = config.accountTags;
    this._awsAccountId = config.awsAccountId;
    this._awsPartition = config.awsPartition;
    this._authConfig.internalValue = config.authConfig;
    this._awsRegions.internalValue = config.awsRegions;
    this._logsConfig.internalValue = config.logsConfig;
    this._metricsConfig.internalValue = config.metricsConfig;
    this._resourcesConfig.internalValue = config.resourcesConfig;
    this._tracesConfig.internalValue = config.tracesConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_tags - computed: true, optional: true, required: false
  private _accountTags?: string[]; 
  public get accountTags() {
    return this.getListAttribute('account_tags');
  }
  public set accountTags(value: string[]) {
    this._accountTags = value;
  }
  public resetAccountTags() {
    this._accountTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTagsInput() {
    return this._accountTags;
  }

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_partition - computed: false, optional: false, required: true
  private _awsPartition?: string; 
  public get awsPartition() {
    return this.getStringAttribute('aws_partition');
  }
  public set awsPartition(value: string) {
    this._awsPartition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPartitionInput() {
    return this._awsPartition;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new IntegrationAwsAccountAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: IntegrationAwsAccountAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions = new IntegrationAwsAccountAwsRegionsOutputReference(this, "aws_regions");
  public get awsRegions() {
    return this._awsRegions;
  }
  public putAwsRegions(value: IntegrationAwsAccountAwsRegions) {
    this._awsRegions.internalValue = value;
  }
  public resetAwsRegions() {
    this._awsRegions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions.internalValue;
  }

  // logs_config - computed: false, optional: true, required: false
  private _logsConfig = new IntegrationAwsAccountLogsConfigOutputReference(this, "logs_config");
  public get logsConfig() {
    return this._logsConfig;
  }
  public putLogsConfig(value: IntegrationAwsAccountLogsConfig) {
    this._logsConfig.internalValue = value;
  }
  public resetLogsConfig() {
    this._logsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsConfigInput() {
    return this._logsConfig.internalValue;
  }

  // metrics_config - computed: false, optional: true, required: false
  private _metricsConfig = new IntegrationAwsAccountMetricsConfigOutputReference(this, "metrics_config");
  public get metricsConfig() {
    return this._metricsConfig;
  }
  public putMetricsConfig(value: IntegrationAwsAccountMetricsConfig) {
    this._metricsConfig.internalValue = value;
  }
  public resetMetricsConfig() {
    this._metricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigInput() {
    return this._metricsConfig.internalValue;
  }

  // resources_config - computed: false, optional: true, required: false
  private _resourcesConfig = new IntegrationAwsAccountResourcesConfigOutputReference(this, "resources_config");
  public get resourcesConfig() {
    return this._resourcesConfig;
  }
  public putResourcesConfig(value: IntegrationAwsAccountResourcesConfig) {
    this._resourcesConfig.internalValue = value;
  }
  public resetResourcesConfig() {
    this._resourcesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesConfigInput() {
    return this._resourcesConfig.internalValue;
  }

  // traces_config - computed: false, optional: true, required: false
  private _tracesConfig = new IntegrationAwsAccountTracesConfigOutputReference(this, "traces_config");
  public get tracesConfig() {
    return this._tracesConfig;
  }
  public putTracesConfig(value: IntegrationAwsAccountTracesConfig) {
    this._tracesConfig.internalValue = value;
  }
  public resetTracesConfig() {
    this._tracesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesConfigInput() {
    return this._tracesConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._accountTags),
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      aws_partition: cdktn.stringToTerraform(this._awsPartition),
      auth_config: integrationAwsAccountAuthConfigToTerraform(this._authConfig.internalValue),
      aws_regions: integrationAwsAccountAwsRegionsToTerraform(this._awsRegions.internalValue),
      logs_config: integrationAwsAccountLogsConfigToTerraform(this._logsConfig.internalValue),
      metrics_config: integrationAwsAccountMetricsConfigToTerraform(this._metricsConfig.internalValue),
      resources_config: integrationAwsAccountResourcesConfigToTerraform(this._resourcesConfig.internalValue),
      traces_config: integrationAwsAccountTracesConfigToTerraform(this._tracesConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._accountTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_partition: {
        value: cdktn.stringToHclTerraform(this._awsPartition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_config: {
        value: integrationAwsAccountAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountAuthConfig",
      },
      aws_regions: {
        value: integrationAwsAccountAwsRegionsToHclTerraform(this._awsRegions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountAwsRegions",
      },
      logs_config: {
        value: integrationAwsAccountLogsConfigToHclTerraform(this._logsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountLogsConfig",
      },
      metrics_config: {
        value: integrationAwsAccountMetricsConfigToHclTerraform(this._metricsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountMetricsConfig",
      },
      resources_config: {
        value: integrationAwsAccountResourcesConfigToHclTerraform(this._resourcesConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountResourcesConfig",
      },
      traces_config: {
        value: integrationAwsAccountTracesConfigToHclTerraform(this._tracesConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountTracesConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
