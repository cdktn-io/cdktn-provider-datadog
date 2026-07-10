/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TagPipelineRulesetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether the ruleset is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The name of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}
  */
  readonly name: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#rules TagPipelineRuleset#rules}
  */
  readonly rules?: TagPipelineRulesetRules[] | cdktn.IResolvable;
}
export interface TagPipelineRulesetRulesMapping {
  /**
  * The destination key for the mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#destination_key TagPipelineRuleset#destination_key}
  */
  readonly destinationKey?: string;
  /**
  * Whether to apply the mapping only if the destination key doesn't exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}
  */
  readonly ifNotExists?: boolean | cdktn.IResolvable;
  /**
  * Behavior when the tag already exists. Valid values: `append` (append to the existing tag value), `replace` (replace existing tag value), `do_not_apply` (never apply if tag already exists). Valid values are `append`, `replace`, `do_not_apply`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#if_tag_exists TagPipelineRuleset#if_tag_exists}
  */
  readonly ifTagExists?: string;
  /**
  * The source keys for the mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}
  */
  readonly sourceKeys?: string[];
}

export function tagPipelineRulesetRulesMappingToTerraform(struct?: TagPipelineRulesetRulesMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_key: cdktn.stringToTerraform(struct!.destinationKey),
    if_not_exists: cdktn.booleanToTerraform(struct!.ifNotExists),
    if_tag_exists: cdktn.stringToTerraform(struct!.ifTagExists),
    source_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceKeys),
  }
}


