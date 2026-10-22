/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmDependencyStatsQuery,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmDependencyStatsQueryToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmDependencyStatsQueryToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmDependencyStatsQueryOutputReference,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmMetricsQuery,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmMetricsQueryToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmMetricsQueryToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmMetricsQueryOutputReference,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmResourceStatsQuery,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmResourceStatsQueryToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmResourceStatsQueryToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmResourceStatsQueryOutputReference,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryCloudCostQuery,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryCloudCostQueryToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryCloudCostQueryToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryCloudCostQueryOutputReference,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryEventQuery,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryEventQueryToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryEventQueryToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryEventQueryOutputReference,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryMetricQuery,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryMetricQueryToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryMetricQueryToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryMetricQueryOutputReference,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProcessQuery,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProcessQueryToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProcessQueryToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProcessQueryOutputReference,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestFormula,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestFormulaToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestFormulaToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestFormulaList,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionCustomLinks,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionCustomLinksToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionCustomLinksToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionCustomLinksList,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToplistDefinition,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToplistDefinitionToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToplistDefinitionToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToplistDefinitionOutputReference } from './structs15200';
import { DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionChangeDefinition,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionChangeDefinitionToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionChangeDefinitionToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionChangeDefinitionOutputReference } from './structs12400';
import { DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionGeomapDefinition,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionGeomapDefinitionToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionGeomapDefinitionToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionGeomapDefinitionOutputReference,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryTableDefinition,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryTableDefinitionToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryTableDefinitionToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryTableDefinitionOutputReference } from './structs12800';
import { DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryValueDefinition,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryValueDefinitionToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryValueDefinitionToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryValueDefinitionOutputReference } from './structs13200';
import { DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionScatterplotDefinition,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionScatterplotDefinitionToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionScatterplotDefinitionToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionScatterplotDefinitionOutputReference } from './structs14000';
import { DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionSunburstDefinition,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionSunburstDefinitionToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionSunburstDefinitionToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionSunburstDefinitionOutputReference } from './structs14400';
import { DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTimeseriesDefinition,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTimeseriesDefinitionToTerraform,
dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTimeseriesDefinitionToHclTerraform,
DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTimeseriesDefinitionOutputReference } from './structs14800';
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters {
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
  readonly account?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment Dashboard#segment}
  */
  readonly segment?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#user Dashboard#user}
  */
  readonly user?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters): any {
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
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters | undefined) {
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
  private _account = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup): any {
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


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryCompute {
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
  readonly rollup?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
    rollup: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToTerraform(struct!.rollup),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryCompute): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToHclTerraform(struct!.rollup),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryCompute | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryCompute | undefined) {
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
  private _rollup = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference(this, "rollup");
  public get rollup() {
    return this._rollup;
  }
  public putRollup(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort): any {
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


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy {
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
  readonly sort?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    sort: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuery {
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
  readonly search: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQueryToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQueryToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuery): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuery | undefined) {
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
  private _search = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQuery {
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
  readonly audienceFilters?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute Dashboard#compute}
  */
  readonly compute: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuery;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    name: cdktn.stringToTerraform(struct!.name),
    audience_filters: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersToTerraform(struct!.audienceFilters),
    compute: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByToTerraform, true)(struct!.groupBy),
    query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQueryToTerraform(struct!.query),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQuery): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersList",
    },
    compute: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByList",
    },
    query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQuery | undefined) {
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
  private _audienceFilters = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters) {
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
  private _compute = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBy[] | cdktn.IResolvable) {
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
  private _query = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryCompute {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryComputeToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryComputeOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryComputeToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryComputeOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryCompute): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryCompute | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryCompute | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySort {
  /**
  * Sort order for retention group by results. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySortToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySortToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySort): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySort | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBy {
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
  readonly sort?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySort;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupByToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBy | cdktn.IResolvable): any {
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
    sort: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupByToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBySort) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupByOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery {
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
  readonly search: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery | undefined) {
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
  private _search = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue): any {
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


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval {
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
  readonly value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToTerraform(struct!.value),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval | undefined) {
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
  private _value = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteria {
  /**
  * base_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#base_query Dashboard#base_query}
  */
  readonly baseQuery: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#time_interval Dashboard#time_interval}
  */
  readonly timeInterval: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryToTerraform(struct!.baseQuery),
    time_interval: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryToHclTerraform(struct!.baseQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryList",
    },
    time_interval: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteria | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteria | undefined) {
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
  private _baseQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference(this, "base_query");
  public get baseQuery() {
    return this._baseQuery;
  }
  public putBaseQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaBaseQuery) {
    this._baseQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueryInput() {
    return this._baseQuery.internalValue;
  }

  // time_interval - computed: false, optional: false, required: true
  private _timeInterval = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters {
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
  readonly account?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment Dashboard#segment}
  */
  readonly segment?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#user Dashboard#user}
  */
  readonly user?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters): any {
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
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters | undefined) {
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
  private _account = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFilters {
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
  readonly audienceFilters?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFilters): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFilters | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFilters | undefined) {
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
  private _audienceFilters = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersAudienceFilters) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery {
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
  readonly search: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined) {
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
  private _search = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
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


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteria {
  /**
  * base_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#base_query Dashboard#base_query}
  */
  readonly baseQuery: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#time_interval Dashboard#time_interval}
  */
  readonly timeInterval?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct!.baseQuery),
    time_interval: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct!.baseQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryList",
    },
    time_interval: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteria | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteria | undefined) {
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
  private _baseQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference(this, "base_query");
  public get baseQuery() {
    return this._baseQuery;
  }
  public putBaseQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery) {
    this._baseQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueryInput() {
    return this._baseQuery.internalValue;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearch {
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
  readonly cohortCriteria: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteria;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#filters Dashboard#filters}
  */
  readonly filters?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFilters;
  /**
  * return_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#return_criteria Dashboard#return_criteria}
  */
  readonly returnCriteria?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteria;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retention_entity: cdktn.stringToTerraform(struct!.retentionEntity),
    return_condition: cdktn.stringToTerraform(struct!.returnCondition),
    cohort_criteria: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaToTerraform(struct!.cohortCriteria),
    filters: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersToTerraform(struct!.filters),
    return_criteria: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaToTerraform(struct!.returnCriteria),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearch): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaToHclTerraform(struct!.cohortCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaList",
    },
    filters: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersList",
    },
    return_criteria: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct!.returnCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearch | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearch | undefined) {
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
  private _cohortCriteria = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteriaOutputReference(this, "cohort_criteria");
  public get cohortCriteria() {
    return this._cohortCriteria;
  }
  public putCohortCriteria(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchCohortCriteria) {
    this._cohortCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortCriteriaInput() {
    return this._cohortCriteria.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchFilters) {
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
  private _returnCriteria = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteriaOutputReference(this, "return_criteria");
  public get returnCriteria() {
    return this._returnCriteria;
  }
  public putReturnCriteria(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchReturnCriteria) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuery {
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
  readonly compute: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearch;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    compute: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupByToTerraform, true)(struct!.groupBy),
    search: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuery): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupByList",
    },
    search: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuery | undefined) {
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
  private _compute = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQuery {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQueryToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQuery): any {
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


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQueryToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQuery): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQuery | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTarget {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTargetToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTargetOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTarget): any {
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


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTargetToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTargetOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTarget): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTarget | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTarget | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryCompute {
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
  readonly target?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTarget;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    target: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTargetToTerraform(struct!.target),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryCompute): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryCompute | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryCompute | undefined) {
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
  private _target = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeTarget) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySort {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySortToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySort): any {
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


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySortToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySort): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySort | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTarget {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTargetToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTargetOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTarget): any {
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


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTargetToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTargetOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTarget): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTarget | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTarget | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBy {
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
  readonly sort?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySort;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#target Dashboard#target}
  */
  readonly target?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTarget;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    sort: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySortToTerraform(struct!.sort),
    target: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTargetToTerraform(struct!.target),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySortList",
    },
    target: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBySort) {
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
  private _target = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByTarget) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters {
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
  readonly account?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment Dashboard#segment}
  */
  readonly segment?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#user Dashboard#user}
  */
  readonly user?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters): any {
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
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters | undefined) {
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
  private _account = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget): any {
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


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter {
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
  readonly target?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
    target: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToTerraform(struct!.target),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined) {
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
  private _target = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFilters {
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
  readonly audienceFilters?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters;
  /**
  * graph_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#graph_filter Dashboard#graph_filter}
  */
  readonly graphFilter?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
    graph_filter: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterToTerraform, true)(struct!.graphFilter),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFilters): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersList",
    },
    graph_filter: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterToHclTerraform, true)(struct!.graphFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFilters | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFilters | undefined) {
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
  private _audienceFilters = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersAudienceFilters) {
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
  private _graphFilter = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilterList(this, "graph_filter", false);
  public get graphFilter() {
    return this._graphFilter;
  }
  public putGraphFilter(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeys {
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

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeysToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeysOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary: cdktn.stringToTerraform(struct!.primary),
    secondary: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.secondary),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeysToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeysOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeys): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeysOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeys | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeys | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearch {
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
  readonly filters?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFilters;
  /**
  * join_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#join_keys Dashboard#join_keys}
  */
  readonly joinKeys?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeys;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    node_objects: cdktn.stringToTerraform(struct!.nodeObjects),
    step_aliases: cdktn.stringToTerraform(struct!.stepAliases),
    filters: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersToTerraform(struct!.filters),
    join_keys: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeysToTerraform(struct!.joinKeys),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearch): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersList",
    },
    join_keys: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeysToHclTerraform(struct!.joinKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearch | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearch | undefined) {
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
  private _filters = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchFilters) {
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
  private _joinKeys = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeysOutputReference(this, "join_keys");
  public get joinKeys() {
    return this._joinKeys;
  }
  public putJoinKeys(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchJoinKeys) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuery {
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
  readonly compute: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearch;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    compute: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByToTerraform, true)(struct!.groupBy),
    search: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuery): any {
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
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByList",
    },
    search: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuery | undefined) {
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
  private _compute = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuery {
  /**
  * apm_dependency_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#apm_dependency_stats_query Dashboard#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmDependencyStatsQuery;
  /**
  * apm_metrics_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#apm_metrics_query Dashboard#apm_metrics_query}
  */
  readonly apmMetricsQuery?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmMetricsQuery;
  /**
  * apm_resource_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#apm_resource_stats_query Dashboard#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmResourceStatsQuery;
  /**
  * cloud_cost_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#cloud_cost_query Dashboard#cloud_cost_query}
  */
  readonly cloudCostQuery?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryCloudCostQuery;
  /**
  * event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#event_query Dashboard#event_query}
  */
  readonly eventQuery?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryEventQuery;
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric_query Dashboard#metric_query}
  */
  readonly metricQuery?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryMetricQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProcessQuery;
  /**
  * product_analytics_extended_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#product_analytics_extended_query Dashboard#product_analytics_extended_query}
  */
  readonly productAnalyticsExtendedQuery?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQuery;
  /**
  * retention_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#retention_query Dashboard#retention_query}
  */
  readonly retentionQuery?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuery;
  /**
  * slo_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#slo_query Dashboard#slo_query}
  */
  readonly sloQuery?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQuery;
  /**
  * user_journey_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#user_journey_query Dashboard#user_journey_query}
  */
  readonly userJourneyQuery?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuery;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    apm_dependency_stats_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_metrics_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmMetricsQueryToTerraform(struct!.apmMetricsQuery),
    apm_resource_stats_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    cloud_cost_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryCloudCostQueryToTerraform(struct!.cloudCostQuery),
    event_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProcessQueryToTerraform(struct!.processQuery),
    product_analytics_extended_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryToTerraform(struct!.productAnalyticsExtendedQuery),
    retention_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryToTerraform(struct!.retentionQuery),
    slo_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQueryToTerraform(struct!.sloQuery),
    user_journey_query: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryToTerraform(struct!.userJourneyQuery),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    apm_dependency_stats_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmDependencyStatsQueryToHclTerraform(struct!.apmDependencyStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmDependencyStatsQueryList",
    },
    apm_metrics_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmMetricsQueryToHclTerraform(struct!.apmMetricsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmMetricsQueryList",
    },
    apm_resource_stats_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmResourceStatsQueryToHclTerraform(struct!.apmResourceStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmResourceStatsQueryList",
    },
    cloud_cost_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryCloudCostQueryToHclTerraform(struct!.cloudCostQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryCloudCostQueryList",
    },
    event_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryEventQueryToHclTerraform(struct!.eventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryEventQueryList",
    },
    metric_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryMetricQueryToHclTerraform(struct!.metricQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryMetricQueryList",
    },
    process_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProcessQueryList",
    },
    product_analytics_extended_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryToHclTerraform(struct!.productAnalyticsExtendedQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryList",
    },
    retention_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryToHclTerraform(struct!.retentionQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryList",
    },
    slo_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQueryToHclTerraform(struct!.sloQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQueryList",
    },
    user_journey_query: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryToHclTerraform(struct!.userJourneyQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuery | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuery | cdktn.IResolvable | undefined) {
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
  private _apmDependencyStatsQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmDependencyStatsQuery) {
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
  private _apmMetricsQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmMetricsQueryOutputReference(this, "apm_metrics_query");
  public get apmMetricsQuery() {
    return this._apmMetricsQuery;
  }
  public putApmMetricsQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmMetricsQuery) {
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
  private _apmResourceStatsQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryApmResourceStatsQuery) {
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
  private _cloudCostQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryCloudCostQueryOutputReference(this, "cloud_cost_query");
  public get cloudCostQuery() {
    return this._cloudCostQuery;
  }
  public putCloudCostQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryCloudCostQuery) {
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
  private _eventQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryEventQuery) {
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
  private _metricQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryMetricQuery) {
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
  private _processQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProcessQuery) {
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
  private _productAnalyticsExtendedQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQueryOutputReference(this, "product_analytics_extended_query");
  public get productAnalyticsExtendedQuery() {
    return this._productAnalyticsExtendedQuery;
  }
  public putProductAnalyticsExtendedQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryProductAnalyticsExtendedQuery) {
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
  private _retentionQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQueryOutputReference(this, "retention_query");
  public get retentionQuery() {
    return this._retentionQuery;
  }
  public putRetentionQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryRetentionQuery) {
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
  private _sloQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQueryOutputReference(this, "slo_query");
  public get sloQuery() {
    return this._sloQuery;
  }
  public putSloQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuerySloQuery) {
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
  private _userJourneyQuery = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQueryOutputReference(this, "user_journey_query");
  public get userJourneyQuery() {
    return this._userJourneyQuery;
  }
  public putUserJourneyQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryUserJourneyQuery) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuery[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSort {
  /**
  * The index of the formula to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: number;
  /**
  * Widget sorting direction. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSortToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.numberToTerraform(struct!.index),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSortToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSort): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSort | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSort | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSort {
  /**
  * The name of the group tag to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Widget sorting direction. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSortToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSortToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSort): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSort | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSort | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderBy {
  /**
  * formula_sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#formula_sort Dashboard#formula_sort}
  */
  readonly formulaSort?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSort;
  /**
  * group_sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_sort Dashboard#group_sort}
  */
  readonly groupSort?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSort;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    formula_sort: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSortToTerraform(struct!.formulaSort),
    group_sort: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSortToTerraform(struct!.groupSort),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    formula_sort: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSortToHclTerraform(struct!.formulaSort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSortList",
    },
    group_sort: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSortToHclTerraform(struct!.groupSort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderBy | cdktn.IResolvable | undefined) {
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
  private _formulaSort = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSortOutputReference(this, "formula_sort");
  public get formulaSort() {
    return this._formulaSort;
  }
  public putFormulaSort(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByFormulaSort) {
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
  private _groupSort = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSortOutputReference(this, "group_sort");
  public get groupSort() {
    return this._groupSort;
  }
  public putGroupSort(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByGroupSort) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSort {
  /**
  * The number of items to limit the widget to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#count Dashboard#count}
  */
  readonly count?: number;
  /**
  * order_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order_by Dashboard#order_by}
  */
  readonly orderBy?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderBy[] | cdktn.IResolvable;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    order_by: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByToTerraform, true)(struct!.orderBy),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSort): any {
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
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByToHclTerraform, true)(struct!.orderBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSort | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSort | undefined) {
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
  private _orderBy = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderByList(this, "order_by", false);
  public get orderBy() {
    return this._orderBy;
  }
  public putOrderBy(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOrderBy[] | cdktn.IResolvable) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyle {
  /**
  * How to order series. Valid values are `tags`, `values`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order_by Dashboard#order_by}
  */
  readonly orderBy?: string;
  /**
  * A color palette to apply to the widget. The available options are available at: https://docs.datadoghq.com/dashboards/widgets/timeseries/#appearance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#palette Dashboard#palette}
  */
  readonly palette?: string;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyleToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyleOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order_by: cdktn.stringToTerraform(struct!.orderBy),
    palette: cdktn.stringToTerraform(struct!.palette),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyleToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyleOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    order_by: {
      value: cdktn.stringToHclTerraform(struct!.orderBy),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._orderBy = undefined;
      this._palette = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._orderBy = value.orderBy;
      this._palette = value.palette;
    }
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
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
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequest {
  /**
  * formula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#formula Dashboard#formula}
  */
  readonly formula?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestFormula[] | cdktn.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuery[] | cdktn.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSort;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#style Dashboard#style}
  */
  readonly style?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyle;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    formula: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestFormulaToTerraform, true)(struct!.formula),
    query: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryToTerraform, true)(struct!.query),
    sort: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortToTerraform(struct!.sort),
    style: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyleToTerraform(struct!.style),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    formula: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestFormulaToHclTerraform, true)(struct!.formula),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestFormulaList",
    },
    query: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryList",
    },
    sort: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortList",
    },
    style: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formula?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._formula.internalValue = undefined;
      this._query.internalValue = undefined;
      this._sort.internalValue = undefined;
      this._style.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._formula.internalValue = value.formula;
      this._query.internalValue = value.query;
      this._sort.internalValue = value.sort;
      this._style.internalValue = value.style;
    }
  }

  // formula - computed: false, optional: true, required: false
  private _formula = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestFormula[] | cdktn.IResolvable) {
    this._formula.internalValue = value;
  }
  public resetFormula() {
    this._formula.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestQuery[] | cdktn.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestSort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestStyle) {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequest[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixed {
  /**
  * Start time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#from Dashboard#from}
  */
  readonly from: number;
  /**
  * End time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#to Dashboard#to}
  */
  readonly to: number;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixedToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixedOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixedToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixedOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixed): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixed | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixed | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLive {
  /**
  * Unit of the time span. Valid values are `minute`, `hour`, `day`, `week`, `month`, `year`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#unit Dashboard#unit}
  */
  readonly unit: string;
  /**
  * Value of the time span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLiveToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLiveOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLiveToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLiveOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLive): any {
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

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLive | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLive | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#fixed Dashboard#fixed}
  */
  readonly fixed?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#live Dashboard#live}
  */
  readonly live?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLive;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixedToTerraform(struct!.fixed),
    live: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixedList",
    },
    live: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTime | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTime | undefined) {
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
  private _fixed = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeFixed) {
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
  private _live = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeLive) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * Hide any portion of the widget's timeframe that is incomplete due to cost data not being available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#hide_incomplete_cost_data Dashboard#hide_incomplete_cost_data}
  */
  readonly hideIncompleteCostData?: boolean | cdktn.IResolvable;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `week_to_date`, `month_to_date`, `1y`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#live_span Dashboard#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The title of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#custom_links Dashboard#custom_links}
  */
  readonly customLinks?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionCustomLinks[] | cdktn.IResolvable;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#request Dashboard#request}
  */
  readonly request?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequest[] | cdktn.IResolvable;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#time Dashboard#time}
  */
  readonly time?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTime;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    hide_incomplete_cost_data: cdktn.booleanToTerraform(struct!.hideIncompleteCostData),
    live_span: cdktn.stringToTerraform(struct!.liveSpan),
    title: cdktn.stringToTerraform(struct!.title),
    title_align: cdktn.stringToTerraform(struct!.titleAlign),
    title_size: cdktn.stringToTerraform(struct!.titleSize),
    custom_links: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionCustomLinksToTerraform, true)(struct!.customLinks),
    request: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestToTerraform, true)(struct!.request),
    time: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeToTerraform(struct!.time),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinition): any {
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
    custom_links: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionCustomLinksToHclTerraform, true)(struct!.customLinks),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionCustomLinksList",
    },
    request: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestList",
    },
    time: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
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
    if (this._customLinks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLinks = this._customLinks?.internalValue;
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._hideIncompleteCostData = undefined;
      this._liveSpan = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._customLinks.internalValue = undefined;
      this._request.internalValue = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._hideIncompleteCostData = value.hideIncompleteCostData;
      this._liveSpan = value.liveSpan;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._customLinks.internalValue = value.customLinks;
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

  // custom_links - computed: false, optional: true, required: false
  private _customLinks = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionCustomLinksList(this, "custom_links", false);
  public get customLinks() {
    return this._customLinks;
  }
  public putCustomLinks(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionCustomLinks[] | cdktn.IResolvable) {
    this._customLinks.internalValue = value;
  }
  public resetCustomLinks() {
    this._customLinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLinksInput() {
    return this._customLinks.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionRequest[] | cdktn.IResolvable) {
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
  private _time = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionTime) {
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
export interface DashboardWidgetSplitGraphDefinitionSourceWidgetDefinition {
  /**
  * change_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#change_definition Dashboard#change_definition}
  */
  readonly changeDefinition?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionChangeDefinition;
  /**
  * geomap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#geomap_definition Dashboard#geomap_definition}
  */
  readonly geomapDefinition?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionGeomapDefinition;
  /**
  * query_table_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query_table_definition Dashboard#query_table_definition}
  */
  readonly queryTableDefinition?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryTableDefinition;
  /**
  * query_value_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query_value_definition Dashboard#query_value_definition}
  */
  readonly queryValueDefinition?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryValueDefinition;
  /**
  * scatterplot_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#scatterplot_definition Dashboard#scatterplot_definition}
  */
  readonly scatterplotDefinition?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionScatterplotDefinition;
  /**
  * sunburst_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sunburst_definition Dashboard#sunburst_definition}
  */
  readonly sunburstDefinition?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionSunburstDefinition;
  /**
  * timeseries_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#timeseries_definition Dashboard#timeseries_definition}
  */
  readonly timeseriesDefinition?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTimeseriesDefinition;
  /**
  * toplist_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#toplist_definition Dashboard#toplist_definition}
  */
  readonly toplistDefinition?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToplistDefinition;
  /**
  * treemap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#treemap_definition Dashboard#treemap_definition}
  */
  readonly treemapDefinition?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinition;
}

export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    change_definition: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionChangeDefinitionToTerraform(struct!.changeDefinition),
    geomap_definition: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionGeomapDefinitionToTerraform(struct!.geomapDefinition),
    query_table_definition: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryTableDefinitionToTerraform(struct!.queryTableDefinition),
    query_value_definition: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryValueDefinitionToTerraform(struct!.queryValueDefinition),
    scatterplot_definition: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionScatterplotDefinitionToTerraform(struct!.scatterplotDefinition),
    sunburst_definition: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionSunburstDefinitionToTerraform(struct!.sunburstDefinition),
    timeseries_definition: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTimeseriesDefinitionToTerraform(struct!.timeseriesDefinition),
    toplist_definition: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToplistDefinitionToTerraform(struct!.toplistDefinition),
    treemap_definition: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionToTerraform(struct!.treemapDefinition),
  }
}


export function dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionOutputReference | DashboardWidgetSplitGraphDefinitionSourceWidgetDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    change_definition: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionChangeDefinitionToHclTerraform(struct!.changeDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionChangeDefinitionList",
    },
    geomap_definition: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionGeomapDefinitionToHclTerraform(struct!.geomapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionGeomapDefinitionList",
    },
    query_table_definition: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryTableDefinitionToHclTerraform(struct!.queryTableDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryTableDefinitionList",
    },
    query_value_definition: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryValueDefinitionToHclTerraform(struct!.queryValueDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryValueDefinitionList",
    },
    scatterplot_definition: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionScatterplotDefinitionToHclTerraform(struct!.scatterplotDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionScatterplotDefinitionList",
    },
    sunburst_definition: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionSunburstDefinitionToHclTerraform(struct!.sunburstDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionSunburstDefinitionList",
    },
    timeseries_definition: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTimeseriesDefinitionToHclTerraform(struct!.timeseriesDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTimeseriesDefinitionList",
    },
    toplist_definition: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToplistDefinitionToHclTerraform(struct!.toplistDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToplistDefinitionList",
    },
    treemap_definition: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionToHclTerraform(struct!.treemapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSourceWidgetDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeDefinition = this._changeDefinition?.internalValue;
    }
    if (this._geomapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geomapDefinition = this._geomapDefinition?.internalValue;
    }
    if (this._queryTableDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTableDefinition = this._queryTableDefinition?.internalValue;
    }
    if (this._queryValueDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryValueDefinition = this._queryValueDefinition?.internalValue;
    }
    if (this._scatterplotDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scatterplotDefinition = this._scatterplotDefinition?.internalValue;
    }
    if (this._sunburstDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sunburstDefinition = this._sunburstDefinition?.internalValue;
    }
    if (this._timeseriesDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesDefinition = this._timeseriesDefinition?.internalValue;
    }
    if (this._toplistDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toplistDefinition = this._toplistDefinition?.internalValue;
    }
    if (this._treemapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.treemapDefinition = this._treemapDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeDefinition.internalValue = undefined;
      this._geomapDefinition.internalValue = undefined;
      this._queryTableDefinition.internalValue = undefined;
      this._queryValueDefinition.internalValue = undefined;
      this._scatterplotDefinition.internalValue = undefined;
      this._sunburstDefinition.internalValue = undefined;
      this._timeseriesDefinition.internalValue = undefined;
      this._toplistDefinition.internalValue = undefined;
      this._treemapDefinition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeDefinition.internalValue = value.changeDefinition;
      this._geomapDefinition.internalValue = value.geomapDefinition;
      this._queryTableDefinition.internalValue = value.queryTableDefinition;
      this._queryValueDefinition.internalValue = value.queryValueDefinition;
      this._scatterplotDefinition.internalValue = value.scatterplotDefinition;
      this._sunburstDefinition.internalValue = value.sunburstDefinition;
      this._timeseriesDefinition.internalValue = value.timeseriesDefinition;
      this._toplistDefinition.internalValue = value.toplistDefinition;
      this._treemapDefinition.internalValue = value.treemapDefinition;
    }
  }

  // change_definition - computed: false, optional: true, required: false
  private _changeDefinition = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionChangeDefinitionOutputReference(this, "change_definition");
  public get changeDefinition() {
    return this._changeDefinition;
  }
  public putChangeDefinition(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionChangeDefinition) {
    this._changeDefinition.internalValue = value;
  }
  public resetChangeDefinition() {
    this._changeDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeDefinitionInput() {
    return this._changeDefinition.internalValue;
  }

  // geomap_definition - computed: false, optional: true, required: false
  private _geomapDefinition = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionGeomapDefinitionOutputReference(this, "geomap_definition");
  public get geomapDefinition() {
    return this._geomapDefinition;
  }
  public putGeomapDefinition(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionGeomapDefinition) {
    this._geomapDefinition.internalValue = value;
  }
  public resetGeomapDefinition() {
    this._geomapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geomapDefinitionInput() {
    return this._geomapDefinition.internalValue;
  }

  // query_table_definition - computed: false, optional: true, required: false
  private _queryTableDefinition = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryTableDefinitionOutputReference(this, "query_table_definition");
  public get queryTableDefinition() {
    return this._queryTableDefinition;
  }
  public putQueryTableDefinition(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryTableDefinition) {
    this._queryTableDefinition.internalValue = value;
  }
  public resetQueryTableDefinition() {
    this._queryTableDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTableDefinitionInput() {
    return this._queryTableDefinition.internalValue;
  }

  // query_value_definition - computed: false, optional: true, required: false
  private _queryValueDefinition = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryValueDefinitionOutputReference(this, "query_value_definition");
  public get queryValueDefinition() {
    return this._queryValueDefinition;
  }
  public putQueryValueDefinition(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionQueryValueDefinition) {
    this._queryValueDefinition.internalValue = value;
  }
  public resetQueryValueDefinition() {
    this._queryValueDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryValueDefinitionInput() {
    return this._queryValueDefinition.internalValue;
  }

  // scatterplot_definition - computed: false, optional: true, required: false
  private _scatterplotDefinition = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionScatterplotDefinitionOutputReference(this, "scatterplot_definition");
  public get scatterplotDefinition() {
    return this._scatterplotDefinition;
  }
  public putScatterplotDefinition(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionScatterplotDefinition) {
    this._scatterplotDefinition.internalValue = value;
  }
  public resetScatterplotDefinition() {
    this._scatterplotDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scatterplotDefinitionInput() {
    return this._scatterplotDefinition.internalValue;
  }

  // sunburst_definition - computed: false, optional: true, required: false
  private _sunburstDefinition = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionSunburstDefinitionOutputReference(this, "sunburst_definition");
  public get sunburstDefinition() {
    return this._sunburstDefinition;
  }
  public putSunburstDefinition(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionSunburstDefinition) {
    this._sunburstDefinition.internalValue = value;
  }
  public resetSunburstDefinition() {
    this._sunburstDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sunburstDefinitionInput() {
    return this._sunburstDefinition.internalValue;
  }

  // timeseries_definition - computed: false, optional: true, required: false
  private _timeseriesDefinition = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTimeseriesDefinitionOutputReference(this, "timeseries_definition");
  public get timeseriesDefinition() {
    return this._timeseriesDefinition;
  }
  public putTimeseriesDefinition(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTimeseriesDefinition) {
    this._timeseriesDefinition.internalValue = value;
  }
  public resetTimeseriesDefinition() {
    this._timeseriesDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesDefinitionInput() {
    return this._timeseriesDefinition.internalValue;
  }

  // toplist_definition - computed: false, optional: true, required: false
  private _toplistDefinition = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToplistDefinitionOutputReference(this, "toplist_definition");
  public get toplistDefinition() {
    return this._toplistDefinition;
  }
  public putToplistDefinition(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToplistDefinition) {
    this._toplistDefinition.internalValue = value;
  }
  public resetToplistDefinition() {
    this._toplistDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toplistDefinitionInput() {
    return this._toplistDefinition.internalValue;
  }

  // treemap_definition - computed: false, optional: true, required: false
  private _treemapDefinition = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinitionOutputReference(this, "treemap_definition");
  public get treemapDefinition() {
    return this._treemapDefinition;
  }
  public putTreemapDefinition(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionTreemapDefinition) {
    this._treemapDefinition.internalValue = value;
  }
  public resetTreemapDefinition() {
    this._treemapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treemapDefinitionInput() {
    return this._treemapDefinition.internalValue;
  }
}
export interface DashboardWidgetSplitGraphDefinitionSplitConfigSortCompute {
  /**
  * How to aggregate the sort metric for the purposes of ordering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric to use for sorting graphs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
}

export function dashboardWidgetSplitGraphDefinitionSplitConfigSortComputeToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigSortComputeOutputReference | DashboardWidgetSplitGraphDefinitionSplitConfigSortCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
  }
}


export function dashboardWidgetSplitGraphDefinitionSplitConfigSortComputeToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigSortComputeOutputReference | DashboardWidgetSplitGraphDefinitionSplitConfigSortCompute): any {
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

export class DashboardWidgetSplitGraphDefinitionSplitConfigSortComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSplitConfigSortCompute | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSplitConfigSortCompute | undefined) {
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

  // aggregation - computed: false, optional: true, required: false
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
export interface DashboardWidgetSplitGraphDefinitionSplitConfigSort {
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#compute Dashboard#compute}
  */
  readonly compute?: DashboardWidgetSplitGraphDefinitionSplitConfigSortCompute;
}

export function dashboardWidgetSplitGraphDefinitionSplitConfigSortToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigSortOutputReference | DashboardWidgetSplitGraphDefinitionSplitConfigSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order: cdktn.stringToTerraform(struct!.order),
    compute: dashboardWidgetSplitGraphDefinitionSplitConfigSortComputeToTerraform(struct!.compute),
  }
}


export function dashboardWidgetSplitGraphDefinitionSplitConfigSortToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigSortOutputReference | DashboardWidgetSplitGraphDefinitionSplitConfigSort): any {
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
    compute: {
      value: dashboardWidgetSplitGraphDefinitionSplitConfigSortComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSplitConfigSortComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSplitConfigSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSplitConfigSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSplitConfigSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._order = undefined;
      this._compute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._order = value.order;
      this._compute.internalValue = value.compute;
    }
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

  // compute - computed: false, optional: true, required: false
  private _compute = new DashboardWidgetSplitGraphDefinitionSplitConfigSortComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetSplitGraphDefinitionSplitConfigSortCompute) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }
}
export interface DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensions {
  /**
  * The system interprets this attribute differently depending on the data source of the query being split. For metrics, it's a tag. For the events platform, it's an attribute or tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#one_graph_per Dashboard#one_graph_per}
  */
  readonly oneGraphPer: string;
}

export function dashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensionsToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    one_graph_per: cdktn.stringToTerraform(struct!.oneGraphPer),
  }
}


export function dashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensionsToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    one_graph_per: {
      value: cdktn.stringToHclTerraform(struct!.oneGraphPer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oneGraphPer !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneGraphPer = this._oneGraphPer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oneGraphPer = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oneGraphPer = value.oneGraphPer;
    }
  }

  // one_graph_per - computed: false, optional: false, required: true
  private _oneGraphPer?: string; 
  public get oneGraphPer() {
    return this.getStringAttribute('one_graph_per');
  }
  public set oneGraphPer(value: string) {
    this._oneGraphPer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oneGraphPerInput() {
    return this._oneGraphPer;
  }
}

export class DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensionsList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensions[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensionsOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#tag_key Dashboard#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#tag_values Dashboard#tag_values}
  */
  readonly tagValues: string[];
}

export function dashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVectorToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVector | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
    tag_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tagValues),
  }
}


