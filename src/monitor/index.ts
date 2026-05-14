/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MonitorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Indicates whether the monitor is in a draft or published state. When set to `draft`, the monitor appears as Draft and does not send notifications. When set to `published`, the monitor is active, and it evaluates conditions and sends notifications as configured. Valid values are `draft`, `published`. Defaults to `"published"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#draft_status Monitor#draft_status}
  */
  readonly draftStatus?: string;
  /**
  * A boolean indicating whether or not to include a list of log values which triggered the alert. This is only used by log monitors. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#enable_logs_sample Monitor#enable_logs_sample}
  */
  readonly enableLogsSample?: boolean | cdktn.IResolvable;
  /**
  * Whether or not a list of samples which triggered the alert is included. This is only used by CI Test and Pipeline monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#enable_samples Monitor#enable_samples}
  */
  readonly enableSamples?: boolean | cdktn.IResolvable;
  /**
  * A message to include with a re-notification. Supports the `@username` notification allowed elsewhere.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#escalation_message Monitor#escalation_message}
  */
  readonly escalationMessage?: string;
  /**
  * (Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer.
  * 
  * For example, if the value is set to `300` (5min), the `timeframe` is set to `last_5m` and the time is 7:00, the monitor will evaluate data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor will always have data during evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#evaluation_delay Monitor#evaluation_delay}
  */
  readonly evaluationDelay?: number;
  /**
  * A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#force_delete Monitor#force_delete}
  */
  readonly forceDelete?: boolean | cdktn.IResolvable;
  /**
  * The time span after which groups with missing data are dropped from the monitor state. The minimum value is one hour, and the maximum value is 72 hours. Example values are: 60m, 1h, and 2d. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#group_retention_duration Monitor#group_retention_duration}
  */
  readonly groupRetentionDuration?: string;
  /**
  * Whether or not to trigger one alert if any source breaches a threshold. This is only used by log monitors. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#groupby_simple_monitor Monitor#groupby_simple_monitor}
  */
  readonly groupbySimpleMonitor?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#id Monitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#include_tags Monitor#include_tags}
  */
  readonly includeTags?: boolean | cdktn.IResolvable;
  /**
  * A message to include with notifications for this monitor.
  * 
  * Email notifications can be sent to specific users by using the same `@username` notation as events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#message Monitor#message}
  */
  readonly message: string;
  /**
  * Name of Datadog monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * The time (in seconds) to skip evaluations for new groups.
  * 
  * `new_group_delay` overrides `new_host_delay` if it is set to a nonzero value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#new_group_delay Monitor#new_group_delay}
  */
  readonly newGroupDelay?: number;
  /**
  * **Deprecated**. See `new_group_delay`. Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non-negative integer. This value is ignored for simple monitors and monitors not grouped by host. The only case when this should be used is to override the default and set `new_host_delay` to zero for monitors grouped by host. **Deprecated.** Use `new_group_delay` except when setting `new_host_delay` to zero. Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#new_host_delay Monitor#new_host_delay}
  */
  readonly newHostDelay?: number;
  /**
  * The number of minutes before a monitor will notify when data stops reporting.
  * 
  * We recommend at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#no_data_timeframe Monitor#no_data_timeframe}
  */
  readonly noDataTimeframe?: number;
  /**
  * Toggles the display of additional content sent in the monitor notification. Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`, `hide_query_and_handles`, `show_only_snapshot`, `hide_handles_and_footer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notification_preset_name Monitor#notification_preset_name}
  */
  readonly notificationPresetName?: string;
  /**
  * A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notify_audit Monitor#notify_audit}
  */
  readonly notifyAudit?: boolean | cdktn.IResolvable;
  /**
  * Controls what granularity a monitor alerts on. Only available for monitors with groupings. For instance, a monitor grouped by `cluster`, `namespace`, and `pod` can be configured to only notify on each new `cluster` violating the alert conditions by setting `notify_by` to `['cluster']`. Tags mentioned in `notify_by` must be a subset of the grouping tags in the query. For example, a query grouped by `cluster` and `namespace` cannot notify on `region`. Setting `notify_by` to `[*]` configures the monitor to notify as a simple-alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notify_by Monitor#notify_by}
  */
  readonly notifyBy?: string[];
  /**
  * A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#notify_no_data Monitor#notify_no_data}
  */
  readonly notifyNoData?: boolean | cdktn.IResolvable;
  /**
  * Controls how groups or monitors are treated if an evaluation does not return any data points. The default option results in different behavior depending on the monitor query type. For monitors using `Count` queries, an empty monitor evaluation is treated as 0 and is compared to the threshold conditions. For monitors using any query type other than `Count`, for example `Gauge`, `Measure`, or `Rate`, the monitor shows the last known status. This option is not available for Service Check, Composite, or SLO monitors. Valid values are: `show_no_data`, `show_and_notify_no_data`, `resolve`, and `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#on_missing_data Monitor#on_missing_data}
  */
  readonly onMissingData?: string;
  /**
  * Integer from 1 (high) to 5 (low) indicating alert severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#priority Monitor#priority}
  */
  readonly priority?: string;
  /**
  * The monitor query to notify on. Note this is not the same query you see in the UI and the syntax is different depending on the monitor type, please see the [API Reference](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor) for details. `terraform plan` will validate query contents unless `validate` is set to `false`.
  * 
  * **Note:** APM latency data is now available as Distribution Metrics. Existing monitors have been migrated automatically but all terraformed monitors can still use the existing metrics. We strongly recommend updating monitor definitions to query the new metrics. To learn more, or to see examples of how to update your terraform definitions to utilize the new distribution metrics, see the [detailed doc](https://docs.datadoghq.com/tracing/guide/ddsketch_trace_metrics/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
  /**
  * The number of minutes after the last notification before a monitor will re-notify on the current status. It will only re-notify if it's not resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#renotify_interval Monitor#renotify_interval}
  */
  readonly renotifyInterval?: number;
  /**
  * The number of re-notification messages that should be sent on the current status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#renotify_occurrences Monitor#renotify_occurrences}
  */
  readonly renotifyOccurrences?: number;
  /**
  * The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#renotify_statuses Monitor#renotify_statuses}
  */
  readonly renotifyStatuses?: string[];
  /**
  * A boolean indicating whether this monitor needs a full window of data before it's evaluated. Datadog strongly recommends you set this to `false` for sparse metrics, otherwise some evaluations may be skipped. If there's a custom_schedule set, `require_full_window` must be false and will be ignored. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#require_full_window Monitor#require_full_window}
  */
  readonly requireFullWindow?: boolean | cdktn.IResolvable;
  /**
  * A list of unique role identifiers to define which roles are allowed to edit the monitor. Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. Roles unique identifiers can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) in the `data.id` field. **Deprecated.** Use `datadog_restriction_policy` resource to manage permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#restricted_roles Monitor#restricted_roles}
  */
  readonly restrictedRoles?: string[];
  /**
  * A list of tags to associate with your monitor. This can help you categorize and filter monitors in the manage monitors page of the UI. Note: it's not currently possible to filter by these tags when querying via the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#tags Monitor#tags}
  */
  readonly tags?: string[];
  /**
  * The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. The minimum allowed value is 0 hours. The maximum allowed value is 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#timeout_h Monitor#timeout_h}
  */
  readonly timeoutH?: number;
  /**
  * The type of the monitor. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor). Note: The monitor type cannot be changed after a monitor is created. Valid values are `composite`, `event alert`, `log alert`, `metric alert`, `process alert`, `query alert`, `rum alert`, `service check`, `synthetics alert`, `trace-analytics alert`, `slo alert`, `event-v2 alert`, `audit alert`, `ci-pipelines alert`, `ci-tests alert`, `error-tracking alert`, `database-monitoring alert`, `network-performance alert`, `cost alert`, `data-quality alert`, `network-path alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#type Monitor#type}
  */
  readonly type: string;
  /**
  * If set to `false`, skip the validation call done during plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#validate Monitor#validate}
  */
  readonly validate?: boolean | cdktn.IResolvable;
  /**
  * assets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#assets Monitor#assets}
  */
  readonly assets?: MonitorAssets[] | cdktn.IResolvable;
  /**
  * monitor_threshold_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#monitor_threshold_windows Monitor#monitor_threshold_windows}
  */
  readonly monitorThresholdWindows?: MonitorMonitorThresholdWindows;
  /**
  * monitor_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#monitor_thresholds Monitor#monitor_thresholds}
  */
  readonly monitorThresholds?: MonitorMonitorThresholds;
  /**
  * scheduling_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#scheduling_options Monitor#scheduling_options}
  */
  readonly schedulingOptions?: MonitorSchedulingOptions;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#variables Monitor#variables}
  */
  readonly variables?: MonitorVariables;
}
export interface MonitorAssets {
  /**
  * Type of asset the entity represents on a monitor. Valid values are `runbook`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#category Monitor#category}
  */
  readonly category: string;
  /**
  * Name for the monitor asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * Identifier of the internal Datadog resource that this asset represents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#resource_key Monitor#resource_key}
  */
  readonly resourceKey?: string;
  /**
  * Type of internal Datadog resource associated with a monitor asset. Valid values are `notebook`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#resource_type Monitor#resource_type}
  */
  readonly resourceType?: string;
  /**
  * URL for the asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#url Monitor#url}
  */
  readonly url: string;
}

