/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IntegrationTwilioAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Authentication configured on the Twilio integration account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#authentication IntegrationTwilioAccount#authentication}
  */
  readonly authentication: IntegrationTwilioAccountAuthentication;
  /**
  * Data Datadog collects from Twilio, keyed by dataflow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#dataflows IntegrationTwilioAccount#dataflows}
  */
  readonly dataflows?: IntegrationTwilioAccountDataflows;
  /**
  * Human-readable name of the Twilio integration account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#name IntegrationTwilioAccount#name}
  */
  readonly name: string;
  /**
  * Settings configured on the Twilio integration account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#settings IntegrationTwilioAccount#settings}
  */
  readonly settings: IntegrationTwilioAccountSettings;
}
export interface IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth {
  /**
  * The authentication method type. Valid values are `basic`. Defaults to `"basic"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#auth_type IntegrationTwilioAccount#auth_type}
  */
  readonly authType?: string;
  /**
  * Secret password or private key. This write-only value is not stored in Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#password_wo IntegrationTwilioAccount#password_wo}
  */
  readonly passwordWo: string;
  /**
  * Version trigger for password_wo rotation. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#password_wo_version IntegrationTwilioAccount#password_wo_version}
  */
  readonly passwordWoVersion: string;
  /**
  * Non-secret username or public identifier for the credential pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#username IntegrationTwilioAccount#username}
  */
  readonly username: string;
}

