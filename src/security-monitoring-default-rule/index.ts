/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityMonitoringDefaultRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Custom Message (will override default message) for generated signals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#custom_message SecurityMonitoringDefaultRule#custom_message}
  */
  readonly customMessage?: string;
  /**
  * The name (will override default name) of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#custom_name SecurityMonitoringDefaultRule#custom_name}
  */
  readonly customName?: string;
  /**
  * Custom tags for generated signals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#custom_tags SecurityMonitoringDefaultRule#custom_tags}
  */
  readonly customTags?: string[];
  /**
  * Enable the rule. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#enabled SecurityMonitoringDefaultRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * case block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#case SecurityMonitoringDefaultRule#case}
  */
  readonly case?: SecurityMonitoringDefaultRuleCase[] | cdktn.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#filter SecurityMonitoringDefaultRule#filter}
  */
  readonly filter?: SecurityMonitoringDefaultRuleFilter[] | cdktn.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#options SecurityMonitoringDefaultRule#options}
  */
  readonly options?: SecurityMonitoringDefaultRuleOptions[] | cdktn.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}
  */
  readonly query?: SecurityMonitoringDefaultRuleQuery[] | cdktn.IResolvable;
}
export interface SecurityMonitoringDefaultRuleCase {
  /**
  * Status of the rule case to override. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#custom_status SecurityMonitoringDefaultRule#custom_status}
  */
  readonly customStatus?: string;
  /**
  * Notification targets for each rule case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#notifications SecurityMonitoringDefaultRule#notifications}
  */
  readonly notifications?: string[];
  /**
  * Status of the rule case to match. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#status SecurityMonitoringDefaultRule#status}
  */
  readonly status: string;
}

