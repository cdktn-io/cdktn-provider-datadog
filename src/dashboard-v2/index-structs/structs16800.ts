/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchCohortCriteria,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchCohortCriteriaToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchCohortCriteriaToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchCohortCriteriaOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryCompute,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryComputeToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryComputeToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryComputeOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryGroupBy,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryGroupByToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryGroupByToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryGroupByList,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQuery,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmMetricsQuery,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmMetricsQueryToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmMetricsQueryToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmMetricsQueryOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQuery,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQuery,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuery,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQuery,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQuery,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProductAnalyticsExtendedQuery,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProductAnalyticsExtendedQueryToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProductAnalyticsExtendedQueryToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProductAnalyticsExtendedQueryOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestApmQuery,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestFormula,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestFormulaToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestFormulaToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestFormulaList,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestLogQuery,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestProcessQuery,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryOutputReference,
DashboardV2WidgetWildcardDefinitionRequestTimeseriesRequest,
dashboardV2WidgetWildcardDefinitionRequestTimeseriesRequestToTerraform,
dashboardV2WidgetWildcardDefinitionRequestTimeseriesRequestToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestTimeseriesRequestOutputReference } from './structs16400';
import { DashboardV2WidgetWildcardDefinitionRequestHistogramRequest,
dashboardV2WidgetWildcardDefinitionRequestHistogramRequestToTerraform,
dashboardV2WidgetWildcardDefinitionRequestHistogramRequestToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestHistogramRequestOutputReference,
DashboardV2WidgetWildcardDefinitionRequestListstreamRequest,
dashboardV2WidgetWildcardDefinitionRequestListstreamRequestToTerraform,
dashboardV2WidgetWildcardDefinitionRequestListstreamRequestToHclTerraform,
DashboardV2WidgetWildcardDefinitionRequestListstreamRequestOutputReference,
DashboardV2WidgetWildcardDefinitionCustomLink,
dashboardV2WidgetWildcardDefinitionCustomLinkToTerraform,
dashboardV2WidgetWildcardDefinitionCustomLinkToHclTerraform,
DashboardV2WidgetWildcardDefinitionCustomLinkList,
DashboardV2WidgetTreemapDefinition,
dashboardV2WidgetTreemapDefinitionToTerraform,
dashboardV2WidgetTreemapDefinitionToHclTerraform,
DashboardV2WidgetTreemapDefinitionOutputReference,
DashboardV2WidgetWidgetLayout,
dashboardV2WidgetWidgetLayoutToTerraform,
dashboardV2WidgetWidgetLayoutToHclTerraform,
DashboardV2WidgetWidgetLayoutOutputReference } from './structs16000';
import { DashboardV2WidgetAlertGraphDefinition,
dashboardV2WidgetAlertGraphDefinitionToTerraform,
dashboardV2WidgetAlertGraphDefinitionToHclTerraform,
DashboardV2WidgetAlertGraphDefinitionOutputReference,
DashboardV2WidgetAlertValueDefinition,
dashboardV2WidgetAlertValueDefinitionToTerraform,
dashboardV2WidgetAlertValueDefinitionToHclTerraform,
DashboardV2WidgetAlertValueDefinitionOutputReference,
DashboardV2WidgetBarChartDefinition,
dashboardV2WidgetBarChartDefinitionToTerraform,
dashboardV2WidgetBarChartDefinitionToHclTerraform,
DashboardV2WidgetBarChartDefinitionOutputReference } from './structs0';
import { DashboardV2WidgetChangeDefinition,
dashboardV2WidgetChangeDefinitionToTerraform,
dashboardV2WidgetChangeDefinitionToHclTerraform,
DashboardV2WidgetChangeDefinitionOutputReference,
DashboardV2WidgetCheckStatusDefinition,
dashboardV2WidgetCheckStatusDefinitionToTerraform,
dashboardV2WidgetCheckStatusDefinitionToHclTerraform,
DashboardV2WidgetCheckStatusDefinitionOutputReference } from './structs400';
import { DashboardV2WidgetCohortDefinition,
dashboardV2WidgetCohortDefinitionToTerraform,
dashboardV2WidgetCohortDefinitionToHclTerraform,
DashboardV2WidgetCohortDefinitionOutputReference,
DashboardV2WidgetDistributionDefinition,
dashboardV2WidgetDistributionDefinitionToTerraform,
dashboardV2WidgetDistributionDefinitionToHclTerraform,
DashboardV2WidgetDistributionDefinitionOutputReference,
DashboardV2WidgetEventStreamDefinition,
dashboardV2WidgetEventStreamDefinitionToTerraform,
dashboardV2WidgetEventStreamDefinitionToHclTerraform,
DashboardV2WidgetEventStreamDefinitionOutputReference } from './structs800';
import { DashboardV2WidgetEventTimelineDefinition,
dashboardV2WidgetEventTimelineDefinitionToTerraform,
dashboardV2WidgetEventTimelineDefinitionToHclTerraform,
DashboardV2WidgetEventTimelineDefinitionOutputReference,
DashboardV2WidgetFreeTextDefinition,
dashboardV2WidgetFreeTextDefinitionToTerraform,
dashboardV2WidgetFreeTextDefinitionToHclTerraform,
DashboardV2WidgetFreeTextDefinitionOutputReference,
DashboardV2WidgetFunnelDefinition,
dashboardV2WidgetFunnelDefinitionToTerraform,
dashboardV2WidgetFunnelDefinitionToHclTerraform,
DashboardV2WidgetFunnelDefinitionOutputReference,
DashboardV2WidgetGeomapDefinition,
dashboardV2WidgetGeomapDefinitionToTerraform,
dashboardV2WidgetGeomapDefinitionToHclTerraform,
DashboardV2WidgetGeomapDefinitionOutputReference } from './structs1200';
import { DashboardV2WidgetGroupDefinition,
dashboardV2WidgetGroupDefinitionToTerraform,
dashboardV2WidgetGroupDefinitionToHclTerraform,
DashboardV2WidgetGroupDefinitionOutputReference } from './structs8000';
import { DashboardV2WidgetHeatmapDefinition,
dashboardV2WidgetHeatmapDefinitionToTerraform,
dashboardV2WidgetHeatmapDefinitionToHclTerraform,
DashboardV2WidgetHeatmapDefinitionOutputReference } from './structs8400';
import { DashboardV2WidgetHostmapDefinition,
dashboardV2WidgetHostmapDefinitionToTerraform,
dashboardV2WidgetHostmapDefinitionToHclTerraform,
DashboardV2WidgetHostmapDefinitionOutputReference,
DashboardV2WidgetIframeDefinition,
dashboardV2WidgetIframeDefinitionToTerraform,
dashboardV2WidgetIframeDefinitionToHclTerraform,
DashboardV2WidgetIframeDefinitionOutputReference } from './structs8800';
import { DashboardV2WidgetImageDefinition,
dashboardV2WidgetImageDefinitionToTerraform,
dashboardV2WidgetImageDefinitionToHclTerraform,
DashboardV2WidgetImageDefinitionOutputReference,
DashboardV2WidgetListStreamDefinition,
dashboardV2WidgetListStreamDefinitionToTerraform,
dashboardV2WidgetListStreamDefinitionToHclTerraform,
DashboardV2WidgetListStreamDefinitionOutputReference,
DashboardV2WidgetLogStreamDefinition,
dashboardV2WidgetLogStreamDefinitionToTerraform,
dashboardV2WidgetLogStreamDefinitionToHclTerraform,
DashboardV2WidgetLogStreamDefinitionOutputReference,
DashboardV2WidgetManageStatusDefinition,
dashboardV2WidgetManageStatusDefinitionToTerraform,
dashboardV2WidgetManageStatusDefinitionToHclTerraform,
DashboardV2WidgetManageStatusDefinitionOutputReference,
DashboardV2WidgetNoteDefinition,
dashboardV2WidgetNoteDefinitionToTerraform,
dashboardV2WidgetNoteDefinitionToHclTerraform,
DashboardV2WidgetNoteDefinitionOutputReference,
DashboardV2WidgetPointPlotDefinition,
dashboardV2WidgetPointPlotDefinitionToTerraform,
dashboardV2WidgetPointPlotDefinitionToHclTerraform,
DashboardV2WidgetPointPlotDefinitionOutputReference,
DashboardV2WidgetPowerpackDefinition,
dashboardV2WidgetPowerpackDefinitionToTerraform,
dashboardV2WidgetPowerpackDefinitionToHclTerraform,
DashboardV2WidgetPowerpackDefinitionOutputReference,
DashboardV2WidgetProductAnalyticsFunnelDefinition,
dashboardV2WidgetProductAnalyticsFunnelDefinitionToTerraform,
dashboardV2WidgetProductAnalyticsFunnelDefinitionToHclTerraform,
DashboardV2WidgetProductAnalyticsFunnelDefinitionOutputReference } from './structs9200';
import { DashboardV2WidgetQueryTableDefinition,
dashboardV2WidgetQueryTableDefinitionToTerraform,
dashboardV2WidgetQueryTableDefinitionToHclTerraform,
DashboardV2WidgetQueryTableDefinitionOutputReference } from './structs9600';
import { DashboardV2WidgetQueryValueDefinition,
dashboardV2WidgetQueryValueDefinitionToTerraform,
dashboardV2WidgetQueryValueDefinitionToHclTerraform,
DashboardV2WidgetQueryValueDefinitionOutputReference,
DashboardV2WidgetRetentionCurveDefinition,
dashboardV2WidgetRetentionCurveDefinitionToTerraform,
dashboardV2WidgetRetentionCurveDefinitionToHclTerraform,
DashboardV2WidgetRetentionCurveDefinitionOutputReference,
DashboardV2WidgetRunWorkflowDefinition,
dashboardV2WidgetRunWorkflowDefinitionToTerraform,
dashboardV2WidgetRunWorkflowDefinitionToHclTerraform,
DashboardV2WidgetRunWorkflowDefinitionOutputReference,
DashboardV2WidgetSankeyDefinition,
dashboardV2WidgetSankeyDefinitionToTerraform,
dashboardV2WidgetSankeyDefinitionToHclTerraform,
DashboardV2WidgetSankeyDefinitionOutputReference } from './structs10000';
import { DashboardV2WidgetScatterplotDefinition,
dashboardV2WidgetScatterplotDefinitionToTerraform,
dashboardV2WidgetScatterplotDefinitionToHclTerraform,
DashboardV2WidgetScatterplotDefinitionOutputReference,
DashboardV2WidgetServiceLevelObjectiveDefinition,
dashboardV2WidgetServiceLevelObjectiveDefinitionToTerraform,
dashboardV2WidgetServiceLevelObjectiveDefinitionToHclTerraform,
DashboardV2WidgetServiceLevelObjectiveDefinitionOutputReference,
DashboardV2WidgetServicemapDefinition,
dashboardV2WidgetServicemapDefinitionToTerraform,
dashboardV2WidgetServicemapDefinitionToHclTerraform,
DashboardV2WidgetServicemapDefinitionOutputReference,
DashboardV2WidgetSloListDefinition,
dashboardV2WidgetSloListDefinitionToTerraform,
dashboardV2WidgetSloListDefinitionToHclTerraform,
DashboardV2WidgetSloListDefinitionOutputReference } from './structs10800';
import { DashboardV2WidgetSplitGraphDefinition,
dashboardV2WidgetSplitGraphDefinitionToTerraform,
dashboardV2WidgetSplitGraphDefinitionToHclTerraform,
DashboardV2WidgetSplitGraphDefinitionOutputReference } from './structs14400';
import { DashboardV2WidgetSunburstDefinition,
dashboardV2WidgetSunburstDefinitionToTerraform,
dashboardV2WidgetSunburstDefinitionToHclTerraform,
DashboardV2WidgetSunburstDefinitionOutputReference } from './structs14800';
import { DashboardV2WidgetTimeseriesDefinition,
dashboardV2WidgetTimeseriesDefinitionToTerraform,
dashboardV2WidgetTimeseriesDefinitionToHclTerraform,
DashboardV2WidgetTimeseriesDefinitionOutputReference } from './structs15200';
import { DashboardV2WidgetToplistDefinition,
dashboardV2WidgetToplistDefinitionToTerraform,
dashboardV2WidgetToplistDefinitionToHclTerraform,
DashboardV2WidgetToplistDefinitionOutputReference,
DashboardV2WidgetTopologyMapDefinition,
dashboardV2WidgetTopologyMapDefinitionToTerraform,
dashboardV2WidgetTopologyMapDefinitionToHclTerraform,
DashboardV2WidgetTopologyMapDefinitionOutputReference,
DashboardV2WidgetTraceServiceDefinition,
dashboardV2WidgetTraceServiceDefinitionToTerraform,
dashboardV2WidgetTraceServiceDefinitionToHclTerraform,
DashboardV2WidgetTraceServiceDefinitionOutputReference } from './structs15600';
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount {
  /**
  * The name of the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#name DashboardV2#name}
  */
  readonly name?: string;
  /**
  * The query string for the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#query DashboardV2#query}
  */
  readonly query?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment {
  /**
  * The name of the segment subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#name DashboardV2#name}
  */
  readonly name?: string;
  /**
  * The unique identifier of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#segment_id DashboardV2#segment_id}
  */
  readonly segmentId?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser {
  /**
  * The name of the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#name DashboardV2#name}
  */
  readonly name?: string;
  /**
  * The query string for the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#query DashboardV2#query}
  */
  readonly query?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFilters {
  /**
  * An optional filter condition applied to the audience subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#filter_condition DashboardV2#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#account DashboardV2#account}
  */
  readonly account?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#segment DashboardV2#segment}
  */
  readonly segment?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#user DashboardV2#user}
  */
  readonly user?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFilters): any {
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
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFilters | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFilters | undefined) {
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
  private _account = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFilters {
  /**
  * String filter for the retention query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#string_filter DashboardV2#string_filter}
  */
  readonly stringFilter?: string;
  /**
  * audience_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#audience_filters DashboardV2#audience_filters}
  */
  readonly audienceFilters?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFilters;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFilters): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFilters | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFilters | undefined) {
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
  private _audienceFilters = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersAudienceFilters) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#query DashboardV2#query}
  */
  readonly query: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery {
  /**
  * Data source for the Product Analytics event query. Valid values are `product_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#data_source DashboardV2#data_source}
  */
  readonly dataSource: string;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#search DashboardV2#search}
  */
  readonly search: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined) {
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
  private _search = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval {
  /**
  * Type of return interval. Valid values are `fixed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#type DashboardV2#type}
  */
  readonly type: string;
  /**
  * Unit of the return interval. Valid values are `day`, `week`, `month`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#unit DashboardV2#unit}
  */
  readonly unit: string;
  /**
  * Value of the return interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#value DashboardV2#value}
  */
  readonly value: number;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteria {
  /**
  * base_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#base_query DashboardV2#base_query}
  */
  readonly baseQuery: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#time_interval DashboardV2#time_interval}
  */
  readonly timeInterval?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct!.baseQuery),
    time_interval: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct!.baseQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryList",
    },
    time_interval: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteria | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteria | undefined) {
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
  private _baseQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference(this, "base_query");
  public get baseQuery() {
    return this._baseQuery;
  }
  public putBaseQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaBaseQuery) {
    this._baseQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueryInput() {
    return this._baseQuery.internalValue;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaTimeInterval) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearch {
  /**
  * Entity tracked for retention. Valid values are `@usr.id`, `@account.id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#retention_entity DashboardV2#retention_entity}
  */
  readonly retentionEntity: string;
  /**
  * Condition for counting an entity as returned. Valid values are `conversion_on`, `conversion_on_or_after`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#return_condition DashboardV2#return_condition}
  */
  readonly returnCondition: string;
  /**
  * cohort_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#cohort_criteria DashboardV2#cohort_criteria}
  */
  readonly cohortCriteria: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchCohortCriteria;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#filters DashboardV2#filters}
  */
  readonly filters?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFilters;
  /**
  * return_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#return_criteria DashboardV2#return_criteria}
  */
  readonly returnCriteria?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteria;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retention_entity: cdktn.stringToTerraform(struct!.retentionEntity),
    return_condition: cdktn.stringToTerraform(struct!.returnCondition),
    cohort_criteria: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchCohortCriteriaToTerraform(struct!.cohortCriteria),
    filters: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersToTerraform(struct!.filters),
    return_criteria: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaToTerraform(struct!.returnCriteria),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearch): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchCohortCriteriaToHclTerraform(struct!.cohortCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchCohortCriteriaList",
    },
    filters: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersList",
    },
    return_criteria: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct!.returnCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearch | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearch | undefined) {
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
  private _cohortCriteria = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchCohortCriteriaOutputReference(this, "cohort_criteria");
  public get cohortCriteria() {
    return this._cohortCriteria;
  }
  public putCohortCriteria(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchCohortCriteria) {
    this._cohortCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortCriteriaInput() {
    return this._cohortCriteria.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchFilters) {
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
  private _returnCriteria = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteriaOutputReference(this, "return_criteria");
  public get returnCriteria() {
    return this._returnCriteria;
  }
  public putReturnCriteria(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchReturnCriteria) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuery {
  /**
  * Data source for retention queries. Valid values are `product_analytics_retention`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#data_source DashboardV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#name DashboardV2#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#compute DashboardV2#compute}
  */
  readonly compute: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#group_by DashboardV2#group_by}
  */
  readonly groupBy?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#search DashboardV2#search}
  */
  readonly search: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearch;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    compute: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryGroupByToTerraform, true)(struct!.groupBy),
    search: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuery): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryGroupByList",
    },
    search: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuery | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuery | undefined) {
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
  private _compute = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery {
  /**
  * Additional filters applied to the SLO query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#additional_query_filters DashboardV2#additional_query_filters}
  */
  readonly additionalQueryFilters?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#cross_org_uuids DashboardV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for SLO queries. Valid values are `slo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#data_source DashboardV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Group mode to query measures. Valid values are `overall`, `components`. Defaults to `"overall"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#group_mode DashboardV2#group_mode}
  */
  readonly groupMode?: string;
  /**
  * SLO measures queries. Valid values are `good_events`, `bad_events`, `good_minutes`, `bad_minutes`, `slo_status`, `error_budget_remaining`, `burn_rate`, `error_budget_burndown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#measure DashboardV2#measure}
  */
  readonly measure: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#name DashboardV2#name}
  */
  readonly name?: string;
  /**
  * ID of an SLO to query measures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#slo_id DashboardV2#slo_id}
  */
  readonly sloId: string;
  /**
  * type of the SLO to query. Valid values are `metric`, `monitor`, `time_slice`. Defaults to `"metric"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#slo_query_type DashboardV2#slo_query_type}
  */
  readonly sloQueryType?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTarget {
  /**
  * End node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#end DashboardV2#end}
  */
  readonly end?: string;
  /**
  * Start node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#start DashboardV2#start}
  */
  readonly start?: string;
  /**
  * Target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#type DashboardV2#type}
  */
  readonly type: string;
  /**
  * Target node value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#value DashboardV2#value}
  */
  readonly value?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTargetToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTargetOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTarget): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTargetToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTargetOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTarget): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTarget | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTarget | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryCompute {
  /**
  * Aggregation method for the User Journey query. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#aggregation DashboardV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * Time bucket interval in milliseconds for timeseries queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#interval DashboardV2#interval}
  */
  readonly interval?: number;
  /**
  * Metric for the User Journey computation. Valid values are `__dd.conversion`, `__dd.conversion_rate`, `__dd.time_to_convert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#metric DashboardV2#metric}
  */
  readonly metric?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#target DashboardV2#target}
  */
  readonly target?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTarget;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    target: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTargetToTerraform(struct!.target),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryCompute): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryCompute | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryCompute | undefined) {
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
  private _target = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeTarget) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#aggregation DashboardV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#metric DashboardV2#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#order DashboardV2#order}
  */
  readonly order?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySortToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySortOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySort): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySortToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySortOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySort): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySort | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTarget {
  /**
  * End node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#end DashboardV2#end}
  */
  readonly end?: string;
  /**
  * Start node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#start DashboardV2#start}
  */
  readonly start?: string;
  /**
  * Target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#type DashboardV2#type}
  */
  readonly type: string;
  /**
  * Target node value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#value DashboardV2#value}
  */
  readonly value?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTargetToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTargetOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTarget): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTargetToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTargetOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTarget): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTarget | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTarget | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBy {
  /**
  * Facet name to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#facet DashboardV2#facet}
  */
  readonly facet: string;
  /**
  * Maximum number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#limit DashboardV2#limit}
  */
  readonly limit?: number;
  /**
  * Whether to exclude events missing the group-by facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#should_exclude_missing DashboardV2#should_exclude_missing}
  */
  readonly shouldExcludeMissing?: boolean | cdktn.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#sort DashboardV2#sort}
  */
  readonly sort?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySort;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#target DashboardV2#target}
  */
  readonly target?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTarget;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    sort: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySortToTerraform(struct!.sort),
    target: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTargetToTerraform(struct!.target),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySortList",
    },
    target: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBySort) {
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
  private _target = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByTarget) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount {
  /**
  * The name of the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#name DashboardV2#name}
  */
  readonly name?: string;
  /**
  * The query string for the account subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#query DashboardV2#query}
  */
  readonly query?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment {
  /**
  * The name of the segment subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#name DashboardV2#name}
  */
  readonly name?: string;
  /**
  * The unique identifier of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#segment_id DashboardV2#segment_id}
  */
  readonly segmentId?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser {
  /**
  * The name of the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#name DashboardV2#name}
  */
  readonly name?: string;
  /**
  * The query string for the user subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#query DashboardV2#query}
  */
  readonly query?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFilters {
  /**
  * An optional filter condition applied to the audience subquery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#filter_condition DashboardV2#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#account DashboardV2#account}
  */
  readonly account?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#segment DashboardV2#segment}
  */
  readonly segment?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#user DashboardV2#user}
  */
  readonly user?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFilters): any {
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
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFilters | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFilters | undefined) {
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
  private _account = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget {
  /**
  * End node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#end DashboardV2#end}
  */
  readonly end?: string;
  /**
  * Start node of the target range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#start DashboardV2#start}
  */
  readonly start?: string;
  /**
  * Target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#type DashboardV2#type}
  */
  readonly type: string;
  /**
  * Target node value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#value DashboardV2#value}
  */
  readonly value?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilter {
  /**
  * Graph filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#name DashboardV2#name}
  */
  readonly name?: string;
  /**
  * Graph filter operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#operator DashboardV2#operator}
  */
  readonly operator?: string;
  /**
  * Graph filter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#value DashboardV2#value}
  */
  readonly value?: number;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#target DashboardV2#target}
  */
  readonly target?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
    target: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToTerraform(struct!.target),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined) {
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
  private _target = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterTarget) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFilters {
  /**
  * String filter for the user journey search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#string_filter DashboardV2#string_filter}
  */
  readonly stringFilter?: string;
  /**
  * audience_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#audience_filters DashboardV2#audience_filters}
  */
  readonly audienceFilters?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFilters;
  /**
  * graph_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#graph_filter DashboardV2#graph_filter}
  */
  readonly graphFilter?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
    graph_filter: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterToTerraform, true)(struct!.graphFilter),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFilters): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersList",
    },
    graph_filter: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterToHclTerraform, true)(struct!.graphFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFilters | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFilters | undefined) {
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
  private _audienceFilters = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersAudienceFilters) {
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
  private _graphFilter = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilterList(this, "graph_filter", false);
  public get graphFilter() {
    return this._graphFilter;
  }
  public putGraphFilter(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeys {
  /**
  * Primary join key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#primary DashboardV2#primary}
  */
  readonly primary: string;
  /**
  * Secondary join keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#secondary DashboardV2#secondary}
  */
  readonly secondary?: string[];
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeysToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeysOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary: cdktn.stringToTerraform(struct!.primary),
    secondary: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.secondary),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeysToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeysOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeys): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeysOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeys | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeys | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearch {
  /**
  * Expression describing the journey between nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#expression DashboardV2#expression}
  */
  readonly expression: string;
  /**
  * JSON object mapping journey node names to Product Analytics base queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#node_objects DashboardV2#node_objects}
  */
  readonly nodeObjects: string;
  /**
  * JSON object mapping journey step names to display aliases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#step_aliases DashboardV2#step_aliases}
  */
  readonly stepAliases?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#filters DashboardV2#filters}
  */
  readonly filters?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFilters;
  /**
  * join_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#join_keys DashboardV2#join_keys}
  */
  readonly joinKeys?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeys;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    node_objects: cdktn.stringToTerraform(struct!.nodeObjects),
    step_aliases: cdktn.stringToTerraform(struct!.stepAliases),
    filters: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersToTerraform(struct!.filters),
    join_keys: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeysToTerraform(struct!.joinKeys),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearch): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersList",
    },
    join_keys: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeysToHclTerraform(struct!.joinKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearch | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearch | undefined) {
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
  private _filters = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchFilters) {
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
  private _joinKeys = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeysOutputReference(this, "join_keys");
  public get joinKeys() {
    return this._joinKeys;
  }
  public putJoinKeys(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchJoinKeys) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuery {
  /**
  * Data source for User Journey queries. Valid values are `product_analytics_journey`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#data_source DashboardV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#name DashboardV2#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#compute DashboardV2#compute}
  */
  readonly compute: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#group_by DashboardV2#group_by}
  */
  readonly groupBy?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#search DashboardV2#search}
  */
  readonly search: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearch;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    compute: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByToTerraform, true)(struct!.groupBy),
    search: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchToTerraform(struct!.search),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuery): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByList",
    },
    search: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuery | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuery | undefined) {
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
  private _compute = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuery {
  /**
  * apm_dependency_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#apm_dependency_stats_query DashboardV2#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQuery;
  /**
  * apm_metrics_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#apm_metrics_query DashboardV2#apm_metrics_query}
  */
  readonly apmMetricsQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmMetricsQuery;
  /**
  * apm_resource_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#apm_resource_stats_query DashboardV2#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQuery;
  /**
  * cloud_cost_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#cloud_cost_query DashboardV2#cloud_cost_query}
  */
  readonly cloudCostQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQuery;
  /**
  * event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#event_query DashboardV2#event_query}
  */
  readonly eventQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuery;
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#metric_query DashboardV2#metric_query}
  */
  readonly metricQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#process_query DashboardV2#process_query}
  */
  readonly processQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQuery;
  /**
  * product_analytics_extended_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#product_analytics_extended_query DashboardV2#product_analytics_extended_query}
  */
  readonly productAnalyticsExtendedQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProductAnalyticsExtendedQuery;
  /**
  * retention_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#retention_query DashboardV2#retention_query}
  */
  readonly retentionQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuery;
  /**
  * slo_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#slo_query DashboardV2#slo_query}
  */
  readonly sloQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery;
  /**
  * user_journey_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#user_journey_query DashboardV2#user_journey_query}
  */
  readonly userJourneyQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuery;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    apm_dependency_stats_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_metrics_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmMetricsQueryToTerraform(struct!.apmMetricsQuery),
    apm_resource_stats_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    cloud_cost_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryToTerraform(struct!.cloudCostQuery),
    event_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryToTerraform(struct!.processQuery),
    product_analytics_extended_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProductAnalyticsExtendedQueryToTerraform(struct!.productAnalyticsExtendedQuery),
    retention_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryToTerraform(struct!.retentionQuery),
    slo_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryToTerraform(struct!.sloQuery),
    user_journey_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryToTerraform(struct!.userJourneyQuery),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    apm_dependency_stats_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryToHclTerraform(struct!.apmDependencyStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryList",
    },
    apm_metrics_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmMetricsQueryToHclTerraform(struct!.apmMetricsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmMetricsQueryList",
    },
    apm_resource_stats_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryToHclTerraform(struct!.apmResourceStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryList",
    },
    cloud_cost_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryToHclTerraform(struct!.cloudCostQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryList",
    },
    event_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryToHclTerraform(struct!.eventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryList",
    },
    metric_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryToHclTerraform(struct!.metricQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryList",
    },
    process_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryList",
    },
    product_analytics_extended_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProductAnalyticsExtendedQueryToHclTerraform(struct!.productAnalyticsExtendedQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProductAnalyticsExtendedQueryList",
    },
    retention_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryToHclTerraform(struct!.retentionQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryList",
    },
    slo_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryToHclTerraform(struct!.sloQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryList",
    },
    user_journey_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryToHclTerraform(struct!.userJourneyQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuery | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuery | cdktn.IResolvable | undefined) {
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
  private _apmDependencyStatsQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQuery) {
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
  private _apmMetricsQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmMetricsQueryOutputReference(this, "apm_metrics_query");
  public get apmMetricsQuery() {
    return this._apmMetricsQuery;
  }
  public putApmMetricsQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmMetricsQuery) {
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
  private _apmResourceStatsQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQuery) {
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
  private _cloudCostQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryOutputReference(this, "cloud_cost_query");
  public get cloudCostQuery() {
    return this._cloudCostQuery;
  }
  public putCloudCostQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQuery) {
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
  private _eventQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuery) {
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
  private _metricQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQuery) {
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
  private _processQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQuery) {
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
  private _productAnalyticsExtendedQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProductAnalyticsExtendedQueryOutputReference(this, "product_analytics_extended_query");
  public get productAnalyticsExtendedQuery() {
    return this._productAnalyticsExtendedQuery;
  }
  public putProductAnalyticsExtendedQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryProductAnalyticsExtendedQuery) {
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
  private _retentionQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQueryOutputReference(this, "retention_query");
  public get retentionQuery() {
    return this._retentionQuery;
  }
  public putRetentionQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryRetentionQuery) {
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
  private _sloQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryOutputReference(this, "slo_query");
  public get sloQuery() {
    return this._sloQuery;
  }
  public putSloQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery) {
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
  private _userJourneyQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQueryOutputReference(this, "user_journey_query");
  public get userJourneyQuery() {
    return this._userJourneyQuery;
  }
  public putUserJourneyQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryUserJourneyQuery) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuery[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#aggregation DashboardV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#facet DashboardV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#interval DashboardV2#interval}
  */
  readonly interval?: number;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#aggregation DashboardV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#facet DashboardV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#order DashboardV2#order}
  */
  readonly order: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#facet DashboardV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#limit DashboardV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#sort_query DashboardV2#sort_query}
  */
  readonly sortQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#aggregation DashboardV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#facet DashboardV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#interval DashboardV2#interval}
  */
  readonly interval?: number;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute | cdktn.IResolvable): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute | cdktn.IResolvable): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#index DashboardV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#search_query DashboardV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#compute_query DashboardV2#compute_query}
  */
  readonly computeQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#group_by DashboardV2#group_by}
  */
  readonly groupBy?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#multi_compute DashboardV2#multi_compute}
  */
  readonly multiCompute?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute[] | cdktn.IResolvable;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery | undefined) {
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
  private _computeQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery) {
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
  private _groupBy = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#aggregation DashboardV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#facet DashboardV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#interval DashboardV2#interval}
  */
  readonly interval?: number;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#aggregation DashboardV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#facet DashboardV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#order DashboardV2#order}
  */
  readonly order: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#facet DashboardV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#limit DashboardV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#sort_query DashboardV2#sort_query}
  */
  readonly sortQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy | cdktn.IResolvable): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#aggregation DashboardV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#facet DashboardV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#interval DashboardV2#interval}
  */
  readonly interval?: number;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute | cdktn.IResolvable): any {
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


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute | cdktn.IResolvable): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#index DashboardV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#search_query DashboardV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#compute_query DashboardV2#compute_query}
  */
  readonly computeQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#group_by DashboardV2#group_by}
  */
  readonly groupBy?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#multi_compute DashboardV2#multi_compute}
  */
  readonly multiCompute?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute[] | cdktn.IResolvable;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery): any {
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
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery | undefined) {
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
  private _computeQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery) {
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
  private _groupBy = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort {
  /**
  * The index of the formula to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#index DashboardV2#index}
  */
  readonly index: number;
  /**
  * Widget sorting direction. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#order DashboardV2#order}
  */
  readonly order: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.numberToTerraform(struct!.index),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort {
  /**
  * The name of the group tag to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#name DashboardV2#name}
  */
  readonly name: string;
  /**
  * Widget sorting direction. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#order DashboardV2#order}
  */
  readonly order: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy {
  /**
  * formula_sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#formula_sort DashboardV2#formula_sort}
  */
  readonly formulaSort?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort;
  /**
  * group_sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#group_sort DashboardV2#group_sort}
  */
  readonly groupSort?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    formula_sort: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortToTerraform(struct!.formulaSort),
    group_sort: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortToTerraform(struct!.groupSort),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    formula_sort: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortToHclTerraform(struct!.formulaSort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortList",
    },
    group_sort: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortToHclTerraform(struct!.groupSort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy | cdktn.IResolvable | undefined) {
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
  private _formulaSort = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortOutputReference(this, "formula_sort");
  public get formulaSort() {
    return this._formulaSort;
  }
  public putFormulaSort(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort) {
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
  private _groupSort = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortOutputReference(this, "group_sort");
  public get groupSort() {
    return this._groupSort;
  }
  public putGroupSort(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort) {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSort {
  /**
  * The number of items to limit the widget to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#count DashboardV2#count}
  */
  readonly count?: number;
  /**
  * order_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#order_by DashboardV2#order_by}
  */
  readonly orderBy?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy[] | cdktn.IResolvable;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    order_by: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByToTerraform, true)(struct!.orderBy),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSort): any {
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
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByToHclTerraform, true)(struct!.orderBy),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSort | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSort | undefined) {
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
  private _orderBy = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByList(this, "order_by", false);
  public get orderBy() {
    return this._orderBy;
  }
  public putOrderBy(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy[] | cdktn.IResolvable) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyle {
  /**
  * How to order series. Valid values are `tags`, `values`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#order_by DashboardV2#order_by}
  */
  readonly orderBy?: string;
  /**
  * A color palette to apply to the widget. The available options are available at: https://docs.datadoghq.com/dashboards/widgets/timeseries/#appearance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#palette DashboardV2#palette}
  */
  readonly palette?: string;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyleToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyleOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order_by: cdktn.stringToTerraform(struct!.orderBy),
    palette: cdktn.stringToTerraform(struct!.palette),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyleToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyleOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyle): any {
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

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyle | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyle | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionRequestTreemapRequest {
  /**
  * The metric query to use for this widget. **Deprecated.** Use queries and formulas instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#q DashboardV2#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#apm_query DashboardV2#apm_query}
  */
  readonly apmQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestApmQuery;
  /**
  * formula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#formula DashboardV2#formula}
  */
  readonly formula?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestFormula[] | cdktn.IResolvable;
  /**
  * log_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#log_query DashboardV2#log_query}
  */
  readonly logQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestLogQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#process_query DashboardV2#process_query}
  */
  readonly processQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestProcessQuery;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#query DashboardV2#query}
  */
  readonly query?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuery[] | cdktn.IResolvable;
  /**
  * rum_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#rum_query DashboardV2#rum_query}
  */
  readonly rumQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery;
  /**
  * security_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#security_query DashboardV2#security_query}
  */
  readonly securityQuery?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#sort DashboardV2#sort}
  */
  readonly sort?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSort;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#style DashboardV2#style}
  */
  readonly style?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyle;
}

export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    q: cdktn.stringToTerraform(struct!.q),
    apm_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryToTerraform(struct!.apmQuery),
    formula: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestFormulaToTerraform, true)(struct!.formula),
    log_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryToTerraform(struct!.logQuery),
    process_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryToTerraform(struct!.processQuery),
    query: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryToTerraform, true)(struct!.query),
    rum_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryToTerraform(struct!.securityQuery),
    sort: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortToTerraform(struct!.sort),
    style: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyleToTerraform(struct!.style),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestTreemapRequestToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestOutputReference | DashboardV2WidgetWildcardDefinitionRequestTreemapRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    q: {
      value: cdktn.stringToHclTerraform(struct!.q),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apm_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryToHclTerraform(struct!.apmQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryList",
    },
    formula: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestFormulaToHclTerraform, true)(struct!.formula),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestFormulaList",
    },
    log_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryToHclTerraform(struct!.logQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryList",
    },
    process_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryList",
    },
    query: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryList",
    },
    rum_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryToHclTerraform(struct!.rumQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryList",
    },
    security_query: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryToHclTerraform(struct!.securityQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryList",
    },
    sort: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortList",
    },
    style: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestTreemapRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequestTreemapRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._q = undefined;
      this._apmQuery.internalValue = undefined;
      this._formula.internalValue = undefined;
      this._logQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
      this._query.internalValue = undefined;
      this._rumQuery.internalValue = undefined;
      this._securityQuery.internalValue = undefined;
      this._sort.internalValue = undefined;
      this._style.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._q = value.q;
      this._apmQuery.internalValue = value.apmQuery;
      this._formula.internalValue = value.formula;
      this._logQuery.internalValue = value.logQuery;
      this._processQuery.internalValue = value.processQuery;
      this._query.internalValue = value.query;
      this._rumQuery.internalValue = value.rumQuery;
      this._securityQuery.internalValue = value.securityQuery;
      this._sort.internalValue = value.sort;
      this._style.internalValue = value.style;
    }
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
  private _apmQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestApmQuery) {
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
  private _formula = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestFormula[] | cdktn.IResolvable) {
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
  private _logQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestLogQuery) {
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
  private _processQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestProcessQuery) {
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
  private _query = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestQuery[] | cdktn.IResolvable) {
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
  private _rumQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery) {
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
  private _securityQuery = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery) {
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
  private _sort = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestSort) {
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
  private _style = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequestStyle) {
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
export interface DashboardV2WidgetWildcardDefinitionRequest {
  /**
  * histogram_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#histogram_request DashboardV2#histogram_request}
  */
  readonly histogramRequest?: DashboardV2WidgetWildcardDefinitionRequestHistogramRequest;
  /**
  * liststream_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#liststream_request DashboardV2#liststream_request}
  */
  readonly liststreamRequest?: DashboardV2WidgetWildcardDefinitionRequestListstreamRequest;
  /**
  * timeseries_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#timeseries_request DashboardV2#timeseries_request}
  */
  readonly timeseriesRequest?: DashboardV2WidgetWildcardDefinitionRequestTimeseriesRequest;
  /**
  * treemap_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#treemap_request DashboardV2#treemap_request}
  */
  readonly treemapRequest?: DashboardV2WidgetWildcardDefinitionRequestTreemapRequest;
}

export function dashboardV2WidgetWildcardDefinitionRequestToTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    histogram_request: dashboardV2WidgetWildcardDefinitionRequestHistogramRequestToTerraform(struct!.histogramRequest),
    liststream_request: dashboardV2WidgetWildcardDefinitionRequestListstreamRequestToTerraform(struct!.liststreamRequest),
    timeseries_request: dashboardV2WidgetWildcardDefinitionRequestTimeseriesRequestToTerraform(struct!.timeseriesRequest),
    treemap_request: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestToTerraform(struct!.treemapRequest),
  }
}


