/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortToTerraform,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortOutputReference,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortToTerraform,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortOutputReference,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQuery,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryToTerraform,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryOutputReference,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormula,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaToTerraform,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaList,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQuery,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryToTerraform,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryOutputReference,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQuery,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryToTerraform,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryOutputReference,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuery,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryToTerraform,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryList,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryToTerraform,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryOutputReference,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryToTerraform,
powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryOutputReference,
PowerpackV2WidgetWildcardDefinitionRequestHistogramRequest,
powerpackV2WidgetWildcardDefinitionRequestHistogramRequestToTerraform,
powerpackV2WidgetWildcardDefinitionRequestHistogramRequestToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestOutputReference,
PowerpackV2WidgetWildcardDefinitionRequestListstreamRequest,
powerpackV2WidgetWildcardDefinitionRequestListstreamRequestToTerraform,
powerpackV2WidgetWildcardDefinitionRequestListstreamRequestToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestOutputReference,
PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequest,
powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestToTerraform,
powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestToHclTerraform,
PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestOutputReference,
PowerpackV2WidgetWildcardDefinitionCustomLink,
powerpackV2WidgetWildcardDefinitionCustomLinkToTerraform,
powerpackV2WidgetWildcardDefinitionCustomLinkToHclTerraform,
PowerpackV2WidgetWildcardDefinitionCustomLinkList,
PowerpackV2WidgetTreemapDefinition,
powerpackV2WidgetTreemapDefinitionToTerraform,
powerpackV2WidgetTreemapDefinitionToHclTerraform,
PowerpackV2WidgetTreemapDefinitionOutputReference,
PowerpackV2WidgetWidgetLayout,
powerpackV2WidgetWidgetLayoutToTerraform,
powerpackV2WidgetWidgetLayoutToHclTerraform,
PowerpackV2WidgetWidgetLayoutOutputReference } from './structs6800';
import { PowerpackV2WidgetAlertGraphDefinition,
powerpackV2WidgetAlertGraphDefinitionToTerraform,
powerpackV2WidgetAlertGraphDefinitionToHclTerraform,
PowerpackV2WidgetAlertGraphDefinitionOutputReference,
PowerpackV2WidgetAlertValueDefinition,
powerpackV2WidgetAlertValueDefinitionToTerraform,
powerpackV2WidgetAlertValueDefinitionToHclTerraform,
PowerpackV2WidgetAlertValueDefinitionOutputReference,
PowerpackV2WidgetBarChartDefinition,
powerpackV2WidgetBarChartDefinitionToTerraform,
powerpackV2WidgetBarChartDefinitionToHclTerraform,
PowerpackV2WidgetBarChartDefinitionOutputReference,
PowerpackV2WidgetChangeDefinition,
powerpackV2WidgetChangeDefinitionToTerraform,
powerpackV2WidgetChangeDefinitionToHclTerraform,
PowerpackV2WidgetChangeDefinitionOutputReference } from './structs0';
import { PowerpackV2WidgetCheckStatusDefinition,
powerpackV2WidgetCheckStatusDefinitionToTerraform,
powerpackV2WidgetCheckStatusDefinitionToHclTerraform,
PowerpackV2WidgetCheckStatusDefinitionOutputReference,
PowerpackV2WidgetDistributionDefinition,
powerpackV2WidgetDistributionDefinitionToTerraform,
powerpackV2WidgetDistributionDefinitionToHclTerraform,
PowerpackV2WidgetDistributionDefinitionOutputReference,
PowerpackV2WidgetEventStreamDefinition,
powerpackV2WidgetEventStreamDefinitionToTerraform,
powerpackV2WidgetEventStreamDefinitionToHclTerraform,
PowerpackV2WidgetEventStreamDefinitionOutputReference,
PowerpackV2WidgetEventTimelineDefinition,
powerpackV2WidgetEventTimelineDefinitionToTerraform,
powerpackV2WidgetEventTimelineDefinitionToHclTerraform,
PowerpackV2WidgetEventTimelineDefinitionOutputReference,
PowerpackV2WidgetFreeTextDefinition,
powerpackV2WidgetFreeTextDefinitionToTerraform,
powerpackV2WidgetFreeTextDefinitionToHclTerraform,
PowerpackV2WidgetFreeTextDefinitionOutputReference,
PowerpackV2WidgetFunnelDefinition,
powerpackV2WidgetFunnelDefinitionToTerraform,
powerpackV2WidgetFunnelDefinitionToHclTerraform,
PowerpackV2WidgetFunnelDefinitionOutputReference } from './structs400';
import { PowerpackV2WidgetGeomapDefinition,
powerpackV2WidgetGeomapDefinitionToTerraform,
powerpackV2WidgetGeomapDefinitionToHclTerraform,
PowerpackV2WidgetGeomapDefinitionOutputReference } from './structs800';
import { PowerpackV2WidgetGroupDefinition,
powerpackV2WidgetGroupDefinitionToTerraform,
powerpackV2WidgetGroupDefinitionToHclTerraform,
PowerpackV2WidgetGroupDefinitionOutputReference,
PowerpackV2WidgetHeatmapDefinition,
powerpackV2WidgetHeatmapDefinitionToTerraform,
powerpackV2WidgetHeatmapDefinitionToHclTerraform,
PowerpackV2WidgetHeatmapDefinitionOutputReference } from './structs4400';
import { PowerpackV2WidgetHostmapDefinition,
powerpackV2WidgetHostmapDefinitionToTerraform,
powerpackV2WidgetHostmapDefinitionToHclTerraform,
PowerpackV2WidgetHostmapDefinitionOutputReference,
PowerpackV2WidgetIframeDefinition,
powerpackV2WidgetIframeDefinitionToTerraform,
powerpackV2WidgetIframeDefinitionToHclTerraform,
PowerpackV2WidgetIframeDefinitionOutputReference,
PowerpackV2WidgetImageDefinition,
powerpackV2WidgetImageDefinitionToTerraform,
powerpackV2WidgetImageDefinitionToHclTerraform,
PowerpackV2WidgetImageDefinitionOutputReference,
PowerpackV2WidgetListStreamDefinition,
powerpackV2WidgetListStreamDefinitionToTerraform,
powerpackV2WidgetListStreamDefinitionToHclTerraform,
PowerpackV2WidgetListStreamDefinitionOutputReference,
PowerpackV2WidgetLogStreamDefinition,
powerpackV2WidgetLogStreamDefinitionToTerraform,
powerpackV2WidgetLogStreamDefinitionToHclTerraform,
PowerpackV2WidgetLogStreamDefinitionOutputReference,
PowerpackV2WidgetManageStatusDefinition,
powerpackV2WidgetManageStatusDefinitionToTerraform,
powerpackV2WidgetManageStatusDefinitionToHclTerraform,
PowerpackV2WidgetManageStatusDefinitionOutputReference,
PowerpackV2WidgetNoteDefinition,
powerpackV2WidgetNoteDefinitionToTerraform,
powerpackV2WidgetNoteDefinitionToHclTerraform,
PowerpackV2WidgetNoteDefinitionOutputReference,
PowerpackV2WidgetPointPlotDefinition,
powerpackV2WidgetPointPlotDefinitionToTerraform,
powerpackV2WidgetPointPlotDefinitionToHclTerraform,
PowerpackV2WidgetPointPlotDefinitionOutputReference } from './structs4800';
import { PowerpackV2WidgetQueryTableDefinition,
powerpackV2WidgetQueryTableDefinitionToTerraform,
powerpackV2WidgetQueryTableDefinitionToHclTerraform,
PowerpackV2WidgetQueryTableDefinitionOutputReference,
PowerpackV2WidgetQueryValueDefinition,
powerpackV2WidgetQueryValueDefinitionToTerraform,
powerpackV2WidgetQueryValueDefinitionToHclTerraform,
PowerpackV2WidgetQueryValueDefinitionOutputReference,
PowerpackV2WidgetRunWorkflowDefinition,
powerpackV2WidgetRunWorkflowDefinitionToTerraform,
powerpackV2WidgetRunWorkflowDefinitionToHclTerraform,
PowerpackV2WidgetRunWorkflowDefinitionOutputReference,
PowerpackV2WidgetSankeyDefinition,
powerpackV2WidgetSankeyDefinitionToTerraform,
powerpackV2WidgetSankeyDefinitionToHclTerraform,
PowerpackV2WidgetSankeyDefinitionOutputReference } from './structs5200';
import { PowerpackV2WidgetScatterplotDefinition,
powerpackV2WidgetScatterplotDefinitionToTerraform,
powerpackV2WidgetScatterplotDefinitionToHclTerraform,
PowerpackV2WidgetScatterplotDefinitionOutputReference,
PowerpackV2WidgetServiceLevelObjectiveDefinition,
powerpackV2WidgetServiceLevelObjectiveDefinitionToTerraform,
powerpackV2WidgetServiceLevelObjectiveDefinitionToHclTerraform,
PowerpackV2WidgetServiceLevelObjectiveDefinitionOutputReference,
PowerpackV2WidgetServicemapDefinition,
powerpackV2WidgetServicemapDefinitionToTerraform,
powerpackV2WidgetServicemapDefinitionToHclTerraform,
PowerpackV2WidgetServicemapDefinitionOutputReference,
PowerpackV2WidgetSloListDefinition,
powerpackV2WidgetSloListDefinitionToTerraform,
powerpackV2WidgetSloListDefinitionToHclTerraform,
PowerpackV2WidgetSloListDefinitionOutputReference } from './structs5600';
import { PowerpackV2WidgetSunburstDefinition,
powerpackV2WidgetSunburstDefinitionToTerraform,
powerpackV2WidgetSunburstDefinitionToHclTerraform,
PowerpackV2WidgetSunburstDefinitionOutputReference } from './structs6000';
import { PowerpackV2WidgetTimeseriesDefinition,
powerpackV2WidgetTimeseriesDefinitionToTerraform,
powerpackV2WidgetTimeseriesDefinitionToHclTerraform,
PowerpackV2WidgetTimeseriesDefinitionOutputReference,
PowerpackV2WidgetToplistDefinition,
powerpackV2WidgetToplistDefinitionToTerraform,
powerpackV2WidgetToplistDefinitionToHclTerraform,
PowerpackV2WidgetToplistDefinitionOutputReference,
PowerpackV2WidgetTopologyMapDefinition,
powerpackV2WidgetTopologyMapDefinitionToTerraform,
powerpackV2WidgetTopologyMapDefinitionToHclTerraform,
PowerpackV2WidgetTopologyMapDefinitionOutputReference,
PowerpackV2WidgetTraceServiceDefinition,
powerpackV2WidgetTraceServiceDefinitionToTerraform,
powerpackV2WidgetTraceServiceDefinitionToHclTerraform,
PowerpackV2WidgetTraceServiceDefinitionOutputReference } from './structs6400';
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy {
  /**
  * formula_sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#formula_sort PowerpackV2#formula_sort}
  */
  readonly formulaSort?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort;
  /**
  * group_sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#group_sort PowerpackV2#group_sort}
  */
  readonly groupSort?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    formula_sort: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortToTerraform(struct!.formulaSort),
    group_sort: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortToTerraform(struct!.groupSort),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    formula_sort: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortToHclTerraform(struct!.formulaSort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortList",
    },
    group_sort: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortToHclTerraform(struct!.groupSort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy | cdktn.IResolvable | undefined) {
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
  private _formulaSort = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortOutputReference(this, "formula_sort");
  public get formulaSort() {
    return this._formulaSort;
  }
  public putFormulaSort(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort) {
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
  private _groupSort = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortOutputReference(this, "group_sort");
  public get groupSort() {
    return this._groupSort;
  }
  public putGroupSort(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSort {
  /**
  * The number of items to limit the widget to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#count PowerpackV2#count}
  */
  readonly count?: number;
  /**
  * order_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#order_by PowerpackV2#order_by}
  */
  readonly orderBy?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy[] | cdktn.IResolvable;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    order_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByToTerraform, true)(struct!.orderBy),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSort): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByToHclTerraform, true)(struct!.orderBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSort | undefined) {
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
  private _orderBy = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByList(this, "order_by", false);
  public get orderBy() {
    return this._orderBy;
  }
  public putOrderBy(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderBy[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyle {
  /**
  * How to order series. Valid values are `tags`, `values`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#order_by PowerpackV2#order_by}
  */
  readonly orderBy?: string;
  /**
  * A color palette to apply to the widget. The available options are available at: https://docs.datadoghq.com/dashboards/widgets/timeseries/#appearance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyleToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order_by: cdktn.stringToTerraform(struct!.orderBy),
    palette: cdktn.stringToTerraform(struct!.palette),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyleToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyle): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyle | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyle | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequest {
  /**
  * The metric query to use for this widget. **Deprecated.** Use queries and formulas instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#q PowerpackV2#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#apm_query PowerpackV2#apm_query}
  */
  readonly apmQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQuery;
  /**
  * formula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#formula PowerpackV2#formula}
  */
  readonly formula?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormula[] | cdktn.IResolvable;
  /**
  * log_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#log_query PowerpackV2#log_query}
  */
  readonly logQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#process_query PowerpackV2#process_query}
  */
  readonly processQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQuery;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuery[] | cdktn.IResolvable;
  /**
  * rum_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#rum_query PowerpackV2#rum_query}
  */
  readonly rumQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery;
  /**
  * security_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#security_query PowerpackV2#security_query}
  */
  readonly securityQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSort;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#style PowerpackV2#style}
  */
  readonly style?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyle;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    q: cdktn.stringToTerraform(struct!.q),
    apm_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryToTerraform(struct!.apmQuery),
    formula: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaToTerraform, true)(struct!.formula),
    log_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryToTerraform(struct!.logQuery),
    process_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryToTerraform(struct!.processQuery),
    query: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryToTerraform, true)(struct!.query),
    rum_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryToTerraform(struct!.rumQuery),
    security_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryToTerraform(struct!.securityQuery),
    sort: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortToTerraform(struct!.sort),
    style: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyleToTerraform(struct!.style),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequest): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryToHclTerraform(struct!.apmQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryList",
    },
    formula: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaToHclTerraform, true)(struct!.formula),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaList",
    },
    log_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryToHclTerraform(struct!.logQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryList",
    },
    process_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryList",
    },
    query: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryList",
    },
    rum_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryToHclTerraform(struct!.rumQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryList",
    },
    security_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryToHclTerraform(struct!.securityQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryList",
    },
    sort: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortList",
    },
    style: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequest | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequest | undefined) {
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
  private _apmQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQuery) {
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
  private _formula = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormula[] | cdktn.IResolvable) {
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
  private _logQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQuery) {
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
  private _processQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQuery) {
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
  private _query = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuery[] | cdktn.IResolvable) {
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
  private _rumQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery) {
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
  private _securityQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery) {
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
  private _sort = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSort) {
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
  private _style = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestStyle) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequest {
  /**
  * histogram_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#histogram_request PowerpackV2#histogram_request}
  */
  readonly histogramRequest?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequest;
  /**
  * liststream_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#liststream_request PowerpackV2#liststream_request}
  */
  readonly liststreamRequest?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequest;
  /**
  * timeseries_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#timeseries_request PowerpackV2#timeseries_request}
  */
  readonly timeseriesRequest?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequest;
  /**
  * treemap_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#treemap_request PowerpackV2#treemap_request}
  */
  readonly treemapRequest?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequest;
}

