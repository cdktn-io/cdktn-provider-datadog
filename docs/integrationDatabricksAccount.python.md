# `integrationDatabricksAccount` Submodule <a name="`integrationDatabricksAccount` Submodule" id="@cdktn/provider-datadog.integrationDatabricksAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDatabricksAccount <a name="IntegrationDatabricksAccount" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account datadog_integration_databricks_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccount(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  workspace_url: str,
  auth_config: IntegrationDatabricksAccountAuthConfig = None,
  ccm_enabled: bool | IResolvable = None,
  dd_api_key_id: str = None,
  dd_api_key_secret: str = None,
  djm_cluster_policy_enabled: bool | IResolvable = None,
  djm_enabled: bool | IResolvable = None,
  djm_global_init_script_enabled: bool | IResolvable = None,
  do_crawlers_cron: str = None,
  do_enabled: bool | IResolvable = None,
  model_serving_endpoint_name: str = None,
  model_serving_metrics_enabled: bool | IResolvable = None,
  private_action_runner_configuration: IntegrationDatabricksAccountPrivateActionRunnerConfiguration = None,
  script_gpum_enabled: bool | IResolvable = None,
  script_logs_enabled: bool | IResolvable = None,
  serverless_jobs_enabled: bool | IResolvable = None,
  system_tables_sql_warehouse_id: str = None,
  table_lineage_enabled: bool | IResolvable = None,
  uc_volume_path: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | A human-readable name for the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.workspaceUrl">workspace_url</a></code> | <code>str</code> | The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com). |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.authConfig">auth_config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ccmEnabled">ccm_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ddApiKeyId">dd_api_key_id</a></code> | <code>str</code> | Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ddApiKeySecret">dd_api_key_secret</a></code> | <code>str</code> | Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmClusterPolicyEnabled">djm_cluster_policy_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmEnabled">djm_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmGlobalInitScriptEnabled">djm_global_init_script_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent with a global init script in the workspace. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.doCrawlersCron">do_crawlers_cron</a></code> | <code>str</code> | Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.doEnabled">do_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.modelServingEndpointName">model_serving_endpoint_name</a></code> | <code>str</code> | Name of the Databricks model serving endpoint to monitor. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.modelServingMetricsEnabled">model_serving_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.privateActionRunnerConfiguration">private_action_runner_configuration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | private_action_runner_configuration block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scriptGpumEnabled">script_gpum_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scriptLogsEnabled">script_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.serverlessJobsEnabled">serverless_jobs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.systemTablesSqlWarehouseId">system_tables_sql_warehouse_id</a></code> | <code>str</code> | SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.tableLineageEnabled">table_lineage_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable table lineage tracking for Databricks tables. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ucVolumePath">uc_volume_path</a></code> | <code>str</code> | Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.name"></a>

- *Type:* str

A human-readable name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `workspace_url`<sup>Required</sup> <a name="workspace_url" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.workspaceUrl"></a>

- *Type:* str

The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#auth_config IntegrationDatabricksAccount#auth_config}

---

##### `ccm_enabled`<sup>Optional</sup> <a name="ccm_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ccmEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#ccm_enabled IntegrationDatabricksAccount#ccm_enabled}

---

##### `dd_api_key_id`<sup>Optional</sup> <a name="dd_api_key_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ddApiKeyId"></a>

- *Type:* str

Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

##### `dd_api_key_secret`<sup>Optional</sup> <a name="dd_api_key_secret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ddApiKeySecret"></a>

- *Type:* str

Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_secret IntegrationDatabricksAccount#dd_api_key_secret}

---

##### `djm_cluster_policy_enabled`<sup>Optional</sup> <a name="djm_cluster_policy_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmClusterPolicyEnabled"></a>

- *Type:* bool | cdktn.IResolvable

When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume.

Requires a Unity Catalog-enabled workspace with DBR 13.3 LTS+ and `uc_volume_path`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_cluster_policy_enabled IntegrationDatabricksAccount#djm_cluster_policy_enabled}

---

##### `djm_enabled`<sup>Optional</sup> <a name="djm_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_enabled IntegrationDatabricksAccount#djm_enabled}

---

##### `djm_global_init_script_enabled`<sup>Optional</sup> <a name="djm_global_init_script_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.djmGlobalInitScriptEnabled"></a>

