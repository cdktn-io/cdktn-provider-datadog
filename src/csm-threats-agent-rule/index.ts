/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CsmThreatsAgentRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * A description for the Agent rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#description CsmThreatsAgentRule#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the Agent rule is enabled. Must not be used without policy_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#enabled CsmThreatsAgentRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The SECL expression of the Agent rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#expression CsmThreatsAgentRule#expression}
  */
  readonly expression: string;
  /**
  * The name of the Agent rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}
  */
  readonly name: string;
  /**
  * The ID of the agent policy in which the rule is saved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#policy_id CsmThreatsAgentRule#policy_id}
  */
  readonly policyId?: string;
  /**
  * The list of product tags associated with the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#product_tags CsmThreatsAgentRule#product_tags}
  */
  readonly productTags?: string[];
  /**
  * Indicates whether the Agent rule is silent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#silent CsmThreatsAgentRule#silent}
  */
  readonly silent?: boolean | cdktn.IResolvable;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#actions CsmThreatsAgentRule#actions}
  */
  readonly actions?: CsmThreatsAgentRuleActions[] | cdktn.IResolvable;
}
export interface CsmThreatsAgentRuleActionsHash {
  /**
  * The field to hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#field CsmThreatsAgentRule#field}
  */
  readonly field?: string;
}

export function csmThreatsAgentRuleActionsHashToTerraform(struct?: CsmThreatsAgentRuleActionsHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
  }
}


export function csmThreatsAgentRuleActionsHashToHclTerraform(struct?: CsmThreatsAgentRuleActionsHash | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsmThreatsAgentRuleActionsHashOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsmThreatsAgentRuleActionsHash | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsmThreatsAgentRuleActionsHash | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}
export interface CsmThreatsAgentRuleActionsSet {
  /**
  * Whether to append to the set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#append CsmThreatsAgentRule#append}
  */
  readonly append?: boolean | cdktn.IResolvable;
  /**
  * The default value to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#default_value CsmThreatsAgentRule#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The expression to use for the set action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#expression CsmThreatsAgentRule#expression}
  */
  readonly expression?: string;
  /**
  * The field to get the value from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#field CsmThreatsAgentRule#field}
  */
  readonly field?: string;
  /**
  * Whether the set action is inherited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#inherited CsmThreatsAgentRule#inherited}
  */
  readonly inherited?: boolean | cdktn.IResolvable;
  /**
  * The name of the set action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}
  */
  readonly name?: string;
  /**
  * The scope of the set action (process, container, cgroup, or empty)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#scope CsmThreatsAgentRule#scope}
  */
  readonly scope?: string;
  /**
  * The maximum size of the set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#size CsmThreatsAgentRule#size}
  */
  readonly size?: number;
  /**
  * The time to live for the set in nanoseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#ttl CsmThreatsAgentRule#ttl}
  */
  readonly ttl?: number;
  /**
  * The value to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#value CsmThreatsAgentRule#value}
  */
  readonly value?: string;
}