export function dashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVectorToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVector | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tagValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVectorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVector | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVector | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValues = value.tagValues;
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

  // tag_values - computed: false, optional: false, required: true
  private _tagValues?: string[]; 
  public get tagValues() {
    return this.getListAttribute('tag_values');
  }
  public set tagValues(value: string[]) {
    this._tagValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues;
  }
}

export class DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVectorList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVector[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVectorOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplits {
  /**
  * split_vector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#split_vector Dashboard#split_vector}
  */
  readonly splitVector: DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVector[] | cdktn.IResolvable;
}

export function dashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    split_vector: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVectorToTerraform, true)(struct!.splitVector),
  }
}


export function dashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    split_vector: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVectorToHclTerraform, true)(struct!.splitVector),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitVector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitVector = this._splitVector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._splitVector.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._splitVector.internalValue = value.splitVector;
    }
  }

  // split_vector - computed: false, optional: false, required: true
  private _splitVector = new DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVectorList(this, "split_vector", false);
  public get splitVector() {
    return this._splitVector;
  }
  public putSplitVector(value: DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsSplitVector[] | cdktn.IResolvable) {
    this._splitVector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitVectorInput() {
    return this._splitVector.internalValue;
  }
}

export class DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplits[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsOutputReference {
    return new DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSplitGraphDefinitionSplitConfig {
  /**
  * Maximum number of graphs to display in the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort: DashboardWidgetSplitGraphDefinitionSplitConfigSort;
  /**
  * split_dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#split_dimensions Dashboard#split_dimensions}
  */
  readonly splitDimensions: DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensions[] | cdktn.IResolvable;
  /**
  * static_splits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#static_splits Dashboard#static_splits}
  */
  readonly staticSplits?: DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplits[] | cdktn.IResolvable;
}

export function dashboardWidgetSplitGraphDefinitionSplitConfigToTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigOutputReference | DashboardWidgetSplitGraphDefinitionSplitConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: dashboardWidgetSplitGraphDefinitionSplitConfigSortToTerraform(struct!.sort),
    split_dimensions: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensionsToTerraform, true)(struct!.splitDimensions),
    static_splits: cdktn.listMapper(dashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsToTerraform, true)(struct!.staticSplits),
  }
}