export function dashboardV2WidgetWildcardDefinitionRequestToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    histogram_request: {
      value: dashboardV2WidgetWildcardDefinitionRequestHistogramRequestToHclTerraform(struct!.histogramRequest),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestHistogramRequestList",
    },
    liststream_request: {
      value: dashboardV2WidgetWildcardDefinitionRequestListstreamRequestToHclTerraform(struct!.liststreamRequest),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestListstreamRequestList",
    },
    timeseries_request: {
      value: dashboardV2WidgetWildcardDefinitionRequestTimeseriesRequestToHclTerraform(struct!.timeseriesRequest),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTimeseriesRequestList",
    },
    treemap_request: {
      value: dashboardV2WidgetWildcardDefinitionRequestTreemapRequestToHclTerraform(struct!.treemapRequest),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestTreemapRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionRequestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2WidgetWildcardDefinitionRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._histogramRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogramRequest = this._histogramRequest?.internalValue;
    }
    if (this._liststreamRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.liststreamRequest = this._liststreamRequest?.internalValue;
    }
    if (this._timeseriesRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesRequest = this._timeseriesRequest?.internalValue;
    }
    if (this._treemapRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.treemapRequest = this._treemapRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._histogramRequest.internalValue = undefined;
      this._liststreamRequest.internalValue = undefined;
      this._timeseriesRequest.internalValue = undefined;
      this._treemapRequest.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._histogramRequest.internalValue = value.histogramRequest;
      this._liststreamRequest.internalValue = value.liststreamRequest;
      this._timeseriesRequest.internalValue = value.timeseriesRequest;
      this._treemapRequest.internalValue = value.treemapRequest;
    }
  }

  // histogram_request - computed: false, optional: true, required: false
  private _histogramRequest = new DashboardV2WidgetWildcardDefinitionRequestHistogramRequestOutputReference(this, "histogram_request");
  public get histogramRequest() {
    return this._histogramRequest;
  }
  public putHistogramRequest(value: DashboardV2WidgetWildcardDefinitionRequestHistogramRequest) {
    this._histogramRequest.internalValue = value;
  }
  public resetHistogramRequest() {
    this._histogramRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramRequestInput() {
    return this._histogramRequest.internalValue;
  }

  // liststream_request - computed: false, optional: true, required: false
  private _liststreamRequest = new DashboardV2WidgetWildcardDefinitionRequestListstreamRequestOutputReference(this, "liststream_request");
  public get liststreamRequest() {
    return this._liststreamRequest;
  }
  public putListstreamRequest(value: DashboardV2WidgetWildcardDefinitionRequestListstreamRequest) {
    this._liststreamRequest.internalValue = value;
  }
  public resetListstreamRequest() {
    this._liststreamRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liststreamRequestInput() {
    return this._liststreamRequest.internalValue;
  }

  // timeseries_request - computed: false, optional: true, required: false
  private _timeseriesRequest = new DashboardV2WidgetWildcardDefinitionRequestTimeseriesRequestOutputReference(this, "timeseries_request");
  public get timeseriesRequest() {
    return this._timeseriesRequest;
  }
  public putTimeseriesRequest(value: DashboardV2WidgetWildcardDefinitionRequestTimeseriesRequest) {
    this._timeseriesRequest.internalValue = value;
  }
  public resetTimeseriesRequest() {
    this._timeseriesRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesRequestInput() {
    return this._timeseriesRequest.internalValue;
  }

  // treemap_request - computed: false, optional: true, required: false
  private _treemapRequest = new DashboardV2WidgetWildcardDefinitionRequestTreemapRequestOutputReference(this, "treemap_request");
  public get treemapRequest() {
    return this._treemapRequest;
  }
  public putTreemapRequest(value: DashboardV2WidgetWildcardDefinitionRequestTreemapRequest) {
    this._treemapRequest.internalValue = value;
  }
  public resetTreemapRequest() {
    this._treemapRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treemapRequestInput() {
    return this._treemapRequest.internalValue;
  }
}

export class DashboardV2WidgetWildcardDefinitionRequestList extends cdktn.ComplexList {
  public internalValue? : DashboardV2WidgetWildcardDefinitionRequest[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetWildcardDefinitionRequestOutputReference {
    return new DashboardV2WidgetWildcardDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardV2WidgetWildcardDefinitionSpecification {
  /**
  * The Vega or Vega-Lite specification as a JSON string. Use `jsonencode()` to encode the specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#contents DashboardV2#contents}
  */
  readonly contents: string;
  /**
  * The type of specification (Vega or Vega-Lite). Valid values are `vega`, `vega-lite`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#type DashboardV2#type}
  */
  readonly type: string;
}

export function dashboardV2WidgetWildcardDefinitionSpecificationToTerraform(struct?: DashboardV2WidgetWildcardDefinitionSpecificationOutputReference | DashboardV2WidgetWildcardDefinitionSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contents: cdktn.stringToTerraform(struct!.contents),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function dashboardV2WidgetWildcardDefinitionSpecificationToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionSpecificationOutputReference | DashboardV2WidgetWildcardDefinitionSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    contents: {
      value: cdktn.stringToHclTerraform(struct!.contents),
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

export class DashboardV2WidgetWildcardDefinitionSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contents = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contents = value.contents;
      this._type = value.type;
    }
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
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
export interface DashboardV2WidgetWildcardDefinitionTimeFixed {
  /**
  * Start time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#from DashboardV2#from}
  */
  readonly from: number;
  /**
  * End time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#to DashboardV2#to}
  */
  readonly to: number;
}

export function dashboardV2WidgetWildcardDefinitionTimeFixedToTerraform(struct?: DashboardV2WidgetWildcardDefinitionTimeFixedOutputReference | DashboardV2WidgetWildcardDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function dashboardV2WidgetWildcardDefinitionTimeFixedToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionTimeFixedOutputReference | DashboardV2WidgetWildcardDefinitionTimeFixed): any {
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

export class DashboardV2WidgetWildcardDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionTimeFixed | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionTimeFixed | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionTimeLive {
  /**
  * Unit of the time span. Valid values are `minute`, `hour`, `day`, `week`, `month`, `year`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#unit DashboardV2#unit}
  */
  readonly unit: string;
  /**
  * Value of the time span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#value DashboardV2#value}
  */
  readonly value: number;
}

export function dashboardV2WidgetWildcardDefinitionTimeLiveToTerraform(struct?: DashboardV2WidgetWildcardDefinitionTimeLiveOutputReference | DashboardV2WidgetWildcardDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function dashboardV2WidgetWildcardDefinitionTimeLiveToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionTimeLiveOutputReference | DashboardV2WidgetWildcardDefinitionTimeLive): any {
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

export class DashboardV2WidgetWildcardDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionTimeLive | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionTimeLive | undefined) {
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
export interface DashboardV2WidgetWildcardDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#fixed DashboardV2#fixed}
  */
  readonly fixed?: DashboardV2WidgetWildcardDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#live DashboardV2#live}
  */
  readonly live?: DashboardV2WidgetWildcardDefinitionTimeLive;
}

export function dashboardV2WidgetWildcardDefinitionTimeToTerraform(struct?: DashboardV2WidgetWildcardDefinitionTimeOutputReference | DashboardV2WidgetWildcardDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: dashboardV2WidgetWildcardDefinitionTimeFixedToTerraform(struct!.fixed),
    live: dashboardV2WidgetWildcardDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function dashboardV2WidgetWildcardDefinitionTimeToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionTimeOutputReference | DashboardV2WidgetWildcardDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: dashboardV2WidgetWildcardDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionTimeFixedList",
    },
    live: {
      value: dashboardV2WidgetWildcardDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinitionTime | undefined {
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

  public set internalValue(value: DashboardV2WidgetWildcardDefinitionTime | undefined) {
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
  private _fixed = new DashboardV2WidgetWildcardDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: DashboardV2WidgetWildcardDefinitionTimeFixed) {
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
  private _live = new DashboardV2WidgetWildcardDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: DashboardV2WidgetWildcardDefinitionTimeLive) {
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
export interface DashboardV2WidgetWildcardDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#description DashboardV2#description}
  */
  readonly description?: string;
  /**
  * Hide any portion of the widget's timeframe that is incomplete due to cost data not being available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#hide_incomplete_cost_data DashboardV2#hide_incomplete_cost_data}
  */
  readonly hideIncompleteCostData?: boolean | cdktn.IResolvable;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `week_to_date`, `month_to_date`, `1y`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#live_span DashboardV2#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The title of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#title DashboardV2#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#title_align DashboardV2#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#title_size DashboardV2#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#custom_link DashboardV2#custom_link}
  */
  readonly customLink?: DashboardV2WidgetWildcardDefinitionCustomLink[] | cdktn.IResolvable;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#request DashboardV2#request}
  */
  readonly request?: DashboardV2WidgetWildcardDefinitionRequest[] | cdktn.IResolvable;
  /**
  * specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#specification DashboardV2#specification}
  */
  readonly specification?: DashboardV2WidgetWildcardDefinitionSpecification;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#time DashboardV2#time}
  */
  readonly time?: DashboardV2WidgetWildcardDefinitionTime;
}

export function dashboardV2WidgetWildcardDefinitionToTerraform(struct?: DashboardV2WidgetWildcardDefinitionOutputReference | DashboardV2WidgetWildcardDefinition): any {
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
    custom_link: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionCustomLinkToTerraform, true)(struct!.customLink),
    request: cdktn.listMapper(dashboardV2WidgetWildcardDefinitionRequestToTerraform, true)(struct!.request),
    specification: dashboardV2WidgetWildcardDefinitionSpecificationToTerraform(struct!.specification),
    time: dashboardV2WidgetWildcardDefinitionTimeToTerraform(struct!.time),
  }
}


export function dashboardV2WidgetWildcardDefinitionToHclTerraform(struct?: DashboardV2WidgetWildcardDefinitionOutputReference | DashboardV2WidgetWildcardDefinition): any {
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
    custom_link: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionCustomLinkToHclTerraform, true)(struct!.customLink),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionCustomLinkList",
    },
    request: {
      value: cdktn.listMapperHcl(dashboardV2WidgetWildcardDefinitionRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionRequestList",
    },
    specification: {
      value: dashboardV2WidgetWildcardDefinitionSpecificationToHclTerraform(struct!.specification),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionSpecificationList",
    },
    time: {
      value: dashboardV2WidgetWildcardDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetWildcardDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardV2WidgetWildcardDefinition | undefined {
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
    if (this._customLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLink = this._customLink?.internalValue;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._specification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specification = this._specification?.internalValue;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardV2WidgetWildcardDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._hideIncompleteCostData = undefined;
      this._liveSpan = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._customLink.internalValue = undefined;
      this._request.internalValue = undefined;
      this._specification.internalValue = undefined;
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
      this._customLink.internalValue = value.customLink;
      this._request.internalValue = value.request;
      this._specification.internalValue = value.specification;
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

  // custom_link - computed: false, optional: true, required: false
  private _customLink = new DashboardV2WidgetWildcardDefinitionCustomLinkList(this, "custom_link", false);
  public get customLink() {
    return this._customLink;
  }
  public putCustomLink(value: DashboardV2WidgetWildcardDefinitionCustomLink[] | cdktn.IResolvable) {
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
  private _request = new DashboardV2WidgetWildcardDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: DashboardV2WidgetWildcardDefinitionRequest[] | cdktn.IResolvable) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // specification - computed: false, optional: true, required: false
  private _specification = new DashboardV2WidgetWildcardDefinitionSpecificationOutputReference(this, "specification");
  public get specification() {
    return this._specification;
  }
  public putSpecification(value: DashboardV2WidgetWildcardDefinitionSpecification) {
    this._specification.internalValue = value;
  }
  public resetSpecification() {
    this._specification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification.internalValue;
  }

  // time - computed: false, optional: true, required: false
  private _time = new DashboardV2WidgetWildcardDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: DashboardV2WidgetWildcardDefinitionTime) {
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
export interface DashboardV2Widget {
  /**
  * The ID of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#id DashboardV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * alert_graph_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#alert_graph_definition DashboardV2#alert_graph_definition}
  */
  readonly alertGraphDefinition?: DashboardV2WidgetAlertGraphDefinition;
  /**
  * alert_value_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#alert_value_definition DashboardV2#alert_value_definition}
  */
  readonly alertValueDefinition?: DashboardV2WidgetAlertValueDefinition;
  /**
  * bar_chart_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#bar_chart_definition DashboardV2#bar_chart_definition}
  */
  readonly barChartDefinition?: DashboardV2WidgetBarChartDefinition;
  /**
  * change_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#change_definition DashboardV2#change_definition}
  */
  readonly changeDefinition?: DashboardV2WidgetChangeDefinition;
  /**
  * check_status_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#check_status_definition DashboardV2#check_status_definition}
  */
  readonly checkStatusDefinition?: DashboardV2WidgetCheckStatusDefinition;
  /**
  * cohort_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#cohort_definition DashboardV2#cohort_definition}
  */
  readonly cohortDefinition?: DashboardV2WidgetCohortDefinition;
  /**
  * distribution_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#distribution_definition DashboardV2#distribution_definition}
  */
  readonly distributionDefinition?: DashboardV2WidgetDistributionDefinition;
  /**
  * event_stream_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#event_stream_definition DashboardV2#event_stream_definition}
  */
  readonly eventStreamDefinition?: DashboardV2WidgetEventStreamDefinition;
  /**
  * event_timeline_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#event_timeline_definition DashboardV2#event_timeline_definition}
  */
  readonly eventTimelineDefinition?: DashboardV2WidgetEventTimelineDefinition;
  /**
  * free_text_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#free_text_definition DashboardV2#free_text_definition}
  */
  readonly freeTextDefinition?: DashboardV2WidgetFreeTextDefinition;
  /**
  * funnel_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#funnel_definition DashboardV2#funnel_definition}
  */
  readonly funnelDefinition?: DashboardV2WidgetFunnelDefinition;
  /**
  * geomap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#geomap_definition DashboardV2#geomap_definition}
  */
  readonly geomapDefinition?: DashboardV2WidgetGeomapDefinition;
  /**
  * group_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#group_definition DashboardV2#group_definition}
  */
  readonly groupDefinition?: DashboardV2WidgetGroupDefinition;
  /**
  * heatmap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#heatmap_definition DashboardV2#heatmap_definition}
  */
  readonly heatmapDefinition?: DashboardV2WidgetHeatmapDefinition;
  /**
  * hostmap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#hostmap_definition DashboardV2#hostmap_definition}
  */
  readonly hostmapDefinition?: DashboardV2WidgetHostmapDefinition;
  /**
  * iframe_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#iframe_definition DashboardV2#iframe_definition}
  */
  readonly iframeDefinition?: DashboardV2WidgetIframeDefinition;
  /**
  * image_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#image_definition DashboardV2#image_definition}
  */
  readonly imageDefinition?: DashboardV2WidgetImageDefinition;
  /**
  * list_stream_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#list_stream_definition DashboardV2#list_stream_definition}
  */
  readonly listStreamDefinition?: DashboardV2WidgetListStreamDefinition;
  /**
  * log_stream_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#log_stream_definition DashboardV2#log_stream_definition}
  */
  readonly logStreamDefinition?: DashboardV2WidgetLogStreamDefinition;
  /**
  * manage_status_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#manage_status_definition DashboardV2#manage_status_definition}
  */
  readonly manageStatusDefinition?: DashboardV2WidgetManageStatusDefinition;
  /**
  * note_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#note_definition DashboardV2#note_definition}
  */
  readonly noteDefinition?: DashboardV2WidgetNoteDefinition;
  /**
  * point_plot_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#point_plot_definition DashboardV2#point_plot_definition}
  */
  readonly pointPlotDefinition?: DashboardV2WidgetPointPlotDefinition;
  /**
  * powerpack_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#powerpack_definition DashboardV2#powerpack_definition}
  */
  readonly powerpackDefinition?: DashboardV2WidgetPowerpackDefinition;
  /**
  * product_analytics_funnel_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#product_analytics_funnel_definition DashboardV2#product_analytics_funnel_definition}
  */
  readonly productAnalyticsFunnelDefinition?: DashboardV2WidgetProductAnalyticsFunnelDefinition;
  /**
  * query_table_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#query_table_definition DashboardV2#query_table_definition}
  */
  readonly queryTableDefinition?: DashboardV2WidgetQueryTableDefinition;
  /**
  * query_value_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#query_value_definition DashboardV2#query_value_definition}
  */
  readonly queryValueDefinition?: DashboardV2WidgetQueryValueDefinition;
  /**
  * retention_curve_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#retention_curve_definition DashboardV2#retention_curve_definition}
  */
  readonly retentionCurveDefinition?: DashboardV2WidgetRetentionCurveDefinition;
  /**
  * run_workflow_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#run_workflow_definition DashboardV2#run_workflow_definition}
  */
  readonly runWorkflowDefinition?: DashboardV2WidgetRunWorkflowDefinition;
  /**
  * sankey_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#sankey_definition DashboardV2#sankey_definition}
  */
  readonly sankeyDefinition?: DashboardV2WidgetSankeyDefinition;
  /**
  * scatterplot_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#scatterplot_definition DashboardV2#scatterplot_definition}
  */
  readonly scatterplotDefinition?: DashboardV2WidgetScatterplotDefinition;
  /**
  * service_level_objective_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#service_level_objective_definition DashboardV2#service_level_objective_definition}
  */
  readonly serviceLevelObjectiveDefinition?: DashboardV2WidgetServiceLevelObjectiveDefinition;
  /**
  * servicemap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#servicemap_definition DashboardV2#servicemap_definition}
  */
  readonly servicemapDefinition?: DashboardV2WidgetServicemapDefinition;
  /**
  * slo_list_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#slo_list_definition DashboardV2#slo_list_definition}
  */
  readonly sloListDefinition?: DashboardV2WidgetSloListDefinition;
  /**
  * split_graph_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#split_graph_definition DashboardV2#split_graph_definition}
  */
  readonly splitGraphDefinition?: DashboardV2WidgetSplitGraphDefinition;
  /**
  * sunburst_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#sunburst_definition DashboardV2#sunburst_definition}
  */
  readonly sunburstDefinition?: DashboardV2WidgetSunburstDefinition;
  /**
  * timeseries_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#timeseries_definition DashboardV2#timeseries_definition}
  */
  readonly timeseriesDefinition?: DashboardV2WidgetTimeseriesDefinition;
  /**
  * toplist_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#toplist_definition DashboardV2#toplist_definition}
  */
  readonly toplistDefinition?: DashboardV2WidgetToplistDefinition;
  /**
  * topology_map_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#topology_map_definition DashboardV2#topology_map_definition}
  */
  readonly topologyMapDefinition?: DashboardV2WidgetTopologyMapDefinition;
  /**
  * trace_service_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#trace_service_definition DashboardV2#trace_service_definition}
  */
  readonly traceServiceDefinition?: DashboardV2WidgetTraceServiceDefinition;
  /**
  * treemap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#treemap_definition DashboardV2#treemap_definition}
  */
  readonly treemapDefinition?: DashboardV2WidgetTreemapDefinition;
  /**
  * widget_layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#widget_layout DashboardV2#widget_layout}
  */
  readonly widgetLayout?: DashboardV2WidgetWidgetLayout;
  /**
  * wildcard_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/dashboard_v2#wildcard_definition DashboardV2#wildcard_definition}
  */
  readonly wildcardDefinition?: DashboardV2WidgetWildcardDefinition;
}

export function dashboardV2WidgetToTerraform(struct?: DashboardV2Widget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.numberToTerraform(struct!.id),
    alert_graph_definition: dashboardV2WidgetAlertGraphDefinitionToTerraform(struct!.alertGraphDefinition),
    alert_value_definition: dashboardV2WidgetAlertValueDefinitionToTerraform(struct!.alertValueDefinition),
    bar_chart_definition: dashboardV2WidgetBarChartDefinitionToTerraform(struct!.barChartDefinition),
    change_definition: dashboardV2WidgetChangeDefinitionToTerraform(struct!.changeDefinition),
    check_status_definition: dashboardV2WidgetCheckStatusDefinitionToTerraform(struct!.checkStatusDefinition),
    cohort_definition: dashboardV2WidgetCohortDefinitionToTerraform(struct!.cohortDefinition),
    distribution_definition: dashboardV2WidgetDistributionDefinitionToTerraform(struct!.distributionDefinition),
    event_stream_definition: dashboardV2WidgetEventStreamDefinitionToTerraform(struct!.eventStreamDefinition),
    event_timeline_definition: dashboardV2WidgetEventTimelineDefinitionToTerraform(struct!.eventTimelineDefinition),
    free_text_definition: dashboardV2WidgetFreeTextDefinitionToTerraform(struct!.freeTextDefinition),
    funnel_definition: dashboardV2WidgetFunnelDefinitionToTerraform(struct!.funnelDefinition),
    geomap_definition: dashboardV2WidgetGeomapDefinitionToTerraform(struct!.geomapDefinition),
    group_definition: dashboardV2WidgetGroupDefinitionToTerraform(struct!.groupDefinition),
    heatmap_definition: dashboardV2WidgetHeatmapDefinitionToTerraform(struct!.heatmapDefinition),
    hostmap_definition: dashboardV2WidgetHostmapDefinitionToTerraform(struct!.hostmapDefinition),
    iframe_definition: dashboardV2WidgetIframeDefinitionToTerraform(struct!.iframeDefinition),
    image_definition: dashboardV2WidgetImageDefinitionToTerraform(struct!.imageDefinition),
    list_stream_definition: dashboardV2WidgetListStreamDefinitionToTerraform(struct!.listStreamDefinition),
    log_stream_definition: dashboardV2WidgetLogStreamDefinitionToTerraform(struct!.logStreamDefinition),
    manage_status_definition: dashboardV2WidgetManageStatusDefinitionToTerraform(struct!.manageStatusDefinition),
    note_definition: dashboardV2WidgetNoteDefinitionToTerraform(struct!.noteDefinition),
    point_plot_definition: dashboardV2WidgetPointPlotDefinitionToTerraform(struct!.pointPlotDefinition),
    powerpack_definition: dashboardV2WidgetPowerpackDefinitionToTerraform(struct!.powerpackDefinition),
    product_analytics_funnel_definition: dashboardV2WidgetProductAnalyticsFunnelDefinitionToTerraform(struct!.productAnalyticsFunnelDefinition),
    query_table_definition: dashboardV2WidgetQueryTableDefinitionToTerraform(struct!.queryTableDefinition),
    query_value_definition: dashboardV2WidgetQueryValueDefinitionToTerraform(struct!.queryValueDefinition),
    retention_curve_definition: dashboardV2WidgetRetentionCurveDefinitionToTerraform(struct!.retentionCurveDefinition),
    run_workflow_definition: dashboardV2WidgetRunWorkflowDefinitionToTerraform(struct!.runWorkflowDefinition),
    sankey_definition: dashboardV2WidgetSankeyDefinitionToTerraform(struct!.sankeyDefinition),
    scatterplot_definition: dashboardV2WidgetScatterplotDefinitionToTerraform(struct!.scatterplotDefinition),
    service_level_objective_definition: dashboardV2WidgetServiceLevelObjectiveDefinitionToTerraform(struct!.serviceLevelObjectiveDefinition),
    servicemap_definition: dashboardV2WidgetServicemapDefinitionToTerraform(struct!.servicemapDefinition),
    slo_list_definition: dashboardV2WidgetSloListDefinitionToTerraform(struct!.sloListDefinition),
    split_graph_definition: dashboardV2WidgetSplitGraphDefinitionToTerraform(struct!.splitGraphDefinition),
    sunburst_definition: dashboardV2WidgetSunburstDefinitionToTerraform(struct!.sunburstDefinition),
    timeseries_definition: dashboardV2WidgetTimeseriesDefinitionToTerraform(struct!.timeseriesDefinition),
    toplist_definition: dashboardV2WidgetToplistDefinitionToTerraform(struct!.toplistDefinition),
    topology_map_definition: dashboardV2WidgetTopologyMapDefinitionToTerraform(struct!.topologyMapDefinition),
    trace_service_definition: dashboardV2WidgetTraceServiceDefinitionToTerraform(struct!.traceServiceDefinition),
    treemap_definition: dashboardV2WidgetTreemapDefinitionToTerraform(struct!.treemapDefinition),
    widget_layout: dashboardV2WidgetWidgetLayoutToTerraform(struct!.widgetLayout),
    wildcard_definition: dashboardV2WidgetWildcardDefinitionToTerraform(struct!.wildcardDefinition),
  }
}


export function dashboardV2WidgetToHclTerraform(struct?: DashboardV2Widget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alert_graph_definition: {
      value: dashboardV2WidgetAlertGraphDefinitionToHclTerraform(struct!.alertGraphDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetAlertGraphDefinitionList",
    },
    alert_value_definition: {
      value: dashboardV2WidgetAlertValueDefinitionToHclTerraform(struct!.alertValueDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetAlertValueDefinitionList",
    },
    bar_chart_definition: {
      value: dashboardV2WidgetBarChartDefinitionToHclTerraform(struct!.barChartDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetBarChartDefinitionList",
    },
    change_definition: {
      value: dashboardV2WidgetChangeDefinitionToHclTerraform(struct!.changeDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetChangeDefinitionList",
    },
    check_status_definition: {
      value: dashboardV2WidgetCheckStatusDefinitionToHclTerraform(struct!.checkStatusDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetCheckStatusDefinitionList",
    },
    cohort_definition: {
      value: dashboardV2WidgetCohortDefinitionToHclTerraform(struct!.cohortDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetCohortDefinitionList",
    },
    distribution_definition: {
      value: dashboardV2WidgetDistributionDefinitionToHclTerraform(struct!.distributionDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetDistributionDefinitionList",
    },
    event_stream_definition: {
      value: dashboardV2WidgetEventStreamDefinitionToHclTerraform(struct!.eventStreamDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetEventStreamDefinitionList",
    },
    event_timeline_definition: {
      value: dashboardV2WidgetEventTimelineDefinitionToHclTerraform(struct!.eventTimelineDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetEventTimelineDefinitionList",
    },
    free_text_definition: {
      value: dashboardV2WidgetFreeTextDefinitionToHclTerraform(struct!.freeTextDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetFreeTextDefinitionList",
    },
    funnel_definition: {
      value: dashboardV2WidgetFunnelDefinitionToHclTerraform(struct!.funnelDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetFunnelDefinitionList",
    },
    geomap_definition: {
      value: dashboardV2WidgetGeomapDefinitionToHclTerraform(struct!.geomapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetGeomapDefinitionList",
    },
    group_definition: {
      value: dashboardV2WidgetGroupDefinitionToHclTerraform(struct!.groupDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetGroupDefinitionList",
    },
    heatmap_definition: {
      value: dashboardV2WidgetHeatmapDefinitionToHclTerraform(struct!.heatmapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetHeatmapDefinitionList",
    },
    hostmap_definition: {
      value: dashboardV2WidgetHostmapDefinitionToHclTerraform(struct!.hostmapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetHostmapDefinitionList",
    },
    iframe_definition: {
      value: dashboardV2WidgetIframeDefinitionToHclTerraform(struct!.iframeDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetIframeDefinitionList",
    },
    image_definition: {
      value: dashboardV2WidgetImageDefinitionToHclTerraform(struct!.imageDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetImageDefinitionList",
    },
    list_stream_definition: {
      value: dashboardV2WidgetListStreamDefinitionToHclTerraform(struct!.listStreamDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetListStreamDefinitionList",
    },
    log_stream_definition: {
      value: dashboardV2WidgetLogStreamDefinitionToHclTerraform(struct!.logStreamDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetLogStreamDefinitionList",
    },
    manage_status_definition: {
      value: dashboardV2WidgetManageStatusDefinitionToHclTerraform(struct!.manageStatusDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetManageStatusDefinitionList",
    },
    note_definition: {
      value: dashboardV2WidgetNoteDefinitionToHclTerraform(struct!.noteDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetNoteDefinitionList",
    },
    point_plot_definition: {
      value: dashboardV2WidgetPointPlotDefinitionToHclTerraform(struct!.pointPlotDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetPointPlotDefinitionList",
    },
    powerpack_definition: {
      value: dashboardV2WidgetPowerpackDefinitionToHclTerraform(struct!.powerpackDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetPowerpackDefinitionList",
    },
    product_analytics_funnel_definition: {
      value: dashboardV2WidgetProductAnalyticsFunnelDefinitionToHclTerraform(struct!.productAnalyticsFunnelDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetProductAnalyticsFunnelDefinitionList",
    },
    query_table_definition: {
      value: dashboardV2WidgetQueryTableDefinitionToHclTerraform(struct!.queryTableDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetQueryTableDefinitionList",
    },
    query_value_definition: {
      value: dashboardV2WidgetQueryValueDefinitionToHclTerraform(struct!.queryValueDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetQueryValueDefinitionList",
    },
    retention_curve_definition: {
      value: dashboardV2WidgetRetentionCurveDefinitionToHclTerraform(struct!.retentionCurveDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetRetentionCurveDefinitionList",
    },
    run_workflow_definition: {
      value: dashboardV2WidgetRunWorkflowDefinitionToHclTerraform(struct!.runWorkflowDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetRunWorkflowDefinitionList",
    },
    sankey_definition: {
      value: dashboardV2WidgetSankeyDefinitionToHclTerraform(struct!.sankeyDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetSankeyDefinitionList",
    },
    scatterplot_definition: {
      value: dashboardV2WidgetScatterplotDefinitionToHclTerraform(struct!.scatterplotDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetScatterplotDefinitionList",
    },
    service_level_objective_definition: {
      value: dashboardV2WidgetServiceLevelObjectiveDefinitionToHclTerraform(struct!.serviceLevelObjectiveDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetServiceLevelObjectiveDefinitionList",
    },
    servicemap_definition: {
      value: dashboardV2WidgetServicemapDefinitionToHclTerraform(struct!.servicemapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetServicemapDefinitionList",
    },
    slo_list_definition: {
      value: dashboardV2WidgetSloListDefinitionToHclTerraform(struct!.sloListDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetSloListDefinitionList",
    },
    split_graph_definition: {
      value: dashboardV2WidgetSplitGraphDefinitionToHclTerraform(struct!.splitGraphDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetSplitGraphDefinitionList",
    },
    sunburst_definition: {
      value: dashboardV2WidgetSunburstDefinitionToHclTerraform(struct!.sunburstDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetSunburstDefinitionList",
    },
    timeseries_definition: {
      value: dashboardV2WidgetTimeseriesDefinitionToHclTerraform(struct!.timeseriesDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetTimeseriesDefinitionList",
    },
    toplist_definition: {
      value: dashboardV2WidgetToplistDefinitionToHclTerraform(struct!.toplistDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetToplistDefinitionList",
    },
    topology_map_definition: {
      value: dashboardV2WidgetTopologyMapDefinitionToHclTerraform(struct!.topologyMapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetTopologyMapDefinitionList",
    },
    trace_service_definition: {
      value: dashboardV2WidgetTraceServiceDefinitionToHclTerraform(struct!.traceServiceDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetTraceServiceDefinitionList",
    },
    treemap_definition: {
      value: dashboardV2WidgetTreemapDefinitionToHclTerraform(struct!.treemapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetTreemapDefinitionList",
    },
    widget_layout: {
      value: dashboardV2WidgetWidgetLayoutToHclTerraform(struct!.widgetLayout),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWidgetLayoutList",
    },
    wildcard_definition: {
      value: dashboardV2WidgetWildcardDefinitionToHclTerraform(struct!.wildcardDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardV2WidgetWildcardDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardV2WidgetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DashboardV2Widget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._alertGraphDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertGraphDefinition = this._alertGraphDefinition?.internalValue;
    }
    if (this._alertValueDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertValueDefinition = this._alertValueDefinition?.internalValue;
    }
    if (this._barChartDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.barChartDefinition = this._barChartDefinition?.internalValue;
    }
    if (this._changeDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeDefinition = this._changeDefinition?.internalValue;
    }
    if (this._checkStatusDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkStatusDefinition = this._checkStatusDefinition?.internalValue;
    }
    if (this._cohortDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohortDefinition = this._cohortDefinition?.internalValue;
    }
    if (this._distributionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionDefinition = this._distributionDefinition?.internalValue;
    }
    if (this._eventStreamDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventStreamDefinition = this._eventStreamDefinition?.internalValue;
    }
    if (this._eventTimelineDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimelineDefinition = this._eventTimelineDefinition?.internalValue;
    }
    if (this._freeTextDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeTextDefinition = this._freeTextDefinition?.internalValue;
    }
    if (this._funnelDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.funnelDefinition = this._funnelDefinition?.internalValue;
    }
    if (this._geomapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geomapDefinition = this._geomapDefinition?.internalValue;
    }
    if (this._groupDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupDefinition = this._groupDefinition?.internalValue;
    }
    if (this._heatmapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.heatmapDefinition = this._heatmapDefinition?.internalValue;
    }
    if (this._hostmapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostmapDefinition = this._hostmapDefinition?.internalValue;
    }
    if (this._iframeDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iframeDefinition = this._iframeDefinition?.internalValue;
    }
    if (this._imageDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDefinition = this._imageDefinition?.internalValue;
    }
    if (this._listStreamDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listStreamDefinition = this._listStreamDefinition?.internalValue;
    }
    if (this._logStreamDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamDefinition = this._logStreamDefinition?.internalValue;
    }
    if (this._manageStatusDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageStatusDefinition = this._manageStatusDefinition?.internalValue;
    }
    if (this._noteDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteDefinition = this._noteDefinition?.internalValue;
    }
    if (this._pointPlotDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointPlotDefinition = this._pointPlotDefinition?.internalValue;
    }
    if (this._powerpackDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerpackDefinition = this._powerpackDefinition?.internalValue;
    }
    if (this._productAnalyticsFunnelDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productAnalyticsFunnelDefinition = this._productAnalyticsFunnelDefinition?.internalValue;
    }
    if (this._queryTableDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTableDefinition = this._queryTableDefinition?.internalValue;
    }
    if (this._queryValueDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryValueDefinition = this._queryValueDefinition?.internalValue;
    }
    if (this._retentionCurveDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionCurveDefinition = this._retentionCurveDefinition?.internalValue;
    }
    if (this._runWorkflowDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runWorkflowDefinition = this._runWorkflowDefinition?.internalValue;
    }
    if (this._sankeyDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sankeyDefinition = this._sankeyDefinition?.internalValue;
    }
    if (this._scatterplotDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scatterplotDefinition = this._scatterplotDefinition?.internalValue;
    }
    if (this._serviceLevelObjectiveDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelObjectiveDefinition = this._serviceLevelObjectiveDefinition?.internalValue;
    }
    if (this._servicemapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicemapDefinition = this._servicemapDefinition?.internalValue;
    }
    if (this._sloListDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloListDefinition = this._sloListDefinition?.internalValue;
    }
    if (this._splitGraphDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitGraphDefinition = this._splitGraphDefinition?.internalValue;
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
    if (this._topologyMapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyMapDefinition = this._topologyMapDefinition?.internalValue;
    }
    if (this._traceServiceDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceServiceDefinition = this._traceServiceDefinition?.internalValue;
    }
    if (this._treemapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.treemapDefinition = this._treemapDefinition?.internalValue;
    }
    if (this._widgetLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetLayout = this._widgetLayout?.internalValue;
    }
    if (this._wildcardDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcardDefinition = this._wildcardDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardV2Widget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._alertGraphDefinition.internalValue = undefined;
      this._alertValueDefinition.internalValue = undefined;
      this._barChartDefinition.internalValue = undefined;
      this._changeDefinition.internalValue = undefined;
      this._checkStatusDefinition.internalValue = undefined;
      this._cohortDefinition.internalValue = undefined;
      this._distributionDefinition.internalValue = undefined;
      this._eventStreamDefinition.internalValue = undefined;
      this._eventTimelineDefinition.internalValue = undefined;
      this._freeTextDefinition.internalValue = undefined;
      this._funnelDefinition.internalValue = undefined;
      this._geomapDefinition.internalValue = undefined;
      this._groupDefinition.internalValue = undefined;
      this._heatmapDefinition.internalValue = undefined;
      this._hostmapDefinition.internalValue = undefined;
      this._iframeDefinition.internalValue = undefined;
      this._imageDefinition.internalValue = undefined;
      this._listStreamDefinition.internalValue = undefined;
      this._logStreamDefinition.internalValue = undefined;
      this._manageStatusDefinition.internalValue = undefined;
      this._noteDefinition.internalValue = undefined;
      this._pointPlotDefinition.internalValue = undefined;
      this._powerpackDefinition.internalValue = undefined;
      this._productAnalyticsFunnelDefinition.internalValue = undefined;
      this._queryTableDefinition.internalValue = undefined;
      this._queryValueDefinition.internalValue = undefined;
      this._retentionCurveDefinition.internalValue = undefined;
      this._runWorkflowDefinition.internalValue = undefined;
      this._sankeyDefinition.internalValue = undefined;
      this._scatterplotDefinition.internalValue = undefined;
      this._serviceLevelObjectiveDefinition.internalValue = undefined;
      this._servicemapDefinition.internalValue = undefined;
      this._sloListDefinition.internalValue = undefined;
      this._splitGraphDefinition.internalValue = undefined;
      this._sunburstDefinition.internalValue = undefined;
      this._timeseriesDefinition.internalValue = undefined;
      this._toplistDefinition.internalValue = undefined;
      this._topologyMapDefinition.internalValue = undefined;
      this._traceServiceDefinition.internalValue = undefined;
      this._treemapDefinition.internalValue = undefined;
      this._widgetLayout.internalValue = undefined;
      this._wildcardDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._alertGraphDefinition.internalValue = value.alertGraphDefinition;
      this._alertValueDefinition.internalValue = value.alertValueDefinition;
      this._barChartDefinition.internalValue = value.barChartDefinition;
      this._changeDefinition.internalValue = value.changeDefinition;
      this._checkStatusDefinition.internalValue = value.checkStatusDefinition;
      this._cohortDefinition.internalValue = value.cohortDefinition;
      this._distributionDefinition.internalValue = value.distributionDefinition;
      this._eventStreamDefinition.internalValue = value.eventStreamDefinition;
      this._eventTimelineDefinition.internalValue = value.eventTimelineDefinition;
      this._freeTextDefinition.internalValue = value.freeTextDefinition;
      this._funnelDefinition.internalValue = value.funnelDefinition;
      this._geomapDefinition.internalValue = value.geomapDefinition;
      this._groupDefinition.internalValue = value.groupDefinition;
      this._heatmapDefinition.internalValue = value.heatmapDefinition;
      this._hostmapDefinition.internalValue = value.hostmapDefinition;
      this._iframeDefinition.internalValue = value.iframeDefinition;
      this._imageDefinition.internalValue = value.imageDefinition;
      this._listStreamDefinition.internalValue = value.listStreamDefinition;
      this._logStreamDefinition.internalValue = value.logStreamDefinition;
      this._manageStatusDefinition.internalValue = value.manageStatusDefinition;
      this._noteDefinition.internalValue = value.noteDefinition;
      this._pointPlotDefinition.internalValue = value.pointPlotDefinition;
      this._powerpackDefinition.internalValue = value.powerpackDefinition;
      this._productAnalyticsFunnelDefinition.internalValue = value.productAnalyticsFunnelDefinition;
      this._queryTableDefinition.internalValue = value.queryTableDefinition;
      this._queryValueDefinition.internalValue = value.queryValueDefinition;
      this._retentionCurveDefinition.internalValue = value.retentionCurveDefinition;
      this._runWorkflowDefinition.internalValue = value.runWorkflowDefinition;
      this._sankeyDefinition.internalValue = value.sankeyDefinition;
      this._scatterplotDefinition.internalValue = value.scatterplotDefinition;
      this._serviceLevelObjectiveDefinition.internalValue = value.serviceLevelObjectiveDefinition;
      this._servicemapDefinition.internalValue = value.servicemapDefinition;
      this._sloListDefinition.internalValue = value.sloListDefinition;
      this._splitGraphDefinition.internalValue = value.splitGraphDefinition;
      this._sunburstDefinition.internalValue = value.sunburstDefinition;
      this._timeseriesDefinition.internalValue = value.timeseriesDefinition;
      this._toplistDefinition.internalValue = value.toplistDefinition;
      this._topologyMapDefinition.internalValue = value.topologyMapDefinition;
      this._traceServiceDefinition.internalValue = value.traceServiceDefinition;
      this._treemapDefinition.internalValue = value.treemapDefinition;
      this._widgetLayout.internalValue = value.widgetLayout;
      this._wildcardDefinition.internalValue = value.wildcardDefinition;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // alert_graph_definition - computed: false, optional: true, required: false
  private _alertGraphDefinition = new DashboardV2WidgetAlertGraphDefinitionOutputReference(this, "alert_graph_definition");
  public get alertGraphDefinition() {
    return this._alertGraphDefinition;
  }
  public putAlertGraphDefinition(value: DashboardV2WidgetAlertGraphDefinition) {
    this._alertGraphDefinition.internalValue = value;
  }
  public resetAlertGraphDefinition() {
    this._alertGraphDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertGraphDefinitionInput() {
    return this._alertGraphDefinition.internalValue;
  }

  // alert_value_definition - computed: false, optional: true, required: false
  private _alertValueDefinition = new DashboardV2WidgetAlertValueDefinitionOutputReference(this, "alert_value_definition");
  public get alertValueDefinition() {
    return this._alertValueDefinition;
  }
  public putAlertValueDefinition(value: DashboardV2WidgetAlertValueDefinition) {
    this._alertValueDefinition.internalValue = value;
  }
  public resetAlertValueDefinition() {
    this._alertValueDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertValueDefinitionInput() {
    return this._alertValueDefinition.internalValue;
  }

  // bar_chart_definition - computed: false, optional: true, required: false
  private _barChartDefinition = new DashboardV2WidgetBarChartDefinitionOutputReference(this, "bar_chart_definition");
  public get barChartDefinition() {
    return this._barChartDefinition;
  }
  public putBarChartDefinition(value: DashboardV2WidgetBarChartDefinition) {
    this._barChartDefinition.internalValue = value;
  }
  public resetBarChartDefinition() {
    this._barChartDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get barChartDefinitionInput() {
    return this._barChartDefinition.internalValue;
  }

  // change_definition - computed: false, optional: true, required: false
  private _changeDefinition = new DashboardV2WidgetChangeDefinitionOutputReference(this, "change_definition");
  public get changeDefinition() {
    return this._changeDefinition;
  }
  public putChangeDefinition(value: DashboardV2WidgetChangeDefinition) {
    this._changeDefinition.internalValue = value;
  }
  public resetChangeDefinition() {
    this._changeDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeDefinitionInput() {
    return this._changeDefinition.internalValue;
  }

  // check_status_definition - computed: false, optional: true, required: false
  private _checkStatusDefinition = new DashboardV2WidgetCheckStatusDefinitionOutputReference(this, "check_status_definition");
  public get checkStatusDefinition() {
    return this._checkStatusDefinition;
  }
  public putCheckStatusDefinition(value: DashboardV2WidgetCheckStatusDefinition) {
    this._checkStatusDefinition.internalValue = value;
  }
  public resetCheckStatusDefinition() {
    this._checkStatusDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkStatusDefinitionInput() {
    return this._checkStatusDefinition.internalValue;
  }

  // cohort_definition - computed: false, optional: true, required: false
  private _cohortDefinition = new DashboardV2WidgetCohortDefinitionOutputReference(this, "cohort_definition");
  public get cohortDefinition() {
    return this._cohortDefinition;
  }
  public putCohortDefinition(value: DashboardV2WidgetCohortDefinition) {
    this._cohortDefinition.internalValue = value;
  }
  public resetCohortDefinition() {
    this._cohortDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortDefinitionInput() {
    return this._cohortDefinition.internalValue;
  }

  // distribution_definition - computed: false, optional: true, required: false
  private _distributionDefinition = new DashboardV2WidgetDistributionDefinitionOutputReference(this, "distribution_definition");
  public get distributionDefinition() {
    return this._distributionDefinition;
  }
  public putDistributionDefinition(value: DashboardV2WidgetDistributionDefinition) {
    this._distributionDefinition.internalValue = value;
  }
  public resetDistributionDefinition() {
    this._distributionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionDefinitionInput() {
    return this._distributionDefinition.internalValue;
  }

  // event_stream_definition - computed: false, optional: true, required: false
  private _eventStreamDefinition = new DashboardV2WidgetEventStreamDefinitionOutputReference(this, "event_stream_definition");
  public get eventStreamDefinition() {
    return this._eventStreamDefinition;
  }
  public putEventStreamDefinition(value: DashboardV2WidgetEventStreamDefinition) {
    this._eventStreamDefinition.internalValue = value;
  }
  public resetEventStreamDefinition() {
    this._eventStreamDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStreamDefinitionInput() {
    return this._eventStreamDefinition.internalValue;
  }

  // event_timeline_definition - computed: false, optional: true, required: false
  private _eventTimelineDefinition = new DashboardV2WidgetEventTimelineDefinitionOutputReference(this, "event_timeline_definition");
  public get eventTimelineDefinition() {
    return this._eventTimelineDefinition;
  }
  public putEventTimelineDefinition(value: DashboardV2WidgetEventTimelineDefinition) {
    this._eventTimelineDefinition.internalValue = value;
  }
  public resetEventTimelineDefinition() {
    this._eventTimelineDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimelineDefinitionInput() {
    return this._eventTimelineDefinition.internalValue;
  }

  // free_text_definition - computed: false, optional: true, required: false
  private _freeTextDefinition = new DashboardV2WidgetFreeTextDefinitionOutputReference(this, "free_text_definition");
  public get freeTextDefinition() {
    return this._freeTextDefinition;
  }
  public putFreeTextDefinition(value: DashboardV2WidgetFreeTextDefinition) {
    this._freeTextDefinition.internalValue = value;
  }
  public resetFreeTextDefinition() {
    this._freeTextDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeTextDefinitionInput() {
    return this._freeTextDefinition.internalValue;
  }

  // funnel_definition - computed: false, optional: true, required: false
  private _funnelDefinition = new DashboardV2WidgetFunnelDefinitionOutputReference(this, "funnel_definition");
  public get funnelDefinition() {
    return this._funnelDefinition;
  }
  public putFunnelDefinition(value: DashboardV2WidgetFunnelDefinition) {
    this._funnelDefinition.internalValue = value;
  }
  public resetFunnelDefinition() {
    this._funnelDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funnelDefinitionInput() {
    return this._funnelDefinition.internalValue;
  }

  // geomap_definition - computed: false, optional: true, required: false
  private _geomapDefinition = new DashboardV2WidgetGeomapDefinitionOutputReference(this, "geomap_definition");
  public get geomapDefinition() {
    return this._geomapDefinition;
  }
  public putGeomapDefinition(value: DashboardV2WidgetGeomapDefinition) {
    this._geomapDefinition.internalValue = value;
  }
  public resetGeomapDefinition() {
    this._geomapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geomapDefinitionInput() {
    return this._geomapDefinition.internalValue;
  }

  // group_definition - computed: false, optional: true, required: false
  private _groupDefinition = new DashboardV2WidgetGroupDefinitionOutputReference(this, "group_definition");
  public get groupDefinition() {
    return this._groupDefinition;
  }
  public putGroupDefinition(value: DashboardV2WidgetGroupDefinition) {
    this._groupDefinition.internalValue = value;
  }
  public resetGroupDefinition() {
    this._groupDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDefinitionInput() {
    return this._groupDefinition.internalValue;
  }

  // heatmap_definition - computed: false, optional: true, required: false
  private _heatmapDefinition = new DashboardV2WidgetHeatmapDefinitionOutputReference(this, "heatmap_definition");
  public get heatmapDefinition() {
    return this._heatmapDefinition;
  }
  public putHeatmapDefinition(value: DashboardV2WidgetHeatmapDefinition) {
    this._heatmapDefinition.internalValue = value;
  }
  public resetHeatmapDefinition() {
    this._heatmapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heatmapDefinitionInput() {
    return this._heatmapDefinition.internalValue;
  }

  // hostmap_definition - computed: false, optional: true, required: false
  private _hostmapDefinition = new DashboardV2WidgetHostmapDefinitionOutputReference(this, "hostmap_definition");
  public get hostmapDefinition() {
    return this._hostmapDefinition;
  }
  public putHostmapDefinition(value: DashboardV2WidgetHostmapDefinition) {
    this._hostmapDefinition.internalValue = value;
  }
  public resetHostmapDefinition() {
    this._hostmapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostmapDefinitionInput() {
    return this._hostmapDefinition.internalValue;
  }

  // iframe_definition - computed: false, optional: true, required: false
  private _iframeDefinition = new DashboardV2WidgetIframeDefinitionOutputReference(this, "iframe_definition");
  public get iframeDefinition() {
    return this._iframeDefinition;
  }
  public putIframeDefinition(value: DashboardV2WidgetIframeDefinition) {
    this._iframeDefinition.internalValue = value;
  }
  public resetIframeDefinition() {
    this._iframeDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iframeDefinitionInput() {
    return this._iframeDefinition.internalValue;
  }

  // image_definition - computed: false, optional: true, required: false
  private _imageDefinition = new DashboardV2WidgetImageDefinitionOutputReference(this, "image_definition");
  public get imageDefinition() {
    return this._imageDefinition;
  }
  public putImageDefinition(value: DashboardV2WidgetImageDefinition) {
    this._imageDefinition.internalValue = value;
  }
  public resetImageDefinition() {
    this._imageDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDefinitionInput() {
    return this._imageDefinition.internalValue;
  }

  // list_stream_definition - computed: false, optional: true, required: false
  private _listStreamDefinition = new DashboardV2WidgetListStreamDefinitionOutputReference(this, "list_stream_definition");
  public get listStreamDefinition() {
    return this._listStreamDefinition;
  }
  public putListStreamDefinition(value: DashboardV2WidgetListStreamDefinition) {
    this._listStreamDefinition.internalValue = value;
  }
  public resetListStreamDefinition() {
    this._listStreamDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listStreamDefinitionInput() {
    return this._listStreamDefinition.internalValue;
  }

  // log_stream_definition - computed: false, optional: true, required: false
  private _logStreamDefinition = new DashboardV2WidgetLogStreamDefinitionOutputReference(this, "log_stream_definition");
  public get logStreamDefinition() {
    return this._logStreamDefinition;
  }
  public putLogStreamDefinition(value: DashboardV2WidgetLogStreamDefinition) {
    this._logStreamDefinition.internalValue = value;
  }
  public resetLogStreamDefinition() {
    this._logStreamDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamDefinitionInput() {
    return this._logStreamDefinition.internalValue;
  }

  // manage_status_definition - computed: false, optional: true, required: false
  private _manageStatusDefinition = new DashboardV2WidgetManageStatusDefinitionOutputReference(this, "manage_status_definition");
  public get manageStatusDefinition() {
    return this._manageStatusDefinition;
  }
  public putManageStatusDefinition(value: DashboardV2WidgetManageStatusDefinition) {
    this._manageStatusDefinition.internalValue = value;
  }
  public resetManageStatusDefinition() {
    this._manageStatusDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageStatusDefinitionInput() {
    return this._manageStatusDefinition.internalValue;
  }

  // note_definition - computed: false, optional: true, required: false
  private _noteDefinition = new DashboardV2WidgetNoteDefinitionOutputReference(this, "note_definition");
  public get noteDefinition() {
    return this._noteDefinition;
  }
  public putNoteDefinition(value: DashboardV2WidgetNoteDefinition) {
    this._noteDefinition.internalValue = value;
  }
  public resetNoteDefinition() {
    this._noteDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteDefinitionInput() {
    return this._noteDefinition.internalValue;
  }

  // point_plot_definition - computed: false, optional: true, required: false
  private _pointPlotDefinition = new DashboardV2WidgetPointPlotDefinitionOutputReference(this, "point_plot_definition");
  public get pointPlotDefinition() {
    return this._pointPlotDefinition;
  }
  public putPointPlotDefinition(value: DashboardV2WidgetPointPlotDefinition) {
    this._pointPlotDefinition.internalValue = value;
  }
  public resetPointPlotDefinition() {
    this._pointPlotDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointPlotDefinitionInput() {
    return this._pointPlotDefinition.internalValue;
  }

  // powerpack_definition - computed: false, optional: true, required: false
  private _powerpackDefinition = new DashboardV2WidgetPowerpackDefinitionOutputReference(this, "powerpack_definition");
  public get powerpackDefinition() {
    return this._powerpackDefinition;
  }
  public putPowerpackDefinition(value: DashboardV2WidgetPowerpackDefinition) {
    this._powerpackDefinition.internalValue = value;
  }
  public resetPowerpackDefinition() {
    this._powerpackDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerpackDefinitionInput() {
    return this._powerpackDefinition.internalValue;
  }

  // product_analytics_funnel_definition - computed: false, optional: true, required: false
  private _productAnalyticsFunnelDefinition = new DashboardV2WidgetProductAnalyticsFunnelDefinitionOutputReference(this, "product_analytics_funnel_definition");
  public get productAnalyticsFunnelDefinition() {
    return this._productAnalyticsFunnelDefinition;
  }
  public putProductAnalyticsFunnelDefinition(value: DashboardV2WidgetProductAnalyticsFunnelDefinition) {
    this._productAnalyticsFunnelDefinition.internalValue = value;
  }
  public resetProductAnalyticsFunnelDefinition() {
    this._productAnalyticsFunnelDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productAnalyticsFunnelDefinitionInput() {
    return this._productAnalyticsFunnelDefinition.internalValue;
  }

  // query_table_definition - computed: false, optional: true, required: false
  private _queryTableDefinition = new DashboardV2WidgetQueryTableDefinitionOutputReference(this, "query_table_definition");
  public get queryTableDefinition() {
    return this._queryTableDefinition;
  }
  public putQueryTableDefinition(value: DashboardV2WidgetQueryTableDefinition) {
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
  private _queryValueDefinition = new DashboardV2WidgetQueryValueDefinitionOutputReference(this, "query_value_definition");
  public get queryValueDefinition() {
    return this._queryValueDefinition;
  }
  public putQueryValueDefinition(value: DashboardV2WidgetQueryValueDefinition) {
    this._queryValueDefinition.internalValue = value;
  }
  public resetQueryValueDefinition() {
    this._queryValueDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryValueDefinitionInput() {
    return this._queryValueDefinition.internalValue;
  }

  // retention_curve_definition - computed: false, optional: true, required: false
  private _retentionCurveDefinition = new DashboardV2WidgetRetentionCurveDefinitionOutputReference(this, "retention_curve_definition");
  public get retentionCurveDefinition() {
    return this._retentionCurveDefinition;
  }
  public putRetentionCurveDefinition(value: DashboardV2WidgetRetentionCurveDefinition) {
    this._retentionCurveDefinition.internalValue = value;
  }
  public resetRetentionCurveDefinition() {
    this._retentionCurveDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionCurveDefinitionInput() {
    return this._retentionCurveDefinition.internalValue;
  }

  // run_workflow_definition - computed: false, optional: true, required: false
  private _runWorkflowDefinition = new DashboardV2WidgetRunWorkflowDefinitionOutputReference(this, "run_workflow_definition");
  public get runWorkflowDefinition() {
    return this._runWorkflowDefinition;
  }
  public putRunWorkflowDefinition(value: DashboardV2WidgetRunWorkflowDefinition) {
    this._runWorkflowDefinition.internalValue = value;
  }
  public resetRunWorkflowDefinition() {
    this._runWorkflowDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runWorkflowDefinitionInput() {
    return this._runWorkflowDefinition.internalValue;
  }

  // sankey_definition - computed: false, optional: true, required: false
  private _sankeyDefinition = new DashboardV2WidgetSankeyDefinitionOutputReference(this, "sankey_definition");
  public get sankeyDefinition() {
    return this._sankeyDefinition;
  }
  public putSankeyDefinition(value: DashboardV2WidgetSankeyDefinition) {
    this._sankeyDefinition.internalValue = value;
  }
  public resetSankeyDefinition() {
    this._sankeyDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sankeyDefinitionInput() {
    return this._sankeyDefinition.internalValue;
  }

  // scatterplot_definition - computed: false, optional: true, required: false
  private _scatterplotDefinition = new DashboardV2WidgetScatterplotDefinitionOutputReference(this, "scatterplot_definition");
  public get scatterplotDefinition() {
    return this._scatterplotDefinition;
  }
  public putScatterplotDefinition(value: DashboardV2WidgetScatterplotDefinition) {
    this._scatterplotDefinition.internalValue = value;
  }
  public resetScatterplotDefinition() {
    this._scatterplotDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scatterplotDefinitionInput() {
    return this._scatterplotDefinition.internalValue;
  }

  // service_level_objective_definition - computed: false, optional: true, required: false
  private _serviceLevelObjectiveDefinition = new DashboardV2WidgetServiceLevelObjectiveDefinitionOutputReference(this, "service_level_objective_definition");
  public get serviceLevelObjectiveDefinition() {
    return this._serviceLevelObjectiveDefinition;
  }
  public putServiceLevelObjectiveDefinition(value: DashboardV2WidgetServiceLevelObjectiveDefinition) {
    this._serviceLevelObjectiveDefinition.internalValue = value;
  }
  public resetServiceLevelObjectiveDefinition() {
    this._serviceLevelObjectiveDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelObjectiveDefinitionInput() {
    return this._serviceLevelObjectiveDefinition.internalValue;
  }

  // servicemap_definition - computed: false, optional: true, required: false
  private _servicemapDefinition = new DashboardV2WidgetServicemapDefinitionOutputReference(this, "servicemap_definition");
  public get servicemapDefinition() {
    return this._servicemapDefinition;
  }
  public putServicemapDefinition(value: DashboardV2WidgetServicemapDefinition) {
    this._servicemapDefinition.internalValue = value;
  }
  public resetServicemapDefinition() {
    this._servicemapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicemapDefinitionInput() {
    return this._servicemapDefinition.internalValue;
  }

  // slo_list_definition - computed: false, optional: true, required: false
  private _sloListDefinition = new DashboardV2WidgetSloListDefinitionOutputReference(this, "slo_list_definition");
  public get sloListDefinition() {
    return this._sloListDefinition;
  }
  public putSloListDefinition(value: DashboardV2WidgetSloListDefinition) {
    this._sloListDefinition.internalValue = value;
  }
  public resetSloListDefinition() {
    this._sloListDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloListDefinitionInput() {
    return this._sloListDefinition.internalValue;
  }

  // split_graph_definition - computed: false, optional: true, required: false
  private _splitGraphDefinition = new DashboardV2WidgetSplitGraphDefinitionOutputReference(this, "split_graph_definition");
  public get splitGraphDefinition() {
    return this._splitGraphDefinition;
  }
  public putSplitGraphDefinition(value: DashboardV2WidgetSplitGraphDefinition) {
    this._splitGraphDefinition.internalValue = value;
  }
  public resetSplitGraphDefinition() {
    this._splitGraphDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitGraphDefinitionInput() {
    return this._splitGraphDefinition.internalValue;
  }

  // sunburst_definition - computed: false, optional: true, required: false
  private _sunburstDefinition = new DashboardV2WidgetSunburstDefinitionOutputReference(this, "sunburst_definition");
  public get sunburstDefinition() {
    return this._sunburstDefinition;
  }
  public putSunburstDefinition(value: DashboardV2WidgetSunburstDefinition) {
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
  private _timeseriesDefinition = new DashboardV2WidgetTimeseriesDefinitionOutputReference(this, "timeseries_definition");
  public get timeseriesDefinition() {
    return this._timeseriesDefinition;
  }
  public putTimeseriesDefinition(value: DashboardV2WidgetTimeseriesDefinition) {
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
  private _toplistDefinition = new DashboardV2WidgetToplistDefinitionOutputReference(this, "toplist_definition");
  public get toplistDefinition() {
    return this._toplistDefinition;
  }
  public putToplistDefinition(value: DashboardV2WidgetToplistDefinition) {
    this._toplistDefinition.internalValue = value;
  }
  public resetToplistDefinition() {
    this._toplistDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toplistDefinitionInput() {
    return this._toplistDefinition.internalValue;
  }

  // topology_map_definition - computed: false, optional: true, required: false
  private _topologyMapDefinition = new DashboardV2WidgetTopologyMapDefinitionOutputReference(this, "topology_map_definition");
  public get topologyMapDefinition() {
    return this._topologyMapDefinition;
  }
  public putTopologyMapDefinition(value: DashboardV2WidgetTopologyMapDefinition) {
    this._topologyMapDefinition.internalValue = value;
  }
  public resetTopologyMapDefinition() {
    this._topologyMapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyMapDefinitionInput() {
    return this._topologyMapDefinition.internalValue;
  }

  // trace_service_definition - computed: false, optional: true, required: false
  private _traceServiceDefinition = new DashboardV2WidgetTraceServiceDefinitionOutputReference(this, "trace_service_definition");
  public get traceServiceDefinition() {
    return this._traceServiceDefinition;
  }
  public putTraceServiceDefinition(value: DashboardV2WidgetTraceServiceDefinition) {
    this._traceServiceDefinition.internalValue = value;
  }
  public resetTraceServiceDefinition() {
    this._traceServiceDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceServiceDefinitionInput() {
    return this._traceServiceDefinition.internalValue;
  }

  // treemap_definition - computed: false, optional: true, required: false
  private _treemapDefinition = new DashboardV2WidgetTreemapDefinitionOutputReference(this, "treemap_definition");
  public get treemapDefinition() {
    return this._treemapDefinition;
  }
  public putTreemapDefinition(value: DashboardV2WidgetTreemapDefinition) {
    this._treemapDefinition.internalValue = value;
  }
  public resetTreemapDefinition() {
    this._treemapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treemapDefinitionInput() {
    return this._treemapDefinition.internalValue;
  }

  // widget_layout - computed: false, optional: true, required: false
  private _widgetLayout = new DashboardV2WidgetWidgetLayoutOutputReference(this, "widget_layout");
  public get widgetLayout() {
    return this._widgetLayout;
  }
  public putWidgetLayout(value: DashboardV2WidgetWidgetLayout) {
    this._widgetLayout.internalValue = value;
  }
  public resetWidgetLayout() {
    this._widgetLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetLayoutInput() {
    return this._widgetLayout.internalValue;
  }

  // wildcard_definition - computed: false, optional: true, required: false
  private _wildcardDefinition = new DashboardV2WidgetWildcardDefinitionOutputReference(this, "wildcard_definition");
  public get wildcardDefinition() {
    return this._wildcardDefinition;
  }
  public putWildcardDefinition(value: DashboardV2WidgetWildcardDefinition) {
    this._wildcardDefinition.internalValue = value;
  }
  public resetWildcardDefinition() {
    this._wildcardDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardDefinitionInput() {
    return this._wildcardDefinition.internalValue;
  }
}

export class DashboardV2WidgetList extends cdktn.ComplexList {
  public internalValue? : DashboardV2Widget[] | cdktn.IResolvable

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
  public get(index: number): DashboardV2WidgetOutputReference {
    return new DashboardV2WidgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
