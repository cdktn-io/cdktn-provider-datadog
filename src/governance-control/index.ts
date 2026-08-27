/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GovernanceControlConfig extends cdktn.TerraformMetaArguments {
  /**
  * Detection parameters for the control, as a JSON-encoded map of parameter names to their configured values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#detection_parameters GovernanceControl#detection_parameters}
  */
  readonly detectionParameters?: string;
  /**
  * The detection type that uniquely identifies the control, for example `unused_api_keys`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#detection_type GovernanceControl#detection_type}
  */
  readonly detectionType: string;
  /**
  * Mitigation parameters for the control, as a JSON-encoded map of parameter names to their configured values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#mitigation_parameters GovernanceControl#mitigation_parameters}
  */
  readonly mitigationParameters?: string;
  /**
  * The mitigation type configured for the control. Empty when not configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#mitigation_type GovernanceControl#mitigation_type}
  */
  readonly mitigationType?: string;
  /**
  * The notification settings for the control, one entry per event type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#notification_settings GovernanceControl#notification_settings}
  */
  readonly notificationSettings?: GovernanceControlNotificationSettings[] | cdktn.IResolvable;
}
export interface GovernanceControlNotificationSettingsTargets {
  /**
  * The handle of the notification target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#handle GovernanceControl#handle}
  */
  readonly handle: string;
  /**
  * The type of notification target: `email`, `slack`, `at_mention`, or `case`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#type GovernanceControl#type}
  */
  readonly type: string;
}

export function governanceControlNotificationSettingsTargetsToTerraform(struct?: GovernanceControlNotificationSettingsTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    handle: cdktn.stringToTerraform(struct!.handle),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function governanceControlNotificationSettingsTargetsToHclTerraform(struct?: GovernanceControlNotificationSettingsTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    handle: {
      value: cdktn.stringToHclTerraform(struct!.handle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GovernanceControlNotificationSettingsTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GovernanceControlNotificationSettingsTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handle !== undefined) {
      hasAnyValues = true;
      internalValueResult.handle = this._handle;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GovernanceControlNotificationSettingsTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._handle = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._handle = value.handle;
      this._type = value.type;
    }
  }

  // handle - computed: true, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
  }

  // type - computed: true, optional: false, required: true
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
}

export class GovernanceControlNotificationSettingsTargetsList extends cdktn.ComplexList {
  public internalValue? : GovernanceControlNotificationSettingsTargets[] | cdktn.IResolvable

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
  public get(index: number): GovernanceControlNotificationSettingsTargetsOutputReference {
    return new GovernanceControlNotificationSettingsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GovernanceControlNotificationSettings {
  /**
  * Whether notifications are enabled for this event type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#enabled GovernanceControl#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The event type the notification settings apply to, such as `new_detection`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#event_type GovernanceControl#event_type}
  */
  readonly eventType: string;
  /**
  * The destinations that receive notifications for this event type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#targets GovernanceControl#targets}
  */
  readonly targets: GovernanceControlNotificationSettingsTargets[] | cdktn.IResolvable;
}

export function governanceControlNotificationSettingsToTerraform(struct?: GovernanceControlNotificationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    event_type: cdktn.stringToTerraform(struct!.eventType),
    targets: cdktn.listMapper(governanceControlNotificationSettingsTargetsToTerraform, false)(struct!.targets),
  }
}


export function governanceControlNotificationSettingsToHclTerraform(struct?: GovernanceControlNotificationSettings | cdktn.IResolvable): any {
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
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: cdktn.listMapperHcl(governanceControlNotificationSettingsTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "GovernanceControlNotificationSettingsTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GovernanceControlNotificationSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GovernanceControlNotificationSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GovernanceControlNotificationSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._eventType = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._eventType = value.eventType;
      this._targets.internalValue = value.targets;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_type - computed: true, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // targets - computed: true, optional: false, required: true
  private _targets = new GovernanceControlNotificationSettingsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: GovernanceControlNotificationSettingsTargets[] | cdktn.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

export class GovernanceControlNotificationSettingsList extends cdktn.ComplexList {
  public internalValue? : GovernanceControlNotificationSettings[] | cdktn.IResolvable

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
  public get(index: number): GovernanceControlNotificationSettingsOutputReference {
    return new GovernanceControlNotificationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control datadog_governance_control}
*/
export class GovernanceControl extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_governance_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GovernanceControl resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GovernanceControl to import
  * @param importFromId The id of the existing GovernanceControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GovernanceControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_governance_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control datadog_governance_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GovernanceControlConfig
  */
  public constructor(scope: Construct, id: string, config: GovernanceControlConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_governance_control',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.19.0',
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
    this._detectionParameters = config.detectionParameters;
    this._detectionType = config.detectionType;
    this._mitigationParameters = config.mitigationParameters;
    this._mitigationType = config.mitigationType;
    this._notificationSettings.internalValue = config.notificationSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detection_parameters - computed: true, optional: true, required: false
  private _detectionParameters?: string; 
  public get detectionParameters() {
    return this.getStringAttribute('detection_parameters');
  }
  public set detectionParameters(value: string) {
    this._detectionParameters = value;
  }
  public resetDetectionParameters() {
    this._detectionParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionParametersInput() {
    return this._detectionParameters;
  }

  // detection_type - computed: false, optional: false, required: true
  private _detectionType?: string; 
  public get detectionType() {
    return this.getStringAttribute('detection_type');
  }
  public set detectionType(value: string) {
    this._detectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionTypeInput() {
    return this._detectionType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mitigation_parameters - computed: true, optional: true, required: false
  private _mitigationParameters?: string; 
  public get mitigationParameters() {
    return this.getStringAttribute('mitigation_parameters');
  }
  public set mitigationParameters(value: string) {
    this._mitigationParameters = value;
  }
  public resetMitigationParameters() {
    this._mitigationParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationParametersInput() {
    return this._mitigationParameters;
  }

  // mitigation_type - computed: true, optional: true, required: false
  private _mitigationType?: string; 
  public get mitigationType() {
    return this.getStringAttribute('mitigation_type');
  }
  public set mitigationType(value: string) {
    this._mitigationType = value;
  }
  public resetMitigationType() {
    this._mitigationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationTypeInput() {
    return this._mitigationType;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_settings - computed: true, optional: true, required: false
  private _notificationSettings = new GovernanceControlNotificationSettingsList(this, "notification_settings", false);
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: GovernanceControlNotificationSettings[] | cdktn.IResolvable) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detection_parameters: cdktn.stringToTerraform(this._detectionParameters),
      detection_type: cdktn.stringToTerraform(this._detectionType),
      mitigation_parameters: cdktn.stringToTerraform(this._mitigationParameters),
      mitigation_type: cdktn.stringToTerraform(this._mitigationType),
      notification_settings: cdktn.listMapper(governanceControlNotificationSettingsToTerraform, false)(this._notificationSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detection_parameters: {
        value: cdktn.stringToHclTerraform(this._detectionParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detection_type: {
        value: cdktn.stringToHclTerraform(this._detectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mitigation_parameters: {
        value: cdktn.stringToHclTerraform(this._mitigationParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mitigation_type: {
        value: cdktn.stringToHclTerraform(this._mitigationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_settings: {
        value: cdktn.listMapperHcl(governanceControlNotificationSettingsToHclTerraform, false)(this._notificationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GovernanceControlNotificationSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