- *Type:* bool | cdktn.IResolvable

When enabled, Datadog installs and manages the Agent with a global init script in the workspace.

Installation can take up to 15 minutes. Requires Workspace Admin permissions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

##### `do_crawlers_cron`<sup>Optional</sup> <a name="do_crawlers_cron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.doCrawlersCron"></a>

- *Type:* str

Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata.

Defaults to hourly. Defaults to `"0 * * * *"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

##### `do_enabled`<sup>Optional</sup> <a name="do_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.doEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_enabled IntegrationDatabricksAccount#do_enabled}

---

##### `model_serving_endpoint_name`<sup>Optional</sup> <a name="model_serving_endpoint_name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.modelServingEndpointName"></a>

- *Type:* str

Name of the Databricks model serving endpoint to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_endpoint_name IntegrationDatabricksAccount#model_serving_endpoint_name}

---

##### `model_serving_metrics_enabled`<sup>Optional</sup> <a name="model_serving_metrics_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.modelServingMetricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_metrics_enabled IntegrationDatabricksAccount#model_serving_metrics_enabled}

---

##### `private_action_runner_configuration`<sup>Optional</sup> <a name="private_action_runner_configuration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.privateActionRunnerConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

private_action_runner_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#private_action_runner_configuration IntegrationDatabricksAccount#private_action_runner_configuration}

---

##### `script_gpum_enabled`<sup>Optional</sup> <a name="script_gpum_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scriptGpumEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

##### `script_logs_enabled`<sup>Optional</sup> <a name="script_logs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scriptLogsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

##### `serverless_jobs_enabled`<sup>Optional</sup> <a name="serverless_jobs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.serverlessJobsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

##### `system_tables_sql_warehouse_id`<sup>Optional</sup> <a name="system_tables_sql_warehouse_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.systemTablesSqlWarehouseId"></a>

- *Type:* str

SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

##### `table_lineage_enabled`<sup>Optional</sup> <a name="table_lineage_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.tableLineageEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Enable table lineage tracking for Databricks tables. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#table_lineage_enabled IntegrationDatabricksAccount#table_lineage_enabled}

---

##### `uc_volume_path`<sup>Optional</sup> <a name="uc_volume_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.ucVolumePath"></a>

- *Type:* str

Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#uc_volume_path IntegrationDatabricksAccount#uc_volume_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig">put_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration">put_private_action_runner_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetAuthConfig">reset_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetCcmEnabled">reset_ccm_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeyId">reset_dd_api_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeySecret">reset_dd_api_key_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmClusterPolicyEnabled">reset_djm_cluster_policy_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmEnabled">reset_djm_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmGlobalInitScriptEnabled">reset_djm_global_init_script_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoCrawlersCron">reset_do_crawlers_cron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoEnabled">reset_do_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingEndpointName">reset_model_serving_endpoint_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingMetricsEnabled">reset_model_serving_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetPrivateActionRunnerConfiguration">reset_private_action_runner_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptGpumEnabled">reset_script_gpum_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptLogsEnabled">reset_script_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetServerlessJobsEnabled">reset_serverless_jobs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetSystemTablesSqlWarehouseId">reset_system_tables_sql_warehouse_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetTableLineageEnabled">reset_table_lineage_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetUcVolumePath">reset_uc_volume_path</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_config` <a name="put_auth_config" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig"></a>

```python
def put_auth_config(
  oauth: IntegrationDatabricksAccountAuthConfigOauth = None,
  pat: IntegrationDatabricksAccountAuthConfigPat = None
) -> None
```

###### `oauth`<sup>Optional</sup> <a name="oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig.parameter.oauth"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#oauth IntegrationDatabricksAccount#oauth}

---

###### `pat`<sup>Optional</sup> <a name="pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig.parameter.pat"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

pat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#pat IntegrationDatabricksAccount#pat}

---

##### `put_private_action_runner_configuration` <a name="put_private_action_runner_configuration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration"></a>

```python
def put_private_action_runner_configuration(
  connection_id: str = None,
  secret_path: str = None,
  user_uuid: str = None
) -> None
```

###### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration.parameter.connectionId"></a>

- *Type:* str

Private Action Runner connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}

---