export function monitorAssetsToTerraform(struct?: MonitorAssets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    name: cdktn.stringToTerraform(struct!.name),
    resource_key: cdktn.stringToTerraform(struct!.resourceKey),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function monitorAssetsToHclTerraform(struct?: MonitorAssets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_key: {
      value: cdktn.stringToHclTerraform(struct!.resourceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
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

export class MonitorAssetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorAssets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceKey = this._resourceKey;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAssets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._name = undefined;
      this._resourceKey = undefined;
      this._resourceType = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._name = value.name;
      this._resourceKey = value.resourceKey;
      this._resourceType = value.resourceType;
      this._url = value.url;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // resource_key - computed: false, optional: true, required: false
  private _resourceKey?: string; 
  public get resourceKey() {
    return this.getStringAttribute('resource_key');
  }
  public set resourceKey(value: string) {
    this._resourceKey = value;
  }
  public resetResourceKey() {
    this._resourceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceKeyInput() {
    return this._resourceKey;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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

export class MonitorAssetsList extends cdktn.ComplexList {
  public internalValue? : MonitorAssets[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorAssetsOutputReference {
    return new MonitorAssetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorMonitorThresholdWindows {
  /**
  * Describes how long an anomalous metric must be normal before the alert recovers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#recovery_window Monitor#recovery_window}
  */
  readonly recoveryWindow?: string;
  /**
  * Describes how long a metric must be anomalous before an alert triggers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#trigger_window Monitor#trigger_window}
  */
  readonly triggerWindow?: string;
}

export function monitorMonitorThresholdWindowsToTerraform(struct?: MonitorMonitorThresholdWindowsOutputReference | MonitorMonitorThresholdWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_window: cdktn.stringToTerraform(struct!.recoveryWindow),
    trigger_window: cdktn.stringToTerraform(struct!.triggerWindow),
  }
}


export function monitorMonitorThresholdWindowsToHclTerraform(struct?: MonitorMonitorThresholdWindowsOutputReference | MonitorMonitorThresholdWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recovery_window: {
      value: cdktn.stringToHclTerraform(struct!.recoveryWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_window: {
      value: cdktn.stringToHclTerraform(struct!.triggerWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorMonitorThresholdWindowsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorMonitorThresholdWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindow = this._recoveryWindow;
    }
    if (this._triggerWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerWindow = this._triggerWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorMonitorThresholdWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recoveryWindow = undefined;
      this._triggerWindow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recoveryWindow = value.recoveryWindow;
      this._triggerWindow = value.triggerWindow;
    }
  }

  // recovery_window - computed: false, optional: true, required: false
  private _recoveryWindow?: string; 
  public get recoveryWindow() {
    return this.getStringAttribute('recovery_window');
  }
  public set recoveryWindow(value: string) {
    this._recoveryWindow = value;
  }
  public resetRecoveryWindow() {
    this._recoveryWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInput() {
    return this._recoveryWindow;
  }

  // trigger_window - computed: false, optional: true, required: false
  private _triggerWindow?: string; 
  public get triggerWindow() {
    return this.getStringAttribute('trigger_window');
  }
  public set triggerWindow(value: string) {
    this._triggerWindow = value;
  }
  public resetTriggerWindow() {
    this._triggerWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerWindowInput() {
    return this._triggerWindow;
  }
}
export interface MonitorMonitorThresholds {
  /**
  * The monitor `CRITICAL` threshold. Must be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#critical Monitor#critical}
  */
  readonly critical?: string;
  /**
  * The monitor `CRITICAL` recovery threshold. Must be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#critical_recovery Monitor#critical_recovery}
  */
  readonly criticalRecovery?: string;
  /**
  * The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#ok Monitor#ok}
  */
  readonly ok?: string;
  /**
  * The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#unknown Monitor#unknown}
  */
  readonly unknown?: string;
  /**
  * The monitor `WARNING` threshold. Must be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#warning Monitor#warning}
  */
  readonly warning?: string;
  /**
  * The monitor `WARNING` recovery threshold. Must be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#warning_recovery Monitor#warning_recovery}
  */
  readonly warningRecovery?: string;
}

export function monitorMonitorThresholdsToTerraform(struct?: MonitorMonitorThresholdsOutputReference | MonitorMonitorThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktn.stringToTerraform(struct!.critical),
    critical_recovery: cdktn.stringToTerraform(struct!.criticalRecovery),
    ok: cdktn.stringToTerraform(struct!.ok),
    unknown: cdktn.stringToTerraform(struct!.unknown),
    warning: cdktn.stringToTerraform(struct!.warning),
    warning_recovery: cdktn.stringToTerraform(struct!.warningRecovery),
  }
}


export function monitorMonitorThresholdsToHclTerraform(struct?: MonitorMonitorThresholdsOutputReference | MonitorMonitorThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktn.stringToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical_recovery: {
      value: cdktn.stringToHclTerraform(struct!.criticalRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ok: {
      value: cdktn.stringToHclTerraform(struct!.ok),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown: {
      value: cdktn.stringToHclTerraform(struct!.unknown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning: {
      value: cdktn.stringToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_recovery: {
      value: cdktn.stringToHclTerraform(struct!.warningRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorMonitorThresholdsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorMonitorThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._criticalRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalRecovery = this._criticalRecovery;
    }
    if (this._ok !== undefined) {
      hasAnyValues = true;
      internalValueResult.ok = this._ok;
    }
    if (this._unknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknown = this._unknown;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    if (this._warningRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRecovery = this._warningRecovery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorMonitorThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._criticalRecovery = undefined;
      this._ok = undefined;
      this._unknown = undefined;
      this._warning = undefined;
      this._warningRecovery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._criticalRecovery = value.criticalRecovery;
      this._ok = value.ok;
      this._unknown = value.unknown;
      this._warning = value.warning;
      this._warningRecovery = value.warningRecovery;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: string; 
  public get critical() {
    return this.getStringAttribute('critical');
  }
  public set critical(value: string) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // critical_recovery - computed: false, optional: true, required: false
  private _criticalRecovery?: string; 
  public get criticalRecovery() {
    return this.getStringAttribute('critical_recovery');
  }
  public set criticalRecovery(value: string) {
    this._criticalRecovery = value;
  }
  public resetCriticalRecovery() {
    this._criticalRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalRecoveryInput() {
    return this._criticalRecovery;
  }

  // ok - computed: false, optional: true, required: false
  private _ok?: string; 
  public get ok() {
    return this.getStringAttribute('ok');
  }
  public set ok(value: string) {
    this._ok = value;
  }
  public resetOk() {
    this._ok = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okInput() {
    return this._ok;
  }

  // unknown - computed: false, optional: true, required: false
  private _unknown?: string; 
  public get unknown() {
    return this.getStringAttribute('unknown');
  }
  public set unknown(value: string) {
    this._unknown = value;
  }
  public resetUnknown() {
    this._unknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownInput() {
    return this._unknown;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // warning_recovery - computed: false, optional: true, required: false
  private _warningRecovery?: string; 
  public get warningRecovery() {
    return this.getStringAttribute('warning_recovery');
  }
  public set warningRecovery(value: string) {
    this._warningRecovery = value;
  }
  public resetWarningRecovery() {
    this._warningRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRecoveryInput() {
    return this._warningRecovery;
  }
}
export interface MonitorSchedulingOptionsCustomScheduleRecurrence {
  /**
  * Must be a valid `rrule`. See API docs for supported fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#rrule Monitor#rrule}
  */
  readonly rrule: string;
  /**
  * Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#start Monitor#start}
  */
  readonly start?: string;
  /**
  * 'tz database' format. Example: `America/New_York` or `UTC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#timezone Monitor#timezone}
  */
  readonly timezone: string;
}

export function monitorSchedulingOptionsCustomScheduleRecurrenceToTerraform(struct?: MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference | MonitorSchedulingOptionsCustomScheduleRecurrence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rrule: cdktn.stringToTerraform(struct!.rrule),
    start: cdktn.stringToTerraform(struct!.start),
    timezone: cdktn.stringToTerraform(struct!.timezone),
  }
}


export function monitorSchedulingOptionsCustomScheduleRecurrenceToHclTerraform(struct?: MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference | MonitorSchedulingOptionsCustomScheduleRecurrence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rrule: {
      value: cdktn.stringToHclTerraform(struct!.rrule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorSchedulingOptionsCustomScheduleRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rrule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrule = this._rrule;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSchedulingOptionsCustomScheduleRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rrule = undefined;
      this._start = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rrule = value.rrule;
      this._start = value.start;
      this._timezone = value.timezone;
    }
  }

  // rrule - computed: false, optional: false, required: true
  private _rrule?: string; 
  public get rrule() {
    return this.getStringAttribute('rrule');
  }
  public set rrule(value: string) {
    this._rrule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rruleInput() {
    return this._rrule;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface MonitorSchedulingOptionsCustomSchedule {
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#recurrence Monitor#recurrence}
  */
  readonly recurrence: MonitorSchedulingOptionsCustomScheduleRecurrence;
}

export function monitorSchedulingOptionsCustomScheduleToTerraform(struct?: MonitorSchedulingOptionsCustomScheduleOutputReference | MonitorSchedulingOptionsCustomSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurrence: monitorSchedulingOptionsCustomScheduleRecurrenceToTerraform(struct!.recurrence),
  }
}


export function monitorSchedulingOptionsCustomScheduleToHclTerraform(struct?: MonitorSchedulingOptionsCustomScheduleOutputReference | MonitorSchedulingOptionsCustomSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurrence: {
      value: monitorSchedulingOptionsCustomScheduleRecurrenceToHclTerraform(struct!.recurrence),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorSchedulingOptionsCustomScheduleRecurrenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorSchedulingOptionsCustomScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorSchedulingOptionsCustomSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSchedulingOptionsCustomSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recurrence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recurrence.internalValue = value.recurrence;
    }
  }

  // recurrence - computed: false, optional: false, required: true
  private _recurrence = new MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference(this, "recurrence");
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: MonitorSchedulingOptionsCustomScheduleRecurrence) {
    this._recurrence.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }
}
export interface MonitorSchedulingOptionsEvaluationWindow {
  /**
  * The time of the day at which a one day cumulative evaluation window starts. Must be defined in UTC time in `HH:mm` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#day_starts Monitor#day_starts}
  */
  readonly dayStarts?: string;
  /**
  * The minute of the hour at which a one hour cumulative evaluation window starts. Must be between 0 and 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#hour_starts Monitor#hour_starts}
  */
  readonly hourStarts?: number;
  /**
  * The day of the month at which a one month cumulative evaluation window starts. Must be a value of 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#month_starts Monitor#month_starts}
  */
  readonly monthStarts?: number;
  /**
  * The timezone for the cumulative evaluation window start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#timezone Monitor#timezone}
  */
  readonly timezone?: string;
}

export function monitorSchedulingOptionsEvaluationWindowToTerraform(struct?: MonitorSchedulingOptionsEvaluationWindowOutputReference | MonitorSchedulingOptionsEvaluationWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_starts: cdktn.stringToTerraform(struct!.dayStarts),
    hour_starts: cdktn.numberToTerraform(struct!.hourStarts),
    month_starts: cdktn.numberToTerraform(struct!.monthStarts),
    timezone: cdktn.stringToTerraform(struct!.timezone),
  }
}


export function monitorSchedulingOptionsEvaluationWindowToHclTerraform(struct?: MonitorSchedulingOptionsEvaluationWindowOutputReference | MonitorSchedulingOptionsEvaluationWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_starts: {
      value: cdktn.stringToHclTerraform(struct!.dayStarts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_starts: {
      value: cdktn.numberToHclTerraform(struct!.hourStarts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month_starts: {
      value: cdktn.numberToHclTerraform(struct!.monthStarts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorSchedulingOptionsEvaluationWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorSchedulingOptionsEvaluationWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayStarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayStarts = this._dayStarts;
    }
    if (this._hourStarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourStarts = this._hourStarts;
    }
    if (this._monthStarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthStarts = this._monthStarts;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSchedulingOptionsEvaluationWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayStarts = undefined;
      this._hourStarts = undefined;
      this._monthStarts = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayStarts = value.dayStarts;
      this._hourStarts = value.hourStarts;
      this._monthStarts = value.monthStarts;
      this._timezone = value.timezone;
    }
  }

  // day_starts - computed: false, optional: true, required: false
  private _dayStarts?: string; 
  public get dayStarts() {
    return this.getStringAttribute('day_starts');
  }
  public set dayStarts(value: string) {
    this._dayStarts = value;
  }
  public resetDayStarts() {
    this._dayStarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayStartsInput() {
    return this._dayStarts;
  }

  // hour_starts - computed: false, optional: true, required: false
  private _hourStarts?: number; 
  public get hourStarts() {
    return this.getNumberAttribute('hour_starts');
  }
  public set hourStarts(value: number) {
    this._hourStarts = value;
  }
  public resetHourStarts() {
    this._hourStarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourStartsInput() {
    return this._hourStarts;
  }

  // month_starts - computed: false, optional: true, required: false
  private _monthStarts?: number; 
  public get monthStarts() {
    return this.getNumberAttribute('month_starts');
  }
  public set monthStarts(value: number) {
    this._monthStarts = value;
  }
  public resetMonthStarts() {
    this._monthStarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthStartsInput() {
    return this._monthStarts;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface MonitorSchedulingOptions {
  /**
  * custom_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#custom_schedule Monitor#custom_schedule}
  */
  readonly customSchedule?: MonitorSchedulingOptionsCustomSchedule;
  /**
  * evaluation_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#evaluation_window Monitor#evaluation_window}
  */
  readonly evaluationWindow?: MonitorSchedulingOptionsEvaluationWindow;
}

export function monitorSchedulingOptionsToTerraform(struct?: MonitorSchedulingOptionsOutputReference | MonitorSchedulingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_schedule: monitorSchedulingOptionsCustomScheduleToTerraform(struct!.customSchedule),
    evaluation_window: monitorSchedulingOptionsEvaluationWindowToTerraform(struct!.evaluationWindow),
  }
}


export function monitorSchedulingOptionsToHclTerraform(struct?: MonitorSchedulingOptionsOutputReference | MonitorSchedulingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_schedule: {
      value: monitorSchedulingOptionsCustomScheduleToHclTerraform(struct!.customSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorSchedulingOptionsCustomScheduleList",
    },
    evaluation_window: {
      value: monitorSchedulingOptionsEvaluationWindowToHclTerraform(struct!.evaluationWindow),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorSchedulingOptionsEvaluationWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorSchedulingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorSchedulingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSchedule = this._customSchedule?.internalValue;
    }
    if (this._evaluationWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationWindow = this._evaluationWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSchedulingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSchedule.internalValue = undefined;
      this._evaluationWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSchedule.internalValue = value.customSchedule;
      this._evaluationWindow.internalValue = value.evaluationWindow;
    }
  }

  // custom_schedule - computed: false, optional: true, required: false
  private _customSchedule = new MonitorSchedulingOptionsCustomScheduleOutputReference(this, "custom_schedule");
  public get customSchedule() {
    return this._customSchedule;
  }
  public putCustomSchedule(value: MonitorSchedulingOptionsCustomSchedule) {
    this._customSchedule.internalValue = value;
  }
  public resetCustomSchedule() {
    this._customSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customScheduleInput() {
    return this._customSchedule.internalValue;
  }

  // evaluation_window - computed: false, optional: true, required: false
  private _evaluationWindow = new MonitorSchedulingOptionsEvaluationWindowOutputReference(this, "evaluation_window");
  public get evaluationWindow() {
    return this._evaluationWindow;
  }
  public putEvaluationWindow(value: MonitorSchedulingOptionsEvaluationWindow) {
    this._evaluationWindow.internalValue = value;
  }
  public resetEvaluationWindow() {
    this._evaluationWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationWindowInput() {
    return this._evaluationWindow.internalValue;
  }
}
export interface MonitorVariablesCloudCostQuery {
  /**
  * The aggregation methods available for cloud cost queries. Valid values are `avg`, `sum`, `max`, `min`, `last`, `area`, `l2norm`, `percentile`, `stddev`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#aggregator Monitor#aggregator}
  */
  readonly aggregator: string;
  /**
  * The data source for cloud cost queries. Valid values are `metrics`, `cloud_cost`, `datadog_usage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * The cloud cost query definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
}

export function monitorVariablesCloudCostQueryToTerraform(struct?: MonitorVariablesCloudCostQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktn.stringToTerraform(struct!.aggregator),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function monitorVariablesCloudCostQueryToHclTerraform(struct?: MonitorVariablesCloudCostQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator: {
      value: cdktn.stringToHclTerraform(struct!.aggregator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesCloudCostQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesCloudCostQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesCloudCostQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregator = undefined;
      this._dataSource = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregator = value.aggregator;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._query = value.query;
    }
  }

  // aggregator - computed: false, optional: false, required: true
  private _aggregator?: string; 
  public get aggregator() {
    return this.getStringAttribute('aggregator');
  }
  public set aggregator(value: string) {
    this._aggregator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class MonitorVariablesCloudCostQueryList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesCloudCostQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorVariablesCloudCostQueryOutputReference {
    return new MonitorVariablesCloudCostQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesDataQualityQueryMonitorOptions {
  /**
  * Crontab expression to override the default schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#crontab_override Monitor#crontab_override}
  */
  readonly crontabOverride?: string;
  /**
  * Custom SQL query for the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#custom_sql Monitor#custom_sql}
  */
  readonly customSql?: string;
  /**
  * Custom WHERE clause for the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#custom_where Monitor#custom_where}
  */
  readonly customWhere?: string;
  /**
  * Columns to group results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#group_by_columns Monitor#group_by_columns}
  */
  readonly groupByColumns?: string[];
  /**
  * Override for the model type. Valid values are `freshness`, `percentage`, `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#model_type_override Monitor#model_type_override}
  */
  readonly modelTypeOverride?: string;
}

export function monitorVariablesDataQualityQueryMonitorOptionsToTerraform(struct?: MonitorVariablesDataQualityQueryMonitorOptionsOutputReference | MonitorVariablesDataQualityQueryMonitorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crontab_override: cdktn.stringToTerraform(struct!.crontabOverride),
    custom_sql: cdktn.stringToTerraform(struct!.customSql),
    custom_where: cdktn.stringToTerraform(struct!.customWhere),
    group_by_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupByColumns),
    model_type_override: cdktn.stringToTerraform(struct!.modelTypeOverride),
  }
}


export function monitorVariablesDataQualityQueryMonitorOptionsToHclTerraform(struct?: MonitorVariablesDataQualityQueryMonitorOptionsOutputReference | MonitorVariablesDataQualityQueryMonitorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crontab_override: {
      value: cdktn.stringToHclTerraform(struct!.crontabOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_sql: {
      value: cdktn.stringToHclTerraform(struct!.customSql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_where: {
      value: cdktn.stringToHclTerraform(struct!.customWhere),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupByColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    model_type_override: {
      value: cdktn.stringToHclTerraform(struct!.modelTypeOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesDataQualityQueryMonitorOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesDataQualityQueryMonitorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crontabOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.crontabOverride = this._crontabOverride;
    }
    if (this._customSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSql = this._customSql;
    }
    if (this._customWhere !== undefined) {
      hasAnyValues = true;
      internalValueResult.customWhere = this._customWhere;
    }
    if (this._groupByColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByColumns = this._groupByColumns;
    }
    if (this._modelTypeOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelTypeOverride = this._modelTypeOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesDataQualityQueryMonitorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crontabOverride = undefined;
      this._customSql = undefined;
      this._customWhere = undefined;
      this._groupByColumns = undefined;
      this._modelTypeOverride = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crontabOverride = value.crontabOverride;
      this._customSql = value.customSql;
      this._customWhere = value.customWhere;
      this._groupByColumns = value.groupByColumns;
      this._modelTypeOverride = value.modelTypeOverride;
    }
  }

  // crontab_override - computed: false, optional: true, required: false
  private _crontabOverride?: string; 
  public get crontabOverride() {
    return this.getStringAttribute('crontab_override');
  }
  public set crontabOverride(value: string) {
    this._crontabOverride = value;
  }
  public resetCrontabOverride() {
    this._crontabOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crontabOverrideInput() {
    return this._crontabOverride;
  }

  // custom_sql - computed: false, optional: true, required: false
  private _customSql?: string; 
  public get customSql() {
    return this.getStringAttribute('custom_sql');
  }
  public set customSql(value: string) {
    this._customSql = value;
  }
  public resetCustomSql() {
    this._customSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSqlInput() {
    return this._customSql;
  }

  // custom_where - computed: false, optional: true, required: false
  private _customWhere?: string; 
  public get customWhere() {
    return this.getStringAttribute('custom_where');
  }
  public set customWhere(value: string) {
    this._customWhere = value;
  }
  public resetCustomWhere() {
    this._customWhere = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customWhereInput() {
    return this._customWhere;
  }

  // group_by_columns - computed: false, optional: true, required: false
  private _groupByColumns?: string[]; 
  public get groupByColumns() {
    return this.getListAttribute('group_by_columns');
  }
  public set groupByColumns(value: string[]) {
    this._groupByColumns = value;
  }
  public resetGroupByColumns() {
    this._groupByColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByColumnsInput() {
    return this._groupByColumns;
  }

  // model_type_override - computed: false, optional: true, required: false
  private _modelTypeOverride?: string; 
  public get modelTypeOverride() {
    return this.getStringAttribute('model_type_override');
  }
  public set modelTypeOverride(value: string) {
    this._modelTypeOverride = value;
  }
  public resetModelTypeOverride() {
    this._modelTypeOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeOverrideInput() {
    return this._modelTypeOverride;
  }
}
export interface MonitorVariablesDataQualityQuery {
  /**
  * The data source for data quality queries. Valid value is `data_quality_metrics`. Valid values are `data_quality_metrics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * Filter expression used to match on data entities. Uses AAstra query syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#filter Monitor#filter}
  */
  readonly filter: string;
  /**
  * Optional grouping fields for aggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#group_by Monitor#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The measure to query. Common values include `bytes`, `cardinality`, `custom`, `freshness`, `max`, `mean`, `min`, `nullness`, `percent_negative`, `percent_zero`, `row_count`, `stddev`, `sum`, `uniqueness`. Additional values may be supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#measure Monitor#measure}
  */
  readonly measure: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * Schema version for the data quality query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#schema_version Monitor#schema_version}
  */
  readonly schemaVersion?: string;
  /**
  * Optional scoping expression to further filter metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#scope Monitor#scope}
  */
  readonly scope?: string;
  /**
  * monitor_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#monitor_options Monitor#monitor_options}
  */
  readonly monitorOptions?: MonitorVariablesDataQualityQueryMonitorOptions;
}

export function monitorVariablesDataQualityQueryToTerraform(struct?: MonitorVariablesDataQualityQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    filter: cdktn.stringToTerraform(struct!.filter),
    group_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupBy),
    measure: cdktn.stringToTerraform(struct!.measure),
    name: cdktn.stringToTerraform(struct!.name),
    schema_version: cdktn.stringToTerraform(struct!.schemaVersion),
    scope: cdktn.stringToTerraform(struct!.scope),
    monitor_options: monitorVariablesDataQualityQueryMonitorOptionsToTerraform(struct!.monitorOptions),
  }
}


export function monitorVariablesDataQualityQueryToHclTerraform(struct?: MonitorVariablesDataQualityQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    measure: {
      value: cdktn.stringToHclTerraform(struct!.measure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_version: {
      value: cdktn.stringToHclTerraform(struct!.schemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_options: {
      value: monitorVariablesDataQualityQueryMonitorOptionsToHclTerraform(struct!.monitorOptions),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesDataQualityQueryMonitorOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesDataQualityQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesDataQualityQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._measure !== undefined) {
      hasAnyValues = true;
      internalValueResult.measure = this._measure;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaVersion = this._schemaVersion;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._monitorOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorOptions = this._monitorOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesDataQualityQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSource = undefined;
      this._filter = undefined;
      this._groupBy = undefined;
      this._measure = undefined;
      this._name = undefined;
      this._schemaVersion = undefined;
      this._scope = undefined;
      this._monitorOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSource = value.dataSource;
      this._filter = value.filter;
      this._groupBy = value.groupBy;
      this._measure = value.measure;
      this._name = value.name;
      this._schemaVersion = value.schemaVersion;
      this._scope = value.scope;
      this._monitorOptions.internalValue = value.monitorOptions;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // measure - computed: false, optional: false, required: true
  private _measure?: string; 
  public get measure() {
    return this.getStringAttribute('measure');
  }
  public set measure(value: string) {
    this._measure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureInput() {
    return this._measure;
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

  // schema_version - computed: false, optional: true, required: false
  private _schemaVersion?: string; 
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }
  public set schemaVersion(value: string) {
    this._schemaVersion = value;
  }
  public resetSchemaVersion() {
    this._schemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionInput() {
    return this._schemaVersion;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // monitor_options - computed: false, optional: true, required: false
  private _monitorOptions = new MonitorVariablesDataQualityQueryMonitorOptionsOutputReference(this, "monitor_options");
  public get monitorOptions() {
    return this._monitorOptions;
  }
  public putMonitorOptions(value: MonitorVariablesDataQualityQueryMonitorOptions) {
    this._monitorOptions.internalValue = value;
  }
  public resetMonitorOptions() {
    this._monitorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorOptionsInput() {
    return this._monitorOptions.internalValue;
  }
}

export class MonitorVariablesDataQualityQueryList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesDataQualityQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorVariablesDataQualityQueryOutputReference {
    return new MonitorVariablesDataQualityQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#interval Monitor#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
}

export function monitorVariablesEventQueryComputeToTerraform(struct?: MonitorVariablesEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
  }
}


export function monitorVariablesEventQueryComputeToHclTerraform(struct?: MonitorVariablesEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktn.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesEventQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesEventQueryCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesEventQueryCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._interval = value.interval;
      this._metric = value.metric;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}

export class MonitorVariablesEventQueryComputeList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesEventQueryCompute[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorVariablesEventQueryComputeOutputReference {
    return new MonitorVariablesEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#order Monitor#order}
  */
  readonly order?: string;
}

export function monitorVariablesEventQueryGroupBySortToTerraform(struct?: MonitorVariablesEventQueryGroupBySortOutputReference | MonitorVariablesEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function monitorVariablesEventQueryGroupBySortToHclTerraform(struct?: MonitorVariablesEventQueryGroupBySortOutputReference | MonitorVariablesEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktn.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesEventQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesEventQueryGroupBySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesEventQueryGroupBySort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metric = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metric = value.metric;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface MonitorVariablesEventQueryGroupBy {
  /**
  * The event facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#facet Monitor#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#limit Monitor#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#sort Monitor#sort}
  */
  readonly sort?: MonitorVariablesEventQueryGroupBySort;
}

export function monitorVariablesEventQueryGroupByToTerraform(struct?: MonitorVariablesEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: monitorVariablesEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function monitorVariablesEventQueryGroupByToHclTerraform(struct?: MonitorVariablesEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort: {
      value: monitorVariablesEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesEventQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesEventQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesEventQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sort.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._sort.internalValue = value.sort;
    }
  }

  // facet - computed: false, optional: false, required: true
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new MonitorVariablesEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: MonitorVariablesEventQueryGroupBySort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }
}

export class MonitorVariablesEventQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesEventQueryGroupBy[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorVariablesEventQueryGroupByOutputReference {
    return new MonitorVariablesEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
}

export function monitorVariablesEventQuerySearchToTerraform(struct?: MonitorVariablesEventQuerySearchOutputReference | MonitorVariablesEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function monitorVariablesEventQuerySearchToHclTerraform(struct?: MonitorVariablesEventQuerySearchOutputReference | MonitorVariablesEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesEventQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesEventQuerySearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface MonitorVariablesEventQuery {
  /**
  * The data source for event platform-based queries. Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`, `database_queries`, `network`, `network_path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#indexes Monitor#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#compute Monitor#compute}
  */
  readonly compute: MonitorVariablesEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#group_by Monitor#group_by}
  */
  readonly groupBy?: MonitorVariablesEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#search Monitor#search}
  */
  readonly search: MonitorVariablesEventQuerySearch;
}

export function monitorVariablesEventQueryToTerraform(struct?: MonitorVariablesEventQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    name: cdktn.stringToTerraform(struct!.name),
    compute: cdktn.listMapper(monitorVariablesEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(monitorVariablesEventQueryGroupByToTerraform, true)(struct!.groupBy),
    search: monitorVariablesEventQuerySearchToTerraform(struct!.search),
  }
}


export function monitorVariablesEventQueryToHclTerraform(struct?: MonitorVariablesEventQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.indexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute: {
      value: cdktn.listMapperHcl(monitorVariablesEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesEventQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(monitorVariablesEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesEventQueryGroupByList",
    },
    search: {
      value: monitorVariablesEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesEventQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesEventQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._indexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesEventQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSource = value.dataSource;
      this._indexes = value.indexes;
      this._name = value.name;
      this._compute.internalValue = value.compute;
      this._groupBy.internalValue = value.groupBy;
      this._search.internalValue = value.search;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes?: string[]; 
  public get indexes() {
    return this.getListAttribute('indexes');
  }
  public set indexes(value: string[]) {
    this._indexes = value;
  }
  public resetIndexes() {
    this._indexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes;
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

  // compute - computed: false, optional: false, required: true
  private _compute = new MonitorVariablesEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: MonitorVariablesEventQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new MonitorVariablesEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: MonitorVariablesEventQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // search - computed: false, optional: false, required: true
  private _search = new MonitorVariablesEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: MonitorVariablesEventQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}

export class MonitorVariablesEventQueryList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesEventQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorVariablesEventQueryOutputReference {
    return new MonitorVariablesEventQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariables {
  /**
  * cloud_cost_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#cloud_cost_query Monitor#cloud_cost_query}
  */
  readonly cloudCostQuery?: MonitorVariablesCloudCostQuery[] | cdktn.IResolvable;
  /**
  * data_quality_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#data_quality_query Monitor#data_quality_query}
  */
  readonly dataQualityQuery?: MonitorVariablesDataQualityQuery[] | cdktn.IResolvable;
  /**
  * event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#event_query Monitor#event_query}
  */
  readonly eventQuery?: MonitorVariablesEventQuery[] | cdktn.IResolvable;
}

export function monitorVariablesToTerraform(struct?: MonitorVariablesOutputReference | MonitorVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_cost_query: cdktn.listMapper(monitorVariablesCloudCostQueryToTerraform, true)(struct!.cloudCostQuery),
    data_quality_query: cdktn.listMapper(monitorVariablesDataQualityQueryToTerraform, true)(struct!.dataQualityQuery),
    event_query: cdktn.listMapper(monitorVariablesEventQueryToTerraform, true)(struct!.eventQuery),
  }
}


export function monitorVariablesToHclTerraform(struct?: MonitorVariablesOutputReference | MonitorVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_cost_query: {
      value: cdktn.listMapperHcl(monitorVariablesCloudCostQueryToHclTerraform, true)(struct!.cloudCostQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesCloudCostQueryList",
    },
    data_quality_query: {
      value: cdktn.listMapperHcl(monitorVariablesDataQualityQueryToHclTerraform, true)(struct!.dataQualityQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesDataQualityQueryList",
    },
    event_query: {
      value: cdktn.listMapperHcl(monitorVariablesEventQueryToHclTerraform, true)(struct!.eventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesEventQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCostQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCostQuery = this._cloudCostQuery?.internalValue;
    }
    if (this._dataQualityQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataQualityQuery = this._dataQualityQuery?.internalValue;
    }
    if (this._eventQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventQuery = this._eventQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudCostQuery.internalValue = undefined;
      this._dataQualityQuery.internalValue = undefined;
      this._eventQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudCostQuery.internalValue = value.cloudCostQuery;
      this._dataQualityQuery.internalValue = value.dataQualityQuery;
      this._eventQuery.internalValue = value.eventQuery;
    }
  }

  // cloud_cost_query - computed: false, optional: true, required: false
  private _cloudCostQuery = new MonitorVariablesCloudCostQueryList(this, "cloud_cost_query", false);
  public get cloudCostQuery() {
    return this._cloudCostQuery;
  }
  public putCloudCostQuery(value: MonitorVariablesCloudCostQuery[] | cdktn.IResolvable) {
    this._cloudCostQuery.internalValue = value;
  }
  public resetCloudCostQuery() {
    this._cloudCostQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCostQueryInput() {
    return this._cloudCostQuery.internalValue;
  }

  // data_quality_query - computed: false, optional: true, required: false
  private _dataQualityQuery = new MonitorVariablesDataQualityQueryList(this, "data_quality_query", false);
  public get dataQualityQuery() {
    return this._dataQualityQuery;
  }
  public putDataQualityQuery(value: MonitorVariablesDataQualityQuery[] | cdktn.IResolvable) {
    this._dataQualityQuery.internalValue = value;
  }
  public resetDataQualityQuery() {
    this._dataQualityQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityQueryInput() {
    return this._dataQualityQuery.internalValue;
  }

  // event_query - computed: false, optional: true, required: false
  private _eventQuery = new MonitorVariablesEventQueryList(this, "event_query", false);
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: MonitorVariablesEventQuery[] | cdktn.IResolvable) {
    this._eventQuery.internalValue = value;
  }
  public resetEventQuery() {
    this._eventQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventQueryInput() {
    return this._eventQuery.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor datadog_monitor}
*/
export class Monitor extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Monitor resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Monitor to import
  * @param importFromId The id of the existing Monitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Monitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor datadog_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_monitor',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.9.0',
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
    this._draftStatus = config.draftStatus;
    this._enableLogsSample = config.enableLogsSample;
    this._enableSamples = config.enableSamples;
    this._escalationMessage = config.escalationMessage;
    this._evaluationDelay = config.evaluationDelay;
    this._forceDelete = config.forceDelete;
    this._groupRetentionDuration = config.groupRetentionDuration;
    this._groupbySimpleMonitor = config.groupbySimpleMonitor;
    this._id = config.id;
    this._includeTags = config.includeTags;
    this._message = config.message;
    this._name = config.name;
    this._newGroupDelay = config.newGroupDelay;
    this._newHostDelay = config.newHostDelay;
    this._noDataTimeframe = config.noDataTimeframe;
    this._notificationPresetName = config.notificationPresetName;
    this._notifyAudit = config.notifyAudit;
    this._notifyBy = config.notifyBy;
    this._notifyNoData = config.notifyNoData;
    this._onMissingData = config.onMissingData;
    this._priority = config.priority;
    this._query = config.query;
    this._renotifyInterval = config.renotifyInterval;
    this._renotifyOccurrences = config.renotifyOccurrences;
    this._renotifyStatuses = config.renotifyStatuses;
    this._requireFullWindow = config.requireFullWindow;
    this._restrictedRoles = config.restrictedRoles;
    this._tags = config.tags;
    this._timeoutH = config.timeoutH;
    this._type = config.type;
    this._validate = config.validate;
    this._assets.internalValue = config.assets;
    this._monitorThresholdWindows.internalValue = config.monitorThresholdWindows;
    this._monitorThresholds.internalValue = config.monitorThresholds;
    this._schedulingOptions.internalValue = config.schedulingOptions;
    this._variables.internalValue = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // draft_status - computed: false, optional: true, required: false
  private _draftStatus?: string; 
  public get draftStatus() {
    return this.getStringAttribute('draft_status');
  }
  public set draftStatus(value: string) {
    this._draftStatus = value;
  }
  public resetDraftStatus() {
    this._draftStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get draftStatusInput() {
    return this._draftStatus;
  }

  // enable_logs_sample - computed: false, optional: true, required: false
  private _enableLogsSample?: boolean | cdktn.IResolvable; 
  public get enableLogsSample() {
    return this.getBooleanAttribute('enable_logs_sample');
  }
  public set enableLogsSample(value: boolean | cdktn.IResolvable) {
    this._enableLogsSample = value;
  }
  public resetEnableLogsSample() {
    this._enableLogsSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogsSampleInput() {
    return this._enableLogsSample;
  }

  // enable_samples - computed: false, optional: true, required: false
  private _enableSamples?: boolean | cdktn.IResolvable; 
  public get enableSamples() {
    return this.getBooleanAttribute('enable_samples');
  }
  public set enableSamples(value: boolean | cdktn.IResolvable) {
    this._enableSamples = value;
  }
  public resetEnableSamples() {
    this._enableSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSamplesInput() {
    return this._enableSamples;
  }

  // escalation_message - computed: false, optional: true, required: false
  private _escalationMessage?: string; 
  public get escalationMessage() {
    return this.getStringAttribute('escalation_message');
  }
  public set escalationMessage(value: string) {
    this._escalationMessage = value;
  }
  public resetEscalationMessage() {
    this._escalationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationMessageInput() {
    return this._escalationMessage;
  }

  // evaluation_delay - computed: true, optional: true, required: false
  private _evaluationDelay?: number; 
  public get evaluationDelay() {
    return this.getNumberAttribute('evaluation_delay');
  }
  public set evaluationDelay(value: number) {
    this._evaluationDelay = value;
  }
  public resetEvaluationDelay() {
    this._evaluationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationDelayInput() {
    return this._evaluationDelay;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktn.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktn.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // group_retention_duration - computed: false, optional: true, required: false
  private _groupRetentionDuration?: string; 
  public get groupRetentionDuration() {
    return this.getStringAttribute('group_retention_duration');
  }
  public set groupRetentionDuration(value: string) {
    this._groupRetentionDuration = value;
  }
  public resetGroupRetentionDuration() {
    this._groupRetentionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRetentionDurationInput() {
    return this._groupRetentionDuration;
  }

  // groupby_simple_monitor - computed: false, optional: true, required: false
  private _groupbySimpleMonitor?: boolean | cdktn.IResolvable; 
  public get groupbySimpleMonitor() {
    return this.getBooleanAttribute('groupby_simple_monitor');
  }
  public set groupbySimpleMonitor(value: boolean | cdktn.IResolvable) {
    this._groupbySimpleMonitor = value;
  }
  public resetGroupbySimpleMonitor() {
    this._groupbySimpleMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupbySimpleMonitorInput() {
    return this._groupbySimpleMonitor;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_tags - computed: false, optional: true, required: false
  private _includeTags?: boolean | cdktn.IResolvable; 
  public get includeTags() {
    return this.getBooleanAttribute('include_tags');
  }
  public set includeTags(value: boolean | cdktn.IResolvable) {
    this._includeTags = value;
  }
  public resetIncludeTags() {
    this._includeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagsInput() {
    return this._includeTags;
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // new_group_delay - computed: false, optional: true, required: false
  private _newGroupDelay?: number; 
  public get newGroupDelay() {
    return this.getNumberAttribute('new_group_delay');
  }
  public set newGroupDelay(value: number) {
    this._newGroupDelay = value;
  }
  public resetNewGroupDelay() {
    this._newGroupDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newGroupDelayInput() {
    return this._newGroupDelay;
  }

  // new_host_delay - computed: false, optional: true, required: false
  private _newHostDelay?: number; 
  public get newHostDelay() {
    return this.getNumberAttribute('new_host_delay');
  }
  public set newHostDelay(value: number) {
    this._newHostDelay = value;
  }
  public resetNewHostDelay() {
    this._newHostDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newHostDelayInput() {
    return this._newHostDelay;
  }

  // no_data_timeframe - computed: false, optional: true, required: false
  private _noDataTimeframe?: number; 
  public get noDataTimeframe() {
    return this.getNumberAttribute('no_data_timeframe');
  }
  public set noDataTimeframe(value: number) {
    this._noDataTimeframe = value;
  }
  public resetNoDataTimeframe() {
    this._noDataTimeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataTimeframeInput() {
    return this._noDataTimeframe;
  }

  // notification_preset_name - computed: false, optional: true, required: false
  private _notificationPresetName?: string; 
  public get notificationPresetName() {
    return this.getStringAttribute('notification_preset_name');
  }
  public set notificationPresetName(value: string) {
    this._notificationPresetName = value;
  }
  public resetNotificationPresetName() {
    this._notificationPresetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPresetNameInput() {
    return this._notificationPresetName;
  }

  // notify_audit - computed: false, optional: true, required: false
  private _notifyAudit?: boolean | cdktn.IResolvable; 
  public get notifyAudit() {
    return this.getBooleanAttribute('notify_audit');
  }
  public set notifyAudit(value: boolean | cdktn.IResolvable) {
    this._notifyAudit = value;
  }
  public resetNotifyAudit() {
    this._notifyAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAuditInput() {
    return this._notifyAudit;
  }

  // notify_by - computed: false, optional: true, required: false
  private _notifyBy?: string[]; 
  public get notifyBy() {
    return cdktn.Fn.tolist(this.getListAttribute('notify_by'));
  }
  public set notifyBy(value: string[]) {
    this._notifyBy = value;
  }
  public resetNotifyBy() {
    this._notifyBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyByInput() {
    return this._notifyBy;
  }

  // notify_no_data - computed: false, optional: true, required: false
  private _notifyNoData?: boolean | cdktn.IResolvable; 
  public get notifyNoData() {
    return this.getBooleanAttribute('notify_no_data');
  }
  public set notifyNoData(value: boolean | cdktn.IResolvable) {
    this._notifyNoData = value;
  }
  public resetNotifyNoData() {
    this._notifyNoData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyNoDataInput() {
    return this._notifyNoData;
  }

  // on_missing_data - computed: false, optional: true, required: false
  private _onMissingData?: string; 
  public get onMissingData() {
    return this.getStringAttribute('on_missing_data');
  }
  public set onMissingData(value: string) {
    this._onMissingData = value;
  }
  public resetOnMissingData() {
    this._onMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMissingDataInput() {
    return this._onMissingData;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // renotify_interval - computed: false, optional: true, required: false
  private _renotifyInterval?: number; 
  public get renotifyInterval() {
    return this.getNumberAttribute('renotify_interval');
  }
  public set renotifyInterval(value: number) {
    this._renotifyInterval = value;
  }
  public resetRenotifyInterval() {
    this._renotifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyIntervalInput() {
    return this._renotifyInterval;
  }

  // renotify_occurrences - computed: false, optional: true, required: false
  private _renotifyOccurrences?: number; 
  public get renotifyOccurrences() {
    return this.getNumberAttribute('renotify_occurrences');
  }
  public set renotifyOccurrences(value: number) {
    this._renotifyOccurrences = value;
  }
  public resetRenotifyOccurrences() {
    this._renotifyOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyOccurrencesInput() {
    return this._renotifyOccurrences;
  }

  // renotify_statuses - computed: false, optional: true, required: false
  private _renotifyStatuses?: string[]; 
  public get renotifyStatuses() {
    return cdktn.Fn.tolist(this.getListAttribute('renotify_statuses'));
  }
  public set renotifyStatuses(value: string[]) {
    this._renotifyStatuses = value;
  }
  public resetRenotifyStatuses() {
    this._renotifyStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyStatusesInput() {
    return this._renotifyStatuses;
  }

  // require_full_window - computed: false, optional: true, required: false
  private _requireFullWindow?: boolean | cdktn.IResolvable; 
  public get requireFullWindow() {
    return this.getBooleanAttribute('require_full_window');
  }
  public set requireFullWindow(value: boolean | cdktn.IResolvable) {
    this._requireFullWindow = value;
  }
  public resetRequireFullWindow() {
    this._requireFullWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireFullWindowInput() {
    return this._requireFullWindow;
  }

  // restricted_roles - computed: true, optional: true, required: false
  private _restrictedRoles?: string[]; 
  public get restrictedRoles() {
    return cdktn.Fn.tolist(this.getListAttribute('restricted_roles'));
  }
  public set restrictedRoles(value: string[]) {
    this._restrictedRoles = value;
  }
  public resetRestrictedRoles() {
    this._restrictedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedRolesInput() {
    return this._restrictedRoles;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktn.Fn.tolist(this.getListAttribute('tags'));
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

  // timeout_h - computed: false, optional: true, required: false
  private _timeoutH?: number; 
  public get timeoutH() {
    return this.getNumberAttribute('timeout_h');
  }
  public set timeoutH(value: number) {
    this._timeoutH = value;
  }
  public resetTimeoutH() {
    this._timeoutH = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutHInput() {
    return this._timeoutH;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktn.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktn.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // assets - computed: false, optional: true, required: false
  private _assets = new MonitorAssetsList(this, "assets", false);
  public get assets() {
    return this._assets;
  }
  public putAssets(value: MonitorAssets[] | cdktn.IResolvable) {
    this._assets.internalValue = value;
  }
  public resetAssets() {
    this._assets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsInput() {
    return this._assets.internalValue;
  }

  // monitor_threshold_windows - computed: false, optional: true, required: false
  private _monitorThresholdWindows = new MonitorMonitorThresholdWindowsOutputReference(this, "monitor_threshold_windows");
  public get monitorThresholdWindows() {
    return this._monitorThresholdWindows;
  }
  public putMonitorThresholdWindows(value: MonitorMonitorThresholdWindows) {
    this._monitorThresholdWindows.internalValue = value;
  }
  public resetMonitorThresholdWindows() {
    this._monitorThresholdWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorThresholdWindowsInput() {
    return this._monitorThresholdWindows.internalValue;
  }

  // monitor_thresholds - computed: false, optional: true, required: false
  private _monitorThresholds = new MonitorMonitorThresholdsOutputReference(this, "monitor_thresholds");
  public get monitorThresholds() {
    return this._monitorThresholds;
  }
  public putMonitorThresholds(value: MonitorMonitorThresholds) {
    this._monitorThresholds.internalValue = value;
  }
  public resetMonitorThresholds() {
    this._monitorThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorThresholdsInput() {
    return this._monitorThresholds.internalValue;
  }

  // scheduling_options - computed: false, optional: true, required: false
  private _schedulingOptions = new MonitorSchedulingOptionsOutputReference(this, "scheduling_options");
  public get schedulingOptions() {
    return this._schedulingOptions;
  }
  public putSchedulingOptions(value: MonitorSchedulingOptions) {
    this._schedulingOptions.internalValue = value;
  }
  public resetSchedulingOptions() {
    this._schedulingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingOptionsInput() {
    return this._schedulingOptions.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new MonitorVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: MonitorVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      draft_status: cdktn.stringToTerraform(this._draftStatus),
      enable_logs_sample: cdktn.booleanToTerraform(this._enableLogsSample),
      enable_samples: cdktn.booleanToTerraform(this._enableSamples),
      escalation_message: cdktn.stringToTerraform(this._escalationMessage),
      evaluation_delay: cdktn.numberToTerraform(this._evaluationDelay),
      force_delete: cdktn.booleanToTerraform(this._forceDelete),
      group_retention_duration: cdktn.stringToTerraform(this._groupRetentionDuration),
      groupby_simple_monitor: cdktn.booleanToTerraform(this._groupbySimpleMonitor),
      id: cdktn.stringToTerraform(this._id),
      include_tags: cdktn.booleanToTerraform(this._includeTags),
      message: cdktn.stringToTerraform(this._message),
      name: cdktn.stringToTerraform(this._name),
      new_group_delay: cdktn.numberToTerraform(this._newGroupDelay),
      new_host_delay: cdktn.numberToTerraform(this._newHostDelay),
      no_data_timeframe: cdktn.numberToTerraform(this._noDataTimeframe),
      notification_preset_name: cdktn.stringToTerraform(this._notificationPresetName),
      notify_audit: cdktn.booleanToTerraform(this._notifyAudit),
      notify_by: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notifyBy),
      notify_no_data: cdktn.booleanToTerraform(this._notifyNoData),
      on_missing_data: cdktn.stringToTerraform(this._onMissingData),
      priority: cdktn.stringToTerraform(this._priority),
      query: cdktn.stringToTerraform(this._query),
      renotify_interval: cdktn.numberToTerraform(this._renotifyInterval),
      renotify_occurrences: cdktn.numberToTerraform(this._renotifyOccurrences),
      renotify_statuses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._renotifyStatuses),
      require_full_window: cdktn.booleanToTerraform(this._requireFullWindow),
      restricted_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._restrictedRoles),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
      timeout_h: cdktn.numberToTerraform(this._timeoutH),
      type: cdktn.stringToTerraform(this._type),
      validate: cdktn.booleanToTerraform(this._validate),
      assets: cdktn.listMapper(monitorAssetsToTerraform, true)(this._assets.internalValue),
      monitor_threshold_windows: monitorMonitorThresholdWindowsToTerraform(this._monitorThresholdWindows.internalValue),
      monitor_thresholds: monitorMonitorThresholdsToTerraform(this._monitorThresholds.internalValue),
      scheduling_options: monitorSchedulingOptionsToTerraform(this._schedulingOptions.internalValue),
      variables: monitorVariablesToTerraform(this._variables.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      draft_status: {
        value: cdktn.stringToHclTerraform(this._draftStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_logs_sample: {
        value: cdktn.booleanToHclTerraform(this._enableLogsSample),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_samples: {
        value: cdktn.booleanToHclTerraform(this._enableSamples),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      escalation_message: {
        value: cdktn.stringToHclTerraform(this._escalationMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation_delay: {
        value: cdktn.numberToHclTerraform(this._evaluationDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_delete: {
        value: cdktn.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_retention_duration: {
        value: cdktn.stringToHclTerraform(this._groupRetentionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupby_simple_monitor: {
        value: cdktn.booleanToHclTerraform(this._groupbySimpleMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_tags: {
        value: cdktn.booleanToHclTerraform(this._includeTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      message: {
        value: cdktn.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_group_delay: {
        value: cdktn.numberToHclTerraform(this._newGroupDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      new_host_delay: {
        value: cdktn.numberToHclTerraform(this._newHostDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_data_timeframe: {
        value: cdktn.numberToHclTerraform(this._noDataTimeframe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notification_preset_name: {
        value: cdktn.stringToHclTerraform(this._notificationPresetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_audit: {
        value: cdktn.booleanToHclTerraform(this._notifyAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_by: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notifyBy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      notify_no_data: {
        value: cdktn.booleanToHclTerraform(this._notifyNoData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_missing_data: {
        value: cdktn.stringToHclTerraform(this._onMissingData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktn.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renotify_interval: {
        value: cdktn.numberToHclTerraform(this._renotifyInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renotify_occurrences: {
        value: cdktn.numberToHclTerraform(this._renotifyOccurrences),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renotify_statuses: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._renotifyStatuses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      require_full_window: {
        value: cdktn.booleanToHclTerraform(this._requireFullWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restricted_roles: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._restrictedRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeout_h: {
        value: cdktn.numberToHclTerraform(this._timeoutH),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate: {
        value: cdktn.booleanToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assets: {
        value: cdktn.listMapperHcl(monitorAssetsToHclTerraform, true)(this._assets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAssetsList",
      },
      monitor_threshold_windows: {
        value: monitorMonitorThresholdWindowsToHclTerraform(this._monitorThresholdWindows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorMonitorThresholdWindowsList",
      },
      monitor_thresholds: {
        value: monitorMonitorThresholdsToHclTerraform(this._monitorThresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorMonitorThresholdsList",
      },
      scheduling_options: {
        value: monitorSchedulingOptionsToHclTerraform(this._schedulingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorSchedulingOptionsList",
      },
      variables: {
        value: monitorVariablesToHclTerraform(this._variables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorVariablesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
