/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityFindingsDueDateRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The action to take when the due date rule matches a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#action SecurityFindingsDueDateRule#action}
  */
  readonly action: SecurityFindingsDueDateRuleAction;
  /**
  * Whether the due date rule is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#enabled SecurityFindingsDueDateRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The name of the due date rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#name SecurityFindingsDueDateRule#name}
  */
  readonly name: string;
  /**
  * Defines the scope of findings to which the automation rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#rule SecurityFindingsDueDateRule#rule}
  */
  readonly rule: SecurityFindingsDueDateRuleRule;
}
export interface SecurityFindingsDueDateRuleActionDueDaysPerSeverity {
  /**
  * The number of days from the reference point until the finding is due.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#due_in_days SecurityFindingsDueDateRule#due_in_days}
  */
  readonly dueInDays: number;
  /**
  * A severity level used to configure due date thresholds. Valid values are `critical`, `high`, `medium`, `low`, `info`, `none`, `unknown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#severity SecurityFindingsDueDateRule#severity}
  */
  readonly severity: string;
}

export function securityFindingsDueDateRuleActionDueDaysPerSeverityToTerraform(struct?: SecurityFindingsDueDateRuleActionDueDaysPerSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    due_in_days: cdktn.numberToTerraform(struct!.dueInDays),
    severity: cdktn.stringToTerraform(struct!.severity),
  }
}


