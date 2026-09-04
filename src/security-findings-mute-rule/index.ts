/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityFindingsMuteRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The action to take when the mute rule matches a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule#action SecurityFindingsMuteRule#action}
  */
  readonly action: SecurityFindingsMuteRuleAction;
  /**
  * Whether the mute rule is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule#enabled SecurityFindingsMuteRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The name of the mute rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule#name SecurityFindingsMuteRule#name}
  */
  readonly name: string;
  /**
  * Defines the scope of findings to which the automation rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule#rule SecurityFindingsMuteRule#rule}
  */
  readonly rule: SecurityFindingsMuteRuleRule;
}
export interface SecurityFindingsMuteRuleAction {
  /**
  * The Unix timestamp in milliseconds at which the mute expires. If omitted, the mute does not expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule#expire_at SecurityFindingsMuteRule#expire_at}
  */
  readonly expireAt?: number;
  /**
  * The reason for muting a security finding. Valid values are `duplicate`, `false_positive`, `no_fix`, `other`, `pending_fix`, `risk_accepted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule#reason SecurityFindingsMuteRule#reason}
  */
  readonly reason: string;
  /**
  * An optional description providing more context for the mute reason.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule#reason_description SecurityFindingsMuteRule#reason_description}
  */
  readonly reasonDescription?: string;
}

export function securityFindingsMuteRuleActionToTerraform(struct?: SecurityFindingsMuteRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expire_at: cdktn.numberToTerraform(struct!.expireAt),
    reason: cdktn.stringToTerraform(struct!.reason),
    reason_description: cdktn.stringToTerraform(struct!.reasonDescription),
  }
}


export function securityFindingsMuteRuleActionToHclTerraform(struct?: SecurityFindingsMuteRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expire_at: {
      value: cdktn.numberToHclTerraform(struct!.expireAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reason: {
      value: cdktn.stringToHclTerraform(struct!.reason),
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

export class SecurityFindingsMuteRuleActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFindingsMuteRuleAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expireAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireAt = this._expireAt;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonDescription = this._reasonDescription;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFindingsMuteRuleAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expireAt = undefined;
      this._reason = undefined;
      this._reasonDescription = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expireAt = value.expireAt;
      this._reason = value.reason;
      this._reasonDescription = value.reasonDescription;
    }
  }

  // expire_at - computed: false, optional: true, required: false
  private _expireAt?: number; 
  public get expireAt() {
    return this.getNumberAttribute('expire_at');
  }
  public set expireAt(value: number) {
    this._expireAt = value;
  }
  public resetExpireAt() {
    this._expireAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAtInput() {
    return this._expireAt;
  }

  // reason - computed: false, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
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
export interface SecurityFindingsMuteRuleRule {
  /**
  * The list of security finding types that the automation rule applies to. Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule#finding_types SecurityFindingsMuteRule#finding_types}
  */
  readonly findingTypes: string[];
  /**
  * A search query to further filter the findings matched by this rule. The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule#query SecurityFindingsMuteRule#query}
  */
  readonly query?: string;
}

export function securityFindingsMuteRuleRuleToTerraform(struct?: SecurityFindingsMuteRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    finding_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.findingTypes),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function securityFindingsMuteRuleRuleToHclTerraform(struct?: SecurityFindingsMuteRuleRule | cdktn.IResolvable): any {
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

export class SecurityFindingsMuteRuleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFindingsMuteRuleRule | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityFindingsMuteRuleRule | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule datadog_security_findings_mute_rule}
*/
export class SecurityFindingsMuteRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_findings_mute_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityFindingsMuteRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityFindingsMuteRule to import
  * @param importFromId The id of the existing SecurityFindingsMuteRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityFindingsMuteRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_findings_mute_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/security_findings_mute_rule datadog_security_findings_mute_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityFindingsMuteRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityFindingsMuteRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_findings_mute_rule',
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
  private _action = new SecurityFindingsMuteRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SecurityFindingsMuteRuleAction) {
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
  private _rule = new SecurityFindingsMuteRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecurityFindingsMuteRuleRule) {
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
      action: securityFindingsMuteRuleActionToTerraform(this._action.internalValue),
      enabled: cdktn.booleanToTerraform(this._enabled),
      name: cdktn.stringToTerraform(this._name),
      rule: securityFindingsMuteRuleRuleToTerraform(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: securityFindingsMuteRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityFindingsMuteRuleAction",
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
        value: securityFindingsMuteRuleRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityFindingsMuteRuleRule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