###### `secret_path`<sup>Optional</sup> <a name="secret_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration.parameter.secretPath"></a>

- *Type:* str

Path to the stored secret holding Databricks credentials inside the Private Action Runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}

---

###### `user_uuid`<sup>Optional</sup> <a name="user_uuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration.parameter.userUuid"></a>

- *Type:* str

Service Account UUID used to execute Private Action Runner actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}

---

##### `reset_auth_config` <a name="reset_auth_config" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetAuthConfig"></a>

```python
def reset_auth_config() -> None
```

##### `reset_ccm_enabled` <a name="reset_ccm_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetCcmEnabled"></a>

```python
def reset_ccm_enabled() -> None
```

##### `reset_dd_api_key_id` <a name="reset_dd_api_key_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeyId"></a>

```python
def reset_dd_api_key_id() -> None
```

##### `reset_dd_api_key_secret` <a name="reset_dd_api_key_secret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeySecret"></a>

```python
def reset_dd_api_key_secret() -> None
```

##### `reset_djm_cluster_policy_enabled` <a name="reset_djm_cluster_policy_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmClusterPolicyEnabled"></a>

```python
def reset_djm_cluster_policy_enabled() -> None
```

##### `reset_djm_enabled` <a name="reset_djm_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmEnabled"></a>

```python
def reset_djm_enabled() -> None
```

##### `reset_djm_global_init_script_enabled` <a name="reset_djm_global_init_script_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmGlobalInitScriptEnabled"></a>

```python
def reset_djm_global_init_script_enabled() -> None
```

##### `reset_do_crawlers_cron` <a name="reset_do_crawlers_cron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoCrawlersCron"></a>

```python
def reset_do_crawlers_cron() -> None
```

##### `reset_do_enabled` <a name="reset_do_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoEnabled"></a>

```python
def reset_do_enabled() -> None
```

##### `reset_model_serving_endpoint_name` <a name="reset_model_serving_endpoint_name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingEndpointName"></a>

```python
def reset_model_serving_endpoint_name() -> None
```

##### `reset_model_serving_metrics_enabled` <a name="reset_model_serving_metrics_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingMetricsEnabled"></a>

```python
def reset_model_serving_metrics_enabled() -> None
```

##### `reset_private_action_runner_configuration` <a name="reset_private_action_runner_configuration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetPrivateActionRunnerConfiguration"></a>

```python
def reset_private_action_runner_configuration() -> None
```

##### `reset_script_gpum_enabled` <a name="reset_script_gpum_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptGpumEnabled"></a>

```python
def reset_script_gpum_enabled() -> None
```

##### `reset_script_logs_enabled` <a name="reset_script_logs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptLogsEnabled"></a>

```python
def reset_script_logs_enabled() -> None
```

##### `reset_serverless_jobs_enabled` <a name="reset_serverless_jobs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetServerlessJobsEnabled"></a>

```python
def reset_serverless_jobs_enabled() -> None
```

##### `reset_system_tables_sql_warehouse_id` <a name="reset_system_tables_sql_warehouse_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetSystemTablesSqlWarehouseId"></a>

```python
def reset_system_tables_sql_warehouse_id() -> None
```

##### `reset_table_lineage_enabled` <a name="reset_table_lineage_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetTableLineageEnabled"></a>

```python
def reset_table_lineage_enabled() -> None
```

##### `reset_uc_volume_path` <a name="reset_uc_volume_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetUcVolumePath"></a>

```python
def reset_uc_volume_path() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccount.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationDatabricksAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationDatabricksAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationDatabricksAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfig">auth_config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference">IntegrationDatabricksAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfiguration">private_action_runner_configuration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference">IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfigInput">auth_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabledInput">ccm_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyIdInput">dd_api_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecretInput">dd_api_key_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabledInput">djm_cluster_policy_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabledInput">djm_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabledInput">djm_global_init_script_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCronInput">do_crawlers_cron_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabledInput">do_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointNameInput">model_serving_endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabledInput">model_serving_metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfigurationInput">private_action_runner_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabledInput">script_gpum_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabledInput">script_logs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabledInput">serverless_jobs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseIdInput">system_tables_sql_warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabledInput">table_lineage_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePathInput">uc_volume_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrlInput">workspace_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabled">ccm_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyId">dd_api_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecret">dd_api_key_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabled">djm_cluster_policy_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabled">djm_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabled">djm_global_init_script_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCron">do_crawlers_cron</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabled">do_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointName">model_serving_endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabled">model_serving_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabled">script_gpum_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabled">script_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabled">serverless_jobs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseId">system_tables_sql_warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabled">table_lineage_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePath">uc_volume_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrl">workspace_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfig"></a>

```python
auth_config: IntegrationDatabricksAccountAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference">IntegrationDatabricksAccountAuthConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_action_runner_configuration`<sup>Required</sup> <a name="private_action_runner_configuration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfiguration"></a>

