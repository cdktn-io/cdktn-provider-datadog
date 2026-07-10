/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/cost_budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogCostBudgetConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the budget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/cost_budget#id DataDatadogCostBudget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * budget_line block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/cost_budget#budget_line DataDatadogCostBudget#budget_line}
  */
  readonly budgetLine?: DataDatadogCostBudgetBudgetLine[] | cdktn.IResolvable;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/cost_budget#entries DataDatadogCostBudget#entries}
  */
  readonly entries?: DataDatadogCostBudgetEntries[] | cdktn.IResolvable;
}
export interface DataDatadogCostBudgetBudgetLineChildTagFilters {
}

export function dataDatadogCostBudgetBudgetLineChildTagFiltersToTerraform(struct?: DataDatadogCostBudgetBudgetLineChildTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogCostBudgetBudgetLineChildTagFiltersToHclTerraform(struct?: DataDatadogCostBudgetBudgetLineChildTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatadogCostBudgetBudgetLineChildTagFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCostBudgetBudgetLineChildTagFilters | cdktn.IResolvable | undefined) {
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

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataDatadogCostBudgetBudgetLineChildTagFiltersList extends cdktn.ComplexList {
  public internalValue? : DataDatadogCostBudgetBudgetLineChildTagFilters[] | cdktn.IResolvable

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
  public get(index: number): DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference {
    return new DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCostBudgetBudgetLineParentTagFilters {
}

export function dataDatadogCostBudgetBudgetLineParentTagFiltersToTerraform(struct?: DataDatadogCostBudgetBudgetLineParentTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogCostBudgetBudgetLineParentTagFiltersToHclTerraform(struct?: DataDatadogCostBudgetBudgetLineParentTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatadogCostBudgetBudgetLineParentTagFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCostBudgetBudgetLineParentTagFilters | cdktn.IResolvable | undefined) {
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

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataDatadogCostBudgetBudgetLineParentTagFiltersList extends cdktn.ComplexList {
  public internalValue? : DataDatadogCostBudgetBudgetLineParentTagFilters[] | cdktn.IResolvable

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
  public get(index: number): DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference {
    return new DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCostBudgetBudgetLineTagFilters {
}

export function dataDatadogCostBudgetBudgetLineTagFiltersToTerraform(struct?: DataDatadogCostBudgetBudgetLineTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogCostBudgetBudgetLineTagFiltersToHclTerraform(struct?: DataDatadogCostBudgetBudgetLineTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCostBudgetBudgetLineTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatadogCostBudgetBudgetLineTagFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCostBudgetBudgetLineTagFilters | cdktn.IResolvable | undefined) {
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

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataDatadogCostBudgetBudgetLineTagFiltersList extends cdktn.ComplexList {
  public internalValue? : DataDatadogCostBudgetBudgetLineTagFilters[] | cdktn.IResolvable

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
  public get(index: number): DataDatadogCostBudgetBudgetLineTagFiltersOutputReference {
    return new DataDatadogCostBudgetBudgetLineTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCostBudgetBudgetLine {
  /**
  * child_tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/cost_budget#child_tag_filters DataDatadogCostBudget#child_tag_filters}
  */
  readonly childTagFilters?: DataDatadogCostBudgetBudgetLineChildTagFilters[] | cdktn.IResolvable;
  /**
  * parent_tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/cost_budget#parent_tag_filters DataDatadogCostBudget#parent_tag_filters}
  */
  readonly parentTagFilters?: DataDatadogCostBudgetBudgetLineParentTagFilters[] | cdktn.IResolvable;
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/cost_budget#tag_filters DataDatadogCostBudget#tag_filters}
  */
  readonly tagFilters?: DataDatadogCostBudgetBudgetLineTagFilters[] | cdktn.IResolvable;
}

export function dataDatadogCostBudgetBudgetLineToTerraform(struct?: DataDatadogCostBudgetBudgetLine | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    child_tag_filters: cdktn.listMapper(dataDatadogCostBudgetBudgetLineChildTagFiltersToTerraform, true)(struct!.childTagFilters),
    parent_tag_filters: cdktn.listMapper(dataDatadogCostBudgetBudgetLineParentTagFiltersToTerraform, true)(struct!.parentTagFilters),
    tag_filters: cdktn.listMapper(dataDatadogCostBudgetBudgetLineTagFiltersToTerraform, true)(struct!.tagFilters),
  }
}


export function dataDatadogCostBudgetBudgetLineToHclTerraform(struct?: DataDatadogCostBudgetBudgetLine | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    child_tag_filters: {
      value: cdktn.listMapperHcl(dataDatadogCostBudgetBudgetLineChildTagFiltersToHclTerraform, true)(struct!.childTagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogCostBudgetBudgetLineChildTagFiltersList",
    },
    parent_tag_filters: {
      value: cdktn.listMapperHcl(dataDatadogCostBudgetBudgetLineParentTagFiltersToHclTerraform, true)(struct!.parentTagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogCostBudgetBudgetLineParentTagFiltersList",
    },
    tag_filters: {
      value: cdktn.listMapperHcl(dataDatadogCostBudgetBudgetLineTagFiltersToHclTerraform, true)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogCostBudgetBudgetLineTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatadogCostBudgetBudgetLineOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatadogCostBudgetBudgetLine | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataDatadogCostBudgetBudgetLine | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._childTagFilters.internalValue = value.childTagFilters;
      this._parentTagFilters.internalValue = value.parentTagFilters;
      this._tagFilters.internalValue = value.tagFilters;
    }
  }

  // amounts - computed: true, optional: false, required: false
  private _amounts = new cdktn.NumberMap(this, "amounts");
  public get amounts() {
    return this._amounts;
  }

  // child_tag_filters - computed: false, optional: true, required: false
  private _childTagFilters = new DataDatadogCostBudgetBudgetLineChildTagFiltersList(this, "child_tag_filters", false);
  public get childTagFilters() {
    return this._childTagFilters;
  }
  public putChildTagFilters(value: DataDatadogCostBudgetBudgetLineChildTagFilters[] | cdktn.IResolvable) {
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
  private _parentTagFilters = new DataDatadogCostBudgetBudgetLineParentTagFiltersList(this, "parent_tag_filters", false);
  public get parentTagFilters() {
    return this._parentTagFilters;
  }
  public putParentTagFilters(value: DataDatadogCostBudgetBudgetLineParentTagFilters[] | cdktn.IResolvable) {
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
  private _tagFilters = new DataDatadogCostBudgetBudgetLineTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: DataDatadogCostBudgetBudgetLineTagFilters[] | cdktn.IResolvable) {
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

export class DataDatadogCostBudgetBudgetLineList extends cdktn.ComplexList {
  public internalValue? : DataDatadogCostBudgetBudgetLine[] | cdktn.IResolvable

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
  public get(index: number): DataDatadogCostBudgetBudgetLineOutputReference {
    return new DataDatadogCostBudgetBudgetLineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCostBudgetEntriesTagFilters {
}

export function dataDatadogCostBudgetEntriesTagFiltersToTerraform(struct?: DataDatadogCostBudgetEntriesTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogCostBudgetEntriesTagFiltersToHclTerraform(struct?: DataDatadogCostBudgetEntriesTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCostBudgetEntriesTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatadogCostBudgetEntriesTagFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCostBudgetEntriesTagFilters | cdktn.IResolvable | undefined) {
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

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataDatadogCostBudgetEntriesTagFiltersList extends cdktn.ComplexList {
  public internalValue? : DataDatadogCostBudgetEntriesTagFilters[] | cdktn.IResolvable

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
  public get(index: number): DataDatadogCostBudgetEntriesTagFiltersOutputReference {
    return new DataDatadogCostBudgetEntriesTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCostBudgetEntries {
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/cost_budget#tag_filters DataDatadogCostBudget#tag_filters}
  */
  readonly tagFilters?: DataDatadogCostBudgetEntriesTagFilters[] | cdktn.IResolvable;
}

export function dataDatadogCostBudgetEntriesToTerraform(struct?: DataDatadogCostBudgetEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tag_filters: cdktn.listMapper(dataDatadogCostBudgetEntriesTagFiltersToTerraform, true)(struct!.tagFilters),
  }
}


export function dataDatadogCostBudgetEntriesToHclTerraform(struct?: DataDatadogCostBudgetEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tag_filters: {
      value: cdktn.listMapperHcl(dataDatadogCostBudgetEntriesTagFiltersToHclTerraform, true)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogCostBudgetEntriesTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatadogCostBudgetEntriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatadogCostBudgetEntries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCostBudgetEntries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagFilters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagFilters.internalValue = value.tagFilters;
    }
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getNumberAttribute('amount');
  }

  // month - computed: true, optional: false, required: false
  public get month() {
    return this.getNumberAttribute('month');
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new DataDatadogCostBudgetEntriesTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: DataDatadogCostBudgetEntriesTagFilters[] | cdktn.IResolvable) {
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

export class DataDatadogCostBudgetEntriesList extends cdktn.ComplexList {
  public internalValue? : DataDatadogCostBudgetEntries[] | cdktn.IResolvable

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
  public get(index: number): DataDatadogCostBudgetEntriesOutputReference {
    return new DataDatadogCostBudgetEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/cost_budget datadog_cost_budget}
*/
export class DataDatadogCostBudget extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_cost_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogCostBudget resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogCostBudget to import
  * @param importFromId The id of the existing DataDatadogCostBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/cost_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogCostBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_cost_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/cost_budget datadog_cost_budget} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogCostBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogCostBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_cost_budget',
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
    this._id = config.id;
    this._budgetLine.internalValue = config.budgetLine;
    this._entries.internalValue = config.entries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_month - computed: true, optional: false, required: false
  public get endMonth() {
    return this.getNumberAttribute('end_month');
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

  // metrics_query - computed: true, optional: false, required: false
  public get metricsQuery() {
    return this.getStringAttribute('metrics_query');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_month - computed: true, optional: false, required: false
  public get startMonth() {
    return this.getNumberAttribute('start_month');
  }

  // total_amount - computed: true, optional: false, required: false
  public get totalAmount() {
    return this.getNumberAttribute('total_amount');
  }

  // budget_line - computed: false, optional: true, required: false
  private _budgetLine = new DataDatadogCostBudgetBudgetLineList(this, "budget_line", true);
  public get budgetLine() {
    return this._budgetLine;
  }
  public putBudgetLine(value: DataDatadogCostBudgetBudgetLine[] | cdktn.IResolvable) {
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
  private _entries = new DataDatadogCostBudgetEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: DataDatadogCostBudgetEntries[] | cdktn.IResolvable) {
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
      id: cdktn.stringToTerraform(this._id),
      budget_line: cdktn.listMapper(dataDatadogCostBudgetBudgetLineToTerraform, true)(this._budgetLine.internalValue),
      entries: cdktn.listMapper(dataDatadogCostBudgetEntriesToTerraform, true)(this._entries.internalValue),
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
      budget_line: {
        value: cdktn.listMapperHcl(dataDatadogCostBudgetBudgetLineToHclTerraform, true)(this._budgetLine.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataDatadogCostBudgetBudgetLineList",
      },
      entries: {
        value: cdktn.listMapperHcl(dataDatadogCostBudgetEntriesToHclTerraform, true)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatadogCostBudgetEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
