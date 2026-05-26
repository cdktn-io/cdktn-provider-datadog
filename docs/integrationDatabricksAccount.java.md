# `integrationDatabricksAccount` Submodule <a name="`integrationDatabricksAccount` Submodule" id="@cdktn/provider-datadog.integrationDatabricksAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDatabricksAccount <a name="IntegrationDatabricksAccount" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account datadog_integration_databricks_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccount;

IntegrationDatabricksAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .workspaceUrl(java.lang.String)
//  .authConfig(IntegrationDatabricksAccountAuthConfig)
//  .ccmEnabled(java.lang.Boolean|IResolvable)
//  .ddApiKeyId(java.lang.String)
//  .ddApiKeySecret(java.lang.String)
//  .djmClusterPolicyEnabled(java.lang.Boolean|IResolvable)
//  .djmEnabled(java.lang.Boolean|IResolvable)
//  .djmGlobalInitScriptEnabled(java.lang.Boolean|IResolvable)
//  .doCrawlersCron(java.lang.String)
//  .doEnabled(java.lang.Boolean|IResolvable)
//  .modelServingEndpointName(java.lang.String)
//  .modelServingMetricsEnabled(java.lang.Boolean|IResolvable)
//  .privateActionRunnerConfiguration(IntegrationDatabricksAccountPrivateActionRunnerConfiguration)
//  .scriptGpumEnabled(java.lang.Boolean|IResolvable)
//  .scriptLogsEnabled(java.lang.Boolean|IResolvable)
//  .serverlessJobsEnabled(java.lang.Boolean|IResolvable)
//  .systemTablesSqlWarehouseId(java.lang.String)
//  .tableLineageEnabled(java.lang.Boolean|IResolvable)
//  .ucVolumePath(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.workspaceUrl">workspaceUrl</a></code> | <code>java.lang.String</code> | The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com). |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.authConfig">authConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ccmEnabled">ccmEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ddApiKeyId">ddApiKeyId</a></code> | <code>java.lang.String</code> | Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ddApiKeySecret">ddApiKeySecret</a></code> | <code>java.lang.String</code> | Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmClusterPolicyEnabled">djmClusterPolicyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmEnabled">djmEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmGlobalInitScriptEnabled">djmGlobalInitScriptEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent with a global init script in the workspace. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.doCrawlersCron">doCrawlersCron</a></code> | <code>java.lang.String</code> | Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.doEnabled">doEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.modelServingEndpointName">modelServingEndpointName</a></code> | <code>java.lang.String</code> | Name of the Databricks model serving endpoint to monitor. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.modelServingMetricsEnabled">modelServingMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.privateActionRunnerConfiguration">privateActionRunnerConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | private_action_runner_configuration block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scriptGpumEnabled">scriptGpumEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scriptLogsEnabled">scriptLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.serverlessJobsEnabled">serverlessJobsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.systemTablesSqlWarehouseId">systemTablesSqlWarehouseId</a></code> | <code>java.lang.String</code> | SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.tableLineageEnabled">tableLineageEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable table lineage tracking for Databricks tables. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ucVolumePath">ucVolumePath</a></code> | <code>java.lang.String</code> | Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A human-readable name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.workspaceUrl"></a>

- *Type:* java.lang.String

The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#auth_config IntegrationDatabricksAccount#auth_config}

---

##### `ccmEnabled`<sup>Optional</sup> <a name="ccmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ccmEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#ccm_enabled IntegrationDatabricksAccount#ccm_enabled}

---

##### `ddApiKeyId`<sup>Optional</sup> <a name="ddApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ddApiKeyId"></a>

- *Type:* java.lang.String

Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

##### `ddApiKeySecret`<sup>Optional</sup> <a name="ddApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ddApiKeySecret"></a>

- *Type:* java.lang.String

Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_secret IntegrationDatabricksAccount#dd_api_key_secret}

---

##### `djmClusterPolicyEnabled`<sup>Optional</sup> <a name="djmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmClusterPolicyEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume.

