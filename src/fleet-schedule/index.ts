/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FleetScheduleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Human-readable name for the schedule. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule#name FleetSchedule#name}
  */
  readonly name: string;
  /**
  * Datadog host query used to select the Agent upgrade targets. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule#query FleetSchedule#query}
  */
  readonly query: string;
  /**
  * Weekly recurrence and maintenance-window configuration for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule#rule FleetSchedule#rule}
  */
  readonly rule: FleetScheduleRule;
  /**
  * Whether the schedule creates deployments. Valid values are `active` and `inactive`. The API default is used when omitted. Valid values are `active`, `inactive`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule#status FleetSchedule#status}
  */
  readonly status?: string;
  /**
  * Number of major Agent versions behind the latest version to target: `0`, `1`, or `2`. The API default is used when omitted. Value must be between 0 and 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule#version_to_latest FleetSchedule#version_to_latest}
  */
  readonly versionToLatest?: number;
}
export interface FleetScheduleRule {
  /**
  * Days when the schedule may run. Valid values are `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, and `Sun`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule#days_of_week FleetSchedule#days_of_week}
  */
  readonly daysOfWeek: string[];
  /**
  * Duration of the maintenance window in minutes. Value must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule#maintenance_window_duration FleetSchedule#maintenance_window_duration}
  */
  readonly maintenanceWindowDuration: number;
  /**
  * Start of the maintenance window in 24-hour `HH:MM` format. Must use HH:MM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule#start_maintenance_window FleetSchedule#start_maintenance_window}
  */
  readonly startMaintenanceWindow: string;
  /**
  * IANA time zone used to interpret the maintenance window, for example `America/New_York` or `UTC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule#timezone FleetSchedule#timezone}
  */
  readonly timezone: string;
}

export function fleetScheduleRuleToTerraform(struct?: FleetScheduleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_of_week: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.daysOfWeek),
    maintenance_window_duration: cdktn.numberToTerraform(struct!.maintenanceWindowDuration),
    start_maintenance_window: cdktn.stringToTerraform(struct!.startMaintenanceWindow),
    timezone: cdktn.stringToTerraform(struct!.timezone),
  }
}


export function fleetScheduleRuleToHclTerraform(struct?: FleetScheduleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_of_week: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maintenance_window_duration: {
      value: cdktn.numberToHclTerraform(struct!.maintenanceWindowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_maintenance_window: {
      value: cdktn.stringToHclTerraform(struct!.startMaintenanceWindow),
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

export class FleetScheduleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetScheduleRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._maintenanceWindowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowDuration = this._maintenanceWindowDuration;
    }
    if (this._startMaintenanceWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMaintenanceWindow = this._startMaintenanceWindow;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetScheduleRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfWeek = undefined;
      this._maintenanceWindowDuration = undefined;
      this._startMaintenanceWindow = undefined;
      this._timezone = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfWeek = value.daysOfWeek;
      this._maintenanceWindowDuration = value.maintenanceWindowDuration;
      this._startMaintenanceWindow = value.startMaintenanceWindow;
      this._timezone = value.timezone;
    }
  }

  // days_of_week - computed: false, optional: false, required: true
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return cdktn.Fn.tolist(this.getListAttribute('days_of_week'));
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // maintenance_window_duration - computed: false, optional: false, required: true
  private _maintenanceWindowDuration?: number; 
  public get maintenanceWindowDuration() {
    return this.getNumberAttribute('maintenance_window_duration');
  }
  public set maintenanceWindowDuration(value: number) {
    this._maintenanceWindowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDurationInput() {
    return this._maintenanceWindowDuration;
  }

  // start_maintenance_window - computed: false, optional: false, required: true
  private _startMaintenanceWindow?: string; 
  public get startMaintenanceWindow() {
    return this.getStringAttribute('start_maintenance_window');
  }
  public set startMaintenanceWindow(value: string) {
    this._startMaintenanceWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startMaintenanceWindowInput() {
    return this._startMaintenanceWindow;
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

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule datadog_fleet_schedule}
*/
export class FleetSchedule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_fleet_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FleetSchedule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetSchedule to import
  * @param importFromId The id of the existing FleetSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_fleet_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/fleet_schedule datadog_fleet_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: FleetScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_fleet_schedule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.22.0',
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
    this._name = config.name;
    this._query = config.query;
    this._rule.internalValue = config.rule;
    this._status = config.status;
    this._versionToLatest = config.versionToLatest;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rule - computed: false, optional: false, required: true
  private _rule = new FleetScheduleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: FleetScheduleRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // version_to_latest - computed: true, optional: true, required: false
  private _versionToLatest?: number; 
  public get versionToLatest() {
    return this.getNumberAttribute('version_to_latest');
  }
  public set versionToLatest(value: number) {
    this._versionToLatest = value;
  }
  public resetVersionToLatest() {
    this._versionToLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionToLatestInput() {
    return this._versionToLatest;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      query: cdktn.stringToTerraform(this._query),
      rule: fleetScheduleRuleToTerraform(this._rule.internalValue),
      status: cdktn.stringToTerraform(this._status),
      version_to_latest: cdktn.numberToTerraform(this._versionToLatest),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      rule: {
        value: fleetScheduleRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetScheduleRule",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_to_latest: {
        value: cdktn.numberToHclTerraform(this._versionToLatest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
