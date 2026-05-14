# `monitor` Submodule <a name="`monitor` Submodule" id="@cdktn/provider-datadog.monitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Monitor <a name="Monitor" id="@cdktn/provider-datadog.monitor.Monitor"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor datadog_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.Monitor.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.Monitor;

Monitor.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .message(java.lang.String)
    .name(java.lang.String)
    .query(java.lang.String)
    .type(java.lang.String)
//  .assets(IResolvable|java.util.List<MonitorAssets>)
//  .draftStatus(java.lang.String)
//  .enableLogsSample(java.lang.Boolean|IResolvable)
//  .enableSamples(java.lang.Boolean|IResolvable)
//  .escalationMessage(java.lang.String)
//  .evaluationDelay(java.lang.Number)
//  .forceDelete(java.lang.Boolean|IResolvable)
//  .groupbySimpleMonitor(java.lang.Boolean|IResolvable)
//  .groupRetentionDuration(java.lang.String)
//  .id(java.lang.String)
//  .includeTags(java.lang.Boolean|IResolvable)
//  .monitorThresholds(MonitorMonitorThresholds)
//  .monitorThresholdWindows(MonitorMonitorThresholdWindows)
//  .newGroupDelay(java.lang.Number)
//  .newHostDelay(java.lang.Number)
//  .noDataTimeframe(java.lang.Number)
//  .notificationPresetName(java.lang.String)
//  .notifyAudit(java.lang.Boolean|IResolvable)
//  .notifyBy(java.util.List<java.lang.String>)
//  .notifyNoData(java.lang.Boolean|IResolvable)
//  .onMissingData(java.lang.String)
//  .priority(java.lang.String)
//  .renotifyInterval(java.lang.Number)
//  .renotifyOccurrences(java.lang.Number)
//  .renotifyStatuses(java.util.List<java.lang.String>)
//  .requireFullWindow(java.lang.Boolean|IResolvable)
//  .restrictedRoles(java.util.List<java.lang.String>)
//  .schedulingOptions(MonitorSchedulingOptions)
//  .tags(java.util.List<java.lang.String>)
//  .timeoutH(java.lang.Number)
//  .validate(java.lang.Boolean|IResolvable)
//  .variables(MonitorVariables)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.message">message</a></code> | <code>java.lang.String</code> | A message to include with notifications for this monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of Datadog monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | The monitor query to notify on. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.assets">assets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorAssets">MonitorAssets</a>></code> | assets block. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.draftStatus">draftStatus</a></code> | <code>java.lang.String</code> | Indicates whether the monitor is in a draft or published state. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.enableLogsSample">enableLogsSample</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether or not to include a list of log values which triggered the alert. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.enableSamples">enableSamples</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not a list of samples which triggered the alert is included. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.escalationMessage">escalationMessage</a></code> | <code>java.lang.String</code> | A message to include with a re-notification. Supports the `@username` notification allowed elsewhere. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.evaluationDelay">evaluationDelay</a></code> | <code>java.lang.Number</code> | (Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor). |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.groupbySimpleMonitor">groupbySimpleMonitor</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to trigger one alert if any source breaches a threshold. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.groupRetentionDuration">groupRetentionDuration</a></code> | <code>java.lang.String</code> | The time span after which groups with missing data are dropped from the monitor state. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#id Monitor#id}. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.includeTags">includeTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.monitorThresholds">monitorThresholds</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | monitor_thresholds block. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.monitorThresholdWindows">monitorThresholdWindows</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | monitor_threshold_windows block. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.newGroupDelay">newGroupDelay</a></code> | <code>java.lang.Number</code> | The time (in seconds) to skip evaluations for new groups. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.newHostDelay">newHostDelay</a></code> | <code>java.lang.Number</code> | **Deprecated**. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.noDataTimeframe">noDataTimeframe</a></code> | <code>java.lang.Number</code> | The number of minutes before a monitor will notify when data stops reporting. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.notificationPresetName">notificationPresetName</a></code> | <code>java.lang.String</code> | Toggles the display of additional content sent in the monitor notification. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.notifyAudit">notifyAudit</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.notifyBy">notifyBy</a></code> | <code>java.util.List<java.lang.String></code> | Controls what granularity a monitor alerts on. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.notifyNoData">notifyNoData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.onMissingData">onMissingData</a></code> | <code>java.lang.String</code> | Controls how groups or monitors are treated if an evaluation does not return any data points. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.priority">priority</a></code> | <code>java.lang.String</code> | Integer from 1 (high) to 5 (low) indicating alert severity. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyInterval">renotifyInterval</a></code> | <code>java.lang.Number</code> | The number of minutes after the last notification before a monitor will re-notify on the current status. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyOccurrences">renotifyOccurrences</a></code> | <code>java.lang.Number</code> | The number of re-notification messages that should be sent on the current status. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyStatuses">renotifyStatuses</a></code> | <code>java.util.List<java.lang.String></code> | The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.requireFullWindow">requireFullWindow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether this monitor needs a full window of data before it's evaluated. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.restrictedRoles">restrictedRoles</a></code> | <code>java.util.List<java.lang.String></code> | A list of unique role identifiers to define which roles are allowed to edit the monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.schedulingOptions">schedulingOptions</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | scheduling_options block. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tags to associate with your monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.timeoutH">timeoutH</a></code> | <code>java.lang.Number</code> | The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.validate">validate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to `false`, skip the validation call done during plan. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.variables">variables</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | variables block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.message"></a>

- *Type:* java.lang.String

A message to include with notifications for this monitor.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#message Monitor#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of Datadog monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#name Monitor#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.query"></a>

- *Type:* java.lang.String

The monitor query to notify on.

Note this is not the same query you see in the UI and the syntax is different depending on the monitor type, please see the [API Reference](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor) for details. `terraform plan` will validate query contents unless `validate` is set to `false`.