```python
private_action_runner_configuration: IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference">IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference</a>

---

##### `auth_config_input`<sup>Optional</sup> <a name="auth_config_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfigInput"></a>

```python
auth_config_input: IResolvable | IntegrationDatabricksAccountAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---

##### `ccm_enabled_input`<sup>Optional</sup> <a name="ccm_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabledInput"></a>

```python
ccm_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dd_api_key_id_input`<sup>Optional</sup> <a name="dd_api_key_id_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyIdInput"></a>

```python
dd_api_key_id_input: str
```

- *Type:* str

---

##### `dd_api_key_secret_input`<sup>Optional</sup> <a name="dd_api_key_secret_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecretInput"></a>

```python
dd_api_key_secret_input: str
```

- *Type:* str

---

##### `djm_cluster_policy_enabled_input`<sup>Optional</sup> <a name="djm_cluster_policy_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabledInput"></a>

```python
djm_cluster_policy_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `djm_enabled_input`<sup>Optional</sup> <a name="djm_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabledInput"></a>

```python
djm_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `djm_global_init_script_enabled_input`<sup>Optional</sup> <a name="djm_global_init_script_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabledInput"></a>

```python
djm_global_init_script_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `do_crawlers_cron_input`<sup>Optional</sup> <a name="do_crawlers_cron_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCronInput"></a>

```python
do_crawlers_cron_input: str
```

- *Type:* str

---

##### `do_enabled_input`<sup>Optional</sup> <a name="do_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabledInput"></a>

```python
do_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `model_serving_endpoint_name_input`<sup>Optional</sup> <a name="model_serving_endpoint_name_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointNameInput"></a>

```python
model_serving_endpoint_name_input: str
```

- *Type:* str

---

##### `model_serving_metrics_enabled_input`<sup>Optional</sup> <a name="model_serving_metrics_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabledInput"></a>

```python
model_serving_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_action_runner_configuration_input`<sup>Optional</sup> <a name="private_action_runner_configuration_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfigurationInput"></a>

```python
private_action_runner_configuration_input: IResolvable | IntegrationDatabricksAccountPrivateActionRunnerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---

##### `script_gpum_enabled_input`<sup>Optional</sup> <a name="script_gpum_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabledInput"></a>

```python
script_gpum_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `script_logs_enabled_input`<sup>Optional</sup> <a name="script_logs_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabledInput"></a>

```python
script_logs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `serverless_jobs_enabled_input`<sup>Optional</sup> <a name="serverless_jobs_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabledInput"></a>

```python
serverless_jobs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `system_tables_sql_warehouse_id_input`<sup>Optional</sup> <a name="system_tables_sql_warehouse_id_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseIdInput"></a>

```python
system_tables_sql_warehouse_id_input: str
```

- *Type:* str

---

##### `table_lineage_enabled_input`<sup>Optional</sup> <a name="table_lineage_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabledInput"></a>

```python
table_lineage_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `uc_volume_path_input`<sup>Optional</sup> <a name="uc_volume_path_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePathInput"></a>

```python
uc_volume_path_input: str
```

- *Type:* str

---

##### `workspace_url_input`<sup>Optional</sup> <a name="workspace_url_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrlInput"></a>

```python
workspace_url_input: str
```

- *Type:* str

---

##### `ccm_enabled`<sup>Required</sup> <a name="ccm_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabled"></a>

```python
ccm_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dd_api_key_id`<sup>Required</sup> <a name="dd_api_key_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyId"></a>

```python
dd_api_key_id: str
```

- *Type:* str

---

##### `dd_api_key_secret`<sup>Required</sup> <a name="dd_api_key_secret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecret"></a>

```python
dd_api_key_secret: str
```

- *Type:* str

---

##### `djm_cluster_policy_enabled`<sup>Required</sup> <a name="djm_cluster_policy_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabled"></a>

```python
djm_cluster_policy_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `djm_enabled`<sup>Required</sup> <a name="djm_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabled"></a>

