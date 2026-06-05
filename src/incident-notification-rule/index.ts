/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IncidentNotificationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether the notification rule is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule#enabled IncidentNotificationRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The notification handles (targets) for this rule. Examples: @team-email@company.com, @slack-channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule#handles IncidentNotificationRule#handles}
  */
  readonly handles: string[];
  /**
  * The ID of the incident type this notification rule is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule#incident_type IncidentNotificationRule#incident_type}
  */
  readonly incidentType: string;
  /**
  * The ID of the notification template to use for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule#notification_template IncidentNotificationRule#notification_template}
  */
  readonly notificationTemplate?: string;
  /**
  * List of incident fields that trigger re-notification when changed. Valid values are: status, severity, customer_impact, title, description, detected, root_cause, services, state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule#renotify_on IncidentNotificationRule#renotify_on}
  */
  readonly renotifyOn?: string[];
  /**
  * The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule#trigger IncidentNotificationRule#trigger}
  */
  readonly trigger: string;
  /**
  * The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule#visibility IncidentNotificationRule#visibility}
  */
  readonly visibility?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule#conditions IncidentNotificationRule#conditions}
  */
  readonly conditions?: IncidentNotificationRuleConditions[] | cdktn.IResolvable;
}
export interface IncidentNotificationRuleConditions {
  /**
  * The incident field to evaluate. Common values include: state, severity, services, teams. Custom fields are also supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule#field IncidentNotificationRule#field}
  */
  readonly field: string;
  /**
  * The value(s) to compare against. Multiple values are ORed together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule#values IncidentNotificationRule#values}
  */
  readonly values: string[];
}

export function incidentNotificationRuleConditionsToTerraform(struct?: IncidentNotificationRuleConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function incidentNotificationRuleConditionsToHclTerraform(struct?: IncidentNotificationRuleConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IncidentNotificationRuleConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IncidentNotificationRuleConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncidentNotificationRuleConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._values = value.values;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class IncidentNotificationRuleConditionsList extends cdktn.ComplexList {
  public internalValue? : IncidentNotificationRuleConditions[] | cdktn.IResolvable

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
  public get(index: number): IncidentNotificationRuleConditionsOutputReference {
    return new IncidentNotificationRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule datadog_incident_notification_rule}
*/
export class IncidentNotificationRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_incident_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IncidentNotificationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentNotificationRule to import
  * @param importFromId The id of the existing IncidentNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentNotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_incident_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/incident_notification_rule datadog_incident_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_incident_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.12.1',
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
    this._enabled = config.enabled;
    this._handles = config.handles;
    this._incidentType = config.incidentType;
    this._notificationTemplate = config.notificationTemplate;
    this._renotifyOn = config.renotifyOn;
    this._trigger = config.trigger;
    this._visibility = config.visibility;
    this._conditions.internalValue = config.conditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // handles - computed: false, optional: false, required: true
  private _handles?: string[]; 
  public get handles() {
    return this.getListAttribute('handles');
  }
  public set handles(value: string[]) {
    this._handles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handlesInput() {
    return this._handles;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_type - computed: false, optional: false, required: true
  private _incidentType?: string; 
  public get incidentType() {
    return this.getStringAttribute('incident_type');
  }
  public set incidentType(value: string) {
    this._incidentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTypeInput() {
    return this._incidentType;
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
  }

  // notification_template - computed: false, optional: true, required: false
  private _notificationTemplate?: string; 
  public get notificationTemplate() {
    return this.getStringAttribute('notification_template');
  }
  public set notificationTemplate(value: string) {
    this._notificationTemplate = value;
  }
  public resetNotificationTemplate() {
    this._notificationTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTemplateInput() {
    return this._notificationTemplate;
  }

  // renotify_on - computed: false, optional: true, required: false
  private _renotifyOn?: string[]; 
  public get renotifyOn() {
    return this.getListAttribute('renotify_on');
  }
  public set renotifyOn(value: string[]) {
    this._renotifyOn = value;
  }
  public resetRenotifyOn() {
    this._renotifyOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyOnInput() {
    return this._renotifyOn;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new IncidentNotificationRuleConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: IncidentNotificationRuleConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktn.booleanToTerraform(this._enabled),
      handles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._handles),
      incident_type: cdktn.stringToTerraform(this._incidentType),
      notification_template: cdktn.stringToTerraform(this._notificationTemplate),
      renotify_on: cdktn.listMapper(cdktn.stringToTerraform, false)(this._renotifyOn),
      trigger: cdktn.stringToTerraform(this._trigger),
      visibility: cdktn.stringToTerraform(this._visibility),
      conditions: cdktn.listMapper(incidentNotificationRuleConditionsToTerraform, true)(this._conditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      handles: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._handles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      incident_type: {
        value: cdktn.stringToHclTerraform(this._incidentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_template: {
        value: cdktn.stringToHclTerraform(this._notificationTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renotify_on: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._renotifyOn),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trigger: {
        value: cdktn.stringToHclTerraform(this._trigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktn.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktn.listMapperHcl(incidentNotificationRuleConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IncidentNotificationRuleConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
