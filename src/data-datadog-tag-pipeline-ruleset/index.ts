/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/tag_pipeline_ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogTagPipelineRulesetConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/tag_pipeline_ruleset#id DataDatadogTagPipelineRuleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/tag_pipeline_ruleset#rules DataDatadogTagPipelineRuleset#rules}
  */
  readonly rules?: DataDatadogTagPipelineRulesetRules[] | cdktn.IResolvable;
}
export interface DataDatadogTagPipelineRulesetRulesMapping {
}

export function dataDatadogTagPipelineRulesetRulesMappingToTerraform(struct?: DataDatadogTagPipelineRulesetRulesMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogTagPipelineRulesetRulesMappingToHclTerraform(struct?: DataDatadogTagPipelineRulesetRulesMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogTagPipelineRulesetRulesMappingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogTagPipelineRulesetRulesMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogTagPipelineRulesetRulesMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // destination_key - computed: true, optional: false, required: false
  public get destinationKey() {
    return this.getStringAttribute('destination_key');
  }

  // if_not_exists - computed: true, optional: false, required: false
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }

  // if_tag_exists - computed: true, optional: false, required: false
  public get ifTagExists() {
    return this.getStringAttribute('if_tag_exists');
  }

  // source_keys - computed: true, optional: false, required: false
  public get sourceKeys() {
    return this.getListAttribute('source_keys');
  }
}
export interface DataDatadogTagPipelineRulesetRulesQueryAddition {
}

