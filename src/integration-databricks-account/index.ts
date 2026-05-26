/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IntegrationDatabricksAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#ccm_enabled IntegrationDatabricksAccount#ccm_enabled}
  */
  readonly ccmEnabled?: boolean | cdktn.IResolvable;
  /**
  * Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}
  */
  readonly ddApiKeyId?: string;
  /**
  * Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog. This value is write-only; changes made outside of Terraform will not be drift-detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_secret IntegrationDatabricksAccount#dd_api_key_secret}
  */
  readonly ddApiKeySecret?: string;
  /**
  * When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume. Requires a Unity Catalog-enabled workspace with DBR 13.3 LTS+ and `uc_volume_path`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_cluster_policy_enabled IntegrationDatabricksAccount#djm_cluster_policy_enabled}
  */
  readonly djmClusterPolicyEnabled?: boolean | cdktn.IResolvable;
  /**
  * Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_enabled IntegrationDatabricksAccount#djm_enabled}
  */
  readonly djmEnabled?: boolean | cdktn.IResolvable;
  /**
  * When enabled, Datadog installs and manages the Agent with a global init script in the workspace. Installation can take up to 15 minutes. Requires Workspace Admin permissions. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}
  */
  readonly djmGlobalInitScriptEnabled?: boolean | cdktn.IResolvable;
  /**
  * Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata. Defaults to hourly. Defaults to `"0 * * * *"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}
  */
  readonly doCrawlersCron?: string;
  /**
  * Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_enabled IntegrationDatabricksAccount#do_enabled}
  */
  readonly doEnabled?: boolean | cdktn.IResolvable;
  /**
  * Name of the Databricks model serving endpoint to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_endpoint_name IntegrationDatabricksAccount#model_serving_endpoint_name}
  */
  readonly modelServingEndpointName?: string;
  /**
  * Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_metrics_enabled IntegrationDatabricksAccount#model_serving_metrics_enabled}
  */
  readonly modelServingMetricsEnabled?: boolean | cdktn.IResolvable;
  /**
  * A human-readable name for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}
  */
  readonly name: string;
  /**
  * Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}
  */
  readonly scriptGpumEnabled?: boolean | cdktn.IResolvable;
  /**
  * Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}
  */
  readonly scriptLogsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}
  */
  readonly serverlessJobsEnabled?: boolean | cdktn.IResolvable;
  /**
  * SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}
  */
  readonly systemTablesSqlWarehouseId?: string;
  /**
  * Enable table lineage tracking for Databricks tables. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#table_lineage_enabled IntegrationDatabricksAccount#table_lineage_enabled}
  */
  readonly tableLineageEnabled?: boolean | cdktn.IResolvable;
  /**
  * Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#uc_volume_path IntegrationDatabricksAccount#uc_volume_path}
  */
  readonly ucVolumePath?: string;
  /**
  * The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}
  */
  readonly workspaceUrl: string;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#auth_config IntegrationDatabricksAccount#auth_config}
  */
  readonly authConfig?: IntegrationDatabricksAccountAuthConfig;
  /**
  * private_action_runner_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#private_action_runner_configuration IntegrationDatabricksAccount#private_action_runner_configuration}
  */
  readonly privateActionRunnerConfiguration?: IntegrationDatabricksAccountPrivateActionRunnerConfiguration;
}
export interface IntegrationDatabricksAccountAuthConfigOauth {
  /**
  * Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * OAuth Client ID for the Databricks service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}
  */
  readonly clientId?: string;
  /**
  * OAuth Client Secret for the Databricks service principal. This value is write-only; changes made outside of Terraform will not be drift-detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_secret IntegrationDatabricksAccount#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#databricks_account_id IntegrationDatabricksAccount#databricks_account_id}
  */
  readonly databricksAccountId?: string;
}

export function integrationDatabricksAccountAuthConfigOauthToTerraform(struct?: IntegrationDatabricksAccountAuthConfigOauth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_tenant_id: cdktn.stringToTerraform(struct!.azureTenantId),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    databricks_account_id: cdktn.stringToTerraform(struct!.databricksAccountId),
  }
}


