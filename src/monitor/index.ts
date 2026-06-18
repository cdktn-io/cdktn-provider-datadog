/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MonitorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Indicates whether the monitor is in a draft or published state. When set to `draft`, the monitor appears as Draft and does not send notifications. When set to `published`, the monitor is active, and it evaluates conditions and sends notifications as configured. Valid values are `draft`, `published`. Defaults to `"published"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#draft_status Monitor#draft_status}
  */
  readonly draftStatus?: string;
  /**
  * A boolean indicating whether or not to include a list of log values which triggered the alert. This is only used by log monitors. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#enable_logs_sample Monitor#enable_logs_sample}
  */
  readonly enableLogsSample?: boolean | cdktn.IResolvable;
  /**
  * Whether or not a list of samples which triggered the alert is included. This is only used by CI Test and Pipeline monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#enable_samples Monitor#enable_samples}
  */
  readonly enableSamples?: boolean | cdktn.IResolvable;
  /**
  * A message to include with a re-notification. Supports the `@username` notification allowed elsewhere.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#escalation_message Monitor#escalation_message}
  */
  readonly escalationMessage?: string;
  /**
  * (Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer.
  * 
  * For example, if the value is set to `300` (5min), the `timeframe` is set to `last_5m` and the time is 7:00, the monitor will evaluate data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor will always have data during evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#evaluation_delay Monitor#evaluation_delay}
  */
  readonly evaluationDelay?: number;
  /**
  * A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#force_delete Monitor#force_delete}
  */
  readonly forceDelete?: boolean | cdktn.IResolvable;
  /**
  * The time span after which groups with missing data are dropped from the monitor state. The minimum value is one hour, and the maximum value is 72 hours. Example values are: 60m, 1h, and 2d. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#group_retention_duration Monitor#group_retention_duration}
  */
  readonly groupRetentionDuration?: string;
  /**
  * Whether or not to trigger one alert if any source breaches a threshold. This is only used by log monitors. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#groupby_simple_monitor Monitor#groupby_simple_monitor}
  */
  readonly groupbySimpleMonitor?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#id Monitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#include_tags Monitor#include_tags}
  */
  readonly includeTags?: boolean | cdktn.IResolvable;
  /**
  * A message to include with notifications for this monitor.
  * 
  * Email notifications can be sent to specific users by using the same `@username` notation as events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#message Monitor#message}
  */
  readonly message: string;
  /**
  * Name of Datadog monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * The time (in seconds) to skip evaluations for new groups.
  * 
  * `new_group_delay` overrides `new_host_delay` if it is set to a nonzero value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#new_group_delay Monitor#new_group_delay}
  */
  readonly newGroupDelay?: number;
  /**
  * **Deprecated**. See `new_group_delay`. Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non-negative integer. This value is ignored for simple monitors and monitors not grouped by host. The only case when this should be used is to override the default and set `new_host_delay` to zero for monitors grouped by host. **Deprecated.** Use `new_group_delay` except when setting `new_host_delay` to zero. Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#new_host_delay Monitor#new_host_delay}
  */
  readonly newHostDelay?: number;
  /**
  * The number of minutes before a monitor will notify when data stops reporting.
  * 
  * We recommend at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#no_data_timeframe Monitor#no_data_timeframe}
  */
  readonly noDataTimeframe?: number;
  /**
  * Toggles the display of additional content sent in the monitor notification. Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`, `hide_query_and_handles`, `show_only_snapshot`, `hide_handles_and_footer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#notification_preset_name Monitor#notification_preset_name}
  */
  readonly notificationPresetName?: string;
  /**
  * A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#notify_audit Monitor#notify_audit}
  */
  readonly notifyAudit?: boolean | cdktn.IResolvable;
  /**
  * Controls what granularity a monitor alerts on. Only available for monitors with groupings. For instance, a monitor grouped by `cluster`, `namespace`, and `pod` can be configured to only notify on each new `cluster` violating the alert conditions by setting `notify_by` to `['cluster']`. Tags mentioned in `notify_by` must be a subset of the grouping tags in the query. For example, a query grouped by `cluster` and `namespace` cannot notify on `region`. Setting `notify_by` to `[*]` configures the monitor to notify as a simple-alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#notify_by Monitor#notify_by}
  */
  readonly notifyBy?: string[];
  /**
  * A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#notify_no_data Monitor#notify_no_data}
  */
  readonly notifyNoData?: boolean | cdktn.IResolvable;
  /**
  * Controls how groups or monitors are treated if an evaluation does not return any data points. The default option results in different behavior depending on the monitor query type. For monitors using `Count` queries, an empty monitor evaluation is treated as 0 and is compared to the threshold conditions. For monitors using any query type other than `Count`, for example `Gauge`, `Measure`, or `Rate`, the monitor shows the last known status. This option is not available for Service Check, Composite, or SLO monitors. Valid values are: `show_no_data`, `show_and_notify_no_data`, `resolve`, and `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#on_missing_data Monitor#on_missing_data}
  */
  readonly onMissingData?: string;
  /**
  * Integer from 1 (high) to 5 (low) indicating alert severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#priority Monitor#priority}
  */
  readonly priority?: string;
  /**
  * The monitor query to notify on. Note this is not the same query you see in the UI and the syntax is different depending on the monitor type, please see the [API Reference](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor) for details. `terraform plan` will validate query contents unless `validate` is set to `false`.
  * 
  * **Note:** APM latency data is now available as Distribution Metrics. Existing monitors have been migrated automatically but all terraformed monitors can still use the existing metrics. We strongly recommend updating monitor definitions to query the new metrics. To learn more, or to see examples of how to update your terraform definitions to utilize the new distribution metrics, see the [detailed doc](https://docs.datadoghq.com/tracing/guide/ddsketch_trace_metrics/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
  /**
  * The number of minutes after the last notification before a monitor will re-notify on the current status. It will only re-notify if it's not resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#renotify_interval Monitor#renotify_interval}
  */
  readonly renotifyInterval?: number;
  /**
  * The number of re-notification messages that should be sent on the current status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#renotify_occurrences Monitor#renotify_occurrences}
  */
  readonly renotifyOccurrences?: number;
  /**
  * The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#renotify_statuses Monitor#renotify_statuses}
  */
  readonly renotifyStatuses?: string[];
  /**
  * A boolean indicating whether this monitor needs a full window of data before it's evaluated. Datadog strongly recommends you set this to `false` for sparse metrics, otherwise some evaluations may be skipped. If there's a custom_schedule set, `require_full_window` must be false and will be ignored. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#require_full_window Monitor#require_full_window}
  */
  readonly requireFullWindow?: boolean | cdktn.IResolvable;
  /**
  * A list of unique role identifiers to define which roles are allowed to edit the monitor. Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. Roles unique identifiers can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) in the `data.id` field. **Deprecated.** Use `datadog_restriction_policy` resource to manage permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#restricted_roles Monitor#restricted_roles}
  */
  readonly restrictedRoles?: string[];
  /**
  * A list of tags to associate with your monitor. This can help you categorize and filter monitors in the manage monitors page of the UI. Note: it's not currently possible to filter by these tags when querying via the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#tags Monitor#tags}
  */
  readonly tags?: string[];
  /**
  * The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. The minimum allowed value is 0 hours. The maximum allowed value is 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#timeout_h Monitor#timeout_h}
  */
  readonly timeoutH?: number;
  /**
  * The type of the monitor. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor). Note: The monitor type cannot be changed after a monitor is created. Valid values are `composite`, `event alert`, `log alert`, `metric alert`, `process alert`, `query alert`, `rum alert`, `service check`, `synthetics alert`, `trace-analytics alert`, `slo alert`, `event-v2 alert`, `audit alert`, `ci-pipelines alert`, `ci-tests alert`, `error-tracking alert`, `database-monitoring alert`, `network-performance alert`, `cost alert`, `data-quality alert`, `network-path alert`, `data-jobs alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#type Monitor#type}
  */
  readonly type: string;
  /**
  * If set to `false`, skip the validation call done during plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#validate Monitor#validate}
  */
  readonly validate?: boolean | cdktn.IResolvable;
  /**
  * assets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#assets Monitor#assets}
  */
  readonly assets?: MonitorAssets[] | cdktn.IResolvable;
  /**
  * monitor_threshold_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#monitor_threshold_windows Monitor#monitor_threshold_windows}
  */
  readonly monitorThresholdWindows?: MonitorMonitorThresholdWindows;
  /**
  * monitor_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#monitor_thresholds Monitor#monitor_thresholds}
  */
  readonly monitorThresholds?: MonitorMonitorThresholds;
  /**
  * scheduling_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#scheduling_options Monitor#scheduling_options}
  */
  readonly schedulingOptions?: MonitorSchedulingOptions;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#variables Monitor#variables}
  */
  readonly variables?: MonitorVariables;
}
export interface MonitorAssets {
  /**
  * Type of asset the entity represents on a monitor. Valid values are `runbook`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#category Monitor#category}
  */
  readonly category: string;
  /**
  * Name for the monitor asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * Identifier of the internal Datadog resource that this asset represents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#resource_key Monitor#resource_key}
  */
  readonly resourceKey?: string;
  /**
  * Type of internal Datadog resource associated with a monitor asset. Valid values are `notebook`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#resource_type Monitor#resource_type}
  */
  readonly resourceType?: string;
  /**
  * URL for the asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#url Monitor#url}
  */
  readonly url: string;
}

export function monitorAssetsToTerraform(struct?: MonitorAssets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    super(terraformResource, terraformAttribute, wrapsSet);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#recovery_window Monitor#recovery_window}
  */
  readonly recoveryWindow?: string;
  /**
  * Describes how long a metric must be anomalous before an alert triggers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#trigger_window Monitor#trigger_window}
  */
  readonly triggerWindow?: string;
}

