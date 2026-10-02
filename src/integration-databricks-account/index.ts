/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IntegrationDatabricksAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Authentication configured on the Databricks integration account. A `bearer_token` method indicates an account still on token authentication, which Databricks accepts only on accounts that already use it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#authentication IntegrationDatabricksAccount#authentication}
  */
  readonly authentication: IntegrationDatabricksAccountAuthentication;
  /**
  * Data Datadog collects from Databricks, keyed by dataflow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dataflows IntegrationDatabricksAccount#dataflows}
  */
  readonly dataflows?: IntegrationDatabricksAccountDataflows;
  /**
  * Human-readable name of the Databricks integration account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}
  */
  readonly name: string;
  /**
  * Settings configured on the Databricks integration account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}
  */
  readonly settings: IntegrationDatabricksAccountSettings;
}
export interface IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth {
  /**
  * The authentication method type. Valid values are `bearer_token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}
  */
  readonly authType?: string;
  /**
  * Secret token used to authenticate with Databricks. This write-only value is not stored in Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo IntegrationDatabricksAccount#token_wo}
  */
  readonly tokenWo?: string;
  /**
  * Version trigger for token_wo rotation. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo_version IntegrationDatabricksAccount#token_wo_version}
  */
  readonly tokenWoVersion?: string;
}

export function integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthToTerraform(struct?: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    token_wo: cdktn.stringToTerraform(struct!.tokenWo),
    token_wo_version: cdktn.stringToTerraform(struct!.tokenWoVersion),
  }
}


