/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IntegrationElasticCloudAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Authentication configured on the Elastic Cloud integration account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#authentication IntegrationElasticCloudAccount#authentication}
  */
  readonly authentication: IntegrationElasticCloudAccountAuthentication;
  /**
  * Data Datadog collects from Elastic Cloud, keyed by dataflow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#dataflows IntegrationElasticCloudAccount#dataflows}
  */
  readonly dataflows?: IntegrationElasticCloudAccountDataflows;
  /**
  * Human-readable name of the Elastic Cloud integration account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#name IntegrationElasticCloudAccount#name}
  */
  readonly name: string;
  /**
  * Settings configured on the Elastic Cloud integration account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#settings IntegrationElasticCloudAccount#settings}
  */
  readonly settings: IntegrationElasticCloudAccountSettings;
}
export interface IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth {
  /**
  * The authentication method type. Valid values are `basic`. Defaults to `"basic"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#auth_type IntegrationElasticCloudAccount#auth_type}
  */
  readonly authType?: string;
  /**
  * Secret password or private key. This write-only value is not stored in Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#password_wo IntegrationElasticCloudAccount#password_wo}
  */
  readonly passwordWo: string;
  /**
  * Version trigger for password_wo rotation. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#password_wo_version IntegrationElasticCloudAccount#password_wo_version}
  */
  readonly passwordWoVersion: string;
  /**
  * Non-secret username or public identifier for the credential pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#username IntegrationElasticCloudAccount#username}
  */
  readonly username: string;
}