export function csmThreatsAgentRuleActionsSetToTerraform(struct?: CsmThreatsAgentRuleActionsSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktn.booleanToTerraform(struct!.append),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    expression: cdktn.stringToTerraform(struct!.expression),
    field: cdktn.stringToTerraform(struct!.field),
    inherited: cdktn.booleanToTerraform(struct!.inherited),
    name: cdktn.stringToTerraform(struct!.name),
    scope: cdktn.stringToTerraform(struct!.scope),
    size: cdktn.numberToTerraform(struct!.size),
    ttl: cdktn.numberToTerraform(struct!.ttl),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function csmThreatsAgentRuleActionsSetToHclTerraform(struct?: CsmThreatsAgentRuleActionsSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktn.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inherited: {
      value: cdktn.booleanToHclTerraform(struct!.inherited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktn.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsmThreatsAgentRuleActionsSetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsmThreatsAgentRuleActionsSet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._inherited !== undefined) {
      hasAnyValues = true;
      internalValueResult.inherited = this._inherited;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsmThreatsAgentRuleActionsSet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._defaultValue = undefined;
      this._expression = undefined;
      this._field = undefined;
      this._inherited = undefined;
      this._name = undefined;
      this._scope = undefined;
      this._size = undefined;
      this._ttl = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._defaultValue = value.defaultValue;
      this._expression = value.expression;
      this._field = value.field;
      this._inherited = value.inherited;
      this._name = value.name;
      this._scope = value.scope;
      this._size = value.size;
      this._ttl = value.ttl;
      this._value = value.value;
    }
  }

  // append - computed: true, optional: true, required: false
  private _append?: boolean | cdktn.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktn.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // inherited - computed: true, optional: true, required: false
  private _inherited?: boolean | cdktn.IResolvable; 
  public get inherited() {
    return this.getBooleanAttribute('inherited');
  }
  public set inherited(value: boolean | cdktn.IResolvable) {
    this._inherited = value;
  }
  public resetInherited() {
    this._inherited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedInput() {
    return this._inherited;
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

  // scope - computed: true, optional: true, required: false
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

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CsmThreatsAgentRuleActions {
  /**
  * hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#hash CsmThreatsAgentRule#hash}
  */
  readonly hash?: CsmThreatsAgentRuleActionsHash;
  /**
  * set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#set CsmThreatsAgentRule#set}
  */
  readonly set?: CsmThreatsAgentRuleActionsSet;
}

export function csmThreatsAgentRuleActionsToTerraform(struct?: CsmThreatsAgentRuleActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: csmThreatsAgentRuleActionsHashToTerraform(struct!.hash),
    set: csmThreatsAgentRuleActionsSetToTerraform(struct!.set),
  }
}


export function csmThreatsAgentRuleActionsToHclTerraform(struct?: CsmThreatsAgentRuleActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: csmThreatsAgentRuleActionsHashToHclTerraform(struct!.hash),
      isBlock: true,
      type: "struct",
      storageClassType: "CsmThreatsAgentRuleActionsHash",
    },
    set: {
      value: csmThreatsAgentRuleActionsSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "CsmThreatsAgentRuleActionsSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsmThreatsAgentRuleActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CsmThreatsAgentRuleActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash?.internalValue;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsmThreatsAgentRuleActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash.internalValue = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash.internalValue = value.hash;
      this._set.internalValue = value.set;
    }
  }

  // hash - computed: false, optional: true, required: false
  private _hash = new CsmThreatsAgentRuleActionsHashOutputReference(this, "hash");
  public get hash() {
    return this._hash;
  }
  public putHash(value: CsmThreatsAgentRuleActionsHash) {
    this._hash.internalValue = value;
  }
  public resetHash() {
    this._hash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash.internalValue;
  }

  // set - computed: false, optional: true, required: false
  private _set = new CsmThreatsAgentRuleActionsSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: CsmThreatsAgentRuleActionsSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}

export class CsmThreatsAgentRuleActionsList extends cdktn.ComplexList {
  public internalValue? : CsmThreatsAgentRuleActions[] | cdktn.IResolvable

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
  public get(index: number): CsmThreatsAgentRuleActionsOutputReference {
    return new CsmThreatsAgentRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule datadog_csm_threats_agent_rule}
*/
export class CsmThreatsAgentRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_csm_threats_agent_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CsmThreatsAgentRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsmThreatsAgentRule to import
  * @param importFromId The id of the existing CsmThreatsAgentRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsmThreatsAgentRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_csm_threats_agent_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/csm_threats_agent_rule datadog_csm_threats_agent_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsmThreatsAgentRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CsmThreatsAgentRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_csm_threats_agent_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.11.0',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._expression = config.expression;
    this._name = config.name;
    this._policyId = config.policyId;
    this._productTags = config.productTags;
    this._silent = config.silent;
    this._actions.internalValue = config.actions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // product_tags - computed: true, optional: true, required: false
  private _productTags?: string[]; 
  public get productTags() {
    return cdktn.Fn.tolist(this.getListAttribute('product_tags'));
  }
  public set productTags(value: string[]) {
    this._productTags = value;
  }
  public resetProductTags() {
    this._productTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTagsInput() {
    return this._productTags;
  }

  // silent - computed: true, optional: true, required: false
  private _silent?: boolean | cdktn.IResolvable; 
  public get silent() {
    return this.getBooleanAttribute('silent');
  }
  public set silent(value: boolean | cdktn.IResolvable) {
    this._silent = value;
  }
  public resetSilent() {
    this._silent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silentInput() {
    return this._silent;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new CsmThreatsAgentRuleActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: CsmThreatsAgentRuleActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      enabled: cdktn.booleanToTerraform(this._enabled),
      expression: cdktn.stringToTerraform(this._expression),
      name: cdktn.stringToTerraform(this._name),
      policy_id: cdktn.stringToTerraform(this._policyId),
      product_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._productTags),
      silent: cdktn.booleanToTerraform(this._silent),
      actions: cdktn.listMapper(csmThreatsAgentRuleActionsToTerraform, true)(this._actions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expression: {
        value: cdktn.stringToHclTerraform(this._expression),
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
      policy_id: {
        value: cdktn.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._productTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      silent: {
        value: cdktn.booleanToHclTerraform(this._silent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      actions: {
        value: cdktn.listMapperHcl(csmThreatsAgentRuleActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsmThreatsAgentRuleActionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