```python
djm_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `djm_global_init_script_enabled`<sup>Required</sup> <a name="djm_global_init_script_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabled"></a>

```python
djm_global_init_script_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `do_crawlers_cron`<sup>Required</sup> <a name="do_crawlers_cron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCron"></a>

```python
do_crawlers_cron: str
```

- *Type:* str

---

##### `do_enabled`<sup>Required</sup> <a name="do_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabled"></a>

```python
do_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `model_serving_endpoint_name`<sup>Required</sup> <a name="model_serving_endpoint_name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointName"></a>

```python
model_serving_endpoint_name: str
```

- *Type:* str

---

##### `model_serving_metrics_enabled`<sup>Required</sup> <a name="model_serving_metrics_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabled"></a>

```python
model_serving_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `script_gpum_enabled`<sup>Required</sup> <a name="script_gpum_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabled"></a>

```python
script_gpum_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `script_logs_enabled`<sup>Required</sup> <a name="script_logs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabled"></a>

```python
script_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `serverless_jobs_enabled`<sup>Required</sup> <a name="serverless_jobs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabled"></a>

```python
serverless_jobs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `system_tables_sql_warehouse_id`<sup>Required</sup> <a name="system_tables_sql_warehouse_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseId"></a>

```python
system_tables_sql_warehouse_id: str
```

- *Type:* str

---

##### `table_lineage_enabled`<sup>Required</sup> <a name="table_lineage_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabled"></a>

```python
table_lineage_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `uc_volume_path`<sup>Required</sup> <a name="uc_volume_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePath"></a>

```python
uc_volume_path: str
```

- *Type:* str

---

##### `workspace_url`<sup>Required</sup> <a name="workspace_url" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrl"></a>

```python
workspace_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDatabricksAccountAuthConfig <a name="IntegrationDatabricksAccountAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig(
  oauth: IntegrationDatabricksAccountAuthConfigOauth = None,
  pat: IntegrationDatabricksAccountAuthConfigPat = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.oauth">oauth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | oauth block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.pat">pat</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | pat block. |

---

##### `oauth`<sup>Optional</sup> <a name="oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.oauth"></a>

```python
oauth: IntegrationDatabricksAccountAuthConfigOauth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#oauth IntegrationDatabricksAccount#oauth}

---

##### `pat`<sup>Optional</sup> <a name="pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.pat"></a>