export function securityFindingsDueDateRuleActionDueDaysPerSeverityToHclTerraform(struct?: SecurityFindingsDueDateRuleActionDueDaysPerSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    due_in_days: {
      value: cdktn.numberToHclTerraform(struct!.dueInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktn.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityFindingsDueDateRuleActionDueDaysPerSeverity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dueInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.dueInDays = this._dueInDays;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFindingsDueDateRuleActionDueDaysPerSeverity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dueInDays = undefined;
      this._severity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dueInDays = value.dueInDays;
      this._severity = value.severity;
    }
  }

  // due_in_days - computed: false, optional: false, required: true
  private _dueInDays?: number; 
  public get dueInDays() {
    return this.getNumberAttribute('due_in_days');
  }
  public set dueInDays(value: number) {
    this._dueInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dueInDaysInput() {
    return this._dueInDays;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class SecurityFindingsDueDateRuleActionDueDaysPerSeverityList extends cdktn.ComplexList {
  public internalValue? : SecurityFindingsDueDateRuleActionDueDaysPerSeverity[] | cdktn.IResolvable

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
  public get(index: number): SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference {
    return new SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityFindingsDueDateRuleAction {
  /**
  * A list of severity-to-due-date mappings. Each severity may appear at most once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#due_days_per_severity SecurityFindingsDueDateRule#due_days_per_severity}
  */
  readonly dueDaysPerSeverity: SecurityFindingsDueDateRuleActionDueDaysPerSeverity[] | cdktn.IResolvable;
  /**
  * The reference point from which the due date is calculated. When `fix_available` is selected but not applicable to the finding type, `first_seen` is used instead. Valid values are `first_seen`, `fix_available`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#due_from SecurityFindingsDueDateRule#due_from}
  */
  readonly dueFrom: string;
  /**
  * An optional description providing more context for the due date assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#reason_description SecurityFindingsDueDateRule#reason_description}
  */
  readonly reasonDescription?: string;
}

export function securityFindingsDueDateRuleActionToTerraform(struct?: SecurityFindingsDueDateRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    due_days_per_severity: cdktn.listMapper(securityFindingsDueDateRuleActionDueDaysPerSeverityToTerraform, false)(struct!.dueDaysPerSeverity),
    due_from: cdktn.stringToTerraform(struct!.dueFrom),
    reason_description: cdktn.stringToTerraform(struct!.reasonDescription),
  }
}


export function securityFindingsDueDateRuleActionToHclTerraform(struct?: SecurityFindingsDueDateRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    due_days_per_severity: {
      value: cdktn.listMapperHcl(securityFindingsDueDateRuleActionDueDaysPerSeverityToHclTerraform, false)(struct!.dueDaysPerSeverity),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityFindingsDueDateRuleActionDueDaysPerSeverityList",
    },
    due_from: {
      value: cdktn.stringToHclTerraform(struct!.dueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_description: {
      value: cdktn.stringToHclTerraform(struct!.reasonDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFindingsDueDateRuleActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFindingsDueDateRuleAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dueDaysPerSeverity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dueDaysPerSeverity = this._dueDaysPerSeverity?.internalValue;
    }
    if (this._dueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.dueFrom = this._dueFrom;
    }
    if (this._reasonDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonDescription = this._reasonDescription;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFindingsDueDateRuleAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dueDaysPerSeverity.internalValue = undefined;
      this._dueFrom = undefined;
      this._reasonDescription = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dueDaysPerSeverity.internalValue = value.dueDaysPerSeverity;
      this._dueFrom = value.dueFrom;
      this._reasonDescription = value.reasonDescription;
    }
  }

  // due_days_per_severity - computed: false, optional: false, required: true
  private _dueDaysPerSeverity = new SecurityFindingsDueDateRuleActionDueDaysPerSeverityList(this, "due_days_per_severity", false);
  public get dueDaysPerSeverity() {
    return this._dueDaysPerSeverity;
  }
  public putDueDaysPerSeverity(value: SecurityFindingsDueDateRuleActionDueDaysPerSeverity[] | cdktn.IResolvable) {
    this._dueDaysPerSeverity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dueDaysPerSeverityInput() {
    return this._dueDaysPerSeverity.internalValue;
  }

  // due_from - computed: false, optional: false, required: true
  private _dueFrom?: string; 
  public get dueFrom() {
    return this.getStringAttribute('due_from');
  }
  public set dueFrom(value: string) {
    this._dueFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dueFromInput() {
    return this._dueFrom;
  }

  // reason_description - computed: false, optional: true, required: false
  private _reasonDescription?: string; 
  public get reasonDescription() {
    return this.getStringAttribute('reason_description');
  }
  public set reasonDescription(value: string) {
    this._reasonDescription = value;
  }
  public resetReasonDescription() {
    this._reasonDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonDescriptionInput() {
    return this._reasonDescription;
  }
}
export interface SecurityFindingsDueDateRuleRule {
  /**
  * The list of security finding types that the automation rule applies to. Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#finding_types SecurityFindingsDueDateRule#finding_types}
  */
  readonly findingTypes: string[];
  /**
  * A search query to further filter the findings matched by this rule. The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#query SecurityFindingsDueDateRule#query}
  */
  readonly query?: string;
}

export function securityFindingsDueDateRuleRuleToTerraform(struct?: SecurityFindingsDueDateRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    finding_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.findingTypes),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function securityFindingsDueDateRuleRuleToHclTerraform(struct?: SecurityFindingsDueDateRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    finding_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.findingTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SecurityFindingsDueDateRuleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFindingsDueDateRuleRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._findingTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingTypes = this._findingTypes;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFindingsDueDateRuleRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._findingTypes = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._findingTypes = value.findingTypes;
      this._query = value.query;
    }
  }

  // finding_types - computed: false, optional: false, required: true
  private _findingTypes?: string[]; 
  public get findingTypes() {
    return this.getListAttribute('finding_types');
  }
  public set findingTypes(value: string[]) {
    this._findingTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findingTypesInput() {
    return this._findingTypes;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule datadog_security_findings_due_date_rule}
*/
export class SecurityFindingsDueDateRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_findings_due_date_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityFindingsDueDateRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityFindingsDueDateRule to import
  * @param importFromId The id of the existing SecurityFindingsDueDateRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityFindingsDueDateRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_findings_due_date_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_due_date_rule datadog_security_findings_due_date_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityFindingsDueDateRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityFindingsDueDateRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_findings_due_date_rule',
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
    this._action.internalValue = config.action;
    this._enabled = config.enabled;
    this._name = config.name;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action = new SecurityFindingsDueDateRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SecurityFindingsDueDateRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
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

  // rule - computed: false, optional: false, required: true
  private _rule = new SecurityFindingsDueDateRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecurityFindingsDueDateRuleRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: securityFindingsDueDateRuleActionToTerraform(this._action.internalValue),
      enabled: cdktn.booleanToTerraform(this._enabled),
      name: cdktn.stringToTerraform(this._name),
      rule: securityFindingsDueDateRuleRuleToTerraform(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: securityFindingsDueDateRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityFindingsDueDateRuleAction",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
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
      rule: {
        value: securityFindingsDueDateRuleRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityFindingsDueDateRuleRule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
