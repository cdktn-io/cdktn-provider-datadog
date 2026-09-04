/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RumRetentionQuotaConfig extends cdktn.TerraformMetaArguments {
  /**
  * RUM application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#application_id RumRetentionQuota#application_id}
  */
  readonly applicationId: string;
  /**
  * The retention quota mode. Valid values are `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#mode RumRetentionQuota#mode}
  */
  readonly mode: string;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#custom RumRetentionQuota#custom}
  */
  readonly custom: RumRetentionQuotaCustom;
}
export interface RumRetentionQuotaCustom {
  /**
  * The time of day the quota resets, in `HH:MM` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_time RumRetentionQuota#daily_reset_time}
  */
  readonly dailyResetTime: string;
  /**
  * The UTC offset for `daily_reset_time`, in `±HH:MM` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_timezone RumRetentionQuota#daily_reset_timezone}
  */
  readonly dailyResetTimezone: string;
  /**
  * The action taken after the quota is reached. Valid values are `stop`, `slowdown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#quota_reached_action RumRetentionQuota#quota_reached_action}
  */
  readonly quotaReachedAction: string;
  /**
  * The maximum number of sessions to retain within the window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#session_limit RumRetentionQuota#session_limit}
  */
  readonly sessionLimit: number;
  /**
  * The window over which the quota resets. Valid values are `daily`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#window_type RumRetentionQuota#window_type}
  */
  readonly windowType: string;
}

export function rumRetentionQuotaCustomToTerraform(struct?: RumRetentionQuotaCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    daily_reset_time: cdktn.stringToTerraform(struct!.dailyResetTime),
    daily_reset_timezone: cdktn.stringToTerraform(struct!.dailyResetTimezone),
    quota_reached_action: cdktn.stringToTerraform(struct!.quotaReachedAction),
    session_limit: cdktn.numberToTerraform(struct!.sessionLimit),
    window_type: cdktn.stringToTerraform(struct!.windowType),
  }
}


export function rumRetentionQuotaCustomToHclTerraform(struct?: RumRetentionQuotaCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    daily_reset_time: {
      value: cdktn.stringToHclTerraform(struct!.dailyResetTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    daily_reset_timezone: {
      value: cdktn.stringToHclTerraform(struct!.dailyResetTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quota_reached_action: {
      value: cdktn.stringToHclTerraform(struct!.quotaReachedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_limit: {
      value: cdktn.numberToHclTerraform(struct!.sessionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_type: {
      value: cdktn.stringToHclTerraform(struct!.windowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RumRetentionQuotaCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RumRetentionQuotaCustom | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailyResetTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyResetTime = this._dailyResetTime;
    }
    if (this._dailyResetTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyResetTimezone = this._dailyResetTimezone;
    }
    if (this._quotaReachedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaReachedAction = this._quotaReachedAction;
    }
    if (this._sessionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLimit = this._sessionLimit;
    }
    if (this._windowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowType = this._windowType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RumRetentionQuotaCustom | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dailyResetTime = undefined;
      this._dailyResetTimezone = undefined;
      this._quotaReachedAction = undefined;
      this._sessionLimit = undefined;
      this._windowType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dailyResetTime = value.dailyResetTime;
      this._dailyResetTimezone = value.dailyResetTimezone;
      this._quotaReachedAction = value.quotaReachedAction;
      this._sessionLimit = value.sessionLimit;
      this._windowType = value.windowType;
    }
  }

  // daily_reset_time - computed: false, optional: false, required: true
  private _dailyResetTime?: string; 
  public get dailyResetTime() {
    return this.getStringAttribute('daily_reset_time');
  }
  public set dailyResetTime(value: string) {
    this._dailyResetTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyResetTimeInput() {
    return this._dailyResetTime;
  }

  // daily_reset_timezone - computed: false, optional: false, required: true
  private _dailyResetTimezone?: string; 
  public get dailyResetTimezone() {
    return this.getStringAttribute('daily_reset_timezone');
  }
  public set dailyResetTimezone(value: string) {
    this._dailyResetTimezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyResetTimezoneInput() {
    return this._dailyResetTimezone;
  }

  // quota_reached_action - computed: false, optional: false, required: true
  private _quotaReachedAction?: string; 
  public get quotaReachedAction() {
    return this.getStringAttribute('quota_reached_action');
  }
  public set quotaReachedAction(value: string) {
    this._quotaReachedAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaReachedActionInput() {
    return this._quotaReachedAction;
  }

  // session_limit - computed: false, optional: false, required: true
  private _sessionLimit?: number; 
  public get sessionLimit() {
    return this.getNumberAttribute('session_limit');
  }
  public set sessionLimit(value: number) {
    this._sessionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLimitInput() {
    return this._sessionLimit;
  }

  // window_type - computed: false, optional: false, required: true
  private _windowType?: string; 
  public get windowType() {
    return this.getStringAttribute('window_type');
  }
  public set windowType(value: string) {
    this._windowType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowTypeInput() {
    return this._windowType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota datadog_rum_retention_quota}
*/
export class RumRetentionQuota extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_rum_retention_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RumRetentionQuota resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumRetentionQuota to import
  * @param importFromId The id of the existing RumRetentionQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumRetentionQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_rum_retention_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota datadog_rum_retention_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumRetentionQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: RumRetentionQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_rum_retention_quota',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.20.0',
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
    this._applicationId = config.applicationId;
    this._mode = config.mode;
    this._custom.internalValue = config.custom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // custom - computed: false, optional: false, required: true
  private _custom = new RumRetentionQuotaCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: RumRetentionQuotaCustom) {
    this._custom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktn.stringToTerraform(this._applicationId),
      mode: cdktn.stringToTerraform(this._mode),
      custom: rumRetentionQuotaCustomToTerraform(this._custom.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktn.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktn.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom: {
        value: rumRetentionQuotaCustomToHclTerraform(this._custom.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RumRetentionQuotaCustom",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
