/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ActionExecutionPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#effect ActionExecutionPolicy#effect}
  */
  readonly effect: string;
  /**
  * The name of the execution policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}
  */
  readonly name: string;
  /**
  * action_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_pattern ActionExecutionPolicy#action_pattern}
  */
  readonly actionPattern: ActionExecutionPolicyActionPattern;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scope ActionExecutionPolicy#scope}
  */
  readonly scope?: ActionExecutionPolicyScope;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target ActionExecutionPolicy#target}
  */
  readonly target?: ActionExecutionPolicyTarget[] | cdktn.IResolvable;
}
export interface ActionExecutionPolicyActionPattern {
  /**
  * The fully qualified action names this policy matches. Use `*` to match all actions of the integration, or a fully qualified name prefixed with the integration's action namespace (for example `com.datadoghq.script.*` for the Script integration).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_fqns ActionExecutionPolicy#action_fqns}
  */
  readonly actionFqns: string[];
  /**
  * The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#integration ActionExecutionPolicy#integration}
  */
  readonly integration: string;
}

export function actionExecutionPolicyActionPatternToTerraform(struct?: ActionExecutionPolicyActionPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_fqns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actionFqns),
    integration: cdktn.stringToTerraform(struct!.integration),
  }
}


export function actionExecutionPolicyActionPatternToHclTerraform(struct?: ActionExecutionPolicyActionPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_fqns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actionFqns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    integration: {
      value: cdktn.stringToHclTerraform(struct!.integration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionExecutionPolicyActionPatternOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionExecutionPolicyActionPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFqns !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFqns = this._actionFqns;
    }
    if (this._integration !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionExecutionPolicyActionPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFqns = undefined;
      this._integration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFqns = value.actionFqns;
      this._integration = value.integration;
    }
  }

  // action_fqns - computed: false, optional: false, required: true
  private _actionFqns?: string[]; 
  public get actionFqns() {
    return this.getListAttribute('action_fqns');
  }
  public set actionFqns(value: string[]) {
    this._actionFqns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFqnsInput() {
    return this._actionFqns;
  }

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }
}
export interface ActionExecutionPolicyScopeKubernetesRule {
  /**
  * The Kubernetes namespaces this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_namespaces ActionExecutionPolicy#target_namespaces}
  */
  readonly targetNamespaces: string[];
}

export function actionExecutionPolicyScopeKubernetesRuleToTerraform(struct?: ActionExecutionPolicyScopeKubernetesRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetNamespaces),
  }
}


export function actionExecutionPolicyScopeKubernetesRuleToHclTerraform(struct?: ActionExecutionPolicyScopeKubernetesRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_namespaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionExecutionPolicyScopeKubernetesRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActionExecutionPolicyScopeKubernetesRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNamespaces = this._targetNamespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionExecutionPolicyScopeKubernetesRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetNamespaces = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetNamespaces = value.targetNamespaces;
    }
  }

  // target_namespaces - computed: false, optional: false, required: true
  private _targetNamespaces?: string[]; 
  public get targetNamespaces() {
    return this.getListAttribute('target_namespaces');
  }
  public set targetNamespaces(value: string[]) {
    this._targetNamespaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamespacesInput() {
    return this._targetNamespaces;
  }
}

export class ActionExecutionPolicyScopeKubernetesRuleList extends cdktn.ComplexList {
  public internalValue? : ActionExecutionPolicyScopeKubernetesRule[] | cdktn.IResolvable

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
  public get(index: number): ActionExecutionPolicyScopeKubernetesRuleOutputReference {
    return new ActionExecutionPolicyScopeKubernetesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionExecutionPolicyScopeKubernetes {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}
  */
  readonly rule?: ActionExecutionPolicyScopeKubernetesRule[] | cdktn.IResolvable;
}

export function actionExecutionPolicyScopeKubernetesToTerraform(struct?: ActionExecutionPolicyScopeKubernetes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule: cdktn.listMapper(actionExecutionPolicyScopeKubernetesRuleToTerraform, true)(struct!.rule),
  }
}