export function monitorMonitorThresholdWindowsToTerraform(struct?: MonitorMonitorThresholdWindowsOutputReference | MonitorMonitorThresholdWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    recovery_window: cdktn.stringToTerraform(struct!.recoveryWindow),
    trigger_window: cdktn.stringToTerraform(struct!.triggerWindow),
  }
}


export function monitorMonitorThresholdWindowsToHclTerraform(struct?: MonitorMonitorThresholdWindowsOutputReference | MonitorMonitorThresholdWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#critical Monitor#critical}
  */
  readonly critical?: string;
  /**
  * Query evaluated as a dynamic `CRITICAL` threshold. Only supported on metric monitors with a formula query and `options['variables']`. Cannot be combined with static thresholds. This field is in preview.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#critical_query Monitor#critical_query}
  */
  readonly criticalQuery?: string;
  /**
  * The monitor `CRITICAL` recovery threshold. Must be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#critical_recovery Monitor#critical_recovery}
  */
  readonly criticalRecovery?: string;
  /**
  * Query evaluated as a dynamic `CRITICAL` recovery threshold. Only supported on metric monitors with a formula query and `options['variables']`. Cannot be combined with static thresholds. This field is in preview.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#critical_recovery_query Monitor#critical_recovery_query}
  */
  readonly criticalRecoveryQuery?: string;
  /**
  * The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#ok Monitor#ok}
  */
  readonly ok?: string;
  /**
  * The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#unknown Monitor#unknown}
  */
  readonly unknown?: string;
  /**
  * The monitor `WARNING` threshold. Must be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#warning Monitor#warning}
  */
  readonly warning?: string;
  /**
  * The monitor `WARNING` recovery threshold. Must be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#warning_recovery Monitor#warning_recovery}
  */
  readonly warningRecovery?: string;
}

export function monitorMonitorThresholdsToTerraform(struct?: MonitorMonitorThresholdsOutputReference | MonitorMonitorThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    critical: cdktn.stringToTerraform(struct!.critical),
    critical_query: cdktn.stringToTerraform(struct!.criticalQuery),
    critical_recovery: cdktn.stringToTerraform(struct!.criticalRecovery),
    critical_recovery_query: cdktn.stringToTerraform(struct!.criticalRecoveryQuery),
    ok: cdktn.stringToTerraform(struct!.ok),
    unknown: cdktn.stringToTerraform(struct!.unknown),
    warning: cdktn.stringToTerraform(struct!.warning),
    warning_recovery: cdktn.stringToTerraform(struct!.warningRecovery),
  }
}