**Note:** APM latency data is now available as Distribution Metrics. Existing monitors have been migrated automatically but all terraformed monitors can still use the existing metrics. We strongly recommend updating monitor definitions to query the new metrics. To learn more, or to see examples of how to update your terraform definitions to utilize the new distribution metrics, see the [detailed doc](https://docs.datadoghq.com/tracing/guide/ddsketch_trace_metrics/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#query Monitor#query}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the monitor.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor). Note: The monitor type cannot be changed after a monitor is created. Valid values are `composite`, `event alert`, `log alert`, `metric alert`, `process alert`, `query alert`, `rum alert`, `service check`, `synthetics alert`, `trace-analytics alert`, `slo alert`, `event-v2 alert`, `audit alert`, `ci-pipelines alert`, `ci-tests alert`, `error-tracking alert`, `database-monitoring alert`, `network-performance alert`, `cost alert`, `data-quality alert`, `network-path alert`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#type Monitor#type}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.assets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorAssets">MonitorAssets</a>>

assets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#assets Monitor#assets}

---

##### `draftStatus`<sup>Optional</sup> <a name="draftStatus" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.draftStatus"></a>

- *Type:* java.lang.String

Indicates whether the monitor is in a draft or published state.

When set to `draft`, the monitor appears as Draft and does not send notifications. When set to `published`, the monitor is active, and it evaluates conditions and sends notifications as configured. Valid values are `draft`, `published`. Defaults to `"published"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#draft_status Monitor#draft_status}

---

##### `enableLogsSample`<sup>Optional</sup> <a name="enableLogsSample" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.enableLogsSample"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether or not to include a list of log values which triggered the alert.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#enable_logs_sample Monitor#enable_logs_sample}

---

##### `enableSamples`<sup>Optional</sup> <a name="enableSamples" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.enableSamples"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not a list of samples which triggered the alert is included.

This is only used by CI Test and Pipeline monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#enable_samples Monitor#enable_samples}

---

##### `escalationMessage`<sup>Optional</sup> <a name="escalationMessage" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.escalationMessage"></a>

- *Type:* java.lang.String

A message to include with a re-notification. Supports the `@username` notification allowed elsewhere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#escalation_message Monitor#escalation_message}

---

##### `evaluationDelay`<sup>Optional</sup> <a name="evaluationDelay" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.evaluationDelay"></a>

- *Type:* java.lang.Number

(Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer.

For example, if the value is set to `300` (5min), the `timeframe` is set to `last_5m` and the time is 7:00, the monitor will evaluate data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor will always have data during evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#evaluation_delay Monitor#evaluation_delay}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#force_delete Monitor#force_delete}

---

##### `groupbySimpleMonitor`<sup>Optional</sup> <a name="groupbySimpleMonitor" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.groupbySimpleMonitor"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to trigger one alert if any source breaches a threshold.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#groupby_simple_monitor Monitor#groupby_simple_monitor}

---

##### `groupRetentionDuration`<sup>Optional</sup> <a name="groupRetentionDuration" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.groupRetentionDuration"></a>

- *Type:* java.lang.String

The time span after which groups with missing data are dropped from the monitor state.

The minimum value is one hour, and the maximum value is 72 hours. Example values are: 60m, 1h, and 2d. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#group_retention_duration Monitor#group_retention_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#id Monitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeTags`<sup>Optional</sup> <a name="includeTags" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.includeTags"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#include_tags Monitor#include_tags}

---

##### `monitorThresholds`<sup>Optional</sup> <a name="monitorThresholds" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.monitorThresholds"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

monitor_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#monitor_thresholds Monitor#monitor_thresholds}

---

##### `monitorThresholdWindows`<sup>Optional</sup> <a name="monitorThresholdWindows" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.monitorThresholdWindows"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

monitor_threshold_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#monitor_threshold_windows Monitor#monitor_threshold_windows}

---

##### `newGroupDelay`<sup>Optional</sup> <a name="newGroupDelay" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.newGroupDelay"></a>

- *Type:* java.lang.Number

The time (in seconds) to skip evaluations for new groups.

`new_group_delay` overrides `new_host_delay` if it is set to a nonzero value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#new_group_delay Monitor#new_group_delay}

---

##### `newHostDelay`<sup>Optional</sup> <a name="newHostDelay" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.newHostDelay"></a>

- *Type:* java.lang.Number

**Deprecated**.

See `new_group_delay`. Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non-negative integer. This value is ignored for simple monitors and monitors not grouped by host. The only case when this should be used is to override the default and set `new_host_delay` to zero for monitors grouped by host. **Deprecated.** Use `new_group_delay` except when setting `new_host_delay` to zero. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#new_host_delay Monitor#new_host_delay}

---

##### `noDataTimeframe`<sup>Optional</sup> <a name="noDataTimeframe" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.noDataTimeframe"></a>

- *Type:* java.lang.Number

The number of minutes before a monitor will notify when data stops reporting.

We recommend at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#no_data_timeframe Monitor#no_data_timeframe}

---

##### `notificationPresetName`<sup>Optional</sup> <a name="notificationPresetName" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.notificationPresetName"></a>

- *Type:* java.lang.String

Toggles the display of additional content sent in the monitor notification.

Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`, `hide_query_and_handles`, `show_only_snapshot`, `hide_handles_and_footer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notification_preset_name Monitor#notification_preset_name}

---

##### `notifyAudit`<sup>Optional</sup> <a name="notifyAudit" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.notifyAudit"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notify_audit Monitor#notify_audit}

---

##### `notifyBy`<sup>Optional</sup> <a name="notifyBy" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.notifyBy"></a>

- *Type:* java.util.List<java.lang.String>

Controls what granularity a monitor alerts on.

Only available for monitors with groupings. For instance, a monitor grouped by `cluster`, `namespace`, and `pod` can be configured to only notify on each new `cluster` violating the alert conditions by setting `notify_by` to `['cluster']`. Tags mentioned in `notify_by` must be a subset of the grouping tags in the query. For example, a query grouped by `cluster` and `namespace` cannot notify on `region`. Setting `notify_by` to `[*]` configures the monitor to notify as a simple-alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notify_by Monitor#notify_by}

---

##### `notifyNoData`<sup>Optional</sup> <a name="notifyNoData" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.notifyNoData"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notify_no_data Monitor#notify_no_data}

---

##### `onMissingData`<sup>Optional</sup> <a name="onMissingData" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.onMissingData"></a>

- *Type:* java.lang.String

Controls how groups or monitors are treated if an evaluation does not return any data points.

The default option results in different behavior depending on the monitor query type. For monitors using `Count` queries, an empty monitor evaluation is treated as 0 and is compared to the threshold conditions. For monitors using any query type other than `Count`, for example `Gauge`, `Measure`, or `Rate`, the monitor shows the last known status. This option is not available for Service Check, Composite, or SLO monitors. Valid values are: `show_no_data`, `show_and_notify_no_data`, `resolve`, and `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#on_missing_data Monitor#on_missing_data}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.priority"></a>

- *Type:* java.lang.String

Integer from 1 (high) to 5 (low) indicating alert severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#priority Monitor#priority}

---

##### `renotifyInterval`<sup>Optional</sup> <a name="renotifyInterval" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyInterval"></a>

- *Type:* java.lang.Number

The number of minutes after the last notification before a monitor will re-notify on the current status.

It will only re-notify if it's not resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#renotify_interval Monitor#renotify_interval}

---

##### `renotifyOccurrences`<sup>Optional</sup> <a name="renotifyOccurrences" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyOccurrences"></a>

- *Type:* java.lang.Number

The number of re-notification messages that should be sent on the current status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#renotify_occurrences Monitor#renotify_occurrences}

---

##### `renotifyStatuses`<sup>Optional</sup> <a name="renotifyStatuses" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyStatuses"></a>

- *Type:* java.util.List<java.lang.String>

The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#renotify_statuses Monitor#renotify_statuses}

---

##### `requireFullWindow`<sup>Optional</sup> <a name="requireFullWindow" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.requireFullWindow"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether this monitor needs a full window of data before it's evaluated.

Datadog strongly recommends you set this to `false` for sparse metrics, otherwise some evaluations may be skipped. If there's a custom_schedule set, `require_full_window` must be false and will be ignored. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#require_full_window Monitor#require_full_window}

---

##### `restrictedRoles`<sup>Optional</sup> <a name="restrictedRoles" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.restrictedRoles"></a>

- *Type:* java.util.List<java.lang.String>

A list of unique role identifiers to define which roles are allowed to edit the monitor.

Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. Roles unique identifiers can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) in the `data.id` field. **Deprecated.** Use `datadog_restriction_policy` resource to manage permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#restricted_roles Monitor#restricted_roles}

---

##### `schedulingOptions`<sup>Optional</sup> <a name="schedulingOptions" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.schedulingOptions"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#scheduling_options Monitor#scheduling_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tags to associate with your monitor.

This can help you categorize and filter monitors in the manage monitors page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#tags Monitor#tags}

---

##### `timeoutH`<sup>Optional</sup> <a name="timeoutH" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.timeoutH"></a>

- *Type:* java.lang.Number

The number of hours of the monitor not reporting data before it automatically resolves from a triggered state.

The minimum allowed value is 0 hours. The maximum allowed value is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#timeout_h Monitor#timeout_h}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.validate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to `false`, skip the validation call done during plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#validate Monitor#validate}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.variables"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#variables Monitor#variables}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.putAssets">putAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholds">putMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholdWindows">putMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.putSchedulingOptions">putSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.putVariables">putVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetAssets">resetAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetDraftStatus">resetDraftStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetEnableLogsSample">resetEnableLogsSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetEnableSamples">resetEnableSamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetEscalationMessage">resetEscalationMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetEvaluationDelay">resetEvaluationDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetGroupbySimpleMonitor">resetGroupbySimpleMonitor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetGroupRetentionDuration">resetGroupRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetIncludeTags">resetIncludeTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetMonitorThresholds">resetMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetMonitorThresholdWindows">resetMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNewGroupDelay">resetNewGroupDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNewHostDelay">resetNewHostDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNoDataTimeframe">resetNoDataTimeframe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNotificationPresetName">resetNotificationPresetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNotifyAudit">resetNotifyAudit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNotifyBy">resetNotifyBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNotifyNoData">resetNotifyNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetOnMissingData">resetOnMissingData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetRenotifyInterval">resetRenotifyInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetRenotifyOccurrences">resetRenotifyOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetRenotifyStatuses">resetRenotifyStatuses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetRequireFullWindow">resetRequireFullWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetRestrictedRoles">resetRestrictedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetSchedulingOptions">resetSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetTimeoutH">resetTimeoutH</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetValidate">resetValidate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.Monitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.monitor.Monitor.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.monitor.Monitor.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.monitor.Monitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.monitor.Monitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.monitor.Monitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.monitor.Monitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.monitor.Monitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.monitor.Monitor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.monitor.Monitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.monitor.Monitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.monitor.Monitor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.monitor.Monitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.monitor.Monitor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.monitor.Monitor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitor.Monitor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitor.Monitor.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.Monitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.monitor.Monitor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitor.Monitor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.monitor.Monitor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.monitor.Monitor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.monitor.Monitor.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.monitor.Monitor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitor.Monitor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssets` <a name="putAssets" id="@cdktn/provider-datadog.monitor.Monitor.putAssets"></a>

```java
public void putAssets(IResolvable|java.util.List<MonitorAssets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.putAssets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorAssets">MonitorAssets</a>>

---

##### `putMonitorThresholds` <a name="putMonitorThresholds" id="@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholds"></a>

```java
public void putMonitorThresholds(MonitorMonitorThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---

##### `putMonitorThresholdWindows` <a name="putMonitorThresholdWindows" id="@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholdWindows"></a>

```java
public void putMonitorThresholdWindows(MonitorMonitorThresholdWindows value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholdWindows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---

##### `putSchedulingOptions` <a name="putSchedulingOptions" id="@cdktn/provider-datadog.monitor.Monitor.putSchedulingOptions"></a>

```java
public void putSchedulingOptions(MonitorSchedulingOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.putSchedulingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

---

##### `putVariables` <a name="putVariables" id="@cdktn/provider-datadog.monitor.Monitor.putVariables"></a>

```java
public void putVariables(MonitorVariables value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.putVariables.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---

##### `resetAssets` <a name="resetAssets" id="@cdktn/provider-datadog.monitor.Monitor.resetAssets"></a>

```java
public void resetAssets()
```

##### `resetDraftStatus` <a name="resetDraftStatus" id="@cdktn/provider-datadog.monitor.Monitor.resetDraftStatus"></a>

```java
public void resetDraftStatus()
```

##### `resetEnableLogsSample` <a name="resetEnableLogsSample" id="@cdktn/provider-datadog.monitor.Monitor.resetEnableLogsSample"></a>

```java
public void resetEnableLogsSample()
```

##### `resetEnableSamples` <a name="resetEnableSamples" id="@cdktn/provider-datadog.monitor.Monitor.resetEnableSamples"></a>

```java
public void resetEnableSamples()
```

##### `resetEscalationMessage` <a name="resetEscalationMessage" id="@cdktn/provider-datadog.monitor.Monitor.resetEscalationMessage"></a>

```java
public void resetEscalationMessage()
```

##### `resetEvaluationDelay` <a name="resetEvaluationDelay" id="@cdktn/provider-datadog.monitor.Monitor.resetEvaluationDelay"></a>

```java
public void resetEvaluationDelay()
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktn/provider-datadog.monitor.Monitor.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetGroupbySimpleMonitor` <a name="resetGroupbySimpleMonitor" id="@cdktn/provider-datadog.monitor.Monitor.resetGroupbySimpleMonitor"></a>

```java
public void resetGroupbySimpleMonitor()
```

##### `resetGroupRetentionDuration` <a name="resetGroupRetentionDuration" id="@cdktn/provider-datadog.monitor.Monitor.resetGroupRetentionDuration"></a>

```java
public void resetGroupRetentionDuration()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.monitor.Monitor.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeTags` <a name="resetIncludeTags" id="@cdktn/provider-datadog.monitor.Monitor.resetIncludeTags"></a>

```java
public void resetIncludeTags()
```

##### `resetMonitorThresholds` <a name="resetMonitorThresholds" id="@cdktn/provider-datadog.monitor.Monitor.resetMonitorThresholds"></a>

```java
public void resetMonitorThresholds()
```

##### `resetMonitorThresholdWindows` <a name="resetMonitorThresholdWindows" id="@cdktn/provider-datadog.monitor.Monitor.resetMonitorThresholdWindows"></a>

```java
public void resetMonitorThresholdWindows()
```

##### `resetNewGroupDelay` <a name="resetNewGroupDelay" id="@cdktn/provider-datadog.monitor.Monitor.resetNewGroupDelay"></a>

```java
public void resetNewGroupDelay()
```

##### `resetNewHostDelay` <a name="resetNewHostDelay" id="@cdktn/provider-datadog.monitor.Monitor.resetNewHostDelay"></a>

```java
public void resetNewHostDelay()
```

##### `resetNoDataTimeframe` <a name="resetNoDataTimeframe" id="@cdktn/provider-datadog.monitor.Monitor.resetNoDataTimeframe"></a>

```java
public void resetNoDataTimeframe()
```

##### `resetNotificationPresetName` <a name="resetNotificationPresetName" id="@cdktn/provider-datadog.monitor.Monitor.resetNotificationPresetName"></a>

```java
public void resetNotificationPresetName()
```

##### `resetNotifyAudit` <a name="resetNotifyAudit" id="@cdktn/provider-datadog.monitor.Monitor.resetNotifyAudit"></a>

```java
public void resetNotifyAudit()
```

##### `resetNotifyBy` <a name="resetNotifyBy" id="@cdktn/provider-datadog.monitor.Monitor.resetNotifyBy"></a>

```java
public void resetNotifyBy()
```

##### `resetNotifyNoData` <a name="resetNotifyNoData" id="@cdktn/provider-datadog.monitor.Monitor.resetNotifyNoData"></a>

```java
public void resetNotifyNoData()
```

##### `resetOnMissingData` <a name="resetOnMissingData" id="@cdktn/provider-datadog.monitor.Monitor.resetOnMissingData"></a>

```java
public void resetOnMissingData()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-datadog.monitor.Monitor.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRenotifyInterval` <a name="resetRenotifyInterval" id="@cdktn/provider-datadog.monitor.Monitor.resetRenotifyInterval"></a>

```java
public void resetRenotifyInterval()
```

##### `resetRenotifyOccurrences` <a name="resetRenotifyOccurrences" id="@cdktn/provider-datadog.monitor.Monitor.resetRenotifyOccurrences"></a>

```java
public void resetRenotifyOccurrences()
```

##### `resetRenotifyStatuses` <a name="resetRenotifyStatuses" id="@cdktn/provider-datadog.monitor.Monitor.resetRenotifyStatuses"></a>

```java
public void resetRenotifyStatuses()
```

##### `resetRequireFullWindow` <a name="resetRequireFullWindow" id="@cdktn/provider-datadog.monitor.Monitor.resetRequireFullWindow"></a>

```java
public void resetRequireFullWindow()
```

##### `resetRestrictedRoles` <a name="resetRestrictedRoles" id="@cdktn/provider-datadog.monitor.Monitor.resetRestrictedRoles"></a>

```java
public void resetRestrictedRoles()
```

##### `resetSchedulingOptions` <a name="resetSchedulingOptions" id="@cdktn/provider-datadog.monitor.Monitor.resetSchedulingOptions"></a>

```java
public void resetSchedulingOptions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.monitor.Monitor.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeoutH` <a name="resetTimeoutH" id="@cdktn/provider-datadog.monitor.Monitor.resetTimeoutH"></a>

```java
public void resetTimeoutH()
```

##### `resetValidate` <a name="resetValidate" id="@cdktn/provider-datadog.monitor.Monitor.resetValidate"></a>

```java
public void resetValidate()
```

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-datadog.monitor.Monitor.resetVariables"></a>

```java
public void resetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Monitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.monitor.Monitor.isConstruct"></a>

```java
import io.cdktn.providers.datadog.monitor.Monitor;

Monitor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitor.Monitor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.monitor.Monitor.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.monitor.Monitor;

Monitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitor.Monitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.monitor.Monitor.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.monitor.Monitor;

Monitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitor.Monitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.monitor.Monitor;

Monitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Monitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Monitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Monitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Monitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Monitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.assets">assets</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList">MonitorAssetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholds">monitorThresholds</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference">MonitorMonitorThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdWindows">monitorThresholdWindows</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference">MonitorMonitorThresholdWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.schedulingOptions">schedulingOptions</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference">MonitorSchedulingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference">MonitorVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.assetsInput">assetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorAssets">MonitorAssets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.draftStatusInput">draftStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.enableLogsSampleInput">enableLogsSampleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.enableSamplesInput">enableSamplesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.escalationMessageInput">escalationMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.evaluationDelayInput">evaluationDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.groupbySimpleMonitorInput">groupbySimpleMonitorInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.groupRetentionDurationInput">groupRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.includeTagsInput">includeTagsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdsInput">monitorThresholdsInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdWindowsInput">monitorThresholdWindowsInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.newGroupDelayInput">newGroupDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.newHostDelayInput">newHostDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.noDataTimeframeInput">noDataTimeframeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notificationPresetNameInput">notificationPresetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyAuditInput">notifyAuditInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyByInput">notifyByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyNoDataInput">notifyNoDataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.onMissingDataInput">onMissingDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyIntervalInput">renotifyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyOccurrencesInput">renotifyOccurrencesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyStatusesInput">renotifyStatusesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.requireFullWindowInput">requireFullWindowInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.restrictedRolesInput">restrictedRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.schedulingOptionsInput">schedulingOptionsInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.timeoutHInput">timeoutHInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.validateInput">validateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.variablesInput">variablesInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.draftStatus">draftStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.enableLogsSample">enableLogsSample</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.enableSamples">enableSamples</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.escalationMessage">escalationMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.evaluationDelay">evaluationDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.groupbySimpleMonitor">groupbySimpleMonitor</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.groupRetentionDuration">groupRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.includeTags">includeTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.newGroupDelay">newGroupDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.newHostDelay">newHostDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.noDataTimeframe">noDataTimeframe</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notificationPresetName">notificationPresetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyAudit">notifyAudit</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyBy">notifyBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyNoData">notifyNoData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.onMissingData">onMissingData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyInterval">renotifyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyOccurrences">renotifyOccurrences</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyStatuses">renotifyStatuses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.requireFullWindow">requireFullWindow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.restrictedRoles">restrictedRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.timeoutH">timeoutH</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.validate">validate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.monitor.Monitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.monitor.Monitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.Monitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.monitor.Monitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.monitor.Monitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.monitor.Monitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.monitor.Monitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.monitor.Monitor.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.monitor.Monitor.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.monitor.Monitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.monitor.Monitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.monitor.Monitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitor.Monitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.monitor.Monitor.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktn/provider-datadog.monitor.Monitor.property.assets"></a>

```java
public MonitorAssetsList getAssets();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList">MonitorAssetsList</a>

---

##### `monitorThresholds`<sup>Required</sup> <a name="monitorThresholds" id="@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholds"></a>

```java
public MonitorMonitorThresholdsOutputReference getMonitorThresholds();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference">MonitorMonitorThresholdsOutputReference</a>

---

##### `monitorThresholdWindows`<sup>Required</sup> <a name="monitorThresholdWindows" id="@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdWindows"></a>

```java
public MonitorMonitorThresholdWindowsOutputReference getMonitorThresholdWindows();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference">MonitorMonitorThresholdWindowsOutputReference</a>

---

##### `schedulingOptions`<sup>Required</sup> <a name="schedulingOptions" id="@cdktn/provider-datadog.monitor.Monitor.property.schedulingOptions"></a>

```java
public MonitorSchedulingOptionsOutputReference getSchedulingOptions();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference">MonitorSchedulingOptionsOutputReference</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-datadog.monitor.Monitor.property.variables"></a>

```java
public MonitorVariablesOutputReference getVariables();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference">MonitorVariablesOutputReference</a>

---

##### `assetsInput`<sup>Optional</sup> <a name="assetsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.assetsInput"></a>

```java
public IResolvable|java.util.List<MonitorAssets> getAssetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorAssets">MonitorAssets</a>>

---

##### `draftStatusInput`<sup>Optional</sup> <a name="draftStatusInput" id="@cdktn/provider-datadog.monitor.Monitor.property.draftStatusInput"></a>

```java
public java.lang.String getDraftStatusInput();
```

- *Type:* java.lang.String

---

##### `enableLogsSampleInput`<sup>Optional</sup> <a name="enableLogsSampleInput" id="@cdktn/provider-datadog.monitor.Monitor.property.enableLogsSampleInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableLogsSampleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSamplesInput`<sup>Optional</sup> <a name="enableSamplesInput" id="@cdktn/provider-datadog.monitor.Monitor.property.enableSamplesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSamplesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `escalationMessageInput`<sup>Optional</sup> <a name="escalationMessageInput" id="@cdktn/provider-datadog.monitor.Monitor.property.escalationMessageInput"></a>

```java
public java.lang.String getEscalationMessageInput();
```

- *Type:* java.lang.String

---

##### `evaluationDelayInput`<sup>Optional</sup> <a name="evaluationDelayInput" id="@cdktn/provider-datadog.monitor.Monitor.property.evaluationDelayInput"></a>

```java
public java.lang.Number getEvaluationDelayInput();
```

- *Type:* java.lang.Number

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktn/provider-datadog.monitor.Monitor.property.forceDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getForceDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupbySimpleMonitorInput`<sup>Optional</sup> <a name="groupbySimpleMonitorInput" id="@cdktn/provider-datadog.monitor.Monitor.property.groupbySimpleMonitorInput"></a>

```java
public java.lang.Boolean|IResolvable getGroupbySimpleMonitorInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupRetentionDurationInput`<sup>Optional</sup> <a name="groupRetentionDurationInput" id="@cdktn/provider-datadog.monitor.Monitor.property.groupRetentionDurationInput"></a>

```java
public java.lang.String getGroupRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.monitor.Monitor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeTagsInput`<sup>Optional</sup> <a name="includeTagsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.includeTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTagsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-datadog.monitor.Monitor.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `monitorThresholdsInput`<sup>Optional</sup> <a name="monitorThresholdsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdsInput"></a>

```java
public MonitorMonitorThresholds getMonitorThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---

##### `monitorThresholdWindowsInput`<sup>Optional</sup> <a name="monitorThresholdWindowsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdWindowsInput"></a>

```java
public MonitorMonitorThresholdWindows getMonitorThresholdWindowsInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.monitor.Monitor.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `newGroupDelayInput`<sup>Optional</sup> <a name="newGroupDelayInput" id="@cdktn/provider-datadog.monitor.Monitor.property.newGroupDelayInput"></a>

```java
public java.lang.Number getNewGroupDelayInput();
```

- *Type:* java.lang.Number

---

##### `newHostDelayInput`<sup>Optional</sup> <a name="newHostDelayInput" id="@cdktn/provider-datadog.monitor.Monitor.property.newHostDelayInput"></a>

```java
public java.lang.Number getNewHostDelayInput();
```

- *Type:* java.lang.Number

---

##### `noDataTimeframeInput`<sup>Optional</sup> <a name="noDataTimeframeInput" id="@cdktn/provider-datadog.monitor.Monitor.property.noDataTimeframeInput"></a>

```java
public java.lang.Number getNoDataTimeframeInput();
```

- *Type:* java.lang.Number

---

##### `notificationPresetNameInput`<sup>Optional</sup> <a name="notificationPresetNameInput" id="@cdktn/provider-datadog.monitor.Monitor.property.notificationPresetNameInput"></a>

```java
public java.lang.String getNotificationPresetNameInput();
```

- *Type:* java.lang.String

---

##### `notifyAuditInput`<sup>Optional</sup> <a name="notifyAuditInput" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyAuditInput"></a>

```java
public java.lang.Boolean|IResolvable getNotifyAuditInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notifyByInput`<sup>Optional</sup> <a name="notifyByInput" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyByInput"></a>

```java
public java.util.List<java.lang.String> getNotifyByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notifyNoDataInput`<sup>Optional</sup> <a name="notifyNoDataInput" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyNoDataInput"></a>

```java
public java.lang.Boolean|IResolvable getNotifyNoDataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `onMissingDataInput`<sup>Optional</sup> <a name="onMissingDataInput" id="@cdktn/provider-datadog.monitor.Monitor.property.onMissingDataInput"></a>

```java
public java.lang.String getOnMissingDataInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-datadog.monitor.Monitor.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.monitor.Monitor.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `renotifyIntervalInput`<sup>Optional</sup> <a name="renotifyIntervalInput" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyIntervalInput"></a>

```java
public java.lang.Number getRenotifyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `renotifyOccurrencesInput`<sup>Optional</sup> <a name="renotifyOccurrencesInput" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyOccurrencesInput"></a>

```java
public java.lang.Number getRenotifyOccurrencesInput();
```

- *Type:* java.lang.Number

---

##### `renotifyStatusesInput`<sup>Optional</sup> <a name="renotifyStatusesInput" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyStatusesInput"></a>

```java
public java.util.List<java.lang.String> getRenotifyStatusesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireFullWindowInput`<sup>Optional</sup> <a name="requireFullWindowInput" id="@cdktn/provider-datadog.monitor.Monitor.property.requireFullWindowInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireFullWindowInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `restrictedRolesInput`<sup>Optional</sup> <a name="restrictedRolesInput" id="@cdktn/provider-datadog.monitor.Monitor.property.restrictedRolesInput"></a>

```java
public java.util.List<java.lang.String> getRestrictedRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedulingOptionsInput`<sup>Optional</sup> <a name="schedulingOptionsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.schedulingOptionsInput"></a>

```java
public MonitorSchedulingOptions getSchedulingOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutHInput`<sup>Optional</sup> <a name="timeoutHInput" id="@cdktn/provider-datadog.monitor.Monitor.property.timeoutHInput"></a>

```java
public java.lang.Number getTimeoutHInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.monitor.Monitor.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktn/provider-datadog.monitor.Monitor.property.validateInput"></a>

```java
public java.lang.Boolean|IResolvable getValidateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-datadog.monitor.Monitor.property.variablesInput"></a>

```java
public MonitorVariables getVariablesInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---

##### `draftStatus`<sup>Required</sup> <a name="draftStatus" id="@cdktn/provider-datadog.monitor.Monitor.property.draftStatus"></a>

```java
public java.lang.String getDraftStatus();
```

- *Type:* java.lang.String

---

##### `enableLogsSample`<sup>Required</sup> <a name="enableLogsSample" id="@cdktn/provider-datadog.monitor.Monitor.property.enableLogsSample"></a>

```java
public java.lang.Boolean|IResolvable getEnableLogsSample();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSamples`<sup>Required</sup> <a name="enableSamples" id="@cdktn/provider-datadog.monitor.Monitor.property.enableSamples"></a>

```java
public java.lang.Boolean|IResolvable getEnableSamples();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `escalationMessage`<sup>Required</sup> <a name="escalationMessage" id="@cdktn/provider-datadog.monitor.Monitor.property.escalationMessage"></a>

```java
public java.lang.String getEscalationMessage();
```

- *Type:* java.lang.String

---

##### `evaluationDelay`<sup>Required</sup> <a name="evaluationDelay" id="@cdktn/provider-datadog.monitor.Monitor.property.evaluationDelay"></a>

```java
public java.lang.Number getEvaluationDelay();
```

- *Type:* java.lang.Number

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktn/provider-datadog.monitor.Monitor.property.forceDelete"></a>

```java
public java.lang.Boolean|IResolvable getForceDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupbySimpleMonitor`<sup>Required</sup> <a name="groupbySimpleMonitor" id="@cdktn/provider-datadog.monitor.Monitor.property.groupbySimpleMonitor"></a>

```java
public java.lang.Boolean|IResolvable getGroupbySimpleMonitor();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupRetentionDuration`<sup>Required</sup> <a name="groupRetentionDuration" id="@cdktn/provider-datadog.monitor.Monitor.property.groupRetentionDuration"></a>

```java
public java.lang.String getGroupRetentionDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitor.Monitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeTags`<sup>Required</sup> <a name="includeTags" id="@cdktn/provider-datadog.monitor.Monitor.property.includeTags"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.monitor.Monitor.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitor.Monitor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `newGroupDelay`<sup>Required</sup> <a name="newGroupDelay" id="@cdktn/provider-datadog.monitor.Monitor.property.newGroupDelay"></a>

```java
public java.lang.Number getNewGroupDelay();
```

- *Type:* java.lang.Number

---

##### `newHostDelay`<sup>Required</sup> <a name="newHostDelay" id="@cdktn/provider-datadog.monitor.Monitor.property.newHostDelay"></a>

```java
public java.lang.Number getNewHostDelay();
```

- *Type:* java.lang.Number

---

##### `noDataTimeframe`<sup>Required</sup> <a name="noDataTimeframe" id="@cdktn/provider-datadog.monitor.Monitor.property.noDataTimeframe"></a>

```java
public java.lang.Number getNoDataTimeframe();
```

- *Type:* java.lang.Number

---

##### `notificationPresetName`<sup>Required</sup> <a name="notificationPresetName" id="@cdktn/provider-datadog.monitor.Monitor.property.notificationPresetName"></a>

```java
public java.lang.String getNotificationPresetName();
```

- *Type:* java.lang.String

---

##### `notifyAudit`<sup>Required</sup> <a name="notifyAudit" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyAudit"></a>

```java
public java.lang.Boolean|IResolvable getNotifyAudit();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notifyBy`<sup>Required</sup> <a name="notifyBy" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyBy"></a>

```java
public java.util.List<java.lang.String> getNotifyBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notifyNoData`<sup>Required</sup> <a name="notifyNoData" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyNoData"></a>

```java
public java.lang.Boolean|IResolvable getNotifyNoData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `onMissingData`<sup>Required</sup> <a name="onMissingData" id="@cdktn/provider-datadog.monitor.Monitor.property.onMissingData"></a>

```java
public java.lang.String getOnMissingData();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-datadog.monitor.Monitor.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.monitor.Monitor.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `renotifyInterval`<sup>Required</sup> <a name="renotifyInterval" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyInterval"></a>

```java
public java.lang.Number getRenotifyInterval();
```

- *Type:* java.lang.Number

---

##### `renotifyOccurrences`<sup>Required</sup> <a name="renotifyOccurrences" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyOccurrences"></a>

```java
public java.lang.Number getRenotifyOccurrences();
```

- *Type:* java.lang.Number

---

##### `renotifyStatuses`<sup>Required</sup> <a name="renotifyStatuses" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyStatuses"></a>

```java
public java.util.List<java.lang.String> getRenotifyStatuses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireFullWindow`<sup>Required</sup> <a name="requireFullWindow" id="@cdktn/provider-datadog.monitor.Monitor.property.requireFullWindow"></a>

```java
public java.lang.Boolean|IResolvable getRequireFullWindow();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `restrictedRoles`<sup>Required</sup> <a name="restrictedRoles" id="@cdktn/provider-datadog.monitor.Monitor.property.restrictedRoles"></a>

```java
public java.util.List<java.lang.String> getRestrictedRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.monitor.Monitor.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutH`<sup>Required</sup> <a name="timeoutH" id="@cdktn/provider-datadog.monitor.Monitor.property.timeoutH"></a>

```java
public java.lang.Number getTimeoutH();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.monitor.Monitor.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-datadog.monitor.Monitor.property.validate"></a>

```java
public java.lang.Boolean|IResolvable getValidate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.monitor.Monitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAssets <a name="MonitorAssets" id="@cdktn/provider-datadog.monitor.MonitorAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorAssets.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorAssets;

MonitorAssets.builder()
    .category(java.lang.String)
    .name(java.lang.String)
    .url(java.lang.String)
//  .resourceKey(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssets.property.category">category</a></code> | <code>java.lang.String</code> | Type of asset the entity represents on a monitor. Valid values are `runbook`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssets.property.name">name</a></code> | <code>java.lang.String</code> | Name for the monitor asset. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssets.property.url">url</a></code> | <code>java.lang.String</code> | URL for the asset. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssets.property.resourceKey">resourceKey</a></code> | <code>java.lang.String</code> | Identifier of the internal Datadog resource that this asset represents. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssets.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Type of internal Datadog resource associated with a monitor asset. Valid values are `notebook`. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.monitor.MonitorAssets.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Type of asset the entity represents on a monitor. Valid values are `runbook`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#category Monitor#category}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitor.MonitorAssets.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for the monitor asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#name Monitor#name}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.monitor.MonitorAssets.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

URL for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#url Monitor#url}

---

##### `resourceKey`<sup>Optional</sup> <a name="resourceKey" id="@cdktn/provider-datadog.monitor.MonitorAssets.property.resourceKey"></a>

```java
public java.lang.String getResourceKey();
```

- *Type:* java.lang.String

Identifier of the internal Datadog resource that this asset represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#resource_key Monitor#resource_key}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-datadog.monitor.MonitorAssets.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Type of internal Datadog resource associated with a monitor asset. Valid values are `notebook`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#resource_type Monitor#resource_type}

---

### MonitorConfig <a name="MonitorConfig" id="@cdktn/provider-datadog.monitor.MonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorConfig;

MonitorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .message(java.lang.String)
    .name(java.lang.String)
    .query(java.lang.String)
    .type(java.lang.String)
//  .assets(IResolvable|java.util.List<MonitorAssets>)
//  .draftStatus(java.lang.String)
//  .enableLogsSample(java.lang.Boolean|IResolvable)
//  .enableSamples(java.lang.Boolean|IResolvable)
//  .escalationMessage(java.lang.String)
//  .evaluationDelay(java.lang.Number)
//  .forceDelete(java.lang.Boolean|IResolvable)
//  .groupbySimpleMonitor(java.lang.Boolean|IResolvable)
//  .groupRetentionDuration(java.lang.String)
//  .id(java.lang.String)
//  .includeTags(java.lang.Boolean|IResolvable)
//  .monitorThresholds(MonitorMonitorThresholds)
//  .monitorThresholdWindows(MonitorMonitorThresholdWindows)
//  .newGroupDelay(java.lang.Number)
//  .newHostDelay(java.lang.Number)
//  .noDataTimeframe(java.lang.Number)
//  .notificationPresetName(java.lang.String)
//  .notifyAudit(java.lang.Boolean|IResolvable)
//  .notifyBy(java.util.List<java.lang.String>)
//  .notifyNoData(java.lang.Boolean|IResolvable)
//  .onMissingData(java.lang.String)
//  .priority(java.lang.String)
//  .renotifyInterval(java.lang.Number)
//  .renotifyOccurrences(java.lang.Number)
//  .renotifyStatuses(java.util.List<java.lang.String>)
//  .requireFullWindow(java.lang.Boolean|IResolvable)
//  .restrictedRoles(java.util.List<java.lang.String>)
//  .schedulingOptions(MonitorSchedulingOptions)
//  .tags(java.util.List<java.lang.String>)
//  .timeoutH(java.lang.Number)
//  .validate(java.lang.Boolean|IResolvable)
//  .variables(MonitorVariables)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.message">message</a></code> | <code>java.lang.String</code> | A message to include with notifications for this monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of Datadog monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.query">query</a></code> | <code>java.lang.String</code> | The monitor query to notify on. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.assets">assets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorAssets">MonitorAssets</a>></code> | assets block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.draftStatus">draftStatus</a></code> | <code>java.lang.String</code> | Indicates whether the monitor is in a draft or published state. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.enableLogsSample">enableLogsSample</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether or not to include a list of log values which triggered the alert. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.enableSamples">enableSamples</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not a list of samples which triggered the alert is included. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.escalationMessage">escalationMessage</a></code> | <code>java.lang.String</code> | A message to include with a re-notification. Supports the `@username` notification allowed elsewhere. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.evaluationDelay">evaluationDelay</a></code> | <code>java.lang.Number</code> | (Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor). |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.groupbySimpleMonitor">groupbySimpleMonitor</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to trigger one alert if any source breaches a threshold. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.groupRetentionDuration">groupRetentionDuration</a></code> | <code>java.lang.String</code> | The time span after which groups with missing data are dropped from the monitor state. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#id Monitor#id}. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.includeTags">includeTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.monitorThresholds">monitorThresholds</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | monitor_thresholds block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.monitorThresholdWindows">monitorThresholdWindows</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | monitor_threshold_windows block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.newGroupDelay">newGroupDelay</a></code> | <code>java.lang.Number</code> | The time (in seconds) to skip evaluations for new groups. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.newHostDelay">newHostDelay</a></code> | <code>java.lang.Number</code> | **Deprecated**. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.noDataTimeframe">noDataTimeframe</a></code> | <code>java.lang.Number</code> | The number of minutes before a monitor will notify when data stops reporting. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.notificationPresetName">notificationPresetName</a></code> | <code>java.lang.String</code> | Toggles the display of additional content sent in the monitor notification. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyAudit">notifyAudit</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyBy">notifyBy</a></code> | <code>java.util.List<java.lang.String></code> | Controls what granularity a monitor alerts on. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyNoData">notifyNoData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.onMissingData">onMissingData</a></code> | <code>java.lang.String</code> | Controls how groups or monitors are treated if an evaluation does not return any data points. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.priority">priority</a></code> | <code>java.lang.String</code> | Integer from 1 (high) to 5 (low) indicating alert severity. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyInterval">renotifyInterval</a></code> | <code>java.lang.Number</code> | The number of minutes after the last notification before a monitor will re-notify on the current status. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyOccurrences">renotifyOccurrences</a></code> | <code>java.lang.Number</code> | The number of re-notification messages that should be sent on the current status. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyStatuses">renotifyStatuses</a></code> | <code>java.util.List<java.lang.String></code> | The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.requireFullWindow">requireFullWindow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether this monitor needs a full window of data before it's evaluated. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.restrictedRoles">restrictedRoles</a></code> | <code>java.util.List<java.lang.String></code> | A list of unique role identifiers to define which roles are allowed to edit the monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.schedulingOptions">schedulingOptions</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | scheduling_options block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tags to associate with your monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.timeoutH">timeoutH</a></code> | <code>java.lang.Number</code> | The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.validate">validate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to `false`, skip the validation call done during plan. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | variables block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

A message to include with notifications for this monitor.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#message Monitor#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of Datadog monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#name Monitor#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The monitor query to notify on.

Note this is not the same query you see in the UI and the syntax is different depending on the monitor type, please see the [API Reference](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor) for details. `terraform plan` will validate query contents unless `validate` is set to `false`.

**Note:** APM latency data is now available as Distribution Metrics. Existing monitors have been migrated automatically but all terraformed monitors can still use the existing metrics. We strongly recommend updating monitor definitions to query the new metrics. To learn more, or to see examples of how to update your terraform definitions to utilize the new distribution metrics, see the [detailed doc](https://docs.datadoghq.com/tracing/guide/ddsketch_trace_metrics/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#query Monitor#query}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the monitor.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor). Note: The monitor type cannot be changed after a monitor is created. Valid values are `composite`, `event alert`, `log alert`, `metric alert`, `process alert`, `query alert`, `rum alert`, `service check`, `synthetics alert`, `trace-analytics alert`, `slo alert`, `event-v2 alert`, `audit alert`, `ci-pipelines alert`, `ci-tests alert`, `error-tracking alert`, `database-monitoring alert`, `network-performance alert`, `cost alert`, `data-quality alert`, `network-path alert`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#type Monitor#type}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.assets"></a>

```java
public IResolvable|java.util.List<MonitorAssets> getAssets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorAssets">MonitorAssets</a>>

assets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#assets Monitor#assets}

---

##### `draftStatus`<sup>Optional</sup> <a name="draftStatus" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.draftStatus"></a>

```java
public java.lang.String getDraftStatus();
```

- *Type:* java.lang.String

Indicates whether the monitor is in a draft or published state.

When set to `draft`, the monitor appears as Draft and does not send notifications. When set to `published`, the monitor is active, and it evaluates conditions and sends notifications as configured. Valid values are `draft`, `published`. Defaults to `"published"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#draft_status Monitor#draft_status}

---

##### `enableLogsSample`<sup>Optional</sup> <a name="enableLogsSample" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.enableLogsSample"></a>

```java
public java.lang.Boolean|IResolvable getEnableLogsSample();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether or not to include a list of log values which triggered the alert.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#enable_logs_sample Monitor#enable_logs_sample}

---

##### `enableSamples`<sup>Optional</sup> <a name="enableSamples" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.enableSamples"></a>

```java
public java.lang.Boolean|IResolvable getEnableSamples();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not a list of samples which triggered the alert is included.

This is only used by CI Test and Pipeline monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#enable_samples Monitor#enable_samples}

---

##### `escalationMessage`<sup>Optional</sup> <a name="escalationMessage" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.escalationMessage"></a>

```java
public java.lang.String getEscalationMessage();
```

- *Type:* java.lang.String

A message to include with a re-notification. Supports the `@username` notification allowed elsewhere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#escalation_message Monitor#escalation_message}

---

##### `evaluationDelay`<sup>Optional</sup> <a name="evaluationDelay" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.evaluationDelay"></a>

```java
public java.lang.Number getEvaluationDelay();
```

- *Type:* java.lang.Number

(Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer.

For example, if the value is set to `300` (5min), the `timeframe` is set to `last_5m` and the time is 7:00, the monitor will evaluate data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor will always have data during evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#evaluation_delay Monitor#evaluation_delay}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.forceDelete"></a>

```java
public java.lang.Boolean|IResolvable getForceDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#force_delete Monitor#force_delete}

---

##### `groupbySimpleMonitor`<sup>Optional</sup> <a name="groupbySimpleMonitor" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.groupbySimpleMonitor"></a>

```java
public java.lang.Boolean|IResolvable getGroupbySimpleMonitor();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to trigger one alert if any source breaches a threshold.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#groupby_simple_monitor Monitor#groupby_simple_monitor}

---

##### `groupRetentionDuration`<sup>Optional</sup> <a name="groupRetentionDuration" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.groupRetentionDuration"></a>

```java
public java.lang.String getGroupRetentionDuration();
```

- *Type:* java.lang.String

The time span after which groups with missing data are dropped from the monitor state.

The minimum value is one hour, and the maximum value is 72 hours. Example values are: 60m, 1h, and 2d. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#group_retention_duration Monitor#group_retention_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#id Monitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeTags`<sup>Optional</sup> <a name="includeTags" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.includeTags"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#include_tags Monitor#include_tags}

---

##### `monitorThresholds`<sup>Optional</sup> <a name="monitorThresholds" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.monitorThresholds"></a>

```java
public MonitorMonitorThresholds getMonitorThresholds();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

monitor_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#monitor_thresholds Monitor#monitor_thresholds}

---

##### `monitorThresholdWindows`<sup>Optional</sup> <a name="monitorThresholdWindows" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.monitorThresholdWindows"></a>

```java
public MonitorMonitorThresholdWindows getMonitorThresholdWindows();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

monitor_threshold_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#monitor_threshold_windows Monitor#monitor_threshold_windows}

---

##### `newGroupDelay`<sup>Optional</sup> <a name="newGroupDelay" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.newGroupDelay"></a>

```java
public java.lang.Number getNewGroupDelay();
```

- *Type:* java.lang.Number

The time (in seconds) to skip evaluations for new groups.

`new_group_delay` overrides `new_host_delay` if it is set to a nonzero value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#new_group_delay Monitor#new_group_delay}

---

##### `newHostDelay`<sup>Optional</sup> <a name="newHostDelay" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.newHostDelay"></a>

```java
public java.lang.Number getNewHostDelay();
```

- *Type:* java.lang.Number

**Deprecated**.

See `new_group_delay`. Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non-negative integer. This value is ignored for simple monitors and monitors not grouped by host. The only case when this should be used is to override the default and set `new_host_delay` to zero for monitors grouped by host. **Deprecated.** Use `new_group_delay` except when setting `new_host_delay` to zero. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#new_host_delay Monitor#new_host_delay}

---

##### `noDataTimeframe`<sup>Optional</sup> <a name="noDataTimeframe" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.noDataTimeframe"></a>

```java
public java.lang.Number getNoDataTimeframe();
```

- *Type:* java.lang.Number

The number of minutes before a monitor will notify when data stops reporting.

We recommend at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#no_data_timeframe Monitor#no_data_timeframe}

---

##### `notificationPresetName`<sup>Optional</sup> <a name="notificationPresetName" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.notificationPresetName"></a>

```java
public java.lang.String getNotificationPresetName();
```

- *Type:* java.lang.String

Toggles the display of additional content sent in the monitor notification.

Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`, `hide_query_and_handles`, `show_only_snapshot`, `hide_handles_and_footer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notification_preset_name Monitor#notification_preset_name}

---

##### `notifyAudit`<sup>Optional</sup> <a name="notifyAudit" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyAudit"></a>

```java
public java.lang.Boolean|IResolvable getNotifyAudit();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notify_audit Monitor#notify_audit}

---

##### `notifyBy`<sup>Optional</sup> <a name="notifyBy" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyBy"></a>

```java
public java.util.List<java.lang.String> getNotifyBy();
```

- *Type:* java.util.List<java.lang.String>

Controls what granularity a monitor alerts on.

Only available for monitors with groupings. For instance, a monitor grouped by `cluster`, `namespace`, and `pod` can be configured to only notify on each new `cluster` violating the alert conditions by setting `notify_by` to `['cluster']`. Tags mentioned in `notify_by` must be a subset of the grouping tags in the query. For example, a query grouped by `cluster` and `namespace` cannot notify on `region`. Setting `notify_by` to `[*]` configures the monitor to notify as a simple-alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notify_by Monitor#notify_by}

---

##### `notifyNoData`<sup>Optional</sup> <a name="notifyNoData" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyNoData"></a>

```java
public java.lang.Boolean|IResolvable getNotifyNoData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notify_no_data Monitor#notify_no_data}

---

##### `onMissingData`<sup>Optional</sup> <a name="onMissingData" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.onMissingData"></a>

```java
public java.lang.String getOnMissingData();
```

- *Type:* java.lang.String

Controls how groups or monitors are treated if an evaluation does not return any data points.

The default option results in different behavior depending on the monitor query type. For monitors using `Count` queries, an empty monitor evaluation is treated as 0 and is compared to the threshold conditions. For monitors using any query type other than `Count`, for example `Gauge`, `Measure`, or `Rate`, the monitor shows the last known status. This option is not available for Service Check, Composite, or SLO monitors. Valid values are: `show_no_data`, `show_and_notify_no_data`, `resolve`, and `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#on_missing_data Monitor#on_missing_data}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Integer from 1 (high) to 5 (low) indicating alert severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#priority Monitor#priority}

---

##### `renotifyInterval`<sup>Optional</sup> <a name="renotifyInterval" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyInterval"></a>

```java
public java.lang.Number getRenotifyInterval();
```

- *Type:* java.lang.Number

The number of minutes after the last notification before a monitor will re-notify on the current status.

It will only re-notify if it's not resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#renotify_interval Monitor#renotify_interval}

---

##### `renotifyOccurrences`<sup>Optional</sup> <a name="renotifyOccurrences" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyOccurrences"></a>

```java
public java.lang.Number getRenotifyOccurrences();
```

- *Type:* java.lang.Number

The number of re-notification messages that should be sent on the current status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#renotify_occurrences Monitor#renotify_occurrences}

---

##### `renotifyStatuses`<sup>Optional</sup> <a name="renotifyStatuses" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyStatuses"></a>

```java
public java.util.List<java.lang.String> getRenotifyStatuses();
```

- *Type:* java.util.List<java.lang.String>

The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#renotify_statuses Monitor#renotify_statuses}

---

##### `requireFullWindow`<sup>Optional</sup> <a name="requireFullWindow" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.requireFullWindow"></a>

```java
public java.lang.Boolean|IResolvable getRequireFullWindow();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether this monitor needs a full window of data before it's evaluated.

Datadog strongly recommends you set this to `false` for sparse metrics, otherwise some evaluations may be skipped. If there's a custom_schedule set, `require_full_window` must be false and will be ignored. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#require_full_window Monitor#require_full_window}

---

##### `restrictedRoles`<sup>Optional</sup> <a name="restrictedRoles" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.restrictedRoles"></a>

```java
public java.util.List<java.lang.String> getRestrictedRoles();
```

- *Type:* java.util.List<java.lang.String>

A list of unique role identifiers to define which roles are allowed to edit the monitor.

Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. Roles unique identifiers can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) in the `data.id` field. **Deprecated.** Use `datadog_restriction_policy` resource to manage permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#restricted_roles Monitor#restricted_roles}

---

##### `schedulingOptions`<sup>Optional</sup> <a name="schedulingOptions" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.schedulingOptions"></a>

```java
public MonitorSchedulingOptions getSchedulingOptions();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#scheduling_options Monitor#scheduling_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tags to associate with your monitor.

This can help you categorize and filter monitors in the manage monitors page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#tags Monitor#tags}

---

##### `timeoutH`<sup>Optional</sup> <a name="timeoutH" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.timeoutH"></a>

```java
public java.lang.Number getTimeoutH();
```

- *Type:* java.lang.Number

The number of hours of the monitor not reporting data before it automatically resolves from a triggered state.

The minimum allowed value is 0 hours. The maximum allowed value is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#timeout_h Monitor#timeout_h}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.validate"></a>

```java
public java.lang.Boolean|IResolvable getValidate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to `false`, skip the validation call done during plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#validate Monitor#validate}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.variables"></a>

```java
public MonitorVariables getVariables();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#variables Monitor#variables}

---

### MonitorMonitorThresholds <a name="MonitorMonitorThresholds" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorMonitorThresholds;

MonitorMonitorThresholds.builder()
//  .critical(java.lang.String)
//  .criticalRecovery(java.lang.String)
//  .ok(java.lang.String)
//  .unknown(java.lang.String)
//  .warning(java.lang.String)
//  .warningRecovery(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.critical">critical</a></code> | <code>java.lang.String</code> | The monitor `CRITICAL` threshold. Must be a number. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.criticalRecovery">criticalRecovery</a></code> | <code>java.lang.String</code> | The monitor `CRITICAL` recovery threshold. Must be a number. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.ok">ok</a></code> | <code>java.lang.String</code> | The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.unknown">unknown</a></code> | <code>java.lang.String</code> | The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.warning">warning</a></code> | <code>java.lang.String</code> | The monitor `WARNING` threshold. Must be a number. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.warningRecovery">warningRecovery</a></code> | <code>java.lang.String</code> | The monitor `WARNING` recovery threshold. Must be a number. |

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.critical"></a>

```java
public java.lang.String getCritical();
```

- *Type:* java.lang.String

The monitor `CRITICAL` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#critical Monitor#critical}

---

##### `criticalRecovery`<sup>Optional</sup> <a name="criticalRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.criticalRecovery"></a>

```java
public java.lang.String getCriticalRecovery();
```

- *Type:* java.lang.String

The monitor `CRITICAL` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#critical_recovery Monitor#critical_recovery}

---

##### `ok`<sup>Optional</sup> <a name="ok" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.ok"></a>

```java
public java.lang.String getOk();
```

- *Type:* java.lang.String

The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#ok Monitor#ok}

---

##### `unknown`<sup>Optional</sup> <a name="unknown" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.unknown"></a>

```java
public java.lang.String getUnknown();
```

- *Type:* java.lang.String

The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#unknown Monitor#unknown}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.warning"></a>

```java
public java.lang.String getWarning();
```

- *Type:* java.lang.String

The monitor `WARNING` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#warning Monitor#warning}

---

##### `warningRecovery`<sup>Optional</sup> <a name="warningRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.warningRecovery"></a>

```java
public java.lang.String getWarningRecovery();
```

- *Type:* java.lang.String

The monitor `WARNING` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#warning_recovery Monitor#warning_recovery}

---

### MonitorMonitorThresholdWindows <a name="MonitorMonitorThresholdWindows" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorMonitorThresholdWindows;

MonitorMonitorThresholdWindows.builder()
//  .recoveryWindow(java.lang.String)
//  .triggerWindow(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.recoveryWindow">recoveryWindow</a></code> | <code>java.lang.String</code> | Describes how long an anomalous metric must be normal before the alert recovers. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.triggerWindow">triggerWindow</a></code> | <code>java.lang.String</code> | Describes how long a metric must be anomalous before an alert triggers. |

---

##### `recoveryWindow`<sup>Optional</sup> <a name="recoveryWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.recoveryWindow"></a>

```java
public java.lang.String getRecoveryWindow();
```

- *Type:* java.lang.String

Describes how long an anomalous metric must be normal before the alert recovers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#recovery_window Monitor#recovery_window}

---

##### `triggerWindow`<sup>Optional</sup> <a name="triggerWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.triggerWindow"></a>

```java
public java.lang.String getTriggerWindow();
```

- *Type:* java.lang.String

Describes how long a metric must be anomalous before an alert triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#trigger_window Monitor#trigger_window}

---

### MonitorSchedulingOptions <a name="MonitorSchedulingOptions" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptions.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorSchedulingOptions;

MonitorSchedulingOptions.builder()
//  .customSchedule(MonitorSchedulingOptionsCustomSchedule)
//  .evaluationWindow(MonitorSchedulingOptionsEvaluationWindow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions.property.customSchedule">customSchedule</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | custom_schedule block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions.property.evaluationWindow">evaluationWindow</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | evaluation_window block. |

---

##### `customSchedule`<sup>Optional</sup> <a name="customSchedule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptions.property.customSchedule"></a>

```java
public MonitorSchedulingOptionsCustomSchedule getCustomSchedule();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

custom_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#custom_schedule Monitor#custom_schedule}

---

##### `evaluationWindow`<sup>Optional</sup> <a name="evaluationWindow" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptions.property.evaluationWindow"></a>

```java
public MonitorSchedulingOptionsEvaluationWindow getEvaluationWindow();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

evaluation_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#evaluation_window Monitor#evaluation_window}

---

### MonitorSchedulingOptionsCustomSchedule <a name="MonitorSchedulingOptionsCustomSchedule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorSchedulingOptionsCustomSchedule;

MonitorSchedulingOptionsCustomSchedule.builder()
    .recurrence(MonitorSchedulingOptionsCustomScheduleRecurrence)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.property.recurrence">recurrence</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | recurrence block. |

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.property.recurrence"></a>

```java
public MonitorSchedulingOptionsCustomScheduleRecurrence getRecurrence();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#recurrence Monitor#recurrence}

---

### MonitorSchedulingOptionsCustomScheduleRecurrence <a name="MonitorSchedulingOptionsCustomScheduleRecurrence" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence;

MonitorSchedulingOptionsCustomScheduleRecurrence.builder()
    .rrule(java.lang.String)
    .timezone(java.lang.String)
//  .start(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.rrule">rrule</a></code> | <code>java.lang.String</code> | Must be a valid `rrule`. See API docs for supported fields. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.timezone">timezone</a></code> | <code>java.lang.String</code> | 'tz database' format. Example: `America/New_York` or `UTC`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.start">start</a></code> | <code>java.lang.String</code> | Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'. |

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.rrule"></a>

```java
public java.lang.String getRrule();
```

- *Type:* java.lang.String

Must be a valid `rrule`. See API docs for supported fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#rrule Monitor#rrule}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

'tz database' format. Example: `America/New_York` or `UTC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#timezone Monitor#timezone}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#start Monitor#start}

---

### MonitorSchedulingOptionsEvaluationWindow <a name="MonitorSchedulingOptionsEvaluationWindow" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorSchedulingOptionsEvaluationWindow;

MonitorSchedulingOptionsEvaluationWindow.builder()
//  .dayStarts(java.lang.String)
//  .hourStarts(java.lang.Number)
//  .monthStarts(java.lang.Number)
//  .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.dayStarts">dayStarts</a></code> | <code>java.lang.String</code> | The time of the day at which a one day cumulative evaluation window starts. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.hourStarts">hourStarts</a></code> | <code>java.lang.Number</code> | The minute of the hour at which a one hour cumulative evaluation window starts. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.monthStarts">monthStarts</a></code> | <code>java.lang.Number</code> | The day of the month at which a one month cumulative evaluation window starts. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.timezone">timezone</a></code> | <code>java.lang.String</code> | The timezone for the cumulative evaluation window start time. |

---

##### `dayStarts`<sup>Optional</sup> <a name="dayStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.dayStarts"></a>

```java
public java.lang.String getDayStarts();
```

- *Type:* java.lang.String

The time of the day at which a one day cumulative evaluation window starts.

Must be defined in UTC time in `HH:mm` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#day_starts Monitor#day_starts}

---

##### `hourStarts`<sup>Optional</sup> <a name="hourStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.hourStarts"></a>

```java
public java.lang.Number getHourStarts();
```

- *Type:* java.lang.Number

The minute of the hour at which a one hour cumulative evaluation window starts.

Must be between 0 and 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#hour_starts Monitor#hour_starts}

---

##### `monthStarts`<sup>Optional</sup> <a name="monthStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.monthStarts"></a>

```java
public java.lang.Number getMonthStarts();
```

- *Type:* java.lang.Number

The day of the month at which a one month cumulative evaluation window starts.

Must be a value of 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#month_starts Monitor#month_starts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

The timezone for the cumulative evaluation window start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#timezone Monitor#timezone}

---

### MonitorVariables <a name="MonitorVariables" id="@cdktn/provider-datadog.monitor.MonitorVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariables.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariables;

MonitorVariables.builder()
//  .cloudCostQuery(IResolvable|java.util.List<MonitorVariablesCloudCostQuery>)
//  .dataQualityQuery(IResolvable|java.util.List<MonitorVariablesDataQualityQuery>)
//  .eventQuery(IResolvable|java.util.List<MonitorVariablesEventQuery>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables.property.cloudCostQuery">cloudCostQuery</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>></code> | cloud_cost_query block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables.property.dataQualityQuery">dataQualityQuery</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery">MonitorVariablesDataQualityQuery</a>></code> | data_quality_query block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables.property.eventQuery">eventQuery</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>></code> | event_query block. |

---

##### `cloudCostQuery`<sup>Optional</sup> <a name="cloudCostQuery" id="@cdktn/provider-datadog.monitor.MonitorVariables.property.cloudCostQuery"></a>

```java
public IResolvable|java.util.List<MonitorVariablesCloudCostQuery> getCloudCostQuery();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>>

cloud_cost_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#cloud_cost_query Monitor#cloud_cost_query}

---

##### `dataQualityQuery`<sup>Optional</sup> <a name="dataQualityQuery" id="@cdktn/provider-datadog.monitor.MonitorVariables.property.dataQualityQuery"></a>

```java
public IResolvable|java.util.List<MonitorVariablesDataQualityQuery> getDataQualityQuery();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery">MonitorVariablesDataQualityQuery</a>>

data_quality_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#data_quality_query Monitor#data_quality_query}

---

##### `eventQuery`<sup>Optional</sup> <a name="eventQuery" id="@cdktn/provider-datadog.monitor.MonitorVariables.property.eventQuery"></a>

```java
public IResolvable|java.util.List<MonitorVariablesEventQuery> getEventQuery();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>>

event_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#event_query Monitor#event_query}

---

### MonitorVariablesCloudCostQuery <a name="MonitorVariablesCloudCostQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesCloudCostQuery;

MonitorVariablesCloudCostQuery.builder()
    .aggregator(java.lang.String)
    .dataSource(java.lang.String)
    .name(java.lang.String)
    .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.aggregator">aggregator</a></code> | <code>java.lang.String</code> | The aggregation methods available for cloud cost queries. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | The data source for cloud cost queries. Valid values are `metrics`, `cloud_cost`, `datadog_usage`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.name">name</a></code> | <code>java.lang.String</code> | The name of the query for use in formulas. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.query">query</a></code> | <code>java.lang.String</code> | The cloud cost query definition. |

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.aggregator"></a>

```java
public java.lang.String getAggregator();
```

- *Type:* java.lang.String

The aggregation methods available for cloud cost queries.

Valid values are `avg`, `sum`, `max`, `min`, `last`, `area`, `l2norm`, `percentile`, `stddev`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#aggregator Monitor#aggregator}

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

The data source for cloud cost queries. Valid values are `metrics`, `cloud_cost`, `datadog_usage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#data_source Monitor#data_source}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#name Monitor#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The cloud cost query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#query Monitor#query}

---

### MonitorVariablesDataQualityQuery <a name="MonitorVariablesDataQualityQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesDataQualityQuery;

MonitorVariablesDataQualityQuery.builder()
    .dataSource(java.lang.String)
    .filter(java.lang.String)
    .measure(java.lang.String)
    .name(java.lang.String)
//  .groupBy(java.util.List<java.lang.String>)
//  .monitorOptions(MonitorVariablesDataQualityQueryMonitorOptions)
//  .schemaVersion(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | The data source for data quality queries. Valid value is `data_quality_metrics`. Valid values are `data_quality_metrics`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.filter">filter</a></code> | <code>java.lang.String</code> | Filter expression used to match on data entities. Uses AAstra query syntax. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.measure">measure</a></code> | <code>java.lang.String</code> | The measure to query. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.name">name</a></code> | <code>java.lang.String</code> | The name of the query for use in formulas. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Optional grouping fields for aggregation. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.monitorOptions">monitorOptions</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a></code> | monitor_options block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.schemaVersion">schemaVersion</a></code> | <code>java.lang.String</code> | Schema version for the data quality query. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.scope">scope</a></code> | <code>java.lang.String</code> | Optional scoping expression to further filter metrics. |

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

The data source for data quality queries. Valid value is `data_quality_metrics`. Valid values are `data_quality_metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#data_source Monitor#data_source}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Filter expression used to match on data entities. Uses AAstra query syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#filter Monitor#filter}

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.measure"></a>

```java
public java.lang.String getMeasure();
```

- *Type:* java.lang.String

The measure to query.

Common values include `bytes`, `cardinality`, `custom`, `freshness`, `max`, `mean`, `min`, `nullness`, `percent_negative`, `percent_zero`, `row_count`, `stddev`, `sum`, `uniqueness`. Additional values may be supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#measure Monitor#measure}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#name Monitor#name}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

Optional grouping fields for aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#group_by Monitor#group_by}

---

##### `monitorOptions`<sup>Optional</sup> <a name="monitorOptions" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.monitorOptions"></a>

```java
public MonitorVariablesDataQualityQueryMonitorOptions getMonitorOptions();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a>

monitor_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#monitor_options Monitor#monitor_options}

---

##### `schemaVersion`<sup>Optional</sup> <a name="schemaVersion" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.schemaVersion"></a>

```java
public java.lang.String getSchemaVersion();
```

- *Type:* java.lang.String

Schema version for the data quality query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#schema_version Monitor#schema_version}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Optional scoping expression to further filter metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#scope Monitor#scope}

---

### MonitorVariablesDataQualityQueryMonitorOptions <a name="MonitorVariablesDataQualityQueryMonitorOptions" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions;

MonitorVariablesDataQualityQueryMonitorOptions.builder()
//  .crontabOverride(java.lang.String)
//  .customSql(java.lang.String)
//  .customWhere(java.lang.String)
//  .groupByColumns(java.util.List<java.lang.String>)
//  .modelTypeOverride(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.crontabOverride">crontabOverride</a></code> | <code>java.lang.String</code> | Crontab expression to override the default schedule. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.customSql">customSql</a></code> | <code>java.lang.String</code> | Custom SQL query for the monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.customWhere">customWhere</a></code> | <code>java.lang.String</code> | Custom WHERE clause for the query. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.groupByColumns">groupByColumns</a></code> | <code>java.util.List<java.lang.String></code> | Columns to group results by. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.modelTypeOverride">modelTypeOverride</a></code> | <code>java.lang.String</code> | Override for the model type. Valid values are `freshness`, `percentage`, `any`. |

---

##### `crontabOverride`<sup>Optional</sup> <a name="crontabOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.crontabOverride"></a>

```java
public java.lang.String getCrontabOverride();
```

- *Type:* java.lang.String

Crontab expression to override the default schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#crontab_override Monitor#crontab_override}

---

##### `customSql`<sup>Optional</sup> <a name="customSql" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.customSql"></a>

```java
public java.lang.String getCustomSql();
```

- *Type:* java.lang.String

Custom SQL query for the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#custom_sql Monitor#custom_sql}

---

##### `customWhere`<sup>Optional</sup> <a name="customWhere" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.customWhere"></a>

```java
public java.lang.String getCustomWhere();
```

- *Type:* java.lang.String

Custom WHERE clause for the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#custom_where Monitor#custom_where}

---

##### `groupByColumns`<sup>Optional</sup> <a name="groupByColumns" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.groupByColumns"></a>

```java
public java.util.List<java.lang.String> getGroupByColumns();
```

- *Type:* java.util.List<java.lang.String>

Columns to group results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#group_by_columns Monitor#group_by_columns}

---

##### `modelTypeOverride`<sup>Optional</sup> <a name="modelTypeOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.modelTypeOverride"></a>

```java
public java.lang.String getModelTypeOverride();
```

- *Type:* java.lang.String

Override for the model type. Valid values are `freshness`, `percentage`, `any`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#model_type_override Monitor#model_type_override}

---

### MonitorVariablesEventQuery <a name="MonitorVariablesEventQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQuery;

MonitorVariablesEventQuery.builder()
    .compute(IResolvable|java.util.List<MonitorVariablesEventQueryCompute>)
    .dataSource(java.lang.String)
    .name(java.lang.String)
    .search(MonitorVariablesEventQuerySearch)
//  .groupBy(IResolvable|java.util.List<MonitorVariablesEventQueryGroupBy>)
//  .indexes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.compute">compute</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>></code> | compute block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | The data source for event platform-based queries. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.name">name</a></code> | <code>java.lang.String</code> | The name of query for use in formulas. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.search">search</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | search block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.groupBy">groupBy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>></code> | group_by block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.indexes">indexes</a></code> | <code>java.util.List<java.lang.String></code> | An array of index names to query in the stream. |

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.compute"></a>

```java
public IResolvable|java.util.List<MonitorVariablesEventQueryCompute> getCompute();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#compute Monitor#compute}

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

The data source for event platform-based queries.

Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`, `database_queries`, `network`, `network_path`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#data_source Monitor#data_source}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#name Monitor#name}

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.search"></a>

```java
public MonitorVariablesEventQuerySearch getSearch();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#search Monitor#search}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.groupBy"></a>

```java
public IResolvable|java.util.List<MonitorVariablesEventQueryGroupBy> getGroupBy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>>

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#group_by Monitor#group_by}

---

##### `indexes`<sup>Optional</sup> <a name="indexes" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.indexes"></a>

```java
public java.util.List<java.lang.String> getIndexes();
```

- *Type:* java.util.List<java.lang.String>

An array of index names to query in the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#indexes Monitor#indexes}

---

### MonitorVariablesEventQueryCompute <a name="MonitorVariablesEventQueryCompute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQueryCompute;

MonitorVariablesEventQueryCompute.builder()
    .aggregation(java.lang.String)
//  .interval(java.lang.Number)
//  .metric(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | The aggregation methods for event platform queries. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.interval">interval</a></code> | <code>java.lang.Number</code> | A time interval in milliseconds. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.metric">metric</a></code> | <code>java.lang.String</code> | The measurable attribute to compute. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

The aggregation methods for event platform queries.

Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#aggregation Monitor#aggregation}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

A time interval in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#interval Monitor#interval}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

The measurable attribute to compute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#metric Monitor#metric}

---

### MonitorVariablesEventQueryGroupBy <a name="MonitorVariablesEventQueryGroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQueryGroupBy;

MonitorVariablesEventQueryGroupBy.builder()
    .facet(java.lang.String)
//  .limit(java.lang.Number)
//  .sort(MonitorVariablesEventQueryGroupBySort)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.facet">facet</a></code> | <code>java.lang.String</code> | The event facet. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.limit">limit</a></code> | <code>java.lang.Number</code> | The number of groups to return. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.sort">sort</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | sort block. |

---

##### `facet`<sup>Required</sup> <a name="facet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.facet"></a>

```java
public java.lang.String getFacet();
```

- *Type:* java.lang.String

The event facet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#facet Monitor#facet}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

The number of groups to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#limit Monitor#limit}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.sort"></a>

```java
public MonitorVariablesEventQueryGroupBySort getSort();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#sort Monitor#sort}

---

### MonitorVariablesEventQueryGroupBySort <a name="MonitorVariablesEventQueryGroupBySort" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQueryGroupBySort;

MonitorVariablesEventQueryGroupBySort.builder()
    .aggregation(java.lang.String)
//  .metric(java.lang.String)
//  .order(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | The aggregation methods for the event platform queries. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.metric">metric</a></code> | <code>java.lang.String</code> | The metric used for sorting group by results. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.order">order</a></code> | <code>java.lang.String</code> | Direction of sort. Valid values are `asc`, `desc`. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

The aggregation methods for the event platform queries.

Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#aggregation Monitor#aggregation}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

The metric used for sorting group by results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#metric Monitor#metric}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Direction of sort. Valid values are `asc`, `desc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#order Monitor#order}

---

### MonitorVariablesEventQuerySearch <a name="MonitorVariablesEventQuerySearch" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQuerySearch;

MonitorVariablesEventQuerySearch.builder()
    .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch.property.query">query</a></code> | <code>java.lang.String</code> | The events search string. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The events search string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#query Monitor#query}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAssetsList <a name="MonitorAssetsList" id="@cdktn/provider-datadog.monitor.MonitorAssetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorAssetsList;

new MonitorAssetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.get"></a>

```java
public MonitorAssetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorAssets">MonitorAssets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MonitorAssets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorAssets">MonitorAssets</a>>

---


### MonitorAssetsOutputReference <a name="MonitorAssetsOutputReference" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorAssetsOutputReference;

new MonitorAssetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resetResourceKey">resetResourceKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceKey` <a name="resetResourceKey" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resetResourceKey"></a>

```java
public void resetResourceKey()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceKeyInput">resourceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceKey">resourceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitor.MonitorAssets">MonitorAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceKeyInput`<sup>Optional</sup> <a name="resourceKeyInput" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceKeyInput"></a>

```java
public java.lang.String getResourceKeyInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceKey`<sup>Required</sup> <a name="resourceKey" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceKey"></a>

```java
public java.lang.String getResourceKey();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.internalValue"></a>

```java
public IResolvable|MonitorAssets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitor.MonitorAssets">MonitorAssets</a>

---


### MonitorMonitorThresholdsOutputReference <a name="MonitorMonitorThresholdsOutputReference" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorMonitorThresholdsOutputReference;

new MonitorMonitorThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCritical">resetCritical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCriticalRecovery">resetCriticalRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetOk">resetOk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetUnknown">resetUnknown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarning">resetWarning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarningRecovery">resetWarningRecovery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCritical` <a name="resetCritical" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCritical"></a>

```java
public void resetCritical()
```

##### `resetCriticalRecovery` <a name="resetCriticalRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCriticalRecovery"></a>

```java
public void resetCriticalRecovery()
```

##### `resetOk` <a name="resetOk" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetOk"></a>

```java
public void resetOk()
```

##### `resetUnknown` <a name="resetUnknown" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetUnknown"></a>

```java
public void resetUnknown()
```

##### `resetWarning` <a name="resetWarning" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarning"></a>

```java
public void resetWarning()
```

##### `resetWarningRecovery` <a name="resetWarningRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarningRecovery"></a>

```java
public void resetWarningRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalInput">criticalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecoveryInput">criticalRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.okInput">okInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknownInput">unknownInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningInput">warningInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecoveryInput">warningRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.critical">critical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecovery">criticalRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.ok">ok</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknown">unknown</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warning">warning</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecovery">warningRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalInput"></a>

```java
public java.lang.String getCriticalInput();
```

- *Type:* java.lang.String

---

##### `criticalRecoveryInput`<sup>Optional</sup> <a name="criticalRecoveryInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecoveryInput"></a>

```java
public java.lang.String getCriticalRecoveryInput();
```

- *Type:* java.lang.String

---

##### `okInput`<sup>Optional</sup> <a name="okInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.okInput"></a>

```java
public java.lang.String getOkInput();
```

- *Type:* java.lang.String

---

##### `unknownInput`<sup>Optional</sup> <a name="unknownInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknownInput"></a>

```java
public java.lang.String getUnknownInput();
```

- *Type:* java.lang.String

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningInput"></a>

```java
public java.lang.String getWarningInput();
```

- *Type:* java.lang.String

---

##### `warningRecoveryInput`<sup>Optional</sup> <a name="warningRecoveryInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecoveryInput"></a>

```java
public java.lang.String getWarningRecoveryInput();
```

- *Type:* java.lang.String

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.critical"></a>

```java
public java.lang.String getCritical();
```

- *Type:* java.lang.String

---

##### `criticalRecovery`<sup>Required</sup> <a name="criticalRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecovery"></a>

```java
public java.lang.String getCriticalRecovery();
```

- *Type:* java.lang.String

---

##### `ok`<sup>Required</sup> <a name="ok" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.ok"></a>

```java
public java.lang.String getOk();
```

- *Type:* java.lang.String

---

##### `unknown`<sup>Required</sup> <a name="unknown" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknown"></a>

```java
public java.lang.String getUnknown();
```

- *Type:* java.lang.String

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warning"></a>

```java
public java.lang.String getWarning();
```

- *Type:* java.lang.String

---

##### `warningRecovery`<sup>Required</sup> <a name="warningRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecovery"></a>

```java
public java.lang.String getWarningRecovery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.internalValue"></a>

```java
public MonitorMonitorThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---


### MonitorMonitorThresholdWindowsOutputReference <a name="MonitorMonitorThresholdWindowsOutputReference" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorMonitorThresholdWindowsOutputReference;

new MonitorMonitorThresholdWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetRecoveryWindow">resetRecoveryWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetTriggerWindow">resetTriggerWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecoveryWindow` <a name="resetRecoveryWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetRecoveryWindow"></a>

```java
public void resetRecoveryWindow()
```

##### `resetTriggerWindow` <a name="resetTriggerWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetTriggerWindow"></a>

```java
public void resetTriggerWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindowInput">recoveryWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindowInput">triggerWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow">recoveryWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindow">triggerWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recoveryWindowInput`<sup>Optional</sup> <a name="recoveryWindowInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindowInput"></a>

```java
public java.lang.String getRecoveryWindowInput();
```

- *Type:* java.lang.String

---

##### `triggerWindowInput`<sup>Optional</sup> <a name="triggerWindowInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindowInput"></a>

```java
public java.lang.String getTriggerWindowInput();
```

- *Type:* java.lang.String

---

##### `recoveryWindow`<sup>Required</sup> <a name="recoveryWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow"></a>

```java
public java.lang.String getRecoveryWindow();
```

- *Type:* java.lang.String

---

##### `triggerWindow`<sup>Required</sup> <a name="triggerWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindow"></a>

```java
public java.lang.String getTriggerWindow();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.internalValue"></a>

```java
public MonitorMonitorThresholdWindows getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---


### MonitorSchedulingOptionsCustomScheduleOutputReference <a name="MonitorSchedulingOptionsCustomScheduleOutputReference" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference;

new MonitorSchedulingOptionsCustomScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence">putRecurrence</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurrence` <a name="putRecurrence" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence"></a>

```java
public void putRecurrence(MonitorSchedulingOptionsCustomScheduleRecurrence value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference">MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence"></a>

```java
public MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference getRecurrence();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference">MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference</a>

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrenceInput"></a>

```java
public MonitorSchedulingOptionsCustomScheduleRecurrence getRecurrenceInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue"></a>

```java
public MonitorSchedulingOptionsCustomSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

---


### MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference <a name="MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference;

new MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resetStart">resetStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStart` <a name="resetStart" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resetStart"></a>

```java
public void resetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rruleInput">rruleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule">rrule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rruleInput`<sup>Optional</sup> <a name="rruleInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rruleInput"></a>

```java
public java.lang.String getRruleInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule"></a>

```java
public java.lang.String getRrule();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue"></a>

```java
public MonitorSchedulingOptionsCustomScheduleRecurrence getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---


### MonitorSchedulingOptionsEvaluationWindowOutputReference <a name="MonitorSchedulingOptionsEvaluationWindowOutputReference" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference;

new MonitorSchedulingOptionsEvaluationWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetDayStarts">resetDayStarts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetHourStarts">resetHourStarts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetMonthStarts">resetMonthStarts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayStarts` <a name="resetDayStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetDayStarts"></a>

```java
public void resetDayStarts()
```

##### `resetHourStarts` <a name="resetHourStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetHourStarts"></a>

```java
public void resetHourStarts()
```

##### `resetMonthStarts` <a name="resetMonthStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetMonthStarts"></a>

```java
public void resetMonthStarts()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStartsInput">dayStartsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStartsInput">hourStartsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStartsInput">monthStartsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts">dayStarts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts">hourStarts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts">monthStarts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayStartsInput`<sup>Optional</sup> <a name="dayStartsInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStartsInput"></a>

```java
public java.lang.String getDayStartsInput();
```

- *Type:* java.lang.String

---

##### `hourStartsInput`<sup>Optional</sup> <a name="hourStartsInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStartsInput"></a>

```java
public java.lang.Number getHourStartsInput();
```

- *Type:* java.lang.Number

---

##### `monthStartsInput`<sup>Optional</sup> <a name="monthStartsInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStartsInput"></a>

```java
public java.lang.Number getMonthStartsInput();
```

- *Type:* java.lang.Number

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `dayStarts`<sup>Required</sup> <a name="dayStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts"></a>

```java
public java.lang.String getDayStarts();
```

- *Type:* java.lang.String

---

##### `hourStarts`<sup>Required</sup> <a name="hourStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts"></a>

```java
public java.lang.Number getHourStarts();
```

- *Type:* java.lang.Number

---

##### `monthStarts`<sup>Required</sup> <a name="monthStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts"></a>

```java
public java.lang.Number getMonthStarts();
```

- *Type:* java.lang.Number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue"></a>

```java
public MonitorSchedulingOptionsEvaluationWindow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

---


### MonitorSchedulingOptionsOutputReference <a name="MonitorSchedulingOptionsOutputReference" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorSchedulingOptionsOutputReference;

new MonitorSchedulingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule">putCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow">putEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetCustomSchedule">resetCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetEvaluationWindow">resetEvaluationWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomSchedule` <a name="putCustomSchedule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule"></a>

```java
public void putCustomSchedule(MonitorSchedulingOptionsCustomSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

---

##### `putEvaluationWindow` <a name="putEvaluationWindow" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow"></a>

```java
public void putEvaluationWindow(MonitorSchedulingOptionsEvaluationWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

---

##### `resetCustomSchedule` <a name="resetCustomSchedule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetCustomSchedule"></a>

```java
public void resetCustomSchedule()
```

##### `resetEvaluationWindow` <a name="resetEvaluationWindow" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetEvaluationWindow"></a>

```java
public void resetEvaluationWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customSchedule">customSchedule</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference">MonitorSchedulingOptionsCustomScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindow">evaluationWindow</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference">MonitorSchedulingOptionsEvaluationWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customScheduleInput">customScheduleInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindowInput">evaluationWindowInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customSchedule`<sup>Required</sup> <a name="customSchedule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customSchedule"></a>

```java
public MonitorSchedulingOptionsCustomScheduleOutputReference getCustomSchedule();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference">MonitorSchedulingOptionsCustomScheduleOutputReference</a>

---

##### `evaluationWindow`<sup>Required</sup> <a name="evaluationWindow" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindow"></a>

```java
public MonitorSchedulingOptionsEvaluationWindowOutputReference getEvaluationWindow();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference">MonitorSchedulingOptionsEvaluationWindowOutputReference</a>

---

##### `customScheduleInput`<sup>Optional</sup> <a name="customScheduleInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customScheduleInput"></a>

```java
public MonitorSchedulingOptionsCustomSchedule getCustomScheduleInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

---

##### `evaluationWindowInput`<sup>Optional</sup> <a name="evaluationWindowInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindowInput"></a>

```java
public MonitorSchedulingOptionsEvaluationWindow getEvaluationWindowInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.internalValue"></a>

```java
public MonitorSchedulingOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

---


### MonitorVariablesCloudCostQueryList <a name="MonitorVariablesCloudCostQueryList" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesCloudCostQueryList;

new MonitorVariablesCloudCostQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.get"></a>

```java
public MonitorVariablesCloudCostQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MonitorVariablesCloudCostQuery> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>>

---


### MonitorVariablesCloudCostQueryOutputReference <a name="MonitorVariablesCloudCostQueryOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesCloudCostQueryOutputReference;

new MonitorVariablesCloudCostQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregatorInput">aggregatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregator">aggregator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregatorInput`<sup>Optional</sup> <a name="aggregatorInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregatorInput"></a>

```java
public java.lang.String getAggregatorInput();
```

- *Type:* java.lang.String

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSourceInput"></a>

```java
public java.lang.String getDataSourceInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregator"></a>

```java
public java.lang.String getAggregator();
```

- *Type:* java.lang.String

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|MonitorVariablesCloudCostQuery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>

---


### MonitorVariablesDataQualityQueryList <a name="MonitorVariablesDataQualityQueryList" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesDataQualityQueryList;

new MonitorVariablesDataQualityQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.get"></a>

```java
public MonitorVariablesDataQualityQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery">MonitorVariablesDataQualityQuery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MonitorVariablesDataQualityQuery> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery">MonitorVariablesDataQualityQuery</a>>

---


### MonitorVariablesDataQualityQueryMonitorOptionsOutputReference <a name="MonitorVariablesDataQualityQueryMonitorOptionsOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference;

new MonitorVariablesDataQualityQueryMonitorOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCrontabOverride">resetCrontabOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCustomSql">resetCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCustomWhere">resetCustomWhere</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetGroupByColumns">resetGroupByColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetModelTypeOverride">resetModelTypeOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrontabOverride` <a name="resetCrontabOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCrontabOverride"></a>

```java
public void resetCrontabOverride()
```

##### `resetCustomSql` <a name="resetCustomSql" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCustomSql"></a>

```java
public void resetCustomSql()
```

##### `resetCustomWhere` <a name="resetCustomWhere" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCustomWhere"></a>

```java
public void resetCustomWhere()
```

##### `resetGroupByColumns` <a name="resetGroupByColumns" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetGroupByColumns"></a>

```java
public void resetGroupByColumns()
```

##### `resetModelTypeOverride` <a name="resetModelTypeOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetModelTypeOverride"></a>

```java
public void resetModelTypeOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.crontabOverrideInput">crontabOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customSqlInput">customSqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customWhereInput">customWhereInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.groupByColumnsInput">groupByColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.modelTypeOverrideInput">modelTypeOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.crontabOverride">crontabOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customSql">customSql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customWhere">customWhere</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.groupByColumns">groupByColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.modelTypeOverride">modelTypeOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crontabOverrideInput`<sup>Optional</sup> <a name="crontabOverrideInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.crontabOverrideInput"></a>

```java
public java.lang.String getCrontabOverrideInput();
```

- *Type:* java.lang.String

---

##### `customSqlInput`<sup>Optional</sup> <a name="customSqlInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customSqlInput"></a>

```java
public java.lang.String getCustomSqlInput();
```

- *Type:* java.lang.String

---

##### `customWhereInput`<sup>Optional</sup> <a name="customWhereInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customWhereInput"></a>

```java
public java.lang.String getCustomWhereInput();
```

- *Type:* java.lang.String

---

##### `groupByColumnsInput`<sup>Optional</sup> <a name="groupByColumnsInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.groupByColumnsInput"></a>

```java
public java.util.List<java.lang.String> getGroupByColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `modelTypeOverrideInput`<sup>Optional</sup> <a name="modelTypeOverrideInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.modelTypeOverrideInput"></a>

```java
public java.lang.String getModelTypeOverrideInput();
```

- *Type:* java.lang.String

---

##### `crontabOverride`<sup>Required</sup> <a name="crontabOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.crontabOverride"></a>

```java
public java.lang.String getCrontabOverride();
```

- *Type:* java.lang.String

---

##### `customSql`<sup>Required</sup> <a name="customSql" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customSql"></a>

```java
public java.lang.String getCustomSql();
```

- *Type:* java.lang.String

---

##### `customWhere`<sup>Required</sup> <a name="customWhere" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customWhere"></a>

```java
public java.lang.String getCustomWhere();
```

- *Type:* java.lang.String

---

##### `groupByColumns`<sup>Required</sup> <a name="groupByColumns" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.groupByColumns"></a>

```java
public java.util.List<java.lang.String> getGroupByColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `modelTypeOverride`<sup>Required</sup> <a name="modelTypeOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.modelTypeOverride"></a>

```java
public java.lang.String getModelTypeOverride();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.internalValue"></a>

```java
public MonitorVariablesDataQualityQueryMonitorOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a>

---


### MonitorVariablesDataQualityQueryOutputReference <a name="MonitorVariablesDataQualityQueryOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesDataQualityQueryOutputReference;

new MonitorVariablesDataQualityQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.putMonitorOptions">putMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetMonitorOptions">resetMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetSchemaVersion">resetSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonitorOptions` <a name="putMonitorOptions" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.putMonitorOptions"></a>

```java
public void putMonitorOptions(MonitorVariablesDataQualityQueryMonitorOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.putMonitorOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a>

---

##### `resetGroupBy` <a name="resetGroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetMonitorOptions` <a name="resetMonitorOptions" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetMonitorOptions"></a>

```java
public void resetMonitorOptions()
```

##### `resetSchemaVersion` <a name="resetSchemaVersion" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetSchemaVersion"></a>

```java
public void resetSchemaVersion()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.monitorOptions">monitorOptions</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference">MonitorVariablesDataQualityQueryMonitorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.groupByInput">groupByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.measureInput">measureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.monitorOptionsInput">monitorOptionsInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.schemaVersionInput">schemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.measure">measure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.schemaVersion">schemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery">MonitorVariablesDataQualityQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `monitorOptions`<sup>Required</sup> <a name="monitorOptions" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.monitorOptions"></a>

```java
public MonitorVariablesDataQualityQueryMonitorOptionsOutputReference getMonitorOptions();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference">MonitorVariablesDataQualityQueryMonitorOptionsOutputReference</a>

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.dataSourceInput"></a>

```java
public java.lang.String getDataSourceInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.groupByInput"></a>

```java
public java.util.List<java.lang.String> getGroupByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `measureInput`<sup>Optional</sup> <a name="measureInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.measureInput"></a>

```java
public java.lang.String getMeasureInput();
```

- *Type:* java.lang.String

---

##### `monitorOptionsInput`<sup>Optional</sup> <a name="monitorOptionsInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.monitorOptionsInput"></a>

```java
public MonitorVariablesDataQualityQueryMonitorOptions getMonitorOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaVersionInput`<sup>Optional</sup> <a name="schemaVersionInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.schemaVersionInput"></a>

```java
public java.lang.String getSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.measure"></a>

```java
public java.lang.String getMeasure();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schemaVersion`<sup>Required</sup> <a name="schemaVersion" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.schemaVersion"></a>

```java
public java.lang.String getSchemaVersion();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|MonitorVariablesDataQualityQuery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery">MonitorVariablesDataQualityQuery</a>

---


### MonitorVariablesEventQueryComputeList <a name="MonitorVariablesEventQueryComputeList" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQueryComputeList;

new MonitorVariablesEventQueryComputeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get"></a>

```java
public MonitorVariablesEventQueryComputeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MonitorVariablesEventQueryCompute> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>>

---


### MonitorVariablesEventQueryComputeOutputReference <a name="MonitorVariablesEventQueryComputeOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQueryComputeOutputReference;

new MonitorVariablesEventQueryComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetMetric">resetMetric</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetMetric"></a>

```java
public void resetMetric()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.internalValue"></a>

```java
public IResolvable|MonitorVariablesEventQueryCompute getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>

---


### MonitorVariablesEventQueryGroupByList <a name="MonitorVariablesEventQueryGroupByList" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQueryGroupByList;

new MonitorVariablesEventQueryGroupByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get"></a>

```java
public MonitorVariablesEventQueryGroupByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MonitorVariablesEventQueryGroupBy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>>

---


### MonitorVariablesEventQueryGroupByOutputReference <a name="MonitorVariablesEventQueryGroupByOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference;

new MonitorVariablesEventQueryGroupByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort">putSort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetSort">resetSort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSort` <a name="putSort" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort"></a>

```java
public void putSort(MonitorVariablesEventQueryGroupBySort value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetSort` <a name="resetSort" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetSort"></a>

```java
public void resetSort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sort">sort</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference">MonitorVariablesEventQueryGroupBySortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facetInput">facetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sortInput">sortInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facet">facet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sort"></a>

```java
public MonitorVariablesEventQueryGroupBySortOutputReference getSort();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference">MonitorVariablesEventQueryGroupBySortOutputReference</a>

---

##### `facetInput`<sup>Optional</sup> <a name="facetInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facetInput"></a>

```java
public java.lang.String getFacetInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sortInput"></a>

```java
public MonitorVariablesEventQueryGroupBySort getSortInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---

##### `facet`<sup>Required</sup> <a name="facet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facet"></a>

```java
public java.lang.String getFacet();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.internalValue"></a>

```java
public IResolvable|MonitorVariablesEventQueryGroupBy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>

---


### MonitorVariablesEventQueryGroupBySortOutputReference <a name="MonitorVariablesEventQueryGroupBySortOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference;

new MonitorVariablesEventQueryGroupBySortOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetOrder"></a>

```java
public void resetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.internalValue"></a>

```java
public MonitorVariablesEventQueryGroupBySort getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---


### MonitorVariablesEventQueryList <a name="MonitorVariablesEventQueryList" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQueryList;

new MonitorVariablesEventQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.get"></a>

```java
public MonitorVariablesEventQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MonitorVariablesEventQuery> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>>

---


### MonitorVariablesEventQueryOutputReference <a name="MonitorVariablesEventQueryOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQueryOutputReference;

new MonitorVariablesEventQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute">putCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy">putGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch">putSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetIndexes">resetIndexes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompute` <a name="putCompute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute"></a>

```java
public void putCompute(IResolvable|java.util.List<MonitorVariablesEventQueryCompute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>>

---

##### `putGroupBy` <a name="putGroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy"></a>

```java
public void putGroupBy(IResolvable|java.util.List<MonitorVariablesEventQueryGroupBy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>>

---

##### `putSearch` <a name="putSearch" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch"></a>

```java
public void putSearch(MonitorVariablesEventQuerySearch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---

##### `resetGroupBy` <a name="resetGroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetIndexes` <a name="resetIndexes" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetIndexes"></a>

```java
public void resetIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.compute">compute</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList">MonitorVariablesEventQueryComputeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupBy">groupBy</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList">MonitorVariablesEventQueryGroupByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.search">search</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference">MonitorVariablesEventQuerySearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.computeInput">computeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupByInput">groupByInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexesInput">indexesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.searchInput">searchInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexes">indexes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.compute"></a>

```java
public MonitorVariablesEventQueryComputeList getCompute();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList">MonitorVariablesEventQueryComputeList</a>

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupBy"></a>

```java
public MonitorVariablesEventQueryGroupByList getGroupBy();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList">MonitorVariablesEventQueryGroupByList</a>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.search"></a>

```java
public MonitorVariablesEventQuerySearchOutputReference getSearch();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference">MonitorVariablesEventQuerySearchOutputReference</a>

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.computeInput"></a>

```java
public IResolvable|java.util.List<MonitorVariablesEventQueryCompute> getComputeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>>

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSourceInput"></a>

```java
public java.lang.String getDataSourceInput();
```

- *Type:* java.lang.String

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupByInput"></a>

```java
public IResolvable|java.util.List<MonitorVariablesEventQueryGroupBy> getGroupByInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>>

---

##### `indexesInput`<sup>Optional</sup> <a name="indexesInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexesInput"></a>

```java
public java.util.List<java.lang.String> getIndexesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.searchInput"></a>

```java
public MonitorVariablesEventQuerySearch getSearchInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `indexes`<sup>Required</sup> <a name="indexes" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexes"></a>

```java
public java.util.List<java.lang.String> getIndexes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|MonitorVariablesEventQuery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>

---


### MonitorVariablesEventQuerySearchOutputReference <a name="MonitorVariablesEventQuerySearchOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesEventQuerySearchOutputReference;

new MonitorVariablesEventQuerySearchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.internalValue"></a>

```java
public MonitorVariablesEventQuerySearch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---


### MonitorVariablesOutputReference <a name="MonitorVariablesOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.monitor.MonitorVariablesOutputReference;

new MonitorVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putCloudCostQuery">putCloudCostQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putDataQualityQuery">putDataQualityQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery">putEventQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetCloudCostQuery">resetCloudCostQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetDataQualityQuery">resetDataQualityQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetEventQuery">resetEventQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudCostQuery` <a name="putCloudCostQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putCloudCostQuery"></a>

```java
public void putCloudCostQuery(IResolvable|java.util.List<MonitorVariablesCloudCostQuery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putCloudCostQuery.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>>

---

##### `putDataQualityQuery` <a name="putDataQualityQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putDataQualityQuery"></a>

```java
public void putDataQualityQuery(IResolvable|java.util.List<MonitorVariablesDataQualityQuery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putDataQualityQuery.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery">MonitorVariablesDataQualityQuery</a>>

---

##### `putEventQuery` <a name="putEventQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery"></a>

```java
public void putEventQuery(IResolvable|java.util.List<MonitorVariablesEventQuery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>>

---

##### `resetCloudCostQuery` <a name="resetCloudCostQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetCloudCostQuery"></a>

```java
public void resetCloudCostQuery()
```

##### `resetDataQualityQuery` <a name="resetDataQualityQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetDataQualityQuery"></a>

```java
public void resetDataQualityQuery()
```

##### `resetEventQuery` <a name="resetEventQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetEventQuery"></a>

```java
public void resetEventQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQuery">cloudCostQuery</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList">MonitorVariablesCloudCostQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.dataQualityQuery">dataQualityQuery</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList">MonitorVariablesDataQualityQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQuery">eventQuery</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList">MonitorVariablesEventQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQueryInput">cloudCostQueryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.dataQualityQueryInput">dataQualityQueryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery">MonitorVariablesDataQualityQuery</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQueryInput">eventQueryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudCostQuery`<sup>Required</sup> <a name="cloudCostQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQuery"></a>

```java
public MonitorVariablesCloudCostQueryList getCloudCostQuery();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList">MonitorVariablesCloudCostQueryList</a>

---

##### `dataQualityQuery`<sup>Required</sup> <a name="dataQualityQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.dataQualityQuery"></a>

```java
public MonitorVariablesDataQualityQueryList getDataQualityQuery();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList">MonitorVariablesDataQualityQueryList</a>

---

##### `eventQuery`<sup>Required</sup> <a name="eventQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQuery"></a>

```java
public MonitorVariablesEventQueryList getEventQuery();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList">MonitorVariablesEventQueryList</a>

---

##### `cloudCostQueryInput`<sup>Optional</sup> <a name="cloudCostQueryInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQueryInput"></a>

```java
public IResolvable|java.util.List<MonitorVariablesCloudCostQuery> getCloudCostQueryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>>

---

##### `dataQualityQueryInput`<sup>Optional</sup> <a name="dataQualityQueryInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.dataQualityQueryInput"></a>

```java
public IResolvable|java.util.List<MonitorVariablesDataQualityQuery> getDataQualityQueryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery">MonitorVariablesDataQualityQuery</a>>

---

##### `eventQueryInput`<sup>Optional</sup> <a name="eventQueryInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQueryInput"></a>

```java
public IResolvable|java.util.List<MonitorVariablesEventQuery> getEventQueryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.internalValue"></a>

```java
public MonitorVariables getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---



