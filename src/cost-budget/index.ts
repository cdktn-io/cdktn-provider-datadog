/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CostBudgetConfig extends cdktn.TerraformMetaArguments {
  /**
  * The month when the budget ends (YYYYMM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#end_month CostBudget#end_month}
  */
  readonly endMonth: number;
  /**
  * The ID of the budget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#id CostBudget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The cost query used to track against the budget. **Note:** For hierarchical budgets using `by {tag1,tag2}`, the order of tags determines the UI hierarchy (parent, child).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#metrics_query CostBudget#metrics_query}
  */
  readonly metricsQuery: string;
  /**
  * The name of the budget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#name CostBudget#name}
  */
  readonly name: string;
  /**
  * The month when the budget starts (YYYYMM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#start_month CostBudget#start_month}
  */
  readonly startMonth: number;
  /**
  * budget_line block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#budget_line CostBudget#budget_line}
  */
  readonly budgetLine?: CostBudgetBudgetLine[] | cdktn.IResolvable;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#entries CostBudget#entries}
  */
  readonly entries?: CostBudgetEntries[] | cdktn.IResolvable;
}
export interface CostBudgetBudgetLineChildTagFilters {
  /**
  * Must be one of the tags from the `metrics_query`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}
  */
  readonly tagValue: string;
}

export function costBudgetBudgetLineChildTagFiltersToTerraform(struct?: CostBudgetBudgetLineChildTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
    tag_value: cdktn.stringToTerraform(struct!.tagValue),
  }
}