export function monitorMonitorThresholdsToHclTerraform(struct?: MonitorMonitorThresholdsOutputReference | MonitorMonitorThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    critical: {
      value: cdktn.stringToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical_query: {
      value: cdktn.stringToHclTerraform(struct!.criticalQuery),
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
    critical_recovery_query: {
      value: cdktn.stringToHclTerraform(struct!.criticalRecoveryQuery),
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
    if (this._criticalQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalQuery = this._criticalQuery;
    }
    if (this._criticalRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalRecovery = this._criticalRecovery;
    }
    if (this._criticalRecoveryQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalRecoveryQuery = this._criticalRecoveryQuery;
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
      this._criticalQuery = undefined;
      this._criticalRecovery = undefined;
      this._criticalRecoveryQuery = undefined;
      this._ok = undefined;
      this._unknown = undefined;
      this._warning = undefined;
      this._warningRecovery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._criticalQuery = value.criticalQuery;
      this._criticalRecovery = value.criticalRecovery;
      this._criticalRecoveryQuery = value.criticalRecoveryQuery;
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

  // critical_query - computed: false, optional: true, required: false
  private _criticalQuery?: string; 
  public get criticalQuery() {
    return this.getStringAttribute('critical_query');
  }
  public set criticalQuery(value: string) {
    this._criticalQuery = value;
  }
  public resetCriticalQuery() {
    this._criticalQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalQueryInput() {
    return this._criticalQuery;
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

  // critical_recovery_query - computed: false, optional: true, required: false
  private _criticalRecoveryQuery?: string; 
  public get criticalRecoveryQuery() {
    return this.getStringAttribute('critical_recovery_query');
  }
  public set criticalRecoveryQuery(value: string) {
    this._criticalRecoveryQuery = value;
  }
  public resetCriticalRecoveryQuery() {
    this._criticalRecoveryQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalRecoveryQueryInput() {
    return this._criticalRecoveryQuery;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#rrule Monitor#rrule}
  */
  readonly rrule: string;
  /**
  * Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#start Monitor#start}
  */
  readonly start?: string;
  /**
  * 'tz database' format. Example: `America/New_York` or `UTC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#timezone Monitor#timezone}
  */
  readonly timezone: string;
}

export function monitorSchedulingOptionsCustomScheduleRecurrenceToTerraform(struct?: MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference | MonitorSchedulingOptionsCustomScheduleRecurrence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#recurrence Monitor#recurrence}
  */
  readonly recurrence: MonitorSchedulingOptionsCustomScheduleRecurrence;
}

export function monitorSchedulingOptionsCustomScheduleToTerraform(struct?: MonitorSchedulingOptionsCustomScheduleOutputReference | MonitorSchedulingOptionsCustomSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    recurrence: monitorSchedulingOptionsCustomScheduleRecurrenceToTerraform(struct!.recurrence),
  }
}


export function monitorSchedulingOptionsCustomScheduleToHclTerraform(struct?: MonitorSchedulingOptionsCustomScheduleOutputReference | MonitorSchedulingOptionsCustomSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#day_starts Monitor#day_starts}
  */
  readonly dayStarts?: string;
  /**
  * The minute of the hour at which a one hour cumulative evaluation window starts. Must be between 0 and 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#hour_starts Monitor#hour_starts}
  */
  readonly hourStarts?: number;
  /**
  * The day of the month at which a one month cumulative evaluation window starts. Must be a value of 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#month_starts Monitor#month_starts}
  */
  readonly monthStarts?: number;
  /**
  * The timezone for the cumulative evaluation window start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#timezone Monitor#timezone}
  */
  readonly timezone?: string;
}

export function monitorSchedulingOptionsEvaluationWindowToTerraform(struct?: MonitorSchedulingOptionsEvaluationWindowOutputReference | MonitorSchedulingOptionsEvaluationWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#custom_schedule Monitor#custom_schedule}
  */
  readonly customSchedule?: MonitorSchedulingOptionsCustomSchedule;
  /**
  * evaluation_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#evaluation_window Monitor#evaluation_window}
  */
  readonly evaluationWindow?: MonitorSchedulingOptionsEvaluationWindow;
}

export function monitorSchedulingOptionsToTerraform(struct?: MonitorSchedulingOptionsOutputReference | MonitorSchedulingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_schedule: monitorSchedulingOptionsCustomScheduleToTerraform(struct!.customSchedule),
    evaluation_window: monitorSchedulingOptionsEvaluationWindowToTerraform(struct!.evaluationWindow),
  }
}


export function monitorSchedulingOptionsToHclTerraform(struct?: MonitorSchedulingOptionsOutputReference | MonitorSchedulingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
export interface MonitorVariablesAggregateAugmentedQueryAugmentEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#interval Monitor#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * The name assigned to this aggregation when multiple aggregations are defined for a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
}

export function monitorVariablesAggregateAugmentedQueryAugmentEventQueryComputeToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function monitorVariablesAggregateAugmentedQueryAugmentEventQueryComputeToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryAugmentEventQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryAugmentEventQueryCompute | cdktn.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
      this._name = undefined;
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
      this._name = value.name;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class MonitorVariablesAggregateAugmentedQueryAugmentEventQueryComputeList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateAugmentedQueryAugmentEventQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateAugmentedQueryAugmentEventQueryComputeOutputReference {
    return new MonitorVariablesAggregateAugmentedQueryAugmentEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#order Monitor#order}
  */
  readonly order?: string;
}

export function monitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySortToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySortOutputReference | MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function monitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySortToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySortOutputReference | MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySort | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySort | undefined) {
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
export interface MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBy {
  /**
  * The event facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#facet Monitor#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#limit Monitor#limit}
  */
  readonly limit?: number;
  /**
  * For composite aggregate-augmented queries, identifies which sub-query this group-by facet refers to (for example `filter_query`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#source Monitor#source}
  */
  readonly source?: string;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#sort Monitor#sort}
  */
  readonly sort?: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySort;
}

export function monitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupByToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    source: cdktn.stringToTerraform(struct!.source),
    sort: monitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function monitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupByToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: monitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBy | cdktn.IResolvable | undefined {
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
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._source = undefined;
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
      this._source = value.source;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBySort) {
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

export class MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupByOutputReference {
    return new MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
}

export function monitorVariablesAggregateAugmentedQueryAugmentEventQuerySearchToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearchOutputReference | MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function monitorVariablesAggregateAugmentedQueryAugmentEventQuerySearchToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearchOutputReference | MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearch | undefined) {
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
export interface MonitorVariablesAggregateAugmentedQueryAugmentEventQuery {
  /**
  * The data source for event platform-based queries. Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`, `database_queries`, `network`, `network_path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#indexes Monitor#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#compute Monitor#compute}
  */
  readonly compute: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#group_by Monitor#group_by}
  */
  readonly groupBy?: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#search Monitor#search}
  */
  readonly search: MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearch;
}

export function monitorVariablesAggregateAugmentedQueryAugmentEventQueryToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryOutputReference | MonitorVariablesAggregateAugmentedQueryAugmentEventQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    name: cdktn.stringToTerraform(struct!.name),
    compute: cdktn.listMapper(monitorVariablesAggregateAugmentedQueryAugmentEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(monitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupByToTerraform, true)(struct!.groupBy),
    search: monitorVariablesAggregateAugmentedQueryAugmentEventQuerySearchToTerraform(struct!.search),
  }
}


export function monitorVariablesAggregateAugmentedQueryAugmentEventQueryToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryOutputReference | MonitorVariablesAggregateAugmentedQueryAugmentEventQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(monitorVariablesAggregateAugmentedQueryAugmentEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryAugmentEventQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupByList",
    },
    search: {
      value: monitorVariablesAggregateAugmentedQueryAugmentEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryAugmentEventQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryAugmentEventQuery | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryAugmentEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _compute = new MonitorVariablesAggregateAugmentedQueryAugmentEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: MonitorVariablesAggregateAugmentedQueryAugmentEventQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: MonitorVariablesAggregateAugmentedQueryAugmentEventQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumns {
  /**
  * Optional alias for the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#alias Monitor#alias}
  */
  readonly alias?: string;
  /**
  * Reference table column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
}

export function monitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumnsToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function monitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumnsToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._name = value.name;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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
}

export class MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumnsList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumns[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumnsOutputReference {
    return new MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateAugmentedQueryAugmentReferenceTable {
  /**
  * Must be `reference_table`. Valid values are `reference_table`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * Name of the augment sub-query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
  /**
  * Optional filter expression for the reference table query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query_filter Monitor#query_filter}
  */
  readonly queryFilter?: string;
  /**
  * Name of the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#table_name Monitor#table_name}
  */
  readonly tableName: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#columns Monitor#columns}
  */
  readonly columns?: MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumns[] | cdktn.IResolvable;
}

export function monitorVariablesAggregateAugmentedQueryAugmentReferenceTableToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableOutputReference | MonitorVariablesAggregateAugmentedQueryAugmentReferenceTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    query_filter: cdktn.stringToTerraform(struct!.queryFilter),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    columns: cdktn.listMapper(monitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumnsToTerraform, true)(struct!.columns),
  }
}


export function monitorVariablesAggregateAugmentedQueryAugmentReferenceTableToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableOutputReference | MonitorVariablesAggregateAugmentedQueryAugmentReferenceTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    query_filter: {
      value: cdktn.stringToHclTerraform(struct!.queryFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryAugmentReferenceTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queryFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFilter = this._queryFilter;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryAugmentReferenceTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._name = undefined;
      this._queryFilter = undefined;
      this._tableName = undefined;
      this._columns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._queryFilter = value.queryFilter;
      this._tableName = value.tableName;
      this._columns.internalValue = value.columns;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // query_filter - computed: false, optional: true, required: false
  private _queryFilter?: string; 
  public get queryFilter() {
    return this.getStringAttribute('query_filter');
  }
  public set queryFilter(value: string) {
    this._queryFilter = value;
  }
  public resetQueryFilter() {
    this._queryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFilterInput() {
    return this._queryFilter;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}
export interface MonitorVariablesAggregateAugmentedQueryBaseEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#interval Monitor#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * The name assigned to this aggregation when multiple aggregations are defined for a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
}

export function monitorVariablesAggregateAugmentedQueryBaseEventQueryComputeToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function monitorVariablesAggregateAugmentedQueryBaseEventQueryComputeToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryBaseEventQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryBaseEventQueryCompute | cdktn.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryBaseEventQueryCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
      this._name = undefined;
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
      this._name = value.name;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class MonitorVariablesAggregateAugmentedQueryBaseEventQueryComputeList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateAugmentedQueryBaseEventQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateAugmentedQueryBaseEventQueryComputeOutputReference {
    return new MonitorVariablesAggregateAugmentedQueryBaseEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#order Monitor#order}
  */
  readonly order?: string;
}

export function monitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySortToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySortOutputReference | MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function monitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySortToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySortOutputReference | MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySort | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySort | undefined) {
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
export interface MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBy {
  /**
  * The event facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#facet Monitor#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#limit Monitor#limit}
  */
  readonly limit?: number;
  /**
  * For composite aggregate-augmented queries, identifies which sub-query this group-by facet refers to (for example `filter_query`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#source Monitor#source}
  */
  readonly source?: string;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#sort Monitor#sort}
  */
  readonly sort?: MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySort;
}

export function monitorVariablesAggregateAugmentedQueryBaseEventQueryGroupByToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    source: cdktn.stringToTerraform(struct!.source),
    sort: monitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function monitorVariablesAggregateAugmentedQueryBaseEventQueryGroupByToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: monitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBy | cdktn.IResolvable | undefined {
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
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._source = undefined;
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
      this._source = value.source;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBySort) {
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

export class MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupByOutputReference {
    return new MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
}

export function monitorVariablesAggregateAugmentedQueryBaseEventQuerySearchToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearchOutputReference | MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function monitorVariablesAggregateAugmentedQueryBaseEventQuerySearchToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearchOutputReference | MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearch | undefined) {
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
export interface MonitorVariablesAggregateAugmentedQueryBaseEventQuery {
  /**
  * The data source for event platform-based queries. Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`, `database_queries`, `network`, `network_path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#indexes Monitor#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#compute Monitor#compute}
  */
  readonly compute: MonitorVariablesAggregateAugmentedQueryBaseEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#group_by Monitor#group_by}
  */
  readonly groupBy?: MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#search Monitor#search}
  */
  readonly search: MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearch;
}

export function monitorVariablesAggregateAugmentedQueryBaseEventQueryToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseEventQueryOutputReference | MonitorVariablesAggregateAugmentedQueryBaseEventQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    name: cdktn.stringToTerraform(struct!.name),
    compute: cdktn.listMapper(monitorVariablesAggregateAugmentedQueryBaseEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(monitorVariablesAggregateAugmentedQueryBaseEventQueryGroupByToTerraform, true)(struct!.groupBy),
    search: monitorVariablesAggregateAugmentedQueryBaseEventQuerySearchToTerraform(struct!.search),
  }
}


export function monitorVariablesAggregateAugmentedQueryBaseEventQueryToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseEventQueryOutputReference | MonitorVariablesAggregateAugmentedQueryBaseEventQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(monitorVariablesAggregateAugmentedQueryBaseEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryBaseEventQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateAugmentedQueryBaseEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupByList",
    },
    search: {
      value: monitorVariablesAggregateAugmentedQueryBaseEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryBaseEventQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryBaseEventQuery | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryBaseEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _compute = new MonitorVariablesAggregateAugmentedQueryBaseEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: MonitorVariablesAggregateAugmentedQueryBaseEventQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: MonitorVariablesAggregateAugmentedQueryBaseEventQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: MonitorVariablesAggregateAugmentedQueryBaseEventQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface MonitorVariablesAggregateAugmentedQueryBaseMetricsQuery {
  /**
  * The aggregation method for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `mean`, `area`, `l2norm`, `percentile`, `stddev`, `count_unique`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregator Monitor#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The data source for metrics queries. Valid values are `metrics`, `cloud_cost`, `datadog_usage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
  /**
  * The metrics query definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
}

export function monitorVariablesAggregateAugmentedQueryBaseMetricsQueryToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseMetricsQueryOutputReference | MonitorVariablesAggregateAugmentedQueryBaseMetricsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregator: cdktn.stringToTerraform(struct!.aggregator),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function monitorVariablesAggregateAugmentedQueryBaseMetricsQueryToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryBaseMetricsQueryOutputReference | MonitorVariablesAggregateAugmentedQueryBaseMetricsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateAugmentedQueryBaseMetricsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryBaseMetricsQuery | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryBaseMetricsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
      this._dataSource = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregator = value.aggregator;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._query = value.query;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator?: string; 
  public get aggregator() {
    return this.getStringAttribute('aggregator');
  }
  public set aggregator(value: string) {
    this._aggregator = value;
  }
  public resetAggregator() {
    this._aggregator = undefined;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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
export interface MonitorVariablesAggregateAugmentedQueryCompute {
  /**
  * The aggregation methods for compute steps. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#interval Monitor#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * The name assigned to this aggregation when multiple aggregations are defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
}

export function monitorVariablesAggregateAugmentedQueryComputeToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function monitorVariablesAggregateAugmentedQueryComputeToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryCompute | cdktn.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
      this._name = undefined;
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
      this._name = value.name;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class MonitorVariablesAggregateAugmentedQueryComputeList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateAugmentedQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateAugmentedQueryComputeOutputReference {
    return new MonitorVariablesAggregateAugmentedQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateAugmentedQueryGroupBySort {
  /**
  * The aggregation methods for sorting. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#order Monitor#order}
  */
  readonly order?: string;
}

export function monitorVariablesAggregateAugmentedQueryGroupBySortToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryGroupBySortOutputReference | MonitorVariablesAggregateAugmentedQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function monitorVariablesAggregateAugmentedQueryGroupBySortToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryGroupBySortOutputReference | MonitorVariablesAggregateAugmentedQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateAugmentedQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryGroupBySort | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryGroupBySort | undefined) {
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
export interface MonitorVariablesAggregateAugmentedQueryGroupBy {
  /**
  * The facet to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#facet Monitor#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#limit Monitor#limit}
  */
  readonly limit?: number;
  /**
  * Identifies which sub-query this facet refers to (for example `filter_query`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#source Monitor#source}
  */
  readonly source?: string;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#sort Monitor#sort}
  */
  readonly sort?: MonitorVariablesAggregateAugmentedQueryGroupBySort;
}

export function monitorVariablesAggregateAugmentedQueryGroupByToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    source: cdktn.stringToTerraform(struct!.source),
    sort: monitorVariablesAggregateAugmentedQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function monitorVariablesAggregateAugmentedQueryGroupByToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: monitorVariablesAggregateAugmentedQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryGroupBy | cdktn.IResolvable | undefined {
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
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._source = undefined;
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
      this._source = value.source;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new MonitorVariablesAggregateAugmentedQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: MonitorVariablesAggregateAugmentedQueryGroupBySort) {
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

export class MonitorVariablesAggregateAugmentedQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateAugmentedQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateAugmentedQueryGroupByOutputReference {
    return new MonitorVariablesAggregateAugmentedQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateAugmentedQueryJoinCondition {
  /**
  * Attribute from the augment query to join on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#augment_attribute Monitor#augment_attribute}
  */
  readonly augmentAttribute: string;
  /**
  * Attribute from the base query to join on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#base_attribute Monitor#base_attribute}
  */
  readonly baseAttribute: string;
  /**
  * Join type (for example `inner`). Valid values are `inner`, `left`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#join_type Monitor#join_type}
  */
  readonly joinType: string;
}

export function monitorVariablesAggregateAugmentedQueryJoinConditionToTerraform(struct?: MonitorVariablesAggregateAugmentedQueryJoinConditionOutputReference | MonitorVariablesAggregateAugmentedQueryJoinCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    augment_attribute: cdktn.stringToTerraform(struct!.augmentAttribute),
    base_attribute: cdktn.stringToTerraform(struct!.baseAttribute),
    join_type: cdktn.stringToTerraform(struct!.joinType),
  }
}


export function monitorVariablesAggregateAugmentedQueryJoinConditionToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQueryJoinConditionOutputReference | MonitorVariablesAggregateAugmentedQueryJoinCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    augment_attribute: {
      value: cdktn.stringToHclTerraform(struct!.augmentAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_attribute: {
      value: cdktn.stringToHclTerraform(struct!.baseAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_type: {
      value: cdktn.stringToHclTerraform(struct!.joinType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryJoinConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateAugmentedQueryJoinCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._augmentAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.augmentAttribute = this._augmentAttribute;
    }
    if (this._baseAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAttribute = this._baseAttribute;
    }
    if (this._joinType !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinType = this._joinType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQueryJoinCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._augmentAttribute = undefined;
      this._baseAttribute = undefined;
      this._joinType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._augmentAttribute = value.augmentAttribute;
      this._baseAttribute = value.baseAttribute;
      this._joinType = value.joinType;
    }
  }

  // augment_attribute - computed: false, optional: false, required: true
  private _augmentAttribute?: string; 
  public get augmentAttribute() {
    return this.getStringAttribute('augment_attribute');
  }
  public set augmentAttribute(value: string) {
    this._augmentAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get augmentAttributeInput() {
    return this._augmentAttribute;
  }

  // base_attribute - computed: false, optional: false, required: true
  private _baseAttribute?: string; 
  public get baseAttribute() {
    return this.getStringAttribute('base_attribute');
  }
  public set baseAttribute(value: string) {
    this._baseAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseAttributeInput() {
    return this._baseAttribute;
  }

  // join_type - computed: false, optional: false, required: true
  private _joinType?: string; 
  public get joinType() {
    return this.getStringAttribute('join_type');
  }
  public set joinType(value: string) {
    this._joinType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get joinTypeInput() {
    return this._joinType;
  }
}
export interface MonitorVariablesAggregateAugmentedQuery {
  /**
  * The data source for aggregate-augmented composite queries. Must be `aggregate_augmented_query`. Valid values are `aggregate_augmented_query`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
  /**
  * augment_event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#augment_event_query Monitor#augment_event_query}
  */
  readonly augmentEventQuery?: MonitorVariablesAggregateAugmentedQueryAugmentEventQuery;
  /**
  * augment_reference_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#augment_reference_table Monitor#augment_reference_table}
  */
  readonly augmentReferenceTable?: MonitorVariablesAggregateAugmentedQueryAugmentReferenceTable;
  /**
  * base_event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#base_event_query Monitor#base_event_query}
  */
  readonly baseEventQuery?: MonitorVariablesAggregateAugmentedQueryBaseEventQuery;
  /**
  * base_metrics_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#base_metrics_query Monitor#base_metrics_query}
  */
  readonly baseMetricsQuery?: MonitorVariablesAggregateAugmentedQueryBaseMetricsQuery;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#compute Monitor#compute}
  */
  readonly compute: MonitorVariablesAggregateAugmentedQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#group_by Monitor#group_by}
  */
  readonly groupBy: MonitorVariablesAggregateAugmentedQueryGroupBy[] | cdktn.IResolvable;
  /**
  * join_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#join_condition Monitor#join_condition}
  */
  readonly joinCondition: MonitorVariablesAggregateAugmentedQueryJoinCondition;
}

export function monitorVariablesAggregateAugmentedQueryToTerraform(struct?: MonitorVariablesAggregateAugmentedQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    augment_event_query: monitorVariablesAggregateAugmentedQueryAugmentEventQueryToTerraform(struct!.augmentEventQuery),
    augment_reference_table: monitorVariablesAggregateAugmentedQueryAugmentReferenceTableToTerraform(struct!.augmentReferenceTable),
    base_event_query: monitorVariablesAggregateAugmentedQueryBaseEventQueryToTerraform(struct!.baseEventQuery),
    base_metrics_query: monitorVariablesAggregateAugmentedQueryBaseMetricsQueryToTerraform(struct!.baseMetricsQuery),
    compute: cdktn.listMapper(monitorVariablesAggregateAugmentedQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(monitorVariablesAggregateAugmentedQueryGroupByToTerraform, true)(struct!.groupBy),
    join_condition: monitorVariablesAggregateAugmentedQueryJoinConditionToTerraform(struct!.joinCondition),
  }
}


export function monitorVariablesAggregateAugmentedQueryToHclTerraform(struct?: MonitorVariablesAggregateAugmentedQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    augment_event_query: {
      value: monitorVariablesAggregateAugmentedQueryAugmentEventQueryToHclTerraform(struct!.augmentEventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryAugmentEventQueryList",
    },
    augment_reference_table: {
      value: monitorVariablesAggregateAugmentedQueryAugmentReferenceTableToHclTerraform(struct!.augmentReferenceTable),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableList",
    },
    base_event_query: {
      value: monitorVariablesAggregateAugmentedQueryBaseEventQueryToHclTerraform(struct!.baseEventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryBaseEventQueryList",
    },
    base_metrics_query: {
      value: monitorVariablesAggregateAugmentedQueryBaseMetricsQueryToHclTerraform(struct!.baseMetricsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryBaseMetricsQueryList",
    },
    compute: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateAugmentedQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateAugmentedQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryGroupByList",
    },
    join_condition: {
      value: monitorVariablesAggregateAugmentedQueryJoinConditionToHclTerraform(struct!.joinCondition),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryJoinConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateAugmentedQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateAugmentedQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._augmentEventQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.augmentEventQuery = this._augmentEventQuery?.internalValue;
    }
    if (this._augmentReferenceTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.augmentReferenceTable = this._augmentReferenceTable?.internalValue;
    }
    if (this._baseEventQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEventQuery = this._baseEventQuery?.internalValue;
    }
    if (this._baseMetricsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseMetricsQuery = this._baseMetricsQuery?.internalValue;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._joinCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinCondition = this._joinCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateAugmentedQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSource = undefined;
      this._name = undefined;
      this._augmentEventQuery.internalValue = undefined;
      this._augmentReferenceTable.internalValue = undefined;
      this._baseEventQuery.internalValue = undefined;
      this._baseMetricsQuery.internalValue = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._joinCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._augmentEventQuery.internalValue = value.augmentEventQuery;
      this._augmentReferenceTable.internalValue = value.augmentReferenceTable;
      this._baseEventQuery.internalValue = value.baseEventQuery;
      this._baseMetricsQuery.internalValue = value.baseMetricsQuery;
      this._compute.internalValue = value.compute;
      this._groupBy.internalValue = value.groupBy;
      this._joinCondition.internalValue = value.joinCondition;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // augment_event_query - computed: false, optional: true, required: false
  private _augmentEventQuery = new MonitorVariablesAggregateAugmentedQueryAugmentEventQueryOutputReference(this, "augment_event_query");
  public get augmentEventQuery() {
    return this._augmentEventQuery;
  }
  public putAugmentEventQuery(value: MonitorVariablesAggregateAugmentedQueryAugmentEventQuery) {
    this._augmentEventQuery.internalValue = value;
  }
  public resetAugmentEventQuery() {
    this._augmentEventQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get augmentEventQueryInput() {
    return this._augmentEventQuery.internalValue;
  }

  // augment_reference_table - computed: false, optional: true, required: false
  private _augmentReferenceTable = new MonitorVariablesAggregateAugmentedQueryAugmentReferenceTableOutputReference(this, "augment_reference_table");
  public get augmentReferenceTable() {
    return this._augmentReferenceTable;
  }
  public putAugmentReferenceTable(value: MonitorVariablesAggregateAugmentedQueryAugmentReferenceTable) {
    this._augmentReferenceTable.internalValue = value;
  }
  public resetAugmentReferenceTable() {
    this._augmentReferenceTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get augmentReferenceTableInput() {
    return this._augmentReferenceTable.internalValue;
  }

  // base_event_query - computed: false, optional: true, required: false
  private _baseEventQuery = new MonitorVariablesAggregateAugmentedQueryBaseEventQueryOutputReference(this, "base_event_query");
  public get baseEventQuery() {
    return this._baseEventQuery;
  }
  public putBaseEventQuery(value: MonitorVariablesAggregateAugmentedQueryBaseEventQuery) {
    this._baseEventQuery.internalValue = value;
  }
  public resetBaseEventQuery() {
    this._baseEventQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEventQueryInput() {
    return this._baseEventQuery.internalValue;
  }

  // base_metrics_query - computed: false, optional: true, required: false
  private _baseMetricsQuery = new MonitorVariablesAggregateAugmentedQueryBaseMetricsQueryOutputReference(this, "base_metrics_query");
  public get baseMetricsQuery() {
    return this._baseMetricsQuery;
  }
  public putBaseMetricsQuery(value: MonitorVariablesAggregateAugmentedQueryBaseMetricsQuery) {
    this._baseMetricsQuery.internalValue = value;
  }
  public resetBaseMetricsQuery() {
    this._baseMetricsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseMetricsQueryInput() {
    return this._baseMetricsQuery.internalValue;
  }

  // compute - computed: false, optional: false, required: true
  private _compute = new MonitorVariablesAggregateAugmentedQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: MonitorVariablesAggregateAugmentedQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: false, required: true
  private _groupBy = new MonitorVariablesAggregateAugmentedQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: MonitorVariablesAggregateAugmentedQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // join_condition - computed: false, optional: false, required: true
  private _joinCondition = new MonitorVariablesAggregateAugmentedQueryJoinConditionOutputReference(this, "join_condition");
  public get joinCondition() {
    return this._joinCondition;
  }
  public putJoinCondition(value: MonitorVariablesAggregateAugmentedQueryJoinCondition) {
    this._joinCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get joinConditionInput() {
    return this._joinCondition.internalValue;
  }
}

export class MonitorVariablesAggregateAugmentedQueryList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateAugmentedQuery[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateAugmentedQueryOutputReference {
    return new MonitorVariablesAggregateAugmentedQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateFilteredQueryBaseEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#interval Monitor#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * The name assigned to this aggregation when multiple aggregations are defined for a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
}

export function monitorVariablesAggregateFilteredQueryBaseEventQueryComputeToTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function monitorVariablesAggregateFilteredQueryBaseEventQueryComputeToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryBaseEventQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateFilteredQueryBaseEventQueryCompute | cdktn.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryBaseEventQueryCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
      this._name = undefined;
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
      this._name = value.name;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class MonitorVariablesAggregateFilteredQueryBaseEventQueryComputeList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateFilteredQueryBaseEventQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateFilteredQueryBaseEventQueryComputeOutputReference {
    return new MonitorVariablesAggregateFilteredQueryBaseEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#order Monitor#order}
  */
  readonly order?: string;
}

export function monitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySortToTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySortOutputReference | MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function monitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySortToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySortOutputReference | MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySort | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySort | undefined) {
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
export interface MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBy {
  /**
  * The event facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#facet Monitor#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#limit Monitor#limit}
  */
  readonly limit?: number;
  /**
  * For composite aggregate-augmented queries, identifies which sub-query this group-by facet refers to (for example `filter_query`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#source Monitor#source}
  */
  readonly source?: string;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#sort Monitor#sort}
  */
  readonly sort?: MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySort;
}

export function monitorVariablesAggregateFilteredQueryBaseEventQueryGroupByToTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    source: cdktn.stringToTerraform(struct!.source),
    sort: monitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function monitorVariablesAggregateFilteredQueryBaseEventQueryGroupByToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: monitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBy | cdktn.IResolvable | undefined {
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
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._source = undefined;
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
      this._source = value.source;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBySort) {
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

export class MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupByOutputReference {
    return new MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateFilteredQueryBaseEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
}

export function monitorVariablesAggregateFilteredQueryBaseEventQuerySearchToTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseEventQuerySearchOutputReference | MonitorVariablesAggregateFilteredQueryBaseEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function monitorVariablesAggregateFilteredQueryBaseEventQuerySearchToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseEventQuerySearchOutputReference | MonitorVariablesAggregateFilteredQueryBaseEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateFilteredQueryBaseEventQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateFilteredQueryBaseEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryBaseEventQuerySearch | undefined) {
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
export interface MonitorVariablesAggregateFilteredQueryBaseEventQuery {
  /**
  * The data source for event platform-based queries. Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`, `database_queries`, `network`, `network_path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#indexes Monitor#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#compute Monitor#compute}
  */
  readonly compute: MonitorVariablesAggregateFilteredQueryBaseEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#group_by Monitor#group_by}
  */
  readonly groupBy?: MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#search Monitor#search}
  */
  readonly search: MonitorVariablesAggregateFilteredQueryBaseEventQuerySearch;
}

export function monitorVariablesAggregateFilteredQueryBaseEventQueryToTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseEventQueryOutputReference | MonitorVariablesAggregateFilteredQueryBaseEventQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    name: cdktn.stringToTerraform(struct!.name),
    compute: cdktn.listMapper(monitorVariablesAggregateFilteredQueryBaseEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(monitorVariablesAggregateFilteredQueryBaseEventQueryGroupByToTerraform, true)(struct!.groupBy),
    search: monitorVariablesAggregateFilteredQueryBaseEventQuerySearchToTerraform(struct!.search),
  }
}


export function monitorVariablesAggregateFilteredQueryBaseEventQueryToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseEventQueryOutputReference | MonitorVariablesAggregateFilteredQueryBaseEventQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(monitorVariablesAggregateFilteredQueryBaseEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryBaseEventQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateFilteredQueryBaseEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupByList",
    },
    search: {
      value: monitorVariablesAggregateFilteredQueryBaseEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryBaseEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryBaseEventQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateFilteredQueryBaseEventQuery | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryBaseEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _compute = new MonitorVariablesAggregateFilteredQueryBaseEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: MonitorVariablesAggregateFilteredQueryBaseEventQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: MonitorVariablesAggregateFilteredQueryBaseEventQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new MonitorVariablesAggregateFilteredQueryBaseEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: MonitorVariablesAggregateFilteredQueryBaseEventQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface MonitorVariablesAggregateFilteredQueryBaseMetricsQuery {
  /**
  * The aggregation method for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `mean`, `area`, `l2norm`, `percentile`, `stddev`, `count_unique`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregator Monitor#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The data source for metrics queries. Valid values are `metrics`, `cloud_cost`, `datadog_usage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
  /**
  * The metrics query definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
}

export function monitorVariablesAggregateFilteredQueryBaseMetricsQueryToTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseMetricsQueryOutputReference | MonitorVariablesAggregateFilteredQueryBaseMetricsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregator: cdktn.stringToTerraform(struct!.aggregator),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function monitorVariablesAggregateFilteredQueryBaseMetricsQueryToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryBaseMetricsQueryOutputReference | MonitorVariablesAggregateFilteredQueryBaseMetricsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateFilteredQueryBaseMetricsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateFilteredQueryBaseMetricsQuery | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryBaseMetricsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
      this._dataSource = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregator = value.aggregator;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._query = value.query;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator?: string; 
  public get aggregator() {
    return this.getStringAttribute('aggregator');
  }
  public set aggregator(value: string) {
    this._aggregator = value;
  }
  public resetAggregator() {
    this._aggregator = undefined;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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
export interface MonitorVariablesAggregateFilteredQueryCompute {
  /**
  * The aggregation methods for compute steps. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#interval Monitor#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * The name assigned to this aggregation when multiple aggregations are defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
}

export function monitorVariablesAggregateFilteredQueryComputeToTerraform(struct?: MonitorVariablesAggregateFilteredQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function monitorVariablesAggregateFilteredQueryComputeToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateFilteredQueryCompute | cdktn.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
      this._name = undefined;
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
      this._name = value.name;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class MonitorVariablesAggregateFilteredQueryComputeList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateFilteredQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateFilteredQueryComputeOutputReference {
    return new MonitorVariablesAggregateFilteredQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateFilteredQueryFilterEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#interval Monitor#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * The name assigned to this aggregation when multiple aggregations are defined for a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
}

export function monitorVariablesAggregateFilteredQueryFilterEventQueryComputeToTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function monitorVariablesAggregateFilteredQueryFilterEventQueryComputeToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryFilterEventQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateFilteredQueryFilterEventQueryCompute | cdktn.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryFilterEventQueryCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
      this._name = undefined;
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
      this._name = value.name;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class MonitorVariablesAggregateFilteredQueryFilterEventQueryComputeList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateFilteredQueryFilterEventQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateFilteredQueryFilterEventQueryComputeOutputReference {
    return new MonitorVariablesAggregateFilteredQueryFilterEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#order Monitor#order}
  */
  readonly order?: string;
}

export function monitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySortToTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySortOutputReference | MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function monitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySortToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySortOutputReference | MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySort | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySort | undefined) {
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
export interface MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBy {
  /**
  * The event facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#facet Monitor#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#limit Monitor#limit}
  */
  readonly limit?: number;
  /**
  * For composite aggregate-augmented queries, identifies which sub-query this group-by facet refers to (for example `filter_query`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#source Monitor#source}
  */
  readonly source?: string;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#sort Monitor#sort}
  */
  readonly sort?: MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySort;
}

export function monitorVariablesAggregateFilteredQueryFilterEventQueryGroupByToTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    source: cdktn.stringToTerraform(struct!.source),
    sort: monitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function monitorVariablesAggregateFilteredQueryFilterEventQueryGroupByToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: monitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBy | cdktn.IResolvable | undefined {
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
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._source = undefined;
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
      this._source = value.source;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBySort) {
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

export class MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupByOutputReference {
    return new MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateFilteredQueryFilterEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
}

export function monitorVariablesAggregateFilteredQueryFilterEventQuerySearchToTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterEventQuerySearchOutputReference | MonitorVariablesAggregateFilteredQueryFilterEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function monitorVariablesAggregateFilteredQueryFilterEventQuerySearchToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterEventQuerySearchOutputReference | MonitorVariablesAggregateFilteredQueryFilterEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateFilteredQueryFilterEventQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateFilteredQueryFilterEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryFilterEventQuerySearch | undefined) {
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
export interface MonitorVariablesAggregateFilteredQueryFilterEventQuery {
  /**
  * The data source for event platform-based queries. Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`, `database_queries`, `network`, `network_path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#indexes Monitor#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#compute Monitor#compute}
  */
  readonly compute: MonitorVariablesAggregateFilteredQueryFilterEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#group_by Monitor#group_by}
  */
  readonly groupBy?: MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#search Monitor#search}
  */
  readonly search: MonitorVariablesAggregateFilteredQueryFilterEventQuerySearch;
}

export function monitorVariablesAggregateFilteredQueryFilterEventQueryToTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterEventQueryOutputReference | MonitorVariablesAggregateFilteredQueryFilterEventQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    name: cdktn.stringToTerraform(struct!.name),
    compute: cdktn.listMapper(monitorVariablesAggregateFilteredQueryFilterEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(monitorVariablesAggregateFilteredQueryFilterEventQueryGroupByToTerraform, true)(struct!.groupBy),
    search: monitorVariablesAggregateFilteredQueryFilterEventQuerySearchToTerraform(struct!.search),
  }
}


export function monitorVariablesAggregateFilteredQueryFilterEventQueryToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterEventQueryOutputReference | MonitorVariablesAggregateFilteredQueryFilterEventQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(monitorVariablesAggregateFilteredQueryFilterEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryFilterEventQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateFilteredQueryFilterEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupByList",
    },
    search: {
      value: monitorVariablesAggregateFilteredQueryFilterEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryFilterEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryFilterEventQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateFilteredQueryFilterEventQuery | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryFilterEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _compute = new MonitorVariablesAggregateFilteredQueryFilterEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: MonitorVariablesAggregateFilteredQueryFilterEventQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: MonitorVariablesAggregateFilteredQueryFilterEventQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new MonitorVariablesAggregateFilteredQueryFilterEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: MonitorVariablesAggregateFilteredQueryFilterEventQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumns {
  /**
  * Optional alias for the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#alias Monitor#alias}
  */
  readonly alias?: string;
  /**
  * Reference table column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
}

export function monitorVariablesAggregateFilteredQueryFilterReferenceTableColumnsToTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function monitorVariablesAggregateFilteredQueryFilterReferenceTableColumnsToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._name = value.name;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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
}

export class MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumnsList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumns[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumnsOutputReference {
    return new MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateFilteredQueryFilterReferenceTable {
  /**
  * Must be `reference_table`. Valid values are `reference_table`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * Name of the filter sub-query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
  /**
  * Optional filter expression for the reference table query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query_filter Monitor#query_filter}
  */
  readonly queryFilter?: string;
  /**
  * Name of the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#table_name Monitor#table_name}
  */
  readonly tableName: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#columns Monitor#columns}
  */
  readonly columns?: MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumns[] | cdktn.IResolvable;
}

export function monitorVariablesAggregateFilteredQueryFilterReferenceTableToTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterReferenceTableOutputReference | MonitorVariablesAggregateFilteredQueryFilterReferenceTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    query_filter: cdktn.stringToTerraform(struct!.queryFilter),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    columns: cdktn.listMapper(monitorVariablesAggregateFilteredQueryFilterReferenceTableColumnsToTerraform, true)(struct!.columns),
  }
}


export function monitorVariablesAggregateFilteredQueryFilterReferenceTableToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilterReferenceTableOutputReference | MonitorVariablesAggregateFilteredQueryFilterReferenceTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    query_filter: {
      value: cdktn.stringToHclTerraform(struct!.queryFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateFilteredQueryFilterReferenceTableColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryFilterReferenceTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateFilteredQueryFilterReferenceTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queryFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFilter = this._queryFilter;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryFilterReferenceTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._name = undefined;
      this._queryFilter = undefined;
      this._tableName = undefined;
      this._columns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._queryFilter = value.queryFilter;
      this._tableName = value.tableName;
      this._columns.internalValue = value.columns;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // query_filter - computed: false, optional: true, required: false
  private _queryFilter?: string; 
  public get queryFilter() {
    return this.getStringAttribute('query_filter');
  }
  public set queryFilter(value: string) {
    this._queryFilter = value;
  }
  public resetQueryFilter() {
    this._queryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFilterInput() {
    return this._queryFilter;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: MonitorVariablesAggregateFilteredQueryFilterReferenceTableColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}
export interface MonitorVariablesAggregateFilteredQueryFilters {
  /**
  * Attribute from the base query to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#base_attribute Monitor#base_attribute}
  */
  readonly baseAttribute: string;
  /**
  * When true, exclude matching records instead of including them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#exclude Monitor#exclude}
  */
  readonly exclude?: boolean | cdktn.IResolvable;
  /**
  * Attribute from the filter query to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#filter_attribute Monitor#filter_attribute}
  */
  readonly filterAttribute: string;
}

export function monitorVariablesAggregateFilteredQueryFiltersToTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_attribute: cdktn.stringToTerraform(struct!.baseAttribute),
    exclude: cdktn.booleanToTerraform(struct!.exclude),
    filter_attribute: cdktn.stringToTerraform(struct!.filterAttribute),
  }
}


export function monitorVariablesAggregateFilteredQueryFiltersToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_attribute: {
      value: cdktn.stringToHclTerraform(struct!.baseAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktn.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_attribute: {
      value: cdktn.stringToHclTerraform(struct!.filterAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateFilteredQueryFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAttribute = this._baseAttribute;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._filterAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAttribute = this._filterAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseAttribute = undefined;
      this._exclude = undefined;
      this._filterAttribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseAttribute = value.baseAttribute;
      this._exclude = value.exclude;
      this._filterAttribute = value.filterAttribute;
    }
  }

  // base_attribute - computed: false, optional: false, required: true
  private _baseAttribute?: string; 
  public get baseAttribute() {
    return this.getStringAttribute('base_attribute');
  }
  public set baseAttribute(value: string) {
    this._baseAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseAttributeInput() {
    return this._baseAttribute;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktn.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktn.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // filter_attribute - computed: false, optional: false, required: true
  private _filterAttribute?: string; 
  public get filterAttribute() {
    return this.getStringAttribute('filter_attribute');
  }
  public set filterAttribute(value: string) {
    this._filterAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAttributeInput() {
    return this._filterAttribute;
  }
}

export class MonitorVariablesAggregateFilteredQueryFiltersList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateFilteredQueryFilters[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateFilteredQueryFiltersOutputReference {
    return new MonitorVariablesAggregateFilteredQueryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateFilteredQueryGroupBySort {
  /**
  * The aggregation methods for sorting. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#order Monitor#order}
  */
  readonly order?: string;
}

export function monitorVariablesAggregateFilteredQueryGroupBySortToTerraform(struct?: MonitorVariablesAggregateFilteredQueryGroupBySortOutputReference | MonitorVariablesAggregateFilteredQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function monitorVariablesAggregateFilteredQueryGroupBySortToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryGroupBySortOutputReference | MonitorVariablesAggregateFilteredQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class MonitorVariablesAggregateFilteredQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorVariablesAggregateFilteredQueryGroupBySort | undefined {
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

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryGroupBySort | undefined) {
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
export interface MonitorVariablesAggregateFilteredQueryGroupBy {
  /**
  * The facet to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#facet Monitor#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#limit Monitor#limit}
  */
  readonly limit?: number;
  /**
  * Identifies which sub-query this facet refers to (for example `filter_query`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#source Monitor#source}
  */
  readonly source?: string;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#sort Monitor#sort}
  */
  readonly sort?: MonitorVariablesAggregateFilteredQueryGroupBySort;
}

export function monitorVariablesAggregateFilteredQueryGroupByToTerraform(struct?: MonitorVariablesAggregateFilteredQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    source: cdktn.stringToTerraform(struct!.source),
    sort: monitorVariablesAggregateFilteredQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function monitorVariablesAggregateFilteredQueryGroupByToHclTerraform(struct?: MonitorVariablesAggregateFilteredQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: monitorVariablesAggregateFilteredQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateFilteredQueryGroupBy | cdktn.IResolvable | undefined {
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
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._source = undefined;
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
      this._source = value.source;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new MonitorVariablesAggregateFilteredQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: MonitorVariablesAggregateFilteredQueryGroupBySort) {
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

export class MonitorVariablesAggregateFilteredQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateFilteredQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateFilteredQueryGroupByOutputReference {
    return new MonitorVariablesAggregateFilteredQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesAggregateFilteredQuery {
  /**
  * The data source for aggregate-filtered composite queries. Must be `aggregate_filtered_query`. Valid values are `aggregate_filtered_query`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
  /**
  * base_event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#base_event_query Monitor#base_event_query}
  */
  readonly baseEventQuery?: MonitorVariablesAggregateFilteredQueryBaseEventQuery;
  /**
  * base_metrics_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#base_metrics_query Monitor#base_metrics_query}
  */
  readonly baseMetricsQuery?: MonitorVariablesAggregateFilteredQueryBaseMetricsQuery;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#compute Monitor#compute}
  */
  readonly compute?: MonitorVariablesAggregateFilteredQueryCompute[] | cdktn.IResolvable;
  /**
  * filter_event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#filter_event_query Monitor#filter_event_query}
  */
  readonly filterEventQuery?: MonitorVariablesAggregateFilteredQueryFilterEventQuery;
  /**
  * filter_reference_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#filter_reference_table Monitor#filter_reference_table}
  */
  readonly filterReferenceTable?: MonitorVariablesAggregateFilteredQueryFilterReferenceTable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#filters Monitor#filters}
  */
  readonly filters: MonitorVariablesAggregateFilteredQueryFilters[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#group_by Monitor#group_by}
  */
  readonly groupBy?: MonitorVariablesAggregateFilteredQueryGroupBy[] | cdktn.IResolvable;
}

export function monitorVariablesAggregateFilteredQueryToTerraform(struct?: MonitorVariablesAggregateFilteredQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    base_event_query: monitorVariablesAggregateFilteredQueryBaseEventQueryToTerraform(struct!.baseEventQuery),
    base_metrics_query: monitorVariablesAggregateFilteredQueryBaseMetricsQueryToTerraform(struct!.baseMetricsQuery),
    compute: cdktn.listMapper(monitorVariablesAggregateFilteredQueryComputeToTerraform, true)(struct!.compute),
    filter_event_query: monitorVariablesAggregateFilteredQueryFilterEventQueryToTerraform(struct!.filterEventQuery),
    filter_reference_table: monitorVariablesAggregateFilteredQueryFilterReferenceTableToTerraform(struct!.filterReferenceTable),
    filters: cdktn.listMapper(monitorVariablesAggregateFilteredQueryFiltersToTerraform, true)(struct!.filters),
    group_by: cdktn.listMapper(monitorVariablesAggregateFilteredQueryGroupByToTerraform, true)(struct!.groupBy),
  }
}


export function monitorVariablesAggregateFilteredQueryToHclTerraform(struct?: MonitorVariablesAggregateFilteredQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    base_event_query: {
      value: monitorVariablesAggregateFilteredQueryBaseEventQueryToHclTerraform(struct!.baseEventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryBaseEventQueryList",
    },
    base_metrics_query: {
      value: monitorVariablesAggregateFilteredQueryBaseMetricsQueryToHclTerraform(struct!.baseMetricsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryBaseMetricsQueryList",
    },
    compute: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateFilteredQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryComputeList",
    },
    filter_event_query: {
      value: monitorVariablesAggregateFilteredQueryFilterEventQueryToHclTerraform(struct!.filterEventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryFilterEventQueryList",
    },
    filter_reference_table: {
      value: monitorVariablesAggregateFilteredQueryFilterReferenceTableToHclTerraform(struct!.filterReferenceTable),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryFilterReferenceTableList",
    },
    filters: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateFilteredQueryFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryFiltersList",
    },
    group_by: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateFilteredQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryGroupByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesAggregateFilteredQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesAggregateFilteredQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._baseEventQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEventQuery = this._baseEventQuery?.internalValue;
    }
    if (this._baseMetricsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseMetricsQuery = this._baseMetricsQuery?.internalValue;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._filterEventQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEventQuery = this._filterEventQuery?.internalValue;
    }
    if (this._filterReferenceTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterReferenceTable = this._filterReferenceTable?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesAggregateFilteredQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSource = undefined;
      this._name = undefined;
      this._baseEventQuery.internalValue = undefined;
      this._baseMetricsQuery.internalValue = undefined;
      this._compute.internalValue = undefined;
      this._filterEventQuery.internalValue = undefined;
      this._filterReferenceTable.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._groupBy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._baseEventQuery.internalValue = value.baseEventQuery;
      this._baseMetricsQuery.internalValue = value.baseMetricsQuery;
      this._compute.internalValue = value.compute;
      this._filterEventQuery.internalValue = value.filterEventQuery;
      this._filterReferenceTable.internalValue = value.filterReferenceTable;
      this._filters.internalValue = value.filters;
      this._groupBy.internalValue = value.groupBy;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // base_event_query - computed: false, optional: true, required: false
  private _baseEventQuery = new MonitorVariablesAggregateFilteredQueryBaseEventQueryOutputReference(this, "base_event_query");
  public get baseEventQuery() {
    return this._baseEventQuery;
  }
  public putBaseEventQuery(value: MonitorVariablesAggregateFilteredQueryBaseEventQuery) {
    this._baseEventQuery.internalValue = value;
  }
  public resetBaseEventQuery() {
    this._baseEventQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEventQueryInput() {
    return this._baseEventQuery.internalValue;
  }

  // base_metrics_query - computed: false, optional: true, required: false
  private _baseMetricsQuery = new MonitorVariablesAggregateFilteredQueryBaseMetricsQueryOutputReference(this, "base_metrics_query");
  public get baseMetricsQuery() {
    return this._baseMetricsQuery;
  }
  public putBaseMetricsQuery(value: MonitorVariablesAggregateFilteredQueryBaseMetricsQuery) {
    this._baseMetricsQuery.internalValue = value;
  }
  public resetBaseMetricsQuery() {
    this._baseMetricsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseMetricsQueryInput() {
    return this._baseMetricsQuery.internalValue;
  }

  // compute - computed: false, optional: true, required: false
  private _compute = new MonitorVariablesAggregateFilteredQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: MonitorVariablesAggregateFilteredQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // filter_event_query - computed: false, optional: true, required: false
  private _filterEventQuery = new MonitorVariablesAggregateFilteredQueryFilterEventQueryOutputReference(this, "filter_event_query");
  public get filterEventQuery() {
    return this._filterEventQuery;
  }
  public putFilterEventQuery(value: MonitorVariablesAggregateFilteredQueryFilterEventQuery) {
    this._filterEventQuery.internalValue = value;
  }
  public resetFilterEventQuery() {
    this._filterEventQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEventQueryInput() {
    return this._filterEventQuery.internalValue;
  }

  // filter_reference_table - computed: false, optional: true, required: false
  private _filterReferenceTable = new MonitorVariablesAggregateFilteredQueryFilterReferenceTableOutputReference(this, "filter_reference_table");
  public get filterReferenceTable() {
    return this._filterReferenceTable;
  }
  public putFilterReferenceTable(value: MonitorVariablesAggregateFilteredQueryFilterReferenceTable) {
    this._filterReferenceTable.internalValue = value;
  }
  public resetFilterReferenceTable() {
    this._filterReferenceTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterReferenceTableInput() {
    return this._filterReferenceTable.internalValue;
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new MonitorVariablesAggregateFilteredQueryFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: MonitorVariablesAggregateFilteredQueryFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new MonitorVariablesAggregateFilteredQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: MonitorVariablesAggregateFilteredQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }
}

export class MonitorVariablesAggregateFilteredQueryList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesAggregateFilteredQuery[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesAggregateFilteredQueryOutputReference {
    return new MonitorVariablesAggregateFilteredQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesCloudCostQuery {
  /**
  * The aggregation methods available for cloud cost queries. Valid values are `avg`, `sum`, `max`, `min`, `last`, `area`, `l2norm`, `percentile`, `stddev`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregator Monitor#aggregator}
  */
  readonly aggregator: string;
  /**
  * The data source for cloud cost queries. Valid values are `metrics`, `cloud_cost`, `datadog_usage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * The cloud cost query definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
}

export function monitorVariablesCloudCostQueryToTerraform(struct?: MonitorVariablesCloudCostQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorVariablesCloudCostQueryOutputReference {
    return new MonitorVariablesCloudCostQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesDataJobsQuery {
  /**
  * The type of job being monitored. Valid values include `databricks.job`, `spark.application`, `airflow.dag`, `dbt.job`, `dbt.model`, `dbt.test`, `glue.job`. Custom job types are supported with the `custom.ol.` prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#job_type Monitor#job_type}
  */
  readonly jobType: string;
  /**
  * Filter expression used to select the jobs to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#jobs_query Monitor#jobs_query}
  */
  readonly jobsQuery: string;
  /**
  * Name of the query for use in formulas. Must be `run_query`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * Query dialect for data jobs queries. Currently only `metric` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query_dialect Monitor#query_dialect}
  */
  readonly queryDialect: string;
}

export function monitorVariablesDataJobsQueryToTerraform(struct?: MonitorVariablesDataJobsQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_type: cdktn.stringToTerraform(struct!.jobType),
    jobs_query: cdktn.stringToTerraform(struct!.jobsQuery),
    name: cdktn.stringToTerraform(struct!.name),
    query_dialect: cdktn.stringToTerraform(struct!.queryDialect),
  }
}


export function monitorVariablesDataJobsQueryToHclTerraform(struct?: MonitorVariablesDataJobsQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_type: {
      value: cdktn.stringToHclTerraform(struct!.jobType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jobs_query: {
      value: cdktn.stringToHclTerraform(struct!.jobsQuery),
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
    query_dialect: {
      value: cdktn.stringToHclTerraform(struct!.queryDialect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorVariablesDataJobsQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorVariablesDataJobsQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobType = this._jobType;
    }
    if (this._jobsQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobsQuery = this._jobsQuery;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queryDialect !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryDialect = this._queryDialect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorVariablesDataJobsQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobType = undefined;
      this._jobsQuery = undefined;
      this._name = undefined;
      this._queryDialect = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobType = value.jobType;
      this._jobsQuery = value.jobsQuery;
      this._name = value.name;
      this._queryDialect = value.queryDialect;
    }
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // jobs_query - computed: false, optional: false, required: true
  private _jobsQuery?: string; 
  public get jobsQuery() {
    return this.getStringAttribute('jobs_query');
  }
  public set jobsQuery(value: string) {
    this._jobsQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsQueryInput() {
    return this._jobsQuery;
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

  // query_dialect - computed: false, optional: false, required: true
  private _queryDialect?: string; 
  public get queryDialect() {
    return this.getStringAttribute('query_dialect');
  }
  public set queryDialect(value: string) {
    this._queryDialect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDialectInput() {
    return this._queryDialect;
  }
}

export class MonitorVariablesDataJobsQueryList extends cdktn.ComplexList {
  public internalValue? : MonitorVariablesDataJobsQuery[] | cdktn.IResolvable

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
  public get(index: number): MonitorVariablesDataJobsQueryOutputReference {
    return new MonitorVariablesDataJobsQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorVariablesDataQualityQueryMonitorOptions {
  /**
  * Crontab expression to override the default schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#crontab_override Monitor#crontab_override}
  */
  readonly crontabOverride?: string;
  /**
  * Custom SQL query for the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#custom_sql Monitor#custom_sql}
  */
  readonly customSql?: string;
  /**
  * Custom WHERE clause for the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#custom_where Monitor#custom_where}
  */
  readonly customWhere?: string;
  /**
  * Columns to group results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#group_by_columns Monitor#group_by_columns}
  */
  readonly groupByColumns?: string[];
  /**
  * Override for the model type. Valid values are `freshness`, `percentage`, `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#model_type_override Monitor#model_type_override}
  */
  readonly modelTypeOverride?: string;
}

export function monitorVariablesDataQualityQueryMonitorOptionsToTerraform(struct?: MonitorVariablesDataQualityQueryMonitorOptionsOutputReference | MonitorVariablesDataQualityQueryMonitorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * Filter expression used to match on data entities. Uses AAstra query syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#filter Monitor#filter}
  */
  readonly filter: string;
  /**
  * Optional grouping fields for aggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#group_by Monitor#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The measure to query. Common values include `bytes`, `cardinality`, `custom`, `freshness`, `max`, `mean`, `min`, `nullness`, `percent_negative`, `percent_zero`, `row_count`, `stddev`, `sum`, `uniqueness`. Additional values may be supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#measure Monitor#measure}
  */
  readonly measure: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * Schema version for the data quality query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#schema_version Monitor#schema_version}
  */
  readonly schemaVersion?: string;
  /**
  * Optional scoping expression to further filter metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#scope Monitor#scope}
  */
  readonly scope?: string;
  /**
  * monitor_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#monitor_options Monitor#monitor_options}
  */
  readonly monitorOptions?: MonitorVariablesDataQualityQueryMonitorOptions;
}

export function monitorVariablesDataQualityQueryToTerraform(struct?: MonitorVariablesDataQualityQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    super(terraformResource, terraformAttribute, wrapsSet);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#interval Monitor#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * The name assigned to this aggregation when multiple aggregations are defined for a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name?: string;
}

export function monitorVariablesEventQueryComputeToTerraform(struct?: MonitorVariablesEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function monitorVariablesEventQueryComputeToHclTerraform(struct?: MonitorVariablesEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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
      this._name = undefined;
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
      this._name = value.name;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
    super(terraformResource, terraformAttribute, wrapsSet);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregation Monitor#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#metric Monitor#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#order Monitor#order}
  */
  readonly order?: string;
}

export function monitorVariablesEventQueryGroupBySortToTerraform(struct?: MonitorVariablesEventQueryGroupBySortOutputReference | MonitorVariablesEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#facet Monitor#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#limit Monitor#limit}
  */
  readonly limit?: number;
  /**
  * For composite aggregate-augmented queries, identifies which sub-query this group-by facet refers to (for example `filter_query`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#source Monitor#source}
  */
  readonly source?: string;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#sort Monitor#sort}
  */
  readonly sort?: MonitorVariablesEventQueryGroupBySort;
}

export function monitorVariablesEventQueryGroupByToTerraform(struct?: MonitorVariablesEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    source: cdktn.stringToTerraform(struct!.source),
    sort: monitorVariablesEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function monitorVariablesEventQueryGroupByToHclTerraform(struct?: MonitorVariablesEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
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
      this._source = undefined;
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
      this._source = value.source;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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
    super(terraformResource, terraformAttribute, wrapsSet);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#query Monitor#query}
  */
  readonly query: string;
}

export function monitorVariablesEventQuerySearchToTerraform(struct?: MonitorVariablesEventQuerySearchOutputReference | MonitorVariablesEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function monitorVariablesEventQuerySearchToHclTerraform(struct?: MonitorVariablesEventQuerySearchOutputReference | MonitorVariablesEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_source Monitor#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#indexes Monitor#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#compute Monitor#compute}
  */
  readonly compute: MonitorVariablesEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#group_by Monitor#group_by}
  */
  readonly groupBy?: MonitorVariablesEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#search Monitor#search}
  */
  readonly search: MonitorVariablesEventQuerySearch;
}

export function monitorVariablesEventQueryToTerraform(struct?: MonitorVariablesEventQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    super(terraformResource, terraformAttribute, wrapsSet);
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
  * aggregate_augmented_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregate_augmented_query Monitor#aggregate_augmented_query}
  */
  readonly aggregateAugmentedQuery?: MonitorVariablesAggregateAugmentedQuery[] | cdktn.IResolvable;
  /**
  * aggregate_filtered_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#aggregate_filtered_query Monitor#aggregate_filtered_query}
  */
  readonly aggregateFilteredQuery?: MonitorVariablesAggregateFilteredQuery[] | cdktn.IResolvable;
  /**
  * cloud_cost_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#cloud_cost_query Monitor#cloud_cost_query}
  */
  readonly cloudCostQuery?: MonitorVariablesCloudCostQuery[] | cdktn.IResolvable;
  /**
  * data_jobs_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_jobs_query Monitor#data_jobs_query}
  */
  readonly dataJobsQuery?: MonitorVariablesDataJobsQuery[] | cdktn.IResolvable;
  /**
  * data_quality_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#data_quality_query Monitor#data_quality_query}
  */
  readonly dataQualityQuery?: MonitorVariablesDataQualityQuery[] | cdktn.IResolvable;
  /**
  * event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#event_query Monitor#event_query}
  */
  readonly eventQuery?: MonitorVariablesEventQuery[] | cdktn.IResolvable;
}

export function monitorVariablesToTerraform(struct?: MonitorVariablesOutputReference | MonitorVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregate_augmented_query: cdktn.listMapper(monitorVariablesAggregateAugmentedQueryToTerraform, true)(struct!.aggregateAugmentedQuery),
    aggregate_filtered_query: cdktn.listMapper(monitorVariablesAggregateFilteredQueryToTerraform, true)(struct!.aggregateFilteredQuery),
    cloud_cost_query: cdktn.listMapper(monitorVariablesCloudCostQueryToTerraform, true)(struct!.cloudCostQuery),
    data_jobs_query: cdktn.listMapper(monitorVariablesDataJobsQueryToTerraform, true)(struct!.dataJobsQuery),
    data_quality_query: cdktn.listMapper(monitorVariablesDataQualityQueryToTerraform, true)(struct!.dataQualityQuery),
    event_query: cdktn.listMapper(monitorVariablesEventQueryToTerraform, true)(struct!.eventQuery),
  }
}


export function monitorVariablesToHclTerraform(struct?: MonitorVariablesOutputReference | MonitorVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregate_augmented_query: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateAugmentedQueryToHclTerraform, true)(struct!.aggregateAugmentedQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateAugmentedQueryList",
    },
    aggregate_filtered_query: {
      value: cdktn.listMapperHcl(monitorVariablesAggregateFilteredQueryToHclTerraform, true)(struct!.aggregateFilteredQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesAggregateFilteredQueryList",
    },
    cloud_cost_query: {
      value: cdktn.listMapperHcl(monitorVariablesCloudCostQueryToHclTerraform, true)(struct!.cloudCostQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesCloudCostQueryList",
    },
    data_jobs_query: {
      value: cdktn.listMapperHcl(monitorVariablesDataJobsQueryToHclTerraform, true)(struct!.dataJobsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorVariablesDataJobsQueryList",
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
    if (this._aggregateAugmentedQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateAugmentedQuery = this._aggregateAugmentedQuery?.internalValue;
    }
    if (this._aggregateFilteredQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateFilteredQuery = this._aggregateFilteredQuery?.internalValue;
    }
    if (this._cloudCostQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCostQuery = this._cloudCostQuery?.internalValue;
    }
    if (this._dataJobsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataJobsQuery = this._dataJobsQuery?.internalValue;
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
      this._aggregateAugmentedQuery.internalValue = undefined;
      this._aggregateFilteredQuery.internalValue = undefined;
      this._cloudCostQuery.internalValue = undefined;
      this._dataJobsQuery.internalValue = undefined;
      this._dataQualityQuery.internalValue = undefined;
      this._eventQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregateAugmentedQuery.internalValue = value.aggregateAugmentedQuery;
      this._aggregateFilteredQuery.internalValue = value.aggregateFilteredQuery;
      this._cloudCostQuery.internalValue = value.cloudCostQuery;
      this._dataJobsQuery.internalValue = value.dataJobsQuery;
      this._dataQualityQuery.internalValue = value.dataQualityQuery;
      this._eventQuery.internalValue = value.eventQuery;
    }
  }

  // aggregate_augmented_query - computed: false, optional: true, required: false
  private _aggregateAugmentedQuery = new MonitorVariablesAggregateAugmentedQueryList(this, "aggregate_augmented_query", false);
  public get aggregateAugmentedQuery() {
    return this._aggregateAugmentedQuery;
  }
  public putAggregateAugmentedQuery(value: MonitorVariablesAggregateAugmentedQuery[] | cdktn.IResolvable) {
    this._aggregateAugmentedQuery.internalValue = value;
  }
  public resetAggregateAugmentedQuery() {
    this._aggregateAugmentedQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAugmentedQueryInput() {
    return this._aggregateAugmentedQuery.internalValue;
  }

  // aggregate_filtered_query - computed: false, optional: true, required: false
  private _aggregateFilteredQuery = new MonitorVariablesAggregateFilteredQueryList(this, "aggregate_filtered_query", false);
  public get aggregateFilteredQuery() {
    return this._aggregateFilteredQuery;
  }
  public putAggregateFilteredQuery(value: MonitorVariablesAggregateFilteredQuery[] | cdktn.IResolvable) {
    this._aggregateFilteredQuery.internalValue = value;
  }
  public resetAggregateFilteredQuery() {
    this._aggregateFilteredQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateFilteredQueryInput() {
    return this._aggregateFilteredQuery.internalValue;
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

  // data_jobs_query - computed: false, optional: true, required: false
  private _dataJobsQuery = new MonitorVariablesDataJobsQueryList(this, "data_jobs_query", false);
  public get dataJobsQuery() {
    return this._dataJobsQuery;
  }
  public putDataJobsQuery(value: MonitorVariablesDataJobsQuery[] | cdktn.IResolvable) {
    this._dataJobsQuery.internalValue = value;
  }
  public resetDataJobsQuery() {
    this._dataJobsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataJobsQueryInput() {
    return this._dataJobsQuery.internalValue;
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
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor datadog_monitor}
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
  * @param importFromId The id of the existing Monitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Monitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/monitor datadog_monitor} Resource
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
        providerVersion: '4.13.0',
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
