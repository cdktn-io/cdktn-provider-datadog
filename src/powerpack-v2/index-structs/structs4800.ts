/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQuery,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryToTerraform,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryToHclTerraform,
PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryOutputReference,
PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQuery,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryToTerraform,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryToHclTerraform,
PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryOutputReference,
PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQuery,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryToTerraform,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryToHclTerraform,
PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryOutputReference,
PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormats,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsToTerraform,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsToHclTerraform,
PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsList,
PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormula,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaToTerraform,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaToHclTerraform,
PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaList,
PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionCustomLink,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkToTerraform,
powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkToHclTerraform,
PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkList } from './structs4400';
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_query: {
      value: cdktn.stringToHclTerraform(struct!.searchQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute[] | cdktn.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery {
  /**
  * A list of processes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#filter_by PowerpackV2#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search_by PowerpackV2#search_by}
  */
  readonly searchBy?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.filterBy),
    limit: cdktn.numberToTerraform(struct!.limit),
    metric: cdktn.stringToTerraform(struct!.metric),
    search_by: cdktn.stringToTerraform(struct!.searchBy),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_by: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.filterBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_by: {
      value: cdktn.stringToHclTerraform(struct!.searchBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterBy = this._filterBy;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._searchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBy = this._searchBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterBy = undefined;
      this._limit = undefined;
      this._metric = undefined;
      this._searchBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterBy = value.filterBy;
      this._limit = value.limit;
      this._metric = value.metric;
      this._searchBy = value.searchBy;
    }
  }

  // filter_by - computed: false, optional: true, required: false
  private _filterBy?: string[]; 
  public get filterBy() {
    return this.getListAttribute('filter_by');
  }
  public set filterBy(value: string[]) {
    this._filterBy = value;
  }
  public resetFilterBy() {
    this._filterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // search_by - computed: false, optional: true, required: false
  private _searchBy?: string; 
  public get searchBy() {
    return this.getStringAttribute('search_by');
  }
  public set searchBy(value: string) {
    this._searchBy = value;
  }
  public resetSearchBy() {
    this._searchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchByInput() {
    return this._searchBy;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for APM Dependency Stats queries. Valid values are `apm_dependency_stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * APM environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#env PowerpackV2#env}
  */
  readonly env: string;
  /**
  * Determines whether stats for upstream or downstream dependencies should be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#is_upstream PowerpackV2#is_upstream}
  */
  readonly isUpstream?: boolean | cdktn.IResolvable;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#operation_name PowerpackV2#operation_name}
  */
  readonly operationName: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#primary_tag_name PowerpackV2#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#primary_tag_value PowerpackV2#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#resource_name PowerpackV2#resource_name}
  */
  readonly resourceName: string;
  /**
  * APM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#service PowerpackV2#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `avg_duration`, `avg_root_duration`, `avg_spans_per_trace`, `error_rate`, `pct_exec_time`, `pct_of_traces`, `total_traces_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#stat PowerpackV2#stat}
  */
  readonly stat: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_org_uuids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    env: cdktn.stringToTerraform(struct!.env),
    is_upstream: cdktn.booleanToTerraform(struct!.isUpstream),
    name: cdktn.stringToTerraform(struct!.name),
    operation_name: cdktn.stringToTerraform(struct!.operationName),
    primary_tag_name: cdktn.stringToTerraform(struct!.primaryTagName),
    primary_tag_value: cdktn.stringToTerraform(struct!.primaryTagValue),
    resource_name: cdktn.stringToTerraform(struct!.resourceName),
    service: cdktn.stringToTerraform(struct!.service),
    stat: cdktn.stringToTerraform(struct!.stat),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_org_uuids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktn.stringToHclTerraform(struct!.env),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_upstream: {
      value: cdktn.booleanToHclTerraform(struct!.isUpstream),
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
    operation_name: {
      value: cdktn.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_tag_name: {
      value: cdktn.stringToHclTerraform(struct!.primaryTagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_tag_value: {
      value: cdktn.stringToHclTerraform(struct!.primaryTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktn.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat: {
      value: cdktn.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._isUpstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpstream = this._isUpstream;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._primaryTagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagName = this._primaryTagName;
    }
    if (this._primaryTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagValue = this._primaryTagValue;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._env = undefined;
      this._isUpstream = undefined;
      this._name = undefined;
      this._operationName = undefined;
      this._primaryTagName = undefined;
      this._primaryTagValue = undefined;
      this._resourceName = undefined;
      this._service = undefined;
      this._stat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._env = value.env;
      this._isUpstream = value.isUpstream;
      this._name = value.name;
      this._operationName = value.operationName;
      this._primaryTagName = value.primaryTagName;
      this._primaryTagValue = value.primaryTagValue;
      this._resourceName = value.resourceName;
      this._service = value.service;
      this._stat = value.stat;
    }
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // env - computed: false, optional: false, required: true
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // is_upstream - computed: false, optional: true, required: false
  private _isUpstream?: boolean | cdktn.IResolvable; 
  public get isUpstream() {
    return this.getBooleanAttribute('is_upstream');
  }
  public set isUpstream(value: boolean | cdktn.IResolvable) {
    this._isUpstream = value;
  }
  public resetIsUpstream() {
    this._isUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpstreamInput() {
    return this._isUpstream;
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

  // operation_name - computed: false, optional: false, required: true
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // primary_tag_name - computed: false, optional: true, required: false
  private _primaryTagName?: string; 
  public get primaryTagName() {
    return this.getStringAttribute('primary_tag_name');
  }
  public set primaryTagName(value: string) {
    this._primaryTagName = value;
  }
  public resetPrimaryTagName() {
    this._primaryTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagNameInput() {
    return this._primaryTagName;
  }

  // primary_tag_value - computed: false, optional: true, required: false
  private _primaryTagValue?: string; 
  public get primaryTagValue() {
    return this.getStringAttribute('primary_tag_value');
  }
  public set primaryTagValue(value: string) {
    this._primaryTagValue = value;
  }
  public resetPrimaryTagValue() {
    this._primaryTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagValueInput() {
    return this._primaryTagValue;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQuery {
  /**
  * The data source for APM metrics queries. Valid values are `apm_metrics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Optional fields to group the query results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Name of this query to use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Optional operation mode used to aggregate across operation names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#operation_mode PowerpackV2#operation_mode}
  */
  readonly operationMode?: string;
  /**
  * Name of the operation on the service. If omitted, the primary operation name is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#operation_name PowerpackV2#operation_name}
  */
  readonly operationName?: string;
  /**
  * Tags to query for a specific downstream entity, such as `peer.service` or `peer.db_instance`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#peer_tags PowerpackV2#peer_tags}
  */
  readonly peerTags?: string[];
  /**
  * Additional filters for the query using metrics query syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query_filter PowerpackV2#query_filter}
  */
  readonly queryFilter?: string;
  /**
  * The hash of a specific resource to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#resource_hash PowerpackV2#resource_hash}
  */
  readonly resourceHash?: string;
  /**
  * The full name of a specific resource to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#resource_name PowerpackV2#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#service PowerpackV2#service}
  */
  readonly service?: string;
  /**
  * The relationship between the span, its parents, and its children in a trace. Valid values are `consumer`, `server`, `client`, `producer`, `internal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#span_kind PowerpackV2#span_kind}
  */
  readonly spanKind?: string;
  /**
  * APM metric stat name. Valid values are `errors`, `error_rate`, `errors_per_second`, `latency_avg`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`, `latency_p999`, `latency_distribution`, `hits`, `hits_per_second`, `total_time`, `apdex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#stat PowerpackV2#stat}
  */
  readonly stat: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    group_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupBy),
    name: cdktn.stringToTerraform(struct!.name),
    operation_mode: cdktn.stringToTerraform(struct!.operationMode),
    operation_name: cdktn.stringToTerraform(struct!.operationName),
    peer_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.peerTags),
    query_filter: cdktn.stringToTerraform(struct!.queryFilter),
    resource_hash: cdktn.stringToTerraform(struct!.resourceHash),
    resource_name: cdktn.stringToTerraform(struct!.resourceName),
    service: cdktn.stringToTerraform(struct!.service),
    span_kind: cdktn.stringToTerraform(struct!.spanKind),
    stat: cdktn.stringToTerraform(struct!.stat),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupBy),
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
    operation_mode: {
      value: cdktn.stringToHclTerraform(struct!.operationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_name: {
      value: cdktn.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.peerTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_filter: {
      value: cdktn.stringToHclTerraform(struct!.queryFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_hash: {
      value: cdktn.stringToHclTerraform(struct!.resourceHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktn.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    span_kind: {
      value: cdktn.stringToHclTerraform(struct!.spanKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat: {
      value: cdktn.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationMode = this._operationMode;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._peerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerTags = this._peerTags;
    }
    if (this._queryFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFilter = this._queryFilter;
    }
    if (this._resourceHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceHash = this._resourceHash;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._spanKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanKind = this._spanKind;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._groupBy = undefined;
      this._name = undefined;
      this._operationMode = undefined;
      this._operationName = undefined;
      this._peerTags = undefined;
      this._queryFilter = undefined;
      this._resourceHash = undefined;
      this._resourceName = undefined;
      this._service = undefined;
      this._spanKind = undefined;
      this._stat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._groupBy = value.groupBy;
      this._name = value.name;
      this._operationMode = value.operationMode;
      this._operationName = value.operationName;
      this._peerTags = value.peerTags;
      this._queryFilter = value.queryFilter;
      this._resourceHash = value.resourceHash;
      this._resourceName = value.resourceName;
      this._service = value.service;
      this._spanKind = value.spanKind;
      this._stat = value.stat;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // operation_mode - computed: false, optional: true, required: false
  private _operationMode?: string; 
  public get operationMode() {
    return this.getStringAttribute('operation_mode');
  }
  public set operationMode(value: string) {
    this._operationMode = value;
  }
  public resetOperationMode() {
    this._operationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationModeInput() {
    return this._operationMode;
  }

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // peer_tags - computed: false, optional: true, required: false
  private _peerTags?: string[]; 
  public get peerTags() {
    return this.getListAttribute('peer_tags');
  }
  public set peerTags(value: string[]) {
    this._peerTags = value;
  }
  public resetPeerTags() {
    this._peerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTagsInput() {
    return this._peerTags;
  }

  // query_filter - computed: false, optional: true, required: false
  private _queryFilter?: string; 
  public get queryFilter() {
    return this.getStringAttribute('query_filter');
  }
  public set queryFilter(value: string) {
    this._queryFilter = value;
  }
  public resetQueryFilter() {
    this._queryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFilterInput() {
    return this._queryFilter;
  }

  // resource_hash - computed: false, optional: true, required: false
  private _resourceHash?: string; 
  public get resourceHash() {
    return this.getStringAttribute('resource_hash');
  }
  public set resourceHash(value: string) {
    this._resourceHash = value;
  }
  public resetResourceHash() {
    this._resourceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceHashInput() {
    return this._resourceHash;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // span_kind - computed: false, optional: true, required: false
  private _spanKind?: string; 
  public get spanKind() {
    return this.getStringAttribute('span_kind');
  }
  public set spanKind(value: string) {
    this._spanKind = value;
  }
  public resetSpanKind() {
    this._spanKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanKindInput() {
    return this._spanKind;
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for APM Resource Stats queries. Valid values are `apm_resource_stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * APM environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#env PowerpackV2#env}
  */
  readonly env: string;
  /**
  * Array of fields to group results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#operation_name PowerpackV2#operation_name}
  */
  readonly operationName?: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#primary_tag_name PowerpackV2#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#primary_tag_value PowerpackV2#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#resource_name PowerpackV2#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#service PowerpackV2#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_distribution`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#stat PowerpackV2#stat}
  */
  readonly stat: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_org_uuids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    env: cdktn.stringToTerraform(struct!.env),
    group_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupBy),
    name: cdktn.stringToTerraform(struct!.name),
    operation_name: cdktn.stringToTerraform(struct!.operationName),
    primary_tag_name: cdktn.stringToTerraform(struct!.primaryTagName),
    primary_tag_value: cdktn.stringToTerraform(struct!.primaryTagValue),
    resource_name: cdktn.stringToTerraform(struct!.resourceName),
    service: cdktn.stringToTerraform(struct!.service),
    stat: cdktn.stringToTerraform(struct!.stat),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_org_uuids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktn.stringToHclTerraform(struct!.env),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupBy),
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
    operation_name: {
      value: cdktn.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_tag_name: {
      value: cdktn.stringToHclTerraform(struct!.primaryTagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_tag_value: {
      value: cdktn.stringToHclTerraform(struct!.primaryTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktn.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat: {
      value: cdktn.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._primaryTagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagName = this._primaryTagName;
    }
    if (this._primaryTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagValue = this._primaryTagValue;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._env = undefined;
      this._groupBy = undefined;
      this._name = undefined;
      this._operationName = undefined;
      this._primaryTagName = undefined;
      this._primaryTagValue = undefined;
      this._resourceName = undefined;
      this._service = undefined;
      this._stat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._env = value.env;
      this._groupBy = value.groupBy;
      this._name = value.name;
      this._operationName = value.operationName;
      this._primaryTagName = value.primaryTagName;
      this._primaryTagValue = value.primaryTagValue;
      this._resourceName = value.resourceName;
      this._service = value.service;
      this._stat = value.stat;
    }
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // env - computed: false, optional: false, required: true
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // primary_tag_name - computed: false, optional: true, required: false
  private _primaryTagName?: string; 
  public get primaryTagName() {
    return this.getStringAttribute('primary_tag_name');
  }
  public set primaryTagName(value: string) {
    this._primaryTagName = value;
  }
  public resetPrimaryTagName() {
    this._primaryTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagNameInput() {
    return this._primaryTagName;
  }

  // primary_tag_value - computed: false, optional: true, required: false
  private _primaryTagValue?: string; 
  public get primaryTagValue() {
    return this.getStringAttribute('primary_tag_value');
  }
  public set primaryTagValue(value: string) {
    this._primaryTagValue = value;
  }
  public resetPrimaryTagValue() {
    this._primaryTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagValueInput() {
    return this._primaryTagValue;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQuery {
  /**
  * The aggregation methods available for cloud cost queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregator PowerpackV2#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for cloud cost queries. Valid values are `cloud_cost`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Query for Cloud Cost data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregator: cdktn.stringToTerraform(struct!.aggregator),
    cross_org_uuids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregator: {
      value: cdktn.stringToHclTerraform(struct!.aggregator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_org_uuids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregator = value.aggregator;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._query = value.query;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator?: string; 
  public get aggregator() {
    return this.getStringAttribute('aggregator');
  }
  public set aggregator(value: string) {
    this._aggregator = value;
  }
  public resetAggregator() {
    this._aggregator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator;
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
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
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute | cdktn.IResolvable): any {
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
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._interval = value.interval;
      this._metric = value.metric;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort): any {
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
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metric = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metric = value.metric;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
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

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy {
  /**
  * The event facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sort.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._sort.internalValue = value.sort;
    }
  }

  // facet - computed: false, optional: false, required: true
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSortToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSortToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSort): any {
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
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metric = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metric = value.metric;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
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

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFields {
  /**
  * List of event facets to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fields PowerpackV2#fields}
  */
  readonly fields: string[];
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSort;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._limit = undefined;
      this._sort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._limit = value.limit;
      this._sort.internalValue = value.sort;
    }
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsSort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
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
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for event platform-based queries. Valid values are `logs`, `spans`, `network`, `rum`, `security_signals`, `profiles`, `audit`, `events`, `ci_tests`, `ci_pipelines`, `incident_analytics`, `product_analytics`, `on_call_events`, `errors`, `llm_observability`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream. Omit or use `[]` to query all indexes at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#indexes PowerpackV2#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Option for storage location. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#storage PowerpackV2#storage}
  */
  readonly storage?: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#compute PowerpackV2#compute}
  */
  readonly compute: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * group_by_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by_fields PowerpackV2#group_by_fields}
  */
  readonly groupByFields?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFields;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_org_uuids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    name: cdktn.stringToTerraform(struct!.name),
    storage: cdktn.stringToTerraform(struct!.storage),
    compute: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByToTerraform, true)(struct!.groupBy),
    group_by_fields: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsToTerraform(struct!.groupByFields),
    search: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_org_uuids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.indexes),
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
    storage: {
      value: cdktn.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByList",
    },
    group_by_fields: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsToHclTerraform(struct!.groupByFields),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsList",
    },
    search: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._indexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._groupByFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._storage = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._groupByFields.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._indexes = value.indexes;
      this._name = value.name;
      this._storage = value.storage;
      this._compute.internalValue = value.compute;
      this._groupBy.internalValue = value.groupBy;
      this._groupByFields.internalValue = value.groupByFields;
      this._search.internalValue = value.search;
    }
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
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

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // compute - computed: false, optional: false, required: true
  private _compute = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFieldsOutputReference(this, "group_by_fields");
  public get groupByFields() {
    return this._groupByFields;
  }
  public putGroupByFields(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByFields) {
    this._groupByFields.internalValue = value;
  }
  public resetGroupByFields() {
    this._groupByFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields.internalValue;
  }

  // search - computed: false, optional: true, required: false
  private _search = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregator PowerpackV2#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for metrics queries. Defaults to `"metrics"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource?: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * The metrics query definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
  /**
  * Semantic mode for metrics queries. This determines how metrics from different sources are combined or displayed. Valid values are `combined`, `native`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#semantic_mode PowerpackV2#semantic_mode}
  */
  readonly semanticMode?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregator: cdktn.stringToTerraform(struct!.aggregator),
    cross_org_uuids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
    semantic_mode: cdktn.stringToTerraform(struct!.semanticMode),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregator: {
      value: cdktn.stringToHclTerraform(struct!.aggregator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_org_uuids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
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
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    semantic_mode: {
      value: cdktn.stringToHclTerraform(struct!.semanticMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._semanticMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticMode = this._semanticMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._name = undefined;
      this._query = undefined;
      this._semanticMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregator = value.aggregator;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._query = value.query;
      this._semanticMode = value.semanticMode;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator?: string; 
  public get aggregator() {
    return this.getStringAttribute('aggregator');
  }
  public set aggregator(value: string) {
    this._aggregator = value;
  }
  public resetAggregator() {
    this._aggregator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator;
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: true, required: false
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

  // semantic_mode - computed: false, optional: true, required: false
  private _semanticMode?: string; 
  public get semanticMode() {
    return this.getStringAttribute('semantic_mode');
  }
  public set semanticMode(value: string) {
    this._semanticMode = value;
  }
  public resetSemanticMode() {
    this._semanticMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticModeInput() {
    return this._semanticMode;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregator PowerpackV2#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for process queries. Valid values are `process`, `container`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Whether to normalize the CPU percentages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#is_normalized_cpu PowerpackV2#is_normalized_cpu}
  */
  readonly isNormalizedCpu?: boolean | cdktn.IResolvable;
  /**
  * The number of hits to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * The process metric name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`. Defaults to `"desc"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: string;
  /**
  * An array of tags to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#tag_filters PowerpackV2#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * The text to use as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#text_filter PowerpackV2#text_filter}
  */
  readonly textFilter?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregator: cdktn.stringToTerraform(struct!.aggregator),
    cross_org_uuids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    is_normalized_cpu: cdktn.booleanToTerraform(struct!.isNormalizedCpu),
    limit: cdktn.numberToTerraform(struct!.limit),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
    sort: cdktn.stringToTerraform(struct!.sort),
    tag_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tagFilters),
    text_filter: cdktn.stringToTerraform(struct!.textFilter),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregator: {
      value: cdktn.stringToHclTerraform(struct!.aggregator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_org_uuids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_normalized_cpu: {
      value: cdktn.booleanToHclTerraform(struct!.isNormalizedCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
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
    sort: {
      value: cdktn.stringToHclTerraform(struct!.sort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tagFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    text_filter: {
      value: cdktn.stringToHclTerraform(struct!.textFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._isNormalizedCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNormalizedCpu = this._isNormalizedCpu;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    if (this._tagFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters;
    }
    if (this._textFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFilter = this._textFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._isNormalizedCpu = undefined;
      this._limit = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._sort = undefined;
      this._tagFilters = undefined;
      this._textFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregator = value.aggregator;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._isNormalizedCpu = value.isNormalizedCpu;
      this._limit = value.limit;
      this._metric = value.metric;
      this._name = value.name;
      this._sort = value.sort;
      this._tagFilters = value.tagFilters;
      this._textFilter = value.textFilter;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator?: string; 
  public get aggregator() {
    return this.getStringAttribute('aggregator');
  }
  public set aggregator(value: string) {
    this._aggregator = value;
  }
  public resetAggregator() {
    this._aggregator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator;
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // is_normalized_cpu - computed: false, optional: true, required: false
  private _isNormalizedCpu?: boolean | cdktn.IResolvable; 
  public get isNormalizedCpu() {
    return this.getBooleanAttribute('is_normalized_cpu');
  }
  public set isNormalizedCpu(value: boolean | cdktn.IResolvable) {
    this._isNormalizedCpu = value;
  }
  public resetIsNormalizedCpu() {
    this._isNormalizedCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNormalizedCpuInput() {
    return this._isNormalizedCpu;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: string[]; 
  public get tagFilters() {
    return this.getListAttribute('tag_filters');
  }
  public set tagFilters(value: string[]) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // text_filter - computed: false, optional: true, required: false
  private _textFilter?: string; 
  public get textFilter() {
    return this.getStringAttribute('text_filter');
  }
  public set textFilter(value: string) {
    this._textFilter = value;
  }
  public resetTextFilter() {
    this._textFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFilterInput() {
    return this._textFilter;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount {
  /**
  * The name of the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * The query string for the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._query = value.query;
    }
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment {
  /**
  * The name of the segment subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * The unique identifier of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#segment_id PowerpackV2#segment_id}
  */
  readonly segmentId?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable): any {
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
    segment_id: {
      value: cdktn.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._segmentId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._segmentId = value.segmentId;
    }
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

  // segment_id - computed: false, optional: true, required: false
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser {
  /**
  * The name of the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * The query string for the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._query = value.query;
    }
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters {
  /**
  * An optional filter condition applied to the audience subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#filter_condition PowerpackV2#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#account PowerpackV2#account}
  */
  readonly account?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#segment PowerpackV2#segment}
  */
  readonly segment?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#user PowerpackV2#user}
  */
  readonly user?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_condition: {
      value: cdktn.stringToHclTerraform(struct!.filterCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCondition = this._filterCondition;
    }
    if (this._account?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account?.internalValue;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterCondition = undefined;
      this._account.internalValue = undefined;
      this._segment.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterCondition = value.filterCondition;
      this._account.internalValue = value.account;
      this._segment.internalValue = value.segment;
      this._user.internalValue = value.user;
    }
  }

  // filter_condition - computed: false, optional: true, required: false
  private _filterCondition?: string; 
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }
  public set filterCondition(value: string) {
    this._filterCondition = value;
  }
  public resetFilterCondition() {
    this._filterCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionInput() {
    return this._filterCondition;
  }

  // account - computed: false, optional: true, required: false
  private _account = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount[] | cdktn.IResolvable) {
    this._account.internalValue = value;
  }
  public resetAccount() {
    this._account.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // segment - computed: false, optional: true, required: false
  private _segment = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable) {
    this._segment.internalValue = value;
  }
  public resetSegment() {
    this._segment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup {
  /**
  * Alignment of the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#alignment PowerpackV2#alignment}
  */
  readonly alignment?: string;
  /**
  * Quantity of the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#quantity PowerpackV2#quantity}
  */
  readonly quantity?: number;
  /**
  * Timezone for the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#timezone PowerpackV2#timezone}
  */
  readonly timezone?: string;
  /**
  * Type of calendar interval. Valid values are `day`, `week`, `month`, `year`, `quarter`, `minute`, `hour`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alignment: cdktn.stringToTerraform(struct!.alignment),
    quantity: cdktn.numberToTerraform(struct!.quantity),
    timezone: cdktn.stringToTerraform(struct!.timezone),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alignment: {
      value: cdktn.stringToHclTerraform(struct!.alignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quantity: {
      value: cdktn.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignment = this._alignment;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alignment = undefined;
      this._quantity = undefined;
      this._timezone = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alignment = value.alignment;
      this._quantity = value.quantity;
      this._timezone = value.timezone;
      this._type = value.type;
    }
  }

  // alignment - computed: false, optional: true, required: false
  private _alignment?: string; 
  public get alignment() {
    return this.getStringAttribute('alignment');
  }
  public set alignment(value: string) {
    this._alignment = value;
  }
  public resetAlignment() {
    this._alignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentInput() {
    return this._alignment;
  }

  // quantity - computed: false, optional: true, required: false
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public resetQuantity() {
    this._quantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryCompute {
  /**
  * Aggregation method for the Product Analytics Extended query. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * Fixed-width time bucket interval in milliseconds. Mutually exclusive with `rollup`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
  /**
  * Measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Name of the compute for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * rollup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#rollup PowerpackV2#rollup}
  */
  readonly rollup?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
    rollup: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToTerraform(struct!.rollup),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryCompute): any {
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
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
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
    rollup: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToHclTerraform(struct!.rollup),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rollup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollup = this._rollup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._rollup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._interval = value.interval;
      this._metric = value.metric;
      this._name = value.name;
      this._rollup.internalValue = value.rollup;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // rollup - computed: false, optional: true, required: false
  private _rollup = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference(this, "rollup");
  public get rollup() {
    return this._rollup;
  }
  public putRollup(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup) {
    this._rollup.internalValue = value;
  }
  public resetRollup() {
    this._rollup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupInput() {
    return this._rollup.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort): any {
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
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metric = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metric = value.metric;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
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

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy {
  /**
  * Facet name to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet: string;
  /**
  * Maximum number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * Whether to exclude events missing the group-by facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#should_exclude_missing PowerpackV2#should_exclude_missing}
  */
  readonly shouldExcludeMissing?: boolean | cdktn.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    sort: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_exclude_missing: {
      value: cdktn.booleanToHclTerraform(struct!.shouldExcludeMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._shouldExcludeMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldExcludeMissing = this._shouldExcludeMissing;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._shouldExcludeMissing = undefined;
      this._sort.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._shouldExcludeMissing = value.shouldExcludeMissing;
      this._sort.internalValue = value.sort;
    }
  }

  // facet - computed: false, optional: false, required: true
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // should_exclude_missing - computed: false, optional: true, required: false
  private _shouldExcludeMissing?: boolean | cdktn.IResolvable; 
  public get shouldExcludeMissing() {
    return this.getBooleanAttribute('should_exclude_missing');
  }
  public set shouldExcludeMissing(value: boolean | cdktn.IResolvable) {
    this._shouldExcludeMissing = value;
  }
  public resetShouldExcludeMissing() {
    this._shouldExcludeMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldExcludeMissingInput() {
    return this._shouldExcludeMissing;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
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
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuery {
  /**
  * Data source for the Product Analytics event query. Valid values are `product_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._search.internalValue = value.search;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // search - computed: false, optional: false, required: true
  private _search = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQuery {
  /**
  * Data source for Product Analytics Extended queries. Valid values are `product_analytics_extended`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Event indexes to query. Use `*` to query all indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#indexes PowerpackV2#indexes}
  */
  readonly indexes?: string[];
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * audience_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#audience_filters PowerpackV2#audience_filters}
  */
  readonly audienceFilters?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#compute PowerpackV2#compute}
  */
  readonly compute: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuery;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    name: cdktn.stringToTerraform(struct!.name),
    audience_filters: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersToTerraform(struct!.audienceFilters),
    compute: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByToTerraform, true)(struct!.groupBy),
    query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQueryToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.indexes),
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
    audience_filters: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersList",
    },
    compute: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByList",
    },
    query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._indexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._audienceFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audienceFilters = this._audienceFilters?.internalValue;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._audienceFilters.internalValue = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._indexes = value.indexes;
      this._name = value.name;
      this._audienceFilters.internalValue = value.audienceFilters;
      this._compute.internalValue = value.compute;
      this._groupBy.internalValue = value.groupBy;
      this._query.internalValue = value.query;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
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

  // audience_filters - computed: false, optional: true, required: false
  private _audienceFilters = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters) {
    this._audienceFilters.internalValue = value;
  }
  public resetAudienceFilters() {
    this._audienceFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceFiltersInput() {
    return this._audienceFilters.internalValue;
  }

  // compute - computed: false, optional: false, required: true
  private _compute = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryCompute {
  /**
  * Aggregation for the retention query, including standard event aggregations and `pcNN` percentiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * Metric for the retention computation. Valid values are `__dd.retention`, `__dd.retention_rate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryComputeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryComputeOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryComputeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryComputeOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryCompute): any {
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
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metric = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metric = value.metric;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySort {
  /**
  * Sort order for retention group by results. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySortToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySortToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._order = value.order;
    }
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBy {
  /**
  * Facet to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet: string;
  /**
  * Maximum number of groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * Whether to exclude missing values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#should_exclude_missing PowerpackV2#should_exclude_missing}
  */
  readonly shouldExcludeMissing?: boolean | cdktn.IResolvable;
  /**
  * Source field for the retention group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#source PowerpackV2#source}
  */
  readonly source?: string;
  /**
  * Target for the retention group by. Valid values are `cohort`, `return_period`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#target PowerpackV2#target}
  */
  readonly target: string;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySort;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupByToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    source: cdktn.stringToTerraform(struct!.source),
    target: cdktn.stringToTerraform(struct!.target),
    sort: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_exclude_missing: {
      value: cdktn.booleanToHclTerraform(struct!.shouldExcludeMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
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
    sort: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._shouldExcludeMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldExcludeMissing = this._shouldExcludeMissing;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._shouldExcludeMissing = undefined;
      this._source = undefined;
      this._target = undefined;
      this._sort.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._shouldExcludeMissing = value.shouldExcludeMissing;
      this._source = value.source;
      this._target = value.target;
      this._sort.internalValue = value.sort;
    }
  }

  // facet - computed: false, optional: false, required: true
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // should_exclude_missing - computed: false, optional: true, required: false
  private _shouldExcludeMissing?: boolean | cdktn.IResolvable; 
  public get shouldExcludeMissing() {
    return this.getBooleanAttribute('should_exclude_missing');
  }
  public set shouldExcludeMissing(value: boolean | cdktn.IResolvable) {
    this._shouldExcludeMissing = value;
  }
  public resetShouldExcludeMissing() {
    this._shouldExcludeMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldExcludeMissingInput() {
    return this._shouldExcludeMissing;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // sort - computed: false, optional: true, required: false
  private _sort = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBySort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupByOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
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
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery {
  /**
  * Data source for the Product Analytics event query. Valid values are `product_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._search.internalValue = value.search;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // search - computed: false, optional: false, required: true
  private _search = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue {
  /**
  * Alignment of the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#alignment PowerpackV2#alignment}
  */
  readonly alignment?: string;
  /**
  * Quantity of the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#quantity PowerpackV2#quantity}
  */
  readonly quantity?: number;
  /**
  * Timezone for the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#timezone PowerpackV2#timezone}
  */
  readonly timezone?: string;
  /**
  * Type of calendar interval. Valid values are `day`, `week`, `month`, `year`, `quarter`, `minute`, `hour`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alignment: cdktn.stringToTerraform(struct!.alignment),
    quantity: cdktn.numberToTerraform(struct!.quantity),
    timezone: cdktn.stringToTerraform(struct!.timezone),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alignment: {
      value: cdktn.stringToHclTerraform(struct!.alignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quantity: {
      value: cdktn.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignment = this._alignment;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alignment = undefined;
      this._quantity = undefined;
      this._timezone = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alignment = value.alignment;
      this._quantity = value.quantity;
      this._timezone = value.timezone;
      this._type = value.type;
    }
  }

  // alignment - computed: false, optional: true, required: false
  private _alignment?: string; 
  public get alignment() {
    return this.getStringAttribute('alignment');
  }
  public set alignment(value: string) {
    this._alignment = value;
  }
  public resetAlignment() {
    this._alignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentInput() {
    return this._alignment;
  }

  // quantity - computed: false, optional: true, required: false
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public resetQuantity() {
    this._quantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval {
  /**
  * Type of cohort time interval. Valid values are `calendar`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval): any {
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
    value: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteria {
  /**
  * base_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#base_query PowerpackV2#base_query}
  */
  readonly baseQuery: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time_interval PowerpackV2#time_interval}
  */
  readonly timeInterval: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryToTerraform(struct!.baseQuery),
    time_interval: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryToHclTerraform(struct!.baseQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryList",
    },
    time_interval: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseQuery = this._baseQuery?.internalValue;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseQuery.internalValue = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseQuery.internalValue = value.baseQuery;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // base_query - computed: false, optional: false, required: true
  private _baseQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference(this, "base_query");
  public get baseQuery() {
    return this._baseQuery;
  }
  public putBaseQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery) {
    this._baseQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueryInput() {
    return this._baseQuery.internalValue;
  }

  // time_interval - computed: false, optional: false, required: true
  private _timeInterval = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount {
  /**
  * The name of the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * The query string for the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._query = value.query;
    }
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment {
  /**
  * The name of the segment subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * The unique identifier of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#segment_id PowerpackV2#segment_id}
  */
  readonly segmentId?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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
    segment_id: {
      value: cdktn.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._segmentId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._segmentId = value.segmentId;
    }
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

  // segment_id - computed: false, optional: true, required: false
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser {
  /**
  * The name of the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * The query string for the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._query = value.query;
    }
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters {
  /**
  * An optional filter condition applied to the audience subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#filter_condition PowerpackV2#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#account PowerpackV2#account}
  */
  readonly account?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#segment PowerpackV2#segment}
  */
  readonly segment?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#user PowerpackV2#user}
  */
  readonly user?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_condition: {
      value: cdktn.stringToHclTerraform(struct!.filterCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCondition = this._filterCondition;
    }
    if (this._account?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account?.internalValue;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterCondition = undefined;
      this._account.internalValue = undefined;
      this._segment.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterCondition = value.filterCondition;
      this._account.internalValue = value.account;
      this._segment.internalValue = value.segment;
      this._user.internalValue = value.user;
    }
  }

  // filter_condition - computed: false, optional: true, required: false
  private _filterCondition?: string; 
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }
  public set filterCondition(value: string) {
    this._filterCondition = value;
  }
  public resetFilterCondition() {
    this._filterCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionInput() {
    return this._filterCondition;
  }

  // account - computed: false, optional: true, required: false
  private _account = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
    this._account.internalValue = value;
  }
  public resetAccount() {
    this._account.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // segment - computed: false, optional: true, required: false
  private _segment = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
    this._segment.internalValue = value;
  }
  public resetSegment() {
    this._segment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFilters {
  /**
  * String filter for the retention query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#string_filter PowerpackV2#string_filter}
  */
  readonly stringFilter?: string;
  /**
  * audience_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#audience_filters PowerpackV2#audience_filters}
  */
  readonly audienceFilters?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    string_filter: {
      value: cdktn.stringToHclTerraform(struct!.stringFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audience_filters: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFilter = this._stringFilter;
    }
    if (this._audienceFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audienceFilters = this._audienceFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringFilter = undefined;
      this._audienceFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringFilter = value.stringFilter;
      this._audienceFilters.internalValue = value.audienceFilters;
    }
  }

  // string_filter - computed: false, optional: true, required: false
  private _stringFilter?: string; 
  public get stringFilter() {
    return this.getStringAttribute('string_filter');
  }
  public set stringFilter(value: string) {
    this._stringFilter = value;
  }
  public resetStringFilter() {
    this._stringFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFilterInput() {
    return this._stringFilter;
  }

  // audience_filters - computed: false, optional: true, required: false
  private _audienceFilters = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters) {
    this._audienceFilters.internalValue = value;
  }
  public resetAudienceFilters() {
    this._audienceFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceFiltersInput() {
    return this._audienceFilters.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
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
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery {
  /**
  * Data source for the Product Analytics event query. Valid values are `product_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._search.internalValue = value.search;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // search - computed: false, optional: false, required: true
  private _search = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval {
  /**
  * Type of return interval. Valid values are `fixed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
  /**
  * Unit of the return interval. Valid values are `day`, `week`, `month`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#unit PowerpackV2#unit}
  */
  readonly unit: string;
  /**
  * Value of the return interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
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
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unit = value.unit;
      this._value = value.value;
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

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteria {
  /**
  * base_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#base_query PowerpackV2#base_query}
  */
  readonly baseQuery: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time_interval PowerpackV2#time_interval}
  */
  readonly timeInterval?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct!.baseQuery),
    time_interval: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct!.baseQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryList",
    },
    time_interval: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseQuery = this._baseQuery?.internalValue;
    }
    if (this._timeInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseQuery.internalValue = undefined;
      this._timeInterval.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseQuery.internalValue = value.baseQuery;
      this._timeInterval.internalValue = value.timeInterval;
    }
  }

  // base_query - computed: false, optional: false, required: true
  private _baseQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference(this, "base_query");
  public get baseQuery() {
    return this._baseQuery;
  }
  public putBaseQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery) {
    this._baseQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueryInput() {
    return this._baseQuery.internalValue;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearch {
  /**
  * Entity tracked for retention. Valid values are `@usr.id`, `@account.id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#retention_entity PowerpackV2#retention_entity}
  */
  readonly retentionEntity: string;
  /**
  * Condition for counting an entity as returned. Valid values are `conversion_on`, `conversion_on_or_after`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#return_condition PowerpackV2#return_condition}
  */
  readonly returnCondition: string;
  /**
  * cohort_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cohort_criteria PowerpackV2#cohort_criteria}
  */
  readonly cohortCriteria: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteria;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#filters PowerpackV2#filters}
  */
  readonly filters?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFilters;
  /**
  * return_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#return_criteria PowerpackV2#return_criteria}
  */
  readonly returnCriteria?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteria;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retention_entity: cdktn.stringToTerraform(struct!.retentionEntity),
    return_condition: cdktn.stringToTerraform(struct!.returnCondition),
    cohort_criteria: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaToTerraform(struct!.cohortCriteria),
    filters: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersToTerraform(struct!.filters),
    return_criteria: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaToTerraform(struct!.returnCriteria),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retention_entity: {
      value: cdktn.stringToHclTerraform(struct!.retentionEntity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_condition: {
      value: cdktn.stringToHclTerraform(struct!.returnCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cohort_criteria: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaToHclTerraform(struct!.cohortCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaList",
    },
    filters: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersList",
    },
    return_criteria: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct!.returnCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionEntity !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionEntity = this._retentionEntity;
    }
    if (this._returnCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCondition = this._returnCondition;
    }
    if (this._cohortCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohortCriteria = this._cohortCriteria?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._returnCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCriteria = this._returnCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionEntity = undefined;
      this._returnCondition = undefined;
      this._cohortCriteria.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._returnCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionEntity = value.retentionEntity;
      this._returnCondition = value.returnCondition;
      this._cohortCriteria.internalValue = value.cohortCriteria;
      this._filters.internalValue = value.filters;
      this._returnCriteria.internalValue = value.returnCriteria;
    }
  }

  // retention_entity - computed: false, optional: false, required: true
  private _retentionEntity?: string; 
  public get retentionEntity() {
    return this.getStringAttribute('retention_entity');
  }
  public set retentionEntity(value: string) {
    this._retentionEntity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionEntityInput() {
    return this._retentionEntity;
  }

  // return_condition - computed: false, optional: false, required: true
  private _returnCondition?: string; 
  public get returnCondition() {
    return this.getStringAttribute('return_condition');
  }
  public set returnCondition(value: string) {
    this._returnCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnConditionInput() {
    return this._returnCondition;
  }

  // cohort_criteria - computed: false, optional: false, required: true
  private _cohortCriteria = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteriaOutputReference(this, "cohort_criteria");
  public get cohortCriteria() {
    return this._cohortCriteria;
  }
  public putCohortCriteria(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchCohortCriteria) {
    this._cohortCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortCriteriaInput() {
    return this._cohortCriteria.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // return_criteria - computed: false, optional: true, required: false
  private _returnCriteria = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteriaOutputReference(this, "return_criteria");
  public get returnCriteria() {
    return this._returnCriteria;
  }
  public putReturnCriteria(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchReturnCriteria) {
    this._returnCriteria.internalValue = value;
  }
  public resetReturnCriteria() {
    this._returnCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCriteriaInput() {
    return this._returnCriteria.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuery {
  /**
  * Data source for retention queries. Valid values are `product_analytics_retention`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#compute PowerpackV2#compute}
  */
  readonly compute: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearch;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    compute: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupByToTerraform, true)(struct!.groupBy),
    search: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
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
    compute: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupByList",
    },
    search: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._name = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._compute.internalValue = value.compute;
      this._groupBy.internalValue = value.groupBy;
      this._search.internalValue = value.search;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
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

  // compute - computed: false, optional: false, required: true
  private _compute = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // search - computed: false, optional: false, required: true
  private _search = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQuery {
  /**
  * Additional filters applied to the SLO query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#additional_query_filters PowerpackV2#additional_query_filters}
  */
  readonly additionalQueryFilters?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for SLO queries. Valid values are `slo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Group mode to query measures. Valid values are `overall`, `components`. Defaults to `"overall"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_mode PowerpackV2#group_mode}
  */
  readonly groupMode?: string;
  /**
  * SLO measures queries. Valid values are `good_events`, `bad_events`, `good_minutes`, `bad_minutes`, `slo_status`, `error_budget_remaining`, `burn_rate`, `error_budget_burndown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#measure PowerpackV2#measure}
  */
  readonly measure: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * ID of an SLO to query measures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#slo_id PowerpackV2#slo_id}
  */
  readonly sloId: string;
  /**
  * type of the SLO to query. Valid values are `metric`, `monitor`, `time_slice`. Defaults to `"metric"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#slo_query_type PowerpackV2#slo_query_type}
  */
  readonly sloQueryType?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_query_filters: cdktn.stringToTerraform(struct!.additionalQueryFilters),
    cross_org_uuids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    group_mode: cdktn.stringToTerraform(struct!.groupMode),
    measure: cdktn.stringToTerraform(struct!.measure),
    name: cdktn.stringToTerraform(struct!.name),
    slo_id: cdktn.stringToTerraform(struct!.sloId),
    slo_query_type: cdktn.stringToTerraform(struct!.sloQueryType),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_query_filters: {
      value: cdktn.stringToHclTerraform(struct!.additionalQueryFilters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_org_uuids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_mode: {
      value: cdktn.stringToHclTerraform(struct!.groupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure: {
      value: cdktn.stringToHclTerraform(struct!.measure),
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
    slo_id: {
      value: cdktn.stringToHclTerraform(struct!.sloId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_query_type: {
      value: cdktn.stringToHclTerraform(struct!.sloQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalQueryFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalQueryFilters = this._additionalQueryFilters;
    }
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._groupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMode = this._groupMode;
    }
    if (this._measure !== undefined) {
      hasAnyValues = true;
      internalValueResult.measure = this._measure;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sloId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloId = this._sloId;
    }
    if (this._sloQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloQueryType = this._sloQueryType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalQueryFilters = undefined;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._groupMode = undefined;
      this._measure = undefined;
      this._name = undefined;
      this._sloId = undefined;
      this._sloQueryType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalQueryFilters = value.additionalQueryFilters;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._groupMode = value.groupMode;
      this._measure = value.measure;
      this._name = value.name;
      this._sloId = value.sloId;
      this._sloQueryType = value.sloQueryType;
    }
  }

  // additional_query_filters - computed: false, optional: true, required: false
  private _additionalQueryFilters?: string; 
  public get additionalQueryFilters() {
    return this.getStringAttribute('additional_query_filters');
  }
  public set additionalQueryFilters(value: string) {
    this._additionalQueryFilters = value;
  }
  public resetAdditionalQueryFilters() {
    this._additionalQueryFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalQueryFiltersInput() {
    return this._additionalQueryFilters;
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // group_mode - computed: false, optional: true, required: false
  private _groupMode?: string; 
  public get groupMode() {
    return this.getStringAttribute('group_mode');
  }
  public set groupMode(value: string) {
    this._groupMode = value;
  }
  public resetGroupMode() {
    this._groupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupModeInput() {
    return this._groupMode;
  }

  // measure - computed: false, optional: false, required: true
  private _measure?: string; 
  public get measure() {
    return this.getStringAttribute('measure');
  }
  public set measure(value: string) {
    this._measure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureInput() {
    return this._measure;
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

  // slo_id - computed: false, optional: false, required: true
  private _sloId?: string; 
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId;
  }

  // slo_query_type - computed: false, optional: true, required: false
  private _sloQueryType?: string; 
  public get sloQueryType() {
    return this.getStringAttribute('slo_query_type');
  }
  public set sloQueryType(value: string) {
    this._sloQueryType = value;
  }
  public resetSloQueryType() {
    this._sloQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloQueryTypeInput() {
    return this._sloQueryType;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTarget {
  /**
  * End node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#end PowerpackV2#end}
  */
  readonly end?: string;
  /**
  * Start node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#start PowerpackV2#start}
  */
  readonly start?: string;
  /**
  * Target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
  /**
  * Target node value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTargetToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTargetOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTargetToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTargetOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
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
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryCompute {
  /**
  * Aggregation method for the User Journey query. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * Time bucket interval in milliseconds for timeseries queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
  /**
  * Metric for the User Journey computation. Valid values are `__dd.conversion`, `__dd.conversion_rate`, `__dd.time_to_convert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#target PowerpackV2#target}
  */
  readonly target?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTarget;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    target: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTargetToTerraform(struct!.target),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryCompute): any {
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
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._interval = value.interval;
      this._metric = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // target - computed: false, optional: true, required: false
  private _target = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySortToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySortToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySort): any {
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
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metric = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metric = value.metric;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
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

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTarget {
  /**
  * End node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#end PowerpackV2#end}
  */
  readonly end?: string;
  /**
  * Start node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#start PowerpackV2#start}
  */
  readonly start?: string;
  /**
  * Target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
  /**
  * Target node value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTargetToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTargetOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTargetToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTargetOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
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
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBy {
  /**
  * Facet name to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet: string;
  /**
  * Maximum number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * Whether to exclude events missing the group-by facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#should_exclude_missing PowerpackV2#should_exclude_missing}
  */
  readonly shouldExcludeMissing?: boolean | cdktn.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySort;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#target PowerpackV2#target}
  */
  readonly target?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTarget;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    sort: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySortToTerraform(struct!.sort),
    target: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTargetToTerraform(struct!.target),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_exclude_missing: {
      value: cdktn.booleanToHclTerraform(struct!.shouldExcludeMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySortList",
    },
    target: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._shouldExcludeMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldExcludeMissing = this._shouldExcludeMissing;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._shouldExcludeMissing = undefined;
      this._sort.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._shouldExcludeMissing = value.shouldExcludeMissing;
      this._sort.internalValue = value.sort;
      this._target.internalValue = value.target;
    }
  }

  // facet - computed: false, optional: false, required: true
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // should_exclude_missing - computed: false, optional: true, required: false
  private _shouldExcludeMissing?: boolean | cdktn.IResolvable; 
  public get shouldExcludeMissing() {
    return this.getBooleanAttribute('should_exclude_missing');
  }
  public set shouldExcludeMissing(value: boolean | cdktn.IResolvable) {
    this._shouldExcludeMissing = value;
  }
  public resetShouldExcludeMissing() {
    this._shouldExcludeMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldExcludeMissingInput() {
    return this._shouldExcludeMissing;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBySort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount {
  /**
  * The name of the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * The query string for the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._query = value.query;
    }
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment {
  /**
  * The name of the segment subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * The unique identifier of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#segment_id PowerpackV2#segment_id}
  */
  readonly segmentId?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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
    segment_id: {
      value: cdktn.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._segmentId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._segmentId = value.segmentId;
    }
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

  // segment_id - computed: false, optional: true, required: false
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser {
  /**
  * The name of the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * The query string for the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._query = value.query;
    }
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters {
  /**
  * An optional filter condition applied to the audience subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#filter_condition PowerpackV2#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#account PowerpackV2#account}
  */
  readonly account?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#segment PowerpackV2#segment}
  */
  readonly segment?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#user PowerpackV2#user}
  */
  readonly user?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_condition: {
      value: cdktn.stringToHclTerraform(struct!.filterCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCondition = this._filterCondition;
    }
    if (this._account?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account?.internalValue;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterCondition = undefined;
      this._account.internalValue = undefined;
      this._segment.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterCondition = value.filterCondition;
      this._account.internalValue = value.account;
      this._segment.internalValue = value.segment;
      this._user.internalValue = value.user;
    }
  }

  // filter_condition - computed: false, optional: true, required: false
  private _filterCondition?: string; 
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }
  public set filterCondition(value: string) {
    this._filterCondition = value;
  }
  public resetFilterCondition() {
    this._filterCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionInput() {
    return this._filterCondition;
  }

  // account - computed: false, optional: true, required: false
  private _account = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
    this._account.internalValue = value;
  }
  public resetAccount() {
    this._account.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // segment - computed: false, optional: true, required: false
  private _segment = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
    this._segment.internalValue = value;
  }
  public resetSegment() {
    this._segment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget {
  /**
  * End node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#end PowerpackV2#end}
  */
  readonly end?: string;
  /**
  * Start node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#start PowerpackV2#start}
  */
  readonly start?: string;
  /**
  * Target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
  /**
  * Target node value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
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
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter {
  /**
  * Graph filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * Graph filter operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#operator PowerpackV2#operator}
  */
  readonly operator?: string;
  /**
  * Graph filter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value?: number;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#target PowerpackV2#target}
  */
  readonly target?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
    target: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToTerraform(struct!.target),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
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
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._value = value.value;
      this._target.internalValue = value.target;
    }
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // target - computed: false, optional: true, required: false
  private _target = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFilters {
  /**
  * String filter for the user journey search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#string_filter PowerpackV2#string_filter}
  */
  readonly stringFilter?: string;
  /**
  * audience_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#audience_filters PowerpackV2#audience_filters}
  */
  readonly audienceFilters?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters;
  /**
  * graph_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#graph_filter PowerpackV2#graph_filter}
  */
  readonly graphFilter?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
    graph_filter: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterToTerraform, true)(struct!.graphFilter),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    string_filter: {
      value: cdktn.stringToHclTerraform(struct!.stringFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audience_filters: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersList",
    },
    graph_filter: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterToHclTerraform, true)(struct!.graphFilter),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFilter = this._stringFilter;
    }
    if (this._audienceFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audienceFilters = this._audienceFilters?.internalValue;
    }
    if (this._graphFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphFilter = this._graphFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringFilter = undefined;
      this._audienceFilters.internalValue = undefined;
      this._graphFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringFilter = value.stringFilter;
      this._audienceFilters.internalValue = value.audienceFilters;
      this._graphFilter.internalValue = value.graphFilter;
    }
  }

  // string_filter - computed: false, optional: true, required: false
  private _stringFilter?: string; 
  public get stringFilter() {
    return this.getStringAttribute('string_filter');
  }
  public set stringFilter(value: string) {
    this._stringFilter = value;
  }
  public resetStringFilter() {
    this._stringFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFilterInput() {
    return this._stringFilter;
  }

  // audience_filters - computed: false, optional: true, required: false
  private _audienceFilters = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters) {
    this._audienceFilters.internalValue = value;
  }
  public resetAudienceFilters() {
    this._audienceFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceFiltersInput() {
    return this._audienceFilters.internalValue;
  }

  // graph_filter - computed: false, optional: true, required: false
  private _graphFilter = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterList(this, "graph_filter", false);
  public get graphFilter() {
    return this._graphFilter;
  }
  public putGraphFilter(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable) {
    this._graphFilter.internalValue = value;
  }
  public resetGraphFilter() {
    this._graphFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphFilterInput() {
    return this._graphFilter.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeys {
  /**
  * Primary join key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#primary PowerpackV2#primary}
  */
  readonly primary: string;
  /**
  * Secondary join keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#secondary PowerpackV2#secondary}
  */
  readonly secondary?: string[];
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeysToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeysOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary: cdktn.stringToTerraform(struct!.primary),
    secondary: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.secondary),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeysToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeysOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    primary: {
      value: cdktn.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.secondary),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeysOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // primary - computed: false, optional: false, required: true
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary?: string[]; 
  public get secondary() {
    return this.getListAttribute('secondary');
  }
  public set secondary(value: string[]) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearch {
  /**
  * Expression describing the journey between nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#expression PowerpackV2#expression}
  */
  readonly expression: string;
  /**
  * JSON object mapping journey node names to Product Analytics base queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#node_objects PowerpackV2#node_objects}
  */
  readonly nodeObjects: string;
  /**
  * JSON object mapping journey step names to display aliases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#step_aliases PowerpackV2#step_aliases}
  */
  readonly stepAliases?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#filters PowerpackV2#filters}
  */
  readonly filters?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFilters;
  /**
  * join_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#join_keys PowerpackV2#join_keys}
  */
  readonly joinKeys?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeys;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    node_objects: cdktn.stringToTerraform(struct!.nodeObjects),
    step_aliases: cdktn.stringToTerraform(struct!.stepAliases),
    filters: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersToTerraform(struct!.filters),
    join_keys: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeysToTerraform(struct!.joinKeys),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearch): any {
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
    node_objects: {
      value: cdktn.stringToHclTerraform(struct!.nodeObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_aliases: {
      value: cdktn.stringToHclTerraform(struct!.stepAliases),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersList",
    },
    join_keys: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeysToHclTerraform(struct!.joinKeys),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._nodeObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeObjects = this._nodeObjects;
    }
    if (this._stepAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepAliases = this._stepAliases;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._joinKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinKeys = this._joinKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._nodeObjects = undefined;
      this._stepAliases = undefined;
      this._filters.internalValue = undefined;
      this._joinKeys.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._nodeObjects = value.nodeObjects;
      this._stepAliases = value.stepAliases;
      this._filters.internalValue = value.filters;
      this._joinKeys.internalValue = value.joinKeys;
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

  // node_objects - computed: false, optional: false, required: true
  private _nodeObjects?: string; 
  public get nodeObjects() {
    return this.getStringAttribute('node_objects');
  }
  public set nodeObjects(value: string) {
    this._nodeObjects = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeObjectsInput() {
    return this._nodeObjects;
  }

  // step_aliases - computed: false, optional: true, required: false
  private _stepAliases?: string; 
  public get stepAliases() {
    return this.getStringAttribute('step_aliases');
  }
  public set stepAliases(value: string) {
    this._stepAliases = value;
  }
  public resetStepAliases() {
    this._stepAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepAliasesInput() {
    return this._stepAliases;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // join_keys - computed: false, optional: true, required: false
  private _joinKeys = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeysOutputReference(this, "join_keys");
  public get joinKeys() {
    return this._joinKeys;
  }
  public putJoinKeys(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchJoinKeys) {
    this._joinKeys.internalValue = value;
  }
  public resetJoinKeys() {
    this._joinKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinKeysInput() {
    return this._joinKeys.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuery {
  /**
  * Data source for User Journey queries. Valid values are `product_analytics_journey`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#compute PowerpackV2#compute}
  */
  readonly compute: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearch;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    compute: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByToTerraform, true)(struct!.groupBy),
    search: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
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
    compute: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByList",
    },
    search: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._name = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._compute.internalValue = value.compute;
      this._groupBy.internalValue = value.groupBy;
      this._search.internalValue = value.search;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
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

  // compute - computed: false, optional: false, required: true
  private _compute = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // search - computed: false, optional: false, required: true
  private _search = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery {
  /**
  * apm_dependency_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#apm_dependency_stats_query PowerpackV2#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery;
  /**
  * apm_metrics_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#apm_metrics_query PowerpackV2#apm_metrics_query}
  */
  readonly apmMetricsQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQuery;
  /**
  * apm_resource_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#apm_resource_stats_query PowerpackV2#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery;
  /**
  * cloud_cost_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cloud_cost_query PowerpackV2#cloud_cost_query}
  */
  readonly cloudCostQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQuery;
  /**
  * event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#event_query PowerpackV2#event_query}
  */
  readonly eventQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery;
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric_query PowerpackV2#metric_query}
  */
  readonly metricQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#process_query PowerpackV2#process_query}
  */
  readonly processQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery;
  /**
  * product_analytics_extended_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#product_analytics_extended_query PowerpackV2#product_analytics_extended_query}
  */
  readonly productAnalyticsExtendedQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQuery;
  /**
  * retention_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#retention_query PowerpackV2#retention_query}
  */
  readonly retentionQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuery;
  /**
  * slo_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#slo_query PowerpackV2#slo_query}
  */
  readonly sloQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQuery;
  /**
  * user_journey_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#user_journey_query PowerpackV2#user_journey_query}
  */
  readonly userJourneyQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuery;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    apm_dependency_stats_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_metrics_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQueryToTerraform(struct!.apmMetricsQuery),
    apm_resource_stats_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    cloud_cost_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQueryToTerraform(struct!.cloudCostQuery),
    event_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryToTerraform(struct!.processQuery),
    product_analytics_extended_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryToTerraform(struct!.productAnalyticsExtendedQuery),
    retention_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryToTerraform(struct!.retentionQuery),
    slo_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQueryToTerraform(struct!.sloQuery),
    user_journey_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryToTerraform(struct!.userJourneyQuery),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    apm_dependency_stats_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryToHclTerraform(struct!.apmDependencyStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryList",
    },
    apm_metrics_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQueryToHclTerraform(struct!.apmMetricsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQueryList",
    },
    apm_resource_stats_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryToHclTerraform(struct!.apmResourceStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryList",
    },
    cloud_cost_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQueryToHclTerraform(struct!.cloudCostQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQueryList",
    },
    event_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryToHclTerraform(struct!.eventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryList",
    },
    metric_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryToHclTerraform(struct!.metricQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryList",
    },
    process_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryList",
    },
    product_analytics_extended_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryToHclTerraform(struct!.productAnalyticsExtendedQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryList",
    },
    retention_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryToHclTerraform(struct!.retentionQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryList",
    },
    slo_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQueryToHclTerraform(struct!.sloQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQueryList",
    },
    user_journey_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryToHclTerraform(struct!.userJourneyQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apmDependencyStatsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmDependencyStatsQuery = this._apmDependencyStatsQuery?.internalValue;
    }
    if (this._apmMetricsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmMetricsQuery = this._apmMetricsQuery?.internalValue;
    }
    if (this._apmResourceStatsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmResourceStatsQuery = this._apmResourceStatsQuery?.internalValue;
    }
    if (this._cloudCostQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCostQuery = this._cloudCostQuery?.internalValue;
    }
    if (this._eventQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventQuery = this._eventQuery?.internalValue;
    }
    if (this._metricQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricQuery = this._metricQuery?.internalValue;
    }
    if (this._processQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processQuery = this._processQuery?.internalValue;
    }
    if (this._productAnalyticsExtendedQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productAnalyticsExtendedQuery = this._productAnalyticsExtendedQuery?.internalValue;
    }
    if (this._retentionQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionQuery = this._retentionQuery?.internalValue;
    }
    if (this._sloQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloQuery = this._sloQuery?.internalValue;
    }
    if (this._userJourneyQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userJourneyQuery = this._userJourneyQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apmDependencyStatsQuery.internalValue = undefined;
      this._apmMetricsQuery.internalValue = undefined;
      this._apmResourceStatsQuery.internalValue = undefined;
      this._cloudCostQuery.internalValue = undefined;
      this._eventQuery.internalValue = undefined;
      this._metricQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
      this._productAnalyticsExtendedQuery.internalValue = undefined;
      this._retentionQuery.internalValue = undefined;
      this._sloQuery.internalValue = undefined;
      this._userJourneyQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apmDependencyStatsQuery.internalValue = value.apmDependencyStatsQuery;
      this._apmMetricsQuery.internalValue = value.apmMetricsQuery;
      this._apmResourceStatsQuery.internalValue = value.apmResourceStatsQuery;
      this._cloudCostQuery.internalValue = value.cloudCostQuery;
      this._eventQuery.internalValue = value.eventQuery;
      this._metricQuery.internalValue = value.metricQuery;
      this._processQuery.internalValue = value.processQuery;
      this._productAnalyticsExtendedQuery.internalValue = value.productAnalyticsExtendedQuery;
      this._retentionQuery.internalValue = value.retentionQuery;
      this._sloQuery.internalValue = value.sloQuery;
      this._userJourneyQuery.internalValue = value.userJourneyQuery;
    }
  }

  // apm_dependency_stats_query - computed: false, optional: true, required: false
  private _apmDependencyStatsQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery) {
    this._apmDependencyStatsQuery.internalValue = value;
  }
  public resetApmDependencyStatsQuery() {
    this._apmDependencyStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDependencyStatsQueryInput() {
    return this._apmDependencyStatsQuery.internalValue;
  }

  // apm_metrics_query - computed: false, optional: true, required: false
  private _apmMetricsQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQueryOutputReference(this, "apm_metrics_query");
  public get apmMetricsQuery() {
    return this._apmMetricsQuery;
  }
  public putApmMetricsQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmMetricsQuery) {
    this._apmMetricsQuery.internalValue = value;
  }
  public resetApmMetricsQuery() {
    this._apmMetricsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmMetricsQueryInput() {
    return this._apmMetricsQuery.internalValue;
  }

  // apm_resource_stats_query - computed: false, optional: true, required: false
  private _apmResourceStatsQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery) {
    this._apmResourceStatsQuery.internalValue = value;
  }
  public resetApmResourceStatsQuery() {
    this._apmResourceStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmResourceStatsQueryInput() {
    return this._apmResourceStatsQuery.internalValue;
  }

  // cloud_cost_query - computed: false, optional: true, required: false
  private _cloudCostQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQueryOutputReference(this, "cloud_cost_query");
  public get cloudCostQuery() {
    return this._cloudCostQuery;
  }
  public putCloudCostQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryCloudCostQuery) {
    this._cloudCostQuery.internalValue = value;
  }
  public resetCloudCostQuery() {
    this._cloudCostQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCostQueryInput() {
    return this._cloudCostQuery.internalValue;
  }

  // event_query - computed: false, optional: true, required: false
  private _eventQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery) {
    this._eventQuery.internalValue = value;
  }
  public resetEventQuery() {
    this._eventQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventQueryInput() {
    return this._eventQuery.internalValue;
  }

  // metric_query - computed: false, optional: true, required: false
  private _metricQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery) {
    this._metricQuery.internalValue = value;
  }
  public resetMetricQuery() {
    this._metricQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricQueryInput() {
    return this._metricQuery.internalValue;
  }

  // process_query - computed: false, optional: true, required: false
  private _processQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }

  // product_analytics_extended_query - computed: false, optional: true, required: false
  private _productAnalyticsExtendedQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQueryOutputReference(this, "product_analytics_extended_query");
  public get productAnalyticsExtendedQuery() {
    return this._productAnalyticsExtendedQuery;
  }
  public putProductAnalyticsExtendedQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProductAnalyticsExtendedQuery) {
    this._productAnalyticsExtendedQuery.internalValue = value;
  }
  public resetProductAnalyticsExtendedQuery() {
    this._productAnalyticsExtendedQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productAnalyticsExtendedQueryInput() {
    return this._productAnalyticsExtendedQuery.internalValue;
  }

  // retention_query - computed: false, optional: true, required: false
  private _retentionQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQueryOutputReference(this, "retention_query");
  public get retentionQuery() {
    return this._retentionQuery;
  }
  public putRetentionQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryRetentionQuery) {
    this._retentionQuery.internalValue = value;
  }
  public resetRetentionQuery() {
    this._retentionQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionQueryInput() {
    return this._retentionQuery.internalValue;
  }

  // slo_query - computed: false, optional: true, required: false
  private _sloQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQueryOutputReference(this, "slo_query");
  public get sloQuery() {
    return this._sloQuery;
  }
  public putSloQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuerySloQuery) {
    this._sloQuery.internalValue = value;
  }
  public resetSloQuery() {
    this._sloQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloQueryInput() {
    return this._sloQuery.internalValue;
  }

  // user_journey_query - computed: false, optional: true, required: false
  private _userJourneyQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQueryOutputReference(this, "user_journey_query");
  public get userJourneyQuery() {
    return this._userJourneyQuery;
  }
  public putUserJourneyQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryUserJourneyQuery) {
    this._userJourneyQuery.internalValue = value;
  }
  public resetUserJourneyQuery() {
    this._userJourneyQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userJourneyQueryInput() {
    return this._userJourneyQuery.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute | cdktn.IResolvable): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_query: {
      value: cdktn.stringToHclTerraform(struct!.searchQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute[] | cdktn.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute | cdktn.IResolvable): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_query: {
      value: cdktn.stringToHclTerraform(struct!.searchQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute[] | cdktn.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSort {
  /**
  * The index of the formula to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: number;
  /**
  * Widget sorting direction. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSortToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.numberToTerraform(struct!.index),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSortToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index: {
      value: cdktn.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._order = value.order;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSort {
  /**
  * The name of the group tag to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Widget sorting direction. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSortToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSortToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSort): any {
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
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._order = value.order;
    }
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

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderBy {
  /**
  * formula_sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#formula_sort PowerpackV2#formula_sort}
  */
  readonly formulaSort?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSort;
  /**
  * group_sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_sort PowerpackV2#group_sort}
  */
  readonly groupSort?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSort;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    formula_sort: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSortToTerraform(struct!.formulaSort),
    group_sort: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSortToTerraform(struct!.groupSort),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    formula_sort: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSortToHclTerraform(struct!.formulaSort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSortList",
    },
    group_sort: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSortToHclTerraform(struct!.groupSort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formulaSort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formulaSort = this._formulaSort?.internalValue;
    }
    if (this._groupSort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSort = this._groupSort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._formulaSort.internalValue = undefined;
      this._groupSort.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._formulaSort.internalValue = value.formulaSort;
      this._groupSort.internalValue = value.groupSort;
    }
  }

  // formula_sort - computed: false, optional: true, required: false
  private _formulaSort = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSortOutputReference(this, "formula_sort");
  public get formulaSort() {
    return this._formulaSort;
  }
  public putFormulaSort(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByFormulaSort) {
    this._formulaSort.internalValue = value;
  }
  public resetFormulaSort() {
    this._formulaSort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaSortInput() {
    return this._formulaSort.internalValue;
  }

  // group_sort - computed: false, optional: true, required: false
  private _groupSort = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSortOutputReference(this, "group_sort");
  public get groupSort() {
    return this._groupSort;
  }
  public putGroupSort(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByGroupSort) {
    this._groupSort.internalValue = value;
  }
  public resetGroupSort() {
    this._groupSort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSortInput() {
    return this._groupSort.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSort {
  /**
  * The number of items to limit the widget to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#count PowerpackV2#count}
  */
  readonly count?: number;
  /**
  * order_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order_by PowerpackV2#order_by}
  */
  readonly orderBy?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderBy[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    order_by: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByToTerraform, true)(struct!.orderBy),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByToHclTerraform, true)(struct!.orderBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._orderBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._orderBy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._orderBy.internalValue = value.orderBy;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderByList(this, "order_by", false);
  public get orderBy() {
    return this._orderBy;
  }
  public putOrderBy(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOrderBy[] | cdktn.IResolvable) {
    this._orderBy.internalValue = value;
  }
  public resetOrderBy() {
    this._orderBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatch {
  /**
  * Match or compare option. Valid values are `is`, `is_not`, `contains`, `does_not_contain`, `starts_with`, `ends_with`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
  /**
  * Table Widget Match String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatchToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatchToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatchOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatch): any {
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

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplace {
  /**
  * Text that will be replaced. Must be used with type `substring`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#substring PowerpackV2#substring}
  */
  readonly substring?: string;
  /**
  * Table widget text format replace all type. Valid values are `all`, `substring`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
  /**
  * Table Widget Match String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#with PowerpackV2#with}
  */
  readonly with: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplaceToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplaceOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    substring: cdktn.stringToTerraform(struct!.substring),
    type: cdktn.stringToTerraform(struct!.type),
    with: cdktn.stringToTerraform(struct!.with),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplaceToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplaceOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    substring: {
      value: cdktn.stringToHclTerraform(struct!.substring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with: {
      value: cdktn.stringToHclTerraform(struct!.with),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._substring !== undefined) {
      hasAnyValues = true;
      internalValueResult.substring = this._substring;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._with !== undefined) {
      hasAnyValues = true;
      internalValueResult.with = this._with;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._substring = undefined;
      this._type = undefined;
      this._with = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._substring = value.substring;
      this._type = value.type;
      this._with = value.with;
    }
  }

  // substring - computed: false, optional: true, required: false
  private _substring?: string; 
  public get substring() {
    return this.getStringAttribute('substring');
  }
  public set substring(value: string) {
    this._substring = value;
  }
  public resetSubstring() {
    this._substring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substringInput() {
    return this._substring;
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

  // with - computed: false, optional: false, required: true
  private _with?: string; 
  public get with() {
    return this.getStringAttribute('with');
  }
  public set with(value: string) {
    this._with = value;
  }
  // Temporarily expose input value. Use with caution.
  public get withInput() {
    return this._with;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormat {
  /**
  * The custom color palette to apply to the background.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#custom_bg_color PowerpackV2#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The custom color palette to apply to the foreground text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#custom_fg_color PowerpackV2#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * The color palette to apply. Valid values are `white_on_red`, `white_on_yellow`, `white_on_green`, `black_on_light_red`, `black_on_light_yellow`, `black_on_light_green`, `red_on_white`, `yellow_on_white`, `green_on_white`, `custom_bg`, `custom_text`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette?: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#match PowerpackV2#match}
  */
  readonly match: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatch;
  /**
  * replace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#replace PowerpackV2#replace}
  */
  readonly replace?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplace;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_bg_color: cdktn.stringToTerraform(struct!.customBgColor),
    custom_fg_color: cdktn.stringToTerraform(struct!.customFgColor),
    palette: cdktn.stringToTerraform(struct!.palette),
    match: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatchToTerraform(struct!.match),
    replace: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplaceToTerraform(struct!.replace),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_bg_color: {
      value: cdktn.stringToHclTerraform(struct!.customBgColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_fg_color: {
      value: cdktn.stringToHclTerraform(struct!.customFgColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    palette: {
      value: cdktn.stringToHclTerraform(struct!.palette),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatchList",
    },
    replace: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplaceToHclTerraform(struct!.replace),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customBgColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBgColor = this._customBgColor;
    }
    if (this._customFgColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFgColor = this._customFgColor;
    }
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._replace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customBgColor = undefined;
      this._customFgColor = undefined;
      this._palette = undefined;
      this._match.internalValue = undefined;
      this._replace.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customBgColor = value.customBgColor;
      this._customFgColor = value.customFgColor;
      this._palette = value.palette;
      this._match.internalValue = value.match;
      this._replace.internalValue = value.replace;
    }
  }

  // custom_bg_color - computed: false, optional: true, required: false
  private _customBgColor?: string; 
  public get customBgColor() {
    return this.getStringAttribute('custom_bg_color');
  }
  public set customBgColor(value: string) {
    this._customBgColor = value;
  }
  public resetCustomBgColor() {
    this._customBgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBgColorInput() {
    return this._customBgColor;
  }

  // custom_fg_color - computed: false, optional: true, required: false
  private _customFgColor?: string; 
  public get customFgColor() {
    return this.getStringAttribute('custom_fg_color');
  }
  public set customFgColor(value: string) {
    this._customFgColor = value;
  }
  public resetCustomFgColor() {
    this._customFgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFgColorInput() {
    return this._customFgColor;
  }

  // palette - computed: false, optional: true, required: false
  private _palette?: string; 
  public get palette() {
    return this.getStringAttribute('palette');
  }
  public set palette(value: string) {
    this._palette = value;
  }
  public resetPalette() {
    this._palette = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteInput() {
    return this._palette;
  }

  // match - computed: false, optional: false, required: true
  private _match = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplaceOutputReference(this, "replace");
  public get replace() {
    return this._replace;
  }
  public putReplace(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatReplace) {
    this._replace.internalValue = value;
  }
  public resetReplace() {
    this._replace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormat[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormats {
  /**
  * text_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#text_format PowerpackV2#text_format}
  */
  readonly textFormat?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormat[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text_format: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatToTerraform, true)(struct!.textFormat),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text_format: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatToHclTerraform, true)(struct!.textFormat),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormats | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFormat = this._textFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormats | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._textFormat.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._textFormat.internalValue = value.textFormat;
    }
  }

  // text_format - computed: false, optional: true, required: false
  private _textFormat = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormatList(this, "text_format", false);
  public get textFormat() {
    return this._textFormat;
  }
  public putTextFormat(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsTextFormat[] | cdktn.IResolvable) {
    this._textFormat.internalValue = value;
  }
  public resetTextFormat() {
    this._textFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFormatInput() {
    return this._textFormat.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormats[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequest {
  /**
  * The aggregator to use for time aggregation. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregator PowerpackV2#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The alias for the column name (defaults to metric name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#alias PowerpackV2#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. Valid values are `number`, `bar`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cell_display_mode PowerpackV2#cell_display_mode}
  */
  readonly cellDisplayMode?: string[];
  /**
  * For metric queries, the number of lines to show in the table. Only one request should have this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * The sort order for the rows. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
  /**
  * The metric query to use for this widget. **Deprecated.** Use queries and formulas instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#q PowerpackV2#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#apm_query PowerpackV2#apm_query}
  */
  readonly apmQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQuery;
  /**
  * apm_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#apm_stats_query PowerpackV2#apm_stats_query}
  */
  readonly apmStatsQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQuery;
  /**
  * conditional_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#conditional_formats PowerpackV2#conditional_formats}
  */
  readonly conditionalFormats?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormats[] | cdktn.IResolvable;
  /**
  * formula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#formula PowerpackV2#formula}
  */
  readonly formula?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormula[] | cdktn.IResolvable;
  /**
  * log_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#log_query PowerpackV2#log_query}
  */
  readonly logQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#process_query PowerpackV2#process_query}
  */
  readonly processQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery[] | cdktn.IResolvable;
  /**
  * rum_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#rum_query PowerpackV2#rum_query}
  */
  readonly rumQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery;
  /**
  * security_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#security_query PowerpackV2#security_query}
  */
  readonly securityQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSort;
  /**
  * text_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#text_formats PowerpackV2#text_formats}
  */
  readonly textFormats?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormats[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregator: cdktn.stringToTerraform(struct!.aggregator),
    alias: cdktn.stringToTerraform(struct!.alias),
    cell_display_mode: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cellDisplayMode),
    limit: cdktn.numberToTerraform(struct!.limit),
    order: cdktn.stringToTerraform(struct!.order),
    q: cdktn.stringToTerraform(struct!.q),
    apm_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryToTerraform(struct!.apmQuery),
    apm_stats_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryToTerraform(struct!.apmStatsQuery),
    conditional_formats: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsToTerraform, true)(struct!.conditionalFormats),
    formula: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaToTerraform, true)(struct!.formula),
    log_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryToTerraform(struct!.logQuery),
    process_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryToTerraform(struct!.processQuery),
    query: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryToTerraform, true)(struct!.query),
    rum_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryToTerraform(struct!.rumQuery),
    security_query: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryToTerraform(struct!.securityQuery),
    sort: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortToTerraform(struct!.sort),
    text_formats: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsToTerraform, true)(struct!.textFormats),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregator: {
      value: cdktn.stringToHclTerraform(struct!.aggregator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cell_display_mode: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cellDisplayMode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    q: {
      value: cdktn.stringToHclTerraform(struct!.q),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apm_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryToHclTerraform(struct!.apmQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryList",
    },
    apm_stats_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryToHclTerraform(struct!.apmStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryList",
    },
    conditional_formats: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsToHclTerraform, true)(struct!.conditionalFormats),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsList",
    },
    formula: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaToHclTerraform, true)(struct!.formula),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaList",
    },
    log_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryToHclTerraform(struct!.logQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryList",
    },
    process_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryList",
    },
    query: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryList",
    },
    rum_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryToHclTerraform(struct!.rumQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryList",
    },
    security_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryToHclTerraform(struct!.securityQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryList",
    },
    sort: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortList",
    },
    text_formats: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsToHclTerraform, true)(struct!.textFormats),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._cellDisplayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellDisplayMode = this._cellDisplayMode;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._q !== undefined) {
      hasAnyValues = true;
      internalValueResult.q = this._q;
    }
    if (this._apmQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmQuery = this._apmQuery?.internalValue;
    }
    if (this._apmStatsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmStatsQuery = this._apmStatsQuery?.internalValue;
    }
    if (this._conditionalFormats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalFormats = this._conditionalFormats?.internalValue;
    }
    if (this._formula?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula?.internalValue;
    }
    if (this._logQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQuery = this._logQuery?.internalValue;
    }
    if (this._processQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processQuery = this._processQuery?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._rumQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rumQuery = this._rumQuery?.internalValue;
    }
    if (this._securityQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityQuery = this._securityQuery?.internalValue;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    if (this._textFormats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFormats = this._textFormats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregator = undefined;
      this._alias = undefined;
      this._cellDisplayMode = undefined;
      this._limit = undefined;
      this._order = undefined;
      this._q = undefined;
      this._apmQuery.internalValue = undefined;
      this._apmStatsQuery.internalValue = undefined;
      this._conditionalFormats.internalValue = undefined;
      this._formula.internalValue = undefined;
      this._logQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
      this._query.internalValue = undefined;
      this._rumQuery.internalValue = undefined;
      this._securityQuery.internalValue = undefined;
      this._sort.internalValue = undefined;
      this._textFormats.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregator = value.aggregator;
      this._alias = value.alias;
      this._cellDisplayMode = value.cellDisplayMode;
      this._limit = value.limit;
      this._order = value.order;
      this._q = value.q;
      this._apmQuery.internalValue = value.apmQuery;
      this._apmStatsQuery.internalValue = value.apmStatsQuery;
      this._conditionalFormats.internalValue = value.conditionalFormats;
      this._formula.internalValue = value.formula;
      this._logQuery.internalValue = value.logQuery;
      this._processQuery.internalValue = value.processQuery;
      this._query.internalValue = value.query;
      this._rumQuery.internalValue = value.rumQuery;
      this._securityQuery.internalValue = value.securityQuery;
      this._sort.internalValue = value.sort;
      this._textFormats.internalValue = value.textFormats;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator?: string; 
  public get aggregator() {
    return this.getStringAttribute('aggregator');
  }
  public set aggregator(value: string) {
    this._aggregator = value;
  }
  public resetAggregator() {
    this._aggregator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // cell_display_mode - computed: false, optional: true, required: false
  private _cellDisplayMode?: string[]; 
  public get cellDisplayMode() {
    return this.getListAttribute('cell_display_mode');
  }
  public set cellDisplayMode(value: string[]) {
    this._cellDisplayMode = value;
  }
  public resetCellDisplayMode() {
    this._cellDisplayMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellDisplayModeInput() {
    return this._cellDisplayMode;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // q - computed: false, optional: true, required: false
  private _q?: string; 
  public get q() {
    return this.getStringAttribute('q');
  }
  public set q(value: string) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // apm_query - computed: false, optional: true, required: false
  private _apmQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQuery) {
    this._apmQuery.internalValue = value;
  }
  public resetApmQuery() {
    this._apmQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmQueryInput() {
    return this._apmQuery.internalValue;
  }

  // apm_stats_query - computed: false, optional: true, required: false
  private _apmStatsQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryOutputReference(this, "apm_stats_query");
  public get apmStatsQuery() {
    return this._apmStatsQuery;
  }
  public putApmStatsQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQuery) {
    this._apmStatsQuery.internalValue = value;
  }
  public resetApmStatsQuery() {
    this._apmStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmStatsQueryInput() {
    return this._apmStatsQuery.internalValue;
  }

  // conditional_formats - computed: false, optional: true, required: false
  private _conditionalFormats = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormats[] | cdktn.IResolvable) {
    this._conditionalFormats.internalValue = value;
  }
  public resetConditionalFormats() {
    this._conditionalFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalFormatsInput() {
    return this._conditionalFormats.internalValue;
  }

  // formula - computed: false, optional: true, required: false
  private _formula = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormula[] | cdktn.IResolvable) {
    this._formula.internalValue = value;
  }
  public resetFormula() {
    this._formula.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula.internalValue;
  }

  // log_query - computed: false, optional: true, required: false
  private _logQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery) {
    this._logQuery.internalValue = value;
  }
  public resetLogQuery() {
    this._logQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryInput() {
    return this._logQuery.internalValue;
  }

  // process_query - computed: false, optional: true, required: false
  private _processQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery[] | cdktn.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // rum_query - computed: false, optional: true, required: false
  private _rumQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery) {
    this._rumQuery.internalValue = value;
  }
  public resetRumQuery() {
    this._rumQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rumQueryInput() {
    return this._rumQuery.internalValue;
  }

  // security_query - computed: false, optional: true, required: false
  private _securityQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery) {
    this._securityQuery.internalValue = value;
  }
  public resetSecurityQuery() {
    this._securityQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityQueryInput() {
    return this._securityQuery.internalValue;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestSort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }

  // text_formats - computed: false, optional: true, required: false
  private _textFormats = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormatsList(this, "text_formats", false);
  public get textFormats() {
    return this._textFormats;
  }
  public putTextFormats(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestTextFormats[] | cdktn.IResolvable) {
    this._textFormats.internalValue = value;
  }
  public resetTextFormats() {
    this._textFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFormatsInput() {
    return this._textFormats.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequest[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixed {
  /**
  * Start time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#from PowerpackV2#from}
  */
  readonly from: number;
  /**
  * End time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#to PowerpackV2#to}
  */
  readonly to: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixedOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixedOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from: {
      value: cdktn.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktn.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLive {
  /**
  * Unit of the time span. Valid values are `minute`, `hour`, `day`, `week`, `month`, `year`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#unit PowerpackV2#unit}
  */
  readonly unit: string;
  /**
  * Value of the time span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLiveOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLiveOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLive;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed?.internalValue;
    }
    if (this._live?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.live = this._live?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixed.internalValue = undefined;
      this._live.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixed.internalValue = value.fixed;
      this._live.internalValue = value.live;
    }
  }

  // fixed - computed: false, optional: true, required: false
  private _fixed = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeFixed) {
    this._fixed.internalValue = value;
  }
  public resetFixed() {
    this._fixed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed.internalValue;
  }

  // live - computed: false, optional: true, required: false
  private _live = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeLive) {
    this._live.internalValue = value;
  }
  public resetLive() {
    this._live.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveInput() {
    return this._live.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
  /**
  * Controls the display of the search bar. Valid values are `always`, `never`, `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#has_search_bar PowerpackV2#has_search_bar}
  */
  readonly hasSearchBar?: string;
  /**
  * Hide any portion of the widget's timeframe that is incomplete due to cost data not being available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#hide_incomplete_cost_data PowerpackV2#hide_incomplete_cost_data}
  */
  readonly hideIncompleteCostData?: boolean | cdktn.IResolvable;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `week_to_date`, `month_to_date`, `1y`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live_span PowerpackV2#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The title of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#title PowerpackV2#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#title_align PowerpackV2#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#title_size PowerpackV2#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#custom_link PowerpackV2#custom_link}
  */
  readonly customLink?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionCustomLink[] | cdktn.IResolvable;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#request PowerpackV2#request}
  */
  readonly request?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequest[] | cdktn.IResolvable;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTime;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    has_search_bar: cdktn.stringToTerraform(struct!.hasSearchBar),
    hide_incomplete_cost_data: cdktn.booleanToTerraform(struct!.hideIncompleteCostData),
    live_span: cdktn.stringToTerraform(struct!.liveSpan),
    title: cdktn.stringToTerraform(struct!.title),
    title_align: cdktn.stringToTerraform(struct!.titleAlign),
    title_size: cdktn.stringToTerraform(struct!.titleSize),
    custom_link: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkToTerraform, true)(struct!.customLink),
    request: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestToTerraform, true)(struct!.request),
    time: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeToTerraform(struct!.time),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_search_bar: {
      value: cdktn.stringToHclTerraform(struct!.hasSearchBar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_incomplete_cost_data: {
      value: cdktn.booleanToHclTerraform(struct!.hideIncompleteCostData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    live_span: {
      value: cdktn.stringToHclTerraform(struct!.liveSpan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_align: {
      value: cdktn.stringToHclTerraform(struct!.titleAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_size: {
      value: cdktn.stringToHclTerraform(struct!.titleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_link: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkToHclTerraform, true)(struct!.customLink),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkList",
    },
    request: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestList",
    },
    time: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hasSearchBar !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasSearchBar = this._hasSearchBar;
    }
    if (this._hideIncompleteCostData !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideIncompleteCostData = this._hideIncompleteCostData;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleAlign = this._titleAlign;
    }
    if (this._titleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleSize = this._titleSize;
    }
    if (this._customLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLink = this._customLink?.internalValue;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._hasSearchBar = undefined;
      this._hideIncompleteCostData = undefined;
      this._liveSpan = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._customLink.internalValue = undefined;
      this._request.internalValue = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._hasSearchBar = value.hasSearchBar;
      this._hideIncompleteCostData = value.hideIncompleteCostData;
      this._liveSpan = value.liveSpan;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._customLink.internalValue = value.customLink;
      this._request.internalValue = value.request;
      this._time.internalValue = value.time;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // has_search_bar - computed: false, optional: true, required: false
  private _hasSearchBar?: string; 
  public get hasSearchBar() {
    return this.getStringAttribute('has_search_bar');
  }
  public set hasSearchBar(value: string) {
    this._hasSearchBar = value;
  }
  public resetHasSearchBar() {
    this._hasSearchBar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasSearchBarInput() {
    return this._hasSearchBar;
  }

  // hide_incomplete_cost_data - computed: true, optional: true, required: false
  private _hideIncompleteCostData?: boolean | cdktn.IResolvable; 
  public get hideIncompleteCostData() {
    return this.getBooleanAttribute('hide_incomplete_cost_data');
  }
  public set hideIncompleteCostData(value: boolean | cdktn.IResolvable) {
    this._hideIncompleteCostData = value;
  }
  public resetHideIncompleteCostData() {
    this._hideIncompleteCostData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideIncompleteCostDataInput() {
    return this._hideIncompleteCostData;
  }

  // live_span - computed: false, optional: true, required: false
  private _liveSpan?: string; 
  public get liveSpan() {
    return this.getStringAttribute('live_span');
  }
  public set liveSpan(value: string) {
    this._liveSpan = value;
  }
  public resetLiveSpan() {
    this._liveSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveSpanInput() {
    return this._liveSpan;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // title_align - computed: false, optional: true, required: false
  private _titleAlign?: string; 
  public get titleAlign() {
    return this.getStringAttribute('title_align');
  }
  public set titleAlign(value: string) {
    this._titleAlign = value;
  }
  public resetTitleAlign() {
    this._titleAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleAlignInput() {
    return this._titleAlign;
  }

  // title_size - computed: false, optional: true, required: false
  private _titleSize?: string; 
  public get titleSize() {
    return this.getStringAttribute('title_size');
  }
  public set titleSize(value: string) {
    this._titleSize = value;
  }
  public resetTitleSize() {
    this._titleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleSizeInput() {
    return this._titleSize;
  }

  // custom_link - computed: false, optional: true, required: false
  private _customLink = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkList(this, "custom_link", false);
  public get customLink() {
    return this._customLink;
  }
  public putCustomLink(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionCustomLink[] | cdktn.IResolvable) {
    this._customLink.internalValue = value;
  }
  public resetCustomLink() {
    this._customLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLinkInput() {
    return this._customLink.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionRequest[] | cdktn.IResolvable) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // time - computed: false, optional: true, required: false
  private _time = new PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetGroupDefinitionWidgetQueryTableDefinitionTime) {
    this._time.internalValue = value;
  }
  public resetTime() {
    this._time.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLink {
  /**
  * The flag for toggling context menu link visibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#is_hidden PowerpackV2#is_hidden}
  */
  readonly isHidden?: boolean | cdktn.IResolvable;
  /**
  * The label for the custom link URL. Keep the label short and descriptive. Use metrics and tags as variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#label PowerpackV2#label}
  */
  readonly label?: string;
  /**
  * The URL of the custom link. URL must include `http` or `https`. A relative URL must start with `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#link PowerpackV2#link}
  */
  readonly link?: string;
  /**
  * The label ID that refers to a context menu link. Can be `logs`, `hosts`, `traces`, `profiles`, `processes`, `containers`, or `rum`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#override_label PowerpackV2#override_label}
  */
  readonly overrideLabel?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLinkToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLink | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_hidden: cdktn.booleanToTerraform(struct!.isHidden),
    label: cdktn.stringToTerraform(struct!.label),
    link: cdktn.stringToTerraform(struct!.link),
    override_label: cdktn.stringToTerraform(struct!.overrideLabel),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLinkToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLink | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_hidden: {
      value: cdktn.booleanToHclTerraform(struct!.isHidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_label: {
      value: cdktn.stringToHclTerraform(struct!.overrideLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLinkOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLink | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHidden = this._isHidden;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._overrideLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideLabel = this._overrideLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLink | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isHidden = undefined;
      this._label = undefined;
      this._link = undefined;
      this._overrideLabel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isHidden = value.isHidden;
      this._label = value.label;
      this._link = value.link;
      this._overrideLabel = value.overrideLabel;
    }
  }

  // is_hidden - computed: false, optional: true, required: false
  private _isHidden?: boolean | cdktn.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktn.IResolvable) {
    this._isHidden = value;
  }
  public resetIsHidden() {
    this._isHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // override_label - computed: false, optional: true, required: false
  private _overrideLabel?: string; 
  public get overrideLabel() {
    return this.getStringAttribute('override_label');
  }
  public set overrideLabel(value: string) {
    this._overrideLabel = value;
  }
  public resetOverrideLabel() {
    this._overrideLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLabelInput() {
    return this._overrideLabel;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLinkList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLink[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLinkOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionCustomLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_query: {
      value: cdktn.stringToHclTerraform(struct!.searchQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute[] | cdktn.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute | cdktn.IResolvable): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_query: {
      value: cdktn.stringToHclTerraform(struct!.searchQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute[] | cdktn.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframe {
  /**
  * Start time in milliseconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#from PowerpackV2#from}
  */
  readonly from: number;
  /**
  * End time in milliseconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#to PowerpackV2#to}
  */
  readonly to: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframeOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframeOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from: {
      value: cdktn.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktn.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDuration {
  /**
  * The comparison window type. Valid values are `previous_timeframe`, `custom_timeframe`, `previous_day`, `previous_week`, `previous_month`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
  /**
  * custom_timeframe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#custom_timeframe PowerpackV2#custom_timeframe}
  */
  readonly customTimeframe?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframe;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    custom_timeframe: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframeToTerraform(struct!.customTimeframe),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDuration): any {
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
    custom_timeframe: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframeToHclTerraform(struct!.customTimeframe),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._customTimeframe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTimeframe = this._customTimeframe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._customTimeframe.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._customTimeframe.internalValue = value.customTimeframe;
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

  // custom_timeframe - computed: false, optional: true, required: false
  private _customTimeframe = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframeOutputReference(this, "custom_timeframe");
  public get customTimeframe() {
    return this._customTimeframe;
  }
  public putCustomTimeframe(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationCustomTimeframe) {
    this._customTimeframe.internalValue = value;
  }
  public resetCustomTimeframe() {
    this._customTimeframe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimeframeInput() {
    return this._customTimeframe.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparison {
  /**
  * Which direction of change is considered an improvement. Valid values are `increase_better`, `decrease_better`, `neutral`. Defaults to `"neutral"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#directionality PowerpackV2#directionality}
  */
  readonly directionality?: string;
  /**
  * How the delta is expressed. Valid values are `absolute`, `relative`, `both`. Defaults to `"absolute"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type?: string;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#duration PowerpackV2#duration}
  */
  readonly duration: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDuration;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparison): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directionality: cdktn.stringToTerraform(struct!.directionality),
    type: cdktn.stringToTerraform(struct!.type),
    duration: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationToTerraform(struct!.duration),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparison): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directionality: {
      value: cdktn.stringToHclTerraform(struct!.directionality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparison | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directionality !== undefined) {
      hasAnyValues = true;
      internalValueResult.directionality = this._directionality;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparison | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directionality = undefined;
      this._type = undefined;
      this._duration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directionality = value.directionality;
      this._type = value.type;
      this._duration.internalValue = value.duration;
    }
  }

  // directionality - computed: false, optional: true, required: false
  private _directionality?: string; 
  public get directionality() {
    return this.getStringAttribute('directionality');
  }
  public set directionality(value: string) {
    this._directionality = value;
  }
  public resetDirectionality() {
    this._directionality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionalityInput() {
    return this._directionality;
  }

  // type - computed: false, optional: true, required: false
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

  // duration - computed: false, optional: false, required: true
  private _duration = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestComparisonDuration) {
    this._duration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormats {
  /**
  * The comparator to use. Valid values are `=`, `>`, `>=`, `<`, `<=`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#comparator PowerpackV2#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#custom_bg_color PowerpackV2#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#custom_fg_color PowerpackV2#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#hide_value PowerpackV2#hide_value}
  */
  readonly hideValue?: boolean | cdktn.IResolvable;
  /**
  * Displays an image as the background.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#image_url PowerpackV2#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#timeframe PowerpackV2#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormatsToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    custom_bg_color: cdktn.stringToTerraform(struct!.customBgColor),
    custom_fg_color: cdktn.stringToTerraform(struct!.customFgColor),
    hide_value: cdktn.booleanToTerraform(struct!.hideValue),
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    metric: cdktn.stringToTerraform(struct!.metric),
    palette: cdktn.stringToTerraform(struct!.palette),
    timeframe: cdktn.stringToTerraform(struct!.timeframe),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormatsToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_bg_color: {
      value: cdktn.stringToHclTerraform(struct!.customBgColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_fg_color: {
      value: cdktn.stringToHclTerraform(struct!.customFgColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_value: {
      value: cdktn.booleanToHclTerraform(struct!.hideValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_url: {
      value: cdktn.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    palette: {
      value: cdktn.stringToHclTerraform(struct!.palette),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeframe: {
      value: cdktn.stringToHclTerraform(struct!.timeframe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormats | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._customBgColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBgColor = this._customBgColor;
    }
    if (this._customFgColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFgColor = this._customFgColor;
    }
    if (this._hideValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideValue = this._hideValue;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    if (this._timeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframe = this._timeframe;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormats | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._customBgColor = undefined;
      this._customFgColor = undefined;
      this._hideValue = undefined;
      this._imageUrl = undefined;
      this._metric = undefined;
      this._palette = undefined;
      this._timeframe = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._customBgColor = value.customBgColor;
      this._customFgColor = value.customFgColor;
      this._hideValue = value.hideValue;
      this._imageUrl = value.imageUrl;
      this._metric = value.metric;
      this._palette = value.palette;
      this._timeframe = value.timeframe;
      this._value = value.value;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // custom_bg_color - computed: false, optional: true, required: false
  private _customBgColor?: string; 
  public get customBgColor() {
    return this.getStringAttribute('custom_bg_color');
  }
  public set customBgColor(value: string) {
    this._customBgColor = value;
  }
  public resetCustomBgColor() {
    this._customBgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBgColorInput() {
    return this._customBgColor;
  }

  // custom_fg_color - computed: false, optional: true, required: false
  private _customFgColor?: string; 
  public get customFgColor() {
    return this.getStringAttribute('custom_fg_color');
  }
  public set customFgColor(value: string) {
    this._customFgColor = value;
  }
  public resetCustomFgColor() {
    this._customFgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFgColorInput() {
    return this._customFgColor;
  }

  // hide_value - computed: false, optional: true, required: false
  private _hideValue?: boolean | cdktn.IResolvable; 
  public get hideValue() {
    return this.getBooleanAttribute('hide_value');
  }
  public set hideValue(value: boolean | cdktn.IResolvable) {
    this._hideValue = value;
  }
  public resetHideValue() {
    this._hideValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideValueInput() {
    return this._hideValue;
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
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

  // palette - computed: false, optional: false, required: true
  private _palette?: string; 
  public get palette() {
    return this.getStringAttribute('palette');
  }
  public set palette(value: string) {
    this._palette = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteInput() {
    return this._palette;
  }

  // timeframe - computed: false, optional: true, required: false
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  public resetTimeframe() {
    this._timeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormatsList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormats[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormatsOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptions {
  /**
  * The type of trend line to display. Valid values are `area`, `line`, and `bars`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#trend_type PowerpackV2#trend_type}
  */
  readonly trendType?: string;
  /**
  * The scale of the y-axis. Valid values are `shared` and `independent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#y_scale PowerpackV2#y_scale}
  */
  readonly yScale?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptionsToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptionsOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trend_type: cdktn.stringToTerraform(struct!.trendType),
    y_scale: cdktn.stringToTerraform(struct!.yScale),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptionsToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptionsOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    trend_type: {
      value: cdktn.stringToHclTerraform(struct!.trendType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_scale: {
      value: cdktn.stringToHclTerraform(struct!.yScale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trendType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendType = this._trendType;
    }
    if (this._yScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.yScale = this._yScale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trendType = undefined;
      this._yScale = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trendType = value.trendType;
      this._yScale = value.yScale;
    }
  }

  // trend_type - computed: false, optional: true, required: false
  private _trendType?: string; 
  public get trendType() {
    return this.getStringAttribute('trend_type');
  }
  public set trendType(value: string) {
    this._trendType = value;
  }
  public resetTrendType() {
    this._trendType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendTypeInput() {
    return this._trendType;
  }

  // y_scale - computed: false, optional: true, required: false
  private _yScale?: string; 
  public get yScale() {
    return this.getStringAttribute('y_scale');
  }
  public set yScale(value: string) {
    this._yScale = value;
  }
  public resetYScale() {
    this._yScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yScaleInput() {
    return this._yScale;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats {
  /**
  * The comparator to use. Valid values are `=`, `>`, `>=`, `<`, `<=`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#comparator PowerpackV2#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#custom_bg_color PowerpackV2#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#custom_fg_color PowerpackV2#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#hide_value PowerpackV2#hide_value}
  */
  readonly hideValue?: boolean | cdktn.IResolvable;
  /**
  * Displays an image as the background.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#image_url PowerpackV2#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#timeframe PowerpackV2#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    custom_bg_color: cdktn.stringToTerraform(struct!.customBgColor),
    custom_fg_color: cdktn.stringToTerraform(struct!.customFgColor),
    hide_value: cdktn.booleanToTerraform(struct!.hideValue),
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    metric: cdktn.stringToTerraform(struct!.metric),
    palette: cdktn.stringToTerraform(struct!.palette),
    timeframe: cdktn.stringToTerraform(struct!.timeframe),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_bg_color: {
      value: cdktn.stringToHclTerraform(struct!.customBgColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_fg_color: {
      value: cdktn.stringToHclTerraform(struct!.customFgColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_value: {
      value: cdktn.booleanToHclTerraform(struct!.hideValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_url: {
      value: cdktn.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    palette: {
      value: cdktn.stringToHclTerraform(struct!.palette),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeframe: {
      value: cdktn.stringToHclTerraform(struct!.timeframe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._customBgColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBgColor = this._customBgColor;
    }
    if (this._customFgColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFgColor = this._customFgColor;
    }
    if (this._hideValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideValue = this._hideValue;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    if (this._timeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframe = this._timeframe;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._customBgColor = undefined;
      this._customFgColor = undefined;
      this._hideValue = undefined;
      this._imageUrl = undefined;
      this._metric = undefined;
      this._palette = undefined;
      this._timeframe = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._customBgColor = value.customBgColor;
      this._customFgColor = value.customFgColor;
      this._hideValue = value.hideValue;
      this._imageUrl = value.imageUrl;
      this._metric = value.metric;
      this._palette = value.palette;
      this._timeframe = value.timeframe;
      this._value = value.value;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // custom_bg_color - computed: false, optional: true, required: false
  private _customBgColor?: string; 
  public get customBgColor() {
    return this.getStringAttribute('custom_bg_color');
  }
  public set customBgColor(value: string) {
    this._customBgColor = value;
  }
  public resetCustomBgColor() {
    this._customBgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBgColorInput() {
    return this._customBgColor;
  }

  // custom_fg_color - computed: false, optional: true, required: false
  private _customFgColor?: string; 
  public get customFgColor() {
    return this.getStringAttribute('custom_fg_color');
  }
  public set customFgColor(value: string) {
    this._customFgColor = value;
  }
  public resetCustomFgColor() {
    this._customFgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFgColorInput() {
    return this._customFgColor;
  }

  // hide_value - computed: false, optional: true, required: false
  private _hideValue?: boolean | cdktn.IResolvable; 
  public get hideValue() {
    return this.getBooleanAttribute('hide_value');
  }
  public set hideValue(value: boolean | cdktn.IResolvable) {
    this._hideValue = value;
  }
  public resetHideValue() {
    this._hideValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideValueInput() {
    return this._hideValue;
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
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

  // palette - computed: false, optional: false, required: true
  private _palette?: string; 
  public get palette() {
    return this.getStringAttribute('palette');
  }
  public set palette(value: string) {
    this._palette = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteInput() {
    return this._palette;
  }

  // timeframe - computed: false, optional: true, required: false
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  public resetTimeframe() {
    this._timeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit {
  /**
  * The number of results to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#count PowerpackV2#count}
  */
  readonly count?: number;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`. Defaults to `"desc"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._order = value.order;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonical {
  /**
  * per unit name. If you want to represent megabytes/s, you set 'unit_name' = 'megabyte' and 'per_unit_name = 'second'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#per_unit_name PowerpackV2#per_unit_name}
  */
  readonly perUnitName?: string;
  /**
  * Unit name. It should be in singular form ('megabyte' and not 'megabytes')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#unit_name PowerpackV2#unit_name}
  */
  readonly unitName?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonicalToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonicalOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonical): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    per_unit_name: cdktn.stringToTerraform(struct!.perUnitName),
    unit_name: cdktn.stringToTerraform(struct!.unitName),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonicalToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonicalOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonical): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    per_unit_name: {
      value: cdktn.stringToHclTerraform(struct!.perUnitName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_name: {
      value: cdktn.stringToHclTerraform(struct!.unitName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonicalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perUnitName !== undefined) {
      hasAnyValues = true;
      internalValueResult.perUnitName = this._perUnitName;
    }
    if (this._unitName !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitName = this._unitName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perUnitName = undefined;
      this._unitName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perUnitName = value.perUnitName;
      this._unitName = value.unitName;
    }
  }

  // per_unit_name - computed: false, optional: true, required: false
  private _perUnitName?: string; 
  public get perUnitName() {
    return this.getStringAttribute('per_unit_name');
  }
  public set perUnitName(value: string) {
    this._perUnitName = value;
  }
  public resetPerUnitName() {
    this._perUnitName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perUnitNameInput() {
    return this._perUnitName;
  }

  // unit_name - computed: false, optional: true, required: false
  private _unitName?: string; 
  public get unitName() {
    return this.getStringAttribute('unit_name');
  }
  public set unitName(value: string) {
    this._unitName = value;
  }
  public resetUnitName() {
    this._unitName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNameInput() {
    return this._unitName;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustom {
  /**
  * Unit label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#label PowerpackV2#label}
  */
  readonly label: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustomToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustomOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustomToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustomOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnit {
  /**
  * canonical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#canonical PowerpackV2#canonical}
  */
  readonly canonical?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonical;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#custom PowerpackV2#custom}
  */
  readonly custom?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustom;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    canonical: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonicalToTerraform(struct!.canonical),
    custom: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustomToTerraform(struct!.custom),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    canonical: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonicalToHclTerraform(struct!.canonical),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonicalList",
    },
    custom: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canonical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canonical = this._canonical?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canonical.internalValue = undefined;
      this._custom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canonical.internalValue = value.canonical;
      this._custom.internalValue = value.custom;
    }
  }

  // canonical - computed: false, optional: true, required: false
  private _canonical = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonicalOutputReference(this, "canonical");
  public get canonical() {
    return this._canonical;
  }
  public putCanonical(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCanonical) {
    this._canonical.internalValue = value;
  }
  public resetCanonical() {
    this._canonical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalInput() {
    return this._canonical.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScale {
  /**
  * The name of the unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#unit_name PowerpackV2#unit_name}
  */
  readonly unitName: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScaleToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScaleOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit_name: cdktn.stringToTerraform(struct!.unitName),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScaleToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScaleOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit_name: {
      value: cdktn.stringToHclTerraform(struct!.unitName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unitName !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitName = this._unitName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unitName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unitName = value.unitName;
    }
  }

  // unit_name - computed: false, optional: false, required: true
  private _unitName?: string; 
  public get unitName() {
    return this.getStringAttribute('unit_name');
  }
  public set unitName(value: string) {
    this._unitName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNameInput() {
    return this._unitName;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormat {
  /**
  * unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#unit PowerpackV2#unit}
  */
  readonly unit: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnit;
  /**
  * unit_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#unit_scale PowerpackV2#unit_scale}
  */
  readonly unitScale?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScale;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitToTerraform(struct!.unit),
    unit_scale: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScaleToTerraform(struct!.unitScale),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitToHclTerraform(struct!.unit),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitList",
    },
    unit_scale: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScaleToHclTerraform(struct!.unitScale),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit?.internalValue;
    }
    if (this._unitScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitScale = this._unitScale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit.internalValue = undefined;
      this._unitScale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit.internalValue = value.unit;
      this._unitScale.internalValue = value.unitScale;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitOutputReference(this, "unit");
  public get unit() {
    return this._unit;
  }
  public putUnit(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnit) {
    this._unit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit.internalValue;
  }

  // unit_scale - computed: false, optional: true, required: false
  private _unitScale = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScaleOutputReference(this, "unit_scale");
  public get unitScale() {
    return this._unitScale;
  }
  public putUnitScale(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatUnitScale) {
    this._unitScale.internalValue = value;
  }
  public resetUnitScale() {
    this._unitScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitScaleInput() {
    return this._unitScale.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle {
  /**
  * The color palette used to display the formula. A guide to the available color palettes can be found at https://docs.datadoghq.com/dashboards/guide/widget_colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette?: string;
  /**
  * Index specifying which color to use within the palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#palette_index PowerpackV2#palette_index}
  */
  readonly paletteIndex?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    palette: cdktn.stringToTerraform(struct!.palette),
    palette_index: cdktn.numberToTerraform(struct!.paletteIndex),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    palette: {
      value: cdktn.stringToHclTerraform(struct!.palette),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    palette_index: {
      value: cdktn.numberToHclTerraform(struct!.paletteIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    if (this._paletteIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.paletteIndex = this._paletteIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._palette = undefined;
      this._paletteIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._palette = value.palette;
      this._paletteIndex = value.paletteIndex;
    }
  }

  // palette - computed: false, optional: true, required: false
  private _palette?: string; 
  public get palette() {
    return this.getStringAttribute('palette');
  }
  public set palette(value: string) {
    this._palette = value;
  }
  public resetPalette() {
    this._palette = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteInput() {
    return this._palette;
  }

  // palette_index - computed: false, optional: true, required: false
  private _paletteIndex?: number; 
  public get paletteIndex() {
    return this.getNumberAttribute('palette_index');
  }
  public set paletteIndex(value: number) {
    this._paletteIndex = value;
  }
  public resetPaletteIndex() {
    this._paletteIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteIndexInput() {
    return this._paletteIndex;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormula {
  /**
  * An expression alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#alias PowerpackV2#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. Valid values are `number`, `bar`, and `trend`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cell_display_mode PowerpackV2#cell_display_mode}
  */
  readonly cellDisplayMode?: string;
  /**
  * A string expression built from queries, formulas, and functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#formula_expression PowerpackV2#formula_expression}
  */
  readonly formulaExpression: string;
  /**
  * cell_display_mode_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cell_display_mode_options PowerpackV2#cell_display_mode_options}
  */
  readonly cellDisplayModeOptions?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptions;
  /**
  * conditional_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#conditional_formats PowerpackV2#conditional_formats}
  */
  readonly conditionalFormats?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats[] | cdktn.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit;
  /**
  * number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#number_format PowerpackV2#number_format}
  */
  readonly numberFormat?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormat;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#style PowerpackV2#style}
  */
  readonly style?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormula | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    cell_display_mode: cdktn.stringToTerraform(struct!.cellDisplayMode),
    formula_expression: cdktn.stringToTerraform(struct!.formulaExpression),
    cell_display_mode_options: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptionsToTerraform(struct!.cellDisplayModeOptions),
    conditional_formats: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsToTerraform, true)(struct!.conditionalFormats),
    limit: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitToTerraform(struct!.limit),
    number_format: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatToTerraform(struct!.numberFormat),
    style: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleToTerraform(struct!.style),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormula | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cell_display_mode: {
      value: cdktn.stringToHclTerraform(struct!.cellDisplayMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formula_expression: {
      value: cdktn.stringToHclTerraform(struct!.formulaExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cell_display_mode_options: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptionsToHclTerraform(struct!.cellDisplayModeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptionsList",
    },
    conditional_formats: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsToHclTerraform, true)(struct!.conditionalFormats),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsList",
    },
    limit: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitToHclTerraform(struct!.limit),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitList",
    },
    number_format: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatToHclTerraform(struct!.numberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatList",
    },
    style: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormula | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._cellDisplayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellDisplayMode = this._cellDisplayMode;
    }
    if (this._formulaExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.formulaExpression = this._formulaExpression;
    }
    if (this._cellDisplayModeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellDisplayModeOptions = this._cellDisplayModeOptions?.internalValue;
    }
    if (this._conditionalFormats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalFormats = this._conditionalFormats?.internalValue;
    }
    if (this._limit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit?.internalValue;
    }
    if (this._numberFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberFormat = this._numberFormat?.internalValue;
    }
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormula | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._cellDisplayMode = undefined;
      this._formulaExpression = undefined;
      this._cellDisplayModeOptions.internalValue = undefined;
      this._conditionalFormats.internalValue = undefined;
      this._limit.internalValue = undefined;
      this._numberFormat.internalValue = undefined;
      this._style.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._cellDisplayMode = value.cellDisplayMode;
      this._formulaExpression = value.formulaExpression;
      this._cellDisplayModeOptions.internalValue = value.cellDisplayModeOptions;
      this._conditionalFormats.internalValue = value.conditionalFormats;
      this._limit.internalValue = value.limit;
      this._numberFormat.internalValue = value.numberFormat;
      this._style.internalValue = value.style;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // cell_display_mode - computed: false, optional: true, required: false
  private _cellDisplayMode?: string; 
  public get cellDisplayMode() {
    return this.getStringAttribute('cell_display_mode');
  }
  public set cellDisplayMode(value: string) {
    this._cellDisplayMode = value;
  }
  public resetCellDisplayMode() {
    this._cellDisplayMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellDisplayModeInput() {
    return this._cellDisplayMode;
  }

  // formula_expression - computed: false, optional: false, required: true
  private _formulaExpression?: string; 
  public get formulaExpression() {
    return this.getStringAttribute('formula_expression');
  }
  public set formulaExpression(value: string) {
    this._formulaExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaExpressionInput() {
    return this._formulaExpression;
  }

  // cell_display_mode_options - computed: false, optional: true, required: false
  private _cellDisplayModeOptions = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptionsOutputReference(this, "cell_display_mode_options");
  public get cellDisplayModeOptions() {
    return this._cellDisplayModeOptions;
  }
  public putCellDisplayModeOptions(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaCellDisplayModeOptions) {
    this._cellDisplayModeOptions.internalValue = value;
  }
  public resetCellDisplayModeOptions() {
    this._cellDisplayModeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellDisplayModeOptionsInput() {
    return this._cellDisplayModeOptions.internalValue;
  }

  // conditional_formats - computed: false, optional: true, required: false
  private _conditionalFormats = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats[] | cdktn.IResolvable) {
    this._conditionalFormats.internalValue = value;
  }
  public resetConditionalFormats() {
    this._conditionalFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalFormatsInput() {
    return this._conditionalFormats.internalValue;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // number_format - computed: false, optional: true, required: false
  private _numberFormat = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormatOutputReference(this, "number_format");
  public get numberFormat() {
    return this._numberFormat;
  }
  public putNumberFormat(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaNumberFormat) {
    this._numberFormat.internalValue = value;
  }
  public resetNumberFormat() {
    this._numberFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberFormatInput() {
    return this._numberFormat.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle) {
    this._style.internalValue = value;
  }
  public resetStyle() {
    this._style.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormula[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    facet: cdktn.stringToTerraform(struct!.facet),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable): any {
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
    facet: {
      value: cdktn.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_query: {
      value: cdktn.stringToHclTerraform(struct!.searchQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_query: {
      value: powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute[] | cdktn.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQuery {
  /**
  * A list of processes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#filter_by PowerpackV2#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search_by PowerpackV2#search_by}
  */
  readonly searchBy?: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.filterBy),
    limit: cdktn.numberToTerraform(struct!.limit),
    metric: cdktn.stringToTerraform(struct!.metric),
    search_by: cdktn.stringToTerraform(struct!.searchBy),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_by: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.filterBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_by: {
      value: cdktn.stringToHclTerraform(struct!.searchBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterBy = this._filterBy;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._searchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBy = this._searchBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterBy = undefined;
      this._limit = undefined;
      this._metric = undefined;
      this._searchBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterBy = value.filterBy;
      this._limit = value.limit;
      this._metric = value.metric;
      this._searchBy = value.searchBy;
    }
  }

  // filter_by - computed: false, optional: true, required: false
  private _filterBy?: string[]; 
  public get filterBy() {
    return this.getListAttribute('filter_by');
  }
  public set filterBy(value: string[]) {
    this._filterBy = value;
  }
  public resetFilterBy() {
    this._filterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // search_by - computed: false, optional: true, required: false
  private _searchBy?: string; 
  public get searchBy() {
    return this.getStringAttribute('search_by');
  }
  public set searchBy(value: string) {
    this._searchBy = value;
  }
  public resetSearchBy() {
    this._searchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchByInput() {
    return this._searchBy;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for APM Dependency Stats queries. Valid values are `apm_dependency_stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * APM environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#env PowerpackV2#env}
  */
  readonly env: string;
  /**
  * Determines whether stats for upstream or downstream dependencies should be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#is_upstream PowerpackV2#is_upstream}
  */
  readonly isUpstream?: boolean | cdktn.IResolvable;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#operation_name PowerpackV2#operation_name}
  */
  readonly operationName: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#primary_tag_name PowerpackV2#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#primary_tag_value PowerpackV2#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#resource_name PowerpackV2#resource_name}
  */
  readonly resourceName: string;
  /**
  * APM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#service PowerpackV2#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `avg_duration`, `avg_root_duration`, `avg_spans_per_trace`, `error_rate`, `pct_exec_time`, `pct_of_traces`, `total_traces_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#stat PowerpackV2#stat}
  */
  readonly stat: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_org_uuids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    env: cdktn.stringToTerraform(struct!.env),
    is_upstream: cdktn.booleanToTerraform(struct!.isUpstream),
    name: cdktn.stringToTerraform(struct!.name),
    operation_name: cdktn.stringToTerraform(struct!.operationName),
    primary_tag_name: cdktn.stringToTerraform(struct!.primaryTagName),
    primary_tag_value: cdktn.stringToTerraform(struct!.primaryTagValue),
    resource_name: cdktn.stringToTerraform(struct!.resourceName),
    service: cdktn.stringToTerraform(struct!.service),
    stat: cdktn.stringToTerraform(struct!.stat),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_org_uuids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktn.stringToHclTerraform(struct!.env),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_upstream: {
      value: cdktn.booleanToHclTerraform(struct!.isUpstream),
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
    operation_name: {
      value: cdktn.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_tag_name: {
      value: cdktn.stringToHclTerraform(struct!.primaryTagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_tag_value: {
      value: cdktn.stringToHclTerraform(struct!.primaryTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktn.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat: {
      value: cdktn.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._isUpstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpstream = this._isUpstream;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._primaryTagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagName = this._primaryTagName;
    }
    if (this._primaryTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagValue = this._primaryTagValue;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._env = undefined;
      this._isUpstream = undefined;
      this._name = undefined;
      this._operationName = undefined;
      this._primaryTagName = undefined;
      this._primaryTagValue = undefined;
      this._resourceName = undefined;
      this._service = undefined;
      this._stat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._env = value.env;
      this._isUpstream = value.isUpstream;
      this._name = value.name;
      this._operationName = value.operationName;
      this._primaryTagName = value.primaryTagName;
      this._primaryTagValue = value.primaryTagValue;
      this._resourceName = value.resourceName;
      this._service = value.service;
      this._stat = value.stat;
    }
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // env - computed: false, optional: false, required: true
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // is_upstream - computed: false, optional: true, required: false
  private _isUpstream?: boolean | cdktn.IResolvable; 
  public get isUpstream() {
    return this.getBooleanAttribute('is_upstream');
  }
  public set isUpstream(value: boolean | cdktn.IResolvable) {
    this._isUpstream = value;
  }
  public resetIsUpstream() {
    this._isUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpstreamInput() {
    return this._isUpstream;
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

  // operation_name - computed: false, optional: false, required: true
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // primary_tag_name - computed: false, optional: true, required: false
  private _primaryTagName?: string; 
  public get primaryTagName() {
    return this.getStringAttribute('primary_tag_name');
  }
  public set primaryTagName(value: string) {
    this._primaryTagName = value;
  }
  public resetPrimaryTagName() {
    this._primaryTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagNameInput() {
    return this._primaryTagName;
  }

  // primary_tag_value - computed: false, optional: true, required: false
  private _primaryTagValue?: string; 
  public get primaryTagValue() {
    return this.getStringAttribute('primary_tag_value');
  }
  public set primaryTagValue(value: string) {
    this._primaryTagValue = value;
  }
  public resetPrimaryTagValue() {
    this._primaryTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagValueInput() {
    return this._primaryTagValue;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }
}
export interface PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmMetricsQuery {
  /**
  * The data source for APM metrics queries. Valid values are `apm_metrics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Optional fields to group the query results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Name of this query to use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Optional operation mode used to aggregate across operation names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#operation_mode PowerpackV2#operation_mode}
  */
  readonly operationMode?: string;
  /**
  * Name of the operation on the service. If omitted, the primary operation name is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#operation_name PowerpackV2#operation_name}
  */
  readonly operationName?: string;
  /**
  * Tags to query for a specific downstream entity, such as `peer.service` or `peer.db_instance`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#peer_tags PowerpackV2#peer_tags}
  */
  readonly peerTags?: string[];
  /**
  * Additional filters for the query using metrics query syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query_filter PowerpackV2#query_filter}
  */
  readonly queryFilter?: string;
  /**
  * The hash of a specific resource to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#resource_hash PowerpackV2#resource_hash}
  */
  readonly resourceHash?: string;
  /**
  * The full name of a specific resource to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#resource_name PowerpackV2#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#service PowerpackV2#service}
  */
  readonly service?: string;
  /**
  * The relationship between the span, its parents, and its children in a trace. Valid values are `consumer`, `server`, `client`, `producer`, `internal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#span_kind PowerpackV2#span_kind}
  */
  readonly spanKind?: string;
  /**
  * APM metric stat name. Valid values are `errors`, `error_rate`, `errors_per_second`, `latency_avg`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`, `latency_p999`, `latency_distribution`, `hits`, `hits_per_second`, `total_time`, `apdex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#stat PowerpackV2#stat}
  */
  readonly stat: string;
}

export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmMetricsQueryToTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmMetricsQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmMetricsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    group_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupBy),
    name: cdktn.stringToTerraform(struct!.name),
    operation_mode: cdktn.stringToTerraform(struct!.operationMode),
    operation_name: cdktn.stringToTerraform(struct!.operationName),
    peer_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.peerTags),
    query_filter: cdktn.stringToTerraform(struct!.queryFilter),
    resource_hash: cdktn.stringToTerraform(struct!.resourceHash),
    resource_name: cdktn.stringToTerraform(struct!.resourceName),
    service: cdktn.stringToTerraform(struct!.service),
    span_kind: cdktn.stringToTerraform(struct!.spanKind),
    stat: cdktn.stringToTerraform(struct!.stat),
  }
}


export function powerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmMetricsQueryToHclTerraform(struct?: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmMetricsQueryOutputReference | PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmMetricsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupBy),
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
    operation_mode: {
      value: cdktn.stringToHclTerraform(struct!.operationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_name: {
      value: cdktn.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.peerTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_filter: {
      value: cdktn.stringToHclTerraform(struct!.queryFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_hash: {
      value: cdktn.stringToHclTerraform(struct!.resourceHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktn.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    span_kind: {
      value: cdktn.stringToHclTerraform(struct!.spanKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat: {
      value: cdktn.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmMetricsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmMetricsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationMode = this._operationMode;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._peerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerTags = this._peerTags;
    }
    if (this._queryFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFilter = this._queryFilter;
    }
    if (this._resourceHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceHash = this._resourceHash;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._spanKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanKind = this._spanKind;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmMetricsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._groupBy = undefined;
      this._name = undefined;
      this._operationMode = undefined;
      this._operationName = undefined;
      this._peerTags = undefined;
      this._queryFilter = undefined;
      this._resourceHash = undefined;
      this._resourceName = undefined;
      this._service = undefined;
      this._spanKind = undefined;
      this._stat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._groupBy = value.groupBy;
      this._name = value.name;
      this._operationMode = value.operationMode;
      this._operationName = value.operationName;
      this._peerTags = value.peerTags;
      this._queryFilter = value.queryFilter;
      this._resourceHash = value.resourceHash;
      this._resourceName = value.resourceName;
      this._service = value.service;
      this._spanKind = value.spanKind;
      this._stat = value.stat;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // operation_mode - computed: false, optional: true, required: false
  private _operationMode?: string; 
  public get operationMode() {
    return this.getStringAttribute('operation_mode');
  }
  public set operationMode(value: string) {
    this._operationMode = value;
  }
  public resetOperationMode() {
    this._operationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationModeInput() {
    return this._operationMode;
  }

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // peer_tags - computed: false, optional: true, required: false
  private _peerTags?: string[]; 
  public get peerTags() {
    return this.getListAttribute('peer_tags');
  }
  public set peerTags(value: string[]) {
    this._peerTags = value;
  }
  public resetPeerTags() {
    this._peerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTagsInput() {
    return this._peerTags;
  }

  // query_filter - computed: false, optional: true, required: false
  private _queryFilter?: string; 
  public get queryFilter() {
    return this.getStringAttribute('query_filter');
  }
  public set queryFilter(value: string) {
    this._queryFilter = value;
  }
  public resetQueryFilter() {
    this._queryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFilterInput() {
    return this._queryFilter;
  }

  // resource_hash - computed: false, optional: true, required: false
  private _resourceHash?: string; 
  public get resourceHash() {
    return this.getStringAttribute('resource_hash');
  }
  public set resourceHash(value: string) {
    this._resourceHash = value;
  }
  public resetResourceHash() {
    this._resourceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceHashInput() {
    return this._resourceHash;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // span_kind - computed: false, optional: true, required: false
  private _spanKind?: string; 
  public get spanKind() {
    return this.getStringAttribute('span_kind');
  }
  public set spanKind(value: string) {
    this._spanKind = value;
  }
  public resetSpanKind() {
    this._spanKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanKindInput() {
    return this._spanKind;
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }
}
