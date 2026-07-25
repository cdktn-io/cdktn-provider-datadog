/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityMonitoringRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether the rule is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#enabled SecurityMonitoringRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Additional grouping to perform on top of the query grouping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#group_signals_by SecurityMonitoringRule#group_signals_by}
  */
  readonly groupSignalsBy?: string[];
  /**
  * Whether the notifications include the triggering group-by values in their title. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#has_extended_title SecurityMonitoringRule#has_extended_title}
  */
  readonly hasExtendedTitle?: boolean | cdktn.IResolvable;
  /**
  * Message for generated signals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#message SecurityMonitoringRule#message}
  */
  readonly message: string;
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name: string;
  /**
  * User-defined tags for generated signals. See also `effective_tags`, which includes provider-level `default_tags`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#tags SecurityMonitoringRule#tags}
  */
  readonly tags?: string[];
  /**
  * The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}
  */
  readonly type?: string;
  /**
  * Whether or not to validate the Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#validate SecurityMonitoringRule#validate}
  */
  readonly validate?: boolean | cdktn.IResolvable;
  /**
  * calculated_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#calculated_field SecurityMonitoringRule#calculated_field}
  */
  readonly calculatedField?: SecurityMonitoringRuleCalculatedField[] | cdktn.IResolvable;
  /**
  * case block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#case SecurityMonitoringRule#case}
  */
  readonly case?: SecurityMonitoringRuleCase[] | cdktn.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#filter SecurityMonitoringRule#filter}
  */
  readonly filter?: SecurityMonitoringRuleFilter[] | cdktn.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}
  */
  readonly options?: SecurityMonitoringRuleOptions[] | cdktn.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query?: SecurityMonitoringRuleQuery[] | cdktn.IResolvable;
  /**
  * reference_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#reference_tables SecurityMonitoringRule#reference_tables}
  */
  readonly referenceTables?: SecurityMonitoringRuleReferenceTables[] | cdktn.IResolvable;
  /**
  * scheduling_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#scheduling_options SecurityMonitoringRule#scheduling_options}
  */
  readonly schedulingOptions?: SecurityMonitoringRuleSchedulingOptions[] | cdktn.IResolvable;
  /**
  * signal_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#signal_query SecurityMonitoringRule#signal_query}
  */
  readonly signalQuery?: SecurityMonitoringRuleSignalQuery[] | cdktn.IResolvable;
  /**
  * third_party_case block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#third_party_case SecurityMonitoringRule#third_party_case}
  */
  readonly thirdPartyCase?: SecurityMonitoringRuleThirdPartyCase[] | cdktn.IResolvable;
}
export interface SecurityMonitoringRuleCalculatedField {
  /**
  * Expression. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}
  */
  readonly expression: string;
  /**
  * Field name. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name: string;
}

export function securityMonitoringRuleCalculatedFieldToTerraform(struct?: SecurityMonitoringRuleCalculatedField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function securityMonitoringRuleCalculatedFieldToHclTerraform(struct?: SecurityMonitoringRuleCalculatedField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SecurityMonitoringRuleCalculatedFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleCalculatedField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleCalculatedField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
    }
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
}

export class SecurityMonitoringRuleCalculatedFieldList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleCalculatedField[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleCalculatedFieldOutputReference {
    return new SecurityMonitoringRuleCalculatedFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleCaseActionOptions {
  /**
  * Duration of the action in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#duration SecurityMonitoringRule#duration}
  */
  readonly duration?: number;
}

export function securityMonitoringRuleCaseActionOptionsToTerraform(struct?: SecurityMonitoringRuleCaseActionOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.numberToTerraform(struct!.duration),
  }
}


export function securityMonitoringRuleCaseActionOptionsToHclTerraform(struct?: SecurityMonitoringRuleCaseActionOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleCaseActionOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleCaseActionOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleCaseActionOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}

export class SecurityMonitoringRuleCaseActionOptionsList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleCaseActionOptions[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleCaseActionOptionsOutputReference {
    return new SecurityMonitoringRuleCaseActionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleCaseAction {
  /**
  * Type of action to perform when the case triggers. Valid values are `block_ip`, `block_user`, `user_behavior`, `flag_ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}
  */
  readonly type: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}
  */
  readonly options?: SecurityMonitoringRuleCaseActionOptions[] | cdktn.IResolvable;
}

export function securityMonitoringRuleCaseActionToTerraform(struct?: SecurityMonitoringRuleCaseAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    options: cdktn.listMapper(securityMonitoringRuleCaseActionOptionsToTerraform, true)(struct!.options),
  }
}


export function securityMonitoringRuleCaseActionToHclTerraform(struct?: SecurityMonitoringRuleCaseAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktn.listMapperHcl(securityMonitoringRuleCaseActionOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleCaseActionOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleCaseActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleCaseAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleCaseAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._options.internalValue = value.options;
    }
  }

  // type - computed: false, optional: false, required: true
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

  // options - computed: false, optional: true, required: false
  private _options = new SecurityMonitoringRuleCaseActionOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: SecurityMonitoringRuleCaseActionOptions[] | cdktn.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class SecurityMonitoringRuleCaseActionList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleCaseAction[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleCaseActionOutputReference {
    return new SecurityMonitoringRuleCaseActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleCase {
  /**
  * A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated based on the event counts in the previously defined queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#condition SecurityMonitoringRule#condition}
  */
  readonly condition?: string;
  /**
  * Name of the case. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Notification targets for each rule case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}
  */
  readonly notifications?: string[];
  /**
  * Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}
  */
  readonly status: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}
  */
  readonly action?: SecurityMonitoringRuleCaseAction[] | cdktn.IResolvable;
}

export function securityMonitoringRuleCaseToTerraform(struct?: SecurityMonitoringRuleCase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    name: cdktn.stringToTerraform(struct!.name),
    notifications: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notifications),
    status: cdktn.stringToTerraform(struct!.status),
    action: cdktn.listMapper(securityMonitoringRuleCaseActionToTerraform, true)(struct!.action),
  }
}