export function tagPipelineRulesetRulesMappingToHclTerraform(struct?: TagPipelineRulesetRulesMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_key: {
      value: cdktn.stringToHclTerraform(struct!.destinationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_not_exists: {
      value: cdktn.booleanToHclTerraform(struct!.ifNotExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    if_tag_exists: {
      value: cdktn.stringToHclTerraform(struct!.ifTagExists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagPipelineRulesetRulesMappingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagPipelineRulesetRulesMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationKey = this._destinationKey;
    }
    if (this._ifNotExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifNotExists = this._ifNotExists;
    }
    if (this._ifTagExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifTagExists = this._ifTagExists;
    }
    if (this._sourceKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeys = this._sourceKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPipelineRulesetRulesMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationKey = undefined;
      this._ifNotExists = undefined;
      this._ifTagExists = undefined;
      this._sourceKeys = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationKey = value.destinationKey;
      this._ifNotExists = value.ifNotExists;
      this._ifTagExists = value.ifTagExists;
      this._sourceKeys = value.sourceKeys;
    }
  }

  // destination_key - computed: false, optional: true, required: false
  private _destinationKey?: string; 
  public get destinationKey() {
    return this.getStringAttribute('destination_key');
  }
  public set destinationKey(value: string) {
    this._destinationKey = value;
  }
  public resetDestinationKey() {
    this._destinationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationKeyInput() {
    return this._destinationKey;
  }

  // if_not_exists - computed: true, optional: true, required: false
  private _ifNotExists?: boolean | cdktn.IResolvable; 
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }
  public set ifNotExists(value: boolean | cdktn.IResolvable) {
    this._ifNotExists = value;
  }
  public resetIfNotExists() {
    this._ifNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNotExistsInput() {
    return this._ifNotExists;
  }

  // if_tag_exists - computed: true, optional: true, required: false
  private _ifTagExists?: string; 
  public get ifTagExists() {
    return this.getStringAttribute('if_tag_exists');
  }
  public set ifTagExists(value: string) {
    this._ifTagExists = value;
  }
  public resetIfTagExists() {
    this._ifTagExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifTagExistsInput() {
    return this._ifTagExists;
  }

  // source_keys - computed: false, optional: true, required: false
  private _sourceKeys?: string[]; 
  public get sourceKeys() {
    return this.getListAttribute('source_keys');
  }
  public set sourceKeys(value: string[]) {
    this._sourceKeys = value;
  }
  public resetSourceKeys() {
    this._sourceKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeysInput() {
    return this._sourceKeys;
  }
}
export interface TagPipelineRulesetRulesQueryAddition {
  /**
  * The key to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#key TagPipelineRuleset#key}
  */
  readonly key?: string;
  /**
  * The value to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#value TagPipelineRuleset#value}
  */
  readonly value?: string;
}

export function tagPipelineRulesetRulesQueryAdditionToTerraform(struct?: TagPipelineRulesetRulesQueryAddition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tagPipelineRulesetRulesQueryAdditionToHclTerraform(struct?: TagPipelineRulesetRulesQueryAddition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class TagPipelineRulesetRulesQueryAdditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagPipelineRulesetRulesQueryAddition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPipelineRulesetRulesQueryAddition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
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
export interface TagPipelineRulesetRulesQuery {
  /**
  * Whether the query matching is case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}
  */
  readonly caseInsensitivity?: boolean | cdktn.IResolvable;
  /**
  * Whether to apply the query only if the key doesn't exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}
  */
  readonly ifNotExists?: boolean | cdktn.IResolvable;
  /**
  * Behavior when the tag already exists. Valid values: `append` (append to the existing tag value), `replace` (replace existing tag value), `do_not_apply` (never apply if tag already exists). Valid values are `append`, `replace`, `do_not_apply`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#if_tag_exists TagPipelineRuleset#if_tag_exists}
  */
  readonly ifTagExists?: string;
  /**
  * The query string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}
  */
  readonly query?: string;
  /**
  * addition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#addition TagPipelineRuleset#addition}
  */
  readonly addition?: TagPipelineRulesetRulesQueryAddition;
}

export function tagPipelineRulesetRulesQueryToTerraform(struct?: TagPipelineRulesetRulesQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    case_insensitivity: cdktn.booleanToTerraform(struct!.caseInsensitivity),
    if_not_exists: cdktn.booleanToTerraform(struct!.ifNotExists),
    if_tag_exists: cdktn.stringToTerraform(struct!.ifTagExists),
    query: cdktn.stringToTerraform(struct!.query),
    addition: tagPipelineRulesetRulesQueryAdditionToTerraform(struct!.addition),
  }
}


export function tagPipelineRulesetRulesQueryToHclTerraform(struct?: TagPipelineRulesetRulesQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    case_insensitivity: {
      value: cdktn.booleanToHclTerraform(struct!.caseInsensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    if_not_exists: {
      value: cdktn.booleanToHclTerraform(struct!.ifNotExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    if_tag_exists: {
      value: cdktn.stringToHclTerraform(struct!.ifTagExists),
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
    addition: {
      value: tagPipelineRulesetRulesQueryAdditionToHclTerraform(struct!.addition),
      isBlock: true,
      type: "struct",
      storageClassType: "TagPipelineRulesetRulesQueryAddition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagPipelineRulesetRulesQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagPipelineRulesetRulesQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitivity = this._caseInsensitivity;
    }
    if (this._ifNotExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifNotExists = this._ifNotExists;
    }
    if (this._ifTagExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifTagExists = this._ifTagExists;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._addition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addition = this._addition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPipelineRulesetRulesQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseInsensitivity = undefined;
      this._ifNotExists = undefined;
      this._ifTagExists = undefined;
      this._query = undefined;
      this._addition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseInsensitivity = value.caseInsensitivity;
      this._ifNotExists = value.ifNotExists;
      this._ifTagExists = value.ifTagExists;
      this._query = value.query;
      this._addition.internalValue = value.addition;
    }
  }

  // case_insensitivity - computed: true, optional: true, required: false
  private _caseInsensitivity?: boolean | cdktn.IResolvable; 
  public get caseInsensitivity() {
    return this.getBooleanAttribute('case_insensitivity');
  }
  public set caseInsensitivity(value: boolean | cdktn.IResolvable) {
    this._caseInsensitivity = value;
  }
  public resetCaseInsensitivity() {
    this._caseInsensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitivityInput() {
    return this._caseInsensitivity;
  }

  // if_not_exists - computed: true, optional: true, required: false
  private _ifNotExists?: boolean | cdktn.IResolvable; 
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }
  public set ifNotExists(value: boolean | cdktn.IResolvable) {
    this._ifNotExists = value;
  }
  public resetIfNotExists() {
    this._ifNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNotExistsInput() {
    return this._ifNotExists;
  }

  // if_tag_exists - computed: true, optional: true, required: false
  private _ifTagExists?: string; 
  public get ifTagExists() {
    return this.getStringAttribute('if_tag_exists');
  }
  public set ifTagExists(value: string) {
    this._ifTagExists = value;
  }
  public resetIfTagExists() {
    this._ifTagExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifTagExistsInput() {
    return this._ifTagExists;
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

  // addition - computed: false, optional: true, required: false
  private _addition = new TagPipelineRulesetRulesQueryAdditionOutputReference(this, "addition");
  public get addition() {
    return this._addition;
  }
  public putAddition(value: TagPipelineRulesetRulesQueryAddition) {
    this._addition.internalValue = value;
  }
  public resetAddition() {
    this._addition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionInput() {
    return this._addition.internalValue;
  }
}
export interface TagPipelineRulesetRulesReferenceTableFieldPairs {
  /**
  * The input column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#input_column TagPipelineRuleset#input_column}
  */
  readonly inputColumn?: string;
  /**
  * The output key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#output_key TagPipelineRuleset#output_key}
  */
  readonly outputKey?: string;
}

export function tagPipelineRulesetRulesReferenceTableFieldPairsToTerraform(struct?: TagPipelineRulesetRulesReferenceTableFieldPairs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_column: cdktn.stringToTerraform(struct!.inputColumn),
    output_key: cdktn.stringToTerraform(struct!.outputKey),
  }
}


export function tagPipelineRulesetRulesReferenceTableFieldPairsToHclTerraform(struct?: TagPipelineRulesetRulesReferenceTableFieldPairs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_column: {
      value: cdktn.stringToHclTerraform(struct!.inputColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_key: {
      value: cdktn.stringToHclTerraform(struct!.outputKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TagPipelineRulesetRulesReferenceTableFieldPairs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputColumn = this._inputColumn;
    }
    if (this._outputKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputKey = this._outputKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPipelineRulesetRulesReferenceTableFieldPairs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputColumn = undefined;
      this._outputKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputColumn = value.inputColumn;
      this._outputKey = value.outputKey;
    }
  }

  // input_column - computed: false, optional: true, required: false
  private _inputColumn?: string; 
  public get inputColumn() {
    return this.getStringAttribute('input_column');
  }
  public set inputColumn(value: string) {
    this._inputColumn = value;
  }
  public resetInputColumn() {
    this._inputColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputColumnInput() {
    return this._inputColumn;
  }

  // output_key - computed: false, optional: true, required: false
  private _outputKey?: string; 
  public get outputKey() {
    return this.getStringAttribute('output_key');
  }
  public set outputKey(value: string) {
    this._outputKey = value;
  }
  public resetOutputKey() {
    this._outputKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputKeyInput() {
    return this._outputKey;
  }
}

export class TagPipelineRulesetRulesReferenceTableFieldPairsList extends cdktn.ComplexList {
  public internalValue? : TagPipelineRulesetRulesReferenceTableFieldPairs[] | cdktn.IResolvable

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
  public get(index: number): TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference {
    return new TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TagPipelineRulesetRulesReferenceTable {
  /**
  * Whether the reference table lookup is case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}
  */
  readonly caseInsensitivity?: boolean | cdktn.IResolvable;
  /**
  * Whether to apply the reference table only if the key doesn't exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}
  */
  readonly ifNotExists?: boolean | cdktn.IResolvable;
  /**
  * Behavior when the tag already exists. Valid values: `append` (append to the existing tag value), `replace` (replace existing tag value), `do_not_apply` (never apply if tag already exists). Valid values are `append`, `replace`, `do_not_apply`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#if_tag_exists TagPipelineRuleset#if_tag_exists}
  */
  readonly ifTagExists?: string;
  /**
  * The source keys for the reference table lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}
  */
  readonly sourceKeys?: string[];
  /**
  * The name of the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#table_name TagPipelineRuleset#table_name}
  */
  readonly tableName?: string;
  /**
  * field_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#field_pairs TagPipelineRuleset#field_pairs}
  */
  readonly fieldPairs?: TagPipelineRulesetRulesReferenceTableFieldPairs[] | cdktn.IResolvable;
}

export function tagPipelineRulesetRulesReferenceTableToTerraform(struct?: TagPipelineRulesetRulesReferenceTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    case_insensitivity: cdktn.booleanToTerraform(struct!.caseInsensitivity),
    if_not_exists: cdktn.booleanToTerraform(struct!.ifNotExists),
    if_tag_exists: cdktn.stringToTerraform(struct!.ifTagExists),
    source_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceKeys),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    field_pairs: cdktn.listMapper(tagPipelineRulesetRulesReferenceTableFieldPairsToTerraform, true)(struct!.fieldPairs),
  }
}


export function tagPipelineRulesetRulesReferenceTableToHclTerraform(struct?: TagPipelineRulesetRulesReferenceTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    case_insensitivity: {
      value: cdktn.booleanToHclTerraform(struct!.caseInsensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    if_not_exists: {
      value: cdktn.booleanToHclTerraform(struct!.ifNotExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    if_tag_exists: {
      value: cdktn.stringToHclTerraform(struct!.ifTagExists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_pairs: {
      value: cdktn.listMapperHcl(tagPipelineRulesetRulesReferenceTableFieldPairsToHclTerraform, true)(struct!.fieldPairs),
      isBlock: true,
      type: "list",
      storageClassType: "TagPipelineRulesetRulesReferenceTableFieldPairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagPipelineRulesetRulesReferenceTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagPipelineRulesetRulesReferenceTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitivity = this._caseInsensitivity;
    }
    if (this._ifNotExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifNotExists = this._ifNotExists;
    }
    if (this._ifTagExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifTagExists = this._ifTagExists;
    }
    if (this._sourceKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeys = this._sourceKeys;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._fieldPairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPairs = this._fieldPairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPipelineRulesetRulesReferenceTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseInsensitivity = undefined;
      this._ifNotExists = undefined;
      this._ifTagExists = undefined;
      this._sourceKeys = undefined;
      this._tableName = undefined;
      this._fieldPairs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseInsensitivity = value.caseInsensitivity;
      this._ifNotExists = value.ifNotExists;
      this._ifTagExists = value.ifTagExists;
      this._sourceKeys = value.sourceKeys;
      this._tableName = value.tableName;
      this._fieldPairs.internalValue = value.fieldPairs;
    }
  }

  // case_insensitivity - computed: true, optional: true, required: false
  private _caseInsensitivity?: boolean | cdktn.IResolvable; 
  public get caseInsensitivity() {
    return this.getBooleanAttribute('case_insensitivity');
  }
  public set caseInsensitivity(value: boolean | cdktn.IResolvable) {
    this._caseInsensitivity = value;
  }
  public resetCaseInsensitivity() {
    this._caseInsensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitivityInput() {
    return this._caseInsensitivity;
  }

  // if_not_exists - computed: true, optional: true, required: false
  private _ifNotExists?: boolean | cdktn.IResolvable; 
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }
  public set ifNotExists(value: boolean | cdktn.IResolvable) {
    this._ifNotExists = value;
  }
  public resetIfNotExists() {
    this._ifNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNotExistsInput() {
    return this._ifNotExists;
  }

  // if_tag_exists - computed: true, optional: true, required: false
  private _ifTagExists?: string; 
  public get ifTagExists() {
    return this.getStringAttribute('if_tag_exists');
  }
  public set ifTagExists(value: string) {
    this._ifTagExists = value;
  }
  public resetIfTagExists() {
    this._ifTagExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifTagExistsInput() {
    return this._ifTagExists;
  }

  // source_keys - computed: false, optional: true, required: false
  private _sourceKeys?: string[]; 
  public get sourceKeys() {
    return this.getListAttribute('source_keys');
  }
  public set sourceKeys(value: string[]) {
    this._sourceKeys = value;
  }
  public resetSourceKeys() {
    this._sourceKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeysInput() {
    return this._sourceKeys;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // field_pairs - computed: false, optional: true, required: false
  private _fieldPairs = new TagPipelineRulesetRulesReferenceTableFieldPairsList(this, "field_pairs", false);
  public get fieldPairs() {
    return this._fieldPairs;
  }
  public putFieldPairs(value: TagPipelineRulesetRulesReferenceTableFieldPairs[] | cdktn.IResolvable) {
    this._fieldPairs.internalValue = value;
  }
  public resetFieldPairs() {
    this._fieldPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPairsInput() {
    return this._fieldPairs.internalValue;
  }
}
export interface TagPipelineRulesetRules {
  /**
  * Whether the rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}
  */
  readonly name: string;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#mapping TagPipelineRuleset#mapping}
  */
  readonly mapping?: TagPipelineRulesetRulesMapping;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}
  */
  readonly query?: TagPipelineRulesetRulesQuery;
  /**
  * reference_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#reference_table TagPipelineRuleset#reference_table}
  */
  readonly referenceTable?: TagPipelineRulesetRulesReferenceTable;
}

export function tagPipelineRulesetRulesToTerraform(struct?: TagPipelineRulesetRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    name: cdktn.stringToTerraform(struct!.name),
    mapping: tagPipelineRulesetRulesMappingToTerraform(struct!.mapping),
    query: tagPipelineRulesetRulesQueryToTerraform(struct!.query),
    reference_table: tagPipelineRulesetRulesReferenceTableToTerraform(struct!.referenceTable),
  }
}


export function tagPipelineRulesetRulesToHclTerraform(struct?: TagPipelineRulesetRules | cdktn.IResolvable): any {
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping: {
      value: tagPipelineRulesetRulesMappingToHclTerraform(struct!.mapping),
      isBlock: true,
      type: "struct",
      storageClassType: "TagPipelineRulesetRulesMapping",
    },
    query: {
      value: tagPipelineRulesetRulesQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "TagPipelineRulesetRulesQuery",
    },
    reference_table: {
      value: tagPipelineRulesetRulesReferenceTableToHclTerraform(struct!.referenceTable),
      isBlock: true,
      type: "struct",
      storageClassType: "TagPipelineRulesetRulesReferenceTable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagPipelineRulesetRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TagPipelineRulesetRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._referenceTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceTable = this._referenceTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPipelineRulesetRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._mapping.internalValue = undefined;
      this._query.internalValue = undefined;
      this._referenceTable.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._name = value.name;
      this._mapping.internalValue = value.mapping;
      this._query.internalValue = value.query;
      this._referenceTable.internalValue = value.referenceTable;
    }
  }

  // enabled - computed: false, optional: false, required: true
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktn.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // mapping - computed: false, optional: true, required: false
  private _mapping = new TagPipelineRulesetRulesMappingOutputReference(this, "mapping");
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: TagPipelineRulesetRulesMapping) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new TagPipelineRulesetRulesQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: TagPipelineRulesetRulesQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // reference_table - computed: false, optional: true, required: false
  private _referenceTable = new TagPipelineRulesetRulesReferenceTableOutputReference(this, "reference_table");
  public get referenceTable() {
    return this._referenceTable;
  }
  public putReferenceTable(value: TagPipelineRulesetRulesReferenceTable) {
    this._referenceTable.internalValue = value;
  }
  public resetReferenceTable() {
    this._referenceTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTableInput() {
    return this._referenceTable.internalValue;
  }
}

export class TagPipelineRulesetRulesList extends cdktn.ComplexList {
  public internalValue? : TagPipelineRulesetRules[] | cdktn.IResolvable

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
  public get(index: number): TagPipelineRulesetRulesOutputReference {
    return new TagPipelineRulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset}
*/
export class TagPipelineRuleset extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_tag_pipeline_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TagPipelineRuleset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagPipelineRuleset to import
  * @param importFromId The id of the existing TagPipelineRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagPipelineRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_tag_pipeline_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagPipelineRulesetConfig
  */
  public constructor(scope: Construct, id: string, config: TagPipelineRulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_tag_pipeline_ruleset',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.15.0',
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
    this._name = config.name;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new TagPipelineRulesetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TagPipelineRulesetRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktn.booleanToTerraform(this._enabled),
      name: cdktn.stringToTerraform(this._name),
      rules: cdktn.listMapper(tagPipelineRulesetRulesToTerraform, true)(this._rules.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktn.listMapperHcl(tagPipelineRulesetRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TagPipelineRulesetRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