export function dataDatadogTagPipelineRulesetRulesQueryAdditionToTerraform(struct?: DataDatadogTagPipelineRulesetRulesQueryAddition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogTagPipelineRulesetRulesQueryAdditionToHclTerraform(struct?: DataDatadogTagPipelineRulesetRulesQueryAddition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogTagPipelineRulesetRulesQueryAddition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogTagPipelineRulesetRulesQueryAddition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataDatadogTagPipelineRulesetRulesQuery {
}

export function dataDatadogTagPipelineRulesetRulesQueryToTerraform(struct?: DataDatadogTagPipelineRulesetRulesQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogTagPipelineRulesetRulesQueryToHclTerraform(struct?: DataDatadogTagPipelineRulesetRulesQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogTagPipelineRulesetRulesQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogTagPipelineRulesetRulesQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogTagPipelineRulesetRulesQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // case_insensitivity - computed: true, optional: false, required: false
  public get caseInsensitivity() {
    return this.getBooleanAttribute('case_insensitivity');
  }

  // if_not_exists - computed: true, optional: false, required: false
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }

  // if_tag_exists - computed: true, optional: false, required: false
  public get ifTagExists() {
    return this.getStringAttribute('if_tag_exists');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // addition - computed: false, optional: false, required: false
  private _addition = new DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference(this, "addition");
  public get addition() {
    return this._addition;
  }
}
export interface DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs {
}

export function dataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsToTerraform(struct?: DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsToHclTerraform(struct?: DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // input_column - computed: true, optional: false, required: false
  public get inputColumn() {
    return this.getStringAttribute('input_column');
  }

  // output_key - computed: true, optional: false, required: false
  public get outputKey() {
    return this.getStringAttribute('output_key');
  }
}

export class DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList extends cdktn.ComplexList {
  public internalValue? : DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs[] | cdktn.IResolvable

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
  public get(index: number): DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference {
    return new DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogTagPipelineRulesetRulesReferenceTable {
  /**
  * field_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/tag_pipeline_ruleset#field_pairs DataDatadogTagPipelineRuleset#field_pairs}
  */
  readonly fieldPairs?: DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs[] | cdktn.IResolvable;
}

export function dataDatadogTagPipelineRulesetRulesReferenceTableToTerraform(struct?: DataDatadogTagPipelineRulesetRulesReferenceTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_pairs: cdktn.listMapper(dataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsToTerraform, true)(struct!.fieldPairs),
  }
}


export function dataDatadogTagPipelineRulesetRulesReferenceTableToHclTerraform(struct?: DataDatadogTagPipelineRulesetRulesReferenceTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_pairs: {
      value: cdktn.listMapperHcl(dataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsToHclTerraform, true)(struct!.fieldPairs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogTagPipelineRulesetRulesReferenceTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPairs = this._fieldPairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogTagPipelineRulesetRulesReferenceTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPairs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPairs.internalValue = value.fieldPairs;
    }
  }

  // case_insensitivity - computed: true, optional: false, required: false
  public get caseInsensitivity() {
    return this.getBooleanAttribute('case_insensitivity');
  }

  // if_not_exists - computed: true, optional: false, required: false
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }

  // if_tag_exists - computed: true, optional: false, required: false
  public get ifTagExists() {
    return this.getStringAttribute('if_tag_exists');
  }

  // source_keys - computed: true, optional: false, required: false
  public get sourceKeys() {
    return this.getListAttribute('source_keys');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // field_pairs - computed: false, optional: true, required: false
  private _fieldPairs = new DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList(this, "field_pairs", false);
  public get fieldPairs() {
    return this._fieldPairs;
  }
  public putFieldPairs(value: DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs[] | cdktn.IResolvable) {
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
export interface DataDatadogTagPipelineRulesetRules {
  /**
  * reference_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/tag_pipeline_ruleset#reference_table DataDatadogTagPipelineRuleset#reference_table}
  */
  readonly referenceTable?: DataDatadogTagPipelineRulesetRulesReferenceTable;
}

export function dataDatadogTagPipelineRulesetRulesToTerraform(struct?: DataDatadogTagPipelineRulesetRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reference_table: dataDatadogTagPipelineRulesetRulesReferenceTableToTerraform(struct!.referenceTable),
  }
}


export function dataDatadogTagPipelineRulesetRulesToHclTerraform(struct?: DataDatadogTagPipelineRulesetRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reference_table: {
      value: dataDatadogTagPipelineRulesetRulesReferenceTableToHclTerraform(struct!.referenceTable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatadogTagPipelineRulesetRulesReferenceTable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatadogTagPipelineRulesetRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatadogTagPipelineRulesetRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceTable = this._referenceTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogTagPipelineRulesetRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceTable.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceTable.internalValue = value.referenceTable;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktn.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // mapping - computed: false, optional: false, required: false
  private _mapping = new DataDatadogTagPipelineRulesetRulesMappingOutputReference(this, "mapping");
  public get mapping() {
    return this._mapping;
  }

  // query - computed: false, optional: false, required: false
  private _query = new DataDatadogTagPipelineRulesetRulesQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }

  // reference_table - computed: false, optional: true, required: false
  private _referenceTable = new DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference(this, "reference_table");
  public get referenceTable() {
    return this._referenceTable;
  }
  public putReferenceTable(value: DataDatadogTagPipelineRulesetRulesReferenceTable) {
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

export class DataDatadogTagPipelineRulesetRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatadogTagPipelineRulesetRules[] | cdktn.IResolvable

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
  public get(index: number): DataDatadogTagPipelineRulesetRulesOutputReference {
    return new DataDatadogTagPipelineRulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset}
*/
export class DataDatadogTagPipelineRuleset extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_tag_pipeline_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogTagPipelineRuleset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogTagPipelineRuleset to import
  * @param importFromId The id of the existing DataDatadogTagPipelineRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/tag_pipeline_ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogTagPipelineRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_tag_pipeline_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogTagPipelineRulesetConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogTagPipelineRulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_tag_pipeline_ruleset',
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
    this._id = config.id;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
  private _rules = new DataDatadogTagPipelineRulesetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataDatadogTagPipelineRulesetRules[] | cdktn.IResolvable) {
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
      id: cdktn.stringToTerraform(this._id),
      rules: cdktn.listMapper(dataDatadogTagPipelineRulesetRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktn.listMapperHcl(dataDatadogTagPipelineRulesetRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatadogTagPipelineRulesetRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