export function dashboardWidgetSplitGraphDefinitionSplitConfigToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionSplitConfigOutputReference | DashboardWidgetSplitGraphDefinitionSplitConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort: {
      value: dashboardWidgetSplitGraphDefinitionSplitConfigSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSplitConfigSortList",
    },
    split_dimensions: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensionsToHclTerraform, true)(struct!.splitDimensions),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensionsList",
    },
    static_splits: {
      value: cdktn.listMapperHcl(dashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsToHclTerraform, true)(struct!.staticSplits),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionSplitConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionSplitConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    if (this._splitDimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitDimensions = this._splitDimensions?.internalValue;
    }
    if (this._staticSplits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticSplits = this._staticSplits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionSplitConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._sort.internalValue = undefined;
      this._splitDimensions.internalValue = undefined;
      this._staticSplits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._sort.internalValue = value.sort;
      this._splitDimensions.internalValue = value.splitDimensions;
      this._staticSplits.internalValue = value.staticSplits;
    }
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

  // sort - computed: false, optional: false, required: true
  private _sort = new DashboardWidgetSplitGraphDefinitionSplitConfigSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetSplitGraphDefinitionSplitConfigSort) {
    this._sort.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }

  // split_dimensions - computed: false, optional: false, required: true
  private _splitDimensions = new DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensionsList(this, "split_dimensions", false);
  public get splitDimensions() {
    return this._splitDimensions;
  }
  public putSplitDimensions(value: DashboardWidgetSplitGraphDefinitionSplitConfigSplitDimensions[] | cdktn.IResolvable) {
    this._splitDimensions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDimensionsInput() {
    return this._splitDimensions.internalValue;
  }

  // static_splits - computed: false, optional: true, required: false
  private _staticSplits = new DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplitsList(this, "static_splits", false);
  public get staticSplits() {
    return this._staticSplits;
  }
  public putStaticSplits(value: DashboardWidgetSplitGraphDefinitionSplitConfigStaticSplits[] | cdktn.IResolvable) {
    this._staticSplits.internalValue = value;
  }
  public resetStaticSplits() {
    this._staticSplits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSplitsInput() {
    return this._staticSplits.internalValue;
  }
}
export interface DashboardWidgetSplitGraphDefinitionTimeFixed {
  /**
  * Start time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#from Dashboard#from}
  */
  readonly from: number;
  /**
  * End time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#to Dashboard#to}
  */
  readonly to: number;
}

export function dashboardWidgetSplitGraphDefinitionTimeFixedToTerraform(struct?: DashboardWidgetSplitGraphDefinitionTimeFixedOutputReference | DashboardWidgetSplitGraphDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function dashboardWidgetSplitGraphDefinitionTimeFixedToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionTimeFixedOutputReference | DashboardWidgetSplitGraphDefinitionTimeFixed): any {
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

export class DashboardWidgetSplitGraphDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionTimeFixed | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionTimeFixed | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionTimeLive {
  /**
  * Unit of the time span. Valid values are `minute`, `hour`, `day`, `week`, `month`, `year`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#unit Dashboard#unit}
  */
  readonly unit: string;
  /**
  * Value of the time span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetSplitGraphDefinitionTimeLiveToTerraform(struct?: DashboardWidgetSplitGraphDefinitionTimeLiveOutputReference | DashboardWidgetSplitGraphDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function dashboardWidgetSplitGraphDefinitionTimeLiveToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionTimeLiveOutputReference | DashboardWidgetSplitGraphDefinitionTimeLive): any {
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

export class DashboardWidgetSplitGraphDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionTimeLive | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionTimeLive | undefined) {
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
export interface DashboardWidgetSplitGraphDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#fixed Dashboard#fixed}
  */
  readonly fixed?: DashboardWidgetSplitGraphDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#live Dashboard#live}
  */
  readonly live?: DashboardWidgetSplitGraphDefinitionTimeLive;
}

export function dashboardWidgetSplitGraphDefinitionTimeToTerraform(struct?: DashboardWidgetSplitGraphDefinitionTimeOutputReference | DashboardWidgetSplitGraphDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: dashboardWidgetSplitGraphDefinitionTimeFixedToTerraform(struct!.fixed),
    live: dashboardWidgetSplitGraphDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function dashboardWidgetSplitGraphDefinitionTimeToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionTimeOutputReference | DashboardWidgetSplitGraphDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: dashboardWidgetSplitGraphDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionTimeFixedList",
    },
    live: {
      value: dashboardWidgetSplitGraphDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinitionTime | undefined {
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

  public set internalValue(value: DashboardWidgetSplitGraphDefinitionTime | undefined) {
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
  private _fixed = new DashboardWidgetSplitGraphDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: DashboardWidgetSplitGraphDefinitionTimeFixed) {
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
  private _live = new DashboardWidgetSplitGraphDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: DashboardWidgetSplitGraphDefinitionTimeLive) {
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
export interface DashboardWidgetSplitGraphDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * Normalize y axes across graphs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#has_uniform_y_axes Dashboard#has_uniform_y_axes}
  */
  readonly hasUniformYAxes?: boolean | cdktn.IResolvable;
  /**
  * Hide any portion of the widget's timeframe that is incomplete due to cost data not being available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#hide_incomplete_cost_data Dashboard#hide_incomplete_cost_data}
  */
  readonly hideIncompleteCostData?: boolean | cdktn.IResolvable;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `week_to_date`, `month_to_date`, `1y`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#live_span Dashboard#live_span}
  */
  readonly liveSpan?: string;
  /**
  * Size of the individual graphs in the split.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#size Dashboard#size}
  */
  readonly size: string;
  /**
  * The title of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
  /**
  * source_widget_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#source_widget_definition Dashboard#source_widget_definition}
  */
  readonly sourceWidgetDefinition?: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinition;
  /**
  * split_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#split_config Dashboard#split_config}
  */
  readonly splitConfig: DashboardWidgetSplitGraphDefinitionSplitConfig;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#time Dashboard#time}
  */
  readonly time?: DashboardWidgetSplitGraphDefinitionTime;
}

export function dashboardWidgetSplitGraphDefinitionToTerraform(struct?: DashboardWidgetSplitGraphDefinitionOutputReference | DashboardWidgetSplitGraphDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    has_uniform_y_axes: cdktn.booleanToTerraform(struct!.hasUniformYAxes),
    hide_incomplete_cost_data: cdktn.booleanToTerraform(struct!.hideIncompleteCostData),
    live_span: cdktn.stringToTerraform(struct!.liveSpan),
    size: cdktn.stringToTerraform(struct!.size),
    title: cdktn.stringToTerraform(struct!.title),
    title_align: cdktn.stringToTerraform(struct!.titleAlign),
    title_size: cdktn.stringToTerraform(struct!.titleSize),
    source_widget_definition: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToTerraform(struct!.sourceWidgetDefinition),
    split_config: dashboardWidgetSplitGraphDefinitionSplitConfigToTerraform(struct!.splitConfig),
    time: dashboardWidgetSplitGraphDefinitionTimeToTerraform(struct!.time),
  }
}


export function dashboardWidgetSplitGraphDefinitionToHclTerraform(struct?: DashboardWidgetSplitGraphDefinitionOutputReference | DashboardWidgetSplitGraphDefinition): any {
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
    has_uniform_y_axes: {
      value: cdktn.booleanToHclTerraform(struct!.hasUniformYAxes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    size: {
      value: cdktn.stringToHclTerraform(struct!.size),
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
    source_widget_definition: {
      value: dashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionToHclTerraform(struct!.sourceWidgetDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionList",
    },
    split_config: {
      value: dashboardWidgetSplitGraphDefinitionSplitConfigToHclTerraform(struct!.splitConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionSplitConfigList",
    },
    time: {
      value: dashboardWidgetSplitGraphDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSplitGraphDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSplitGraphDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSplitGraphDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hasUniformYAxes !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasUniformYAxes = this._hasUniformYAxes;
    }
    if (this._hideIncompleteCostData !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideIncompleteCostData = this._hideIncompleteCostData;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
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
    if (this._sourceWidgetDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceWidgetDefinition = this._sourceWidgetDefinition?.internalValue;
    }
    if (this._splitConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitConfig = this._splitConfig?.internalValue;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSplitGraphDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._hasUniformYAxes = undefined;
      this._hideIncompleteCostData = undefined;
      this._liveSpan = undefined;
      this._size = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._sourceWidgetDefinition.internalValue = undefined;
      this._splitConfig.internalValue = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._hasUniformYAxes = value.hasUniformYAxes;
      this._hideIncompleteCostData = value.hideIncompleteCostData;
      this._liveSpan = value.liveSpan;
      this._size = value.size;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._sourceWidgetDefinition.internalValue = value.sourceWidgetDefinition;
      this._splitConfig.internalValue = value.splitConfig;
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

  // has_uniform_y_axes - computed: false, optional: true, required: false
  private _hasUniformYAxes?: boolean | cdktn.IResolvable; 
  public get hasUniformYAxes() {
    return this.getBooleanAttribute('has_uniform_y_axes');
  }
  public set hasUniformYAxes(value: boolean | cdktn.IResolvable) {
    this._hasUniformYAxes = value;
  }
  public resetHasUniformYAxes() {
    this._hasUniformYAxes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasUniformYAxesInput() {
    return this._hasUniformYAxes;
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

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // source_widget_definition - computed: false, optional: true, required: false
  private _sourceWidgetDefinition = new DashboardWidgetSplitGraphDefinitionSourceWidgetDefinitionOutputReference(this, "source_widget_definition");
  public get sourceWidgetDefinition() {
    return this._sourceWidgetDefinition;
  }
  public putSourceWidgetDefinition(value: DashboardWidgetSplitGraphDefinitionSourceWidgetDefinition) {
    this._sourceWidgetDefinition.internalValue = value;
  }
  public resetSourceWidgetDefinition() {
    this._sourceWidgetDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceWidgetDefinitionInput() {
    return this._sourceWidgetDefinition.internalValue;
  }

  // split_config - computed: false, optional: false, required: true
  private _splitConfig = new DashboardWidgetSplitGraphDefinitionSplitConfigOutputReference(this, "split_config");
  public get splitConfig() {
    return this._splitConfig;
  }
  public putSplitConfig(value: DashboardWidgetSplitGraphDefinitionSplitConfig) {
    this._splitConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitConfigInput() {
    return this._splitConfig.internalValue;
  }

  // time - computed: false, optional: true, required: false
  private _time = new DashboardWidgetSplitGraphDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: DashboardWidgetSplitGraphDefinitionTime) {
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
export interface DashboardWidgetSunburstDefinitionCustomLink {
  /**
  * The flag for toggling context menu link visibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#is_hidden Dashboard#is_hidden}
  */
  readonly isHidden?: boolean | cdktn.IResolvable;
  /**
  * The label for the custom link URL. Keep the label short and descriptive. Use metrics and tags as variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * The URL of the custom link. URL must include `http` or `https`. A relative URL must start with `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#link Dashboard#link}
  */
  readonly link?: string;
  /**
  * The label ID that refers to a context menu link. Can be `logs`, `hosts`, `traces`, `profiles`, `processes`, `containers`, or `rum`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#override_label Dashboard#override_label}
  */
  readonly overrideLabel?: string;
}

export function dashboardWidgetSunburstDefinitionCustomLinkToTerraform(struct?: DashboardWidgetSunburstDefinitionCustomLink | cdktn.IResolvable): any {
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


export function dashboardWidgetSunburstDefinitionCustomLinkToHclTerraform(struct?: DashboardWidgetSunburstDefinitionCustomLink | cdktn.IResolvable): any {
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

export class DashboardWidgetSunburstDefinitionCustomLinkOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionCustomLink | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionCustomLink | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSunburstDefinitionCustomLinkList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionCustomLink[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionCustomLinkOutputReference {
    return new DashboardWidgetSunburstDefinitionCustomLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionLegendInline {
  /**
  * Whether to hide the percentages of the groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#hide_percent Dashboard#hide_percent}
  */
  readonly hidePercent?: boolean | cdktn.IResolvable;
  /**
  * Whether to hide the values of the groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#hide_value Dashboard#hide_value}
  */
  readonly hideValue?: boolean | cdktn.IResolvable;
  /**
  * The type of legend (inline or automatic).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
}

export function dashboardWidgetSunburstDefinitionLegendInlineToTerraform(struct?: DashboardWidgetSunburstDefinitionLegendInlineOutputReference | DashboardWidgetSunburstDefinitionLegendInline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hide_percent: cdktn.booleanToTerraform(struct!.hidePercent),
    hide_value: cdktn.booleanToTerraform(struct!.hideValue),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function dashboardWidgetSunburstDefinitionLegendInlineToHclTerraform(struct?: DashboardWidgetSunburstDefinitionLegendInlineOutputReference | DashboardWidgetSunburstDefinitionLegendInline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hide_percent: {
      value: cdktn.booleanToHclTerraform(struct!.hidePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_value: {
      value: cdktn.booleanToHclTerraform(struct!.hideValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DashboardWidgetSunburstDefinitionLegendInlineOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionLegendInline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hidePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidePercent = this._hidePercent;
    }
    if (this._hideValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideValue = this._hideValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionLegendInline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hidePercent = undefined;
      this._hideValue = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hidePercent = value.hidePercent;
      this._hideValue = value.hideValue;
      this._type = value.type;
    }
  }

  // hide_percent - computed: false, optional: true, required: false
  private _hidePercent?: boolean | cdktn.IResolvable; 
  public get hidePercent() {
    return this.getBooleanAttribute('hide_percent');
  }
  public set hidePercent(value: boolean | cdktn.IResolvable) {
    this._hidePercent = value;
  }
  public resetHidePercent() {
    this._hidePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hidePercentInput() {
    return this._hidePercent;
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
export interface DashboardWidgetSunburstDefinitionLegendTable {
  /**
  * The type of legend (table or none).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
}

export function dashboardWidgetSunburstDefinitionLegendTableToTerraform(struct?: DashboardWidgetSunburstDefinitionLegendTableOutputReference | DashboardWidgetSunburstDefinitionLegendTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function dashboardWidgetSunburstDefinitionLegendTableToHclTerraform(struct?: DashboardWidgetSunburstDefinitionLegendTableOutputReference | DashboardWidgetSunburstDefinitionLegendTable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionLegendTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionLegendTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionLegendTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
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
}
export interface DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery {
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

export function dashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery {
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

export function dashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery;
}

export function dashboardWidgetSunburstDefinitionRequestApmQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function dashboardWidgetSunburstDefinitionRequestApmQueryGroupByToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestApmQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery) {
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

export class DashboardWidgetSunburstDefinitionRequestApmQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestApmQueryGroupByOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute {
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

export function dashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable): any {
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


export function dashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable): any {
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

export class DashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestApmQuery {
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
  readonly computeQuery?: DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute[] | cdktn.IResolvable;
}

export function dashboardWidgetSunburstDefinitionRequestApmQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryOutputReference | DashboardWidgetSunburstDefinitionRequestApmQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestApmQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function dashboardWidgetSunburstDefinitionRequestApmQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryOutputReference | DashboardWidgetSunburstDefinitionRequestApmQuery): any {
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
      value: dashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestApmQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestApmQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestApmQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestApmQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestApmQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetSunburstDefinitionRequestApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new DashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery {
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

export function dashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery {
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

export function dashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery;
}

export function dashboardWidgetSunburstDefinitionRequestAuditQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function dashboardWidgetSunburstDefinitionRequestAuditQueryGroupByToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestAuditQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery) {
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

export class DashboardWidgetSunburstDefinitionRequestAuditQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestAuditQueryGroupByOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestAuditQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute {
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

export function dashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute | cdktn.IResolvable): any {
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


export function dashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute | cdktn.IResolvable): any {
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

export class DashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestAuditQuery {
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
  readonly computeQuery?: DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute[] | cdktn.IResolvable;
}

export function dashboardWidgetSunburstDefinitionRequestAuditQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryOutputReference | DashboardWidgetSunburstDefinitionRequestAuditQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestAuditQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function dashboardWidgetSunburstDefinitionRequestAuditQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryOutputReference | DashboardWidgetSunburstDefinitionRequestAuditQuery): any {
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
      value: dashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestAuditQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestAuditQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestAuditQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestAuditQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestAuditQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetSunburstDefinitionRequestAuditQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new DashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptions {
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

export function dashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptionsToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptionsOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trend_type: cdktn.stringToTerraform(struct!.trendType),
    y_scale: cdktn.stringToTerraform(struct!.yScale),
  }
}


export function dashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptionsToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptionsOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptions): any {
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

export class DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptions | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptions | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormats {
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

export function dashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormats | cdktn.IResolvable): any {
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


export function dashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormats | cdktn.IResolvable): any {
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

export class DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormats | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormats | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormats[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestFormulaLimit {
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

export function dashboardWidgetSunburstDefinitionRequestFormulaLimitToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaLimitOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function dashboardWidgetSunburstDefinitionRequestFormulaLimitToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaLimitOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaLimit): any {
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

export class DashboardWidgetSunburstDefinitionRequestFormulaLimitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestFormulaLimit | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestFormulaLimit | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonical {
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

export function dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonicalToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonicalOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonical): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    per_unit_name: cdktn.stringToTerraform(struct!.perUnitName),
    unit_name: cdktn.stringToTerraform(struct!.unitName),
  }
}


export function dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonicalToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonicalOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonical): any {
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

export class DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonicalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonical | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonical | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustom {
  /**
  * Unit label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label: string;
}

export function dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustomToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustomOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustomToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustomOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustom): any {
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

export class DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustom | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnit {
  /**
  * canonical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#canonical Dashboard#canonical}
  */
  readonly canonical?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonical;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#custom Dashboard#custom}
  */
  readonly custom?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustom;
}

export function dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    canonical: dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonicalToTerraform(struct!.canonical),
    custom: dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustomToTerraform(struct!.custom),
  }
}


export function dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    canonical: {
      value: dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonicalToHclTerraform(struct!.canonical),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonicalList",
    },
    custom: {
      value: dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnit | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnit | undefined) {
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
  private _canonical = new DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonicalOutputReference(this, "canonical");
  public get canonical() {
    return this._canonical;
  }
  public putCanonical(value: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCanonical) {
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
  private _custom = new DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitCustom) {
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
export interface DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScale {
  /**
  * The name of the unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#unit_name Dashboard#unit_name}
  */
  readonly unitName: string;
}

export function dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScaleToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScaleOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit_name: cdktn.stringToTerraform(struct!.unitName),
  }
}


export function dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScaleToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScaleOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScale): any {
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

export class DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unitName !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitName = this._unitName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScale | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestFormulaNumberFormat {
  /**
  * unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#unit Dashboard#unit}
  */
  readonly unit: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnit;
  /**
  * unit_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#unit_scale Dashboard#unit_scale}
  */
  readonly unitScale?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScale;
}

export function dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaNumberFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitToTerraform(struct!.unit),
    unit_scale: dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScaleToTerraform(struct!.unitScale),
  }
}


export function dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaNumberFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitToHclTerraform(struct!.unit),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitList",
    },
    unit_scale: {
      value: dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScaleToHclTerraform(struct!.unitScale),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestFormulaNumberFormat | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormat | undefined) {
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
  private _unit = new DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitOutputReference(this, "unit");
  public get unit() {
    return this._unit;
  }
  public putUnit(value: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnit) {
    this._unit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit.internalValue;
  }

  // unit_scale - computed: false, optional: true, required: false
  private _unitScale = new DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScaleOutputReference(this, "unit_scale");
  public get unitScale() {
    return this._unitScale;
  }
  public putUnitScale(value: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatUnitScale) {
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
export interface DashboardWidgetSunburstDefinitionRequestFormulaStyle {
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

export function dashboardWidgetSunburstDefinitionRequestFormulaStyleToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaStyleOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    palette: cdktn.stringToTerraform(struct!.palette),
    palette_index: cdktn.numberToTerraform(struct!.paletteIndex),
  }
}


export function dashboardWidgetSunburstDefinitionRequestFormulaStyleToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaStyleOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaStyle): any {
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

export class DashboardWidgetSunburstDefinitionRequestFormulaStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestFormulaStyle | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestFormulaStyle | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestFormula {
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
  readonly cellDisplayModeOptions?: DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptions;
  /**
  * conditional_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#conditional_formats Dashboard#conditional_formats}
  */
  readonly conditionalFormats?: DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormats[] | cdktn.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: DashboardWidgetSunburstDefinitionRequestFormulaLimit;
  /**
  * number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#number_format Dashboard#number_format}
  */
  readonly numberFormat?: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormat;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#style Dashboard#style}
  */
  readonly style?: DashboardWidgetSunburstDefinitionRequestFormulaStyle;
}

export function dashboardWidgetSunburstDefinitionRequestFormulaToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormula | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    cell_display_mode: cdktn.stringToTerraform(struct!.cellDisplayMode),
    formula_expression: cdktn.stringToTerraform(struct!.formulaExpression),
    cell_display_mode_options: dashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptionsToTerraform(struct!.cellDisplayModeOptions),
    conditional_formats: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsToTerraform, true)(struct!.conditionalFormats),
    limit: dashboardWidgetSunburstDefinitionRequestFormulaLimitToTerraform(struct!.limit),
    number_format: dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatToTerraform(struct!.numberFormat),
    style: dashboardWidgetSunburstDefinitionRequestFormulaStyleToTerraform(struct!.style),
  }
}


export function dashboardWidgetSunburstDefinitionRequestFormulaToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormula | cdktn.IResolvable): any {
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
      value: dashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptionsToHclTerraform(struct!.cellDisplayModeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptionsList",
    },
    conditional_formats: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsToHclTerraform, true)(struct!.conditionalFormats),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsList",
    },
    limit: {
      value: dashboardWidgetSunburstDefinitionRequestFormulaLimitToHclTerraform(struct!.limit),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestFormulaLimitList",
    },
    number_format: {
      value: dashboardWidgetSunburstDefinitionRequestFormulaNumberFormatToHclTerraform(struct!.numberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatList",
    },
    style: {
      value: dashboardWidgetSunburstDefinitionRequestFormulaStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestFormulaStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestFormulaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestFormula | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestFormula | cdktn.IResolvable | undefined) {
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
  private _cellDisplayModeOptions = new DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptionsOutputReference(this, "cell_display_mode_options");
  public get cellDisplayModeOptions() {
    return this._cellDisplayModeOptions;
  }
  public putCellDisplayModeOptions(value: DashboardWidgetSunburstDefinitionRequestFormulaCellDisplayModeOptions) {
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
  private _conditionalFormats = new DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormats[] | cdktn.IResolvable) {
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
  private _limit = new DashboardWidgetSunburstDefinitionRequestFormulaLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: DashboardWidgetSunburstDefinitionRequestFormulaLimit) {
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
  private _numberFormat = new DashboardWidgetSunburstDefinitionRequestFormulaNumberFormatOutputReference(this, "number_format");
  public get numberFormat() {
    return this._numberFormat;
  }
  public putNumberFormat(value: DashboardWidgetSunburstDefinitionRequestFormulaNumberFormat) {
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
  private _style = new DashboardWidgetSunburstDefinitionRequestFormulaStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: DashboardWidgetSunburstDefinitionRequestFormulaStyle) {
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

export class DashboardWidgetSunburstDefinitionRequestFormulaList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestFormula[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestFormulaOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestFormulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery {
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

export function dashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery {
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

export function dashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery;
}

export function dashboardWidgetSunburstDefinitionRequestLogQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function dashboardWidgetSunburstDefinitionRequestLogQueryGroupByToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestLogQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery) {
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

export class DashboardWidgetSunburstDefinitionRequestLogQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestLogQueryGroupByOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute {
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

export function dashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable): any {
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


export function dashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable): any {
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

export class DashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestLogQuery {
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
  readonly computeQuery?: DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute[] | cdktn.IResolvable;
}

export function dashboardWidgetSunburstDefinitionRequestLogQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryOutputReference | DashboardWidgetSunburstDefinitionRequestLogQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestLogQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function dashboardWidgetSunburstDefinitionRequestLogQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryOutputReference | DashboardWidgetSunburstDefinitionRequestLogQuery): any {
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
      value: dashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestLogQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestLogQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestLogQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestLogQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestLogQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetSunburstDefinitionRequestLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new DashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery {
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

export function dashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery {
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

export function dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery;
}

export function dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery) {
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

export class DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute {
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

export function dashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute | cdktn.IResolvable): any {
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


export function dashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute | cdktn.IResolvable): any {
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

export class DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestNetworkQuery {
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
  readonly computeQuery?: DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute[] | cdktn.IResolvable;
}

export function dashboardWidgetSunburstDefinitionRequestNetworkQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryOutputReference | DashboardWidgetSunburstDefinitionRequestNetworkQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function dashboardWidgetSunburstDefinitionRequestNetworkQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryOutputReference | DashboardWidgetSunburstDefinitionRequestNetworkQuery): any {
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
      value: dashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestNetworkQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestNetworkQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestNetworkQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface DashboardWidgetSunburstDefinitionRequestProcessQuery {
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

export function dashboardWidgetSunburstDefinitionRequestProcessQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestProcessQueryOutputReference | DashboardWidgetSunburstDefinitionRequestProcessQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestProcessQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestProcessQueryOutputReference | DashboardWidgetSunburstDefinitionRequestProcessQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestProcessQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestProcessQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQuery {
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

export function dashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryApmMetricsQuery {
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

export function dashboardWidgetSunburstDefinitionRequestQueryApmMetricsQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryApmMetricsQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryApmMetricsQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestQueryApmMetricsQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryApmMetricsQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryApmMetricsQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryApmMetricsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryApmMetricsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryApmMetricsQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQuery {
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

export function dashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryCloudCostQuery {
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

export function dashboardWidgetSunburstDefinitionRequestQueryCloudCostQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryCloudCostQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryCloudCostQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestQueryCloudCostQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryCloudCostQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryCloudCostQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryCloudCostQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryCloudCostQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryCloudCostQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute {
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

export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute | cdktn.IResolvable): any {
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


export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute | cdktn.IResolvable): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort {
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

export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort): any {
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


export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy {
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
  readonly sort?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort;
}

export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort) {
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

export class DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSort {
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

export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSortToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSortOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSort): any {
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


export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSortToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSortOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSort): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSort | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSort | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFields {
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
  readonly sort?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSort;
}

export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSortToTerraform(struct!.sort),
  }
}


export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFields): any {
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
      value: dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFields | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFields | undefined) {
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
  private _sort = new DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsSort) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryEventQuery {
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
  readonly compute: DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * group_by_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#group_by_fields Dashboard#group_by_fields}
  */
  readonly groupByFields?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFields;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search?: DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch;
}

export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQuery): any {
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
    compute: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByToTerraform, true)(struct!.groupBy),
    group_by_fields: dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsToTerraform(struct!.groupByFields),
    search: dashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQuery): any {
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
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByList",
    },
    group_by_fields: {
      value: dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsToHclTerraform(struct!.groupByFields),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsList",
    },
    search: {
      value: dashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestQueryEventQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryEventQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryEventQuery | undefined) {
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
  private _compute = new DashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy[] | cdktn.IResolvable) {
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
  private _groupByFields = new DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFieldsOutputReference(this, "group_by_fields");
  public get groupByFields() {
    return this._groupByFields;
  }
  public putGroupByFields(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByFields) {
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
  private _search = new DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryMetricQuery {
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

export function dashboardWidgetSunburstDefinitionRequestQueryMetricQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryMetricQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryMetricQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestQueryMetricQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryMetricQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryMetricQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryMetricQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryMetricQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryMetricQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryProcessQuery {
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

export function dashboardWidgetSunburstDefinitionRequestQueryProcessQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProcessQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryProcessQuery): any {
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


export function dashboardWidgetSunburstDefinitionRequestQueryProcessQueryToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProcessQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryProcessQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryProcessQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryProcessQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount {
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

export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment {
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

export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser {
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

export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference {
    return new DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters {
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
  readonly account?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#segment Dashboard#segment}
  */
  readonly segment?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/dashboard#user Dashboard#user}
  */
  readonly user?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable;
}

export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference | DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference | DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters): any {
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
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFilters | undefined) {
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
  private _account = new DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup {
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

export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference | DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup): any {
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


export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference | DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryCompute {
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
  readonly rollup?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup;
}

export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeOutputReference | DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    name: cdktn.stringToTerraform(struct!.name),
    rollup: dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToTerraform(struct!.rollup),
  }
}


export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeOutputReference | DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryCompute): any {
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
      value: dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupToHclTerraform(struct!.rollup),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryCompute | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryCompute | undefined) {
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
  private _rollup = new DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollupOutputReference(this, "rollup");
  public get rollup() {
    return this._rollup;
  }
  public putRollup(value: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryComputeRollup) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort {
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

export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortOutputReference | DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort): any {
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


export function dashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortToHclTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortOutputReference | DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryProductAnalyticsExtendedQueryGroupBySort | undefined) {
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