export function integrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthToTerraform(struct?: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    password_wo: cdktn.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktn.stringToTerraform(struct!.passwordWoVersion),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function integrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthToHclTerraform(struct?: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktn.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._username = value.username;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // password_wo - computed: false, optional: false, required: true
  private _passwordWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: false, required: true
  private _passwordWoVersion?: string; 
  public get passwordWoVersion() {
    return this.getStringAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: string) {
    this._passwordWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface IntegrationElasticCloudAccountAuthentication {
  /**
  * The basic authentication method and username configured on the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_integration_account_basic_auth IntegrationElasticCloudAccount#elastic_cloud_integration_account_basic_auth}
  */
  readonly elasticCloudIntegrationAccountBasicAuth?: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth;
}

export function integrationElasticCloudAccountAuthenticationToTerraform(struct?: IntegrationElasticCloudAccountAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    elastic_cloud_integration_account_basic_auth: integrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthToTerraform(struct!.elasticCloudIntegrationAccountBasicAuth),
  }
}


export function integrationElasticCloudAccountAuthenticationToHclTerraform(struct?: IntegrationElasticCloudAccountAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    elastic_cloud_integration_account_basic_auth: {
      value: integrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthToHclTerraform(struct!.elasticCloudIntegrationAccountBasicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationElasticCloudAccountAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elasticCloudIntegrationAccountBasicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticCloudIntegrationAccountBasicAuth = this._elasticCloudIntegrationAccountBasicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elasticCloudIntegrationAccountBasicAuth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elasticCloudIntegrationAccountBasicAuth.internalValue = value.elasticCloudIntegrationAccountBasicAuth;
    }
  }

  // elastic_cloud_integration_account_basic_auth - computed: false, optional: true, required: false
  private _elasticCloudIntegrationAccountBasicAuth = new IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference(this, "elastic_cloud_integration_account_basic_auth");
  public get elasticCloudIntegrationAccountBasicAuth() {
    return this._elasticCloudIntegrationAccountBasicAuth;
  }
  public putElasticCloudIntegrationAccountBasicAuth(value: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth) {
    this._elasticCloudIntegrationAccountBasicAuth.internalValue = value;
  }
  public resetElasticCloudIntegrationAccountBasicAuth() {
    this._elasticCloudIntegrationAccountBasicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticCloudIntegrationAccountBasicAuthInput() {
    return this._elasticCloudIntegrationAccountBasicAuth.internalValue;
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus {
}

export function integrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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

  // status - computed: true, optional: false, required: false
  private _status = new IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus {
}

export function integrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationElasticCloudAccountDataflowsElasticCloudIndexStatsToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudIndexStatsToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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

  // status - computed: true, optional: false, required: false
  private _status = new IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus {
}

export function integrationElasticCloudAccountDataflowsElasticCloudMetricsStatusToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudMetricsStatusToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudMetrics {
}

export function integrationElasticCloudAccountDataflowsElasticCloudMetricsToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudMetricsToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // status - computed: true, optional: false, required: false
  private _status = new IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus {
}

export function integrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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

  // status - computed: true, optional: false, required: false
  private _status = new IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus {
}

export function integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout {
  /**
  * Whether this tolerance is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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

  // status - computed: true, optional: false, required: false
  private _status = new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus {
}

export function integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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

  // status - computed: true, optional: false, required: false
  private _status = new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus {
}

export function integrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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

  // status - computed: true, optional: false, required: false
  private _status = new IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus {
}

export function integrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationElasticCloudAccountDataflowsElasticCloudSlmStatsToTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationElasticCloudAccountDataflowsElasticCloudSlmStatsToHclTerraform(struct?: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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

  // status - computed: true, optional: false, required: false
  private _status = new IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationElasticCloudAccountDataflows {
  /**
  * Primary shard metrics broken down per index, rather than aggregated across the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_detailed_index_stats IntegrationElasticCloudAccount#elastic_cloud_detailed_index_stats}
  */
  readonly elasticCloudDetailedIndexStats?: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats;
  /**
  * Metrics for individual indices. Only the indices granted to the role of the user in `authentication` are collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_index_stats IntegrationElasticCloudAccount#elastic_cloud_index_stats}
  */
  readonly elasticCloudIndexStats?: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats;
  /**
  * Metrics for cluster-level changes that have been submitted but not yet executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_pending_task_stats IntegrationElasticCloudAccount#elastic_cloud_pending_task_stats}
  */
  readonly elasticCloudPendingTaskStats?: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats;
  /**
  * Tolerance for slow primary shard requests, keeping the rest of the collection running when a primary shard request times out instead of failing the run. Only has an effect alongside `elastic-cloud-primary-shard-stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_primary_shard_graceful_timeout IntegrationElasticCloudAccount#elastic_cloud_primary_shard_graceful_timeout}
  */
  readonly elasticCloudPrimaryShardGracefulTimeout?: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout;
  /**
  * Metrics covering only the cluster's primary shards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_primary_shard_stats IntegrationElasticCloudAccount#elastic_cloud_primary_shard_stats}
  */
  readonly elasticCloudPrimaryShardStats?: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats;
  /**
  * Metrics for how many shards are allocated to each data node, and the disk space they use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_shard_allocation_stats IntegrationElasticCloudAccount#elastic_cloud_shard_allocation_stats}
  */
  readonly elasticCloudShardAllocationStats?: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats;
  /**
  * Metrics about the actions taken by snapshot lifecycle management. Requires the `read_slm` Elasticsearch cluster privilege on the role of the user in `authentication`; without it this dataflow collects no data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_slm_stats IntegrationElasticCloudAccount#elastic_cloud_slm_stats}
  */
  readonly elasticCloudSlmStats?: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats;
}

export function integrationElasticCloudAccountDataflowsToTerraform(struct?: IntegrationElasticCloudAccountDataflows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    elastic_cloud_detailed_index_stats: integrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsToTerraform(struct!.elasticCloudDetailedIndexStats),
    elastic_cloud_index_stats: integrationElasticCloudAccountDataflowsElasticCloudIndexStatsToTerraform(struct!.elasticCloudIndexStats),
    elastic_cloud_pending_task_stats: integrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsToTerraform(struct!.elasticCloudPendingTaskStats),
    elastic_cloud_primary_shard_graceful_timeout: integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutToTerraform(struct!.elasticCloudPrimaryShardGracefulTimeout),
    elastic_cloud_primary_shard_stats: integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsToTerraform(struct!.elasticCloudPrimaryShardStats),
    elastic_cloud_shard_allocation_stats: integrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsToTerraform(struct!.elasticCloudShardAllocationStats),
    elastic_cloud_slm_stats: integrationElasticCloudAccountDataflowsElasticCloudSlmStatsToTerraform(struct!.elasticCloudSlmStats),
  }
}


export function integrationElasticCloudAccountDataflowsToHclTerraform(struct?: IntegrationElasticCloudAccountDataflows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    elastic_cloud_detailed_index_stats: {
      value: integrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsToHclTerraform(struct!.elasticCloudDetailedIndexStats),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats",
    },
    elastic_cloud_index_stats: {
      value: integrationElasticCloudAccountDataflowsElasticCloudIndexStatsToHclTerraform(struct!.elasticCloudIndexStats),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats",
    },
    elastic_cloud_pending_task_stats: {
      value: integrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsToHclTerraform(struct!.elasticCloudPendingTaskStats),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats",
    },
    elastic_cloud_primary_shard_graceful_timeout: {
      value: integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutToHclTerraform(struct!.elasticCloudPrimaryShardGracefulTimeout),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout",
    },
    elastic_cloud_primary_shard_stats: {
      value: integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsToHclTerraform(struct!.elasticCloudPrimaryShardStats),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats",
    },
    elastic_cloud_shard_allocation_stats: {
      value: integrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsToHclTerraform(struct!.elasticCloudShardAllocationStats),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats",
    },
    elastic_cloud_slm_stats: {
      value: integrationElasticCloudAccountDataflowsElasticCloudSlmStatsToHclTerraform(struct!.elasticCloudSlmStats),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationElasticCloudAccountDataflowsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountDataflows | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elasticCloudDetailedIndexStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticCloudDetailedIndexStats = this._elasticCloudDetailedIndexStats?.internalValue;
    }
    if (this._elasticCloudIndexStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticCloudIndexStats = this._elasticCloudIndexStats?.internalValue;
    }
    if (this._elasticCloudPendingTaskStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticCloudPendingTaskStats = this._elasticCloudPendingTaskStats?.internalValue;
    }
    if (this._elasticCloudPrimaryShardGracefulTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticCloudPrimaryShardGracefulTimeout = this._elasticCloudPrimaryShardGracefulTimeout?.internalValue;
    }
    if (this._elasticCloudPrimaryShardStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticCloudPrimaryShardStats = this._elasticCloudPrimaryShardStats?.internalValue;
    }
    if (this._elasticCloudShardAllocationStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticCloudShardAllocationStats = this._elasticCloudShardAllocationStats?.internalValue;
    }
    if (this._elasticCloudSlmStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticCloudSlmStats = this._elasticCloudSlmStats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountDataflows | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elasticCloudDetailedIndexStats.internalValue = undefined;
      this._elasticCloudIndexStats.internalValue = undefined;
      this._elasticCloudPendingTaskStats.internalValue = undefined;
      this._elasticCloudPrimaryShardGracefulTimeout.internalValue = undefined;
      this._elasticCloudPrimaryShardStats.internalValue = undefined;
      this._elasticCloudShardAllocationStats.internalValue = undefined;
      this._elasticCloudSlmStats.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elasticCloudDetailedIndexStats.internalValue = value.elasticCloudDetailedIndexStats;
      this._elasticCloudIndexStats.internalValue = value.elasticCloudIndexStats;
      this._elasticCloudPendingTaskStats.internalValue = value.elasticCloudPendingTaskStats;
      this._elasticCloudPrimaryShardGracefulTimeout.internalValue = value.elasticCloudPrimaryShardGracefulTimeout;
      this._elasticCloudPrimaryShardStats.internalValue = value.elasticCloudPrimaryShardStats;
      this._elasticCloudShardAllocationStats.internalValue = value.elasticCloudShardAllocationStats;
      this._elasticCloudSlmStats.internalValue = value.elasticCloudSlmStats;
    }
  }

  // elastic_cloud_detailed_index_stats - computed: true, optional: true, required: false
  private _elasticCloudDetailedIndexStats = new IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference(this, "elastic_cloud_detailed_index_stats");
  public get elasticCloudDetailedIndexStats() {
    return this._elasticCloudDetailedIndexStats;
  }
  public putElasticCloudDetailedIndexStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats) {
    this._elasticCloudDetailedIndexStats.internalValue = value;
  }
  public resetElasticCloudDetailedIndexStats() {
    this._elasticCloudDetailedIndexStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticCloudDetailedIndexStatsInput() {
    return this._elasticCloudDetailedIndexStats.internalValue;
  }

  // elastic_cloud_index_stats - computed: true, optional: true, required: false
  private _elasticCloudIndexStats = new IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference(this, "elastic_cloud_index_stats");
  public get elasticCloudIndexStats() {
    return this._elasticCloudIndexStats;
  }
  public putElasticCloudIndexStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats) {
    this._elasticCloudIndexStats.internalValue = value;
  }
  public resetElasticCloudIndexStats() {
    this._elasticCloudIndexStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticCloudIndexStatsInput() {
    return this._elasticCloudIndexStats.internalValue;
  }

  // elastic_cloud_metrics - computed: true, optional: false, required: false
  private _elasticCloudMetrics = new IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference(this, "elastic_cloud_metrics");
  public get elasticCloudMetrics() {
    return this._elasticCloudMetrics;
  }

  // elastic_cloud_pending_task_stats - computed: true, optional: true, required: false
  private _elasticCloudPendingTaskStats = new IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference(this, "elastic_cloud_pending_task_stats");
  public get elasticCloudPendingTaskStats() {
    return this._elasticCloudPendingTaskStats;
  }
  public putElasticCloudPendingTaskStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats) {
    this._elasticCloudPendingTaskStats.internalValue = value;
  }
  public resetElasticCloudPendingTaskStats() {
    this._elasticCloudPendingTaskStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticCloudPendingTaskStatsInput() {
    return this._elasticCloudPendingTaskStats.internalValue;
  }

  // elastic_cloud_primary_shard_graceful_timeout - computed: true, optional: true, required: false
  private _elasticCloudPrimaryShardGracefulTimeout = new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference(this, "elastic_cloud_primary_shard_graceful_timeout");
  public get elasticCloudPrimaryShardGracefulTimeout() {
    return this._elasticCloudPrimaryShardGracefulTimeout;
  }
  public putElasticCloudPrimaryShardGracefulTimeout(value: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout) {
    this._elasticCloudPrimaryShardGracefulTimeout.internalValue = value;
  }
  public resetElasticCloudPrimaryShardGracefulTimeout() {
    this._elasticCloudPrimaryShardGracefulTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticCloudPrimaryShardGracefulTimeoutInput() {
    return this._elasticCloudPrimaryShardGracefulTimeout.internalValue;
  }

  // elastic_cloud_primary_shard_stats - computed: true, optional: true, required: false
  private _elasticCloudPrimaryShardStats = new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference(this, "elastic_cloud_primary_shard_stats");
  public get elasticCloudPrimaryShardStats() {
    return this._elasticCloudPrimaryShardStats;
  }
  public putElasticCloudPrimaryShardStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats) {
    this._elasticCloudPrimaryShardStats.internalValue = value;
  }
  public resetElasticCloudPrimaryShardStats() {
    this._elasticCloudPrimaryShardStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticCloudPrimaryShardStatsInput() {
    return this._elasticCloudPrimaryShardStats.internalValue;
  }

  // elastic_cloud_shard_allocation_stats - computed: true, optional: true, required: false
  private _elasticCloudShardAllocationStats = new IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference(this, "elastic_cloud_shard_allocation_stats");
  public get elasticCloudShardAllocationStats() {
    return this._elasticCloudShardAllocationStats;
  }
  public putElasticCloudShardAllocationStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats) {
    this._elasticCloudShardAllocationStats.internalValue = value;
  }
  public resetElasticCloudShardAllocationStats() {
    this._elasticCloudShardAllocationStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticCloudShardAllocationStatsInput() {
    return this._elasticCloudShardAllocationStats.internalValue;
  }

  // elastic_cloud_slm_stats - computed: true, optional: true, required: false
  private _elasticCloudSlmStats = new IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference(this, "elastic_cloud_slm_stats");
  public get elasticCloudSlmStats() {
    return this._elasticCloudSlmStats;
  }
  public putElasticCloudSlmStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats) {
    this._elasticCloudSlmStats.internalValue = value;
  }
  public resetElasticCloudSlmStats() {
    this._elasticCloudSlmStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticCloudSlmStatsInput() {
    return this._elasticCloudSlmStats.internalValue;
  }
}
export interface IntegrationElasticCloudAccountSettings {
  /**
  * Comma-separated list of custom tags for this Elastic Cloud deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#tags IntegrationElasticCloudAccount#tags}
  */
  readonly tags?: string;
  /**
  * Elastic Cloud deployment URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#url IntegrationElasticCloudAccount#url}
  */
  readonly url: string;
}

export function integrationElasticCloudAccountSettingsToTerraform(struct?: IntegrationElasticCloudAccountSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tags: cdktn.stringToTerraform(struct!.tags),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function integrationElasticCloudAccountSettingsToHclTerraform(struct?: IntegrationElasticCloudAccountSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tags: {
      value: cdktn.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationElasticCloudAccountSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationElasticCloudAccountSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationElasticCloudAccountSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._url = value.url;
    }
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account datadog_integration_elastic_cloud_account}
*/
export class IntegrationElasticCloudAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_elastic_cloud_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IntegrationElasticCloudAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationElasticCloudAccount to import
  * @param importFromId The id of the existing IntegrationElasticCloudAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationElasticCloudAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_elastic_cloud_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account datadog_integration_elastic_cloud_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationElasticCloudAccountConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationElasticCloudAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_elastic_cloud_account',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.24.0',
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
    this._authentication.internalValue = config.authentication;
    this._dataflows.internalValue = config.dataflows;
    this._name = config.name;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: false, required: true
  private _authentication = new IntegrationElasticCloudAccountAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: IntegrationElasticCloudAccountAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // dataflows - computed: true, optional: true, required: false
  private _dataflows = new IntegrationElasticCloudAccountDataflowsOutputReference(this, "dataflows");
  public get dataflows() {
    return this._dataflows;
  }
  public putDataflows(value: IntegrationElasticCloudAccountDataflows) {
    this._dataflows.internalValue = value;
  }
  public resetDataflows() {
    this._dataflows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowsInput() {
    return this._dataflows.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new IntegrationElasticCloudAccountSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationElasticCloudAccountSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: integrationElasticCloudAccountAuthenticationToTerraform(this._authentication.internalValue),
      dataflows: integrationElasticCloudAccountDataflowsToTerraform(this._dataflows.internalValue),
      name: cdktn.stringToTerraform(this._name),
      settings: integrationElasticCloudAccountSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: integrationElasticCloudAccountAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationElasticCloudAccountAuthentication",
      },
      dataflows: {
        value: integrationElasticCloudAccountDataflowsToHclTerraform(this._dataflows.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationElasticCloudAccountDataflows",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: integrationElasticCloudAccountSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationElasticCloudAccountSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
