/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityFindingsTicketCreationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The action to take when the ticket creation rule matches a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#action SecurityFindingsTicketCreationRule#action}
  */
  readonly action: SecurityFindingsTicketCreationRuleAction;
  /**
  * Whether the ticket creation rule is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#enabled SecurityFindingsTicketCreationRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The name of the ticket creation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#name SecurityFindingsTicketCreationRule#name}
  */
  readonly name: string;
  /**
  * Defines the scope of findings to which the automation rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#rule SecurityFindingsTicketCreationRule#rule}
  */
  readonly rule: SecurityFindingsTicketCreationRuleRule;
}
export interface SecurityFindingsTicketCreationRuleAction {
  /**
  * The UUID of the default assignee for created tickets. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#assignee_id SecurityFindingsTicketCreationRule#assignee_id}
  */
  readonly assigneeId?: string;
  /**
  * A JSON-encoded object of custom fields of the Jira issue to create. For the list of available fields, see the [Jira documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-issues/#api-rest-api-2-issue-createmeta-projectidorkey-issuetypes-issuetypeid-get).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#fields SecurityFindingsTicketCreationRule#fields}
  */
  readonly fields?: string;
  /**
  * The maximum number of tickets the rule may create per day. If exceeded, one final ticket will be created, explaining the limit was hit and linking back to the responsible rule. Value must be between 1 and 500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#max_tickets_per_day SecurityFindingsTicketCreationRule#max_tickets_per_day}
  */
  readonly maxTicketsPerDay: number;
  /**
  * The UUID of the Case Management project. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#project_id SecurityFindingsTicketCreationRule#project_id}
  */
  readonly projectId: string;
  /**
  * The ticketing system to create tickets in. Valid values are `jira`, `case_management`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#target SecurityFindingsTicketCreationRule#target}
  */
  readonly target: string;
}

export function securityFindingsTicketCreationRuleActionToTerraform(struct?: SecurityFindingsTicketCreationRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assignee_id: cdktn.stringToTerraform(struct!.assigneeId),
    fields: cdktn.stringToTerraform(struct!.fields),
    max_tickets_per_day: cdktn.numberToTerraform(struct!.maxTicketsPerDay),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    target: cdktn.stringToTerraform(struct!.target),
  }
}


export function securityFindingsTicketCreationRuleActionToHclTerraform(struct?: SecurityFindingsTicketCreationRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assignee_id: {
      value: cdktn.stringToHclTerraform(struct!.assigneeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.stringToHclTerraform(struct!.fields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_tickets_per_day: {
      value: cdktn.numberToHclTerraform(struct!.maxTicketsPerDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFindingsTicketCreationRuleActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFindingsTicketCreationRuleAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assigneeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assigneeId = this._assigneeId;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._maxTicketsPerDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTicketsPerDay = this._maxTicketsPerDay;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFindingsTicketCreationRuleAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assigneeId = undefined;
      this._fields = undefined;
      this._maxTicketsPerDay = undefined;
      this._projectId = undefined;
      this._target = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assigneeId = value.assigneeId;
      this._fields = value.fields;
      this._maxTicketsPerDay = value.maxTicketsPerDay;
      this._projectId = value.projectId;
      this._target = value.target;
    }
  }

  // assignee_id - computed: false, optional: true, required: false
  private _assigneeId?: string; 
  public get assigneeId() {
    return this.getStringAttribute('assignee_id');
  }
  public set assigneeId(value: string) {
    this._assigneeId = value;
  }
  public resetAssigneeId() {
    this._assigneeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeIdInput() {
    return this._assigneeId;
  }

  // auto_disabled_reason - computed: true, optional: false, required: false
  public get autoDisabledReason() {
    return this.getStringAttribute('auto_disabled_reason');
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string; 
  public get fields() {
    return this.getStringAttribute('fields');
  }
  public set fields(value: string) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // max_tickets_per_day - computed: false, optional: false, required: true
  private _maxTicketsPerDay?: number; 
  public get maxTicketsPerDay() {
    return this.getNumberAttribute('max_tickets_per_day');
  }
  public set maxTicketsPerDay(value: number) {
    this._maxTicketsPerDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTicketsPerDayInput() {
    return this._maxTicketsPerDay;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface SecurityFindingsTicketCreationRuleRule {
  /**
  * The list of security finding types that the automation rule applies to. Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#finding_types SecurityFindingsTicketCreationRule#finding_types}
  */
  readonly findingTypes: string[];
  /**
  * A search query to further filter the findings matched by this rule. The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#query SecurityFindingsTicketCreationRule#query}
  */
  readonly query?: string;
}

export function securityFindingsTicketCreationRuleRuleToTerraform(struct?: SecurityFindingsTicketCreationRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    finding_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.findingTypes),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function securityFindingsTicketCreationRuleRuleToHclTerraform(struct?: SecurityFindingsTicketCreationRuleRule | cdktn.IResolvable): any {
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

export class SecurityFindingsTicketCreationRuleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFindingsTicketCreationRuleRule | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityFindingsTicketCreationRuleRule | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule datadog_security_findings_ticket_creation_rule}
*/
export class SecurityFindingsTicketCreationRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_findings_ticket_creation_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityFindingsTicketCreationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityFindingsTicketCreationRule to import
  * @param importFromId The id of the existing SecurityFindingsTicketCreationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityFindingsTicketCreationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_findings_ticket_creation_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule datadog_security_findings_ticket_creation_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityFindingsTicketCreationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityFindingsTicketCreationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_findings_ticket_creation_rule',
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
    this._action.internalValue = config.action;
    this._enabled = config.enabled;
    this._name = config.name;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action = new SecurityFindingsTicketCreationRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SecurityFindingsTicketCreationRuleAction) {
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
  private _rule = new SecurityFindingsTicketCreationRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecurityFindingsTicketCreationRuleRule) {
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
      action: securityFindingsTicketCreationRuleActionToTerraform(this._action.internalValue),
      enabled: cdktn.booleanToTerraform(this._enabled),
      name: cdktn.stringToTerraform(this._name),
      rule: securityFindingsTicketCreationRuleRuleToTerraform(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: securityFindingsTicketCreationRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityFindingsTicketCreationRuleAction",
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
        value: securityFindingsTicketCreationRuleRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityFindingsTicketCreationRuleRule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