export function costBudgetBudgetLineChildTagFiltersToHclTerraform(struct?: CostBudgetBudgetLineChildTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktn.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostBudgetBudgetLineChildTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CostBudgetBudgetLineChildTagFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostBudgetBudgetLineChildTagFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class CostBudgetBudgetLineChildTagFiltersList extends cdktn.ComplexList {
  public internalValue? : CostBudgetBudgetLineChildTagFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CostBudgetBudgetLineChildTagFiltersOutputReference {
    return new CostBudgetBudgetLineChildTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CostBudgetBudgetLineParentTagFilters {
  /**
  * Must be one of the tags from the `metrics_query`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}
  */
  readonly tagValue: string;
}

export function costBudgetBudgetLineParentTagFiltersToTerraform(struct?: CostBudgetBudgetLineParentTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
    tag_value: cdktn.stringToTerraform(struct!.tagValue),
  }
}


export function costBudgetBudgetLineParentTagFiltersToHclTerraform(struct?: CostBudgetBudgetLineParentTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktn.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostBudgetBudgetLineParentTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CostBudgetBudgetLineParentTagFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostBudgetBudgetLineParentTagFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class CostBudgetBudgetLineParentTagFiltersList extends cdktn.ComplexList {
  public internalValue? : CostBudgetBudgetLineParentTagFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CostBudgetBudgetLineParentTagFiltersOutputReference {
    return new CostBudgetBudgetLineParentTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CostBudgetBudgetLineTagFilters {
  /**
  * Must be one of the tags from the `metrics_query`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}
  */
  readonly tagValue: string;
}

export function costBudgetBudgetLineTagFiltersToTerraform(struct?: CostBudgetBudgetLineTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
    tag_value: cdktn.stringToTerraform(struct!.tagValue),
  }
}


export function costBudgetBudgetLineTagFiltersToHclTerraform(struct?: CostBudgetBudgetLineTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktn.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostBudgetBudgetLineTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CostBudgetBudgetLineTagFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostBudgetBudgetLineTagFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class CostBudgetBudgetLineTagFiltersList extends cdktn.ComplexList {
  public internalValue? : CostBudgetBudgetLineTagFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CostBudgetBudgetLineTagFiltersOutputReference {
    return new CostBudgetBudgetLineTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CostBudgetBudgetLine {
  /**
  * Map of month (YYYYMM) to budget amount. Example: {"202601": 1000.0, "202602": 1200.0}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#amounts CostBudget#amounts}
  */
  readonly amounts: { [key: string]: number };
  /**
  * child_tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#child_tag_filters CostBudget#child_tag_filters}
  */
  readonly childTagFilters?: CostBudgetBudgetLineChildTagFilters[] | cdktn.IResolvable;
  /**
  * parent_tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#parent_tag_filters CostBudget#parent_tag_filters}
  */
  readonly parentTagFilters?: CostBudgetBudgetLineParentTagFilters[] | cdktn.IResolvable;
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#tag_filters CostBudget#tag_filters}
  */
  readonly tagFilters?: CostBudgetBudgetLineTagFilters[] | cdktn.IResolvable;
}

export function costBudgetBudgetLineToTerraform(struct?: CostBudgetBudgetLine | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amounts: cdktn.hashMapper(cdktn.numberToTerraform)(struct!.amounts),
    child_tag_filters: cdktn.listMapper(costBudgetBudgetLineChildTagFiltersToTerraform, true)(struct!.childTagFilters),
    parent_tag_filters: cdktn.listMapper(costBudgetBudgetLineParentTagFiltersToTerraform, true)(struct!.parentTagFilters),
    tag_filters: cdktn.listMapper(costBudgetBudgetLineTagFiltersToTerraform, true)(struct!.tagFilters),
  }
}


export function costBudgetBudgetLineToHclTerraform(struct?: CostBudgetBudgetLine | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amounts: {
      value: cdktn.hashMapperHcl(cdktn.numberToHclTerraform)(struct!.amounts),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    child_tag_filters: {
      value: cdktn.listMapperHcl(costBudgetBudgetLineChildTagFiltersToHclTerraform, true)(struct!.childTagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "CostBudgetBudgetLineChildTagFiltersList",
    },
    parent_tag_filters: {
      value: cdktn.listMapperHcl(costBudgetBudgetLineParentTagFiltersToHclTerraform, true)(struct!.parentTagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "CostBudgetBudgetLineParentTagFiltersList",
    },
    tag_filters: {
      value: cdktn.listMapperHcl(costBudgetBudgetLineTagFiltersToHclTerraform, true)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "CostBudgetBudgetLineTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostBudgetBudgetLineOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CostBudgetBudgetLine | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.amounts = this._amounts;
    }
    if (this._childTagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.childTagFilters = this._childTagFilters?.internalValue;
    }
    if (this._parentTagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentTagFilters = this._parentTagFilters?.internalValue;
    }
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostBudgetBudgetLine | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amounts = undefined;
      this._childTagFilters.internalValue = undefined;
      this._parentTagFilters.internalValue = undefined;
      this._tagFilters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amounts = value.amounts;
      this._childTagFilters.internalValue = value.childTagFilters;
      this._parentTagFilters.internalValue = value.parentTagFilters;
      this._tagFilters.internalValue = value.tagFilters;
    }
  }

  // amounts - computed: false, optional: false, required: true
  private _amounts?: { [key: string]: number }; 
  public get amounts() {
    return this.getNumberMapAttribute('amounts');
  }
  public set amounts(value: { [key: string]: number }) {
    this._amounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountsInput() {
    return this._amounts;
  }

  // child_tag_filters - computed: false, optional: true, required: false
  private _childTagFilters = new CostBudgetBudgetLineChildTagFiltersList(this, "child_tag_filters", false);
  public get childTagFilters() {
    return this._childTagFilters;
  }
  public putChildTagFilters(value: CostBudgetBudgetLineChildTagFilters[] | cdktn.IResolvable) {
    this._childTagFilters.internalValue = value;
  }
  public resetChildTagFilters() {
    this._childTagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childTagFiltersInput() {
    return this._childTagFilters.internalValue;
  }

  // parent_tag_filters - computed: false, optional: true, required: false
  private _parentTagFilters = new CostBudgetBudgetLineParentTagFiltersList(this, "parent_tag_filters", false);
  public get parentTagFilters() {
    return this._parentTagFilters;
  }
  public putParentTagFilters(value: CostBudgetBudgetLineParentTagFilters[] | cdktn.IResolvable) {
    this._parentTagFilters.internalValue = value;
  }
  public resetParentTagFilters() {
    this._parentTagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTagFiltersInput() {
    return this._parentTagFilters.internalValue;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new CostBudgetBudgetLineTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: CostBudgetBudgetLineTagFilters[] | cdktn.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }
}

export class CostBudgetBudgetLineList extends cdktn.ComplexList {
  public internalValue? : CostBudgetBudgetLine[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CostBudgetBudgetLineOutputReference {
    return new CostBudgetBudgetLineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CostBudgetEntriesTagFilters {
  /**
  * **Note:** Must be one of the tags from the `metrics_query`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}
  */
  readonly tagValue: string;
}

export function costBudgetEntriesTagFiltersToTerraform(struct?: CostBudgetEntriesTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
    tag_value: cdktn.stringToTerraform(struct!.tagValue),
  }
}


export function costBudgetEntriesTagFiltersToHclTerraform(struct?: CostBudgetEntriesTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktn.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostBudgetEntriesTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CostBudgetEntriesTagFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostBudgetEntriesTagFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class CostBudgetEntriesTagFiltersList extends cdktn.ComplexList {
  public internalValue? : CostBudgetEntriesTagFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CostBudgetEntriesTagFiltersOutputReference {
    return new CostBudgetEntriesTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CostBudgetEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#amount CostBudget#amount}
  */
  readonly amount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#month CostBudget#month}
  */
  readonly month: number;
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#tag_filters CostBudget#tag_filters}
  */
  readonly tagFilters?: CostBudgetEntriesTagFilters[] | cdktn.IResolvable;
}

export function costBudgetEntriesToTerraform(struct?: CostBudgetEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktn.numberToTerraform(struct!.amount),
    month: cdktn.numberToTerraform(struct!.month),
    tag_filters: cdktn.listMapper(costBudgetEntriesTagFiltersToTerraform, true)(struct!.tagFilters),
  }
}


export function costBudgetEntriesToHclTerraform(struct?: CostBudgetEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktn.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktn.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_filters: {
      value: cdktn.listMapperHcl(costBudgetEntriesTagFiltersToHclTerraform, true)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "CostBudgetEntriesTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CostBudgetEntriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CostBudgetEntries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostBudgetEntries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._month = undefined;
      this._tagFilters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._month = value.month;
      this._tagFilters.internalValue = value.tagFilters;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // month - computed: false, optional: false, required: true
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new CostBudgetEntriesTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: CostBudgetEntriesTagFilters[] | cdktn.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }
}

export class CostBudgetEntriesList extends cdktn.ComplexList {
  public internalValue? : CostBudgetEntries[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CostBudgetEntriesOutputReference {
    return new CostBudgetEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget datadog_cost_budget}
*/
export class CostBudget extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_cost_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CostBudget resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CostBudget to import
  * @param importFromId The id of the existing CostBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CostBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_cost_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cost_budget datadog_cost_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CostBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: CostBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_cost_budget',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.89.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endMonth = config.endMonth;
    this._id = config.id;
    this._metricsQuery = config.metricsQuery;
    this._name = config.name;
    this._startMonth = config.startMonth;
    this._budgetLine.internalValue = config.budgetLine;
    this._entries.internalValue = config.entries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_month - computed: false, optional: false, required: true
  private _endMonth?: number; 
  public get endMonth() {
    return this.getNumberAttribute('end_month');
  }
  public set endMonth(value: number) {
    this._endMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endMonthInput() {
    return this._endMonth;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metrics_query - computed: false, optional: false, required: true
  private _metricsQuery?: string; 
  public get metricsQuery() {
    return this.getStringAttribute('metrics_query');
  }
  public set metricsQuery(value: string) {
    this._metricsQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsQueryInput() {
    return this._metricsQuery;
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

  // start_month - computed: false, optional: false, required: true
  private _startMonth?: number; 
  public get startMonth() {
    return this.getNumberAttribute('start_month');
  }
  public set startMonth(value: number) {
    this._startMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startMonthInput() {
    return this._startMonth;
  }

  // total_amount - computed: true, optional: false, required: false
  public get totalAmount() {
    return this.getNumberAttribute('total_amount');
  }

  // budget_line - computed: false, optional: true, required: false
  private _budgetLine = new CostBudgetBudgetLineList(this, "budget_line", true);
  public get budgetLine() {
    return this._budgetLine;
  }
  public putBudgetLine(value: CostBudgetBudgetLine[] | cdktn.IResolvable) {
    this._budgetLine.internalValue = value;
  }
  public resetBudgetLine() {
    this._budgetLine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetLineInput() {
    return this._budgetLine.internalValue;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new CostBudgetEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: CostBudgetEntries[] | cdktn.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_month: cdktn.numberToTerraform(this._endMonth),
      id: cdktn.stringToTerraform(this._id),
      metrics_query: cdktn.stringToTerraform(this._metricsQuery),
      name: cdktn.stringToTerraform(this._name),
      start_month: cdktn.numberToTerraform(this._startMonth),
      budget_line: cdktn.listMapper(costBudgetBudgetLineToTerraform, true)(this._budgetLine.internalValue),
      entries: cdktn.listMapper(costBudgetEntriesToTerraform, true)(this._entries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_month: {
        value: cdktn.numberToHclTerraform(this._endMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_query: {
        value: cdktn.stringToHclTerraform(this._metricsQuery),
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
      start_month: {
        value: cdktn.numberToHclTerraform(this._startMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      budget_line: {
        value: cdktn.listMapperHcl(costBudgetBudgetLineToHclTerraform, true)(this._budgetLine.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CostBudgetBudgetLineList",
      },
      entries: {
        value: cdktn.listMapperHcl(costBudgetEntriesToHclTerraform, true)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CostBudgetEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