```python
pat: IntegrationDatabricksAccountAuthConfigPat
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

pat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#pat IntegrationDatabricksAccount#pat}

---

### IntegrationDatabricksAccountAuthConfigOauth <a name="IntegrationDatabricksAccountAuthConfigOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth(
  azure_tenant_id: str = None,
  client_id: str = None,
  client_secret: str = None,
  databricks_account_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientId">client_id</a></code> | <code>str</code> | OAuth Client ID for the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientSecret">client_secret</a></code> | <code>str</code> | OAuth Client Secret for the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.databricksAccountId">databricks_account_id</a></code> | <code>str</code> | Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner. |

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

OAuth Client ID for the Databricks service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

OAuth Client Secret for the Databricks service principal.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_secret IntegrationDatabricksAccount#client_secret}

---

##### `databricks_account_id`<sup>Optional</sup> <a name="databricks_account_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.databricksAccountId"></a>

```python
databricks_account_id: str
```

- *Type:* str

Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#databricks_account_id IntegrationDatabricksAccount#databricks_account_id}

---

### IntegrationDatabricksAccountAuthConfigPat <a name="IntegrationDatabricksAccountAuthConfigPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat(
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.property.token">token</a></code> | <code>str</code> | Databricks Personal Access Token (PAT). |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.property.token"></a>

```python
token: str
```

- *Type:* str

Databricks Personal Access Token (PAT).

Generate from Settings > Developer > Access tokens. This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#token IntegrationDatabricksAccount#token}

---

### IntegrationDatabricksAccountConfig <a name="IntegrationDatabricksAccountConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  workspace_url: str,
  auth_config: IntegrationDatabricksAccountAuthConfig = None,
  ccm_enabled: bool | IResolvable = None,
  dd_api_key_id: str = None,
  dd_api_key_secret: str = None,
  djm_cluster_policy_enabled: bool | IResolvable = None,
  djm_enabled: bool | IResolvable = None,
  djm_global_init_script_enabled: bool | IResolvable = None,
  do_crawlers_cron: str = None,
  do_enabled: bool | IResolvable = None,
  model_serving_endpoint_name: str = None,
  model_serving_metrics_enabled: bool | IResolvable = None,
  private_action_runner_configuration: IntegrationDatabricksAccountPrivateActionRunnerConfiguration = None,
  script_gpum_enabled: bool | IResolvable = None,
  script_logs_enabled: bool | IResolvable = None,
  serverless_jobs_enabled: bool | IResolvable = None,
  system_tables_sql_warehouse_id: str = None,
  table_lineage_enabled: bool | IResolvable = None,
  uc_volume_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name">name</a></code> | <code>str</code> | A human-readable name for the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.workspaceUrl">workspace_url</a></code> | <code>str</code> | The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com). |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authConfig">auth_config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ccmEnabled">ccm_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeyId">dd_api_key_id</a></code> | <code>str</code> | Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeySecret">dd_api_key_secret</a></code> | <code>str</code> | Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmClusterPolicyEnabled">djm_cluster_policy_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmEnabled">djm_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmGlobalInitScriptEnabled">djm_global_init_script_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent with a global init script in the workspace. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doCrawlersCron">do_crawlers_cron</a></code> | <code>str</code> | Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doEnabled">do_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingEndpointName">model_serving_endpoint_name</a></code> | <code>str</code> | Name of the Databricks model serving endpoint to monitor. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingMetricsEnabled">model_serving_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.privateActionRunnerConfiguration">private_action_runner_configuration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | private_action_runner_configuration block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptGpumEnabled">script_gpum_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptLogsEnabled">script_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.serverlessJobsEnabled">serverless_jobs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.systemTablesSqlWarehouseId">system_tables_sql_warehouse_id</a></code> | <code>str</code> | SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.tableLineageEnabled">table_lineage_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable table lineage tracking for Databricks tables. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ucVolumePath">uc_volume_path</a></code> | <code>str</code> | Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A human-readable name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `workspace_url`<sup>Required</sup> <a name="workspace_url" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.workspaceUrl"></a>

```python
workspace_url: str
```

- *Type:* str

The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authConfig"></a>

```python
auth_config: IntegrationDatabricksAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#auth_config IntegrationDatabricksAccount#auth_config}

---

##### `ccm_enabled`<sup>Optional</sup> <a name="ccm_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ccmEnabled"></a>

```python
ccm_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#ccm_enabled IntegrationDatabricksAccount#ccm_enabled}

---

##### `dd_api_key_id`<sup>Optional</sup> <a name="dd_api_key_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeyId"></a>

```python
dd_api_key_id: str
```

- *Type:* str

Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

##### `dd_api_key_secret`<sup>Optional</sup> <a name="dd_api_key_secret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeySecret"></a>

```python
dd_api_key_secret: str
```

- *Type:* str

Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_secret IntegrationDatabricksAccount#dd_api_key_secret}

---

##### `djm_cluster_policy_enabled`<sup>Optional</sup> <a name="djm_cluster_policy_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmClusterPolicyEnabled"></a>

```python
djm_cluster_policy_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume.

Requires a Unity Catalog-enabled workspace with DBR 13.3 LTS+ and `uc_volume_path`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_cluster_policy_enabled IntegrationDatabricksAccount#djm_cluster_policy_enabled}

---

##### `djm_enabled`<sup>Optional</sup> <a name="djm_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmEnabled"></a>

```python
djm_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_enabled IntegrationDatabricksAccount#djm_enabled}

---

##### `djm_global_init_script_enabled`<sup>Optional</sup> <a name="djm_global_init_script_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmGlobalInitScriptEnabled"></a>

```python
djm_global_init_script_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When enabled, Datadog installs and manages the Agent with a global init script in the workspace.

Installation can take up to 15 minutes. Requires Workspace Admin permissions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