export function integrationDatabricksAccountAuthConfigOauthToHclTerraform(struct?: IntegrationDatabricksAccountAuthConfigOauth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databricks_account_id: {
      value: cdktn.stringToHclTerraform(struct!.databricksAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountAuthConfigOauthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountAuthConfigOauth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._databricksAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksAccountId = this._databricksAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountAuthConfigOauth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureTenantId = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._databricksAccountId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureTenantId = value.azureTenantId;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._databricksAccountId = value.databricksAccountId;
    }
  }

  // azure_tenant_id - computed: false, optional: true, required: false
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

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // databricks_account_id - computed: false, optional: true, required: false
  private _databricksAccountId?: string; 
  public get databricksAccountId() {
    return this.getStringAttribute('databricks_account_id');
  }
  public set databricksAccountId(value: string) {
    this._databricksAccountId = value;
  }
  public resetDatabricksAccountId() {
    this._databricksAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksAccountIdInput() {
    return this._databricksAccountId;
  }
}
export interface IntegrationDatabricksAccountAuthConfigPat {
  /**
  * Databricks Personal Access Token (PAT). Generate from Settings > Developer > Access tokens. This value is write-only; changes made outside of Terraform will not be drift-detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#token IntegrationDatabricksAccount#token}
  */
  readonly token?: string;
}

export function integrationDatabricksAccountAuthConfigPatToTerraform(struct?: IntegrationDatabricksAccountAuthConfigPat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktn.stringToTerraform(struct!.token),
  }
}


export function integrationDatabricksAccountAuthConfigPatToHclTerraform(struct?: IntegrationDatabricksAccountAuthConfigPat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktn.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountAuthConfigPatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountAuthConfigPat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountAuthConfigPat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._token = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface IntegrationDatabricksAccountAuthConfig {
  /**
  * oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#oauth IntegrationDatabricksAccount#oauth}
  */
  readonly oauth?: IntegrationDatabricksAccountAuthConfigOauth;
  /**
  * pat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#pat IntegrationDatabricksAccount#pat}
  */
  readonly pat?: IntegrationDatabricksAccountAuthConfigPat;
}

export function integrationDatabricksAccountAuthConfigToTerraform(struct?: IntegrationDatabricksAccountAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth: integrationDatabricksAccountAuthConfigOauthToTerraform(struct!.oauth),
    pat: integrationDatabricksAccountAuthConfigPatToTerraform(struct!.pat),
  }
}


export function integrationDatabricksAccountAuthConfigToHclTerraform(struct?: IntegrationDatabricksAccountAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oauth: {
      value: integrationDatabricksAccountAuthConfigOauthToHclTerraform(struct!.oauth),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountAuthConfigOauth",
    },
    pat: {
      value: integrationDatabricksAccountAuthConfigPatToHclTerraform(struct!.pat),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationDatabricksAccountAuthConfigPat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationDatabricksAccountAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountAuthConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth = this._oauth?.internalValue;
    }
    if (this._pat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pat = this._pat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationDatabricksAccountAuthConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oauth.internalValue = undefined;
      this._pat.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oauth.internalValue = value.oauth;
      this._pat.internalValue = value.pat;
    }
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth = new IntegrationDatabricksAccountAuthConfigOauthOutputReference(this, "oauth");
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: IntegrationDatabricksAccountAuthConfigOauth) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
  }

  // pat - computed: false, optional: true, required: false
  private _pat = new IntegrationDatabricksAccountAuthConfigPatOutputReference(this, "pat");
  public get pat() {
    return this._pat;
  }
  public putPat(value: IntegrationDatabricksAccountAuthConfigPat) {
    this._pat.internalValue = value;
  }
  public resetPat() {
    this._pat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patInput() {
    return this._pat.internalValue;
  }
}
export interface IntegrationDatabricksAccountPrivateActionRunnerConfiguration {
  /**
  * Private Action Runner connection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Path to the stored secret holding Databricks credentials inside the Private Action Runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}
  */
  readonly secretPath?: string;
  /**
  * Service Account UUID used to execute Private Action Runner actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}
  */
  readonly userUuid?: string;
}