export function integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthToHclTerraform(struct?: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth | cdktn.IResolvable): any {
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
    token_wo: {
      value: cdktn.stringToHclTerraform(struct!.tokenWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.tokenWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._tokenWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenWo = this._tokenWo;
    }
    if (this._tokenWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenWoVersion = this._tokenWoVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._tokenWo = undefined;
      this._tokenWoVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._tokenWo = value.tokenWo;
      this._tokenWoVersion = value.tokenWoVersion;
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

  // token_wo - computed: false, optional: true, required: false
  private _tokenWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get tokenWo() {
    return this.getStringAttribute('token_wo');
  }
  public set tokenWo(value: string) {
    this._tokenWo = value;
  }
  public resetTokenWo() {
    this._tokenWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenWoInput() {
    return this._tokenWo;
  }

  // token_wo_version - computed: false, optional: true, required: false
  private _tokenWoVersion?: string; 
  public get tokenWoVersion() {
    return this.getStringAttribute('token_wo_version');
  }
  public set tokenWoVersion(value: string) {
    this._tokenWoVersion = value;
  }
  public resetTokenWoVersion() {
    this._tokenWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenWoVersionInput() {
    return this._tokenWoVersion;
  }
}
export interface IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth {
  /**
  * The authentication method type. Valid values are `databricks_oauth`. Defaults to `"databricks_oauth"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}
  */
  readonly authType?: string;
  /**
  * Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Client ID of the Databricks service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}
  */
  readonly clientId: string;
  /**
  * Secret of the Databricks service principal. Generate it under User management > Service principals > Credentials & secrets in Databricks. This write-only value is not stored in Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo IntegrationDatabricksAccount#client_secret_wo}
  */
  readonly clientSecretWo: string;
  /**
  * Version trigger for client_secret_wo rotation. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo_version IntegrationDatabricksAccount#client_secret_wo_version}
  */
  readonly clientSecretWoVersion: string;
}

export function integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthToTerraform(struct?: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    azure_tenant_id: cdktn.stringToTerraform(struct!.azureTenantId),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret_wo: cdktn.stringToTerraform(struct!.clientSecretWo),
    client_secret_wo_version: cdktn.stringToTerraform(struct!.clientSecretWoVersion),
  }
}


export function integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthToHclTerraform(struct?: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth | cdktn.IResolvable): any {
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
    azure_tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.azureTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWo = this._clientSecretWo;
    }
    if (this._clientSecretWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWoVersion = this._clientSecretWoVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._azureTenantId = undefined;
      this._clientId = undefined;
      this._clientSecretWo = undefined;
      this._clientSecretWoVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._azureTenantId = value.azureTenantId;
      this._clientId = value.clientId;
      this._clientSecretWo = value.clientSecretWo;
      this._clientSecretWoVersion = value.clientSecretWoVersion;
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

  // azure_tenant_id - computed: true, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_wo - computed: false, optional: false, required: true
  private _clientSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // client_secret_wo_version - computed: false, optional: false, required: true
  private _clientSecretWoVersion?: string; 
  public get clientSecretWoVersion() {
    return this.getStringAttribute('client_secret_wo_version');
  }
  public set clientSecretWoVersion(value: string) {
    this._clientSecretWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoVersionInput() {
    return this._clientSecretWoVersion;
  }
}
export interface IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth {
  /**
  * The authentication method type. Valid values are `private_action_runner`. Defaults to `"private_action_runner"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}
  */
  readonly authType?: string;
  /**
  * Unique identifier of the Private Action Runner connection holding the credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}
  */
  readonly connectionId: string;
  /**
  * Path of the credential inside the secret backend configured on the runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}
  */
  readonly secretPath?: string;
  /**
  * Unique identifier of the user the Private Action Runner connection belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}
  */
  readonly userUuid: string;
}

export function integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthToTerraform(struct?: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    connection_id: cdktn.stringToTerraform(struct!.connectionId),
    secret_path: cdktn.stringToTerraform(struct!.secretPath),
    user_uuid: cdktn.stringToTerraform(struct!.userUuid),
  }
}


export function integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthToHclTerraform(struct?: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth | cdktn.IResolvable): any {
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
    connection_id: {
      value: cdktn.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_path: {
      value: cdktn.stringToHclTerraform(struct!.secretPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_uuid: {
      value: cdktn.stringToHclTerraform(struct!.userUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._secretPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretPath = this._secretPath;
    }
    if (this._userUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.userUuid = this._userUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._connectionId = undefined;
      this._secretPath = undefined;
      this._userUuid = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._connectionId = value.connectionId;
      this._secretPath = value.secretPath;
      this._userUuid = value.userUuid;
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

  // connection_id - computed: true, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // secret_path - computed: true, optional: true, required: false
  private _secretPath?: string; 
  public get secretPath() {
    return this.getStringAttribute('secret_path');
  }
  public set secretPath(value: string) {
    this._secretPath = value;
  }
  public resetSecretPath() {
    this._secretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPathInput() {
    return this._secretPath;
  }

  // user_uuid - computed: true, optional: false, required: true
  private _userUuid?: string; 
  public get userUuid() {
    return this.getStringAttribute('user_uuid');
  }
  public set userUuid(value: string) {
    this._userUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userUuidInput() {
    return this._userUuid;
  }
}
export interface IntegrationDatabricksAccountAuthentication {
  /**
  * The bearer token authentication method configured on the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_bearer_token_auth IntegrationDatabricksAccount#databricks_integration_account_bearer_token_auth}
  */
  readonly databricksIntegrationAccountBearerTokenAuth?: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth;
  /**
  * The Databricks OAuth authentication method and service principal configured on the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_o_auth_auth IntegrationDatabricksAccount#databricks_integration_account_o_auth_auth}
  */
  readonly databricksIntegrationAccountOAuthAuth?: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth;
  /**
  * The Private Action Runner authentication method configured on the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_private_action_runner_auth IntegrationDatabricksAccount#databricks_integration_account_private_action_runner_auth}
  */
  readonly databricksIntegrationAccountPrivateActionRunnerAuth?: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth;
}

export function integrationDatabricksAccountAuthenticationToTerraform(struct?: IntegrationDatabricksAccountAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    databricks_integration_account_bearer_token_auth: integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthToTerraform(struct!.databricksIntegrationAccountBearerTokenAuth),
    databricks_integration_account_o_auth_auth: integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthToTerraform(struct!.databricksIntegrationAccountOAuthAuth),
    databricks_integration_account_private_action_runner_auth: integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthToTerraform(struct!.databricksIntegrationAccountPrivateActionRunnerAuth),
  }
}


export function integrationDatabricksAccountAuthenticationToHclTerraform(struct?: IntegrationDatabricksAccountAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    databricks_integration_account_bearer_token_auth: {
      value: integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthToHclTerraform(struct!.databricksIntegrationAccountBearerTokenAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth",
    },
    databricks_integration_account_o_auth_auth: {
      value: integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthToHclTerraform(struct!.databricksIntegrationAccountOAuthAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth",
    },
    databricks_integration_account_private_action_runner_auth: {
      value: integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthToHclTerraform(struct!.databricksIntegrationAccountPrivateActionRunnerAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databricksIntegrationAccountBearerTokenAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksIntegrationAccountBearerTokenAuth = this._databricksIntegrationAccountBearerTokenAuth?.internalValue;
    }
    if (this._databricksIntegrationAccountOAuthAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksIntegrationAccountOAuthAuth = this._databricksIntegrationAccountOAuthAuth?.internalValue;
    }
    if (this._databricksIntegrationAccountPrivateActionRunnerAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksIntegrationAccountPrivateActionRunnerAuth = this._databricksIntegrationAccountPrivateActionRunnerAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databricksIntegrationAccountBearerTokenAuth.internalValue = undefined;
      this._databricksIntegrationAccountOAuthAuth.internalValue = undefined;
      this._databricksIntegrationAccountPrivateActionRunnerAuth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databricksIntegrationAccountBearerTokenAuth.internalValue = value.databricksIntegrationAccountBearerTokenAuth;
      this._databricksIntegrationAccountOAuthAuth.internalValue = value.databricksIntegrationAccountOAuthAuth;
      this._databricksIntegrationAccountPrivateActionRunnerAuth.internalValue = value.databricksIntegrationAccountPrivateActionRunnerAuth;
    }
  }

  // databricks_integration_account_bearer_token_auth - computed: false, optional: true, required: false
  private _databricksIntegrationAccountBearerTokenAuth = new IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference(this, "databricks_integration_account_bearer_token_auth");
  public get databricksIntegrationAccountBearerTokenAuth() {
    return this._databricksIntegrationAccountBearerTokenAuth;
  }
  public putDatabricksIntegrationAccountBearerTokenAuth(value: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth) {
    this._databricksIntegrationAccountBearerTokenAuth.internalValue = value;
  }
  public resetDatabricksIntegrationAccountBearerTokenAuth() {
    this._databricksIntegrationAccountBearerTokenAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksIntegrationAccountBearerTokenAuthInput() {
    return this._databricksIntegrationAccountBearerTokenAuth.internalValue;
  }

  // databricks_integration_account_o_auth_auth - computed: false, optional: true, required: false
  private _databricksIntegrationAccountOAuthAuth = new IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference(this, "databricks_integration_account_o_auth_auth");
  public get databricksIntegrationAccountOAuthAuth() {
    return this._databricksIntegrationAccountOAuthAuth;
  }
  public putDatabricksIntegrationAccountOAuthAuth(value: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth) {
    this._databricksIntegrationAccountOAuthAuth.internalValue = value;
  }
  public resetDatabricksIntegrationAccountOAuthAuth() {
    this._databricksIntegrationAccountOAuthAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksIntegrationAccountOAuthAuthInput() {
    return this._databricksIntegrationAccountOAuthAuth.internalValue;
  }

  // databricks_integration_account_private_action_runner_auth - computed: true, optional: true, required: false
  private _databricksIntegrationAccountPrivateActionRunnerAuth = new IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference(this, "databricks_integration_account_private_action_runner_auth");
  public get databricksIntegrationAccountPrivateActionRunnerAuth() {
    return this._databricksIntegrationAccountPrivateActionRunnerAuth;
  }
  public putDatabricksIntegrationAccountPrivateActionRunnerAuth(value: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth) {
    this._databricksIntegrationAccountPrivateActionRunnerAuth.internalValue = value;
  }
  public resetDatabricksIntegrationAccountPrivateActionRunnerAuth() {
    this._databricksIntegrationAccountPrivateActionRunnerAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksIntegrationAccountPrivateActionRunnerAuthInput() {
    return this._databricksIntegrationAccountPrivateActionRunnerAuth.internalValue;
  }
}
export interface IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings {
  /**
  * Whether cost data is collected for every workspace in the Databricks account rather than this workspace only. This takes effect across the Databricks account: if any one workspace enables it, Datadog collects cost data for all of them regardless of their individual settings, and every covered workspace incurs Cloud Cost Management charges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#ccm_collect_all_workspaces IntegrationDatabricksAccount#ccm_collect_all_workspaces}
  */
  readonly ccmCollectAllWorkspaces?: boolean | cdktn.IResolvable;
}

export function integrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsToTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ccm_collect_all_workspaces: cdktn.booleanToTerraform(struct!.ccmCollectAllWorkspaces),
  }
}


export function integrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsToHclTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ccm_collect_all_workspaces: {
      value: cdktn.booleanToHclTerraform(struct!.ccmCollectAllWorkspaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ccmCollectAllWorkspaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccmCollectAllWorkspaces = this._ccmCollectAllWorkspaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ccmCollectAllWorkspaces = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ccmCollectAllWorkspaces = value.ccmCollectAllWorkspaces;
    }
  }

  // ccm_collect_all_workspaces - computed: true, optional: true, required: false
  private _ccmCollectAllWorkspaces?: boolean | cdktn.IResolvable; 
  public get ccmCollectAllWorkspaces() {
    return this.getBooleanAttribute('ccm_collect_all_workspaces');
  }
  public set ccmCollectAllWorkspaces(value: boolean | cdktn.IResolvable) {
    this._ccmCollectAllWorkspaces = value;
  }
  public resetCcmCollectAllWorkspaces() {
    this._ccmCollectAllWorkspaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccmCollectAllWorkspacesInput() {
    return this._ccmCollectAllWorkspaces;
  }
}
export interface IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Settings of the Cloud Cost Management dataflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}
  */
  readonly settings?: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings;
}

export function integrationDatabricksAccountDataflowsDatabricksCloudCostMetricsToTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings: integrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsToTerraform(struct!.settings),
  }
}


export function integrationDatabricksAccountDataflowsDatabricksCloudCostMetricsToHclTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics | cdktn.IResolvable): any {
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
      value: integrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics | cdktn.IResolvable | undefined) {
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
  private _settings = new IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings) {
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
export interface IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings {
  /**
  * ID of the Datadog API key the global init script uses to submit data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}
  */
  readonly ddApiKeyId?: string;
  /**
  * Secret value of the Datadog API key identified by `dd_api_key_id`. This write-only value is not stored in Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo IntegrationDatabricksAccount#dd_api_key_secret_wo}
  */
  readonly ddApiKeySecretWo?: string;
  /**
  * Version trigger for dd_api_key_secret_wo rotation. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo_version IntegrationDatabricksAccount#dd_api_key_secret_wo_version}
  */
  readonly ddApiKeySecretWoVersion?: string;
  /**
  * Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script. The script does not apply to clusters in Standard access mode. When `false`, the Agent is installed manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}
  */
  readonly djmGlobalInitScriptEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether GPU metrics are collected from your Databricks clusters. The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}
  */
  readonly scriptGpumEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether driver and worker logs are collected from your Databricks clusters. The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}
  */
  readonly scriptLogsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute. This compute has no clusters for the global init script to target, so collection reads the Databricks system tables and requires `system_tables_sql_warehouse_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}
  */
  readonly serverlessJobsEnabled?: boolean | cdktn.IResolvable;
}

export function integrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsToTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dd_api_key_id: cdktn.stringToTerraform(struct!.ddApiKeyId),
    dd_api_key_secret_wo: cdktn.stringToTerraform(struct!.ddApiKeySecretWo),
    dd_api_key_secret_wo_version: cdktn.stringToTerraform(struct!.ddApiKeySecretWoVersion),
    djm_global_init_script_enabled: cdktn.booleanToTerraform(struct!.djmGlobalInitScriptEnabled),
    script_gpum_enabled: cdktn.booleanToTerraform(struct!.scriptGpumEnabled),
    script_logs_enabled: cdktn.booleanToTerraform(struct!.scriptLogsEnabled),
    serverless_jobs_enabled: cdktn.booleanToTerraform(struct!.serverlessJobsEnabled),
  }
}


export function integrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsToHclTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dd_api_key_id: {
      value: cdktn.stringToHclTerraform(struct!.ddApiKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dd_api_key_secret_wo: {
      value: cdktn.stringToHclTerraform(struct!.ddApiKeySecretWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dd_api_key_secret_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.ddApiKeySecretWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    djm_global_init_script_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.djmGlobalInitScriptEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    script_gpum_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.scriptGpumEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    script_logs_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.scriptLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serverless_jobs_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.serverlessJobsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddApiKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddApiKeyId = this._ddApiKeyId;
    }
    if (this._ddApiKeySecretWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddApiKeySecretWo = this._ddApiKeySecretWo;
    }
    if (this._ddApiKeySecretWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddApiKeySecretWoVersion = this._ddApiKeySecretWoVersion;
    }
    if (this._djmGlobalInitScriptEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.djmGlobalInitScriptEnabled = this._djmGlobalInitScriptEnabled;
    }
    if (this._scriptGpumEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptGpumEnabled = this._scriptGpumEnabled;
    }
    if (this._scriptLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptLogsEnabled = this._scriptLogsEnabled;
    }
    if (this._serverlessJobsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessJobsEnabled = this._serverlessJobsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddApiKeyId = undefined;
      this._ddApiKeySecretWo = undefined;
      this._ddApiKeySecretWoVersion = undefined;
      this._djmGlobalInitScriptEnabled = undefined;
      this._scriptGpumEnabled = undefined;
      this._scriptLogsEnabled = undefined;
      this._serverlessJobsEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddApiKeyId = value.ddApiKeyId;
      this._ddApiKeySecretWo = value.ddApiKeySecretWo;
      this._ddApiKeySecretWoVersion = value.ddApiKeySecretWoVersion;
      this._djmGlobalInitScriptEnabled = value.djmGlobalInitScriptEnabled;
      this._scriptGpumEnabled = value.scriptGpumEnabled;
      this._scriptLogsEnabled = value.scriptLogsEnabled;
      this._serverlessJobsEnabled = value.serverlessJobsEnabled;
    }
  }

  // dd_api_key_id - computed: true, optional: true, required: false
  private _ddApiKeyId?: string; 
  public get ddApiKeyId() {
    return this.getStringAttribute('dd_api_key_id');
  }
  public set ddApiKeyId(value: string) {
    this._ddApiKeyId = value;
  }
  public resetDdApiKeyId() {
    this._ddApiKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddApiKeyIdInput() {
    return this._ddApiKeyId;
  }

  // dd_api_key_secret_wo - computed: false, optional: true, required: false
  private _ddApiKeySecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get ddApiKeySecretWo() {
    return this.getStringAttribute('dd_api_key_secret_wo');
  }
  public set ddApiKeySecretWo(value: string) {
    this._ddApiKeySecretWo = value;
  }
  public resetDdApiKeySecretWo() {
    this._ddApiKeySecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddApiKeySecretWoInput() {
    return this._ddApiKeySecretWo;
  }

  // dd_api_key_secret_wo_version - computed: false, optional: true, required: false
  private _ddApiKeySecretWoVersion?: string; 
  public get ddApiKeySecretWoVersion() {
    return this.getStringAttribute('dd_api_key_secret_wo_version');
  }
  public set ddApiKeySecretWoVersion(value: string) {
    this._ddApiKeySecretWoVersion = value;
  }
  public resetDdApiKeySecretWoVersion() {
    this._ddApiKeySecretWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddApiKeySecretWoVersionInput() {
    return this._ddApiKeySecretWoVersion;
  }

  // djm_global_init_script_enabled - computed: true, optional: true, required: false
  private _djmGlobalInitScriptEnabled?: boolean | cdktn.IResolvable; 
  public get djmGlobalInitScriptEnabled() {
    return this.getBooleanAttribute('djm_global_init_script_enabled');
  }
  public set djmGlobalInitScriptEnabled(value: boolean | cdktn.IResolvable) {
    this._djmGlobalInitScriptEnabled = value;
  }
  public resetDjmGlobalInitScriptEnabled() {
    this._djmGlobalInitScriptEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get djmGlobalInitScriptEnabledInput() {
    return this._djmGlobalInitScriptEnabled;
  }

  // script_gpum_enabled - computed: true, optional: true, required: false
  private _scriptGpumEnabled?: boolean | cdktn.IResolvable; 
  public get scriptGpumEnabled() {
    return this.getBooleanAttribute('script_gpum_enabled');
  }
  public set scriptGpumEnabled(value: boolean | cdktn.IResolvable) {
    this._scriptGpumEnabled = value;
  }
  public resetScriptGpumEnabled() {
    this._scriptGpumEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptGpumEnabledInput() {
    return this._scriptGpumEnabled;
  }

  // script_logs_enabled - computed: true, optional: true, required: false
  private _scriptLogsEnabled?: boolean | cdktn.IResolvable; 
  public get scriptLogsEnabled() {
    return this.getBooleanAttribute('script_logs_enabled');
  }
  public set scriptLogsEnabled(value: boolean | cdktn.IResolvable) {
    this._scriptLogsEnabled = value;
  }
  public resetScriptLogsEnabled() {
    this._scriptLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptLogsEnabledInput() {
    return this._scriptLogsEnabled;
  }

  // serverless_jobs_enabled - computed: true, optional: true, required: false
  private _serverlessJobsEnabled?: boolean | cdktn.IResolvable; 
  public get serverlessJobsEnabled() {
    return this.getBooleanAttribute('serverless_jobs_enabled');
  }
  public set serverlessJobsEnabled(value: boolean | cdktn.IResolvable) {
    this._serverlessJobsEnabled = value;
  }
  public resetServerlessJobsEnabled() {
    this._serverlessJobsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessJobsEnabledInput() {
    return this._serverlessJobsEnabled;
  }
}
export interface IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Settings of the Data Jobs Monitoring dataflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}
  */
  readonly settings?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings;
}

export function integrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringToTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings: integrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsToTerraform(struct!.settings),
  }
}


export function integrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringToHclTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring | cdktn.IResolvable): any {
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
      value: integrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring | cdktn.IResolvable | undefined) {
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

  // settings - computed: false, optional: true, required: false
  private _settings = new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings) {
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
export interface IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings {
  /**
  * Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata. Currently, only hourly (`0 * * * *`) and daily (`0 0 * * *`) are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}
  */
  readonly doCrawlersCron?: string;
  /**
  * Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#sync_system_catalog IntegrationDatabricksAccount#sync_system_catalog}
  */
  readonly syncSystemCatalog?: boolean | cdktn.IResolvable;
}

export function integrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsToTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    do_crawlers_cron: cdktn.stringToTerraform(struct!.doCrawlersCron),
    sync_system_catalog: cdktn.booleanToTerraform(struct!.syncSystemCatalog),
  }
}


export function integrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsToHclTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    do_crawlers_cron: {
      value: cdktn.stringToHclTerraform(struct!.doCrawlersCron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_system_catalog: {
      value: cdktn.booleanToHclTerraform(struct!.syncSystemCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doCrawlersCron !== undefined) {
      hasAnyValues = true;
      internalValueResult.doCrawlersCron = this._doCrawlersCron;
    }
    if (this._syncSystemCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSystemCatalog = this._syncSystemCatalog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doCrawlersCron = undefined;
      this._syncSystemCatalog = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doCrawlersCron = value.doCrawlersCron;
      this._syncSystemCatalog = value.syncSystemCatalog;
    }
  }

  // do_crawlers_cron - computed: true, optional: true, required: false
  private _doCrawlersCron?: string; 
  public get doCrawlersCron() {
    return this.getStringAttribute('do_crawlers_cron');
  }
  public set doCrawlersCron(value: string) {
    this._doCrawlersCron = value;
  }
  public resetDoCrawlersCron() {
    this._doCrawlersCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doCrawlersCronInput() {
    return this._doCrawlersCron;
  }

  // sync_system_catalog - computed: true, optional: true, required: false
  private _syncSystemCatalog?: boolean | cdktn.IResolvable; 
  public get syncSystemCatalog() {
    return this.getBooleanAttribute('sync_system_catalog');
  }
  public set syncSystemCatalog(value: boolean | cdktn.IResolvable) {
    this._syncSystemCatalog = value;
  }
  public resetSyncSystemCatalog() {
    this._syncSystemCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSystemCatalogInput() {
    return this._syncSystemCatalog;
  }
}
export interface IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Settings of the Data Observability dataflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}
  */
  readonly settings?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings;
}

export function integrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringToTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings: integrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsToTerraform(struct!.settings),
  }
}


export function integrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringToHclTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring | cdktn.IResolvable): any {
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
      value: integrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring | cdktn.IResolvable | undefined) {
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
  private _settings = new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings) {
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
export interface IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics {
  /**
  * Whether Datadog collects this data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function integrationDatabricksAccountDataflowsDatabricksModelServingMetricsToTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function integrationDatabricksAccountDataflowsDatabricksModelServingMetricsToHclTerraform(struct?: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics | cdktn.IResolvable): any {
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

export class IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics | cdktn.IResolvable | undefined) {
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
}
export interface IntegrationDatabricksAccountDataflows {
  /**
  * Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_cloud_cost_metrics IntegrationDatabricksAccount#databricks_cloud_cost_metrics}
  */
  readonly databricksCloudCostMetrics?: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics;
  /**
  * Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_jobs_monitoring IntegrationDatabricksAccount#databricks_data_observability_jobs_monitoring}
  */
  readonly databricksDataObservabilityJobsMonitoring?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring;
  /**
  * Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_quality_monitoring IntegrationDatabricksAccount#databricks_data_observability_quality_monitoring}
  */
  readonly databricksDataObservabilityQualityMonitoring?: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring;
  /**
  * Health and usage metrics for your Databricks model serving endpoints. Not supported on accounts that authenticate with `private_action_runner`; on those accounts this dataflow collects no data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_model_serving_metrics IntegrationDatabricksAccount#databricks_model_serving_metrics}
  */
  readonly databricksModelServingMetrics?: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics;
}

export function integrationDatabricksAccountDataflowsToTerraform(struct?: IntegrationDatabricksAccountDataflows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    databricks_cloud_cost_metrics: integrationDatabricksAccountDataflowsDatabricksCloudCostMetricsToTerraform(struct!.databricksCloudCostMetrics),
    databricks_data_observability_jobs_monitoring: integrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringToTerraform(struct!.databricksDataObservabilityJobsMonitoring),
    databricks_data_observability_quality_monitoring: integrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringToTerraform(struct!.databricksDataObservabilityQualityMonitoring),
    databricks_model_serving_metrics: integrationDatabricksAccountDataflowsDatabricksModelServingMetricsToTerraform(struct!.databricksModelServingMetrics),
  }
}


export function integrationDatabricksAccountDataflowsToHclTerraform(struct?: IntegrationDatabricksAccountDataflows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    databricks_cloud_cost_metrics: {
      value: integrationDatabricksAccountDataflowsDatabricksCloudCostMetricsToHclTerraform(struct!.databricksCloudCostMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics",
    },
    databricks_data_observability_jobs_monitoring: {
      value: integrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringToHclTerraform(struct!.databricksDataObservabilityJobsMonitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring",
    },
    databricks_data_observability_quality_monitoring: {
      value: integrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringToHclTerraform(struct!.databricksDataObservabilityQualityMonitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring",
    },
    databricks_model_serving_metrics: {
      value: integrationDatabricksAccountDataflowsDatabricksModelServingMetricsToHclTerraform(struct!.databricksModelServingMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountDataflowsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountDataflows | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databricksCloudCostMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksCloudCostMetrics = this._databricksCloudCostMetrics?.internalValue;
    }
    if (this._databricksDataObservabilityJobsMonitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksDataObservabilityJobsMonitoring = this._databricksDataObservabilityJobsMonitoring?.internalValue;
    }
    if (this._databricksDataObservabilityQualityMonitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksDataObservabilityQualityMonitoring = this._databricksDataObservabilityQualityMonitoring?.internalValue;
    }
    if (this._databricksModelServingMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksModelServingMetrics = this._databricksModelServingMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountDataflows | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databricksCloudCostMetrics.internalValue = undefined;
      this._databricksDataObservabilityJobsMonitoring.internalValue = undefined;
      this._databricksDataObservabilityQualityMonitoring.internalValue = undefined;
      this._databricksModelServingMetrics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databricksCloudCostMetrics.internalValue = value.databricksCloudCostMetrics;
      this._databricksDataObservabilityJobsMonitoring.internalValue = value.databricksDataObservabilityJobsMonitoring;
      this._databricksDataObservabilityQualityMonitoring.internalValue = value.databricksDataObservabilityQualityMonitoring;
      this._databricksModelServingMetrics.internalValue = value.databricksModelServingMetrics;
    }
  }

  // databricks_cloud_cost_metrics - computed: true, optional: true, required: false
  private _databricksCloudCostMetrics = new IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference(this, "databricks_cloud_cost_metrics");
  public get databricksCloudCostMetrics() {
    return this._databricksCloudCostMetrics;
  }
  public putDatabricksCloudCostMetrics(value: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics) {
    this._databricksCloudCostMetrics.internalValue = value;
  }
  public resetDatabricksCloudCostMetrics() {
    this._databricksCloudCostMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksCloudCostMetricsInput() {
    return this._databricksCloudCostMetrics.internalValue;
  }

  // databricks_data_observability_jobs_monitoring - computed: false, optional: true, required: false
  private _databricksDataObservabilityJobsMonitoring = new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference(this, "databricks_data_observability_jobs_monitoring");
  public get databricksDataObservabilityJobsMonitoring() {
    return this._databricksDataObservabilityJobsMonitoring;
  }
  public putDatabricksDataObservabilityJobsMonitoring(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring) {
    this._databricksDataObservabilityJobsMonitoring.internalValue = value;
  }
  public resetDatabricksDataObservabilityJobsMonitoring() {
    this._databricksDataObservabilityJobsMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksDataObservabilityJobsMonitoringInput() {
    return this._databricksDataObservabilityJobsMonitoring.internalValue;
  }

  // databricks_data_observability_quality_monitoring - computed: true, optional: true, required: false
  private _databricksDataObservabilityQualityMonitoring = new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference(this, "databricks_data_observability_quality_monitoring");
  public get databricksDataObservabilityQualityMonitoring() {
    return this._databricksDataObservabilityQualityMonitoring;
  }
  public putDatabricksDataObservabilityQualityMonitoring(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring) {
    this._databricksDataObservabilityQualityMonitoring.internalValue = value;
  }
  public resetDatabricksDataObservabilityQualityMonitoring() {
    this._databricksDataObservabilityQualityMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksDataObservabilityQualityMonitoringInput() {
    return this._databricksDataObservabilityQualityMonitoring.internalValue;
  }

  // databricks_model_serving_metrics - computed: true, optional: true, required: false
  private _databricksModelServingMetrics = new IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference(this, "databricks_model_serving_metrics");
  public get databricksModelServingMetrics() {
    return this._databricksModelServingMetrics;
  }
  public putDatabricksModelServingMetrics(value: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics) {
    this._databricksModelServingMetrics.internalValue = value;
  }
  public resetDatabricksModelServingMetrics() {
    this._databricksModelServingMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksModelServingMetricsInput() {
    return this._databricksModelServingMetrics.internalValue;
  }
}
export interface IntegrationDatabricksAccountSettings {
  /**
  * ID of the SQL warehouse used to query the Databricks system tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}
  */
  readonly systemTablesSqlWarehouseId?: string;
  /**
  * URL of the Databricks workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}
  */
  readonly workspaceUrl: string;
}

export function integrationDatabricksAccountSettingsToTerraform(struct?: IntegrationDatabricksAccountSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    system_tables_sql_warehouse_id: cdktn.stringToTerraform(struct!.systemTablesSqlWarehouseId),
    workspace_url: cdktn.stringToTerraform(struct!.workspaceUrl),
  }
}


export function integrationDatabricksAccountSettingsToHclTerraform(struct?: IntegrationDatabricksAccountSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    system_tables_sql_warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.systemTablesSqlWarehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_url: {
      value: cdktn.stringToHclTerraform(struct!.workspaceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemTablesSqlWarehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemTablesSqlWarehouseId = this._systemTablesSqlWarehouseId;
    }
    if (this._workspaceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUrl = this._workspaceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._systemTablesSqlWarehouseId = undefined;
      this._workspaceUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._systemTablesSqlWarehouseId = value.systemTablesSqlWarehouseId;
      this._workspaceUrl = value.workspaceUrl;
    }
  }

  // system_tables_sql_warehouse_id - computed: true, optional: true, required: false
  private _systemTablesSqlWarehouseId?: string; 
  public get systemTablesSqlWarehouseId() {
    return this.getStringAttribute('system_tables_sql_warehouse_id');
  }
  public set systemTablesSqlWarehouseId(value: string) {
    this._systemTablesSqlWarehouseId = value;
  }
  public resetSystemTablesSqlWarehouseId() {
    this._systemTablesSqlWarehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTablesSqlWarehouseIdInput() {
    return this._systemTablesSqlWarehouseId;
  }

  // workspace_url - computed: false, optional: false, required: true
  private _workspaceUrl?: string; 
  public get workspaceUrl() {
    return this.getStringAttribute('workspace_url');
  }
  public set workspaceUrl(value: string) {
    this._workspaceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUrlInput() {
    return this._workspaceUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account datadog_integration_databricks_account}
*/
export class IntegrationDatabricksAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_databricks_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationDatabricksAccount to import
  * @param importFromId The id of the existing IntegrationDatabricksAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationDatabricksAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_databricks_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account datadog_integration_databricks_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationDatabricksAccountConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationDatabricksAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_databricks_account',
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
  private _authentication = new IntegrationDatabricksAccountAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: IntegrationDatabricksAccountAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // dataflows - computed: false, optional: true, required: false
  private _dataflows = new IntegrationDatabricksAccountDataflowsOutputReference(this, "dataflows");
  public get dataflows() {
    return this._dataflows;
  }
  public putDataflows(value: IntegrationDatabricksAccountDataflows) {
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
  private _settings = new IntegrationDatabricksAccountSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: IntegrationDatabricksAccountSettings) {
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
      authentication: integrationDatabricksAccountAuthenticationToTerraform(this._authentication.internalValue),
      dataflows: integrationDatabricksAccountDataflowsToTerraform(this._dataflows.internalValue),
      name: cdktn.stringToTerraform(this._name),
      settings: integrationDatabricksAccountSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: integrationDatabricksAccountAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationDatabricksAccountAuthentication",
      },
      dataflows: {
        value: integrationDatabricksAccountDataflowsToHclTerraform(this._dataflows.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationDatabricksAccountDataflows",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: integrationDatabricksAccountSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationDatabricksAccountSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