##### `do_crawlers_cron`<sup>Optional</sup> <a name="do_crawlers_cron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doCrawlersCron"></a>

```python
do_crawlers_cron: str
```

- *Type:* str

Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata.

Defaults to hourly. Defaults to `"0 * * * *"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

##### `do_enabled`<sup>Optional</sup> <a name="do_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doEnabled"></a>

```python
do_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_enabled IntegrationDatabricksAccount#do_enabled}

---

##### `model_serving_endpoint_name`<sup>Optional</sup> <a name="model_serving_endpoint_name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingEndpointName"></a>

```python
model_serving_endpoint_name: str
```

- *Type:* str

Name of the Databricks model serving endpoint to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_endpoint_name IntegrationDatabricksAccount#model_serving_endpoint_name}

---

##### `model_serving_metrics_enabled`<sup>Optional</sup> <a name="model_serving_metrics_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingMetricsEnabled"></a>

```python
model_serving_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_metrics_enabled IntegrationDatabricksAccount#model_serving_metrics_enabled}

---

##### `private_action_runner_configuration`<sup>Optional</sup> <a name="private_action_runner_configuration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.privateActionRunnerConfiguration"></a>

```python
private_action_runner_configuration: IntegrationDatabricksAccountPrivateActionRunnerConfiguration
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

private_action_runner_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#private_action_runner_configuration IntegrationDatabricksAccount#private_action_runner_configuration}

---

##### `script_gpum_enabled`<sup>Optional</sup> <a name="script_gpum_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptGpumEnabled"></a>

```python
script_gpum_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

##### `script_logs_enabled`<sup>Optional</sup> <a name="script_logs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptLogsEnabled"></a>

```python
script_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

##### `serverless_jobs_enabled`<sup>Optional</sup> <a name="serverless_jobs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.serverlessJobsEnabled"></a>

```python
serverless_jobs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

##### `system_tables_sql_warehouse_id`<sup>Optional</sup> <a name="system_tables_sql_warehouse_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.systemTablesSqlWarehouseId"></a>

```python
system_tables_sql_warehouse_id: str
```

- *Type:* str

SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

##### `table_lineage_enabled`<sup>Optional</sup> <a name="table_lineage_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.tableLineageEnabled"></a>

```python
table_lineage_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable table lineage tracking for Databricks tables. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#table_lineage_enabled IntegrationDatabricksAccount#table_lineage_enabled}

---

##### `uc_volume_path`<sup>Optional</sup> <a name="uc_volume_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ucVolumePath"></a>

```python
uc_volume_path: str
```

- *Type:* str

Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#uc_volume_path IntegrationDatabricksAccount#uc_volume_path}

---

### IntegrationDatabricksAccountPrivateActionRunnerConfiguration <a name="IntegrationDatabricksAccountPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration(
  connection_id: str = None,
  secret_path: str = None,
  user_uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.connectionId">connection_id</a></code> | <code>str</code> | Private Action Runner connection ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.secretPath">secret_path</a></code> | <code>str</code> | Path to the stored secret holding Databricks credentials inside the Private Action Runner. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.userUuid">user_uuid</a></code> | <code>str</code> | Service Account UUID used to execute Private Action Runner actions. |

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Private Action Runner connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}

---

##### `secret_path`<sup>Optional</sup> <a name="secret_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.secretPath"></a>

```python
secret_path: str
```

- *Type:* str

Path to the stored secret holding Databricks credentials inside the Private Action Runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}

---

##### `user_uuid`<sup>Optional</sup> <a name="user_uuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.userUuid"></a>

```python
user_uuid: str
```

- *Type:* str

Service Account UUID used to execute Private Action Runner actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDatabricksAccountAuthConfigOauthOutputReference <a name="IntegrationDatabricksAccountAuthConfigOauthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetAzureTenantId">reset_azure_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetDatabricksAccountId">reset_databricks_account_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_azure_tenant_id` <a name="reset_azure_tenant_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetAzureTenantId"></a>

```python
def reset_azure_tenant_id() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_databricks_account_id` <a name="reset_databricks_account_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetDatabricksAccountId"></a>

```python
def reset_databricks_account_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantIdInput">azure_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountIdInput">databricks_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountId">databricks_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_tenant_id_input`<sup>Optional</sup> <a name="azure_tenant_id_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantIdInput"></a>

