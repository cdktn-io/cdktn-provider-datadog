/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IntegrationSnowflakeAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Authentication configured on the Snowflake integration account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#authentication IntegrationSnowflakeAccount#authentication}
  */
  readonly authentication: IntegrationSnowflakeAccountAuthentication;
  /**
  * Data Datadog collects from Snowflake, keyed by dataflow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#dataflows IntegrationSnowflakeAccount#dataflows}
  */
  readonly dataflows?: IntegrationSnowflakeAccountDataflows;
  /**
  * Human-readable name of the Snowflake integration account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#name IntegrationSnowflakeAccount#name}
  */
  readonly name: string;
  /**
  * Settings configured on the Snowflake integration account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}
  */
  readonly settings: IntegrationSnowflakeAccountSettings;
}
export interface IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth {
  /**
  * The authentication method type. Valid values are `snowflake_private_key`. Defaults to `"snowflake_private_key"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#auth_type IntegrationSnowflakeAccount#auth_type}
  */
  readonly authType?: string;
  /**
  * Name that distinguishes this private key from other keys in Datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#private_key_name IntegrationSnowflakeAccount#private_key_name}
  */
  readonly privateKeyName: string;
  /**
  * Passphrase that decrypts the private key. Provide it only when the key is encrypted. This write-only value is not stored in Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo IntegrationSnowflakeAccount#private_key_passphrase_wo}
  */
  readonly privateKeyPassphraseWo?: string;
  /**
  * Version trigger for private_key_passphrase_wo rotation. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo_version IntegrationSnowflakeAccount#private_key_passphrase_wo_version}
  */
  readonly privateKeyPassphraseWoVersion?: string;
  /**
  * The private key, in PEM format. This write-only value is not stored in Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#private_key_wo IntegrationSnowflakeAccount#private_key_wo}
  */
  readonly privateKeyWo: string;
  /**
  * Version trigger for private_key_wo rotation. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#private_key_wo_version IntegrationSnowflakeAccount#private_key_wo_version}
  */
  readonly privateKeyWoVersion: string;
}

export function integrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthToTerraform(struct?: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    private_key_name: cdktn.stringToTerraform(struct!.privateKeyName),
    private_key_passphrase_wo: cdktn.stringToTerraform(struct!.privateKeyPassphraseWo),
    private_key_passphrase_wo_version: cdktn.stringToTerraform(struct!.privateKeyPassphraseWoVersion),
    private_key_wo: cdktn.stringToTerraform(struct!.privateKeyWo),
    private_key_wo_version: cdktn.stringToTerraform(struct!.privateKeyWoVersion),
  }
}