export function integrationDatabricksAccountPrivateActionRunnerConfigurationToTerraform(struct?: IntegrationDatabricksAccountPrivateActionRunnerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktn.stringToTerraform(struct!.connectionId),
    secret_path: cdktn.stringToTerraform(struct!.secretPath),
    user_uuid: cdktn.stringToTerraform(struct!.userUuid),
  }
}


export function integrationDatabricksAccountPrivateActionRunnerConfigurationToHclTerraform(struct?: IntegrationDatabricksAccountPrivateActionRunnerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationDatabricksAccountPrivateActionRunnerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: IntegrationDatabricksAccountPrivateActionRunnerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._connectionId = value.connectionId;
      this._secretPath = value.secretPath;
      this._userUuid = value.userUuid;
    }
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // secret_path - computed: false, optional: true, required: false
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

  // user_uuid - computed: false, optional: true, required: false
  private _userUuid?: string; 
  public get userUuid() {
    return this.getStringAttribute('user_uuid');
  }
  public set userUuid(value: string) {
    this._userUuid = value;
  }
  public resetUserUuid() {
    this._userUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userUuidInput() {
    return this._userUuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account datadog_integration_databricks_account}
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
  * @param importFromId The id of the existing IntegrationDatabricksAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationDatabricksAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_databricks_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account datadog_integration_databricks_account} Resource
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
        providerVersion: '4.10.0',
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
    this._ccmEnabled = config.ccmEnabled;
    this._ddApiKeyId = config.ddApiKeyId;
    this._ddApiKeySecret = config.ddApiKeySecret;
    this._djmClusterPolicyEnabled = config.djmClusterPolicyEnabled;
    this._djmEnabled = config.djmEnabled;
    this._djmGlobalInitScriptEnabled = config.djmGlobalInitScriptEnabled;
    this._doCrawlersCron = config.doCrawlersCron;
    this._doEnabled = config.doEnabled;
    this._modelServingEndpointName = config.modelServingEndpointName;
    this._modelServingMetricsEnabled = config.modelServingMetricsEnabled;
    this._name = config.name;
    this._scriptGpumEnabled = config.scriptGpumEnabled;
    this._scriptLogsEnabled = config.scriptLogsEnabled;
    this._serverlessJobsEnabled = config.serverlessJobsEnabled;
    this._systemTablesSqlWarehouseId = config.systemTablesSqlWarehouseId;
    this._tableLineageEnabled = config.tableLineageEnabled;
    this._ucVolumePath = config.ucVolumePath;
    this._workspaceUrl = config.workspaceUrl;
    this._authConfig.internalValue = config.authConfig;
    this._privateActionRunnerConfiguration.internalValue = config.privateActionRunnerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ccm_enabled - computed: true, optional: true, required: false
  private _ccmEnabled?: boolean | cdktn.IResolvable; 
  public get ccmEnabled() {
    return this.getBooleanAttribute('ccm_enabled');
  }
  public set ccmEnabled(value: boolean | cdktn.IResolvable) {
    this._ccmEnabled = value;
  }
  public resetCcmEnabled() {
    this._ccmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccmEnabledInput() {
    return this._ccmEnabled;
  }

  // dd_api_key_id - computed: false, optional: true, required: false
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

  // dd_api_key_secret - computed: false, optional: true, required: false
  private _ddApiKeySecret?: string; 
  public get ddApiKeySecret() {
    return this.getStringAttribute('dd_api_key_secret');
  }
  public set ddApiKeySecret(value: string) {
    this._ddApiKeySecret = value;
  }
  public resetDdApiKeySecret() {
    this._ddApiKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddApiKeySecretInput() {
    return this._ddApiKeySecret;
  }

  // djm_cluster_policy_enabled - computed: true, optional: true, required: false
  private _djmClusterPolicyEnabled?: boolean | cdktn.IResolvable; 
  public get djmClusterPolicyEnabled() {
    return this.getBooleanAttribute('djm_cluster_policy_enabled');
  }
  public set djmClusterPolicyEnabled(value: boolean | cdktn.IResolvable) {
    this._djmClusterPolicyEnabled = value;
  }
  public resetDjmClusterPolicyEnabled() {
    this._djmClusterPolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get djmClusterPolicyEnabledInput() {
    return this._djmClusterPolicyEnabled;
  }

  // djm_enabled - computed: true, optional: true, required: false
  private _djmEnabled?: boolean | cdktn.IResolvable; 
  public get djmEnabled() {
    return this.getBooleanAttribute('djm_enabled');
  }
  public set djmEnabled(value: boolean | cdktn.IResolvable) {
    this._djmEnabled = value;
  }
  public resetDjmEnabled() {
    this._djmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get djmEnabledInput() {
    return this._djmEnabled;
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

  // do_enabled - computed: true, optional: true, required: false
  private _doEnabled?: boolean | cdktn.IResolvable; 
  public get doEnabled() {
    return this.getBooleanAttribute('do_enabled');
  }
  public set doEnabled(value: boolean | cdktn.IResolvable) {
    this._doEnabled = value;
  }
  public resetDoEnabled() {
    this._doEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doEnabledInput() {
    return this._doEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_serving_endpoint_name - computed: false, optional: true, required: false
  private _modelServingEndpointName?: string; 
  public get modelServingEndpointName() {
    return this.getStringAttribute('model_serving_endpoint_name');
  }
  public set modelServingEndpointName(value: string) {
    this._modelServingEndpointName = value;
  }
  public resetModelServingEndpointName() {
    this._modelServingEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelServingEndpointNameInput() {
    return this._modelServingEndpointName;
  }

  // model_serving_metrics_enabled - computed: true, optional: true, required: false
  private _modelServingMetricsEnabled?: boolean | cdktn.IResolvable; 
  public get modelServingMetricsEnabled() {
    return this.getBooleanAttribute('model_serving_metrics_enabled');
  }
  public set modelServingMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._modelServingMetricsEnabled = value;
  }
  public resetModelServingMetricsEnabled() {
    this._modelServingMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelServingMetricsEnabledInput() {
    return this._modelServingMetricsEnabled;
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

  // system_tables_sql_warehouse_id - computed: false, optional: true, required: false
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

  // table_lineage_enabled - computed: true, optional: true, required: false
  private _tableLineageEnabled?: boolean | cdktn.IResolvable; 
  public get tableLineageEnabled() {
    return this.getBooleanAttribute('table_lineage_enabled');
  }
  public set tableLineageEnabled(value: boolean | cdktn.IResolvable) {
    this._tableLineageEnabled = value;
  }
  public resetTableLineageEnabled() {
    this._tableLineageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableLineageEnabledInput() {
    return this._tableLineageEnabled;
  }

  // uc_volume_path - computed: false, optional: true, required: false
  private _ucVolumePath?: string; 
  public get ucVolumePath() {
    return this.getStringAttribute('uc_volume_path');
  }
  public set ucVolumePath(value: string) {
    this._ucVolumePath = value;
  }
  public resetUcVolumePath() {
    this._ucVolumePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucVolumePathInput() {
    return this._ucVolumePath;
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

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new IntegrationDatabricksAccountAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: IntegrationDatabricksAccountAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // private_action_runner_configuration - computed: false, optional: true, required: false
  private _privateActionRunnerConfiguration = new IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference(this, "private_action_runner_configuration");
  public get privateActionRunnerConfiguration() {
    return this._privateActionRunnerConfiguration;
  }
  public putPrivateActionRunnerConfiguration(value: IntegrationDatabricksAccountPrivateActionRunnerConfiguration) {
    this._privateActionRunnerConfiguration.internalValue = value;
  }
  public resetPrivateActionRunnerConfiguration() {
    this._privateActionRunnerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateActionRunnerConfigurationInput() {
    return this._privateActionRunnerConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ccm_enabled: cdktn.booleanToTerraform(this._ccmEnabled),
      dd_api_key_id: cdktn.stringToTerraform(this._ddApiKeyId),
      dd_api_key_secret: cdktn.stringToTerraform(this._ddApiKeySecret),
      djm_cluster_policy_enabled: cdktn.booleanToTerraform(this._djmClusterPolicyEnabled),
      djm_enabled: cdktn.booleanToTerraform(this._djmEnabled),
      djm_global_init_script_enabled: cdktn.booleanToTerraform(this._djmGlobalInitScriptEnabled),
      do_crawlers_cron: cdktn.stringToTerraform(this._doCrawlersCron),
      do_enabled: cdktn.booleanToTerraform(this._doEnabled),
      model_serving_endpoint_name: cdktn.stringToTerraform(this._modelServingEndpointName),
      model_serving_metrics_enabled: cdktn.booleanToTerraform(this._modelServingMetricsEnabled),
      name: cdktn.stringToTerraform(this._name),
      script_gpum_enabled: cdktn.booleanToTerraform(this._scriptGpumEnabled),
      script_logs_enabled: cdktn.booleanToTerraform(this._scriptLogsEnabled),
      serverless_jobs_enabled: cdktn.booleanToTerraform(this._serverlessJobsEnabled),
      system_tables_sql_warehouse_id: cdktn.stringToTerraform(this._systemTablesSqlWarehouseId),
      table_lineage_enabled: cdktn.booleanToTerraform(this._tableLineageEnabled),
      uc_volume_path: cdktn.stringToTerraform(this._ucVolumePath),
      workspace_url: cdktn.stringToTerraform(this._workspaceUrl),
      auth_config: integrationDatabricksAccountAuthConfigToTerraform(this._authConfig.internalValue),
      private_action_runner_configuration: integrationDatabricksAccountPrivateActionRunnerConfigurationToTerraform(this._privateActionRunnerConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ccm_enabled: {
        value: cdktn.booleanToHclTerraform(this._ccmEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dd_api_key_id: {
        value: cdktn.stringToHclTerraform(this._ddApiKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dd_api_key_secret: {
        value: cdktn.stringToHclTerraform(this._ddApiKeySecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      djm_cluster_policy_enabled: {
        value: cdktn.booleanToHclTerraform(this._djmClusterPolicyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      djm_enabled: {
        value: cdktn.booleanToHclTerraform(this._djmEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      djm_global_init_script_enabled: {
        value: cdktn.booleanToHclTerraform(this._djmGlobalInitScriptEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      do_crawlers_cron: {
        value: cdktn.stringToHclTerraform(this._doCrawlersCron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      do_enabled: {
        value: cdktn.booleanToHclTerraform(this._doEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      model_serving_endpoint_name: {
        value: cdktn.stringToHclTerraform(this._modelServingEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_serving_metrics_enabled: {
        value: cdktn.booleanToHclTerraform(this._modelServingMetricsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_gpum_enabled: {
        value: cdktn.booleanToHclTerraform(this._scriptGpumEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      script_logs_enabled: {
        value: cdktn.booleanToHclTerraform(this._scriptLogsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serverless_jobs_enabled: {
        value: cdktn.booleanToHclTerraform(this._serverlessJobsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      system_tables_sql_warehouse_id: {
        value: cdktn.stringToHclTerraform(this._systemTablesSqlWarehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_lineage_enabled: {
        value: cdktn.booleanToHclTerraform(this._tableLineageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uc_volume_path: {
        value: cdktn.stringToHclTerraform(this._ucVolumePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_url: {
        value: cdktn.stringToHclTerraform(this._workspaceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_config: {
        value: integrationDatabricksAccountAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationDatabricksAccountAuthConfig",
      },
      private_action_runner_configuration: {
        value: integrationDatabricksAccountPrivateActionRunnerConfigurationToHclTerraform(this._privateActionRunnerConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationDatabricksAccountPrivateActionRunnerConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