```python
azure_tenant_id_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `databricks_account_id_input`<sup>Optional</sup> <a name="databricks_account_id_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountIdInput"></a>

```python
databricks_account_id_input: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `databricks_account_id`<sup>Required</sup> <a name="databricks_account_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountId"></a>

```python
databricks_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountAuthConfigOauth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---


### IntegrationDatabricksAccountAuthConfigOutputReference <a name="IntegrationDatabricksAccountAuthConfigOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth">put_oauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat">put_pat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetOauth">reset_oauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetPat">reset_pat</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oauth` <a name="put_oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth"></a>

```python
def put_oauth(
  azure_tenant_id: str = None,
  client_id: str = None,
  client_secret: str = None,
  databricks_account_id: str = None
) -> None
```

###### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth.parameter.azureTenantId"></a>

- *Type:* str

Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth.parameter.clientId"></a>

- *Type:* str

OAuth Client ID for the Databricks service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth.parameter.clientSecret"></a>

- *Type:* str

OAuth Client Secret for the Databricks service principal.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_secret IntegrationDatabricksAccount#client_secret}

---

###### `databricks_account_id`<sup>Optional</sup> <a name="databricks_account_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth.parameter.databricksAccountId"></a>

- *Type:* str

Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#databricks_account_id IntegrationDatabricksAccount#databricks_account_id}

---

##### `put_pat` <a name="put_pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat"></a>

```python
def put_pat(
  token: str = None
) -> None
```

###### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat.parameter.token"></a>

- *Type:* str

Databricks Personal Access Token (PAT).

Generate from Settings > Developer > Access tokens. This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#token IntegrationDatabricksAccount#token}

---

##### `reset_oauth` <a name="reset_oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetOauth"></a>

```python
def reset_oauth() -> None
```

##### `reset_pat` <a name="reset_pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetPat"></a>

```python
def reset_pat() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauth">oauth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference">IntegrationDatabricksAccountAuthConfigOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.pat">pat</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference">IntegrationDatabricksAccountAuthConfigPatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauthInput">oauth_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.patInput">pat_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth`<sup>Required</sup> <a name="oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauth"></a>

```python
oauth: IntegrationDatabricksAccountAuthConfigOauthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference">IntegrationDatabricksAccountAuthConfigOauthOutputReference</a>

---

##### `pat`<sup>Required</sup> <a name="pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.pat"></a>

```python
pat: IntegrationDatabricksAccountAuthConfigPatOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference">IntegrationDatabricksAccountAuthConfigPatOutputReference</a>

---

##### `oauth_input`<sup>Optional</sup> <a name="oauth_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauthInput"></a>

```python
oauth_input: IResolvable | IntegrationDatabricksAccountAuthConfigOauth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---

##### `pat_input`<sup>Optional</sup> <a name="pat_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.patInput"></a>

```python
pat_input: IResolvable | IntegrationDatabricksAccountAuthConfigPat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---


### IntegrationDatabricksAccountAuthConfigPatOutputReference <a name="IntegrationDatabricksAccountAuthConfigPatOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resetToken">reset_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_token` <a name="reset_token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resetToken"></a>

```python
def reset_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountAuthConfigPat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---


### IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference <a name="IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetSecretPath">reset_secret_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetUserUuid">reset_user_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_id` <a name="reset_connection_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_secret_path` <a name="reset_secret_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetSecretPath"></a>

```python
def reset_secret_path() -> None
```

##### `reset_user_uuid` <a name="reset_user_uuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetUserUuid"></a>

```python
def reset_user_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPathInput">secret_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuidInput">user_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPath">secret_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuid">user_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `secret_path_input`<sup>Optional</sup> <a name="secret_path_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPathInput"></a>

```python
secret_path_input: str
```

- *Type:* str

---

##### `user_uuid_input`<sup>Optional</sup> <a name="user_uuid_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuidInput"></a>

```python
user_uuid_input: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `secret_path`<sup>Required</sup> <a name="secret_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPath"></a>

```python
secret_path: str
```

- *Type:* str

---

##### `user_uuid`<sup>Required</sup> <a name="user_uuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuid"></a>

```python
user_uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountPrivateActionRunnerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---