export function integrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthToHclTerraform(struct?: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth | cdktn.IResolvable): any {
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
    private_key_name: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_passphrase_wo: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyPassphraseWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_passphrase_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyPassphraseWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_wo: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._privateKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyName = this._privateKeyName;
    }
    if (this._privateKeyPassphraseWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphraseWo = this._privateKeyPassphraseWo;
    }
    if (this._privateKeyPassphraseWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphraseWoVersion = this._privateKeyPassphraseWoVersion;
    }
    if (this._privateKeyWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyWo = this._privateKeyWo;
    }
    if (this._privateKeyWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyWoVersion = this._privateKeyWoVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._privateKeyName = undefined;
      this._privateKeyPassphraseWo = undefined;
      this._privateKeyPassphraseWoVersion = undefined;
      this._privateKeyWo = undefined;
      this._privateKeyWoVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._privateKeyName = value.privateKeyName;
      this._privateKeyPassphraseWo = value.privateKeyPassphraseWo;
      this._privateKeyPassphraseWoVersion = value.privateKeyPassphraseWoVersion;
      this._privateKeyWo = value.privateKeyWo;
      this._privateKeyWoVersion = value.privateKeyWoVersion;
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

  // private_key_name - computed: false, optional: false, required: true
  private _privateKeyName?: string; 
  public get privateKeyName() {
    return this.getStringAttribute('private_key_name');
  }
  public set privateKeyName(value: string) {
    this._privateKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyNameInput() {
    return this._privateKeyName;
  }

  // private_key_passphrase_wo - computed: false, optional: true, required: false
  private _privateKeyPassphraseWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get privateKeyPassphraseWo() {
    return this.getStringAttribute('private_key_passphrase_wo');
  }
  public set privateKeyPassphraseWo(value: string) {
    this._privateKeyPassphraseWo = value;
  }
  public resetPrivateKeyPassphraseWo() {
    this._privateKeyPassphraseWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseWoInput() {
    return this._privateKeyPassphraseWo;
  }

  // private_key_passphrase_wo_version - computed: false, optional: true, required: false
  private _privateKeyPassphraseWoVersion?: string; 
  public get privateKeyPassphraseWoVersion() {
    return this.getStringAttribute('private_key_passphrase_wo_version');
  }
  public set privateKeyPassphraseWoVersion(value: string) {
    this._privateKeyPassphraseWoVersion = value;
  }
  public resetPrivateKeyPassphraseWoVersion() {
    this._privateKeyPassphraseWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseWoVersionInput() {
    return this._privateKeyPassphraseWoVersion;
  }

  // private_key_wo - computed: false, optional: false, required: true
  private _privateKeyWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get privateKeyWo() {
    return this.getStringAttribute('private_key_wo');
  }
  public set privateKeyWo(value: string) {
    this._privateKeyWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyWoInput() {
    return this._privateKeyWo;
  }

  // private_key_wo_version - computed: false, optional: false, required: true
  private _privateKeyWoVersion?: string; 
  public get privateKeyWoVersion() {
    return this.getStringAttribute('private_key_wo_version');
  }
  public set privateKeyWoVersion(value: string) {
    this._privateKeyWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyWoVersionInput() {
    return this._privateKeyWoVersion;
  }
}
export interface IntegrationSnowflakeAccountAuthentication {
  /**
  * The RSA key pair authentication method configured on the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#snowflake_integration_account_private_key_auth IntegrationSnowflakeAccount#snowflake_integration_account_private_key_auth}
  */
  readonly snowflakeIntegrationAccountPrivateKeyAuth?: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth;
}

export function integrationSnowflakeAccountAuthenticationToTerraform(struct?: IntegrationSnowflakeAccountAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    snowflake_integration_account_private_key_auth: integrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthToTerraform(struct!.snowflakeIntegrationAccountPrivateKeyAuth),
  }
}


export function integrationSnowflakeAccountAuthenticationToHclTerraform(struct?: IntegrationSnowflakeAccountAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    snowflake_integration_account_private_key_auth: {
      value: integrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthToHclTerraform(struct!.snowflakeIntegrationAccountPrivateKeyAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snowflakeIntegrationAccountPrivateKeyAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeIntegrationAccountPrivateKeyAuth = this._snowflakeIntegrationAccountPrivateKeyAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snowflakeIntegrationAccountPrivateKeyAuth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snowflakeIntegrationAccountPrivateKeyAuth.internalValue = value.snowflakeIntegrationAccountPrivateKeyAuth;
    }
  }

  // snowflake_integration_account_private_key_auth - computed: false, optional: true, required: false
  private _snowflakeIntegrationAccountPrivateKeyAuth = new IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference(this, "snowflake_integration_account_private_key_auth");
  public get snowflakeIntegrationAccountPrivateKeyAuth() {
    return this._snowflakeIntegrationAccountPrivateKeyAuth;
  }
  public putSnowflakeIntegrationAccountPrivateKeyAuth(value: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth) {
    this._snowflakeIntegrationAccountPrivateKeyAuth.internalValue = value;
  }
  public resetSnowflakeIntegrationAccountPrivateKeyAuth() {
    this._snowflakeIntegrationAccountPrivateKeyAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeIntegrationAccountPrivateKeyAuthInput() {
    return this._snowflakeIntegrationAccountPrivateKeyAuth.internalValue;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings {
  /**
  * The period each metric aggregates over. When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#account_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#account_usage_metrics_aggregate_last_24h}
  */
  readonly accountUsageMetricsAggregateLast24H?: boolean | cdktn.IResolvable;
}

export function integrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_usage_metrics_aggregate_last_24h: cdktn.booleanToTerraform(struct!.accountUsageMetricsAggregateLast24H),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_usage_metrics_aggregate_last_24h: {
      value: cdktn.booleanToHclTerraform(struct!.accountUsageMetricsAggregateLast24H),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountUsageMetricsAggregateLast24H !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUsageMetricsAggregateLast24H = this._accountUsageMetricsAggregateLast24H;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountUsageMetricsAggregateLast24H = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountUsageMetricsAggregateLast24H = value.accountUsageMetricsAggregateLast24H;
    }
  }

  // account_usage_metrics_aggregate_last_24h - computed: true, optional: true, required: false
  private _accountUsageMetricsAggregateLast24H?: boolean | cdktn.IResolvable; 
  public get accountUsageMetricsAggregateLast24H() {
    return this.getBooleanAttribute('account_usage_metrics_aggregate_last_24h');
  }
  public set accountUsageMetricsAggregateLast24H(value: boolean | cdktn.IResolvable) {
    this._accountUsageMetricsAggregateLast24H = value;
  }
  public resetAccountUsageMetricsAggregateLast24H() {
    this._accountUsageMetricsAggregateLast24H = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUsageMetricsAggregateLast24HInput() {
    return this._accountUsageMetricsAggregateLast24H;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Settings of the account usage metrics dataflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}
  */
  readonly settings?: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings;
}

export function integrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings: integrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsToTerraform(struct!.settings),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics | cdktn.IResolvable): any {
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
    settings: {
      value: integrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._settings.internalValue = value.settings;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings {
  /**
  * Snowflake query tags ingested as a comma-separated list of tag names, so that cost data can be broken down by them in Cloud Cost Management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#query_tags IntegrationSnowflakeAccount#query_tags}
  */
  readonly queryTags?: string;
}

export function integrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_tags: cdktn.stringToTerraform(struct!.queryTags),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_tags: {
      value: cdktn.stringToHclTerraform(struct!.queryTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTags = this._queryTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryTags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryTags = value.queryTags;
    }
  }

  // query_tags - computed: true, optional: true, required: false
  private _queryTags?: string; 
  public get queryTags() {
    return this.getStringAttribute('query_tags');
  }
  public set queryTags(value: string) {
    this._queryTags = value;
  }
  public resetQueryTags() {
    this._queryTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTagsInput() {
    return this._queryTags;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Settings of the Cloud Cost Management dataflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}
  */
  readonly settings?: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings;
}

export function integrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings: integrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsToTerraform(struct!.settings),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics | cdktn.IResolvable): any {
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
    settings: {
      value: integrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._settings.internalValue = value.settings;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings {
  /**
  * Cron expression setting how often Datadog crawls your Snowflake table metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#do_table_crawler_cron IntegrationSnowflakeAccount#do_table_crawler_cron}
  */
  readonly doTableCrawlerCron?: string;
  /**
  * Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#sync_snowflake_system_database IntegrationSnowflakeAccount#sync_snowflake_system_database}
  */
  readonly syncSnowflakeSystemDatabase?: boolean | cdktn.IResolvable;
}

export function integrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    do_table_crawler_cron: cdktn.stringToTerraform(struct!.doTableCrawlerCron),
    sync_snowflake_system_database: cdktn.booleanToTerraform(struct!.syncSnowflakeSystemDatabase),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    do_table_crawler_cron: {
      value: cdktn.stringToHclTerraform(struct!.doTableCrawlerCron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_snowflake_system_database: {
      value: cdktn.booleanToHclTerraform(struct!.syncSnowflakeSystemDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doTableCrawlerCron !== undefined) {
      hasAnyValues = true;
      internalValueResult.doTableCrawlerCron = this._doTableCrawlerCron;
    }
    if (this._syncSnowflakeSystemDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSnowflakeSystemDatabase = this._syncSnowflakeSystemDatabase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doTableCrawlerCron = undefined;
      this._syncSnowflakeSystemDatabase = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doTableCrawlerCron = value.doTableCrawlerCron;
      this._syncSnowflakeSystemDatabase = value.syncSnowflakeSystemDatabase;
    }
  }

  // do_table_crawler_cron - computed: true, optional: true, required: false
  private _doTableCrawlerCron?: string; 
  public get doTableCrawlerCron() {
    return this.getStringAttribute('do_table_crawler_cron');
  }
  public set doTableCrawlerCron(value: string) {
    this._doTableCrawlerCron = value;
  }
  public resetDoTableCrawlerCron() {
    this._doTableCrawlerCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doTableCrawlerCronInput() {
    return this._doTableCrawlerCron;
  }

  // sync_snowflake_system_database - computed: true, optional: true, required: false
  private _syncSnowflakeSystemDatabase?: boolean | cdktn.IResolvable; 
  public get syncSnowflakeSystemDatabase() {
    return this.getBooleanAttribute('sync_snowflake_system_database');
  }
  public set syncSnowflakeSystemDatabase(value: boolean | cdktn.IResolvable) {
    this._syncSnowflakeSystemDatabase = value;
  }
  public resetSyncSnowflakeSystemDatabase() {
    this._syncSnowflakeSystemDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSnowflakeSystemDatabaseInput() {
    return this._syncSnowflakeSystemDatabase;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Settings of the Data Observability dataflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}
  */
  readonly settings?: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings;
}

export function integrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings: integrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsToTerraform(struct!.settings),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring | cdktn.IResolvable): any {
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
    settings: {
      value: integrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._settings.internalValue = value.settings;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings {
  /**
  * Whether records with a `record_type` of `event` are collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#event_table_events_enabled IntegrationSnowflakeAccount#event_table_events_enabled}
  */
  readonly eventTableEventsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether records with a `record_type` of `log` are collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#event_table_logs_enabled IntegrationSnowflakeAccount#event_table_logs_enabled}
  */
  readonly eventTableLogsEnabled?: boolean | cdktn.IResolvable;
  /**
  * How often event table records are collected, in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#event_table_logs_interval_min IntegrationSnowflakeAccount#event_table_logs_interval_min}
  */
  readonly eventTableLogsIntervalMin?: number;
  /**
  * Whether records with a `record_type` of `span_event` are collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#event_table_span_events_enabled IntegrationSnowflakeAccount#event_table_span_events_enabled}
  */
  readonly eventTableSpanEventsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether records with a `record_type` of `span` are collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#event_table_spans_enabled IntegrationSnowflakeAccount#event_table_spans_enabled}
  */
  readonly eventTableSpansEnabled?: boolean | cdktn.IResolvable;
}

export function integrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_table_events_enabled: cdktn.booleanToTerraform(struct!.eventTableEventsEnabled),
    event_table_logs_enabled: cdktn.booleanToTerraform(struct!.eventTableLogsEnabled),
    event_table_logs_interval_min: cdktn.numberToTerraform(struct!.eventTableLogsIntervalMin),
    event_table_span_events_enabled: cdktn.booleanToTerraform(struct!.eventTableSpanEventsEnabled),
    event_table_spans_enabled: cdktn.booleanToTerraform(struct!.eventTableSpansEnabled),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_table_events_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.eventTableEventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_table_logs_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.eventTableLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_table_logs_interval_min: {
      value: cdktn.numberToHclTerraform(struct!.eventTableLogsIntervalMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_table_span_events_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.eventTableSpanEventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_table_spans_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.eventTableSpansEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventTableEventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTableEventsEnabled = this._eventTableEventsEnabled;
    }
    if (this._eventTableLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTableLogsEnabled = this._eventTableLogsEnabled;
    }
    if (this._eventTableLogsIntervalMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTableLogsIntervalMin = this._eventTableLogsIntervalMin;
    }
    if (this._eventTableSpanEventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTableSpanEventsEnabled = this._eventTableSpanEventsEnabled;
    }
    if (this._eventTableSpansEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTableSpansEnabled = this._eventTableSpansEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventTableEventsEnabled = undefined;
      this._eventTableLogsEnabled = undefined;
      this._eventTableLogsIntervalMin = undefined;
      this._eventTableSpanEventsEnabled = undefined;
      this._eventTableSpansEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventTableEventsEnabled = value.eventTableEventsEnabled;
      this._eventTableLogsEnabled = value.eventTableLogsEnabled;
      this._eventTableLogsIntervalMin = value.eventTableLogsIntervalMin;
      this._eventTableSpanEventsEnabled = value.eventTableSpanEventsEnabled;
      this._eventTableSpansEnabled = value.eventTableSpansEnabled;
    }
  }

  // event_table_events_enabled - computed: true, optional: true, required: false
  private _eventTableEventsEnabled?: boolean | cdktn.IResolvable; 
  public get eventTableEventsEnabled() {
    return this.getBooleanAttribute('event_table_events_enabled');
  }
  public set eventTableEventsEnabled(value: boolean | cdktn.IResolvable) {
    this._eventTableEventsEnabled = value;
  }
  public resetEventTableEventsEnabled() {
    this._eventTableEventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTableEventsEnabledInput() {
    return this._eventTableEventsEnabled;
  }

  // event_table_logs_enabled - computed: true, optional: true, required: false
  private _eventTableLogsEnabled?: boolean | cdktn.IResolvable; 
  public get eventTableLogsEnabled() {
    return this.getBooleanAttribute('event_table_logs_enabled');
  }
  public set eventTableLogsEnabled(value: boolean | cdktn.IResolvable) {
    this._eventTableLogsEnabled = value;
  }
  public resetEventTableLogsEnabled() {
    this._eventTableLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTableLogsEnabledInput() {
    return this._eventTableLogsEnabled;
  }

  // event_table_logs_interval_min - computed: true, optional: true, required: false
  private _eventTableLogsIntervalMin?: number; 
  public get eventTableLogsIntervalMin() {
    return this.getNumberAttribute('event_table_logs_interval_min');
  }
  public set eventTableLogsIntervalMin(value: number) {
    this._eventTableLogsIntervalMin = value;
  }
  public resetEventTableLogsIntervalMin() {
    this._eventTableLogsIntervalMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTableLogsIntervalMinInput() {
    return this._eventTableLogsIntervalMin;
  }

  // event_table_span_events_enabled - computed: true, optional: true, required: false
  private _eventTableSpanEventsEnabled?: boolean | cdktn.IResolvable; 
  public get eventTableSpanEventsEnabled() {
    return this.getBooleanAttribute('event_table_span_events_enabled');
  }
  public set eventTableSpanEventsEnabled(value: boolean | cdktn.IResolvable) {
    this._eventTableSpanEventsEnabled = value;
  }
  public resetEventTableSpanEventsEnabled() {
    this._eventTableSpanEventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTableSpanEventsEnabledInput() {
    return this._eventTableSpanEventsEnabled;
  }

  // event_table_spans_enabled - computed: true, optional: true, required: false
  private _eventTableSpansEnabled?: boolean | cdktn.IResolvable; 
  public get eventTableSpansEnabled() {
    return this.getBooleanAttribute('event_table_spans_enabled');
  }
  public set eventTableSpansEnabled(value: boolean | cdktn.IResolvable) {
    this._eventTableSpansEnabled = value;
  }
  public resetEventTableSpansEnabled() {
    this._eventTableSpansEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTableSpansEnabledInput() {
    return this._eventTableSpansEnabled;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Settings of the event table dataflow. Each record type is collected independently so that you can control ingestion costs, and every record type is ingested into Datadog as logs tagged with its `record_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}
  */
  readonly settings?: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings;
}

export function integrationSnowflakeAccountDataflowsSnowflakeEventTableLogsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings: integrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsToTerraform(struct!.settings),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeEventTableLogsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs | cdktn.IResolvable): any {
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
    settings: {
      value: integrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._settings.internalValue = value.settings;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings {
  /**
  * The period each metric aggregates over. When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#organization_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#organization_usage_metrics_aggregate_last_24h}
  */
  readonly organizationUsageMetricsAggregateLast24H?: boolean | cdktn.IResolvable;
}

export function integrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    organization_usage_metrics_aggregate_last_24h: cdktn.booleanToTerraform(struct!.organizationUsageMetricsAggregateLast24H),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    organization_usage_metrics_aggregate_last_24h: {
      value: cdktn.booleanToHclTerraform(struct!.organizationUsageMetricsAggregateLast24H),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationUsageMetricsAggregateLast24H !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationUsageMetricsAggregateLast24H = this._organizationUsageMetricsAggregateLast24H;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._organizationUsageMetricsAggregateLast24H = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._organizationUsageMetricsAggregateLast24H = value.organizationUsageMetricsAggregateLast24H;
    }
  }

  // organization_usage_metrics_aggregate_last_24h - computed: true, optional: true, required: false
  private _organizationUsageMetricsAggregateLast24H?: boolean | cdktn.IResolvable; 
  public get organizationUsageMetricsAggregateLast24H() {
    return this.getBooleanAttribute('organization_usage_metrics_aggregate_last_24h');
  }
  public set organizationUsageMetricsAggregateLast24H(value: boolean | cdktn.IResolvable) {
    this._organizationUsageMetricsAggregateLast24H = value;
  }
  public resetOrganizationUsageMetricsAggregateLast24H() {
    this._organizationUsageMetricsAggregateLast24H = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUsageMetricsAggregateLast24HInput() {
    return this._organizationUsageMetricsAggregateLast24H;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Settings of the organization usage metrics dataflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}
  */
  readonly settings?: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings;
}

export function integrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings: integrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsToTerraform(struct!.settings),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics | cdktn.IResolvable): any {
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
    settings: {
      value: integrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._settings.internalValue = value.settings;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings {
  /**
  * Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#join_query_history_with_access_history_enabled IntegrationSnowflakeAccount#join_query_history_with_access_history_enabled}
  */
  readonly joinQueryHistoryWithAccessHistoryEnabled?: boolean | cdktn.IResolvable;
  /**
  * How often query history logs are collected, in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#query_history_logs_interval_min IntegrationSnowflakeAccount#query_history_logs_interval_min}
  */
  readonly queryHistoryLogsIntervalMin?: number;
}

export function integrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    join_query_history_with_access_history_enabled: cdktn.booleanToTerraform(struct!.joinQueryHistoryWithAccessHistoryEnabled),
    query_history_logs_interval_min: cdktn.numberToTerraform(struct!.queryHistoryLogsIntervalMin),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    join_query_history_with_access_history_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.joinQueryHistoryWithAccessHistoryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_history_logs_interval_min: {
      value: cdktn.numberToHclTerraform(struct!.queryHistoryLogsIntervalMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._joinQueryHistoryWithAccessHistoryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinQueryHistoryWithAccessHistoryEnabled = this._joinQueryHistoryWithAccessHistoryEnabled;
    }
    if (this._queryHistoryLogsIntervalMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryHistoryLogsIntervalMin = this._queryHistoryLogsIntervalMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._joinQueryHistoryWithAccessHistoryEnabled = undefined;
      this._queryHistoryLogsIntervalMin = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._joinQueryHistoryWithAccessHistoryEnabled = value.joinQueryHistoryWithAccessHistoryEnabled;
      this._queryHistoryLogsIntervalMin = value.queryHistoryLogsIntervalMin;
    }
  }

  // join_query_history_with_access_history_enabled - computed: true, optional: true, required: false
  private _joinQueryHistoryWithAccessHistoryEnabled?: boolean | cdktn.IResolvable; 
  public get joinQueryHistoryWithAccessHistoryEnabled() {
    return this.getBooleanAttribute('join_query_history_with_access_history_enabled');
  }
  public set joinQueryHistoryWithAccessHistoryEnabled(value: boolean | cdktn.IResolvable) {
    this._joinQueryHistoryWithAccessHistoryEnabled = value;
  }
  public resetJoinQueryHistoryWithAccessHistoryEnabled() {
    this._joinQueryHistoryWithAccessHistoryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinQueryHistoryWithAccessHistoryEnabledInput() {
    return this._joinQueryHistoryWithAccessHistoryEnabled;
  }

  // query_history_logs_interval_min - computed: true, optional: true, required: false
  private _queryHistoryLogsIntervalMin?: number; 
  public get queryHistoryLogsIntervalMin() {
    return this.getNumberAttribute('query_history_logs_interval_min');
  }
  public set queryHistoryLogsIntervalMin(value: number) {
    this._queryHistoryLogsIntervalMin = value;
  }
  public resetQueryHistoryLogsIntervalMin() {
    this._queryHistoryLogsIntervalMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryHistoryLogsIntervalMinInput() {
    return this._queryHistoryLogsIntervalMin;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Settings of the query history logs dataflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}
  */
  readonly settings?: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings;
}

export function integrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings: integrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsToTerraform(struct!.settings),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs | cdktn.IResolvable): any {
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
    settings: {
      value: integrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._settings.internalValue = value.settings;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings {
  /**
  * How often security logs are collected, in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#security_logs_interval_min IntegrationSnowflakeAccount#security_logs_interval_min}
  */
  readonly securityLogsIntervalMin?: number;
}

export function integrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_logs_interval_min: cdktn.numberToTerraform(struct!.securityLogsIntervalMin),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_logs_interval_min: {
      value: cdktn.numberToHclTerraform(struct!.securityLogsIntervalMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityLogsIntervalMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLogsIntervalMin = this._securityLogsIntervalMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityLogsIntervalMin = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityLogsIntervalMin = value.securityLogsIntervalMin;
    }
  }

  // security_logs_interval_min - computed: true, optional: true, required: false
  private _securityLogsIntervalMin?: number; 
  public get securityLogsIntervalMin() {
    return this.getNumberAttribute('security_logs_interval_min');
  }
  public set securityLogsIntervalMin(value: number) {
    this._securityLogsIntervalMin = value;
  }
  public resetSecurityLogsIntervalMin() {
    this._securityLogsIntervalMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLogsIntervalMinInput() {
    return this._securityLogsIntervalMin;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Settings of the security logs dataflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}
  */
  readonly settings?: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings;
}

export function integrationSnowflakeAccountDataflowsSnowflakeSecurityLogsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings: integrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsToTerraform(struct!.settings),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeSecurityLogsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs | cdktn.IResolvable): any {
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
    settings: {
      value: integrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._settings.internalValue = value.settings;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings {
  /**
  * How often task history logs are collected, in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#task_history_logs_interval_min IntegrationSnowflakeAccount#task_history_logs_interval_min}
  */
  readonly taskHistoryLogsIntervalMin?: number;
}

export function integrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    task_history_logs_interval_min: cdktn.numberToTerraform(struct!.taskHistoryLogsIntervalMin),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    task_history_logs_interval_min: {
      value: cdktn.numberToHclTerraform(struct!.taskHistoryLogsIntervalMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taskHistoryLogsIntervalMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskHistoryLogsIntervalMin = this._taskHistoryLogsIntervalMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taskHistoryLogsIntervalMin = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taskHistoryLogsIntervalMin = value.taskHistoryLogsIntervalMin;
    }
  }

  // task_history_logs_interval_min - computed: true, optional: true, required: false
  private _taskHistoryLogsIntervalMin?: number; 
  public get taskHistoryLogsIntervalMin() {
    return this.getNumberAttribute('task_history_logs_interval_min');
  }
  public set taskHistoryLogsIntervalMin(value: number) {
    this._taskHistoryLogsIntervalMin = value;
  }
  public resetTaskHistoryLogsIntervalMin() {
    this._taskHistoryLogsIntervalMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskHistoryLogsIntervalMinInput() {
    return this._taskHistoryLogsIntervalMin;
  }
}
export interface IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Settings of the task history logs dataflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}
  */
  readonly settings?: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings;
}

export function integrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsToTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings: integrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsToTerraform(struct!.settings),
  }
}


export function integrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs | cdktn.IResolvable): any {
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
    settings: {
      value: integrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._settings.internalValue = value.settings;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface IntegrationSnowflakeAccountDataflows {
  /**
  * Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#snowflake_account_usage_metrics IntegrationSnowflakeAccount#snowflake_account_usage_metrics}
  */
  readonly snowflakeAccountUsageMetrics?: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics;
  /**
  * Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization, and the ORGANIZATION_BILLING_VIEWER database role on the Snowflake role; without both this dataflow collects no data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#snowflake_cloud_cost_metrics IntegrationSnowflakeAccount#snowflake_cloud_cost_metrics}
  */
  readonly snowflakeCloudCostMetrics?: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics;
  /**
  * Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#snowflake_data_observability_quality_monitoring IntegrationSnowflakeAccount#snowflake_data_observability_quality_monitoring}
  */
  readonly snowflakeDataObservabilityQualityMonitoring?: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring;
  /**
  * Records from your Snowflake event tables, used to monitor application behavior and identify issues. `enabled` turns the dataflow on and off as a whole, and the per-record-type toggles in `settings` select which kinds of record it collects while it is on. The Snowflake role needs usage granted on the database, the schema, and the event table itself; without those grants this dataflow collects no data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#snowflake_event_table_logs IntegrationSnowflakeAccount#snowflake_event_table_logs}
  */
  readonly snowflakeEventTableLogs?: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs;
  /**
  * Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake. Reading that schema requires the ORGADMIN role; without it this dataflow collects no data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#snowflake_organization_usage_metrics IntegrationSnowflakeAccount#snowflake_organization_usage_metrics}
  */
  readonly snowflakeOrganizationUsageMetrics?: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics;
  /**
  * Per-query logs that let you identify long-running, poorly performing, and expensive queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#snowflake_query_history_logs IntegrationSnowflakeAccount#snowflake_query_history_logs}
  */
  readonly snowflakeQueryHistoryLogs?: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs;
  /**
  * Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#snowflake_security_logs IntegrationSnowflakeAccount#snowflake_security_logs}
  */
  readonly snowflakeSecurityLogs?: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs;
  /**
  * Execution logs for your scheduled Snowflake tasks, covering start time, end time, status, and any error message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#snowflake_task_history_logs IntegrationSnowflakeAccount#snowflake_task_history_logs}
  */
  readonly snowflakeTaskHistoryLogs?: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs;
}

export function integrationSnowflakeAccountDataflowsToTerraform(struct?: IntegrationSnowflakeAccountDataflows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    snowflake_account_usage_metrics: integrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsToTerraform(struct!.snowflakeAccountUsageMetrics),
    snowflake_cloud_cost_metrics: integrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsToTerraform(struct!.snowflakeCloudCostMetrics),
    snowflake_data_observability_quality_monitoring: integrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringToTerraform(struct!.snowflakeDataObservabilityQualityMonitoring),
    snowflake_event_table_logs: integrationSnowflakeAccountDataflowsSnowflakeEventTableLogsToTerraform(struct!.snowflakeEventTableLogs),
    snowflake_organization_usage_metrics: integrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsToTerraform(struct!.snowflakeOrganizationUsageMetrics),
    snowflake_query_history_logs: integrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsToTerraform(struct!.snowflakeQueryHistoryLogs),
    snowflake_security_logs: integrationSnowflakeAccountDataflowsSnowflakeSecurityLogsToTerraform(struct!.snowflakeSecurityLogs),
    snowflake_task_history_logs: integrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsToTerraform(struct!.snowflakeTaskHistoryLogs),
  }
}


export function integrationSnowflakeAccountDataflowsToHclTerraform(struct?: IntegrationSnowflakeAccountDataflows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    snowflake_account_usage_metrics: {
      value: integrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsToHclTerraform(struct!.snowflakeAccountUsageMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics",
    },
    snowflake_cloud_cost_metrics: {
      value: integrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsToHclTerraform(struct!.snowflakeCloudCostMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics",
    },
    snowflake_data_observability_quality_monitoring: {
      value: integrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringToHclTerraform(struct!.snowflakeDataObservabilityQualityMonitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring",
    },
    snowflake_event_table_logs: {
      value: integrationSnowflakeAccountDataflowsSnowflakeEventTableLogsToHclTerraform(struct!.snowflakeEventTableLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs",
    },
    snowflake_organization_usage_metrics: {
      value: integrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsToHclTerraform(struct!.snowflakeOrganizationUsageMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics",
    },
    snowflake_query_history_logs: {
      value: integrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsToHclTerraform(struct!.snowflakeQueryHistoryLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs",
    },
    snowflake_security_logs: {
      value: integrationSnowflakeAccountDataflowsSnowflakeSecurityLogsToHclTerraform(struct!.snowflakeSecurityLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs",
    },
    snowflake_task_history_logs: {
      value: integrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsToHclTerraform(struct!.snowflakeTaskHistoryLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSnowflakeAccountDataflowsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountDataflows | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snowflakeAccountUsageMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeAccountUsageMetrics = this._snowflakeAccountUsageMetrics?.internalValue;
    }
    if (this._snowflakeCloudCostMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeCloudCostMetrics = this._snowflakeCloudCostMetrics?.internalValue;
    }
    if (this._snowflakeDataObservabilityQualityMonitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeDataObservabilityQualityMonitoring = this._snowflakeDataObservabilityQualityMonitoring?.internalValue;
    }
    if (this._snowflakeEventTableLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeEventTableLogs = this._snowflakeEventTableLogs?.internalValue;
    }
    if (this._snowflakeOrganizationUsageMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeOrganizationUsageMetrics = this._snowflakeOrganizationUsageMetrics?.internalValue;
    }
    if (this._snowflakeQueryHistoryLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeQueryHistoryLogs = this._snowflakeQueryHistoryLogs?.internalValue;
    }
    if (this._snowflakeSecurityLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeSecurityLogs = this._snowflakeSecurityLogs?.internalValue;
    }
    if (this._snowflakeTaskHistoryLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeTaskHistoryLogs = this._snowflakeTaskHistoryLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountDataflows | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snowflakeAccountUsageMetrics.internalValue = undefined;
      this._snowflakeCloudCostMetrics.internalValue = undefined;
      this._snowflakeDataObservabilityQualityMonitoring.internalValue = undefined;
      this._snowflakeEventTableLogs.internalValue = undefined;
      this._snowflakeOrganizationUsageMetrics.internalValue = undefined;
      this._snowflakeQueryHistoryLogs.internalValue = undefined;
      this._snowflakeSecurityLogs.internalValue = undefined;
      this._snowflakeTaskHistoryLogs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snowflakeAccountUsageMetrics.internalValue = value.snowflakeAccountUsageMetrics;
      this._snowflakeCloudCostMetrics.internalValue = value.snowflakeCloudCostMetrics;
      this._snowflakeDataObservabilityQualityMonitoring.internalValue = value.snowflakeDataObservabilityQualityMonitoring;
      this._snowflakeEventTableLogs.internalValue = value.snowflakeEventTableLogs;
      this._snowflakeOrganizationUsageMetrics.internalValue = value.snowflakeOrganizationUsageMetrics;
      this._snowflakeQueryHistoryLogs.internalValue = value.snowflakeQueryHistoryLogs;
      this._snowflakeSecurityLogs.internalValue = value.snowflakeSecurityLogs;
      this._snowflakeTaskHistoryLogs.internalValue = value.snowflakeTaskHistoryLogs;
    }
  }

  // snowflake_account_usage_metrics - computed: true, optional: true, required: false
  private _snowflakeAccountUsageMetrics = new IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference(this, "snowflake_account_usage_metrics");
  public get snowflakeAccountUsageMetrics() {
    return this._snowflakeAccountUsageMetrics;
  }
  public putSnowflakeAccountUsageMetrics(value: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics) {
    this._snowflakeAccountUsageMetrics.internalValue = value;
  }
  public resetSnowflakeAccountUsageMetrics() {
    this._snowflakeAccountUsageMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeAccountUsageMetricsInput() {
    return this._snowflakeAccountUsageMetrics.internalValue;
  }

  // snowflake_cloud_cost_metrics - computed: true, optional: true, required: false
  private _snowflakeCloudCostMetrics = new IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference(this, "snowflake_cloud_cost_metrics");
  public get snowflakeCloudCostMetrics() {
    return this._snowflakeCloudCostMetrics;
  }
  public putSnowflakeCloudCostMetrics(value: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics) {
    this._snowflakeCloudCostMetrics.internalValue = value;
  }
  public resetSnowflakeCloudCostMetrics() {
    this._snowflakeCloudCostMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeCloudCostMetricsInput() {
    return this._snowflakeCloudCostMetrics.internalValue;
  }

  // snowflake_data_observability_quality_monitoring - computed: true, optional: true, required: false
  private _snowflakeDataObservabilityQualityMonitoring = new IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference(this, "snowflake_data_observability_quality_monitoring");
  public get snowflakeDataObservabilityQualityMonitoring() {
    return this._snowflakeDataObservabilityQualityMonitoring;
  }
  public putSnowflakeDataObservabilityQualityMonitoring(value: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring) {
    this._snowflakeDataObservabilityQualityMonitoring.internalValue = value;
  }
  public resetSnowflakeDataObservabilityQualityMonitoring() {
    this._snowflakeDataObservabilityQualityMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeDataObservabilityQualityMonitoringInput() {
    return this._snowflakeDataObservabilityQualityMonitoring.internalValue;
  }

  // snowflake_event_table_logs - computed: true, optional: true, required: false
  private _snowflakeEventTableLogs = new IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference(this, "snowflake_event_table_logs");
  public get snowflakeEventTableLogs() {
    return this._snowflakeEventTableLogs;
  }
  public putSnowflakeEventTableLogs(value: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs) {
    this._snowflakeEventTableLogs.internalValue = value;
  }
  public resetSnowflakeEventTableLogs() {
    this._snowflakeEventTableLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeEventTableLogsInput() {
    return this._snowflakeEventTableLogs.internalValue;
  }

  // snowflake_organization_usage_metrics - computed: true, optional: true, required: false
  private _snowflakeOrganizationUsageMetrics = new IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference(this, "snowflake_organization_usage_metrics");
  public get snowflakeOrganizationUsageMetrics() {
    return this._snowflakeOrganizationUsageMetrics;
  }
  public putSnowflakeOrganizationUsageMetrics(value: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics) {
    this._snowflakeOrganizationUsageMetrics.internalValue = value;
  }
  public resetSnowflakeOrganizationUsageMetrics() {
    this._snowflakeOrganizationUsageMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeOrganizationUsageMetricsInput() {
    return this._snowflakeOrganizationUsageMetrics.internalValue;
  }

  // snowflake_query_history_logs - computed: true, optional: true, required: false
  private _snowflakeQueryHistoryLogs = new IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference(this, "snowflake_query_history_logs");
  public get snowflakeQueryHistoryLogs() {
    return this._snowflakeQueryHistoryLogs;
  }
  public putSnowflakeQueryHistoryLogs(value: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs) {
    this._snowflakeQueryHistoryLogs.internalValue = value;
  }
  public resetSnowflakeQueryHistoryLogs() {
    this._snowflakeQueryHistoryLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeQueryHistoryLogsInput() {
    return this._snowflakeQueryHistoryLogs.internalValue;
  }

  // snowflake_security_logs - computed: true, optional: true, required: false
  private _snowflakeSecurityLogs = new IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference(this, "snowflake_security_logs");
  public get snowflakeSecurityLogs() {
    return this._snowflakeSecurityLogs;
  }
  public putSnowflakeSecurityLogs(value: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs) {
    this._snowflakeSecurityLogs.internalValue = value;
  }
  public resetSnowflakeSecurityLogs() {
    this._snowflakeSecurityLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeSecurityLogsInput() {
    return this._snowflakeSecurityLogs.internalValue;
  }

  // snowflake_task_history_logs - computed: true, optional: true, required: false
  private _snowflakeTaskHistoryLogs = new IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference(this, "snowflake_task_history_logs");
  public get snowflakeTaskHistoryLogs() {
    return this._snowflakeTaskHistoryLogs;
  }
  public putSnowflakeTaskHistoryLogs(value: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs) {
    this._snowflakeTaskHistoryLogs.internalValue = value;
  }
  public resetSnowflakeTaskHistoryLogs() {
    this._snowflakeTaskHistoryLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeTaskHistoryLogsInput() {
    return this._snowflakeTaskHistoryLogs.internalValue;
  }
}
export interface IntegrationSnowflakeAccountSettings {
  /**
  * Identifier of the Snowflake account being monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#snowflake_account_identifier IntegrationSnowflakeAccount#snowflake_account_identifier}
  */
  readonly snowflakeAccountIdentifier: string;
  /**
  * Snowflake user Datadog authenticates as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#username IntegrationSnowflakeAccount#username}
  */
  readonly username: string;
}

export function integrationSnowflakeAccountSettingsToTerraform(struct?: IntegrationSnowflakeAccountSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    snowflake_account_identifier: cdktn.stringToTerraform(struct!.snowflakeAccountIdentifier),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function integrationSnowflakeAccountSettingsToHclTerraform(struct?: IntegrationSnowflakeAccountSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    snowflake_account_identifier: {
      value: cdktn.stringToHclTerraform(struct!.snowflakeAccountIdentifier),
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

export class IntegrationSnowflakeAccountSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationSnowflakeAccountSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snowflakeAccountIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeAccountIdentifier = this._snowflakeAccountIdentifier;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSnowflakeAccountSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snowflakeAccountIdentifier = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snowflakeAccountIdentifier = value.snowflakeAccountIdentifier;
      this._username = value.username;
    }
  }

  // snowflake_account_identifier - computed: false, optional: false, required: true
  private _snowflakeAccountIdentifier?: string; 
  public get snowflakeAccountIdentifier() {
    return this.getStringAttribute('snowflake_account_identifier');
  }
  public set snowflakeAccountIdentifier(value: string) {
    this._snowflakeAccountIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeAccountIdentifierInput() {
    return this._snowflakeAccountIdentifier;
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

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account datadog_integration_snowflake_account}
*/
export class IntegrationSnowflakeAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_snowflake_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IntegrationSnowflakeAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationSnowflakeAccount to import
  * @param importFromId The id of the existing IntegrationSnowflakeAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationSnowflakeAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_snowflake_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.23.0/docs/resources/integration_snowflake_account datadog_integration_snowflake_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationSnowflakeAccountConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationSnowflakeAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_snowflake_account',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.23.0',
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
  private _authentication = new IntegrationSnowflakeAccountAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: IntegrationSnowflakeAccountAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // dataflows - computed: true, optional: true, required: false
  private _dataflows = new IntegrationSnowflakeAccountDataflowsOutputReference(this, "dataflows");
  public get dataflows() {
    return this._dataflows;
  }
  public putDataflows(value: IntegrationSnowflakeAccountDataflows) {
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
  private _settings = new IntegrationSnowflakeAccountSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationSnowflakeAccountSettings) {
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
      authentication: integrationSnowflakeAccountAuthenticationToTerraform(this._authentication.internalValue),
      dataflows: integrationSnowflakeAccountDataflowsToTerraform(this._dataflows.internalValue),
      name: cdktn.stringToTerraform(this._name),
      settings: integrationSnowflakeAccountSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: integrationSnowflakeAccountAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationSnowflakeAccountAuthentication",
      },
      dataflows: {
        value: integrationSnowflakeAccountDataflowsToHclTerraform(this._dataflows.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationSnowflakeAccountDataflows",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: integrationSnowflakeAccountSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationSnowflakeAccountSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