export function securityMonitoringDefaultRuleCaseToTerraform(struct?: SecurityMonitoringDefaultRuleCase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_status: cdktn.stringToTerraform(struct!.customStatus),
    notifications: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notifications),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function securityMonitoringDefaultRuleCaseToHclTerraform(struct?: SecurityMonitoringDefaultRuleCase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_status: {
      value: cdktn.stringToHclTerraform(struct!.customStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notifications: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notifications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringDefaultRuleCaseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringDefaultRuleCase | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStatus = this._customStatus;
    }
    if (this._notifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringDefaultRuleCase | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customStatus = undefined;
      this._notifications = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customStatus = value.customStatus;
      this._notifications = value.notifications;
      this._status = value.status;
    }
  }

  // custom_status - computed: false, optional: true, required: false
  private _customStatus?: string; 
  public get customStatus() {
    return this.getStringAttribute('custom_status');
  }
  public set customStatus(value: string) {
    this._customStatus = value;
  }
  public resetCustomStatus() {
    this._customStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStatusInput() {
    return this._customStatus;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: string[]; 
  public get notifications() {
    return this.getListAttribute('notifications');
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SecurityMonitoringDefaultRuleCaseList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringDefaultRuleCase[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringDefaultRuleCaseOutputReference {
    return new SecurityMonitoringDefaultRuleCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringDefaultRuleFilter {
  /**
  * The type of filtering action. Allowed enum values: require, suppress Valid values are `require`, `suppress`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#action SecurityMonitoringDefaultRule#action}
  */
  readonly action: string;
  /**
  * Query for selecting logs to apply the filtering action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}
  */
  readonly query: string;
}

export function securityMonitoringDefaultRuleFilterToTerraform(struct?: SecurityMonitoringDefaultRuleFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function securityMonitoringDefaultRuleFilterToHclTerraform(struct?: SecurityMonitoringDefaultRuleFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
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

export class SecurityMonitoringDefaultRuleFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringDefaultRuleFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringDefaultRuleFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._query = value.query;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

export class SecurityMonitoringDefaultRuleFilterList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringDefaultRuleFilter[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringDefaultRuleFilterOutputReference {
    return new SecurityMonitoringDefaultRuleFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringDefaultRuleOptions {
  /**
  * If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#decrease_criticality_based_on_env SecurityMonitoringDefaultRule#decrease_criticality_based_on_env}
  */
  readonly decreaseCriticalityBasedOnEnv?: boolean | cdktn.IResolvable;
}

export function securityMonitoringDefaultRuleOptionsToTerraform(struct?: SecurityMonitoringDefaultRuleOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    decrease_criticality_based_on_env: cdktn.booleanToTerraform(struct!.decreaseCriticalityBasedOnEnv),
  }
}


export function securityMonitoringDefaultRuleOptionsToHclTerraform(struct?: SecurityMonitoringDefaultRuleOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    decrease_criticality_based_on_env: {
      value: cdktn.booleanToHclTerraform(struct!.decreaseCriticalityBasedOnEnv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringDefaultRuleOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringDefaultRuleOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decreaseCriticalityBasedOnEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.decreaseCriticalityBasedOnEnv = this._decreaseCriticalityBasedOnEnv;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringDefaultRuleOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decreaseCriticalityBasedOnEnv = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decreaseCriticalityBasedOnEnv = value.decreaseCriticalityBasedOnEnv;
    }
  }

  // decrease_criticality_based_on_env - computed: true, optional: true, required: false
  private _decreaseCriticalityBasedOnEnv?: boolean | cdktn.IResolvable; 
  public get decreaseCriticalityBasedOnEnv() {
    return this.getBooleanAttribute('decrease_criticality_based_on_env');
  }
  public set decreaseCriticalityBasedOnEnv(value: boolean | cdktn.IResolvable) {
    this._decreaseCriticalityBasedOnEnv = value;
  }
  public resetDecreaseCriticalityBasedOnEnv() {
    this._decreaseCriticalityBasedOnEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decreaseCriticalityBasedOnEnvInput() {
    return this._decreaseCriticalityBasedOnEnv;
  }
}

export class SecurityMonitoringDefaultRuleOptionsList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringDefaultRuleOptions[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringDefaultRuleOptionsOutputReference {
    return new SecurityMonitoringDefaultRuleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringDefaultRuleQueryAgentRule {
  /**
  * **Deprecated**. It won't be applied anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#agent_rule_id SecurityMonitoringDefaultRule#agent_rule_id}
  */
  readonly agentRuleId: string;
  /**
  * **Deprecated**. It won't be applied anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#expression SecurityMonitoringDefaultRule#expression}
  */
  readonly expression: string;
}

export function securityMonitoringDefaultRuleQueryAgentRuleToTerraform(struct?: SecurityMonitoringDefaultRuleQueryAgentRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_rule_id: cdktn.stringToTerraform(struct!.agentRuleId),
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function securityMonitoringDefaultRuleQueryAgentRuleToHclTerraform(struct?: SecurityMonitoringDefaultRuleQueryAgentRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_rule_id: {
      value: cdktn.stringToHclTerraform(struct!.agentRuleId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringDefaultRuleQueryAgentRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentRuleId = this._agentRuleId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringDefaultRuleQueryAgentRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentRuleId = undefined;
      this._expression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentRuleId = value.agentRuleId;
      this._expression = value.expression;
    }
  }

  // agent_rule_id - computed: false, optional: false, required: true
  private _agentRuleId?: string; 
  public get agentRuleId() {
    return this.getStringAttribute('agent_rule_id');
  }
  public set agentRuleId(value: string) {
    this._agentRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentRuleIdInput() {
    return this._agentRuleId;
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
}

export class SecurityMonitoringDefaultRuleQueryAgentRuleList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringDefaultRuleQueryAgentRule[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference {
    return new SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringDefaultRuleQuery {
  /**
  * Query extension to append to the logs query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#custom_query_extension SecurityMonitoringDefaultRule#custom_query_extension}
  */
  readonly customQueryExtension?: string;
  /**
  * agent_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#agent_rule SecurityMonitoringDefaultRule#agent_rule}
  */
  readonly agentRule?: SecurityMonitoringDefaultRuleQueryAgentRule[] | cdktn.IResolvable;
}

export function securityMonitoringDefaultRuleQueryToTerraform(struct?: SecurityMonitoringDefaultRuleQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_query_extension: cdktn.stringToTerraform(struct!.customQueryExtension),
    agent_rule: cdktn.listMapper(securityMonitoringDefaultRuleQueryAgentRuleToTerraform, true)(struct!.agentRule),
  }
}


export function securityMonitoringDefaultRuleQueryToHclTerraform(struct?: SecurityMonitoringDefaultRuleQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_query_extension: {
      value: cdktn.stringToHclTerraform(struct!.customQueryExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_rule: {
      value: cdktn.listMapperHcl(securityMonitoringDefaultRuleQueryAgentRuleToHclTerraform, true)(struct!.agentRule),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringDefaultRuleQueryAgentRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringDefaultRuleQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringDefaultRuleQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customQueryExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.customQueryExtension = this._customQueryExtension;
    }
    if (this._agentRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentRule = this._agentRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringDefaultRuleQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customQueryExtension = undefined;
      this._agentRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customQueryExtension = value.customQueryExtension;
      this._agentRule.internalValue = value.agentRule;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // custom_query_extension - computed: false, optional: true, required: false
  private _customQueryExtension?: string; 
  public get customQueryExtension() {
    return this.getStringAttribute('custom_query_extension');
  }
  public set customQueryExtension(value: string) {
    this._customQueryExtension = value;
  }
  public resetCustomQueryExtension() {
    this._customQueryExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customQueryExtensionInput() {
    return this._customQueryExtension;
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }

  // distinct_fields - computed: true, optional: false, required: false
  public get distinctFields() {
    return this.getListAttribute('distinct_fields');
  }

  // group_by_fields - computed: true, optional: false, required: false
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }

  // has_optional_group_by_fields - computed: true, optional: false, required: false
  public get hasOptionalGroupByFields() {
    return this.getBooleanAttribute('has_optional_group_by_fields');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return this.getListAttribute('metrics');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // agent_rule - computed: false, optional: true, required: false
  private _agentRule = new SecurityMonitoringDefaultRuleQueryAgentRuleList(this, "agent_rule", false);
  public get agentRule() {
    return this._agentRule;
  }
  public putAgentRule(value: SecurityMonitoringDefaultRuleQueryAgentRule[] | cdktn.IResolvable) {
    this._agentRule.internalValue = value;
  }
  public resetAgentRule() {
    this._agentRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentRuleInput() {
    return this._agentRule.internalValue;
  }
}

export class SecurityMonitoringDefaultRuleQueryList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringDefaultRuleQuery[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringDefaultRuleQueryOutputReference {
    return new SecurityMonitoringDefaultRuleQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule datadog_security_monitoring_default_rule}
*/
export class SecurityMonitoringDefaultRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_default_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityMonitoringDefaultRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityMonitoringDefaultRule to import
  * @param importFromId The id of the existing SecurityMonitoringDefaultRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityMonitoringDefaultRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_monitoring_default_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_default_rule datadog_security_monitoring_default_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringDefaultRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringDefaultRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_default_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.16.0',
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
    this._customMessage = config.customMessage;
    this._customName = config.customName;
    this._customTags = config.customTags;
    this._enabled = config.enabled;
    this._case.internalValue = config.case;
    this._filter.internalValue = config.filter;
    this._options.internalValue = config.options;
    this._query.internalValue = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_message - computed: false, optional: true, required: false
  private _customMessage?: string; 
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string) {
    this._customMessage = value;
  }
  public resetCustomMessage() {
    this._customMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage;
  }

  // custom_name - computed: false, optional: true, required: false
  private _customName?: string; 
  public get customName() {
    return this.getStringAttribute('custom_name');
  }
  public set customName(value: string) {
    this._customName = value;
  }
  public resetCustomName() {
    this._customName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNameInput() {
    return this._customName;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: string[]; 
  public get customTags() {
    return cdktn.Fn.tolist(this.getListAttribute('custom_tags'));
  }
  public set customTags(value: string[]) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // case - computed: false, optional: true, required: false
  private _case = new SecurityMonitoringDefaultRuleCaseList(this, "case", false);
  public get case() {
    return this._case;
  }
  public putCase(value: SecurityMonitoringDefaultRuleCase[] | cdktn.IResolvable) {
    this._case.internalValue = value;
  }
  public resetCase() {
    this._case.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInput() {
    return this._case.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new SecurityMonitoringDefaultRuleFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityMonitoringDefaultRuleFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new SecurityMonitoringDefaultRuleOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: SecurityMonitoringDefaultRuleOptions[] | cdktn.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new SecurityMonitoringDefaultRuleQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: SecurityMonitoringDefaultRuleQuery[] | cdktn.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_message: cdktn.stringToTerraform(this._customMessage),
      custom_name: cdktn.stringToTerraform(this._customName),
      custom_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._customTags),
      enabled: cdktn.booleanToTerraform(this._enabled),
      case: cdktn.listMapper(securityMonitoringDefaultRuleCaseToTerraform, true)(this._case.internalValue),
      filter: cdktn.listMapper(securityMonitoringDefaultRuleFilterToTerraform, true)(this._filter.internalValue),
      options: cdktn.listMapper(securityMonitoringDefaultRuleOptionsToTerraform, true)(this._options.internalValue),
      query: cdktn.listMapper(securityMonitoringDefaultRuleQueryToTerraform, true)(this._query.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_message: {
        value: cdktn.stringToHclTerraform(this._customMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_name: {
        value: cdktn.stringToHclTerraform(this._customName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._customTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      case: {
        value: cdktn.listMapperHcl(securityMonitoringDefaultRuleCaseToHclTerraform, true)(this._case.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringDefaultRuleCaseList",
      },
      filter: {
        value: cdktn.listMapperHcl(securityMonitoringDefaultRuleFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringDefaultRuleFilterList",
      },
      options: {
        value: cdktn.listMapperHcl(securityMonitoringDefaultRuleOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringDefaultRuleOptionsList",
      },
      query: {
        value: cdktn.listMapperHcl(securityMonitoringDefaultRuleQueryToHclTerraform, true)(this._query.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringDefaultRuleQueryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