export function actionExecutionPolicyScopeKubernetesToHclTerraform(struct?: ActionExecutionPolicyScopeKubernetes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule: {
      value: cdktn.listMapperHcl(actionExecutionPolicyScopeKubernetesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "ActionExecutionPolicyScopeKubernetesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionExecutionPolicyScopeKubernetesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionExecutionPolicyScopeKubernetes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionExecutionPolicyScopeKubernetes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ActionExecutionPolicyScopeKubernetesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ActionExecutionPolicyScopeKubernetesRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface ActionExecutionPolicyScopeRemoteActionRshellRule {
  /**
  * The level of remote shell access granted for the target paths. Valid values are `read_only`, `read_write`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#access ActionExecutionPolicy#access}
  */
  readonly access: string;
  /**
  * The filesystem paths this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_paths ActionExecutionPolicy#target_paths}
  */
  readonly targetPaths: string[];
}

export function actionExecutionPolicyScopeRemoteActionRshellRuleToTerraform(struct?: ActionExecutionPolicyScopeRemoteActionRshellRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access: cdktn.stringToTerraform(struct!.access),
    target_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetPaths),
  }
}


export function actionExecutionPolicyScopeRemoteActionRshellRuleToHclTerraform(struct?: ActionExecutionPolicyScopeRemoteActionRshellRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access: {
      value: cdktn.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActionExecutionPolicyScopeRemoteActionRshellRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._targetPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPaths = this._targetPaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionExecutionPolicyScopeRemoteActionRshellRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._targetPaths = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._targetPaths = value.targetPaths;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // target_paths - computed: false, optional: false, required: true
  private _targetPaths?: string[]; 
  public get targetPaths() {
    return this.getListAttribute('target_paths');
  }
  public set targetPaths(value: string[]) {
    this._targetPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPathsInput() {
    return this._targetPaths;
  }
}

export class ActionExecutionPolicyScopeRemoteActionRshellRuleList extends cdktn.ComplexList {
  public internalValue? : ActionExecutionPolicyScopeRemoteActionRshellRule[] | cdktn.IResolvable

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
  public get(index: number): ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference {
    return new ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionExecutionPolicyScopeRemoteActionRshell {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}
  */
  readonly rule?: ActionExecutionPolicyScopeRemoteActionRshellRule[] | cdktn.IResolvable;
}

export function actionExecutionPolicyScopeRemoteActionRshellToTerraform(struct?: ActionExecutionPolicyScopeRemoteActionRshell | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule: cdktn.listMapper(actionExecutionPolicyScopeRemoteActionRshellRuleToTerraform, true)(struct!.rule),
  }
}


export function actionExecutionPolicyScopeRemoteActionRshellToHclTerraform(struct?: ActionExecutionPolicyScopeRemoteActionRshell | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule: {
      value: cdktn.listMapperHcl(actionExecutionPolicyScopeRemoteActionRshellRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "ActionExecutionPolicyScopeRemoteActionRshellRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionExecutionPolicyScopeRemoteActionRshellOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionExecutionPolicyScopeRemoteActionRshell | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionExecutionPolicyScopeRemoteActionRshell | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ActionExecutionPolicyScopeRemoteActionRshellRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ActionExecutionPolicyScopeRemoteActionRshellRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface ActionExecutionPolicyScopeScriptsRule {
  /**
  * The script names this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_script_names ActionExecutionPolicy#target_script_names}
  */
  readonly targetScriptNames: string[];
}

export function actionExecutionPolicyScopeScriptsRuleToTerraform(struct?: ActionExecutionPolicyScopeScriptsRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_script_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetScriptNames),
  }
}


export function actionExecutionPolicyScopeScriptsRuleToHclTerraform(struct?: ActionExecutionPolicyScopeScriptsRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_script_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetScriptNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionExecutionPolicyScopeScriptsRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActionExecutionPolicyScopeScriptsRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetScriptNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetScriptNames = this._targetScriptNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionExecutionPolicyScopeScriptsRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetScriptNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetScriptNames = value.targetScriptNames;
    }
  }

  // target_script_names - computed: false, optional: false, required: true
  private _targetScriptNames?: string[]; 
  public get targetScriptNames() {
    return this.getListAttribute('target_script_names');
  }
  public set targetScriptNames(value: string[]) {
    this._targetScriptNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetScriptNamesInput() {
    return this._targetScriptNames;
  }
}

export class ActionExecutionPolicyScopeScriptsRuleList extends cdktn.ComplexList {
  public internalValue? : ActionExecutionPolicyScopeScriptsRule[] | cdktn.IResolvable

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
  public get(index: number): ActionExecutionPolicyScopeScriptsRuleOutputReference {
    return new ActionExecutionPolicyScopeScriptsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionExecutionPolicyScopeScripts {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}
  */
  readonly rule?: ActionExecutionPolicyScopeScriptsRule[] | cdktn.IResolvable;
}

export function actionExecutionPolicyScopeScriptsToTerraform(struct?: ActionExecutionPolicyScopeScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule: cdktn.listMapper(actionExecutionPolicyScopeScriptsRuleToTerraform, true)(struct!.rule),
  }
}


export function actionExecutionPolicyScopeScriptsToHclTerraform(struct?: ActionExecutionPolicyScopeScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule: {
      value: cdktn.listMapperHcl(actionExecutionPolicyScopeScriptsRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "ActionExecutionPolicyScopeScriptsRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionExecutionPolicyScopeScriptsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionExecutionPolicyScopeScripts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionExecutionPolicyScopeScripts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ActionExecutionPolicyScopeScriptsRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ActionExecutionPolicyScopeScriptsRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface ActionExecutionPolicyScope {
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#kubernetes ActionExecutionPolicy#kubernetes}
  */
  readonly kubernetes?: ActionExecutionPolicyScopeKubernetes;
  /**
  * remote_action_rshell block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#remote_action_rshell ActionExecutionPolicy#remote_action_rshell}
  */
  readonly remoteActionRshell?: ActionExecutionPolicyScopeRemoteActionRshell;
  /**
  * scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scripts ActionExecutionPolicy#scripts}
  */
  readonly scripts?: ActionExecutionPolicyScopeScripts;
}

export function actionExecutionPolicyScopeToTerraform(struct?: ActionExecutionPolicyScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kubernetes: actionExecutionPolicyScopeKubernetesToTerraform(struct!.kubernetes),
    remote_action_rshell: actionExecutionPolicyScopeRemoteActionRshellToTerraform(struct!.remoteActionRshell),
    scripts: actionExecutionPolicyScopeScriptsToTerraform(struct!.scripts),
  }
}


export function actionExecutionPolicyScopeToHclTerraform(struct?: ActionExecutionPolicyScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kubernetes: {
      value: actionExecutionPolicyScopeKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionExecutionPolicyScopeKubernetes",
    },
    remote_action_rshell: {
      value: actionExecutionPolicyScopeRemoteActionRshellToHclTerraform(struct!.remoteActionRshell),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionExecutionPolicyScopeRemoteActionRshell",
    },
    scripts: {
      value: actionExecutionPolicyScopeScriptsToHclTerraform(struct!.scripts),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionExecutionPolicyScopeScripts",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionExecutionPolicyScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionExecutionPolicyScope | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._remoteActionRshell?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteActionRshell = this._remoteActionRshell?.internalValue;
    }
    if (this._scripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scripts = this._scripts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionExecutionPolicyScope | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubernetes.internalValue = undefined;
      this._remoteActionRshell.internalValue = undefined;
      this._scripts.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubernetes.internalValue = value.kubernetes;
      this._remoteActionRshell.internalValue = value.remoteActionRshell;
      this._scripts.internalValue = value.scripts;
    }
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new ActionExecutionPolicyScopeKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: ActionExecutionPolicyScopeKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // remote_action_rshell - computed: false, optional: true, required: false
  private _remoteActionRshell = new ActionExecutionPolicyScopeRemoteActionRshellOutputReference(this, "remote_action_rshell");
  public get remoteActionRshell() {
    return this._remoteActionRshell;
  }
  public putRemoteActionRshell(value: ActionExecutionPolicyScopeRemoteActionRshell) {
    this._remoteActionRshell.internalValue = value;
  }
  public resetRemoteActionRshell() {
    this._remoteActionRshell.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteActionRshellInput() {
    return this._remoteActionRshell.internalValue;
  }

  // scripts - computed: false, optional: true, required: false
  private _scripts = new ActionExecutionPolicyScopeScriptsOutputReference(this, "scripts");
  public get scripts() {
    return this._scripts;
  }
  public putScripts(value: ActionExecutionPolicyScopeScripts) {
    this._scripts.internalValue = value;
  }
  public resetScripts() {
    this._scripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptsInput() {
    return this._scripts.internalValue;
  }
}
export interface ActionExecutionPolicyTarget {
  /**
  * The Agent tags identifying the target, for example `env:prod`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#agent_tags ActionExecutionPolicy#agent_tags}
  */
  readonly agentTags: string[];
  /**
  * A human-readable name for the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}
  */
  readonly name?: string;
}

export function actionExecutionPolicyTargetToTerraform(struct?: ActionExecutionPolicyTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.agentTags),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function actionExecutionPolicyTargetToHclTerraform(struct?: ActionExecutionPolicyTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.agentTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ActionExecutionPolicyTargetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActionExecutionPolicyTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentTags = this._agentTags;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionExecutionPolicyTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentTags = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentTags = value.agentTags;
      this._name = value.name;
    }
  }

  // agent_tags - computed: false, optional: false, required: true
  private _agentTags?: string[]; 
  public get agentTags() {
    return cdktn.Fn.tolist(this.getListAttribute('agent_tags'));
  }
  public set agentTags(value: string[]) {
    this._agentTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTagsInput() {
    return this._agentTags;
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

export class ActionExecutionPolicyTargetList extends cdktn.ComplexList {
  public internalValue? : ActionExecutionPolicyTarget[] | cdktn.IResolvable

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
  public get(index: number): ActionExecutionPolicyTargetOutputReference {
    return new ActionExecutionPolicyTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy datadog_action_execution_policy}
*/
export class ActionExecutionPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_action_execution_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ActionExecutionPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionExecutionPolicy to import
  * @param importFromId The id of the existing ActionExecutionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionExecutionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_action_execution_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy datadog_action_execution_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionExecutionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ActionExecutionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_action_execution_policy',
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
    this._effect = config.effect;
    this._name = config.name;
    this._actionPattern.internalValue = config.actionPattern;
    this._scope.internalValue = config.scope;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // action_pattern - computed: false, optional: false, required: true
  private _actionPattern = new ActionExecutionPolicyActionPatternOutputReference(this, "action_pattern");
  public get actionPattern() {
    return this._actionPattern;
  }
  public putActionPattern(value: ActionExecutionPolicyActionPattern) {
    this._actionPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPatternInput() {
    return this._actionPattern.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new ActionExecutionPolicyScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: ActionExecutionPolicyScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new ActionExecutionPolicyTargetList(this, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: ActionExecutionPolicyTarget[] | cdktn.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      effect: cdktn.stringToTerraform(this._effect),
      name: cdktn.stringToTerraform(this._name),
      action_pattern: actionExecutionPolicyActionPatternToTerraform(this._actionPattern.internalValue),
      scope: actionExecutionPolicyScopeToTerraform(this._scope.internalValue),
      target: cdktn.listMapper(actionExecutionPolicyTargetToTerraform, true)(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      effect: {
        value: cdktn.stringToHclTerraform(this._effect),
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
      action_pattern: {
        value: actionExecutionPolicyActionPatternToHclTerraform(this._actionPattern.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionExecutionPolicyActionPattern",
      },
      scope: {
        value: actionExecutionPolicyScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionExecutionPolicyScope",
      },
      target: {
        value: cdktn.listMapperHcl(actionExecutionPolicyTargetToHclTerraform, true)(this._target.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ActionExecutionPolicyTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