export function powerpackV2WidgetWildcardDefinitionRequestToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    histogram_request: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestToTerraform(struct!.histogramRequest),
    liststream_request: powerpackV2WidgetWildcardDefinitionRequestListstreamRequestToTerraform(struct!.liststreamRequest),
    timeseries_request: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestToTerraform(struct!.timeseriesRequest),
    treemap_request: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestToTerraform(struct!.treemapRequest),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    histogram_request: {
      value: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestToHclTerraform(struct!.histogramRequest),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestList",
    },
    liststream_request: {
      value: powerpackV2WidgetWildcardDefinitionRequestListstreamRequestToHclTerraform(struct!.liststreamRequest),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestList",
    },
    timeseries_request: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestToHclTerraform(struct!.timeseriesRequest),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestList",
    },
    treemap_request: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestToHclTerraform(struct!.treemapRequest),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequest | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequest | cdktn.IResolvable | undefined) {
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
  private _histogramRequest = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestOutputReference(this, "histogram_request");
  public get histogramRequest() {
    return this._histogramRequest;
  }
  public putHistogramRequest(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequest) {
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
  private _liststreamRequest = new PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestOutputReference(this, "liststream_request");
  public get liststreamRequest() {
    return this._liststreamRequest;
  }
  public putListstreamRequest(value: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequest) {
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
  private _timeseriesRequest = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestOutputReference(this, "timeseries_request");
  public get timeseriesRequest() {
    return this._timeseriesRequest;
  }
  public putTimeseriesRequest(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequest) {
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
  private _treemapRequest = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestOutputReference(this, "treemap_request");
  public get treemapRequest() {
    return this._treemapRequest;
  }
  public putTreemapRequest(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequest) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequest[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionSpecification {
  /**
  * The Vega or Vega-Lite specification as a JSON string. Use `jsonencode()` to encode the specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#contents PowerpackV2#contents}
  */
  readonly contents: string;
  /**
  * The type of specification (Vega or Vega-Lite). Valid values are `vega`, `vega-lite`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
}

export function powerpackV2WidgetWildcardDefinitionSpecificationToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionSpecificationOutputReference | PowerpackV2WidgetWildcardDefinitionSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contents: cdktn.stringToTerraform(struct!.contents),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function powerpackV2WidgetWildcardDefinitionSpecificationToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionSpecificationOutputReference | PowerpackV2WidgetWildcardDefinitionSpecification): any {
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

export class PowerpackV2WidgetWildcardDefinitionSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionSpecification | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionSpecification | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionTimeFixed {
  /**
  * Start time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#from PowerpackV2#from}
  */
  readonly from: number;
  /**
  * End time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#to PowerpackV2#to}
  */
  readonly to: number;
}

export function powerpackV2WidgetWildcardDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionTimeFixedOutputReference | PowerpackV2WidgetWildcardDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetWildcardDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionTimeFixedOutputReference | PowerpackV2WidgetWildcardDefinitionTimeFixed): any {
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

export class PowerpackV2WidgetWildcardDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionTimeFixed | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionTimeFixed | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionTimeLive {
  /**
  * Unit of the time span. Valid values are `minute`, `hour`, `day`, `week`, `month`, `year`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#unit PowerpackV2#unit}
  */
  readonly unit: string;
  /**
  * Value of the time span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value: number;
}

export function powerpackV2WidgetWildcardDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionTimeLiveOutputReference | PowerpackV2WidgetWildcardDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetWildcardDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionTimeLiveOutputReference | PowerpackV2WidgetWildcardDefinitionTimeLive): any {
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

export class PowerpackV2WidgetWildcardDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionTimeLive | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionTimeLive | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetWildcardDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetWildcardDefinitionTimeLive;
}

export function powerpackV2WidgetWildcardDefinitionTimeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionTimeOutputReference | PowerpackV2WidgetWildcardDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetWildcardDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetWildcardDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetWildcardDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionTimeOutputReference | PowerpackV2WidgetWildcardDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetWildcardDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetWildcardDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionTime | undefined) {
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
  private _fixed = new PowerpackV2WidgetWildcardDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetWildcardDefinitionTimeFixed) {
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
  private _live = new PowerpackV2WidgetWildcardDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetWildcardDefinitionTimeLive) {
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
export interface PowerpackV2WidgetWildcardDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
  /**
  * Hide any portion of the widget's timeframe that is incomplete due to cost data not being available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#hide_incomplete_cost_data PowerpackV2#hide_incomplete_cost_data}
  */
  readonly hideIncompleteCostData?: boolean | cdktn.IResolvable;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `week_to_date`, `month_to_date`, `1y`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#live_span PowerpackV2#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The title of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#title PowerpackV2#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#title_align PowerpackV2#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#title_size PowerpackV2#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#custom_link PowerpackV2#custom_link}
  */
  readonly customLink?: PowerpackV2WidgetWildcardDefinitionCustomLink[] | cdktn.IResolvable;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#request PowerpackV2#request}
  */
  readonly request?: PowerpackV2WidgetWildcardDefinitionRequest[] | cdktn.IResolvable;
  /**
  * specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#specification PowerpackV2#specification}
  */
  readonly specification?: PowerpackV2WidgetWildcardDefinitionSpecification;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetWildcardDefinitionTime;
}

export function powerpackV2WidgetWildcardDefinitionToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionOutputReference | PowerpackV2WidgetWildcardDefinition): any {
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
    custom_link: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionCustomLinkToTerraform, true)(struct!.customLink),
    request: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestToTerraform, true)(struct!.request),
    specification: powerpackV2WidgetWildcardDefinitionSpecificationToTerraform(struct!.specification),
    time: powerpackV2WidgetWildcardDefinitionTimeToTerraform(struct!.time),
  }
}


export function powerpackV2WidgetWildcardDefinitionToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionOutputReference | PowerpackV2WidgetWildcardDefinition): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionCustomLinkToHclTerraform, true)(struct!.customLink),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionCustomLinkList",
    },
    request: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestList",
    },
    specification: {
      value: powerpackV2WidgetWildcardDefinitionSpecificationToHclTerraform(struct!.specification),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionSpecificationList",
    },
    time: {
      value: powerpackV2WidgetWildcardDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinition | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinition | undefined) {
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
  private _customLink = new PowerpackV2WidgetWildcardDefinitionCustomLinkList(this, "custom_link", false);
  public get customLink() {
    return this._customLink;
  }
  public putCustomLink(value: PowerpackV2WidgetWildcardDefinitionCustomLink[] | cdktn.IResolvable) {
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
  private _request = new PowerpackV2WidgetWildcardDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: PowerpackV2WidgetWildcardDefinitionRequest[] | cdktn.IResolvable) {
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
  private _specification = new PowerpackV2WidgetWildcardDefinitionSpecificationOutputReference(this, "specification");
  public get specification() {
    return this._specification;
  }
  public putSpecification(value: PowerpackV2WidgetWildcardDefinitionSpecification) {
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
  private _time = new PowerpackV2WidgetWildcardDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetWildcardDefinitionTime) {
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
export interface PowerpackV2Widget {
  /**
  * The ID of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#id PowerpackV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * alert_graph_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#alert_graph_definition PowerpackV2#alert_graph_definition}
  */
  readonly alertGraphDefinition?: PowerpackV2WidgetAlertGraphDefinition;
  /**
  * alert_value_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#alert_value_definition PowerpackV2#alert_value_definition}
  */
  readonly alertValueDefinition?: PowerpackV2WidgetAlertValueDefinition;
  /**
  * bar_chart_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#bar_chart_definition PowerpackV2#bar_chart_definition}
  */
  readonly barChartDefinition?: PowerpackV2WidgetBarChartDefinition;
  /**
  * change_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#change_definition PowerpackV2#change_definition}
  */
  readonly changeDefinition?: PowerpackV2WidgetChangeDefinition;
  /**
  * check_status_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#check_status_definition PowerpackV2#check_status_definition}
  */
  readonly checkStatusDefinition?: PowerpackV2WidgetCheckStatusDefinition;
  /**
  * distribution_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#distribution_definition PowerpackV2#distribution_definition}
  */
  readonly distributionDefinition?: PowerpackV2WidgetDistributionDefinition;
  /**
  * event_stream_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#event_stream_definition PowerpackV2#event_stream_definition}
  */
  readonly eventStreamDefinition?: PowerpackV2WidgetEventStreamDefinition;
  /**
  * event_timeline_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#event_timeline_definition PowerpackV2#event_timeline_definition}
  */
  readonly eventTimelineDefinition?: PowerpackV2WidgetEventTimelineDefinition;
  /**
  * free_text_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#free_text_definition PowerpackV2#free_text_definition}
  */
  readonly freeTextDefinition?: PowerpackV2WidgetFreeTextDefinition;
  /**
  * funnel_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#funnel_definition PowerpackV2#funnel_definition}
  */
  readonly funnelDefinition?: PowerpackV2WidgetFunnelDefinition;
  /**
  * geomap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#geomap_definition PowerpackV2#geomap_definition}
  */
  readonly geomapDefinition?: PowerpackV2WidgetGeomapDefinition;
  /**
  * group_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#group_definition PowerpackV2#group_definition}
  */
  readonly groupDefinition?: PowerpackV2WidgetGroupDefinition;
  /**
  * heatmap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#heatmap_definition PowerpackV2#heatmap_definition}
  */
  readonly heatmapDefinition?: PowerpackV2WidgetHeatmapDefinition;
  /**
  * hostmap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#hostmap_definition PowerpackV2#hostmap_definition}
  */
  readonly hostmapDefinition?: PowerpackV2WidgetHostmapDefinition;
  /**
  * iframe_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#iframe_definition PowerpackV2#iframe_definition}
  */
  readonly iframeDefinition?: PowerpackV2WidgetIframeDefinition;
  /**
  * image_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#image_definition PowerpackV2#image_definition}
  */
  readonly imageDefinition?: PowerpackV2WidgetImageDefinition;
  /**
  * list_stream_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#list_stream_definition PowerpackV2#list_stream_definition}
  */
  readonly listStreamDefinition?: PowerpackV2WidgetListStreamDefinition;
  /**
  * log_stream_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#log_stream_definition PowerpackV2#log_stream_definition}
  */
  readonly logStreamDefinition?: PowerpackV2WidgetLogStreamDefinition;
  /**
  * manage_status_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#manage_status_definition PowerpackV2#manage_status_definition}
  */
  readonly manageStatusDefinition?: PowerpackV2WidgetManageStatusDefinition;
  /**
  * note_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#note_definition PowerpackV2#note_definition}
  */
  readonly noteDefinition?: PowerpackV2WidgetNoteDefinition;
  /**
  * point_plot_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#point_plot_definition PowerpackV2#point_plot_definition}
  */
  readonly pointPlotDefinition?: PowerpackV2WidgetPointPlotDefinition;
  /**
  * query_table_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#query_table_definition PowerpackV2#query_table_definition}
  */
  readonly queryTableDefinition?: PowerpackV2WidgetQueryTableDefinition;
  /**
  * query_value_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#query_value_definition PowerpackV2#query_value_definition}
  */
  readonly queryValueDefinition?: PowerpackV2WidgetQueryValueDefinition;
  /**
  * run_workflow_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#run_workflow_definition PowerpackV2#run_workflow_definition}
  */
  readonly runWorkflowDefinition?: PowerpackV2WidgetRunWorkflowDefinition;
  /**
  * sankey_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#sankey_definition PowerpackV2#sankey_definition}
  */
  readonly sankeyDefinition?: PowerpackV2WidgetSankeyDefinition;
  /**
  * scatterplot_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#scatterplot_definition PowerpackV2#scatterplot_definition}
  */
  readonly scatterplotDefinition?: PowerpackV2WidgetScatterplotDefinition;
  /**
  * service_level_objective_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#service_level_objective_definition PowerpackV2#service_level_objective_definition}
  */
  readonly serviceLevelObjectiveDefinition?: PowerpackV2WidgetServiceLevelObjectiveDefinition;
  /**
  * servicemap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#servicemap_definition PowerpackV2#servicemap_definition}
  */
  readonly servicemapDefinition?: PowerpackV2WidgetServicemapDefinition;
  /**
  * slo_list_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#slo_list_definition PowerpackV2#slo_list_definition}
  */
  readonly sloListDefinition?: PowerpackV2WidgetSloListDefinition;
  /**
  * sunburst_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#sunburst_definition PowerpackV2#sunburst_definition}
  */
  readonly sunburstDefinition?: PowerpackV2WidgetSunburstDefinition;
  /**
  * timeseries_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#timeseries_definition PowerpackV2#timeseries_definition}
  */
  readonly timeseriesDefinition?: PowerpackV2WidgetTimeseriesDefinition;
  /**
  * toplist_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#toplist_definition PowerpackV2#toplist_definition}
  */
  readonly toplistDefinition?: PowerpackV2WidgetToplistDefinition;
  /**
  * topology_map_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#topology_map_definition PowerpackV2#topology_map_definition}
  */
  readonly topologyMapDefinition?: PowerpackV2WidgetTopologyMapDefinition;
  /**
  * trace_service_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#trace_service_definition PowerpackV2#trace_service_definition}
  */
  readonly traceServiceDefinition?: PowerpackV2WidgetTraceServiceDefinition;
  /**
  * treemap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#treemap_definition PowerpackV2#treemap_definition}
  */
  readonly treemapDefinition?: PowerpackV2WidgetTreemapDefinition;
  /**
  * widget_layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#widget_layout PowerpackV2#widget_layout}
  */
  readonly widgetLayout?: PowerpackV2WidgetWidgetLayout;
  /**
  * wildcard_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/powerpack_v2#wildcard_definition PowerpackV2#wildcard_definition}
  */
  readonly wildcardDefinition?: PowerpackV2WidgetWildcardDefinition;
}

export function powerpackV2WidgetToTerraform(struct?: PowerpackV2Widget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.numberToTerraform(struct!.id),
    alert_graph_definition: powerpackV2WidgetAlertGraphDefinitionToTerraform(struct!.alertGraphDefinition),
    alert_value_definition: powerpackV2WidgetAlertValueDefinitionToTerraform(struct!.alertValueDefinition),
    bar_chart_definition: powerpackV2WidgetBarChartDefinitionToTerraform(struct!.barChartDefinition),
    change_definition: powerpackV2WidgetChangeDefinitionToTerraform(struct!.changeDefinition),
    check_status_definition: powerpackV2WidgetCheckStatusDefinitionToTerraform(struct!.checkStatusDefinition),
    distribution_definition: powerpackV2WidgetDistributionDefinitionToTerraform(struct!.distributionDefinition),
    event_stream_definition: powerpackV2WidgetEventStreamDefinitionToTerraform(struct!.eventStreamDefinition),
    event_timeline_definition: powerpackV2WidgetEventTimelineDefinitionToTerraform(struct!.eventTimelineDefinition),
    free_text_definition: powerpackV2WidgetFreeTextDefinitionToTerraform(struct!.freeTextDefinition),
    funnel_definition: powerpackV2WidgetFunnelDefinitionToTerraform(struct!.funnelDefinition),
    geomap_definition: powerpackV2WidgetGeomapDefinitionToTerraform(struct!.geomapDefinition),
    group_definition: powerpackV2WidgetGroupDefinitionToTerraform(struct!.groupDefinition),
    heatmap_definition: powerpackV2WidgetHeatmapDefinitionToTerraform(struct!.heatmapDefinition),
    hostmap_definition: powerpackV2WidgetHostmapDefinitionToTerraform(struct!.hostmapDefinition),
    iframe_definition: powerpackV2WidgetIframeDefinitionToTerraform(struct!.iframeDefinition),
    image_definition: powerpackV2WidgetImageDefinitionToTerraform(struct!.imageDefinition),
    list_stream_definition: powerpackV2WidgetListStreamDefinitionToTerraform(struct!.listStreamDefinition),
    log_stream_definition: powerpackV2WidgetLogStreamDefinitionToTerraform(struct!.logStreamDefinition),
    manage_status_definition: powerpackV2WidgetManageStatusDefinitionToTerraform(struct!.manageStatusDefinition),
    note_definition: powerpackV2WidgetNoteDefinitionToTerraform(struct!.noteDefinition),
    point_plot_definition: powerpackV2WidgetPointPlotDefinitionToTerraform(struct!.pointPlotDefinition),
    query_table_definition: powerpackV2WidgetQueryTableDefinitionToTerraform(struct!.queryTableDefinition),
    query_value_definition: powerpackV2WidgetQueryValueDefinitionToTerraform(struct!.queryValueDefinition),
    run_workflow_definition: powerpackV2WidgetRunWorkflowDefinitionToTerraform(struct!.runWorkflowDefinition),
    sankey_definition: powerpackV2WidgetSankeyDefinitionToTerraform(struct!.sankeyDefinition),
    scatterplot_definition: powerpackV2WidgetScatterplotDefinitionToTerraform(struct!.scatterplotDefinition),
    service_level_objective_definition: powerpackV2WidgetServiceLevelObjectiveDefinitionToTerraform(struct!.serviceLevelObjectiveDefinition),
    servicemap_definition: powerpackV2WidgetServicemapDefinitionToTerraform(struct!.servicemapDefinition),
    slo_list_definition: powerpackV2WidgetSloListDefinitionToTerraform(struct!.sloListDefinition),
    sunburst_definition: powerpackV2WidgetSunburstDefinitionToTerraform(struct!.sunburstDefinition),
    timeseries_definition: powerpackV2WidgetTimeseriesDefinitionToTerraform(struct!.timeseriesDefinition),
    toplist_definition: powerpackV2WidgetToplistDefinitionToTerraform(struct!.toplistDefinition),
    topology_map_definition: powerpackV2WidgetTopologyMapDefinitionToTerraform(struct!.topologyMapDefinition),
    trace_service_definition: powerpackV2WidgetTraceServiceDefinitionToTerraform(struct!.traceServiceDefinition),
    treemap_definition: powerpackV2WidgetTreemapDefinitionToTerraform(struct!.treemapDefinition),
    widget_layout: powerpackV2WidgetWidgetLayoutToTerraform(struct!.widgetLayout),
    wildcard_definition: powerpackV2WidgetWildcardDefinitionToTerraform(struct!.wildcardDefinition),
  }
}


export function powerpackV2WidgetToHclTerraform(struct?: PowerpackV2Widget | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetAlertGraphDefinitionToHclTerraform(struct!.alertGraphDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetAlertGraphDefinitionList",
    },
    alert_value_definition: {
      value: powerpackV2WidgetAlertValueDefinitionToHclTerraform(struct!.alertValueDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetAlertValueDefinitionList",
    },
    bar_chart_definition: {
      value: powerpackV2WidgetBarChartDefinitionToHclTerraform(struct!.barChartDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetBarChartDefinitionList",
    },
    change_definition: {
      value: powerpackV2WidgetChangeDefinitionToHclTerraform(struct!.changeDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetChangeDefinitionList",
    },
    check_status_definition: {
      value: powerpackV2WidgetCheckStatusDefinitionToHclTerraform(struct!.checkStatusDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetCheckStatusDefinitionList",
    },
    distribution_definition: {
      value: powerpackV2WidgetDistributionDefinitionToHclTerraform(struct!.distributionDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetDistributionDefinitionList",
    },
    event_stream_definition: {
      value: powerpackV2WidgetEventStreamDefinitionToHclTerraform(struct!.eventStreamDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetEventStreamDefinitionList",
    },
    event_timeline_definition: {
      value: powerpackV2WidgetEventTimelineDefinitionToHclTerraform(struct!.eventTimelineDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetEventTimelineDefinitionList",
    },
    free_text_definition: {
      value: powerpackV2WidgetFreeTextDefinitionToHclTerraform(struct!.freeTextDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetFreeTextDefinitionList",
    },
    funnel_definition: {
      value: powerpackV2WidgetFunnelDefinitionToHclTerraform(struct!.funnelDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetFunnelDefinitionList",
    },
    geomap_definition: {
      value: powerpackV2WidgetGeomapDefinitionToHclTerraform(struct!.geomapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGeomapDefinitionList",
    },
    group_definition: {
      value: powerpackV2WidgetGroupDefinitionToHclTerraform(struct!.groupDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetGroupDefinitionList",
    },
    heatmap_definition: {
      value: powerpackV2WidgetHeatmapDefinitionToHclTerraform(struct!.heatmapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHeatmapDefinitionList",
    },
    hostmap_definition: {
      value: powerpackV2WidgetHostmapDefinitionToHclTerraform(struct!.hostmapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionList",
    },
    iframe_definition: {
      value: powerpackV2WidgetIframeDefinitionToHclTerraform(struct!.iframeDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetIframeDefinitionList",
    },
    image_definition: {
      value: powerpackV2WidgetImageDefinitionToHclTerraform(struct!.imageDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetImageDefinitionList",
    },
    list_stream_definition: {
      value: powerpackV2WidgetListStreamDefinitionToHclTerraform(struct!.listStreamDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetListStreamDefinitionList",
    },
    log_stream_definition: {
      value: powerpackV2WidgetLogStreamDefinitionToHclTerraform(struct!.logStreamDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetLogStreamDefinitionList",
    },
    manage_status_definition: {
      value: powerpackV2WidgetManageStatusDefinitionToHclTerraform(struct!.manageStatusDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetManageStatusDefinitionList",
    },
    note_definition: {
      value: powerpackV2WidgetNoteDefinitionToHclTerraform(struct!.noteDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetNoteDefinitionList",
    },
    point_plot_definition: {
      value: powerpackV2WidgetPointPlotDefinitionToHclTerraform(struct!.pointPlotDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionList",
    },
    query_table_definition: {
      value: powerpackV2WidgetQueryTableDefinitionToHclTerraform(struct!.queryTableDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetQueryTableDefinitionList",
    },
    query_value_definition: {
      value: powerpackV2WidgetQueryValueDefinitionToHclTerraform(struct!.queryValueDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetQueryValueDefinitionList",
    },
    run_workflow_definition: {
      value: powerpackV2WidgetRunWorkflowDefinitionToHclTerraform(struct!.runWorkflowDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetRunWorkflowDefinitionList",
    },
    sankey_definition: {
      value: powerpackV2WidgetSankeyDefinitionToHclTerraform(struct!.sankeyDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetSankeyDefinitionList",
    },
    scatterplot_definition: {
      value: powerpackV2WidgetScatterplotDefinitionToHclTerraform(struct!.scatterplotDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetScatterplotDefinitionList",
    },
    service_level_objective_definition: {
      value: powerpackV2WidgetServiceLevelObjectiveDefinitionToHclTerraform(struct!.serviceLevelObjectiveDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetServiceLevelObjectiveDefinitionList",
    },
    servicemap_definition: {
      value: powerpackV2WidgetServicemapDefinitionToHclTerraform(struct!.servicemapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetServicemapDefinitionList",
    },
    slo_list_definition: {
      value: powerpackV2WidgetSloListDefinitionToHclTerraform(struct!.sloListDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetSloListDefinitionList",
    },
    sunburst_definition: {
      value: powerpackV2WidgetSunburstDefinitionToHclTerraform(struct!.sunburstDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetSunburstDefinitionList",
    },
    timeseries_definition: {
      value: powerpackV2WidgetTimeseriesDefinitionToHclTerraform(struct!.timeseriesDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTimeseriesDefinitionList",
    },
    toplist_definition: {
      value: powerpackV2WidgetToplistDefinitionToHclTerraform(struct!.toplistDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetToplistDefinitionList",
    },
    topology_map_definition: {
      value: powerpackV2WidgetTopologyMapDefinitionToHclTerraform(struct!.topologyMapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTopologyMapDefinitionList",
    },
    trace_service_definition: {
      value: powerpackV2WidgetTraceServiceDefinitionToHclTerraform(struct!.traceServiceDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTraceServiceDefinitionList",
    },
    treemap_definition: {
      value: powerpackV2WidgetTreemapDefinitionToHclTerraform(struct!.treemapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTreemapDefinitionList",
    },
    widget_layout: {
      value: powerpackV2WidgetWidgetLayoutToHclTerraform(struct!.widgetLayout),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWidgetLayoutList",
    },
    wildcard_definition: {
      value: powerpackV2WidgetWildcardDefinitionToHclTerraform(struct!.wildcardDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2Widget | cdktn.IResolvable | undefined {
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
    if (this._queryTableDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTableDefinition = this._queryTableDefinition?.internalValue;
    }
    if (this._queryValueDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryValueDefinition = this._queryValueDefinition?.internalValue;
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

  public set internalValue(value: PowerpackV2Widget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._alertGraphDefinition.internalValue = undefined;
      this._alertValueDefinition.internalValue = undefined;
      this._barChartDefinition.internalValue = undefined;
      this._changeDefinition.internalValue = undefined;
      this._checkStatusDefinition.internalValue = undefined;
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
      this._queryTableDefinition.internalValue = undefined;
      this._queryValueDefinition.internalValue = undefined;
      this._runWorkflowDefinition.internalValue = undefined;
      this._sankeyDefinition.internalValue = undefined;
      this._scatterplotDefinition.internalValue = undefined;
      this._serviceLevelObjectiveDefinition.internalValue = undefined;
      this._servicemapDefinition.internalValue = undefined;
      this._sloListDefinition.internalValue = undefined;
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
      this._queryTableDefinition.internalValue = value.queryTableDefinition;
      this._queryValueDefinition.internalValue = value.queryValueDefinition;
      this._runWorkflowDefinition.internalValue = value.runWorkflowDefinition;
      this._sankeyDefinition.internalValue = value.sankeyDefinition;
      this._scatterplotDefinition.internalValue = value.scatterplotDefinition;
      this._serviceLevelObjectiveDefinition.internalValue = value.serviceLevelObjectiveDefinition;
      this._servicemapDefinition.internalValue = value.servicemapDefinition;
      this._sloListDefinition.internalValue = value.sloListDefinition;
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
  private _alertGraphDefinition = new PowerpackV2WidgetAlertGraphDefinitionOutputReference(this, "alert_graph_definition");
  public get alertGraphDefinition() {
    return this._alertGraphDefinition;
  }
  public putAlertGraphDefinition(value: PowerpackV2WidgetAlertGraphDefinition) {
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
  private _alertValueDefinition = new PowerpackV2WidgetAlertValueDefinitionOutputReference(this, "alert_value_definition");
  public get alertValueDefinition() {
    return this._alertValueDefinition;
  }
  public putAlertValueDefinition(value: PowerpackV2WidgetAlertValueDefinition) {
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
  private _barChartDefinition = new PowerpackV2WidgetBarChartDefinitionOutputReference(this, "bar_chart_definition");
  public get barChartDefinition() {
    return this._barChartDefinition;
  }
  public putBarChartDefinition(value: PowerpackV2WidgetBarChartDefinition) {
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
  private _changeDefinition = new PowerpackV2WidgetChangeDefinitionOutputReference(this, "change_definition");
  public get changeDefinition() {
    return this._changeDefinition;
  }
  public putChangeDefinition(value: PowerpackV2WidgetChangeDefinition) {
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
  private _checkStatusDefinition = new PowerpackV2WidgetCheckStatusDefinitionOutputReference(this, "check_status_definition");
  public get checkStatusDefinition() {
    return this._checkStatusDefinition;
  }
  public putCheckStatusDefinition(value: PowerpackV2WidgetCheckStatusDefinition) {
    this._checkStatusDefinition.internalValue = value;
  }
  public resetCheckStatusDefinition() {
    this._checkStatusDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkStatusDefinitionInput() {
    return this._checkStatusDefinition.internalValue;
  }

  // distribution_definition - computed: false, optional: true, required: false
  private _distributionDefinition = new PowerpackV2WidgetDistributionDefinitionOutputReference(this, "distribution_definition");
  public get distributionDefinition() {
    return this._distributionDefinition;
  }
  public putDistributionDefinition(value: PowerpackV2WidgetDistributionDefinition) {
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
  private _eventStreamDefinition = new PowerpackV2WidgetEventStreamDefinitionOutputReference(this, "event_stream_definition");
  public get eventStreamDefinition() {
    return this._eventStreamDefinition;
  }
  public putEventStreamDefinition(value: PowerpackV2WidgetEventStreamDefinition) {
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
  private _eventTimelineDefinition = new PowerpackV2WidgetEventTimelineDefinitionOutputReference(this, "event_timeline_definition");
  public get eventTimelineDefinition() {
    return this._eventTimelineDefinition;
  }
  public putEventTimelineDefinition(value: PowerpackV2WidgetEventTimelineDefinition) {
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
  private _freeTextDefinition = new PowerpackV2WidgetFreeTextDefinitionOutputReference(this, "free_text_definition");
  public get freeTextDefinition() {
    return this._freeTextDefinition;
  }
  public putFreeTextDefinition(value: PowerpackV2WidgetFreeTextDefinition) {
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
  private _funnelDefinition = new PowerpackV2WidgetFunnelDefinitionOutputReference(this, "funnel_definition");
  public get funnelDefinition() {
    return this._funnelDefinition;
  }
  public putFunnelDefinition(value: PowerpackV2WidgetFunnelDefinition) {
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
  private _geomapDefinition = new PowerpackV2WidgetGeomapDefinitionOutputReference(this, "geomap_definition");
  public get geomapDefinition() {
    return this._geomapDefinition;
  }
  public putGeomapDefinition(value: PowerpackV2WidgetGeomapDefinition) {
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
  private _groupDefinition = new PowerpackV2WidgetGroupDefinitionOutputReference(this, "group_definition");
  public get groupDefinition() {
    return this._groupDefinition;
  }
  public putGroupDefinition(value: PowerpackV2WidgetGroupDefinition) {
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
  private _heatmapDefinition = new PowerpackV2WidgetHeatmapDefinitionOutputReference(this, "heatmap_definition");
  public get heatmapDefinition() {
    return this._heatmapDefinition;
  }
  public putHeatmapDefinition(value: PowerpackV2WidgetHeatmapDefinition) {
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
  private _hostmapDefinition = new PowerpackV2WidgetHostmapDefinitionOutputReference(this, "hostmap_definition");
  public get hostmapDefinition() {
    return this._hostmapDefinition;
  }
  public putHostmapDefinition(value: PowerpackV2WidgetHostmapDefinition) {
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
  private _iframeDefinition = new PowerpackV2WidgetIframeDefinitionOutputReference(this, "iframe_definition");
  public get iframeDefinition() {
    return this._iframeDefinition;
  }
  public putIframeDefinition(value: PowerpackV2WidgetIframeDefinition) {
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
  private _imageDefinition = new PowerpackV2WidgetImageDefinitionOutputReference(this, "image_definition");
  public get imageDefinition() {
    return this._imageDefinition;
  }
  public putImageDefinition(value: PowerpackV2WidgetImageDefinition) {
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
  private _listStreamDefinition = new PowerpackV2WidgetListStreamDefinitionOutputReference(this, "list_stream_definition");
  public get listStreamDefinition() {
    return this._listStreamDefinition;
  }
  public putListStreamDefinition(value: PowerpackV2WidgetListStreamDefinition) {
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
  private _logStreamDefinition = new PowerpackV2WidgetLogStreamDefinitionOutputReference(this, "log_stream_definition");
  public get logStreamDefinition() {
    return this._logStreamDefinition;
  }
  public putLogStreamDefinition(value: PowerpackV2WidgetLogStreamDefinition) {
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
  private _manageStatusDefinition = new PowerpackV2WidgetManageStatusDefinitionOutputReference(this, "manage_status_definition");
  public get manageStatusDefinition() {
    return this._manageStatusDefinition;
  }
  public putManageStatusDefinition(value: PowerpackV2WidgetManageStatusDefinition) {
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
  private _noteDefinition = new PowerpackV2WidgetNoteDefinitionOutputReference(this, "note_definition");
  public get noteDefinition() {
    return this._noteDefinition;
  }
  public putNoteDefinition(value: PowerpackV2WidgetNoteDefinition) {
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
  private _pointPlotDefinition = new PowerpackV2WidgetPointPlotDefinitionOutputReference(this, "point_plot_definition");
  public get pointPlotDefinition() {
    return this._pointPlotDefinition;
  }
  public putPointPlotDefinition(value: PowerpackV2WidgetPointPlotDefinition) {
    this._pointPlotDefinition.internalValue = value;
  }
  public resetPointPlotDefinition() {
    this._pointPlotDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointPlotDefinitionInput() {
    return this._pointPlotDefinition.internalValue;
  }

  // query_table_definition - computed: false, optional: true, required: false
  private _queryTableDefinition = new PowerpackV2WidgetQueryTableDefinitionOutputReference(this, "query_table_definition");
  public get queryTableDefinition() {
    return this._queryTableDefinition;
  }
  public putQueryTableDefinition(value: PowerpackV2WidgetQueryTableDefinition) {
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
  private _queryValueDefinition = new PowerpackV2WidgetQueryValueDefinitionOutputReference(this, "query_value_definition");
  public get queryValueDefinition() {
    return this._queryValueDefinition;
  }
  public putQueryValueDefinition(value: PowerpackV2WidgetQueryValueDefinition) {
    this._queryValueDefinition.internalValue = value;
  }
  public resetQueryValueDefinition() {
    this._queryValueDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryValueDefinitionInput() {
    return this._queryValueDefinition.internalValue;
  }

  // run_workflow_definition - computed: false, optional: true, required: false
  private _runWorkflowDefinition = new PowerpackV2WidgetRunWorkflowDefinitionOutputReference(this, "run_workflow_definition");
  public get runWorkflowDefinition() {
    return this._runWorkflowDefinition;
  }
  public putRunWorkflowDefinition(value: PowerpackV2WidgetRunWorkflowDefinition) {
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
  private _sankeyDefinition = new PowerpackV2WidgetSankeyDefinitionOutputReference(this, "sankey_definition");
  public get sankeyDefinition() {
    return this._sankeyDefinition;
  }
  public putSankeyDefinition(value: PowerpackV2WidgetSankeyDefinition) {
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
  private _scatterplotDefinition = new PowerpackV2WidgetScatterplotDefinitionOutputReference(this, "scatterplot_definition");
  public get scatterplotDefinition() {
    return this._scatterplotDefinition;
  }
  public putScatterplotDefinition(value: PowerpackV2WidgetScatterplotDefinition) {
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
  private _serviceLevelObjectiveDefinition = new PowerpackV2WidgetServiceLevelObjectiveDefinitionOutputReference(this, "service_level_objective_definition");
  public get serviceLevelObjectiveDefinition() {
    return this._serviceLevelObjectiveDefinition;
  }
  public putServiceLevelObjectiveDefinition(value: PowerpackV2WidgetServiceLevelObjectiveDefinition) {
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
  private _servicemapDefinition = new PowerpackV2WidgetServicemapDefinitionOutputReference(this, "servicemap_definition");
  public get servicemapDefinition() {
    return this._servicemapDefinition;
  }
  public putServicemapDefinition(value: PowerpackV2WidgetServicemapDefinition) {
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
  private _sloListDefinition = new PowerpackV2WidgetSloListDefinitionOutputReference(this, "slo_list_definition");
  public get sloListDefinition() {
    return this._sloListDefinition;
  }
  public putSloListDefinition(value: PowerpackV2WidgetSloListDefinition) {
    this._sloListDefinition.internalValue = value;
  }
  public resetSloListDefinition() {
    this._sloListDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloListDefinitionInput() {
    return this._sloListDefinition.internalValue;
  }

  // sunburst_definition - computed: false, optional: true, required: false
  private _sunburstDefinition = new PowerpackV2WidgetSunburstDefinitionOutputReference(this, "sunburst_definition");
  public get sunburstDefinition() {
    return this._sunburstDefinition;
  }
  public putSunburstDefinition(value: PowerpackV2WidgetSunburstDefinition) {
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
  private _timeseriesDefinition = new PowerpackV2WidgetTimeseriesDefinitionOutputReference(this, "timeseries_definition");
  public get timeseriesDefinition() {
    return this._timeseriesDefinition;
  }
  public putTimeseriesDefinition(value: PowerpackV2WidgetTimeseriesDefinition) {
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
  private _toplistDefinition = new PowerpackV2WidgetToplistDefinitionOutputReference(this, "toplist_definition");
  public get toplistDefinition() {
    return this._toplistDefinition;
  }
  public putToplistDefinition(value: PowerpackV2WidgetToplistDefinition) {
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
  private _topologyMapDefinition = new PowerpackV2WidgetTopologyMapDefinitionOutputReference(this, "topology_map_definition");
  public get topologyMapDefinition() {
    return this._topologyMapDefinition;
  }
  public putTopologyMapDefinition(value: PowerpackV2WidgetTopologyMapDefinition) {
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
  private _traceServiceDefinition = new PowerpackV2WidgetTraceServiceDefinitionOutputReference(this, "trace_service_definition");
  public get traceServiceDefinition() {
    return this._traceServiceDefinition;
  }
  public putTraceServiceDefinition(value: PowerpackV2WidgetTraceServiceDefinition) {
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
  private _treemapDefinition = new PowerpackV2WidgetTreemapDefinitionOutputReference(this, "treemap_definition");
  public get treemapDefinition() {
    return this._treemapDefinition;
  }
  public putTreemapDefinition(value: PowerpackV2WidgetTreemapDefinition) {
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
  private _widgetLayout = new PowerpackV2WidgetWidgetLayoutOutputReference(this, "widget_layout");
  public get widgetLayout() {
    return this._widgetLayout;
  }
  public putWidgetLayout(value: PowerpackV2WidgetWidgetLayout) {
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
  private _wildcardDefinition = new PowerpackV2WidgetWildcardDefinitionOutputReference(this, "wildcard_definition");
  public get wildcardDefinition() {
    return this._wildcardDefinition;
  }
  public putWildcardDefinition(value: PowerpackV2WidgetWildcardDefinition) {
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

export class PowerpackV2WidgetList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2Widget[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetOutputReference {
    return new PowerpackV2WidgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