export function integrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthToTerraform(struct?: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth | cdktn.IResolvable): any {
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


export function integrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthToHclTerraform(struct?: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth | cdktn.IResolvable): any {
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

export class IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth | cdktn.IResolvable | undefined) {
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
export interface IntegrationTwilioAccountAuthentication {
  /**
  * The basic authentication method and username configured on the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_integration_account_basic_auth IntegrationTwilioAccount#twilio_integration_account_basic_auth}
  */
  readonly twilioIntegrationAccountBasicAuth?: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth;
}

export function integrationTwilioAccountAuthenticationToTerraform(struct?: IntegrationTwilioAccountAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    twilio_integration_account_basic_auth: integrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthToTerraform(struct!.twilioIntegrationAccountBasicAuth),
  }
}


export function integrationTwilioAccountAuthenticationToHclTerraform(struct?: IntegrationTwilioAccountAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    twilio_integration_account_basic_auth: {
      value: integrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthToHclTerraform(struct!.twilioIntegrationAccountBasicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationTwilioAccountAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._twilioIntegrationAccountBasicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioIntegrationAccountBasicAuth = this._twilioIntegrationAccountBasicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationTwilioAccountAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._twilioIntegrationAccountBasicAuth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._twilioIntegrationAccountBasicAuth.internalValue = value.twilioIntegrationAccountBasicAuth;
    }
  }

  // twilio_integration_account_basic_auth - computed: false, optional: true, required: false
  private _twilioIntegrationAccountBasicAuth = new IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference(this, "twilio_integration_account_basic_auth");
  public get twilioIntegrationAccountBasicAuth() {
    return this._twilioIntegrationAccountBasicAuth;
  }
  public putTwilioIntegrationAccountBasicAuth(value: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth) {
    this._twilioIntegrationAccountBasicAuth.internalValue = value;
  }
  public resetTwilioIntegrationAccountBasicAuth() {
    this._twilioIntegrationAccountBasicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioIntegrationAccountBasicAuthInput() {
    return this._twilioIntegrationAccountBasicAuth.internalValue;
  }
}
export interface IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus {
}

export function integrationTwilioAccountDataflowsTwilioAlertsLogsStatusToTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationTwilioAccountDataflowsTwilioAlertsLogsStatusToHclTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus | undefined) {
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
export interface IntegrationTwilioAccountDataflowsTwilioAlertsLogs {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationTwilioAccountDataflowsTwilioAlertsLogsToTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioAlertsLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationTwilioAccountDataflowsTwilioAlertsLogsToHclTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioAlertsLogs | cdktn.IResolvable): any {
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

export class IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountDataflowsTwilioAlertsLogs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IntegrationTwilioAccountDataflowsTwilioAlertsLogs | cdktn.IResolvable | undefined) {
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
  private _status = new IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus {
}

export function integrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusToTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusToHclTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus | undefined) {
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
export interface IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationTwilioAccountDataflowsTwilioCallSummariesLogsToTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationTwilioAccountDataflowsTwilioCallSummariesLogsToHclTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs | cdktn.IResolvable): any {
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

export class IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs | cdktn.IResolvable | undefined) {
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
  private _status = new IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus {
}

export function integrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusToTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusToHclTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus | undefined) {
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
export interface IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationTwilioAccountDataflowsTwilioCloudCostMetricsToTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationTwilioAccountDataflowsTwilioCloudCostMetricsToHclTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics | cdktn.IResolvable): any {
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

export class IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics | cdktn.IResolvable | undefined) {
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
  private _status = new IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus {
}

export function integrationTwilioAccountDataflowsTwilioEventsLogsStatusToTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationTwilioAccountDataflowsTwilioEventsLogsStatusToHclTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus | undefined) {
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
export interface IntegrationTwilioAccountDataflowsTwilioEventsLogs {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationTwilioAccountDataflowsTwilioEventsLogsToTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioEventsLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationTwilioAccountDataflowsTwilioEventsLogsToHclTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioEventsLogs | cdktn.IResolvable): any {
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

export class IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountDataflowsTwilioEventsLogs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IntegrationTwilioAccountDataflowsTwilioEventsLogs | cdktn.IResolvable | undefined) {
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
  private _status = new IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus {
}

export function integrationTwilioAccountDataflowsTwilioMessagesLogsStatusToTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function integrationTwilioAccountDataflowsTwilioMessagesLogsStatusToHclTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus | undefined) {
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
export interface IntegrationTwilioAccountDataflowsTwilioMessagesLogs {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationTwilioAccountDataflowsTwilioMessagesLogsToTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioMessagesLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationTwilioAccountDataflowsTwilioMessagesLogsToHclTerraform(struct?: IntegrationTwilioAccountDataflowsTwilioMessagesLogs | cdktn.IResolvable): any {
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

export class IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountDataflowsTwilioMessagesLogs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IntegrationTwilioAccountDataflowsTwilioMessagesLogs | cdktn.IResolvable | undefined) {
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
  private _status = new IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface IntegrationTwilioAccountDataflows {
  /**
  * Twilio Alert resource logs, which detail the errors and warnings raised when Twilio makes a webhook request to your server or when your application calls the Twilio REST API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_alerts_logs IntegrationTwilioAccount#twilio_alerts_logs}
  */
  readonly twilioAlertsLogs?: IntegrationTwilioAccountDataflowsTwilioAlertsLogs;
  /**
  * Twilio Call Summary resource logs, covering the metadata and performance of the calls made from your Twilio account. Requires Voice Insights Advanced Features to be enabled on the Twilio account; without it this dataflow collects no data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_call_summaries_logs IntegrationTwilioAccount#twilio_call_summaries_logs}
  */
  readonly twilioCallSummariesLogs?: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs;
  /**
  * Your Twilio cost data, so that Twilio spend can be broken down and attributed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_cloud_cost_metrics IntegrationTwilioAccount#twilio_cloud_cost_metrics}
  */
  readonly twilioCloudCostMetrics?: IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics;
  /**
  * Twilio Event resource logs, which record virtually every action taken in your Twilio account, such as provisioning a phone number, changing account security settings, or deleting a recording. Actions are recorded whether they came from the REST API, a user in the Twilio Console, or Twilio itself. [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/) analyzes and correlates these logs to detect threats in real time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_events_logs IntegrationTwilioAccount#twilio_events_logs}
  */
  readonly twilioEventsLogs?: IntegrationTwilioAccountDataflowsTwilioEventsLogs;
  /**
  * Twilio Message resource logs for inbound and outbound messages, used to track delivery and troubleshoot message errors. A log is produced when you send a message through the REST API, when Twilio executes a TwiML instruction, and when someone messages one of your Twilio numbers or channel addresses. Message bodies are never collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_messages_logs IntegrationTwilioAccount#twilio_messages_logs}
  */
  readonly twilioMessagesLogs?: IntegrationTwilioAccountDataflowsTwilioMessagesLogs;
}

export function integrationTwilioAccountDataflowsToTerraform(struct?: IntegrationTwilioAccountDataflows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    twilio_alerts_logs: integrationTwilioAccountDataflowsTwilioAlertsLogsToTerraform(struct!.twilioAlertsLogs),
    twilio_call_summaries_logs: integrationTwilioAccountDataflowsTwilioCallSummariesLogsToTerraform(struct!.twilioCallSummariesLogs),
    twilio_cloud_cost_metrics: integrationTwilioAccountDataflowsTwilioCloudCostMetricsToTerraform(struct!.twilioCloudCostMetrics),
    twilio_events_logs: integrationTwilioAccountDataflowsTwilioEventsLogsToTerraform(struct!.twilioEventsLogs),
    twilio_messages_logs: integrationTwilioAccountDataflowsTwilioMessagesLogsToTerraform(struct!.twilioMessagesLogs),
  }
}


export function integrationTwilioAccountDataflowsToHclTerraform(struct?: IntegrationTwilioAccountDataflows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    twilio_alerts_logs: {
      value: integrationTwilioAccountDataflowsTwilioAlertsLogsToHclTerraform(struct!.twilioAlertsLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationTwilioAccountDataflowsTwilioAlertsLogs",
    },
    twilio_call_summaries_logs: {
      value: integrationTwilioAccountDataflowsTwilioCallSummariesLogsToHclTerraform(struct!.twilioCallSummariesLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs",
    },
    twilio_cloud_cost_metrics: {
      value: integrationTwilioAccountDataflowsTwilioCloudCostMetricsToHclTerraform(struct!.twilioCloudCostMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics",
    },
    twilio_events_logs: {
      value: integrationTwilioAccountDataflowsTwilioEventsLogsToHclTerraform(struct!.twilioEventsLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationTwilioAccountDataflowsTwilioEventsLogs",
    },
    twilio_messages_logs: {
      value: integrationTwilioAccountDataflowsTwilioMessagesLogsToHclTerraform(struct!.twilioMessagesLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationTwilioAccountDataflowsTwilioMessagesLogs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationTwilioAccountDataflowsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountDataflows | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._twilioAlertsLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioAlertsLogs = this._twilioAlertsLogs?.internalValue;
    }
    if (this._twilioCallSummariesLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioCallSummariesLogs = this._twilioCallSummariesLogs?.internalValue;
    }
    if (this._twilioCloudCostMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioCloudCostMetrics = this._twilioCloudCostMetrics?.internalValue;
    }
    if (this._twilioEventsLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioEventsLogs = this._twilioEventsLogs?.internalValue;
    }
    if (this._twilioMessagesLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioMessagesLogs = this._twilioMessagesLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationTwilioAccountDataflows | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._twilioAlertsLogs.internalValue = undefined;
      this._twilioCallSummariesLogs.internalValue = undefined;
      this._twilioCloudCostMetrics.internalValue = undefined;
      this._twilioEventsLogs.internalValue = undefined;
      this._twilioMessagesLogs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._twilioAlertsLogs.internalValue = value.twilioAlertsLogs;
      this._twilioCallSummariesLogs.internalValue = value.twilioCallSummariesLogs;
      this._twilioCloudCostMetrics.internalValue = value.twilioCloudCostMetrics;
      this._twilioEventsLogs.internalValue = value.twilioEventsLogs;
      this._twilioMessagesLogs.internalValue = value.twilioMessagesLogs;
    }
  }

  // twilio_alerts_logs - computed: true, optional: true, required: false
  private _twilioAlertsLogs = new IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference(this, "twilio_alerts_logs");
  public get twilioAlertsLogs() {
    return this._twilioAlertsLogs;
  }
  public putTwilioAlertsLogs(value: IntegrationTwilioAccountDataflowsTwilioAlertsLogs) {
    this._twilioAlertsLogs.internalValue = value;
  }
  public resetTwilioAlertsLogs() {
    this._twilioAlertsLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioAlertsLogsInput() {
    return this._twilioAlertsLogs.internalValue;
  }

  // twilio_call_summaries_logs - computed: true, optional: true, required: false
  private _twilioCallSummariesLogs = new IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference(this, "twilio_call_summaries_logs");
  public get twilioCallSummariesLogs() {
    return this._twilioCallSummariesLogs;
  }
  public putTwilioCallSummariesLogs(value: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs) {
    this._twilioCallSummariesLogs.internalValue = value;
  }
  public resetTwilioCallSummariesLogs() {
    this._twilioCallSummariesLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioCallSummariesLogsInput() {
    return this._twilioCallSummariesLogs.internalValue;
  }

  // twilio_cloud_cost_metrics - computed: true, optional: true, required: false
  private _twilioCloudCostMetrics = new IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference(this, "twilio_cloud_cost_metrics");
  public get twilioCloudCostMetrics() {
    return this._twilioCloudCostMetrics;
  }
  public putTwilioCloudCostMetrics(value: IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics) {
    this._twilioCloudCostMetrics.internalValue = value;
  }
  public resetTwilioCloudCostMetrics() {
    this._twilioCloudCostMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioCloudCostMetricsInput() {
    return this._twilioCloudCostMetrics.internalValue;
  }

  // twilio_events_logs - computed: true, optional: true, required: false
  private _twilioEventsLogs = new IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference(this, "twilio_events_logs");
  public get twilioEventsLogs() {
    return this._twilioEventsLogs;
  }
  public putTwilioEventsLogs(value: IntegrationTwilioAccountDataflowsTwilioEventsLogs) {
    this._twilioEventsLogs.internalValue = value;
  }
  public resetTwilioEventsLogs() {
    this._twilioEventsLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioEventsLogsInput() {
    return this._twilioEventsLogs.internalValue;
  }

  // twilio_messages_logs - computed: true, optional: true, required: false
  private _twilioMessagesLogs = new IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference(this, "twilio_messages_logs");
  public get twilioMessagesLogs() {
    return this._twilioMessagesLogs;
  }
  public putTwilioMessagesLogs(value: IntegrationTwilioAccountDataflowsTwilioMessagesLogs) {
    this._twilioMessagesLogs.internalValue = value;
  }
  public resetTwilioMessagesLogs() {
    this._twilioMessagesLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioMessagesLogsInput() {
    return this._twilioMessagesLogs.internalValue;
  }
}
export interface IntegrationTwilioAccountSettings {
  /**
  * Twilio Account SID that uniquely identifies your Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#account_sid IntegrationTwilioAccount#account_sid}
  */
  readonly accountSid: string;
  /**
  * When enabled, Twilio phone numbers in the `to` field and SMS message bodies are censored for privacy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#censor_logs IntegrationTwilioAccount#censor_logs}
  */
  readonly censorLogs?: boolean | cdktn.IResolvable;
}

export function integrationTwilioAccountSettingsToTerraform(struct?: IntegrationTwilioAccountSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_sid: cdktn.stringToTerraform(struct!.accountSid),
    censor_logs: cdktn.booleanToTerraform(struct!.censorLogs),
  }
}


export function integrationTwilioAccountSettingsToHclTerraform(struct?: IntegrationTwilioAccountSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_sid: {
      value: cdktn.stringToHclTerraform(struct!.accountSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    censor_logs: {
      value: cdktn.booleanToHclTerraform(struct!.censorLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationTwilioAccountSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationTwilioAccountSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountSid = this._accountSid;
    }
    if (this._censorLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.censorLogs = this._censorLogs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationTwilioAccountSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountSid = undefined;
      this._censorLogs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountSid = value.accountSid;
      this._censorLogs = value.censorLogs;
    }
  }

  // account_sid - computed: false, optional: false, required: true
  private _accountSid?: string; 
  public get accountSid() {
    return this.getStringAttribute('account_sid');
  }
  public set accountSid(value: string) {
    this._accountSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSidInput() {
    return this._accountSid;
  }

  // censor_logs - computed: true, optional: true, required: false
  private _censorLogs?: boolean | cdktn.IResolvable; 
  public get censorLogs() {
    return this.getBooleanAttribute('censor_logs');
  }
  public set censorLogs(value: boolean | cdktn.IResolvable) {
    this._censorLogs = value;
  }
  public resetCensorLogs() {
    this._censorLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get censorLogsInput() {
    return this._censorLogs;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account datadog_integration_twilio_account}
*/
export class IntegrationTwilioAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_twilio_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IntegrationTwilioAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationTwilioAccount to import
  * @param importFromId The id of the existing IntegrationTwilioAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationTwilioAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_twilio_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account datadog_integration_twilio_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationTwilioAccountConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationTwilioAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_twilio_account',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.25.0',
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
  private _authentication = new IntegrationTwilioAccountAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: IntegrationTwilioAccountAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // dataflows - computed: true, optional: true, required: false
  private _dataflows = new IntegrationTwilioAccountDataflowsOutputReference(this, "dataflows");
  public get dataflows() {
    return this._dataflows;
  }
  public putDataflows(value: IntegrationTwilioAccountDataflows) {
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
  private _settings = new IntegrationTwilioAccountSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationTwilioAccountSettings) {
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
      authentication: integrationTwilioAccountAuthenticationToTerraform(this._authentication.internalValue),
      dataflows: integrationTwilioAccountDataflowsToTerraform(this._dataflows.internalValue),
      name: cdktn.stringToTerraform(this._name),
      settings: integrationTwilioAccountSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: integrationTwilioAccountAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationTwilioAccountAuthentication",
      },
      dataflows: {
        value: integrationTwilioAccountDataflowsToHclTerraform(this._dataflows.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationTwilioAccountDataflows",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: integrationTwilioAccountSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationTwilioAccountSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
