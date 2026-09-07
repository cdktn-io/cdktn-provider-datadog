/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryCompute,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryComputeToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryComputeToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryComputeOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryGroupBy,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryGroupByToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryGroupByToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryGroupByList,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmDependencyStatsQuery,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmDependencyStatsQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmDependencyStatsQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmDependencyStatsQueryOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmMetricsQuery,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmMetricsQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmMetricsQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmMetricsQueryOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmResourceStatsQuery,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmResourceStatsQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmResourceStatsQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmResourceStatsQueryOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryCloudCostQuery,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryCloudCostQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryCloudCostQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryCloudCostQueryOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryEventQuery,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryEventQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryEventQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryEventQueryOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryMetricQuery,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryMetricQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryMetricQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryMetricQueryOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProcessQuery,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryProcessQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryProcessQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProcessQueryOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProductAnalyticsExtendedQuery,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryProductAnalyticsExtendedQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeQueryProductAnalyticsExtendedQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProductAnalyticsExtendedQueryOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeApmQuery,
powerpackV2WidgetHostmapDefinitionRequestSizeApmQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeApmQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeApmQueryOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeFormula,
powerpackV2WidgetHostmapDefinitionRequestSizeFormulaToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeFormulaToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeFormulaList,
PowerpackV2WidgetHostmapDefinitionRequestSizeLogQuery,
powerpackV2WidgetHostmapDefinitionRequestSizeLogQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeLogQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeLogQueryOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestSizeProcessQuery,
powerpackV2WidgetHostmapDefinitionRequestSizeProcessQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestSizeProcessQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestSizeProcessQueryOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestFill,
powerpackV2WidgetHostmapDefinitionRequestFillToTerraform,
powerpackV2WidgetHostmapDefinitionRequestFillToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestFillOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestGroupBy,
powerpackV2WidgetHostmapDefinitionRequestGroupByToTerraform,
powerpackV2WidgetHostmapDefinitionRequestGroupByToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestGroupByList,
PowerpackV2WidgetHostmapDefinitionRequestProjection,
powerpackV2WidgetHostmapDefinitionRequestProjectionToTerraform,
powerpackV2WidgetHostmapDefinitionRequestProjectionToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestProjectionOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestQuery,
powerpackV2WidgetHostmapDefinitionRequestQueryToTerraform,
powerpackV2WidgetHostmapDefinitionRequestQueryToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestQueryOutputReference } from './structs9600';
import { PowerpackV2WidgetHostmapDefinitionRequestChild,
powerpackV2WidgetHostmapDefinitionRequestChildToTerraform,
powerpackV2WidgetHostmapDefinitionRequestChildToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestChildOutputReference,
PowerpackV2WidgetHostmapDefinitionRequestConditionalFormats,
powerpackV2WidgetHostmapDefinitionRequestConditionalFormatsToTerraform,
powerpackV2WidgetHostmapDefinitionRequestConditionalFormatsToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestConditionalFormatsList,
PowerpackV2WidgetHostmapDefinitionRequestEnrichment,
powerpackV2WidgetHostmapDefinitionRequestEnrichmentToTerraform,
powerpackV2WidgetHostmapDefinitionRequestEnrichmentToHclTerraform,
PowerpackV2WidgetHostmapDefinitionRequestEnrichmentList } from './structs9200';
import { PowerpackV2WidgetHostmapDefinitionCustomLink,
powerpackV2WidgetHostmapDefinitionCustomLinkToTerraform,
powerpackV2WidgetHostmapDefinitionCustomLinkToHclTerraform,
PowerpackV2WidgetHostmapDefinitionCustomLinkList } from './structs8800';
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuery {
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
  readonly search: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuery): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuery | undefined) {
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
  private _search = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeInterval {
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
  readonly value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeInterval): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeInterval | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeInterval | undefined) {
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
  private _value = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteria {
  /**
  * base_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#base_query PowerpackV2#base_query}
  */
  readonly baseQuery: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuery;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time_interval PowerpackV2#time_interval}
  */
  readonly timeInterval: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeInterval;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQueryToTerraform(struct!.baseQuery),
    time_interval: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQueryToHclTerraform(struct!.baseQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQueryList",
    },
    time_interval: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteria | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteria | undefined) {
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
  private _baseQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQueryOutputReference(this, "base_query");
  public get baseQuery() {
    return this._baseQuery;
  }
  public putBaseQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaBaseQuery) {
    this._baseQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueryInput() {
    return this._baseQuery.internalValue;
  }

  // time_interval - computed: false, optional: false, required: true
  private _timeInterval = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccount {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegment {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUser {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFilters {
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
  readonly account?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#segment PowerpackV2#segment}
  */
  readonly segment?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#user PowerpackV2#user}
  */
  readonly user?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFilters): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFilters | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFilters | undefined) {
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
  private _account = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFilters {
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
  readonly audienceFilters?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFilters;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFilters): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFilters | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFilters | undefined) {
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
  private _audienceFilters = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersAudienceFilters) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch {
  /**
  * Product Analytics event search query used to filter views or actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuery {
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
  readonly search: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    search: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuery): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuery | undefined) {
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
  private _search = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeInterval {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeInterval): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeInterval | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteria {
  /**
  * base_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#base_query PowerpackV2#base_query}
  */
  readonly baseQuery: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuery;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time_interval PowerpackV2#time_interval}
  */
  readonly timeInterval?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeInterval;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQueryToTerraform(struct!.baseQuery),
    time_interval: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeIntervalToTerraform(struct!.timeInterval),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQueryToHclTerraform(struct!.baseQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQueryList",
    },
    time_interval: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeIntervalToHclTerraform(struct!.timeInterval),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteria | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteria | undefined) {
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
  private _baseQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQueryOutputReference(this, "base_query");
  public get baseQuery() {
    return this._baseQuery;
  }
  public putBaseQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaBaseQuery) {
    this._baseQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueryInput() {
    return this._baseQuery.internalValue;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaTimeInterval) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearch {
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
  readonly cohortCriteria: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteria;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#filters PowerpackV2#filters}
  */
  readonly filters?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFilters;
  /**
  * return_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#return_criteria PowerpackV2#return_criteria}
  */
  readonly returnCriteria?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteria;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retention_entity: cdktn.stringToTerraform(struct!.retentionEntity),
    return_condition: cdktn.stringToTerraform(struct!.returnCondition),
    cohort_criteria: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaToTerraform(struct!.cohortCriteria),
    filters: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersToTerraform(struct!.filters),
    return_criteria: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaToTerraform(struct!.returnCriteria),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearch): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaToHclTerraform(struct!.cohortCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaList",
    },
    filters: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersList",
    },
    return_criteria: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaToHclTerraform(struct!.returnCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearch | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearch | undefined) {
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
  private _cohortCriteria = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteriaOutputReference(this, "cohort_criteria");
  public get cohortCriteria() {
    return this._cohortCriteria;
  }
  public putCohortCriteria(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchCohortCriteria) {
    this._cohortCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortCriteriaInput() {
    return this._cohortCriteria.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchFilters) {
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
  private _returnCriteria = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteriaOutputReference(this, "return_criteria");
  public get returnCriteria() {
    return this._returnCriteria;
  }
  public putReturnCriteria(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchReturnCriteria) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuery {
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
  readonly compute: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearch;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    compute: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryGroupByToTerraform, true)(struct!.groupBy),
    search: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuery): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryGroupByList",
    },
    search: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuery | undefined) {
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
  private _compute = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQuery {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQuery): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQuery): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQuery | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTarget {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTargetToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTargetOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTarget): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTargetToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTargetOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTarget): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTarget | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTarget | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryCompute {
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
  readonly target?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTarget;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    interval: cdktn.numberToTerraform(struct!.interval),
    metric: cdktn.stringToTerraform(struct!.metric),
    target: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTargetToTerraform(struct!.target),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryCompute): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryCompute | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryCompute | undefined) {
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
  private _target = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeTarget) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySort {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySortToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySortOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySort): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySortToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySortOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySort): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySort | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTarget {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTargetToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTargetOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTarget): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTargetToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTargetOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTarget): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTarget | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTarget | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBy {
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
  readonly sort?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySort;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#target PowerpackV2#target}
  */
  readonly target?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTarget;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    sort: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySortToTerraform(struct!.sort),
    target: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTargetToTerraform(struct!.target),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySortList",
    },
    target: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBySort) {
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
  private _target = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByTarget) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUser {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFilters {
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
  readonly account?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#segment PowerpackV2#segment}
  */
  readonly segment?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#user PowerpackV2#user}
  */
  readonly user?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFilters): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFilters | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFilters | undefined) {
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
  private _account = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTarget {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTargetToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTarget): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTargetToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTarget): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTarget | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTarget | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilter {
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
  readonly target?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTarget;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
    target: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTargetToTerraform(struct!.target),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined) {
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
  private _target = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterTarget) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFilters {
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
  readonly audienceFilters?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFilters;
  /**
  * graph_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#graph_filter PowerpackV2#graph_filter}
  */
  readonly graphFilter?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
    graph_filter: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterToTerraform, true)(struct!.graphFilter),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFilters): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersList",
    },
    graph_filter: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterToHclTerraform, true)(struct!.graphFilter),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFilters | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFilters | undefined) {
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
  private _audienceFilters = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersAudienceFilters) {
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
  private _graphFilter = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilterList(this, "graph_filter", false);
  public get graphFilter() {
    return this._graphFilter;
  }
  public putGraphFilter(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersGraphFilter[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeys {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeysToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeysOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary: cdktn.stringToTerraform(struct!.primary),
    secondary: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.secondary),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeysToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeysOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeys): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeysOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeys | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeys | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearch {
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
  readonly filters?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFilters;
  /**
  * join_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#join_keys PowerpackV2#join_keys}
  */
  readonly joinKeys?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeys;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    node_objects: cdktn.stringToTerraform(struct!.nodeObjects),
    step_aliases: cdktn.stringToTerraform(struct!.stepAliases),
    filters: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersToTerraform(struct!.filters),
    join_keys: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeysToTerraform(struct!.joinKeys),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearch): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersList",
    },
    join_keys: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeysToHclTerraform(struct!.joinKeys),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearch | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearch | undefined) {
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
  private _filters = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchFilters) {
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
  private _joinKeys = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeysOutputReference(this, "join_keys");
  public get joinKeys() {
    return this._joinKeys;
  }
  public putJoinKeys(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchJoinKeys) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuery {
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
  readonly compute: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearch;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    compute: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByToTerraform, true)(struct!.groupBy),
    search: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuery): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByList",
    },
    search: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuery | undefined) {
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
  private _compute = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeQuery {
  /**
  * apm_dependency_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#apm_dependency_stats_query PowerpackV2#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmDependencyStatsQuery;
  /**
  * apm_metrics_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#apm_metrics_query PowerpackV2#apm_metrics_query}
  */
  readonly apmMetricsQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmMetricsQuery;
  /**
  * apm_resource_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#apm_resource_stats_query PowerpackV2#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmResourceStatsQuery;
  /**
  * cloud_cost_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cloud_cost_query PowerpackV2#cloud_cost_query}
  */
  readonly cloudCostQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryCloudCostQuery;
  /**
  * event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#event_query PowerpackV2#event_query}
  */
  readonly eventQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryEventQuery;
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric_query PowerpackV2#metric_query}
  */
  readonly metricQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryMetricQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#process_query PowerpackV2#process_query}
  */
  readonly processQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProcessQuery;
  /**
  * product_analytics_extended_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#product_analytics_extended_query PowerpackV2#product_analytics_extended_query}
  */
  readonly productAnalyticsExtendedQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProductAnalyticsExtendedQuery;
  /**
  * retention_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#retention_query PowerpackV2#retention_query}
  */
  readonly retentionQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuery;
  /**
  * slo_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#slo_query PowerpackV2#slo_query}
  */
  readonly sloQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQuery;
  /**
  * user_journey_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#user_journey_query PowerpackV2#user_journey_query}
  */
  readonly userJourneyQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuery;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    apm_dependency_stats_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_metrics_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmMetricsQueryToTerraform(struct!.apmMetricsQuery),
    apm_resource_stats_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    cloud_cost_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryCloudCostQueryToTerraform(struct!.cloudCostQuery),
    event_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryProcessQueryToTerraform(struct!.processQuery),
    product_analytics_extended_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryProductAnalyticsExtendedQueryToTerraform(struct!.productAnalyticsExtendedQuery),
    retention_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryToTerraform(struct!.retentionQuery),
    slo_query: powerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQueryToTerraform(struct!.sloQuery),
    user_journey_query: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryToTerraform(struct!.userJourneyQuery),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    apm_dependency_stats_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmDependencyStatsQueryToHclTerraform(struct!.apmDependencyStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmDependencyStatsQueryList",
    },
    apm_metrics_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmMetricsQueryToHclTerraform(struct!.apmMetricsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmMetricsQueryList",
    },
    apm_resource_stats_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryApmResourceStatsQueryToHclTerraform(struct!.apmResourceStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmResourceStatsQueryList",
    },
    cloud_cost_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryCloudCostQueryToHclTerraform(struct!.cloudCostQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryCloudCostQueryList",
    },
    event_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryEventQueryToHclTerraform(struct!.eventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryEventQueryList",
    },
    metric_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryMetricQueryToHclTerraform(struct!.metricQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryMetricQueryList",
    },
    process_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProcessQueryList",
    },
    product_analytics_extended_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryProductAnalyticsExtendedQueryToHclTerraform(struct!.productAnalyticsExtendedQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProductAnalyticsExtendedQueryList",
    },
    retention_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryToHclTerraform(struct!.retentionQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryList",
    },
    slo_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQueryToHclTerraform(struct!.sloQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQueryList",
    },
    user_journey_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryToHclTerraform(struct!.userJourneyQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeQuery | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQuery | cdktn.IResolvable | undefined) {
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
  private _apmDependencyStatsQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmDependencyStatsQuery) {
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
  private _apmMetricsQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmMetricsQueryOutputReference(this, "apm_metrics_query");
  public get apmMetricsQuery() {
    return this._apmMetricsQuery;
  }
  public putApmMetricsQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmMetricsQuery) {
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
  private _apmResourceStatsQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryApmResourceStatsQuery) {
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
  private _cloudCostQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryCloudCostQueryOutputReference(this, "cloud_cost_query");
  public get cloudCostQuery() {
    return this._cloudCostQuery;
  }
  public putCloudCostQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryCloudCostQuery) {
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
  private _eventQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryEventQuery) {
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
  private _metricQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryMetricQuery) {
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
  private _processQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProcessQuery) {
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
  private _productAnalyticsExtendedQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProductAnalyticsExtendedQueryOutputReference(this, "product_analytics_extended_query");
  public get productAnalyticsExtendedQuery() {
    return this._productAnalyticsExtendedQuery;
  }
  public putProductAnalyticsExtendedQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryProductAnalyticsExtendedQuery) {
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
  private _retentionQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQueryOutputReference(this, "retention_query");
  public get retentionQuery() {
    return this._retentionQuery;
  }
  public putRetentionQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryRetentionQuery) {
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
  private _sloQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQueryOutputReference(this, "slo_query");
  public get sloQuery() {
    return this._sloQuery;
  }
  public putSloQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQuerySloQuery) {
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
  private _userJourneyQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQueryOutputReference(this, "user_journey_query");
  public get userJourneyQuery() {
    return this._userJourneyQuery;
  }
  public putUserJourneyQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQueryUserJourneyQuery) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeQueryList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeQuery[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeQueryOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQuery {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQuery): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQuery): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQuery | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBy {
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
  readonly sortQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupByToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupByOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiCompute {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeRumQuery {
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
  readonly computeQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeRumQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeRumQuery): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeRumQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQuery | undefined) {
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
  private _computeQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryComputeQuery) {
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
  private _groupBy = new PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy {
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
  readonly sortQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupByToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupByOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute {
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

export function powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQuery {
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
  readonly computeQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQuery): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQuery | undefined) {
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
  private _computeQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery) {
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
  private _groupBy = new PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestSize {
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
  readonly apmQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeApmQuery;
  /**
  * formula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#formula PowerpackV2#formula}
  */
  readonly formula?: PowerpackV2WidgetHostmapDefinitionRequestSizeFormula[] | cdktn.IResolvable;
  /**
  * log_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#log_query PowerpackV2#log_query}
  */
  readonly logQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeLogQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#process_query PowerpackV2#process_query}
  */
  readonly processQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeProcessQuery;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: PowerpackV2WidgetHostmapDefinitionRequestSizeQuery[] | cdktn.IResolvable;
  /**
  * rum_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#rum_query PowerpackV2#rum_query}
  */
  readonly rumQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQuery;
  /**
  * security_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#security_query PowerpackV2#security_query}
  */
  readonly securityQuery?: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQuery;
}

export function powerpackV2WidgetHostmapDefinitionRequestSizeToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    q: cdktn.stringToTerraform(struct!.q),
    apm_query: powerpackV2WidgetHostmapDefinitionRequestSizeApmQueryToTerraform(struct!.apmQuery),
    formula: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeFormulaToTerraform, true)(struct!.formula),
    log_query: powerpackV2WidgetHostmapDefinitionRequestSizeLogQueryToTerraform(struct!.logQuery),
    process_query: powerpackV2WidgetHostmapDefinitionRequestSizeProcessQueryToTerraform(struct!.processQuery),
    query: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestSizeQueryToTerraform, true)(struct!.query),
    rum_query: powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryToTerraform(struct!.rumQuery),
    security_query: powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryToTerraform(struct!.securityQuery),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestSizeToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestSizeOutputReference | PowerpackV2WidgetHostmapDefinitionRequestSize): any {
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
      value: powerpackV2WidgetHostmapDefinitionRequestSizeApmQueryToHclTerraform(struct!.apmQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeApmQueryList",
    },
    formula: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeFormulaToHclTerraform, true)(struct!.formula),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeFormulaList",
    },
    log_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeLogQueryToHclTerraform(struct!.logQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeLogQueryList",
    },
    process_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeProcessQueryList",
    },
    query: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestSizeQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeQueryList",
    },
    rum_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeRumQueryToHclTerraform(struct!.rumQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryList",
    },
    security_query: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryToHclTerraform(struct!.securityQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestSize | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestSize | undefined) {
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
  private _apmQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeApmQuery) {
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
  private _formula = new PowerpackV2WidgetHostmapDefinitionRequestSizeFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: PowerpackV2WidgetHostmapDefinitionRequestSizeFormula[] | cdktn.IResolvable) {
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
  private _logQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeLogQuery) {
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
  private _processQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeProcessQuery) {
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
  private _query = new PowerpackV2WidgetHostmapDefinitionRequestSizeQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeQuery[] | cdktn.IResolvable) {
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
  private _rumQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeRumQuery) {
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
  private _securityQuery = new PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: PowerpackV2WidgetHostmapDefinitionRequestSizeSecurityQuery) {
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
export interface PowerpackV2WidgetHostmapDefinitionRequestStyle {
  /**
  * Maximum value for the fill color scale. Omit to use automatic scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fill_max PowerpackV2#fill_max}
  */
  readonly fillMax?: number;
  /**
  * Minimum value for the fill color scale. Omit to use automatic scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fill_min PowerpackV2#fill_min}
  */
  readonly fillMin?: number;
  /**
  * Color palette name or alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette?: string;
  /**
  * Whether to invert the color palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#palette_flip PowerpackV2#palette_flip}
  */
  readonly paletteFlip?: boolean | cdktn.IResolvable;
}

export function powerpackV2WidgetHostmapDefinitionRequestStyleToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestStyleOutputReference | PowerpackV2WidgetHostmapDefinitionRequestStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fill_max: cdktn.numberToTerraform(struct!.fillMax),
    fill_min: cdktn.numberToTerraform(struct!.fillMin),
    palette: cdktn.stringToTerraform(struct!.palette),
    palette_flip: cdktn.booleanToTerraform(struct!.paletteFlip),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestStyleToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestStyleOutputReference | PowerpackV2WidgetHostmapDefinitionRequestStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fill_max: {
      value: cdktn.numberToHclTerraform(struct!.fillMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fill_min: {
      value: cdktn.numberToHclTerraform(struct!.fillMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    palette: {
      value: cdktn.stringToHclTerraform(struct!.palette),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    palette_flip: {
      value: cdktn.booleanToHclTerraform(struct!.paletteFlip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequestStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fillMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillMax = this._fillMax;
    }
    if (this._fillMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillMin = this._fillMin;
    }
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    if (this._paletteFlip !== undefined) {
      hasAnyValues = true;
      internalValueResult.paletteFlip = this._paletteFlip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequestStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fillMax = undefined;
      this._fillMin = undefined;
      this._palette = undefined;
      this._paletteFlip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fillMax = value.fillMax;
      this._fillMin = value.fillMin;
      this._palette = value.palette;
      this._paletteFlip = value.paletteFlip;
    }
  }

  // fill_max - computed: false, optional: true, required: false
  private _fillMax?: number; 
  public get fillMax() {
    return this.getNumberAttribute('fill_max');
  }
  public set fillMax(value: number) {
    this._fillMax = value;
  }
  public resetFillMax() {
    this._fillMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillMaxInput() {
    return this._fillMax;
  }

  // fill_min - computed: false, optional: true, required: false
  private _fillMin?: number; 
  public get fillMin() {
    return this.getNumberAttribute('fill_min');
  }
  public set fillMin(value: number) {
    this._fillMin = value;
  }
  public resetFillMin() {
    this._fillMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillMinInput() {
    return this._fillMin;
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

  // palette_flip - computed: false, optional: true, required: false
  private _paletteFlip?: boolean | cdktn.IResolvable; 
  public get paletteFlip() {
    return this.getBooleanAttribute('palette_flip');
  }
  public set paletteFlip(value: boolean | cdktn.IResolvable) {
    this._paletteFlip = value;
  }
  public resetPaletteFlip() {
    this._paletteFlip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteFlipInput() {
    return this._paletteFlip;
  }
}
export interface PowerpackV2WidgetHostmapDefinitionRequest {
  /**
  * Filter string for the entity set in tag format, such as `env:prod`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#filter PowerpackV2#filter}
  */
  readonly filter?: string;
  /**
  * Maximum number of rows to return from the DDSQL data-projection request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * Whether to hide entities that have no group assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#no_group_hosts PowerpackV2#no_group_hosts}
  */
  readonly noGroupHosts?: boolean | cdktn.IResolvable;
  /**
  * Whether to hide entities that have no enrichment data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#no_metric_hosts PowerpackV2#no_metric_hosts}
  */
  readonly noMetricHosts?: boolean | cdktn.IResolvable;
  /**
  * Infrastructure entity type to visualize. Valid values are `host`, `container`, `pod`, `cluster`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#node_type PowerpackV2#node_type}
  */
  readonly nodeType?: string;
  /**
  * Identifies an infrastructure-backed or DDSQL data-projection host map request. Valid values are `infrastructure_hostmap`, `data_projection`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#request_type PowerpackV2#request_type}
  */
  readonly requestType?: string;
  /**
  * child block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#child PowerpackV2#child}
  */
  readonly child?: PowerpackV2WidgetHostmapDefinitionRequestChild;
  /**
  * conditional_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#conditional_formats PowerpackV2#conditional_formats}
  */
  readonly conditionalFormats?: PowerpackV2WidgetHostmapDefinitionRequestConditionalFormats[] | cdktn.IResolvable;
  /**
  * enrichment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#enrichment PowerpackV2#enrichment}
  */
  readonly enrichment?: PowerpackV2WidgetHostmapDefinitionRequestEnrichment[] | cdktn.IResolvable;
  /**
  * fill block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fill PowerpackV2#fill}
  */
  readonly fill?: PowerpackV2WidgetHostmapDefinitionRequestFill;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetHostmapDefinitionRequestGroupBy[] | cdktn.IResolvable;
  /**
  * projection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#projection PowerpackV2#projection}
  */
  readonly projection?: PowerpackV2WidgetHostmapDefinitionRequestProjection;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: PowerpackV2WidgetHostmapDefinitionRequestQuery;
  /**
  * size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#size PowerpackV2#size}
  */
  readonly size?: PowerpackV2WidgetHostmapDefinitionRequestSize;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#style PowerpackV2#style}
  */
  readonly style?: PowerpackV2WidgetHostmapDefinitionRequestStyle;
}

export function powerpackV2WidgetHostmapDefinitionRequestToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestOutputReference | PowerpackV2WidgetHostmapDefinitionRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.stringToTerraform(struct!.filter),
    limit: cdktn.numberToTerraform(struct!.limit),
    no_group_hosts: cdktn.booleanToTerraform(struct!.noGroupHosts),
    no_metric_hosts: cdktn.booleanToTerraform(struct!.noMetricHosts),
    node_type: cdktn.stringToTerraform(struct!.nodeType),
    request_type: cdktn.stringToTerraform(struct!.requestType),
    child: powerpackV2WidgetHostmapDefinitionRequestChildToTerraform(struct!.child),
    conditional_formats: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestConditionalFormatsToTerraform, true)(struct!.conditionalFormats),
    enrichment: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestEnrichmentToTerraform, true)(struct!.enrichment),
    fill: powerpackV2WidgetHostmapDefinitionRequestFillToTerraform(struct!.fill),
    group_by: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionRequestGroupByToTerraform, true)(struct!.groupBy),
    projection: powerpackV2WidgetHostmapDefinitionRequestProjectionToTerraform(struct!.projection),
    query: powerpackV2WidgetHostmapDefinitionRequestQueryToTerraform(struct!.query),
    size: powerpackV2WidgetHostmapDefinitionRequestSizeToTerraform(struct!.size),
    style: powerpackV2WidgetHostmapDefinitionRequestStyleToTerraform(struct!.style),
  }
}


export function powerpackV2WidgetHostmapDefinitionRequestToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionRequestOutputReference | PowerpackV2WidgetHostmapDefinitionRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
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
    no_group_hosts: {
      value: cdktn.booleanToHclTerraform(struct!.noGroupHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_metric_hosts: {
      value: cdktn.booleanToHclTerraform(struct!.noMetricHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_type: {
      value: cdktn.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_type: {
      value: cdktn.stringToHclTerraform(struct!.requestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    child: {
      value: powerpackV2WidgetHostmapDefinitionRequestChildToHclTerraform(struct!.child),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestChildList",
    },
    conditional_formats: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestConditionalFormatsToHclTerraform, true)(struct!.conditionalFormats),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestConditionalFormatsList",
    },
    enrichment: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestEnrichmentToHclTerraform, true)(struct!.enrichment),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestEnrichmentList",
    },
    fill: {
      value: powerpackV2WidgetHostmapDefinitionRequestFillToHclTerraform(struct!.fill),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestFillList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionRequestGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestGroupByList",
    },
    projection: {
      value: powerpackV2WidgetHostmapDefinitionRequestProjectionToHclTerraform(struct!.projection),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestProjectionList",
    },
    query: {
      value: powerpackV2WidgetHostmapDefinitionRequestQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestQueryList",
    },
    size: {
      value: powerpackV2WidgetHostmapDefinitionRequestSizeToHclTerraform(struct!.size),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestSizeList",
    },
    style: {
      value: powerpackV2WidgetHostmapDefinitionRequestStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._noGroupHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGroupHosts = this._noGroupHosts;
    }
    if (this._noMetricHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMetricHosts = this._noMetricHosts;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._requestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestType = this._requestType;
    }
    if (this._child?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.child = this._child?.internalValue;
    }
    if (this._conditionalFormats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalFormats = this._conditionalFormats?.internalValue;
    }
    if (this._enrichment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichment = this._enrichment?.internalValue;
    }
    if (this._fill?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fill = this._fill?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._projection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projection = this._projection?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._size?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size?.internalValue;
    }
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._limit = undefined;
      this._noGroupHosts = undefined;
      this._noMetricHosts = undefined;
      this._nodeType = undefined;
      this._requestType = undefined;
      this._child.internalValue = undefined;
      this._conditionalFormats.internalValue = undefined;
      this._enrichment.internalValue = undefined;
      this._fill.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._projection.internalValue = undefined;
      this._query.internalValue = undefined;
      this._size.internalValue = undefined;
      this._style.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._limit = value.limit;
      this._noGroupHosts = value.noGroupHosts;
      this._noMetricHosts = value.noMetricHosts;
      this._nodeType = value.nodeType;
      this._requestType = value.requestType;
      this._child.internalValue = value.child;
      this._conditionalFormats.internalValue = value.conditionalFormats;
      this._enrichment.internalValue = value.enrichment;
      this._fill.internalValue = value.fill;
      this._groupBy.internalValue = value.groupBy;
      this._projection.internalValue = value.projection;
      this._query.internalValue = value.query;
      this._size.internalValue = value.size;
      this._style.internalValue = value.style;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // no_group_hosts - computed: false, optional: true, required: false
  private _noGroupHosts?: boolean | cdktn.IResolvable; 
  public get noGroupHosts() {
    return this.getBooleanAttribute('no_group_hosts');
  }
  public set noGroupHosts(value: boolean | cdktn.IResolvable) {
    this._noGroupHosts = value;
  }
  public resetNoGroupHosts() {
    this._noGroupHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGroupHostsInput() {
    return this._noGroupHosts;
  }

  // no_metric_hosts - computed: false, optional: true, required: false
  private _noMetricHosts?: boolean | cdktn.IResolvable; 
  public get noMetricHosts() {
    return this.getBooleanAttribute('no_metric_hosts');
  }
  public set noMetricHosts(value: boolean | cdktn.IResolvable) {
    this._noMetricHosts = value;
  }
  public resetNoMetricHosts() {
    this._noMetricHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMetricHostsInput() {
    return this._noMetricHosts;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // request_type - computed: false, optional: true, required: false
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  public resetRequestType() {
    this._requestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // child - computed: false, optional: true, required: false
  private _child = new PowerpackV2WidgetHostmapDefinitionRequestChildOutputReference(this, "child");
  public get child() {
    return this._child;
  }
  public putChild(value: PowerpackV2WidgetHostmapDefinitionRequestChild) {
    this._child.internalValue = value;
  }
  public resetChild() {
    this._child.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childInput() {
    return this._child.internalValue;
  }

  // conditional_formats - computed: false, optional: true, required: false
  private _conditionalFormats = new PowerpackV2WidgetHostmapDefinitionRequestConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: PowerpackV2WidgetHostmapDefinitionRequestConditionalFormats[] | cdktn.IResolvable) {
    this._conditionalFormats.internalValue = value;
  }
  public resetConditionalFormats() {
    this._conditionalFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalFormatsInput() {
    return this._conditionalFormats.internalValue;
  }

  // enrichment - computed: false, optional: true, required: false
  private _enrichment = new PowerpackV2WidgetHostmapDefinitionRequestEnrichmentList(this, "enrichment", false);
  public get enrichment() {
    return this._enrichment;
  }
  public putEnrichment(value: PowerpackV2WidgetHostmapDefinitionRequestEnrichment[] | cdktn.IResolvable) {
    this._enrichment.internalValue = value;
  }
  public resetEnrichment() {
    this._enrichment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment.internalValue;
  }

  // fill - computed: false, optional: true, required: false
  private _fill = new PowerpackV2WidgetHostmapDefinitionRequestFillOutputReference(this, "fill");
  public get fill() {
    return this._fill;
  }
  public putFill(value: PowerpackV2WidgetHostmapDefinitionRequestFill) {
    this._fill.internalValue = value;
  }
  public resetFill() {
    this._fill.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillInput() {
    return this._fill.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetHostmapDefinitionRequestGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetHostmapDefinitionRequestGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // projection - computed: false, optional: true, required: false
  private _projection = new PowerpackV2WidgetHostmapDefinitionRequestProjectionOutputReference(this, "projection");
  public get projection() {
    return this._projection;
  }
  public putProjection(value: PowerpackV2WidgetHostmapDefinitionRequestProjection) {
    this._projection.internalValue = value;
  }
  public resetProjection() {
    this._projection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionInput() {
    return this._projection.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new PowerpackV2WidgetHostmapDefinitionRequestQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackV2WidgetHostmapDefinitionRequestQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // size - computed: false, optional: true, required: false
  private _size = new PowerpackV2WidgetHostmapDefinitionRequestSizeOutputReference(this, "size");
  public get size() {
    return this._size;
  }
  public putSize(value: PowerpackV2WidgetHostmapDefinitionRequestSize) {
    this._size.internalValue = value;
  }
  public resetSize() {
    this._size.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new PowerpackV2WidgetHostmapDefinitionRequestStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: PowerpackV2WidgetHostmapDefinitionRequestStyle) {
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
export interface PowerpackV2WidgetHostmapDefinitionStyle {
  /**
  * The max value to use to color the map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fill_max PowerpackV2#fill_max}
  */
  readonly fillMax?: string;
  /**
  * The min value to use to color the map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fill_min PowerpackV2#fill_min}
  */
  readonly fillMin?: string;
  /**
  * A color palette to apply to the widget. The available options are available at: https://docs.datadoghq.com/dashboards/widgets/timeseries/#appearance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette?: string;
  /**
  * A Boolean indicating whether to flip the palette tones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#palette_flip PowerpackV2#palette_flip}
  */
  readonly paletteFlip?: boolean | cdktn.IResolvable;
}

export function powerpackV2WidgetHostmapDefinitionStyleToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionStyleOutputReference | PowerpackV2WidgetHostmapDefinitionStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fill_max: cdktn.stringToTerraform(struct!.fillMax),
    fill_min: cdktn.stringToTerraform(struct!.fillMin),
    palette: cdktn.stringToTerraform(struct!.palette),
    palette_flip: cdktn.booleanToTerraform(struct!.paletteFlip),
  }
}


export function powerpackV2WidgetHostmapDefinitionStyleToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionStyleOutputReference | PowerpackV2WidgetHostmapDefinitionStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fill_max: {
      value: cdktn.stringToHclTerraform(struct!.fillMax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fill_min: {
      value: cdktn.stringToHclTerraform(struct!.fillMin),
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
    palette_flip: {
      value: cdktn.booleanToHclTerraform(struct!.paletteFlip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fillMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillMax = this._fillMax;
    }
    if (this._fillMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillMin = this._fillMin;
    }
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    if (this._paletteFlip !== undefined) {
      hasAnyValues = true;
      internalValueResult.paletteFlip = this._paletteFlip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fillMax = undefined;
      this._fillMin = undefined;
      this._palette = undefined;
      this._paletteFlip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fillMax = value.fillMax;
      this._fillMin = value.fillMin;
      this._palette = value.palette;
      this._paletteFlip = value.paletteFlip;
    }
  }

  // fill_max - computed: false, optional: true, required: false
  private _fillMax?: string; 
  public get fillMax() {
    return this.getStringAttribute('fill_max');
  }
  public set fillMax(value: string) {
    this._fillMax = value;
  }
  public resetFillMax() {
    this._fillMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillMaxInput() {
    return this._fillMax;
  }

  // fill_min - computed: false, optional: true, required: false
  private _fillMin?: string; 
  public get fillMin() {
    return this.getStringAttribute('fill_min');
  }
  public set fillMin(value: string) {
    this._fillMin = value;
  }
  public resetFillMin() {
    this._fillMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillMinInput() {
    return this._fillMin;
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

  // palette_flip - computed: false, optional: true, required: false
  private _paletteFlip?: boolean | cdktn.IResolvable; 
  public get paletteFlip() {
    return this.getBooleanAttribute('palette_flip');
  }
  public set paletteFlip(value: boolean | cdktn.IResolvable) {
    this._paletteFlip = value;
  }
  public resetPaletteFlip() {
    this._paletteFlip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteFlipInput() {
    return this._paletteFlip;
  }
}
export interface PowerpackV2WidgetHostmapDefinitionTimeFixed {
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

export function powerpackV2WidgetHostmapDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionTimeFixedOutputReference | PowerpackV2WidgetHostmapDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetHostmapDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionTimeFixedOutputReference | PowerpackV2WidgetHostmapDefinitionTimeFixed): any {
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

export class PowerpackV2WidgetHostmapDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionTimeFixed | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionTimeFixed | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionTimeLive {
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

export function powerpackV2WidgetHostmapDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionTimeLiveOutputReference | PowerpackV2WidgetHostmapDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetHostmapDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionTimeLiveOutputReference | PowerpackV2WidgetHostmapDefinitionTimeLive): any {
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

export class PowerpackV2WidgetHostmapDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionTimeLive | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionTimeLive | undefined) {
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
export interface PowerpackV2WidgetHostmapDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetHostmapDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetHostmapDefinitionTimeLive;
}

export function powerpackV2WidgetHostmapDefinitionTimeToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionTimeOutputReference | PowerpackV2WidgetHostmapDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetHostmapDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetHostmapDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetHostmapDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionTimeOutputReference | PowerpackV2WidgetHostmapDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetHostmapDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetHostmapDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinitionTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetHostmapDefinitionTime | undefined) {
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
  private _fixed = new PowerpackV2WidgetHostmapDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetHostmapDefinitionTimeFixed) {
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
  private _live = new PowerpackV2WidgetHostmapDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetHostmapDefinitionTimeLive) {
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
export interface PowerpackV2WidgetHostmapDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
  /**
  * The list of tag prefixes to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group PowerpackV2#group}
  */
  readonly group?: string[];
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
  * A Boolean indicating whether to show the hosts that don't fit in a group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#no_group_hosts PowerpackV2#no_group_hosts}
  */
  readonly noGroupHosts?: boolean | cdktn.IResolvable;
  /**
  * A Boolean indicating whether to show nodes with no metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#no_metric_hosts PowerpackV2#no_metric_hosts}
  */
  readonly noMetricHosts?: boolean | cdktn.IResolvable;
  /**
  * The type of node used. Valid values are `host`, `container`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#node_type PowerpackV2#node_type}
  */
  readonly nodeType?: string;
  /**
  * Notes/description text for the host map widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#notes PowerpackV2#notes}
  */
  readonly notes?: string;
  /**
  * The list of tags used to filter the map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#scope PowerpackV2#scope}
  */
  readonly scope?: string[];
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
  readonly customLink?: PowerpackV2WidgetHostmapDefinitionCustomLink[] | cdktn.IResolvable;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#request PowerpackV2#request}
  */
  readonly request?: PowerpackV2WidgetHostmapDefinitionRequest;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#style PowerpackV2#style}
  */
  readonly style?: PowerpackV2WidgetHostmapDefinitionStyle;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetHostmapDefinitionTime;
}

export function powerpackV2WidgetHostmapDefinitionToTerraform(struct?: PowerpackV2WidgetHostmapDefinitionOutputReference | PowerpackV2WidgetHostmapDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    group: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.group),
    hide_incomplete_cost_data: cdktn.booleanToTerraform(struct!.hideIncompleteCostData),
    live_span: cdktn.stringToTerraform(struct!.liveSpan),
    no_group_hosts: cdktn.booleanToTerraform(struct!.noGroupHosts),
    no_metric_hosts: cdktn.booleanToTerraform(struct!.noMetricHosts),
    node_type: cdktn.stringToTerraform(struct!.nodeType),
    notes: cdktn.stringToTerraform(struct!.notes),
    scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scope),
    title: cdktn.stringToTerraform(struct!.title),
    title_align: cdktn.stringToTerraform(struct!.titleAlign),
    title_size: cdktn.stringToTerraform(struct!.titleSize),
    custom_link: cdktn.listMapper(powerpackV2WidgetHostmapDefinitionCustomLinkToTerraform, true)(struct!.customLink),
    request: powerpackV2WidgetHostmapDefinitionRequestToTerraform(struct!.request),
    style: powerpackV2WidgetHostmapDefinitionStyleToTerraform(struct!.style),
    time: powerpackV2WidgetHostmapDefinitionTimeToTerraform(struct!.time),
  }
}


export function powerpackV2WidgetHostmapDefinitionToHclTerraform(struct?: PowerpackV2WidgetHostmapDefinitionOutputReference | PowerpackV2WidgetHostmapDefinition): any {
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
    group: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    no_group_hosts: {
      value: cdktn.booleanToHclTerraform(struct!.noGroupHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_metric_hosts: {
      value: cdktn.booleanToHclTerraform(struct!.noMetricHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_type: {
      value: cdktn.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktn.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
      value: cdktn.listMapperHcl(powerpackV2WidgetHostmapDefinitionCustomLinkToHclTerraform, true)(struct!.customLink),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionCustomLinkList",
    },
    request: {
      value: powerpackV2WidgetHostmapDefinitionRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionRequestList",
    },
    style: {
      value: powerpackV2WidgetHostmapDefinitionStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionStyleList",
    },
    time: {
      value: powerpackV2WidgetHostmapDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetHostmapDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetHostmapDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetHostmapDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._hideIncompleteCostData !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideIncompleteCostData = this._hideIncompleteCostData;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._noGroupHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGroupHosts = this._noGroupHosts;
    }
    if (this._noMetricHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMetricHosts = this._noMetricHosts;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
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
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetHostmapDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._group = undefined;
      this._hideIncompleteCostData = undefined;
      this._liveSpan = undefined;
      this._noGroupHosts = undefined;
      this._noMetricHosts = undefined;
      this._nodeType = undefined;
      this._notes = undefined;
      this._scope = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._customLink.internalValue = undefined;
      this._request.internalValue = undefined;
      this._style.internalValue = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._group = value.group;
      this._hideIncompleteCostData = value.hideIncompleteCostData;
      this._liveSpan = value.liveSpan;
      this._noGroupHosts = value.noGroupHosts;
      this._noMetricHosts = value.noMetricHosts;
      this._nodeType = value.nodeType;
      this._notes = value.notes;
      this._scope = value.scope;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._customLink.internalValue = value.customLink;
      this._request.internalValue = value.request;
      this._style.internalValue = value.style;
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

  // group - computed: false, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return this.getListAttribute('group');
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // no_group_hosts - computed: false, optional: true, required: false
  private _noGroupHosts?: boolean | cdktn.IResolvable; 
  public get noGroupHosts() {
    return this.getBooleanAttribute('no_group_hosts');
  }
  public set noGroupHosts(value: boolean | cdktn.IResolvable) {
    this._noGroupHosts = value;
  }
  public resetNoGroupHosts() {
    this._noGroupHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGroupHostsInput() {
    return this._noGroupHosts;
  }

  // no_metric_hosts - computed: false, optional: true, required: false
  private _noMetricHosts?: boolean | cdktn.IResolvable; 
  public get noMetricHosts() {
    return this.getBooleanAttribute('no_metric_hosts');
  }
  public set noMetricHosts(value: boolean | cdktn.IResolvable) {
    this._noMetricHosts = value;
  }
  public resetNoMetricHosts() {
    this._noMetricHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMetricHostsInput() {
    return this._noMetricHosts;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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
  private _customLink = new PowerpackV2WidgetHostmapDefinitionCustomLinkList(this, "custom_link", false);
  public get customLink() {
    return this._customLink;
  }
  public putCustomLink(value: PowerpackV2WidgetHostmapDefinitionCustomLink[] | cdktn.IResolvable) {
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
  private _request = new PowerpackV2WidgetHostmapDefinitionRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: PowerpackV2WidgetHostmapDefinitionRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new PowerpackV2WidgetHostmapDefinitionStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: PowerpackV2WidgetHostmapDefinitionStyle) {
    this._style.internalValue = value;
  }
  public resetStyle() {
    this._style.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style.internalValue;
  }

  // time - computed: false, optional: true, required: false
  private _time = new PowerpackV2WidgetHostmapDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetHostmapDefinitionTime) {
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
export interface PowerpackV2WidgetIframeDefinitionTimeFixed {
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

export function powerpackV2WidgetIframeDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetIframeDefinitionTimeFixedOutputReference | PowerpackV2WidgetIframeDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetIframeDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetIframeDefinitionTimeFixedOutputReference | PowerpackV2WidgetIframeDefinitionTimeFixed): any {
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

export class PowerpackV2WidgetIframeDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetIframeDefinitionTimeFixed | undefined {
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

  public set internalValue(value: PowerpackV2WidgetIframeDefinitionTimeFixed | undefined) {
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
export interface PowerpackV2WidgetIframeDefinitionTimeLive {
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

export function powerpackV2WidgetIframeDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetIframeDefinitionTimeLiveOutputReference | PowerpackV2WidgetIframeDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetIframeDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetIframeDefinitionTimeLiveOutputReference | PowerpackV2WidgetIframeDefinitionTimeLive): any {
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

export class PowerpackV2WidgetIframeDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetIframeDefinitionTimeLive | undefined {
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

  public set internalValue(value: PowerpackV2WidgetIframeDefinitionTimeLive | undefined) {
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
export interface PowerpackV2WidgetIframeDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetIframeDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetIframeDefinitionTimeLive;
}

export function powerpackV2WidgetIframeDefinitionTimeToTerraform(struct?: PowerpackV2WidgetIframeDefinitionTimeOutputReference | PowerpackV2WidgetIframeDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetIframeDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetIframeDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetIframeDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetIframeDefinitionTimeOutputReference | PowerpackV2WidgetIframeDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetIframeDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetIframeDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetIframeDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetIframeDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetIframeDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetIframeDefinitionTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetIframeDefinitionTime | undefined) {
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
  private _fixed = new PowerpackV2WidgetIframeDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetIframeDefinitionTimeFixed) {
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
  private _live = new PowerpackV2WidgetIframeDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetIframeDefinitionTimeLive) {
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
export interface PowerpackV2WidgetIframeDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
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
  * The URL to use as a data source for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#url PowerpackV2#url}
  */
  readonly url: string;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetIframeDefinitionTime;
}

export function powerpackV2WidgetIframeDefinitionToTerraform(struct?: PowerpackV2WidgetIframeDefinitionOutputReference | PowerpackV2WidgetIframeDefinition): any {
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
    url: cdktn.stringToTerraform(struct!.url),
    time: powerpackV2WidgetIframeDefinitionTimeToTerraform(struct!.time),
  }
}


export function powerpackV2WidgetIframeDefinitionToHclTerraform(struct?: PowerpackV2WidgetIframeDefinitionOutputReference | PowerpackV2WidgetIframeDefinition): any {
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
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: powerpackV2WidgetIframeDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetIframeDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetIframeDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetIframeDefinition | undefined {
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
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetIframeDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._hideIncompleteCostData = undefined;
      this._liveSpan = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._url = undefined;
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
      this._url = value.url;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // time - computed: false, optional: true, required: false
  private _time = new PowerpackV2WidgetIframeDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetIframeDefinitionTime) {
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
export interface PowerpackV2WidgetImageDefinitionTimeFixed {
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

export function powerpackV2WidgetImageDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetImageDefinitionTimeFixedOutputReference | PowerpackV2WidgetImageDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetImageDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetImageDefinitionTimeFixedOutputReference | PowerpackV2WidgetImageDefinitionTimeFixed): any {
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

export class PowerpackV2WidgetImageDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetImageDefinitionTimeFixed | undefined {
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

  public set internalValue(value: PowerpackV2WidgetImageDefinitionTimeFixed | undefined) {
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
export interface PowerpackV2WidgetImageDefinitionTimeLive {
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

export function powerpackV2WidgetImageDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetImageDefinitionTimeLiveOutputReference | PowerpackV2WidgetImageDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetImageDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetImageDefinitionTimeLiveOutputReference | PowerpackV2WidgetImageDefinitionTimeLive): any {
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

export class PowerpackV2WidgetImageDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetImageDefinitionTimeLive | undefined {
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

  public set internalValue(value: PowerpackV2WidgetImageDefinitionTimeLive | undefined) {
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
export interface PowerpackV2WidgetImageDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetImageDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetImageDefinitionTimeLive;
}

export function powerpackV2WidgetImageDefinitionTimeToTerraform(struct?: PowerpackV2WidgetImageDefinitionTimeOutputReference | PowerpackV2WidgetImageDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetImageDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetImageDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetImageDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetImageDefinitionTimeOutputReference | PowerpackV2WidgetImageDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetImageDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetImageDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetImageDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetImageDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetImageDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetImageDefinitionTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetImageDefinitionTime | undefined) {
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
  private _fixed = new PowerpackV2WidgetImageDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetImageDefinitionTimeFixed) {
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
  private _live = new PowerpackV2WidgetImageDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetImageDefinitionTimeLive) {
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
export interface PowerpackV2WidgetImageDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
  /**
  * Whether to display a background or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#has_background PowerpackV2#has_background}
  */
  readonly hasBackground?: boolean | cdktn.IResolvable;
  /**
  * Whether to display a border or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#has_border PowerpackV2#has_border}
  */
  readonly hasBorder?: boolean | cdktn.IResolvable;
  /**
  * Hide any portion of the widget's timeframe that is incomplete due to cost data not being available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#hide_incomplete_cost_data PowerpackV2#hide_incomplete_cost_data}
  */
  readonly hideIncompleteCostData?: boolean | cdktn.IResolvable;
  /**
  * The horizontal alignment for the widget. Valid values are `center`, `left`, `right`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#horizontal_align PowerpackV2#horizontal_align}
  */
  readonly horizontalAlign?: string;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `week_to_date`, `month_to_date`, `1y`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live_span PowerpackV2#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The margins to use around the image. Note: `small` and `large` values are deprecated. Valid values are `sm`, `md`, `lg`, `small`, `large`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#margin PowerpackV2#margin}
  */
  readonly margin?: string;
  /**
  * The preferred method to adapt the dimensions of the image. The values are based on the image `object-fit` CSS properties. Note: `zoom`, `fit` and `center` values are deprecated. Valid values are `fill`, `contain`, `cover`, `none`, `scale-down`, `zoom`, `fit`, `center`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sizing PowerpackV2#sizing}
  */
  readonly sizing?: string;
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
  * URL of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#url PowerpackV2#url}
  */
  readonly url: string;
  /**
  * URL of the image in dark mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#url_dark_theme PowerpackV2#url_dark_theme}
  */
  readonly urlDarkTheme?: string;
  /**
  * The vertical alignment for the widget. Valid values are `center`, `top`, `bottom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#vertical_align PowerpackV2#vertical_align}
  */
  readonly verticalAlign?: string;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetImageDefinitionTime;
}

export function powerpackV2WidgetImageDefinitionToTerraform(struct?: PowerpackV2WidgetImageDefinitionOutputReference | PowerpackV2WidgetImageDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    has_background: cdktn.booleanToTerraform(struct!.hasBackground),
    has_border: cdktn.booleanToTerraform(struct!.hasBorder),
    hide_incomplete_cost_data: cdktn.booleanToTerraform(struct!.hideIncompleteCostData),
    horizontal_align: cdktn.stringToTerraform(struct!.horizontalAlign),
    live_span: cdktn.stringToTerraform(struct!.liveSpan),
    margin: cdktn.stringToTerraform(struct!.margin),
    sizing: cdktn.stringToTerraform(struct!.sizing),
    title: cdktn.stringToTerraform(struct!.title),
    title_align: cdktn.stringToTerraform(struct!.titleAlign),
    title_size: cdktn.stringToTerraform(struct!.titleSize),
    url: cdktn.stringToTerraform(struct!.url),
    url_dark_theme: cdktn.stringToTerraform(struct!.urlDarkTheme),
    vertical_align: cdktn.stringToTerraform(struct!.verticalAlign),
    time: powerpackV2WidgetImageDefinitionTimeToTerraform(struct!.time),
  }
}


export function powerpackV2WidgetImageDefinitionToHclTerraform(struct?: PowerpackV2WidgetImageDefinitionOutputReference | PowerpackV2WidgetImageDefinition): any {
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
    has_background: {
      value: cdktn.booleanToHclTerraform(struct!.hasBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    has_border: {
      value: cdktn.booleanToHclTerraform(struct!.hasBorder),
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
    horizontal_align: {
      value: cdktn.stringToHclTerraform(struct!.horizontalAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    live_span: {
      value: cdktn.stringToHclTerraform(struct!.liveSpan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    margin: {
      value: cdktn.stringToHclTerraform(struct!.margin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sizing: {
      value: cdktn.stringToHclTerraform(struct!.sizing),
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
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_dark_theme: {
      value: cdktn.stringToHclTerraform(struct!.urlDarkTheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vertical_align: {
      value: cdktn.stringToHclTerraform(struct!.verticalAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: powerpackV2WidgetImageDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetImageDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetImageDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetImageDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hasBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasBackground = this._hasBackground;
    }
    if (this._hasBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasBorder = this._hasBorder;
    }
    if (this._hideIncompleteCostData !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideIncompleteCostData = this._hideIncompleteCostData;
    }
    if (this._horizontalAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalAlign = this._horizontalAlign;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._margin !== undefined) {
      hasAnyValues = true;
      internalValueResult.margin = this._margin;
    }
    if (this._sizing !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizing = this._sizing;
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
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._urlDarkTheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlDarkTheme = this._urlDarkTheme;
    }
    if (this._verticalAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalAlign = this._verticalAlign;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetImageDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._hasBackground = undefined;
      this._hasBorder = undefined;
      this._hideIncompleteCostData = undefined;
      this._horizontalAlign = undefined;
      this._liveSpan = undefined;
      this._margin = undefined;
      this._sizing = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._url = undefined;
      this._urlDarkTheme = undefined;
      this._verticalAlign = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._hasBackground = value.hasBackground;
      this._hasBorder = value.hasBorder;
      this._hideIncompleteCostData = value.hideIncompleteCostData;
      this._horizontalAlign = value.horizontalAlign;
      this._liveSpan = value.liveSpan;
      this._margin = value.margin;
      this._sizing = value.sizing;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._url = value.url;
      this._urlDarkTheme = value.urlDarkTheme;
      this._verticalAlign = value.verticalAlign;
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

  // has_background - computed: false, optional: true, required: false
  private _hasBackground?: boolean | cdktn.IResolvable; 
  public get hasBackground() {
    return this.getBooleanAttribute('has_background');
  }
  public set hasBackground(value: boolean | cdktn.IResolvable) {
    this._hasBackground = value;
  }
  public resetHasBackground() {
    this._hasBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasBackgroundInput() {
    return this._hasBackground;
  }

  // has_border - computed: false, optional: true, required: false
  private _hasBorder?: boolean | cdktn.IResolvable; 
  public get hasBorder() {
    return this.getBooleanAttribute('has_border');
  }
  public set hasBorder(value: boolean | cdktn.IResolvable) {
    this._hasBorder = value;
  }
  public resetHasBorder() {
    this._hasBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasBorderInput() {
    return this._hasBorder;
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

  // horizontal_align - computed: false, optional: true, required: false
  private _horizontalAlign?: string; 
  public get horizontalAlign() {
    return this.getStringAttribute('horizontal_align');
  }
  public set horizontalAlign(value: string) {
    this._horizontalAlign = value;
  }
  public resetHorizontalAlign() {
    this._horizontalAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalAlignInput() {
    return this._horizontalAlign;
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

  // margin - computed: false, optional: true, required: false
  private _margin?: string; 
  public get margin() {
    return this.getStringAttribute('margin');
  }
  public set margin(value: string) {
    this._margin = value;
  }
  public resetMargin() {
    this._margin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marginInput() {
    return this._margin;
  }

  // sizing - computed: false, optional: true, required: false
  private _sizing?: string; 
  public get sizing() {
    return this.getStringAttribute('sizing');
  }
  public set sizing(value: string) {
    this._sizing = value;
  }
  public resetSizing() {
    this._sizing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizingInput() {
    return this._sizing;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_dark_theme - computed: false, optional: true, required: false
  private _urlDarkTheme?: string; 
  public get urlDarkTheme() {
    return this.getStringAttribute('url_dark_theme');
  }
  public set urlDarkTheme(value: string) {
    this._urlDarkTheme = value;
  }
  public resetUrlDarkTheme() {
    this._urlDarkTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlDarkThemeInput() {
    return this._urlDarkTheme;
  }

  // vertical_align - computed: false, optional: true, required: false
  private _verticalAlign?: string; 
  public get verticalAlign() {
    return this.getStringAttribute('vertical_align');
  }
  public set verticalAlign(value: string) {
    this._verticalAlign = value;
  }
  public resetVerticalAlign() {
    this._verticalAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalAlignInput() {
    return this._verticalAlign;
  }

  // time - computed: false, optional: true, required: false
  private _time = new PowerpackV2WidgetImageDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetImageDefinitionTime) {
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
export interface PowerpackV2WidgetListStreamDefinitionRequestColumns {
  /**
  * Widget column field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#field PowerpackV2#field}
  */
  readonly field?: string;
  /**
  * Widget column width. Valid values are `auto`, `compact`, `full`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#width PowerpackV2#width}
  */
  readonly width?: string;
}

export function powerpackV2WidgetListStreamDefinitionRequestColumnsToTerraform(struct?: PowerpackV2WidgetListStreamDefinitionRequestColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    width: cdktn.stringToTerraform(struct!.width),
  }
}


export function powerpackV2WidgetListStreamDefinitionRequestColumnsToHclTerraform(struct?: PowerpackV2WidgetListStreamDefinitionRequestColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktn.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetListStreamDefinitionRequestColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetListStreamDefinitionRequestColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetListStreamDefinitionRequestColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._width = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._width = value.width;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

export class PowerpackV2WidgetListStreamDefinitionRequestColumnsList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetListStreamDefinitionRequestColumns[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetListStreamDefinitionRequestColumnsOutputReference {
    return new PowerpackV2WidgetListStreamDefinitionRequestColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetListStreamDefinitionRequestQueryGroupBy {
  /**
  * Facet name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet: string;
}

export function powerpackV2WidgetListStreamDefinitionRequestQueryGroupByToTerraform(struct?: PowerpackV2WidgetListStreamDefinitionRequestQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
  }
}


export function powerpackV2WidgetListStreamDefinitionRequestQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetListStreamDefinitionRequestQueryGroupBy | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetListStreamDefinitionRequestQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetListStreamDefinitionRequestQueryGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetListStreamDefinitionRequestQueryGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
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
}

export class PowerpackV2WidgetListStreamDefinitionRequestQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetListStreamDefinitionRequestQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetListStreamDefinitionRequestQueryGroupByOutputReference {
    return new PowerpackV2WidgetListStreamDefinitionRequestQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetListStreamDefinitionRequestQuerySort {
  /**
  * The facet path for the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#column PowerpackV2#column}
  */
  readonly column: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetListStreamDefinitionRequestQuerySortToTerraform(struct?: PowerpackV2WidgetListStreamDefinitionRequestQuerySortOutputReference | PowerpackV2WidgetListStreamDefinitionRequestQuerySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetListStreamDefinitionRequestQuerySortToHclTerraform(struct?: PowerpackV2WidgetListStreamDefinitionRequestQuerySortOutputReference | PowerpackV2WidgetListStreamDefinitionRequestQuerySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
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

export class PowerpackV2WidgetListStreamDefinitionRequestQuerySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetListStreamDefinitionRequestQuerySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetListStreamDefinitionRequestQuerySort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
      this._order = value.order;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
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
export interface PowerpackV2WidgetListStreamDefinitionRequestQuery {
  /**
  * Specifies the field for logs pattern clustering. Can only be used with `logs_pattern_stream`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#clustering_pattern_field_path PowerpackV2#clustering_pattern_field_path}
  */
  readonly clusteringPatternFieldPath?: string;
  /**
  * Source from which to query items to display in the stream. Valid values are `logs_stream`, `audit_stream`, `ci_pipeline_stream`, `ci_test_stream`, `rum_issue_stream`, `apm_issue_stream`, `trace_stream`, `logs_issue_stream`, `logs_pattern_stream`, `logs_transaction_stream`, `event_stream`, `rum_stream`, `llm_observability_stream`, `issue_stream`, `security_runtime_stream`, `security_signals_stream`, `incidents_stream`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Size of events displayed in widget. Required if `data_source` is `event_stream`. Valid values are `s`, `l`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#event_size PowerpackV2#event_size}
  */
  readonly eventSize?: string;
  /**
  * List of indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#indexes PowerpackV2#indexes}
  */
  readonly indexes?: string[];
  /**
  * Widget query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query_string PowerpackV2#query_string}
  */
  readonly queryString?: string;
  /**
  * Storage location (private beta).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#storage PowerpackV2#storage}
  */
  readonly storage?: string;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetListStreamDefinitionRequestQueryGroupBy[] | cdktn.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetListStreamDefinitionRequestQuerySort;
}

export function powerpackV2WidgetListStreamDefinitionRequestQueryToTerraform(struct?: PowerpackV2WidgetListStreamDefinitionRequestQueryOutputReference | PowerpackV2WidgetListStreamDefinitionRequestQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clustering_pattern_field_path: cdktn.stringToTerraform(struct!.clusteringPatternFieldPath),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    event_size: cdktn.stringToTerraform(struct!.eventSize),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    query_string: cdktn.stringToTerraform(struct!.queryString),
    storage: cdktn.stringToTerraform(struct!.storage),
    group_by: cdktn.listMapper(powerpackV2WidgetListStreamDefinitionRequestQueryGroupByToTerraform, true)(struct!.groupBy),
    sort: powerpackV2WidgetListStreamDefinitionRequestQuerySortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetListStreamDefinitionRequestQueryToHclTerraform(struct?: PowerpackV2WidgetListStreamDefinitionRequestQueryOutputReference | PowerpackV2WidgetListStreamDefinitionRequestQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clustering_pattern_field_path: {
      value: cdktn.stringToHclTerraform(struct!.clusteringPatternFieldPath),
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
    event_size: {
      value: cdktn.stringToHclTerraform(struct!.eventSize),
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
    query_string: {
      value: cdktn.stringToHclTerraform(struct!.queryString),
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
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetListStreamDefinitionRequestQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetListStreamDefinitionRequestQueryGroupByList",
    },
    sort: {
      value: powerpackV2WidgetListStreamDefinitionRequestQuerySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetListStreamDefinitionRequestQuerySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetListStreamDefinitionRequestQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetListStreamDefinitionRequestQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusteringPatternFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusteringPatternFieldPath = this._clusteringPatternFieldPath;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._eventSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSize = this._eventSize;
    }
    if (this._indexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetListStreamDefinitionRequestQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusteringPatternFieldPath = undefined;
      this._dataSource = undefined;
      this._eventSize = undefined;
      this._indexes = undefined;
      this._queryString = undefined;
      this._storage = undefined;
      this._groupBy.internalValue = undefined;
      this._sort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusteringPatternFieldPath = value.clusteringPatternFieldPath;
      this._dataSource = value.dataSource;
      this._eventSize = value.eventSize;
      this._indexes = value.indexes;
      this._queryString = value.queryString;
      this._storage = value.storage;
      this._groupBy.internalValue = value.groupBy;
      this._sort.internalValue = value.sort;
    }
  }

  // clustering_pattern_field_path - computed: false, optional: true, required: false
  private _clusteringPatternFieldPath?: string; 
  public get clusteringPatternFieldPath() {
    return this.getStringAttribute('clustering_pattern_field_path');
  }
  public set clusteringPatternFieldPath(value: string) {
    this._clusteringPatternFieldPath = value;
  }
  public resetClusteringPatternFieldPath() {
    this._clusteringPatternFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringPatternFieldPathInput() {
    return this._clusteringPatternFieldPath;
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

  // event_size - computed: false, optional: true, required: false
  private _eventSize?: string; 
  public get eventSize() {
    return this.getStringAttribute('event_size');
  }
  public set eventSize(value: string) {
    this._eventSize = value;
  }
  public resetEventSize() {
    this._eventSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSizeInput() {
    return this._eventSize;
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

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
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

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetListStreamDefinitionRequestQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetListStreamDefinitionRequestQueryGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new PowerpackV2WidgetListStreamDefinitionRequestQuerySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetListStreamDefinitionRequestQuerySort) {
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
export interface PowerpackV2WidgetListStreamDefinitionRequest {
  /**
  * Widget response format. Valid values are `event_list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#response_format PowerpackV2#response_format}
  */
  readonly responseFormat: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#columns PowerpackV2#columns}
  */
  readonly columns: PowerpackV2WidgetListStreamDefinitionRequestColumns[] | cdktn.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: PowerpackV2WidgetListStreamDefinitionRequestQuery;
}

export function powerpackV2WidgetListStreamDefinitionRequestToTerraform(struct?: PowerpackV2WidgetListStreamDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    response_format: cdktn.stringToTerraform(struct!.responseFormat),
    columns: cdktn.listMapper(powerpackV2WidgetListStreamDefinitionRequestColumnsToTerraform, true)(struct!.columns),
    query: powerpackV2WidgetListStreamDefinitionRequestQueryToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetListStreamDefinitionRequestToHclTerraform(struct?: PowerpackV2WidgetListStreamDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    response_format: {
      value: cdktn.stringToHclTerraform(struct!.responseFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktn.listMapperHcl(powerpackV2WidgetListStreamDefinitionRequestColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetListStreamDefinitionRequestColumnsList",
    },
    query: {
      value: powerpackV2WidgetListStreamDefinitionRequestQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetListStreamDefinitionRequestQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetListStreamDefinitionRequestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetListStreamDefinitionRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFormat = this._responseFormat;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetListStreamDefinitionRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._responseFormat = undefined;
      this._columns.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._responseFormat = value.responseFormat;
      this._columns.internalValue = value.columns;
      this._query.internalValue = value.query;
    }
  }

  // response_format - computed: false, optional: false, required: true
  private _responseFormat?: string; 
  public get responseFormat() {
    return this.getStringAttribute('response_format');
  }
  public set responseFormat(value: string) {
    this._responseFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFormatInput() {
    return this._responseFormat;
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new PowerpackV2WidgetListStreamDefinitionRequestColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: PowerpackV2WidgetListStreamDefinitionRequestColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new PowerpackV2WidgetListStreamDefinitionRequestQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackV2WidgetListStreamDefinitionRequestQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class PowerpackV2WidgetListStreamDefinitionRequestList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetListStreamDefinitionRequest[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetListStreamDefinitionRequestOutputReference {
    return new PowerpackV2WidgetListStreamDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetListStreamDefinitionTimeFixed {
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

export function powerpackV2WidgetListStreamDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetListStreamDefinitionTimeFixedOutputReference | PowerpackV2WidgetListStreamDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetListStreamDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetListStreamDefinitionTimeFixedOutputReference | PowerpackV2WidgetListStreamDefinitionTimeFixed): any {
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

export class PowerpackV2WidgetListStreamDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetListStreamDefinitionTimeFixed | undefined {
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

  public set internalValue(value: PowerpackV2WidgetListStreamDefinitionTimeFixed | undefined) {
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
export interface PowerpackV2WidgetListStreamDefinitionTimeLive {
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

export function powerpackV2WidgetListStreamDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetListStreamDefinitionTimeLiveOutputReference | PowerpackV2WidgetListStreamDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetListStreamDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetListStreamDefinitionTimeLiveOutputReference | PowerpackV2WidgetListStreamDefinitionTimeLive): any {
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

export class PowerpackV2WidgetListStreamDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetListStreamDefinitionTimeLive | undefined {
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

  public set internalValue(value: PowerpackV2WidgetListStreamDefinitionTimeLive | undefined) {
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
export interface PowerpackV2WidgetListStreamDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetListStreamDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetListStreamDefinitionTimeLive;
}

export function powerpackV2WidgetListStreamDefinitionTimeToTerraform(struct?: PowerpackV2WidgetListStreamDefinitionTimeOutputReference | PowerpackV2WidgetListStreamDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetListStreamDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetListStreamDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetListStreamDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetListStreamDefinitionTimeOutputReference | PowerpackV2WidgetListStreamDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetListStreamDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetListStreamDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetListStreamDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetListStreamDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetListStreamDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetListStreamDefinitionTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetListStreamDefinitionTime | undefined) {
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
  private _fixed = new PowerpackV2WidgetListStreamDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetListStreamDefinitionTimeFixed) {
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
  private _live = new PowerpackV2WidgetListStreamDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetListStreamDefinitionTimeLive) {
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
export interface PowerpackV2WidgetListStreamDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
  /**
  * Hide any portion of the widget's timeframe that is incomplete due to cost data not being available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#hide_incomplete_cost_data PowerpackV2#hide_incomplete_cost_data}
  */
  readonly hideIncompleteCostData?: boolean | cdktn.IResolvable;
  /**
  * The size of the legend displayed in the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#legend_size PowerpackV2#legend_size}
  */
  readonly legendSize?: string;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `week_to_date`, `month_to_date`, `1y`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live_span PowerpackV2#live_span}
  */
  readonly liveSpan?: string;
  /**
  * Whether or not to show the legend on this widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#show_legend PowerpackV2#show_legend}
  */
  readonly showLegend?: boolean | cdktn.IResolvable;
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
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#request PowerpackV2#request}
  */
  readonly request: PowerpackV2WidgetListStreamDefinitionRequest[] | cdktn.IResolvable;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetListStreamDefinitionTime;
}

export function powerpackV2WidgetListStreamDefinitionToTerraform(struct?: PowerpackV2WidgetListStreamDefinitionOutputReference | PowerpackV2WidgetListStreamDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    hide_incomplete_cost_data: cdktn.booleanToTerraform(struct!.hideIncompleteCostData),
    legend_size: cdktn.stringToTerraform(struct!.legendSize),
    live_span: cdktn.stringToTerraform(struct!.liveSpan),
    show_legend: cdktn.booleanToTerraform(struct!.showLegend),
    title: cdktn.stringToTerraform(struct!.title),
    title_align: cdktn.stringToTerraform(struct!.titleAlign),
    title_size: cdktn.stringToTerraform(struct!.titleSize),
    request: cdktn.listMapper(powerpackV2WidgetListStreamDefinitionRequestToTerraform, true)(struct!.request),
    time: powerpackV2WidgetListStreamDefinitionTimeToTerraform(struct!.time),
  }
}


export function powerpackV2WidgetListStreamDefinitionToHclTerraform(struct?: PowerpackV2WidgetListStreamDefinitionOutputReference | PowerpackV2WidgetListStreamDefinition): any {
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
    legend_size: {
      value: cdktn.stringToHclTerraform(struct!.legendSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    live_span: {
      value: cdktn.stringToHclTerraform(struct!.liveSpan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_legend: {
      value: cdktn.booleanToHclTerraform(struct!.showLegend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    request: {
      value: cdktn.listMapperHcl(powerpackV2WidgetListStreamDefinitionRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetListStreamDefinitionRequestList",
    },
    time: {
      value: powerpackV2WidgetListStreamDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetListStreamDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetListStreamDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetListStreamDefinition | undefined {
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
    if (this._legendSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendSize = this._legendSize;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._showLegend !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLegend = this._showLegend;
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

  public set internalValue(value: PowerpackV2WidgetListStreamDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._hideIncompleteCostData = undefined;
      this._legendSize = undefined;
      this._liveSpan = undefined;
      this._showLegend = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._request.internalValue = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._hideIncompleteCostData = value.hideIncompleteCostData;
      this._legendSize = value.legendSize;
      this._liveSpan = value.liveSpan;
      this._showLegend = value.showLegend;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
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

  // legend_size - computed: false, optional: true, required: false
  private _legendSize?: string; 
  public get legendSize() {
    return this.getStringAttribute('legend_size');
  }
  public set legendSize(value: string) {
    this._legendSize = value;
  }
  public resetLegendSize() {
    this._legendSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendSizeInput() {
    return this._legendSize;
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

  // show_legend - computed: false, optional: true, required: false
  private _showLegend?: boolean | cdktn.IResolvable; 
  public get showLegend() {
    return this.getBooleanAttribute('show_legend');
  }
  public set showLegend(value: boolean | cdktn.IResolvable) {
    this._showLegend = value;
  }
  public resetShowLegend() {
    this._showLegend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLegendInput() {
    return this._showLegend;
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

  // request - computed: false, optional: false, required: true
  private _request = new PowerpackV2WidgetListStreamDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: PowerpackV2WidgetListStreamDefinitionRequest[] | cdktn.IResolvable) {
    this._request.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // time - computed: false, optional: true, required: false
  private _time = new PowerpackV2WidgetListStreamDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetListStreamDefinitionTime) {
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
export interface PowerpackV2WidgetLogStreamDefinitionSort {
  /**
  * The facet path for the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#column PowerpackV2#column}
  */
  readonly column: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetLogStreamDefinitionSortToTerraform(struct?: PowerpackV2WidgetLogStreamDefinitionSortOutputReference | PowerpackV2WidgetLogStreamDefinitionSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetLogStreamDefinitionSortToHclTerraform(struct?: PowerpackV2WidgetLogStreamDefinitionSortOutputReference | PowerpackV2WidgetLogStreamDefinitionSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
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

export class PowerpackV2WidgetLogStreamDefinitionSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetLogStreamDefinitionSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetLogStreamDefinitionSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
      this._order = value.order;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
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
export interface PowerpackV2WidgetLogStreamDefinitionTimeFixed {
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

export function powerpackV2WidgetLogStreamDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetLogStreamDefinitionTimeFixedOutputReference | PowerpackV2WidgetLogStreamDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetLogStreamDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetLogStreamDefinitionTimeFixedOutputReference | PowerpackV2WidgetLogStreamDefinitionTimeFixed): any {
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

export class PowerpackV2WidgetLogStreamDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetLogStreamDefinitionTimeFixed | undefined {
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

  public set internalValue(value: PowerpackV2WidgetLogStreamDefinitionTimeFixed | undefined) {
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
export interface PowerpackV2WidgetLogStreamDefinitionTimeLive {
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

export function powerpackV2WidgetLogStreamDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetLogStreamDefinitionTimeLiveOutputReference | PowerpackV2WidgetLogStreamDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetLogStreamDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetLogStreamDefinitionTimeLiveOutputReference | PowerpackV2WidgetLogStreamDefinitionTimeLive): any {
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

export class PowerpackV2WidgetLogStreamDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetLogStreamDefinitionTimeLive | undefined {
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

  public set internalValue(value: PowerpackV2WidgetLogStreamDefinitionTimeLive | undefined) {
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
export interface PowerpackV2WidgetLogStreamDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetLogStreamDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetLogStreamDefinitionTimeLive;
}

export function powerpackV2WidgetLogStreamDefinitionTimeToTerraform(struct?: PowerpackV2WidgetLogStreamDefinitionTimeOutputReference | PowerpackV2WidgetLogStreamDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetLogStreamDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetLogStreamDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetLogStreamDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetLogStreamDefinitionTimeOutputReference | PowerpackV2WidgetLogStreamDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetLogStreamDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetLogStreamDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetLogStreamDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetLogStreamDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetLogStreamDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetLogStreamDefinitionTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetLogStreamDefinitionTime | undefined) {
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
  private _fixed = new PowerpackV2WidgetLogStreamDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetLogStreamDefinitionTimeFixed) {
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
  private _live = new PowerpackV2WidgetLogStreamDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetLogStreamDefinitionTimeLive) {
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
export interface PowerpackV2WidgetLogStreamDefinition {
  /**
  * Stringified list of columns to use, for example: `["column1","column2","column3"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#columns PowerpackV2#columns}
  */
  readonly columns?: string[];
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
  /**
  * Hide any portion of the widget's timeframe that is incomplete due to cost data not being available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#hide_incomplete_cost_data PowerpackV2#hide_incomplete_cost_data}
  */
  readonly hideIncompleteCostData?: boolean | cdktn.IResolvable;
  /**
  * An array of index names to query in the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#indexes PowerpackV2#indexes}
  */
  readonly indexes?: string[];
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `week_to_date`, `month_to_date`, `1y`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live_span PowerpackV2#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The number of log lines to display. Valid values are `inline`, `expanded-md`, `expanded-lg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#message_display PowerpackV2#message_display}
  */
  readonly messageDisplay?: string;
  /**
  * Query to filter the log stream with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: string;
  /**
  * If the date column should be displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#show_date_column PowerpackV2#show_date_column}
  */
  readonly showDateColumn?: boolean | cdktn.IResolvable;
  /**
  * If the message column should be displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#show_message_column PowerpackV2#show_message_column}
  */
  readonly showMessageColumn?: boolean | cdktn.IResolvable;
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
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetLogStreamDefinitionSort;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetLogStreamDefinitionTime;
}

export function powerpackV2WidgetLogStreamDefinitionToTerraform(struct?: PowerpackV2WidgetLogStreamDefinitionOutputReference | PowerpackV2WidgetLogStreamDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columns),
    description: cdktn.stringToTerraform(struct!.description),
    hide_incomplete_cost_data: cdktn.booleanToTerraform(struct!.hideIncompleteCostData),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    live_span: cdktn.stringToTerraform(struct!.liveSpan),
    message_display: cdktn.stringToTerraform(struct!.messageDisplay),
    query: cdktn.stringToTerraform(struct!.query),
    show_date_column: cdktn.booleanToTerraform(struct!.showDateColumn),
    show_message_column: cdktn.booleanToTerraform(struct!.showMessageColumn),
    title: cdktn.stringToTerraform(struct!.title),
    title_align: cdktn.stringToTerraform(struct!.titleAlign),
    title_size: cdktn.stringToTerraform(struct!.titleSize),
    sort: powerpackV2WidgetLogStreamDefinitionSortToTerraform(struct!.sort),
    time: powerpackV2WidgetLogStreamDefinitionTimeToTerraform(struct!.time),
  }
}


export function powerpackV2WidgetLogStreamDefinitionToHclTerraform(struct?: PowerpackV2WidgetLogStreamDefinitionOutputReference | PowerpackV2WidgetLogStreamDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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
    indexes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.indexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    live_span: {
      value: cdktn.stringToHclTerraform(struct!.liveSpan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_display: {
      value: cdktn.stringToHclTerraform(struct!.messageDisplay),
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
    show_date_column: {
      value: cdktn.booleanToHclTerraform(struct!.showDateColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_message_column: {
      value: cdktn.booleanToHclTerraform(struct!.showMessageColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    sort: {
      value: powerpackV2WidgetLogStreamDefinitionSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetLogStreamDefinitionSortList",
    },
    time: {
      value: powerpackV2WidgetLogStreamDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetLogStreamDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetLogStreamDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetLogStreamDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hideIncompleteCostData !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideIncompleteCostData = this._hideIncompleteCostData;
    }
    if (this._indexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._messageDisplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDisplay = this._messageDisplay;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._showDateColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDateColumn = this._showDateColumn;
    }
    if (this._showMessageColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMessageColumn = this._showMessageColumn;
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
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetLogStreamDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
      this._description = undefined;
      this._hideIncompleteCostData = undefined;
      this._indexes = undefined;
      this._liveSpan = undefined;
      this._messageDisplay = undefined;
      this._query = undefined;
      this._showDateColumn = undefined;
      this._showMessageColumn = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._sort.internalValue = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
      this._description = value.description;
      this._hideIncompleteCostData = value.hideIncompleteCostData;
      this._indexes = value.indexes;
      this._liveSpan = value.liveSpan;
      this._messageDisplay = value.messageDisplay;
      this._query = value.query;
      this._showDateColumn = value.showDateColumn;
      this._showMessageColumn = value.showMessageColumn;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._sort.internalValue = value.sort;
      this._time.internalValue = value.time;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
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

  // message_display - computed: false, optional: true, required: false
  private _messageDisplay?: string; 
  public get messageDisplay() {
    return this.getStringAttribute('message_display');
  }
  public set messageDisplay(value: string) {
    this._messageDisplay = value;
  }
  public resetMessageDisplay() {
    this._messageDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDisplayInput() {
    return this._messageDisplay;
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

  // show_date_column - computed: false, optional: true, required: false
  private _showDateColumn?: boolean | cdktn.IResolvable; 
  public get showDateColumn() {
    return this.getBooleanAttribute('show_date_column');
  }
  public set showDateColumn(value: boolean | cdktn.IResolvable) {
    this._showDateColumn = value;
  }
  public resetShowDateColumn() {
    this._showDateColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDateColumnInput() {
    return this._showDateColumn;
  }

  // show_message_column - computed: false, optional: true, required: false
  private _showMessageColumn?: boolean | cdktn.IResolvable; 
  public get showMessageColumn() {
    return this.getBooleanAttribute('show_message_column');
  }
  public set showMessageColumn(value: boolean | cdktn.IResolvable) {
    this._showMessageColumn = value;
  }
  public resetShowMessageColumn() {
    this._showMessageColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMessageColumnInput() {
    return this._showMessageColumn;
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

  // sort - computed: false, optional: true, required: false
  private _sort = new PowerpackV2WidgetLogStreamDefinitionSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetLogStreamDefinitionSort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }

  // time - computed: false, optional: true, required: false
  private _time = new PowerpackV2WidgetLogStreamDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetLogStreamDefinitionTime) {
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
export interface PowerpackV2WidgetManageStatusDefinitionTimeFixed {
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

export function powerpackV2WidgetManageStatusDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetManageStatusDefinitionTimeFixedOutputReference | PowerpackV2WidgetManageStatusDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetManageStatusDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetManageStatusDefinitionTimeFixedOutputReference | PowerpackV2WidgetManageStatusDefinitionTimeFixed): any {
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

export class PowerpackV2WidgetManageStatusDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetManageStatusDefinitionTimeFixed | undefined {
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

  public set internalValue(value: PowerpackV2WidgetManageStatusDefinitionTimeFixed | undefined) {
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
export interface PowerpackV2WidgetManageStatusDefinitionTimeLive {
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

export function powerpackV2WidgetManageStatusDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetManageStatusDefinitionTimeLiveOutputReference | PowerpackV2WidgetManageStatusDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetManageStatusDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetManageStatusDefinitionTimeLiveOutputReference | PowerpackV2WidgetManageStatusDefinitionTimeLive): any {
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

export class PowerpackV2WidgetManageStatusDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetManageStatusDefinitionTimeLive | undefined {
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

  public set internalValue(value: PowerpackV2WidgetManageStatusDefinitionTimeLive | undefined) {
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
export interface PowerpackV2WidgetManageStatusDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetManageStatusDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetManageStatusDefinitionTimeLive;
}

export function powerpackV2WidgetManageStatusDefinitionTimeToTerraform(struct?: PowerpackV2WidgetManageStatusDefinitionTimeOutputReference | PowerpackV2WidgetManageStatusDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetManageStatusDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetManageStatusDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetManageStatusDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetManageStatusDefinitionTimeOutputReference | PowerpackV2WidgetManageStatusDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetManageStatusDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetManageStatusDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetManageStatusDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetManageStatusDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetManageStatusDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetManageStatusDefinitionTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetManageStatusDefinitionTime | undefined) {
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
  private _fixed = new PowerpackV2WidgetManageStatusDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetManageStatusDefinitionTimeFixed) {
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
  private _live = new PowerpackV2WidgetManageStatusDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetManageStatusDefinitionTimeLive) {
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
export interface PowerpackV2WidgetManageStatusDefinition {
  /**
  * Whether to colorize text or background. Valid values are `background`, `text`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#color_preference PowerpackV2#color_preference}
  */
  readonly colorPreference?: string;
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
  /**
  * The display setting to use. Valid values are `counts`, `countsAndList`, `list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#display_format PowerpackV2#display_format}
  */
  readonly displayFormat?: string;
  /**
  * Hide any portion of the widget's timeframe that is incomplete due to cost data not being available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#hide_incomplete_cost_data PowerpackV2#hide_incomplete_cost_data}
  */
  readonly hideIncompleteCostData?: boolean | cdktn.IResolvable;
  /**
  * A Boolean indicating whether to hide empty categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#hide_zero_counts PowerpackV2#hide_zero_counts}
  */
  readonly hideZeroCounts?: boolean | cdktn.IResolvable;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `week_to_date`, `month_to_date`, `1y`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live_span PowerpackV2#live_span}
  */
  readonly liveSpan?: string;
  /**
  * Query to filter the monitors with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
  /**
  * Whether to show the time that has elapsed since the monitor/group triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#show_last_triggered PowerpackV2#show_last_triggered}
  */
  readonly showLastTriggered?: boolean | cdktn.IResolvable;
  /**
  * Whether to show the priorities column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#show_priority PowerpackV2#show_priority}
  */
  readonly showPriority?: boolean | cdktn.IResolvable;
  /**
  * The method to sort the monitors. Valid values are `name`, `group`, `status`, `tags`, `triggered`, `group,asc`, `group,desc`, `name,asc`, `name,desc`, `status,asc`, `status,desc`, `tags,asc`, `tags,desc`, `triggered,asc`, `triggered,desc`, `priority,asc`, `priority,desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: string;
  /**
  * The summary type to use. Valid values are `monitors`, `groups`, `combined`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#summary_type PowerpackV2#summary_type}
  */
  readonly summaryType?: string;
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
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetManageStatusDefinitionTime;
}

export function powerpackV2WidgetManageStatusDefinitionToTerraform(struct?: PowerpackV2WidgetManageStatusDefinitionOutputReference | PowerpackV2WidgetManageStatusDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color_preference: cdktn.stringToTerraform(struct!.colorPreference),
    description: cdktn.stringToTerraform(struct!.description),
    display_format: cdktn.stringToTerraform(struct!.displayFormat),
    hide_incomplete_cost_data: cdktn.booleanToTerraform(struct!.hideIncompleteCostData),
    hide_zero_counts: cdktn.booleanToTerraform(struct!.hideZeroCounts),
    live_span: cdktn.stringToTerraform(struct!.liveSpan),
    query: cdktn.stringToTerraform(struct!.query),
    show_last_triggered: cdktn.booleanToTerraform(struct!.showLastTriggered),
    show_priority: cdktn.booleanToTerraform(struct!.showPriority),
    sort: cdktn.stringToTerraform(struct!.sort),
    summary_type: cdktn.stringToTerraform(struct!.summaryType),
    title: cdktn.stringToTerraform(struct!.title),
    title_align: cdktn.stringToTerraform(struct!.titleAlign),
    title_size: cdktn.stringToTerraform(struct!.titleSize),
    time: powerpackV2WidgetManageStatusDefinitionTimeToTerraform(struct!.time),
  }
}


export function powerpackV2WidgetManageStatusDefinitionToHclTerraform(struct?: PowerpackV2WidgetManageStatusDefinitionOutputReference | PowerpackV2WidgetManageStatusDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color_preference: {
      value: cdktn.stringToHclTerraform(struct!.colorPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_format: {
      value: cdktn.stringToHclTerraform(struct!.displayFormat),
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
    hide_zero_counts: {
      value: cdktn.booleanToHclTerraform(struct!.hideZeroCounts),
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
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_last_triggered: {
      value: cdktn.booleanToHclTerraform(struct!.showLastTriggered),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_priority: {
      value: cdktn.booleanToHclTerraform(struct!.showPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort: {
      value: cdktn.stringToHclTerraform(struct!.sort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_type: {
      value: cdktn.stringToHclTerraform(struct!.summaryType),
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
    time: {
      value: powerpackV2WidgetManageStatusDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetManageStatusDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetManageStatusDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetManageStatusDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colorPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorPreference = this._colorPreference;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayFormat = this._displayFormat;
    }
    if (this._hideIncompleteCostData !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideIncompleteCostData = this._hideIncompleteCostData;
    }
    if (this._hideZeroCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideZeroCounts = this._hideZeroCounts;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._showLastTriggered !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLastTriggered = this._showLastTriggered;
    }
    if (this._showPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.showPriority = this._showPriority;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    if (this._summaryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryType = this._summaryType;
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
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetManageStatusDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._colorPreference = undefined;
      this._description = undefined;
      this._displayFormat = undefined;
      this._hideIncompleteCostData = undefined;
      this._hideZeroCounts = undefined;
      this._liveSpan = undefined;
      this._query = undefined;
      this._showLastTriggered = undefined;
      this._showPriority = undefined;
      this._sort = undefined;
      this._summaryType = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._colorPreference = value.colorPreference;
      this._description = value.description;
      this._displayFormat = value.displayFormat;
      this._hideIncompleteCostData = value.hideIncompleteCostData;
      this._hideZeroCounts = value.hideZeroCounts;
      this._liveSpan = value.liveSpan;
      this._query = value.query;
      this._showLastTriggered = value.showLastTriggered;
      this._showPriority = value.showPriority;
      this._sort = value.sort;
      this._summaryType = value.summaryType;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._time.internalValue = value.time;
    }
  }

  // color_preference - computed: false, optional: true, required: false
  private _colorPreference?: string; 
  public get colorPreference() {
    return this.getStringAttribute('color_preference');
  }
  public set colorPreference(value: string) {
    this._colorPreference = value;
  }
  public resetColorPreference() {
    this._colorPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorPreferenceInput() {
    return this._colorPreference;
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

  // display_format - computed: false, optional: true, required: false
  private _displayFormat?: string; 
  public get displayFormat() {
    return this.getStringAttribute('display_format');
  }
  public set displayFormat(value: string) {
    this._displayFormat = value;
  }
  public resetDisplayFormat() {
    this._displayFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayFormatInput() {
    return this._displayFormat;
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

  // hide_zero_counts - computed: false, optional: true, required: false
  private _hideZeroCounts?: boolean | cdktn.IResolvable; 
  public get hideZeroCounts() {
    return this.getBooleanAttribute('hide_zero_counts');
  }
  public set hideZeroCounts(value: boolean | cdktn.IResolvable) {
    this._hideZeroCounts = value;
  }
  public resetHideZeroCounts() {
    this._hideZeroCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideZeroCountsInput() {
    return this._hideZeroCounts;
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

  // show_last_triggered - computed: false, optional: true, required: false
  private _showLastTriggered?: boolean | cdktn.IResolvable; 
  public get showLastTriggered() {
    return this.getBooleanAttribute('show_last_triggered');
  }
  public set showLastTriggered(value: boolean | cdktn.IResolvable) {
    this._showLastTriggered = value;
  }
  public resetShowLastTriggered() {
    this._showLastTriggered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLastTriggeredInput() {
    return this._showLastTriggered;
  }

  // show_priority - computed: false, optional: true, required: false
  private _showPriority?: boolean | cdktn.IResolvable; 
  public get showPriority() {
    return this.getBooleanAttribute('show_priority');
  }
  public set showPriority(value: boolean | cdktn.IResolvable) {
    this._showPriority = value;
  }
  public resetShowPriority() {
    this._showPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPriorityInput() {
    return this._showPriority;
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

  // summary_type - computed: false, optional: true, required: false
  private _summaryType?: string; 
  public get summaryType() {
    return this.getStringAttribute('summary_type');
  }
  public set summaryType(value: string) {
    this._summaryType = value;
  }
  public resetSummaryType() {
    this._summaryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryTypeInput() {
    return this._summaryType;
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

  // time - computed: false, optional: true, required: false
  private _time = new PowerpackV2WidgetManageStatusDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetManageStatusDefinitionTime) {
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
export interface PowerpackV2WidgetNoteDefinitionTimeFixed {
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

export function powerpackV2WidgetNoteDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetNoteDefinitionTimeFixedOutputReference | PowerpackV2WidgetNoteDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetNoteDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetNoteDefinitionTimeFixedOutputReference | PowerpackV2WidgetNoteDefinitionTimeFixed): any {
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

export class PowerpackV2WidgetNoteDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetNoteDefinitionTimeFixed | undefined {
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

  public set internalValue(value: PowerpackV2WidgetNoteDefinitionTimeFixed | undefined) {
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
export interface PowerpackV2WidgetNoteDefinitionTimeLive {
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

export function powerpackV2WidgetNoteDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetNoteDefinitionTimeLiveOutputReference | PowerpackV2WidgetNoteDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetNoteDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetNoteDefinitionTimeLiveOutputReference | PowerpackV2WidgetNoteDefinitionTimeLive): any {
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

export class PowerpackV2WidgetNoteDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetNoteDefinitionTimeLive | undefined {
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

  public set internalValue(value: PowerpackV2WidgetNoteDefinitionTimeLive | undefined) {
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
export interface PowerpackV2WidgetNoteDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetNoteDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetNoteDefinitionTimeLive;
}

export function powerpackV2WidgetNoteDefinitionTimeToTerraform(struct?: PowerpackV2WidgetNoteDefinitionTimeOutputReference | PowerpackV2WidgetNoteDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetNoteDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetNoteDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetNoteDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetNoteDefinitionTimeOutputReference | PowerpackV2WidgetNoteDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetNoteDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetNoteDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetNoteDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetNoteDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetNoteDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetNoteDefinitionTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetNoteDefinitionTime | undefined) {
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
  private _fixed = new PowerpackV2WidgetNoteDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetNoteDefinitionTimeFixed) {
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
  private _live = new PowerpackV2WidgetNoteDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetNoteDefinitionTimeLive) {
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
export interface PowerpackV2WidgetNoteDefinition {
  /**
  * The background color of the note.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#background_color PowerpackV2#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The content of the note.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#content PowerpackV2#content}
  */
  readonly content: string;
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
  /**
  * The size of the text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#font_size PowerpackV2#font_size}
  */
  readonly fontSize?: string;
  /**
  * Whether to add padding or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#has_padding PowerpackV2#has_padding}
  */
  readonly hasPadding?: boolean | cdktn.IResolvable;
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
  * Whether to show a tick or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#show_tick PowerpackV2#show_tick}
  */
  readonly showTick?: boolean | cdktn.IResolvable;
  /**
  * The alignment of the widget's text. Valid values are `center`, `left`, `right`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#text_align PowerpackV2#text_align}
  */
  readonly textAlign?: string;
  /**
  * When `tick = true`, a string indicating on which side of the widget the tick should be displayed. Valid values are `bottom`, `left`, `right`, `top`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#tick_edge PowerpackV2#tick_edge}
  */
  readonly tickEdge?: string;
  /**
  * When `tick = true`, a string with a percent sign indicating the position of the tick, for example: `tick_pos = "50%"` is centered alignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#tick_pos PowerpackV2#tick_pos}
  */
  readonly tickPos?: string;
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
  * The vertical alignment for the widget. Valid values are `center`, `top`, `bottom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#vertical_align PowerpackV2#vertical_align}
  */
  readonly verticalAlign?: string;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetNoteDefinitionTime;
}

export function powerpackV2WidgetNoteDefinitionToTerraform(struct?: PowerpackV2WidgetNoteDefinitionOutputReference | PowerpackV2WidgetNoteDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background_color: cdktn.stringToTerraform(struct!.backgroundColor),
    content: cdktn.stringToTerraform(struct!.content),
    description: cdktn.stringToTerraform(struct!.description),
    font_size: cdktn.stringToTerraform(struct!.fontSize),
    has_padding: cdktn.booleanToTerraform(struct!.hasPadding),
    hide_incomplete_cost_data: cdktn.booleanToTerraform(struct!.hideIncompleteCostData),
    live_span: cdktn.stringToTerraform(struct!.liveSpan),
    show_tick: cdktn.booleanToTerraform(struct!.showTick),
    text_align: cdktn.stringToTerraform(struct!.textAlign),
    tick_edge: cdktn.stringToTerraform(struct!.tickEdge),
    tick_pos: cdktn.stringToTerraform(struct!.tickPos),
    title: cdktn.stringToTerraform(struct!.title),
    title_align: cdktn.stringToTerraform(struct!.titleAlign),
    title_size: cdktn.stringToTerraform(struct!.titleSize),
    vertical_align: cdktn.stringToTerraform(struct!.verticalAlign),
    time: powerpackV2WidgetNoteDefinitionTimeToTerraform(struct!.time),
  }
}


export function powerpackV2WidgetNoteDefinitionToHclTerraform(struct?: PowerpackV2WidgetNoteDefinitionOutputReference | PowerpackV2WidgetNoteDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background_color: {
      value: cdktn.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktn.stringToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_padding: {
      value: cdktn.booleanToHclTerraform(struct!.hasPadding),
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
    show_tick: {
      value: cdktn.booleanToHclTerraform(struct!.showTick),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text_align: {
      value: cdktn.stringToHclTerraform(struct!.textAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tick_edge: {
      value: cdktn.stringToHclTerraform(struct!.tickEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tick_pos: {
      value: cdktn.stringToHclTerraform(struct!.tickPos),
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
    vertical_align: {
      value: cdktn.stringToHclTerraform(struct!.verticalAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: powerpackV2WidgetNoteDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetNoteDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetNoteDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetNoteDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._hasPadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasPadding = this._hasPadding;
    }
    if (this._hideIncompleteCostData !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideIncompleteCostData = this._hideIncompleteCostData;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._showTick !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTick = this._showTick;
    }
    if (this._textAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.textAlign = this._textAlign;
    }
    if (this._tickEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickEdge = this._tickEdge;
    }
    if (this._tickPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickPos = this._tickPos;
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
    if (this._verticalAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalAlign = this._verticalAlign;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetNoteDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._content = undefined;
      this._description = undefined;
      this._fontSize = undefined;
      this._hasPadding = undefined;
      this._hideIncompleteCostData = undefined;
      this._liveSpan = undefined;
      this._showTick = undefined;
      this._textAlign = undefined;
      this._tickEdge = undefined;
      this._tickPos = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._verticalAlign = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._content = value.content;
      this._description = value.description;
      this._fontSize = value.fontSize;
      this._hasPadding = value.hasPadding;
      this._hideIncompleteCostData = value.hideIncompleteCostData;
      this._liveSpan = value.liveSpan;
      this._showTick = value.showTick;
      this._textAlign = value.textAlign;
      this._tickEdge = value.tickEdge;
      this._tickPos = value.tickPos;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._verticalAlign = value.verticalAlign;
      this._time.internalValue = value.time;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // has_padding - computed: false, optional: true, required: false
  private _hasPadding?: boolean | cdktn.IResolvable; 
  public get hasPadding() {
    return this.getBooleanAttribute('has_padding');
  }
  public set hasPadding(value: boolean | cdktn.IResolvable) {
    this._hasPadding = value;
  }
  public resetHasPadding() {
    this._hasPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasPaddingInput() {
    return this._hasPadding;
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

  // show_tick - computed: false, optional: true, required: false
  private _showTick?: boolean | cdktn.IResolvable; 
  public get showTick() {
    return this.getBooleanAttribute('show_tick');
  }
  public set showTick(value: boolean | cdktn.IResolvable) {
    this._showTick = value;
  }
  public resetShowTick() {
    this._showTick = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTickInput() {
    return this._showTick;
  }

  // text_align - computed: false, optional: true, required: false
  private _textAlign?: string; 
  public get textAlign() {
    return this.getStringAttribute('text_align');
  }
  public set textAlign(value: string) {
    this._textAlign = value;
  }
  public resetTextAlign() {
    this._textAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAlignInput() {
    return this._textAlign;
  }

  // tick_edge - computed: false, optional: true, required: false
  private _tickEdge?: string; 
  public get tickEdge() {
    return this.getStringAttribute('tick_edge');
  }
  public set tickEdge(value: string) {
    this._tickEdge = value;
  }
  public resetTickEdge() {
    this._tickEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickEdgeInput() {
    return this._tickEdge;
  }

  // tick_pos - computed: false, optional: true, required: false
  private _tickPos?: string; 
  public get tickPos() {
    return this.getStringAttribute('tick_pos');
  }
  public set tickPos(value: string) {
    this._tickPos = value;
  }
  public resetTickPos() {
    this._tickPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickPosInput() {
    return this._tickPos;
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

  // vertical_align - computed: false, optional: true, required: false
  private _verticalAlign?: string; 
  public get verticalAlign() {
    return this.getStringAttribute('vertical_align');
  }
  public set verticalAlign(value: string) {
    this._verticalAlign = value;
  }
  public resetVerticalAlign() {
    this._verticalAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalAlignInput() {
    return this._verticalAlign;
  }

  // time - computed: false, optional: true, required: false
  private _time = new PowerpackV2WidgetNoteDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetNoteDefinitionTime) {
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
export interface PowerpackV2WidgetPointPlotDefinitionCustomLink {
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

export function powerpackV2WidgetPointPlotDefinitionCustomLinkToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionCustomLink | cdktn.IResolvable): any {
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


export function powerpackV2WidgetPointPlotDefinitionCustomLinkToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionCustomLink | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetPointPlotDefinitionCustomLinkOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetPointPlotDefinitionCustomLink | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinitionCustomLink | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetPointPlotDefinitionCustomLinkList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetPointPlotDefinitionCustomLink[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetPointPlotDefinitionCustomLinkOutputReference {
    return new PowerpackV2WidgetPointPlotDefinitionCustomLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetPointPlotDefinitionLegend {
  /**
  * Type of legend to show for the point plot widget. Valid values are `automatic`, `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
}

export function powerpackV2WidgetPointPlotDefinitionLegendToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionLegendOutputReference | PowerpackV2WidgetPointPlotDefinitionLegend): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function powerpackV2WidgetPointPlotDefinitionLegendToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionLegendOutputReference | PowerpackV2WidgetPointPlotDefinitionLegend): any {
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

export class PowerpackV2WidgetPointPlotDefinitionLegendOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetPointPlotDefinitionLegend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinitionLegend | undefined) {
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
export interface PowerpackV2WidgetPointPlotDefinitionMarker {
  /**
  * Combination of a severity (`error`, `warning`, `ok`, or `info`) and a line type (`dashed`, `solid`, or `bold`). For Distribution widgets, this can be set to `percentile`. Example: `error dashed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#display_type PowerpackV2#display_type}
  */
  readonly displayType?: string;
  /**
  * Label to display over the marker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#label PowerpackV2#label}
  */
  readonly label?: string;
  /**
  * Timestamp for the marker position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: string;
  /**
  * Value to apply. Can be a single value `y = 15` or a range of values `0 < y < 10`. For Distribution widgets with `display_type` set to `percentile`, this should be a numeric percentile value (for example, `90` for P90).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value: string;
}

export function powerpackV2WidgetPointPlotDefinitionMarkerToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionMarker | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_type: cdktn.stringToTerraform(struct!.displayType),
    label: cdktn.stringToTerraform(struct!.label),
    time: cdktn.stringToTerraform(struct!.time),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetPointPlotDefinitionMarkerToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionMarker | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_type: {
      value: cdktn.stringToHclTerraform(struct!.displayType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
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

export class PowerpackV2WidgetPointPlotDefinitionMarkerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetPointPlotDefinitionMarker | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayType = this._displayType;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinitionMarker | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayType = undefined;
      this._label = undefined;
      this._time = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayType = value.displayType;
      this._label = value.label;
      this._time = value.time;
      this._value = value.value;
    }
  }

  // display_type - computed: false, optional: true, required: false
  private _displayType?: string; 
  public get displayType() {
    return this.getStringAttribute('display_type');
  }
  public set displayType(value: string) {
    this._displayType = value;
  }
  public resetDisplayType() {
    this._displayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTypeInput() {
    return this._displayType;
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

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
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

export class PowerpackV2WidgetPointPlotDefinitionMarkerList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetPointPlotDefinitionMarker[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetPointPlotDefinitionMarkerOutputReference {
    return new PowerpackV2WidgetPointPlotDefinitionMarkerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimension {
  /**
  * Alias for the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#alias PowerpackV2#alias}
  */
  readonly alias?: string;
  /**
  * Source column name from the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#column PowerpackV2#column}
  */
  readonly column: string;
  /**
  * Dimension of the point plot. Valid values are `group`, `time`, `y`, `radius`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#dimension PowerpackV2#dimension}
  */
  readonly dimension: string;
}

export function powerpackV2WidgetPointPlotDefinitionRequestProjectionDimensionToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    column: cdktn.stringToTerraform(struct!.column),
    dimension: cdktn.stringToTerraform(struct!.dimension),
  }
}


export function powerpackV2WidgetPointPlotDefinitionRequestProjectionDimensionToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimension | cdktn.IResolvable): any {
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
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktn.stringToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimensionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimension | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimension | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._column = undefined;
      this._dimension = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._column = value.column;
      this._dimension = value.dimension;
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

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }
}

export class PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimensionList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimension[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimensionOutputReference {
    return new PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetPointPlotDefinitionRequestProjection {
  /**
  * Additional columns to include in the projection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#extra_columns PowerpackV2#extra_columns}
  */
  readonly extraColumns?: string[];
  /**
  * Type of the projection. Must be `point_plot`. Valid values are `point_plot`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#dimension PowerpackV2#dimension}
  */
  readonly dimension: PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimension[] | cdktn.IResolvable;
}

export function powerpackV2WidgetPointPlotDefinitionRequestProjectionToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionRequestProjectionOutputReference | PowerpackV2WidgetPointPlotDefinitionRequestProjection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extra_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.extraColumns),
    type: cdktn.stringToTerraform(struct!.type),
    dimension: cdktn.listMapper(powerpackV2WidgetPointPlotDefinitionRequestProjectionDimensionToTerraform, true)(struct!.dimension),
  }
}


export function powerpackV2WidgetPointPlotDefinitionRequestProjectionToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionRequestProjectionOutputReference | PowerpackV2WidgetPointPlotDefinitionRequestProjection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extra_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.extraColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktn.listMapperHcl(powerpackV2WidgetPointPlotDefinitionRequestProjectionDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetPointPlotDefinitionRequestProjectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetPointPlotDefinitionRequestProjection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraColumns = this._extraColumns;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinitionRequestProjection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extraColumns = undefined;
      this._type = undefined;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extraColumns = value.extraColumns;
      this._type = value.type;
      this._dimension.internalValue = value.dimension;
    }
  }

  // extra_columns - computed: false, optional: true, required: false
  private _extraColumns?: string[]; 
  public get extraColumns() {
    return this.getListAttribute('extra_columns');
  }
  public set extraColumns(value: string[]) {
    this._extraColumns = value;
  }
  public resetExtraColumns() {
    this._extraColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraColumnsInput() {
    return this._extraColumns;
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

  // dimension - computed: false, optional: false, required: true
  private _dimension = new PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimensionList(this, "dimension", false);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: PowerpackV2WidgetPointPlotDefinitionRequestProjectionDimension[] | cdktn.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface PowerpackV2WidgetPointPlotDefinitionRequestQuery {
  /**
  * Data source for the query (for example, `logs`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * List of indexes to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#indexes PowerpackV2#indexes}
  */
  readonly indexes?: string[];
  /**
  * The query string to filter events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query_string PowerpackV2#query_string}
  */
  readonly queryString: string;
  /**
  * Storage location for the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#storage PowerpackV2#storage}
  */
  readonly storage?: string;
}

export function powerpackV2WidgetPointPlotDefinitionRequestQueryToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionRequestQueryOutputReference | PowerpackV2WidgetPointPlotDefinitionRequestQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    indexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexes),
    query_string: cdktn.stringToTerraform(struct!.queryString),
    storage: cdktn.stringToTerraform(struct!.storage),
  }
}


export function powerpackV2WidgetPointPlotDefinitionRequestQueryToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionRequestQueryOutputReference | PowerpackV2WidgetPointPlotDefinitionRequestQuery): any {
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
    query_string: {
      value: cdktn.stringToHclTerraform(struct!.queryString),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetPointPlotDefinitionRequestQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetPointPlotDefinitionRequestQuery | undefined {
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
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinitionRequestQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._queryString = undefined;
      this._storage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._indexes = value.indexes;
      this._queryString = value.queryString;
      this._storage = value.storage;
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

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
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
}
export interface PowerpackV2WidgetPointPlotDefinitionRequest {
  /**
  * Maximum number of data points to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * The type of data request. Must be `data_projection`. Valid values are `data_projection`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#request_type PowerpackV2#request_type}
  */
  readonly requestType: string;
  /**
  * projection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#projection PowerpackV2#projection}
  */
  readonly projection: PowerpackV2WidgetPointPlotDefinitionRequestProjection;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: PowerpackV2WidgetPointPlotDefinitionRequestQuery;
}

export function powerpackV2WidgetPointPlotDefinitionRequestToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    limit: cdktn.numberToTerraform(struct!.limit),
    request_type: cdktn.stringToTerraform(struct!.requestType),
    projection: powerpackV2WidgetPointPlotDefinitionRequestProjectionToTerraform(struct!.projection),
    query: powerpackV2WidgetPointPlotDefinitionRequestQueryToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetPointPlotDefinitionRequestToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionRequest | cdktn.IResolvable): any {
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
    request_type: {
      value: cdktn.stringToHclTerraform(struct!.requestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    projection: {
      value: powerpackV2WidgetPointPlotDefinitionRequestProjectionToHclTerraform(struct!.projection),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionRequestProjectionList",
    },
    query: {
      value: powerpackV2WidgetPointPlotDefinitionRequestQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionRequestQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetPointPlotDefinitionRequestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetPointPlotDefinitionRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._requestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestType = this._requestType;
    }
    if (this._projection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projection = this._projection?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinitionRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._requestType = undefined;
      this._projection.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._requestType = value.requestType;
      this._projection.internalValue = value.projection;
      this._query.internalValue = value.query;
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

  // request_type - computed: false, optional: false, required: true
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // projection - computed: false, optional: false, required: true
  private _projection = new PowerpackV2WidgetPointPlotDefinitionRequestProjectionOutputReference(this, "projection");
  public get projection() {
    return this._projection;
  }
  public putProjection(value: PowerpackV2WidgetPointPlotDefinitionRequestProjection) {
    this._projection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionInput() {
    return this._projection.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new PowerpackV2WidgetPointPlotDefinitionRequestQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackV2WidgetPointPlotDefinitionRequestQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class PowerpackV2WidgetPointPlotDefinitionRequestList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetPointPlotDefinitionRequest[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetPointPlotDefinitionRequestOutputReference {
    return new PowerpackV2WidgetPointPlotDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetPointPlotDefinitionTimeFixed {
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

export function powerpackV2WidgetPointPlotDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionTimeFixedOutputReference | PowerpackV2WidgetPointPlotDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetPointPlotDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionTimeFixedOutputReference | PowerpackV2WidgetPointPlotDefinitionTimeFixed): any {
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

export class PowerpackV2WidgetPointPlotDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetPointPlotDefinitionTimeFixed | undefined {
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

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinitionTimeFixed | undefined) {
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
export interface PowerpackV2WidgetPointPlotDefinitionTimeLive {
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

export function powerpackV2WidgetPointPlotDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionTimeLiveOutputReference | PowerpackV2WidgetPointPlotDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetPointPlotDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionTimeLiveOutputReference | PowerpackV2WidgetPointPlotDefinitionTimeLive): any {
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

export class PowerpackV2WidgetPointPlotDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetPointPlotDefinitionTimeLive | undefined {
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

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinitionTimeLive | undefined) {
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
export interface PowerpackV2WidgetPointPlotDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetPointPlotDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetPointPlotDefinitionTimeLive;
}

export function powerpackV2WidgetPointPlotDefinitionTimeToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionTimeOutputReference | PowerpackV2WidgetPointPlotDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetPointPlotDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetPointPlotDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetPointPlotDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionTimeOutputReference | PowerpackV2WidgetPointPlotDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetPointPlotDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetPointPlotDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetPointPlotDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetPointPlotDefinitionTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinitionTime | undefined) {
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
  private _fixed = new PowerpackV2WidgetPointPlotDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetPointPlotDefinitionTimeFixed) {
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
  private _live = new PowerpackV2WidgetPointPlotDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetPointPlotDefinitionTimeLive) {
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
export interface PowerpackV2WidgetPointPlotDefinitionYaxis {
  /**
  * Set to `true` to include zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#include_zero PowerpackV2#include_zero}
  */
  readonly includeZero?: boolean | cdktn.IResolvable;
  /**
  * The label of the axis to display on the graph. Only usable on Scatterplot Widgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#label PowerpackV2#label}
  */
  readonly label?: string;
  /**
  * Specifies the maximum numeric value to show on the axis. Defaults to `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#max PowerpackV2#max}
  */
  readonly max?: string;
  /**
  * Specifies the minimum numeric value to show on the axis. Defaults to `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#min PowerpackV2#min}
  */
  readonly min?: string;
  /**
  * Specifies the scale type. Possible values are `linear`, `log`, `sqrt`, and `pow##` (for example `pow2` or `pow0.5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#scale PowerpackV2#scale}
  */
  readonly scale?: string;
}

export function powerpackV2WidgetPointPlotDefinitionYaxisToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionYaxisOutputReference | PowerpackV2WidgetPointPlotDefinitionYaxis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_zero: cdktn.booleanToTerraform(struct!.includeZero),
    label: cdktn.stringToTerraform(struct!.label),
    max: cdktn.stringToTerraform(struct!.max),
    min: cdktn.stringToTerraform(struct!.min),
    scale: cdktn.stringToTerraform(struct!.scale),
  }
}


export function powerpackV2WidgetPointPlotDefinitionYaxisToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionYaxisOutputReference | PowerpackV2WidgetPointPlotDefinitionYaxis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_zero: {
      value: cdktn.booleanToHclTerraform(struct!.includeZero),
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
    max: {
      value: cdktn.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktn.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale: {
      value: cdktn.stringToHclTerraform(struct!.scale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetPointPlotDefinitionYaxisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetPointPlotDefinitionYaxis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeZero = this._includeZero;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._scale !== undefined) {
      hasAnyValues = true;
      internalValueResult.scale = this._scale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinitionYaxis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeZero = undefined;
      this._label = undefined;
      this._max = undefined;
      this._min = undefined;
      this._scale = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeZero = value.includeZero;
      this._label = value.label;
      this._max = value.max;
      this._min = value.min;
      this._scale = value.scale;
    }
  }

  // include_zero - computed: false, optional: true, required: false
  private _includeZero?: boolean | cdktn.IResolvable; 
  public get includeZero() {
    return this.getBooleanAttribute('include_zero');
  }
  public set includeZero(value: boolean | cdktn.IResolvable) {
    this._includeZero = value;
  }
  public resetIncludeZero() {
    this._includeZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeZeroInput() {
    return this._includeZero;
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

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // scale - computed: false, optional: true, required: false
  private _scale?: string; 
  public get scale() {
    return this.getStringAttribute('scale');
  }
  public set scale(value: string) {
    this._scale = value;
  }
  public resetScale() {
    this._scale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale;
  }
}
export interface PowerpackV2WidgetPointPlotDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
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
  readonly customLink?: PowerpackV2WidgetPointPlotDefinitionCustomLink[] | cdktn.IResolvable;
  /**
  * legend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#legend PowerpackV2#legend}
  */
  readonly legend?: PowerpackV2WidgetPointPlotDefinitionLegend;
  /**
  * marker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#marker PowerpackV2#marker}
  */
  readonly marker?: PowerpackV2WidgetPointPlotDefinitionMarker[] | cdktn.IResolvable;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#request PowerpackV2#request}
  */
  readonly request?: PowerpackV2WidgetPointPlotDefinitionRequest[] | cdktn.IResolvable;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetPointPlotDefinitionTime;
  /**
  * yaxis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#yaxis PowerpackV2#yaxis}
  */
  readonly yaxis?: PowerpackV2WidgetPointPlotDefinitionYaxis;
}

export function powerpackV2WidgetPointPlotDefinitionToTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionOutputReference | PowerpackV2WidgetPointPlotDefinition): any {
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
    custom_link: cdktn.listMapper(powerpackV2WidgetPointPlotDefinitionCustomLinkToTerraform, true)(struct!.customLink),
    legend: powerpackV2WidgetPointPlotDefinitionLegendToTerraform(struct!.legend),
    marker: cdktn.listMapper(powerpackV2WidgetPointPlotDefinitionMarkerToTerraform, true)(struct!.marker),
    request: cdktn.listMapper(powerpackV2WidgetPointPlotDefinitionRequestToTerraform, true)(struct!.request),
    time: powerpackV2WidgetPointPlotDefinitionTimeToTerraform(struct!.time),
    yaxis: powerpackV2WidgetPointPlotDefinitionYaxisToTerraform(struct!.yaxis),
  }
}


export function powerpackV2WidgetPointPlotDefinitionToHclTerraform(struct?: PowerpackV2WidgetPointPlotDefinitionOutputReference | PowerpackV2WidgetPointPlotDefinition): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetPointPlotDefinitionCustomLinkToHclTerraform, true)(struct!.customLink),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionCustomLinkList",
    },
    legend: {
      value: powerpackV2WidgetPointPlotDefinitionLegendToHclTerraform(struct!.legend),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionLegendList",
    },
    marker: {
      value: cdktn.listMapperHcl(powerpackV2WidgetPointPlotDefinitionMarkerToHclTerraform, true)(struct!.marker),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionMarkerList",
    },
    request: {
      value: cdktn.listMapperHcl(powerpackV2WidgetPointPlotDefinitionRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionRequestList",
    },
    time: {
      value: powerpackV2WidgetPointPlotDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionTimeList",
    },
    yaxis: {
      value: powerpackV2WidgetPointPlotDefinitionYaxisToHclTerraform(struct!.yaxis),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetPointPlotDefinitionYaxisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetPointPlotDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetPointPlotDefinition | undefined {
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
    if (this._legend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legend = this._legend?.internalValue;
    }
    if (this._marker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marker = this._marker?.internalValue;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    if (this._yaxis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaxis = this._yaxis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetPointPlotDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._hideIncompleteCostData = undefined;
      this._liveSpan = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._customLink.internalValue = undefined;
      this._legend.internalValue = undefined;
      this._marker.internalValue = undefined;
      this._request.internalValue = undefined;
      this._time.internalValue = undefined;
      this._yaxis.internalValue = undefined;
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
      this._legend.internalValue = value.legend;
      this._marker.internalValue = value.marker;
      this._request.internalValue = value.request;
      this._time.internalValue = value.time;
      this._yaxis.internalValue = value.yaxis;
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
  private _customLink = new PowerpackV2WidgetPointPlotDefinitionCustomLinkList(this, "custom_link", false);
  public get customLink() {
    return this._customLink;
  }
  public putCustomLink(value: PowerpackV2WidgetPointPlotDefinitionCustomLink[] | cdktn.IResolvable) {
    this._customLink.internalValue = value;
  }
  public resetCustomLink() {
    this._customLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLinkInput() {
    return this._customLink.internalValue;
  }

  // legend - computed: false, optional: true, required: false
  private _legend = new PowerpackV2WidgetPointPlotDefinitionLegendOutputReference(this, "legend");
  public get legend() {
    return this._legend;
  }
  public putLegend(value: PowerpackV2WidgetPointPlotDefinitionLegend) {
    this._legend.internalValue = value;
  }
  public resetLegend() {
    this._legend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendInput() {
    return this._legend.internalValue;
  }

  // marker - computed: false, optional: true, required: false
  private _marker = new PowerpackV2WidgetPointPlotDefinitionMarkerList(this, "marker", false);
  public get marker() {
    return this._marker;
  }
  public putMarker(value: PowerpackV2WidgetPointPlotDefinitionMarker[] | cdktn.IResolvable) {
    this._marker.internalValue = value;
  }
  public resetMarker() {
    this._marker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerInput() {
    return this._marker.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new PowerpackV2WidgetPointPlotDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: PowerpackV2WidgetPointPlotDefinitionRequest[] | cdktn.IResolvable) {
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
  private _time = new PowerpackV2WidgetPointPlotDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetPointPlotDefinitionTime) {
    this._time.internalValue = value;
  }
  public resetTime() {
    this._time.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time.internalValue;
  }

  // yaxis - computed: false, optional: true, required: false
  private _yaxis = new PowerpackV2WidgetPointPlotDefinitionYaxisOutputReference(this, "yaxis");
  public get yaxis() {
    return this._yaxis;
  }
  public putYaxis(value: PowerpackV2WidgetPointPlotDefinitionYaxis) {
    this._yaxis.internalValue = value;
  }
  public resetYaxis() {
    this._yaxis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yaxisInput() {
    return this._yaxis.internalValue;
  }
}
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframe {
  /**
  * Start of the custom comparison timeframe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#from PowerpackV2#from}
  */
  readonly from: number;
  /**
  * End of the custom comparison timeframe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#to PowerpackV2#to}
  */
  readonly to: number;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframeToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframeOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframeToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframeOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframe): any {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframe | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframe | undefined) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTime {
  /**
  * Type of comparison duration. Valid values are `previous_timeframe`, `custom_timeframe`, `previous_day`, `previous_week`, `previous_month`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#type PowerpackV2#type}
  */
  readonly type: string;
  /**
  * custom_timeframe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#custom_timeframe PowerpackV2#custom_timeframe}
  */
  readonly customTimeframe?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframe;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    custom_timeframe: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframeToTerraform(struct!.customTimeframe),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTime): any {
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
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframeToHclTerraform(struct!.customTimeframe),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTime | undefined) {
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
  private _customTimeframe = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframeOutputReference(this, "custom_timeframe");
  public get customTimeframe() {
    return this._customTimeframe;
  }
  public putCustomTimeframe(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeCustomTimeframe) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryCompute {
  /**
  * Aggregation type for the user journey funnel computation. Valid values are `cardinality`, `count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * Metric for the user journey funnel computation. Valid values are `__dd.conversion`, `__dd.conversion_rate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric: string;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryComputeToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryComputeOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    metric: cdktn.stringToTerraform(struct!.metric),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryComputeToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryComputeOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryCompute): any {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryCompute | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryCompute | undefined) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySort {
  /**
  * Aggregation used to sort the funnel groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * Metric to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Sort order for funnel groups. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySortToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySortOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySort): any {
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


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySortToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySortOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySort): any {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySort | undefined) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTarget {
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

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTargetToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTargetOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTarget): any {
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


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTargetToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTargetOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTarget): any {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTarget | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTarget | undefined) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBy {
  /**
  * Facet to group the user journey funnel by.
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
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySort;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#target PowerpackV2#target}
  */
  readonly target?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTarget;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    should_exclude_missing: cdktn.booleanToTerraform(struct!.shouldExcludeMissing),
    sort: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySortToTerraform(struct!.sort),
    target: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTargetToTerraform(struct!.target),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySortList",
    },
    target: {
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBySort) {
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
  private _target = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByTarget) {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByOutputReference {
    return new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccount {
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

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccountToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccountToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccount | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccountList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccountOutputReference {
    return new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegment {
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

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegmentToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    segment_id: cdktn.stringToTerraform(struct!.segmentId),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegmentToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegment | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegmentList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegmentOutputReference {
    return new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUser {
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

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUserToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUserToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUser | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUserList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUserOutputReference {
    return new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFilters {
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
  readonly account?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#segment PowerpackV2#segment}
  */
  readonly segment?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#user PowerpackV2#user}
  */
  readonly user?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    account: cdktn.listMapper(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccountToTerraform, true)(struct!.account),
    segment: cdktn.listMapper(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegmentToTerraform, true)(struct!.segment),
    user: cdktn.listMapper(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUserToTerraform, true)(struct!.user),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFilters): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccountList",
    },
    segment: {
      value: cdktn.listMapperHcl(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegmentList",
    },
    user: {
      value: cdktn.listMapperHcl(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFilters | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFilters | undefined) {
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
  private _account = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersAccount[] | cdktn.IResolvable) {
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
  private _segment = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersSegment[] | cdktn.IResolvable) {
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
  private _user = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersUser[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTarget {
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

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTargetToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTargetOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTarget): any {
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


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTargetToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTargetOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTarget): any {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTarget | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTarget | undefined) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilter {
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
  readonly target?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTarget;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
    target: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTargetToTerraform(struct!.target),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilter | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilter | cdktn.IResolvable | undefined) {
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
  private _target = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterTarget) {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilter[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterOutputReference {
    return new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFilters {
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
  readonly audienceFilters?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFilters;
  /**
  * graph_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#graph_filter PowerpackV2#graph_filter}
  */
  readonly graphFilter?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilter[] | cdktn.IResolvable;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_filter: cdktn.stringToTerraform(struct!.stringFilter),
    audience_filters: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersToTerraform(struct!.audienceFilters),
    graph_filter: cdktn.listMapper(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterToTerraform, true)(struct!.graphFilter),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFilters): any {
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
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersToHclTerraform(struct!.audienceFilters),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersList",
    },
    graph_filter: {
      value: cdktn.listMapperHcl(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterToHclTerraform, true)(struct!.graphFilter),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFilters | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFilters | undefined) {
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
  private _audienceFilters = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFiltersOutputReference(this, "audience_filters");
  public get audienceFilters() {
    return this._audienceFilters;
  }
  public putAudienceFilters(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersAudienceFilters) {
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
  private _graphFilter = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilterList(this, "graph_filter", false);
  public get graphFilter() {
    return this._graphFilter;
  }
  public putGraphFilter(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersGraphFilter[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeys {
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

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeysToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeysOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary: cdktn.stringToTerraform(struct!.primary),
    secondary: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.secondary),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeysToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeysOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeys): any {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeysOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeys | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeys | undefined) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearch {
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
  readonly filters?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFilters;
  /**
  * join_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#join_keys PowerpackV2#join_keys}
  */
  readonly joinKeys?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeys;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    node_objects: cdktn.stringToTerraform(struct!.nodeObjects),
    step_aliases: cdktn.stringToTerraform(struct!.stepAliases),
    filters: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersToTerraform(struct!.filters),
    join_keys: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeysToTerraform(struct!.joinKeys),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearch): any {
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
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersList",
    },
    join_keys: {
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeysToHclTerraform(struct!.joinKeys),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearch | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearch | undefined) {
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
  private _filters = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchFilters) {
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
  private _joinKeys = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeysOutputReference(this, "join_keys");
  public get joinKeys() {
    return this._joinKeys;
  }
  public putJoinKeys(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchJoinKeys) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuery {
  /**
  * Data source for Product Analytics funnel queries. Valid values are `product_analytics_journey`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Subquery identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#subquery_id PowerpackV2#subquery_id}
  */
  readonly subqueryId?: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#compute PowerpackV2#compute}
  */
  readonly compute?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryCompute;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBy[] | cdktn.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearch;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    subquery_id: cdktn.stringToTerraform(struct!.subqueryId),
    compute: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryComputeToTerraform(struct!.compute),
    group_by: cdktn.listMapper(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByToTerraform, true)(struct!.groupBy),
    search: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuery): any {
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
    subquery_id: {
      value: cdktn.stringToHclTerraform(struct!.subqueryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute: {
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByList",
    },
    search: {
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._subqueryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subqueryId = this._subqueryId;
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._subqueryId = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._subqueryId = value.subqueryId;
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

  // subquery_id - computed: false, optional: true, required: false
  private _subqueryId?: string; 
  public get subqueryId() {
    return this.getStringAttribute('subquery_id');
  }
  public set subqueryId(value: string) {
    this._subqueryId = value;
  }
  public resetSubqueryId() {
    this._subqueryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subqueryIdInput() {
    return this._subqueryId;
  }

  // compute - computed: false, optional: true, required: false
  private _compute = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryCompute) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryGroupBy[] | cdktn.IResolvable) {
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
  private _search = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuerySearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequest {
  /**
  * Segments to compare in the funnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#comparison_segments PowerpackV2#comparison_segments}
  */
  readonly comparisonSegments?: string[];
  /**
  * Request type for the Product Analytics funnel. Valid values are `user_journey_funnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#request_type PowerpackV2#request_type}
  */
  readonly requestType: string;
  /**
  * comparison_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#comparison_time PowerpackV2#comparison_time}
  */
  readonly comparisonTime?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTime;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuery;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_segments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.comparisonSegments),
    request_type: cdktn.stringToTerraform(struct!.requestType),
    comparison_time: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeToTerraform(struct!.comparisonTime),
    query: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_segments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.comparisonSegments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_type: {
      value: cdktn.stringToHclTerraform(struct!.requestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison_time: {
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeToHclTerraform(struct!.comparisonTime),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeList",
    },
    query: {
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonSegments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonSegments = this._comparisonSegments;
    }
    if (this._requestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestType = this._requestType;
    }
    if (this._comparisonTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonTime = this._comparisonTime?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonSegments = undefined;
      this._requestType = undefined;
      this._comparisonTime.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonSegments = value.comparisonSegments;
      this._requestType = value.requestType;
      this._comparisonTime.internalValue = value.comparisonTime;
      this._query.internalValue = value.query;
    }
  }

  // comparison_segments - computed: false, optional: true, required: false
  private _comparisonSegments?: string[]; 
  public get comparisonSegments() {
    return this.getListAttribute('comparison_segments');
  }
  public set comparisonSegments(value: string[]) {
    this._comparisonSegments = value;
  }
  public resetComparisonSegments() {
    this._comparisonSegments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonSegmentsInput() {
    return this._comparisonSegments;
  }

  // request_type - computed: false, optional: false, required: true
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // comparison_time - computed: false, optional: true, required: false
  private _comparisonTime = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTimeOutputReference(this, "comparison_time");
  public get comparisonTime() {
    return this._comparisonTime;
  }
  public putComparisonTime(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestComparisonTime) {
    this._comparisonTime.internalValue = value;
  }
  public resetComparisonTime() {
    this._comparisonTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonTimeInput() {
    return this._comparisonTime.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequest[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestOutputReference {
    return new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixed {
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

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixedOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixedOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixed): any {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixed | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixed | undefined) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLive {
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

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLiveOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLiveOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLive): any {
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

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLive | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLive | undefined) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLive;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinitionTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTime | undefined) {
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
  private _fixed = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeFixed) {
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
  private _live = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeLive) {
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
export interface PowerpackV2WidgetProductAnalyticsFunnelDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
  /**
  * Display mode for grouped funnel results. Valid values are `stacked`, `side_by_side`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#grouped_display PowerpackV2#grouped_display}
  */
  readonly groupedDisplay?: string;
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
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#request PowerpackV2#request}
  */
  readonly request: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequest[] | cdktn.IResolvable;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTime;
}

export function powerpackV2WidgetProductAnalyticsFunnelDefinitionToTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    grouped_display: cdktn.stringToTerraform(struct!.groupedDisplay),
    hide_incomplete_cost_data: cdktn.booleanToTerraform(struct!.hideIncompleteCostData),
    live_span: cdktn.stringToTerraform(struct!.liveSpan),
    title: cdktn.stringToTerraform(struct!.title),
    title_align: cdktn.stringToTerraform(struct!.titleAlign),
    title_size: cdktn.stringToTerraform(struct!.titleSize),
    request: cdktn.listMapper(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestToTerraform, true)(struct!.request),
    time: powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeToTerraform(struct!.time),
  }
}


export function powerpackV2WidgetProductAnalyticsFunnelDefinitionToHclTerraform(struct?: PowerpackV2WidgetProductAnalyticsFunnelDefinitionOutputReference | PowerpackV2WidgetProductAnalyticsFunnelDefinition): any {
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
    grouped_display: {
      value: cdktn.stringToHclTerraform(struct!.groupedDisplay),
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
    request: {
      value: cdktn.listMapperHcl(powerpackV2WidgetProductAnalyticsFunnelDefinitionRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestList",
    },
    time: {
      value: powerpackV2WidgetProductAnalyticsFunnelDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetProductAnalyticsFunnelDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetProductAnalyticsFunnelDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groupedDisplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupedDisplay = this._groupedDisplay;
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

  public set internalValue(value: PowerpackV2WidgetProductAnalyticsFunnelDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._groupedDisplay = undefined;
      this._hideIncompleteCostData = undefined;
      this._liveSpan = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._request.internalValue = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._groupedDisplay = value.groupedDisplay;
      this._hideIncompleteCostData = value.hideIncompleteCostData;
      this._liveSpan = value.liveSpan;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
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

  // grouped_display - computed: false, optional: true, required: false
  private _groupedDisplay?: string; 
  public get groupedDisplay() {
    return this.getStringAttribute('grouped_display');
  }
  public set groupedDisplay(value: string) {
    this._groupedDisplay = value;
  }
  public resetGroupedDisplay() {
    this._groupedDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupedDisplayInput() {
    return this._groupedDisplay;
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

  // request - computed: false, optional: false, required: true
  private _request = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionRequest[] | cdktn.IResolvable) {
    this._request.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // time - computed: false, optional: true, required: false
  private _time = new PowerpackV2WidgetProductAnalyticsFunnelDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetProductAnalyticsFunnelDefinitionTime) {
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
export interface PowerpackV2WidgetQueryTableDefinitionCustomLink {
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

export function powerpackV2WidgetQueryTableDefinitionCustomLinkToTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionCustomLink | cdktn.IResolvable): any {
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


export function powerpackV2WidgetQueryTableDefinitionCustomLinkToHclTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionCustomLink | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetQueryTableDefinitionCustomLinkOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetQueryTableDefinitionCustomLink | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetQueryTableDefinitionCustomLink | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetQueryTableDefinitionCustomLinkList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetQueryTableDefinitionCustomLink[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetQueryTableDefinitionCustomLinkOutputReference {
    return new PowerpackV2WidgetQueryTableDefinitionCustomLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQuery {
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

export function powerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQueryOutputReference | PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQuery): any {
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


export function powerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQueryOutputReference | PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQuery): any {
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

export class PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQuery | undefined) {
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
export interface PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery {
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

export function powerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryOutputReference | PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery): any {
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


export function powerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryOutputReference | PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery): any {
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

export class PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery | undefined) {
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
export interface PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBy {
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
  readonly sortQuery?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery;
}

export function powerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupByToTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery) {
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

export class PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupByOutputReference {
    return new PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiCompute {
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

export function powerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetQueryTableDefinitionRequestApmQuery {
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
  readonly computeQuery?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetQueryTableDefinitionRequestApmQueryToTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryOutputReference | PowerpackV2WidgetQueryTableDefinitionRequestApmQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetQueryTableDefinitionRequestApmQueryToHclTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryOutputReference | PowerpackV2WidgetQueryTableDefinitionRequestApmQuery): any {
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
      value: powerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetQueryTableDefinitionRequestApmQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetQueryTableDefinitionRequestApmQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetQueryTableDefinitionRequestApmQuery | undefined) {
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
  private _computeQuery = new PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryComputeQuery) {
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
  private _groupBy = new PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetQueryTableDefinitionRequestApmQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumns {
  /**
  * A user-assigned alias for the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#alias PowerpackV2#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. Valid values are `number`, `bar`, `trend`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#cell_display_mode PowerpackV2#cell_display_mode}
  */
  readonly cellDisplayMode?: string;
  /**
  * The column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumnsToTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    cell_display_mode: cdktn.stringToTerraform(struct!.cellDisplayMode),
    name: cdktn.stringToTerraform(struct!.name),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumnsToHclTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumns | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumns | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._cellDisplayMode = undefined;
      this._name = undefined;
      this._order = undefined;
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
      this._name = value.name;
      this._order = value.order;
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

export class PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumnsList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumns[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumnsOutputReference {
    return new PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQuery {
  /**
  * The environment name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#env PowerpackV2#env}
  */
  readonly env: string;
  /**
  * The operation name associated with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * The organization's host group name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#primary_tag PowerpackV2#primary_tag}
  */
  readonly primaryTag: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#resource PowerpackV2#resource}
  */
  readonly resource?: string;
  /**
  * The level of detail for the request. Valid values are `service`, `resource`, `span`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#row_type PowerpackV2#row_type}
  */
  readonly rowType: string;
  /**
  * The service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#service PowerpackV2#service}
  */
  readonly service: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/powerpack_v2#columns PowerpackV2#columns}
  */
  readonly columns?: PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumns[] | cdktn.IResolvable;
}

export function powerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryToTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryOutputReference | PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    env: cdktn.stringToTerraform(struct!.env),
    name: cdktn.stringToTerraform(struct!.name),
    primary_tag: cdktn.stringToTerraform(struct!.primaryTag),
    resource: cdktn.stringToTerraform(struct!.resource),
    row_type: cdktn.stringToTerraform(struct!.rowType),
    service: cdktn.stringToTerraform(struct!.service),
    columns: cdktn.listMapper(powerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumnsToTerraform, true)(struct!.columns),
  }
}


export function powerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryToHclTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryOutputReference | PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    env: {
      value: cdktn.stringToHclTerraform(struct!.env),
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
    primary_tag: {
      value: cdktn.stringToHclTerraform(struct!.primaryTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktn.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_type: {
      value: cdktn.stringToHclTerraform(struct!.rowType),
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
    columns: {
      value: cdktn.listMapperHcl(powerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTag = this._primaryTag;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._rowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowType = this._rowType;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._env = undefined;
      this._name = undefined;
      this._primaryTag = undefined;
      this._resource = undefined;
      this._rowType = undefined;
      this._service = undefined;
      this._columns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._env = value.env;
      this._name = value.name;
      this._primaryTag = value.primaryTag;
      this._resource = value.resource;
      this._rowType = value.rowType;
      this._service = value.service;
      this._columns.internalValue = value.columns;
    }
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

  // primary_tag - computed: false, optional: false, required: true
  private _primaryTag?: string; 
  public get primaryTag() {
    return this.getStringAttribute('primary_tag');
  }
  public set primaryTag(value: string) {
    this._primaryTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagInput() {
    return this._primaryTag;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // row_type - computed: false, optional: false, required: true
  private _rowType?: string; 
  public get rowType() {
    return this.getStringAttribute('row_type');
  }
  public set rowType(value: string) {
    this._rowType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowTypeInput() {
    return this._rowType;
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

  // columns - computed: false, optional: true, required: false
  private _columns = new PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: PowerpackV2WidgetQueryTableDefinitionRequestApmStatsQueryColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}
export interface PowerpackV2WidgetQueryTableDefinitionRequestConditionalFormats {
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

export function powerpackV2WidgetQueryTableDefinitionRequestConditionalFormatsToTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestConditionalFormats | cdktn.IResolvable): any {
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


export function powerpackV2WidgetQueryTableDefinitionRequestConditionalFormatsToHclTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestConditionalFormats | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetQueryTableDefinitionRequestConditionalFormatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetQueryTableDefinitionRequestConditionalFormats | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetQueryTableDefinitionRequestConditionalFormats | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetQueryTableDefinitionRequestConditionalFormatsList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetQueryTableDefinitionRequestConditionalFormats[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetQueryTableDefinitionRequestConditionalFormatsOutputReference {
    return new PowerpackV2WidgetQueryTableDefinitionRequestConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetQueryTableDefinitionRequestFormulaCellDisplayModeOptions {
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

export function powerpackV2WidgetQueryTableDefinitionRequestFormulaCellDisplayModeOptionsToTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestFormulaCellDisplayModeOptionsOutputReference | PowerpackV2WidgetQueryTableDefinitionRequestFormulaCellDisplayModeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trend_type: cdktn.stringToTerraform(struct!.trendType),
    y_scale: cdktn.stringToTerraform(struct!.yScale),
  }
}


export function powerpackV2WidgetQueryTableDefinitionRequestFormulaCellDisplayModeOptionsToHclTerraform(struct?: PowerpackV2WidgetQueryTableDefinitionRequestFormulaCellDisplayModeOptionsOutputReference | PowerpackV2WidgetQueryTableDefinitionRequestFormulaCellDisplayModeOptions): any {
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

export class PowerpackV2WidgetQueryTableDefinitionRequestFormulaCellDisplayModeOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetQueryTableDefinitionRequestFormulaCellDisplayModeOptions | undefined {
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

  public set internalValue(value: PowerpackV2WidgetQueryTableDefinitionRequestFormulaCellDisplayModeOptions | undefined) {
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
