/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryAudienceFilters,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryAudienceFiltersToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryAudienceFiltersToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryCompute,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryComputeToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryComputeToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryComputeOutputReference,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmDependencyStatsQuery,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmDependencyStatsQueryToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmDependencyStatsQueryToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmDependencyStatsQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmMetricsQuery,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmMetricsQueryToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmMetricsQueryToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmMetricsQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmResourceStatsQuery,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmResourceStatsQueryToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmResourceStatsQueryToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmResourceStatsQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryCloudCostQuery,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryCloudCostQueryToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryCloudCostQueryToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryCloudCostQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryEventQuery,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryEventQueryToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryEventQueryToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryEventQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryMetricQuery,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryMetricQueryToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryMetricQueryToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryMetricQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProcessQuery,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProcessQueryToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProcessQueryToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProcessQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXApmQuery,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXApmQueryToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXApmQueryToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXApmQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXFormula,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXFormulaToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXFormulaToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXFormulaList,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXLogQuery,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXLogQueryToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXLogQueryToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXLogQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXProcessQuery,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXProcessQueryToTerraform,
dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXProcessQueryToHclTerraform,
DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXProcessQueryOutputReference } from './structs5600';
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySortToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySort): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySortToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySort): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySort | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBy {
  /**
  * Facet name to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet: string;
  /**
  * Maximum number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Whether to exclude events missing the group-by facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#should_exclude_missing Dashboard#should_exclude_missing}
  */
  readonly shouldExcludeMissing?: boolean | cdktn.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySort;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    sort: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupByToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBySort) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearchToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearchToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearch): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearch | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuery {
  /**
  * Data source for the Product Analytics event query. Valid values are `product_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearch;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuery | undefined) {
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
  private _search = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQuery {
  /**
  * Data source for Product Analytics Extended queries. Valid values are `product_analytics_extended`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Event indexes to query. Use `*` to query all indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#indexes Dashboard#indexes}
  */
  readonly indexes?: string[];
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * audience_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#audience_filters Dashboard#audience_filters}
  */
  readonly audienceFilters?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryAudienceFilters;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute Dashboard#compute}
  */
  readonly compute: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuery;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    name: cdktn.stringToTerraform(struct!.name),
    audience_filters: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryAudienceFiltersToTerraform(struct!.audienceFilters),
    compute: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupByToTerraform, true)(struct!.groupBy),
    query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQueryToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryAudienceFiltersList",
    },
    compute: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupByList",
    },
    query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQuery | undefined) {
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
  private _audienceFilters = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryAudienceFilters) {
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
  private _compute = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable) {
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
  private _query = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryCompute {
  /**
  * Aggregation for the retention query, including standard event aggregations and `pcNN` percentiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * Metric for the retention computation. Valid values are `__dd.retention`, `__dd.retention_rate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryComputeOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryComputeToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryComputeOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryCompute): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryCompute | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryCompute | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySort {
  /**
  * Sort order for retention group by results. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySortToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySortToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySort): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySort | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBy {
  /**
  * Facet to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet: string;
  /**
  * Maximum number of groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Whether to exclude missing values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#should_exclude_missing Dashboard#should_exclude_missing}
  */
  readonly shouldExcludeMissing?: boolean | cdktn.IResolvable;
  /**
  * Source field for the retention group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#source Dashboard#source}
  */
  readonly source?: string;
  /**
  * Target for the retention group by. Valid values are `cohort`, `return_period`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#target Dashboard#target}
  */
  readonly target: string;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySort;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBy | cdktn.IResolvable): any {
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
    sort: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupByToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBySort) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuery {
  /**
  * Data source for the Product Analytics event query. Valid values are `product_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuery | undefined) {
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
  private _search = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue {
  /**
  * Alignment of the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#alignment Dashboard#alignment}
  */
  readonly alignment?: string;
  /**
  * Quantity of the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#quantity Dashboard#quantity}
  */
  readonly quantity?: number;
  /**
  * Timezone for the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#timezone Dashboard#timezone}
  */
  readonly timezone?: string;
  /**
  * Type of calendar interval. Valid values are `day`, `week`, `month`, `year`, `quarter`, `minute`, `hour`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeInterval {
  /**
  * Type of cohort time interval. Valid values are `calendar`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToTerraform(struct!.value),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeInterval): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeInterval | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeInterval | undefined) {
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
  private _value = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteria {
  /**
  * base_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#base_query Dashboard#base_query}
  */
  readonly baseQuery: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuery;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#time_interval Dashboard#time_interval}
  */
  readonly timeInterval: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeInterval;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQueryToTerraform(struct!.baseQuery),
    time_interval: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQueryToHclTerraform(struct!.baseQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQueryList",
    },
    time_interval: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteria | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteria | undefined) {
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
  private _baseQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference(this, "base_query");
  public get baseQuery() {
    return this._baseQuery;
  }
  public putBaseQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaBaseQuery) {
    this._baseQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueryInput() {
    return this._baseQuery.internalValue;
  }

  // time_interval - computed: false, optional: false, required: true
  private _timeInterval = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccount {
  /**
  * The name of the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The query string for the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegment {
  /**
  * The name of the segment subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The unique identifier of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment_id Dashboard#segment_id}
  */
  readonly segmentId?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUser {
  /**
  * The name of the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The query string for the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFilters {
  /**
  * An optional filter condition applied to the audience subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#filter_condition Dashboard#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#account Dashboard#account}
  */
  readonly account?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment Dashboard#segment}
  */
  readonly segment?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#user Dashboard#user}
  */
  readonly user?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFilters): any {
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
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFilters | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFilters | undefined) {
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
  private _account = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFilters {
  /**
  * String filter for the retention query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#string_filter Dashboard#string_filter}
  */
  readonly stringFilter?: string;
  /**
  * audience_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#audience_filters Dashboard#audience_filters}
  */
  readonly audienceFilters?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFilters;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFilters): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFilters | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFilters | undefined) {
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
  private _audienceFilters = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersAudienceFilters) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuery {
  /**
  * Data source for the Product Analytics event query. Valid values are `product_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined) {
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
  private _search = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeInterval {
  /**
  * Type of return interval. Valid values are `fixed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * Unit of the return interval. Valid values are `day`, `week`, `month`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#unit Dashboard#unit}
  */
  readonly unit: string;
  /**
  * Value of the return interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteria {
  /**
  * base_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#base_query Dashboard#base_query}
  */
  readonly baseQuery: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuery;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#time_interval Dashboard#time_interval}
  */
  readonly timeInterval?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeInterval;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct!.baseQuery),
    time_interval: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct!.baseQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQueryList",
    },
    time_interval: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteria | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteria | undefined) {
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
  private _baseQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference(this, "base_query");
  public get baseQuery() {
    return this._baseQuery;
  }
  public putBaseQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaBaseQuery) {
    this._baseQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueryInput() {
    return this._baseQuery.internalValue;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaTimeInterval) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearch {
  /**
  * Entity tracked for retention. Valid values are `@usr.id`, `@account.id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#retention_entity Dashboard#retention_entity}
  */
  readonly retentionEntity: string;
  /**
  * Condition for counting an entity as returned. Valid values are `conversion_on`, `conversion_on_or_after`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#return_condition Dashboard#return_condition}
  */
  readonly returnCondition: string;
  /**
  * cohort_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cohort_criteria Dashboard#cohort_criteria}
  */
  readonly cohortCriteria: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteria;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#filters Dashboard#filters}
  */
  readonly filters?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFilters;
  /**
  * return_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#return_criteria Dashboard#return_criteria}
  */
  readonly returnCriteria?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteria;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retention_entity: cdktn.stringToTerraform(struct!.retentionEntity),
    return_condition: cdktn.stringToTerraform(struct!.returnCondition),
    cohort_criteria: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaToTerraform(struct!.cohortCriteria),
    filters: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersToTerraform(struct!.filters),
    return_criteria: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaToTerraform(struct!.returnCriteria),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearch): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaToHclTerraform(struct!.cohortCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaList",
    },
    filters: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersList",
    },
    return_criteria: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct!.returnCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearch | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearch | undefined) {
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
  private _cohortCriteria = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteriaOutputReference(this, "cohort_criteria");
  public get cohortCriteria() {
    return this._cohortCriteria;
  }
  public putCohortCriteria(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchCohortCriteria) {
    this._cohortCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortCriteriaInput() {
    return this._cohortCriteria.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchFilters) {
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
  private _returnCriteria = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteriaOutputReference(this, "return_criteria");
  public get returnCriteria() {
    return this._returnCriteria;
  }
  public putReturnCriteria(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchReturnCriteria) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuery {
  /**
  * Data source for retention queries. Valid values are `product_analytics_retention`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute Dashboard#compute}
  */
  readonly compute: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearch;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    compute: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupByToTerraform, true)(struct!.groupBy),
    search: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupByList",
    },
    search: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuery | undefined) {
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
  private _compute = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQuery {
  /**
  * Additional filters applied to the SLO query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#additional_query_filters Dashboard#additional_query_filters}
  */
  readonly additionalQueryFilters?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cross_org_uuids Dashboard#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for SLO queries. Valid values are `slo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Group mode to query measures. Valid values are `overall`, `components`. Defaults to `"overall"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_mode Dashboard#group_mode}
  */
  readonly groupMode?: string;
  /**
  * SLO measures queries. Valid values are `good_events`, `bad_events`, `good_minutes`, `bad_minutes`, `slo_status`, `error_budget_remaining`, `burn_rate`, `error_budget_burndown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#measure Dashboard#measure}
  */
  readonly measure: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * ID of an SLO to query measures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#slo_id Dashboard#slo_id}
  */
  readonly sloId: string;
  /**
  * type of the SLO to query. Valid values are `metric`, `monitor`, `time_slice`. Defaults to `"metric"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#slo_query_type Dashboard#slo_query_type}
  */
  readonly sloQueryType?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTarget {
  /**
  * End node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#end Dashboard#end}
  */
  readonly end?: string;
  /**
  * Start node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#start Dashboard#start}
  */
  readonly start?: string;
  /**
  * Target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * Target node value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTargetToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTargetOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTarget): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTargetToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTargetOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTarget): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTarget | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTarget | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryCompute {
  /**
  * Aggregation method for the User Journey query. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * Time bucket interval in milliseconds for timeseries queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
  /**
  * Metric for the User Journey computation. Valid values are `__dd.conversion`, `__dd.conversion_rate`, `__dd.time_to_convert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#target Dashboard#target}
  */
  readonly target?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTarget;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    target: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTargetToTerraform(struct!.target),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryCompute): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryCompute | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryCompute | undefined) {
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
  private _target = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeTarget) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySortToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySort): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySortToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySort): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySort | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTarget {
  /**
  * End node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#end Dashboard#end}
  */
  readonly end?: string;
  /**
  * Start node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#start Dashboard#start}
  */
  readonly start?: string;
  /**
  * Target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * Target node value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTargetToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTargetOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTarget): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTargetToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTargetOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTarget): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTarget | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTarget | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBy {
  /**
  * Facet name to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet: string;
  /**
  * Maximum number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Whether to exclude events missing the group-by facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#should_exclude_missing Dashboard#should_exclude_missing}
  */
  readonly shouldExcludeMissing?: boolean | cdktn.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySort;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#target Dashboard#target}
  */
  readonly target?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTarget;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    sort: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySortToTerraform(struct!.sort),
    target: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTargetToTerraform(struct!.target),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySortList",
    },
    target: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBySort) {
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
  private _target = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByTarget) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount {
  /**
  * The name of the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The query string for the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment {
  /**
  * The name of the segment subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The unique identifier of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment_id Dashboard#segment_id}
  */
  readonly segmentId?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUser {
  /**
  * The name of the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The query string for the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFilters {
  /**
  * An optional filter condition applied to the audience subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#filter_condition Dashboard#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#account Dashboard#account}
  */
  readonly account?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment Dashboard#segment}
  */
  readonly segment?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#user Dashboard#user}
  */
  readonly user?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFilters): any {
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
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFilters | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFilters | undefined) {
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
  private _account = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTarget {
  /**
  * End node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#end Dashboard#end}
  */
  readonly end?: string;
  /**
  * Start node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#start Dashboard#start}
  */
  readonly start?: string;
  /**
  * Target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * Target node value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTargetToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTarget): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTargetToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTarget): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTarget | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTarget | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilter {
  /**
  * Graph filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * Graph filter operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#operator Dashboard#operator}
  */
  readonly operator?: string;
  /**
  * Graph filter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value?: number;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#target Dashboard#target}
  */
  readonly target?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTarget;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
    target: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTargetToTerraform(struct!.target),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined) {
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
  private _target = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterTarget) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFilters {
  /**
  * String filter for the user journey search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#string_filter Dashboard#string_filter}
  */
  readonly stringFilter?: string;
  /**
  * audience_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#audience_filters Dashboard#audience_filters}
  */
  readonly audienceFilters?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFilters;
  /**
  * graph_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#graph_filter Dashboard#graph_filter}
  */
  readonly graphFilter?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
    graph_filter: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterToTerraform, true)(struct!.graphFilter),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFilters): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersList",
    },
    graph_filter: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterToHclTerraform, true)(struct!.graphFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFilters | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFilters | undefined) {
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
  private _audienceFilters = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersAudienceFilters) {
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
  private _graphFilter = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilterList(this, "graph_filter", false);
  public get graphFilter() {
    return this._graphFilter;
  }
  public putGraphFilter(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeys {
  /**
  * Primary join key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#primary Dashboard#primary}
  */
  readonly primary: string;
  /**
  * Secondary join keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#secondary Dashboard#secondary}
  */
  readonly secondary?: string[];
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeysToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeysOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary: cdktn.stringToTerraform(struct!.primary),
    secondary: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.secondary),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeysToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeysOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeys): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeysOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeys | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeys | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearch {
  /**
  * Expression describing the journey between nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#expression Dashboard#expression}
  */
  readonly expression: string;
  /**
  * JSON object mapping journey node names to Product Analytics base queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#node_objects Dashboard#node_objects}
  */
  readonly nodeObjects: string;
  /**
  * JSON object mapping journey step names to display aliases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#step_aliases Dashboard#step_aliases}
  */
  readonly stepAliases?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#filters Dashboard#filters}
  */
  readonly filters?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFilters;
  /**
  * join_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#join_keys Dashboard#join_keys}
  */
  readonly joinKeys?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeys;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    node_objects: cdktn.stringToTerraform(struct!.nodeObjects),
    step_aliases: cdktn.stringToTerraform(struct!.stepAliases),
    filters: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersToTerraform(struct!.filters),
    join_keys: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeysToTerraform(struct!.joinKeys),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearch): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersList",
    },
    join_keys: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeysToHclTerraform(struct!.joinKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearch | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearch | undefined) {
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
  private _filters = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchFilters) {
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
  private _joinKeys = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeysOutputReference(this, "join_keys");
  public get joinKeys() {
    return this._joinKeys;
  }
  public putJoinKeys(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchJoinKeys) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuery {
  /**
  * Data source for User Journey queries. Valid values are `product_analytics_journey`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute Dashboard#compute}
  */
  readonly compute: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearch;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    compute: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByToTerraform, true)(struct!.groupBy),
    search: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByList",
    },
    search: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuery | undefined) {
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
  private _compute = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuery {
  /**
  * apm_dependency_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#apm_dependency_stats_query Dashboard#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmDependencyStatsQuery;
  /**
  * apm_metrics_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#apm_metrics_query Dashboard#apm_metrics_query}
  */
  readonly apmMetricsQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmMetricsQuery;
  /**
  * apm_resource_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#apm_resource_stats_query Dashboard#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmResourceStatsQuery;
  /**
  * cloud_cost_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cloud_cost_query Dashboard#cloud_cost_query}
  */
  readonly cloudCostQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryCloudCostQuery;
  /**
  * event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#event_query Dashboard#event_query}
  */
  readonly eventQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryEventQuery;
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric_query Dashboard#metric_query}
  */
  readonly metricQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryMetricQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProcessQuery;
  /**
  * product_analytics_extended_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#product_analytics_extended_query Dashboard#product_analytics_extended_query}
  */
  readonly productAnalyticsExtendedQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQuery;
  /**
  * retention_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#retention_query Dashboard#retention_query}
  */
  readonly retentionQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuery;
  /**
  * slo_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#slo_query Dashboard#slo_query}
  */
  readonly sloQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQuery;
  /**
  * user_journey_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#user_journey_query Dashboard#user_journey_query}
  */
  readonly userJourneyQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuery;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    apm_dependency_stats_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_metrics_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmMetricsQueryToTerraform(struct!.apmMetricsQuery),
    apm_resource_stats_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    cloud_cost_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryCloudCostQueryToTerraform(struct!.cloudCostQuery),
    event_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProcessQueryToTerraform(struct!.processQuery),
    product_analytics_extended_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryToTerraform(struct!.productAnalyticsExtendedQuery),
    retention_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryToTerraform(struct!.retentionQuery),
    slo_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQueryToTerraform(struct!.sloQuery),
    user_journey_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryToTerraform(struct!.userJourneyQuery),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    apm_dependency_stats_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmDependencyStatsQueryToHclTerraform(struct!.apmDependencyStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmDependencyStatsQueryList",
    },
    apm_metrics_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmMetricsQueryToHclTerraform(struct!.apmMetricsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmMetricsQueryList",
    },
    apm_resource_stats_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmResourceStatsQueryToHclTerraform(struct!.apmResourceStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmResourceStatsQueryList",
    },
    cloud_cost_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryCloudCostQueryToHclTerraform(struct!.cloudCostQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryCloudCostQueryList",
    },
    event_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryEventQueryToHclTerraform(struct!.eventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryEventQueryList",
    },
    metric_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryMetricQueryToHclTerraform(struct!.metricQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryMetricQueryList",
    },
    process_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProcessQueryList",
    },
    product_analytics_extended_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryToHclTerraform(struct!.productAnalyticsExtendedQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryList",
    },
    retention_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryToHclTerraform(struct!.retentionQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryList",
    },
    slo_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQueryToHclTerraform(struct!.sloQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQueryList",
    },
    user_journey_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryToHclTerraform(struct!.userJourneyQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuery | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuery | cdktn.IResolvable | undefined) {
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
  private _apmDependencyStatsQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmDependencyStatsQuery) {
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
  private _apmMetricsQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmMetricsQueryOutputReference(this, "apm_metrics_query");
  public get apmMetricsQuery() {
    return this._apmMetricsQuery;
  }
  public putApmMetricsQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmMetricsQuery) {
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
  private _apmResourceStatsQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryApmResourceStatsQuery) {
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
  private _cloudCostQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryCloudCostQueryOutputReference(this, "cloud_cost_query");
  public get cloudCostQuery() {
    return this._cloudCostQuery;
  }
  public putCloudCostQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryCloudCostQuery) {
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
  private _eventQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryEventQuery) {
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
  private _metricQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryMetricQuery) {
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
  private _processQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProcessQuery) {
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
  private _productAnalyticsExtendedQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQueryOutputReference(this, "product_analytics_extended_query");
  public get productAnalyticsExtendedQuery() {
    return this._productAnalyticsExtendedQuery;
  }
  public putProductAnalyticsExtendedQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryProductAnalyticsExtendedQuery) {
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
  private _retentionQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQueryOutputReference(this, "retention_query");
  public get retentionQuery() {
    return this._retentionQuery;
  }
  public putRetentionQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryRetentionQuery) {
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
  private _sloQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQueryOutputReference(this, "slo_query");
  public get sloQuery() {
    return this._sloQuery;
  }
  public putSloQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuerySloQuery) {
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
  private _userJourneyQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQueryOutputReference(this, "user_journey_query");
  public get userJourneyQuery() {
    return this._userJourneyQuery;
  }
  public putUserJourneyQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryUserJourneyQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuery[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupByToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiCompute | cdktn.IResolvable): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiComputeToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiCompute | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiCompute[] | cdktn.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupByToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute | cdktn.IResolvable): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute[] | cdktn.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestX {
  /**
  * Aggregator used for the request. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The metric query to use for this widget. **Deprecated.** Use queries and formulas instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#q Dashboard#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#apm_query Dashboard#apm_query}
  */
  readonly apmQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXApmQuery;
  /**
  * formula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#formula Dashboard#formula}
  */
  readonly formula?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXFormula[] | cdktn.IResolvable;
  /**
  * log_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXLogQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXProcessQuery;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuery[] | cdktn.IResolvable;
  /**
  * rum_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQuery;
  /**
  * security_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQuery;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestX): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregator: cdktn.stringToTerraform(struct!.aggregator),
    q: cdktn.stringToTerraform(struct!.q),
    apm_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXApmQueryToTerraform(struct!.apmQuery),
    formula: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXFormulaToTerraform, true)(struct!.formula),
    log_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXLogQueryToTerraform(struct!.logQuery),
    process_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXProcessQueryToTerraform(struct!.processQuery),
    query: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryToTerraform, true)(struct!.query),
    rum_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryToTerraform(struct!.securityQuery),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestX): any {
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
    q: {
      value: cdktn.stringToHclTerraform(struct!.q),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apm_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXApmQueryToHclTerraform(struct!.apmQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXApmQueryList",
    },
    formula: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXFormulaToHclTerraform, true)(struct!.formula),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXFormulaList",
    },
    log_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXLogQueryToHclTerraform(struct!.logQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXLogQueryList",
    },
    process_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXProcessQueryList",
    },
    query: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryList",
    },
    rum_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryToHclTerraform(struct!.rumQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryList",
    },
    security_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryToHclTerraform(struct!.securityQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestX | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._q !== undefined) {
      hasAnyValues = true;
      internalValueResult.q = this._q;
    }
    if (this._apmQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmQuery = this._apmQuery?.internalValue;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestX | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
      this._q = undefined;
      this._apmQuery.internalValue = undefined;
      this._formula.internalValue = undefined;
      this._logQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
      this._query.internalValue = undefined;
      this._rumQuery.internalValue = undefined;
      this._securityQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregator = value.aggregator;
      this._q = value.q;
      this._apmQuery.internalValue = value.apmQuery;
      this._formula.internalValue = value.formula;
      this._logQuery.internalValue = value.logQuery;
      this._processQuery.internalValue = value.processQuery;
      this._query.internalValue = value.query;
      this._rumQuery.internalValue = value.rumQuery;
      this._securityQuery.internalValue = value.securityQuery;
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
  private _apmQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXApmQuery) {
    this._apmQuery.internalValue = value;
  }
  public resetApmQuery() {
    this._apmQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmQueryInput() {
    return this._apmQuery.internalValue;
  }

  // formula - computed: false, optional: true, required: false
  private _formula = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXFormula[] | cdktn.IResolvable) {
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
  private _logQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXLogQuery) {
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
  private _processQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXProcessQuery) {
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
  private _query = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXQuery[] | cdktn.IResolvable) {
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
  private _rumQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXRumQuery) {
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
  private _securityQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestXSecurityQuery) {
    this._securityQuery.internalValue = value;
  }
  public resetSecurityQuery() {
    this._securityQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityQueryInput() {
    return this._securityQuery.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupByToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiCompute | cdktn.IResolvable): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiComputeToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiCompute | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiCompute[] | cdktn.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYApmQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptions {
  /**
  * The type of trend line to display. Valid values are `area`, `line`, and `bars`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#trend_type Dashboard#trend_type}
  */
  readonly trendType?: string;
  /**
  * The scale of the y-axis. Valid values are `shared` and `independent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#y_scale Dashboard#y_scale}
  */
  readonly yScale?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptionsToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptionsOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trend_type: cdktn.stringToTerraform(struct!.trendType),
    y_scale: cdktn.stringToTerraform(struct!.yScale),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptionsToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptionsOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptions): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptions | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptions | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormats {
  /**
  * The comparator to use. Valid values are `=`, `>`, `>=`, `<`, `<=`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#comparator Dashboard#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#custom_bg_color Dashboard#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#custom_fg_color Dashboard#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#hide_value Dashboard#hide_value}
  */
  readonly hideValue?: boolean | cdktn.IResolvable;
  /**
  * Displays an image as the background.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#image_url Dashboard#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#palette Dashboard#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormatsToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormats | cdktn.IResolvable): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormatsToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormats | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormats | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormats | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormatsList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormats[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormatsOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimit {
  /**
  * The number of results to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#count Dashboard#count}
  */
  readonly count?: number;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`. Defaults to `"desc"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimitToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimitOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimitToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimitOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimit): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimit | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimit | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonical {
  /**
  * per unit name. If you want to represent megabytes/s, you set 'unit_name' = 'megabyte' and 'per_unit_name = 'second'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#per_unit_name Dashboard#per_unit_name}
  */
  readonly perUnitName?: string;
  /**
  * Unit name. It should be in singular form ('megabyte' and not 'megabytes')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#unit_name Dashboard#unit_name}
  */
  readonly unitName?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonicalToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonicalOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonical): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    per_unit_name: cdktn.stringToTerraform(struct!.perUnitName),
    unit_name: cdktn.stringToTerraform(struct!.unitName),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonicalToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonicalOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonical): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonicalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonical | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonical | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustom {
  /**
  * Unit label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustomToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustomOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustomToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustomOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustom): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustom | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnit {
  /**
  * canonical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#canonical Dashboard#canonical}
  */
  readonly canonical?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonical;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#custom Dashboard#custom}
  */
  readonly custom?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustom;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    canonical: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonicalToTerraform(struct!.canonical),
    custom: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustomToTerraform(struct!.custom),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    canonical: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonicalToHclTerraform(struct!.canonical),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonicalList",
    },
    custom: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnit | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnit | undefined) {
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
  private _canonical = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonicalOutputReference(this, "canonical");
  public get canonical() {
    return this._canonical;
  }
  public putCanonical(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCanonical) {
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
  private _custom = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitCustom) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScale {
  /**
  * The name of the unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#unit_name Dashboard#unit_name}
  */
  readonly unitName: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScaleToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScaleOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit_name: cdktn.stringToTerraform(struct!.unitName),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScaleToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScaleOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScale): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unitName !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitName = this._unitName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScale | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormat {
  /**
  * unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#unit Dashboard#unit}
  */
  readonly unit: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnit;
  /**
  * unit_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#unit_scale Dashboard#unit_scale}
  */
  readonly unitScale?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScale;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitToTerraform(struct!.unit),
    unit_scale: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScaleToTerraform(struct!.unitScale),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitToHclTerraform(struct!.unit),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitList",
    },
    unit_scale: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScaleToHclTerraform(struct!.unitScale),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormat | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormat | undefined) {
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
  private _unit = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitOutputReference(this, "unit");
  public get unit() {
    return this._unit;
  }
  public putUnit(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnit) {
    this._unit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit.internalValue;
  }

  // unit_scale - computed: false, optional: true, required: false
  private _unitScale = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScaleOutputReference(this, "unit_scale");
  public get unitScale() {
    return this._unitScale;
  }
  public putUnitScale(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatUnitScale) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyle {
  /**
  * The color palette used to display the formula. A guide to the available color palettes can be found at https://docs.datadoghq.com/dashboards/guide/widget_colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#palette Dashboard#palette}
  */
  readonly palette?: string;
  /**
  * Index specifying which color to use within the palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#palette_index Dashboard#palette_index}
  */
  readonly paletteIndex?: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyleToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyleOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    palette: cdktn.stringToTerraform(struct!.palette),
    palette_index: cdktn.numberToTerraform(struct!.paletteIndex),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyleToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyleOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyle): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyle | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyle | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormula {
  /**
  * An expression alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#alias Dashboard#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. Valid values are `number`, `bar`, and `trend`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cell_display_mode Dashboard#cell_display_mode}
  */
  readonly cellDisplayMode?: string;
  /**
  * A string expression built from queries, formulas, and functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#formula_expression Dashboard#formula_expression}
  */
  readonly formulaExpression: string;
  /**
  * cell_display_mode_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cell_display_mode_options Dashboard#cell_display_mode_options}
  */
  readonly cellDisplayModeOptions?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptions;
  /**
  * conditional_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#conditional_formats Dashboard#conditional_formats}
  */
  readonly conditionalFormats?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormats[] | cdktn.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimit;
  /**
  * number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#number_format Dashboard#number_format}
  */
  readonly numberFormat?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormat;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#style Dashboard#style}
  */
  readonly style?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyle;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormula | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    cell_display_mode: cdktn.stringToTerraform(struct!.cellDisplayMode),
    formula_expression: cdktn.stringToTerraform(struct!.formulaExpression),
    cell_display_mode_options: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptionsToTerraform(struct!.cellDisplayModeOptions),
    conditional_formats: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormatsToTerraform, true)(struct!.conditionalFormats),
    limit: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimitToTerraform(struct!.limit),
    number_format: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatToTerraform(struct!.numberFormat),
    style: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyleToTerraform(struct!.style),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormula | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptionsToHclTerraform(struct!.cellDisplayModeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptionsList",
    },
    conditional_formats: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormatsToHclTerraform, true)(struct!.conditionalFormats),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormatsList",
    },
    limit: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimitToHclTerraform(struct!.limit),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimitList",
    },
    number_format: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatToHclTerraform(struct!.numberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatList",
    },
    style: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormula | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormula | cdktn.IResolvable | undefined) {
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
  private _cellDisplayModeOptions = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptionsOutputReference(this, "cell_display_mode_options");
  public get cellDisplayModeOptions() {
    return this._cellDisplayModeOptions;
  }
  public putCellDisplayModeOptions(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaCellDisplayModeOptions) {
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
  private _conditionalFormats = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaConditionalFormats[] | cdktn.IResolvable) {
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
  private _limit = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaLimit) {
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
  private _numberFormat = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormatOutputReference(this, "number_format");
  public get numberFormat() {
    return this._numberFormat;
  }
  public putNumberFormat(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaNumberFormat) {
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
  private _style = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaStyle) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormula[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYFormulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupByToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiCompute | cdktn.IResolvable): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiComputeToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiCompute | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiCompute[] | cdktn.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYLogQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYProcessQuery {
  /**
  * A list of processes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#filter_by Dashboard#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search_by Dashboard#search_by}
  */
  readonly searchBy?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYProcessQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYProcessQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYProcessQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYProcessQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYProcessQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYProcessQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYProcessQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYProcessQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmDependencyStatsQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cross_org_uuids Dashboard#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for APM Dependency Stats queries. Valid values are `apm_dependency_stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Determines whether stats for upstream or downstream dependencies should be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#is_upstream Dashboard#is_upstream}
  */
  readonly isUpstream?: boolean | cdktn.IResolvable;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#operation_name Dashboard#operation_name}
  */
  readonly operationName: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#resource_name Dashboard#resource_name}
  */
  readonly resourceName: string;
  /**
  * APM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `avg_duration`, `avg_root_duration`, `avg_spans_per_trace`, `error_rate`, `pct_exec_time`, `pct_of_traces`, `total_traces_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmDependencyStatsQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmDependencyStatsQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmDependencyStatsQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmDependencyStatsQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmDependencyStatsQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmDependencyStatsQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmDependencyStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmDependencyStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmDependencyStatsQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmMetricsQuery {
  /**
  * The data source for APM metrics queries. Valid values are `apm_metrics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Optional fields to group the query results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Name of this query to use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Optional operation mode used to aggregate across operation names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#operation_mode Dashboard#operation_mode}
  */
  readonly operationMode?: string;
  /**
  * Name of the operation on the service. If omitted, the primary operation name is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#operation_name Dashboard#operation_name}
  */
  readonly operationName?: string;
  /**
  * Tags to query for a specific downstream entity, such as `peer.service` or `peer.db_instance`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#peer_tags Dashboard#peer_tags}
  */
  readonly peerTags?: string[];
  /**
  * Additional filters for the query using metrics query syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query_filter Dashboard#query_filter}
  */
  readonly queryFilter?: string;
  /**
  * The hash of a specific resource to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#resource_hash Dashboard#resource_hash}
  */
  readonly resourceHash?: string;
  /**
  * The full name of a specific resource to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#resource_name Dashboard#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#service Dashboard#service}
  */
  readonly service?: string;
  /**
  * The relationship between the span, its parents, and its children in a trace. Valid values are `consumer`, `server`, `client`, `producer`, `internal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#span_kind Dashboard#span_kind}
  */
  readonly spanKind?: string;
  /**
  * APM metric stat name. Valid values are `errors`, `error_rate`, `errors_per_second`, `latency_avg`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`, `latency_p999`, `latency_distribution`, `hits`, `hits_per_second`, `total_time`, `apdex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmMetricsQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmMetricsQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmMetricsQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmMetricsQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmMetricsQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmMetricsQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmMetricsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmMetricsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmMetricsQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmResourceStatsQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cross_org_uuids Dashboard#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for APM Resource Stats queries. Valid values are `apm_resource_stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Array of fields to group results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#operation_name Dashboard#operation_name}
  */
  readonly operationName?: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#resource_name Dashboard#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_distribution`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmResourceStatsQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmResourceStatsQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmResourceStatsQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmResourceStatsQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmResourceStatsQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmResourceStatsQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmResourceStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmResourceStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryApmResourceStatsQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryCloudCostQuery {
  /**
  * The aggregation methods available for cloud cost queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cross_org_uuids Dashboard#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for cloud cost queries. Valid values are `cloud_cost`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Query for Cloud Cost data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryCloudCostQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryCloudCostQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryCloudCostQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryCloudCostQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryCloudCostQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryCloudCostQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryCloudCostQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryCloudCostQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryCloudCostQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryCompute | cdktn.IResolvable): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryComputeToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryCompute | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryCompute | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySortToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySort): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySortToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySort): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySort | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBy {
  /**
  * The event facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySort;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBySort) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSortToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSort): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSortToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSort): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSort | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSort | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFields {
  /**
  * List of event facets to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#fields Dashboard#fields}
  */
  readonly fields: string[];
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSort;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSortToTerraform(struct!.sort),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFields): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFields | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFields | undefined) {
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
  private _sort = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsSort) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearchToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearchToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearch): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearch | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cross_org_uuids Dashboard#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for event platform-based queries. Valid values are `logs`, `spans`, `network`, `network_device_flows`, `rum`, `security_signals`, `profiles`, `audit`, `events`, `ci_tests`, `ci_pipelines`, `incident_analytics`, `product_analytics`, `on_call_events`, `errors`, `llm_observability`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream. Omit or use `[]` to query all indexes at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#indexes Dashboard#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Option for storage location. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#storage Dashboard#storage}
  */
  readonly storage?: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute Dashboard#compute}
  */
  readonly compute: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * group_by_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by_fields Dashboard#group_by_fields}
  */
  readonly groupByFields?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFields;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearch;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuery): any {
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
    compute: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByToTerraform, true)(struct!.groupBy),
    group_by_fields: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsToTerraform(struct!.groupByFields),
    search: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuery): any {
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
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByList",
    },
    group_by_fields: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsToHclTerraform(struct!.groupByFields),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsList",
    },
    search: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuery | undefined) {
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
  private _compute = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupBy[] | cdktn.IResolvable) {
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
  private _groupByFields = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFieldsOutputReference(this, "group_by_fields");
  public get groupByFields() {
    return this._groupByFields;
  }
  public putGroupByFields(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQueryGroupByFields) {
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
  private _search = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryEventQuerySearch) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryMetricQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cross_org_uuids Dashboard#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for metrics queries. Defaults to `"metrics"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource?: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The metrics query definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
  /**
  * Semantic mode for metrics queries. This determines how metrics from different sources are combined or displayed. Valid values are `combined`, `native`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#semantic_mode Dashboard#semantic_mode}
  */
  readonly semanticMode?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryMetricQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryMetricQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryMetricQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryMetricQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryMetricQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryMetricQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryMetricQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryMetricQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryMetricQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProcessQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cross_org_uuids Dashboard#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for process queries. Valid values are `process`, `container`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Whether to normalize the CPU percentages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#is_normalized_cpu Dashboard#is_normalized_cpu}
  */
  readonly isNormalizedCpu?: boolean | cdktn.IResolvable;
  /**
  * The number of hits to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * The process metric name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`. Defaults to `"desc"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: string;
  /**
  * An array of tags to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#tag_filters Dashboard#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * The text to use as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#text_filter Dashboard#text_filter}
  */
  readonly textFilter?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProcessQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProcessQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProcessQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProcessQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProcessQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProcessQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProcessQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProcessQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccount {
  /**
  * The name of the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The query string for the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccountOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegment {
  /**
  * The name of the segment subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The unique identifier of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment_id Dashboard#segment_id}
  */
  readonly segmentId?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUser {
  /**
  * The name of the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The query string for the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUserToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUserToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFilters {
  /**
  * An optional filter condition applied to the audience subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#filter_condition Dashboard#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#account Dashboard#account}
  */
  readonly account?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment Dashboard#segment}
  */
  readonly segment?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#user Dashboard#user}
  */
  readonly user?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFilters): any {
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
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFilters | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFilters | undefined) {
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
  private _account = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollup {
  /**
  * Alignment of the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#alignment Dashboard#alignment}
  */
  readonly alignment?: string;
  /**
  * Quantity of the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#quantity Dashboard#quantity}
  */
  readonly quantity?: number;
  /**
  * Timezone for the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#timezone Dashboard#timezone}
  */
  readonly timezone?: string;
  /**
  * Type of calendar interval. Valid values are `day`, `week`, `month`, `year`, `quarter`, `minute`, `hour`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollupToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollupOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollup): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollupToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollupOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollup): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollup | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollup | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryCompute {
  /**
  * Aggregation method for the Product Analytics Extended query. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * Fixed-width time bucket interval in milliseconds. Mutually exclusive with `rollup`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
  /**
  * Measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Name of the compute for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * rollup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#rollup Dashboard#rollup}
  */
  readonly rollup?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollup;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
    rollup: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollupToTerraform(struct!.rollup),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryCompute): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollupToHclTerraform(struct!.rollup),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryCompute | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryCompute | undefined) {
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
  private _rollup = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollupOutputReference(this, "rollup");
  public get rollup() {
    return this._rollup;
  }
  public putRollup(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeRollup) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySortToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySort): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySortToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySort): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySort | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBy {
  /**
  * Facet name to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet: string;
  /**
  * Maximum number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Whether to exclude events missing the group-by facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#should_exclude_missing Dashboard#should_exclude_missing}
  */
  readonly shouldExcludeMissing?: boolean | cdktn.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySort;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    sort: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupByToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBySort) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearchToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearchToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearch): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearch | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuery {
  /**
  * Data source for the Product Analytics event query. Valid values are `product_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearch;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuery | undefined) {
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
  private _search = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQuery {
  /**
  * Data source for Product Analytics Extended queries. Valid values are `product_analytics_extended`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Event indexes to query. Use `*` to query all indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#indexes Dashboard#indexes}
  */
  readonly indexes?: string[];
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * audience_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#audience_filters Dashboard#audience_filters}
  */
  readonly audienceFilters?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFilters;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute Dashboard#compute}
  */
  readonly compute: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuery;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    name: cdktn.stringToTerraform(struct!.name),
    audience_filters: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersToTerraform(struct!.audienceFilters),
    compute: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupByToTerraform, true)(struct!.groupBy),
    query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQueryToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersList",
    },
    compute: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupByList",
    },
    query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQuery | undefined) {
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
  private _audienceFilters = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryAudienceFilters) {
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
  private _compute = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable) {
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
  private _query = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryProductAnalyticsExtendedQueryQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryCompute {
  /**
  * Aggregation for the retention query, including standard event aggregations and `pcNN` percentiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * Metric for the retention computation. Valid values are `__dd.retention`, `__dd.retention_rate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryComputeOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryComputeToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryComputeOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryCompute): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryCompute | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryCompute | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySort {
  /**
  * Sort order for retention group by results. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySortToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySortToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySort): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySort | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBy {
  /**
  * Facet to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet: string;
  /**
  * Maximum number of groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Whether to exclude missing values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#should_exclude_missing Dashboard#should_exclude_missing}
  */
  readonly shouldExcludeMissing?: boolean | cdktn.IResolvable;
  /**
  * Source field for the retention group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#source Dashboard#source}
  */
  readonly source?: string;
  /**
  * Target for the retention group by. Valid values are `cohort`, `return_period`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#target Dashboard#target}
  */
  readonly target: string;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySort;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBy | cdktn.IResolvable): any {
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
    sort: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupByToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBySort) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuery {
  /**
  * Data source for the Product Analytics event query. Valid values are `product_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuery | undefined) {
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
  private _search = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue {
  /**
  * Alignment of the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#alignment Dashboard#alignment}
  */
  readonly alignment?: string;
  /**
  * Quantity of the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#quantity Dashboard#quantity}
  */
  readonly quantity?: number;
  /**
  * Timezone for the calendar interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#timezone Dashboard#timezone}
  */
  readonly timezone?: string;
  /**
  * Type of calendar interval. Valid values are `day`, `week`, `month`, `year`, `quarter`, `minute`, `hour`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeInterval {
  /**
  * Type of cohort time interval. Valid values are `calendar`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToTerraform(struct!.value),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeInterval): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeInterval | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeInterval | undefined) {
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
  private _value = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteria {
  /**
  * base_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#base_query Dashboard#base_query}
  */
  readonly baseQuery: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuery;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#time_interval Dashboard#time_interval}
  */
  readonly timeInterval: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeInterval;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQueryToTerraform(struct!.baseQuery),
    time_interval: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQueryToHclTerraform(struct!.baseQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQueryList",
    },
    time_interval: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteria | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteria | undefined) {
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
  private _baseQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference(this, "base_query");
  public get baseQuery() {
    return this._baseQuery;
  }
  public putBaseQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaBaseQuery) {
    this._baseQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueryInput() {
    return this._baseQuery.internalValue;
  }

  // time_interval - computed: false, optional: false, required: true
  private _timeInterval = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccount {
  /**
  * The name of the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The query string for the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegment {
  /**
  * The name of the segment subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The unique identifier of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment_id Dashboard#segment_id}
  */
  readonly segmentId?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUser {
  /**
  * The name of the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The query string for the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFilters {
  /**
  * An optional filter condition applied to the audience subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#filter_condition Dashboard#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#account Dashboard#account}
  */
  readonly account?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment Dashboard#segment}
  */
  readonly segment?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#user Dashboard#user}
  */
  readonly user?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFilters): any {
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
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFilters | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFilters | undefined) {
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
  private _account = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFilters {
  /**
  * String filter for the retention query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#string_filter Dashboard#string_filter}
  */
  readonly stringFilter?: string;
  /**
  * audience_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#audience_filters Dashboard#audience_filters}
  */
  readonly audienceFilters?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFilters;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFilters): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFilters | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFilters | undefined) {
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
  private _audienceFilters = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersAudienceFilters) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuery {
  /**
  * Data source for the Product Analytics event query. Valid values are `product_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined) {
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
  private _search = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeInterval {
  /**
  * Type of return interval. Valid values are `fixed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * Unit of the return interval. Valid values are `day`, `week`, `month`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#unit Dashboard#unit}
  */
  readonly unit: string;
  /**
  * Value of the return interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteria {
  /**
  * base_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#base_query Dashboard#base_query}
  */
  readonly baseQuery: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuery;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#time_interval Dashboard#time_interval}
  */
  readonly timeInterval?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeInterval;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_query: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct!.baseQuery),
    time_interval: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_query: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct!.baseQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQueryList",
    },
    time_interval: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteria | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteria | undefined) {
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
  private _baseQuery = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference(this, "base_query");
  public get baseQuery() {
    return this._baseQuery;
  }
  public putBaseQuery(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaBaseQuery) {
    this._baseQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueryInput() {
    return this._baseQuery.internalValue;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaTimeInterval) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearch {
  /**
  * Entity tracked for retention. Valid values are `@usr.id`, `@account.id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#retention_entity Dashboard#retention_entity}
  */
  readonly retentionEntity: string;
  /**
  * Condition for counting an entity as returned. Valid values are `conversion_on`, `conversion_on_or_after`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#return_condition Dashboard#return_condition}
  */
  readonly returnCondition: string;
  /**
  * cohort_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cohort_criteria Dashboard#cohort_criteria}
  */
  readonly cohortCriteria: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteria;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#filters Dashboard#filters}
  */
  readonly filters?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFilters;
  /**
  * return_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#return_criteria Dashboard#return_criteria}
  */
  readonly returnCriteria?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteria;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retention_entity: cdktn.stringToTerraform(struct!.retentionEntity),
    return_condition: cdktn.stringToTerraform(struct!.returnCondition),
    cohort_criteria: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaToTerraform(struct!.cohortCriteria),
    filters: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersToTerraform(struct!.filters),
    return_criteria: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaToTerraform(struct!.returnCriteria),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearch): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaToHclTerraform(struct!.cohortCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaList",
    },
    filters: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersList",
    },
    return_criteria: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct!.returnCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearch | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearch | undefined) {
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
  private _cohortCriteria = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteriaOutputReference(this, "cohort_criteria");
  public get cohortCriteria() {
    return this._cohortCriteria;
  }
  public putCohortCriteria(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchCohortCriteria) {
    this._cohortCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortCriteriaInput() {
    return this._cohortCriteria.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchFilters) {
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
  private _returnCriteria = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteriaOutputReference(this, "return_criteria");
  public get returnCriteria() {
    return this._returnCriteria;
  }
  public putReturnCriteria(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchReturnCriteria) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuery {
  /**
  * Data source for retention queries. Valid values are `product_analytics_retention`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute Dashboard#compute}
  */
  readonly compute: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearch;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    compute: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupByToTerraform, true)(struct!.groupBy),
    search: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuery): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupByList",
    },
    search: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuery | undefined) {
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
  private _compute = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryRetentionQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQuerySloQuery {
  /**
  * Additional filters applied to the SLO query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#additional_query_filters Dashboard#additional_query_filters}
  */
  readonly additionalQueryFilters?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cross_org_uuids Dashboard#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for SLO queries. Valid values are `slo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Group mode to query measures. Valid values are `overall`, `components`. Defaults to `"overall"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_mode Dashboard#group_mode}
  */
  readonly groupMode?: string;
  /**
  * SLO measures queries. Valid values are `good_events`, `bad_events`, `good_minutes`, `bad_minutes`, `slo_status`, `error_budget_remaining`, `burn_rate`, `error_budget_burndown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#measure Dashboard#measure}
  */
  readonly measure: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * ID of an SLO to query measures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#slo_id Dashboard#slo_id}
  */
  readonly sloId: string;
  /**
  * type of the SLO to query. Valid values are `metric`, `monitor`, `time_slice`. Defaults to `"metric"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#slo_query_type Dashboard#slo_query_type}
  */
  readonly sloQueryType?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQuerySloQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQuerySloQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQuerySloQuery): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQuerySloQueryToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQuerySloQueryOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQuerySloQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQuerySloQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQuerySloQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQuerySloQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTarget {
  /**
  * End node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#end Dashboard#end}
  */
  readonly end?: string;
  /**
  * Start node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#start Dashboard#start}
  */
  readonly start?: string;
  /**
  * Target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * Target node value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTargetToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTargetOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTarget): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTargetToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTargetOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTarget): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTarget | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTarget | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryCompute {
  /**
  * Aggregation method for the User Journey query. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * Time bucket interval in milliseconds for timeseries queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
  /**
  * Metric for the User Journey computation. Valid values are `__dd.conversion`, `__dd.conversion_rate`, `__dd.time_to_convert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#target Dashboard#target}
  */
  readonly target?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTarget;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    target: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTargetToTerraform(struct!.target),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryCompute): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryCompute | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryCompute | undefined) {
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
  private _target = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryComputeTarget) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySortToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySort): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySortToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySort): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySort | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTarget {
  /**
  * End node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#end Dashboard#end}
  */
  readonly end?: string;
  /**
  * Start node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#start Dashboard#start}
  */
  readonly start?: string;
  /**
  * Target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * Target node value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value?: string;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTargetToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTargetOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTarget): any {
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


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTargetToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTargetOutputReference | DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTarget): any {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTarget | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTarget | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBy {
  /**
  * Facet name to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet: string;
  /**
  * Maximum number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Whether to exclude events missing the group-by facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#should_exclude_missing Dashboard#should_exclude_missing}
  */
  readonly shouldExcludeMissing?: boolean | cdktn.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySort;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#target Dashboard#target}
  */
  readonly target?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTarget;
}

export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    sort: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySortToTerraform(struct!.sort),
    target: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTargetToTerraform(struct!.target),
  }
}


export function dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByToHclTerraform(struct?: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySortList",
    },
    target: {
      value: dashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBySort) {
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
  private _target = new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByTarget) {
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

export class DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetScatterplotDefinitionRequestYQueryUserJourneyQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