Requires a Unity Catalog-enabled workspace with DBR 13.3 LTS+ and `uc_volume_path`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_cluster_policy_enabled IntegrationDatabricksAccount#djm_cluster_policy_enabled}

---

##### `djmEnabled`<sup>Optional</sup> <a name="djmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_enabled IntegrationDatabricksAccount#djm_enabled}

---

##### `djmGlobalInitScriptEnabled`<sup>Optional</sup> <a name="djmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmGlobalInitScriptEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When enabled, Datadog installs and manages the Agent with a global init script in the workspace.

Installation can take up to 15 minutes. Requires Workspace Admin permissions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

##### `doCrawlersCron`<sup>Optional</sup> <a name="doCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.doCrawlersCron"></a>

- *Type:* java.lang.String

Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata.

Defaults to hourly. Defaults to `"0 * * * *"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

##### `doEnabled`<sup>Optional</sup> <a name="doEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.doEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_enabled IntegrationDatabricksAccount#do_enabled}

---

##### `modelServingEndpointName`<sup>Optional</sup> <a name="modelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.modelServingEndpointName"></a>

- *Type:* java.lang.String

Name of the Databricks model serving endpoint to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_endpoint_name IntegrationDatabricksAccount#model_serving_endpoint_name}

---

##### `modelServingMetricsEnabled`<sup>Optional</sup> <a name="modelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.modelServingMetricsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_metrics_enabled IntegrationDatabricksAccount#model_serving_metrics_enabled}

---

##### `privateActionRunnerConfiguration`<sup>Optional</sup> <a name="privateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.privateActionRunnerConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

private_action_runner_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#private_action_runner_configuration IntegrationDatabricksAccount#private_action_runner_configuration}

---

##### `scriptGpumEnabled`<sup>Optional</sup> <a name="scriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scriptGpumEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

##### `scriptLogsEnabled`<sup>Optional</sup> <a name="scriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scriptLogsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

##### `serverlessJobsEnabled`<sup>Optional</sup> <a name="serverlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.serverlessJobsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

##### `systemTablesSqlWarehouseId`<sup>Optional</sup> <a name="systemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.systemTablesSqlWarehouseId"></a>

- *Type:* java.lang.String

SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

##### `tableLineageEnabled`<sup>Optional</sup> <a name="tableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.tableLineageEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable table lineage tracking for Databricks tables. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#table_lineage_enabled IntegrationDatabricksAccount#table_lineage_enabled}

---

##### `ucVolumePath`<sup>Optional</sup> <a name="ucVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ucVolumePath"></a>

- *Type:* java.lang.String

Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#uc_volume_path IntegrationDatabricksAccount#uc_volume_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig">putAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration">putPrivateActionRunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetAuthConfig">resetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetCcmEnabled">resetCcmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeyId">resetDdApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeySecret">resetDdApiKeySecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmClusterPolicyEnabled">resetDjmClusterPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmEnabled">resetDjmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmGlobalInitScriptEnabled">resetDjmGlobalInitScriptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoCrawlersCron">resetDoCrawlersCron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoEnabled">resetDoEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingEndpointName">resetModelServingEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingMetricsEnabled">resetModelServingMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetPrivateActionRunnerConfiguration">resetPrivateActionRunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptGpumEnabled">resetScriptGpumEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptLogsEnabled">resetScriptLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetServerlessJobsEnabled">resetServerlessJobsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetSystemTablesSqlWarehouseId">resetSystemTablesSqlWarehouseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetTableLineageEnabled">resetTableLineageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetUcVolumePath">resetUcVolumePath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig"></a>

```java
public void putAuthConfig(IntegrationDatabricksAccountAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---

##### `putPrivateActionRunnerConfiguration` <a name="putPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration"></a>

```java
public void putPrivateActionRunnerConfiguration(IntegrationDatabricksAccountPrivateActionRunnerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---

##### `resetAuthConfig` <a name="resetAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetAuthConfig"></a>

```java
public void resetAuthConfig()
```

##### `resetCcmEnabled` <a name="resetCcmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetCcmEnabled"></a>

```java
public void resetCcmEnabled()
```

##### `resetDdApiKeyId` <a name="resetDdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeyId"></a>

```java
public void resetDdApiKeyId()
```

##### `resetDdApiKeySecret` <a name="resetDdApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeySecret"></a>

```java
public void resetDdApiKeySecret()
```

##### `resetDjmClusterPolicyEnabled` <a name="resetDjmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmClusterPolicyEnabled"></a>

```java
public void resetDjmClusterPolicyEnabled()
```

##### `resetDjmEnabled` <a name="resetDjmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmEnabled"></a>

```java
public void resetDjmEnabled()
```

##### `resetDjmGlobalInitScriptEnabled` <a name="resetDjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmGlobalInitScriptEnabled"></a>

```java
public void resetDjmGlobalInitScriptEnabled()
```

##### `resetDoCrawlersCron` <a name="resetDoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoCrawlersCron"></a>

```java
public void resetDoCrawlersCron()
```

##### `resetDoEnabled` <a name="resetDoEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoEnabled"></a>

```java
public void resetDoEnabled()
```

##### `resetModelServingEndpointName` <a name="resetModelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingEndpointName"></a>

```java
public void resetModelServingEndpointName()
```

##### `resetModelServingMetricsEnabled` <a name="resetModelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingMetricsEnabled"></a>

```java
public void resetModelServingMetricsEnabled()
```

##### `resetPrivateActionRunnerConfiguration` <a name="resetPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetPrivateActionRunnerConfiguration"></a>

```java
public void resetPrivateActionRunnerConfiguration()
```

##### `resetScriptGpumEnabled` <a name="resetScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptGpumEnabled"></a>

```java
public void resetScriptGpumEnabled()
```

##### `resetScriptLogsEnabled` <a name="resetScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptLogsEnabled"></a>

```java
public void resetScriptLogsEnabled()
```

##### `resetServerlessJobsEnabled` <a name="resetServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetServerlessJobsEnabled"></a>

```java
public void resetServerlessJobsEnabled()
```

##### `resetSystemTablesSqlWarehouseId` <a name="resetSystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetSystemTablesSqlWarehouseId"></a>

```java
public void resetSystemTablesSqlWarehouseId()
```

##### `resetTableLineageEnabled` <a name="resetTableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetTableLineageEnabled"></a>

```java
public void resetTableLineageEnabled()
```

##### `resetUcVolumePath` <a name="resetUcVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetUcVolumePath"></a>

```java
public void resetUcVolumePath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccount;

IntegrationDatabricksAccount.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccount;

IntegrationDatabricksAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccount;

IntegrationDatabricksAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccount;

IntegrationDatabricksAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationDatabricksAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationDatabricksAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationDatabricksAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationDatabricksAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfig">authConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference">IntegrationDatabricksAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfiguration">privateActionRunnerConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference">IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfigInput">authConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabledInput">ccmEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyIdInput">ddApiKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecretInput">ddApiKeySecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabledInput">djmClusterPolicyEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabledInput">djmEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabledInput">djmGlobalInitScriptEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCronInput">doCrawlersCronInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabledInput">doEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointNameInput">modelServingEndpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabledInput">modelServingMetricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfigurationInput">privateActionRunnerConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabledInput">scriptGpumEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabledInput">scriptLogsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabledInput">serverlessJobsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseIdInput">systemTablesSqlWarehouseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabledInput">tableLineageEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePathInput">ucVolumePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrlInput">workspaceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabled">ccmEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyId">ddApiKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecret">ddApiKeySecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabled">djmClusterPolicyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabled">djmEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabled">djmGlobalInitScriptEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCron">doCrawlersCron</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabled">doEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointName">modelServingEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabled">modelServingMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabled">scriptGpumEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabled">scriptLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabled">serverlessJobsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseId">systemTablesSqlWarehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabled">tableLineageEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePath">ucVolumePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrl">workspaceUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfig"></a>

```java
public IntegrationDatabricksAccountAuthConfigOutputReference getAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference">IntegrationDatabricksAccountAuthConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateActionRunnerConfiguration`<sup>Required</sup> <a name="privateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfiguration"></a>

```java
public IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference getPrivateActionRunnerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference">IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference</a>

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfigInput"></a>

```java
public IResolvable|IntegrationDatabricksAccountAuthConfig getAuthConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---

##### `ccmEnabledInput`<sup>Optional</sup> <a name="ccmEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getCcmEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ddApiKeyIdInput`<sup>Optional</sup> <a name="ddApiKeyIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyIdInput"></a>

```java
public java.lang.String getDdApiKeyIdInput();
```

- *Type:* java.lang.String

---

##### `ddApiKeySecretInput`<sup>Optional</sup> <a name="ddApiKeySecretInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecretInput"></a>

```java
public java.lang.String getDdApiKeySecretInput();
```

- *Type:* java.lang.String

---

##### `djmClusterPolicyEnabledInput`<sup>Optional</sup> <a name="djmClusterPolicyEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDjmClusterPolicyEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `djmEnabledInput`<sup>Optional</sup> <a name="djmEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDjmEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `djmGlobalInitScriptEnabledInput`<sup>Optional</sup> <a name="djmGlobalInitScriptEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDjmGlobalInitScriptEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doCrawlersCronInput`<sup>Optional</sup> <a name="doCrawlersCronInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCronInput"></a>

```java
public java.lang.String getDoCrawlersCronInput();
```

- *Type:* java.lang.String

---

##### `doEnabledInput`<sup>Optional</sup> <a name="doEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDoEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `modelServingEndpointNameInput`<sup>Optional</sup> <a name="modelServingEndpointNameInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointNameInput"></a>

```java
public java.lang.String getModelServingEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `modelServingMetricsEnabledInput`<sup>Optional</sup> <a name="modelServingMetricsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getModelServingMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateActionRunnerConfigurationInput`<sup>Optional</sup> <a name="privateActionRunnerConfigurationInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfigurationInput"></a>

```java
public IResolvable|IntegrationDatabricksAccountPrivateActionRunnerConfiguration getPrivateActionRunnerConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---

##### `scriptGpumEnabledInput`<sup>Optional</sup> <a name="scriptGpumEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getScriptGpumEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `scriptLogsEnabledInput`<sup>Optional</sup> <a name="scriptLogsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getScriptLogsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serverlessJobsEnabledInput`<sup>Optional</sup> <a name="serverlessJobsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getServerlessJobsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `systemTablesSqlWarehouseIdInput`<sup>Optional</sup> <a name="systemTablesSqlWarehouseIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseIdInput"></a>

```java
public java.lang.String getSystemTablesSqlWarehouseIdInput();
```

- *Type:* java.lang.String

---

##### `tableLineageEnabledInput`<sup>Optional</sup> <a name="tableLineageEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTableLineageEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ucVolumePathInput`<sup>Optional</sup> <a name="ucVolumePathInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePathInput"></a>

```java
public java.lang.String getUcVolumePathInput();
```

- *Type:* java.lang.String

---

##### `workspaceUrlInput`<sup>Optional</sup> <a name="workspaceUrlInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrlInput"></a>

```java
public java.lang.String getWorkspaceUrlInput();
```

- *Type:* java.lang.String

---

##### `ccmEnabled`<sup>Required</sup> <a name="ccmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCcmEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ddApiKeyId`<sup>Required</sup> <a name="ddApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyId"></a>

```java
public java.lang.String getDdApiKeyId();
```

- *Type:* java.lang.String

---

##### `ddApiKeySecret`<sup>Required</sup> <a name="ddApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecret"></a>

```java
public java.lang.String getDdApiKeySecret();
```

- *Type:* java.lang.String

---

##### `djmClusterPolicyEnabled`<sup>Required</sup> <a name="djmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDjmClusterPolicyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `djmEnabled`<sup>Required</sup> <a name="djmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDjmEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `djmGlobalInitScriptEnabled`<sup>Required</sup> <a name="djmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDjmGlobalInitScriptEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doCrawlersCron`<sup>Required</sup> <a name="doCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCron"></a>

```java
public java.lang.String getDoCrawlersCron();
```

- *Type:* java.lang.String

---

##### `doEnabled`<sup>Required</sup> <a name="doEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDoEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `modelServingEndpointName`<sup>Required</sup> <a name="modelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointName"></a>

```java
public java.lang.String getModelServingEndpointName();
```

- *Type:* java.lang.String

---

##### `modelServingMetricsEnabled`<sup>Required</sup> <a name="modelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getModelServingMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scriptGpumEnabled`<sup>Required</sup> <a name="scriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabled"></a>

```java
public java.lang.Boolean|IResolvable getScriptGpumEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `scriptLogsEnabled`<sup>Required</sup> <a name="scriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getScriptLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serverlessJobsEnabled`<sup>Required</sup> <a name="serverlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getServerlessJobsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `systemTablesSqlWarehouseId`<sup>Required</sup> <a name="systemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseId"></a>

```java
public java.lang.String getSystemTablesSqlWarehouseId();
```

- *Type:* java.lang.String

---

##### `tableLineageEnabled`<sup>Required</sup> <a name="tableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTableLineageEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ucVolumePath`<sup>Required</sup> <a name="ucVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePath"></a>

```java
public java.lang.String getUcVolumePath();
```

- *Type:* java.lang.String

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrl"></a>

```java
public java.lang.String getWorkspaceUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDatabricksAccountAuthConfig <a name="IntegrationDatabricksAccountAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccountAuthConfig;

IntegrationDatabricksAccountAuthConfig.builder()
//  .oauth(IntegrationDatabricksAccountAuthConfigOauth)
//  .pat(IntegrationDatabricksAccountAuthConfigPat)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.oauth">oauth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | oauth block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.pat">pat</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | pat block. |

---

##### `oauth`<sup>Optional</sup> <a name="oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.oauth"></a>

```java
public IntegrationDatabricksAccountAuthConfigOauth getOauth();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#oauth IntegrationDatabricksAccount#oauth}

---

##### `pat`<sup>Optional</sup> <a name="pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.pat"></a>

```java
public IntegrationDatabricksAccountAuthConfigPat getPat();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

pat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#pat IntegrationDatabricksAccount#pat}

---

### IntegrationDatabricksAccountAuthConfigOauth <a name="IntegrationDatabricksAccountAuthConfigOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccountAuthConfigOauth;

IntegrationDatabricksAccountAuthConfigOauth.builder()
//  .azureTenantId(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .databricksAccountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth Client ID for the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | OAuth Client Secret for the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.databricksAccountId">databricksAccountId</a></code> | <code>java.lang.String</code> | Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner. |

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

OAuth Client ID for the Databricks service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

OAuth Client Secret for the Databricks service principal.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_secret IntegrationDatabricksAccount#client_secret}

---

##### `databricksAccountId`<sup>Optional</sup> <a name="databricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.databricksAccountId"></a>

```java
public java.lang.String getDatabricksAccountId();
```

- *Type:* java.lang.String

Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#databricks_account_id IntegrationDatabricksAccount#databricks_account_id}

---

### IntegrationDatabricksAccountAuthConfigPat <a name="IntegrationDatabricksAccountAuthConfigPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccountAuthConfigPat;

IntegrationDatabricksAccountAuthConfigPat.builder()
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.property.token">token</a></code> | <code>java.lang.String</code> | Databricks Personal Access Token (PAT). |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Databricks Personal Access Token (PAT).

Generate from Settings > Developer > Access tokens. This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#token IntegrationDatabricksAccount#token}

---

### IntegrationDatabricksAccountConfig <a name="IntegrationDatabricksAccountConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccountConfig;

IntegrationDatabricksAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .workspaceUrl(java.lang.String)
//  .authConfig(IntegrationDatabricksAccountAuthConfig)
//  .ccmEnabled(java.lang.Boolean|IResolvable)
//  .ddApiKeyId(java.lang.String)
//  .ddApiKeySecret(java.lang.String)
//  .djmClusterPolicyEnabled(java.lang.Boolean|IResolvable)
//  .djmEnabled(java.lang.Boolean|IResolvable)
//  .djmGlobalInitScriptEnabled(java.lang.Boolean|IResolvable)
//  .doCrawlersCron(java.lang.String)
//  .doEnabled(java.lang.Boolean|IResolvable)
//  .modelServingEndpointName(java.lang.String)
//  .modelServingMetricsEnabled(java.lang.Boolean|IResolvable)
//  .privateActionRunnerConfiguration(IntegrationDatabricksAccountPrivateActionRunnerConfiguration)
//  .scriptGpumEnabled(java.lang.Boolean|IResolvable)
//  .scriptLogsEnabled(java.lang.Boolean|IResolvable)
//  .serverlessJobsEnabled(java.lang.Boolean|IResolvable)
//  .systemTablesSqlWarehouseId(java.lang.String)
//  .tableLineageEnabled(java.lang.Boolean|IResolvable)
//  .ucVolumePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.workspaceUrl">workspaceUrl</a></code> | <code>java.lang.String</code> | The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com). |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ccmEnabled">ccmEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeyId">ddApiKeyId</a></code> | <code>java.lang.String</code> | Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeySecret">ddApiKeySecret</a></code> | <code>java.lang.String</code> | Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmClusterPolicyEnabled">djmClusterPolicyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmEnabled">djmEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmGlobalInitScriptEnabled">djmGlobalInitScriptEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent with a global init script in the workspace. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doCrawlersCron">doCrawlersCron</a></code> | <code>java.lang.String</code> | Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doEnabled">doEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingEndpointName">modelServingEndpointName</a></code> | <code>java.lang.String</code> | Name of the Databricks model serving endpoint to monitor. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingMetricsEnabled">modelServingMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.privateActionRunnerConfiguration">privateActionRunnerConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | private_action_runner_configuration block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptGpumEnabled">scriptGpumEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptLogsEnabled">scriptLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.serverlessJobsEnabled">serverlessJobsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.systemTablesSqlWarehouseId">systemTablesSqlWarehouseId</a></code> | <code>java.lang.String</code> | SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.tableLineageEnabled">tableLineageEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable table lineage tracking for Databricks tables. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ucVolumePath">ucVolumePath</a></code> | <code>java.lang.String</code> | Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-readable name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.workspaceUrl"></a>

```java
public java.lang.String getWorkspaceUrl();
```

- *Type:* java.lang.String

The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authConfig"></a>

```java
public IntegrationDatabricksAccountAuthConfig getAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#auth_config IntegrationDatabricksAccount#auth_config}

---

##### `ccmEnabled`<sup>Optional</sup> <a name="ccmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ccmEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCcmEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#ccm_enabled IntegrationDatabricksAccount#ccm_enabled}

---

##### `ddApiKeyId`<sup>Optional</sup> <a name="ddApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeyId"></a>

```java
public java.lang.String getDdApiKeyId();
```

- *Type:* java.lang.String

Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

##### `ddApiKeySecret`<sup>Optional</sup> <a name="ddApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeySecret"></a>

```java
public java.lang.String getDdApiKeySecret();
```

- *Type:* java.lang.String

Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_secret IntegrationDatabricksAccount#dd_api_key_secret}

---

##### `djmClusterPolicyEnabled`<sup>Optional</sup> <a name="djmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmClusterPolicyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDjmClusterPolicyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume.

Requires a Unity Catalog-enabled workspace with DBR 13.3 LTS+ and `uc_volume_path`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_cluster_policy_enabled IntegrationDatabricksAccount#djm_cluster_policy_enabled}

---

##### `djmEnabled`<sup>Optional</sup> <a name="djmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDjmEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_enabled IntegrationDatabricksAccount#djm_enabled}

---

##### `djmGlobalInitScriptEnabled`<sup>Optional</sup> <a name="djmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmGlobalInitScriptEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDjmGlobalInitScriptEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When enabled, Datadog installs and manages the Agent with a global init script in the workspace.

Installation can take up to 15 minutes. Requires Workspace Admin permissions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

##### `doCrawlersCron`<sup>Optional</sup> <a name="doCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doCrawlersCron"></a>

```java
public java.lang.String getDoCrawlersCron();
```

- *Type:* java.lang.String

Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata.

Defaults to hourly. Defaults to `"0 * * * *"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

##### `doEnabled`<sup>Optional</sup> <a name="doEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDoEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_enabled IntegrationDatabricksAccount#do_enabled}

---

##### `modelServingEndpointName`<sup>Optional</sup> <a name="modelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingEndpointName"></a>

```java
public java.lang.String getModelServingEndpointName();
```

- *Type:* java.lang.String

Name of the Databricks model serving endpoint to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_endpoint_name IntegrationDatabricksAccount#model_serving_endpoint_name}

---

##### `modelServingMetricsEnabled`<sup>Optional</sup> <a name="modelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getModelServingMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_metrics_enabled IntegrationDatabricksAccount#model_serving_metrics_enabled}

---

##### `privateActionRunnerConfiguration`<sup>Optional</sup> <a name="privateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.privateActionRunnerConfiguration"></a>

```java
public IntegrationDatabricksAccountPrivateActionRunnerConfiguration getPrivateActionRunnerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

private_action_runner_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#private_action_runner_configuration IntegrationDatabricksAccount#private_action_runner_configuration}

---

##### `scriptGpumEnabled`<sup>Optional</sup> <a name="scriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptGpumEnabled"></a>

```java
public java.lang.Boolean|IResolvable getScriptGpumEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

##### `scriptLogsEnabled`<sup>Optional</sup> <a name="scriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getScriptLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

##### `serverlessJobsEnabled`<sup>Optional</sup> <a name="serverlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.serverlessJobsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getServerlessJobsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

##### `systemTablesSqlWarehouseId`<sup>Optional</sup> <a name="systemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.systemTablesSqlWarehouseId"></a>

```java
public java.lang.String getSystemTablesSqlWarehouseId();
```

- *Type:* java.lang.String

SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

##### `tableLineageEnabled`<sup>Optional</sup> <a name="tableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.tableLineageEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTableLineageEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable table lineage tracking for Databricks tables. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#table_lineage_enabled IntegrationDatabricksAccount#table_lineage_enabled}

---

##### `ucVolumePath`<sup>Optional</sup> <a name="ucVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ucVolumePath"></a>

```java
public java.lang.String getUcVolumePath();
```

- *Type:* java.lang.String

Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#uc_volume_path IntegrationDatabricksAccount#uc_volume_path}

---

### IntegrationDatabricksAccountPrivateActionRunnerConfiguration <a name="IntegrationDatabricksAccountPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccountPrivateActionRunnerConfiguration;

IntegrationDatabricksAccountPrivateActionRunnerConfiguration.builder()
//  .connectionId(java.lang.String)
//  .secretPath(java.lang.String)
//  .userUuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Private Action Runner connection ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.secretPath">secretPath</a></code> | <code>java.lang.String</code> | Path to the stored secret holding Databricks credentials inside the Private Action Runner. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.userUuid">userUuid</a></code> | <code>java.lang.String</code> | Service Account UUID used to execute Private Action Runner actions. |

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Private Action Runner connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}

---

##### `secretPath`<sup>Optional</sup> <a name="secretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.secretPath"></a>

```java
public java.lang.String getSecretPath();
```

- *Type:* java.lang.String

Path to the stored secret holding Databricks credentials inside the Private Action Runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}

---

##### `userUuid`<sup>Optional</sup> <a name="userUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.userUuid"></a>

```java
public java.lang.String getUserUuid();
```

- *Type:* java.lang.String

Service Account UUID used to execute Private Action Runner actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDatabricksAccountAuthConfigOauthOutputReference <a name="IntegrationDatabricksAccountAuthConfigOauthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccountAuthConfigOauthOutputReference;

new IntegrationDatabricksAccountAuthConfigOauthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetDatabricksAccountId">resetDatabricksAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetAzureTenantId"></a>

```java
public void resetAzureTenantId()
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetDatabricksAccountId` <a name="resetDatabricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetDatabricksAccountId"></a>

```java
public void resetDatabricksAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountIdInput">databricksAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountId">databricksAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantIdInput"></a>

```java
public java.lang.String getAzureTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `databricksAccountIdInput`<sup>Optional</sup> <a name="databricksAccountIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountIdInput"></a>

```java
public java.lang.String getDatabricksAccountIdInput();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `databricksAccountId`<sup>Required</sup> <a name="databricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountId"></a>

```java
public java.lang.String getDatabricksAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationDatabricksAccountAuthConfigOauth getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---


### IntegrationDatabricksAccountAuthConfigOutputReference <a name="IntegrationDatabricksAccountAuthConfigOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccountAuthConfigOutputReference;

new IntegrationDatabricksAccountAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth">putOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat">putPat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetOauth">resetOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetPat">resetPat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauth` <a name="putOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth"></a>

```java
public void putOauth(IntegrationDatabricksAccountAuthConfigOauth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---

##### `putPat` <a name="putPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat"></a>

```java
public void putPat(IntegrationDatabricksAccountAuthConfigPat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---

##### `resetOauth` <a name="resetOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetOauth"></a>

```java
public void resetOauth()
```

##### `resetPat` <a name="resetPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetPat"></a>

```java
public void resetPat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauth">oauth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference">IntegrationDatabricksAccountAuthConfigOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.pat">pat</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference">IntegrationDatabricksAccountAuthConfigPatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauthInput">oauthInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.patInput">patInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauth`<sup>Required</sup> <a name="oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauth"></a>

```java
public IntegrationDatabricksAccountAuthConfigOauthOutputReference getOauth();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference">IntegrationDatabricksAccountAuthConfigOauthOutputReference</a>

---

##### `pat`<sup>Required</sup> <a name="pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.pat"></a>

```java
public IntegrationDatabricksAccountAuthConfigPatOutputReference getPat();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference">IntegrationDatabricksAccountAuthConfigPatOutputReference</a>

---

##### `oauthInput`<sup>Optional</sup> <a name="oauthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauthInput"></a>

```java
public IResolvable|IntegrationDatabricksAccountAuthConfigOauth getOauthInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---

##### `patInput`<sup>Optional</sup> <a name="patInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.patInput"></a>

```java
public IResolvable|IntegrationDatabricksAccountAuthConfigPat getPatInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationDatabricksAccountAuthConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---


### IntegrationDatabricksAccountAuthConfigPatOutputReference <a name="IntegrationDatabricksAccountAuthConfigPatOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccountAuthConfigPatOutputReference;

new IntegrationDatabricksAccountAuthConfigPatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToken` <a name="resetToken" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resetToken"></a>

```java
public void resetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationDatabricksAccountAuthConfigPat getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---


### IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference <a name="IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_databricks_account.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference;

new IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetSecretPath">resetSecretPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetUserUuid">resetUserUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetConnectionId"></a>

```java
public void resetConnectionId()
```

##### `resetSecretPath` <a name="resetSecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetSecretPath"></a>

```java
public void resetSecretPath()
```

##### `resetUserUuid` <a name="resetUserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetUserUuid"></a>

```java
public void resetUserUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPathInput">secretPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuidInput">userUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPath">secretPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuid">userUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `secretPathInput`<sup>Optional</sup> <a name="secretPathInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPathInput"></a>

```java
public java.lang.String getSecretPathInput();
```

- *Type:* java.lang.String

---

##### `userUuidInput`<sup>Optional</sup> <a name="userUuidInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuidInput"></a>

```java
public java.lang.String getUserUuidInput();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `secretPath`<sup>Required</sup> <a name="secretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPath"></a>

```java
public java.lang.String getSecretPath();
```

- *Type:* java.lang.String

---

##### `userUuid`<sup>Required</sup> <a name="userUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuid"></a>

```java
public java.lang.String getUserUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationDatabricksAccountPrivateActionRunnerConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---