export function securityMonitoringRuleCaseToHclTerraform(struct?: SecurityMonitoringRuleCase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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
    action: {
      value: cdktn.listMapperHcl(securityMonitoringRuleCaseActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleCaseActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleCaseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleCase | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleCase | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._name = undefined;
      this._notifications = undefined;
      this._status = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._name = value.name;
      this._notifications = value.notifications;
      this._status = value.status;
      this._action.internalValue = value.action;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // name - computed: true, optional: true, required: false
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

  // notifications - computed: true, optional: true, required: false
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

  // action - computed: false, optional: true, required: false
  private _action = new SecurityMonitoringRuleCaseActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: SecurityMonitoringRuleCaseAction[] | cdktn.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class SecurityMonitoringRuleCaseList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleCase[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleCaseOutputReference {
    return new SecurityMonitoringRuleCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleFilter {
  /**
  * The type of filtering action. Valid values are `require`, `suppress`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}
  */
  readonly action: string;
  /**
  * Query for selecting logs to apply the filtering action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query: string;
}

export function securityMonitoringRuleFilterToTerraform(struct?: SecurityMonitoringRuleFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function securityMonitoringRuleFilterToHclTerraform(struct?: SecurityMonitoringRuleFilter | cdktn.IResolvable): any {
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

export class SecurityMonitoringRuleFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleFilter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityMonitoringRuleFilter | cdktn.IResolvable | undefined) {
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

export class SecurityMonitoringRuleFilterList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleFilter[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleFilterOutputReference {
    return new SecurityMonitoringRuleFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleOptionsAnomalyDetectionOptions {
  /**
  * Duration in seconds of the time buckets used to aggregate events matched by the rule. Valid values are 300, 600, 900, 1800, 3600, 10800. Valid values are `300`, `600`, `900`, `1800`, `3600`, `10800`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#bucket_duration SecurityMonitoringRule#bucket_duration}
  */
  readonly bucketDuration?: number;
  /**
  * An optional parameter that sets how permissive anomaly detection is. Higher values require higher deviations before triggering a signal. Valid values are 1, 2, 3, 4, 5. Valid values are `1`, `2`, `3`, `4`, `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#detection_tolerance SecurityMonitoringRule#detection_tolerance}
  */
  readonly detectionTolerance?: number;
  /**
  * When set to true, Datadog uses previous values that fall within the defined learning window to construct the baseline, enabling the system to establish an accurate baseline more rapidly rather than relying solely on gradual learning over time. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#instantaneous_baseline SecurityMonitoringRule#instantaneous_baseline}
  */
  readonly instantaneousBaseline?: boolean | cdktn.IResolvable;
  /**
  * Learning duration in hours. Anomaly detection waits for at least this amount of historical data before it starts evaluating. Valid values are 1, 6, 12, 24, 48, 168, 336. Valid values are `1`, `6`, `12`, `24`, `48`, `168`, `336`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#learning_duration SecurityMonitoringRule#learning_duration}
  */
  readonly learningDuration?: number;
  /**
  * An optional override baseline to apply while the rule is in the learning period. Value must be at least 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#learning_period_baseline SecurityMonitoringRule#learning_period_baseline}
  */
  readonly learningPeriodBaseline?: number;
}

export function securityMonitoringRuleOptionsAnomalyDetectionOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsAnomalyDetectionOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_duration: cdktn.numberToTerraform(struct!.bucketDuration),
    detection_tolerance: cdktn.numberToTerraform(struct!.detectionTolerance),
    instantaneous_baseline: cdktn.booleanToTerraform(struct!.instantaneousBaseline),
    learning_duration: cdktn.numberToTerraform(struct!.learningDuration),
    learning_period_baseline: cdktn.numberToTerraform(struct!.learningPeriodBaseline),
  }
}


export function securityMonitoringRuleOptionsAnomalyDetectionOptionsToHclTerraform(struct?: SecurityMonitoringRuleOptionsAnomalyDetectionOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_duration: {
      value: cdktn.numberToHclTerraform(struct!.bucketDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detection_tolerance: {
      value: cdktn.numberToHclTerraform(struct!.detectionTolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instantaneous_baseline: {
      value: cdktn.booleanToHclTerraform(struct!.instantaneousBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    learning_duration: {
      value: cdktn.numberToHclTerraform(struct!.learningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    learning_period_baseline: {
      value: cdktn.numberToHclTerraform(struct!.learningPeriodBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleOptionsAnomalyDetectionOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketDuration = this._bucketDuration;
    }
    if (this._detectionTolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionTolerance = this._detectionTolerance;
    }
    if (this._instantaneousBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.instantaneousBaseline = this._instantaneousBaseline;
    }
    if (this._learningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningDuration = this._learningDuration;
    }
    if (this._learningPeriodBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningPeriodBaseline = this._learningPeriodBaseline;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsAnomalyDetectionOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketDuration = undefined;
      this._detectionTolerance = undefined;
      this._instantaneousBaseline = undefined;
      this._learningDuration = undefined;
      this._learningPeriodBaseline = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketDuration = value.bucketDuration;
      this._detectionTolerance = value.detectionTolerance;
      this._instantaneousBaseline = value.instantaneousBaseline;
      this._learningDuration = value.learningDuration;
      this._learningPeriodBaseline = value.learningPeriodBaseline;
    }
  }

  // bucket_duration - computed: true, optional: true, required: false
  private _bucketDuration?: number; 
  public get bucketDuration() {
    return this.getNumberAttribute('bucket_duration');
  }
  public set bucketDuration(value: number) {
    this._bucketDuration = value;
  }
  public resetBucketDuration() {
    this._bucketDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketDurationInput() {
    return this._bucketDuration;
  }

  // detection_tolerance - computed: true, optional: true, required: false
  private _detectionTolerance?: number; 
  public get detectionTolerance() {
    return this.getNumberAttribute('detection_tolerance');
  }
  public set detectionTolerance(value: number) {
    this._detectionTolerance = value;
  }
  public resetDetectionTolerance() {
    this._detectionTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionToleranceInput() {
    return this._detectionTolerance;
  }

  // instantaneous_baseline - computed: true, optional: true, required: false
  private _instantaneousBaseline?: boolean | cdktn.IResolvable; 
  public get instantaneousBaseline() {
    return this.getBooleanAttribute('instantaneous_baseline');
  }
  public set instantaneousBaseline(value: boolean | cdktn.IResolvable) {
    this._instantaneousBaseline = value;
  }
  public resetInstantaneousBaseline() {
    this._instantaneousBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantaneousBaselineInput() {
    return this._instantaneousBaseline;
  }

  // learning_duration - computed: true, optional: true, required: false
  private _learningDuration?: number; 
  public get learningDuration() {
    return this.getNumberAttribute('learning_duration');
  }
  public set learningDuration(value: number) {
    this._learningDuration = value;
  }
  public resetLearningDuration() {
    this._learningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningDurationInput() {
    return this._learningDuration;
  }

  // learning_period_baseline - computed: false, optional: true, required: false
  private _learningPeriodBaseline?: number; 
  public get learningPeriodBaseline() {
    return this.getNumberAttribute('learning_period_baseline');
  }
  public set learningPeriodBaseline(value: number) {
    this._learningPeriodBaseline = value;
  }
  public resetLearningPeriodBaseline() {
    this._learningPeriodBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningPeriodBaselineInput() {
    return this._learningPeriodBaseline;
  }
}

export class SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleOptionsAnomalyDetectionOptions[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference {
    return new SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleOptionsImpossibleTravelOptions {
  /**
  * If true, signals are suppressed for the first 24 hours. During that time, Datadog learns the user's regular access locations. This can be helpful to reduce noise and infer VPN usage or credentialed API access. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#baseline_user_locations SecurityMonitoringRule#baseline_user_locations}
  */
  readonly baselineUserLocations?: boolean | cdktn.IResolvable;
  /**
  * The duration in days during which Datadog learns a user's access locations before generating signals. Only applicable when `baseline_user_locations` is `true`. Defaults to `1` if unset. . Value must be between 1 and 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#baseline_user_locations_duration SecurityMonitoringRule#baseline_user_locations_duration}
  */
  readonly baselineUserLocationsDuration?: number;
}

export function securityMonitoringRuleOptionsImpossibleTravelOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsImpossibleTravelOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    baseline_user_locations: cdktn.booleanToTerraform(struct!.baselineUserLocations),
    baseline_user_locations_duration: cdktn.numberToTerraform(struct!.baselineUserLocationsDuration),
  }
}


export function securityMonitoringRuleOptionsImpossibleTravelOptionsToHclTerraform(struct?: SecurityMonitoringRuleOptionsImpossibleTravelOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    baseline_user_locations: {
      value: cdktn.booleanToHclTerraform(struct!.baselineUserLocations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    baseline_user_locations_duration: {
      value: cdktn.numberToHclTerraform(struct!.baselineUserLocationsDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleOptionsImpossibleTravelOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineUserLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineUserLocations = this._baselineUserLocations;
    }
    if (this._baselineUserLocationsDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineUserLocationsDuration = this._baselineUserLocationsDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsImpossibleTravelOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baselineUserLocations = undefined;
      this._baselineUserLocationsDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baselineUserLocations = value.baselineUserLocations;
      this._baselineUserLocationsDuration = value.baselineUserLocationsDuration;
    }
  }

  // baseline_user_locations - computed: true, optional: true, required: false
  private _baselineUserLocations?: boolean | cdktn.IResolvable; 
  public get baselineUserLocations() {
    return this.getBooleanAttribute('baseline_user_locations');
  }
  public set baselineUserLocations(value: boolean | cdktn.IResolvable) {
    this._baselineUserLocations = value;
  }
  public resetBaselineUserLocations() {
    this._baselineUserLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineUserLocationsInput() {
    return this._baselineUserLocations;
  }

  // baseline_user_locations_duration - computed: true, optional: true, required: false
  private _baselineUserLocationsDuration?: number; 
  public get baselineUserLocationsDuration() {
    return this.getNumberAttribute('baseline_user_locations_duration');
  }
  public set baselineUserLocationsDuration(value: number) {
    this._baselineUserLocationsDuration = value;
  }
  public resetBaselineUserLocationsDuration() {
    this._baselineUserLocationsDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineUserLocationsDurationInput() {
    return this._baselineUserLocationsDuration;
  }
}

export class SecurityMonitoringRuleOptionsImpossibleTravelOptionsList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleOptionsImpossibleTravelOptions[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference {
    return new SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleOptionsNewValueOptions {
  /**
  * The duration in days after which a learned value is forgotten. Accepted values are between 1 and 30. Value must be between 1 and 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#forget_after SecurityMonitoringRule#forget_after}
  */
  readonly forgetAfter: number;
  /**
  * When set to true, Datadog uses previous values that fall within the defined learning window to construct the baseline, enabling the system to establish an accurate baseline more rapidly rather than relying solely on gradual learning over time. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#instantaneous_baseline SecurityMonitoringRule#instantaneous_baseline}
  */
  readonly instantaneousBaseline?: boolean | cdktn.IResolvable;
  /**
  * The duration in days during which values are learned, and after which signals will be generated for values that weren't learned. If set to 0, a signal will be generated for all new values after the first value is learned. Accepted values are between 0 and 30. Value must be between 0 and 30. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#learning_duration SecurityMonitoringRule#learning_duration}
  */
  readonly learningDuration?: number;
  /**
  * The learning method used to determine when signals should be generated for values that weren't learned. Valid values are `duration`, `threshold`. Defaults to `"duration"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#learning_method SecurityMonitoringRule#learning_method}
  */
  readonly learningMethod?: string;
  /**
  * A number of occurrences after which signals are generated for values that weren't learned. Valid values are `0`, `1`. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#learning_threshold SecurityMonitoringRule#learning_threshold}
  */
  readonly learningThreshold?: number;
}

export function securityMonitoringRuleOptionsNewValueOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsNewValueOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    forget_after: cdktn.numberToTerraform(struct!.forgetAfter),
    instantaneous_baseline: cdktn.booleanToTerraform(struct!.instantaneousBaseline),
    learning_duration: cdktn.numberToTerraform(struct!.learningDuration),
    learning_method: cdktn.stringToTerraform(struct!.learningMethod),
    learning_threshold: cdktn.numberToTerraform(struct!.learningThreshold),
  }
}


export function securityMonitoringRuleOptionsNewValueOptionsToHclTerraform(struct?: SecurityMonitoringRuleOptionsNewValueOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    forget_after: {
      value: cdktn.numberToHclTerraform(struct!.forgetAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instantaneous_baseline: {
      value: cdktn.booleanToHclTerraform(struct!.instantaneousBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    learning_duration: {
      value: cdktn.numberToHclTerraform(struct!.learningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    learning_method: {
      value: cdktn.stringToHclTerraform(struct!.learningMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learning_threshold: {
      value: cdktn.numberToHclTerraform(struct!.learningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsNewValueOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleOptionsNewValueOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forgetAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.forgetAfter = this._forgetAfter;
    }
    if (this._instantaneousBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.instantaneousBaseline = this._instantaneousBaseline;
    }
    if (this._learningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningDuration = this._learningDuration;
    }
    if (this._learningMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningMethod = this._learningMethod;
    }
    if (this._learningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningThreshold = this._learningThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsNewValueOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forgetAfter = undefined;
      this._instantaneousBaseline = undefined;
      this._learningDuration = undefined;
      this._learningMethod = undefined;
      this._learningThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forgetAfter = value.forgetAfter;
      this._instantaneousBaseline = value.instantaneousBaseline;
      this._learningDuration = value.learningDuration;
      this._learningMethod = value.learningMethod;
      this._learningThreshold = value.learningThreshold;
    }
  }

  // forget_after - computed: false, optional: false, required: true
  private _forgetAfter?: number; 
  public get forgetAfter() {
    return this.getNumberAttribute('forget_after');
  }
  public set forgetAfter(value: number) {
    this._forgetAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forgetAfterInput() {
    return this._forgetAfter;
  }

  // instantaneous_baseline - computed: true, optional: true, required: false
  private _instantaneousBaseline?: boolean | cdktn.IResolvable; 
  public get instantaneousBaseline() {
    return this.getBooleanAttribute('instantaneous_baseline');
  }
  public set instantaneousBaseline(value: boolean | cdktn.IResolvable) {
    this._instantaneousBaseline = value;
  }
  public resetInstantaneousBaseline() {
    this._instantaneousBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantaneousBaselineInput() {
    return this._instantaneousBaseline;
  }

  // learning_duration - computed: true, optional: true, required: false
  private _learningDuration?: number; 
  public get learningDuration() {
    return this.getNumberAttribute('learning_duration');
  }
  public set learningDuration(value: number) {
    this._learningDuration = value;
  }
  public resetLearningDuration() {
    this._learningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningDurationInput() {
    return this._learningDuration;
  }

  // learning_method - computed: true, optional: true, required: false
  private _learningMethod?: string; 
  public get learningMethod() {
    return this.getStringAttribute('learning_method');
  }
  public set learningMethod(value: string) {
    this._learningMethod = value;
  }
  public resetLearningMethod() {
    this._learningMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningMethodInput() {
    return this._learningMethod;
  }

  // learning_threshold - computed: true, optional: true, required: false
  private _learningThreshold?: number; 
  public get learningThreshold() {
    return this.getNumberAttribute('learning_threshold');
  }
  public set learningThreshold(value: number) {
    this._learningThreshold = value;
  }
  public resetLearningThreshold() {
    this._learningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningThresholdInput() {
    return this._learningThreshold;
  }
}

export class SecurityMonitoringRuleOptionsNewValueOptionsList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleOptionsNewValueOptions[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleOptionsNewValueOptionsOutputReference {
    return new SecurityMonitoringRuleOptionsNewValueOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions {
  /**
  * Child step name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#child SecurityMonitoringRule#child}
  */
  readonly child: string;
  /**
  * Maximum time allowed to transition from parent to child. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}
  */
  readonly evaluationWindow?: number;
  /**
  * Parent step name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#parent SecurityMonitoringRule#parent}
  */
  readonly parent: string;
}

export function securityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsToTerraform(struct?: SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    child: cdktn.stringToTerraform(struct!.child),
    evaluation_window: cdktn.numberToTerraform(struct!.evaluationWindow),
    parent: cdktn.stringToTerraform(struct!.parent),
  }
}


export function securityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsToHclTerraform(struct?: SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    child: {
      value: cdktn.stringToHclTerraform(struct!.child),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_window: {
      value: cdktn.numberToHclTerraform(struct!.evaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parent: {
      value: cdktn.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._child !== undefined) {
      hasAnyValues = true;
      internalValueResult.child = this._child;
    }
    if (this._evaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationWindow = this._evaluationWindow;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._child = undefined;
      this._evaluationWindow = undefined;
      this._parent = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._child = value.child;
      this._evaluationWindow = value.evaluationWindow;
      this._parent = value.parent;
    }
  }

  // child - computed: false, optional: false, required: true
  private _child?: string; 
  public get child() {
    return this.getStringAttribute('child');
  }
  public set child(value: string) {
    this._child = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childInput() {
    return this._child;
  }

  // evaluation_window - computed: true, optional: true, required: false
  private _evaluationWindow?: number; 
  public get evaluationWindow() {
    return this.getNumberAttribute('evaluation_window');
  }
  public set evaluationWindow(value: number) {
    this._evaluationWindow = value;
  }
  public resetEvaluationWindow() {
    this._evaluationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationWindowInput() {
    return this._evaluationWindow;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }
}

export class SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference {
    return new SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps {
  /**
  * Condition for the step to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#condition SecurityMonitoringRule#condition}
  */
  readonly condition: string;
  /**
  * Evaluation window for the step. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}
  */
  readonly evaluationWindow?: number;
  /**
  * Unique name of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name: string;
}

export function securityMonitoringRuleOptionsSequenceDetectionOptionsStepsToTerraform(struct?: SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    evaluation_window: cdktn.numberToTerraform(struct!.evaluationWindow),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function securityMonitoringRuleOptionsSequenceDetectionOptionsStepsToHclTerraform(struct?: SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_window: {
      value: cdktn.numberToHclTerraform(struct!.evaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._evaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationWindow = this._evaluationWindow;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._evaluationWindow = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._evaluationWindow = value.evaluationWindow;
      this._name = value.name;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // evaluation_window - computed: true, optional: true, required: false
  private _evaluationWindow?: number; 
  public get evaluationWindow() {
    return this.getNumberAttribute('evaluation_window');
  }
  public set evaluationWindow(value: number) {
    this._evaluationWindow = value;
  }
  public resetEvaluationWindow() {
    this._evaluationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationWindowInput() {
    return this._evaluationWindow;
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
}

export class SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference {
    return new SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleOptionsSequenceDetectionOptions {
  /**
  * step_transitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#step_transitions SecurityMonitoringRule#step_transitions}
  */
  readonly stepTransitions?: SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions[] | cdktn.IResolvable;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#steps SecurityMonitoringRule#steps}
  */
  readonly steps?: SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps[] | cdktn.IResolvable;
}

export function securityMonitoringRuleOptionsSequenceDetectionOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsSequenceDetectionOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    step_transitions: cdktn.listMapper(securityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsToTerraform, true)(struct!.stepTransitions),
    steps: cdktn.listMapper(securityMonitoringRuleOptionsSequenceDetectionOptionsStepsToTerraform, true)(struct!.steps),
  }
}


export function securityMonitoringRuleOptionsSequenceDetectionOptionsToHclTerraform(struct?: SecurityMonitoringRuleOptionsSequenceDetectionOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    step_transitions: {
      value: cdktn.listMapperHcl(securityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsToHclTerraform, true)(struct!.stepTransitions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList",
    },
    steps: {
      value: cdktn.listMapperHcl(securityMonitoringRuleOptionsSequenceDetectionOptionsStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleOptionsSequenceDetectionOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepTransitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepTransitions = this._stepTransitions?.internalValue;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsSequenceDetectionOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stepTransitions.internalValue = undefined;
      this._steps.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stepTransitions.internalValue = value.stepTransitions;
      this._steps.internalValue = value.steps;
    }
  }

  // step_transitions - computed: false, optional: true, required: false
  private _stepTransitions = new SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList(this, "step_transitions", false);
  public get stepTransitions() {
    return this._stepTransitions;
  }
  public putStepTransitions(value: SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions[] | cdktn.IResolvable) {
    this._stepTransitions.internalValue = value;
  }
  public resetStepTransitions() {
    this._stepTransitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepTransitionsInput() {
    return this._stepTransitions.internalValue;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps[] | cdktn.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}

export class SecurityMonitoringRuleOptionsSequenceDetectionOptionsList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleOptionsSequenceDetectionOptions[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference {
    return new SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery {
  /**
  * Fields to group by. If empty, each log triggers a signal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * Query to filter logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query: string;
}

export function securityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryToTerraform(struct?: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_by_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupByFields),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function securityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryToHclTerraform(struct?: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_by_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupByFields),
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

export class SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupByFields = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupByFields = value.groupByFields;
      this._query = value.query;
    }
  }

  // group_by_fields - computed: true, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
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

export class SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference {
    return new SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleOptionsThirdPartyRuleOptions {
  /**
  * Notification targets for the default rule case, when none of the third-party cases match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#default_notifications SecurityMonitoringRule#default_notifications}
  */
  readonly defaultNotifications?: string[];
  /**
  * Severity of the default rule case, when none of the third-party cases match. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#default_status SecurityMonitoringRule#default_status}
  */
  readonly defaultStatus: string;
  /**
  * A template for the signal title; if omitted, the title is generated based on the case name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#signal_title_template SecurityMonitoringRule#signal_title_template}
  */
  readonly signalTitleTemplate?: string;
  /**
  * root_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#root_query SecurityMonitoringRule#root_query}
  */
  readonly rootQuery?: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery[] | cdktn.IResolvable;
}

export function securityMonitoringRuleOptionsThirdPartyRuleOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsThirdPartyRuleOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_notifications: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.defaultNotifications),
    default_status: cdktn.stringToTerraform(struct!.defaultStatus),
    signal_title_template: cdktn.stringToTerraform(struct!.signalTitleTemplate),
    root_query: cdktn.listMapper(securityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryToTerraform, true)(struct!.rootQuery),
  }
}


export function securityMonitoringRuleOptionsThirdPartyRuleOptionsToHclTerraform(struct?: SecurityMonitoringRuleOptionsThirdPartyRuleOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_notifications: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.defaultNotifications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_status: {
      value: cdktn.stringToHclTerraform(struct!.defaultStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal_title_template: {
      value: cdktn.stringToHclTerraform(struct!.signalTitleTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_query: {
      value: cdktn.listMapperHcl(securityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryToHclTerraform, true)(struct!.rootQuery),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleOptionsThirdPartyRuleOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNotifications = this._defaultNotifications;
    }
    if (this._defaultStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStatus = this._defaultStatus;
    }
    if (this._signalTitleTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalTitleTemplate = this._signalTitleTemplate;
    }
    if (this._rootQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootQuery = this._rootQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsThirdPartyRuleOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultNotifications = undefined;
      this._defaultStatus = undefined;
      this._signalTitleTemplate = undefined;
      this._rootQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultNotifications = value.defaultNotifications;
      this._defaultStatus = value.defaultStatus;
      this._signalTitleTemplate = value.signalTitleTemplate;
      this._rootQuery.internalValue = value.rootQuery;
    }
  }

  // default_notifications - computed: false, optional: true, required: false
  private _defaultNotifications?: string[]; 
  public get defaultNotifications() {
    return this.getListAttribute('default_notifications');
  }
  public set defaultNotifications(value: string[]) {
    this._defaultNotifications = value;
  }
  public resetDefaultNotifications() {
    this._defaultNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNotificationsInput() {
    return this._defaultNotifications;
  }

  // default_status - computed: false, optional: false, required: true
  private _defaultStatus?: string; 
  public get defaultStatus() {
    return this.getStringAttribute('default_status');
  }
  public set defaultStatus(value: string) {
    this._defaultStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStatusInput() {
    return this._defaultStatus;
  }

  // signal_title_template - computed: false, optional: true, required: false
  private _signalTitleTemplate?: string; 
  public get signalTitleTemplate() {
    return this.getStringAttribute('signal_title_template');
  }
  public set signalTitleTemplate(value: string) {
    this._signalTitleTemplate = value;
  }
  public resetSignalTitleTemplate() {
    this._signalTitleTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalTitleTemplateInput() {
    return this._signalTitleTemplate;
  }

  // root_query - computed: false, optional: true, required: false
  private _rootQuery = new SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList(this, "root_query", false);
  public get rootQuery() {
    return this._rootQuery;
  }
  public putRootQuery(value: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery[] | cdktn.IResolvable) {
    this._rootQuery.internalValue = value;
  }
  public resetRootQuery() {
    this._rootQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootQueryInput() {
    return this._rootQuery.internalValue;
  }
}

export class SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleOptionsThirdPartyRuleOptions[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference {
    return new SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleOptions {
  /**
  * If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#decrease_criticality_based_on_env SecurityMonitoringRule#decrease_criticality_based_on_env}
  */
  readonly decreaseCriticalityBasedOnEnv?: boolean | cdktn.IResolvable;
  /**
  * The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`, `anomaly_threshold`, `sequence_detection`. Defaults to `"threshold"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#detection_method SecurityMonitoringRule#detection_method}
  */
  readonly detectionMethod?: string;
  /**
  * A time window is specified to match when at least one of the cases matches true. This is a sliding window and evaluates in real time. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}
  */
  readonly evaluationWindow?: number;
  /**
  * Once a signal is generated, the signal will remain "open" if a case is matched at least once within this keep alive window (in seconds). Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`. Defaults to `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#keep_alive SecurityMonitoringRule#keep_alive}
  */
  readonly keepAlive?: number;
  /**
  * A signal will "close" regardless of the query being matched once the time exceeds the maximum duration (in seconds). This time is calculated from the first seen timestamp. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#max_signal_duration SecurityMonitoringRule#max_signal_duration}
  */
  readonly maxSignalDuration?: number;
  /**
  * anomaly_detection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#anomaly_detection_options SecurityMonitoringRule#anomaly_detection_options}
  */
  readonly anomalyDetectionOptions?: SecurityMonitoringRuleOptionsAnomalyDetectionOptions[] | cdktn.IResolvable;
  /**
  * impossible_travel_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#impossible_travel_options SecurityMonitoringRule#impossible_travel_options}
  */
  readonly impossibleTravelOptions?: SecurityMonitoringRuleOptionsImpossibleTravelOptions[] | cdktn.IResolvable;
  /**
  * new_value_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#new_value_options SecurityMonitoringRule#new_value_options}
  */
  readonly newValueOptions?: SecurityMonitoringRuleOptionsNewValueOptions[] | cdktn.IResolvable;
  /**
  * sequence_detection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#sequence_detection_options SecurityMonitoringRule#sequence_detection_options}
  */
  readonly sequenceDetectionOptions?: SecurityMonitoringRuleOptionsSequenceDetectionOptions[] | cdktn.IResolvable;
  /**
  * third_party_rule_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#third_party_rule_options SecurityMonitoringRule#third_party_rule_options}
  */
  readonly thirdPartyRuleOptions?: SecurityMonitoringRuleOptionsThirdPartyRuleOptions[] | cdktn.IResolvable;
}

export function securityMonitoringRuleOptionsToTerraform(struct?: SecurityMonitoringRuleOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    decrease_criticality_based_on_env: cdktn.booleanToTerraform(struct!.decreaseCriticalityBasedOnEnv),
    detection_method: cdktn.stringToTerraform(struct!.detectionMethod),
    evaluation_window: cdktn.numberToTerraform(struct!.evaluationWindow),
    keep_alive: cdktn.numberToTerraform(struct!.keepAlive),
    max_signal_duration: cdktn.numberToTerraform(struct!.maxSignalDuration),
    anomaly_detection_options: cdktn.listMapper(securityMonitoringRuleOptionsAnomalyDetectionOptionsToTerraform, true)(struct!.anomalyDetectionOptions),
    impossible_travel_options: cdktn.listMapper(securityMonitoringRuleOptionsImpossibleTravelOptionsToTerraform, true)(struct!.impossibleTravelOptions),
    new_value_options: cdktn.listMapper(securityMonitoringRuleOptionsNewValueOptionsToTerraform, true)(struct!.newValueOptions),
    sequence_detection_options: cdktn.listMapper(securityMonitoringRuleOptionsSequenceDetectionOptionsToTerraform, true)(struct!.sequenceDetectionOptions),
    third_party_rule_options: cdktn.listMapper(securityMonitoringRuleOptionsThirdPartyRuleOptionsToTerraform, true)(struct!.thirdPartyRuleOptions),
  }
}


export function securityMonitoringRuleOptionsToHclTerraform(struct?: SecurityMonitoringRuleOptions | cdktn.IResolvable): any {
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
    detection_method: {
      value: cdktn.stringToHclTerraform(struct!.detectionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_window: {
      value: cdktn.numberToHclTerraform(struct!.evaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_alive: {
      value: cdktn.numberToHclTerraform(struct!.keepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_signal_duration: {
      value: cdktn.numberToHclTerraform(struct!.maxSignalDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    anomaly_detection_options: {
      value: cdktn.listMapperHcl(securityMonitoringRuleOptionsAnomalyDetectionOptionsToHclTerraform, true)(struct!.anomalyDetectionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList",
    },
    impossible_travel_options: {
      value: cdktn.listMapperHcl(securityMonitoringRuleOptionsImpossibleTravelOptionsToHclTerraform, true)(struct!.impossibleTravelOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsImpossibleTravelOptionsList",
    },
    new_value_options: {
      value: cdktn.listMapperHcl(securityMonitoringRuleOptionsNewValueOptionsToHclTerraform, true)(struct!.newValueOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsNewValueOptionsList",
    },
    sequence_detection_options: {
      value: cdktn.listMapperHcl(securityMonitoringRuleOptionsSequenceDetectionOptionsToHclTerraform, true)(struct!.sequenceDetectionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsSequenceDetectionOptionsList",
    },
    third_party_rule_options: {
      value: cdktn.listMapperHcl(securityMonitoringRuleOptionsThirdPartyRuleOptionsToHclTerraform, true)(struct!.thirdPartyRuleOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decreaseCriticalityBasedOnEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.decreaseCriticalityBasedOnEnv = this._decreaseCriticalityBasedOnEnv;
    }
    if (this._detectionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMethod = this._detectionMethod;
    }
    if (this._evaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationWindow = this._evaluationWindow;
    }
    if (this._keepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlive = this._keepAlive;
    }
    if (this._maxSignalDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSignalDuration = this._maxSignalDuration;
    }
    if (this._anomalyDetectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomalyDetectionOptions = this._anomalyDetectionOptions?.internalValue;
    }
    if (this._impossibleTravelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.impossibleTravelOptions = this._impossibleTravelOptions?.internalValue;
    }
    if (this._newValueOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newValueOptions = this._newValueOptions?.internalValue;
    }
    if (this._sequenceDetectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceDetectionOptions = this._sequenceDetectionOptions?.internalValue;
    }
    if (this._thirdPartyRuleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyRuleOptions = this._thirdPartyRuleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decreaseCriticalityBasedOnEnv = undefined;
      this._detectionMethod = undefined;
      this._evaluationWindow = undefined;
      this._keepAlive = undefined;
      this._maxSignalDuration = undefined;
      this._anomalyDetectionOptions.internalValue = undefined;
      this._impossibleTravelOptions.internalValue = undefined;
      this._newValueOptions.internalValue = undefined;
      this._sequenceDetectionOptions.internalValue = undefined;
      this._thirdPartyRuleOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decreaseCriticalityBasedOnEnv = value.decreaseCriticalityBasedOnEnv;
      this._detectionMethod = value.detectionMethod;
      this._evaluationWindow = value.evaluationWindow;
      this._keepAlive = value.keepAlive;
      this._maxSignalDuration = value.maxSignalDuration;
      this._anomalyDetectionOptions.internalValue = value.anomalyDetectionOptions;
      this._impossibleTravelOptions.internalValue = value.impossibleTravelOptions;
      this._newValueOptions.internalValue = value.newValueOptions;
      this._sequenceDetectionOptions.internalValue = value.sequenceDetectionOptions;
      this._thirdPartyRuleOptions.internalValue = value.thirdPartyRuleOptions;
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

  // detection_method - computed: true, optional: true, required: false
  private _detectionMethod?: string; 
  public get detectionMethod() {
    return this.getStringAttribute('detection_method');
  }
  public set detectionMethod(value: string) {
    this._detectionMethod = value;
  }
  public resetDetectionMethod() {
    this._detectionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionMethodInput() {
    return this._detectionMethod;
  }

  // evaluation_window - computed: true, optional: true, required: false
  private _evaluationWindow?: number; 
  public get evaluationWindow() {
    return this.getNumberAttribute('evaluation_window');
  }
  public set evaluationWindow(value: number) {
    this._evaluationWindow = value;
  }
  public resetEvaluationWindow() {
    this._evaluationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationWindowInput() {
    return this._evaluationWindow;
  }

  // keep_alive - computed: true, optional: true, required: false
  private _keepAlive?: number; 
  public get keepAlive() {
    return this.getNumberAttribute('keep_alive');
  }
  public set keepAlive(value: number) {
    this._keepAlive = value;
  }
  public resetKeepAlive() {
    this._keepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive;
  }

  // max_signal_duration - computed: true, optional: true, required: false
  private _maxSignalDuration?: number; 
  public get maxSignalDuration() {
    return this.getNumberAttribute('max_signal_duration');
  }
  public set maxSignalDuration(value: number) {
    this._maxSignalDuration = value;
  }
  public resetMaxSignalDuration() {
    this._maxSignalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSignalDurationInput() {
    return this._maxSignalDuration;
  }

  // anomaly_detection_options - computed: false, optional: true, required: false
  private _anomalyDetectionOptions = new SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList(this, "anomaly_detection_options", false);
  public get anomalyDetectionOptions() {
    return this._anomalyDetectionOptions;
  }
  public putAnomalyDetectionOptions(value: SecurityMonitoringRuleOptionsAnomalyDetectionOptions[] | cdktn.IResolvable) {
    this._anomalyDetectionOptions.internalValue = value;
  }
  public resetAnomalyDetectionOptions() {
    this._anomalyDetectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectionOptionsInput() {
    return this._anomalyDetectionOptions.internalValue;
  }

  // impossible_travel_options - computed: false, optional: true, required: false
  private _impossibleTravelOptions = new SecurityMonitoringRuleOptionsImpossibleTravelOptionsList(this, "impossible_travel_options", false);
  public get impossibleTravelOptions() {
    return this._impossibleTravelOptions;
  }
  public putImpossibleTravelOptions(value: SecurityMonitoringRuleOptionsImpossibleTravelOptions[] | cdktn.IResolvable) {
    this._impossibleTravelOptions.internalValue = value;
  }
  public resetImpossibleTravelOptions() {
    this._impossibleTravelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impossibleTravelOptionsInput() {
    return this._impossibleTravelOptions.internalValue;
  }

  // new_value_options - computed: false, optional: true, required: false
  private _newValueOptions = new SecurityMonitoringRuleOptionsNewValueOptionsList(this, "new_value_options", false);
  public get newValueOptions() {
    return this._newValueOptions;
  }
  public putNewValueOptions(value: SecurityMonitoringRuleOptionsNewValueOptions[] | cdktn.IResolvable) {
    this._newValueOptions.internalValue = value;
  }
  public resetNewValueOptions() {
    this._newValueOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newValueOptionsInput() {
    return this._newValueOptions.internalValue;
  }

  // sequence_detection_options - computed: false, optional: true, required: false
  private _sequenceDetectionOptions = new SecurityMonitoringRuleOptionsSequenceDetectionOptionsList(this, "sequence_detection_options", false);
  public get sequenceDetectionOptions() {
    return this._sequenceDetectionOptions;
  }
  public putSequenceDetectionOptions(value: SecurityMonitoringRuleOptionsSequenceDetectionOptions[] | cdktn.IResolvable) {
    this._sequenceDetectionOptions.internalValue = value;
  }
  public resetSequenceDetectionOptions() {
    this._sequenceDetectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceDetectionOptionsInput() {
    return this._sequenceDetectionOptions.internalValue;
  }

  // third_party_rule_options - computed: false, optional: true, required: false
  private _thirdPartyRuleOptions = new SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList(this, "third_party_rule_options", false);
  public get thirdPartyRuleOptions() {
    return this._thirdPartyRuleOptions;
  }
  public putThirdPartyRuleOptions(value: SecurityMonitoringRuleOptionsThirdPartyRuleOptions[] | cdktn.IResolvable) {
    this._thirdPartyRuleOptions.internalValue = value;
  }
  public resetThirdPartyRuleOptions() {
    this._thirdPartyRuleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyRuleOptionsInput() {
    return this._thirdPartyRuleOptions.internalValue;
  }
}

export class SecurityMonitoringRuleOptionsList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleOptions[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleOptionsOutputReference {
    return new SecurityMonitoringRuleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleQueryAgentRule {
  /**
  * **Deprecated**. It won't be applied anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#agent_rule_id SecurityMonitoringRule#agent_rule_id}
  */
  readonly agentRuleId: string;
  /**
  * **Deprecated**. It won't be applied anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}
  */
  readonly expression: string;
}

export function securityMonitoringRuleQueryAgentRuleToTerraform(struct?: SecurityMonitoringRuleQueryAgentRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_rule_id: cdktn.stringToTerraform(struct!.agentRuleId),
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function securityMonitoringRuleQueryAgentRuleToHclTerraform(struct?: SecurityMonitoringRuleQueryAgentRule | cdktn.IResolvable): any {
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

export class SecurityMonitoringRuleQueryAgentRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleQueryAgentRule | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityMonitoringRuleQueryAgentRule | cdktn.IResolvable | undefined) {
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

export class SecurityMonitoringRuleQueryAgentRuleList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleQueryAgentRule[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleQueryAgentRuleOutputReference {
    return new SecurityMonitoringRuleQueryAgentRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleQuery {
  /**
  * The aggregation type. For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"count"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`, `security_signals`. Defaults to `"logs"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#data_source SecurityMonitoringRule#data_source}
  */
  readonly dataSource?: string;
  /**
  * Field for which the cardinality is measured. Sent as an array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#distinct_fields SecurityMonitoringRule#distinct_fields}
  */
  readonly distinctFields?: string[];
  /**
  * Fields to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * When false, events without a group-by value are ignored by the rule. When true, events with missing group-by fields are processed with `N/A`, replacing the missing values. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#has_optional_group_by_fields SecurityMonitoringRule#has_optional_group_by_fields}
  */
  readonly hasOptionalGroupByFields?: boolean | cdktn.IResolvable;
  /**
  * List of indexes to run the query on when the data source is `logs`. Supports only one element. Used only for scheduled rules (in other words, when `scheduling_options` is defined).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#indexes SecurityMonitoringRule#indexes}
  */
  readonly indexes?: string[];
  /**
  * The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#metric SecurityMonitoringRule#metric}
  */
  readonly metric?: string;
  /**
  * Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations. The `sum`, `max`, and `geo_data` aggregations only accept one value in this list, whereas the `new_value` aggregation accepts up to five values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#metrics SecurityMonitoringRule#metrics}
  */
  readonly metrics?: string[];
  /**
  * Name of the query. Not compatible with `new_value` aggregations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Query to run on logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query: string;
  /**
  * agent_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#agent_rule SecurityMonitoringRule#agent_rule}
  */
  readonly agentRule?: SecurityMonitoringRuleQueryAgentRule[] | cdktn.IResolvable;
}

export function securityMonitoringRuleQueryToTerraform(struct?: SecurityMonitoringRuleQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    distinct_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.distinctFields),
    group_by_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupByFields),
    has_optional_group_by_fields: cdktn.booleanToTerraform(struct!.hasOptionalGroupByFields),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    metric: cdktn.stringToTerraform(struct!.metric),
    metrics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metrics),
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
    agent_rule: cdktn.listMapper(securityMonitoringRuleQueryAgentRuleToTerraform, true)(struct!.agentRule),
  }
}


export function securityMonitoringRuleQueryToHclTerraform(struct?: SecurityMonitoringRuleQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation: {
      value: cdktn.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distinct_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.distinctFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_by_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    has_optional_group_by_fields: {
      value: cdktn.booleanToHclTerraform(struct!.hasOptionalGroupByFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    indexes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.indexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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
    agent_rule: {
      value: cdktn.listMapperHcl(securityMonitoringRuleQueryAgentRuleToHclTerraform, true)(struct!.agentRule),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleQueryAgentRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._distinctFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinctFields = this._distinctFields;
    }
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._hasOptionalGroupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasOptionalGroupByFields = this._hasOptionalGroupByFields;
    }
    if (this._indexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._agentRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentRule = this._agentRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._dataSource = undefined;
      this._distinctFields = undefined;
      this._groupByFields = undefined;
      this._hasOptionalGroupByFields = undefined;
      this._indexes = undefined;
      this._metric = undefined;
      this._metrics = undefined;
      this._name = undefined;
      this._query = undefined;
      this._agentRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._dataSource = value.dataSource;
      this._distinctFields = value.distinctFields;
      this._groupByFields = value.groupByFields;
      this._hasOptionalGroupByFields = value.hasOptionalGroupByFields;
      this._indexes = value.indexes;
      this._metric = value.metric;
      this._metrics = value.metrics;
      this._name = value.name;
      this._query = value.query;
      this._agentRule.internalValue = value.agentRule;
    }
  }

  // aggregation - computed: true, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // data_source - computed: true, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // distinct_fields - computed: false, optional: true, required: false
  private _distinctFields?: string[]; 
  public get distinctFields() {
    return this.getListAttribute('distinct_fields');
  }
  public set distinctFields(value: string[]) {
    this._distinctFields = value;
  }
  public resetDistinctFields() {
    this._distinctFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinctFieldsInput() {
    return this._distinctFields;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
  }

  // has_optional_group_by_fields - computed: true, optional: true, required: false
  private _hasOptionalGroupByFields?: boolean | cdktn.IResolvable; 
  public get hasOptionalGroupByFields() {
    return this.getBooleanAttribute('has_optional_group_by_fields');
  }
  public set hasOptionalGroupByFields(value: boolean | cdktn.IResolvable) {
    this._hasOptionalGroupByFields = value;
  }
  public resetHasOptionalGroupByFields() {
    this._hasOptionalGroupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasOptionalGroupByFieldsInput() {
    return this._hasOptionalGroupByFields;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes?: string[]; 
  public get indexes() {
    return this.getListAttribute('indexes');
  }
  public set indexes(value: string[]) {
    this._indexes = value;
  }
  public resetIndexes() {
    this._indexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics?: string[]; 
  public get metrics() {
    return this.getListAttribute('metrics');
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
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

  // agent_rule - computed: false, optional: true, required: false
  private _agentRule = new SecurityMonitoringRuleQueryAgentRuleList(this, "agent_rule", false);
  public get agentRule() {
    return this._agentRule;
  }
  public putAgentRule(value: SecurityMonitoringRuleQueryAgentRule[] | cdktn.IResolvable) {
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

export class SecurityMonitoringRuleQueryList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleQuery[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleQueryOutputReference {
    return new SecurityMonitoringRuleQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleReferenceTables {
  /**
  * Whether to include or exclude logs that match the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#check_presence SecurityMonitoringRule#check_presence}
  */
  readonly checkPresence: boolean | cdktn.IResolvable;
  /**
  * The name of the column in the reference table. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#column_name SecurityMonitoringRule#column_name}
  */
  readonly columnName: string;
  /**
  * The field in the log that should be matched against the reference table. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#log_field_path SecurityMonitoringRule#log_field_path}
  */
  readonly logFieldPath: string;
  /**
  * The name of the query to filter. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#rule_query_name SecurityMonitoringRule#rule_query_name}
  */
  readonly ruleQueryName: string;
  /**
  * The name of the reference table. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#table_name SecurityMonitoringRule#table_name}
  */
  readonly tableName: string;
}

export function securityMonitoringRuleReferenceTablesToTerraform(struct?: SecurityMonitoringRuleReferenceTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    check_presence: cdktn.booleanToTerraform(struct!.checkPresence),
    column_name: cdktn.stringToTerraform(struct!.columnName),
    log_field_path: cdktn.stringToTerraform(struct!.logFieldPath),
    rule_query_name: cdktn.stringToTerraform(struct!.ruleQueryName),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function securityMonitoringRuleReferenceTablesToHclTerraform(struct?: SecurityMonitoringRuleReferenceTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    check_presence: {
      value: cdktn.booleanToHclTerraform(struct!.checkPresence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_field_path: {
      value: cdktn.stringToHclTerraform(struct!.logFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_query_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleQueryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleReferenceTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleReferenceTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkPresence !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresence = this._checkPresence;
    }
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._logFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFieldPath = this._logFieldPath;
    }
    if (this._ruleQueryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleQueryName = this._ruleQueryName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleReferenceTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkPresence = undefined;
      this._columnName = undefined;
      this._logFieldPath = undefined;
      this._ruleQueryName = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkPresence = value.checkPresence;
      this._columnName = value.columnName;
      this._logFieldPath = value.logFieldPath;
      this._ruleQueryName = value.ruleQueryName;
      this._tableName = value.tableName;
    }
  }

  // check_presence - computed: false, optional: false, required: true
  private _checkPresence?: boolean | cdktn.IResolvable; 
  public get checkPresence() {
    return this.getBooleanAttribute('check_presence');
  }
  public set checkPresence(value: boolean | cdktn.IResolvable) {
    this._checkPresence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresenceInput() {
    return this._checkPresence;
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // log_field_path - computed: false, optional: false, required: true
  private _logFieldPath?: string; 
  public get logFieldPath() {
    return this.getStringAttribute('log_field_path');
  }
  public set logFieldPath(value: string) {
    this._logFieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldPathInput() {
    return this._logFieldPath;
  }

  // rule_query_name - computed: false, optional: false, required: true
  private _ruleQueryName?: string; 
  public get ruleQueryName() {
    return this.getStringAttribute('rule_query_name');
  }
  public set ruleQueryName(value: string) {
    this._ruleQueryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleQueryNameInput() {
    return this._ruleQueryName;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

export class SecurityMonitoringRuleReferenceTablesList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleReferenceTables[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleReferenceTablesOutputReference {
    return new SecurityMonitoringRuleReferenceTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleSchedulingOptions {
  /**
  * Schedule for the rule queries, written in RRULE syntax. See [RFC](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) for syntax reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#rrule SecurityMonitoringRule#rrule}
  */
  readonly rrule: string;
  /**
  * Start date for the schedule, in ISO 8601 format without timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#start SecurityMonitoringRule#start}
  */
  readonly start: string;
  /**
  * Time zone of the start date, in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#timezone SecurityMonitoringRule#timezone}
  */
  readonly timezone: string;
}

export function securityMonitoringRuleSchedulingOptionsToTerraform(struct?: SecurityMonitoringRuleSchedulingOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rrule: cdktn.stringToTerraform(struct!.rrule),
    start: cdktn.stringToTerraform(struct!.start),
    timezone: cdktn.stringToTerraform(struct!.timezone),
  }
}


export function securityMonitoringRuleSchedulingOptionsToHclTerraform(struct?: SecurityMonitoringRuleSchedulingOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rrule: {
      value: cdktn.stringToHclTerraform(struct!.rrule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
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

export class SecurityMonitoringRuleSchedulingOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleSchedulingOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rrule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrule = this._rrule;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleSchedulingOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rrule = undefined;
      this._start = undefined;
      this._timezone = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rrule = value.rrule;
      this._start = value.start;
      this._timezone = value.timezone;
    }
  }

  // rrule - computed: false, optional: false, required: true
  private _rrule?: string; 
  public get rrule() {
    return this.getStringAttribute('rrule');
  }
  public set rrule(value: string) {
    this._rrule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rruleInput() {
    return this._rrule;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
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

export class SecurityMonitoringRuleSchedulingOptionsList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleSchedulingOptions[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleSchedulingOptionsOutputReference {
    return new SecurityMonitoringRuleSchedulingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleSignalQuery {
  /**
  * The aggregation type. For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"event_count"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Fields to correlate by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#correlated_by_fields SecurityMonitoringRule#correlated_by_fields}
  */
  readonly correlatedByFields?: string[];
  /**
  * Index of the rule query used to retrieve the correlated field. An empty string applies correlation on the non-projected per query attributes of the rule. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#correlated_query_index SecurityMonitoringRule#correlated_query_index}
  */
  readonly correlatedQueryIndex?: string;
  /**
  * Name of the query. Not compatible with `new_value` aggregations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Rule ID of the signal to correlate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#rule_id SecurityMonitoringRule#rule_id}
  */
  readonly ruleId: string;
}

export function securityMonitoringRuleSignalQueryToTerraform(struct?: SecurityMonitoringRuleSignalQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    correlated_by_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.correlatedByFields),
    correlated_query_index: cdktn.stringToTerraform(struct!.correlatedQueryIndex),
    name: cdktn.stringToTerraform(struct!.name),
    rule_id: cdktn.stringToTerraform(struct!.ruleId),
  }
}


export function securityMonitoringRuleSignalQueryToHclTerraform(struct?: SecurityMonitoringRuleSignalQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation: {
      value: cdktn.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correlated_by_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.correlatedByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    correlated_query_index: {
      value: cdktn.stringToHclTerraform(struct!.correlatedQueryIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktn.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleSignalQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleSignalQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._correlatedByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlatedByFields = this._correlatedByFields;
    }
    if (this._correlatedQueryIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlatedQueryIndex = this._correlatedQueryIndex;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleSignalQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._correlatedByFields = undefined;
      this._correlatedQueryIndex = undefined;
      this._name = undefined;
      this._ruleId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._correlatedByFields = value.correlatedByFields;
      this._correlatedQueryIndex = value.correlatedQueryIndex;
      this._name = value.name;
      this._ruleId = value.ruleId;
    }
  }

  // aggregation - computed: true, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // correlated_by_fields - computed: false, optional: true, required: false
  private _correlatedByFields?: string[]; 
  public get correlatedByFields() {
    return this.getListAttribute('correlated_by_fields');
  }
  public set correlatedByFields(value: string[]) {
    this._correlatedByFields = value;
  }
  public resetCorrelatedByFields() {
    this._correlatedByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlatedByFieldsInput() {
    return this._correlatedByFields;
  }

  // correlated_query_index - computed: true, optional: true, required: false
  private _correlatedQueryIndex?: string; 
  public get correlatedQueryIndex() {
    return this.getStringAttribute('correlated_query_index');
  }
  public set correlatedQueryIndex(value: string) {
    this._correlatedQueryIndex = value;
  }
  public resetCorrelatedQueryIndex() {
    this._correlatedQueryIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlatedQueryIndexInput() {
    return this._correlatedQueryIndex;
  }

  // default_rule_id - computed: true, optional: false, required: false
  public get defaultRuleId() {
    return this.getStringAttribute('default_rule_id');
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

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }
}

export class SecurityMonitoringRuleSignalQueryList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleSignalQuery[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleSignalQueryOutputReference {
    return new SecurityMonitoringRuleSignalQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleThirdPartyCase {
  /**
  * Name of the case. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Notification targets for each rule case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}
  */
  readonly notifications?: string[];
  /**
  * A query to associate a third-party event to this case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query?: string;
  /**
  * Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}
  */
  readonly status: string;
}

export function securityMonitoringRuleThirdPartyCaseToTerraform(struct?: SecurityMonitoringRuleThirdPartyCase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    notifications: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notifications),
    query: cdktn.stringToTerraform(struct!.query),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function securityMonitoringRuleThirdPartyCaseToHclTerraform(struct?: SecurityMonitoringRuleThirdPartyCase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SecurityMonitoringRuleThirdPartyCaseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleThirdPartyCase | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleThirdPartyCase | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._notifications = undefined;
      this._query = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._notifications = value.notifications;
      this._query = value.query;
      this._status = value.status;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // notifications - computed: true, optional: true, required: false
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

export class SecurityMonitoringRuleThirdPartyCaseList extends cdktn.ComplexList {
  public internalValue? : SecurityMonitoringRuleThirdPartyCase[] | cdktn.IResolvable

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
  public get(index: number): SecurityMonitoringRuleThirdPartyCaseOutputReference {
    return new SecurityMonitoringRuleThirdPartyCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule datadog_security_monitoring_rule}
*/
export class SecurityMonitoringRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityMonitoringRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityMonitoringRule to import
  * @param importFromId The id of the existing SecurityMonitoringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityMonitoringRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_monitoring_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_monitoring_rule datadog_security_monitoring_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_rule',
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
    this._enabled = config.enabled;
    this._groupSignalsBy = config.groupSignalsBy;
    this._hasExtendedTitle = config.hasExtendedTitle;
    this._message = config.message;
    this._name = config.name;
    this._tags = config.tags;
    this._type = config.type;
    this._validate = config.validate;
    this._calculatedField.internalValue = config.calculatedField;
    this._case.internalValue = config.case;
    this._filter.internalValue = config.filter;
    this._options.internalValue = config.options;
    this._query.internalValue = config.query;
    this._referenceTables.internalValue = config.referenceTables;
    this._schedulingOptions.internalValue = config.schedulingOptions;
    this._signalQuery.internalValue = config.signalQuery;
    this._thirdPartyCase.internalValue = config.thirdPartyCase;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // effective_tags - computed: true, optional: false, required: false
  public get effectiveTags() {
    return cdktn.Fn.tolist(this.getListAttribute('effective_tags'));
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

  // group_signals_by - computed: false, optional: true, required: false
  private _groupSignalsBy?: string[]; 
  public get groupSignalsBy() {
    return this.getListAttribute('group_signals_by');
  }
  public set groupSignalsBy(value: string[]) {
    this._groupSignalsBy = value;
  }
  public resetGroupSignalsBy() {
    this._groupSignalsBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSignalsByInput() {
    return this._groupSignalsBy;
  }

  // has_extended_title - computed: true, optional: true, required: false
  private _hasExtendedTitle?: boolean | cdktn.IResolvable; 
  public get hasExtendedTitle() {
    return this.getBooleanAttribute('has_extended_title');
  }
  public set hasExtendedTitle(value: boolean | cdktn.IResolvable) {
    this._hasExtendedTitle = value;
  }
  public resetHasExtendedTitle() {
    this._hasExtendedTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasExtendedTitleInput() {
    return this._hasExtendedTitle;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktn.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktn.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktn.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // calculated_field - computed: false, optional: true, required: false
  private _calculatedField = new SecurityMonitoringRuleCalculatedFieldList(this, "calculated_field", false);
  public get calculatedField() {
    return this._calculatedField;
  }
  public putCalculatedField(value: SecurityMonitoringRuleCalculatedField[] | cdktn.IResolvable) {
    this._calculatedField.internalValue = value;
  }
  public resetCalculatedField() {
    this._calculatedField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculatedFieldInput() {
    return this._calculatedField.internalValue;
  }

  // case - computed: false, optional: true, required: false
  private _case = new SecurityMonitoringRuleCaseList(this, "case", false);
  public get case() {
    return this._case;
  }
  public putCase(value: SecurityMonitoringRuleCase[] | cdktn.IResolvable) {
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
  private _filter = new SecurityMonitoringRuleFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityMonitoringRuleFilter[] | cdktn.IResolvable) {
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
  private _options = new SecurityMonitoringRuleOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: SecurityMonitoringRuleOptions[] | cdktn.IResolvable) {
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
  private _query = new SecurityMonitoringRuleQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: SecurityMonitoringRuleQuery[] | cdktn.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // reference_tables - computed: false, optional: true, required: false
  private _referenceTables = new SecurityMonitoringRuleReferenceTablesList(this, "reference_tables", false);
  public get referenceTables() {
    return this._referenceTables;
  }
  public putReferenceTables(value: SecurityMonitoringRuleReferenceTables[] | cdktn.IResolvable) {
    this._referenceTables.internalValue = value;
  }
  public resetReferenceTables() {
    this._referenceTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTablesInput() {
    return this._referenceTables.internalValue;
  }

  // scheduling_options - computed: false, optional: true, required: false
  private _schedulingOptions = new SecurityMonitoringRuleSchedulingOptionsList(this, "scheduling_options", false);
  public get schedulingOptions() {
    return this._schedulingOptions;
  }
  public putSchedulingOptions(value: SecurityMonitoringRuleSchedulingOptions[] | cdktn.IResolvable) {
    this._schedulingOptions.internalValue = value;
  }
  public resetSchedulingOptions() {
    this._schedulingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingOptionsInput() {
    return this._schedulingOptions.internalValue;
  }

  // signal_query - computed: false, optional: true, required: false
  private _signalQuery = new SecurityMonitoringRuleSignalQueryList(this, "signal_query", false);
  public get signalQuery() {
    return this._signalQuery;
  }
  public putSignalQuery(value: SecurityMonitoringRuleSignalQuery[] | cdktn.IResolvable) {
    this._signalQuery.internalValue = value;
  }
  public resetSignalQuery() {
    this._signalQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalQueryInput() {
    return this._signalQuery.internalValue;
  }

  // third_party_case - computed: false, optional: true, required: false
  private _thirdPartyCase = new SecurityMonitoringRuleThirdPartyCaseList(this, "third_party_case", false);
  public get thirdPartyCase() {
    return this._thirdPartyCase;
  }
  public putThirdPartyCase(value: SecurityMonitoringRuleThirdPartyCase[] | cdktn.IResolvable) {
    this._thirdPartyCase.internalValue = value;
  }
  public resetThirdPartyCase() {
    this._thirdPartyCase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyCaseInput() {
    return this._thirdPartyCase.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktn.booleanToTerraform(this._enabled),
      group_signals_by: cdktn.listMapper(cdktn.stringToTerraform, false)(this._groupSignalsBy),
      has_extended_title: cdktn.booleanToTerraform(this._hasExtendedTitle),
      message: cdktn.stringToTerraform(this._message),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
      type: cdktn.stringToTerraform(this._type),
      validate: cdktn.booleanToTerraform(this._validate),
      calculated_field: cdktn.listMapper(securityMonitoringRuleCalculatedFieldToTerraform, true)(this._calculatedField.internalValue),
      case: cdktn.listMapper(securityMonitoringRuleCaseToTerraform, true)(this._case.internalValue),
      filter: cdktn.listMapper(securityMonitoringRuleFilterToTerraform, true)(this._filter.internalValue),
      options: cdktn.listMapper(securityMonitoringRuleOptionsToTerraform, true)(this._options.internalValue),
      query: cdktn.listMapper(securityMonitoringRuleQueryToTerraform, true)(this._query.internalValue),
      reference_tables: cdktn.listMapper(securityMonitoringRuleReferenceTablesToTerraform, true)(this._referenceTables.internalValue),
      scheduling_options: cdktn.listMapper(securityMonitoringRuleSchedulingOptionsToTerraform, true)(this._schedulingOptions.internalValue),
      signal_query: cdktn.listMapper(securityMonitoringRuleSignalQueryToTerraform, true)(this._signalQuery.internalValue),
      third_party_case: cdktn.listMapper(securityMonitoringRuleThirdPartyCaseToTerraform, true)(this._thirdPartyCase.internalValue),
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
      group_signals_by: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._groupSignalsBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      has_extended_title: {
        value: cdktn.booleanToHclTerraform(this._hasExtendedTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      message: {
        value: cdktn.stringToHclTerraform(this._message),
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
      tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate: {
        value: cdktn.booleanToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      calculated_field: {
        value: cdktn.listMapperHcl(securityMonitoringRuleCalculatedFieldToHclTerraform, true)(this._calculatedField.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleCalculatedFieldList",
      },
      case: {
        value: cdktn.listMapperHcl(securityMonitoringRuleCaseToHclTerraform, true)(this._case.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleCaseList",
      },
      filter: {
        value: cdktn.listMapperHcl(securityMonitoringRuleFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleFilterList",
      },
      options: {
        value: cdktn.listMapperHcl(securityMonitoringRuleOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleOptionsList",
      },
      query: {
        value: cdktn.listMapperHcl(securityMonitoringRuleQueryToHclTerraform, true)(this._query.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleQueryList",
      },
      reference_tables: {
        value: cdktn.listMapperHcl(securityMonitoringRuleReferenceTablesToHclTerraform, true)(this._referenceTables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleReferenceTablesList",
      },
      scheduling_options: {
        value: cdktn.listMapperHcl(securityMonitoringRuleSchedulingOptionsToHclTerraform, true)(this._schedulingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleSchedulingOptionsList",
      },
      signal_query: {
        value: cdktn.listMapperHcl(securityMonitoringRuleSignalQueryToHclTerraform, true)(this._signalQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleSignalQueryList",
      },
      third_party_case: {
        value: cdktn.listMapperHcl(securityMonitoringRuleThirdPartyCaseToHclTerraform, true)(this._thirdPartyCase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleThirdPartyCaseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
